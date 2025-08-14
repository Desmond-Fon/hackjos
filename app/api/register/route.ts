import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { 
      fullName, 
      email, 
      phoneNumber, 
      category, 
      organization, 
      profession 
    } = body;
    
    if (!fullName || !email || !phoneNumber || !category || !organization || !profession) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const submissionData = {
      full_name: fullName,
      email,
      phone_number: phoneNumber,
      category,
      organization,
      profession,
      created_at: new Date().toISOString(),
    };
    
    const { data, error } = await supabase
      .from('attendee_registrations')
      .insert(submissionData)
      .select();
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit registration' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Registration submitted successfully',
      data
    });
    
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
