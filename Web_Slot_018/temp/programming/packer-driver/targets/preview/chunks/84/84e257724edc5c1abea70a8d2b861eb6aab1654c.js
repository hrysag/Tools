System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, UniReel, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, UniReelView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "reelList", _descriptor, this);

          _initializerDefineProperty(this, "startSpaceTime", _descriptor2, this);

          this.isFastModeCallback = null;
          this.setReelDataCallback = null;
          this.showReadyHandCallback = null;
          this.hideReadyHandCallback = null;
          this._currentRollingReelIDs = [];
          this._reelHaveReadyHandList = [];
          //紀錄滾輪是否需要進入ReadyHand的狀態
          this._reelIsReadyHandList = [];
          //紀錄滾輪是否進入ReadyHand的狀態
          this._defaultRollingReelIDs = [];
          this._currentReadyHandReelID = -1;
          this.reelsIsRollEnd = [];
        }

        get reelAmount() {
          return this.reelList.length;
        }

        //紀錄當前滾動的滾輪ID
        get currentRollingReelIDs() {
          return this._currentRollingReelIDs;
        }

        get defaultRollingReelIDs() {
          return this._defaultRollingReelIDs;
        }

        init() {
          this._reelHaveReadyHandList = Array.from({
            length: this.reelAmount
          }, () => false);
          this._reelIsReadyHandList = Array.from({
            length: this.reelAmount
          }, () => false);
          this.reelsIsRollEnd = Array.from({
            length: this.reelAmount
          }, () => false);

          for (var index = 0; index < this.reelList.length; index++) {
            var reel = this.reelList[index];
            reel.init(index);
            reel.onMoveOnceStart = this.onReelMoveOneStart.bind(this, index);
          }

          for (var _index = 0; _index < this.reelAmount; _index++) {
            this._defaultRollingReelIDs[_index] = _index;
          }
        }

        startRoll(reelIDs) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (reelIDs === void 0) {
              reelIDs = _this._defaultRollingReelIDs;
            }

            _this.reset();

            _this._currentRollingReelIDs = reelIDs;

            for (var index = 0; index < _this._currentRollingReelIDs.length; index++) {
              var _reelID = _this._currentRollingReelIDs[index];

              _this.reelList[_reelID].startRoll();

              if (_this.startSpaceTime >= 0 && !_this.isFastModeCallback()) {
                yield _this.waitStartSpace(_this.startSpaceTime);
              }
            }
          })();
        }
        /**
         * 只是呼叫滾輪暫停，並不是直接停下
         */


        stopRoll(resultData, stopType) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var promiseList = [];

            for (var index = 0; index < _this2.currentRollingReelIDs.length; index++) {
              var _reelID2 = _this2.currentRollingReelIDs[index];
              promiseList.push(_this2.stopOneReel(_reelID2, resultData[_reelID2], stopType));
            }

            if (_this2.isFastModeCallback()) {
              _this2.fastStopRoll();
            }

            yield Promise.all(promiseList);
          })();
        }
        /**
         * 按下即停的時候呼叫
         */


        fastStopRoll() {
          for (var index = 0; index < this._currentRollingReelIDs.length; index++) {
            var _reelID3 = this._currentRollingReelIDs[index];

            this.reelList[_reelID3].fastStopRoll();
          }
        }

        getIconAmount(reelID) {
          return this.reelList[reelID].iconAmount;
        }

        setReadyHand(currentReadyHandReelID) {
          if (currentReadyHandReelID >= 0) {
            this._currentReadyHandReelID = currentReadyHandReelID;

            var currentReadyHandReelIndex = this._currentRollingReelIDs.indexOf(currentReadyHandReelID);

            if (currentReadyHandReelIndex !== -1) {
              for (var _reelID4 = 0; _reelID4 < this.reelAmount; _reelID4++) {
                var index = this._currentRollingReelIDs.indexOf(_reelID4);

                var haveReadyHand = false;

                if (index !== -1) {
                  haveReadyHand = index >= currentReadyHandReelIndex;
                }

                this._reelHaveReadyHandList[_reelID4] = haveReadyHand;
              }
            }
          }
        }

        stopOneReel(reelID, resultData, stopType) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            _this3.setReelDataCallback(reelID, resultData);

            yield _this3.reelList[reelID].stopRollAsync(stopType);

            _this3.oneReelRollEnd(reelID);
          })();
        }
        /**
         * 預設是從聽牌滾輪開始聽到最後輪，如果要更改條件可以在reelHaveReadyHand這個function裡面修改
         * @param reelID 滾輪ID
         */


        checkShowReadyHand(reelID) {
          if (!this._reelIsReadyHandList[reelID]) {
            if (!this.isFastModeCallback()) {
              var haveReadyHand = this._reelHaveReadyHandList[reelID];

              var index = this._currentRollingReelIDs.indexOf(reelID);

              var previousReelID = this._currentRollingReelIDs[index - 1];
              var checkPreviousReelIsRollEnd = index === 0 ? true : this.reelsIsRollEnd[previousReelID]; // 0是第一輪，所以不用檢查上一輪

              var canShowReadyHand = haveReadyHand && checkPreviousReelIsRollEnd;

              if (canShowReadyHand) {
                this.showReadyHandCallback(reelID);
                this._reelIsReadyHandList[reelID] = true;
              }
            }
          }
        }

        checkHideReadyHand(reelID) {
          if (this._reelIsReadyHandList[reelID]) {
            this.hideReadyHandCallback(reelID);
            this._reelIsReadyHandList[reelID] = false;
          }
        }

        oneReelRollEnd(reelID) {
          this.checkHideReadyHand(reelID);
          this.reelsIsRollEnd[reelID] = true;
        }

        reset() {
          this._reelHaveReadyHandList = Array.from({
            length: this.reelAmount
          }, () => false);
          this._reelIsReadyHandList = Array.from({
            length: this.reelAmount
          }, () => false);
          this.reelsIsRollEnd = Array.from({
            length: this.reelAmount
          }, () => false);
          this._currentReadyHandReelID = -1;
        }

        onReelMoveOneStart(reelID) {
          this.checkShowReadyHand(reelID);
        }

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
//# sourceMappingURL=84e257724edc5c1abea70a8d2b861eb6aab1654c.js.map