System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingResManager, BaseEvent, CocosGameSetting, Component, UITransform, v3, instantiate, Animation, log, SummonExploation, DiscAni, CallAniEffect, _crd;

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseEvent(extras) {
    _reporterNs.report("BaseEvent", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosGameSetting(extras) {
    _reporterNs.report("CocosGameSetting", "../../../../framework/utils/CocosGameSetting", _context.meta, extras);
  }

  _export({
    SummonExploation: void 0,
    DiscAni: void 0,
    CallAniEffect: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      instantiate = _cc.instantiate;
      Animation = _cc.Animation;
      log = _cc.log;
    }, function (_unresolved_2) {
      LoadingResManager = _unresolved_2.LoadingResManager;
    }, function (_unresolved_3) {
      BaseEvent = _unresolved_3.BaseEvent;
    }, function (_unresolved_4) {
      CocosGameSetting = _unresolved_4.CocosGameSetting;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6667fhYQtNIJ6uKuTrJCvcV", "CallAniEffect", undefined);
      /**
       * Created by EricHuang on 2023/11/20.
       */


      __checkObsolete__(['Component', 'EventTarget', 'Node', 'UITransform', 'v3', 'Vec3']);

      __checkObsolete__(['instantiate']);

      __checkObsolete__(['find']);

      __checkObsolete__(['Animation']);

      __checkObsolete__(['Scene']);

      __checkObsolete__(['log']);

      _export("SummonExploation", SummonExploation = class SummonExploation extends Component {
        //--紀錄使用的桌號
        get useTable() {
          return this._useTable;
        }

        constructor() {
          super();
          this.isPlaying = void 0;
          this._topAnimation = void 0;
          this._contentAnimation = void 0;
          //private _useTable:number[];//--紀錄使用的桌號
          this._useTable = void 0;

          this.onComplete = (type, state) => {
            //log('SummonExploation_aniComplete',type,state);
            //this.node.emit(BaseEvent.COMPLETE,this._useTable.shift());
            //this.node.emit(BaseEvent.COMPLETE,{target:this.node,table:this._useTable});
            this.node.emit((_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
              error: Error()
            }), BaseEvent) : BaseEvent).COMPLETE, this._useTable); //this.closeAndStop();
          };

          this._useTable = -1;
          this.isPlaying = false;
        }

        onLoad() {
          //-//----上面一層是縮放,下面一層是透明度,所以要播兩段
          this._topAnimation = this.node.getComponent(Animation);
          let clip = this._topAnimation.clips;
          this._topAnimation.defaultClip = clip[0];

          this._topAnimation.stop();

          this._contentAnimation = this.node.getChildByName('FX_arrow').getComponent(Animation);
          clip = this._contentAnimation.clips;
          this._contentAnimation.defaultClip = clip[0];

          this._contentAnimation.stop();

          log('check_callPropEffect', this.node, this._topAnimation, this._contentAnimation); //log('check_animationClip',clip);
        }

        openAndPlay(table) {
          this._topAnimation.on(Animation.EventType.FINISHED, this.onComplete);

          this.isPlaying = true;
          this._useTable = table;
          this.node.active = true;

          this._topAnimation.play();

          this._contentAnimation.play();
        }

        closeAndStop() {
          this._topAnimation.off(Animation.EventType.FINISHED, this.onComplete);

          this.isPlaying = false;
          this.node.active = false;

          this._topAnimation.stop();

          this._contentAnimation.stop(); //this._useTable=-1;

        }

        clean() {
          this._useTable = -1;
        }

      });

      _export("DiscAni", DiscAni = class DiscAni extends Component {
        constructor() {
          super();
          this.id = void 0;
          this.isPlaying = void 0;
          this._animation = void 0;
          this.isPlaying = false;
        }

        onLoad() {
          this._animation = this.node.getComponent(Animation);
          let clip = this._animation.clips;
          this._animation.defaultClip = clip[0];
          this.closeAndStop(); //this._animation.stop();
          //log('check_animationClip',clip);
        }

        openAndPlay() {
          this.node.active = true;
          this.isPlaying = true;

          this._animation.play();
        }

        closeAndStop() {
          this.node.active = false;
          this.isPlaying = false;

          this._animation.stop();
        }

      }); //export class CallAniEffect extends EventTarget


      _export("CallAniEffect", CallAniEffect = class CallAniEffect {
        //private _pokeballPrefabId:string;
        //private _effectPokeBallContainer:Node;//--UI之下寶貝球用的container
        //private _summonDataId:number;//--紀錄要丟出來的魚的資料id
        constructor(...args) {
          this._container = void 0;
          this._scene = void 0;
          //--每個玩家都會顯示
          //private _summonPokeBalls:Node[];//--丟出去的球
          this._summonDiscs = void 0;
          //--砲塔上的
          //private _exprostationFx:Node;//---中間爆開的
          this._aryPoolExprostationFx = void 0;
          this._aryRunningExprostationFx = void 0;
          this._strExprostationFxPrefabId = void 0;

          this.finishEffectHandler = e => {
            log('finishEffectHandler', e);
            let nodeTarget;

            for (let i = 0; i < this._aryRunningExprostationFx.length; i++) {
              if (this._aryRunningExprostationFx[i].getComponent(SummonExploation).useTable == e) {
                nodeTarget = this._aryRunningExprostationFx[i];

                this._aryRunningExprostationFx.splice(i, 1);

                nodeTarget.off((_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
                  error: Error()
                }), BaseEvent) : BaseEvent).COMPLETE, this.finishEffectHandler);
                nodeTarget.getComponent(SummonExploation).closeAndStop();
                nodeTarget.getComponent(SummonExploation).clean();

                this._summonDiscs[e].getComponent(DiscAni).closeAndStop();

                this._scene.removeChild(nodeTarget);

                this._aryPoolExprostationFx.push(nodeTarget);

                break;
              }
            }
          };

          //super();
          //let awardNode=instantiate(LoadingResManager.getInstance().getPrefab(args[0].prefabId));
          //log('check_CallAniEffect',args[0]);
          //-container:find('Canvas/topAniEffectNode')--在UI之上
          this._container = args[0].container; //this._effectPokeBallContainer=args[0].aniEffectContainer;

          this._scene = args[0].scene;
          this._summonDiscs = []; //this._summonPokeBalls=[];
          //this._pokeballPrefabId=args[0].callSymbolPrefabId;

          this._aryPoolExprostationFx = [];
          this._aryRunningExprostationFx = [];
          this._strExprostationFxPrefabId = args[0].callFxPrefabId;
          let discComponent;

          for (let i = 0; i < 4; i++) {
            let dsicFX = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(args[0].callTowerPrefabId));
            log('check_discFXData', dsicFX);
            discComponent = dsicFX.addComponent(DiscAni);
            discComponent.id = i;

            this._container.addChild(dsicFX);
            /*
            let worldVec3=v3(args[0].playerPositions[i].x,args[0].playerPositions[i].y);
            
            let localV3=this._container.getComponent(UITransform).convertToNodeSpaceAR(worldVec3);
             dsicFX.setPosition(localV3);
            */


            this._summonDiscs[i] = dsicFX; //dsicFX.setPosition(v3(args[0].playerPositions[args[0].playerTable].x,args[0].playerPositions[args[0].playerTable].y));
          }
        }

        setDataAfterSetRoom(playerPositions) {
          let len = this._summonDiscs.length;
          let dsicFX;

          for (let i = 0; i < len; i++) {
            dsicFX = this._summonDiscs[i];
            let worldVec3 = v3(playerPositions[i].x, playerPositions[i].y);

            let localV3 = this._container.getComponent(UITransform).convertToNodeSpaceAR(worldVec3); //dsicFX.setPosition(v3(0,0));


            dsicFX.setPosition(localV3);
          }
        }

        resetRoomData(value) {
          this._aryPoolExprostationFx.length = 0;
          let len = this._summonDiscs.length;
          let dsicFX;

          for (let i = 0; i < len; i++) {
            dsicFX = this._summonDiscs[i];
            dsicFX.setPosition(v3(0, 0));
          }
        }

        closeEffect() {
          /*
          if(this._exprostationFx.getComponent(SummonExploation).isPlaying)
          {
              this._exprostationFx.getComponent(SummonExploation).closeAndStop();
          }*/
          for (let j = 0; j < this._aryRunningExprostationFx.length; j++) {
            let nodeTarget = this._aryRunningExprostationFx[j];
            nodeTarget.off((_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
              error: Error()
            }), BaseEvent) : BaseEvent).COMPLETE, this.finishEffectHandler);

            this._aryRunningExprostationFx.splice(j, 1);

            nodeTarget.getComponent(SummonExploation).closeAndStop();
            nodeTarget.getComponent(SummonExploation).clean();

            this._scene.removeChild(nodeTarget);

            this._aryPoolExprostationFx.push(nodeTarget);

            j = j - 1;
          }

          for (let i = 0; i < this._summonDiscs.length; i++) {
            if (this._summonDiscs[i].getComponent(DiscAni).isPlaying) {
              this._summonDiscs[i].getComponent(DiscAni).closeAndStop();
            }
          }
        }
        /**
         * 
         * @param table 0-3
         * @param startPositionWorld p:Vec3(worldPos),r:Vec3(shootCenterWp),h:number(containSizeData height)
         * @param endPositionWorld world pos
         * @param summonId data id
         * 
         */


        showCallPropEffect(table, startPositionWorld, endPositionWorld, summonId) {
          this._summonDiscs[table].getComponent(DiscAni).openAndPlay(); //this._exprostationFx.getComponent(SummonExploation).openAndPlay(table);


          let exprostationFx;

          if (this._aryPoolExprostationFx.length <= 0) {
            exprostationFx = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(this._strExprostationFxPrefabId));
            exprostationFx.addComponent(SummonExploation);
          } else {
            exprostationFx = this._aryPoolExprostationFx.pop();
          }

          log('check_summonExplotionNode', exprostationFx);

          this._aryRunningExprostationFx.push(exprostationFx);

          this._scene.addChild(exprostationFx);

          exprostationFx.setPosition(v3((_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_Width / 2, (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_Height / 2, -100));
          exprostationFx.active = true;
          exprostationFx.on((_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
            error: Error()
          }), BaseEvent) : BaseEvent).COMPLETE, this.finishEffectHandler);
          exprostationFx.getComponent(SummonExploation).openAndPlay(table);
          /*---old
          let startLocalPosition=this._effectPokeBallContainer.getComponent(UITransform).convertToNodeSpaceAR(startPositionWorld.r);
           let endLocalPosition=this._effectPokeBallContainer.getComponent(UITransform).convertToNodeSpaceAR(endPositionWorld);
           let pokeball:Node;
           if(this._summonPokeBalls.length>0)
          {
              pokeball=this._summonPokeBalls.pop();
                  }else{
               pokeball= instantiate(LoadingResManager.getInstance().getPrefab(this._pokeballPrefabId));
               pokeball.addComponent(DiscAni);
               pokeball.addComponent(TweenMaxCocosPlugin);
          }
           this._effectPokeBallContainer.addChild(pokeball);
           pokeball.setPosition(startLocalPosition);
           pokeball.getComponent(DiscAni).openAndPlay();
           this._summonDiscs[table].getComponent(DiscAni).openAndPlay();
           let tweenComponent=pokeball.getComponent(TweenMaxCocosPlugin);
           
          TweenMax.to(tweenComponent,0.3,
          {
              x:endLocalPosition.x,
              y:endLocalPosition.y,
              onCompleteParams:[{index:table,tw:tweenComponent}],
              onComplete:(value)=>
              {
                  //--send event 
                  this._exprostationFx.getComponent(SummonExploation).openAndPlay();
                   value.tw.node.getComponent(DiscAni).closeAndStop();
                   this._summonDiscs[value.index].getComponent(DiscAni).closeAndStop();
                   this._effectPokeBallContainer.removeChild(value.tw.node);
                   if(this._summonPokeBalls.length<15)
                  {
                      this._summonPokeBalls.push(value.tw.node);
                  }
              }
          });*/
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec9fa5aff680fbe62347f47b207dd75fd9c0857e.js.map