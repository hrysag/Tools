System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectBaseCommand, AnimationEffectEvent, log, LightningEffectCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLightningEffect(extras) {
    _reporterNs.report("LightningEffect", "../aniEffects/LightningEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationEffectEvent(extras) {
    _reporterNs.report("AnimationEffectEvent", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventSendObject(extras) {
    _reporterNs.report("EventSendObject", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  _export("LightningEffectCommand", void 0);

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

      _cclegacy._RF.push({}, "71956bDSQ1Nh7pBqCigEqiC", "LightningEffectCommand", undefined);
      /**
       * Created by EricHuang on 2023/10/23.
       */


      __checkObsolete__(['log']);

      _export("LightningEffectCommand", LightningEffectCommand = class LightningEffectCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor() {
          super();
          this._lightningEffect = void 0;

          this.sendEvt = e => {
            log('flashLight_finish_LightningEffectCommand', e);
            this.emit(e.type, e);
          };

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          log('LightningEffectCommand', args);
          this._lightningEffect = args[0];

          this._lightningEffect.on((_crd && AnimationEffectEvent === void 0 ? (_reportPossibleCrUseOfAnimationEffectEvent({
            error: Error()
          }), AnimationEffectEvent) : AnimationEffectEvent).COMPLETE, this.sendEvt);
        }

        resetRoomData(value) {}

        setDataAfterSetRoom(value) {}

        execute(value) {
          this._lightningEffect.showLightningEffect(value.other);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=558dbbb0576ea70bafc843baae25703d40eb841e.js.map