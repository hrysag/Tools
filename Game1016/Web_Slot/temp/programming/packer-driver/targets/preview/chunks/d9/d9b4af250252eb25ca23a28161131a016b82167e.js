System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, Label, Node, SymbolNumber, UniDropReelView, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, UniDropReelViewExample;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSymbolNumber(extras) {
    _reporterNs.report("SymbolNumber", "../SymbolNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniDropReelExample(extras) {
    _reporterNs.report("UniDropReelExample", "./UniDropReelExample", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniDropReelView(extras) {
    _reporterNs.report("UniDropReelView", "../../../Scripts/DropReel/UniDropReelView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      SymbolNumber = _unresolved_2.SymbolNumber;
    }, function (_unresolved_3) {
      UniDropReelView = _unresolved_3.UniDropReelView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bbfe2nWOIRM34NFXvBsB/o4", "UniDropReelViewExample", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UniDropReelViewExample", UniDropReelViewExample = (_dec = ccclass('DropUniReelViewExample'), _dec2 = property(Node), _dec3 = property({
        type: CCInteger,
        tooltip: '隨機資料長度，數值越大滾輪間隔停止越久'
      }), _dec4 = property({
        type: CCInteger,
        tooltip: '聽牌的隨機資料長度，數值越大滾輪間隔停止越久'
      }), _dec5 = property(Label), _dec6 = property(Label), _dec(_class = (_class2 = class UniDropReelViewExample extends (_crd && UniDropReelView === void 0 ? (_reportPossibleCrUseOfUniDropReelView({
        error: Error()
      }), UniDropReelView) : UniDropReelView) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "readyHandList", _descriptor, this);

          _initializerDefineProperty(this, "spaceLength", _descriptor2, this);

          _initializerDefineProperty(this, "readyHandLength", _descriptor3, this);

          _initializerDefineProperty(this, "useSymbolCountLabel", _descriptor4, this);

          _initializerDefineProperty(this, "unUsedSymbolCountLabel", _descriptor5, this);
        }

        init() {
          super.init();
          this.setReelDataCallback = this.setReelData;
          this.showReadyHandCallback = this.showReadyHand;
          this.hideReadyHandCallback = this.hideReadyHand;
        }

        update() {
          this.useSymbolCountLabel.string = "useSymbolCount: " + (_crd && SymbolNumber === void 0 ? (_reportPossibleCrUseOfSymbolNumber({
            error: Error()
          }), SymbolNumber) : SymbolNumber).pool.usedCount.toString();
          this.unUsedSymbolCountLabel.string = "unUsedSymbolCount: " + (_crd && SymbolNumber === void 0 ? (_reportPossibleCrUseOfSymbolNumber({
            error: Error()
          }), SymbolNumber) : SymbolNumber).pool.unUsedCount.toString();
        }

        setIconBrightness(reelID, isDark) {
          this.reelList[reelID].setIconBrightness(isDark);
        }

        setAllReelBrightness(isDark) {
          for (var reelID = 0; reelID < this.reelAmount; reelID++) {
            this.reelList[reelID].setIconBrightness(isDark);
          }
        }
        /**
        * 只是呼叫滾輪暫停，並不是直接停下
        */


        stopRoll(resultData, stopType) {
          var _superprop_getStopRoll = () => super.stopRoll,
              _this = this;

          return _asyncToGenerator(function* () {
            yield _superprop_getStopRoll().call(_this, resultData, stopType);

            _this.setAllReelBrightness(false);
          })();
        }

        fastStopRoll() {
          for (var index = 0; index < this._currentRollingReelIDs.length; index++) {
            var reelID = this._currentRollingReelIDs[index];
            this.reelList[reelID].clearRandomData();
          }
        }

        showReadyHand(reelID) {
          this.setAllReelBrightness(true);
          this.setIconBrightness(reelID, false);
          this.readyHandList[reelID].active = true;
        }

        hideReadyHand(reelID) {
          if (reelID === this.reelAmount - 1) {
            this.setAllReelBrightness(false);
          } else {
            this.setIconBrightness(reelID, false);
          }

          this.readyHandList[reelID].active = false;
        }

        createSymbolData(resultData) {
          var symbolData = [];

          for (var index = 0; index < resultData.length; index++) {
            var symbol = (_crd && SymbolNumber === void 0 ? (_reportPossibleCrUseOfSymbolNumber({
              error: Error()
            }), SymbolNumber) : SymbolNumber).pool.instance();
            symbol.symbolID = resultData[index];
            symbolData.push(symbol);
          }

          return symbolData;
        }

        setReelData(reelID, data) {
          var length = 0;

          if (!this.isFastModeCallback()) {
            length = this.calculateRandomDataLength(reelID); //可以在這裡加隨機資料，實現間隔暫停
          }

          var symbolData = this.createSymbolData(data);
          this.reelList[reelID].setData(symbolData, length);
        }

        calculateRandomDataLength(reelID) {
          var needReadyHand = this._reelHaveReadyHandList[reelID];

          var order = this._currentRollingReelIDs.indexOf(reelID);

          var randomDataLength = 0;

          if (needReadyHand) {
            var readyHandOrder = this._currentRollingReelIDs.indexOf(this._currentReadyHandReelID);

            var frontOrder = readyHandOrder - 1 < 0 ? 0 : readyHandOrder - 1;
            randomDataLength = frontOrder * this.spaceLength + (order - readyHandOrder + 1) * this.readyHandLength;
          } else {
            randomDataLength = order * this.spaceLength;
          }

          return randomDataLength;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "readyHandList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spaceLength", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "readyHandLength", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 12;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "useSymbolCountLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "unUsedSymbolCountLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d9b4af250252eb25ca23a28161131a016b82167e.js.map