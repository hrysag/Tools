"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitTime = exports.showError = exports.showWarn = exports.showLog = void 0;
const package_json_1 = __importDefault(require("../package.json"));
function showLog(message) {
    console.log(`[${package_json_1.default.name}]: ${message}`);
}
exports.showLog = showLog;
function showWarn(message) {
    console.warn(`[${package_json_1.default.name}]: ${message}`);
}
exports.showWarn = showWarn;
function showError(message, error) {
    console.error(`[${package_json_1.default.name}]: ${message}`, ...(error ? [error] : []));
}
exports.showError = showError;
function waitTime(time) {
    return new Promise(resolve => setTimeout(resolve, time * 1000));
}
exports.waitTime = waitTime;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUVBQTBDO0FBRTFDLFNBQWdCLE9BQU8sQ0FBQyxPQUFlO0lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxzQkFBVyxDQUFDLElBQUksTUFBTSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFGRCwwQkFFQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxPQUFlO0lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxzQkFBVyxDQUFDLElBQUksTUFBTSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFGRCw0QkFFQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxPQUFlLEVBQUUsS0FBVztJQUNsRCxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksc0JBQVcsQ0FBQyxJQUFJLE1BQU0sT0FBTyxFQUFFLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRixDQUFDO0FBRkQsOEJBRUM7QUFFRCxTQUFnQixRQUFRLENBQUMsSUFBWTtJQUNqQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNwRSxDQUFDO0FBRkQsNEJBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGFja2FnZUpTT04gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9nKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coYFske3BhY2thZ2VKU09OLm5hbWV9XTogJHttZXNzYWdlfWApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1dhcm4obWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLndhcm4oYFske3BhY2thZ2VKU09OLm5hbWV9XTogJHttZXNzYWdlfWApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Vycm9yKG1lc3NhZ2U6IHN0cmluZywgZXJyb3I/OiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYFske3BhY2thZ2VKU09OLm5hbWV9XTogJHttZXNzYWdlfWAsIC4uLihlcnJvciA/IFtlcnJvcl0gOiBbXSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2FpdFRpbWUodGltZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUgKiAxMDAwKSk7XHJcbn0iXX0=