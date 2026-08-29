System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingResManager, instantiate, Animation, v3, EventTarget, AnimationEffectEvent, Fish1AniEffectID, log, DgExplosionAniEffect, _crd;

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationEffectEvent(extras) {
    _reporterNs.report("AnimationEffectEvent", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1AniEffectID(extras) {
    _reporterNs.report("Fish1AniEffectID", "../Fish1AniEffectDefinitions", _context.meta, extras);
  }

  _export("DgExplosionAniEffect", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      Animation = _cc.Animation;
      v3 = _cc.v3;
      EventTarget = _cc.EventTarget;
      log = _cc.log;
    }, function (_unresolved_2) {
      LoadingResManager = _unresolved_2.LoadingResManager;
    }, function (_unresolved_3) {
      AnimationEffectEvent = _unresolved_3.AnimationEffectEvent;
    }, function (_unresolved_4) {
      Fish1AniEffectID = _unresolved_4.Fish1AniEffectID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6699bugZpBKEJs3Rv0AvKWP", "DgExplosionAniEffect", undefined);
      /**
       * Created by EricHuang on 2023/10/20.
       */


      __checkObsolete__(['Scene', 'instantiate', 'Node', 'Animation', 'AnimationClip', 'AnimationState']);

      __checkObsolete__(['v3', 'EventTarget']);

      __checkObsolete__(['log']);

      _export("DgExplosionAniEffect", DgExplosionAniEffect = class DgExplosionAniEffect extends EventTarget {
        constructor(...args) {
          super();
          this._scene = void 0;
          this._explosionNode = void 0;
          this._animationTop = void 0;
          this._animationBottom = void 0;

          this.aniOnComplete = (type, state) => //private onEffectAniTriggerEvt=(value:string)=>
          {
            //log('DgExplosionAniEffectSendEvent_');
            this.destory();
          };

          this._scene = args[0].container;
          this._explosionNode = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(args[0].other.prefabId));
          log('check_DgExplosionAniEffect_data', args, this._explosionNode);
          this._animationTop = this._explosionNode.getComponent(Animation);
          this._animationBottom = this._explosionNode.children[0].getComponent(Animation);

          this._animationTop.on(Animation.EventType.FINISHED, this.aniOnComplete);

          this._explosionNode.active = false;
        }

        playexplosion() {
          log('playexplosion__EFFECT');

          this._scene.addChild(this._explosionNode);

          this._explosionNode.active = true;

          this._explosionNode.setPosition(v3(0, 0, 0));

          let clip = this._animationTop.clips[0];
          this._animationTop.defaultClip = clip;

          this._animationTop.play(clip.name);

          clip = this._animationBottom.clips[0];
          this._animationBottom.defaultClip = clip;

          this._animationBottom.play(clip.name);

          TweenMax.to({}, 3, {
            onComplete: () => {
              this.emit((_crd && AnimationEffectEvent === void 0 ? (_reportPossibleCrUseOfAnimationEffectEvent({
                error: Error()
              }), AnimationEffectEvent) : AnimationEffectEvent).COMPLETE, {
                type: (_crd && AnimationEffectEvent === void 0 ? (_reportPossibleCrUseOfAnimationEffectEvent({
                  error: Error()
                }), AnimationEffectEvent) : AnimationEffectEvent).COMPLETE,
                sendObj: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                  error: Error()
                }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_EXPLOSION
              });
            }
          });
        }

        destory() {
          this._animationTop.stop();

          this._animationBottom.stop();

          this._scene.removeChild(this._explosionNode);

          this._explosionNode.active = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c06bd46644d94e67198ad1c4df62cb56e333af36.js.map