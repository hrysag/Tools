System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, randomRangeInt, ObjPoolMgr, Pool, SymbolNumber, _crd;

  function _reportPossibleCrUseOfSymbolBase(extras) {
    _reporterNs.report("SymbolBase", "../../Scripts/Interface/SymbolBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIObjPool(extras) {
    _reporterNs.report("IObjPool", "db://assets/Scripts/Core/IObjPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjPoolMgr(extras) {
    _reporterNs.report("ObjPoolMgr", "db://assets/Scripts/Core/ObjPoolMgr", _context.meta, extras);
  }

  _export("SymbolNumber", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      randomRangeInt = _cc.randomRangeInt;
    }, function (_unresolved_2) {
      ObjPoolMgr = _unresolved_2.ObjPoolMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fcaa4y1eNMT69J6PI5D3Lv", "SymbolNumber", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'randomRangeInt']);

      Pool = class Pool extends (_crd && ObjPoolMgr === void 0 ? (_reportPossibleCrUseOfObjPoolMgr({
        error: Error()
      }), ObjPoolMgr) : ObjPoolMgr) {
        constructor() {
          super();
          this.init(10, SymbolNumber.createPoolObject);
        }

      };

      _export("SymbolNumber", SymbolNumber = class SymbolNumber {
        get symbolID() {
          return this._symbolID;
        }

        set symbolID(value) {
          this._symbolID = value;
        }

        get stopSymbol() {
          return this._stopSymbol;
        }

        set stopSymbol(value) {
          this._stopSymbol = value;
        }

        constructor() {
          this._stopSymbol = false;
          this._symbolID = 0;
          this.symbolCount = 8;
        }

        static createPoolObject() {
          return new SymbolNumber();
        }

        randomValue() {
          this.symbolID = this.randomSymbol();
        }

        randomSymbol() {
          return randomRangeInt(0, this.symbolCount);
        }

        onObjLoad() {}

        onObjInstance() {}

        onObjRecycle() {
          this.symbolID = -1;
        }

        onObjUnLoad() {}

      });

      SymbolNumber.pool = new Pool();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ce2eb27cc9b97ae3f7e268fd8b51b9d6dce5d88f.js.map