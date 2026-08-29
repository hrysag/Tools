System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, NetConst, _crd;

  _export("NetConst", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b28a49o0g9B/JIGG5dpyQTb", "NetConst", undefined);

      _export("NetConst", NetConst = class NetConst {});

      NetConst.SAVE_BITS_MEGA_STRING = 3;
      // 傳給server時用於紀錄超大字串長度的位元組數.
      NetConst.SAVE_BITS_STRING = 2;
      // 傳給server時用於紀錄字串長度的位元組數.
      NetConst.HEADER_SIZE = 3;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=876f2336d64a20684932c1e6a3e42333f3cd4ce5.js.map