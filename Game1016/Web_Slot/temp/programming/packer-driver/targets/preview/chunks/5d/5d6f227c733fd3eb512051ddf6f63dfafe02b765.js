System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, randomRangeInt, SymbolNumber, _crd;

  function _reportPossibleCrUseOfSymbolBase(extras) {
    _reporterNs.report("SymbolBase", "./ReferencePathForUniSlot", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80a37EQaZpHjIt3Yy1URTFr", "SymbolNumber", undefined);

      __checkObsolete__(['_decorator', 'randomRangeInt']);

      //import { IObjPool } from 'db://assets/Scripts/Core/IObjPool';
      //import { ObjPoolMgr } from 'db://assets/Scripts/Core/ObjPoolMgr';

      /*
      class Pool extends ObjPoolMgr<SymbolNumber> {
          public constructor() {
              super();
              this.init(10, SymbolNumber.createPoolObject);
          }
      }*/
      _export("SymbolNumber", SymbolNumber = class SymbolNumber {
        //--是否為結果/亂數
        get isResult() {
          return this._isResult;
        }

        set isResult(value) {
          this._isResult = value;
        }

        get iconIndex() {
          return this._iconIndex;
        }

        set iconIndex(value) {
          this._iconIndex = value;
        }

        get reelIndex() {
          return this._reelIndex;
        }

        set reelIndex(value) {
          this._reelIndex = value;
        }

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
          //---new------
          this._reelIndex = -1;
          //--軸的index
          this._iconIndex = -1;
          //--icon的index
          this._isResult = false;
        }
        /*
        public static createPoolObject(): SymbolNumber {
            return new SymbolNumber();
        }*/
        //public static pool: Pool = new Pool();


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
          this._iconIndex = -1;
          this._reelIndex = -1;
          this._isResult = false;
        }

        onObjUnLoad() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5d6f227c733fd3eb512051ddf6f63dfafe02b765.js.map