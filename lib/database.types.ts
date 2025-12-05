export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      programs: {
        Row: {
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
        Insert: {
          id?: string;
          name: string;
          description: string;
          website: string;
          city: string;
          state: string;
          career_path: string;
          program_type: string;
          duration: string;
          cost_estimate?: string | null;
          credentials: string;
          accreditation?: string | null;
          is_online?: boolean;
          is_hybrid?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          website?: string;
          city?: string;
          state?: string;
          career_path?: string;
          program_type?: string;
          duration?: string;
          cost_estimate?: string | null;
          credentials?: string;
          accreditation?: string | null;
          is_online?: boolean;
          is_hybrid?: boolean;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
