System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, FlowProcessKeys;

  function _reportPossibleCrUseOfIFlowProcessKeys(extras) {
    _reporterNs.report("IFlowProcessKeys", "./Definitions/IFlowProcessKeys", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5d4146YW4JJBaGOsyy8tNvL", "FlowProcessKeys", undefined);

      //--廢棄--

      /**
       * FlowProcessKeys
       * ------------------------------------------------------------
       * 預設定義所有流程 / 階段的關鍵字名稱。
       * <可自己擴充定義IFlowProcessKeys介面內容(因為我做成可以很自由擴充的宣告了)>
       */
      _export("FlowProcessKeys", FlowProcessKeys = {
        // 主流程
        RunShowProcess: 'RunShowProcess',
        CleanAllPlaying: 'CleanAllPlaying',
        // 常見子階段
        ShowBigWin: 'ShowBigWin',
        PlayWinRound: 'PlayWinRound',
        playNoWinInThisRound: 'playNoWinInThisRound',
        ProcessResetAni: 'ProcessResetAni',
        ShowWinScore: 'ShowWinScore',
        ShowWinScoreForBottomText: 'ShowWinScoreForBottomText',
        ProcessBeforePlaySequence: 'ProcessBeforePlaySequence',
        // 模式流程
        //FGSequence: 'FGSequence',
        //BonusSequence: 'BonusSequence',
        //ReSpinSequence: 'ReSpinSequence',
        //JPSequence: 'JPSequence',
        playWinInThisRound: 'playWinInThisRound',
        // 其他
        Idle: 'Idle'
      });
      /** FlowProcessKeys 的型別 */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=49075f887151d86ff23e75653bbb76bc9e69f51d.js.map