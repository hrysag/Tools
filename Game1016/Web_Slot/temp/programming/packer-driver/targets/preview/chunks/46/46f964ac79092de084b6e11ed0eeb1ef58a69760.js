System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SlotDataParser, SlotDataBoardData, SlotDataIconData, _crd, SlotDataStringType, SlotDataGameModeType;

  _export({
    SlotDataParser: void 0,
    SlotDataBoardData: void 0,
    SlotDataIconData: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8d4aG7u/ZJPJ9dmtmwwNue", "SlotDataParser", undefined);

      _export("SlotDataStringType", SlotDataStringType = /*#__PURE__*/function (SlotDataStringType) {
        SlotDataStringType["gameMode"] = "gamemode";
        SlotDataStringType["records"] = "records";
        SlotDataStringType["round"] = "round";
        SlotDataStringType["title"] = "title";
        SlotDataStringType["board"] = "board";
        SlotDataStringType["summary"] = "summary";
        SlotDataStringType["details"] = "details";
        SlotDataStringType["line"] = "line";
        SlotDataStringType["text"] = "text";
        SlotDataStringType["icon"] = "icon";
        SlotDataStringType["number"] = "number";
        SlotDataStringType["symbol"] = "symbol";
        return SlotDataStringType;
      }({}));

      _export("SlotDataGameModeType", SlotDataGameModeType = /*#__PURE__*/function (SlotDataGameModeType) {
        SlotDataGameModeType["normal"] = "\u4E00\u822C\u904A\u6232";
        SlotDataGameModeType["free"] = "\u514D\u8CBB\u904A\u6232";
        SlotDataGameModeType["bonus"] = "\u734E\u52F5\u904A\u6232";
        return SlotDataGameModeType;
      }({}));

      _export("SlotDataParser", SlotDataParser = class SlotDataParser {
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
          var item = this.createItem(SlotDataStringType.text, gameMode);
          var section = this.createSection(SlotDataStringType.gameMode, [item]);
          this.steps.push(section);
          return this;
        }
        /**
         * 設置盤面Title，由使用者組裝要顯示的資訊
         * @param items 顯示的資訊
         * @returns  SlotDataParser，會把當前資料記錄起來
         */


        setTitle(items) {
          var section = this.createSection(SlotDataStringType.title, items);
          this.oneRound.push(section);
          return this;
        }
        /**
         * 設置盤面資訊，由使用者組裝要顯示的資訊
         * @param items 顯示的資訊
         * @returns  SlotDataParser，會把當前資料記錄起來
         */


        setSummary(items) {
          var section = this.createSection(SlotDataStringType.summary, items);
          this.oneRound.push(section);
          return this;
        }
        /**
         * 設置盤面資訊，由使用者組裝要顯示的資訊，使用後會置中
         * @param items 顯示的資訊
         * @returns  SlotDataParser，會把當前資料記錄起來
         */


        setLineSummary(items) {
          var section = this.createSection(SlotDataStringType.summary, items);
          this.oneRound.push(section);
          return this;
        }
        /**
         * 設置詳細中獎資訊，由使用者組裝要顯示的資訊
         * @param items 顯示的資訊
         * @returns  SlotDataParser，會把當前資料記錄起來
         */


        setDetailDescription(items) {
          var section = null;

          if (items.length === 0) {
            section = this.createSection(SlotDataStringType.details, [this.createItem(SlotDataStringType.text, "無中獎")]);
          } else {
            section = this.createSection(SlotDataStringType.details, items);
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
          var section = null;

          if (!isWin) {
            section = this.createSection(SlotDataStringType.details, [this.createItem(SlotDataStringType.text, "無中獎")]);
          } else {
            var winSection = [];

            for (var i = 0; i < detailDataList.winIconSymbolList.length; i++) {
              var allDetails = [];
              var score = detailDataList.megaWayCombinationCount !== undefined ? detailDataList.odds[i] * this.bet * detailDataList.megaWayCombinationCount[i] : detailDataList.odds[i] * this.bet;
              allDetails.push(this.createItem(SlotDataStringType.icon, detailDataList.winIconSymbolList[i]));
              allDetails.push(this.createItem(SlotDataStringType.number, this.bet));
              allDetails.push(this.createItem(SlotDataStringType.symbol, "*"));
              allDetails.push(this.createItem(SlotDataStringType.number, detailDataList.odds[i]));

              if (detailDataList.megaWayCombinationCount !== undefined) {
                allDetails.push(this.createItem(SlotDataStringType.symbol, "*"));
                allDetails.push(this.createItem(SlotDataStringType.number, detailDataList.megaWayCombinationCount[i]));
              }

              allDetails.push(this.createItem(SlotDataStringType.symbol, "="));
              allDetails.push(this.createItem(SlotDataStringType.number, score.fixed()));

              if (detailDataList.lineID !== undefined) {
                allDetails.push(this.createItem(SlotDataStringType.symbol, "("));
                allDetails.push(this.createItem(SlotDataStringType.text, "線"));
                allDetails.push(this.createItem(SlotDataStringType.number, detailDataList.lineID[i] + 1));
                allDetails.push(this.createItem(SlotDataStringType.symbol, ")"));
              }

              winSection.push(this.createSection(SlotDataStringType.line, allDetails));
            }

            section = this.createSection(SlotDataStringType.details, winSection);
          }

          this.oneRound.push(section);
          return this;
        }
        /**
         * 將先前的一局盤面紀錄包裝，並清空一局盤面紀錄
         * @returns SlotDataParser，會把當前資料記錄起來
         */


        combineOneRoundData() {
          var round = this.createRound(SlotDataStringType.round, this.oneRound);
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
          var allRoundData = this.createAllRoundData(SlotDataStringType.records, this.allRoundData);
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
          var baseList = this.setIconList(row, iconList);
          var showBoard = processors.reduce((list, processor) => processor(list), baseList);
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
          var board = new SlotDataBoardData(col, row, showBoard, maxWidth);
          var section = this.createBoard(SlotDataStringType.board, board);
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
          var baseList = iconList.map((icon, i) => {
            var data = new SlotDataIconData();
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
          return list => list.map(data => {
            var xIndex = data.x - 1;
            var yIndex = data.y - 1;

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
          return list => list.map(data => {
            var xIndex = data.x - 1;
            var yIndex = data.y - 1;

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
          return list => list.map(data => {
            var xIndex = data.x - 1;
            var yIndex = data.y - 1;

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


        addIconList(zIndex, row, posList, iconList, size) {
          if (size === void 0) {
            size = [];
          }

          return list => {
            if (size.length === 0) {
              size = this.initNewSize(posList.length);
            }

            posList.forEach((pos, i) => {
              var data = new SlotDataIconData();
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
          var size = [];

          for (var i = 0; i < iconLength; i++) {
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
          return list => {
            for (var i = 0; i < posList.length; i++) {
              var pos = posList[i];
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
          return list => {
            var groups = new Map();

            for (var i = 0; i < list.length; i++) {
              var g = merges[i];

              if (g > 0) {
                if (!groups.has(g)) {
                  groups.set(g, []);
                }

                groups.get(g).push(i);
              }
            }

            var _loop = function _loop() {
              var minX = Infinity;
              var minY = Infinity;
              var maxX = -Infinity;
              var maxY = -Infinity;

              for (var idx of indices) {
                var c = list[idx];

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

              var mainIdx = indices.find(idx => list[idx].x === minX && list[idx].y === minY);
              var main = list[mainIdx];
              main.width = maxX - minX + 1;
              main.height = maxY - minY + 1;

              for (var _idx of indices) {
                if (_idx !== mainIdx) {
                  list[_idx].icon = -1;
                  list[_idx].width = 0;
                  list[_idx].height = 0;
                }
              }
            };

            for (var indices of groups.values()) {
              _loop();
            }

            return list.filter(c => c.icon !== -1 && c.width > 0 && c.height > 0);
          };
        }

      });
      /**
       * 盤面的資訊
       */


      _export("SlotDataBoardData", SlotDataBoardData = class SlotDataBoardData {
        constructor(width, height, icons, maxWidth) {
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
          this.icons = icons;
          this.maxWidth = maxWidth ? maxWidth : width;
        }

      });
      /**
       * 盤面上的圖示
       */


      _export("SlotDataIconData", SlotDataIconData = class SlotDataIconData {
        constructor() {
          /** 盤面上的Icon */
          this.icon = 0;

          /** 盤面上的X位置 */
          this.x = 1;

          /** 盤面上的Y位置 */
          this.y = 1;

          /** 盤面上Icon的層級 */
          this.z = void 0;

          /** 盤面上Icon的整體標記 */
          this.mark = void 0;

          /** 盤面上Icon的整體標記顏色 */
          this.markColor = void 0;

          /** 盤面上Icon的外框標記 */
          this.markBorder = void 0;

          /** 盤面上Icon的外框標記顏色 */
          this.markBorderColor = void 0;

          /** 盤面上Icon的背景標記 */
          this.markBackground = void 0;

          /** 盤面上Icon的背景標記顏色 */
          this.markBackgroundColor = void 0;

          /** 盤面上Icon的寬，如果有倍數大的話，都以左上角為基準點往右下做縮放*/
          this.width = void 0;

          /** 盤面上Icon的高，如果有倍數大的話，都以左上角為基準點往右下做縮放*/
          this.height = void 0;

          /** 盤面上Icon的角度 */
          this.rotate = void 0;

          /** 盤面上Icon的CSS樣式 */
          this.style = void 0;

          /** 圖上文字 */
          this.text = void 0;

          /** 文字顏色 */
          this.textColor = void 0;

          /** 文字大小 */
          this.textSize = void 0;

          /** 文字水平位置 */
          this.textPosX = void 0;
          //'left' | 'center' | 'right' 預設: center

          /** 文字垂直位置 */
          this.textPosY = void 0;
          //'top' | 'center' | 'bottom' 預設: center

          /**圖示黯淡 */
          this.dark = void 0;

          /**圖示明亮 */
          this.light = void 0;

          /**圖示灰階 */
          this.gray = void 0;
        }

      }); //架構:
      // [
      //     [
      //         "gamemode",
      //         [["text", "一般遊戲"]]
      //     ],
      //     [
      //         "records",
      //         [
      //             [
      //                 "round",
      //                 [
      //                     [
      //                         "title",
      //                         [["text", "一般遊戲"], ["symbol", "-"], ["text", "回合"], ["number", 0]]
      //                     ],
      //                     [
      //                         "board",
      //                         {
      //                             "width": 5,
      //                             "height": 4,
      //                             "icons": [
      //                                 {
      //                                     "icon": "3",
      //                                     "x": 1,
      //                                     "y": 1,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "4",
      //                                     "x": 1,
      //                                     "y": 2,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "8",
      //                                     "x": 1,
      //                                     "y": 3,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "7",
      //                                     "x": 1,
      //                                     "y": 4,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "6",
      //                                     "x": 2,
      //                                     "y": 1,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "3",
      //                                     "x": 2,
      //                                     "y": 2,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "4",
      //                                     "x": 2,
      //                                     "y": 3,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "0",
      //                                     "x": 2,
      //                                     "y": 4,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "7",
      //                                     "x": 3,
      //                                     "y": 1,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "8",
      //                                     "x": 3,
      //                                     "y": 2,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "2",
      //                                     "x": 3,
      //                                     "y": 3,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "7",
      //                                     "x": 3,
      //                                     "y": 4,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "6",
      //                                     "x": 4,
      //                                     "y": 1,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "5",
      //                                     "x": 4,
      //                                     "y": 2,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "2",
      //                                     "x": 4,
      //                                     "y": 3,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "2",
      //                                     "x": 4,
      //                                     "y": 4,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "4",
      //                                     "x": 5,
      //                                     "y": 1,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "4",
      //                                     "x": 5,
      //                                     "y": 2,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "4",
      //                                     "x": 5,
      //                                     "y": 3,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 },
      //                                 {
      //                                     "icon": "5",
      //                                     "x": 5,
      //                                     "y": 4,
      //                                     "z": 1,
      //                                     "mark": false,
      //                                     "markColor": "#ff0000",
      //                                     "width": 1,
      //                                     "height": 1
      //                                 }
      //                             ]
      //                         }
      //                     ],
      //                     [],
      //                     //無中獎的版本
      //                     [
      //                         "details",
      //                         [
      //                             ["text", "無中獎"]
      //                         ]
      //                     ],
      //                     //有中獎的版本
      //                     [
      //                         "details",
      //                         [
      //                             [
      //                                 "line",
      //                                 [
      //                                     ["icon", 7],
      //                                     ["number", 10000],
      //                                     ["symbol", "*"],
      //                                     ["number", 0.5],
      //                                     ["symbol", "="],
      //                                     ["number", 5000],
      //                                     ["symbol", "("],
      //                                     ["text", "線"],
      //                                     ["number", 23],
      //                                     ["symbol", ")"]
      //                                 ]
      //                             ],
      //                             [
      //                             ]
      //                         ]
      //                     ]
      //                 ],
      //                 [
      //                     "summary",
      //                     [["text", "單次贏分"], ["symbol", "="], ["number", 0]]
      //                 ],
      //                 [],
      //                 [
      //                     "summary",
      //                     [["text", "總贏分"], ["symbol", "="], ["number", 0]]
      //                 ]
      //             ]
      //         ]
      //     ]
      // ],
      //     [],//一樣是從GameMode開始
      //     [],//然後records下去
      // ]


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=46f964ac79092de084b6e11ed0eeb1ef58a69760.js.map