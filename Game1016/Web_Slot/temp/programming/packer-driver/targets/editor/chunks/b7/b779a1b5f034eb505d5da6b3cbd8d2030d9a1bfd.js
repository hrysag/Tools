System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, BasicShowResultProcessKey, BasicGameFlowProcessKey;

  function _reportPossibleCrUseOfIShowResultProcessKey(extras) {
    _reporterNs.report("IShowResultProcessKey", "../Definitions/IFlowProcessKeys", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBaseGameProcessKey(extras) {
    _reporterNs.report("IBaseGameProcessKey", "../Definitions/IFlowProcessKeys", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "685e3juiXZFRZlUYSU7qYoI", "BasicGameFlowProcessKey", undefined);

      _export("BasicShowResultProcessKey", BasicShowResultProcessKey = {
        RunShowProcess: 'RunShowProcess',
        CleanAllPlaying: 'CleanAllPlaying',
        ShowBigWin: 'ShowBigWin',
        PlayWinRound: 'PlayWinRound',
        playNoWinInThisRound: 'playNoWinInThisRound',
        ProcessResetAni: 'ProcessResetAni',
        ShowWinScore: 'ShowWinScore',
        ShowWinScoreForBottomText: 'ShowWinScoreForBottomText',
        ProcessBeforePlaySequence: 'ProcessBeforePlaySequence',
        playWinInThisRound: 'playWinInThisRound',
        Idle: 'Idle' //Other: null//--允許動態擴增

      }); // key 名稱 (屬性名)


      // value 值 (屬性值)
      //export type BasicFlowProcessKeyValue = typeof BasicShowResultProcessKey[keyof typeof BasicShowResultProcessKey];
      _export("BasicGameFlowProcessKey", BasicGameFlowProcessKey = {
        START_ROLL: 'START_ROLL',
        STOP_ROLL: 'STOP_ROLL',
        BEFORE_ALL_REEL_ROLL_END: 'BEFORE_ALL_REEL_ROLL_END',
        SHOW_RESULT_AFTER_ROLL: 'SHOW_RESULT_AFTER_ROLL',
        PROCESS_ROUND: 'PROCESS_ROUND',
        PROCESS_NORMAL_ROUND: 'PROCESS_NORMAL_ROUND',
        CORE_MAIN_PROCESS: 'CORE_MAIN_PROCESS',
        AUTO_ROLL_TIME: 'AUTO_ROLL_TIME' //OTHER: null//--允許動態擴增

      });

      //export type BasicGameProcessKey = keyof IBaseGameProcessKey;

      /**
       *  擴增範例:
          import { IFlowProcessKeys, FlowProcessKeys } from './FlowProcessKeys';
      
          export interface IFlowProcessKeys1016 extends IFlowProcessKeys {
              FGSequence: string;
              BonusSequence: string;
              ReSpinSequence: string;
              JPSequence: string;
          }
      
          export const FlowProcessKeys1016: IFlowProcessKeys1016 = {
              ...FlowProcessKeys,
              FGSequence: 'FGSequence',
              BonusSequence: 'BonusSequence',
              ReSpinSequence: 'ReSpinSequence',
              JPSequence: 'JPSequence',
          };
      
          export type FlowProcessKey1016 = keyof IFlowProcessKeys1016;
       */
      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b779a1b5f034eb505d5da6b3cbd8d2030d9a1bfd.js.map