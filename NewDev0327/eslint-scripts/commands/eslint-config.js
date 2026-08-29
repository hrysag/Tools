const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const targetFile = path.join(__dirname, '../../', 'eslint-rules-dev-local.config.js');

if (!fs.existsSync(targetFile)) {
    console.log('❌ eslint-rules-dev-local.config.js 不存在，請先執行 npm run lint-init');
    process.exit(0);
}

openInEditor(targetFile);

// 在預設編輯器中開啟檔案
function openInEditor(filePath) {
    // 定義支援的編輯器列表
    const editors = [
        { name: 'Antigravity', command: 'antigravity' },
        { name: 'Cursor', command: 'cursor' },
        { name: 'VS Code', command: 'code' },
    ];

    const detectedEditor = detectEditor();
    if (detectedEditor) {
        const editor = editors.find(e => e.name === detectedEditor);
        console.log(`   偵測到當前在 ${detectedEditor} 編輯器運行終端`);
        const command = `${editor.command} "${filePath}"`;
        exec(command, (error) => {
            if (!error) {
                console.log(`   ✅ 已在 ${editor.name} 中開啟檔案`);
            } else {
                console.log(`   ❌ 無法使用 ${editor.name} 開啟檔案`);
                console.log(`   ℹ️  請手動開啟 eslint-rules-dev-local.config.js`);
            }
        });
        return;
    }
}

function detectEditor() {
    const env = process.env;
    if (env.ANTIGRAVITY_CLI_ALIAS === 'agy') {
        return 'Antigravity';
    } else if (env.CURSOR_TRACE_ID) {
        return 'Cursor';
    } else if (env.VSCODE_INJECTION) {
        return 'VS Code';
    }
    return null;
}