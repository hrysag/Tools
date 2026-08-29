System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectBaseCommand, AnimationEffectEvent, log, DgExplosionCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgExplosionAniEffect(extras) {
    _reporterNs.report("DgExplosionAniEffect", "../aniEffects/DgExplosionAniEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationEffectEvent(extras) {
    _reporterNs.report("AnimationEffectEvent", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventSendObject(extras) {
    _reporterNs.report("EventSendObject", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  _export("DgExplosionCommand", void 0);

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
    }, function (_unresolved_3) {
      AnimationEffectEvent = _unresolved_3.AnimationEffectEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "60d9cejrlNJX6kzU3pKw4OP", "DgExplosionCommand", undefined);
      /**
       * Created by EricHuang on 2023/10/20.
       */


      __checkObsolete__(['log']);

      _export("DgExplosionCommand", DgExplosionCommand = class DgExplosionCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor() {
          super();
          this._dgExplosionAniEffect = void 0;

          this.sendEvt = e => {
            log('Explosion_finish_commands', e);
            this.emit(e.type, e);
          };

          this._dgExplosionAniEffect = arguments.length <= 0 ? undefined : arguments[0];

          this._dgExplosionAniEffect.on((_crd && AnimationEffectEvent === void 0 ? (_reportPossibleCrUseOfAnimationEffectEvent({
            error: Error()
          }), AnimationEffectEvent) : AnimationEffectEvent).COMPLETE, this.sendEvt);
        }

        resetRoomData(value) {}

        setDataAfterSetRoom(value) {}

        execute(value) {
          //this._dgOpenAniEffect.bossOpenInInitGame();
          this._dgExplosionAniEffect.playexplosion();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e0a3b9892f3258507ee3664d1e005268f8301640.js.map