System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, cookieObj;

  function GetCookie(key) {
    if (!cookieObj) cookieObj = parseCookie(window.document.cookie);
    return cookieObj[key];
  }

  function parseCookie(str) {
    if (typeof str !== 'string') {
      throw new TypeError('argument str must be a string');
    }

    var obj = {};
    var index = 0;

    while (index < str.length) {
      var eqIdx = str.indexOf('=', index); // no more cookie pairs

      if (eqIdx === -1) {
        break;
      }

      var endIdx = str.indexOf(';', index);

      if (endIdx === -1) {
        endIdx = str.length;
      } else if (endIdx < eqIdx) {
        // backtrack on prior semicolon
        index = str.lastIndexOf(';', eqIdx - 1) + 1;
        continue;
      }

      var key = str.slice(index, eqIdx).trim(); // only assign once

      if (undefined === obj[key]) {
        var val = str.slice(eqIdx + 1, endIdx).trim(); // quoted values

        if (val.charCodeAt(0) === 0x22) {
          val = val.slice(1, -1);
        }

        obj[key] = tryDecode(val);
      }

      index = endIdx + 1;
    }

    return obj;
  }

  function decode(str) {
    return str.indexOf('%') !== -1 ? decodeURIComponent(str) : str;
  }

  function tryDecode(str) {
    try {
      return decode(str);
    } catch (e) {
      return str;
    }
  }

  _export({
    GetCookie: GetCookie,
    parseCookie: parseCookie
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "13a21ASOX1AE7ult7un9zrU", "Cookie", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=937053a3de7119b7aa9acfd0d90f8c8530b3b076.js.map