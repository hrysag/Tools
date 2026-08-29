System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, FishCustomAnimation, _crd;

  _export("FishCustomAnimation", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "84e70iO6StP1KtJVWJB5bcI", "FishCustomAnimation", undefined);
      /**
       * Created by EricHuang on 2023/7/17.
       * 特殊的fish mesh(主要用於自己手動程式碼建立,例如規律的圓盤物件)
       */


      __checkObsolete__(['Node']);

      __checkObsolete__(['Rect']);

      _export("FishCustomAnimation", FishCustomAnimation = class FishCustomAnimation extends Node {
        constructor() {
          super();
        } //---override it 


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=590f739ad2912e56a5685b23f6fba450f4e79672.js.map