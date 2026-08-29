/**
 * ========================================
 * ESLint 開發模式配置檔案
 * ========================================
 * 
 * 📌 快速切換模式：
 * 在 eslint-rules-dev-local.config.js 中修改 MODE 變數
 * - "close"         : 關閉所有規則檢查
 * - "development"   : 開發中模式
 * - "pre-release"   : 開發後期模式
 * - "strict"        : 打包檢查模式
 * - "<自訂模式名稱>" : 自訂規則表
 * 
 * ⚠️ 修改後需要重啟 ESLint Server 才會生效
 * 
 * 📌 如何重啟 ESLint Server：
 *   1. 按下 Ctrl + Shift + P
 *   2. 輸入 "ESLint: Restart ESLint Server"
 *   3. 按下 Enter
 * 
 * 📌 規則值說明：
 * - "off"           : 關閉規則
 * - "warn"          : 警告（黃色波浪線）
 * - "error"         : 錯誤（紅色波浪線）
 * 
 * 📌 現有規則：
 * - for-direction 檢查 for 迴圈方向是否正確
 * - ⚠️共用規範中先註解掉
 * @example 
 * for (let i = 0; i < 10; i--) { }
 *                         ^^^
 * @should 
 * for (let i = 0; i < 10; i++) { }
 * 
 * - no-console 禁止使用 console
 * 
 * - semi 檢查表達式結尾是否有分號
 * - ✅存檔時可自動修正
 * - ⚠️共用規範中先註解掉
 * 
 * - no-cond-assign 檢查判斷式是否寫成賦值表達式
 * @example
 * if (condition = 1) { }
 *              ^^^
 * @should 
 * if (condition === 1) { }
 * 
 * - no-extra-semi 檢查是否有多餘分號
 * - ✅存檔時可自動修正
 * - ⚠️共用規範中先註解掉
 * 
 * - no-sparse-arrays 檢查陣列是否為稀疏陣列
 * @example
 * const array = [1, , 2, 3];
 *                  ^^^
 * @should 
 * const array = [1, 2, 3];
 * 
 * - no-template-curly-in-string 檢查 ${} 是否使用正確的引號
 * @example
 * log('${data}');
 *    ^^^     ^^^
 * @should 
 * log(`${data}`);
 * 
 * - no-unreachable 檢查是否因 continue、break、return、throw、無限迴圈導致有無法執行的程式碼區塊
 * @example
 * function func() {
 *     return 1;
 *     console.log(str);
 *     ^^^^^^^^^^^^^^^^^
 * }
 * 
 * - default-case 要求 switch 必須要有 default 分支
 * @example
 * switch (a) {
 *     case 1:
 *         ...
 *     break;
 *     case 2:
 *         ...
 *     break;
 * 
 *     ^^^^^ 漏掉 default
 * }
 * @should 
 * switch (a) {
 *     case 1:
 *         ...
 *     break;
 *     case 2:
 *         ...
 *     break;
 *     default:
 *         ...
 *     break;
 * }
 * 
 * - eqeqeq 要求使用 === 或 !==
 * - ⚠️共用規範中先註解掉
 * @example
 * if (condition == 1) { }
 *              ^^^^
 * @should 
 * if (condition === 1) { }
 * 
 * - no-fallthrough 檢查 switch 的 case 是否漏掉 break
 * @example
 * switch (a) {
 *     case 1:
 *         ...
 *     case 2:    <- 漏掉 break
 *         ...
 *     break;
 * }
 * @should 
 * switch (a) {
 *     case 1:
 *         ...
 *     break;
 *     case 2:
 *         ...
 *     break;
 * }
 * 
 * - no-floating-decimal 浮點數的小數點前後一定要有數字
 * - ✅存檔時可自動修正
 * - ⚠️共用規範中先註解掉
 * @example
 * let num = .23;
 *         ^^^
 * @should 
 * let num = 0.23;
 * 
 * - no-new-func 禁止使用 New Function
 * @example
 * let func = new Function("a", "b", "return a + b");
 *             ^^^
 * @should 
 * let func = function (a, b): number {
 *     return a + b;
 * };
 * 
 * - no-return-assign 要求 return 中不可以有賦值表達式
 * @example
 * return value = 1;
 *      ^^^
 * @should 
 * return value;
 * 
 * - no-self-assign 要求不可以自我賦值
 * - ⚠️共用規範中先註解掉
 * @example
 * value = value;
 *      ^^^
 * 
 * - no-self-compare 要求不可以自我比較判斷
 * @example
 * if (value === value) { }
 *     ^^^^^^^^^^^^^^^
 * 
 * - no-unmodified-loop-condition 檢查是否使用不會改變的迴圈判斷式
 * - ⚠️共用規範中先註解掉
 * @example
 * let node = new Node();
 * let n = 0;
 * while (node) {  <- node 沒有在迴圈內被改變
 *     n++;
 *     doSomething(node);  <- 不會檢查在這裡面會不會動到 node
 * }
 * @should 
 * let node = new Node();
 * let n = 0;
 * while (node) {
 *     n++;
 *     node = node.parent;
 * }
 * 
 * - no-unused-expressions 檢查無意義的表達式
 * - ⚠️共用規範中先註解掉
 * @example
 * let a = 1;
 * a;           <- 無意義的表達式
 * 
 * - no-useless-return 檢查無意義的 return
 * - ✅存檔時可自動修正
 * - ⚠️共用規範中先註解掉
 * @example
 * function func(arg: boolean) {
 *     if(arg) {
 *         doSomething();
 *         return;          <- 無意義的 return，因為function其實已經結束了
 *     }
 * }
 * 
 * - require-await 要求 async 方法一定要包含 await 的使用
 * @example
 * async function func() {
 *     doSomething();
 * }
 * @should 
 * async function func() {
 *     await doSomething();
 * }
 * 
 * - yoda 要求判斷常量必須放在等號右側
 * - ✅存檔時可自動修正
 * - ⚠️共用規範中先註解掉
 * @example
 * if (1 === value) { }
 *    ^^^
 * @should 
 * if (value === 1) { }
 * 
 * - no-multiple-empty-lines 不允許多餘的空行
 * - ✅存檔時可自動修正
 * - ⚠️共用規範中先註解掉
 * 
 * - unused-imports/no-unused-imports 檢查未使用的引用
 * - ✅存檔時可自動修正
 * 
 * - @typescript-eslint/explicit-function-return-type 要求方法必須明確標示型別
 * @example
 * function func(arg: boolean) { }
 *                           ^^^
 * @should 
 * function func(arg: boolean): void { }
 * 
 * - @typescript-eslint/typedef 要求變數必須明確標示型別
 * @example
 * let a = 1;
 *     ^^^
 * @should 
 * let a: number = 1;
 * 
 * - @typescript-eslint/explicit-member-accessibility 要求 class 成員必須標示存取修飾子
 * @example
 * class A {
 *     myProperty = 0;
 *     ^^^^^^^^^^ 
 * 
 *     myFunc() { }
 *     ^^^^^^^^ 
 * }
 * @should 
 * class A {
 *     protected myProperty = 0;
 *     public myFunc() { }
 * }
 * 
 * - no-restricted-syntax 檢查 ...Set 擴展符
 * @example
 * const newArray = [...new Set(array)];
 * @should 
 * const newArray = Array.from(new Set(array));
 * 
 * - custom/tween-missing-start 檢查 tween() 是否遺漏 start()
 * 
 * - custom/promise-pending-check 檢查 Promise 是否遺漏 resolve/reject
 * 
 * - custom/scripts-import-policy 檢查 ModuleEntry 的 import 規範
 */

/**
 * 規則對應的中文敘述，會在包版檢查輸出檔案時使用到
 * 新增自訂規則時，也可以在這邊新增規則對應的中文敘述
 */
const ruleDescription = {
    /* --------------------共用規範中先註解掉的規則-------------------- */
    // "for-direction": "for 迴圈方向錯誤",
    // "semi": "遺漏分號",
    // "no-extra-semi": "出現多餘分號",
    // "eqeqeq": "請使用 === 或 !== 取代 == 或 !=",
    // "no-floating-decimal": "浮點數小數點前後必須要有數字",
    // "no-self-assign": "禁止自我賦值",
    // "no-unmodified-loop-condition": "迴圈判斷條件為不會被改變的屬性",
    // "no-unused-expressions": "無意義的表達式",
    // "no-useless-return": "無意義的 return",
    // "yoda": "條件判斷式須將常量放在等號右側",
    // "no-multiple-empty-lines": "多餘空行",
    /* --------------------共用規範中先註解掉的規則-------------------- */
    "no-console": "禁止使用 console",
    "no-cond-assign": "條件判斷式錯誤",
    "no-sparse-arrays": "禁止使用稀疏陣列",
    "no-template-curly-in-string": "${} 用法使用錯誤引號",
    "no-unreachable": "為無法執行的程式碼區塊",
    "default-case": "switch 遺漏 default 分支",
    "no-fallthrough": "switch case 遺漏 break",
    "no-new-func": "禁止使用 New Function 用法",
    "no-return-assign": "禁止 return 賦值表達式",
    "no-self-compare": "禁止自我比較",
    "require-await": "未使用到 await 的 async 方法",
    "unused-imports/no-unused-imports": "未使用的引用",
    "@typescript-eslint/explicit-function-return-type": "方法沒有明確標示型別",
    "@typescript-eslint/typedef": "變數沒有明確標示型別",
    "@typescript-eslint/explicit-member-accessibility": "class 成員沒有明確標示存取修飾子",
    "no-restricted-syntax": "",         // 本身自帶詳細的 message
    "custom/tween-missing-start": "",   // 本身自帶詳細的 message
    "custom/promise-pending-check": "", // 本身自帶詳細的 message
    "custom/scripts-import-policy": "", // 本身自帶詳細的 message
}

// ==================== 模式選擇 ====================
// 取得環境變數，如果沒有則使用預設值
// 手動更改模式時，請直接修改 || 後面的值
// 打包時的檢查則會透過設置 env 來設定 strict 模式，不需要手動修改
const MODE = process.env.ESLINT_MODE || "development";

// ==================== 預設模式配置 ====================

const MODES = {
    "close": {
        /* --------------------共用規範中先註解掉的規則-------------------- */
        // "for-direction": "off",
        // "semi": "off",
        // "no-extra-semi": "off",
        // "eqeqeq": "off",
        // "no-floating-decimal": "off",
        // "no-self-assign": "off",
        // "no-unmodified-loop-condition": "off",
        // "no-unused-expressions": "off",
        // "no-useless-return": "off",
        // "yoda": "off",
        // "no-multiple-empty-lines": "off",
        /* --------------------共用規範中先註解掉的規則-------------------- */
        "no-console": "off",
        "no-cond-assign": "off",
        "no-sparse-arrays": "off",
        "no-template-curly-in-string": "off",
        "no-unreachable": "off",
        "default-case": "off",
        "no-fallthrough": "off",
        "no-new-func": "off",
        "no-return-assign": "off",
        "no-self-compare": "off",
        "require-await": "off",
        "unused-imports/no-unused-imports": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/typedef": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "no-restricted-syntax": "off",
        "custom/tween-missing-start": "off",
        "custom/promise-pending-check": "off",
        "custom/scripts-import-policy": "off",
    },
    // 開發階段檢查規則
    "development": {
        "no-console": "off",
        "custom/tween-missing-start": "off",
        "custom/promise-pending-check": "off",
    },

    // 開發後期 (初版完成、跨部門驗收期) 檢查規則
    "pre-release": {
        "no-console": "error",
        "custom/tween-missing-start": "error",
        "custom/promise-pending-check": "error",
    },

    // 打包檢查規則
    "strict": {
        // 空物件表示使用 eslint.config.mjs 的基礎配置
        // 不覆蓋任何規則
    }
};

// ==================== 自訂規則覆蓋 ====================
// 如果你想在某個模式下額外調整特定規則，可以在這裡修改

const customOverrides = {
    // 不區分模式，一律設置特定規則
    // 舉例: 不想要對多餘空行進行檢查
    // "no-multiple-empty-lines": "off",

    // 或是可以新增額外的規則
    // 舉例: 希望宣告後不再被修改的變數都使用 const 宣告
    // "prefer-const": "error",
};

// ==================== 匯出配置 ====================
module.exports = {
    ruleDescription,

    eslintRules: {
        ...MODES[MODE],
        ...customOverrides,
    },
};