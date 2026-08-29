System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AniEffectBaseCommand, DgOutCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgOpenAniEffect(extras) {
    _reporterNs.report("DgOpenAniEffect", "../aniEffects/DgOpenAniEffect", _context.meta, extras);
  }

  _export("DgOutCommand", void 0);

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

      _cclegacy._RF.push({}, "2d4a6pAtspOyZLP8PrLvGvU", "DgOutCommand", undefined);
      /**
       * Created by EricHuang on 2023/10/18.
       */


      _export("DgOutCommand", DgOutCommand = class DgOutCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor(...args) {
          super();
          this._dgOpenAniEffect = void 0;
          this._dgOpenAniEffect = args[0];
        }

        resetRoomData(value) {}

        setDataAfterSetRoom(value) {}

        execute(value) {
          this._dgOpenAniEffect.bossOut();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fd0b943d1399ca1f4086e9e822b416b67dbbe1f8.js.map