import { createServerFn } from "@tanstack/react-start";
import type { SupabaseClient } from "@supabase/supabase-js";
import { z } from "zod";

import type { Database } from "./database";

const sourceSchema = z.object({
  sourcePath: z.string().min(1),
  referrer: z.string().default(""),
});

const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().default(""),
  subject: z.string().default(""),
  message: z.string().min(5),
  ...sourceSchema.shape,
});

const bookingSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  nationality: z.string().default(""),
  airline: z.string().min(1),
  flightNumber: z.string().min(1),
  arrivalAirport: z.string().min(1),
  departureAirport: z.string().min(1),
  travelDate: z.string().min(1),
  travelTime: z.string().min(1),
  serviceType: z.string().min(1),
  additionalNotes: z.string().default(""),
  ...sourceSchema.shape,
});

const corporateSchema = z.object({
  companyName: z.string().min(2),
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  requirements: z.string().default(""),
  ...sourceSchema.shape,
});

const newsletterSchema = z.object({
  email: z.string().email(),
  ...sourceSchema.shape,
});

function buildReference(prefix: string) {
  return `${prefix}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
}

async function getAdminClient(): Promise<SupabaseClient<Database>> {
  const { getSupabaseAdminClient } = await import("./server");
  return getSupabaseAdminClient();
}

export const submitContactInquiry = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const supabase = await getAdminClient();

    const { error } = await supabase.from("contact_inquiries").insert({
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      source_path: data.sourcePath,
      referrer: data.referrer,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { ok: true };
  });

export const submitBookingRequest = createServerFn({ method: "POST" })
  .validator(bookingSchema)
  .handler(async ({ data }) => {
    const supabase = await getAdminClient();
    const reference = buildReference("ACS");

    const { error } = await supabase.from("booking_requests").insert({
      reference,
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      nationality: data.nationality,
      airline: data.airline,
      flight_number: data.flightNumber,
      arrival_airport: data.arrivalAirport,
      departure_airport: data.departureAirport,
      travel_date: data.travelDate,
      travel_time: data.travelTime,
      service_type: data.serviceType,
      additional_notes: data.additionalNotes,
      source_path: data.sourcePath,
      referrer: data.referrer,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { reference };
  });

export const submitCorporateInquiry = createServerFn({ method: "POST" })
  .validator(corporateSchema)
  .handler(async ({ data }) => {
    const supabase = await getAdminClient();

    const { error } = await supabase.from("corporate_inquiries").insert({
      company_name: data.companyName,
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      requirements: data.requirements,
      source_path: data.sourcePath,
      referrer: data.referrer,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { ok: true };
  });

export const subscribeNewsletter = createServerFn({ method: "POST" })
  .validator(newsletterSchema)
  .handler(async ({ data }) => {
    const supabase = await getAdminClient();

    const { error } = await supabase.from("newsletter_subscriptions").upsert(
      {
        email: data.email,
        source_path: data.sourcePath,
        referrer: data.referrer,
      },
      {
        onConflict: "email",
      },
    );

    if (error) {
      throw new Error(error.message);
    }

    return { ok: true };
  });