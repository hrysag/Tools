import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import unusedImports from 'eslint-plugin-unused-imports'

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const customPlugin = require("./eslint-scripts/custom-rules/index.cjs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let devOverrides = {};
const localConfigPath = path.join(__dirname, 'eslint-rules-dev-local.config.js');
const templateConfigPath = path.join(__dirname, 'eslint-rules-dev.config.js');

try {
    if (fs.existsSync(localConfigPath)) {
        // 使用個人 ESLint 配置
        devOverrides = require(localConfigPath).eslintRules;
    } else if (fs.existsSync(templateConfigPath)) {
        // 使用預設 ESLint 配置
        devOverrides = require(templateConfigPath).eslintRules;
    }
} catch (error) {
    console.warn('⚠️  無法讀取開發者配置，使用基礎配置:', error.message);
}

/*
 * 共用規則
 * 需要新增共用規則時，請依照以下步驟進行
 * 1. 在baseRules中新增規則
 * 2. 在eslint-rules-dev.config.js的MODES.close中新增<規則>: "off"，以確保close模式不會做任何檢查
 * 3. 在eslint-rules-dev.config.js的ruleDescription中新增<規則>: "<規則描述>"，來使包版檢查時的輸出檔能顯示規則敘述
 */
const baseRules = {
    // 檢查 for 迴圈方向是否正確
    // 共用規範先註解掉
    // "for-direction": "error",

    // 檢查表達式結尾是否有分號
    // 共用規範中先註解掉
    // ✅存檔時可自動修正
    // "semi": "warn",

    // 檢查是否有多餘分號
    // 共用規範中先註解掉
    // ✅存檔時可自動修正
    // "no-extra-semi": "warn",

    // 要求使用 === 或 !==
    // 共用規範中先註解掉
    // "eqeqeq": "error",

    // 浮點數的小數點前後一定要有數字
    // 共用規範中先註解掉
    // ✅存檔時可自動修正
    // "no-floating-decimal": "warn",

    // 要求不可以自我賦值
    // 共用規範中先註解掉
    // "no-self-assign": "warn",

    // 檢查是否使用不會改變的迴圈判斷式
    // 共用規範中先註解掉
    // "no-unmodified-loop-condition": "warn",

    // 檢查未使用/無意義的表達式
    // 共用規範中先註解掉
    // "no-unused-expressions": "warn",

    // 檢查無意義的 return
    // 共用規範中先註解掉
    // ✅存檔時可自動修正
    // "no-useless-return": "warn",

    // 要求判斷常量必須放在等號右側
    // 共用規範中先註解掉
    // ✅存檔時可自動修正
    // "yoda": "warn",

    // 要求不可以有超過一個以上的空行
    // 共用規範中先註解掉
    // ✅存檔時可自動修正
    // "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 1 }],

    // 禁用 console
    "no-console": "error",

    // 檢查判斷式是否寫成賦值表達式
    "no-cond-assign": "warn",

    // 檢查陣列是否為稀疏陣列
    "no-sparse-arrays": "warn",

    // 檢查 ${} 是否使用正確的引號
    "no-template-curly-in-string": "warn",

    // 檢查是否因 continue、break、return、throw、無限迴圈導致有無法執行的程式碼區塊
    "no-unreachable": "warn",

    // 要求 switch 必須要有 default 分支
    "default-case": "warn",

    // 檢查 switch 的 case 是否漏掉 break
    "no-fallthrough": "warn",

    // 禁止使用 New Function
    "no-new-func": "warn",

    // 要求 return 中不可以有賦值表達式
    "no-return-assign": "warn",

    // 要求不可以自我比較判斷
    "no-self-compare": "warn",

    // 要求 async 方法一定要包含 await 的使用
    "require-await": 'warn',

    // 檢查未使用的引用
    // ✅存檔時可自動修正
    "unused-imports/no-unused-imports": "warn",

    // 要求方法必須明確標示型別
    "@typescript-eslint/explicit-function-return-type": "warn",

    // 要求變數必須明確標示型別
    "@typescript-eslint/typedef": [
        "warn",
        {
            // "propertyDeclaration": true,     // class 內的屬性
            // "variableDeclaration": true,     // 所有變數
            "memberVariableDeclaration": true,  // class 的成員變數
            "parameter": true                   // 所有函式
        }
    ],

    // 要求 class 成員必須標示存取修飾子
    "@typescript-eslint/explicit-member-accessibility": [
        "warn",
        {
            "accessibility": "explicit",
            "ignoredMethodNames": ["constructor"]
        }
    ],

    // 檢查 ...Set 擴展符
    "no-restricted-syntax": [
        "error",
        {
            "selector": "SpreadElement[argument.type='NewExpression'][argument.callee.name='Set']",
            "message": "禁止使用 [...new Set(arr)] 語法，請改用 Array.from(new Set(arr)) 代替"
        }
    ],

    // 檢查 tween() 是否遺漏 start()
    "custom/tween-missing-start": "error",

    // 檢查 Promise 是否遺漏 resolve/reject
    "custom/promise-pending-check": "error",

    // 檢查 ModuleEntry 的 import 規範
    "custom/scripts-import-policy": "error",
}

export default [
    prettierConfig,
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: true,
                tsconfigRootDir: __dirname,
            },
        },
        plugins: {
            "@typescript-eslint": tseslint.plugin,
            "unused-imports": unusedImports,
            "custom": customPlugin
        },
        rules: {
            ...baseRules,
            ...devOverrides,
        },
    },

    {
        ignores: ["eslint.config.mjs"],
    },
];
