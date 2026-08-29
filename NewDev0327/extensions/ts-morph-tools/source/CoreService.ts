import { AssetInfo } from "@cocos/creator-types/editor/packages/asset-db/@types/public";
import { showLog, showWarn, showError, waitTime } from './Utils';
import { Project, SourceFile } from "ts-morph";
import path from "path";
import fs from "fs";
const packageJSON = require('../package.json');

const memo = new Map<SourceFile, SourceFile[][]>();

export function afterReload() {
    // 在這裡實作插件被重新載入後的邏輯
    showLog('afterReload');
}

// 上方為示例方法，不需要時可刪除
// ------------------------------------------------
// 往下加入插件的業務邏輯程式碼

/**
 * 生成assets/Game/GameXXX底下的 ModuleEntryXXX.ts
 */
export async function generateModuleEntry(): Promise<void> {
    // 1. 找出所有 assets/Game/GameXXX 資料夾
    const gameFolders: AssetInfo[] = await Editor.Message.request('asset-db', 'query-assets', {
        pattern: 'db://assets/Game/Game**',
    });
    // 找不到就結束
    if (gameFolders.length === 0) {
        showWarn('asset/Game資料夾底下找不到遊戲館資料夾，請先創建一個');
        return;
    }
    // 2. 建立 ts-morph project
    const project = new Project({
        tsConfigFilePath: path.resolve(Editor.Project.path, 'tsconfig.json'),
        skipAddingFilesFromTsConfig: true,
    });
    // 3. 取得 ModuleEntry.ts 本體
    const moduleEntry = project.addSourceFileAtPath(path.resolve(Editor.Project.path, 'assets/Scripts/ModuleEntry.ts'));
    const createPromiseList: Promise<string>[] = [];
    // 4. 為所有可以取得 Game ID 的遊戲館資料夾建立對應的 ModuleEntryXXX.ts
    for (const gameFolder of gameFolders) {
        const gameIDString = gameFolder.name.replace('Game', '');
        const gameIDNumber = Number(gameIDString);
        if (isNaN(gameIDNumber)) {
            continue;
        }
        project.addSourceFilesAtPaths(Editor.Project.path + `/assets/Game/Game${gameIDNumber}/**/*.ts`);
        createPromiseList.push(copyModuleEntryByGameID(gameIDNumber, moduleEntry));
    }
    const dbPathList = (await Promise.all(createPromiseList)).filter((path): path is string => path !== '');

    // 5. 把遊戲館資料夾底下指向 ModuleEntry.ts 的引用，改為指向對應的 ModuleEntryXXX.ts
    const updatePathList: string[] = [];
    project.getSourceFiles().forEach((sourceFile) => {
        if (sourceFile.getFilePath().includes('ModuleEntry')) return;
        const match = sourceFile.getFilePath().match(/Game(\d+)/);
        if (!match) return;
        const gameID = match[1];
        const targetSourceFile = project.getSourceFile(path.resolve(Editor.Project.path, `assets/Game/Game${gameID}/ModuleEntry${gameID}.ts`));
        if (!targetSourceFile) return;

        sourceFile.getImportDeclarations().forEach((importDec) => {
            if (importDec.getModuleSpecifierSourceFile() === moduleEntry) {
                importDec.setModuleSpecifier(sourceFile.getRelativePathAsModuleSpecifierTo(targetSourceFile));
            }
        });
        sourceFile.saveSync();
        const filePath = sourceFile.getFilePath();
        const basePath = Editor.Utils.Path.slash(Editor.Project.path);
        const dbPath = filePath.replace(basePath, 'db:/');
        updatePathList.push(dbPath);
    });

    // 6. 用 Editor API 刷新由 ts-morph 生成或更新過的資源
    const updatePromiseList: Promise<void>[] = [];
    for (const dbPath of dbPathList) {
        updatePromiseList.push(Editor.Message.request('asset-db', 'refresh-asset', dbPath));
    }
    for (const dbPath of updatePathList) {
        updatePromiseList.push(Editor.Message.request('asset-db', 'reimport-asset', dbPath));
    }
    await Promise.all(updatePromiseList);

    showLog('generateModuleEntry success');
}

/**
 * 根據 GameID 複製一份 ModuleEntryXXX.ts 到遊戲館資料夾底下
 * @param gameIDNumber 
 * @param moduleEntry 
 * @returns 
 */
async function copyModuleEntryByGameID(gameIDNumber: number, moduleEntry: SourceFile): Promise<string> {
    const dbPath = `db://assets/Game/Game${gameIDNumber}/ModuleEntry${gameIDNumber}.ts`;
    const assetInfo = await Editor.Message.request('asset-db', 'query-asset-info', dbPath);
    if (assetInfo) {
        return '';
    }
    const newPath = path.resolve(Editor.Project.path, `assets/Game/Game${gameIDNumber}/ModuleEntry${gameIDNumber}.ts`);
    const newModuleEntry = moduleEntry.copy(newPath, { overwrite: true });
    newModuleEntry.saveSync();
    return dbPath;
}

/**
 * 檢查某個檔案是否 import cc (目前僅支援 entry.ts 和 entryHistory.ts)
 * @param targetName 
 */
export function checkDependOnCC(targetName: string): void {
    if (targetName !== 'entry' && targetName !== 'entryHistory') {
        showWarn('目前僅支援檢查 entry.ts 和 entryHistory.ts');
        return;
    }
    // 1. 建立 ts-morph project
    const project = new Project({
        tsConfigFilePath: path.resolve(Editor.Project.path, 'tsconfig.json'),
        skipAddingFilesFromTsConfig: true,
    });
    // 2. 取得目標檔案
    const entry = project.addSourceFileAtPath(Editor.Project.path + `/assets/Tool/CheckScoreESBuild/${targetName}.ts`);
    // 3. 找出所有 import cc 的引用鏈
    const chains = findAllCcChains(entry);
    // 4. 輸出結果
    if (chains.length > 0) {
        // 數量過多時輸出到檔案，以免 cocos creator 編輯器當掉
        if (chains.length > 20) {
            showWarn(`引用鏈數量為 ${chains.length} 個，已將結果輸出到 assets/Tool/CheckScoreESBuild/${targetName}_checkResult.txt`);
            const content = chains.map((chain) => chain.map((file) => getFilePath(file)).join(' -> ')).join('\n');
            Editor.Message.send('asset-db', 'create-asset', `db://assets/Tool/CheckScoreESBuild/${targetName}_checkResult.txt`, content)
        } else {
            showLog(`引用鏈數量為 ${chains.length} 個`);
            chains.forEach((chain) => {
                showWarn(chain.map((file) => getFilePath(file)).join(' -> '));
            });
        }
    } else {
        showLog(`${targetName}.ts 沒有 import cc`);
    }
}

/**
 * 找出所有 import cc 的引用鏈
 * @param entry 目標檔案
 * @returns 引用鏈二維陣列
 */
function findAllCcChains(entry: SourceFile): SourceFile[][] {
    // 1. 建立快取，避免重複計算
    const memo = new Map<SourceFile, SourceFile[][]>();

    // 2. 深度優先搜尋
    function dfs(
        current: SourceFile,
        visiting: Set<SourceFile>
    ): SourceFile[][] {

        // ✅ memo 命中
        if (memo.has(current)) {
            return memo.get(current)!;
        }

        // 防循環
        if (visiting.has(current)) {
            return [];
        }

        visiting.add(current);

        const results: SourceFile[][] = [];

        // 是否直接 import cc
        const hasCc = current.getImportDeclarations()
            .some(imp =>
                imp.getModuleSpecifierValue() === "cc"
                && !imp.isTypeOnly()
            );

        // 是否到達 ModuleEntry
        const hasReachModuleEntry = current.getFilePath().includes('ModuleEntry');

        // 滿足其中一種條件就直接中斷，否則會找得太深
        if (hasCc || hasReachModuleEntry) {
            results.push([current]);
            visiting.delete(current);
            memo.set(current, results);
            return results;
        }

        // 往下找 import
        for (const imp of current.getImportDeclarations()) {

            if (imp.isTypeOnly()) continue;

            const next = imp.getModuleSpecifierSourceFile();
            if (!next) continue;

            const subChains = dfs(next, visiting);

            for (const chain of subChains) {
                results.push([current, ...chain]);
            }
        }

        // 往下找 export
        for (const exp of current.getExportDeclarations()) {

            if (!exp.isNamespaceExport()) continue;

            const next = exp.getModuleSpecifierSourceFile();
            if (!next) continue;

            const subChains = dfs(next, visiting);

            for (const chain of subChains) {
                results.push([current, ...chain]);
            }
        }

        visiting.delete(current);

        memo.set(current, results);
        return results;
    }

    return dfs(entry, new Set());
}

function getFilePath(file: SourceFile): string {
    const filePath = file.getFilePath();
    const basePath = Editor.Utils.Path.slash(Editor.Project.path);
    return filePath.replace(basePath, '');
}