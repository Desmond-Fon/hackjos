-- This SQL script creates the necessary tables in your Supabase PostgreSQL database
-- You can run this in the Supabase SQL Editor

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Add constraints
  CONSTRAINT email_format_contact CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create participant_applications table for the Apply page
CREATE TABLE IF NOT EXISTS participant_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  category TEXT NOT NULL,
  skill TEXT NOT NULL,
  has_team BOOLEAN NOT NULL,
  team_members TEXT,
  idea_description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Add constraints
  CONSTRAINT email_format_apply CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create attendee_registrations table for the Register page
CREATE TABLE IF NOT EXISTS attendee_registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  category TEXT NOT NULL,
  organization TEXT NOT NULL,
  profession TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Add constraints
  CONSTRAINT email_format_register CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Add row level security policies for all tables
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE participant_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendee_registrations ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert but restrict reading to authenticated users (contact form)
CREATE POLICY "Allow public inserts to contact" ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow admin read contact" ON contact_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Policy to allow anyone to insert but restrict reading to authenticated users (apply form)
CREATE POLICY "Allow public inserts to applications" ON participant_applications
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow admin read applications" ON participant_applications
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Policy to allow anyone to insert but restrict reading to authenticated users (register form)
CREATE POLICY "Allow public inserts to registrations" ON attendee_registrations
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow admin read registrations" ON attendee_registrations
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Add comments to tables
COMMENT ON TABLE contact_submissions IS 'Contact form submissions from the HackJos website';
COMMENT ON TABLE participant_applications IS 'Participant applications for the HackJos hackathon';
COMMENT ON TABLE attendee_registrations IS 'Attendee registrations for the HackJos innovation summit';

-- Create indexes on created_at for faster sorting
CREATE INDEX contact_submissions_created_at_idx ON contact_submissions (created_at DESC);
CREATE INDEX participant_applications_created_at_idx ON participant_applications (created_at DESC);
CREATE INDEX attendee_registrations_created_at_idx ON attendee_registrations (created_at DESC);

-- Create admin_users table to track admin permissions
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on admin_users
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Only allow users to read their own admin record
CREATE POLICY "Allow users to read own admin record" ON admin_users
  FOR SELECT
  USING (auth.uid() = id);

-- Create a function to handle new user signups
CREATE OR REPLACE FUNCTION public.handle_new_admin()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.raw_user_meta_data->>'role' = 'admin' THEN
    INSERT INTO public.admin_users (id, email, role)
    VALUES (NEW.id, NEW.email, 'admin');
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a trigger to automatically add admin users
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_admin();
