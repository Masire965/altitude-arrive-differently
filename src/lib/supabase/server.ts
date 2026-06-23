import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import type { Database } from "./database";

let adminClient: SupabaseClient<Database> | undefined;

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required Supabase env var: ${name}`);
  }
  return value;
}

function getSupabaseUrl() {
  return process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL ?? getRequiredEnv("SUPABASE_URL");
}

export function getSupabaseAdminClient() {
  if (!adminClient) {
    adminClient = createClient<Database>(getSupabaseUrl(), getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY"), {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }

  return adminClient;
}