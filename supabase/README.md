# HackJos Supabase Integration

This guide explains how to set up Supabase for form submission features and admin dashboard for the HackJos website.

## Setup Instructions

### 1. Create Supabase Account and Project

1. Go to [Supabase](https://supabase.com) and sign up for an account
2. Create a new project
3. Note your project URL and API keys

### 2. Database Setup

1. In your Supabase project, go to the SQL Editor
2. Copy and run the SQL script from `supabase/create_tables.sql` to create the necessary tables:
   - `contact_submissions` - For the Contact form
   - `participant_applications` - For the Apply form
   - `attendee_registrations` - For the Register form
   - `admin_users` - For tracking admin permissions

### 3. Environment Variables

1. Copy `example.env.local` to `.env.local`
2. Fill in your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-from-api-settings
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-from-api-settings
   ```

### 4. Create Admin User

1. Run the admin user creation script:
   ```
   node scripts/create-admin.js your-admin@email.com your-secure-password
   ```
2. This will create an admin user in Supabase Auth and add them to the admin_users table

### 5. Run the Application

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. The forms should now be connected to your Supabase backend

## Implementation Details

### Forms Implemented

1. **Contact Form** (`/components/ContactForm.tsx`)
   - Basic contact form for general inquiries
   - Stores data in `contact_submissions` table

2. **Apply Form** (`/apply/page.tsx`)
   - Form for hackathon participants to apply
   - Collects participant information, skills, team details, and project ideas
   - Stores data in `participant_applications` table

3. **Registration Form** (`/register/page.tsx`)
   - Form for summit attendees to register
   - Collects attendee information and professional details
   - Stores data in `attendee_registrations` table

### Admin Dashboard

The admin dashboard provides a secure way to view and manage form submissions:

1. **Authentication**
   - Secure login at `/admin`
   - Protected routes using middleware
   - Only users with admin role can access the dashboard

2. **Dashboard Features** (`/admin/dashboard`)
   - View all hackathon applicants
   - View all event attendees
   - View all contact form submissions
   - Data presented in tabular format with filtering options
   - Detailed view for each submission

3. **Implementation Files**
   - `/app/admin/page.tsx` - Login page
   - `/app/admin/dashboard/page.tsx` - Admin dashboard
   - `/app/middleware.ts` - Route protection
   - `/app/context/AuthContext.tsx` - Authentication context
   - `/scripts/create-admin.js` - Admin user creation utility

### Form Implementation Approaches

Each form is implemented using API routes for backend communication:

1. **Client-side + API Route Pattern**:
   - Form state managed with React useState hooks
   - Form submission handled via API routes
   - API routes connect to Supabase using service role key for better security
   - Implementation files:
     - Forms: `app/components/ContactForm.tsx`, `app/apply/page.tsx`, `app/register/page.tsx`
     - API Routes: `app/api/contact/route.ts`, `app/api/apply/route.ts`, `app/api/register/route.ts`

2. **Alternative Server Actions Pattern** (Contact form only):
   - Server-side actions using Next.js Server Actions feature
   - Implementation:
     - `app/components/ContactFormWithServerAction.tsx`
     - `app/actions/contactActions.ts`

## Security Considerations

- All tables are configured with Row Level Security (RLS)
- Anyone can submit forms, but only authenticated users can read submissions
- Service role key is used for API routes and never exposed to the client
- Admin dashboard is protected by authentication
- Admin roles are tracked in a separate table with appropriate permissions
- Password-based authentication with email and password
- Session-based protection for admin routes using middleware

## Accessing the Admin Dashboard

1. Create an admin user using the script described above
2. Navigate to `/admin` in your browser
3. Log in with your admin email and password
4. You'll be redirected to the dashboard at `/admin/dashboard`
5. From there, you can view and manage all submissions
