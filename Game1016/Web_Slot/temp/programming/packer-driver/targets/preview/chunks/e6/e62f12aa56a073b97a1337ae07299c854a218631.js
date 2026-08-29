System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfAnimationStateType(extras) {
    _reporterNs.report("AnimationStateType", "../Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "abba8dvlsZEJbkD6dL6UVrP", "IPlayOptions", undefined);
      /**
       * this.resolveTargetName('MyClip');                  // 直接 targetName
          this.resolveTargetName('SuperWin');                // 自訂 stateKey → 轉成對應 targetName
          this.resolveTargetName(AnimationStateType.Win);    // Enum stateKey
          this.resolveTargetName({ aniState: 'SuperWin' });  // 指定 stateKey
          this.resolveTargetName({ targetName: 'MyClip' });  // 指定 targetName
          this.resolveTargetName(0);                         // 取第 0 筆 AnimationState 的 targetName
       */
      //--定義播放的參數內容
      // 最少需求：state / prop 都要有 targetName；state 另外要能提供 stateKey


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e62f12aa56a073b97a1337ae07299c854a218631.js.map