//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-D5mlGRpU.js
var manifest = {
	"5852ed3bbf4e157dd9c8418e6f8a212aae4f14eb93e81f4c18ccb016b9055b0d": {
		functionName: "submitCorporateInquiry_createServerFn_handler",
		importer: () => import("./_ssr/forms-_LKQ-V-F.mjs")
	},
	"646191ca5692c11a6424d14dc65a5f69f8761f9b96e787940b372fdb6b08ec14": {
		functionName: "subscribeNewsletter_createServerFn_handler",
		importer: () => import("./_ssr/forms-_LKQ-V-F.mjs")
	},
	"a563ccd855fd8c0723f4989c2e5981d305254c52579e6e2f1349e67381227689": {
		functionName: "submitBookingRequest_createServerFn_handler",
		importer: () => import("./_ssr/forms-_LKQ-V-F.mjs")
	},
	"d68b49ad51fd3d5f1584b62ef788524e135e01aaa4c93685ca46576e2b931dea": {
		functionName: "submitContactInquiry_createServerFn_handler",
		importer: () => import("./_ssr/forms-_LKQ-V-F.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
