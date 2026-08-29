const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');

// 檔案路徑
const sourceFile = path.join(__dirname, '../../', 'eslint-rules-dev.config.js');
const targetFile = path.join(__dirname, '../../', 'eslint-rules-dev-local.config.js');

console.log('🔧 ESLint 開發配置初始化...\n');

// 執行 npm install
try {
    console.log('將執行 npm install...');
    execSync('npm --version');
    execSync('npm install');
    console.log('npm install 完成！\n');
} catch (error) {
    console.error('❌ npm install 時發生錯誤:', error.message);
    process.exit(1);
}

// 檢查來源檔案是否存在
if (!fs.existsSync(sourceFile)) {
    console.error('❌ 錯誤：找不到 eslint-rules-dev.config.js');
    process.exit(1);
}

// 檢查目標檔案是否已存在
if (fs.existsSync(targetFile)) {
    console.log('⚠️  警告：eslint-rules-dev-local.config.js 已存在');
    console.log('   如果要重新初始化，請先刪除此檔案\n');

    // 詢問是否要開啟現有檔案
    console.log('✅ 將在編輯器中開啟現有的配置檔案...');
    openInEditor(targetFile);
} else {
    console.log('✅ 將複製配置檔案...');
    try {
        fs.copyFileSync(sourceFile, targetFile);
        console.log('✅ 成功複製配置檔案');
        console.log(`   來源：eslint-rules-dev.config.js`);
        console.log(`   目標：eslint-rules-dev-local.config.js\n`);

        console.log('📝 接下來你可以：');
        console.log('   1. 修改 eslint-rules-dev-local.config.js 中的 MODE 變數');
        console.log('   2. 或在 customOverrides 中自訂規則');
        console.log('   3. 修改後需要重啟 ESLint Server (Ctrl+Shift+P → "ESLint: Restart ESLint Server")\n');

        // 在編輯器中開啟檔案
        console.log('✅ 正在編輯器中開啟配置檔案...\n');
        openInEditor(targetFile);
    } catch (error) {
        console.error('❌ 複製檔案時發生錯誤:', error.message);
        process.exit(1);
    }
}

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