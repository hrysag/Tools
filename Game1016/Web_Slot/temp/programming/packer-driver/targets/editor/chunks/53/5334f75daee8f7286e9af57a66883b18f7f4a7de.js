System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Utility, BetData, _crd;

  function _reportPossibleCrUseOfBinaryBuffer(extras) {
    _reporterNs.report("BinaryBuffer", "../../Communication/BinaryBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../Utils/Core", _context.meta, extras);
  }

  _export("BetData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cdabduAXeNDS6bgkAYbGYxR", "BetData", undefined);

      /**
       * 下注資料
       */
      _export("BetData", BetData = class BetData {
        // 這局的spinId

        /**
         * 建構
         * @param json Server 回覆的下注結果資料
         */
        constructor(json = null) {
          this.bet = 0;
          // 這局的押注
          this.score = 0;
          // 這局的得分
          this.slotData = "";
          // slot base64資料
          this.slotDataBinaryBuffer = void 0;
          // slot BinaryBuffer資料
          this.coin = 0;
          // 結束這局後的總分
          this.spinId = "";

          if (json) {
            this.bet = json.get('bet'); // 這局的押注

            this.spinId = json.get('spinId'); // 這局的spinId

            this.score = json.get('score'); // 這局的得分

            this.coin = json.get('coin'); // 結束這局後的總分

            this.slotData = json.get('slotData'); //  base64

            this.slotDataBinaryBuffer = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).base64ToBinaryBuffer(this.slotData);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5334f75daee8f7286e9af57a66883b18f7f4a7de.js.map