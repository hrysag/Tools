System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, UniReel, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, UniReelView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUniReel(extras) {
    _reporterNs.report("UniReel", "./UniReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReel(extras) {
    _reporterNs.report("IReel", "./Interface/IReel", _context.meta, extras);
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
        constructor() {
          super(...arguments);

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

          for (var _reelID = 0; _reelID < this.reelList.length; _reelID++) {
            var reel = this.reelList[_reelID];
            reel.init(_reelID);
          }

          for (var _reelID2 = 0; _reelID2 < this.reelAmount; _reelID2++) {
            this._defaultRollingReelIDs[_reelID2] = _reelID2;
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


        startRoll(reelIDs) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (reelIDs === void 0) {
              reelIDs = _this._defaultRollingReelIDs;
            }

            _this.reset();

            _this._currentRollingReelIDs = reelIDs;

            for (var index = 0; index < _this._currentRollingReelIDs.length; index++) {
              var _reelID3 = _this._currentRollingReelIDs[index];

              _this.reelList[_reelID3].startRoll();

              if (_this.startSpaceTime >= 0 && !_this.isFastModeCallback()) {
                yield _this.waitStartSpace(_this.startSpaceTime);
              }
            }
          })();
        }
        /**
         * 呼叫所有滾輪停止，並不是直接停下
         * @param resultData 盤面資料
         * @param stopType 停止方式
         */


        stopRoll(resultData, stopType) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var promiseList = [];

            for (var index = 0; index < _this2.currentRollingReelIDs.length; index++) {
              var _reelID4 = _this2.currentRollingReelIDs[index];
              promiseList.push(_this2.stopOneReel(_reelID4, resultData[_reelID4], stopType));
            }

            if (_this2.isFastModeCallback()) {
              _this2.fastStopRoll();
            }

            yield Promise.all(promiseList);
          })();
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

            var currentReadyHandReelIndex = this._currentRollingReelIDs.indexOf(currentReadyHandReelID);

            if (currentReadyHandReelIndex !== -1) {
              for (var _reelID5 = 0; _reelID5 < this.reelAmount; _reelID5++) {
                var index = this._currentRollingReelIDs.indexOf(_reelID5);

                var haveReadyHand = false;

                if (index !== -1) {
                  haveReadyHand = index >= currentReadyHandReelIndex;
                }

                this._reelHaveReadyHandList[_reelID5] = haveReadyHand;
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
          for (var index = 0; index < reelIDList.length; index++) {
            var _reelID6 = reelIDList[index];

            var haveRolled = this._currentRollingReelIDs.includes(_reelID6);

            if (haveRolled) {
              this._reelHaveReadyHandList[_reelID6] = true;
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


        stopOneReel(reelID, resultData, stopType) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            _this3.setReelDataCallback(reelID, resultData);

            if (_this3.currentRollingReelIDs[0] === reelID) {
              //第一個滾動的滾輪判斷有無聽牌
              _this3.checkShowReadyHand(reelID);
            }

            yield _this3.reelList[reelID].stopRollAsync(stopType);

            _this3.oneReelRollEnd(reelID);
          })();
        }
        /**
         * 檢查滾輪是否聽牌，記得要先設置聽牌資料{@link setReadyHand}{@link setReadyHandList}
         * @param reelID 滾輪ID
         */


        checkShowReadyHand(reelID) {
          if (!this._reelIsReadyHandList[reelID]) {
            if (!this.isFastModeCallback()) {
              var haveReadyHand = this._reelHaveReadyHandList[reelID];

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
          var index = this.currentRollingReelIDs.indexOf(reelID);

          if (index + 1 < this.currentRollingReelIDs.length) {
            //檢查下一個滾輪有無聽牌
            var nextReelID = this.currentRollingReelIDs[index + 1];
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
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startSpaceTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07dae6d4648390071903f1f3828c477f84e5ed6e.js.map