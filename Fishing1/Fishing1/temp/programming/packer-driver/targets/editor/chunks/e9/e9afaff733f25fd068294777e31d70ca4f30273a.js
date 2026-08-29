System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectBaseCommand, AnimationEffectEvent, log, DgParticleCoinsAnieffectCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationEffectEvent(extras) {
    _reporterNs.report("AnimationEffectEvent", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventSendObject(extras) {
    _reporterNs.report("EventSendObject", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgParticleCoinsAnieffect(extras) {
    _reporterNs.report("DgParticleCoinsAnieffect", "../aniEffects/DgParticleCoinsAnieffect", _context.meta, extras);
  }

  _export("DgParticleCoinsAnieffectCommand", void 0);

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

      _cclegacy._RF.push({}, "2f101aDznVD5JpQFgEoPLs/", "DgParticleCoinsAnieffectCommand", undefined);
      /**
       * Created by EricHuang on 2023/10/24.
       */


      __checkObsolete__(['log']);

      _export("DgParticleCoinsAnieffectCommand", DgParticleCoinsAnieffectCommand = class DgParticleCoinsAnieffectCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor(...args) {
          super();
          this._dgParticleCoinsAnieffect = void 0;

          this.sendEvt = e => {
            log('particle_finish_commands', e);
            this.emit(e.type, e);
          };

          log('DgParticleCoinsAnieffectCommand', args);
          this._dgParticleCoinsAnieffect = args[0];

          this._dgParticleCoinsAnieffect.on((_crd && AnimationEffectEvent === void 0 ? (_reportPossibleCrUseOfAnimationEffectEvent({
            error: Error()
          }), AnimationEffectEvent) : AnimationEffectEvent).COMPLETE, this.sendEvt);
        }

        resetRoomData(value) {}

        setDataAfterSetRoom(value) {}

        execute(value) {
          //this._dgTitleAni.showOpenEffect();
          //this._dgAnnounceAni.showAnnounceForGD(value.other.id,value.other.payOff);
          this._dgParticleCoinsAnieffect.showParticleCoins();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e9afaff733f25fd068294777e31d70ca4f30273a.js.map