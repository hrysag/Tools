System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, Enum, game, macro, UniReelView, StopType, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, UniSlotMachine;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUniReelView(extras) {
    _reporterNs.report("UniReelView", "./UniReelView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStopType(extras) {
    _reporterNs.report("StopType", "./UniReel", _context.meta, extras);
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
      Enum = _cc.Enum;
      game = _cc.game;
      macro = _cc.macro;
    }, function (_unresolved_2) {
      UniReelView = _unresolved_2.UniReelView;
    }, function (_unresolved_3) {
      StopType = _unresolved_3.StopType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8771efvKOxO87Aeqe2sfqUX", "UniSlotMachine", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'Enum', 'game', 'macro']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 管理資料傳輸以及View的表演
       */

      _export("UniSlotMachine", UniSlotMachine = (_dec = ccclass('UniSlotMachine'), _dec2 = property({
        type: _crd && UniReelView === void 0 ? (_reportPossibleCrUseOfUniReelView({
          error: Error()
        }), UniReelView) : UniReelView,
        visible: true
      }), _dec3 = property({
        type: Enum(_crd && StopType === void 0 ? (_reportPossibleCrUseOfStopType({
          error: Error()
        }), StopType) : StopType)
      }), _dec4 = property({
        type: CCFloat,
        visible: true,
        tooltip: '正常模式滾動時間，單位:秒',
        min: 0
      }), _dec5 = property({
        type: CCFloat,
        visible: true,
        tooltip: '快速模式滾動時間，單位:秒',
        min: 0
      }), _dec(_class = (_class2 = class UniSlotMachine extends Component {
        constructor() {
          super(...arguments);

          /**表演的view */
          _initializerDefineProperty(this, "_reelView", _descriptor, this);

          /**滾輪的停止類型 */
          _initializerDefineProperty(this, "stopType", _descriptor2, this);

          /**正常模式滾動時間，需滿足時間才可以停止，單位為秒 */
          _initializerDefineProperty(this, "_normalRollTime", _descriptor3, this);

          /**快速模式滾動時間，需滿足時間才可以停止，單位為秒 */
          _initializerDefineProperty(this, "_fastRollTime", _descriptor4, this);

          /**紀錄最終顯示的資料 */
          this._iconResultData = [];

          /**紀錄是否開始滾動
           * 
           * @example
           * 防止有些滾輪還未開始滾動，就呼叫了滾輪停止，所以使用await，確保所有滾輪都開始滾動後，才可以停止
           * ```ts
           *  public async startRoll(isTurboMode: boolean, reelIDs?: number[]): Promise<void> {
              this._isTurboMode = isTurboMode;
              await this._reelView.startRoll(reelIDs); //等待所有滾輪開始滾動再開始計時
              this._startRoll = true;
              this._startTime = game.totalTime;
          }
           * ```
          */
          this._startRoll = false;

          /**滾動時間滿足以及收到伺服器資料才能停止 */
          this._canStop = false;

          /**是否為Turbo模式 */
          this._isTurboMode = false;

          /**是否點擊了急停按鈕 */
          this._isStopClick = false;

          /**紀錄開始滾動的時間，用來計算滾動時間 */
          this._startTime = 0;
        }

        /**取得滾輪數量 */
        get reelAmount() {
          return this._reelView.reelAmount;
        }

        /**
         * //@ignore
         * 初始化view，串接{@link UniReelView.isFastModeCallback}
         */
        init() {
          this._reelView.init();

          this._reelView.isFastModeCallback = this.isFastMode.bind(this);
        }
        /**
         * 開始滾動表演
         * @param isTurboMode 是否為Turbo模式
         * @param reelIDs 要表演的滾輪ID，不傳入預設為所有滾輪
         */


        startRoll(isTurboMode, reelIDs) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.reset();

            _this._isTurboMode = isTurboMode;
            yield _this._reelView.startRoll(reelIDs); //等待所有滾輪開始滾動再開始計時

            _this._startRoll = true;
            _this._startTime = game.totalTime;
          })();
        }
        /**
         * 呼叫所有滾輪停止
         * @param resultData 滾輪結果的資料
         * 
         * @example
         * 利用 await 等待所有滾輪停止，再執行中獎表演
         * ```ts
         * await this._slotMachine.stopRoll(resultData);
         * this.playWinAnimation();
         * ```
         */


        stopRoll(resultData) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            _this2._iconResultData = [...resultData];
            yield _this2.canStopRoll();
            yield _this2._reelView.stopRoll(_this2._iconResultData, _this2.stopType);
          })();
        }
        /**
         * 設置聽牌資料給view，預設是從開始聽牌的滾輪聽到最後一輪
         * @param currentReadyHandReelID 開始聽牌的滾輪ID
         */


        setReadyHand(currentReadyHandReelID) {
          this._reelView.setReadyHand(currentReadyHandReelID);
        }
        /**
        * 直接設置哪些滾輪需要聽牌的資料給view
        * @param reelIDList 聽牌的滾輪ID列表
        */


        setReadyHandList(reelIDList) {
          this._reelView.setReadyHandList(reelIDList);
        }
        /**
         * 取得指定滾輪的icon數量
         * @param reelID 滾輪ID
         */


        getIconAmount(reelID) {
          return this._reelView.getIconAmount(reelID);
        }
        /**
         * 點擊急停按鈕時觸發，需要額外串接
         * @example
         * 監聽UI公版的急停按鈕
         * ```ts
         * class GameView{
         *      private slotMachine: UniSlotMachine = null;
         * 
         *      public init():void{
         *          GenericUIManager.instance.onStopBtnClickCallback = this.onStopBtnClick.bind(this);
         *      }
         * 
         *      private onStopBtnClick(): void {
                    this.slotMachine.stopRollCallBack();
                }
         * }
         * ```
         */


        stopRollCallBack() {
          this._isStopClick = true;

          if (this._canStop) {
            this._reelView.fastStopRoll();
          }
        }
        /**
         * 檢查是否可以停止滾輪，需滿足滾動時間、收到伺服器資料以及確保所有滾輪已開始滾動
         */


        canStopRoll() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              var callback = () => {
                var standardTime = _this3.isFastMode() ? _this3._fastRollTime : _this3._normalRollTime;
                standardTime *= 1000; //轉成毫秒

                var fillTime = game.totalTime - _this3._startTime >= standardTime; //滿足滾動時間

                var receiveData = _this3._iconResultData.length > 0; //收到伺服器資料

                if (fillTime && receiveData && _this3._startRoll) {
                  _this3.unschedule(callback);

                  _this3._canStop = true;
                  resolve();
                }
              };

              _this3.schedule(callback, 0, macro.REPEAT_FOREVER);
            });
          })();
        }
        /**
         * 是否為快速模式，開啟turbo模式或是點擊急停按鈕，都視為快速模式
         * @returns 是否為快速模式
         */


        isFastMode() {
          return this._isStopClick || this._isTurboMode;
        }
        /**
        * 重置所有記錄的資料，在{@link startRoll}時呼叫
        */


        reset() {
          this._iconResultData.length = 0;
          this._startRoll = false;
          this._canStop = false;
          this._isStopClick = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_reelView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "stopType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && StopType === void 0 ? (_reportPossibleCrUseOfStopType({
            error: Error()
          }), StopType) : StopType).RunoutData;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_normalRollTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_fastRollTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=018f07bcbec6ff512254f8c562d99793078adfbb.js.map