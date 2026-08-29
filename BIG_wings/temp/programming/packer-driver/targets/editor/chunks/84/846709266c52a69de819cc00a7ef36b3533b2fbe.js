System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function serializer(data) {
    const str = stringify(data);

    var n = str.length,
        idx = -1,
        byteLength = 512,
        bytes = new Uint8Array(byteLength),
        i,
        c,
        _bytes;

    for (i = 0; i < n; ++i) {
      c = str.charCodeAt(i);

      if (c <= 0x7F) {
        bytes[++idx] = c;
      } else if (c <= 0x7FF) {
        bytes[++idx] = 0xC0 | c >>> 6;
        bytes[++idx] = 0x80 | c & 0x3F;
      } else if (c <= 0xFFFF) {
        bytes[++idx] = 0xE0 | c >>> 12;
        bytes[++idx] = 0x80 | c >>> 6 & 0x3F;
        bytes[++idx] = 0x80 | c & 0x3F;
      } else {
        bytes[++idx] = 0xF0 | c >>> 18;
        bytes[++idx] = 0x80 | c >>> 12 & 0x3F;
        bytes[++idx] = 0x80 | c >>> 6 & 0x3F;
        bytes[++idx] = 0x80 | c & 0x3F;
      }

      if (byteLength - idx <= 4) {
        _bytes = bytes;
        byteLength *= 2;
        bytes = new Uint8Array(byteLength);
        bytes.set(_bytes);
      }
    }

    return bytes.subarray(0, ++idx);
  }

  function stringify(data) {
    return JSON.stringify(data);
  }

  _export({
    serializer: serializer,
    stringify: stringify
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e1847yOXa1LBrAC3RDjY70k", "serializer", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=846709266c52a69de819cc00a7ef36b3533b2fbe.js.map