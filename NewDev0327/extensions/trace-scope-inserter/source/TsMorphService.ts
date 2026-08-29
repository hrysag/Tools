import { Block, CallExpression, ImportDeclaration, MethodDeclaration, Node, Project, SourceFile, SyntaxKind, TypeChecker } from "ts-morph";
import { CheckedData, PanelData } from "./Define";
import { showLog, showWarn } from './Utils';
import path from 'path';

const TRACE_PARAMETER_KEY = 'traceParameterAddByExtension';
const TRACE_PARENT_PARAMETER_KEY = 'traceParentParameterAddByExtension';

let project: Project;
let checker: TypeChecker;

/**
 * 取得資源管理器選中檔案的資料
 * @returns 
 */
export async function getSelectedScriptData(): Promise<PanelData[]> {
    const files = await getSelectedFiles();
    const tsFiles = filterTypeScriptFiles(files);

    project = new Project({
        tsConfigFilePath: path.resolve(Editor.Project.path, 'tsconfig.json'),
        skipAddingFilesFromTsConfig: true,
    });

    tsFiles.forEach((file) => {
        project.addSourceFileAtPath(file);
    });
    checker = project.getTypeChecker();

    const data: PanelData[] = [];
    let parentIdx = 0;
    for (const sourceFile of project.getSourceFiles()) {
        for (const cls of sourceFile.getClasses()) {
            const parentId = parentIdx;
            data.push({
                id: `${parentId}`,
                label: cls.getName() as string,
                parentId: '',
            });
            let idx = 0;
            for (const method of cls.getMethods()) {
                // constructor 不處理
                if (method.getKind() === SyntaxKind.Constructor) continue;
                data.push({
                    id: `${parentId}-${idx}`,
                    label: method.getName() as string,
                    parentId: parentId.toString(),
                });
                idx++;
            }
            parentIdx++;
        }
    }
    return data;
}

/**
 * 取得資源管理器選中檔案的檔案路徑
 * @returns 
 */
async function getSelectedFiles(): Promise<string[]> {
    const selectedAssetUuids = Editor.Selection.getSelected('asset');
    const promiseList = [];
    for (const uuid of selectedAssetUuids) {
        promiseList.push(Editor.Message.request('asset-db', 'query-asset-info', uuid));
    }
    const assetInfos = await Promise.all(promiseList);
    const files = assetInfos.map((assetInfo) => assetInfo?.file).filter((file): file is string => file !== undefined);
    return files;
}

/**
 * 過濾掉不是 TypeScript 的檔案
 * @param files 檔案路徑列表
 * @returns TypeScript 檔案路徑列表
 */
function filterTypeScriptFiles(files: string[]): string[] {
    const otherFiles = files.filter((file) => !file.endsWith('.ts'));
    const tsFiles = files.filter((file) => file.endsWith('.ts'));

    if (otherFiles.length > 0) {
        showWarn('以下被選中不是 TypeScript 檔案，已被忽略:');
        otherFiles.forEach((file) => showWarn(file));
    }

    return tsFiles;
}

/**
 * 給所有被選中的腳本做包裝
 * @param checkedMap 勾選的資料 Map<class.method, CheckedData>
 */
export function rewriteSelectedScript(checkedMap: Map<string, CheckedData>): void {
    const patchedSourceFiles = new Set<SourceFile>();
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
        showLog('測試包裝添加完成');
    });
}

/**
 * 處理單一檔案的所有方法包裝
 * @param sourceFile 
 * @param checkedMap 
 * @returns 
 */
function rewriteSourceFileMethod(sourceFile: SourceFile, checkedMap: Map<string, CheckedData>): boolean {
    let patched = false;
    const ensureImportNameList = new Set<string>();
    for (const cls of sourceFile.getClasses()) {
        for (const method of cls.getMethods()) {
            // constructor 不處理
            if (method.getKind() === SyntaxKind.Constructor) continue;
            const key = cls.getName() + '.' + method.getName();
            const checkedData = checkedMap.get(key);
            if (!checkedData) continue;
            const className = cls.getName() as string;
            const rewrote = rewriteMethodBody(method, checkedData, className);
            if (rewrote) {
                patched = true;
            }
            if (checkedData.rewriteBody) {
                ensureImportNameList.add('TraceScope');
                if (checkedData.checkCallByPromiseAll()) {
                    ensureImportNameList.add('TraceNode');
                }
            } else {
                const restoredPromiseAllCall = restorePromiseAllCall(method);
                if (restoredPromiseAllCall) {
                    patched = true;
                }
            }
        }
    }
    const rewroteImport = rewriteImport(sourceFile, Array.from(ensureImportNameList));
    patched ||= rewroteImport;
    return patched;
}

function rewritePromiseAllCall(sourceFile: SourceFile, checkedMap: Map<string, CheckedData>): boolean {
    let patched = false;
    sourceFile.forEachDescendant(node => {
        // 確保 node 是 CallExpression 類型
        if (!Node.isCallExpression(node)) return;

        const nodeKey = getNodeKey(node);
        const nodeCheckedData = checkedMap.get(nodeKey);
        if (!nodeCheckedData) return;

        if (nodeCheckedData.checkCallByPromiseAll()) {
            // 找到包含這個呼叫的方法
            const parentKey = getParentKey(node);
            const parentCheckedData = checkedMap.get(parentKey);
            if (!parentCheckedData || !parentCheckedData.rewriteBody) {
                showWarn(`警告: ${parentKey} 呼叫了勾選 "被Promise.all執行" 的 ${nodeKey}，但 ${parentKey} 沒有勾選 "包裝方法"`);
                return;
            }

            // 防止重複加參數
            const hasTrace = node.getArguments()
                .some(arg => arg.getText() === TRACE_PARAMETER_KEY);

            if (!hasTrace) {
                node.addArgument(TRACE_PARAMETER_KEY);
                patched = true;
            }
        } else {
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
async function saveAndRefreshFile(sourceFile: SourceFile): Promise<void> {
    const filePath = sourceFile.getFilePath();
    const basePath = Editor.Utils.Path.slash(Editor.Project.path);
    const dbUrl = filePath.replace(basePath, 'db:/');
    sourceFile.saveSync();
    await Editor.Message.request('asset-db', 'reimport-asset', dbUrl);
    showLog(`${filePath} 檔案已修改`);
}

function rewriteMethodBody(method: MethodDeclaration, checkedData: CheckedData, className: string): boolean {
    const body = method.getBody();
    let patched = false;
    if (!body || !Node.isBlock(body)) return patched;
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
    let inner: string = '';
    if (isPatchedTraceScope) {
        inner = getInnerContent(body);
    } else {
        inner = body.getText().replace(/^\{\s*|\s*\}$/g, "");
    }

    let newBody = '';

    if (!checkedData.rewriteBody) {
        // 沒有打勾時清除包裝，直接用原本的內容
        newBody = inner;
        method.getParameter(TRACE_PARENT_PARAMETER_KEY)?.remove();
        // 是否有修改過 = 原本有包過
        patched = isPatchedTraceScope;
    } else {
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
            patched ||= !isPatchedPromiseAll;
        } else {
            beforeText = `const ${TRACE_PARAMETER_KEY} = TraceScope.start('${methodName}', ${targetName});`;
            afterText = `TraceScope.end();`;
            method.getParameter(TRACE_PARENT_PARAMETER_KEY)?.remove();
            // 是否有修改過 = 原本有包 Promise.all 處理
            patched ||= isPatchedPromiseAll;
        }
        if (checkedData.checkOutputLog()) {
            toJsonText = `TraceScope.toJSON(${TRACE_PARAMETER_KEY});`;
            // 是否有修改過 = 原本沒有包 TraceScope.toJSON
            patched ||= !isPatchedToJson;
        } else {
            // 是否有修改過 = 原本有包 TraceScope.toJSON
            patched ||= isPatchedToJson;
        }

        // 組合 newBody,避免出現空行
        const parts: string[] = [];
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
function rewriteImport(
    sourceFile: SourceFile,
    ensureImportNameList: string[],
): boolean {
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
function getNodeKey(node: CallExpression): string {
    const expr = node.getExpression();
    // 只處理 xxx.funcA()
    if (!Node.isPropertyAccessExpression(expr)) return '';

    const methodName = expr.getName();
    // 用 TypeChecker 找 symbol
    const symbol = checker.getSymbolAtLocation(expr);
    if (!symbol) return '';

    const decl = symbol.getDeclarations()?.[0];
    if (!decl) return '';

    // 找 method 所屬 class
    const classDecl = decl.getFirstAncestorByKind(SyntaxKind.ClassDeclaration);
    if (!classDecl) return '';

    const className = classDecl.getName();
    if (!className) return '';

    const key = `${className}.${methodName}`;
    return key;
}

/**
 * 取得呼叫目標方法的父方法 key
 * @param node 
 * @returns 
 */
function getParentKey(node: Node): string {
    const parentMethod = node.getFirstAncestorByKind(SyntaxKind.MethodDeclaration);
    if (!parentMethod) return '';

    // 找到包含方法所屬的 class
    const parentClassDecl = parentMethod.getFirstAncestorByKind(SyntaxKind.ClassDeclaration);
    if (!parentClassDecl) return '';

    const parentClassName = parentClassDecl.getName();
    const parentMethodName = parentMethod.getName();
    if (!parentClassName || !parentMethodName) return '';

    // 檢查包含這個呼叫的方法是否有 rewriteBody = true
    const parentKey = `${parentClassName}.${parentMethodName}`;
    return parentKey;
}

/**
 * 還原被包裝過的腳本
 * @param checkedMap 要還原的方法映射
 */
export function restoreOriginalScript(checkedMap: Map<string, CheckedData>): void {
    const restoredSourceFiles = new Set<SourceFile>();

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
        showLog('腳本還原完成');
    });
}

function restoreSourceFileMethod(sourceFile: SourceFile, checkedMap: Map<string, CheckedData>): boolean {
    let restored = false;
    for (const cls of sourceFile.getClasses()) {
        for (const method of cls.getMethods()) {
            if (method.getKind() === SyntaxKind.Constructor) continue;
            const key = cls.getName() + '.' + method.getName();
            const checkedData = checkedMap.get(key);
            if (!checkedData) continue;

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
function restorePromiseAllCall(source: SourceFile | MethodDeclaration): boolean {
    // 這裡不檢查 checkedMap，一律嘗試找參數做移除
    let restored = false;
    source.forEachDescendant(node => {
        if (!Node.isCallExpression(node)) return;

        const nodeKey = getNodeKey(node);
        if (!nodeKey) return;

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
function restoreMethodBody(method: MethodDeclaration): boolean {
    const body = method.getBody();
    if (!body || !Node.isBlock(body)) return false;

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

function restoreMethodParameter(method: MethodDeclaration): boolean {
    const params = method.getParameters();
    const traceParentParam = params.find(p => p.getName() === TRACE_PARENT_PARAMETER_KEY);
    if (traceParentParam) {
        traceParentParam.remove();
        return true;
    }
    return false;
}

function getInnerContent(body: Block): string {
    const statements = body.getStatements();
    const tryStatement = statements.find((stmt): stmt is import('ts-morph').TryStatement =>
        Node.isTryStatement(stmt)
    );

    if (!tryStatement) {
        return body.getText().replace(/^\{\s*|\s*\}$/g, "").trim();
    }

    // 提取 try block 的內容
    const tryBlock = tryStatement.getTryBlock();
    return tryBlock.getText().replace(/^\{\s*|\s*\}$/g, "").trim();
}

function hasSameImport(importDeclaration: ImportDeclaration, importNames: string[]): boolean {
    const existingImportNames = importDeclaration.getNamedImports().map(n => n.getName());
    if (existingImportNames.length !== importNames.length) return false;
    for (const name of importNames) {
        if (!existingImportNames.includes(name)) return false;
    }
    return true;
}