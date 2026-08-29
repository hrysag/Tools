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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = void 0;
exports.load = load;
exports.unload = unload;
const CoreService = __importStar(require("./CoreService"));
let lastPath = Editor.Project.path + '\\assets';
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
    openExportJsonPanel() {
        Editor.Panel.open('component-json-tools.ExportJson');
    },
    openImportJsonPanel() {
        Editor.Panel.open('component-json-tools.ImportJson');
    },
    async exportComponentProps(nodeUUID, compName, filename) {
        return await CoreService.exportComponentProps(nodeUUID, compName, filename);
    },
    async importComponentProps(nodeUUID, jsonUUID) {
        return await CoreService.importComponentProps(nodeUUID, jsonUUID);
    },
    async exportJsonForComponent(nodeUUID, compName, filename) {
        return await CoreService.exportJsonForComponent(nodeUUID, compName, filename);
    },
};
/**
 * @en Method Triggered on Extension Startup
 * @zh 扩展启动时触发的方法
 */
function load() { }
/**
 * @en Method triggered when uninstalling the extension
 * @zh 卸载扩展时触发的方法
 */
function unload() { }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQSxvQkFBMEI7QUFNMUIsd0JBQTRCO0FBL0M1QiwyREFBNkM7QUFFN0MsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO0FBRWhEOzs7R0FHRztBQUNVLFFBQUEsT0FBTyxHQUE0QztJQUM1RDs7O09BR0c7SUFDSCxXQUFXO1FBQ1AsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDRCxtQkFBbUI7UUFDZixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxtQkFBbUI7UUFDZixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxLQUFLLENBQUMsb0JBQW9CLENBQUMsUUFBZ0IsRUFBRSxRQUFnQixFQUFFLFFBQWdCO1FBQzNFLE9BQU8sTUFBTSxXQUFXLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsS0FBSyxDQUFDLG9CQUFvQixDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7UUFDekQsT0FBTyxNQUFNLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxRQUFnQixFQUFFLFFBQWdCLEVBQUUsUUFBZ0I7UUFDN0UsT0FBTyxNQUFNLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Q0FDSixDQUFDO0FBRUY7OztHQUdHO0FBQ0gsU0FBZ0IsSUFBSSxLQUFLLENBQUM7QUFFMUI7OztHQUdHO0FBQ0gsU0FBZ0IsTUFBTSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtaWdub3JlXHJcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5Q291bnQsIGRlZmF1bHRSZWFsQ3VydmVQb2ludHMgfSBmcm9tICcuL0NvbnN0JztcclxuaW1wb3J0ICogYXMgQ29yZVNlcnZpY2UgZnJvbSAnLi9Db3JlU2VydmljZSc7XHJcblxyXG5sZXQgbGFzdFBhdGggPSBFZGl0b3IuUHJvamVjdC5wYXRoICsgJ1xcXFxhc3NldHMnO1xyXG5cclxuLyoqXHJcbiAqIEBlbiBSZWdpc3RyYXRpb24gbWV0aG9kIGZvciB0aGUgbWFpbiBwcm9jZXNzIG9mIEV4dGVuc2lvblxyXG4gKiBAemgg5Li65omp5bGV55qE5Li76L+b56iL55qE5rOo5YaM5pa55rOVXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWV0aG9kczogeyBba2V5OiBzdHJpbmddOiAoLi4uYW55OiBhbnkpID0+IGFueSB9ID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gQSBtZXRob2QgdGhhdCBjYW4gYmUgdHJpZ2dlcmVkIGJ5IG1lc3NhZ2VcclxuICAgICAqIEB6aCDpgJrov4cgbWVzc2FnZSDop6blj5HnmoTmlrnms5VcclxuICAgICAqL1xyXG4gICAgYWZ0ZXJSZWxvYWQoKSB7XHJcbiAgICAgICAgQ29yZVNlcnZpY2UuYWZ0ZXJSZWxvYWQoKTtcclxuICAgIH0sXHJcbiAgICBvcGVuRXhwb3J0SnNvblBhbmVsKCkge1xyXG4gICAgICAgIEVkaXRvci5QYW5lbC5vcGVuKCdjb21wb25lbnQtanNvbi10b29scy5FeHBvcnRKc29uJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5JbXBvcnRKc29uUGFuZWwoKSB7XHJcbiAgICAgICAgRWRpdG9yLlBhbmVsLm9wZW4oJ2NvbXBvbmVudC1qc29uLXRvb2xzLkltcG9ydEpzb24nKTtcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgZXhwb3J0Q29tcG9uZW50UHJvcHMobm9kZVVVSUQ6IHN0cmluZywgY29tcE5hbWU6IHN0cmluZywgZmlsZW5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IENvcmVTZXJ2aWNlLmV4cG9ydENvbXBvbmVudFByb3BzKG5vZGVVVUlELCBjb21wTmFtZSwgZmlsZW5hbWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBpbXBvcnRDb21wb25lbnRQcm9wcyhub2RlVVVJRDogc3RyaW5nLCBqc29uVVVJRDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IENvcmVTZXJ2aWNlLmltcG9ydENvbXBvbmVudFByb3BzKG5vZGVVVUlELCBqc29uVVVJRCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIGV4cG9ydEpzb25Gb3JDb21wb25lbnQobm9kZVVVSUQ6IHN0cmluZywgY29tcE5hbWU6IHN0cmluZywgZmlsZW5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBDb3JlU2VydmljZS5leHBvcnRKc29uRm9yQ29tcG9uZW50KG5vZGVVVUlELCBjb21wTmFtZSwgZmlsZW5hbWUpO1xyXG4gICAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZW4gTWV0aG9kIFRyaWdnZXJlZCBvbiBFeHRlbnNpb24gU3RhcnR1cFxyXG4gKiBAemgg5omp5bGV5ZCv5Yqo5pe26Kem5Y+R55qE5pa55rOVXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZCgpIHsgfVxyXG5cclxuLyoqXHJcbiAqIEBlbiBNZXRob2QgdHJpZ2dlcmVkIHdoZW4gdW5pbnN0YWxsaW5nIHRoZSBleHRlbnNpb25cclxuICogQHpoIOWNuOi9veaJqeWxleaXtuinpuWPkeeahOaWueazlVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVubG9hZCgpIHsgfSJdfQ==