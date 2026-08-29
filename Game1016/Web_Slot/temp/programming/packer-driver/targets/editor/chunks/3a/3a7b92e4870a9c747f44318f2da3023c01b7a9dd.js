System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, DropSlotMachineController, _dec, _class, _crd, ccclass, DropSlotMachineTest;

  function _reportPossibleCrUseOfDropSlotMachineController(extras) {
    _reporterNs.report("DropSlotMachineController", "../DropSlotMachineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropReelViewTest(extras) {
    _reporterNs.report("DropReelViewTest", "./DropReelViewTest", _context.meta, extras);
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
      DropSlotMachineController = _unresolved_2.DropSlotMachineController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0476f2X8tlGB7TDYpsrUTZa", "DropSlotMachineTest", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass
      } = _decorator);

      _export("DropSlotMachineTest", DropSlotMachineTest = (_dec = ccclass('DropSlotMachineTest'), _dec(_class = class DropSlotMachineTest extends (_crd && DropSlotMachineController === void 0 ? (_reportPossibleCrUseOfDropSlotMachineController({
        error: Error()
      }), DropSlotMachineController) : DropSlotMachineController) {
        constructor(...args) {
          super(...args);
          this._reelViewTest = null;
        }

        init() {
          this.showReadyHand = this.readyHandShow.bind(this);
          this.hideReadyHand = this.readyHandHide.bind(this);
          super.init();
          this._reelViewTest = this.view;
        }

        readyHandShow(currentReadyHandReel) {}

        readyHandHide(currentReadyHandReel) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3a7b92e4870a9c747f44318f2da3023c01b7a9dd.js.map