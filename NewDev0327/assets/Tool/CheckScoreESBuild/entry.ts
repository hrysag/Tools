import { base64ToBinaryBuffer } from "../../Scripts/Utils/Core/PacketHandle";

/* globals define */
Array.prototype.count = function (value) {
    return this.filter(x => x == value).length;
}

//計算陣列中，所有參數陣列元素出現的次數 例如 arr = [1,2,3,3,4] arr.countOccurrencesOfArray([2,3]) 會等於 3 
Array.prototype.countOccurrencesOfArray = function (arr) {
    return arr.reduce((count, elem) => {
        return count + this.filter(x => x === elem).length;
    }, 0);
};

Array.prototype.indexesOf = function (value) {
    var positions = this.map(function (e, i) {
        return e === value ? i : -1;
    }).filter(function (e) {
        return e !== -1;
    });
    return positions;
}

Array.prototype.set = function () {
    let set = new Set(this);
    let arr = Array.from(set);
    return arr;
}

Array.prototype.setSelf = function () {
    let uniqueValues = Array.from(new Set(this)); // 取得去重後的陣列
    this.length = 0; // 清空原陣列
    this.push(...uniqueValues); // 將去重後的元素推回原陣列
    return this; // 返回修改後的陣列（可選）
}

// 為 Array.prototype 添加一個名為 remove 的方法
Array.prototype.remove = function (value) {
    // 找到元素的索引
    const index = this.indexOf(value);
    // 如果找到該元素
    if (index > -1) {
        // 使用 splice 方法從數組中移除該元素
        this.splice(index, 1);
    }
    // 返回數組自身以便方法鏈接
    return this;
};

Array.prototype.getRandomElement = function () {
    let len = this.length;
    let index = Math.floor(Math.random() * len);
    return this[index];
}

Number.prototype.fixed = function () {
    return parseFloat(this.toFixed(4));
}

Number.prototype.readByte = function (start, length) {
    let byte = this.valueOf();
    if (byte < 0 || byte > 255) {
        console.error('Number out of range');
        return byte;
    }

    let mask = (1 << length) - 1;
    // 右移，使 start 位置的 bit 变成最低位
    return (byte >> (8 - start - length)) & mask;
}

// import { Utility } from "../../Scripts/ModuleEntry";

export function checkScore(base64Str: string): number {
    let binaryBuffer = base64ToBinaryBuffer(base64Str);
    let odd = 0;

    return odd;
}

/*
使用教學

1. 
將上方 checkScore 函數內容改成自己的驗分邏輯

2. 
先用下面指令在終端機打包出來 checkScoreXXX.js 檔案 (檔名記得改成自己的gameCode)

// 打包指令
        直接執行 entry.bat
        如果失敗:
    1.
        npx esbuild ./assets/Tool/CheckScoreESBuild/entry.ts --bundle --platform=browser --format=iife --global-name=MyLib --outfile=./assets/Tool/CheckScoreESBuild/dist/checkScoreXXX.js
    2.
        如果你是用 power-shell:
        Get-Content ./assets/Tool/CheckScoreESBuild/footer/footer_checkscore.js -Raw -Encoding UTF8 | Add-Content ./assets/Tool/CheckScoreESBuild/dist/checkScoreXXX.js -Encoding UTF8

        如果你是用 bash:
        cat ./assets/Tool/CheckScoreESBuild/footer/footer_checkscore.js >> ./assets/Tool/CheckScoreESBuild/dist/checkScoreXXX.js
        上述兩個指令分兩次執行

// 記得將 XXX 改成自己的gameCode !!!
// 如果你失敗了，把所有沿途有import ModuleEntry 改成直接引用裡面，就是先刪掉import，然後在畫紅線的地方使用fix 去找

*/
