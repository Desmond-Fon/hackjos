import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

// Helper function to get server-side Supabase client
export async function createServerSupabaseClient() {
  const cookieStore = await cookies();
  
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name:string) {
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name, options) {
          cookieStore.delete({ name, ...options });
        },
      },
    }
  );
}

// Function to submit contact form from server actions
export async function submitContactForm(formData: {
  fullName: string;
  email: string;
  message: string;
}) {
  'use server';
  
  const supabase = await createServerSupabaseClient();
  
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert({
        ...formData,
        createdAt: new Date().toISOString(),
      })
      .select();
      
    if (error) {
      throw error;
    }
    
    return { success: true, data };
  } catch (error: any) {
    console.error('Error submitting form:', error.message);
    return { 
      success: false, 
      error: error.message || 'An unexpected error occurred' 
    };
  }
}
