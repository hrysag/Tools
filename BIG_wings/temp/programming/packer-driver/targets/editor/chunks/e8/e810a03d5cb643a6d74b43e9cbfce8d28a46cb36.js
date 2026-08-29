System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function deserializer(event) {
    const {
      data
    } = event;

    if (typeof data === 'string') {
      return fromString(data);
    } else {
      return fromArrayBuffer(data);
    }
  }

  function fromString(data) {
    return JSON.parse(data);
  }

  function fromArrayBuffer(data) {
    var array = new Uint8Array(data);
    var resultString, i, len, c;
    var char2, char3;
    resultString = "";
    len = array.length;
    i = 0;

    while (i < len) {
      c = array[i++];

      switch (c >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          // 0xxxxxxx
          resultString += String.fromCharCode(c);
          break;

        case 12:
        case 13:
          // 110x xxxx   10xx xxxx
          char2 = array[i++];
          resultString += String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F);
          break;

        case 14:
          // 1110 xxxx  10xx xxxx  10xx xxxx
          char2 = array[i++];
          char3 = array[i++];
          resultString += String.fromCharCode((c & 0x0F) << 12 | (char2 & 0x3F) << 6 | (char3 & 0x3F) << 0);
          break;
      }
    }

    return fromString(resultString);
  }

  _export("deserializer", deserializer);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b295zoGAdPkaPHkIRqanww", "deserializer", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e810a03d5cb643a6d74b43e9cbfce8d28a46cb36.js.map