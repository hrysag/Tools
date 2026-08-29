System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, URLParameter, DictImpl, _crd, Dict;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfURLParameter(extras) {
    _reporterNs.report("URLParameter", "../url/URLParameter", _context.meta, extras);
  }

  _export("DictImpl", void 0);

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

      _cclegacy._RF.push({}, "0a141tAyM9NxpF3r6QzufSd", "Dict", undefined); // import { LZMA } from "../../lzma/LZMA";


      _export("DictImpl", DictImpl = class DictImpl {
        set lang(value) {
          this._lang = value;
          this.load();
        }

        set origin(value) {
          this._origin = value;
        }

        constructor(origin, lang) {
          this._origin = void 0;
          this._lang = void 0;
          this.dict = {};
          this._origin = origin;
          this._lang = lang;
          this.load();
        }

        load() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.dict) return;
            var url = _this._origin + "/ipl/app/flash/pig/game/common/dict/" + _this._lang + ".json";
            return fetch(url).then(res => {
              if (res.ok) return res.json();
            }).then(json => {
              _this.dict = json;
            });
          })();
        }

        get(key) {
          var _this$dict;

          var result = (_this$dict = this.dict) == null ? void 0 : _this$dict[key];
          return result != null ? result : key;
        }

        has(key) {
          var _this$dict2;

          return !!((_this$dict2 = this.dict) != null && _this$dict2[key]);
        }

      });

      _export("Dict", Dict = new DictImpl(location.origin, (_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
        error: Error()
      }), URLParameter) : URLParameter).iplLang));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8c12eedadca135ef6c1aff0cb198153a124acf23.js.map