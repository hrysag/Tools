/**
 * 根據輸入的機率回傳 true 或 false
 * @param chance 機率值，介於 0 到 1 之間 (例如 0.3 代表 30%)
 * @returns boolean
 */
export function checkProbability(chance: number): boolean {
    // Math.random() 會回傳一個 [0, 1) 的隨機浮點數
    // 如果隨機數小於你的設定值 (例如 0.3)，就代表命中
    return Math.random() < chance;
}

/**
 * 從數字陣列中隨機取出一個數字
 * @param list 數字陣列
 * @returns 隨機選出的數字 (如果陣列為空則回傳 undefined)
 */
export function pickRandomNumber(list: number[]): number | undefined {
    // 防呆：如果陣列是空的，就回傳 undefined
    if (list.length === 0) {
        return undefined;
    }

    // 1. Math.random() * list.length 會得到 0 ~ 長度之間的浮點數
    // 2. Math.floor() 無條件捨去小數點，轉成整數索引 (0, 1, 2...)
    const randomIndex = Math.floor(Math.random() * list.length);

    return list[randomIndex];
}