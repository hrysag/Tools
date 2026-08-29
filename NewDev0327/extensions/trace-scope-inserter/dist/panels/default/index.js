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
const fs_1 = require("fs");
const path_1 = require("path");
const CoreService = __importStar(require("../../CoreService"));
module.exports = Editor.Panel.define({
    listeners: {},
    template: (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '../../../static/template/default/index.html'), 'utf-8'),
    style: (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '../../../static/style/default/index.css'), 'utf-8'),
    $: {
        panelBody: '#panel-body',
        downloadInjectScriptButton: '#download-inject-script-button',
        resumeTestCodeButton: '#resume-test-code-button',
        insertTestCodeButton: '#insert-test-code-button',
        currentParent: '#current-parent',
    },
    methods: {
        initPanelElement() {
            const body = this.$.panelBody;
            CoreService.createScriptUI(body);
            this.setupScrollTracking();
        },
        setupScrollTracking() {
            const body = this.$.panelBody;
            const currentParentEl = this.$.currentParent;
            body.addEventListener('scroll', () => {
                const rows = body.querySelectorAll('.row');
                let currentParent = '';
                // 找出當前可見區域的第一個元素
                for (const row of Array.from(rows)) {
                    const rect = row.getBoundingClientRect();
                    const bodyRect = body.getBoundingClientRect();
                    // 檢查元素是否在可見區域內
                    if (rect.top >= bodyRect.top && rect.top <= bodyRect.bottom) {
                        if (row.dataset.parentId === '') {
                            // 這是父元素
                            currentParent = row.dataset.label || '';
                        }
                        else {
                            // 這是子元素,找出它的父元素
                            const parentRow = body.querySelector(`[data-id="${row.dataset.parentId}"]`);
                            if (parentRow) {
                                currentParent = parentRow.dataset.label || '';
                            }
                        }
                        break;
                    }
                }
                currentParentEl.textContent = currentParent;
            });
        },
        onInsertTestCodeButtonClick() {
            const body = this.$.panelBody;
            const checkedMap = CoreService.getCheckedMap(body);
            CoreService.rewriteSelectedScript(checkedMap);
            CoreService.saveCurrentPanelSettingToProfile(checkedMap);
        },
        onResumeTestCodeButtonClick() {
            const body = this.$.panelBody;
            const checkedMap = CoreService.getCheckedMap(body);
            CoreService.restoreOriginalScript(checkedMap);
        },
        onDownloadInjectScriptButtonClick() {
            const body = this.$.panelBody;
            const checkedMap = CoreService.getCheckedMap(body);
            CoreService.downloadInjectScript(checkedMap);
            CoreService.saveCurrentPanelSettingToProfile(checkedMap);
        },
        // 綁定事件處理函數並保存引用
        boundOnDownloadInjectScriptButtonClick: null,
        boundOnInsertDecoratorButtonClick: null,
        boundOnResumeTestCodeButtonClick: null,
    },
    ready() {
        this.initPanelElement();
        // 保存綁定後的函數引用
        this.boundOnDownloadInjectScriptButtonClick = this.onDownloadInjectScriptButtonClick.bind(this);
        this.boundOnInsertDecoratorButtonClick = this.onInsertTestCodeButtonClick.bind(this);
        this.boundOnResumeTestCodeButtonClick = this.onResumeTestCodeButtonClick.bind(this);
        this.$.insertTestCodeButton.addEventListener('click', this.boundOnInsertDecoratorButtonClick);
        this.$.resumeTestCodeButton.addEventListener('click', this.boundOnResumeTestCodeButtonClick);
        this.$.downloadInjectScriptButton.addEventListener('click', this.boundOnDownloadInjectScriptButtonClick);
    },
    beforeClose() { },
    close() {
        this.$.insertTestCodeButton.removeEventListener('click', this.boundOnInsertDecoratorButtonClick);
        this.$.resumeTestCodeButton.removeEventListener('click', this.boundOnResumeTestCodeButtonClick);
        this.$.downloadInjectScriptButton.removeEventListener('click', this.boundOnDownloadInjectScriptButtonClick);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvcGFuZWxzL2RlZmF1bHQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJCQUFrQztBQUNsQywrQkFBNEI7QUFFNUIsK0RBQWlEO0FBRWpELE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDakMsU0FBUyxFQUFFLEVBRVY7SUFDRCxRQUFRLEVBQUUsSUFBQSxpQkFBWSxFQUFDLElBQUEsV0FBSSxFQUFDLFNBQVMsRUFBRSw2Q0FBNkMsQ0FBQyxFQUFFLE9BQU8sQ0FBQztJQUMvRixLQUFLLEVBQUUsSUFBQSxpQkFBWSxFQUFDLElBQUEsV0FBSSxFQUFDLFNBQVMsRUFBRSx5Q0FBeUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQztJQUN4RixDQUFDLEVBQUU7UUFDQyxTQUFTLEVBQUUsYUFBYTtRQUN4QiwwQkFBMEIsRUFBRSxnQ0FBZ0M7UUFDNUQsb0JBQW9CLEVBQUUsMEJBQTBCO1FBQ2hELG9CQUFvQixFQUFFLDBCQUEwQjtRQUNoRCxhQUFhLEVBQUUsaUJBQWlCO0tBQ25DO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsZ0JBQWdCO1lBQ1osTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUEyQixDQUFDO1lBQ2hELFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDL0IsQ0FBQztRQUNELG1CQUFtQjtZQUNmLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBMkIsQ0FBQztZQUNoRCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQTRCLENBQUM7WUFFNUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7Z0JB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QUM7UUFFbkYsSUFBSSxDQUFDLENBQUMsQ0FBQyxvQkFBMEMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDcEgsSUFBSSxDQUFDLENBQUMsQ0FBQyxvQkFBMEMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDbkgsSUFBSSxDQUFDLENBQUMsQ0FBQywwQkFBZ0QsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFDcEksQ0FBQztJQUNELFdBQVcsS0FBSyxDQUFDO0lBQ2pCLEtBQUs7UUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUEwQyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUN2SCxJQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUEwQyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUN0SCxJQUFJLENBQUMsQ0FBQyxDQUFDLDBCQUFnRCxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUN2SSxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IHNob3dMb2csIHNob3dXYXJuLCBzaG93RXJyb3IsIHdhaXRUaW1lIH0gZnJvbSAnLi4vLi4vVXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBDb3JlU2VydmljZSBmcm9tICcuLi8uLi9Db3JlU2VydmljZSc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEVkaXRvci5QYW5lbC5kZWZpbmUoe1xyXG4gICAgbGlzdGVuZXJzOiB7XHJcblxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiByZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICcuLi8uLi8uLi9zdGF0aWMvdGVtcGxhdGUvZGVmYXVsdC9pbmRleC5odG1sJyksICd1dGYtOCcpLFxyXG4gICAgc3R5bGU6IHJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJy4uLy4uLy4uL3N0YXRpYy9zdHlsZS9kZWZhdWx0L2luZGV4LmNzcycpLCAndXRmLTgnKSxcclxuICAgICQ6IHtcclxuICAgICAgICBwYW5lbEJvZHk6ICcjcGFuZWwtYm9keScsXHJcbiAgICAgICAgZG93bmxvYWRJbmplY3RTY3JpcHRCdXR0b246ICcjZG93bmxvYWQtaW5qZWN0LXNjcmlwdC1idXR0b24nLFxyXG4gICAgICAgIHJlc3VtZVRlc3RDb2RlQnV0dG9uOiAnI3Jlc3VtZS10ZXN0LWNvZGUtYnV0dG9uJyxcclxuICAgICAgICBpbnNlcnRUZXN0Q29kZUJ1dHRvbjogJyNpbnNlcnQtdGVzdC1jb2RlLWJ1dHRvbicsXHJcbiAgICAgICAgY3VycmVudFBhcmVudDogJyNjdXJyZW50LXBhcmVudCcsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGluaXRQYW5lbEVsZW1lbnQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLiQucGFuZWxCb2R5IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICBDb3JlU2VydmljZS5jcmVhdGVTY3JpcHRVSShib2R5KTtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cFNjcm9sbFRyYWNraW5nKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXR1cFNjcm9sbFRyYWNraW5nKCkge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gdGhpcy4kLnBhbmVsQm9keSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhcmVudEVsID0gdGhpcy4kLmN1cnJlbnRQYXJlbnQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3cnKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UGFyZW50ID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5om+5Ye655W25YmN5Y+v6KaL5Y2A5Z+f55qE56ys5LiA5YCL5YWD57SgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiBBcnJheS5mcm9tKHJvd3MpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IHJvdy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2R5UmVjdCA9IGJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaqouafpeWFg+e0oOaYr+WQpuWcqOWPr+imi+WNgOWfn+WFp1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWN0LnRvcCA+PSBib2R5UmVjdC50b3AgJiYgcmVjdC50b3AgPD0gYm9keVJlY3QuYm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cuZGF0YXNldC5wYXJlbnRJZCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmAmeaYr+eItuWFg+e0oFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhcmVudCA9IHJvdy5kYXRhc2V0LmxhYmVsIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YCZ5piv5a2Q5YWD57SgLOaJvuWHuuWug+eahOeItuWFg+e0oFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Um93ID0gYm9keS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7cm93LmRhdGFzZXQucGFyZW50SWR9XCJdYCkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Um93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhcmVudCA9IHBhcmVudFJvdy5kYXRhc2V0LmxhYmVsIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFyZW50RWwudGV4dENvbnRlbnQgPSBjdXJyZW50UGFyZW50O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uSW5zZXJ0VGVzdENvZGVCdXR0b25DbGljaygpIHtcclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IHRoaXMuJC5wYW5lbEJvZHkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWRNYXAgPSBDb3JlU2VydmljZS5nZXRDaGVja2VkTWFwKGJvZHkpO1xyXG4gICAgICAgICAgICBDb3JlU2VydmljZS5yZXdyaXRlU2VsZWN0ZWRTY3JpcHQoY2hlY2tlZE1hcCk7XHJcbiAgICAgICAgICAgIENvcmVTZXJ2aWNlLnNhdmVDdXJyZW50UGFuZWxTZXR0aW5nVG9Qcm9maWxlKGNoZWNrZWRNYXApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25SZXN1bWVUZXN0Q29kZUJ1dHRvbkNsaWNrKCkge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gdGhpcy4kLnBhbmVsQm9keSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZE1hcCA9IENvcmVTZXJ2aWNlLmdldENoZWNrZWRNYXAoYm9keSk7XHJcbiAgICAgICAgICAgIENvcmVTZXJ2aWNlLnJlc3RvcmVPcmlnaW5hbFNjcmlwdChjaGVja2VkTWFwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRG93bmxvYWRJbmplY3RTY3JpcHRCdXR0b25DbGljaygpIHtcclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IHRoaXMuJC5wYW5lbEJvZHkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWRNYXAgPSBDb3JlU2VydmljZS5nZXRDaGVja2VkTWFwKGJvZHkpO1xyXG4gICAgICAgICAgICBDb3JlU2VydmljZS5kb3dubG9hZEluamVjdFNjcmlwdChjaGVja2VkTWFwKTtcclxuICAgICAgICAgICAgQ29yZVNlcnZpY2Uuc2F2ZUN1cnJlbnRQYW5lbFNldHRpbmdUb1Byb2ZpbGUoY2hlY2tlZE1hcCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDntoHlrprkuovku7bomZXnkIblh73mlbjkuKbkv53lrZjlvJXnlKhcclxuICAgICAgICBib3VuZE9uRG93bmxvYWRJbmplY3RTY3JpcHRCdXR0b25DbGljazogbnVsbCBhcyBhbnksXHJcbiAgICAgICAgYm91bmRPbkluc2VydERlY29yYXRvckJ1dHRvbkNsaWNrOiBudWxsIGFzIGFueSxcclxuICAgICAgICBib3VuZE9uUmVzdW1lVGVzdENvZGVCdXR0b25DbGljazogbnVsbCBhcyBhbnksXHJcbiAgICB9LFxyXG4gICAgcmVhZHkoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0UGFuZWxFbGVtZW50KCk7XHJcbiAgICAgICAgLy8g5L+d5a2Y57aB5a6a5b6M55qE5Ye95pW45byV55SoXHJcbiAgICAgICAgdGhpcy5ib3VuZE9uRG93bmxvYWRJbmplY3RTY3JpcHRCdXR0b25DbGljayA9IHRoaXMub25Eb3dubG9hZEluamVjdFNjcmlwdEJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ib3VuZE9uSW5zZXJ0RGVjb3JhdG9yQnV0dG9uQ2xpY2sgPSB0aGlzLm9uSW5zZXJ0VGVzdENvZGVCdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYm91bmRPblJlc3VtZVRlc3RDb2RlQnV0dG9uQ2xpY2sgPSB0aGlzLm9uUmVzdW1lVGVzdENvZGVCdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAodGhpcy4kLmluc2VydFRlc3RDb2RlQnV0dG9uIGFzIEhUTUxCdXR0b25FbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRPbkluc2VydERlY29yYXRvckJ1dHRvbkNsaWNrKTtcclxuICAgICAgICAodGhpcy4kLnJlc3VtZVRlc3RDb2RlQnV0dG9uIGFzIEhUTUxCdXR0b25FbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRPblJlc3VtZVRlc3RDb2RlQnV0dG9uQ2xpY2spO1xyXG4gICAgICAgICh0aGlzLiQuZG93bmxvYWRJbmplY3RTY3JpcHRCdXR0b24gYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZE9uRG93bmxvYWRJbmplY3RTY3JpcHRCdXR0b25DbGljayk7XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlQ2xvc2UoKSB7IH0sXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICAodGhpcy4kLmluc2VydFRlc3RDb2RlQnV0dG9uIGFzIEhUTUxCdXR0b25FbGVtZW50KS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRPbkluc2VydERlY29yYXRvckJ1dHRvbkNsaWNrKTtcclxuICAgICAgICAodGhpcy4kLnJlc3VtZVRlc3RDb2RlQnV0dG9uIGFzIEhUTUxCdXR0b25FbGVtZW50KS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRPblJlc3VtZVRlc3RDb2RlQnV0dG9uQ2xpY2spO1xyXG4gICAgICAgICh0aGlzLiQuZG93bmxvYWRJbmplY3RTY3JpcHRCdXR0b24gYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZE9uRG93bmxvYWRJbmplY3RTY3JpcHRCdXR0b25DbGljayk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19