System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, UniReel, DropType, EaseType, _dec, _class, _crd, ccclass, property, UniDropReel;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfUniReel(extras) {
    _reporterNs.report("UniReel", "../UniReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolBase(extras) {
    _reporterNs.report("SymbolBase", "../Interface/SymbolBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDropReel(extras) {
    _reporterNs.report("IDropReel", "../Interface/IDropReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropType(extras) {
    _reporterNs.report("DropType", "./UniDropIconBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniDropIconBase(extras) {
    _reporterNs.report("UniDropIconBase", "./UniDropIconBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEaseType(extras) {
    _reporterNs.report("EaseType", "db://assets/Scripts/Utils/Core", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      UniReel = _unresolved_2.UniReel;
    }, function (_unresolved_3) {
      DropType = _unresolved_3.DropType;
    }, function (_unresolved_4) {
      EaseType = _unresolved_4.EaseType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "137baUCwp9FPqsCbVe3VZz/", "UniDropReel", undefined);

      __checkObsolete__(['_decorator', 'Enum', 'RealCurve', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UniDropReel", UniDropReel = (_dec = ccclass('DropUniReel'), _dec(_class = class UniDropReel extends (_crd && UniReel === void 0 ? (_reportPossibleCrUseOfUniReel({
        error: Error()
      }), UniReel) : UniReel) {
        constructor() {
          super(...arguments);
          this.onStartDropOut = void 0;
          this.onStartDropIn = void 0;
          this.onStartRefill = void 0;
          this.waitForDropComplete = null;
        }

        startDropOut(dropOutIdList, ease, easedValueCustom) {
          var _this$onStartDropOut;

          if (ease === void 0) {
            ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
              error: Error()
            }), EaseType) : EaseType).Linear;
          }

          if (easedValueCustom === void 0) {
            easedValueCustom = null;
          }

          this.initLayout();
          this.resetMovements();
          this.setIconListDropType(dropOutIdList, (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
            error: Error()
          }), DropType) : DropType).DropOut);
          (_this$onStartDropOut = this.onStartDropOut) == null || _this$onStartDropOut.call(this, dropOutIdList);
          this.drop(ease, easedValueCustom);
        }

        startDropIn(dropInIdList, ease, easedValueCustom) {
          var _this$onStartDropIn;

          if (ease === void 0) {
            ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
              error: Error()
            }), EaseType) : EaseType).Linear;
          }

          if (easedValueCustom === void 0) {
            easedValueCustom = null;
          }

          this.setIconListDropType(dropInIdList, (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
            error: Error()
          }), DropType) : DropType).DropIn);
          this.setDropIconTopPos(dropInIdList);
          (_this$onStartDropIn = this.onStartDropIn) == null || _this$onStartDropIn.call(this, dropInIdList);
          this.drop(ease, easedValueCustom);
        }

        startDropRefill(removeIdList, ease, easedValueCustom) {
          var _this$onStartRefill;

          if (ease === void 0) {
            ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
              error: Error()
            }), EaseType) : EaseType).Linear;
          }

          if (easedValueCustom === void 0) {
            easedValueCustom = null;
          }

          var refillIdList = this.getRefillIdList(removeIdList);
          this.setDropIconTopPos(removeIdList);
          this.reorderDropIcon(removeIdList);
          this.setIconListDropType(refillIdList, (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
            error: Error()
          }), DropType) : DropType).Refill);
          (_this$onStartRefill = this.onStartRefill) == null || _this$onStartRefill.call(this, refillIdList);
          this.drop(ease, easedValueCustom);
        }

        startDropOutAsync(dropOutIdList, ease, easedValueCustom) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (ease === void 0) {
              ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
                error: Error()
              }), EaseType) : EaseType).Linear;
            }

            if (easedValueCustom === void 0) {
              easedValueCustom = null;
            }

            return new Promise((resolve, reject) => {
              _this.waitForDropComplete = resolve;

              _this.startDropOut(dropOutIdList, ease, easedValueCustom);
            });
          })();
        }

        startDropInAsync(dropInIdList, ease, easedValueCustom) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (ease === void 0) {
              ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
                error: Error()
              }), EaseType) : EaseType).Linear;
            }

            if (easedValueCustom === void 0) {
              easedValueCustom = null;
            }

            return new Promise((resolve, reject) => {
              _this2.waitForDropComplete = resolve;

              _this2.startDropIn(dropInIdList, ease, easedValueCustom);
            });
          })();
        }

        startDropRefillAsync(removeIdList, ease, easedValueCustom) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (ease === void 0) {
              ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
                error: Error()
              }), EaseType) : EaseType).Linear;
            }

            if (easedValueCustom === void 0) {
              easedValueCustom = null;
            }

            return new Promise((resolve, reject) => {
              _this3.waitForDropComplete = resolve;

              _this3.startDropRefill(removeIdList, ease, easedValueCustom);
            });
          })();
        }

        drop(ease, easedValueCustom) {
          var _this4 = this;

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

          var _loop = function _loop(i) {
            var dropCount = _this4.getDropCount(dropIcons[i]);

            var dropDis = _this4.moveDir.clone().multiplyScalar(_this4.moveDis * dropCount);

            var dropTime = _this4.moveInterval * dropCount;
            dropIcons[i].moveBy(dropDis, dropTime, ease, easedValueCustom);
            dropIcons[i].addCallback(() => {
              _this4.dropComplete(dropIcons[i]);
            });
          };

          for (var i = 0; i < dropIcons.length; ++i) {
            _loop(i);
          }
        }

        setIconListDropType(iconIndexes, dropType) {
          for (var index of iconIndexes) {
            this._iconList[index].dropType = dropType;
          }
        }

        getDropCount(icon) {
          switch (icon.dropType) {
            case (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
              error: Error()
            }), DropType) : DropType).DropOut:
              return this.iconAmount;

            case (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
              error: Error()
            }), DropType) : DropType).DropIn:
            case (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
              error: Error()
            }), DropType) : DropType).Refill:
              return this._getRefillDropDistanceByPos(icon);

            default:
              return 0;
          }
        }

        _getRefillDropDistanceByPos(icon) {
          var index = this._iconList.indexOf(icon);

          var currentPos = this.isVertical ? icon.node.position.y : icon.node.position.x;
          var targetPos = this.isVertical ? this.iconDis.multiplyScalar(0.5 * (this.iconList.length - 1) - index).y : this.iconDis.multiplyScalar(0.5 * (this.iconList.length - 1) - index).x;
          var distance = Math.abs(currentPos - targetPos);
          var dropCount = Math.round(distance / this.moveDis);
          return dropCount;
        }

        setDropIconTopPos(idList) {
          var _this5 = this;

          var resetIdList = !this.inverseDirection ? [...idList].reverse() : [...idList];
          var startPos = !this.inverseDirection ? this.iconList[0].node.getPosition().clone() : this.iconList[this.iconList.length - 1].node.getPosition().clone();

          var _loop2 = function _loop2() {
            var iconIndex = resetIdList[i];
            var moveDis = !_this5.inverseDirection ? _this5.moveDis * i : -(_this5.moveDis * i);
            var offset = _this5.isVertical ? moveDis + startPos.y : moveDis + startPos.x;
            var targetPos = _this5.isVertical ? new Vec3(0, offset, 0) : new Vec3(offset, 0, 0);

            _this5._iconList[iconIndex].moveTo(targetPos, 0);

            _this5._iconList[iconIndex].addCallback(() => {
              _this5.setDropIconData(iconIndex);
            });
          };

          for (var i = 0; i < resetIdList.length; i++) {
            _loop2();
          }
        }

        setDropIconData(index) {
          var _this$onSetIconData;

          var symbol = this.iconList[index].symbol;

          if (symbol !== null) {
            this.destroySymbol(symbol);
          }

          this.iconList[index].symbol = this.getData();
          (_this$onSetIconData = this.onSetIconData) == null || _this$onSetIconData.call(this, this.iconList[index].symbol, index);
        }

        getRefillIdList(removeIdList) {
          var refillIdList = [];
          var start = 1;
          var end = this._iconList.length - 1;

          if (!this.inverseDirection) {
            var max = Math.max(...removeIdList);

            for (var i = start; i <= max; i++) {
              refillIdList.push(i);
            }
          } else {
            var min = Math.min(...removeIdList);

            for (var _i = min; _i < end; _i++) {
              refillIdList.push(_i);
            }
          }

          return refillIdList;
        }

        reorderDropIcon(removeIdList) {
          var firstIcon = this._iconList[0];
          var lastIcon = this._iconList[this._iconList.length - 1];

          var middleIcons = this._iconList.slice(1, this._iconList.length - 1);

          var dropOutIcons = [];
          var remainIcons = [];

          for (var i = 0; i < middleIcons.length; i++) {
            var icon = middleIcons[i];

            if (removeIdList.includes(i + 1)) {
              dropOutIcons.push(icon);
            } else {
              remainIcons.push(icon);
            }
          }

          this._iconList = !this.inverseDirection ? [firstIcon, ...dropOutIcons, ...remainIcons, lastIcon] : [firstIcon, ...remainIcons, ...dropOutIcons, lastIcon];
          this.changeSibling(this._iconList);
        }

        dropComplete(dropIcon) {
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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c4156743b831242d02e8fb021fe66fb6caabaf06.js.map