System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, UniReel, DropType, EaseType, _dec, _class, _crd, ccclass, property, UniDropReel;

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
        constructor(...args) {
          super(...args);
          this.onStartDropOut = void 0;
          this.onStartDropIn = void 0;
          this.onStartRefill = void 0;
          this.waitForDropComplete = null;
        }

        startDropOut(dropOutIdList, ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType).Linear, easedValueCustom = null) {
          var _this$onStartDropOut;

          this.initLayout();
          this.resetMovements();
          this.setIconListDropType(dropOutIdList, (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
            error: Error()
          }), DropType) : DropType).DropOut);
          (_this$onStartDropOut = this.onStartDropOut) == null || _this$onStartDropOut.call(this, dropOutIdList);
          this.drop(ease, easedValueCustom);
        }

        startDropIn(dropInIdList, ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType).Linear, easedValueCustom = null) {
          var _this$onStartDropIn;

          this.setIconListDropType(dropInIdList, (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
            error: Error()
          }), DropType) : DropType).DropIn);
          this.setDropIconTopPos(dropInIdList);
          (_this$onStartDropIn = this.onStartDropIn) == null || _this$onStartDropIn.call(this, dropInIdList);
          this.drop(ease, easedValueCustom);
        }

        startDropRefill(removeIdList, ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType).Linear, easedValueCustom = null) {
          var _this$onStartRefill;

          const refillIdList = this.getRefillIdList(removeIdList);
          this.setDropIconTopPos(removeIdList);
          this.reorderDropIcon(removeIdList);
          this.setIconListDropType(refillIdList, (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
            error: Error()
          }), DropType) : DropType).Refill);
          (_this$onStartRefill = this.onStartRefill) == null || _this$onStartRefill.call(this, refillIdList);
          this.drop(ease, easedValueCustom);
        }

        async startDropOutAsync(dropOutIdList, ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType).Linear, easedValueCustom = null) {
          return new Promise((resolve, reject) => {
            this.waitForDropComplete = resolve;
            this.startDropOut(dropOutIdList, ease, easedValueCustom);
          });
        }

        async startDropInAsync(dropInIdList, ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType).Linear, easedValueCustom = null) {
          return new Promise((resolve, reject) => {
            this.waitForDropComplete = resolve;
            this.startDropIn(dropInIdList, ease, easedValueCustom);
          });
        }

        async startDropRefillAsync(removeIdList, ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType).Linear, easedValueCustom = null) {
          return new Promise((resolve, reject) => {
            this.waitForDropComplete = resolve;
            this.startDropRefill(removeIdList, ease, easedValueCustom);
          });
        }

        drop(ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType).Linear, easedValueCustom = null) {
          const dropIcons = this._iconList.filter(icon => icon.dropType !== (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
            error: Error()
          }), DropType) : DropType).NoDrop);

          for (let i = 0; i < dropIcons.length; ++i) {
            const dropCount = this.getDropCount(dropIcons[i]);
            const dropDis = this.moveDir.clone().multiplyScalar(this.moveDis * dropCount);
            const dropTime = this.moveInterval * dropCount;
            dropIcons[i].moveBy(dropDis, dropTime, ease, easedValueCustom);
            dropIcons[i].addCallback(() => {
              this.dropComplete(dropIcons[i]);
            });
          }
        }

        setIconListDropType(iconIndexes, dropType) {
          for (const index of iconIndexes) {
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
          const index = this._iconList.indexOf(icon);

          const currentPos = this.isVertical ? icon.node.position.y : icon.node.position.x;
          const targetPos = this.isVertical ? this.iconDis.multiplyScalar(0.5 * (this.iconList.length - 1) - index).y : this.iconDis.multiplyScalar(0.5 * (this.iconList.length - 1) - index).x;
          const distance = Math.abs(currentPos - targetPos);
          const dropCount = Math.round(distance / this.moveDis);
          return dropCount;
        }

        setDropIconTopPos(idList) {
          const resetIdList = !this.inverseDirection ? [...idList].reverse() : [...idList];
          const startPos = !this.inverseDirection ? this.iconList[0].node.getPosition().clone() : this.iconList[this.iconList.length - 1].node.getPosition().clone();

          for (let i = 0; i < resetIdList.length; i++) {
            const iconIndex = resetIdList[i];
            const moveDis = !this.inverseDirection ? this.moveDis * i : -(this.moveDis * i);
            const offset = this.isVertical ? moveDis + startPos.y : moveDis + startPos.x;
            const targetPos = this.isVertical ? new Vec3(0, offset, 0) : new Vec3(offset, 0, 0);

            this._iconList[iconIndex].moveTo(targetPos, 0);

            this._iconList[iconIndex].addCallback(() => {
              this.setDropIconData(iconIndex);
            });
          }
        }

        setDropIconData(index) {
          var _this$onSetIconData;

          let symbol = this.iconList[index].symbol;

          if (symbol !== null) {
            this.destroySymbol(symbol);
          }

          this.iconList[index].symbol = this.getData();
          (_this$onSetIconData = this.onSetIconData) == null || _this$onSetIconData.call(this, this.iconList[index].symbol, index);
        }

        getRefillIdList(removeIdList) {
          const refillIdList = [];
          const start = 1;
          const end = this._iconList.length - 1;

          if (!this.inverseDirection) {
            const max = Math.max(...removeIdList);

            for (let i = start; i <= max; i++) {
              refillIdList.push(i);
            }
          } else {
            const min = Math.min(...removeIdList);

            for (let i = min; i < end; i++) {
              refillIdList.push(i);
            }
          }

          return refillIdList;
        }

        reorderDropIcon(removeIdList) {
          const firstIcon = this._iconList[0];
          const lastIcon = this._iconList[this._iconList.length - 1];

          const middleIcons = this._iconList.slice(1, this._iconList.length - 1);

          const dropOutIcons = [];
          const remainIcons = [];

          for (let i = 0; i < middleIcons.length; i++) {
            const icon = middleIcons[i];

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
//# sourceMappingURL=6c1c27123711bacdf24b5619f35136cb8a5fe12b.js.map