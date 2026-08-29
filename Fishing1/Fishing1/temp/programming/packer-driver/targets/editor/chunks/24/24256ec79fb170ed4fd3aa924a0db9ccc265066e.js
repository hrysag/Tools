System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingResManager, BaseEvent, instantiate, Animation, AnimationClip, UITransform, EventTarget, Component, find, CameraComponent, log, DeathEffect, DeathLightAniEffect, _crd;

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseEvent(extras) {
    _reporterNs.report("BaseEvent", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  _export({
    DeathEffect: void 0,
    DeathLightAniEffect: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      UITransform = _cc.UITransform;
      EventTarget = _cc.EventTarget;
      Component = _cc.Component;
      find = _cc.find;
      CameraComponent = _cc.CameraComponent;
      log = _cc.log;
    }, function (_unresolved_2) {
      LoadingResManager = _unresolved_2.LoadingResManager;
    }, function (_unresolved_3) {
      BaseEvent = _unresolved_3.BaseEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9f8f5hens1Hga16syYd+JbE", "DeathLightAniEffect", undefined);
      /**
       * Created by EricHuang on 2023/10/18.
       */


      __checkObsolete__(['Scene', 'instantiate', 'Node', 'Animation', 'AnimationClip', 'AnimationState', 'UITransform']);

      __checkObsolete__(['v3', 'EventTarget', 'Component']);

      __checkObsolete__(['SkeletalAnimation']);

      __checkObsolete__(['find']);

      __checkObsolete__(['CameraComponent']);

      __checkObsolete__(['Vec3']);

      __checkObsolete__(['log']);

      _export("DeathEffect", DeathEffect = class DeathEffect extends Component {
        constructor() {
          super();
          this._animationTop = void 0;
          this._animationInsideEffect = void 0;

          this.onComplete = (type, state) => {
            log('check_Bomb_aniComplete', type, state);
            this.node.emit((_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
              error: Error()
            }), BaseEvent) : BaseEvent).COMPLETE);
          };
        }

        onLoad() {
          this._animationTop = this.node.getComponent(Animation);
          this._animationInsideEffect = this.node.children[0].getComponent(Animation);
          let topClips = this._animationTop.clips;
          topClips[0].wrapMode = AnimationClip.WrapMode.Normal;
          this._animationTop.defaultClip = topClips[0];
          let insideClips = this._animationInsideEffect.clips;
          insideClips[0].wrapMode = AnimationClip.WrapMode.Normal;
          this._animationInsideEffect.defaultClip = insideClips[0];

          this._animationTop.on(Animation.EventType.FINISHED, this.onComplete);
        }

        play() {
          log('playBomb@@@');

          this._animationTop.play();

          this._animationInsideEffect.play();
        }

        destory() {
          //--fuck up
          this._animationTop.off(Animation.EventType.FINISHED, this.onComplete);

          this._animationTop.stop();

          this._animationInsideEffect.stop();

          this._animationTop.destroy();

          this._animationInsideEffect.destroy();
        }

      });

      _export("DeathLightAniEffect", DeathLightAniEffect = class DeathLightAniEffect extends EventTarget {
        constructor(...args) {
          super();
          this._scene = void 0;
          this._aryDeathLightNodes = void 0;
          this._prefabId = void 0;
          this._containerNode = void 0;
          this._canvasCameraFx = void 0;
          this._afterAnimationDataId = void 0;
          this._maximumDeathLight = void 0;

          this.onCompleteBomb = () => {
            this._maximumDeathLight--;

            if (this._maximumDeathLight <= 0) {
              //--all finish
              log('all deathLight complete');

              for (let i = 0; i < this._aryDeathLightNodes.length; i++) {
                //this._scene.removeChild(this._aryBombs[i]);
                this._containerNode.removeChild(this._aryDeathLightNodes[i]);

                this._aryDeathLightNodes[i].destroy();

                this._aryDeathLightNodes[i].off((_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
                  error: Error()
                }), BaseEvent) : BaseEvent).COMPLETE, this.onCompleteBomb);
              }

              this._aryDeathLightNodes.length = 0;
              /*
              this.emit(AnimationEffectEvent.COMPLETE,{
              
                  type:AnimationEffectEvent.COMPLETE,
                  
                  sendObj:{
                      
                      id:AniEffectID.ANI_BombEffect,
                           afterId:this._afterAnimationDataId
                  }
              
              });
              */
            }
          };

          this._aryDeathLightNodes = [];
          this._scene = args[0].scene;
          this._containerNode = args[0].container;
          this._prefabId = args[0].prefabId;
          this._afterAnimationDataId = 0;
          this._maximumDeathLight = 0;
          this._canvasCameraFx = find(args[0].cameraId).getComponent(CameraComponent); //this._openNode=instantiate(LoadingResManager.getInstance().getPrefab(args[0].other.prefabId));
          //--for test---

          /*
          let node=instantiate(LoadingResManager.getInstance().getPrefab(this._prefabId));
           let ani=node.getComponent(Animation);
           let topClips=ani.clips;
           ani.defaultClip=topClips[0];
            let ani2=node.children[0].getComponent(Animation);
           let topClips2=ani2.clips;
           ani2.defaultClip=topClips2[0];
           this._containerNode.addChild(node);
           node.setPosition(v3(0,0,0));
           TweenMax.to({},2,
          {
              onComplete:()=>
              {
                  ani.play();
                       ani2.play();
              }
          })*/

          log('check_deathLightNode', args[0]);
        }

        showDeathLight(data) {
          //this._afterAnimationDataId=data.id;
          log();
          let pos = this.getPosData(data.chainFishDatas);
          log('check_showLightningEffect_pos', pos);
          let len = pos.length;
          this._maximumDeathLight = len;
          let deathLightNode;
          let deathLightEffect;
          let wpos;
          let localpos;

          for (let i = 0; i < len; i++) {
            deathLightNode = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(this._prefabId));
            deathLightEffect = deathLightNode.addComponent(DeathEffect);

            this._containerNode.addChild(deathLightNode); //--送進來的fish座標已經是canvas 下的world positions


            wpos = pos[i];
            localpos = this._containerNode.getComponent(UITransform).convertToNodeSpaceAR(wpos);
            deathLightNode.setPosition(localpos);
            deathLightNode.on((_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
              error: Error()
            }), BaseEvent) : BaseEvent).COMPLETE, this.onCompleteBomb);

            this._aryDeathLightNodes.push(deathLightNode);

            deathLightEffect.play();
          }
        }

        getPosData(data) {
          //-{fpos:Vec3,sn:number,type:number,payoff:number}
          let pos = [];
          let len = data.length;

          for (let i = 0; i < len; i++) {
            pos.push(data[i].fpos);
          }

          return pos;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=24256ec79fb170ed4fd3aa924a0db9ccc265066e.js.map