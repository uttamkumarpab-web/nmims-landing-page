-- Supabase table for the NMIMS landing project.
-- Run in the Supabase SQL editor (same project as onlinemba, same .env).
--
-- If the table was already created with the old `work_experience` column,
-- just run the ALTER TABLE at the bottom instead of the full CREATE.

create table if not exists public.nmims_landing_form (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),

  first_name text,
  last_name text,
  email text,
  mobile text,
  education_level text,
  admission_timeline text,
  location text,

  cta_source text,
  medium text,

  utm_source text,
  utm_medium text,
  utm_content text,
  utm_campaign text,
  utm_id text,
  utm_keyword text,
  utm_term text,
  utm_adgroup text,

  gclid text,
  fbclid text,
  gad_source text,
  msclkid text,

  landing_page text,
  page_url text,
  referrer text,
  user_agent text,

  ga_cookie text,
  fbc_cookie text,
  fbp_cookie text,
  gcl_aw_cookie text,
  ei_sid_cookie text,

  event text default 'form_submit',
  event_time bigint,
  ip_address text
);

-- Optional: case-insensitive unique email to enforce one enquiry per email
-- (the API also checks this in code and returns 409 on duplicates).
-- create unique index if not exists nmims_landing_form_email_uidx
--   on public.nmims_landing_form (lower(email));

-- ─────────────────────────────────────────────────────────────
-- UPDATE for the field rename (Work Experience → Admission Timeline):
-- run this if the table already exists with `work_experience`.
-- It renames the column in place, so no existing rows are lost.
-- ─────────────────────────────────────────────────────────────
-- alter table public.nmims_landing_form
--   rename column work_experience to admission_timeline;
