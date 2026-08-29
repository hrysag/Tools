System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UniIconBase, _dec, _class, _crd, ccclass, property, DropType, UniDropIconBase;

  function _reportPossibleCrUseOfSymbolBase(extras) {
    _reporterNs.report("SymbolBase", "../Interface/SymbolBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniIconBase(extras) {
    _reporterNs.report("UniIconBase", "../UniIconBase", _context.meta, extras);
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
      UniIconBase = _unresolved_2.UniIconBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65b27df5w5MnpWh2hWrVYC8", "UniDropIconBase", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DropType", DropType = /*#__PURE__*/function (DropType) {
        DropType[DropType["NoDrop"] = 0] = "NoDrop";
        DropType[DropType["DropOut"] = 1] = "DropOut";
        DropType[DropType["DropIn"] = 2] = "DropIn";
        DropType[DropType["Refill"] = 3] = "Refill";
        return DropType;
      }({}));

      _export("UniDropIconBase", UniDropIconBase = (_dec = ccclass('UniDropIconBase'), _dec(_class = class UniDropIconBase extends (_crd && UniIconBase === void 0 ? (_reportPossibleCrUseOfUniIconBase({
        error: Error()
      }), UniIconBase) : UniIconBase) {
        constructor(...args) {
          super(...args);
          this._dropType = DropType.NoDrop;
        }

        get dropType() {
          return this._dropType;
        }

        set dropType(value) {
          this._dropType = value;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=590de8edbb7fa9d831a4f40b34ced526c1899d48.js.map