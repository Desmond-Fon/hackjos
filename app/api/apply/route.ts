import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Use service role key for server-side operations
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Extract form data
    const { 
      fullName, 
      email, 
      phoneNumber, 
      category, 
      skill, 
      hasTeam, 
      teamMembers, 
      ideaDescription 
    } = body;
    
    if (!fullName || !email || !phoneNumber || !category || !skill || hasTeam === undefined || !ideaDescription) {
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
      skill,
      has_team: hasTeam,
      team_members: teamMembers || null,
      idea_description: ideaDescription,
      created_at: new Date().toISOString(),
    };
    
    const { data, error } = await supabase
      .from('participant_applications')
      .insert(submissionData)
      .select();
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully',
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
