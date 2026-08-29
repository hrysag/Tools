System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, UniReel, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, UniReelView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUniReel(extras) {
    _reporterNs.report("UniReel", "../../../ReelTemplate/ReelTemplate_3/Scripts/UniReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReel(extras) {
    _reporterNs.report("IReel", "../../../ReelTemplate/ReelTemplate_3/Scripts/Interface/IReel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      UniReel = _unresolved_2.UniReel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c111W77dBNI5m0M8oRuj3o", "UniReelView", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 負責一局的滾輪表演
       */

      _export("UniReelView", UniReelView = (_dec = ccclass('UniReelView'), _dec2 = property(_crd && UniReel === void 0 ? (_reportPossibleCrUseOfUniReel({
        error: Error()
      }), UniReel) : UniReel), _dec3 = property({
        type: CCFloat,
        tooltip: '開始滾動間隔的時間，小於0代表一起滾動'
      }), _dec(_class = (_class2 = class UniReelView extends Component {
        constructor(...args) {
          super(...args);

          /**紀錄所有滾輪*/
          _initializerDefineProperty(this, "reelList", _descriptor, this);

          /**開始滾動間隔的時間，小於0代表一起滾動，單位為秒*/
          _initializerDefineProperty(this, "startSpaceTime", _descriptor2, this);

          /**
           * 是否為快速模式，包含turbo以及按下即停按鈕
           * 
           * 需要與SlotMachine做串接
           */
          this.isFastModeCallback = null;

          /**
           * 設定滾輪資料，在滾輪停止前觸發
           * @param reelID 滾輪ID
           * @param data 滾輪資料
           * 
           * @example
           * 在停輪前設定滾輪資料
           * ```ts
           *  protected async stopOneReel(reelID: number, resultData: number[], stopType: number): Promise<void> {
              this.setReelDataCallback(reelID, resultData);
              await this.reelList[reelID].stopRollAsync(stopType);
              this.oneReelRollEnd(reelID);
          }
           * ```
           */
          this.setReelDataCallback = null;

          /**
           * 當滾輪開始聽牌時觸發
           * @param reelID 滾輪ID
           */
          this.showReadyHandCallback = null;

          /**
           * 當滾輪結束聽牌時觸發
           * @param reelID 滾輪ID
           */
          this.hideReadyHandCallback = null;

          /**內部使用，紀錄當前滾動的滾輪ID*/
          this._currentRollingReelIDs = [];

          /**紀錄滾輪是否需要ReadyHand的狀態*/
          this._reelHaveReadyHandList = [];

          /**紀錄滾輪是否進入ReadyHand的狀態*/
          this._reelIsReadyHandList = [];

          /**紀錄當前開始聽牌的滾輪ID，預設大於等於他的滾輪才會開始聽牌*/
          this._currentReadyHandReelID = -1;

          /**內部使用，紀錄預設滾輪ID，假設滾輪數量為3，預設為[0, 1, 2]，由小到大開始滾動到停止*/
          this._defaultRollingReelIDs = [];
        }

        /**滾輪數量，取得{@link reelList}的長度*/
        get reelAmount() {
          return this.reelList.length;
        }

        /**取得當前滾動的滾輪ID*/
        get currentRollingReelIDs() {
          return this._currentRollingReelIDs;
        }

        /**取得預設滾輪ID，由小到大開始滾動到停止*/
        get defaultRollingReelIDs() {
          return this._defaultRollingReelIDs;
        }
        /**
         * 初始化所有滾輪，並設置{@link UniReel.onMoveOnceStart}的監聽，用來觸發滾輪開始聽牌
         */


        init() {
          this._reelHaveReadyHandList = Array.from({
            length: this.reelAmount
          }, () => false);
          this._reelIsReadyHandList = Array.from({
            length: this.reelAmount
          }, () => false);

          for (let reelID = 0; reelID < this.reelList.length; reelID++) {
            let reel = this.reelList[reelID];
            reel.init(reelID);
          }

          for (let reelID = 0; reelID < this.reelAmount; reelID++) {
            this._defaultRollingReelIDs[reelID] = reelID;
          }
        }
        /**
         * 重置所有紀錄，開始滾動所有滾輪
         * 
         * 如果{@link startSpaceTime}大於等於0且不是快速模式的話，則會依序間隔時間滾動滾輪
         * @param reelIDs 要開始滾動的滾輪ID，預設為{@link defaultRollingReelIDs}
         * 
         * @example
         * 為了確保所有滾輪都開始滾動後，才可以停止，可以使用await 
         * ```ts
         * public async startRoll(isTurboMode: boolean, reelIDs?: number[]): Promise<void> {
                 this.reset();
                 this._isTurboMode = isTurboMode;
                 await this._reelView.startRoll(reelIDs); //等待所有滾輪開始滾動再開始計時
                 this._startRoll = true;
                 this._startTime = game.totalTime;
             }
         * ```
         */


        async startRoll(reelIDs = this._defaultRollingReelIDs) {
          this.reset();
          this._currentRollingReelIDs = reelIDs;

          for (let index = 0; index < this._currentRollingReelIDs.length; index++) {
            let reelID = this._currentRollingReelIDs[index];
            this.reelList[reelID].startRoll();

            if (this.startSpaceTime >= 0 && !this.isFastModeCallback()) {
              await this.waitStartSpace(this.startSpaceTime);
            }
          }
        }
        /**
         * 呼叫所有滾輪停止，並不是直接停下
         * @param resultData 盤面資料
         * @param stopType 停止方式
         */


        async stopRoll(resultData, stopType) {
          let promiseList = [];

          for (let index = 0; index < this.currentRollingReelIDs.length; index++) {
            let reelID = this.currentRollingReelIDs[index];
            promiseList.push(this.stopOneReel(reelID, resultData[reelID], stopType));
          }

          if (this.isFastModeCallback()) {
            this.fastStopRoll();
          }

          await Promise.all(promiseList);
        }
        /**
         * 急停時呼叫，呼叫所有滾輪急停，必須實作
         */


        /**
         * 取得指定滾輪的icon數量
         * @param reelID 滾輪ID
         * @returns icon數量
         */
        getIconAmount(reelID) {
          return this.reelList[reelID].iconAmount;
        }
        /**
         * 設置滾輪是否聽牌的狀態，預設是從開始聽牌的滾輪聽到最後一輪
         * @param currentReadyHandReelID 開始聽牌的滾輪ID
         * 
         * @example
         * 在呼叫滾輪停止前，先設定聽牌資料
         * ```ts
        public async stopRollExample(currentReadyHandReelID: number, resultData: number[][]): Promise<void> {
            this.setReadyHand(currentReadyHandReelID);
            await this.stopRoll(resultData, this.stopType);
        }
         * ```
         */


        setReadyHand(currentReadyHandReelID) {
          if (currentReadyHandReelID >= 0) {
            this._currentReadyHandReelID = currentReadyHandReelID;

            let currentReadyHandReelIndex = this._currentRollingReelIDs.indexOf(currentReadyHandReelID);

            if (currentReadyHandReelIndex !== -1) {
              for (let reelID = 0; reelID < this.reelAmount; reelID++) {
                let index = this._currentRollingReelIDs.indexOf(reelID);

                let haveReadyHand = false;

                if (index !== -1) {
                  haveReadyHand = index >= currentReadyHandReelIndex;
                }

                this._reelHaveReadyHandList[reelID] = haveReadyHand;
              }
            }
          }
        }
        /**
         * 直接設置哪些滾輪是否聽牌的狀態
         * @param reelIDList 聽牌的滾輪ID列表
         * 
         * @example
         * 在呼叫滾輪停止前，先設定聽牌資料
         * ```ts
        public async stopRollExample(reelIDList: number[], resultData: number[][]): Promise<void> {
            this.setReadyHandList(reelIDList);
            await this.stopRoll(resultData, this.stopType);
        }
         * ```
         */


        setReadyHandList(reelIDList) {
          for (let index = 0; index < reelIDList.length; index++) {
            const reelID = reelIDList[index];

            let haveRolled = this._currentRollingReelIDs.includes(reelID);

            if (haveRolled) {
              this._reelHaveReadyHandList[reelID] = true;
            }
          }
        }
        /**
         * 呼叫單個滾輪停止
         * 
         * 在滾輪停止前，先設定盤面資料，再呼叫滾輪停止
         * @param reelID 滾輪ID
         * @param resultData 盤面資料
         * @param stopType 停輪方式
         */


        async stopOneReel(reelID, resultData, stopType) {
          this.setReelDataCallback(reelID, resultData);

          if (this.currentRollingReelIDs[0] === reelID) {
            //第一個滾動的滾輪判斷有無聽牌
            this.checkShowReadyHand(reelID);
          }

          await this.reelList[reelID].stopRollAsync(stopType);
          this.oneReelRollEnd(reelID);
        }
        /**
         * 檢查滾輪是否聽牌，記得要先設置聽牌資料{@link setReadyHand}{@link setReadyHandList}
         * @param reelID 滾輪ID
         */


        checkShowReadyHand(reelID) {
          if (!this._reelIsReadyHandList[reelID]) {
            if (!this.isFastModeCallback()) {
              let haveReadyHand = this._reelHaveReadyHandList[reelID];

              if (haveReadyHand) {
                this.showReadyHandCallback(reelID);
                this._reelIsReadyHandList[reelID] = true;
              }
            }
          }
        }
        /**
         * 檢查滾輪聽牌效果是否有被關閉
         * @param reelID 滾輪ID
         */


        checkHideReadyHand(reelID) {
          if (this._reelIsReadyHandList[reelID]) {
            this.hideReadyHandCallback(reelID);
            this._reelIsReadyHandList[reelID] = false;
          }
        }
        /**
         * 單個滾輪停止後呼叫，檢查聽牌是否已關閉，並檢查下一個滾輪是否聽牌
         * @param reelID 滾輪ID
         */


        oneReelRollEnd(reelID) {
          this.checkHideReadyHand(reelID);
          let index = this.currentRollingReelIDs.indexOf(reelID);

          if (index + 1 < this.currentRollingReelIDs.length) {
            //檢查下一個滾輪有無聽牌
            let nextReelID = this.currentRollingReelIDs[index + 1];
            this.checkShowReadyHand(nextReelID);
          }
        }
        /**
         * 重置所有記錄，在{@link startRoll}時呼叫
         */


        reset() {
          this._reelHaveReadyHandList = Array.from({
            length: this.reelAmount
          }, () => false);
          this._reelIsReadyHandList = Array.from({
            length: this.reelAmount
          }, () => false);
          this._currentReadyHandReelID = -1;
        }
        /**
         * 滾輪開始滾動的間隔時間計時器
         * @param time 等待時間
         * @returns 
         */


        waitStartSpace(time) {
          return new Promise(resolve => {
            this.scheduleOnce(() => {
              resolve();
            }, time);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reelList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startSpaceTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fd65b9a1f6b90301d9041fc04706cea1fcda35a6.js.map