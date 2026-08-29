System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Utility, _dec, _class, _class2, _crd, ccclass, property, GoogleLog;

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "./Utility", _context.meta, extras);
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
      Utility = _unresolved_2.Utility;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "09066juf5FCaLDBrGxhpEkV", "GoogleLog", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GoogleLog", GoogleLog = (_dec = ccclass('GoogleLog'), _dec(_class = (_class2 = class GoogleLog {
        static Log(gameCode, data, other) {
          if (gameCode === void 0) {
            gameCode = 'noCode';
          }

          if (data === void 0) {
            data = '';
          }

          if (other === void 0) {
            other = '';
          }

          console.error("GoogleLog.Log is deprecated, please use Utility.log instead.");
          return;
          var formData = new FormData();
          formData.append('time', (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).getCurrentTime());
          formData.append('gameCode', gameCode);
          formData.append('data', data);
          formData.append('other', other);
          fetch(this.URL, {
            method: "POST",
            body: formData
          }).then(response => {});
        }

      }, _class2.URL = 'https://script.google.com/macros/s/AKfycbxxzdOUNAwM6atWHO2m23Vz83aNwoJgz7GJ0AHivkvhvk8z8tRaj_DjFscoK4KyG8fe/exec', _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=719405181c62996fd81dc4c8cfae70060b8f5e92.js.map