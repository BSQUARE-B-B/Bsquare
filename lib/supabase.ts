import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = url && anonKey ? createClient(url, anonKey) : null;

export type Lead = {
  id?: string;
  full_name: string;
  company_name: string;
  email: string;
  phone?: string;
  city_country?: string;
  industry?: string;
  company_size?: string;
  primary_objective?: string[];
  estimated_budget?: string;
  timeline?: string;
  message?: string;
  created_at?: string;
};
