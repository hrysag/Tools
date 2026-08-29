System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd;

  function _reportPossibleCrUseOfContainerWholeBehavior(extras) {
    _reporterNs.report("ContainerWholeBehavior", "./Component/ContainerWholeBehavior", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../ReferencePathForMyUtils", _context.meta, extras);
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

      _cclegacy._RF.push({}, "5dcf1mMkyVPR409FLnaoHit", "IBasicShowContainerManager", undefined);

      __checkObsolete__(['Node']); //export interface IBasicShowContainerManager<CBehavior extends ContainerBasicBehavior> {
      //--要加入管理容器工具的<容器>都要實作這個介面


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9fd5f36b5c54c8d2f25c7e2a960313955f6cd65e.js.map