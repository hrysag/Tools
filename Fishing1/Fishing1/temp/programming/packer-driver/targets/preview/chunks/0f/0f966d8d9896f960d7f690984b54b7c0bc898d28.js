System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd;

  function _reportPossibleCrUseOffishMeshState(extras) {
    _reporterNs.report("fishMeshState", "../../../game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishCustomAnimation(extras) {
    _reporterNs.report("FishCustomAnimation", "../../../utils/FishCustomAnimation", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b07f1zSiRPw5g6us1KJ414", "FishData", undefined);

      /**
       * Created by EricHuang on 2023/9/20.
       */
      __checkObsolete__(['Collider2D', 'Collider', 'Node']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f966d8d9896f960d7f690984b54b7c0bc898d28.js.map