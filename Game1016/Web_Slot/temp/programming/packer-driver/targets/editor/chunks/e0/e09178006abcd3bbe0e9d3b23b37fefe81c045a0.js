System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfISymbolOwnerAgent(extras) {
    _reporterNs.report("ISymbolOwnerAgent", "../../ReferencePath", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2bd6qsftVHXa+LqPq4hFgP", "IFunctionOwnerAgent", undefined); //--註冊使用的FunctionType

      /**
       * 我其實沒有很想要這樣做..太秀下限了.
       * 但因為時間有限下次再處理^_^
       * <擁有跨系統呼叫owner的獨有方法,寄生在handoff內> 
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e09178006abcd3bbe0e9d3b23b37fefe81c045a0.js.map