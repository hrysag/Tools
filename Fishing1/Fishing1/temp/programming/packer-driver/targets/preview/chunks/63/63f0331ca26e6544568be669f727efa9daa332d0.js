System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AniEffectBaseCommand, DgOpenCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgOpenAniEffect(extras) {
    _reporterNs.report("DgOpenAniEffect", "../aniEffects/DgOpenAniEffect", _context.meta, extras);
  }

  _export("DgOpenCommand", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AniEffectBaseCommand = _unresolved_2.AniEffectBaseCommand;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a91982AjatOP7L7hl0QigTG", "DgOpenCommand", undefined);
      /**
       * Created by EricHuang on 2023/10/18.
       */


      _export("DgOpenCommand", DgOpenCommand = class DgOpenCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor() {
          super();
          this._dgOpenAniEffect = void 0;
          this._dgOpenAniEffect = arguments.length <= 0 ? undefined : arguments[0];
        }

        resetRoomData(value) {}

        setDataAfterSetRoom(value) {}

        execute(value) {
          this._dgOpenAniEffect.bossOpenInInitGame();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=63f0331ca26e6544568be669f727efa9daa332d0.js.map