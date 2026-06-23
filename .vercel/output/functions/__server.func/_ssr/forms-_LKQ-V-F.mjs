import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forms-_LKQ-V-F.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var sourceSchema = objectType({
	sourcePath: stringType().min(1),
	referrer: stringType().default("")
});
var contactSchema = objectType({
	fullName: stringType().min(2),
	email: stringType().email(),
	phone: stringType().default(""),
	subject: stringType().default(""),
	message: stringType().min(5),
	...sourceSchema.shape
});
var bookingSchema = objectType({
	fullName: stringType().min(2),
	email: stringType().email(),
	phone: stringType().min(5),
	nationality: stringType().default(""),
	airline: stringType().min(1),
	flightNumber: stringType().min(1),
	arrivalAirport: stringType().min(1),
	departureAirport: stringType().min(1),
	travelDate: stringType().min(1),
	travelTime: stringType().min(1),
	serviceType: stringType().min(1),
	additionalNotes: stringType().default(""),
	...sourceSchema.shape
});
var corporateSchema = objectType({
	companyName: stringType().min(2),
	fullName: stringType().min(2),
	email: stringType().email(),
	phone: stringType().min(5),
	requirements: stringType().default(""),
	...sourceSchema.shape
});
var newsletterSchema = objectType({
	email: stringType().email(),
	...sourceSchema.shape
});
function buildReference(prefix) {
	return `${prefix}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
}
async function getAdminClient() {
	const { getSupabaseAdminClient } = await import("./server-BhqT0K9O.mjs");
	return getSupabaseAdminClient();
}
var submitContactInquiry_createServerFn_handler = createServerRpc({
	id: "d68b49ad51fd3d5f1584b62ef788524e135e01aaa4c93685ca46576e2b931dea",
	name: "submitContactInquiry",
	filename: "src/lib/supabase/forms.ts"
}, (opts) => submitContactInquiry.__executeServer(opts));
var submitContactInquiry = createServerFn({ method: "POST" }).validator(contactSchema).handler(submitContactInquiry_createServerFn_handler, async ({ data }) => {
	const { error } = await (await getAdminClient()).from("contact_inquiries").insert({
		full_name: data.fullName,
		email: data.email,
		phone: data.phone,
		subject: data.subject,
		message: data.message,
		source_path: data.sourcePath,
		referrer: data.referrer
	});
	if (error) throw new Error(error.message);
	return { ok: true };
});
var submitBookingRequest_createServerFn_handler = createServerRpc({
	id: "a563ccd855fd8c0723f4989c2e5981d305254c52579e6e2f1349e67381227689",
	name: "submitBookingRequest",
	filename: "src/lib/supabase/forms.ts"
}, (opts) => submitBookingRequest.__executeServer(opts));
var submitBookingRequest = createServerFn({ method: "POST" }).validator(bookingSchema).handler(submitBookingRequest_createServerFn_handler, async ({ data }) => {
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
		referrer: data.referrer
	});
	if (error) throw new Error(error.message);
	return { reference };
});
var submitCorporateInquiry_createServerFn_handler = createServerRpc({
	id: "5852ed3bbf4e157dd9c8418e6f8a212aae4f14eb93e81f4c18ccb016b9055b0d",
	name: "submitCorporateInquiry",
	filename: "src/lib/supabase/forms.ts"
}, (opts) => submitCorporateInquiry.__executeServer(opts));
var submitCorporateInquiry = createServerFn({ method: "POST" }).validator(corporateSchema).handler(submitCorporateInquiry_createServerFn_handler, async ({ data }) => {
	const { error } = await (await getAdminClient()).from("corporate_inquiries").insert({
		company_name: data.companyName,
		full_name: data.fullName,
		email: data.email,
		phone: data.phone,
		requirements: data.requirements,
		source_path: data.sourcePath,
		referrer: data.referrer
	});
	if (error) throw new Error(error.message);
	return { ok: true };
});
var subscribeNewsletter_createServerFn_handler = createServerRpc({
	id: "646191ca5692c11a6424d14dc65a5f69f8761f9b96e787940b372fdb6b08ec14",
	name: "subscribeNewsletter",
	filename: "src/lib/supabase/forms.ts"
}, (opts) => subscribeNewsletter.__executeServer(opts));
var subscribeNewsletter = createServerFn({ method: "POST" }).validator(newsletterSchema).handler(subscribeNewsletter_createServerFn_handler, async ({ data }) => {
	const { error } = await (await getAdminClient()).from("newsletter_subscriptions").upsert({
		email: data.email,
		source_path: data.sourcePath,
		referrer: data.referrer
	}, { onConflict: "email" });
	if (error) throw new Error(error.message);
	return { ok: true };
});
//#endregion
export { submitBookingRequest_createServerFn_handler, submitContactInquiry_createServerFn_handler, submitCorporateInquiry_createServerFn_handler, subscribeNewsletter_createServerFn_handler };
