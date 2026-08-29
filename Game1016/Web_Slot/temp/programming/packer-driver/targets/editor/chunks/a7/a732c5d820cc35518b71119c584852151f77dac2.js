System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UniSlotMachine, UniDropReelView, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, UniDropSlotMachine;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUniSlotMachine(extras) {
    _reporterNs.report("UniSlotMachine", "../UniSlotMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDropReel(extras) {
    _reporterNs.report("IDropReel", "../Interface/IDropReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniDropReelView(extras) {
    _reporterNs.report("UniDropReelView", "./UniDropReelView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      UniSlotMachine = _unresolved_2.UniSlotMachine;
    }, function (_unresolved_3) {
      UniDropReelView = _unresolved_3.UniDropReelView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "052d8tqaDhMDJmRBHsM1EUT", "UniDropSlotMachine", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UniDropSlotMachine", UniDropSlotMachine = (_dec = ccclass('UniDropSlotMachine'), _dec2 = property({
        type: _crd && UniDropReelView === void 0 ? (_reportPossibleCrUseOfUniDropReelView({
          error: Error()
        }), UniDropReelView) : UniDropReelView,
        visible: true
      }), _dec(_class = (_class2 = class UniDropSlotMachine extends (_crd && UniSlotMachine === void 0 ? (_reportPossibleCrUseOfUniSlotMachine({
        error: Error()
      }), UniSlotMachine) : UniSlotMachine) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_dropReelView", _descriptor, this);
        }

        /**
         * 開始掉落方法，資料由實作層設定好傳入
         * @param dropOutIdList 掉落的 icon 索引 (不包含頭尾Icon)
         */
        async startDropOut(isTurboMode, dropOutIdList) {
          this.reset();
          this._isTurboMode = isTurboMode;
          await this._dropReelView.startDropOut(dropOutIdList);
        }
        /**
         * 收到盤面資料時掉入畫面中方法，資料由實作層設定好傳入
         * @param dropInIdList 掉入的 icon 索引 (不包含頭尾Icon)
         * @param resultData 盤面資料
         */


        async startDropIn(dropInIdList, resultData) {
          this._iconResultData = [...resultData];
          await this._dropReelView.startDropIn(dropInIdList, this._iconResultData);
        }
        /**
         * 補盤方法，資料由實作層設定好傳入
         * @param removeIdList 被消除的 icon 索引 (不包含頭尾Icon)
         * @param resultData 盤面資料
         */


        async startDropRefill(removeIdList, resultData) {
          this._iconResultData = [...resultData];
          await this._dropReelView.startDropRefill(removeIdList, this._iconResultData);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_dropReelView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a732c5d820cc35518b71119c584852151f77dac2.js.map