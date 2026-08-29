System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var req, loader, d;
  return {
    setters: [function (_unresolved_) {
      req = _unresolved_.__cjsMetaURL;
    }, function (_unresolved_2) {
      loader = _unresolved_2.default;
    }, function (_unresolved_3) {
      var _exportObj = {};

      for (var _key in _unresolved_3) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _unresolved_3[_key];
      }

      _export(_exportObj);
    }, function (_unresolved_4) {
      d = _unresolved_4.default;
    }],
    execute: function () {
      // I am the facade module who provides access to the CommonJS module './ua-parser.js'~
      if (!req) {
        loader.throwInvalidWrapper('./ua-parser.js', _context.meta.url);
      }

      loader.require(req);

      _export("default", d);
    }
  };
});
//# sourceMappingURL=739a673e8360fb5e69b40ec77fa3a2365639d3ec.js.map