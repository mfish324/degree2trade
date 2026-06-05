-- Lead capture table for the email/roadmap signup.
-- Run this once in the Supabase SQL editor (Dashboard → SQL → New query).
--
-- Security model: anonymous visitors can INSERT a lead, but cannot SELECT/read
-- the table (no select policy). You read leads from the Supabase dashboard
-- (Table editor) or via a service-role key — never exposed to the browser.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text,                       -- where the signup happened, e.g. 'results'
  context jsonb,                     -- optional extras, e.g. { "major": "Biology", "topCareer": "nurse" }
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

-- Allow anonymous (and authenticated) visitors to insert only.
drop policy if exists "anyone can insert a lead" on public.leads;
create policy "anyone can insert a lead"
  on public.leads
  for insert
  to anon, authenticated
  with check (true);

-- No SELECT/UPDATE/DELETE policy => the browser cannot read or modify leads.
