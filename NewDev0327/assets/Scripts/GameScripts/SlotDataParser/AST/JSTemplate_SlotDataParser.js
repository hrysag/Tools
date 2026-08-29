/**
 * ============================================================
 * SlotDataParser JavaScript 通用模板
 * ============================================================
 * 
 * 用途：用於生成遊戲的 SlotDataParser，解析遊戲資料並生成 AST
 * 
 * 使用方式：
 * 1. 複製此模板
 * 2. 將 {GAME_ID} 替換為實際遊戲編號（如 029, 1026）
 * 3. 填寫 Icon 配置
 * 4. AI實作主解析邏輯
 * 5. AI實作輔助方法
 * 
 * 最後更新：2026-03-04
 * ============================================================
 */

"use strict";
var MyLib = (() => {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
        for (var name in all)
            __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
            for (let key of __getOwnPropNames(from))
                if (!__hasOwnProp.call(to, key) && key !== except)
                    __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
    };
    var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

    var entryHistory_exports = {};
    __export(entryHistory_exports, {
        base64ToBinaryBuffer: () => base64ToBinaryBuffer,
        historyParser: () => historyParser
    });

    // assets/Scripts/GameScripts/SlotDataParser/v1/SlotDataParser.ts
    var SlotDataParser = class {
        /**
         * 建立SlotDataParser
         * @param bet 下注金額
         */
        constructor(bet) {
            /**整個細單紀錄 */
            this.steps = [];
            /**單次盤面紀錄 */
            this.oneRound = [];
            /**當局所有盤面紀錄 */
            this.allRoundData = [];
            /**下注金額 */
            this.bet = 0;
            this.bet = bet;
        }
        /**
         * 組裝要顯示的文字
         * @param tag  Key值
         * @param value 顯示文字
         * @returns 當次文字排序
         */
        createItem(key, value) {
            return [key, value];
        }
        /**
         * 組裝當次區塊文字排序
         * @param tag  Key值
         * @param arr 文字排序
         * @returns 當次盤面文字排序
         */
        createSection(tag, arr) {
            return [tag, arr];
        }
        /**
         * 組裝當次盤面Icon紀錄
         * @param tag  Key值
         * @param board 盤面資訊
         * @returns 當次盤面Icon紀錄
         */
        createBoard(tag, board) {
            return [tag, board];
        }
        /**
         * 組裝當次盤面紀錄
         * @param tag  Key值
         * @param round 當次盤面紀錄 
         * @returns 當次盤面紀錄
         */
        createRound(tag, round) {
            return [tag, round];
        }
        /**
         * 組裝此局全部盤面紀錄
         * @param tag  Key值
         * @param allRoundData 當前盤面紀錄 
         * @returns 此局全部盤面紀錄
         */
        createAllRoundData(tag, allRoundData) {
            return [tag, allRoundData];
        }
        /**
         * 設置此局遊戲模式，如果下局盤面紀錄與此局盤面紀錄不一樣，再重新呼叫一次
         * @param gameMode 遊戲模式
         * @returns  SlotDataParser，會把當前資料記錄起來
         */
        setGameMode(gameMode) {
            const item = this.createItem("text" /* text */, gameMode);
            const section = this.createSection("gamemode" /* gameMode */, [item]);
            this.steps.push(section);
            return this;
        }
        /**
         * 設置盤面Title，由使用者組裝要顯示的資訊
         * @param items 顯示的資訊
         * @returns  SlotDataParser，會把當前資料記錄起來
         */
        setTitle(items) {
            const section = this.createSection("title" /* title */, items);
            this.oneRound.push(section);
            return this;
        }
        /**
         * 設置盤面資訊，由使用者組裝要顯示的資訊
         * @param items 顯示的資訊
         * @returns  SlotDataParser，會把當前資料記錄起來
         */
        setSummary(items) {
            const section = this.createSection("summary" /* summary */, items);
            this.oneRound.push(section);
            return this;
        }
        /**
         * 設置盤面資訊，由使用者組裝要顯示的資訊，使用後會置中
         * @param items 顯示的資訊
         * @returns  SlotDataParser，會把當前資料記錄起來
         */
        setLineSummary(items) {
            const section = this.createSection("summary" /* summary */, items);
            this.oneRound.push(section);
            return this;
        }
        /**
         * 設置詳細中獎資訊，由使用者組裝要顯示的資訊
         * @param items 顯示的資訊
         * @returns  SlotDataParser，會把當前資料記錄起來
         */
        setDetailDescription(items) {
            let section = null;
            if (items.length === 0) {
                section = this.createSection("details" /* details */, [this.createItem("text" /* text */, "\u7121\u4E2D\u734E")]);
            } else {
                section = this.createSection("details" /* details */, items);
            }
            this.oneRound.push(section);
            return this;
        }
        /**
         * 設置盤面詳細得分資訊，由工具組裝
         * @param isWin 是否贏分 
         * @param detailDataList 詳細得分，{@link DetailData}可根據不同的遊戲類型傳入不同的類型 
         * @returns SlotDataParser，會把當前資料記錄起來
         */
        setDetail(isWin, detailDataList) {
            let section = null;
            if (!isWin) {
                section = this.createSection("details" /* details */, [
                    this.createItem("text" /* text */, "\u7121\u4E2D\u734E")
                ]);
            } else {
                const winSection = [];
                for (let i = 0; i < detailDataList.winIconSymbolList.length; i++) {
                    const allDetails = [];
                    const score = detailDataList.megaWayCombinationCount !== void 0 ? detailDataList.odds[i] * this.bet * detailDataList.megaWayCombinationCount[i] : detailDataList.odds[i] * this.bet;
                    allDetails.push(this.createItem("icon" /* icon */, detailDataList.winIconSymbolList[i]));
                    allDetails.push(this.createItem("number" /* number */, this.bet));
                    allDetails.push(this.createItem("symbol" /* symbol */, "*"));
                    allDetails.push(this.createItem("number" /* number */, detailDataList.odds[i]));
                    if (detailDataList.megaWayCombinationCount !== void 0) {
                        allDetails.push(this.createItem("symbol" /* symbol */, "*"));
                        allDetails.push(this.createItem("number" /* number */, detailDataList.megaWayCombinationCount[i]));
                    }
                    allDetails.push(this.createItem("symbol" /* symbol */, "="));
                    allDetails.push(this.createItem("number" /* number */, score.fixed()));
                    if (detailDataList.lineID !== void 0) {
                        allDetails.push(this.createItem("symbol" /* symbol */, "("));
                        allDetails.push(this.createItem("text" /* text */, "\u7DDA"));
                        allDetails.push(this.createItem("number" /* number */, detailDataList.lineID[i] + 1));
                        allDetails.push(this.createItem("symbol" /* symbol */, ")"));
                    }
                    winSection.push(this.createSection("line" /* line */, allDetails));
                }
                section = this.createSection("details" /* details */, winSection);
            }
            this.oneRound.push(section);
            return this;
        }
        /**
         * 將先前的一局盤面紀錄包裝，並清空一局盤面紀錄
         * @returns SlotDataParser，會把當前資料記錄起來
         */
        combineOneRoundData() {
            const round = this.createRound("round" /* round */, this.oneRound);
            this.allRoundData.push(round);
            this.oneRound = [];
            return this;
        }
        /**
         * 設置一次盤面紀錄結束
         * @param isOneRoundEnd 判斷是否為當局最後一次盤面紀錄，有ReSpin請設False
         * @returns SlotDataParser 會把當前資料記錄起來
         */
        setRecords() {
            const allRoundData = this.createAllRoundData("records" /* records */, this.allRoundData);
            this.steps.push(allRoundData);
            this.allRoundData = [];
            return this;
        }
        /**
         * 獲取細單最終結果
         * @returns SlotDataParser紀錄的整體細單架構
         */
        getFinalSlotData() {
            return this.steps;
        }
        /**
         * 處理細單盤面，在{@link processors}裡放入需要額外處理的盤面功能，會按照順序執行
         * EX:標記顏色{@link setMark}，需要合併{@link mergesIconData}，多層圖案顯示{@link addIconList}
         * @param row 盤面高度
         * @param col 盤面寬度
         * @param iconList 盤面資料
         * @param processors 擴充功能
         * @param maxWidth 盤面最大顯示寬
         * @returns SlotDataParser 會把盤面資料記錄起來
         */
        processIconData(row, col, iconList, processors, maxWidth) {
            const baseList = this.setIconList(row, iconList);
            const showBoard = processors.reduce((list, processor) => processor(list), baseList);
            this.setBoard(row, col, showBoard, maxWidth);
            return this;
        }
        /**
         * 設置細單盤面Icon的架構
         * @param row 盤面高度
         * @param col 盤面寬度
         * @param showBoard 盤面IconList
         * @param maxWidth  盤面最大寬
         * @returns 
         */
        setBoard(row, col, showBoard, maxWidth) {
            const board = new SlotDataBoardData(col, row, showBoard, maxWidth);
            const section = this.createBoard("board" /* board */, board);
            this.oneRound.push(section);
            return this;
        }
        /**
         * 根據iconList，設定每個Icon
         * @param row 盤面高度
         * @param col 盤面寬度
         * @param iconList 盤面Icon
         * @returns 盤面Icon資訊
         */
        setIconList(row, iconList) {
            const baseList = iconList.map((icon, i) => {
                const data = new SlotDataIconData();
                data.icon = icon;
                data.x = Math.floor(i / row) + 1;
                data.y = i % row + 1;
                data.width = 1;
                data.height = 1;
                return data;
            });
            return baseList;
        }
        /**
         * 設置整體標記，可多次標記顏色
         * @param set2DPos 標記的2D位置
         * @param color 顏色 請傳入"#RRGGBB"
         * @returns 合併後的盤面 請放在{@link processIconData}的processors陣列裡
         */
        setMark(set2DPos, color) {
            return (list) => list.map((data) => {
                const xIndex = data.x - 1;
                const yIndex = data.y - 1;
                if (set2DPos[xIndex]) {
                    if (set2DPos[xIndex].includes(yIndex)) {
                        data.mark = true;
                        data.markColor = color;
                    }
                }
                return data;
            });
        }
        /**
         * 設置背景標記，可多次標記顏色
         * @param set2DPos 標記的2D位置
         * @param color 顏色 請傳入"#RRGGBB"
         * @returns 合併後的盤面 請放在{@link processIconData}的processors陣列裡
         */
        setBackGroundMark(set2DPos, color) {
            return (list) => list.map((data) => {
                const xIndex = data.x - 1;
                const yIndex = data.y - 1;
                if (set2DPos[xIndex]) {
                    if (set2DPos[xIndex].includes(yIndex)) {
                        data.markBackground = true;
                        data.markBackgroundColor = color;
                    }
                }
                return data;
            });
        }
        /**
         * 設置外框標記，可多次標記顏色
         * @param set2DPos 標記的2D位置
         * @param color 顏色 請傳入"#RRGGBB"
         * @returns 合併後的盤面 請放在{@link processIconData}的processors陣列裡
         */
        setBorderMark(set2DPos, color) {
            return (list) => list.map((data) => {
                const xIndex = data.x - 1;
                const yIndex = data.y - 1;
                if (set2DPos[xIndex]) {
                    if (set2DPos[xIndex].includes(yIndex)) {
                        data.markBorder = true;
                        data.markBorderColor = color;
                    }
                }
                return data;
            });
        }
        /**
         * 添加多層圖案，請按照順序填入 會抓取每個資料的相對位置做處理
         * @param zIndex icon的層級從2開始
         * @param row 盤面高度
         * @param posList 新增加icon的位置
         * @param iconList 新增加icon相對應的圖案
         * @param size icon的大小，可不放默認為{@link initNewSize}，輸入的話請放[[width1,height1],[width2,height2]...]
         * @returns 合併後的盤面，請放在{@link processIconData}的processors陣列裡
         */
        addIconList(zIndex, row, posList, iconList, size = []) {
            return (list) => {
                if (size.length === 0) {
                    size = this.initNewSize(posList.length);
                }
                posList.forEach((pos, i) => {
                    const data = new SlotDataIconData();
                    data.icon = iconList[i];
                    data.x = Math.floor(pos / row) + 1;
                    data.y = pos % row + 1;
                    data.z = zIndex;
                    data.width = size[i][0];
                    data.height = size[i][1];
                    list.push(data);
                });
                return list;
            };
        }
        /**
         * 初始化icon的大小，都為[1,1]
         * @returns 符合盤面Icon數量的[1,1]陣列
         */
        initNewSize(iconLength) {
            const size = [];
            for (let i = 0; i < iconLength; i++) {
                size.push([1, 1]);
            }
            return size;
        }
        /**
         * 設置盤面上Icon的文字，會根據位置陣列Index抓取相對應的文字
         * @param posList 位置陣列
         * @param textList 文字陣列
         * @returns 合併後的盤面，請放在{@link processIconData}的processors陣列裡
         */
        setIconText(posList, textList) {
            return (list) => {
                for (let i = 0; i < posList.length; i++) {
                    const pos = posList[i];
                    list[pos].text = textList[i];
                }
                return list;
            };
        }
        /**
         * 會將盤面上的圖示合併，請傳入符合盤面的長度，並以大於0的數字分組
         * EX:3*5盤面，傳入[0,0,1,2,2,1..]，會將第2個位置與第5個位置合併以及第3個位置與第4個位置合併
         * @param merges 合併模板
         * @returns 合併後的盤面，請放在{@link processIconData}的processors陣列裡
         */
        mergesIconData(merges) {
            return (list) => {
                const groups = /* @__PURE__ */ new Map();
                for (let i = 0; i < list.length; i++) {
                    const g = merges[i];
                    if (g > 0) {
                        if (!groups.has(g)) {
                            groups.set(g, []);
                        }
                        groups.get(g).push(i);
                    }
                }
                for (const indices of groups.values()) {
                    let minX = Infinity;
                    let minY = Infinity;
                    let maxX = -Infinity;
                    let maxY = -Infinity;
                    for (const idx of indices) {
                        const c = list[idx];
                        if (c.x < minX) {
                            minX = c.x;
                        }
                        if (c.y < minY) {
                            minY = c.y;
                        }
                        if (c.x > maxX) {
                            maxX = c.x;
                        }
                        if (c.y > maxY) {
                            maxY = c.y;
                        }
                    }
                    const mainIdx = indices.find((idx) => list[idx].x === minX && list[idx].y === minY);
                    const main = list[mainIdx];
                    main.width = maxX - minX + 1;
                    main.height = maxY - minY + 1;
                    for (const idx of indices) {
                        if (idx !== mainIdx) {
                            list[idx].icon = -1;
                            list[idx].width = 0;
                            list[idx].height = 0;
                        }
                    }
                }
                return list.filter((c) => c.icon !== -1 && c.width > 0 && c.height > 0);
            };
        }
    };
    var SlotDataBoardData = class {
        constructor(width, height, icons2, maxWidth) {
            /** 盤面的寬 */
            this.width = 0;
            /** 盤面的高 */
            this.height = 0;
            /** 盤面的顯示最大寬 */
            this.maxWidth = 0;
            /** 盤面的Icon */
            this.icons = [];
            this.width = width;
            this.height = height;
            this.icons = icons2;
            this.maxWidth = maxWidth ? maxWidth : width;
        }
    };
    var SlotDataIconData = class {
        constructor() {
            /** 盤面上的Icon */
            this.icon = 0;
            /** 盤面上的X位置 */
            this.x = 1;
            /** 盤面上的Y位置 */
            this.y = 1;
        }
    };

    ///============================================
    /// 以下需放入資料結構，以及解析邏輯的CLASS，以及一些config
    /// todo: 向使用者要求，並且將那些資料放在這裡

    ///============================================


    var icons = {
        /// Icon配置，要求使用者填寫
        // 格式為: 
        // 0: { src: "/images/game{GameID}/{對應的圖片名稱}.png", width: 152, height: 156 },
        // 1: { src: "/images/game{GameID}/{對應的圖片名稱}.png", width: 152, height: 156 },
        // 2: { src: "/images/game{GameID}/{對應的圖片名稱}.png", width: 152, height: 156 },
        //...
    };

    var SlotDataParser1028 = class {
        /// 合併注單之後的邏輯，AI製作完後會放在這裡
    };

    // assets/Scripts/Communication/NetConst.ts
    var NetConst = class {
        static {
            this.SAVE_BITS_MEGA_STRING = 3;
        }
        static {
            // 傳給server時用於紀錄超大字串長度的位元組數.
            this.SAVE_BITS_STRING = 2;
        }
        static {
            // 傳給server時用於紀錄字串長度的位元組數.
            this.HEADER_SIZE = 3;
        }
        // 封包表頭大小.
    };

    // assets/Scripts/Communication/ArrayUtil.ts
    var ArrayUtil = class {
        // 
        /**
         * 將陣列轉成正整數. 
         * @param arbtNumber 每個number代表一個byte, 以BigEndian排列.
         * @return number 正整數, 如果發生溢位則傳回0.
         */
        static convertArrayToNumber(arbtNumber) {
            if (!arbtNumber) return 0;
            let iLength = arbtNumber.length;
            let nValue = 0;
            try {
                for (let i = 0; i < iLength; ++i) {
                    nValue += arbtNumber[i] << 8 * (iLength - i - 1);
                }
            } catch (error) {
                nValue = 0;
            }
            return nValue;
        }
        /**
         * 將正整數轉成number陣列.
         * @param nValue 要轉換的數字, 須為正整數.
         * @param iDigits 處理幾位數
         * @return number[] 轉換的結果, 陣列大小等於iDigits, 每個number存放一個byte的資料.
         */
        // 
        static convertNumberToArray(nValue, iDigits) {
            if (iDigits <= 0) {
                return null;
            }
            let arbtNumber = [];
            for (let i = 0; i < iDigits; ++i) {
                arbtNumber[i] = nValue >> 8 * (iDigits - i - 1) & 255;
            }
            return arbtNumber;
        }
        /**
         * 將字串的字碼以number陣列的形式傳回. 
         * @param szData 
         * @return number[] 每2個number代表一個utf16的字元. (LittleEndian)
         */
        static convertStringToUtf16Array(szData) {
            let aruiArray = [];
            let iLength = szData.length;
            let iCharCode = 0;
            for (let i = 0; i < iLength; ++i) {
                iCharCode = szData.charCodeAt(i);
                aruiArray[2 * i] = iCharCode & 255;
                aruiArray[2 * i + 1] = iCharCode >> 8 & 255;
            }
            return aruiArray;
        }
        /**
         * 將utf-16陣列轉成字串.
         * @param arbtArray 每2個number代表一個utf16的字元. (LittleEndian)
         * @return string 失敗傳回空字串.
         */
        static convertUtf16ArrayToString(arbtArray) {
            if (null == arbtArray) {
                return "";
            }
            let iLength = arbtArray.length / 2;
            let aruiCharCode = [];
            for (let i = 0; i < iLength; ++i) {
                aruiCharCode[i] = String.fromCharCode(arbtArray[i * 2] + (arbtArray[i * 2 + 1] << 8));
            }
            return aruiCharCode.join("");
        }
        // // 將整數轉成iDigits個byte, 高位元在前.
        // public static numberToBytes(iValue: number, iDigits: number): Uint8Array {
        // 	if (iDigits <= 0) {
        // 		return null;
        // 	}
        // 	let arbtData: Uint8Array = new Uint8Array[iDigits];
        // 	// 傳給server時, 高位元在前.
        // 	for (let i = iDigits - 1; i >= 0; --i) {
        // 		arbtData[i] = iValue & 0xff;
        // 		iValue >>= 8;
        // 	}
        // 	return arbtData;
        // }
        // // 合併兩個byte array.
        // public static merge(arbtData1: Uint8Array, arbtData2: Uint8Array): Uint8Array {
        // 	let iLength1: number = 0;
        // 	let iLength2: number = 0;
        // 	if (arbtData1) {
        // 		iLength1 = arbtData1.length;
        // 	}
        // 	if (arbtData2) {
        // 		iLength2 = arbtData2.length;
        // 	}
        // 	if (0 == (iLength1 + iLength2)) {
        // 		return null;
        // 	}
        // 	let arbtMerge: Uint8Array = new Uint8Array[iLength1 + iLength2];
        // 	if (iLength1 > 0) {
        // 		arbtMerge.set(arbtData1);
        // 	}
        // 	if (iLength2 > 0) {
        // 		arbtMerge.set(arbtData2, iLength1);
        // 	}
        // 	return arbtMerge;
        // }
        // // 複製byte array.
        // public static duplicate(arbtSource: Uint8Array): Uint8Array {
        // 	if (arbtSource) {
        // 		return null;
        // 	}
        // 	let arbtDuplicate: Uint8Array = new Uint8Array[arbtSource.length];
        // 	arbtDuplicate.set(arbtSource);
        // 	return arbtDuplicate;
        // }
        // // 在陣列後端添加一個數字.
        // public static append(arbtData: Uint8Array, btData: number): Uint8Array {
        // 	return ArrayUtil.merge(arbtData, new Uint8Array[(btData)]);
        // }
        // // 在陣列前端插入一個數字.
        // public static insertFirst(btData: number, arbtData: Uint8Array): Uint8Array {
        // 	return ArrayUtil.merge(new Uint8Array[(btData)], arbtData);
        // }
        /**
         * 數字陣列重新排序(小至大)
         * @param array 
         */
        static sortNumAsce(array) {
            array.sort((a, b) => a - b);
        }
        /**
         * 數字陣列重新排序(大至小)
         * @param array 
         */
        static sortNumDesc(array) {
            array.sort((a, b) => b - a);
        }
    };

    // assets/Scripts/Communication/DictionaryIterator.ts
    var DictionaryIterator = class {
        constructor(dictionary) {
            this.m_dictTarget = null;
            this.m_arIterKey = null;
            this.m_iCurrentIndex = 0;
            this.m_dictTarget = dictionary;
        }
        getFirst() {
            this.m_iCurrentIndex = 0;
            if (null == this.m_dictTarget) {
                return null;
            }
            this.m_arIterKey = this.m_dictTarget.getKeys();
            return this.getNext();
        }
        getNext() {
            if (null == this.m_dictTarget) {
                return null;
            }
            if (this.m_iCurrentIndex >= this.m_arIterKey.length) {
                return null;
            }
            return this.m_dictTarget.get(this.m_arIterKey[this.m_iCurrentIndex++]);
        }
        getCurrentKey() {
            let tmp = this.m_iCurrentIndex - 1;
            return this.m_arIterKey[tmp];
        }
    };

    // assets/Scripts/Communication/ListIterator.ts
    var ListIterator = class {
        constructor(list) {
            this.m_listTarget = null;
            this.m_iCurrentIndex = 0;
            this.m_listTarget = list;
        }
        getFirst() {
            this.m_iCurrentIndex = 0;
            return this.getNext();
        }
        getNext() {
            if (null === this.m_listTarget) {
                return null;
            }
            if (this.m_iCurrentIndex >= this.m_listTarget.getCount()) {
                return null;
            }
            return this.m_listTarget.get(this.m_iCurrentIndex++);
        }
    };

    // assets/Scripts/Communication/IteratorFactory.ts
    var IteratorFactory = class {
        /** 
         * 產生List的迭代器.
         */
        static createListIterator(list) {
            return new ListIterator(list);
        }
        /** 
         * 產生Dictionary的迭代器.
         */
        static createDictionaryIterator(dictionary) {
            return new DictionaryIterator(dictionary);
        }
    };

    // assets/Scripts/Communication/List.ts
    var List = class {
        constructor(array) {
            this.m_arItem = array ? array : [];
        }
        get array() {
            return this.m_arItem;
        }
        get Count() {
            return this.m_arItem ? this.m_arItem.length : 0;
        }
        // 在串列頭新增.
        insert(value) {
            this.m_arItem.unshift(value);
        }
        // 任意地方新增. 不要太常用.
        insertAt(iIndexAt, value) {
            let iTotalCount = this.getCount();
            if (iIndexAt <= 0) {
                this.insert(value);
            } else if (iIndexAt >= iTotalCount) {
                this.add(value);
            } else {
                let arPart1 = this.m_arItem.slice(0, iIndexAt);
                let arPart2 = this.m_arItem.slice(iIndexAt, iTotalCount);
                this.m_arItem = arPart1.concat([value], arPart2);
            }
        }
        // 新增物件.
        add(value) {
            this.m_arItem.push(value);
        }
        // 取出物件, 找不到傳回undefined.
        get(index) {
            if (index < 0 || index >= this.getCount()) {
                return void 0;
            }
            return this.m_arItem[index];
        }
        // 在指定位置設定數值
        set(index, value) {
            this.m_arItem[index] = value;
        }
        // 移除一個項目(第一個遇到的項目).
        remove(value) {
            let iIndex = this.indexOf(value);
            if (iIndex >= 0) {
                this.m_arItem[iIndex] = null;
                this.m_arItem.splice(iIndex, 1);
            }
        }
        // 移除第iIndex個項目.
        removeAt(iIndex) {
            if (iIndex < 0 || iIndex >= this.m_arItem.length) {
                return;
            } else if (iIndex == 0) {
                this.removeFirst();
            } else if (iIndex == this.m_arItem.length - 1) {
                this.removeLast();
            } else {
                this.m_arItem[iIndex] = null;
                this.m_arItem.splice(iIndex, 1);
            }
        }
        /**
         * 移除第一項
         */
        removeFirst() {
            this.m_arItem.shift();
        }
        removeLast() {
            this.m_arItem.pop();
        }
        // 取出數量.
        getCount() {
            return this.m_arItem.length;
        }
        // 反查value在第幾個index.
        indexOf(value) {
            return this.m_arItem.indexOf(value);
        }
        // 清除全部.
        clear() {
            if (this.m_arItem && this.m_arItem.length > 0) {
                let iCount = this.m_arItem.length;
                for (let i = 0; i < iCount; ++i) {
                    this.m_arItem[i] = null;
                }
                this.m_arItem = null;
                this.m_arItem = new Array();
            }
        }
        // 取出Iterator.
        getIterator() {
            return IteratorFactory.createListIterator(this);
        }
        // 轉成陣列.
        toArray() {
            let iCount = this.getCount();
            let arDuplicate = Array(iCount);
            for (let i = 0; i < iCount; ++i) {
                arDuplicate[i] = this.m_arItem[i];
            }
            return arDuplicate;
        }
        forEach(callbackfn, thisArg) {
            this.m_arItem.forEach(callbackfn, thisArg);
        }
        contains(value) {
            return this.m_arItem.indexOf(value) < 0 ? false : true;
        }
        copyTo(target) {
            if (target) {
                this.m_arItem.forEach((item) => {
                    target.add(item);
                });
            }
            return target;
        }
    };

    // assets/Scripts/Communication/BinaryBufferWriter.ts
    var DataBinaryBuffer = class {
        constructor(compositor) {
            this.m_Compositor = null;
            this.m_Compositor = compositor;
        }
        getSize() {
            return this.m_Compositor.getSize();
        }
        writeTo(dataView, iOffset) {
            this.m_Compositor.writeTo(dataView, iOffset);
            return this.m_Compositor.getSize();
        }
    };
    var DataByteArray = class {
        constructor(arbtArray) {
            this.m_arbtArray = null;
            this.m_arbtArray = arbtArray;
        }
        getSize() {
            return this.m_arbtArray.length;
        }
        writeTo(dataView, iOffset) {
            let iLength = this.m_arbtArray.length;
            for (let i = 0; i < iLength; ++i) {
                dataView.setUint8(iOffset + i, this.m_arbtArray[i]);
            }
            return this.m_arbtArray.length;
        }
    };
    var DataLittleEndianBytes = class {
        constructor(nValue, iDigits) {
            this.m_nValue = 0;
            this.m_iDigits = 0;
            this.m_nValue = nValue;
            this.m_iDigits = iDigits;
        }
        getSize() {
            return this.m_iDigits;
        }
        writeTo(dataView, iOffset) {
            let iValue = this.m_nValue;
            for (let i = this.m_iDigits - 1; i >= 0; --i) {
                dataView.setUint8(iOffset + this.m_iDigits - i - 1, iValue & 255);
                iValue >>= 8;
            }
            return this.m_iDigits;
        }
    };
    var DataBytes = class {
        constructor(nValue, iDigits) {
            this.m_nValue = 0;
            this.m_iDigits = 0;
            this.m_nValue = nValue;
            this.m_iDigits = iDigits;
        }
        getSize() {
            return this.m_iDigits;
        }
        writeTo(dataView, iOffset) {
            let iValue = this.m_nValue;
            for (let i = this.m_iDigits - 1; i >= 0; --i) {
                dataView.setUint8(iOffset + i, iValue & 255);
                iValue >>= 8;
            }
            return this.m_iDigits;
        }
    };
    var Data8Bytes = class extends DataBytes {
        constructor(iValue, useLittleEndian = true) {
            super(iValue, 8);
            this.m_UseLittleEndian = true;
            this.m_UseLittleEndian = useLittleEndian;
        }
        // float64 . 沒有long型態, 儲存long資料精度會跑掉.
        writeTo(dataView, iOffset) {
            dataView.setFloat64(iOffset, this.m_nValue, this.m_UseLittleEndian);
            return this.m_iDigits;
        }
    };
    var Data4Bytes = class extends DataBytes {
        constructor(iValue) {
            super(iValue, 4);
        }
        writeTo(dataView, iOffset) {
            dataView.setUint32(iOffset, this.m_nValue, false);
            return this.m_iDigits;
        }
    };
    var Data2Bytes = class extends DataBytes {
        constructor(iValue) {
            super(iValue, 2);
        }
        writeTo(dataView, iOffset) {
            dataView.setUint16(iOffset, this.m_nValue, false);
            return this.m_iDigits;
        }
    };
    var DataFloat32 = class extends DataBytes {
        constructor(iValue) {
            super(iValue, 4);
        }
        writeTo(dataView, iOffset) {
            dataView.setFloat32(iOffset, this.m_nValue, false);
            return this.m_iDigits;
        }
    };
    var DataString = class {
        constructor(szValue, bWithLength = true) {
            //private m_utf8: any[] = null;		
            this.m_utf8 = null;
            // 這邊是utf-8字串.
            this.m_bWithLength = true;
            this.m_utf8 = unescape(encodeURI(szValue));
            this.m_bWithLength = bWithLength;
        }
        getSize() {
            return this.m_utf8.length + (this.m_bWithLength ? NetConst.SAVE_BITS_STRING : 0);
        }
        writeTo(dataView, iOffset) {
            let iStringLength = this.m_utf8.length;
            if (this.m_bWithLength) {
                dataView.setUint16(iOffset, iStringLength, false);
                iOffset += NetConst.SAVE_BITS_STRING;
            }
            for (var i = 0; i < iStringLength; i++) {
                dataView.setUint8(iOffset + i, this.m_utf8.charCodeAt(i));
            }
            return this.getSize();
        }
    };
    var DataString_MegaSize = class {
        constructor(szValue, bWithLength = true) {
            //private m_utf8: any[] = null;
            this.m_utf8 = null;
            // 這邊是utf-8字串.
            this.m_bWithLength = true;
            this.m_utf8 = unescape(encodeURI(szValue));
            this.m_bWithLength = bWithLength;
        }
        getSize() {
            return this.m_utf8.length + (this.m_bWithLength ? NetConst.SAVE_BITS_STRING : 0);
        }
        writeTo(dataView, iOffset) {
            let iStringLength = this.m_utf8.length;
            if (this.m_bWithLength) {
                let iValue = iStringLength;
                for (let i2 = NetConst.SAVE_BITS_MEGA_STRING - 1; i2 >= 0; --i2) {
                    dataView.setUint8(iOffset + i2, iValue & 255);
                    iValue >>= 8;
                }
                iOffset += NetConst.SAVE_BITS_MEGA_STRING;
            }
            for (var i = 0; i < iStringLength; i++) {
                dataView.setUint8(iOffset + i, this.m_utf8.charCodeAt(i));
            }
            return this.getSize();
        }
    };
    var DataString16 = class {
        constructor(szValue, bWithLength = true) {
            this.m_szValue = null;
            this.m_utf16 = null;
            this.m_bWithLength = true;
            this.m_szValue = szValue;
            this.m_utf16 = ArrayUtil.convertStringToUtf16Array(this.m_szValue);
            this.m_bWithLength = bWithLength;
        }
        getSize() {
            return this.m_utf16.length + (this.m_bWithLength ? NetConst.SAVE_BITS_STRING : 0);
        }
        writeTo(dataView, iOffset) {
            let iLength = this.m_utf16.length;
            if (this.m_bWithLength) {
                dataView.setUint16(iOffset, iLength, false);
                iOffset += NetConst.SAVE_BITS_STRING;
            }
            for (var i = 0; i < this.m_utf16.length; i++) {
                dataView.setUint8(iOffset + i, this.m_utf16[i]);
            }
            return this.getSize();
        }
    };
    var DataLong = class {
        constructor(lValue, iDigits) {
            this.m_lValue = null;
            this.m_iDigits = 8;
            this.m_iDigits = !iDigits || iDigits < 0 || iDigits >= this.m_iDigits ? this.m_iDigits : iDigits;
            this.m_lValue = lValue;
        }
        getSize() {
            return this.m_iDigits;
        }
        writeTo(dataView, iOffset) {
            let iValue = null;
            for (let i = this.m_iDigits - 1; i >= 0; --i) {
                iValue = this.m_lValue.shiftRight(8 * i).and(255).toNumber();
                dataView.setUint8(iOffset + i, iValue);
            }
            return this.m_iDigits;
        }
    };
    var DataLongByBig = class {
        constructor(lValue, iDigits) {
            this.m_lValue = null;
            this.m_iDigits = 8;
            this.m_iDigits = !iDigits || iDigits < 0 || iDigits >= this.m_iDigits ? this.m_iDigits : iDigits;
            this.m_lValue = lValue;
        }
        getSize() {
            return this.m_iDigits;
        }
        writeTo(dataView, iOffset) {
            let iValue = null;
            let move = 0;
            for (let i = this.m_iDigits - 1; i >= 0; --i) {
                iValue = this.m_lValue.shiftRight(8 * i).and(255).toNumber();
                dataView.setUint8(iOffset + move, iValue);
                move++;
            }
            return this.m_iDigits;
        }
    };
    var BinaryBufferWriter = class {
        constructor() {
            this.m_listData = new List();
        }
        addString(szValue, bWithLength = true) {
            this.m_listData.add(new DataString(szValue.toString(), bWithLength));
        }
        addString_MegaSize(szValue, bWithLength = true) {
            this.m_listData.add(new DataString_MegaSize(szValue.toString(), bWithLength));
        }
        /**
         * 字串以UTF-16編碼方式轉換成bytes，再寫入Buffer
         * @param szValue 
         * @param bWithLength 是否寫入字串長度
         */
        addString16(szValue, bWithLength = true) {
            this.m_listData.add(new DataString16(szValue.toString(), bWithLength));
        }
        addInt8(btValue) {
            this.m_listData.add(new DataBytes(btValue, 1));
        }
        addInt16(sValue) {
            this.m_listData.add(new Data2Bytes(sValue));
        }
        //寫入little位
        addInt32ByLittle(inValue) {
            this.m_listData.add(new DataLittleEndianBytes(inValue, 4));
        }
        addInt32(iValue) {
            this.m_listData.add(new Data4Bytes(iValue));
        }
        addFloat32(fValue) {
            this.m_listData.add(new DataFloat32(fValue));
        }
        addFloat64(lValue, useLittleEndian = true) {
            this.m_listData.add(new Data8Bytes(lValue, useLittleEndian));
        }
        /** 在指定index插入內容,
         * iDigits: index,
         * iValue: 內容
         */
        addPositiveNumber(iValue, iDigits) {
            this.m_listData.add(new DataBytes(iValue, iDigits));
        }
        addLong(lValue) {
            this.m_listData.add(new DataLong(lValue));
        }
        addLongByBig(lValue) {
            this.m_listData.add(new DataLongByBig(lValue));
        }
        addPositiveLong(lValue, iDigits) {
            this.m_listData.add(new DataLong(lValue, iDigits));
        }
        // 加入byte array (每個number代表一個byte).
        addByteNumberArray(arbtArray) {
            this.m_listData.add(new DataByteArray(arbtArray));
        }
        // 平常不會用.
        addPositiveNumberLittleEndian(iValue, iDigits) {
            this.m_listData.add(new DataLittleEndianBytes(iValue, iDigits));
        }
        insertBufferWriter(target) {
            this.m_listData.insert(new DataBinaryBuffer(target));
        }
        insertInt8(btValue) {
            this.m_listData.insert(new DataBytes(btValue, 1));
        }
        insertInt16(sValue) {
            this.m_listData.insert(new Data2Bytes(sValue));
        }
        insertInt32(iValue) {
            this.m_listData.insert(new Data4Bytes(iValue));
        }
        insertNumber(iValue, iDigits) {
            this.m_listData.insert(new DataBytes(iValue, iDigits));
        }
        insertFloat64(lValue, useLittleEndian = true) {
            this.m_listData.insert(new Data8Bytes(lValue, useLittleEndian));
        }
        addBufferWriter(target) {
            this.m_listData.add(new DataBinaryBuffer(target));
        }
        toArrayBuffer() {
            let iBufferSize = this.getSize();
            let arrayBuffer = new ArrayBuffer(iBufferSize);
            let dataView = new DataView(arrayBuffer, 0);
            let iter = IteratorFactory.createListIterator(this.m_listData);
            let data = iter.getFirst();
            let iOffset = 0;
            while (data) {
                iOffset += data.writeTo(dataView, iOffset);
                data = iter.getNext();
            }
            return arrayBuffer;
        }
        /**
         * 轉成ArrayBuffer, 並在前面加上3 bytes封包大小資訊.
         */
        toArrayBufferWithSize() {
            let iPacketSize = this.getSize();
            let iBufferSize = iPacketSize + NetConst.HEADER_SIZE;
            let arrayBuffer = new ArrayBuffer(iBufferSize);
            let dataView = new DataView(arrayBuffer, 0);
            let iter = IteratorFactory.createListIterator(this.m_listData);
            let data = iter.getFirst();
            let iOffset = 0;
            let headerData = new DataBytes(iPacketSize, NetConst.HEADER_SIZE);
            iOffset += headerData.writeTo(dataView, iOffset);
            while (data) {
                iOffset += data.writeTo(dataView, iOffset);
                data = iter.getNext();
            }
            return arrayBuffer;
        }
        getSize() {
            let iter = this.m_listData.getIterator();
            let data = iter.getFirst();
            let iSize = 0;
            while (data) {
                iSize += data.getSize();
                data = iter.getNext();
            }
            return iSize;
        }
        writeTo(dataView, iOffset) {
            let iter = this.m_listData.getIterator();
            let data = iter.getFirst();
            while (data) {
                iOffset += data.writeTo(dataView, iOffset);
                data = iter.getNext();
            }
        }
    };

    // assets/Scripts/Communication/BinaryBuffer.ts
    var BinaryBuffer = class _BinaryBuffer {
        constructor(buffer) {
            this.USE_LITTLE_ENDIAN = false;
            this.m_Buffer = null;
            this.m_DataView = null;
            this.m_nReadIndex = 0;
            this.m_Buffer = buffer;
            this.m_DataView = new DataView(this.m_Buffer);
            this.m_nReadIndex = 0;
        }
        ReadLittleEndianLong(arg0) {
            return this.getPositiveLong(arg0)[1];
        }
        ReadAttachedLengthString() {
            return this.getString()[1];
        }
        getArrayBuffer() {
            return this.m_Buffer;
        }
        getReadIndex() {
            return this.m_nReadIndex;
        }
        hasUnreadData() {
            if (this.m_nReadIndex >= this.m_Buffer.byteLength) {
                return false;
            }
            return true;
        }
        getCurrentReadPos() {
            return this.m_nReadIndex;
        }
        setReadPosition(iReadPos) {
            this.m_nReadIndex = iReadPos;
            if (this.m_nReadIndex < 0) {
                this.m_nReadIndex = 0;
            } else {
                let iTotalLength = this.getCount();
                if (this.m_nReadIndex > iTotalLength) {
                    this.m_nReadIndex = iTotalLength;
                }
            }
        }
        /**
         * 跳過幾個位元組.
         * @param iBytes 
         */
        skipBytes(iLength) {
            if (iLength <= 0) {
                return;
            }
            this.m_nReadIndex += iLength;
            let iTotalLength = this.getCount();
            if (this.m_nReadIndex > iTotalLength) {
                this.m_nReadIndex = iTotalLength;
            }
        }
        /**
         * 取出某範圍的bytes, 不會影響讀取位置.
         * @param iStartPos 起始讀取位置.
         * @param iLength 讀取bytes數.
         * @return BinaryBuffer  取出來的資料放進新的BinaryBuffer, 失敗傳回null.
         */
        getBytesRanged(iStartPos, iLength) {
            if (iStartPos < 0 || iLength <= 0) {
                return null;
            }
            if (iStartPos + iLength > this.getCount()) {
                return null;
            }
            let dataView = new _BinaryBuffer(this.m_Buffer.slice(iStartPos, iStartPos + iLength));
            return dataView;
        }
        /**
         * 取出某範圍的資料組合成整數(BigEndian), 不會影響讀取位置.
         * @param iStartPos 起始讀取位置.
         * @param iLength 讀取bytes數.
         * @return number  取出來的資料, 失敗傳回0.
         */
        getNumberRanged(iStartPos, iLength) {
            if (iStartPos < 0 || iLength <= 0) {
                return 0;
            }
            if (iStartPos + iLength > this.getCount()) {
                return 0;
            }
            let nNumber = 0;
            let arbtNumber = [];
            for (let i = 0; i < iLength; ++i) {
                arbtNumber[i] = this.m_DataView.getUint8(iStartPos + i);
            }
            nNumber = ArrayUtil.convertArrayToNumber(arbtNumber);
            return nNumber;
        }
        /**
         * 取出bytes.
         * @param iLength 取出的bytes數, 如果超過範圍或者傳入-1, 則會取出剩下所有資料.
         * @return BinaryBuffer  取出來的資料放進新的BinaryBuffer.
         */
        getBytes(iLength) {
            if (iLength < 0 || iLength > this.getUnreadCount()) {
                iLength = this.getUnreadCount();
            }
            let dataView = new _BinaryBuffer(this.m_Buffer.slice(this.m_nReadIndex, this.m_nReadIndex + iLength));
            this.m_nReadIndex += iLength;
            return dataView;
        }
        // 取bytes array 含長度  等於 先取一個長度 在往後取該長度的陣列
        // 例如  [3, 15, 27, 12, 8 ....] => [15, 27 , 12] 
        getBytesArray_WithLength() {
            let byteResult = this.getByte();
            if (byteResult[0]) {
                let len = byteResult[1];
                let result = this.getBytesArray(len);
                return result;
            }
            return null;
        }
        getBytesArray(iLength) {
            let binaryBuffer = this.getBytes(iLength);
            let result = [];
            for (let i = 0; i < iLength; i++) {
                let byte = binaryBuffer.getByte();
                if (byte[0] === true) {
                    result.push(byte[1]);
                } else {
                    console.error(`getBytesArray \u89E3\u6790${i}\u6642\u9577\u5EA6\u4E0D\u8DB3\uFF0C\u51FA\u73FE\u932F\u8AA4`);
                    result.push(0);
                }
            }
            return result;
        }
        getBytesArrayAll() {
            const iLength = this.m_Buffer.byteLength;
            let binaryBuffer = this.getBytes(iLength);
            let result = [];
            for (let i = 0; i < iLength; i++) {
                let byte = binaryBuffer.getByte();
                if (byte[0] === true) {
                    result.push(byte[1]);
                } else {
                    break;
                }
            }
            return result;
        }
        UnzipByteArray(bytes) {
            let result = [];
            for (let item of bytes) {
                let strHex = item.toString(16).padStart(2, "0");
                result.push(parseInt(strHex[1], 16));
                result.push(parseInt(strHex[0], 16));
            }
            return result;
        }
        getBytesArrayAndUnzip(iLength) {
            let bytes = this.getBytesArray(iLength);
            let result = this.UnzipByteArray(bytes);
            return result;
        }
        /**
         * 取出字串, 前3bytes紀錄長度.
         */
        getString_MegaSize() {
            let ret = this.getPositiveNumber(NetConst.SAVE_BITS_MEGA_STRING);
            if (!ret[0]) {
                return [false, null];
            }
            let szRet = this.getString_WithLength(ret[1]);
            return [null != szRet, szRet];
        }
        /**
         * 取出字串, 前2bytes紀錄長度.
         */
        getString() {
            let ret = this.getPositiveNumber(NetConst.SAVE_BITS_STRING);
            if (!ret[0]) {
                return [false, null];
            }
            let szRet = this.getString_WithLength(ret[1]);
            return [null != szRet, szRet];
        }
        getByte() {
            let binaryBuffer = this.getBytes(1);
            var byteArray = new Uint8Array(binaryBuffer.getArrayBuffer());
            let success = false;
            if (Number.isInteger(byteArray?.[0])) {
                success = true;
            }
            return [success, byteArray?.[0]];
        }
        /**
         * 取出字串, 自帶長度.
         * @param iLength 字串bytes數.
         * @return string 字串, 找不到傳回null.
         */
        getString_WithLength(iLength) {
            let szRet = null;
            if (this.getUnreadCount() >= iLength) {
                let buffer = this.m_Buffer.slice(this.m_nReadIndex, this.m_nReadIndex + iLength);
                if (buffer) {
                    this.m_nReadIndex += iLength;
                    let view = new DataView(buffer);
                    let arbtNumber = [];
                    for (let i = 0; i < iLength; ++i) {
                        arbtNumber[i] = view.getUint8(i);
                    }
                    szRet = ArrayUtil.convertUtf16ArrayToString(arbtNumber);
                }
            }
            return szRet;
        }
        mergeFrom(dataView) {
            if (null == dataView || null == this.m_DataView) {
                return;
            }
            let iLength1 = this.m_DataView.byteLength;
            let iLength2 = dataView.getCount();
            if (0 == iLength2) {
                return;
            }
            let mergedBuffer = new Uint8Array(iLength1 + iLength2);
            let firstBuffer = new Uint8Array(this.m_DataView.buffer);
            let secondBuffer = new Uint8Array(dataView.m_Buffer);
            if (iLength1 > 0) {
                mergedBuffer.set(firstBuffer);
            }
            if (iLength2 > 0) {
                mergedBuffer.set(secondBuffer);
            }
            this.m_Buffer = mergedBuffer.buffer;
            this.m_DataView = new DataView(this.m_Buffer);
        }
        getPositiveNumber(iDigits) {
            if (iDigits <= 0 || iDigits > 8 || this.getUnreadCount() < iDigits) {
                return [false, 0];
            }
            let iValue = 0;
            let bSucceed = true;
            try {
                for (let i = 0; i < iDigits; ++i) {
                    iValue += this.m_DataView.getUint8(this.m_nReadIndex + i) << 8 * (iDigits - i - 1);
                }
                this.m_nReadIndex += iDigits;
            } catch (error) {
                bSucceed = false;
                iValue = 0;
            }
            return [bSucceed, iValue];
        }
        // 平常不會用.
        getPositiveNumberLittleEndian(iDigits) {
            if (iDigits <= 0 || iDigits > 8 || this.getUnreadCount() < iDigits) {
                return [false, 0];
            }
            let iValue = 0;
            let bSucceed = true;
            try {
                for (let i = 0; i < iDigits; ++i) {
                    iValue += this.m_DataView.getUint8(this.m_nReadIndex + i) << 8 * i;
                }
                this.m_nReadIndex += iDigits;
            } catch (error) {
                bSucceed = false;
                iValue = 0;
            }
            return [bSucceed, iValue];
        }
        getSingle(useLittleEndian = true) {
            let [boolean, num] = this.getFloat32(useLittleEndian);
            return [boolean, boolean ? new Decimal(num) : null];
        }
        getFloat32(useLittleEndian = true) {
            if (this.getUnreadCount() < 4) {
                return [false, 0];
            }
            let fValue = 0;
            let bSucceed = true;
            try {
                fValue = this.m_DataView.getFloat32(this.m_nReadIndex, useLittleEndian);
                this.m_nReadIndex += 4;
            } catch (error) {
                bSucceed = false;
            }
            return [bSucceed, fValue];
        }
        getFloat64(useLittleEndian = true) {
            if (this.getUnreadCount() < 8) {
                return [false, 0];
            }
            let fValue = 0;
            let bSucceed = true;
            try {
                fValue = this.m_DataView.getFloat64(this.m_nReadIndex, useLittleEndian);
                this.m_nReadIndex += 8;
            } catch (error) {
                bSucceed = false;
            }
            return [bSucceed, fValue];
        }
        getInt8() {
            if (this.getUnreadCount() < 1) {
                return [false, 0];
            }
            let fValue = 0;
            let bSucceed = true;
            try {
                fValue = this.m_DataView.getInt8(this.m_nReadIndex);
                this.m_nReadIndex += 1;
            } catch (error) {
                bSucceed = false;
            }
            return [bSucceed, fValue];
        }
        getInt16() {
            if (this.getUnreadCount() < 2) {
                return [false, 0];
            }
            let fValue = 0;
            let bSucceed = true;
            try {
                fValue = this.m_DataView.getInt16(this.m_nReadIndex, this.USE_LITTLE_ENDIAN);
                this.m_nReadIndex += 2;
            } catch (error) {
                bSucceed = false;
            }
            return [bSucceed, fValue];
        }
        getInt32() {
            if (this.getUnreadCount() < 4) {
                return [false, 0];
            }
            let fValue = 0;
            let bSucceed = true;
            try {
                fValue = this.m_DataView.getInt32(this.m_nReadIndex, this.USE_LITTLE_ENDIAN);
                this.m_nReadIndex += 4;
            } catch (error) {
                bSucceed = false;
            }
            return [bSucceed, fValue];
        }
        getUint8() {
            if (this.getUnreadCount() < 1) {
                return [false, 0];
            }
            let fValue = 0;
            let bSucceed = true;
            try {
                fValue = this.m_DataView.getUint8(this.m_nReadIndex);
                this.m_nReadIndex += 1;
            } catch (error) {
                bSucceed = false;
            }
            return [bSucceed, fValue];
        }
        /**
         * 取出一個unit8的數值, 但不改變已讀位置.
         */
        peekUint8() {
            if (this.getUnreadCount() < 1) {
                return [false, 0];
            }
            let fValue = 0;
            let bSucceed = true;
            try {
                fValue = this.m_DataView.getUint8(this.m_nReadIndex);
            } catch (error) {
                bSucceed = false;
            }
            return [bSucceed, fValue];
        }
        getUint16() {
            if (this.getUnreadCount() < 2) {
                return [false, 0];
            }
            let fValue = 0;
            let bSucceed = true;
            try {
                fValue = this.m_DataView.getUint16(this.m_nReadIndex, this.USE_LITTLE_ENDIAN);
                this.m_nReadIndex += 2;
            } catch (error) {
                bSucceed = false;
            }
            return [bSucceed, fValue];
        }
        getUint32() {
            if (this.getUnreadCount() < 4) {
                return [false, 0];
            }
            let fValue = 0;
            let bSucceed = true;
            try {
                fValue = this.m_DataView.getUint32(this.m_nReadIndex, this.USE_LITTLE_ENDIAN);
                this.m_nReadIndex += 4;
            } catch (error) {
                bSucceed = false;
            }
            return [bSucceed, fValue];
        }
        getUint32ByBig() {
            if (this.getUnreadCount() < 4) {
                return [false, 0];
            }
            let fValue = 0;
            let bSucceed = true;
            try {
                fValue = this.m_DataView.getUint32(this.m_nReadIndex, false);
                this.m_nReadIndex += 4;
            } catch (error) {
                bSucceed = false;
            }
            return [bSucceed, fValue];
        }
        getLong(bUnsigned = false) {
            return this.getPositiveLong(8, bUnsigned);
        }
        getPositiveLongByBig(iDigits, bUnsigned = true) {
            if (this.getUnreadCount() < iDigits || iDigits < 0 || iDigits > 8) {
                return [false, dcodeIO.Long.ZERO];
            }
            let bSucceed = true;
            let lValue = dcodeIO.Long.fromNumber(0, bUnsigned);
            try {
                for (let i = iDigits - 1; i >= 0; i--) {
                    lValue = lValue.add(dcodeIO.Long.fromNumber(this.m_DataView.getUint8(this.m_nReadIndex)).shiftLeft(8 * i));
                    this.m_nReadIndex++;
                }
            } catch (error) {
                bSucceed = false;
            }
            return [bSucceed, lValue];
        }
        getPositiveLong(iDigits, bUnsigned = true) {
            if (this.getUnreadCount() < iDigits || iDigits < 0 || iDigits > 8) {
                return [false, dcodeIO.Long.ZERO];
            }
            let bSucceed = true;
            let lValue = dcodeIO.Long.fromNumber(0, bUnsigned);
            try {
                for (let i = 0; i < iDigits; ++i) {
                    lValue = lValue.add(dcodeIO.Long.fromNumber(this.m_DataView.getUint8(this.m_nReadIndex + i)).shiftLeft(8 * i));
                }
                this.m_nReadIndex += iDigits;
            } catch (error) {
                bSucceed = false;
            }
            return [bSucceed, lValue];
        }
        getCount() {
            if (!this.m_DataView) {
                return 0;
            }
            return this.m_DataView.byteLength;
        }
        getUnreadCount() {
            return this.m_Buffer.byteLength - this.m_nReadIndex;
        }
        /**
         * 讀取剩於資料轉成int
         */
        getUnreadUint8Array() {
            let dataInt8Array = [];
            if (this.getUnreadCount() <= 0) {
                return [false, null];
            }
            let bSucceed = true;
            try {
                while (this.getUnreadCount() > 0) {
                    dataInt8Array.push(this.m_DataView.getUint8(this.m_nReadIndex));
                    this.m_nReadIndex += 1;
                }
            } catch (error) {
                bSucceed = false;
            }
            return [true, new Uint8Array(dataInt8Array)];
        }
        //add by humbert
        getUInt24() {
            if (this.getUnreadCount() < 3) {
                return [false, 0];
            }
            let fValue = 0;
            let bSucceed = true;
            try {
                for (let i = 2; i >= 0; i--) {
                    fValue += this.m_DataView.getUint8(this.m_nReadIndex) * Math.pow(256, i);
                    this.m_nReadIndex++;
                }
            } catch (error) {
                bSucceed = false;
            }
            return [bSucceed, fValue];
        }
        /**
         *  utf-8陣列轉成字串(Javascript應該是utf-16).
         */
        fromUTF8Array(buffer) {
            var str = "", i;
            let iCount = buffer.byteLength;
            let dataView = new DataView(buffer);
            for (i = 0; i < iCount; i++) {
                var value = dataView.getUint8(i);
                if (value < 128) {
                    str += String.fromCharCode(value);
                } else if (value > 191 && value < 224) {
                    str += String.fromCharCode((value & 31) << 6 | dataView.getUint8(i + 1) & 63);
                    i += 1;
                } else if (value > 223 && value < 240) {
                    str += String.fromCharCode((value & 15) << 12 | (dataView.getUint8(i + 1) & 63) << 6 | dataView.getUint8(i + 2) & 63);
                    i += 2;
                } else {
                    var charCode = ((value & 7) << 18 | (dataView.getUint8(i + 1) & 63) << 12 | (dataView.getUint8(i + 2) & 63) << 6 | dataView.getUint8(i + 3) & 63) - 65536;
                    str += String.fromCharCode(charCode >> 10 | 55296, charCode & 1023 | 56320);
                    i += 3;
                }
            }
            return str.toString();
        }
        static fromInt8Array(data) {
            let buffer = new ArrayBuffer(data.length);
            let view = new Int8Array(buffer);
            for (let i = 0, n = data.length; i < n; i++) {
                view.fill(data[i], i);
            }
            return new _BinaryBuffer(view.buffer);
        }
        toString() {
            let szText = "";
            let nOldReadPos = this.getCurrentReadPos();
            this.setReadPosition(0);
            for (let i = 0; i < this.getCount(); i++) {
                szText = szText + this.getUint8()[1].toString() + ", ";
            }
            this.setReadPosition(nOldReadPos);
            return szText;
        }
        //模擬Unity的BytesReader
        ReadAttatchedLengthBytes() {
            let length = this.getUint16()[1];
            let arrTemp = [];
            for (let i = 0; i < length; i++) {
                arrTemp.push(this.getUint8()[1]);
            }
            return this.GetBinaryBuffer(arrTemp);
        }
        ReadBool() {
            return this.getUint8()[1] ? true : false;
        }
        readUnsignedByte() {
            return this.getUint8()[1];
        }
        ReadByte() {
            return this.getUint8()[1];
        }
        ReadBigEndianUShort() {
            return this.getUint16()[1];
        }
        ReadBigEndianULong(num) {
            return this.getPositiveLongByBig(num)[1];
        }
        ReadLittleEndianULong(num) {
            if (num = 8)
                return this.getLong(true)[1];
            else
                window.alert("ReadLittleEndianULong:\u7121\u6B64\u65B9\u6CD5");
        }
        ReadBigEndianUInt(num) {
            return this.getPositiveLongByBig(num)[1].toNumber();
        }
        readInt() {
            return this.getInt32()[1];
        }
        set Position(value) {
            this.setReadPosition(value);
        }
        get Position() {
            return this.getCurrentReadPos();
        }
        GetBinaryBuffer(arrTemp) {
            let binaryBufferWriter = new BinaryBufferWriter();
            binaryBufferWriter.addByteNumberArray(arrTemp);
            let arrayBuffer = binaryBufferWriter.toArrayBuffer();
            let data = new _BinaryBuffer(arrayBuffer);
            return data;
        }
        static GetBinaryBuffer(arrTemp) {
            let binaryBufferWriter = new BinaryBufferWriter();
            binaryBufferWriter.addByteNumberArray(arrTemp);
            let arrayBuffer = binaryBufferWriter.toArrayBuffer();
            let data = new _BinaryBuffer(arrayBuffer);
            return data;
        }
    };

    // assets/Scripts/Utils/Core/PacketHandle.ts
    function base64ToArrayBuffer(base64) {
        var binaryString = window.atob(base64);
        var bytes = new Uint8Array(binaryString.length);
        for (var i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }

    // assets/Tool/CheckScoreESBuild/entryHistory.ts
    Array.prototype.count = function (value) {
        return this.filter((x) => x == value).length;
    };
    Array.prototype.countOccurrencesOfArray = function (arr) {
        return arr.reduce((count, elem) => {
            return count + this.filter((x) => x === elem).length;
        }, 0);
    };
    Array.prototype.indexesOf = function (value) {
        var positions = this.map(function (e, i) {
            return e === value ? i : -1;
        }).filter(function (e) {
            return e !== -1;
        });
        return positions;
    };
    Array.prototype.set = function () {
        let set = new Set(this);
        let arr = Array.from(set);
        return arr;
    };
    Array.prototype.setSelf = function () {
        let uniqueValues = Array.from(new Set(this));
        this.length = 0;
        this.push(...uniqueValues);
        return this;
    };
    Array.prototype.remove = function (value) {
        const index = this.indexOf(value);
        if (index > -1) {
            this.splice(index, 1);
        }
        return this;
    };
    Array.prototype.getRandomElement = function () {
        let len = this.length;
        let index = Math.floor(Math.random() * len);
        return this[index];
    };
    Number.prototype.fixed = function () {
        return parseFloat(this.toFixed(4));
    };
    Number.prototype.readByte = function (start, length) {
        let byte = this.valueOf();
        if (byte < 0 || byte > 255) {
            console.error("Number out of range");
            return byte;
        }
        let mask = (1 << length) - 1;
        return byte >> 8 - start - length & mask;
    };
    function historyParser(base64Str, bet) {
        let binaryBuffer = base64ToBinaryBuffer(base64Str);
        //請使用者提供德解析Class後再加上組合注單格式的CLASS 都轉成JST的格式, 並在這裡呼叫解析函式, 解析後回傳組合注單格式的CLASS物件.
        //例如:   
        // const slotDataParser = new SlotDataParser055();
        // return slotDataParser.parser(base64Str, bet, 1);
        // 或者
        // const serverDataAnalyzer058 = new ServerDataAnalyzer058();
        // const gameResult = serverDataAnalyzer058.bufferParser(binaryBuffer, bet);
        // const slotDataParser1028 = new SlotDataParser1028();
        // return slotDataParser1028.parse(gameResult);
    }
    function base64ToBinaryBuffer(base64) {
        let binaryBuffer = new BinaryBuffer(base64ToArrayBuffer(base64));
        return binaryBuffer;
    }
    return __toCommonJS(entryHistory_exports);
})();

function slotDataParser_GAME_ID(base64Str, bet, featureRatio) {
    let realBet = (bet / featureRatio).fixed();;
    return MyLib.historyParser(base64Str, realBet);
}