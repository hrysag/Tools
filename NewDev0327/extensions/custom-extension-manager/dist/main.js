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
const Utils_1 = require("./Utils");
exports.methods = {
    installAllExtensionsDependencies() {
        CoreService.installAllExtensionsDependencies();
    },
    refreshExtensionsDummy() {
        CoreService.refreshExtensionsDummy();
    },
    async createExtension(template, name) {
        await CoreService.createExtension(template, name);
    },
    openExtensionInVscode(assetInfo) {
        CoreService.openExtensionInVscode(assetInfo);
    },
    installExtensionDependencies(assetInfo) {
        CoreService.installExtensionDependencies(assetInfo);
    },
    reloadExtension(assetInfo) {
        CoreService.reloadExtension(assetInfo);
    },
    deleteExtension(assetInfo) {
        CoreService.deleteExtension(assetInfo);
    },
    enableExtension(assetInfo) {
        CoreService.enableExtension(assetInfo);
    },
    disableExtension(assetInfo) {
        CoreService.disableExtension(assetInfo);
    },
    afterReload() {
        CoreService.afterReload();
    },
};
function load() {
    // 避免有插件載入完成時機較晚 導致實際上是啟用 但被標記成禁用 
    (0, Utils_1.waitTime)(1).then(() => {
        CoreService.refreshExtensionsDummy();
    });
}
exports.load = load;
function unload() {
    CoreService.clearExtensionDummy();
}
exports.unload = unload;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkRBQTZDO0FBQzdDLG1DQUFtQztBQUV0QixRQUFBLE9BQU8sR0FBNEM7SUFDNUQsZ0NBQWdDO1FBQzVCLFdBQVcsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFDRCxzQkFBc0I7UUFDbEIsV0FBVyxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDekMsQ0FBQztJQUNELEtBQUssQ0FBQyxlQUFlLENBQUMsUUFBZ0IsRUFBRSxJQUFZO1FBQ2hELE1BQU0sV0FBVyxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELHFCQUFxQixDQUFDLFNBQW9CO1FBQ3RDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsNEJBQTRCLENBQUMsU0FBb0I7UUFDN0MsV0FBVyxDQUFDLDRCQUE0QixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCxlQUFlLENBQUMsU0FBb0I7UUFDaEMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsZUFBZSxDQUFDLFNBQW9CO1FBQ2hDLFdBQVcsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELGVBQWUsQ0FBQyxTQUFvQjtRQUNoQyxXQUFXLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxnQkFBZ0IsQ0FBQyxTQUFvQjtRQUNqQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELFdBQVc7UUFDUCxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztDQUNKLENBQUM7QUFFRixTQUFnQixJQUFJO0lBQ2hCLGtDQUFrQztJQUNsQyxJQUFBLGdCQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNsQixXQUFXLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFMRCxvQkFLQztBQUVELFNBQWdCLE1BQU07SUFDbEIsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDdEMsQ0FBQztBQUZELHdCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXNzZXRJbmZvIH0gZnJvbSAnQGNvY29zL2NyZWF0b3ItdHlwZXMvZWRpdG9yL3BhY2thZ2VzL2Fzc2V0LWRiL0B0eXBlcy9wdWJsaWMnO1xyXG5pbXBvcnQgKiBhcyBDb3JlU2VydmljZSBmcm9tICcuL0NvcmVTZXJ2aWNlJztcclxuaW1wb3J0IHsgd2FpdFRpbWUgfSBmcm9tICcuL1V0aWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRob2RzOiB7IFtrZXk6IHN0cmluZ106ICguLi5hbnk6IGFueSkgPT4gYW55IH0gPSB7XHJcbiAgICBpbnN0YWxsQWxsRXh0ZW5zaW9uc0RlcGVuZGVuY2llcygpIHtcclxuICAgICAgICBDb3JlU2VydmljZS5pbnN0YWxsQWxsRXh0ZW5zaW9uc0RlcGVuZGVuY2llcygpO1xyXG4gICAgfSxcclxuICAgIHJlZnJlc2hFeHRlbnNpb25zRHVtbXkoKSB7XHJcbiAgICAgICAgQ29yZVNlcnZpY2UucmVmcmVzaEV4dGVuc2lvbnNEdW1teSgpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGNyZWF0ZUV4dGVuc2lvbih0ZW1wbGF0ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBhd2FpdCBDb3JlU2VydmljZS5jcmVhdGVFeHRlbnNpb24odGVtcGxhdGUsIG5hbWUpO1xyXG4gICAgfSxcclxuICAgIG9wZW5FeHRlbnNpb25JblZzY29kZShhc3NldEluZm86IEFzc2V0SW5mbykge1xyXG4gICAgICAgIENvcmVTZXJ2aWNlLm9wZW5FeHRlbnNpb25JblZzY29kZShhc3NldEluZm8pO1xyXG4gICAgfSxcclxuICAgIGluc3RhbGxFeHRlbnNpb25EZXBlbmRlbmNpZXMoYXNzZXRJbmZvOiBBc3NldEluZm8pIHtcclxuICAgICAgICBDb3JlU2VydmljZS5pbnN0YWxsRXh0ZW5zaW9uRGVwZW5kZW5jaWVzKGFzc2V0SW5mbyk7XHJcbiAgICB9LFxyXG4gICAgcmVsb2FkRXh0ZW5zaW9uKGFzc2V0SW5mbzogQXNzZXRJbmZvKSB7XHJcbiAgICAgICAgQ29yZVNlcnZpY2UucmVsb2FkRXh0ZW5zaW9uKGFzc2V0SW5mbyk7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlRXh0ZW5zaW9uKGFzc2V0SW5mbzogQXNzZXRJbmZvKSB7XHJcbiAgICAgICAgQ29yZVNlcnZpY2UuZGVsZXRlRXh0ZW5zaW9uKGFzc2V0SW5mbyk7XHJcbiAgICB9LFxyXG4gICAgZW5hYmxlRXh0ZW5zaW9uKGFzc2V0SW5mbzogQXNzZXRJbmZvKTogdm9pZCB7XHJcbiAgICAgICAgQ29yZVNlcnZpY2UuZW5hYmxlRXh0ZW5zaW9uKGFzc2V0SW5mbyk7XHJcbiAgICB9LFxyXG4gICAgZGlzYWJsZUV4dGVuc2lvbihhc3NldEluZm86IEFzc2V0SW5mbyk6IHZvaWQge1xyXG4gICAgICAgIENvcmVTZXJ2aWNlLmRpc2FibGVFeHRlbnNpb24oYXNzZXRJbmZvKTtcclxuICAgIH0sXHJcbiAgICBhZnRlclJlbG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBDb3JlU2VydmljZS5hZnRlclJlbG9hZCgpO1xyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkKCk6IHZvaWQge1xyXG4gICAgLy8g6YG/5YWN5pyJ5o+S5Lu26LyJ5YWl5a6M5oiQ5pmC5qmf6LyD5pmaIOWwjuiHtOWvpumam+S4iuaYr+WVn+eUqCDkvYbooqvmqJnoqJjmiJDnpoHnlKggXHJcbiAgICB3YWl0VGltZSgxKS50aGVuKCgpID0+IHtcclxuICAgICAgICBDb3JlU2VydmljZS5yZWZyZXNoRXh0ZW5zaW9uc0R1bW15KCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVubG9hZCgpOiB2b2lkIHtcclxuICAgIENvcmVTZXJ2aWNlLmNsZWFyRXh0ZW5zaW9uRHVtbXkoKTtcclxufSJdfQ==