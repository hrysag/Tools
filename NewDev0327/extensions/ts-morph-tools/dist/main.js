"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unload = exports.load = exports.methods = void 0;
const CoreService = __importStar(require("./CoreService"));
/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
exports.methods = {
    /**
     * @en A method that can be triggered by message
     * @zh 通过 message 触发的方法
     */
    afterReload() {
        CoreService.afterReload();
    },
    generateModuleEntry() {
        CoreService.generateModuleEntry();
    },
    checkEntryDependOnCC() {
        CoreService.checkDependOnCC('entry');
    },
    checkEntryHistoryDependOnCC() {
        CoreService.checkDependOnCC('entryHistory');
    },
};
/**
 * @en Method Triggered on Extension Startup
 * @zh 扩展启动时触发的方法
 */
function load() { }
exports.load = load;
/**
 * @en Method triggered when uninstalling the extension
 * @zh 卸载扩展时触发的方法
 */
function unload() { }
exports.unload = unload;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkRBQTZDO0FBRTdDOzs7R0FHRztBQUNVLFFBQUEsT0FBTyxHQUE0QztJQUM1RDs7O09BR0c7SUFDSCxXQUFXO1FBQ1AsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDRCxtQkFBbUI7UUFDZixXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0JBQW9CO1FBQ2hCLFdBQVcsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELDJCQUEyQjtRQUN2QixXQUFXLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDSixDQUFDO0FBRUY7OztHQUdHO0FBQ0gsU0FBZ0IsSUFBSSxLQUFLLENBQUM7QUFBMUIsb0JBQTBCO0FBRTFCOzs7R0FHRztBQUNILFNBQWdCLE1BQU0sS0FBSyxDQUFDO0FBQTVCLHdCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzc2V0SW5mbyB9IGZyb20gJ0Bjb2Nvcy9jcmVhdG9yLXR5cGVzL2VkaXRvci9wYWNrYWdlcy9hc3NldC1kYi9AdHlwZXMvcHVibGljJztcbmltcG9ydCAqIGFzIENvcmVTZXJ2aWNlIGZyb20gJy4vQ29yZVNlcnZpY2UnO1xuXG4vKipcbiAqIEBlbiBSZWdpc3RyYXRpb24gbWV0aG9kIGZvciB0aGUgbWFpbiBwcm9jZXNzIG9mIEV4dGVuc2lvblxuICogQHpoIOS4uuaJqeWxleeahOS4u+i/m+eoi+eahOazqOWGjOaWueazlVxuICovXG5leHBvcnQgY29uc3QgbWV0aG9kczogeyBba2V5OiBzdHJpbmddOiAoLi4uYW55OiBhbnkpID0+IGFueSB9ID0ge1xuICAgIC8qKlxuICAgICAqIEBlbiBBIG1ldGhvZCB0aGF0IGNhbiBiZSB0cmlnZ2VyZWQgYnkgbWVzc2FnZVxuICAgICAqIEB6aCDpgJrov4cgbWVzc2FnZSDop6blj5HnmoTmlrnms5VcbiAgICAgKi9cbiAgICBhZnRlclJlbG9hZCgpIHtcbiAgICAgICAgQ29yZVNlcnZpY2UuYWZ0ZXJSZWxvYWQoKTtcbiAgICB9LFxuICAgIGdlbmVyYXRlTW9kdWxlRW50cnkoKSB7XG4gICAgICAgIENvcmVTZXJ2aWNlLmdlbmVyYXRlTW9kdWxlRW50cnkoKTtcbiAgICB9LFxuICAgIGNoZWNrRW50cnlEZXBlbmRPbkNDKCkge1xuICAgICAgICBDb3JlU2VydmljZS5jaGVja0RlcGVuZE9uQ0MoJ2VudHJ5Jyk7XG4gICAgfSxcbiAgICBjaGVja0VudHJ5SGlzdG9yeURlcGVuZE9uQ0MoKSB7XG4gICAgICAgIENvcmVTZXJ2aWNlLmNoZWNrRGVwZW5kT25DQygnZW50cnlIaXN0b3J5Jyk7XG4gICAgfSxcbn07XG5cbi8qKlxuICogQGVuIE1ldGhvZCBUcmlnZ2VyZWQgb24gRXh0ZW5zaW9uIFN0YXJ0dXBcbiAqIEB6aCDmianlsZXlkK/liqjml7bop6blj5HnmoTmlrnms5VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWQoKSB7IH1cblxuLyoqXG4gKiBAZW4gTWV0aG9kIHRyaWdnZXJlZCB3aGVuIHVuaW5zdGFsbGluZyB0aGUgZXh0ZW5zaW9uXG4gKiBAemgg5Y246L295omp5bGV5pe26Kem5Y+R55qE5pa55rOVXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmxvYWQoKSB7IH1cbiJdfQ==