System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, SlotMachineData, PublicReelConfigTest, _dec, _class, _crd, ccclass, property, NORMAL_SYMBOLS_LIST, MAGNIFICATION_SYMBOLS_LIST, WILD_ID, ALL_SYMBOL_LIST, SlotMachineDataTest;

  function _reportPossibleCrUseOfSlotMachineData(extras) {
    _reporterNs.report("SlotMachineData", "../../Model/SlotMachineData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicReelConfigTest(extras) {
    _reporterNs.report("PublicReelConfigTest", "./PublicReelConfigTest", _context.meta, extras);
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
      SlotMachineData = _unresolved_2.SlotMachineData;
    }, function (_unresolved_3) {
      PublicReelConfigTest = _unresolved_3.PublicReelConfigTest;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5721ursP1DbK/k9eorJYVI", "SlotMachineDataTest", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        NORMAL_SYMBOLS_LIST,
        MAGNIFICATION_SYMBOLS_LIST,
        WILD_ID,
        ALL_SYMBOL_LIST
      } = _crd && PublicReelConfigTest === void 0 ? (_reportPossibleCrUseOfPublicReelConfigTest({
        error: Error()
      }), PublicReelConfigTest) : PublicReelConfigTest);

      _export("SlotMachineDataTest", SlotMachineDataTest = (_dec = ccclass('SlotMachineDataTest'), _dec(_class = class SlotMachineDataTest extends (_crd && SlotMachineData === void 0 ? (_reportPossibleCrUseOfSlotMachineData({
        error: Error()
      }), SlotMachineData) : SlotMachineData) {
        constructor(...args) {
          super(...args);
          this.allSymbolList = [...ALL_SYMBOL_LIST];
          this.uniqueSymbolList = [[WILD_ID], [WILD_ID], [WILD_ID], [...MAGNIFICATION_SYMBOLS_LIST]];
          this.noAppearSymbolList = [[...MAGNIFICATION_SYMBOLS_LIST], [...MAGNIFICATION_SYMBOLS_LIST], [...MAGNIFICATION_SYMBOLS_LIST], [...NORMAL_SYMBOLS_LIST]];
          this.initSymbolList = [[0, 1, 2], [3, 4, 5], [6, 7, 0], [8, 9, 10]];
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9c5eee7c462074c10b9e12ca534898968b42cfd5.js.map