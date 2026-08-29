const path = require("path");

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Enforce import rules between Scripts internal and external files",
        },
        schema: [], // no options
        messages: {
            mustUseModuleEntry: "外部腳本必須透過 ModuleEntry 引用 assets/Scripts 內的腳本。若屬例外情況,請使用 Quick Fix 忽略此行",
            noModuleEntryFromInternal: "assets/Scripts 內的腳本不可透過 ModuleEntry 引用，請直接引用原腳本。若屬例外情況,請使用 Quick Fix 忽略此行",
        },
    },
    create(context) {
        // context.getCwd() 會是執行 eslint 指令時的目錄
        const SCRIPTS_ROOT = context.getCwd
            ? path.join(context.getCwd(), "assets", "Scripts")
            : "assets/Scripts";

        function isInsideScripts(filePath) {
            return path.relative(SCRIPTS_ROOT, filePath).split(path.sep)[0] !== "..";
        }

        return {
            ImportDeclaration(node) {
                // 當前被檢查腳本的絕對路徑
                const importingFile = context.getFilename();
                // import 語句的路徑
                const importPath = node.source.value;

                if (typeof importPath !== "string") return;

                // resolve absolute path
                const resolvedPath = path.resolve(path.dirname(importingFile), importPath);

                // 被檢查的腳本是否在 assets/Scripts 內
                const importingIsInternal = isInsideScripts(importingFile);
                // import 語句的路徑腳本是否在 assets/Scripts 內
                const importedIsInternal = isInsideScripts(resolvedPath);

                if (importingIsInternal && importedIsInternal) {
                    // 內部檔案只能直接引用其他檔案，不可透過 ModuleEntry.ts
                    if (importPath.endsWith("ModuleEntry")) {
                        context.report({ node, messageId: "noModuleEntryFromInternal" });
                    }
                }

                if (!importingIsInternal && importedIsInternal) {
                    // 外部檔案只能透過 ModuleEntry.ts
                    if (!importPath.endsWith("ModuleEntry")) {
                        context.report({ node, messageId: "mustUseModuleEntry" });
                    }
                }
            },
        };
    },
};