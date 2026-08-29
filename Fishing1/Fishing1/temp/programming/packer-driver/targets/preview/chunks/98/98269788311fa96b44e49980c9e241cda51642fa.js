System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingResManager, GameUtils, AnimationEffectEvent, Fish1AniEffectID, instantiate, ParticleSystem, EventTarget, log, DgParticleCoinsAnieffect, _crd;

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOffrustumInfoData(extras) {
    _reporterNs.report("frustumInfoData", "../../../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationEffectEvent(extras) {
    _reporterNs.report("AnimationEffectEvent", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1AniEffectID(extras) {
    _reporterNs.report("Fish1AniEffectID", "../Fish1AniEffectDefinitions", _context.meta, extras);
  }

  _export("DgParticleCoinsAnieffect", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      ParticleSystem = _cc.ParticleSystem;
      EventTarget = _cc.EventTarget;
      log = _cc.log;
    }, function (_unresolved_2) {
      LoadingResManager = _unresolved_2.LoadingResManager;
    }, function (_unresolved_3) {
      GameUtils = _unresolved_3.GameUtils;
    }, function (_unresolved_4) {
      AnimationEffectEvent = _unresolved_4.AnimationEffectEvent;
    }, function (_unresolved_5) {
      Fish1AniEffectID = _unresolved_5.Fish1AniEffectID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0ffa7oZUwdNU6qEf3FX83AS", "DgParticleCoinsAnieffect", undefined);
      /**
       * Created by EricHuang on 2023/10/24.
       */


      __checkObsolete__(['Scene', 'instantiate', 'Node', 'ParticleSystem', 'EventTarget']);

      __checkObsolete__(['log']);

      _export("DgParticleCoinsAnieffect", DgParticleCoinsAnieffect = class DgParticleCoinsAnieffect extends EventTarget {
        constructor() {
          super();
          this._containerNode = void 0;
          this._allParticleContainer = void 0;
          this._topParticleEmitter = void 0;
          this._bottomParticleEmitter = void 0;
          this._frustum = void 0;
          this._interval = void 0;
          this._tweenObj = void 0;

          this.checkParticleCount = () => {
            //-ParticleCount=0播放完畢...哀.超爛
            if (this._topParticleEmitter.getParticleCount() == 0 && this._bottomParticleEmitter.getParticleCount() == 0) {
              window.clearInterval(this._interval);
              this._interval = null; //log('check_DgParticleCoinsAnieffect_finish!!!!',this._interval);

              this.destory();
              this.emit((_crd && AnimationEffectEvent === void 0 ? (_reportPossibleCrUseOfAnimationEffectEvent({
                error: Error()
              }), AnimationEffectEvent) : AnimationEffectEvent).COMPLETE, {
                type: (_crd && AnimationEffectEvent === void 0 ? (_reportPossibleCrUseOfAnimationEffectEvent({
                  error: Error()
                }), AnimationEffectEvent) : AnimationEffectEvent).COMPLETE,
                sendObj: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                  error: Error()
                }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_KILL_PARTICLE_COINS
              });
            }
          };

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          this._containerNode = args[0].container;
          this._frustum = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).getFrustumData();
          this._allParticleContainer = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(args[0].other.prefabId));
          this._topParticleEmitter = this._allParticleContainer.getComponent(ParticleSystem);
          this._bottomParticleEmitter = this._allParticleContainer.children[0].getComponent(ParticleSystem); //this._topParticleEmitter.node.on(ParticleSystem.Ev);

          log('check_DgParticleCoinsAnieffect', args[0], this._allParticleContainer, this._topParticleEmitter, this._bottomParticleEmitter); //this._containerNode.addChild(this._allParticleContainer);

          this._allParticleContainer.setPosition(0, this._frustum.topPoint);

          this._allParticleContainer.active = false;
          this._interval = null;
          this._tweenObj = {};
        }

        destory() {
          this._topParticleEmitter.stop();

          this._bottomParticleEmitter.stop();

          this._topParticleEmitter.clear();

          this._topParticleEmitter.stopEmitting();

          this._bottomParticleEmitter.clear();

          this._bottomParticleEmitter.stopEmitting();

          this._containerNode.removeChild(this._allParticleContainer);

          this._allParticleContainer.active = false;
        }

        showParticleCoins() {
          if (TweenMax.isTweening(this._tweenObj)) {
            TweenMax.killTweensOf(this._tweenObj);
            this.destory();
          } else if (this._interval != null) {
            window.clearInterval(this._interval);
            this._interval = null;
            this.destory();
          }

          this._containerNode.addChild(this._allParticleContainer);

          this._allParticleContainer.active = true; //--這行爆掉

          this._topParticleEmitter.play();

          this._bottomParticleEmitter.play();

          TweenMax.to(this._tweenObj, 2.5, {
            onComplete: () => {
              this._interval = window.setInterval(this.checkParticleCount, 16);
            }
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=98269788311fa96b44e49980c9e241cda51642fa.js.map