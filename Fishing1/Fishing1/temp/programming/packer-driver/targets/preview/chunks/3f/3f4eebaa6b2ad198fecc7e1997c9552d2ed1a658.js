System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectBaseCommand, log, CallAniEffectCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCallAniEffect(extras) {
    _reporterNs.report("CallAniEffect", "../aniEffects/CallAniEffect", _context.meta, extras);
  }

  _export("CallAniEffectCommand", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      AniEffectBaseCommand = _unresolved_2.AniEffectBaseCommand;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8bd9xZghVCi7g1Bo61SQMO", "CallAniEffectCommand", undefined);
      /**
       * Created by EricHuang on 2023/11/20.
       */


      __checkObsolete__(['log']);

      _export("CallAniEffectCommand", CallAniEffectCommand = class CallAniEffectCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor() {
          super();
          this._callAniEffect = void 0;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          log('AwardDiscAniEffectCommand', args);
          this._callAniEffect = args[0];
        }

        resetRoomData(value) {
          this._callAniEffect.resetRoomData();
        }

        setDataAfterSetRoom(value) {
          this._callAniEffect.setDataAfterSetRoom(value.positions);
        }

        execute(value) {
          log('execute__callAniEffectCommand', value);

          if (value.other.close) {
            this._callAniEffect.closeEffect();
          } else {
            this._callAniEffect.showCallPropEffect(value.other.index, value.other.swp, value.other.ewp);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3f4eebaa6b2ad198fecc7e1997c9552d2ed1a658.js.map