System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ProcessDataAfterServer, GameState, DefinitionGameConfigData, ProcessDataAfterServer1016, _crd, WILD_LIST, SCATTER_LIST, FG_TIMES_FOR_SCATTER;

  function _reportPossibleCrUseOfIProcessSlotData(extras) {
    _reporterNs.report("IProcessSlotData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProcessDataAfterServer(extras) {
    _reporterNs.report("ProcessDataAfterServer", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMatchWildGroupResult(extras) {
    _reporterNs.report("IMatchWildGroupResult", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicProcessSlotData(extras) {
    _reporterNs.report("BasicProcessSlotData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../DefinitionGameData1016/GameConfigInstance", _context.meta, extras);
  }

  _export("ProcessDataAfterServer1016", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ProcessDataAfterServer = _unresolved_2.ProcessDataAfterServer;
      GameState = _unresolved_2.GameState;
    }, function (_unresolved_3) {
      DefinitionGameConfigData = _unresolved_3.DefinitionGameConfigData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "baeb2S0H15KNpvj+nEL1Y2j", "ProcessDataAfterServer1016", undefined);

      __checkObsolete__(['Game']);

      ({
        WILD_LIST,
        SCATTER_LIST
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);
      FG_TIMES_FOR_SCATTER = {
        3: 7,
        4: 9,
        5: 11
      };

      _export("ProcessDataAfterServer1016", ProcessDataAfterServer1016 = class ProcessDataAfterServer1016 extends (_crd && ProcessDataAfterServer === void 0 ? (_reportPossibleCrUseOfProcessDataAfterServer({
        error: Error()
      }), ProcessDataAfterServer) : ProcessDataAfterServer) {
        constructor() {
          super();
          this._fgReelSet = new Set();
          //--吻合FG條件的軸集合(不重複)
          this._reSpinSet = new Set();
          //--吻合ReSpin+1條件的軸集合(不重複)
          this._fgCountForOpen = 0;
          //-- 符合FG條件後,所獲得的FG次數(開啟FG資格當下次數)
          this._hasFgOpen = false;
          //--是否已經滿足開啟FG條件
          this._hasReSpinOpen = false;
          //--是否已經滿足開啟FG條件
          this._fgCurrentTotalCount = 0;
          //--目前FG的次數(畫面要得累進數字)
          //=====20250907新增=====

          /**
           * 企劃希望在新局與新局之間,先做完面板動畫,再刷新上方的RS和FG次數
           * 因為原始設計是在processCalculatingRSandFG之後checkNextRound之前會刷新上方的RS和FG次數
           * 然後才會接續切換場景(checkNextRound之後)此時資料已經是新一把的資料了
           */
          //--緩存FG的條件資料,等到進入FG才會使用
          this._fgBuffer = void 0;
          //--緩存RS的條件資料,等到進入RS才會使用
          this._rsBuffer = void 0;
        }
        /**
         * 新局reset資料
         * @param data 
         */


        setServerReceiveData(data) {
          super.setServerReceiveData(data);
          this.clearAllData();
        }
        /**
         * TIPS:非常危險,小心使用這個API
         * <他控制整個資料的移動索引>..
         * 好像可以廢了..因為getCurrentFGOpenCount都可以直接拿目前開局的數字
         * @returns 
         */


        setRoundIdx() {
          var proxyIndx = super.setRoundIdx();

          if (proxyIndx && this.getCurrentState() === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            if (this._fgCurrentTotalCount > 0) this._fgCurrentTotalCount--;
          }

          return proxyIndx;
        }
        /**
        * 注意!!!FG開始..盤面要鎖定要清掉20250901
        */


        clearAllData() {
          this._fgReelSet.clear();

          this._reSpinSet.clear();

          this._hasFgOpen = false;
          this._hasReSpinOpen = false;
          this._fgCountForOpen = 0;
          this._fgCurrentTotalCount = 0;
        }

        clearCountForReSpin() {
          this._reSpinSet.clear();

          this._hasReSpinOpen = false;
        }

        clearCountForFg() {
          this._fgReelSet.clear();
        }

        checkWholeConsecutiveWildForReel(reelCards) {
          var targetWild = WILD_LIST[0];
          return reelCards[0] === targetWild && reelCards[1] === targetWild && reelCards[2] === targetWild && reelCards[3] === targetWild;
        }
        /**
         * 取得在FG當中獲得的FG+1條件軸
         * 注意!FG當中之前NG->RE的盤會清掉
         * @returns 
         */


        getFGRoundFGConditionReel() {
          var reels = [];
          var currentData = this.getCurrentData();
          var reel2ds = currentData.reelInfo.afterMovedSymbolData2ds.length > 0 ? currentData.reelInfo.afterMovedSymbolData2ds : currentData.reelInfo.symbolData2ds;

          for (var i = 0; i < reel2ds.length; i++) {
            if (this.checkWholeConsecutiveWildForReel(reel2ds[i])) {
              if (this._fgReelSet.has(i)) continue;

              this._fgReelSet.add(i);

              reels.push(i);
            }
          }

          return reels;
        }

        checkOpenReSpinCondition() {
          var conditionReels = this.getRoundReSpinConditionReel();

          if (conditionReels.length > 0) {
            this._hasReSpinOpen = true;
          } else {
            this._hasReSpinOpen = false;
          }

          return this._hasReSpinOpen;
        }
        /**
         * 20250917-應付企劃需求新增的功能
         * 1.重新選轉次數面板要在<切換場景後>才會顯示
         * 2.但切換場景是需要<顯示RS次數面板>退場時才會切換
         * 3.所以這邊要先預估出RS的次數,且不能影響到原先的Set資料
         * 4.因為外層會再呼叫getReSpinCountForRound()來取得RS的次數(這邊先使用set資料後面進來就會被剃除)
         * TIPS:
         * 1.這個方法只會在<切換場景後>才會執行
         * 2.所以這個方法只會執行一次
         * 3.<這邊呼叫已經是CheckNextRound之後>所以資料已經是下一局的資料,要拿前一局的資料
         */


        preCalculateReSpinCount() {
          var reels = [];
          var localSet = new Set();
          var currentData = this.getPrevData(); //--拿前一局的資料

          var reel2ds = currentData.reelInfo.afterMovedSymbolData2ds.length > 0 ? currentData.reelInfo.afterMovedSymbolData2ds : currentData.reelInfo.symbolData2ds;

          for (var i = 0; i < reel2ds.length; i++) {
            if (this.checkWholeConsecutiveWildForReel(reel2ds[i])) {
              if (localSet.has(i)) continue;
              localSet.add(i);
              reels.push(i);
            }
          }

          return reels;
        } //--檢查滿足開啟FG的條件


        checkOpenFGCondition() {
          var currentData = this.getCurrentData();

          var hasScatter = row => row.includes(SCATTER_LIST[0]);

          var hasScatterOrWild = row => row.includes(SCATTER_LIST[0]) || row.includes(WILD_LIST[0]);

          var reel2ds = currentData.reelInfo.afterMovedSymbolData2ds.length > 0 ? currentData.reelInfo.afterMovedSymbolData2ds : currentData.reelInfo.symbolData2ds;
          var row0 = hasScatter(reel2ds[0]);
          var row1 = hasScatterOrWild(reel2ds[1]);
          var row2 = hasScatterOrWild(reel2ds[2]);
          var flag = false;

          if (row0 && row1 && row2) {
            //this._hasFgOpen = true;
            flag = true; //return true;
          }

          if (!this._hasFgOpen && flag) this._hasFgOpen = true; //--只要之前沒開過FG,現在條件成立就開啟

          return flag; //return this._hasFgOpen;
        }
        /**
        *  用於NG當中找出獲得FG條件的軸
        *  １　２　３　４　５
           Ｓ　Ｗ　Ｗ　Ｗ　Ｓ
           計算FG的局數是從最左輪開始(也就是說第1軸沒有的時候就條件不成立)
           １　２　３　４　５
           X　Ｗ　Ｗ　Ｗ　Ｓ
           這樣就是無法開啟FG
        * @returns 
        */


        getFgCountInHasOpenFg() {
          var reels = [];
          var hopeReel = [];
          var currentData = this.getCurrentData();
          var reel2ds = currentData.reelInfo.afterMovedSymbolData2ds.length > 0 ? currentData.reelInfo.afterMovedSymbolData2ds : currentData.reelInfo.symbolData2ds;

          for (var i = 0; i < reel2ds.length; i++) {
            if (reel2ds[i].includes(SCATTER_LIST[0]) || reel2ds[i].includes(WILD_LIST[0])) {
              reels.push(i);

              if (i === 0) {
                hopeReel.push(i);
              } else {
                //--第0軸條件達成
                if (hopeReel.length > 0) {
                  hopeReel.push(i);
                }
              }
            } else {
              break; //--一旦中斷就不繼續往下找
            }
          }

          return {
            continuous: reels,
            hopeReel: hopeReel
          };
        }
        /**
         * 20260202-新增
         * 在位滿足前三軸有足以開啟FG的條件下,必須檢查SC的軸
         * @returns 
         */


        getScInBoardWithContinuous() {
          var hopeReel = [];
          var currentData = this.getCurrentData();
          var reel2ds = currentData.reelInfo.afterMovedSymbolData2ds.length > 0 ? currentData.reelInfo.afterMovedSymbolData2ds : currentData.reelInfo.symbolData2ds;

          if (reel2ds[0].includes(SCATTER_LIST[0])) {
            hopeReel.push(0);

            if (reel2ds[1].includes(SCATTER_LIST[0])) {
              hopeReel.push(1);
            }
          }

          return {
            hopeReel: hopeReel
          };
        }

        getFinalFGTimes(value) {
          var finalFgCount = undefined;
          var maxKey = -1; // 找到小於等於 targetCount 的最大鍵

          for (var _key in FG_TIMES_FOR_SCATTER) {
            var numKey = parseInt(_key);

            if (numKey <= value && numKey > maxKey) {
              maxKey = numKey;
              finalFgCount = FG_TIMES_FOR_SCATTER[numKey];
            }
          }

          if (finalFgCount == undefined) {
            finalFgCount = 0;
          }

          return finalFgCount;
        } //--進fg之後用的

        /**
         * 取FG當中獲得整軸wild的條件數量
         * 有就會FG+1
         * @returns 
         */


        getRoundReSpinConditionReel() {
          var reels = [];
          var currentData = this.getCurrentData();
          var reel2ds = currentData.reelInfo.afterMovedSymbolData2ds.length > 0 ? currentData.reelInfo.afterMovedSymbolData2ds : currentData.reelInfo.symbolData2ds;

          for (var i = 0; i < reel2ds.length; i++) {
            if (this.checkWholeConsecutiveWildForReel(reel2ds[i])) {
              if (this._reSpinSet.has(i)) continue;

              this._reSpinSet.add(i);

              reels.push(i);
            }
          }

          return reels;
        }
        /**
         * 獲取重轉次數
         * @returns 
         */


        getReSpinCountForRound() {
          if (this._rsBuffer) {
            // 如果已經有 buffer，先回傳 buffer
            return this._rsBuffer;
          }

          var currentState = this.getCurrentState();
          var conditionReels; //--吻合當下條件的軸

          var returnData = {
            reels: [],
            total: 0
          };

          if (!this._hasReSpinOpen) {
            if (this.checkOpenReSpinCondition()) {
              //--拿數量對照表
              conditionReels = Array.from(this._reSpinSet);
              returnData.reels = conditionReels; //--初始數量(企劃書只有寫這樣)

              if (conditionReels.length == 2) {
                returnData.total = 2;
              } else if (conditionReels.length == 3) {
                returnData.total = 3;
              }
            }
          } else if (currentState !== (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            conditionReels = this.getRoundReSpinConditionReel();
            returnData.reels = conditionReels;
            returnData.total = conditionReels.length;
          }

          return returnData;
        }
        /**
         * 進入RS的時候,拿目前獲得的RS次數
         * TIPS:
         * 不要透過底層方法getTotalCountOfState 來獲取,會拿到整個round的RS次數
         */


        getCurrentRSOpenCount() {
          /**
           * 局間轉換
           * TIPS:
           * 企劃要求count面板要等到切換完場景後才會啟動
           * 所以這邊要先預先估算出reSpin的次數
           */

          /*
          const prevState = this.getPrevState();
          const currentSate = this.getCurrentState();
          if (currentSate != prevState) {
                let conditionReels: number[] = this.preCalculateReSpinCount();
              if (conditionReels.length == 2) {
                  return 2;
              } else if (conditionReels.length >= 3) {
                  return 3;
              }
          }
          return 0;
          */
          var conditionReels = Array.from(this._reSpinSet);

          if (conditionReels.length == 2) {
            return 2;
          } else if (conditionReels.length == 3) {
            return 3;
          }

          return 0;
        }
        /**
         * 進入FG的時候,顯示面板(跳出來大的)拿目前獲得的FG次數
         * TIPS:
         * 不要透過底層方法getTotalCountOfState 來獲取,會拿到整個round的FG次數
         * 這個有bug.....因為在RS當中會累加FG次數??嗎?????????
         */


        getCurrentFGOpenCount() {
          return this._fgCountForOpen;
        }
        /**
         * FG當中,UI面板上面的顯示數字
         * @returns 
         */


        getCurrentFGTotalCount() {
          return this._fgCurrentTotalCount;
        } // === 暫存當前 round 的計算結果（但不消耗）===


        stashRoundResults() {
          // 只計算一次，避免重複蓋掉
          if (!this._fgBuffer) {
            this._fgBuffer = this.getFgCountForRound();
          }

          if (!this._rsBuffer) {
            this._rsBuffer = this.getReSpinCountForRound();
          }
        }

        consumeRoundResults() {
          var _this$_fgBuffer, _this$_rsBuffer;

          var result = {
            fg: (_this$_fgBuffer = this._fgBuffer) != null ? _this$_fgBuffer : {
              reels: [],
              total: 0
            },
            rs: (_this$_rsBuffer = this._rsBuffer) != null ? _this$_rsBuffer : {
              reels: [],
              total: 0
            }
          };
          this._fgBuffer = null;
          this._rsBuffer = null;
          return result;
        }
        /**
         * 20260126-新增
         * 取得 FG buffer 的值（如果存在），不進行計算或修改狀態。
         * @returns FG buffer 或 null
         */


        getFGBuffer() {
          return this._fgBuffer;
        }
        /**
         * 20260126-新增
         * 取得 RS buffer 的值（如果存在），不進行計算或修改狀態。
         * @returns RS buffer 或 null
         */


        getRSBuffer() {
          return this._rsBuffer;
        }

        checkHasFGBufferData() {
          return this._fgBuffer != null;
        }
        /**
         * 獲取本次盤面FG次數(新獲得)
         * @returns reels-當前獲得的軸 total-當前獲得的次數(每次的數字都是要累加用的)
         */


        getFgCountForRound() {
          /*
          //--20260130調整流程取消
          if (this._fgBuffer) {
              // 如果已經有 buffer，先回傳 buffer
              return this._fgBuffer;
          }*/
          var currentState = this.getCurrentState();
          var conditionReels; //--吻合當下條件的軸

          var returnData = {
            reels: [],
            total: 0,
            hope: []
          };

          if (
          /*!this._hasFgOpen &&*/
          currentState != (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            if (this.checkOpenFGCondition()) {
              var fgData = this.getFgCountInHasOpenFg();
              conditionReels = fgData.continuous; //--找符合條件的軸

              var fgCount = this.getFinalFGTimes(conditionReels.length);
              this._fgCurrentTotalCount += fgCount; //--目前FG的次數(畫面要得累進數字)

              this._fgCountForOpen += fgCount;
              returnData.reels = conditionReels;
              returnData.total = fgCount;
              returnData.hope = fgData.hopeReel;
            } else {
              //--在未滿足可以開啟FG的條件下(checkOpenFGCondition是湊三軸,這裡就是檢查前兩軸sc即可)
              var hopeReelNoOpen = this.getScInBoardWithContinuous();
              returnData.hope = hopeReelNoOpen.hopeReel;
            }
          } else if (
          /*this._hasFgOpen && */
          currentState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            //---已經是FG當中
            conditionReels = this.getFGRoundFGConditionReel(); //--要整軸Wild才算符合條件

            returnData.reels = conditionReels;

            if (conditionReels.length > 0) {
              returnData.total = conditionReels.length;
              this._fgCurrentTotalCount += conditionReels.length; //--目前FG的次數(畫面要得累進數字)
            }
          }

          return returnData;
        } //--先拿是否有位移的盤面資來來確認是否有位移


        checkNeedToMovement() {
          var currentData = this.getCurrentData();
          return currentData.reelInfo.afterMovedSymbolData1ds.length > 0;
        }
        /**
         * 獲取每個捲軸的scatter資料,該軸有scatter就會回傳
         * @param reelId 
         * @returns 
         */


        getReelScatterData(reelId) {
          var reelData = this.getCurrentData();
          var reel2ds = reelData.reelInfo.symbolData2ds;

          if (reel2ds[reelId].includes(SCATTER_LIST[0])) {
            return true;
          }

          return false;
        }

        getScatterByMultiReel(reelIds, usePreviousData) {
          var scatterCountReel = [];
          var reelData = usePreviousData ? this.getPrevData() : this.getCurrentData();
          var reel2ds = reelData.reelInfo.symbolData2ds;

          for (var reelId of reelIds) {
            if (reel2ds[reelId].includes(SCATTER_LIST[0])) {
              scatterCountReel.push(reelId);
            }
          }

          return scatterCountReel;
        }
        /**
         * 獲取每個捲軸的wild資料,該軸有wild就會回傳
         */


        getReelWildData(reelId) {
          var reelData = this.getCurrentData();
          var wildInfo; //--這樣寫有問題,wildCount是算整條1*4的wild數量,不一定會大於0

          var wildData = reelData.reelInfo.wildGroup;

          for (var wild of wildData) {
            if (wild.reelIndex === reelId) {
              wildInfo = wild;
              break;
            }
          }
          /*
          if (reelData.reelInfo.wildCount > 0) {
              const wildData = reelData.reelInfo.wildGroup;
              for (const wild of wildData) {
                  if (wild.reelIndex === reelId) {
                      wildInfo = wild;
                      break;
                  }
              }
          }*/


          return wildInfo;
        }

        getAllReelWildData() {
          var reelData = this.getCurrentData();
          var wildGroup = []; //if (reelData.reelInfo.wildCount > 0) {

          var wildData = reelData.reelInfo.wildGroup;

          for (var wild of wildData) {
            wildGroup.push(wild);
          } //}


          return wildGroup.length > 0 ? wildGroup : null;
        }

        checkNeedToMoveWild() {
          var reelData = this.getCurrentData();
          return reelData.reelInfo.afterMovedSymbolData1ds.length > 0 ? true : false;
        }
        /**
         * 取得wild移動軸的資料[1,2]=>第一軸和第二軸會移動
         * @returns 
         */


        getMovementReelIndexData() {
          var reelData = this.getCurrentData();

          if (reelData.reelInfo.wildCount <= 0 && reelData.reelInfo.wildIndex.length <= 0) {
            return null;
          } else {
            //--先排序,小->大(server資料是沒有排序的)
            var aryWildIndex = [...reelData.reelInfo.wildIndex];
            aryWildIndex = aryWildIndex.sort((a, b) => a - b);
            return aryWildIndex;
          }
        }
        /**
         * 取得本次盤面位移的wild資料
         * TIPS:
         * 1.先從getReSpinCountForRound()取得本次盤面獲得的重轉軸
         * <有重轉軸再來拿資料>
         * 2.再從getAllReelWildData()取得本次盤面獲得的wild資料
         * @returns 
         */


        getWildMovementData() {
          var movement = this.getMovementReelIndexData(); //--沒有位移就沒有資料

          var group = this.getAllReelWildData(); //--這個是只要有wild就會有資料紀錄

          return {
            wildMovement: movement,
            wildGroup: group
          };
        }
        /**
         * 解析資料的haveForecast算錯了,不是算wild的數量,而是要算出來這盤有沒有啟動FG
         * <但FG的條件沒算錯>
         * 這是開啟進入FG的條件(1.從左算起,連續3軸獲得scatter)
         * wild只會在123軸出現
         * PS-先檢查是否連續三軸開出scatter
         *  PS:wild只會在123軸出現
         * 所以要計算第0軸是否為scatter否則連續3個scatter不成立
         * wild不用出現整條
         * S+S+S=OK
         * S+W+S=OK
         * S+S+W=OK
         * W+S+S=NG
         * 這邊沿用processServer的混和條件內容來修改
         * 只要算前3軸就可以了
         */


        getReadyToHandForThisRound() {
          //const 
          var readyToHandData = this.getCurrentData();
          var currentState = this.getCurrentState(); //--檢查目前的狀態

          var reel2ds = readyToHandData.reelInfo.symbolData2ds;
          var hasFgOpenConditions = []; //--可以聽牌的條件軸

          var row0 = reel2ds[0];
          var row1 = reel2ds[1];
          var row2 = reel2ds[2];
          var row3 = reel2ds[3];

          var hasScatter = row => row.includes(SCATTER_LIST[0]);

          var hasScatterOrWild = row => row.includes(SCATTER_LIST[0]) || row.includes(WILD_LIST[0]); //--正常情況下
          //if (this._hasFgOpen) return hasFgOpenConditions;//--已經開啟FG就不需要再算聽牌


          if (currentState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) return hasFgOpenConditions; //--已經開啟FG就不需要再算聽牌

          /**
           * 前兩軸滿足條件開始發動聽牌(必要條件:從左index=0算起,連續3軸)
           * 需要連續滿足條件才能逐一開啟
           *  */

          if (hasScatter(row0)) {
            if (hasScatterOrWild(row1)) {
              hasFgOpenConditions.push(2);

              if (hasScatterOrWild(row2)) {
                hasFgOpenConditions.push(3);

                if (hasScatterOrWild(row3)) {
                  hasFgOpenConditions.push(4);
                }
              }
            } //--洪荒之力的修改阿..完全跟企畫書不一樣了
            //if (hasFgOpenConditions.length > 1) {


            if (hasFgOpenConditions.length > 0) {
              //---這邊已經是有滿足聽牌條件了..所以要把前面的加上去
              //---這裡是為了湊出<非黃色框的效果才要這樣塞,可是這樣會導致它就放出黃色框了>
              if (hasScatterOrWild(row1)) hasFgOpenConditions.unshift(1);
              hasFgOpenConditions.unshift(0); //--第0軸顯示聽牌效果
            }
            /**
             * RS會觸發的特殊條件
             * S X S/W S/W....
             * 第一軸沒有但後面居然湊滿連續條件
             */


            if (currentState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).RE_SPINE && hasFgOpenConditions.length === 0) {
              if (hasScatterOrWild(row2)) {
                hasFgOpenConditions.push(1);
                hasFgOpenConditions.push(3);

                if (hasScatterOrWild(row3)) {
                  hasFgOpenConditions.push(4);
                }
              }

              if (hasFgOpenConditions.length >= 2) {
                hasFgOpenConditions.unshift(0); //--第0軸顯示聽牌效果
              }
            }
          } else {
            /**
             * RS會觸發的特出條件
             * X S/W S/W....
             * 第一軸沒有S但是後面吻合條件之下,
             * 第一軸要開啟聽牌效果-幹你媽的死企劃,企劃書根本沒寫清楚
             */
            if (currentState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).RE_SPINE) {
              if (hasScatterOrWild(row1) && hasScatterOrWild(row2)) {
                hasFgOpenConditions.push(0); //--第一軸吻合聽牌條件(這邊已經不可能達成條件了,因為第0軸他是沒有S)
              }
            }
          }

          return hasFgOpenConditions;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0694aeedada0572626d2da477f222afcefff10c5.js.map