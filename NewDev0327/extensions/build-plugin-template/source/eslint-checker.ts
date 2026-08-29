const { shell } = require('electron');

import path from "path";
import fs from "fs";
import { spawnSync } from "child_process";

export function runEslintCheck(): void {
    console.log(`[my-builder-logger] 🔍 開始進行ESLint語法檢查...`);
    const SRC_DIR = path.join(Editor.Project.path, 'assets');

    const eslintResult = spawnSync('npx', ['eslint', '--max-warnings', '0', SRC_DIR], {
        encoding: 'utf8',
        cwd: Editor.Project.path,
        shell: process.platform === 'win32',
        env: {
            ...process.env,
            ESLINT_MODE: 'strict',
        }
    });

    if (eslintResult.status !== 0) {
        const LOG_FILE = path.join(Editor.Project.path, 'extensions', 'build-plugin-template', 'eslint-checker.log');
        if (!fs.existsSync(LOG_FILE)) {
            fs.writeFileSync(LOG_FILE, '');
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
        } else {
            outputString += '沒有發現遊戲館腳本問題\n\n';
        }
        outputString += '====================遊戲館腳本====================\n\n';
        outputString += '====================其他腳本====================\n\n';
        if (otherScriptGroups.length > 0) {
            otherScriptGroups.forEach((group) => {
                if (group[0].endsWith('.ts')) {
                    outputString += group.join('\n') + '\n\n';
                } else if (group[0].startsWith('✖')) {
                    eslintResultString += group.join('\n') + '\n';
                }
            });
        } else {
            outputString += '沒有發現其他腳本問題\n\n';
        }
        outputString += '====================其他腳本====================\n';
        fs.writeFileSync(LOG_FILE, outputString);
        console.warn('[my-builder-logger] 🔴 eslint 語法檢查結果', eslintResultString);
        console.warn('[my-builder-logger] 🔴 eslint 語法檢查結果已寫入', LOG_FILE);
        shell.openPath(LOG_FILE);
    } else {
        console.warn('[my-builder-logger] ✅ 沒有發現 eslint 語法問題');
    }
}

function getGroupedLines(lines: string[]): {
    gameScriptGroups: string[][],
    otherScriptGroups: string[][]
} {
    const ruleTemplatePath = path.join(Editor.Project.path, 'eslint-rules-dev.config.js');
    const ruleLocalPath = path.join(Editor.Project.path, 'eslint-rules-dev-local.config.js');
    let ruleDescription = {};
    if (fs.existsSync(ruleLocalPath)) {
        ruleDescription = require(ruleLocalPath).ruleDescription;
    } else if (fs.existsSync(ruleTemplatePath)) {
        ruleDescription = require(ruleTemplatePath).ruleDescription;
    }

    let group: string[] = [];
    let groupName = lines[0];
    const gameScriptGroups: string[][] = [];
    const otherScriptGroups: string[][] = [];
    for (const line of lines) {
        const replacedLine = replaceRuleInMessage(line, ruleDescription);
        if (line.endsWith('.ts') || line.startsWith('✖')) {
            if (groupName !== replacedLine && group.length > 0) {
                if (groupName.includes('assets\\Game\\Game')) {
                    gameScriptGroups.push(group);
                } else {
                    otherScriptGroups.push(group);
                }
                groupName = replacedLine;
                group = [];
            }
            group.push(replacedLine);
        } else {
            group.push(replacedLine);
        }
    }
    if (group.length > 0) {
        if (groupName.includes('assets\\Game\\Game')) {
            gameScriptGroups.push(group);
        } else {
            otherScriptGroups.push(group);
        }
        group = [];
    }
    return { gameScriptGroups, otherScriptGroups };
}

function replaceRuleInMessage(message: string, ruleDescription: Record<string, string>): string {
    for (const ruleName of Object.keys(ruleDescription)) {
        if (message.endsWith(ruleName)) {
            return message.slice(0, -ruleName.length) + ruleDescription[ruleName];
        }
    }
    return message;
}