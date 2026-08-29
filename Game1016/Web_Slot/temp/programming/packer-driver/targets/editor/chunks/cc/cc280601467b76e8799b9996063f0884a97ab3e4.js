System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GLOBAL_DATA_WRITE_KEY;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e252RgMlFK17fTj9OGp2d2", "GlobalDataWriteKey", undefined);

      /**
       * @author:Eric 20250805
       * @description:
       * 不要亂用這個key,這是唯一能有<寫入>權限的key
       * 交給gameManager來使用
       * @example:
       * https://www.typescriptlang.org/docs/handbook/symbols.html
       * https://wangdoc.com/typescript/symbol
       * 
       * 
       */
      _export("GLOBAL_DATA_WRITE_KEY", GLOBAL_DATA_WRITE_KEY = Symbol('GLOBAL_DATA_WRITE_KEY'));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cc280601467b76e8799b9996063f0884a97ab3e4.js.map