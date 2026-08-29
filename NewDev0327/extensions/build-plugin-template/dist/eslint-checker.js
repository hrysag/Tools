"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEslintCheck = void 0;
const { shell } = require('electron');
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const child_process_1 = require("child_process");
function runEslintCheck() {
    console.log(`[my-builder-logger] 🔍 開始進行ESLint語法檢查...`);
    const SRC_DIR = path_1.default.join(Editor.Project.path, 'assets');
    const eslintResult = (0, child_process_1.spawnSync)('npx', ['eslint', '--max-warnings', '0', SRC_DIR], {
        encoding: 'utf8',
        cwd: Editor.Project.path,
        shell: process.platform === 'win32',
        env: Object.assign(Object.assign({}, process.env), { ESLINT_MODE: 'strict' })
    });
    if (eslintResult.status !== 0) {
        const LOG_FILE = path_1.default.join(Editor.Project.path, 'extensions', 'build-plugin-template', 'eslint-checker.log');
        if (!fs_1.default.existsSync(LOG_FILE)) {
            fs_1.default.writeFileSync(LOG_FILE, '');
        }
        const output = eslintResult.stdout || '';
        const lines = output.split(/\r?\n/).filter(l => l.trim().length > 0);
        const { gameScriptGroups, otherScriptGroups } = getGroupedLines(lines);
        let outputString = '';
        let eslintResultString = '';
        outputString += '====================遊戲館腳本====================\n\n';
        if (gameScriptGroups.length > 0) {
            gameScriptGroups.forEach((group) => {
                outputString += group.join('\n') + '\n\n';
            });
        }
        else {
            outputString += '沒有發現遊戲館腳本問題\n\n';
        }
        outputString += '====================遊戲館腳本====================\n\n';
        outputString += '====================其他腳本====================\n\n';
        if (otherScriptGroups.length > 0) {
            otherScriptGroups.forEach((group) => {
                if (group[0].endsWith('.ts')) {
                    outputString += group.join('\n') + '\n\n';
                }
                else if (group[0].startsWith('✖')) {
                    eslintResultString += group.join('\n') + '\n';
                }
            });
        }
        else {
            outputString += '沒有發現其他腳本問題\n\n';
        }
        outputString += '====================其他腳本====================\n';
        fs_1.default.writeFileSync(LOG_FILE, outputString);
        console.warn('[my-builder-logger] 🔴 eslint 語法檢查結果', eslintResultString);
        console.warn('[my-builder-logger] 🔴 eslint 語法檢查結果已寫入', LOG_FILE);
        shell.openPath(LOG_FILE);
    }
    else {
        console.warn('[my-builder-logger] ✅ 沒有發現 eslint 語法問題');
    }
}
exports.runEslintCheck = runEslintCheck;
function getGroupedLines(lines) {
    const ruleTemplatePath = path_1.default.join(Editor.Project.path, 'eslint-rules-dev.config.js');
    const ruleLocalPath = path_1.default.join(Editor.Project.path, 'eslint-rules-dev-local.config.js');
    let ruleDescription = {};
    if (fs_1.default.existsSync(ruleLocalPath)) {
        ruleDescription = require(ruleLocalPath).ruleDescription;
    }
    else if (fs_1.default.existsSync(ruleTemplatePath)) {
        ruleDescription = require(ruleTemplatePath).ruleDescription;
    }
    let group = [];
    let groupName = lines[0];
    const gameScriptGroups = [];
    const otherScriptGroups = [];
    for (const line of lines) {
        const replacedLine = replaceRuleInMessage(line, ruleDescription);
        if (line.endsWith('.ts') || line.startsWith('✖')) {
            if (groupName !== replacedLine && group.length > 0) {
                if (groupName.includes('assets\\Game\\Game')) {
                    gameScriptGroups.push(group);
                }
                else {
                    otherScriptGroups.push(group);
                }
                groupName = replacedLine;
                group = [];
            }
            group.push(replacedLine);
        }
        else {
            group.push(replacedLine);
        }
    }
    if (group.length > 0) {
        if (groupName.includes('assets\\Game\\Game')) {
            gameScriptGroups.push(group);
        }
        else {
            otherScriptGroups.push(group);
        }
        group = [];
    }
    return { gameScriptGroups, otherScriptGroups };
}
function replaceRuleInMessage(message, ruleDescription) {
    for (const ruleName of Object.keys(ruleDescription)) {
        if (message.endsWith(ruleName)) {
            return message.slice(0, -ruleName.length) + ruleDescription[ruleName];
        }
    }
    return message;
}
