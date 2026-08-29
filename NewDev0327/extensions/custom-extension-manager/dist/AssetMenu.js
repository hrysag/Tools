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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onAssetMenu = void 0;
const package_json_1 = __importDefault(require("../package.json"));
const CoreService = __importStar(require("./CoreService"));
function onAssetMenu(assetInfo) {
    const subMenuItems = [];
    if (assetInfo.url === `db://${package_json_1.default.name}/${package_json_1.default.name}`) {
        subMenuItems.push(createMenuItem('創建插件', () => {
            Editor.Panel.open(package_json_1.default.name);
        }));
        // 暫時隱藏功能
        // subMenuItems.push(createMenuItem('安裝所有插件的npm依賴套件', () => {
        //     Editor.Message.send(packageJSON.name, 'install-all-extensions-dependencies');
        // }));
        subMenuItems.push(createMenuItem('刷新插件列表', () => {
            Editor.Message.send(package_json_1.default.name, 'refresh-extensions-dummy');
        }));
        subMenuItems.push(createMenuItem('重新載入此插件', () => {
            Editor.Message.send(package_json_1.default.name, 'reload-extension', assetInfo);
        }));
        return [
            {
                label: '插件工具',
                submenu: subMenuItems,
            },
        ];
    }
    if (assetInfo.url.startsWith(`db://${package_json_1.default.name}/${package_json_1.default.name}/`)) {
        const subMenuItems = [];
        subMenuItems.push(createMenuItem('在 vscode 開啟插件', () => {
            Editor.Message.send(package_json_1.default.name, 'open-extension-in-vscode', assetInfo);
        }));
        subMenuItems.push(createMenuItem('安裝npm依賴套件', () => {
            Editor.Message.send(package_json_1.default.name, 'install-extension-dependencies', assetInfo);
        }));
        subMenuItems.push(createMenuItem('重新載入此插件', () => {
            Editor.Message.send(package_json_1.default.name, 'reload-extension', assetInfo);
        }));
        subMenuItems.push(createMenuItem('刪除此插件', () => {
            Editor.Message.send(package_json_1.default.name, 'delete-extension', assetInfo);
        }));
        const cleanName = CoreService.getDummyCleanName(assetInfo);
        const extensionInfo = Editor.Package.getPackages().find(pkg => pkg.name === cleanName);
        if (extensionInfo) {
            const label = extensionInfo.enable ? '禁用此插件' : '啟用此插件';
            const message = extensionInfo.enable ? 'disable-extension' : 'enable-extension';
            subMenuItems.push(createMenuItem(label, () => {
                Editor.Message.send(package_json_1.default.name, message, assetInfo);
            }));
        }
        return [
            {
                label: '插件工具',
                submenu: subMenuItems,
            },
        ];
    }
    return [];
}
exports.onAssetMenu = onAssetMenu;
;
function createMenuItem(label, clickCallback) {
    return {
        label,
        click() {
            clickCallback();
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzZXRNZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL0Fzc2V0TWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLG1FQUEwQztBQUMxQywyREFBNkM7QUFFN0MsU0FBZ0IsV0FBVyxDQUFDLFNBQW9CO0lBQzVDLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN4QixJQUFJLFNBQVMsQ0FBQyxHQUFHLEtBQUssUUFBUSxzQkFBVyxDQUFDLElBQUksSUFBSSxzQkFBVyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7UUFDbkUsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUMxQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDSixTQUFTO1FBQ1QsNkRBQTZEO1FBQzdELG9GQUFvRjtRQUNwRixPQUFPO1FBQ1AsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUM1QyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxzQkFBVyxDQUFDLElBQUksRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1FBQ3RFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDSixZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO1lBQzdDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHNCQUFXLENBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPO1lBQ0g7Z0JBQ0ksS0FBSyxFQUFFLE1BQU07Z0JBQ2IsT0FBTyxFQUFFLFlBQVk7YUFDeEI7U0FDSixDQUFDO0lBQ04sQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxzQkFBVyxDQUFDLElBQUksSUFBSSxzQkFBVyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUM1RSxNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDeEIsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtZQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxzQkFBVyxDQUFDLElBQUksRUFBRSwwQkFBMEIsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqRixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0osWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtZQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxzQkFBVyxDQUFDLElBQUksRUFBRSxnQ0FBZ0MsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0osWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtZQUM3QyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxzQkFBVyxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0osWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxzQkFBVyxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRUosTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQztRQUN2RixJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ2hCLE1BQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3ZELE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRixZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO2dCQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxzQkFBVyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDOUQsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNSLENBQUM7UUFDRCxPQUFPO1lBQ0g7Z0JBQ0ksS0FBSyxFQUFFLE1BQU07Z0JBQ2IsT0FBTyxFQUFFLFlBQVk7YUFDeEI7U0FDSixDQUFDO0lBQ04sQ0FBQztJQUNELE9BQU8sRUFBRSxDQUFDO0FBQ2QsQ0FBQztBQXZERCxrQ0F1REM7QUFBQSxDQUFDO0FBRUYsU0FBUyxjQUFjLENBQUMsS0FBYSxFQUFFLGFBQXlCO0lBQzVELE9BQU87UUFDSCxLQUFLO1FBQ0wsS0FBSztZQUNELGFBQWEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7S0FDSixDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBBc3NldEluZm8gfSBmcm9tICdAY29jb3MvY3JlYXRvci10eXBlcy9lZGl0b3IvcGFja2FnZXMvYXNzZXQtZGIvQHR5cGVzL3B1YmxpYyc7XHJcbmltcG9ydCBwYWNrYWdlSlNPTiBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5pbXBvcnQgKiBhcyBDb3JlU2VydmljZSBmcm9tICcuL0NvcmVTZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkFzc2V0TWVudShhc3NldEluZm86IEFzc2V0SW5mbyk6IGFueVtdIHtcclxuICAgIGNvbnN0IHN1Yk1lbnVJdGVtcyA9IFtdO1xyXG4gICAgaWYgKGFzc2V0SW5mby51cmwgPT09IGBkYjovLyR7cGFja2FnZUpTT04ubmFtZX0vJHtwYWNrYWdlSlNPTi5uYW1lfWApIHtcclxuICAgICAgICBzdWJNZW51SXRlbXMucHVzaChjcmVhdGVNZW51SXRlbSgn5Ym15bu65o+S5Lu2JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBFZGl0b3IuUGFuZWwub3BlbihwYWNrYWdlSlNPTi5uYW1lKTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgLy8g5pqr5pmC6Zqx6JeP5Yqf6IO9XHJcbiAgICAgICAgLy8gc3ViTWVudUl0ZW1zLnB1c2goY3JlYXRlTWVudUl0ZW0oJ+WuieijneaJgOacieaPkuS7tueahG5wbeS+neiztOWll+S7ticsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgRWRpdG9yLk1lc3NhZ2Uuc2VuZChwYWNrYWdlSlNPTi5uYW1lLCAnaW5zdGFsbC1hbGwtZXh0ZW5zaW9ucy1kZXBlbmRlbmNpZXMnKTtcclxuICAgICAgICAvLyB9KSk7XHJcbiAgICAgICAgc3ViTWVudUl0ZW1zLnB1c2goY3JlYXRlTWVudUl0ZW0oJ+WIt+aWsOaPkuS7tuWIl+ihqCcsICgpID0+IHtcclxuICAgICAgICAgICAgRWRpdG9yLk1lc3NhZ2Uuc2VuZChwYWNrYWdlSlNPTi5uYW1lLCAncmVmcmVzaC1leHRlbnNpb25zLWR1bW15Jyk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHN1Yk1lbnVJdGVtcy5wdXNoKGNyZWF0ZU1lbnVJdGVtKCfph43mlrDovInlhaXmraTmj5Lku7YnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEVkaXRvci5NZXNzYWdlLnNlbmQocGFja2FnZUpTT04ubmFtZSwgJ3JlbG9hZC1leHRlbnNpb24nLCBhc3NldEluZm8pO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ+aPkuS7tuW3peWFtycsXHJcbiAgICAgICAgICAgICAgICBzdWJtZW51OiBzdWJNZW51SXRlbXMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIGlmIChhc3NldEluZm8udXJsLnN0YXJ0c1dpdGgoYGRiOi8vJHtwYWNrYWdlSlNPTi5uYW1lfS8ke3BhY2thZ2VKU09OLm5hbWV9L2ApKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViTWVudUl0ZW1zID0gW107XHJcbiAgICAgICAgc3ViTWVudUl0ZW1zLnB1c2goY3JlYXRlTWVudUl0ZW0oJ+WcqCB2c2NvZGUg6ZaL5ZWf5o+S5Lu2JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBFZGl0b3IuTWVzc2FnZS5zZW5kKHBhY2thZ2VKU09OLm5hbWUsICdvcGVuLWV4dGVuc2lvbi1pbi12c2NvZGUnLCBhc3NldEluZm8pO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBzdWJNZW51SXRlbXMucHVzaChjcmVhdGVNZW51SXRlbSgn5a6J6KOdbnBt5L6d6LO05aWX5Lu2JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBFZGl0b3IuTWVzc2FnZS5zZW5kKHBhY2thZ2VKU09OLm5hbWUsICdpbnN0YWxsLWV4dGVuc2lvbi1kZXBlbmRlbmNpZXMnLCBhc3NldEluZm8pO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBzdWJNZW51SXRlbXMucHVzaChjcmVhdGVNZW51SXRlbSgn6YeN5paw6LyJ5YWl5q2k5o+S5Lu2JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBFZGl0b3IuTWVzc2FnZS5zZW5kKHBhY2thZ2VKU09OLm5hbWUsICdyZWxvYWQtZXh0ZW5zaW9uJywgYXNzZXRJbmZvKTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgc3ViTWVudUl0ZW1zLnB1c2goY3JlYXRlTWVudUl0ZW0oJ+WIqumZpOatpOaPkuS7ticsICgpID0+IHtcclxuICAgICAgICAgICAgRWRpdG9yLk1lc3NhZ2Uuc2VuZChwYWNrYWdlSlNPTi5uYW1lLCAnZGVsZXRlLWV4dGVuc2lvbicsIGFzc2V0SW5mbyk7XHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBjb25zdCBjbGVhbk5hbWUgPSBDb3JlU2VydmljZS5nZXREdW1teUNsZWFuTmFtZShhc3NldEluZm8pO1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbkluZm8gPSBFZGl0b3IuUGFja2FnZS5nZXRQYWNrYWdlcygpLmZpbmQocGtnID0+IHBrZy5uYW1lID09PSBjbGVhbk5hbWUpO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25JbmZvKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZXh0ZW5zaW9uSW5mby5lbmFibGUgPyAn56aB55So5q2k5o+S5Lu2JyA6ICfllZ/nlKjmraTmj5Lku7YnO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXh0ZW5zaW9uSW5mby5lbmFibGUgPyAnZGlzYWJsZS1leHRlbnNpb24nIDogJ2VuYWJsZS1leHRlbnNpb24nO1xyXG4gICAgICAgICAgICBzdWJNZW51SXRlbXMucHVzaChjcmVhdGVNZW51SXRlbShsYWJlbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgRWRpdG9yLk1lc3NhZ2Uuc2VuZChwYWNrYWdlSlNPTi5uYW1lLCBtZXNzYWdlLCBhc3NldEluZm8pO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAn5o+S5Lu25bel5YW3JyxcclxuICAgICAgICAgICAgICAgIHN1Ym1lbnU6IHN1Yk1lbnVJdGVtcyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obGFiZWw6IHN0cmluZywgY2xpY2tDYWxsYmFjazogKCkgPT4gdm9pZCk6IGFueSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIGNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBjbGlja0NhbGxiYWNrKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn0iXX0=