# Supabase leads table

For `/get-started` form submissions to be stored, create a `leads` table in your Supabase project.

## Environment variables

- `NEXT_PUBLIC_SUPABASE_URL` — your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — your Supabase anon/public key

## Table schema (SQL)

```sql
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  company_name text not null,
  email text not null,
  phone text,
  city_country text,
  industry text,
  company_size text,
  primary_objective jsonb,
  estimated_budget text,
  timeline text,
  message text,
  created_at timestamptz default now()
);

-- Optional: enable RLS and allow insert for anon (or use a service role on the server)
alter table public.leads enable row level security;
create policy "Allow insert for anon" on public.leads for insert to anon with check (true);
```

If the table or env vars are not set, the API still returns success but logs a warning and does not persist (see `app/api/leads/route.ts`).
