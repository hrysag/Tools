System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SlotMachineViewBase, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SlotMachineControllerBase;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSlotMachineViewBase(extras) {
    _reporterNs.report("SlotMachineViewBase", "./SlotMachineViewBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      SlotMachineViewBase = _unresolved_2.SlotMachineViewBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4c3fc+EwQ5DOaqLg4a2KL7P", "SlotMachineControllerBase", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 用來管理表演的流程和數據，只負責開始與結束
       */

      _export("SlotMachineControllerBase", SlotMachineControllerBase = (_dec = ccclass('SlotMachineControllerBase'), _dec2 = property({
        type: _crd && SlotMachineViewBase === void 0 ? (_reportPossibleCrUseOfSlotMachineViewBase({
          error: Error()
        }), SlotMachineViewBase) : SlotMachineViewBase,
        visible: true
      }), _dec(_class = (_class2 = class SlotMachineControllerBase extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_view", _descriptor, this);

          this._iconResultData = [];
          //紀錄最終顯示的資料
          this._isReceiveData = false;
          this._isTurboMode = false;
          //判斷是否為快速模式
          this._isStopClick = false;
        }

        //判斷是否點擊了stop按鈕

        /**
        * 開始滾輪表演
        * @param reelIDs 要表演的滾輪，沒有傳入預設全部滾輪表演 ex:[2, 1, 0]代表從2開始停，0最後
        */
        startRoll(isTurboMode, reelIDs) {
          this.reset();
          this._isTurboMode = isTurboMode;

          this._view.startRoll(reelIDs);
        }
        /**
         * 停止滾輪表演
         * @param resultData 最終顯示的資料，
         * 如果表演特定滾輪，要照順序傳入資料 ex:[2, 1, 0]，resultData[[2要顯示的data], [1要顯示的data], [0要顯示的data]]
         */


        stopRoll(resultData) {
          this._iconResultData = resultData;
          this._isReceiveData = true;

          this._view.stopRoll();
        }

        reset() {
          this._iconResultData.length = 0;
          this._isReceiveData = false;
          this._isStopClick = false;
        }

        isFastMode() {
          return this._isStopClick || this._isTurboMode;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_view", [_dec2], {
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
//# sourceMappingURL=31c410fc202e4384cce368afd78aa7f8287b296a.js.map