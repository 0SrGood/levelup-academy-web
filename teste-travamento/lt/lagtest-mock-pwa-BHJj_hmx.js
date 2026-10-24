import { D as __exportAll } from "./lagtest-offline-guard-Bgh6rVPp.js";
//#region ../../scripts/lag-test/page/mock-pwa.ts
var mock_pwa_exports = /* @__PURE__ */ __exportAll({
	currentBuild: () => currentBuild,
	hasNewVersion: () => hasNewVersion,
	isUpdatePending: () => isUpdatePending,
	updateNow: () => updateNow
});
var currentBuild = () => "diagnostico";
var hasNewVersion = async () => false;
var isUpdatePending = () => false;
var updateNow = async () => false;
//#endregion
export { mock_pwa_exports as n, currentBuild as t };
