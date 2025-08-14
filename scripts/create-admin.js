import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
import fs from 'fs'
import path from 'path'

// Load environment variables from .env.local
const envPath = path.resolve(process.cwd(), '.env')
if (fs.existsSync(envPath)) {
  config({ path: envPath })
} else {
  console.error('No .env.local file found')
  process.exit(1)
}

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function createAdminUser() {
  // You would replace these values with your actual admin email and password
  const adminEmail = process.argv[2]
  const adminPassword = process.argv[3]

  if (!adminEmail || !adminPassword) {
    console.error('Usage: node scripts/create-admin.js <email> <password>')
    process.exit(1)
  }

  try {
    // Create user with Supabase Auth
    const { data, error } = await supabase.auth.admin.createUser({
      email: adminEmail,
      password: adminPassword,
      email_confirm: true, 
      user_metadata: { role: 'admin' },
    })

    if (error) {
      throw error
    }

    console.log('Admin user created successfully:')
    console.log(`Email: ${adminEmail}`)
    console.log('(Password is not displayed for security reasons)')
    console.log(`User ID: ${data.user.id}`)
  } catch (error) {
    console.error('Error creating admin user:', error)
    process.exit(1)
  }
}

createAdminUser()
