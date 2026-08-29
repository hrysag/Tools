System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd;

  function _reportPossibleCrUseOfIReelInfo(extras) {
    _reporterNs.report("IReelInfo", "../../BasicGameDataDefinition/BasicGameDataDefinition", _context.meta, extras);
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

      _cclegacy._RF.push({}, "efed2ZiHfFAUZ3HYCfIjmRK", "IAniHandoff", undefined);

      /**
       * 針對動畫跨越不同系統(slot machine/showAniController/GameManager)
       * 在不同系統之間交互傳遞動畫資料的介面。
       * 這樣可以免去像之前這樣塞一堆call back方法散落在slotMachine/showAniController/GameManager裡面。
       * 目前操作動畫物件的
       */
      //--需要交換動畫持有者需要實作這個interface
      __checkObsolete__(['Node']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=382d58de6dbe7b714ae4af181b4a1e0f75624671.js.map