System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2afc7fKDTdB+J9TcSb1JuEY", "IGameGlobalData", undefined);
      /**
       * @author:Eric 20250805
       * @description:
       * 使用interface來定義讀取與寫入的行為,將存取global data的權限分開
       * 只有gameManager能夠取得寫入權限
       * 金鑰是GLOBAL_DATA_WRITE_KEY
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6a0e308115273fe8d2638b3de61f6a0fe7669829.js.map