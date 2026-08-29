System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectBaseCommand, log, DeathLightAniEffectCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeathLightAniEffect(extras) {
    _reporterNs.report("DeathLightAniEffect", "../aniEffects/DeathLightAniEffect", _context.meta, extras);
  }

  _export("DeathLightAniEffectCommand", void 0);

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

      _cclegacy._RF.push({}, "f34529yq7VIo5ahDaOkXX33", "DeathLightAniEffectCommand", undefined);
      /**
       * Created by EricHuang on 2023/10/23.
       */


      __checkObsolete__(['log']);

      _export("DeathLightAniEffectCommand", DeathLightAniEffectCommand = class DeathLightAniEffectCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor() {
          super();
          this._deathLightAniEffect = void 0;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          log('DeathLightAniEffectCommand', args);
          this._deathLightAniEffect = args[0]; //this._deathLightAniEffect.on(AnimationEffectEvent.COMPLETE,this.sendEvt);
        }
        /*
        private sendEvt=(e:EventSendObject)=>
        {
            log('deathlight_finish_DeathLightAniEffectCommand',e);
             this.emit(e.type,e);
        }*/


        resetRoomData(value) {}

        setDataAfterSetRoom(value) {}

        execute(value) {
          this._deathLightAniEffect.showDeathLight(value.other);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=083fc39cec8feebb4a1d46ea7debcb007ea21c9a.js.map