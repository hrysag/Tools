"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDependOnCC = exports.generateModuleEntry = exports.afterReload = void 0;
const Utils_1 = require("./Utils");
const ts_morph_1 = require("ts-morph");
const path_1 = __importDefault(require("path"));
const packageJSON = require('../package.json');
const memo = new Map();
function afterReload() {
    // 在這裡實作插件被重新載入後的邏輯
    (0, Utils_1.showLog)('afterReload');
}
exports.afterReload = afterReload;
// 上方為示例方法，不需要時可刪除
// ------------------------------------------------
// 往下加入插件的業務邏輯程式碼
/**
 * 生成assets/Game/GameXXX底下的 ModuleEntryXXX.ts
 */
async function generateModuleEntry() {
    // 1. 找出所有 assets/Game/GameXXX 資料夾
    const gameFolders = await Editor.Message.request('asset-db', 'query-assets', {
        pattern: 'db://assets/Game/Game**',
    });
    // 找不到就結束
    if (gameFolders.length === 0) {
        (0, Utils_1.showWarn)('asset/Game資料夾底下找不到遊戲館資料夾，請先創建一個');
        return;
    }
    // 2. 建立 ts-morph project
    const project = new ts_morph_1.Project({
        tsConfigFilePath: path_1.default.resolve(Editor.Project.path, 'tsconfig.json'),
        skipAddingFilesFromTsConfig: true,
    });
    // 3. 取得 ModuleEntry.ts 本體
    const moduleEntry = project.addSourceFileAtPath(path_1.default.resolve(Editor.Project.path, 'assets/Scripts/ModuleEntry.ts'));
    const createPromiseList = [];
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
    const dbPathList = (await Promise.all(createPromiseList)).filter((path) => path !== '');
    // 5. 把遊戲館資料夾底下指向 ModuleEntry.ts 的引用，改為指向對應的 ModuleEntryXXX.ts
    const updatePathList = [];
    project.getSourceFiles().forEach((sourceFile) => {
        if (sourceFile.getFilePath().includes('ModuleEntry'))
            return;
        const match = sourceFile.getFilePath().match(/Game(\d+)/);
        if (!match)
            return;
        const gameID = match[1];
        const targetSourceFile = project.getSourceFile(path_1.default.resolve(Editor.Project.path, `assets/Game/Game${gameID}/ModuleEntry${gameID}.ts`));
        if (!targetSourceFile)
            return;
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
    const updatePromiseList = [];
    for (const dbPath of dbPathList) {
        updatePromiseList.push(Editor.Message.request('asset-db', 'refresh-asset', dbPath));
    }
    for (const dbPath of updatePathList) {
        updatePromiseList.push(Editor.Message.request('asset-db', 'reimport-asset', dbPath));
    }
    await Promise.all(updatePromiseList);
    (0, Utils_1.showLog)('generateModuleEntry success');
}
exports.generateModuleEntry = generateModuleEntry;
/**
 * 根據 GameID 複製一份 ModuleEntryXXX.ts 到遊戲館資料夾底下
 * @param gameIDNumber
 * @param moduleEntry
 * @returns
 */
async function copyModuleEntryByGameID(gameIDNumber, moduleEntry) {
    const dbPath = `db://assets/Game/Game${gameIDNumber}/ModuleEntry${gameIDNumber}.ts`;
    const assetInfo = await Editor.Message.request('asset-db', 'query-asset-info', dbPath);
    if (assetInfo) {
        return '';
    }
    const newPath = path_1.default.resolve(Editor.Project.path, `assets/Game/Game${gameIDNumber}/ModuleEntry${gameIDNumber}.ts`);
    const newModuleEntry = moduleEntry.copy(newPath, { overwrite: true });
    newModuleEntry.saveSync();
    return dbPath;
}
/**
 * 檢查某個檔案是否 import cc (目前僅支援 entry.ts 和 entryHistory.ts)
 * @param targetName
 */
function checkDependOnCC(targetName) {
    if (targetName !== 'entry' && targetName !== 'entryHistory') {
        (0, Utils_1.showWarn)('目前僅支援檢查 entry.ts 和 entryHistory.ts');
        return;
    }
    // 1. 建立 ts-morph project
    const project = new ts_morph_1.Project({
        tsConfigFilePath: path_1.default.resolve(Editor.Project.path, 'tsconfig.json'),
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
            (0, Utils_1.showWarn)(`引用鏈數量為 ${chains.length} 個，已將結果輸出到 assets/Tool/CheckScoreESBuild/${targetName}_checkResult.txt`);
            const content = chains.map((chain) => chain.map((file) => getFilePath(file)).join(' -> ')).join('\n');
            Editor.Message.send('asset-db', 'create-asset', `db://assets/Tool/CheckScoreESBuild/${targetName}_checkResult.txt`, content);
        }
        else {
            (0, Utils_1.showLog)(`引用鏈數量為 ${chains.length} 個`);
            chains.forEach((chain) => {
                (0, Utils_1.showWarn)(chain.map((file) => getFilePath(file)).join(' -> '));
            });
        }
    }
    else {
        (0, Utils_1.showLog)(`${targetName}.ts 沒有 import cc`);
    }
}
exports.checkDependOnCC = checkDependOnCC;
/**
 * 找出所有 import cc 的引用鏈
 * @param entry 目標檔案
 * @returns 引用鏈二維陣列
 */
function findAllCcChains(entry) {
    // 1. 建立快取，避免重複計算
    const memo = new Map();
    // 2. 深度優先搜尋
    function dfs(current, visiting) {
        // ✅ memo 命中
        if (memo.has(current)) {
            return memo.get(current);
        }
        // 防循環
        if (visiting.has(current)) {
            return [];
        }
        visiting.add(current);
        const results = [];
        // 是否直接 import cc
        const hasCc = current.getImportDeclarations()
            .some(imp => imp.getModuleSpecifierValue() === "cc"
            && !imp.isTypeOnly());
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
            if (imp.isTypeOnly())
                continue;
            const next = imp.getModuleSpecifierSourceFile();
            if (!next)
                continue;
            const subChains = dfs(next, visiting);
            for (const chain of subChains) {
                results.push([current, ...chain]);
            }
        }
        // 往下找 export
        for (const exp of current.getExportDeclarations()) {
            if (!exp.isNamespaceExport())
                continue;
            const next = exp.getModuleSpecifierSourceFile();
            if (!next)
                continue;
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
function getFilePath(file) {
    const filePath = file.getFilePath();
    const basePath = Editor.Utils.Path.slash(Editor.Project.path);
    return filePath.replace(basePath, '');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29yZVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvQ29yZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsbUNBQWlFO0FBQ2pFLHVDQUErQztBQUMvQyxnREFBd0I7QUFFeEIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFL0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQThCLENBQUM7QUFFbkQsU0FBZ0IsV0FBVztJQUN2QixtQkFBbUI7SUFDbkIsSUFBQSxlQUFPLEVBQUMsYUFBYSxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUhELGtDQUdDO0FBRUQsa0JBQWtCO0FBQ2xCLG1EQUFtRDtBQUNuRCxpQkFBaUI7QUFFakI7O0dBRUc7QUFDSSxLQUFLLFVBQVUsbUJBQW1CO0lBQ3JDLGtDQUFrQztJQUNsQyxNQUFNLFdBQVcsR0FBZ0IsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsY0FBYyxFQUFFO1FBQ3RGLE9BQU8sRUFBRSx5QkFBeUI7S0FDckMsQ0FBQyxDQUFDO0lBQ0gsU0FBUztJQUNULElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDMUIsSUFBQSxnQkFBUSxFQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDNUMsT0FBTztLQUNWO0lBQ0QseUJBQXlCO0lBQ3pCLE1BQU0sT0FBTyxHQUFHLElBQUksa0JBQU8sQ0FBQztRQUN4QixnQkFBZ0IsRUFBRSxjQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQztRQUNwRSwyQkFBMkIsRUFBRSxJQUFJO0tBQ3BDLENBQUMsQ0FBQztJQUNILDBCQUEwQjtJQUMxQixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxD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Q3JDO1NBQ0o7UUFFRCxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxJQUFnQjtJQUNqQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUQsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXNzZXRJbmZvIH0gZnJvbSBcIkBjb2Nvcy9jcmVhdG9yLXR5cGVzL2VkaXRvci9wYWNrYWdlcy9hc3NldC1kYi9AdHlwZXMvcHVibGljXCI7XHJcbmltcG9ydCB7IHNob3dMb2csIHNob3dXYXJuLCBzaG93RXJyb3IsIHdhaXRUaW1lIH0gZnJvbSAnLi9VdGlscyc7XHJcbmltcG9ydCB7IFByb2plY3QsIFNvdXJjZUZpbGUgfSBmcm9tIFwidHMtbW9ycGhcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5jb25zdCBwYWNrYWdlSlNPTiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpO1xyXG5cclxuY29uc3QgbWVtbyA9IG5ldyBNYXA8U291cmNlRmlsZSwgU291cmNlRmlsZVtdW10+KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWZ0ZXJSZWxvYWQoKSB7XHJcbiAgICAvLyDlnKjpgJnoo6Hlr6bkvZzmj5Lku7booqvph43mlrDovInlhaXlvoznmoTpgo/ovK9cclxuICAgIHNob3dMb2coJ2FmdGVyUmVsb2FkJyk7XHJcbn1cclxuXHJcbi8vIOS4iuaWueeCuuekuuS+i+aWueazle+8jOS4jemcgOimgeaZguWPr+WIqumZpFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8g5b6A5LiL5Yqg5YWl5o+S5Lu255qE5qWt5YuZ6YKP6Lyv56iL5byP56K8XHJcblxyXG4vKipcclxuICog55Sf5oiQYXNzZXRzL0dhbWUvR2FtZVhYWOW6leS4i+eahCBNb2R1bGVFbnRyeVhYWC50c1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlTW9kdWxlRW50cnkoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAvLyAxLiDmib7lh7rmiYDmnIkgYXNzZXRzL0dhbWUvR2FtZVhYWCDos4fmlpnlpL5cclxuICAgIGNvbnN0IGdhbWVGb2xkZXJzOiBBc3NldEluZm9bXSA9IGF3YWl0IEVkaXRvci5NZXNzYWdlLnJlcXVlc3QoJ2Fzc2V0LWRiJywgJ3F1ZXJ5LWFzc2V0cycsIHtcclxuICAgICAgICBwYXR0ZXJuOiAnZGI6Ly9hc3NldHMvR2FtZS9HYW1lKionLFxyXG4gICAgfSk7XHJcbiAgICAvLyDmib7kuI3liLDlsLHntZDmnZ9cclxuICAgIGlmIChnYW1lRm9sZGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBzaG93V2FybignYXNzZXQvR2FtZeizh+aWmeWkvuW6leS4i+aJvuS4jeWIsOmBiuaIsumkqOizh+aWmeWkvu+8jOiri+WFiOWJteW7uuS4gOWAiycpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIDIuIOW7uueriyB0cy1tb3JwaCBwcm9qZWN0XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3Qoe1xyXG4gICAgICAgIHRzQ29uZmlnRmlsZVBhdGg6IHBhdGgucmVzb2x2ZShFZGl0b3IuUHJvamVjdC5wYXRoLCAndHNjb25maWcuanNvbicpLFxyXG4gICAgICAgIHNraXBBZGRpbmdGaWxlc0Zyb21Uc0NvbmZpZzogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgLy8gMy4g5Y+W5b6XIE1vZHVsZUVudHJ5LnRzIOacrOmrlFxyXG4gICAgY29uc3QgbW9kdWxlRW50cnkgPSBwcm9qZWN0LmFkZFNvdXJjZUZpbGVBdFBhdGgocGF0aC5yZXNvbHZlKEVkaXRvci5Qcm9qZWN0LnBhdGgsICdhc3NldHMvU2NyaXB0cy9Nb2R1bGVFbnRyeS50cycpKTtcclxuICAgIGNvbnN0IGNyZWF0ZVByb21pc2VMaXN0OiBQcm9taXNlPHN0cmluZz5bXSA9IFtdO1xyXG4gICAgLy8gNC4g54K65omA5pyJ5Y+v5Lul5Y+W5b6XIEdhbWUgSUQg55qE6YGK5oiy6aSo6LOH5paZ5aS+5bu656uL5bCN5oeJ55qEIE1vZHVsZUVudHJ5WFhYLnRzXHJcbiAgICBmb3IgKGNvbnN0IGdhbWVGb2xkZXIgb2YgZ2FtZUZvbGRlcnMpIHtcclxuICAgICAgICBjb25zdCBnYW1lSURTdHJpbmcgPSBnYW1lRm9sZGVyLm5hbWUucmVwbGFjZSgnR2FtZScsICcnKTtcclxuICAgICAgICBjb25zdCBnYW1lSUROdW1iZXIgPSBOdW1iZXIoZ2FtZUlEU3RyaW5nKTtcclxuICAgICAgICBpZiAoaXNOYU4oZ2FtZUlETnVtYmVyKSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvamVjdC5hZGRTb3VyY2VGaWxlc0F0UGF0aHMoRWRpdG9yLlByb2plY3QucGF0aCArIGAvYXNzZXRzL0dhbWUvR2FtZSR7Z2FtZUlETnVtYmVyfS8qKi8qLnRzYCk7XHJcbiAgICAgICAgY3JlYXRlUHJvbWlzZUxpc3QucHVzaChjb3B5TW9kdWxlRW50cnlCeUdhbWVJRChnYW1lSUROdW1iZXIsIG1vZHVsZUVudHJ5KSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYlBhdGhMaXN0ID0gKGF3YWl0IFByb21pc2UuYWxsKGNyZWF0ZVByb21pc2VMaXN0KSkuZmlsdGVyKChwYXRoKTogcGF0aCBpcyBzdHJpbmcgPT4gcGF0aCAhPT0gJycpO1xyXG5cclxuICAgIC8vIDUuIOaKiumBiuaIsumkqOizh+aWmeWkvuW6leS4i+aMh+WQkSBNb2R1bGVFbnRyeS50cyDnmoTlvJXnlKjvvIzmlLnngrrmjIflkJHlsI3mh4nnmoQgTW9kdWxlRW50cnlYWFgudHNcclxuICAgIGNvbnN0IHVwZGF0ZVBhdGhMaXN0OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJvamVjdC5nZXRTb3VyY2VGaWxlcygpLmZvckVhY2goKHNvdXJjZUZpbGUpID0+IHtcclxuICAgICAgICBpZiAoc291cmNlRmlsZS5nZXRGaWxlUGF0aCgpLmluY2x1ZGVzKCdNb2R1bGVFbnRyeScpKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBzb3VyY2VGaWxlLmdldEZpbGVQYXRoKCkubWF0Y2goL0dhbWUoXFxkKykvKTtcclxuICAgICAgICBpZiAoIW1hdGNoKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgZ2FtZUlEID0gbWF0Y2hbMV07XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0U291cmNlRmlsZSA9IHByb2plY3QuZ2V0U291cmNlRmlsZShwYXRoLnJlc29sdmUoRWRpdG9yLlByb2plY3QucGF0aCwgYGFzc2V0cy9HYW1lL0dhbWUke2dhbWVJRH0vTW9kdWxlRW50cnkke2dhbWVJRH0udHNgKSk7XHJcbiAgICAgICAgaWYgKCF0YXJnZXRTb3VyY2VGaWxlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHNvdXJjZUZpbGUuZ2V0SW1wb3J0RGVjbGFyYXRpb25zKCkuZm9yRWFjaCgoaW1wb3J0RGVjKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbXBvcnREZWMuZ2V0TW9kdWxlU3BlY2lmaWVyU291cmNlRmlsZSgpID09PSBtb2R1bGVFbnRyeSkge1xyXG4gICAgICAgICAgICAgICAgaW1wb3J0RGVjLnNldE1vZHVsZVNwZWNpZmllcihzb3VyY2VGaWxlLmdldFJlbGF0aXZlUGF0aEFzTW9kdWxlU3BlY2lmaWVyVG8odGFyZ2V0U291cmNlRmlsZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc291cmNlRmlsZS5zYXZlU3luYygpO1xyXG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gc291cmNlRmlsZS5nZXRGaWxlUGF0aCgpO1xyXG4gICAgICAgIGNvbnN0IGJhc2VQYXRoID0gRWRpdG9yLlV0aWxzLlBhdGguc2xhc2goRWRpdG9yLlByb2plY3QucGF0aCk7XHJcbiAgICAgICAgY29uc3QgZGJQYXRoID0gZmlsZVBhdGgucmVwbGFjZShiYXNlUGF0aCwgJ2RiOi8nKTtcclxuICAgICAgICB1cGRhdGVQYXRoTGlzdC5wdXNoKGRiUGF0aCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyA2LiDnlKggRWRpdG9yIEFQSSDliLfmlrDnlLEgdHMtbW9ycGgg55Sf5oiQ5oiW5pu05paw6YGO55qE6LOH5rqQXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlTGlzdDogUHJvbWlzZTx2b2lkPltdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGRiUGF0aCBvZiBkYlBhdGhMaXN0KSB7XHJcbiAgICAgICAgdXBkYXRlUHJvbWlzZUxpc3QucHVzaChFZGl0b3IuTWVzc2FnZS5yZXF1ZXN0KCdhc3NldC1kYicsICdyZWZyZXNoLWFzc2V0JywgZGJQYXRoKSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGRiUGF0aCBvZiB1cGRhdGVQYXRoTGlzdCkge1xyXG4gICAgICAgIHVwZGF0ZVByb21pc2VMaXN0LnB1c2goRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnYXNzZXQtZGInLCAncmVpbXBvcnQtYXNzZXQnLCBkYlBhdGgpKTtcclxuICAgIH1cclxuICAgIGF3YWl0IFByb21pc2UuYWxsKHVwZGF0ZVByb21pc2VMaXN0KTtcclxuXHJcbiAgICBzaG93TG9nKCdnZW5lcmF0ZU1vZHVsZUVudHJ5IHN1Y2Nlc3MnKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOagueaTmiBHYW1lSUQg6KSH6KO95LiA5Lu9IE1vZHVsZUVudHJ5WFhYLnRzIOWIsOmBiuaIsumkqOizh+aWmeWkvuW6leS4i1xyXG4gKiBAcGFyYW0gZ2FtZUlETnVtYmVyIFxyXG4gKiBAcGFyYW0gbW9kdWxlRW50cnkgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gY29weU1vZHVsZUVudHJ5QnlHYW1lSUQoZ2FtZUlETnVtYmVyOiBudW1iZXIsIG1vZHVsZUVudHJ5OiBTb3VyY2VGaWxlKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IGRiUGF0aCA9IGBkYjovL2Fzc2V0cy9HYW1lL0dhbWUke2dhbWVJRE51bWJlcn0vTW9kdWxlRW50cnkke2dhbWVJRE51bWJlcn0udHNgO1xyXG4gICAgY29uc3QgYXNzZXRJbmZvID0gYXdhaXQgRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnYXNzZXQtZGInLCAncXVlcnktYXNzZXQtaW5mbycsIGRiUGF0aCk7XHJcbiAgICBpZiAoYXNzZXRJbmZvKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3UGF0aCA9IHBhdGgucmVzb2x2ZShFZGl0b3IuUHJvamVjdC5wYXRoLCBgYXNzZXRzL0dhbWUvR2FtZSR7Z2FtZUlETnVtYmVyfS9Nb2R1bGVFbnRyeSR7Z2FtZUlETnVtYmVyfS50c2ApO1xyXG4gICAgY29uc3QgbmV3TW9kdWxlRW50cnkgPSBtb2R1bGVFbnRyeS5jb3B5KG5ld1BhdGgsIHsgb3ZlcndyaXRlOiB0cnVlIH0pO1xyXG4gICAgbmV3TW9kdWxlRW50cnkuc2F2ZVN5bmMoKTtcclxuICAgIHJldHVybiBkYlBhdGg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmqqLmn6Xmn5DlgIvmqpTmoYjmmK/lkKYgaW1wb3J0IGNjICjnm67liY3lg4XmlK/mj7QgZW50cnkudHMg5ZKMIGVudHJ5SGlzdG9yeS50cylcclxuICogQHBhcmFtIHRhcmdldE5hbWUgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEZXBlbmRPbkNDKHRhcmdldE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRhcmdldE5hbWUgIT09ICdlbnRyeScgJiYgdGFyZ2V0TmFtZSAhPT0gJ2VudHJ5SGlzdG9yeScpIHtcclxuICAgICAgICBzaG93V2Fybign55uu5YmN5YOF5pSv5o+05qqi5p+lIGVudHJ5LnRzIOWSjCBlbnRyeUhpc3RvcnkudHMnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyAxLiDlu7rnq4sgdHMtbW9ycGggcHJvamVjdFxyXG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHtcclxuICAgICAgICB0c0NvbmZpZ0ZpbGVQYXRoOiBwYXRoLnJlc29sdmUoRWRpdG9yLlByb2plY3QucGF0aCwgJ3RzY29uZmlnLmpzb24nKSxcclxuICAgICAgICBza2lwQWRkaW5nRmlsZXNGcm9tVHNDb25maWc6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIC8vIDIuIOWPluW+l+ebruaomeaqlOahiFxyXG4gICAgY29uc3QgZW50cnkgPSBwcm9qZWN0LmFkZFNvdXJjZUZpbGVBdFBhdGgoRWRpdG9yLlByb2plY3QucGF0aCArIGAvYXNzZXRzL1Rvb2wvQ2hlY2tTY29yZUVTQnVpbGQvJHt0YXJnZXROYW1lfS50c2ApO1xyXG4gICAgLy8gMy4g5om+5Ye65omA5pyJIGltcG9ydCBjYyDnmoTlvJXnlKjpj4hcclxuICAgIGNvbnN0IGNoYWlucyA9IGZpbmRBbGxDY0NoYWlucyhlbnRyeSk7XHJcbiAgICAvLyA0LiDovLjlh7rntZDmnpxcclxuICAgIGlmIChjaGFpbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vIOaVuOmHj+mBjuWkmuaZgui8uOWHuuWIsOaqlOahiO+8jOS7peWFjSBjb2NvcyBjcmVhdG9yIOe3qOi8r+WZqOeVtuaOiVxyXG4gICAgICAgIGlmIChjaGFpbnMubGVuZ3RoID4gMjApIHtcclxuICAgICAgICAgICAgc2hvd1dhcm4oYOW8leeUqOmPiOaVuOmHj+eCuiAke2NoYWlucy5sZW5ndGh9IOWAi++8jOW3suWwh+e1kOaenOi8uOWHuuWIsCBhc3NldHMvVG9vbC9DaGVja1Njb3JlRVNCdWlsZC8ke3RhcmdldE5hbWV9X2NoZWNrUmVzdWx0LnR4dGApO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gY2hhaW5zLm1hcCgoY2hhaW4pID0+IGNoYWluLm1hcCgoZmlsZSkgPT4gZ2V0RmlsZVBhdGgoZmlsZSkpLmpvaW4oJyAtPiAnKSkuam9pbignXFxuJyk7XHJcbiAgICAgICAgICAgIEVkaXRvci5NZXNzYWdlLnNlbmQoJ2Fzc2V0LWRiJywgJ2NyZWF0ZS1hc3NldCcsIGBkYjovL2Fzc2V0cy9Ub29sL0NoZWNrU2NvcmVFU0J1aWxkLyR7dGFyZ2V0TmFtZX1fY2hlY2tSZXN1bHQudHh0YCwgY29udGVudClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93TG9nKGDlvJXnlKjpj4jmlbjph4/ngrogJHtjaGFpbnMubGVuZ3RofSDlgItgKTtcclxuICAgICAgICAgICAgY2hhaW5zLmZvckVhY2goKGNoYWluKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzaG93V2FybihjaGFpbi5tYXAoKGZpbGUpID0+IGdldEZpbGVQYXRoKGZpbGUpKS5qb2luKCcgLT4gJykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dMb2coYCR7dGFyZ2V0TmFtZX0udHMg5rKS5pyJIGltcG9ydCBjY2ApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5om+5Ye65omA5pyJIGltcG9ydCBjYyDnmoTlvJXnlKjpj4hcclxuICogQHBhcmFtIGVudHJ5IOebruaomeaqlOahiFxyXG4gKiBAcmV0dXJucyDlvJXnlKjpj4jkuozntq3pmaPliJdcclxuICovXHJcbmZ1bmN0aW9uIGZpbmRBbGxDY0NoYWlucyhlbnRyeTogU291cmNlRmlsZSk6IFNvdXJjZUZpbGVbXVtdIHtcclxuICAgIC8vIDEuIOW7uueri+W/q+WPlu+8jOmBv+WFjemHjeikh+ioiOeul1xyXG4gICAgY29uc3QgbWVtbyA9IG5ldyBNYXA8U291cmNlRmlsZSwgU291cmNlRmlsZVtdW10+KCk7XHJcblxyXG4gICAgLy8gMi4g5rex5bqm5YSq5YWI5pCc5bCLXHJcbiAgICBmdW5jdGlvbiBkZnMoXHJcbiAgICAgICAgY3VycmVudDogU291cmNlRmlsZSxcclxuICAgICAgICB2aXNpdGluZzogU2V0PFNvdXJjZUZpbGU+XHJcbiAgICApOiBTb3VyY2VGaWxlW11bXSB7XHJcblxyXG4gICAgICAgIC8vIOKchSBtZW1vIOWRveS4rVxyXG4gICAgICAgIGlmIChtZW1vLmhhcyhjdXJyZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVtby5nZXQoY3VycmVudCkhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6Ziy5b6q55KwXHJcbiAgICAgICAgaWYgKHZpc2l0aW5nLmhhcyhjdXJyZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2aXNpdGluZy5hZGQoY3VycmVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHM6IFNvdXJjZUZpbGVbXVtdID0gW107XHJcblxyXG4gICAgICAgIC8vIOaYr+WQpuebtOaOpSBpbXBvcnQgY2NcclxuICAgICAgICBjb25zdCBoYXNDYyA9IGN1cnJlbnQuZ2V0SW1wb3J0RGVjbGFyYXRpb25zKClcclxuICAgICAgICAgICAgLnNvbWUoaW1wID0+XHJcbiAgICAgICAgICAgICAgICBpbXAuZ2V0TW9kdWxlU3BlY2lmaWVyVmFsdWUoKSA9PT0gXCJjY1wiXHJcbiAgICAgICAgICAgICAgICAmJiAhaW1wLmlzVHlwZU9ubHkoKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyDmmK/lkKbliLDpgZQgTW9kdWxlRW50cnlcclxuICAgICAgICBjb25zdCBoYXNSZWFjaE1vZHVsZUVudHJ5ID0gY3VycmVudC5nZXRGaWxlUGF0aCgpLmluY2x1ZGVzKCdNb2R1bGVFbnRyeScpO1xyXG5cclxuICAgICAgICAvLyDmu7/otrPlhbbkuK3kuIDnqK7mop3ku7blsLHnm7TmjqXkuK3mlrfvvIzlkKbliYfmnIPmib7lvpflpKrmt7FcclxuICAgICAgICBpZiAoaGFzQ2MgfHwgaGFzUmVhY2hNb2R1bGVFbnRyeSkge1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2goW2N1cnJlbnRdKTtcclxuICAgICAgICAgICAgdmlzaXRpbmcuZGVsZXRlKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICBtZW1vLnNldChjdXJyZW50LCByZXN1bHRzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDlvoDkuIvmib4gaW1wb3J0XHJcbiAgICAgICAgZm9yIChjb25zdCBpbXAgb2YgY3VycmVudC5nZXRJbXBvcnREZWNsYXJhdGlvbnMoKSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGltcC5pc1R5cGVPbmx5KCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV4dCA9IGltcC5nZXRNb2R1bGVTcGVjaWZpZXJTb3VyY2VGaWxlKCk7XHJcbiAgICAgICAgICAgIGlmICghbmV4dCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdWJDaGFpbnMgPSBkZnMobmV4dCwgdmlzaXRpbmcpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGFpbiBvZiBzdWJDaGFpbnMpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChbY3VycmVudCwgLi4uY2hhaW5dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5b6A5LiL5om+IGV4cG9ydFxyXG4gICAgICAgIGZvciAoY29uc3QgZXhwIG9mIGN1cnJlbnQuZ2V0RXhwb3J0RGVjbGFyYXRpb25zKCkpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghZXhwLmlzTmFtZXNwYWNlRXhwb3J0KCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV4dCA9IGV4cC5nZXRNb2R1bGVTcGVjaWZpZXJTb3VyY2VGaWxlKCk7XHJcbiAgICAgICAgICAgIGlmICghbmV4dCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdWJDaGFpbnMgPSBkZnMobmV4dCwgdmlzaXRpbmcpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGFpbiBvZiBzdWJDaGFpbnMpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChbY3VycmVudCwgLi4uY2hhaW5dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmlzaXRpbmcuZGVsZXRlKGN1cnJlbnQpO1xyXG5cclxuICAgICAgICBtZW1vLnNldChjdXJyZW50LCByZXN1bHRzKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGZzKGVudHJ5LCBuZXcgU2V0KCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGaWxlUGF0aChmaWxlOiBTb3VyY2VGaWxlKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRGaWxlUGF0aCgpO1xyXG4gICAgY29uc3QgYmFzZVBhdGggPSBFZGl0b3IuVXRpbHMuUGF0aC5zbGFzaChFZGl0b3IuUHJvamVjdC5wYXRoKTtcclxuICAgIHJldHVybiBmaWxlUGF0aC5yZXBsYWNlKGJhc2VQYXRoLCAnJyk7XHJcbn0iXX0=