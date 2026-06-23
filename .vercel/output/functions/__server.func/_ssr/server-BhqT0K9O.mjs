import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/server-BhqT0K9O.js
var adminClient;
function getRequiredEnv(name) {
	const value = process.env[name];
	if (!value) throw new Error(`Missing required Supabase env var: ${name}`);
	return value;
}
function getSupabaseUrl() {
	return process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL ?? getRequiredEnv("SUPABASE_URL");
}
function getSupabaseAdminClient() {
	if (!adminClient) adminClient = createClient(getSupabaseUrl(), getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY"), { auth: {
		autoRefreshToken: false,
		persistSession: false
	} });
	return adminClient;
}
//#endregion
export { getSupabaseAdminClient };
