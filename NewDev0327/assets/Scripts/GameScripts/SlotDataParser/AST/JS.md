# AI 助手指南：生成 SlotDataParser{GAMEID}.js

## 文件用途
本文件提供 AI 助手完整的指導，協助用戶根據遊戲規格生成 `SlotDataParser{GAMEID}.js` 文件。

---

## 一、整體架構理解

### 1.1 文件結構
`JSTemplate_SlotDataParser.js` 是一個**完整的打包模板**，包含：

```javascript
"use strict";
var MyLib = (() => {
    // === 核心類庫（不可修改） ===
    // - SlotDataParser: 主要工具類
    // - BinaryBuffer / BinaryBufferWriter: 數據解析
    // - List / ArrayUtil / DictionaryIterator 等: 輔助工具
    var SlotDataParser = class { /* 完整實現 */ }
    var SlotDataBoardData = class { /* ... */ }
    var SlotDataIconData = class { /* ... */ }
    var BinaryBuffer = class { /* ... */ }
    // ... 其他輔助類 ...

    // === 需要填充的區域（AI 工作重點） ===
    
    // 【區域 1】Icon 配置
    var icons = {
        // 格式：ID: { src: "路徑", width: 數字, height: 數字 }
    };

    // 【區域 2】遊戲數據結構（可選）
    // 用於存放遊戲特定的類型定義或常量例如：Game{GAMEID}Config、資料結構、Data 等

    // 【區域 3】遊戲封包解析 類
    var serverAnalyzer{GAMEID} = class {
        // 封包解析邏輯 主要類
    };

    // 【區域 4】SlotDataParser{GAMEID} 類
    var SlotDataParser{GAMEID} = class {
        // 製作出注單架構的主要類
    };

    // === 固定工具方法（不可修改） ===
    Array.prototype.count = function(value) { /* ... */ }

    function historyParser(base64Str, bet) {
        let binaryBuffer = base64ToBinaryBuffer(base64Str);
        // 這裡需要調用 serverAnalyzer{GAMEID} 拿到自己解析的遊戲數據結構
        // 這裡需要調用 SlotDataParser{GAMEID} 將拿到的遊戲數據結構放進來 
        // 回傳整個注單架構
    }
    function base64ToBinaryBuffer(base64) { /* ... */ }
    
    return __toCommonJS(entryHistory_exports);
})();

// === 匯出函數（需要修改 {GAME_ID}） ===
function slotDataParser{GAME_ID}(base64Str, bet, featureRatio) {
    let realBet = (bet / featureRatio).fixed();
    return MyLib.historyParser(base64Str, realBet);
}
```
---

## 二、AI 工作流程

### 步驟 1(必要流程)：收集信息
向用戶詢問SlotDataParser{GameID}.ts的檔案位置，拿到之後閱讀，以及閱讀引用到的部分(除了cc以及ModuleEntry之外)


### 步驟 2：填充 Icon 配置

在ts檔案裡，將設置icons的內容轉換成javascript在模板的**【區域 1】**填入：

```javascript
var icons = {
    0: { src: "/images/game{GameID}/H1.png", width: 152, height: 156 },
    1: { src: "/images/game{GameID}/H2.png", width: 152, height: 156 },
    2: { src: "/images/game{GameID}/H3.png", width: 152, height: 156 },
    // ... 補齊所有 Icon
    99: { src: "/images/game{GameID}/Wild.png", width: 152, height: 156 },
    100: { src: "/images/game{GameID}/Scatter.png", width: 152, height: 156 }
};
```

**注意事項：**
- ID 必須與遊戲實際使用的 ID 對應
- 路徑格式固定為 `/images/game{GAMEID}/`
- width 和 height 通常為實際圖片尺寸

### 步驟 3：設計數據結構

在ts檔引用的部分，將該引用到{GAMEID}的資料結構內容轉換成javascript在放到在**【區域 2】**

### 步驟 4：實現解析類

在ts檔引用的部分，將該引用到{GAMEID}的資料解析內容轉換成javascript在放到在**【區域 3】**

### 步驟 5：實現解析類

將SlotDataParser{GameID}.ts裡製作出的注單架構，放到在**【區域 4】**

---

## 八、範例：完整的 SlotDataParser029.js

以下是一個簡化的完整範例，展示所有組件如何整合：

```javascript
"use strict";
var MyLib = (() => {
    // === 核心類庫（省略） ===
    var SlotDataParser = class { /* ... */ }
    // ... 其他類 ...

    // === 【區域 1】Icon 配置 ===
    var icons = {
        0: { src: "/images/game029/H1.png", width: 152, height: 156 },
        1: { src: "/images/game029/H2.png", width: 152, height: 156 },
        2: { src: "/images/game029/H3.png", width: 152, height: 156 },
        3: { src: "/images/game029/H4.png", width: 152, height: 156 },
        4: { src: "/images/game029/L1.png", width: 152, height: 156 },
        5: { src: "/images/game029/L2.png", width: 152, height: 156 },
        6: { src: "/images/game029/L3.png", width: 152, height: 156 },
        99: { src: "/images/game029/Wild.png", width: 152, height: 156 },
        100: { src: "/images/game029/Scatter.png", width: 152, height: 156 }
    };

    // === 【區域 2】遊戲數據結構 ===
    class WinLineData {
        constructor() {
            this.lineID = 0;
            this.symbolID = 0;
            this.odd = 0;
            this.winAmount = 0;
            this.positions = [];
        }
    }
    
    class GameResult {
        constructor() {
            this.board = [];
            this.winLines = [];
            this.totalWin = 0;
            this.hasFreeSpin = false;
            this.freeSpinCount = 0;
        }
    }

    // === 【區域 3】ServerAnalyzer029 ===

    var ServerAnalyzer029 =class{

         /**
         * 主解析方法
         */
        parse(base64Str, bet) {
            const buffer = base64ToBinaryBuffer(base64Str);
            const gameResult = this.parseGameData(buffer);
            return gameResult;
        }

        /**
         * 解析封包數據
         */
        parseGameData(buffer) {
            const result = new GameResult();
            
            // 解析盤面（假設 20 個 byte）
            result.board = buffer.getBytesArray(20);
            
            // 解析中獎線數量
            const winLineCount = buffer.getInt8();
            
            // 解析每條中獎線
            for (let i = 0; i < winLineCount; i++) {
                const winLine = new WinLineData();
                winLine.lineID = buffer.getInt8();
                winLine.symbolID = buffer.getInt8();
                winLine.odd = buffer.getInt16();
                winLine.winAmount = buffer.getInt32();
                
                // 解析中獎位置
                const posCount = buffer.getInt8();
                for (let j = 0; j < posCount; j++) {
                    winLine.positions.push(buffer.getInt8());
                }
                
                result.winLines.push(winLine);
            }
            
            // 解析總贏分
            result.totalWin = buffer.getInt32();
            
            // 解析免費遊戲
            result.hasFreeSpin = buffer.getInt8() === 1;
            if (result.hasFreeSpin) {
                result.freeSpinCount = buffer.getInt8();
            }
            
            return result;
        }
    }

    // === 【區域 4】SlotDataParser029 ===
    var SlotDataParser029 = class {
        constructor() {
            this.ROW = 4;
            this.COL = 5;
        }

        /**
         * 主解析方法
         */
        parse(gameResult,bet) {
            const parser = new SlotDataParser(bet);
            this.buildSlotData(parser,gameResult,bet)
            const result = parser.getFinalSlotData();
            const gameRecordAST = {
                ast: result,
                icons
            };
            return gameRecordAST;
        }

        

        /**
         * 構建 SlotData AST
         */
        buildSlotData(parser, gameResult, bet) {
            // 設置遊戲模式
            parser.setGameMode("一般遊戲");
            
            // 設置標題
            parser.setTitle([
                ["text", "一般遊戲"]
            ]);
            
            // 處理盤面
            const processors = [];
            
            // 如果有中獎，標記中獎位置
            if (gameResult.winLines.length > 0) {
                const allWinPositions = [];
                gameResult.winLines.forEach(line => {
                    allWinPositions.push(...line.positions);
                });
                
                processors.push(
                    parser.setMark(
                        this.convert1DTo2D(allWinPositions, this.ROW),
                        "#FFD700"
                    )
                );
            }
            
            parser.processIconData(
                this.ROW,
                this.COL,
                gameResult.board,
                processors,
                this.COL
            );
            
            // 設置中獎詳情
            if (gameResult.totalWin > 0) {
                const lines = [];
                
                gameResult.winLines.forEach(line => {
                    lines.push([
                        "line", [
                            ["text", `線 ${line.lineID + 1}`],
                            ["symbol", "-"],
                            ["icon", line.symbolID],
                            ["symbol", "×"],
                            ["number", line.odd],
                            ["symbol", "="],
                            ["number", line.winAmount]
                        ]
                    ]);
                });
                
                parser.setDetailDescription(lines);
            } else {
                parser.setDetailDescription([]);
            }
            
            // 設置摘要
            parser.setSummary([
                ["text", "單次贏分"],
                ["symbol", "="],
                ["number", gameResult.totalWin]
            ]);
            
            // 如果觸發免費遊戲
            if (gameResult.hasFreeSpin) {
                parser.setLineSummary([
                    ["line", [
                        ["text", "觸發免費遊戲"],
                        ["symbol", "×"],
                        ["number", gameResult.freeSpinCount]
                    ]]
                ]);
            }
            
            // 完成回合
            parser.combineOneRoundData();
            
            // 完成整局
            parser.setRecords();
        }

        /**
         * 將 1D 位置轉換為 2D
         */
        convert1DTo2D(positions, row) {
            const result = [];
            const grouped = {};
            
            for (const pos of positions) {
                const col = Math.floor(pos / row);
                const rowInCol = pos % row;
                
                if (!grouped[col]) {
                    grouped[col] = [];
                }
                grouped[col].push(rowInCol);
            }
            
            const maxCol = Math.max(...Object.keys(grouped).map(Number));
            for (let c = 0; c <= maxCol; c++) {
                result.push(grouped[c] || []);
            }
            
            return result;
        }
    };

    // === 固定工具方法 ===
    Array.prototype.count = function(value) { /* ... */ }
    // ... 其他擴展方法 ...

    function historyParser(base64Str, bet) {
        const serverAnalyzer029=new ServerAnalyzer029();
        const gameResult=serverAnalyzer029.parse(base64Str, bet);
        const slotDataParser = new SlotDataParser029();
        return slotDataParser.parse(serverAnalyzer029, bet);
    }

    function base64ToBinaryBuffer(base64) {
        let binaryBuffer = new BinaryBuffer(base64ToArrayBuffer(base64));
        return binaryBuffer;
    }

    return __toCommonJS(entryHistory_exports);
})();

// === 匯出函數 ===
function slotDataParser029(base64Str, bet, featureRatio) {
    let realBet = (bet / featureRatio).fixed();
    return MyLib.historyParser(base64Str, realBet);
}
```
