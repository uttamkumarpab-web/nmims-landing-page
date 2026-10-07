import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient | null = null;

const LEAD_TABLE = "nmims_landing_form";

export function isDbConfigured() {
  return Boolean(
    process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}

function getClient() {
  if (!supabase) {
    supabase = createClient(
      process.env.SUPABASE_URL as string,
      process.env.SUPABASE_SERVICE_ROLE_KEY as string,
      { auth: { persistSession: false } }
    );
  }
  return supabase;
}

export type LeadRecord = {
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  mobile: string | null;
  education_level: string | null;
  admission_timeline: string | null;
  location: string | null;
  cta_source: string | null;
  medium: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_content: string | null;
  utm_campaign: string | null;
  utm_id: string | null;
  utm_keyword: string | null;
  utm_term: string | null;
  utm_adgroup: string | null;
  gclid: string | null;
  fbclid: string | null;
  gad_source: string | null;
  msclkid: string | null;
  landing_page: string | null;
  page_url: string | null;
  referrer: string | null;
  user_agent: string | null;
  ga_cookie: string | null;
  fbc_cookie: string | null;
  fbp_cookie: string | null;
  gcl_aw_cookie: string | null;
  ei_sid_cookie: string | null;
  event: string | null;
  event_time: number | null;
  ip_address: string | null;
};

export async function insertLead(lead: LeadRecord) {
  const { data, error } = await getClient()
    .from(LEAD_TABLE)
    .insert(lead)
    .select("id, created_at")
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function findLeadByEmail(email: string) {
  const { data } = await getClient()
    .from(LEAD_TABLE)
    .select("id")
    .ilike("email", email)
    .limit(1)
    .maybeSingle();

  return data ?? null;
}
