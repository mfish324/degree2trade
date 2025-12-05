-- Degree2Trade Programs Database Schema
-- Run this in Supabase SQL Editor (SQL Editor > New Query)

-- Create the programs table
CREATE TABLE IF NOT EXISTS programs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  website TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  career_path TEXT NOT NULL,
  program_type TEXT NOT NULL,
  duration TEXT NOT NULL,
  cost_estimate TEXT,
  credentials TEXT NOT NULL,
  accreditation TEXT,
  is_online BOOLEAN DEFAULT FALSE,
  is_hybrid BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_programs_career_path ON programs(career_path);
CREATE INDEX IF NOT EXISTS idx_programs_state ON programs(state);
CREATE INDEX IF NOT EXISTS idx_programs_program_type ON programs(program_type);

-- Enable Row Level Security (RLS)
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON programs
  FOR SELECT
  USING (true);

-- Grant permissions
GRANT SELECT ON programs TO anon;
GRANT SELECT ON programs TO authenticated;
