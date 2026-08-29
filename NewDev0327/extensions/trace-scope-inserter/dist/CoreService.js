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
exports.downloadInjectScript = exports.saveCurrentPanelSettingToProfile = exports.restoreOriginalScript = exports.rewriteSelectedScript = exports.getCheckedMap = exports.createScriptUI = exports.afterReload = void 0;
const package_json_1 = __importDefault(require("../package.json"));
const Utils_1 = require("./Utils");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Define_1 = require("./Define");
const TsMorphService = __importStar(require("./TsMorphService"));
function afterReload() {
    // 在這裡實作插件被重新載入後的邏輯
    (0, Utils_1.showLog)('afterReload');
}
exports.afterReload = afterReload;
// ------------------------------------------------
// 示例方法區塊
// 上方為示例方法，不需要時可刪除
// ------------------------------------------------
// 往下加入插件的業務邏輯程式碼
const SCRIPT_CONFIG_KEY_POSTFIX = 'self!';
/**
 * 根據資源管理器選中的腳本，建立面板腳本、方法勾選框UI
 * @param body
 */
async function createScriptUI(body) {
    const data = await TsMorphService.getSelectedScriptData();
    for (const item of data) {
        const row = document.createElement('div');
        row.className = 'row';
        row.dataset.id = item.id;
        row.dataset.parentId = item.parentId;
        row.dataset.label = item.label;
        const labelCol = document.createElement('div');
        labelCol.className = item.parentId === '' ? 'col' : 'col child';
        labelCol.textContent = item.label;
        row.appendChild(labelCol);
        const profileData = await getProfileData(body, item);
        const isRewriteBodyChecked = profileData ? profileData[0] : true;
        for (let i = 0; i < 3; i++) {
            const col = document.createElement('div');
            col.className = 'col';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.dataset.columnIndex = i.toString();
            col.appendChild(checkbox);
            row.appendChild(col);
            if (profileData) {
                checkbox.checked = profileData[i];
            }
            else if (i === 0) {
                checkbox.checked = true;
            }
            if (i !== 0) {
                checkbox.disabled = !isRewriteBodyChecked;
            }
            addCheckboxEvent(checkbox, item, body, i);
        }
        // 點擊 row 時切換 children 的顯示/隱藏
        labelCol.addEventListener('click', (e) => {
            // 避免點擊 checkbox 時觸發
            if (e.target.tagName === 'INPUT')
                return;
            const children = body.querySelectorAll(`[data-parent-id="${item.id}"]`);
            children.forEach(child => {
                child.classList.toggle('hidden');
            });
        });
        body.appendChild(row);
        if (item.parentId !== '') {
            row.classList.toggle('hidden');
        }
    }
    ;
}
exports.createScriptUI = createScriptUI;
async function getProfileData(body, item) {
    const itemParent = body.querySelector(`[data-id="${item.parentId}"]`);
    const key = itemParent ? `${itemParent.dataset.label}.${item.label}` : `${item.label}.${SCRIPT_CONFIG_KEY_POSTFIX}`;
    const profileData = await Editor.Profile.getConfig(package_json_1.default.name, key);
    return profileData;
}
/**
 * 為 checkbox 添加事件監聽
 * @param checkbox checkbox
 * @param itemData 腳本/方法資料
 * @param body 面板容器
 * @param i 第幾個勾選框
 */
function addCheckboxEvent(checkbox, itemData, body, i) {
    // 為 checkbox 添加事件監聽
    checkbox.addEventListener('change', () => {
        if (i === 0) {
            const row = checkbox.closest('.row');
            if (row) {
                const inputs = row.querySelectorAll('input[type="checkbox"]');
                inputs.forEach((input, index) => {
                    if (index !== 0) {
                        input.disabled = !checkbox.checked;
                    }
                });
            }
        }
        if (itemData.parentId === '') {
            // 屬於 class 的勾選框：同步所有 class 底下方法的勾選狀態
            const children = body.querySelectorAll(`[data-parent-id="${itemData.id}"]`);
            children.forEach(child => {
                const childCheckbox = child.querySelectorAll('input[type="checkbox"]')[i];
                if (childCheckbox && !childCheckbox.disabled) {
                    childCheckbox.checked = checkbox.checked;
                    if (i === 0) {
                        const childInputs = child.querySelectorAll('input[type="checkbox"]');
                        childInputs.forEach((input, index) => {
                            if (index !== 0) {
                                input.disabled = !checkbox.checked;
                            }
                        });
                    }
                }
            });
        }
        else {
            // 屬於方法的勾選框：檢查所有同 class 的方法，更新 class 的勾選狀態
            const parentRow = body.querySelector(`[data-id="${itemData.parentId}"]`);
            if (parentRow) {
                const siblings = body.querySelectorAll(`[data-parent-id="${itemData.parentId}"]`);
                const allChecked = Array.from(siblings).every(sibling => {
                    const siblingCheckbox = sibling.querySelectorAll('input[type="checkbox"]')[i];
                    return siblingCheckbox && siblingCheckbox.checked;
                });
                const parentCheckbox = parentRow.querySelectorAll('input[type="checkbox"]')[i];
                if (parentCheckbox) {
                    parentCheckbox.checked = allChecked;
                }
            }
        }
    });
}
/**
 * 取得面板勾選的資料
 * @param body 面板容器
 * @returns 勾選的資料 Map<class.method, CheckedData>
 */
function getCheckedMap(body) {
    const checkedMap = new Map();
    const rows = body.querySelectorAll('.row');
    rows.forEach((row) => {
        if (row.dataset.parentId === '')
            return;
        const checkboxes = row.querySelectorAll('input[type="checkbox"]');
        const parentRow = body.querySelector(`[data-id="${row.dataset.parentId}"]`);
        const key = (parentRow ? `${parentRow.dataset.label}.${row.dataset.label}` : row.dataset.label);
        const checked = new Define_1.CheckedData();
        checkboxes.forEach((checkbox, i) => {
            if (i === 0) {
                checked.rewriteBody = checkbox.checked;
            }
            if (i === 1) {
                checked.outputLog = checkbox.checked;
                checked.outputLogEnabled = !checkbox.disabled;
            }
            if (i === 2) {
                checked.callByPromiseAll = checkbox.checked;
                checked.callByPromiseAllEnabled = !checkbox.disabled;
            }
        });
        checkedMap.set(key, checked);
    });
    return checkedMap;
}
exports.getCheckedMap = getCheckedMap;
function rewriteSelectedScript(checkedMap) {
    TsMorphService.rewriteSelectedScript(checkedMap);
}
exports.rewriteSelectedScript = rewriteSelectedScript;
function restoreOriginalScript(checkedMap) {
    TsMorphService.restoreOriginalScript(checkedMap);
}
exports.restoreOriginalScript = restoreOriginalScript;
function saveCurrentPanelSettingToProfile(checkedMap) {
    const targetMap = new Map();
    for (const [key, checkedData] of checkedMap.entries()) {
        const target = key.split('.')[0];
        const data = [checkedData.rewriteBody, checkedData.outputLog, checkedData.callByPromiseAll];
        if (!targetMap.has(target)) {
            targetMap.set(target, data);
        }
        else {
            const existingData = targetMap.get(target);
            for (let i = 0; i < existingData.length; i++) {
                existingData[i] = existingData[i] && data[i];
            }
        }
        Editor.Profile.setConfig(package_json_1.default.name, key, data);
    }
    for (const [key, data] of targetMap.entries()) {
        Editor.Profile.setConfig(package_json_1.default.name, `${key}.${SCRIPT_CONFIG_KEY_POSTFIX}`, data);
    }
}
exports.saveCurrentPanelSettingToProfile = saveCurrentPanelSettingToProfile;
async function downloadInjectScript(checkedMap) {
    const config = formatCheckedMapToConfig(checkedMap);
    const savePath = await Editor.Dialog.save({
        title: '請輸出匯出檔名',
        filters: [{ name: 'JavaScript', extensions: ['js'] }],
    });
    if (savePath.canceled)
        return;
    fs_1.default.writeFileSync(savePath.filePath, config);
    (0, Utils_1.showLog)('包裝腳本下載完成');
}
exports.downloadInjectScript = downloadInjectScript;
function formatCheckedMapToConfig(checkedMap) {
    const extensionPath = Editor.Package.getPath(package_json_1.default.name);
    const configTemplate = fs_1.default.readFileSync(path_1.default.join(extensionPath, 'inject_script_template.txt'), 'utf-8');
    const targetScripts = new Set();
    const toJsonSet = new Set();
    const ignoreSet = new Set();
    for (const [key, checkedData] of checkedMap.entries()) {
        const target = key.split('.')[0];
        if (checkedData.rewriteBody) {
            targetScripts.add(target);
        }
        else {
            ignoreSet.add(key);
        }
        if (checkedData.outputLog) {
            toJsonSet.add(key);
        }
    }
    const configContext = [];
    // configContext.push('window.__UNIT_TEST_CONFIG__ = {');
    // configContext.push(`    targetScripts: [${Array.from(targetScripts).map(s => `'${s}'`).join(', ')}],`);
    // configContext.push(`    toJsonSet: [${Array.from(toJsonSet).map(s => `'${s}'`).join(', ')}],`);
    // configContext.push(`    ignoreSet: [${Array.from(ignoreSet).map(s => `'${s}'`).join(', ')}],`);
    // configContext.push(`    bundleUrl: '',`);
    // configContext.push(`    bundlePrefabPath: 'Prefab/LogViewUI',`);
    // configContext.push(`    `);
    // configContext.push(`    initConfig: () => {`);
    // configContext.push(`        let baseUrl = 'testgame.apex-win.com'`);
    // configContext.push(`        if (!window.location.host.includes('localhost')) {`);
    // configContext.push(`            baseUrl = window.location.host`);
    // configContext.push(`        }`);
    // configContext.push(`        window.__UNIT_TEST_CONFIG__.baseUrl = \`https://\${baseUrl}/h5_game/test/kevin/LogViewUI\``);
    // configContext.push(`    },`);
    // configContext.push(`}`);
    configContext.push('window.__UNIT_TEST_CONFIG__ = {');
    configContext.push(`    targetScripts: [${Array.from(targetScripts).map(s => `'${s}'`).join(', ')}],`);
    configContext.push(`    toJsonSet: [${Array.from(toJsonSet).map(s => `'${s}'`).join(', ')}],`);
    configContext.push(`    ignoreSet: [${Array.from(ignoreSet).map(s => `'${s}'`).join(', ')}],`);
    configContext.push(`    bundleUrl: 'https://testgame.apex-win.com/h5_game/test/kevin/LogViewUI',`);
    configContext.push(`    bundlePrefabPath: 'Prefab/LogViewUI',`);
    configContext.push(`    `);
    configContext.push(`    initConfig: () => {`);
    configContext.push(`    `);
    configContext.push(`    },`);
    configContext.push(`}`);
    const configString = configContext.join('\n') + '\n';
    const result = configTemplate.replace('<<window.__UNIT_TEST_CONFIG__ replace content>>', configString);
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29yZVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvQ29yZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBMEM7QUFDMUMsbUNBQWtDO0FBQ2xDLDRDQUFvQjtBQUNwQixnREFBd0I7QUFDeEIscUNBQWtEO0FBQ2xELGlFQUFtRDtBQUVuRCxTQUFnQixXQUFXO0lBQ3ZCLG1CQUFtQjtJQUNuQixJQUFBLGVBQU8sRUFBQyxhQUFhLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBSEQsa0NBR0M7QUFFRCxtREFBbUQ7QUFDbkQsU0FBUztBQUVULGtCQUFrQjtBQUNsQixtREFBbUQ7QUFDbkQsaUJBQWlCO0FBRWpCLE1BQU0seUJBQXlCLEdBQUcsT0FBTyxDQUFDO0FBRTFDOzs7R0FHRztBQUNJLEtBQUssVUFBVSxjQUFjLENBQUMsSUFBb0I7SUFDckQsTUFBTSxJQUFJLEdBQUcsTUFBTSxjQUFjLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMxRCxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN6QixHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFL0IsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEtB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O0lBQ2hFLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsYUFBYSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzlDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXhCLE1BQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3JELE1BQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsaURBQWlELEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdkcsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYWNrYWdlSlNPTiBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5pbXBvcnQgeyBzaG93TG9nIH0gZnJvbSAnLi9VdGlscyc7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBDaGVja2VkRGF0YSwgUGFuZWxEYXRhIH0gZnJvbSAnLi9EZWZpbmUnO1xyXG5pbXBvcnQgKiBhcyBUc01vcnBoU2VydmljZSBmcm9tICcuL1RzTW9ycGhTZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZnRlclJlbG9hZCgpOiB2b2lkIHtcclxuICAgIC8vIOWcqOmAmeijoeWvpuS9nOaPkuS7tuiiq+mHjeaWsOi8ieWFpeW+jOeahOmCj+i8r1xyXG4gICAgc2hvd0xvZygnYWZ0ZXJSZWxvYWQnKTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIOekuuS+i+aWueazleWNgOWhilxyXG5cclxuLy8g5LiK5pa554K656S65L6L5pa55rOV77yM5LiN6ZyA6KaB5pmC5Y+v5Yiq6ZmkXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyDlvoDkuIvliqDlhaXmj5Lku7bnmoTmpa3li5npgo/ovK/nqIvlvI/norxcclxuXHJcbmNvbnN0IFNDUklQVF9DT05GSUdfS0VZX1BPU1RGSVggPSAnc2VsZiEnO1xyXG5cclxuLyoqXHJcbiAqIOagueaTmuizh+a6kOeuoeeQhuWZqOmBuOS4reeahOiFs+acrO+8jOW7uueri+mdouadv+iFs+acrOOAgeaWueazleWLvumBuOahhlVJXHJcbiAqIEBwYXJhbSBib2R5IFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVNjcmlwdFVJKGJvZHk6IEhUTUxEaXZFbGVtZW50KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgVHNNb3JwaFNlcnZpY2UuZ2V0U2VsZWN0ZWRTY3JpcHREYXRhKCk7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJvdy5jbGFzc05hbWUgPSAncm93JztcclxuICAgICAgICByb3cuZGF0YXNldC5pZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgcm93LmRhdGFzZXQucGFyZW50SWQgPSBpdGVtLnBhcmVudElkO1xyXG4gICAgICAgIHJvdy5kYXRhc2V0LmxhYmVsID0gaXRlbS5sYWJlbDtcclxuXHJcbiAgICAgICAgY29uc3QgbGFiZWxDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsYWJlbENvbC5jbGFzc05hbWUgPSBpdGVtLnBhcmVudElkID09PSAnJyA/ICdjb2wnIDogJ2NvbCBjaGlsZCc7XHJcbiAgICAgICAgbGFiZWxDb2wudGV4dENvbnRlbnQgPSBpdGVtLmxhYmVsO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChsYWJlbENvbCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVEYXRhID0gYXdhaXQgZ2V0UHJvZmlsZURhdGEoYm9keSwgaXRlbSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzUmV3cml0ZUJvZHlDaGVja2VkID0gcHJvZmlsZURhdGEgPyBwcm9maWxlRGF0YVswXSA6IHRydWU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbC5jbGFzc05hbWUgPSAnY29sJztcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgICAgICAgY2hlY2tib3guZGF0YXNldC5jb2x1bW5JbmRleCA9IGkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29sLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvZmlsZURhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBwcm9maWxlRGF0YVtpXTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gIWlzUmV3cml0ZUJvZHlDaGVja2VkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhZGRDaGVja2JveEV2ZW50KGNoZWNrYm94LCBpdGVtLCBib2R5LCBpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOm7nuaTiiByb3cg5pmC5YiH5o+bIGNoaWxkcmVuIOeahOmhr+ekui/pmrHol49cclxuICAgICAgICBsYWJlbENvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOmBv+WFjem7nuaTiiBjaGVja2JveCDmmYLop7jnmbxcclxuICAgICAgICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkudGFnTmFtZSA9PT0gJ0lOUFVUJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBhcmVudC1pZD1cIiR7aXRlbS5pZH1cIl1gKTtcclxuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICBpZiAoaXRlbS5wYXJlbnRJZCAhPT0gJycpIHtcclxuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFByb2ZpbGVEYXRhKGJvZHk6IEhUTUxFbGVtZW50LCBpdGVtOiBQYW5lbERhdGEpOiBQcm9taXNlPGJvb2xlYW5bXT4ge1xyXG4gICAgY29uc3QgaXRlbVBhcmVudCA9IGJvZHkucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2l0ZW0ucGFyZW50SWR9XCJdYCkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBrZXkgPSBpdGVtUGFyZW50ID8gYCR7aXRlbVBhcmVudC5kYXRhc2V0LmxhYmVsfS4ke2l0ZW0ubGFiZWx9YCA6IGAke2l0ZW0ubGFiZWx9LiR7U0NSSVBUX0NPTkZJR19LRVlfUE9TVEZJWH1gO1xyXG4gICAgY29uc3QgcHJvZmlsZURhdGE6IGJvb2xlYW5bXSA9IGF3YWl0IEVkaXRvci5Qcm9maWxlLmdldENvbmZpZyhwYWNrYWdlSlNPTi5uYW1lLCBrZXkpO1xyXG4gICAgcmV0dXJuIHByb2ZpbGVEYXRhO1xyXG59XHJcblxyXG4vKipcclxuICog54K6IGNoZWNrYm94IOa3u+WKoOS6i+S7tuebo+iBvVxyXG4gKiBAcGFyYW0gY2hlY2tib3ggY2hlY2tib3hcclxuICogQHBhcmFtIGl0ZW1EYXRhIOiFs+acrC/mlrnms5Xos4fmlplcclxuICogQHBhcmFtIGJvZHkg6Z2i5p2/5a655ZmoXHJcbiAqIEBwYXJhbSBpIOesrOW5vuWAi+WLvumBuOahhlxyXG4gKi9cclxuZnVuY3Rpb24gYWRkQ2hlY2tib3hFdmVudChjaGVja2JveDogSFRNTElucHV0RWxlbWVudCwgaXRlbURhdGE6IFBhbmVsRGF0YSwgYm9keTogSFRNTEVsZW1lbnQsIGk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLy8g54K6IGNoZWNrYm94IOa3u+WKoOS6i+S7tuebo+iBvVxyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGNoZWNrYm94LmNsb3Nlc3QoJy5yb3cnKTtcclxuICAgICAgICAgICAgaWYgKHJvdykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRzID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRzLmZvckVhY2goKGlucHV0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaW5wdXQgYXMgSFRNTElucHV0RWxlbWVudCkuZGlzYWJsZWQgPSAhY2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGl0ZW1EYXRhLnBhcmVudElkID09PSAnJykge1xyXG4gICAgICAgICAgICAvLyDlsazmlrwgY2xhc3Mg55qE5Yu+6YG45qGG77ya5ZCM5q2l5omA5pyJIGNsYXNzIOW6leS4i+aWueazleeahOWLvumBuOeLgOaFi1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGJvZHkucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGFyZW50LWlkPVwiJHtpdGVtRGF0YS5pZH1cIl1gKTtcclxuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZENoZWNrYm94ID0gY2hpbGQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylbaV0gYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZENoZWNrYm94ICYmICFjaGlsZENoZWNrYm94LmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDaGVja2JveC5jaGVja2VkID0gY2hlY2tib3guY2hlY2tlZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRJbnB1dHMgPSBjaGlsZC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRJbnB1dHMuZm9yRWFjaCgoaW5wdXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW5wdXQgYXMgSFRNTElucHV0RWxlbWVudCkuZGlzYWJsZWQgPSAhY2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDlsazmlrzmlrnms5XnmoTli77pgbjmoYbvvJrmqqLmn6XmiYDmnInlkIwgY2xhc3Mg55qE5pa55rOV77yM5pu05pawIGNsYXNzIOeahOWLvumBuOeLgOaFi1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRSb3cgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpdGVtRGF0YS5wYXJlbnRJZH1cIl1gKTtcclxuICAgICAgICAgICAgaWYgKHBhcmVudFJvdykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2libGluZ3MgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXBhcmVudC1pZD1cIiR7aXRlbURhdGEucGFyZW50SWR9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxDaGVja2VkID0gQXJyYXkuZnJvbShzaWJsaW5ncykuZXZlcnkoc2libGluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZ0NoZWNrYm94ID0gc2libGluZy5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKVtpXSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaWJsaW5nQ2hlY2tib3ggJiYgc2libGluZ0NoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRDaGVja2JveCA9IHBhcmVudFJvdy5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKVtpXSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudENoZWNrYm94KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2hlY2tib3guY2hlY2tlZCA9IGFsbENoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWPluW+l+mdouadv+WLvumBuOeahOizh+aWmVxyXG4gKiBAcGFyYW0gYm9keSDpnaLmnb/lrrnlmahcclxuICogQHJldHVybnMg5Yu+6YG455qE6LOH5paZIE1hcDxjbGFzcy5tZXRob2QsIENoZWNrZWREYXRhPlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENoZWNrZWRNYXAoYm9keTogSFRNTEVsZW1lbnQpOiBNYXA8c3RyaW5nLCBDaGVja2VkRGF0YT4ge1xyXG4gICAgY29uc3QgY2hlY2tlZE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBDaGVja2VkRGF0YT4oKTtcclxuICAgIGNvbnN0IHJvd3MgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3cnKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgICAgaWYgKHJvdy5kYXRhc2V0LnBhcmVudElkID09PSAnJykgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSByb3cucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykgYXMgTm9kZUxpc3RPZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICAgICAgICBjb25zdCBwYXJlbnRSb3cgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtyb3cuZGF0YXNldC5wYXJlbnRJZH1cIl1gKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBjb25zdCBrZXkgPSAocGFyZW50Um93ID8gYCR7cGFyZW50Um93LmRhdGFzZXQubGFiZWx9LiR7cm93LmRhdGFzZXQubGFiZWx9YCA6IHJvdy5kYXRhc2V0LmxhYmVsKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgY29uc3QgY2hlY2tlZCA9IG5ldyBDaGVja2VkRGF0YSgpO1xyXG4gICAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQucmV3cml0ZUJvZHkgPSBjaGVja2JveC5jaGVja2VkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkLm91dHB1dExvZyA9IGNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkLm91dHB1dExvZ0VuYWJsZWQgPSAhY2hlY2tib3guZGlzYWJsZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGkgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQuY2FsbEJ5UHJvbWlzZUFsbCA9IGNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkLmNhbGxCeVByb21pc2VBbGxFbmFibGVkID0gIWNoZWNrYm94LmRpc2FibGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2hlY2tlZE1hcC5zZXQoa2V5LCBjaGVja2VkKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNoZWNrZWRNYXA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlU2VsZWN0ZWRTY3JpcHQoY2hlY2tlZE1hcDogTWFwPHN0cmluZywgQ2hlY2tlZERhdGE+KTogdm9pZCB7XHJcbiAgICBUc01vcnBoU2VydmljZS5yZXdyaXRlU2VsZWN0ZWRTY3JpcHQoY2hlY2tlZE1hcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlT3JpZ2luYWxTY3JpcHQoY2hlY2tlZE1hcDogTWFwPHN0cmluZywgQ2hlY2tlZERhdGE+KTogdm9pZCB7XHJcbiAgICBUc01vcnBoU2VydmljZS5yZXN0b3JlT3JpZ2luYWxTY3JpcHQoY2hlY2tlZE1hcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlQ3VycmVudFBhbmVsU2V0dGluZ1RvUHJvZmlsZShjaGVja2VkTWFwOiBNYXA8c3RyaW5nLCBDaGVja2VkRGF0YT4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhcmdldE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuW10+KCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBba2V5LCBjaGVja2VkRGF0YV0gb2YgY2hlY2tlZE1hcC5lbnRyaWVzKCkpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBrZXkuc3BsaXQoJy4nKVswXTtcclxuICAgICAgICBjb25zdCBkYXRhOiBib29sZWFuW10gPSBbY2hlY2tlZERhdGEucmV3cml0ZUJvZHksIGNoZWNrZWREYXRhLm91dHB1dExvZywgY2hlY2tlZERhdGEuY2FsbEJ5UHJvbWlzZUFsbF07XHJcbiAgICAgICAgaWYgKCF0YXJnZXRNYXAuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0TWFwLnNldCh0YXJnZXQsIGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nRGF0YSA9IHRhcmdldE1hcC5nZXQodGFyZ2V0KSBhcyBib29sZWFuW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhpc3RpbmdEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZ0RhdGFbaV0gPSBleGlzdGluZ0RhdGFbaV0gJiYgZGF0YVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBFZGl0b3IuUHJvZmlsZS5zZXRDb25maWcocGFja2FnZUpTT04ubmFtZSwga2V5LCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIGRhdGFdIG9mIHRhcmdldE1hcC5lbnRyaWVzKCkpIHtcclxuICAgICAgICBFZGl0b3IuUHJvZmlsZS5zZXRDb25maWcocGFja2FnZUpTT04ubmFtZSwgYCR7a2V5fS4ke1NDUklQVF9DT05GSUdfS0VZX1BPU1RGSVh9YCwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkb3dubG9hZEluamVjdFNjcmlwdChjaGVja2VkTWFwOiBNYXA8c3RyaW5nLCBDaGVja2VkRGF0YT4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IGZvcm1hdENoZWNrZWRNYXBUb0NvbmZpZyhjaGVja2VkTWFwKTtcclxuICAgIGNvbnN0IHNhdmVQYXRoOiB7IGNhbmNlbGVkOiBib29sZWFuOyBmaWxlUGF0aDogc3RyaW5nOyB9ID0gYXdhaXQgRWRpdG9yLkRpYWxvZy5zYXZlKHtcclxuICAgICAgICB0aXRsZTogJ+iri+i8uOWHuuWMr+WHuuaqlOWQjScsXHJcbiAgICAgICAgZmlsdGVyczogW3sgbmFtZTogJ0phdmFTY3JpcHQnLCBleHRlbnNpb25zOiBbJ2pzJ10gfV0sXHJcbiAgICB9KTtcclxuICAgIGlmIChzYXZlUGF0aC5jYW5jZWxlZCkgcmV0dXJuO1xyXG4gICAgZnMud3JpdGVGaWxlU3luYyhzYXZlUGF0aC5maWxlUGF0aCwgY29uZmlnKTtcclxuICAgIHNob3dMb2coJ+WMheijneiFs+acrOS4i+i8ieWujOaIkCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRDaGVja2VkTWFwVG9Db25maWcoY2hlY2tlZE1hcDogTWFwPHN0cmluZywgQ2hlY2tlZERhdGE+KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGV4dGVuc2lvblBhdGggPSBFZGl0b3IuUGFja2FnZS5nZXRQYXRoKHBhY2thZ2VKU09OLm5hbWUpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IGNvbmZpZ1RlbXBsYXRlID0gZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihleHRlbnNpb25QYXRoLCAnaW5qZWN0X3NjcmlwdF90ZW1wbGF0ZS50eHQnKSwgJ3V0Zi04Jyk7XHJcbiAgICBjb25zdCB0YXJnZXRTY3JpcHRzID0gbmV3IFNldCgpO1xyXG4gICAgY29uc3QgdG9Kc29uU2V0ID0gbmV3IFNldCgpO1xyXG4gICAgY29uc3QgaWdub3JlU2V0ID0gbmV3IFNldCgpO1xyXG4gICAgZm9yIChjb25zdCBba2V5LCBjaGVja2VkRGF0YV0gb2YgY2hlY2tlZE1hcC5lbnRyaWVzKCkpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBrZXkuc3BsaXQoJy4nKVswXTtcclxuICAgICAgICBpZiAoY2hlY2tlZERhdGEucmV3cml0ZUJvZHkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0U2NyaXB0cy5hZGQodGFyZ2V0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZ25vcmVTZXQuYWRkKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGVja2VkRGF0YS5vdXRwdXRMb2cpIHtcclxuICAgICAgICAgICAgdG9Kc29uU2V0LmFkZChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNvbmZpZ0NvbnRleHQ6IHN0cmluZ1tdID0gW107XHJcbiAgICAvLyBjb25maWdDb250ZXh0LnB1c2goJ3dpbmRvdy5fX1VOSVRfVEVTVF9DT05GSUdfXyA9IHsnKTtcclxuICAgIC8vIGNvbmZpZ0NvbnRleHQucHVzaChgICAgIHRhcmdldFNjcmlwdHM6IFske0FycmF5LmZyb20odGFyZ2V0U2NyaXB0cykubWFwKHMgPT4gYCcke3N9J2ApLmpvaW4oJywgJyl9XSxgKTtcclxuICAgIC8vIGNvbmZpZ0NvbnRleHQucHVzaChgICAgIHRvSnNvblNldDogWyR7QXJyYXkuZnJvbSh0b0pzb25TZXQpLm1hcChzID0+IGAnJHtzfSdgKS5qb2luKCcsICcpfV0sYCk7XHJcbiAgICAvLyBjb25maWdDb250ZXh0LnB1c2goYCAgICBpZ25vcmVTZXQ6IFske0FycmF5LmZyb20oaWdub3JlU2V0KS5tYXAocyA9PiBgJyR7c30nYCkuam9pbignLCAnKX1dLGApO1xyXG4gICAgLy8gY29uZmlnQ29udGV4dC5wdXNoKGAgICAgYnVuZGxlVXJsOiAnJyxgKTtcclxuICAgIC8vIGNvbmZpZ0NvbnRleHQucHVzaChgICAgIGJ1bmRsZVByZWZhYlBhdGg6ICdQcmVmYWIvTG9nVmlld1VJJyxgKTtcclxuICAgIC8vIGNvbmZpZ0NvbnRleHQucHVzaChgICAgIGApO1xyXG4gICAgLy8gY29uZmlnQ29udGV4dC5wdXNoKGAgICAgaW5pdENvbmZpZzogKCkgPT4ge2ApO1xyXG4gICAgLy8gY29uZmlnQ29udGV4dC5wdXNoKGAgICAgICAgIGxldCBiYXNlVXJsID0gJ3Rlc3RnYW1lLmFwZXgtd2luLmNvbSdgKTtcclxuICAgIC8vIGNvbmZpZ0NvbnRleHQucHVzaChgICAgICAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5ob3N0LmluY2x1ZGVzKCdsb2NhbGhvc3QnKSkge2ApO1xyXG4gICAgLy8gY29uZmlnQ29udGV4dC5wdXNoKGAgICAgICAgICAgICBiYXNlVXJsID0gd2luZG93LmxvY2F0aW9uLmhvc3RgKTtcclxuICAgIC8vIGNvbmZpZ0NvbnRleHQucHVzaChgICAgICAgICB9YCk7XHJcbiAgICAvLyBjb25maWdDb250ZXh0LnB1c2goYCAgICAgICAgd2luZG93Ll9fVU5JVF9URVNUX0NPTkZJR19fLmJhc2VVcmwgPSBcXGBodHRwczovL1xcJHtiYXNlVXJsfS9oNV9nYW1lL3Rlc3Qva2V2aW4vTG9nVmlld1VJXFxgYCk7XHJcbiAgICAvLyBjb25maWdDb250ZXh0LnB1c2goYCAgICB9LGApO1xyXG4gICAgLy8gY29uZmlnQ29udGV4dC5wdXNoKGB9YCk7XHJcblxyXG4gICAgY29uZmlnQ29udGV4dC5wdXNoKCd3aW5kb3cuX19VTklUX1RFU1RfQ09ORklHX18gPSB7Jyk7XHJcbiAgICBjb25maWdDb250ZXh0LnB1c2goYCAgICB0YXJnZXRTY3JpcHRzOiBbJHtBcnJheS5mcm9tKHRhcmdldFNjcmlwdHMpLm1hcChzID0+IGAnJHtzfSdgKS5qb2luKCcsICcpfV0sYCk7XHJcbiAgICBjb25maWdDb250ZXh0LnB1c2goYCAgICB0b0pzb25TZXQ6IFske0FycmF5LmZyb20odG9Kc29uU2V0KS5tYXAocyA9PiBgJyR7c30nYCkuam9pbignLCAnKX1dLGApO1xyXG4gICAgY29uZmlnQ29udGV4dC5wdXNoKGAgICAgaWdub3JlU2V0OiBbJHtBcnJheS5mcm9tKGlnbm9yZVNldCkubWFwKHMgPT4gYCcke3N9J2ApLmpvaW4oJywgJyl9XSxgKTtcclxuICAgIGNvbmZpZ0NvbnRleHQucHVzaChgICAgIGJ1bmRsZVVybDogJ2h0dHBzOi8vdGVzdGdhbWUuYXBleC13aW4uY29tL2g1X2dhbWUvdGVzdC9rZXZpbi9Mb2dWaWV3VUknLGApO1xyXG4gICAgY29uZmlnQ29udGV4dC5wdXNoKGAgICAgYnVuZGxlUHJlZmFiUGF0aDogJ1ByZWZhYi9Mb2dWaWV3VUknLGApO1xyXG4gICAgY29uZmlnQ29udGV4dC5wdXNoKGAgICAgYCk7XHJcbiAgICBjb25maWdDb250ZXh0LnB1c2goYCAgICBpbml0Q29uZmlnOiAoKSA9PiB7YCk7XHJcbiAgICBjb25maWdDb250ZXh0LnB1c2goYCAgICBgKTtcclxuICAgIGNvbmZpZ0NvbnRleHQucHVzaChgICAgIH0sYCk7XHJcbiAgICBjb25maWdDb250ZXh0LnB1c2goYH1gKTtcclxuXHJcbiAgICBjb25zdCBjb25maWdTdHJpbmcgPSBjb25maWdDb250ZXh0LmpvaW4oJ1xcbicpICsgJ1xcbic7XHJcbiAgICBjb25zdCByZXN1bHQgPSBjb25maWdUZW1wbGF0ZS5yZXBsYWNlKCc8PHdpbmRvdy5fX1VOSVRfVEVTVF9DT05GSUdfXyByZXBsYWNlIGNvbnRlbnQ+PicsIGNvbmZpZ1N0cmluZyk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59Il19