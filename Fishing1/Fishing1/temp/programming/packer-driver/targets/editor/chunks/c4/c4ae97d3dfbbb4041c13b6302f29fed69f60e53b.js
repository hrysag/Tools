System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingResManager, BaseEvent, AniEffectID, AnimationEffectEvent, instantiate, Animation, AnimationClip, UITransform, EventTarget, Component, SkeletalAnimation, find, CameraComponent, log, Bomb, GiftBombAniEffect, _crd;

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseEvent(extras) {
    _reporterNs.report("BaseEvent", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniEffectID(extras) {
    _reporterNs.report("AniEffectID", "../../../../framework/logic/views/aniEffectView/AniEffectDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationEffectEvent(extras) {
    _reporterNs.report("AnimationEffectEvent", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  _export({
    Bomb: void 0,
    GiftBombAniEffect: void 0
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
      SkeletalAnimation = _cc.SkeletalAnimation;
      find = _cc.find;
      CameraComponent = _cc.CameraComponent;
      log = _cc.log;
    }, function (_unresolved_2) {
      LoadingResManager = _unresolved_2.LoadingResManager;
    }, function (_unresolved_3) {
      BaseEvent = _unresolved_3.BaseEvent;
    }, function (_unresolved_4) {
      AniEffectID = _unresolved_4.AniEffectID;
    }, function (_unresolved_5) {
      AnimationEffectEvent = _unresolved_5.AnimationEffectEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9fc1dox+ixCcYA7+nV640KY", "GiftBombAniEffect", undefined);
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

      _export("Bomb", Bomb = class Bomb extends Component {
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
          this._animationTop = this.node.getComponent(SkeletalAnimation);
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

      _export("GiftBombAniEffect", GiftBombAniEffect = class GiftBombAniEffect extends EventTarget {
        constructor(...args) {
          super();
          this._scene = void 0;
          this._aryBombs = void 0;
          this._prefabId = void 0;
          this._containerNode = void 0;
          this._canvasCameraFx = void 0;
          this._afterAnimationDataId = void 0;
          this._maximumBomb = void 0;

          this.onCompleteBomb = () => {
            this._maximumBomb--;

            if (this._maximumBomb <= 0) {
              //--all finish
              log('all bomb complete');

              for (let i = 0; i < this._aryBombs.length; i++) {
                //this._scene.removeChild(this._aryBombs[i]);
                this._containerNode.removeChild(this._aryBombs[i]);

                this._aryBombs[i].destroy();

                this._aryBombs[i].off((_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
                  error: Error()
                }), BaseEvent) : BaseEvent).COMPLETE, this.onCompleteBomb);
              }

              this._aryBombs.length = 0;
              this.emit((_crd && AnimationEffectEvent === void 0 ? (_reportPossibleCrUseOfAnimationEffectEvent({
                error: Error()
              }), AnimationEffectEvent) : AnimationEffectEvent).COMPLETE, {
                type: (_crd && AnimationEffectEvent === void 0 ? (_reportPossibleCrUseOfAnimationEffectEvent({
                  error: Error()
                }), AnimationEffectEvent) : AnimationEffectEvent).COMPLETE,
                sendObj: {
                  id: (_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
                    error: Error()
                  }), AniEffectID) : AniEffectID).ANI_BombEffect,
                  afterId: this._afterAnimationDataId
                }
              });
            }
          };

          this._aryBombs = [];
          this._scene = args[0].scene;
          this._containerNode = args[0].container;
          this._prefabId = args[0].prefabId;
          this._afterAnimationDataId = 0;
          this._maximumBomb = 0;
          this._canvasCameraFx = find(args[0].cameraId).getComponent(CameraComponent);
          log('check_giftBombNode', args[0]);
          /*
          let canvasCamera2d=find(args[0].cameraId).getComponent(CameraComponent);
           let testNode=instantiate(LoadingResManager.getInstance().getPrefab(this._prefabId));
          
          testNode.addComponent(Bomb);
           this._scene.addChild(testNode);
           //--機掰就因為這台攝影機放在canvas下面所以要這樣轉出座標..
           let testwpos=this._containerNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0,0,0));
           let scpos=canvasCamera2d.worldToScreen(testwpos);
           let localpos=canvasCamera2d.screenToWorld(scpos);
           log('wtfFFFFFF',localpos);
           testNode.setPosition(localpos);
            TweenMax.to({},2,
          {
             onComplete:()=>
             {
              testNode.getComponent(Bomb).play();  
             }  
          });
          */
          //this._openNode=instantiate(LoadingResManager.getInstance().getPrefab(args[0].other.prefabId));
        }

        showBomb(data) {
          this._afterAnimationDataId = data.id; //--第一個會挑掉(炸彈本身要炸別的效果)

          let pos = this.getPosData(data.chainFishDatas);
          let len = pos.length;
          this._maximumBomb = len;
          let wpos;
          let spos;
          let localpos;
          let bombEffect;

          for (let i = 0; i < len; i++) {
            let BombNode = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(this._prefabId));
            bombEffect = BombNode.addComponent(Bomb); //this._scene.addChild(BombNode);
            //--要去思考到這個3Dmesh到底需不需要執行相關的操作(射線之類的..放到2d層他將會失去這些功能)

            this._containerNode.addChild(BombNode); //wpos=this._containerNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0,0,0));
            //--送進來的fish座標已經是canvas 下的world positions


            wpos = pos[i];
            localpos = this._containerNode.getComponent(UITransform).convertToNodeSpaceAR(wpos); //--機掰就因為這台攝影機放在canvas下面所以要這樣轉出座標..

            /*
            spos=this._canvasCameraFx.worldToScreen(wpos);
             localpos=this._canvasCameraFx.screenToWorld(spos);
             log('wtfFFFFFF',localpos);
             
            */

            BombNode.setPosition(localpos);
            BombNode.on((_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
              error: Error()
            }), BaseEvent) : BaseEvent).COMPLETE, this.onCompleteBomb);

            this._aryBombs.push(BombNode);

            bombEffect.play();
          }
        }

        getPosData(data) {
          //-{fpos:Vec3,sn:number,type:number,payoff:number}
          let pos = [];
          let len = data.length;

          for (let i = 0; i < len; i++) {
            if (i > 0) {
              pos.push(data[i].fpos);
            }
          }

          return pos;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c4ae97d3dfbbb4041c13b6302f29fed69f60e53b.js.map