import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Program types for the application
export type Program = {
  id: string;
  name: string;
  description: string;
  website: string;
  city: string;
  state: string;
  career_path: string;
  program_type: string;
  duration: string;
  cost_estimate: string | null;
  credentials: string;
  accreditation: string | null;
  is_online: boolean;
  is_hybrid: boolean;
  created_at: string;
};

export type CareerPathFilter =
  | "all"
  | "electrician"
  | "nurse"
  | "emt"
  | "hvac"
  | "plumber"
  | "firefighter"
  | "solar"
  | "welder"
  | "police"
  | "medicalTech"
  | "religiousVocations"
  | "military";

export type ProgramTypeFilter =
  | "all"
  | "apprenticeship"
  | "trade_school"
  | "community_college"
  | "accelerated_degree"
  | "academy"
  | "seminary"
  | "bible_college"
  | "ministry_training"
  | "certification";
