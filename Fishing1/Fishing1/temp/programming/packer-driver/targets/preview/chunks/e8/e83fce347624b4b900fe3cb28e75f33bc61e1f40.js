System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EventTarget, AniEffectBaseCommand, _crd;

  _export("AniEffectBaseCommand", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventTarget = _cc.EventTarget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41070CCz4NKK5zeJ2uta7wU", "AniEffectDefinitionsBase", undefined);
      /**
       * Created by EricHuang on 2023/10/05.
       */


      //--每個執行動作都需要依靠不同的command
      //--所以有可能不同的command中會有相同的class,只是操作的動作不同
      __checkObsolete__(['Node', 'EventTarget']); //--excute function data
      //--setting datat


      _export("AniEffectBaseCommand", AniEffectBaseCommand = class AniEffectBaseCommand extends EventTarget {
        constructor() {
          super();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e83fce347624b4b900fe3cb28e75f33bc61e1f40.js.map