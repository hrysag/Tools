System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, log, warn, Debug, _crd;

  _export("Debug", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
      log = _cc.log;
      warn = _cc.warn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0bc3d1NjjRCAYt2vlC3DVnS", "Debug", undefined);

      __checkObsolete__(['_decorator', 'Component', 'debug', 'error', 'log', 'Node', 'warn']);

      _export("Debug", Debug = class Debug {
        static Log(...data) {
          log(data);
        }

        static LogError(...data) {
          error(data);
        }

        static LogWarning(...data) {
          warn(data);
        }

      }); // 解開時讓結果都可以正常看到
      // Debug.Log = console.log;
      // Debug.LogError = console.error;
      // Debug.LogWarning = console.warn;


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3093db19492e2d5261245570932b5ab51ef58157.js.map