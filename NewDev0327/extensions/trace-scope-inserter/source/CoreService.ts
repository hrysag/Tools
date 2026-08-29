import packageJSON from '../package.json';
import { showLog } from './Utils';
import fs from 'fs';
import path from 'path';
import { CheckedData, PanelData } from './Define';
import * as TsMorphService from './TsMorphService';

export function afterReload(): void {
    // 在這裡實作插件被重新載入後的邏輯
    showLog('afterReload');
}

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
export async function createScriptUI(body: HTMLDivElement): Promise<void> {
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
            } else if (i === 0) {
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
            if ((e.target as HTMLElement).tagName === 'INPUT') return;

            const children = body.querySelectorAll(`[data-parent-id="${item.id}"]`);
            children.forEach(child => {
                child.classList.toggle('hidden');
            });
        });

        body.appendChild(row);
        if (item.parentId !== '') {
            row.classList.toggle('hidden');
        }
    };
}

async function getProfileData(body: HTMLElement, item: PanelData): Promise<boolean[]> {
    const itemParent = body.querySelector(`[data-id="${item.parentId}"]`) as HTMLElement;
    const key = itemParent ? `${itemParent.dataset.label}.${item.label}` : `${item.label}.${SCRIPT_CONFIG_KEY_POSTFIX}`;
    const profileData: boolean[] = await Editor.Profile.getConfig(packageJSON.name, key);
    return profileData;
}

/**
 * 為 checkbox 添加事件監聽
 * @param checkbox checkbox
 * @param itemData 腳本/方法資料
 * @param body 面板容器
 * @param i 第幾個勾選框
 */
function addCheckboxEvent(checkbox: HTMLInputElement, itemData: PanelData, body: HTMLElement, i: number): void {
    // 為 checkbox 添加事件監聽
    checkbox.addEventListener('change', () => {
        if (i === 0) {
            const row = checkbox.closest('.row');
            if (row) {
                const inputs = row.querySelectorAll('input[type="checkbox"]');
                inputs.forEach((input, index) => {
                    if (index !== 0) {
                        (input as HTMLInputElement).disabled = !checkbox.checked;
                    }
                });
            }
        }

        if (itemData.parentId === '') {
            // 屬於 class 的勾選框：同步所有 class 底下方法的勾選狀態
            const children = body.querySelectorAll(`[data-parent-id="${itemData.id}"]`);
            children.forEach(child => {
                const childCheckbox = child.querySelectorAll('input[type="checkbox"]')[i] as HTMLInputElement;
                if (childCheckbox && !childCheckbox.disabled) {
                    childCheckbox.checked = checkbox.checked;

                    if (i === 0) {
                        const childInputs = child.querySelectorAll('input[type="checkbox"]');
                        childInputs.forEach((input, index) => {
                            if (index !== 0) {
                                (input as HTMLInputElement).disabled = !checkbox.checked;
                            }
                        });
                    }
                }
            });
        } else {
            // 屬於方法的勾選框：檢查所有同 class 的方法，更新 class 的勾選狀態
            const parentRow = body.querySelector(`[data-id="${itemData.parentId}"]`);
            if (parentRow) {
                const siblings = body.querySelectorAll(`[data-parent-id="${itemData.parentId}"]`);
                const allChecked = Array.from(siblings).every(sibling => {
                    const siblingCheckbox = sibling.querySelectorAll('input[type="checkbox"]')[i] as HTMLInputElement;
                    return siblingCheckbox && siblingCheckbox.checked;
                });

                const parentCheckbox = parentRow.querySelectorAll('input[type="checkbox"]')[i] as HTMLInputElement;
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
export function getCheckedMap(body: HTMLElement): Map<string, CheckedData> {
    const checkedMap = new Map<string, CheckedData>();
    const rows = body.querySelectorAll('.row') as NodeListOf<HTMLElement>;
    rows.forEach((row) => {
        if (row.dataset.parentId === '') return;
        const checkboxes = row.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
        const parentRow = body.querySelector(`[data-id="${row.dataset.parentId}"]`) as HTMLElement;
        const key = (parentRow ? `${parentRow.dataset.label}.${row.dataset.label}` : row.dataset.label) as string;
        const checked = new CheckedData();
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

export function rewriteSelectedScript(checkedMap: Map<string, CheckedData>): void {
    TsMorphService.rewriteSelectedScript(checkedMap);
}

export function restoreOriginalScript(checkedMap: Map<string, CheckedData>): void {
    TsMorphService.restoreOriginalScript(checkedMap);
}

export function saveCurrentPanelSettingToProfile(checkedMap: Map<string, CheckedData>): void {
    const targetMap = new Map<string, boolean[]>();

    for (const [key, checkedData] of checkedMap.entries()) {
        const target = key.split('.')[0];
        const data: boolean[] = [checkedData.rewriteBody, checkedData.outputLog, checkedData.callByPromiseAll];
        if (!targetMap.has(target)) {
            targetMap.set(target, data);
        } else {
            const existingData = targetMap.get(target) as boolean[];
            for (let i = 0; i < existingData.length; i++) {
                existingData[i] = existingData[i] && data[i];
            }
        }
        Editor.Profile.setConfig(packageJSON.name, key, data);
    }

    for (const [key, data] of targetMap.entries()) {
        Editor.Profile.setConfig(packageJSON.name, `${key}.${SCRIPT_CONFIG_KEY_POSTFIX}`, data);
    }
}

export async function downloadInjectScript(checkedMap: Map<string, CheckedData>): Promise<void> {
    const config = formatCheckedMapToConfig(checkedMap);
    const savePath: { canceled: boolean; filePath: string; } = await Editor.Dialog.save({
        title: '請輸出匯出檔名',
        filters: [{ name: 'JavaScript', extensions: ['js'] }],
    });
    if (savePath.canceled) return;
    fs.writeFileSync(savePath.filePath, config);
    showLog('包裝腳本下載完成');
}

function formatCheckedMapToConfig(checkedMap: Map<string, CheckedData>): string {
    const extensionPath = Editor.Package.getPath(packageJSON.name) as string;
    const configTemplate = fs.readFileSync(path.join(extensionPath, 'inject_script_template.txt'), 'utf-8');
    const targetScripts = new Set();
    const toJsonSet = new Set();
    const ignoreSet = new Set();
    for (const [key, checkedData] of checkedMap.entries()) {
        const target = key.split('.')[0];
        if (checkedData.rewriteBody) {
            targetScripts.add(target);
        } else {
            ignoreSet.add(key);
        }
        if (checkedData.outputLog) {
            toJsonSet.add(key);
        }
    }
    const configContext: string[] = [];
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