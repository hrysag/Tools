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


// import { dataParser016 } from "db://assets/Game/Game016/Scripts/Config/SlotDataParser016";
// import { SlotInfo016 } from "db://assets/Game/Game016/Scripts/ServerData/SlotInfo016";




export function historyParser(base64Str: string, bet: number): any {
    // let binaryBuffer = Utility.base64ToBinaryBuffer(base64Str);
    // let slotInfo016 = new SlotInfo016(binaryBuffer);
    // return dataParser016(slotInfo016, bet);
    console.log("請自行修改 historyParser 內容");
}

/*
使用教學

1. 
將上方historyParser 函數內容改成自己的細單解析邏輯

2. 
先用下面指令在終端機打包出來 SlotDataParserXXX.js 檔案 (檔名記得改自己的GameCode)

// 打包指令
        直接執行 entry.bat
        如果失敗:
    1.
        npx esbuild ./assets/Tool/CheckScoreESBuild/entryHistory.ts --bundle --platform=browser --format=iife --global-name=MyLib --target=es2015 --outfile=./assets/Tool/CheckScoreESBuild/dist/SlotDataParserXXX.js
    2.
        如果你是用 power-shell:
        Get-Content ./assets/Tool/CheckScoreESBuild/footer/footer_history.js -Raw -Encoding UTF8 | Add-Content ./assets/Tool/CheckScoreESBuild/dist/SlotDataParserXXX.js -Encoding UTF8

        如果你是用 bash:
        cat ./assets/Tool/CheckScoreESBuild/footer/footer_history.js >> ./assets/Tool/CheckScoreESBuild/dist/SlotDataParserXXX.js
        
        上述兩個指令分兩次執行



// 記得將 XXX 改成自己的gameCode !!!
// 如果你失敗了，把所有沿途有import ModuleEntry 改成直接引用裡面，就是先刪掉import，然後在畫紅線的地方使用fix 去找


3.
在打包出來的 SlotDataParserXXX.js 中的最底下 將function slotDataParserXXX 改成自己的gameCode 例如 game016 就改成 function slotDataParser016


4.
上傳細單FTP後 可使用下方網址測試 更改 gamecode 與 slotdata 參數即可
// 測試網址

https://dev-gamerecord.apex-win.com/#/game-list?lang=tw&history=
{
    "gamecode": "game016",
        "history": [
            {
                "gamecode": "game016",
                "slotdata": "pDuctlSjWwgBAQIGAWAZp2Y3p1gKQqaIdIpZpwR1N1dpZSWpCYdERGg4OWgEaBc0NxMXaQRIyHBHondEBTLGhyyGiXUDZsVWLHKqVAp4yjdcnBZKCnfGRJyMKXgGNsaUXKx4pQQ=",
                "id": "NG無得分",
                "time": "",
                "version": "",
                "bet": 100,
                "win": 6000,
                "before_total": "0",
                "total": "0",
                "account": "0"
            }
        ]
}


*/
