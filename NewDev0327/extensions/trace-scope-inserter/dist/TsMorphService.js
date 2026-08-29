"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreOriginalScript = exports.rewriteSelectedScript = exports.getSelectedScriptData = void 0;
const ts_morph_1 = require("ts-morph");
const Utils_1 = require("./Utils");
const path_1 = __importDefault(require("path"));
const TRACE_PARAMETER_KEY = 'traceParameterAddByExtension';
const TRACE_PARENT_PARAMETER_KEY = 'traceParentParameterAddByExtension';
let project;
let checker;
/**
 * 取得資源管理器選中檔案的資料
 * @returns
 */
async function getSelectedScriptData() {
    const files = await getSelectedFiles();
    const tsFiles = filterTypeScriptFiles(files);
    project = new ts_morph_1.Project({
        tsConfigFilePath: path_1.default.resolve(Editor.Project.path, 'tsconfig.json'),
        skipAddingFilesFromTsConfig: true,
    });
    tsFiles.forEach((file) => {
        project.addSourceFileAtPath(file);
    });
    checker = project.getTypeChecker();
    const data = [];
    let parentIdx = 0;
    for (const sourceFile of project.getSourceFiles()) {
        for (const cls of sourceFile.getClasses()) {
            const parentId = parentIdx;
            data.push({
                id: `${parentId}`,
                label: cls.getName(),
                parentId: '',
            });
            let idx = 0;
            for (const method of cls.getMethods()) {
                // constructor 不處理
                if (method.getKind() === ts_morph_1.SyntaxKind.Constructor)
                    continue;
                data.push({
                    id: `${parentId}-${idx}`,
                    label: method.getName(),
                    parentId: parentId.toString(),
                });
                idx++;
            }
            parentIdx++;
        }
    }
    return data;
}
exports.getSelectedScriptData = getSelectedScriptData;
/**
 * 取得資源管理器選中檔案的檔案路徑
 * @returns
 */
async function getSelectedFiles() {
    const selectedAssetUuids = Editor.Selection.getSelected('asset');
    const promiseList = [];
    for (const uuid of selectedAssetUuids) {
        promiseList.push(Editor.Message.request('asset-db', 'query-asset-info', uuid));
    }
    const assetInfos = await Promise.all(promiseList);
    const files = assetInfos.map((assetInfo) => assetInfo === null || assetInfo === void 0 ? void 0 : assetInfo.file).filter((file) => file !== undefined);
    return files;
}
/**
 * 過濾掉不是 TypeScript 的檔案
 * @param files 檔案路徑列表
 * @returns TypeScript 檔案路徑列表
 */
function filterTypeScriptFiles(files) {
    const otherFiles = files.filter((file) => !file.endsWith('.ts'));
    const tsFiles = files.filter((file) => file.endsWith('.ts'));
    if (otherFiles.length > 0) {
        (0, Utils_1.showWarn)('以下被選中不是 TypeScript 檔案，已被忽略:');
        otherFiles.forEach((file) => (0, Utils_1.showWarn)(file));
    }
    return tsFiles;
}
/**
 * 給所有被選中的腳本做包裝
 * @param checkedMap 勾選的資料 Map<class.method, CheckedData>
 */
function rewriteSelectedScript(checkedMap) {
    const patchedSourceFiles = new Set();
    // 處理方法包裝
    for (const sourceFile of project.getSourceFiles()) {
        // 重新讀取檔案，確保可以讀到外部更改後的內容
        sourceFile.refreshFromFileSystem();
        // 處理方法包裝
        const rewroteSourceFileMethod = rewriteSourceFileMethod(sourceFile, checkedMap);
        // 處理呼叫 Promise.all 的參數添加
        const rewrotePromiseAllCall = rewritePromiseAllCall(sourceFile, checkedMap);
        if (rewroteSourceFileMethod || rewrotePromiseAllCall) {
            // 檔案有被改過，就加到待保存列表內
            patchedSourceFiles.add(sourceFile);
        }
    }
    const promiseList = [];
    for (const sourceFile of patchedSourceFiles) {
        // 一次保存所有被修改過的檔案
        promiseList.push(saveAndRefreshFile(sourceFile));
    }
    Promise.all(promiseList).then(() => {
        (0, Utils_1.showLog)('測試包裝添加完成');
    });
}
exports.rewriteSelectedScript = rewriteSelectedScript;
/**
 * 處理單一檔案的所有方法包裝
 * @param sourceFile
 * @param checkedMap
 * @returns
 */
function rewriteSourceFileMethod(sourceFile, checkedMap) {
    let patched = false;
    const ensureImportNameList = new Set();
    for (const cls of sourceFile.getClasses()) {
        for (const method of cls.getMethods()) {
            // constructor 不處理
            if (method.getKind() === ts_morph_1.SyntaxKind.Constructor)
                continue;
            const key = cls.getName() + '.' + method.getName();
            const checkedData = checkedMap.get(key);
            if (!checkedData)
                continue;
            const className = cls.getName();
            const rewrote = rewriteMethodBody(method, checkedData, className);
            if (rewrote) {
                patched = true;
            }
            if (checkedData.rewriteBody) {
                ensureImportNameList.add('TraceScope');
                if (checkedData.checkCallByPromiseAll()) {
                    ensureImportNameList.add('TraceNode');
                }
            }
            else {
                const restoredPromiseAllCall = restorePromiseAllCall(method);
                if (restoredPromiseAllCall) {
                    patched = true;
                }
            }
        }
    }
    const rewroteImport = rewriteImport(sourceFile, Array.from(ensureImportNameList));
    patched || (patched = rewroteImport);
    return patched;
}
function rewritePromiseAllCall(sourceFile, checkedMap) {
    let patched = false;
    sourceFile.forEachDescendant(node => {
        // 確保 node 是 CallExpression 類型
        if (!ts_morph_1.Node.isCallExpression(node))
            return;
        const nodeKey = getNodeKey(node);
        const nodeCheckedData = checkedMap.get(nodeKey);
        if (!nodeCheckedData)
            return;
        if (nodeCheckedData.checkCallByPromiseAll()) {
            // 找到包含這個呼叫的方法
            const parentKey = getParentKey(node);
            const parentCheckedData = checkedMap.get(parentKey);
            if (!parentCheckedData || !parentCheckedData.rewriteBody) {
                (0, Utils_1.showWarn)(`警告: ${parentKey} 呼叫了勾選 "被Promise.all執行" 的 ${nodeKey}，但 ${parentKey} 沒有勾選 "包裝方法"`);
                return;
            }
            // 防止重複加參數
            const hasTrace = node.getArguments()
                .some(arg => arg.getText() === TRACE_PARAMETER_KEY);
            if (!hasTrace) {
                node.addArgument(TRACE_PARAMETER_KEY);
                patched = true;
            }
        }
        else {
            const args = node.getArguments();
            const traceArgIndex = args.findIndex(arg => arg.getText() === TRACE_PARAMETER_KEY);
            if (traceArgIndex !== -1) {
                node.removeArgument(traceArgIndex);
                patched = true;
            }
        }
    });
    return patched;
}
/**
 * 用 sourceFile 儲存檔案，並呼叫 Editor API 通知 cocos 刷新檔案
 * @param sourceFile
 */
async function saveAndRefreshFile(sourceFile) {
    const filePath = sourceFile.getFilePath();
    const basePath = Editor.Utils.Path.slash(Editor.Project.path);
    const dbUrl = filePath.replace(basePath, 'db:/');
    sourceFile.saveSync();
    await Editor.Message.request('asset-db', 'reimport-asset', dbUrl);
    (0, Utils_1.showLog)(`${filePath} 檔案已修改`);
}
function rewriteMethodBody(method, checkedData, className) {
    var _a, _b;
    const body = method.getBody();
    let patched = false;
    if (!body || !ts_morph_1.Node.isBlock(body))
        return patched;
    let isPatchedTraceScope = false;
    let isPatchedPromiseAll = false;
    let isPatchedToJson = false;
    body.forEachChild((child) => {
        if (child.getText().includes('TraceScope')) {
            isPatchedTraceScope = true;
        }
        if (method.getParameter(TRACE_PARENT_PARAMETER_KEY)) {
            isPatchedPromiseAll = true;
        }
        if (child.getText().includes(`TraceScope.toJSON(${TRACE_PARAMETER_KEY})`)) {
            isPatchedToJson = true;
        }
    });
    const methodName = method.getName();
    let inner = '';
    if (isPatchedTraceScope) {
        inner = getInnerContent(body);
    }
    else {
        inner = body.getText().replace(/^\{\s*|\s*\}$/g, "");
    }
    let newBody = '';
    if (!checkedData.rewriteBody) {
        // 沒有打勾時清除包裝，直接用原本的內容
        newBody = inner;
        (_a = method.getParameter(TRACE_PARENT_PARAMETER_KEY)) === null || _a === void 0 ? void 0 : _a.remove();
        // 是否有修改過 = 原本有包過
        patched = isPatchedTraceScope;
    }
    else {
        // 有打勾時，做try-finally包裝
        const targetName = method.isStatic() ? className : 'this';
        let beforeText = '';
        let afterText = '';
        let toJsonText = '';
        // 是否有修改過 = 原本沒有包過
        patched = !isPatchedTraceScope;
        if (checkedData.checkCallByPromiseAll()) {
            beforeText = `const ${TRACE_PARAMETER_KEY} = TraceScope.start('${methodName}', ${targetName}, ${TRACE_PARENT_PARAMETER_KEY});`;
            afterText = `TraceScope.end(${TRACE_PARAMETER_KEY});`;
            if (!method.getParameter(TRACE_PARENT_PARAMETER_KEY)) {
                method.addParameter({
                    name: TRACE_PARENT_PARAMETER_KEY,
                    type: 'TraceNode',
                    hasQuestionToken: true,
                });
            }
            // 是否有修改過 = 原本沒有包 Promise.all 處理
            patched || (patched = !isPatchedPromiseAll);
        }
        else {
            beforeText = `const ${TRACE_PARAMETER_KEY} = TraceScope.start('${methodName}', ${targetName});`;
            afterText = `TraceScope.end();`;
            (_b = method.getParameter(TRACE_PARENT_PARAMETER_KEY)) === null || _b === void 0 ? void 0 : _b.remove();
            // 是否有修改過 = 原本有包 Promise.all 處理
            patched || (patched = isPatchedPromiseAll);
        }
        if (checkedData.checkOutputLog()) {
            toJsonText = `TraceScope.toJSON(${TRACE_PARAMETER_KEY});`;
            // 是否有修改過 = 原本沒有包 TraceScope.toJSON
            patched || (patched = !isPatchedToJson);
        }
        else {
            // 是否有修改過 = 原本有包 TraceScope.toJSON
            patched || (patched = isPatchedToJson);
        }
        // 組合 newBody,避免出現空行
        const parts = [];
        parts.push(beforeText);
        parts.push(`try {`);
        parts.push(`    ${inner}`);
        parts.push(`} finally {`);
        parts.push(`    ${afterText}`);
        if (toJsonText) {
            parts.push(`    ${toJsonText}`);
        }
        parts.push(`}`);
        newBody = parts.join('\n') + '\n';
    }
    method.setBodyText(newBody);
    method.formatText();
    return patched;
}
/**
 * 確保檔案有 import 必要的依賴
 * @param sourceFile
 * @param ensureImportNameList
 */
function rewriteImport(sourceFile, ensureImportNameList) {
    // 先找現有 import
    const existing = sourceFile
        .getImportDeclarations()
        .find(d => d.getModuleSpecifierValue() === 'db://assets/Scripts/TestTool/LogViewUI/Scripts/TraceScope');
    if (existing) {
        // 檢查是否需要移除
        if (hasSameImport(existing, ensureImportNameList)) {
            return false;
        }
        existing.remove();
    }
    if (ensureImportNameList.length > 0) {
        // 完全沒有 → 新增一個
        sourceFile.addImportDeclaration({
            moduleSpecifier: 'db://assets/Scripts/TestTool/LogViewUI/Scripts/TraceScope',
            namedImports: ensureImportNameList,
        });
    }
    return true;
}
/**
 * 取得方法的 key
 * @param node
 * @returns
 */
function getNodeKey(node) {
    var _a;
    const expr = node.getExpression();
    // 只處理 xxx.funcA()
    if (!ts_morph_1.Node.isPropertyAccessExpression(expr))
        return '';
    const methodName = expr.getName();
    // 用 TypeChecker 找 symbol
    const symbol = checker.getSymbolAtLocation(expr);
    if (!symbol)
        return '';
    const decl = (_a = symbol.getDeclarations()) === null || _a === void 0 ? void 0 : _a[0];
    if (!decl)
        return '';
    // 找 method 所屬 class
    const classDecl = decl.getFirstAncestorByKind(ts_morph_1.SyntaxKind.ClassDeclaration);
    if (!classDecl)
        return '';
    const className = classDecl.getName();
    if (!className)
        return '';
    const key = `${className}.${methodName}`;
    return key;
}
/**
 * 取得呼叫目標方法的父方法 key
 * @param node
 * @returns
 */
function getParentKey(node) {
    const parentMethod = node.getFirstAncestorByKind(ts_morph_1.SyntaxKind.MethodDeclaration);
    if (!parentMethod)
        return '';
    // 找到包含方法所屬的 class
    const parentClassDecl = parentMethod.getFirstAncestorByKind(ts_morph_1.SyntaxKind.ClassDeclaration);
    if (!parentClassDecl)
        return '';
    const parentClassName = parentClassDecl.getName();
    const parentMethodName = parentMethod.getName();
    if (!parentClassName || !parentMethodName)
        return '';
    // 檢查包含這個呼叫的方法是否有 rewriteBody = true
    const parentKey = `${parentClassName}.${parentMethodName}`;
    return parentKey;
}
/**
 * 還原被包裝過的腳本
 * @param checkedMap 要還原的方法映射
 */
function restoreOriginalScript(checkedMap) {
    const restoredSourceFiles = new Set();
    for (const sourceFile of project.getSourceFiles()) {
        sourceFile.refreshFromFileSystem();
        // 還原方法
        const restoredSourceFileMethod = restoreSourceFileMethod(sourceFile, checkedMap);
        // 移除參數
        const restoredPromiseAllCall = restorePromiseAllCall(sourceFile);
        if (restoredSourceFileMethod || restoredPromiseAllCall) {
            restoredSourceFiles.add(sourceFile);
            // 移除可能不需要的 import
        }
        rewriteImport(sourceFile, []);
    }
    const promiseList = [];
    for (const sourceFile of restoredSourceFiles) {
        promiseList.push(saveAndRefreshFile(sourceFile));
    }
    Promise.all(promiseList).then(() => {
        (0, Utils_1.showLog)('腳本還原完成');
    });
}
exports.restoreOriginalScript = restoreOriginalScript;
function restoreSourceFileMethod(sourceFile, checkedMap) {
    let restored = false;
    for (const cls of sourceFile.getClasses()) {
        for (const method of cls.getMethods()) {
            if (method.getKind() === ts_morph_1.SyntaxKind.Constructor)
                continue;
            const key = cls.getName() + '.' + method.getName();
            const checkedData = checkedMap.get(key);
            if (!checkedData)
                continue;
            const restoredMethodBody = restoreMethodBody(method);
            const restoredMethodParameter = restoreMethodParameter(method);
            if (restoredMethodBody || restoredMethodParameter) {
                restored = true;
            }
        }
    }
    return restored;
}
/**
 * 還原包裝過的 Promise.all 方法呼叫
 * @param source
 * @returns
 */
function restorePromiseAllCall(source) {
    // 這裡不檢查 checkedMap，一律嘗試找參數做移除
    let restored = false;
    source.forEachDescendant(node => {
        if (!ts_morph_1.Node.isCallExpression(node))
            return;
        const nodeKey = getNodeKey(node);
        if (!nodeKey)
            return;
        // 移除參數
        const args = node.getArguments();
        const traceArgIndex = args.findIndex(arg => arg.getText() === TRACE_PARAMETER_KEY);
        if (traceArgIndex !== -1) {
            node.removeArgument(traceArgIndex);
            restored = true;
        }
    });
    return restored;
}
/**
 * 還原方法體到原始狀態
 * @param method 要還原的方法
 * @returns 是否成功還原
 */
function restoreMethodBody(method) {
    const body = method.getBody();
    if (!body || !ts_morph_1.Node.isBlock(body))
        return false;
    // 檢查是否包含 TraceScope
    const bodyText = body.getText();
    if (!bodyText.includes('TraceScope')) {
        return false; // 沒有被包裝,不需要還原
    }
    const originalContent = getInnerContent(body);
    // 還原方法體
    method.setBodyText(originalContent);
    method.formatText();
    return true;
}
function restoreMethodParameter(method) {
    const params = method.getParameters();
    const traceParentParam = params.find(p => p.getName() === TRACE_PARENT_PARAMETER_KEY);
    if (traceParentParam) {
        traceParentParam.remove();
        return true;
    }
    return false;
}
function getInnerContent(body) {
    const statements = body.getStatements();
    const tryStatement = statements.find((stmt) => ts_morph_1.Node.isTryStatement(stmt));
    if (!tryStatement) {
        return body.getText().replace(/^\{\s*|\s*\}$/g, "").trim();
    }
    // 提取 try block 的內容
    const tryBlock = tryStatement.getTryBlock();
    return tryBlock.getText().replace(/^\{\s*|\s*\}$/g, "").trim();
}
function hasSameImport(importDeclaration, importNames) {
    const existingImportNames = importDeclaration.getNamedImports().map(n => n.getName());
    if (existingImportNames.length !== importNames.length)
        return false;
    for (const name of importNames) {
        if (!existingImportNames.includes(name))
            return false;
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHNNb3JwaFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvVHNNb3JwaFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsdUNBQTJJO0FBRTNJLG1DQUE0QztBQUM1QyxnREFBd0I7QUFFeEIsTUFBTSxtQkFBbUIsR0FBRyw4QkFBOEIsQ0FBQztBQUMzRCxNQUFNLDBCQUEwQixHQUFHLG9DQUFvQyxDQUFDO0FBRXhFLElBQUksT0FBZ0IsQ0FBQztBQUNyQixJQUFJLE9BQW9CLENBQUM7QUFFekI7OztHQUdHO0FBQ0ksS0FBSyxVQUFVLHFCQUFxQjtJQUN2QyxNQUFNLEtBQUssR0FBRyxNQUFNLGdCQUFnQixFQUFFLENBQUM7SUFDdkMsTUFBTSxPQUFPLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFN0MsT0FBTyxHQUFHLElBQUksa0JBQU8sQ0FBQztRQUNsQixnQkFBZ0IsRUFBRSxjQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQztRQUNwRSwyQkFBMkIsRUFBRSxJQUFJO0tBQ3BDLENBQUMsQ0FBQztJQUVILE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNyQixPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRW5DLE1BQU0sSUFBSSxHQUFnQixFQUFFLENBQUM7SUFDN0IsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLEtBQUssTUFBTSxVQUFVLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7UUFDaEQsS0FBSyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUN4QyxNQUFNLFFBQVEsR0FBRyxT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LFlBQVksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUEyQyxFQUFFLENBQ25GLGVBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQzVCLENBQUM7SUFFRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCxtQkFBbUI7SUFDbkIsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVDLE9BQU8sUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNuRSxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsaUJBQW9DLEVBQUUsV0FBcUI7SUFDOUUsTUFBTSxtQkFBbUIsR0FBRyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN0RixJQUFJLG1CQUFtQixDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsTUFBTTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ3BFLEtBQUssTUFBTSxJQUFJLElBQUksV0FBVyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztJQUMxRCxDQUFDO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsb2NrLCBDYWxsRXhwcmVzc2lvbiwgSW1wb3J0RGVjbGFyYXRpb24sIE1ldGhvZERlY2xhcmF0aW9uLCBOb2RlLCBQcm9qZWN0LCBTb3VyY2VGaWxlLCBTeW50YXhLaW5kLCBUeXBlQ2hlY2tlciB9IGZyb20gXCJ0cy1tb3JwaFwiO1xyXG5pbXBvcnQgeyBDaGVja2VkRGF0YSwgUGFuZWxEYXRhIH0gZnJvbSBcIi4vRGVmaW5lXCI7XHJcbmltcG9ydCB7IHNob3dMb2csIHNob3dXYXJuIH0gZnJvbSAnLi9VdGlscyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuY29uc3QgVFJBQ0VfUEFSQU1FVEVSX0tFWSA9ICd0cmFjZVBhcmFtZXRlckFkZEJ5RXh0ZW5zaW9uJztcclxuY29uc3QgVFJBQ0VfUEFSRU5UX1BBUkFNRVRFUl9LRVkgPSAndHJhY2VQYXJlbnRQYXJhbWV0ZXJBZGRCeUV4dGVuc2lvbic7XHJcblxyXG5sZXQgcHJvamVjdDogUHJvamVjdDtcclxubGV0IGNoZWNrZXI6IFR5cGVDaGVja2VyO1xyXG5cclxuLyoqXHJcbiAqIOWPluW+l+izh+a6kOeuoeeQhuWZqOmBuOS4reaqlOahiOeahOizh+aWmVxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZWxlY3RlZFNjcmlwdERhdGEoKTogUHJvbWlzZTxQYW5lbERhdGFbXT4ge1xyXG4gICAgY29uc3QgZmlsZXMgPSBhd2FpdCBnZXRTZWxlY3RlZEZpbGVzKCk7XHJcbiAgICBjb25zdCB0c0ZpbGVzID0gZmlsdGVyVHlwZVNjcmlwdEZpbGVzKGZpbGVzKTtcclxuXHJcbiAgICBwcm9qZWN0ID0gbmV3IFByb2plY3Qoe1xyXG4gICAgICAgIHRzQ29uZmlnRmlsZVBhdGg6IHBhdGgucmVzb2x2ZShFZGl0b3IuUHJvamVjdC5wYXRoLCAndHNjb25maWcuanNvbicpLFxyXG4gICAgICAgIHNraXBBZGRpbmdGaWxlc0Zyb21Uc0NvbmZpZzogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRzRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xyXG4gICAgICAgIHByb2plY3QuYWRkU291cmNlRmlsZUF0UGF0aChmaWxlKTtcclxuICAgIH0pO1xyXG4gICAgY2hlY2tlciA9IHByb2plY3QuZ2V0VHlwZUNoZWNrZXIoKTtcclxuXHJcbiAgICBjb25zdCBkYXRhOiBQYW5lbERhdGFbXSA9IFtdO1xyXG4gICAgbGV0IHBhcmVudElkeCA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IHNvdXJjZUZpbGUgb2YgcHJvamVjdC5nZXRTb3VyY2VGaWxlcygpKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjbHMgb2Ygc291cmNlRmlsZS5nZXRDbGFzc2VzKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50SWQgPSBwYXJlbnRJZHg7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogYCR7cGFyZW50SWR9YCxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBjbHMuZ2V0TmFtZSgpIGFzIHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHBhcmVudElkOiAnJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxldCBpZHggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBjbHMuZ2V0TWV0aG9kcygpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdHJ1Y3RvciDkuI3omZXnkIZcclxuICAgICAgICAgICAgICAgIGlmIChtZXRob2QuZ2V0S2luZCgpID09PSBTeW50YXhLaW5kLkNvbnN0cnVjdG9yKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGAke3BhcmVudElkfS0ke2lkeH1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBtZXRob2QuZ2V0TmFtZSgpIGFzIHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZDogcGFyZW50SWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWR4Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFyZW50SWR4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlj5blvpfos4fmupDnrqHnkIblmajpgbjkuK3mqpTmoYjnmoTmqpTmoYjot6/lvpFcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRTZWxlY3RlZEZpbGVzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkQXNzZXRVdWlkcyA9IEVkaXRvci5TZWxlY3Rpb24uZ2V0U2VsZWN0ZWQoJ2Fzc2V0Jyk7XHJcbiAgICBjb25zdCBwcm9taXNlTGlzdCA9IFtdO1xyXG4gICAgZm9yIChjb25zdCB1dWlkIG9mIHNlbGVjdGVkQXNzZXRVdWlkcykge1xyXG4gICAgICAgIHByb21pc2VMaXN0LnB1c2goRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnYXNzZXQtZGInLCAncXVlcnktYXNzZXQtaW5mbycsIHV1aWQpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFzc2V0SW5mb3MgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlTGlzdCk7XHJcbiAgICBjb25zdCBmaWxlcyA9IGFzc2V0SW5mb3MubWFwKChhc3NldEluZm8pID0+IGFzc2V0SW5mbz8uZmlsZSkuZmlsdGVyKChmaWxlKTogZmlsZSBpcyBzdHJpbmcgPT4gZmlsZSAhPT0gdW5kZWZpbmVkKTtcclxuICAgIHJldHVybiBmaWxlcztcclxufVxyXG5cclxuLyoqXHJcbiAqIOmBjua/vuaOieS4jeaYryBUeXBlU2NyaXB0IOeahOaqlOahiFxyXG4gKiBAcGFyYW0gZmlsZXMg5qqU5qGI6Lev5b6R5YiX6KGoXHJcbiAqIEByZXR1cm5zIFR5cGVTY3JpcHQg5qqU5qGI6Lev5b6R5YiX6KGoXHJcbiAqL1xyXG5mdW5jdGlvbiBmaWx0ZXJUeXBlU2NyaXB0RmlsZXMoZmlsZXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3Qgb3RoZXJGaWxlcyA9IGZpbGVzLmZpbHRlcigoZmlsZSkgPT4gIWZpbGUuZW5kc1dpdGgoJy50cycpKTtcclxuICAgIGNvbnN0IHRzRmlsZXMgPSBmaWxlcy5maWx0ZXIoKGZpbGUpID0+IGZpbGUuZW5kc1dpdGgoJy50cycpKTtcclxuXHJcbiAgICBpZiAob3RoZXJGaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2hvd1dhcm4oJ+S7peS4i+iiq+mBuOS4reS4jeaYryBUeXBlU2NyaXB0IOaqlOahiO+8jOW3suiiq+W/veeVpTonKTtcclxuICAgICAgICBvdGhlckZpbGVzLmZvckVhY2goKGZpbGUpID0+IHNob3dXYXJuKGZpbGUpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHNGaWxlcztcclxufVxyXG5cclxuLyoqXHJcbiAqIOe1puaJgOacieiiq+mBuOS4reeahOiFs+acrOWBmuWMheijnVxyXG4gKiBAcGFyYW0gY2hlY2tlZE1hcCDli77pgbjnmoTos4fmlpkgTWFwPGNsYXNzLm1ldGhvZCwgQ2hlY2tlZERhdGE+XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmV3cml0ZVNlbGVjdGVkU2NyaXB0KGNoZWNrZWRNYXA6IE1hcDxzdHJpbmcsIENoZWNrZWREYXRhPik6IHZvaWQge1xyXG4gICAgY29uc3QgcGF0Y2hlZFNvdXJjZUZpbGVzID0gbmV3IFNldDxTb3VyY2VGaWxlPigpO1xyXG4gICAgLy8g6JmV55CG5pa55rOV5YyF6KOdXHJcbiAgICBmb3IgKGNvbnN0IHNvdXJjZUZpbGUgb2YgcHJvamVjdC5nZXRTb3VyY2VGaWxlcygpKSB7XHJcbiAgICAgICAgLy8g6YeN5paw6K6A5Y+W5qqU5qGI77yM56K65L+d5Y+v5Lul6K6A5Yiw5aSW6YOo5pu05pS55b6M55qE5YWn5a65XHJcbiAgICAgICAgc291cmNlRmlsZS5yZWZyZXNoRnJvbUZpbGVTeXN0ZW0oKTtcclxuICAgICAgICAvLyDomZXnkIbmlrnms5XljIXoo51cclxuICAgICAgICBjb25zdCByZXdyb3RlU291cmNlRmlsZU1ldGhvZCA9IHJld3JpdGVTb3VyY2VGaWxlTWV0aG9kKHNvdXJjZUZpbGUsIGNoZWNrZWRNYXApO1xyXG4gICAgICAgIC8vIOiZleeQhuWRvOWPqyBQcm9taXNlLmFsbCDnmoTlj4Pmlbjmt7vliqBcclxuICAgICAgICBjb25zdCByZXdyb3RlUHJvbWlzZUFsbENhbGwgPSByZXdyaXRlUHJvbWlzZUFsbENhbGwoc291cmNlRmlsZSwgY2hlY2tlZE1hcCk7XHJcblxyXG4gICAgICAgIGlmIChyZXdyb3RlU291cmNlRmlsZU1ldGhvZCB8fCByZXdyb3RlUHJvbWlzZUFsbENhbGwpIHtcclxuICAgICAgICAgICAgLy8g5qqU5qGI5pyJ6KKr5pS56YGO77yM5bCx5Yqg5Yiw5b6F5L+d5a2Y5YiX6KGo5YWnXHJcbiAgICAgICAgICAgIHBhdGNoZWRTb3VyY2VGaWxlcy5hZGQoc291cmNlRmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvbWlzZUxpc3QgPSBbXTtcclxuICAgIGZvciAoY29uc3Qgc291cmNlRmlsZSBvZiBwYXRjaGVkU291cmNlRmlsZXMpIHtcclxuICAgICAgICAvLyDkuIDmrKHkv53lrZjmiYDmnInooqvkv67mlLnpgY7nmoTmqpTmoYhcclxuICAgICAgICBwcm9taXNlTGlzdC5wdXNoKHNhdmVBbmRSZWZyZXNoRmlsZShzb3VyY2VGaWxlKSk7XHJcbiAgICB9XHJcbiAgICBQcm9taXNlLmFsbChwcm9taXNlTGlzdCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgc2hvd0xvZygn5ris6Kmm5YyF6KOd5re75Yqg5a6M5oiQJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOiZleeQhuWWruS4gOaqlOahiOeahOaJgOacieaWueazleWMheijnVxyXG4gKiBAcGFyYW0gc291cmNlRmlsZSBcclxuICogQHBhcmFtIGNoZWNrZWRNYXAgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZnVuY3Rpb24gcmV3cml0ZVNvdXJjZUZpbGVNZXRob2Qoc291cmNlRmlsZTogU291cmNlRmlsZSwgY2hlY2tlZE1hcDogTWFwPHN0cmluZywgQ2hlY2tlZERhdGE+KTogYm9vbGVhbiB7XHJcbiAgICBsZXQgcGF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgZW5zdXJlSW1wb3J0TmFtZUxpc3QgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIGZvciAoY29uc3QgY2xzIG9mIHNvdXJjZUZpbGUuZ2V0Q2xhc3NlcygpKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBtZXRob2Qgb2YgY2xzLmdldE1ldGhvZHMoKSkge1xyXG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3RvciDkuI3omZXnkIZcclxuICAgICAgICAgICAgaWYgKG1ldGhvZC5nZXRLaW5kKCkgPT09IFN5bnRheEtpbmQuQ29uc3RydWN0b3IpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBjbHMuZ2V0TmFtZSgpICsgJy4nICsgbWV0aG9kLmdldE5hbWUoKTtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZERhdGEgPSBjaGVja2VkTWFwLmdldChrZXkpO1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrZWREYXRhKSBjb250aW51ZTtcclxuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xzLmdldE5hbWUoKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgIGNvbnN0IHJld3JvdGUgPSByZXdyaXRlTWV0aG9kQm9keShtZXRob2QsIGNoZWNrZWREYXRhLCBjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICBpZiAocmV3cm90ZSkge1xyXG4gICAgICAgICAgICAgICAgcGF0Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNoZWNrZWREYXRhLnJld3JpdGVCb2R5KSB7XHJcbiAgICAgICAgICAgICAgICBlbnN1cmVJbXBvcnROYW1lTGlzdC5hZGQoJ1RyYWNlU2NvcGUnKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkRGF0YS5jaGVja0NhbGxCeVByb21pc2VBbGwoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuc3VyZUltcG9ydE5hbWVMaXN0LmFkZCgnVHJhY2VOb2RlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN0b3JlZFByb21pc2VBbGxDYWxsID0gcmVzdG9yZVByb21pc2VBbGxDYWxsKG1ldGhvZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdG9yZWRQcm9taXNlQWxsQ2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmV3cm90ZUltcG9ydCA9IHJld3JpdGVJbXBvcnQoc291cmNlRmlsZSwgQXJyYXkuZnJvbShlbnN1cmVJbXBvcnROYW1lTGlzdCkpO1xyXG4gICAgcGF0Y2hlZCB8fD0gcmV3cm90ZUltcG9ydDtcclxuICAgIHJldHVybiBwYXRjaGVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXdyaXRlUHJvbWlzZUFsbENhbGwoc291cmNlRmlsZTogU291cmNlRmlsZSwgY2hlY2tlZE1hcDogTWFwPHN0cmluZywgQ2hlY2tlZERhdGE+KTogYm9vbGVhbiB7XHJcbiAgICBsZXQgcGF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgc291cmNlRmlsZS5mb3JFYWNoRGVzY2VuZGFudChub2RlID0+IHtcclxuICAgICAgICAvLyDnorrkv50gbm9kZSDmmK8gQ2FsbEV4cHJlc3Npb24g6aGe5Z6LXHJcbiAgICAgICAgaWYgKCFOb2RlLmlzQ2FsbEV4cHJlc3Npb24obm9kZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZUtleSA9IGdldE5vZGVLZXkobm9kZSk7XHJcbiAgICAgICAgY29uc3Qgbm9kZUNoZWNrZWREYXRhID0gY2hlY2tlZE1hcC5nZXQobm9kZUtleSk7XHJcbiAgICAgICAgaWYgKCFub2RlQ2hlY2tlZERhdGEpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKG5vZGVDaGVja2VkRGF0YS5jaGVja0NhbGxCeVByb21pc2VBbGwoKSkge1xyXG4gICAgICAgICAgICAvLyDmib7liLDljIXlkKvpgJnlgIvlkbzlj6vnmoTmlrnms5VcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50S2V5ID0gZ2V0UGFyZW50S2V5KG5vZGUpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRDaGVja2VkRGF0YSA9IGNoZWNrZWRNYXAuZ2V0KHBhcmVudEtleSk7XHJcbiAgICAgICAgICAgIGlmICghcGFyZW50Q2hlY2tlZERhdGEgfHwgIXBhcmVudENoZWNrZWREYXRhLnJld3JpdGVCb2R5KSB7XHJcbiAgICAgICAgICAgICAgICBzaG93V2Fybihg6K2m5ZGKOiAke3BhcmVudEtleX0g5ZG85Y+r5LqG5Yu+6YG4IFwi6KKrUHJvbWlzZS5hbGzln7fooYxcIiDnmoQgJHtub2RlS2V5fe+8jOS9hiAke3BhcmVudEtleX0g5rKS5pyJ5Yu+6YG4IFwi5YyF6KOd5pa55rOVXCJgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g6Ziy5q2i6YeN6KSH5Yqg5Y+D5pW4XHJcbiAgICAgICAgICAgIGNvbnN0IGhhc1RyYWNlID0gbm9kZS5nZXRBcmd1bWVudHMoKVxyXG4gICAgICAgICAgICAgICAgLnNvbWUoYXJnID0+IGFyZy5nZXRUZXh0KCkgPT09IFRSQUNFX1BBUkFNRVRFUl9LRVkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFoYXNUcmFjZSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hZGRBcmd1bWVudChUUkFDRV9QQVJBTUVURVJfS0VZKTtcclxuICAgICAgICAgICAgICAgIHBhdGNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYXJncyA9IG5vZGUuZ2V0QXJndW1lbnRzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYWNlQXJnSW5kZXggPSBhcmdzLmZpbmRJbmRleChhcmcgPT4gYXJnLmdldFRleHQoKSA9PT0gVFJBQ0VfUEFSQU1FVEVSX0tFWSk7XHJcbiAgICAgICAgICAgIGlmICh0cmFjZUFyZ0luZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBcmd1bWVudCh0cmFjZUFyZ0luZGV4KTtcclxuICAgICAgICAgICAgICAgIHBhdGNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcGF0Y2hlZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOeUqCBzb3VyY2VGaWxlIOWEsuWtmOaqlOahiO+8jOS4puWRvOWPqyBFZGl0b3IgQVBJIOmAmuefpSBjb2NvcyDliLfmlrDmqpTmoYhcclxuICogQHBhcmFtIHNvdXJjZUZpbGUgXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBzYXZlQW5kUmVmcmVzaEZpbGUoc291cmNlRmlsZTogU291cmNlRmlsZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBzb3VyY2VGaWxlLmdldEZpbGVQYXRoKCk7XHJcbiAgICBjb25zdCBiYXNlUGF0aCA9IEVkaXRvci5VdGlscy5QYXRoLnNsYXNoKEVkaXRvci5Qcm9qZWN0LnBhdGgpO1xyXG4gICAgY29uc3QgZGJVcmwgPSBmaWxlUGF0aC5yZXBsYWNlKGJhc2VQYXRoLCAnZGI6LycpO1xyXG4gICAgc291cmNlRmlsZS5zYXZlU3luYygpO1xyXG4gICAgYXdhaXQgRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnYXNzZXQtZGInLCAncmVpbXBvcnQtYXNzZXQnLCBkYlVybCk7XHJcbiAgICBzaG93TG9nKGAke2ZpbGVQYXRofSDmqpTmoYjlt7Lkv67mlLlgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV3cml0ZU1ldGhvZEJvZHkobWV0aG9kOiBNZXRob2REZWNsYXJhdGlvbiwgY2hlY2tlZERhdGE6IENoZWNrZWREYXRhLCBjbGFzc05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgYm9keSA9IG1ldGhvZC5nZXRCb2R5KCk7XHJcbiAgICBsZXQgcGF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgaWYgKCFib2R5IHx8ICFOb2RlLmlzQmxvY2soYm9keSkpIHJldHVybiBwYXRjaGVkO1xyXG4gICAgbGV0IGlzUGF0Y2hlZFRyYWNlU2NvcGUgPSBmYWxzZTtcclxuICAgIGxldCBpc1BhdGNoZWRQcm9taXNlQWxsID0gZmFsc2U7XHJcbiAgICBsZXQgaXNQYXRjaGVkVG9Kc29uID0gZmFsc2U7XHJcbiAgICBib2R5LmZvckVhY2hDaGlsZCgoY2hpbGQpID0+IHtcclxuICAgICAgICBpZiAoY2hpbGQuZ2V0VGV4dCgpLmluY2x1ZGVzKCdUcmFjZVNjb3BlJykpIHtcclxuICAgICAgICAgICAgaXNQYXRjaGVkVHJhY2VTY29wZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QuZ2V0UGFyYW1ldGVyKFRSQUNFX1BBUkVOVF9QQVJBTUVURVJfS0VZKSkge1xyXG4gICAgICAgICAgICBpc1BhdGNoZWRQcm9taXNlQWxsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoaWxkLmdldFRleHQoKS5pbmNsdWRlcyhgVHJhY2VTY29wZS50b0pTT04oJHtUUkFDRV9QQVJBTUVURVJfS0VZfSlgKSkge1xyXG4gICAgICAgICAgICBpc1BhdGNoZWRUb0pzb24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgbWV0aG9kTmFtZSA9IG1ldGhvZC5nZXROYW1lKCk7XHJcbiAgICBsZXQgaW5uZXI6IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKGlzUGF0Y2hlZFRyYWNlU2NvcGUpIHtcclxuICAgICAgICBpbm5lciA9IGdldElubmVyQ29udGVudChib2R5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5uZXIgPSBib2R5LmdldFRleHQoKS5yZXBsYWNlKC9eXFx7XFxzKnxcXHMqXFx9JC9nLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbmV3Qm9keSA9ICcnO1xyXG5cclxuICAgIGlmICghY2hlY2tlZERhdGEucmV3cml0ZUJvZHkpIHtcclxuICAgICAgICAvLyDmspLmnInmiZPli77mmYLmuIXpmaTljIXoo53vvIznm7TmjqXnlKjljp/mnKznmoTlhaflrrlcclxuICAgICAgICBuZXdCb2R5ID0gaW5uZXI7XHJcbiAgICAgICAgbWV0aG9kLmdldFBhcmFtZXRlcihUUkFDRV9QQVJFTlRfUEFSQU1FVEVSX0tFWSk/LnJlbW92ZSgpO1xyXG4gICAgICAgIC8vIOaYr+WQpuacieS/ruaUuemBjiA9IOWOn+acrOacieWMhemBjlxyXG4gICAgICAgIHBhdGNoZWQgPSBpc1BhdGNoZWRUcmFjZVNjb3BlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyDmnInmiZPli77mmYLvvIzlgZp0cnktZmluYWxseeWMheijnVxyXG4gICAgICAgIGNvbnN0IHRhcmdldE5hbWUgPSBtZXRob2QuaXNTdGF0aWMoKSA/IGNsYXNzTmFtZSA6ICd0aGlzJztcclxuICAgICAgICBsZXQgYmVmb3JlVGV4dCA9ICcnO1xyXG4gICAgICAgIGxldCBhZnRlclRleHQgPSAnJztcclxuICAgICAgICBsZXQgdG9Kc29uVGV4dCA9ICcnO1xyXG4gICAgICAgIC8vIOaYr+WQpuacieS/ruaUuemBjiA9IOWOn+acrOaykuacieWMhemBjlxyXG4gICAgICAgIHBhdGNoZWQgPSAhaXNQYXRjaGVkVHJhY2VTY29wZTtcclxuICAgICAgICBpZiAoY2hlY2tlZERhdGEuY2hlY2tDYWxsQnlQcm9taXNlQWxsKCkpIHtcclxuICAgICAgICAgICAgYmVmb3JlVGV4dCA9IGBjb25zdCAke1RSQUNFX1BBUkFNRVRFUl9LRVl9ID0gVHJhY2VTY29wZS5zdGFydCgnJHttZXRob2ROYW1lfScsICR7dGFyZ2V0TmFtZX0sICR7VFJBQ0VfUEFSRU5UX1BBUkFNRVRFUl9LRVl9KTtgO1xyXG4gICAgICAgICAgICBhZnRlclRleHQgPSBgVHJhY2VTY29wZS5lbmQoJHtUUkFDRV9QQVJBTUVURVJfS0VZfSk7YDtcclxuICAgICAgICAgICAgaWYgKCFtZXRob2QuZ2V0UGFyYW1ldGVyKFRSQUNFX1BBUkVOVF9QQVJBTUVURVJfS0VZKSkge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kLmFkZFBhcmFtZXRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogVFJBQ0VfUEFSRU5UX1BBUkFNRVRFUl9LRVksXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1RyYWNlTm9kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzUXVlc3Rpb25Ub2tlbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOaYr+WQpuacieS/ruaUuemBjiA9IOWOn+acrOaykuacieWMhSBQcm9taXNlLmFsbCDomZXnkIZcclxuICAgICAgICAgICAgcGF0Y2hlZCB8fD0gIWlzUGF0Y2hlZFByb21pc2VBbGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmVmb3JlVGV4dCA9IGBjb25zdCAke1RSQUNFX1BBUkFNRVRFUl9LRVl9ID0gVHJhY2VTY29wZS5zdGFydCgnJHttZXRob2ROYW1lfScsICR7dGFyZ2V0TmFtZX0pO2A7XHJcbiAgICAgICAgICAgIGFmdGVyVGV4dCA9IGBUcmFjZVNjb3BlLmVuZCgpO2A7XHJcbiAgICAgICAgICAgIG1ldGhvZC5nZXRQYXJhbWV0ZXIoVFJBQ0VfUEFSRU5UX1BBUkFNRVRFUl9LRVkpPy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgLy8g5piv5ZCm5pyJ5L+u5pS56YGOID0g5Y6f5pys5pyJ5YyFIFByb21pc2UuYWxsIOiZleeQhlxyXG4gICAgICAgICAgICBwYXRjaGVkIHx8PSBpc1BhdGNoZWRQcm9taXNlQWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tlZERhdGEuY2hlY2tPdXRwdXRMb2coKSkge1xyXG4gICAgICAgICAgICB0b0pzb25UZXh0ID0gYFRyYWNlU2NvcGUudG9KU09OKCR7VFJBQ0VfUEFSQU1FVEVSX0tFWX0pO2A7XHJcbiAgICAgICAgICAgIC8vIOaYr+WQpuacieS/ruaUuemBjiA9IOWOn+acrOaykuacieWMhSBUcmFjZVNjb3BlLnRvSlNPTlxyXG4gICAgICAgICAgICBwYXRjaGVkIHx8PSAhaXNQYXRjaGVkVG9Kc29uO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOaYr+WQpuacieS/ruaUuemBjiA9IOWOn+acrOacieWMhSBUcmFjZVNjb3BlLnRvSlNPTlxyXG4gICAgICAgICAgICBwYXRjaGVkIHx8PSBpc1BhdGNoZWRUb0pzb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDntYTlkIggbmV3Qm9keSzpgb/lhY3lh7rnj77nqbrooYxcclxuICAgICAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBwYXJ0cy5wdXNoKGJlZm9yZVRleHQpO1xyXG4gICAgICAgIHBhcnRzLnB1c2goYHRyeSB7YCk7XHJcbiAgICAgICAgcGFydHMucHVzaChgICAgICR7aW5uZXJ9YCk7XHJcbiAgICAgICAgcGFydHMucHVzaChgfSBmaW5hbGx5IHtgKTtcclxuICAgICAgICBwYXJ0cy5wdXNoKGAgICAgJHthZnRlclRleHR9YCk7XHJcblxyXG4gICAgICAgIGlmICh0b0pzb25UZXh0KSB7XHJcbiAgICAgICAgICAgIHBhcnRzLnB1c2goYCAgICAke3RvSnNvblRleHR9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYXJ0cy5wdXNoKGB9YCk7XHJcbiAgICAgICAgbmV3Qm9keSA9IHBhcnRzLmpvaW4oJ1xcbicpICsgJ1xcbic7XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kLnNldEJvZHlUZXh0KG5ld0JvZHkpO1xyXG4gICAgbWV0aG9kLmZvcm1hdFRleHQoKTtcclxuICAgIHJldHVybiBwYXRjaGVkO1xyXG59XHJcblxyXG4vKipcclxuICog56K65L+d5qqU5qGI5pyJIGltcG9ydCDlv4XopoHnmoTkvp3os7RcclxuICogQHBhcmFtIHNvdXJjZUZpbGUgXHJcbiAqIEBwYXJhbSBlbnN1cmVJbXBvcnROYW1lTGlzdCBcclxuICovXHJcbmZ1bmN0aW9uIHJld3JpdGVJbXBvcnQoXHJcbiAgICBzb3VyY2VGaWxlOiBTb3VyY2VGaWxlLFxyXG4gICAgZW5zdXJlSW1wb3J0TmFtZUxpc3Q6IHN0cmluZ1tdLFxyXG4pOiBib29sZWFuIHtcclxuICAgIC8vIOWFiOaJvuePvuaciSBpbXBvcnRcclxuICAgIGNvbnN0IGV4aXN0aW5nID0gc291cmNlRmlsZVxyXG4gICAgICAgIC5nZXRJbXBvcnREZWNsYXJhdGlvbnMoKVxyXG4gICAgICAgIC5maW5kKGQgPT4gZC5nZXRNb2R1bGVTcGVjaWZpZXJWYWx1ZSgpID09PSAnZGI6Ly9hc3NldHMvU2NyaXB0cy9UZXN0VG9vbC9Mb2dWaWV3VUkvU2NyaXB0cy9UcmFjZVNjb3BlJyk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgLy8g5qqi5p+l5piv5ZCm6ZyA6KaB56e76ZmkXHJcbiAgICAgICAgaWYgKGhhc1NhbWVJbXBvcnQoZXhpc3RpbmcsIGVuc3VyZUltcG9ydE5hbWVMaXN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4aXN0aW5nLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbnN1cmVJbXBvcnROYW1lTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8g5a6M5YWo5rKS5pyJIOKGkiDmlrDlop7kuIDlgItcclxuICAgICAgICBzb3VyY2VGaWxlLmFkZEltcG9ydERlY2xhcmF0aW9uKHtcclxuICAgICAgICAgICAgbW9kdWxlU3BlY2lmaWVyOiAnZGI6Ly9hc3NldHMvU2NyaXB0cy9UZXN0VG9vbC9Mb2dWaWV3VUkvU2NyaXB0cy9UcmFjZVNjb3BlJyxcclxuICAgICAgICAgICAgbmFtZWRJbXBvcnRzOiBlbnN1cmVJbXBvcnROYW1lTGlzdCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICog5Y+W5b6X5pa55rOV55qEIGtleVxyXG4gKiBAcGFyYW0gbm9kZSBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXROb2RlS2V5KG5vZGU6IENhbGxFeHByZXNzaW9uKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGV4cHIgPSBub2RlLmdldEV4cHJlc3Npb24oKTtcclxuICAgIC8vIOWPquiZleeQhiB4eHguZnVuY0EoKVxyXG4gICAgaWYgKCFOb2RlLmlzUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKGV4cHIpKSByZXR1cm4gJyc7XHJcblxyXG4gICAgY29uc3QgbWV0aG9kTmFtZSA9IGV4cHIuZ2V0TmFtZSgpO1xyXG4gICAgLy8g55SoIFR5cGVDaGVja2VyIOaJviBzeW1ib2xcclxuICAgIGNvbnN0IHN5bWJvbCA9IGNoZWNrZXIuZ2V0U3ltYm9sQXRMb2NhdGlvbihleHByKTtcclxuICAgIGlmICghc3ltYm9sKSByZXR1cm4gJyc7XHJcblxyXG4gICAgY29uc3QgZGVjbCA9IHN5bWJvbC5nZXREZWNsYXJhdGlvbnMoKT8uWzBdO1xyXG4gICAgaWYgKCFkZWNsKSByZXR1cm4gJyc7XHJcblxyXG4gICAgLy8g5om+IG1ldGhvZCDmiYDlsawgY2xhc3NcclxuICAgIGNvbnN0IGNsYXNzRGVjbCA9IGRlY2wuZ2V0Rmlyc3RBbmNlc3RvckJ5S2luZChTeW50YXhLaW5kLkNsYXNzRGVjbGFyYXRpb24pO1xyXG4gICAgaWYgKCFjbGFzc0RlY2wpIHJldHVybiAnJztcclxuXHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc0RlY2wuZ2V0TmFtZSgpO1xyXG4gICAgaWYgKCFjbGFzc05hbWUpIHJldHVybiAnJztcclxuXHJcbiAgICBjb25zdCBrZXkgPSBgJHtjbGFzc05hbWV9LiR7bWV0aG9kTmFtZX1gO1xyXG4gICAgcmV0dXJuIGtleTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWPluW+l+WRvOWPq+ebruaomeaWueazleeahOeItuaWueazlSBrZXlcclxuICogQHBhcmFtIG5vZGUgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UGFyZW50S2V5KG5vZGU6IE5vZGUpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgcGFyZW50TWV0aG9kID0gbm9kZS5nZXRGaXJzdEFuY2VzdG9yQnlLaW5kKFN5bnRheEtpbmQuTWV0aG9kRGVjbGFyYXRpb24pO1xyXG4gICAgaWYgKCFwYXJlbnRNZXRob2QpIHJldHVybiAnJztcclxuXHJcbiAgICAvLyDmib7liLDljIXlkKvmlrnms5XmiYDlsaznmoQgY2xhc3NcclxuICAgIGNvbnN0IHBhcmVudENsYXNzRGVjbCA9IHBhcmVudE1ldGhvZC5nZXRGaXJzdEFuY2VzdG9yQnlLaW5kKFN5bnRheEtpbmQuQ2xhc3NEZWNsYXJhdGlvbik7XHJcbiAgICBpZiAoIXBhcmVudENsYXNzRGVjbCkgcmV0dXJuICcnO1xyXG5cclxuICAgIGNvbnN0IHBhcmVudENsYXNzTmFtZSA9IHBhcmVudENsYXNzRGVjbC5nZXROYW1lKCk7XHJcbiAgICBjb25zdCBwYXJlbnRNZXRob2ROYW1lID0gcGFyZW50TWV0aG9kLmdldE5hbWUoKTtcclxuICAgIGlmICghcGFyZW50Q2xhc3NOYW1lIHx8ICFwYXJlbnRNZXRob2ROYW1lKSByZXR1cm4gJyc7XHJcblxyXG4gICAgLy8g5qqi5p+l5YyF5ZCr6YCZ5YCL5ZG85Y+r55qE5pa55rOV5piv5ZCm5pyJIHJld3JpdGVCb2R5ID0gdHJ1ZVxyXG4gICAgY29uc3QgcGFyZW50S2V5ID0gYCR7cGFyZW50Q2xhc3NOYW1lfS4ke3BhcmVudE1ldGhvZE5hbWV9YDtcclxuICAgIHJldHVybiBwYXJlbnRLZXk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpgoTljp/ooqvljIXoo53pgY7nmoTohbPmnKxcclxuICogQHBhcmFtIGNoZWNrZWRNYXAg6KaB6YKE5Y6f55qE5pa55rOV5pig5bCEXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVzdG9yZU9yaWdpbmFsU2NyaXB0KGNoZWNrZWRNYXA6IE1hcDxzdHJpbmcsIENoZWNrZWREYXRhPik6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdG9yZWRTb3VyY2VGaWxlcyA9IG5ldyBTZXQ8U291cmNlRmlsZT4oKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHNvdXJjZUZpbGUgb2YgcHJvamVjdC5nZXRTb3VyY2VGaWxlcygpKSB7XHJcbiAgICAgICAgc291cmNlRmlsZS5yZWZyZXNoRnJvbUZpbGVTeXN0ZW0oKTtcclxuICAgICAgICAvLyDpgoTljp/mlrnms5VcclxuICAgICAgICBjb25zdCByZXN0b3JlZFNvdXJjZUZpbGVNZXRob2QgPSByZXN0b3JlU291cmNlRmlsZU1ldGhvZChzb3VyY2VGaWxlLCBjaGVja2VkTWFwKTtcclxuICAgICAgICAvLyDnp7vpmaTlj4PmlbhcclxuICAgICAgICBjb25zdCByZXN0b3JlZFByb21pc2VBbGxDYWxsID0gcmVzdG9yZVByb21pc2VBbGxDYWxsKHNvdXJjZUZpbGUpO1xyXG5cclxuICAgICAgICBpZiAocmVzdG9yZWRTb3VyY2VGaWxlTWV0aG9kIHx8IHJlc3RvcmVkUHJvbWlzZUFsbENhbGwpIHtcclxuICAgICAgICAgICAgcmVzdG9yZWRTb3VyY2VGaWxlcy5hZGQoc291cmNlRmlsZSk7XHJcbiAgICAgICAgICAgIC8vIOenu+mZpOWPr+iDveS4jemcgOimgeeahCBpbXBvcnRcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV3cml0ZUltcG9ydChzb3VyY2VGaWxlLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvbWlzZUxpc3QgPSBbXTtcclxuICAgIGZvciAoY29uc3Qgc291cmNlRmlsZSBvZiByZXN0b3JlZFNvdXJjZUZpbGVzKSB7XHJcbiAgICAgICAgcHJvbWlzZUxpc3QucHVzaChzYXZlQW5kUmVmcmVzaEZpbGUoc291cmNlRmlsZSkpO1xyXG4gICAgfVxyXG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZUxpc3QpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHNob3dMb2coJ+iFs+acrOmChOWOn+WujOaIkCcpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3RvcmVTb3VyY2VGaWxlTWV0aG9kKHNvdXJjZUZpbGU6IFNvdXJjZUZpbGUsIGNoZWNrZWRNYXA6IE1hcDxzdHJpbmcsIENoZWNrZWREYXRhPik6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHJlc3RvcmVkID0gZmFsc2U7XHJcbiAgICBmb3IgKGNvbnN0IGNscyBvZiBzb3VyY2VGaWxlLmdldENsYXNzZXMoKSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIGNscy5nZXRNZXRob2RzKCkpIHtcclxuICAgICAgICAgICAgaWYgKG1ldGhvZC5nZXRLaW5kKCkgPT09IFN5bnRheEtpbmQuQ29uc3RydWN0b3IpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBjbHMuZ2V0TmFtZSgpICsgJy4nICsgbWV0aG9kLmdldE5hbWUoKTtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZERhdGEgPSBjaGVja2VkTWFwLmdldChrZXkpO1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrZWREYXRhKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3RvcmVkTWV0aG9kQm9keSA9IHJlc3RvcmVNZXRob2RCb2R5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3RvcmVkTWV0aG9kUGFyYW1ldGVyID0gcmVzdG9yZU1ldGhvZFBhcmFtZXRlcihtZXRob2QpO1xyXG4gICAgICAgICAgICBpZiAocmVzdG9yZWRNZXRob2RCb2R5IHx8IHJlc3RvcmVkTWV0aG9kUGFyYW1ldGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXN0b3JlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdG9yZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpgoTljp/ljIXoo53pgY7nmoQgUHJvbWlzZS5hbGwg5pa55rOV5ZG85Y+rXHJcbiAqIEBwYXJhbSBzb3VyY2UgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZnVuY3Rpb24gcmVzdG9yZVByb21pc2VBbGxDYWxsKHNvdXJjZTogU291cmNlRmlsZSB8IE1ldGhvZERlY2xhcmF0aW9uKTogYm9vbGVhbiB7XHJcbiAgICAvLyDpgJnoo6HkuI3mqqLmn6UgY2hlY2tlZE1hcO+8jOS4gOW+i+WYl+ippuaJvuWPg+aVuOWBmuenu+mZpFxyXG4gICAgbGV0IHJlc3RvcmVkID0gZmFsc2U7XHJcbiAgICBzb3VyY2UuZm9yRWFjaERlc2NlbmRhbnQobm9kZSA9PiB7XHJcbiAgICAgICAgaWYgKCFOb2RlLmlzQ2FsbEV4cHJlc3Npb24obm9kZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZUtleSA9IGdldE5vZGVLZXkobm9kZSk7XHJcbiAgICAgICAgaWYgKCFub2RlS2V5KSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIOenu+mZpOWPg+aVuFxyXG4gICAgICAgIGNvbnN0IGFyZ3MgPSBub2RlLmdldEFyZ3VtZW50cygpO1xyXG4gICAgICAgIGNvbnN0IHRyYWNlQXJnSW5kZXggPSBhcmdzLmZpbmRJbmRleChhcmcgPT4gYXJnLmdldFRleHQoKSA9PT0gVFJBQ0VfUEFSQU1FVEVSX0tFWSk7XHJcbiAgICAgICAgaWYgKHRyYWNlQXJnSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXJndW1lbnQodHJhY2VBcmdJbmRleCk7XHJcbiAgICAgICAgICAgIHJlc3RvcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN0b3JlZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOmChOWOn+aWueazlemrlOWIsOWOn+Wni+eLgOaFi1xyXG4gKiBAcGFyYW0gbWV0aG9kIOimgemChOWOn+eahOaWueazlVxyXG4gKiBAcmV0dXJucyDmmK/lkKbmiJDlip/pgoTljp9cclxuICovXHJcbmZ1bmN0aW9uIHJlc3RvcmVNZXRob2RCb2R5KG1ldGhvZDogTWV0aG9kRGVjbGFyYXRpb24pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGJvZHkgPSBtZXRob2QuZ2V0Qm9keSgpO1xyXG4gICAgaWYgKCFib2R5IHx8ICFOb2RlLmlzQmxvY2soYm9keSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAvLyDmqqLmn6XmmK/lkKbljIXlkKsgVHJhY2VTY29wZVxyXG4gICAgY29uc3QgYm9keVRleHQgPSBib2R5LmdldFRleHQoKTtcclxuICAgIGlmICghYm9keVRleHQuaW5jbHVkZXMoJ1RyYWNlU2NvcGUnKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8g5rKS5pyJ6KKr5YyF6KOdLOS4jemcgOimgemChOWOn1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9yaWdpbmFsQ29udGVudCA9IGdldElubmVyQ29udGVudChib2R5KTtcclxuXHJcbiAgICAvLyDpgoTljp/mlrnms5Xpq5RcclxuICAgIG1ldGhvZC5zZXRCb2R5VGV4dChvcmlnaW5hbENvbnRlbnQpO1xyXG4gICAgbWV0aG9kLmZvcm1hdFRleHQoKTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzdG9yZU1ldGhvZFBhcmFtZXRlcihtZXRob2Q6IE1ldGhvZERlY2xhcmF0aW9uKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBtZXRob2QuZ2V0UGFyYW1ldGVycygpO1xyXG4gICAgY29uc3QgdHJhY2VQYXJlbnRQYXJhbSA9IHBhcmFtcy5maW5kKHAgPT4gcC5nZXROYW1lKCkgPT09IFRSQUNFX1BBUkVOVF9QQVJBTUVURVJfS0VZKTtcclxuICAgIGlmICh0cmFjZVBhcmVudFBhcmFtKSB7XHJcbiAgICAgICAgdHJhY2VQYXJlbnRQYXJhbS5yZW1vdmUoKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SW5uZXJDb250ZW50KGJvZHk6IEJsb2NrKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHN0YXRlbWVudHMgPSBib2R5LmdldFN0YXRlbWVudHMoKTtcclxuICAgIGNvbnN0IHRyeVN0YXRlbWVudCA9IHN0YXRlbWVudHMuZmluZCgoc3RtdCk6IHN0bXQgaXMgaW1wb3J0KCd0cy1tb3JwaCcpLlRyeVN0YXRlbWVudCA9PlxyXG4gICAgICAgIE5vZGUuaXNUcnlTdGF0ZW1lbnQoc3RtdClcclxuICAgICk7XHJcblxyXG4gICAgaWYgKCF0cnlTdGF0ZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gYm9keS5nZXRUZXh0KCkucmVwbGFjZSgvXlxce1xccyp8XFxzKlxcfSQvZywgXCJcIikudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaPkOWPliB0cnkgYmxvY2sg55qE5YWn5a65XHJcbiAgICBjb25zdCB0cnlCbG9jayA9IHRyeVN0YXRlbWVudC5nZXRUcnlCbG9jaygpO1xyXG4gICAgcmV0dXJuIHRyeUJsb2NrLmdldFRleHQoKS5yZXBsYWNlKC9eXFx7XFxzKnxcXHMqXFx9JC9nLCBcIlwiKS50cmltKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1NhbWVJbXBvcnQoaW1wb3J0RGVjbGFyYXRpb246IEltcG9ydERlY2xhcmF0aW9uLCBpbXBvcnROYW1lczogc3RyaW5nW10pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGV4aXN0aW5nSW1wb3J0TmFtZXMgPSBpbXBvcnREZWNsYXJhdGlvbi5nZXROYW1lZEltcG9ydHMoKS5tYXAobiA9PiBuLmdldE5hbWUoKSk7XHJcbiAgICBpZiAoZXhpc3RpbmdJbXBvcnROYW1lcy5sZW5ndGggIT09IGltcG9ydE5hbWVzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIGltcG9ydE5hbWVzKSB7XHJcbiAgICAgICAgaWYgKCFleGlzdGluZ0ltcG9ydE5hbWVzLmluY2x1ZGVzKG5hbWUpKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSJdfQ==