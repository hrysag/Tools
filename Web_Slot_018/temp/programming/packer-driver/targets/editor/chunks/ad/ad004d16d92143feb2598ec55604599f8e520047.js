System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, SlotMachineController, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SlotMachineTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSlotMachineController(extras) {
    _reporterNs.report("SlotMachineController", "../../Scripts/SlotMachineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelViewTest(extras) {
    _reporterNs.report("ReelViewTest", "./ReelViewTest", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      SlotMachineController = _unresolved_2.SlotMachineController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66742bAH1NFo7Vb4XoNV0JO", "SlotMachineTest", undefined);

      __checkObsolete__(['_decorator', 'Node', 'randomRangeInt']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SlotMachineTest", SlotMachineTest = (_dec = ccclass('SlotMachineTest'), _dec2 = property({
        type: Node,
        visible: true
      }), _dec(_class = (_class2 = class SlotMachineTest extends (_crd && SlotMachineController === void 0 ? (_reportPossibleCrUseOfSlotMachineController({
        error: Error()
      }), SlotMachineController) : SlotMachineController) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_readyHandNode", _descriptor, this);

          this._reelViewTest = null;
        }

        init() {
          this.showReadyHandCallback = this.readyHandShow.bind(this);
          this.hideReadyHandCallback = this.readyHandHide.bind(this);
          super.init();
          this._reelViewTest = this._view;
        }

        generateInitIconData() {
          let initSymbolData = [[0, 1, 2], [3, 4, 5], [6, 7, 7], [8, 9, 10]];
          this._previousResultData = initSymbolData;
          return initSymbolData;
        }

        readyHandShow(currentReadyHandReel) {
          this._reelViewTest.setAllReelBrightness(true);

          this._reelViewTest.setIconBrightness(currentReadyHandReel, false);

          this._readyHandNode.active = true;
        }

        readyHandHide(currentReadyHandReel) {
          if (currentReadyHandReel === this.reelAmount - 1) {
            this._reelViewTest.setAllReelBrightness(false);
          } else {
            this._reelViewTest.setIconBrightness(currentReadyHandReel, false);
          }

          this._readyHandNode.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_readyHandNode", [_dec2], {
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
//# sourceMappingURL=ad004d16d92143feb2598ec55604599f8e520047.js.map