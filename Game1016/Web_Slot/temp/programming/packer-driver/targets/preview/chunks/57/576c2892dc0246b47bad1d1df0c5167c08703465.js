System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd;

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReelInfo(extras) {
    _reporterNs.report("IReelInfo", "../../BasicGameDataDefinition/BasicGameDataDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationPlayInfo(extras) {
    _reporterNs.report("AnimationPlayInfo", "../../AnimationSystemV2/Definitions/AnimationDataOptions", _context.meta, extras);
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

      _cclegacy._RF.push({}, "ee8bfnRtVBLap1tes8aGoxa", "IAniBuilder", undefined);

      __checkObsolete__(['Vec3']);
      /*
      export interface IReelInfo {
          reelIndex: number;
          iconIndex: number;
          symbolId: number;//--這邊指的是server給的資料(server symbol id)
          groupId: number;
      }*/
      //---這個是用來設定要播放的動畫資料(這個要放回animationPlayInfo裡面)

      /**
       * 再去修飾產生出來的aniNode
       * 就是再把資料塞進去這個aniNode裡面,或是你要幹嘛就幹嘛
       * 例如: 塞入動畫控制器的參數、設定群組ID等
       * 
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=576c2892dc0246b47bad1d1df0c5167c08703465.js.map