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
        static Log() {
          for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
            data[_key] = arguments[_key];
          }

          log(data);
        }

        static LogError() {
          for (var _len2 = arguments.length, data = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            data[_key2] = arguments[_key2];
          }

          error(data);
        }

        static LogWarning() {
          for (var _len3 = arguments.length, data = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            data[_key3] = arguments[_key3];
          }

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
//# sourceMappingURL=76b6fcf7eddb1318d701c5be5b9a74c04f36acbe.js.map