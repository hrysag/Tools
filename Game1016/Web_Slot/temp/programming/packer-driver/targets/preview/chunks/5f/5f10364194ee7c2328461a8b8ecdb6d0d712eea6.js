System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Enum, randomRangeInt, SymbolNumber, PublicReelConfigTest, ReelBounceConfig, UniDropReel, DropType, EaseType, Utility, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, REEL_AMOUNT, NORMAL_SYMBOLS_LIST, MAGNIFICATION_SYMBOLS_LIST, WILD_ID, SlotType, UniDropReelExample;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSymbolNumber(extras) {
    _reporterNs.report("SymbolNumber", "../SymbolNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicReelConfigTest(extras) {
    _reporterNs.report("PublicReelConfigTest", "../../../../v2/Example/Scripts/PublicReelConfigTest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStopType(extras) {
    _reporterNs.report("StopType", "../../../Scripts/UniReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelBounceConfig(extras) {
    _reporterNs.report("ReelBounceConfig", "../ReelBounceConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniDropIconExample(extras) {
    _reporterNs.report("UniDropIconExample", "./UniDropIconExample", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniDropReel(extras) {
    _reporterNs.report("UniDropReel", "../../../Scripts/DropReel/UniDropReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropType(extras) {
    _reporterNs.report("DropType", "../../../Scripts/DropReel/UniDropIconBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEaseType(extras) {
    _reporterNs.report("EaseType", "db://assets/Scripts/Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "db://assets/Scripts/Utils/Core", _context.meta, extras);
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
      Enum = _cc.Enum;
      randomRangeInt = _cc.randomRangeInt;
    }, function (_unresolved_2) {
      SymbolNumber = _unresolved_2.SymbolNumber;
    }, function (_unresolved_3) {
      PublicReelConfigTest = _unresolved_3.PublicReelConfigTest;
    }, function (_unresolved_4) {
      ReelBounceConfig = _unresolved_4.ReelBounceConfig;
    }, function (_unresolved_5) {
      UniDropReel = _unresolved_5.UniDropReel;
    }, function (_unresolved_6) {
      DropType = _unresolved_6.DropType;
    }, function (_unresolved_7) {
      EaseType = _unresolved_7.EaseType;
      Utility = _unresolved_7.Utility;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6280V9SQZL8avJTdIGoPHS", "UniDropReelExample", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'Enum', 'Node', 'randomRangeInt', 'RealCurve']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        REEL_AMOUNT,
        NORMAL_SYMBOLS_LIST,
        MAGNIFICATION_SYMBOLS_LIST,
        WILD_ID
      } = _crd && PublicReelConfigTest === void 0 ? (_reportPossibleCrUseOfPublicReelConfigTest({
        error: Error()
      }), PublicReelConfigTest) : PublicReelConfigTest);

      SlotType = /*#__PURE__*/function (SlotType) {
        SlotType[SlotType["None"] = 0] = "None";
        SlotType[SlotType["Drop"] = 1] = "Drop";
        SlotType[SlotType["Rolling"] = 2] = "Rolling";
        return SlotType;
      }(SlotType || {});

      _export("UniDropReelExample", UniDropReelExample = (_dec = ccclass('DropUniReelExample'), _dec2 = property(_crd && ReelBounceConfig === void 0 ? (_reportPossibleCrUseOfReelBounceConfig({
        error: Error()
      }), ReelBounceConfig) : ReelBounceConfig), _dec3 = property({
        type: Enum(SlotType),
        visible: true,
        readonly: true
      }), _dec4 = property({
        type: CCFloat,
        tooltip: 'Icon掉落間隔的時間'
      }), _dec(_class = (_class2 = class UniDropReelExample extends (_crd && UniDropReel === void 0 ? (_reportPossibleCrUseOfUniDropReel({
        error: Error()
      }), UniDropReel) : UniDropReel) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bounceConfig", _descriptor, this);

          _initializerDefineProperty(this, "_slotType", _descriptor2, this);

          _initializerDefineProperty(this, "iconDropSpaceTime", _descriptor3, this);

          this._currentRandomData = [];
        }

        init(reelID) {
          super.init(reelID);
          this.onStartRoll = this.upBouncing;
          this.onStartDropOut = this.setStartDropOut;
          this.onStartRefill = this.setStartRefill;
        }

        setIconBrightness(isDark, iconIndex) {
          if (iconIndex) {
            for (var i = 0; i < iconIndex.length; i++) {
              var index = iconIndex[i];

              this._iconList[index].setBrightness(isDark);
            }
          } else {
            for (var _index = 0; _index < this._iconList.length; _index++) {
              this._iconList[_index].setBrightness(isDark);
            }
          }
        }

        setData(symbolData, randomDataLength) {
          var randomData = [];

          for (var index = 0; index < randomDataLength; index++) {
            //為了間隔停止，根據randomDataLength生成隨機資料
            var symbol = this.createRandomSymbol();
            randomData.push(symbol);
          }

          var resultData = this._slotType === SlotType.Drop ? [...symbolData] : [this.createRandomSymbol(), ...symbolData, ...randomData];

          for (var _index2 = resultData.length - 1; _index2 >= 0; _index2--) {
            var _symbol = resultData[_index2];
            this.data.enqueue(_symbol);
          }
        }
        /**
        * 滾輪急停時呼叫，把data裡面的資料清空到剩下iconList的長度
        */


        clearRandomData() {
          while (this.data.count > this.iconAmount + 2) {
            //把隨機資料直接移除直到剩餘伺服器資料
            var data = this.data.dequeue();
            this.destroySymbol(data);
          }
        }

        startRoll() {
          this._slotType = SlotType.Rolling;
          super.startRoll();
        }

        stopRollAsync(stopType) {
          var _superprop_getStopRollAsync = () => super.stopRollAsync,
              _this = this;

          return _asyncToGenerator(function* () {
            yield _superprop_getStopRollAsync().call(_this, stopType);
            yield _this.downBouncing();
          })();
        }

        startDropRefillAsync(dropOutIds, ease, easedValueCustom) {
          var _superprop_getStartDropRefillAsync = () => super.startDropRefillAsync,
              _this2 = this;

          return _asyncToGenerator(function* () {
            if (ease === void 0) {
              ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
                error: Error()
              }), EaseType) : EaseType).Linear;
            }

            if (easedValueCustom === void 0) {
              easedValueCustom = null;
            }

            yield _this2.dropEliminate(dropOutIds);
            yield _superprop_getStartDropRefillAsync().call(_this2, dropOutIds, ease, easedValueCustom);
          })();
        }

        startDropOut(idList, ease, easedValueCustom) {
          this._slotType = SlotType.Drop;
          super.startDropOut(idList, ease, easedValueCustom);
        }

        upBouncing() {
          if (this.bounceConfig.startBounce) {
            this.resetMovements();
            this.rollingBouncingAsync(this.bounceConfig.bounceDis);
          }
        }

        downBouncing() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (_this3.bounceConfig.endBounce) {
              yield _this3.rollingBouncingAsync(-_this3.bounceConfig.bounceDis);
            }
          })();
        }

        createRandomSymbol() {
          if (this._currentRandomData.length <= 0) {
            this._currentRandomData = this.generateRandomSymbolList();
          }

          return this._currentRandomData.pop();
        }

        destroySymbol(symbol) {
          (_crd && SymbolNumber === void 0 ? (_reportPossibleCrUseOfSymbolNumber({
            error: Error()
          }), SymbolNumber) : SymbolNumber).pool.destroy(symbol);
        }

        generateRandomSymbolList() {
          var allSymbolList = this.reelID === REEL_AMOUNT - 1 ? [...MAGNIFICATION_SYMBOLS_LIST] : [...NORMAL_SYMBOLS_LIST];
          var uniqueSymbolIDList = REEL_AMOUNT - 1 ? [...MAGNIFICATION_SYMBOLS_LIST] : [WILD_ID];
          var resultSymbols = [];

          for (var index = 0; index < this.iconAmount + 2; index++) {
            var randomIndex = randomRangeInt(0, allSymbolList.length);
            var symbolID = allSymbolList[randomIndex];

            if (uniqueSymbolIDList.length > 0 && uniqueSymbolIDList.includes(symbolID)) {
              var uniqueSymbolIndex = allSymbolList.indexOf(symbolID);
              allSymbolList.splice(uniqueSymbolIndex, 1);
            }

            var symbol = (_crd && SymbolNumber === void 0 ? (_reportPossibleCrUseOfSymbolNumber({
              error: Error()
            }), SymbolNumber) : SymbolNumber).pool.instance();
            symbol.symbolID = symbolID; // symbol.randomValue(); 也可以他自己產生隨機資料

            resultSymbols.push(symbol);
          }

          return resultSymbols;
        }

        initIconSymbol() {
          var data = this.generateRandomSymbolList();

          for (var index = 0; index < this.iconList.length; index++) {
            var icon = this.iconList[index];
            icon.symbol = data[index];
          }
        }

        rollingBouncingAsync(dis) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              var downEasing = _this4.bounceConfig.downBounceEasing;
              var downDuration = _this4.bounceConfig.downBounceDuration;
              var upEasing = _this4.bounceConfig.upBounceEasing;
              var upDuration = _this4.bounceConfig.upBounceDuration;
              var downRealCurve = _this4.bounceConfig.useRealCurve ? _this4.bounceConfig.downBounceRealCurve : null;
              var upRealCurve = _this4.bounceConfig.useRealCurve ? _this4.bounceConfig.upBounceRealCurve : null;

              for (var i = 0; i < _this4._iconList.length; ++i) {
                _this4._iconList[i].moveBy(_this4.moveDir.multiplyScalar(dis).negative(), downDuration, downEasing, downRealCurve);

                _this4._iconList[i].moveBy(_this4.moveDir.multiplyScalar(dis), upDuration, upEasing, upRealCurve);
              }

              _this4._iconList[0].addCallback(() => resolve());
            });
          })();
        }

        drop(ease, easedValueCustom) {
          var _this5 = this;

          if (ease === void 0) {
            ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
              error: Error()
            }), EaseType) : EaseType).Linear;
          }

          if (easedValueCustom === void 0) {
            easedValueCustom = null;
          }

          var dropIcons = this._iconList.filter(icon => icon.dropType !== (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
            error: Error()
          }), DropType) : DropType).NoDrop);

          if (!this.inverseDirection) {
            dropIcons.reverse();
          }

          var _loop = function _loop(i) {
            if (_this5.iconDropSpaceTime > 0) {
              var delay = i * _this5.iconDropSpaceTime;

              _this5.scheduleOnce(() => {
                _this5.runDrop(dropIcons[i], ease, easedValueCustom);
              }, delay);
            } else {
              _this5.runDrop(dropIcons[i], ease, easedValueCustom);
            }
          };

          for (var i = 0; i < dropIcons.length; i++) {
            _loop(i);
          }
        }

        runDrop(icon, ease, easedValueCustom) {
          var dropCount = this.getDropCount(icon);
          var dropDis = this.moveDir.clone().multiplyScalar(this.moveDis * dropCount);
          var dropTime = this.moveInterval * dropCount;
          icon.moveBy(dropDis, dropTime, ease, easedValueCustom);
          icon.addCallback(() => {
            this.dropComplete(icon);
          });
        }

        dropComplete(dropIcon) {
          var isValidDrop = dropIcon.dropType !== (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
            error: Error()
          }), DropType) : DropType).DropOut && this.bounceConfig.endBounce;

          if (!isValidDrop) {
            this.setDropFinished(dropIcon);
            return;
          }

          this.dropBouncing(dropIcon);
        }

        setStartDropOut(idList) {}

        setStartRefill(dropOutIds) {
          for (var i = 0; i < dropOutIds.length; i++) {
            var index = dropOutIds[i];
            this.iconList[index].show();
          }
        }

        dropEliminate(removeIdList) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            for (var i = 0; i < removeIdList.length; i++) {
              var index = removeIdList[i];

              _this6.iconList[index].hide();
            }

            yield (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).waitPromise(0.5);
          })();
        }

        dropBouncing(dropIcon) {
          var dis = -this.bounceConfig.bounceDis;
          var downEasing = this.bounceConfig.downBounceEasing;
          var downDuration = this.bounceConfig.downBounceDuration;
          var upEasing = this.bounceConfig.upBounceEasing;
          var upDuration = this.bounceConfig.upBounceDuration;
          var downRealCurve = this.bounceConfig.useRealCurve ? this.bounceConfig.downBounceRealCurve : null;
          var upRealCurve = this.bounceConfig.useRealCurve ? this.bounceConfig.upBounceRealCurve : null;
          dropIcon.moveBy(this.moveDir.multiplyScalar(dis).negative(), downDuration, downEasing, downRealCurve);
          dropIcon.moveBy(this.moveDir.multiplyScalar(dis), upDuration, upEasing, upRealCurve);
          dropIcon.addCallback(() => {
            this.setDropFinished(dropIcon);
          });
        }

        setDropFinished(dropIcon) {
          dropIcon.dropType = (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
            error: Error()
          }), DropType) : DropType).NoDrop;

          if (this._iconList.every(icon => icon.dropType === (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
            error: Error()
          }), DropType) : DropType).NoDrop)) {
            var _this$waitForDropComp;

            (_this$waitForDropComp = this.waitForDropComplete) == null || _this$waitForDropComp.call(this);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bounceConfig", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_slotType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SlotType.None;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconDropSpaceTime", [_dec4], {
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
//# sourceMappingURL=5f10364194ee7c2328461a8b8ecdb6d0d712eea6.js.map