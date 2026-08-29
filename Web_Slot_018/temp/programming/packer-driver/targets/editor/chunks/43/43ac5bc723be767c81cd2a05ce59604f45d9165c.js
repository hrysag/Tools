System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, StringExt, _crd;

  _export("StringExt", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "800551L0jhPiYgZrvv/oB2b", "StringExt", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Node']);

      _export("StringExt", StringExt = class StringExt {
        static ToBoolean(str) {
          let number = Number(str);

          if (isNaN(number)) {
            return str.toLowerCase() === 'true';
          } else {
            return number > 0;
          }
        }

        static ToNumber(str) {
          let number = Number(str);

          if (isNaN(number)) {
            //console.error(`StringExt.ToNumber error : ${str} is not number`);
            return [false, null];
          } else {
            return [true, number];
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=43ac5bc723be767c81cd2a05ce59604f45d9165c.js.map