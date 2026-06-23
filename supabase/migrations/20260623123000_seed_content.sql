insert into public.service_pages (slug, title, eyebrow, summary, hero_image, sort_order, is_active)
values
  ('meet-and-assist', 'Airport Meet & Assist', 'Airport Meet & Assist', 'Arrival, departure and transit support with personal protocol officers.', '', 1, true),
  ('concierge', 'Concierge Services', 'Concierge Services', 'Reservations, bookings, lifestyle and personal assistance.', '', 2, true),
  ('chauffeur', 'Chauffeur & Transfers', 'Chauffeur & Transfers', 'Executive vehicles, professional chauffeurs, on-demand luxury.', '', 3, true),
  ('corporate', 'Corporate Services', 'Corporate Services', 'Account-managed travel programs for organisations and embassies.', '', 4, true),
  ('services', 'Airport Protocol', 'Airport Protocol', 'VIP lanes, lounge access and dedicated coordinators.', '', 5, true)
on conflict (slug) do update set
  title = excluded.title,
  eyebrow = excluded.eyebrow,
  summary = excluded.summary,
  hero_image = excluded.hero_image,
  sort_order = excluded.sort_order,
  is_active = excluded.is_active,
  updated_at = now();

insert into public.coverage_airports (country, airport_code, airport_name, city, sort_order, is_active)
values
  ('Kenya', 'NBO', 'Jomo Kenyatta International Airport', 'Nairobi', 1, true),
  ('Ghana', 'ACC', 'Kotoka International Airport', 'Accra', 2, true),
  ('Nigeria', 'LOS', 'Murtala Muhammed International Airport', 'Lagos', 3, true)
on conflict (airport_code) do update set
  country = excluded.country,
  airport_name = excluded.airport_name,
  city = excluded.city,
  sort_order = excluded.sort_order,
  is_active = excluded.is_active,
  updated_at = now();

insert into public.testimonials (full_name, role, organization, quote, sort_order, is_featured)
values
  ('H.E. Aminata Diallo', 'Diplomatic Mission', '', 'From the moment I landed in Nairobi until my departure, every detail was handled with grace. Truly world-class service.', 1, true),
  ('James Okafor', 'CEO', 'Meridian Capital', 'Altitude has become our standard for executive travel across West Africa. Reliability and discretion in equal measure.', 2, true),
  ('Sofia Rahman', 'International Counsel', '', 'I have used premium services in 40+ countries. ACS is among the very best — unobtrusive, exact, exceptional.', 3, true)
on conflict do nothing;

insert into public.blog_posts (slug, category, title, summary, cover_image, published_at, is_published, sort_order)
values
  ('navigating-jomo-kenyatta-a-premium-travellers-guide', 'Airport Guides', 'Navigating Jomo Kenyatta: A Premium Traveller''s Guide', '', '', '2026-06-01T00:00:00Z', true, 1),
  ('why-fast-track-pays-for-itself-on-every-business-trip', 'Executive Travel', 'Why Fast-Track Pays for Itself on Every Business Trip', '', '', '2026-05-01T00:00:00Z', true, 2),
  ('the-quiet-art-of-discretion-in-luxury-service', 'Concierge Insights', 'The Quiet Art of Discretion in Luxury Service', '', '', '2026-05-01T00:00:00Z', true, 3),
  ('five-things-diplomats-always-pack-and-why', 'Travel Tips', 'Five Things Diplomats Always Pack — and Why', '', '', '2026-04-01T00:00:00Z', true, 4),
  ('lagos-airport-what-vip-travellers-need-to-know', 'Airport Guides', 'Lagos Airport: What VIP Travellers Need to Know', '', '', '2026-04-01T00:00:00Z', true, 5),
  ('building-a-corporate-travel-programme-that-actually-works', 'Business Travel', 'Building a Corporate Travel Programme that Actually Works', '', '', '2026-03-01T00:00:00Z', true, 6)
on conflict (slug) do update set
  category = excluded.category,
  title = excluded.title,
  published_at = excluded.published_at,
  is_published = excluded.is_published,
  sort_order = excluded.sort_order,
  updated_at = now();