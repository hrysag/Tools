System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, SlotMachineController018, AutoOrientAndSetPos, _dec, _class, _crd, ccclass, property, AutoOrientSlotController;

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../../../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotMachineController(extras) {
    _reporterNs.report("SlotMachineController018", "../../../Slot/SlotMachineController018", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoOrientAndSetPos(extras) {
    _reporterNs.report("AutoOrientAndSetPos", "./AutoOrientAndSetPos", _context.meta, extras);
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
      SlotMachineController018 = _unresolved_2.SlotMachineController018;
    }, function (_unresolved_3) {
      AutoOrientAndSetPos = _unresolved_3.AutoOrientAndSetPos;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5549blmUKRKA5VflN+DUUjQ", "AutoOrientSlotController", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'Component', 'Node', 'log', 'screen']);

      /**
       * 繼承原本的 AutoOrientation 類別
       * 這個類別是用來處理自動旋轉的擴展
       * 因為有些只是需要切換動畫的key即可
       */
      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoOrientSlotController", AutoOrientSlotController = (_dec = ccclass('AutoOrientSlotController'), _dec(_class = class AutoOrientSlotController extends (_crd && AutoOrientAndSetPos === void 0 ? (_reportPossibleCrUseOfAutoOrientAndSetPos({
        error: Error()
      }), AutoOrientAndSetPos) : AutoOrientAndSetPos) {
        //--to override it
        otherProcessForOrientation(orientation) {
          var targetComponent = this.node.getComponent(_crd && SlotMachineController018 === void 0 ? (_reportPossibleCrUseOfSlotMachineController({
            error: Error()
          }), SlotMachineController018) : SlotMachineController018); //--重新計算每個reel icon的world position

          targetComponent.changeRotationResolution(orientation);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ee24dc728c85fc1e8342469294ec4ca551b76b27.js.map