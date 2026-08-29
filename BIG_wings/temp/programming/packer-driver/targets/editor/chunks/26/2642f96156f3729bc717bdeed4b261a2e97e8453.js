System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, URLParameter, LangSupport, _crd, GameSupportLang;

  function _reportPossibleCrUseOfURLParameter(extras) {
    _reporterNs.report("URLParameter", "../url/URLParameter", _context.meta, extras);
  }

  _export("LangSupport", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      URLParameter = _unresolved_2.URLParameter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "758beybq9dAr7ywuStHkWg9", "GameSupportLang", undefined);

      _export("LangSupport", LangSupport = class LangSupport {
        constructor(source = (_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
          error: Error()
        }), URLParameter) : URLParameter).lang) {
          this.source = void 0;
          this.map = new Map();
          this.source = source;
        }
        /** 
         * 新增支援的語系
         * @param lang 語系
         * @param alias 語系別名
         */


        addSupport(lang, ...alias) {
          if (!this.map.has(lang)) {
            this.map.set(lang, [lang]);
          }

          if (alias) {
            if (alias instanceof Array) {
              const ary = this.map.get(lang);
              alias = alias.filter(v => !ary.includes(v));
              this.map.get(lang).push(...alias);
            }
          }
        }

        deleteSupport(lang) {
          this.map.delete(lang);
        }

        get lang() {
          let result;
          this.map.forEach((alias, lang) => {
            if (alias.includes(this.source) && result == undefined) {
              result = lang;
            }
          });
          return result;
        }

      });

      _export("GameSupportLang", GameSupportLang = new LangSupport());

      GameSupportLang.addSupport('tw', 'zh-tw');
      GameSupportLang.addSupport('cn', 'zh-cn', 'ug');
      GameSupportLang.addSupport('en', 'us');

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2642f96156f3729bc717bdeed4b261a2e97e8453.js.map