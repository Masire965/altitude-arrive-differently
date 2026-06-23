import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-D5mlGRpU.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forms-DsoBKP9-.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
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
var submitContactInquiry = createServerFn({ method: "POST" }).validator(contactSchema).handler(createSsrRpc("d68b49ad51fd3d5f1584b62ef788524e135e01aaa4c93685ca46576e2b931dea"));
var submitBookingRequest = createServerFn({ method: "POST" }).validator(bookingSchema).handler(createSsrRpc("a563ccd855fd8c0723f4989c2e5981d305254c52579e6e2f1349e67381227689"));
var submitCorporateInquiry = createServerFn({ method: "POST" }).validator(corporateSchema).handler(createSsrRpc("5852ed3bbf4e157dd9c8418e6f8a212aae4f14eb93e81f4c18ccb016b9055b0d"));
var subscribeNewsletter = createServerFn({ method: "POST" }).validator(newsletterSchema).handler(createSsrRpc("646191ca5692c11a6424d14dc65a5f69f8761f9b96e787940b372fdb6b08ec14"));
//#endregion
export { submitBookingRequest, submitContactInquiry, submitCorporateInquiry, subscribeNewsletter };
