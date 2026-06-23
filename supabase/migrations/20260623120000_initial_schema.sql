create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.booking_requests (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  full_name text not null,
  email text not null,
  phone text not null,
  nationality text not null default '',
  airline text not null,
  flight_number text not null,
  arrival_airport text not null,
  departure_airport text not null,
  travel_date date not null,
  travel_time time not null,
  service_type text not null,
  additional_notes text not null default '',
  source_path text not null default '/',
  referrer text not null default '',
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null default '',
  subject text not null default '',
  message text not null,
  source_path text not null default '/',
  referrer text not null default '',
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.corporate_inquiries (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  full_name text not null,
  email text not null,
  phone text not null,
  requirements text not null default '',
  source_path text not null default '/',
  referrer text not null default '',
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.newsletter_subscriptions (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source_path text not null default '/',
  referrer text not null default '',
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.service_pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  eyebrow text not null default '',
  summary text not null default '',
  hero_image text not null default '',
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.coverage_airports (
  id uuid primary key default gen_random_uuid(),
  country text not null,
  airport_code text not null unique,
  airport_name text not null,
  city text not null,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  role text not null,
  organization text not null default '',
  quote text not null,
  sort_order integer not null default 0,
  is_featured boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  category text not null,
  title text not null,
  summary text not null default '',
  cover_image text not null default '',
  published_at timestamptz,
  is_published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

do $$
begin
  if not exists (select 1 from pg_trigger where tgname = 'booking_requests_set_updated_at') then
    create trigger booking_requests_set_updated_at before update on public.booking_requests
      for each row execute function public.set_updated_at();
  end if;

  if not exists (select 1 from pg_trigger where tgname = 'contact_inquiries_set_updated_at') then
    create trigger contact_inquiries_set_updated_at before update on public.contact_inquiries
      for each row execute function public.set_updated_at();
  end if;

  if not exists (select 1 from pg_trigger where tgname = 'corporate_inquiries_set_updated_at') then
    create trigger corporate_inquiries_set_updated_at before update on public.corporate_inquiries
      for each row execute function public.set_updated_at();
  end if;

  if not exists (select 1 from pg_trigger where tgname = 'newsletter_subscriptions_set_updated_at') then
    create trigger newsletter_subscriptions_set_updated_at before update on public.newsletter_subscriptions
      for each row execute function public.set_updated_at();
  end if;

  if not exists (select 1 from pg_trigger where tgname = 'service_pages_set_updated_at') then
    create trigger service_pages_set_updated_at before update on public.service_pages
      for each row execute function public.set_updated_at();
  end if;

  if not exists (select 1 from pg_trigger where tgname = 'coverage_airports_set_updated_at') then
    create trigger coverage_airports_set_updated_at before update on public.coverage_airports
      for each row execute function public.set_updated_at();
  end if;

  if not exists (select 1 from pg_trigger where tgname = 'testimonials_set_updated_at') then
    create trigger testimonials_set_updated_at before update on public.testimonials
      for each row execute function public.set_updated_at();
  end if;

  if not exists (select 1 from pg_trigger where tgname = 'blog_posts_set_updated_at') then
    create trigger blog_posts_set_updated_at before update on public.blog_posts
      for each row execute function public.set_updated_at();
  end if;
end
$$;

alter table public.booking_requests enable row level security;
alter table public.contact_inquiries enable row level security;
alter table public.corporate_inquiries enable row level security;
alter table public.newsletter_subscriptions enable row level security;
alter table public.service_pages enable row level security;
alter table public.coverage_airports enable row level security;
alter table public.testimonials enable row level security;
alter table public.blog_posts enable row level security;

create policy "Public can read active service pages"
  on public.service_pages
  for select
  to anon, authenticated
  using (is_active = true);

create policy "Public can read active airports"
  on public.coverage_airports
  for select
  to anon, authenticated
  using (is_active = true);

create policy "Public can read featured testimonials"
  on public.testimonials
  for select
  to anon, authenticated
  using (is_featured = true);

create policy "Public can read published blog posts"
  on public.blog_posts
  for select
  to anon, authenticated
  using (is_published = true);