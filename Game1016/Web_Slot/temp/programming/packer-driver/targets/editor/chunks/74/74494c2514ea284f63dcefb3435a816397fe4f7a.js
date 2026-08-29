System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _class2, _crd, ccclass, property, GoogleLog;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
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
        static Log(gameCode = 'noCode', data = '', other = '') {
          console.error("GoogleLog.Log is deprecated, please use Utility.log instead.");
          return;
          let formData = new FormData();
          formData.append('time', Utility.getCurrentTime());
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
//# sourceMappingURL=74494c2514ea284f63dcefb3435a816397fe4f7a.js.map