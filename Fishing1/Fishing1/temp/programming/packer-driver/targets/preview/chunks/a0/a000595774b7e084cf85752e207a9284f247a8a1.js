System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingResManager, BaseEvent, GameUtils, Digits, AnimationEffectEvent, instantiate, Animation, UITransform, v3, Component, Layers, ParticleSystem2D, BigCoinEffect, AwardDiscAniEffect, _crd;

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseEvent(extras) {
    _reporterNs.report("BaseEvent", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDigits(extras) {
    _reporterNs.report("Digits", "../../../../framework/utils/Digits", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationEffectEvent(extras) {
    _reporterNs.report("AnimationEffectEvent", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  _export({
    BigCoinEffect: void 0,
    AwardDiscAniEffect: void 0
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
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Component = _cc.Component;
      Layers = _cc.Layers;
      ParticleSystem2D = _cc.ParticleSystem2D;
    }, function (_unresolved_2) {
      LoadingResManager = _unresolved_2.LoadingResManager;
    }, function (_unresolved_3) {
      BaseEvent = _unresolved_3.BaseEvent;
    }, function (_unresolved_4) {
      GameUtils = _unresolved_4.GameUtils;
    }, function (_unresolved_5) {
      Digits = _unresolved_5.Digits;
    }, function (_unresolved_6) {
      AnimationEffectEvent = _unresolved_6.AnimationEffectEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "623d3NwIf9G7JaR0GRwG9CV", "AwardDiscAniEffect", undefined);
      /**
       * Created by EricHuang on 2023/10/18.
       */


      __checkObsolete__(['Scene', 'instantiate', 'Node', 'Animation', 'AnimationClip', 'AnimationState', 'UITransform']);

      __checkObsolete__(['v3', 'EventTarget', 'Component']);

      __checkObsolete__(['SkeletalAnimation']);

      __checkObsolete__(['find']);

      __checkObsolete__(['CameraComponent']);

      __checkObsolete__(['Vec3']);

      __checkObsolete__(['SpriteFrame']);

      __checkObsolete__(['Layers']);

      __checkObsolete__(['ParticleSystem2D']);

      __checkObsolete__(['log']);

      //--這個可以再繼承出去變成其他的圓盤
      _export("BigCoinEffect", BigCoinEffect = class BigCoinEffect extends Component {
        set awardId(value) {
          this._awardId = value;
        }

        constructor() {
          super();
          this._digits = void 0;
          this._topAnimation = void 0;
          this._particle2d = void 0;
          this._awardId = void 0;
          this.isplaying = void 0;

          this.onComplete = (type, state) => {
            this.isplaying = false;

            this._topAnimation.stop();

            this._particle2d.stopSystem();

            this.node.active = false;
            /**
             * export type EventSendObject=
                {
                type:string,
                sendObj?:any
                }
             */

            this.node.emit((_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
              error: Error()
            }), BaseEvent) : BaseEvent).COMPLETE, {
              type: (_crd && AnimationEffectEvent === void 0 ? (_reportPossibleCrUseOfAnimationEffectEvent({
                error: Error()
              }), AnimationEffectEvent) : AnimationEffectEvent).COMPLETE,
              sendObj: this._awardId
            });
          };

          this._awardId = -1;
          this.isplaying = false;
        }

        onLoad() {
          this._digits = this.node.getChildByName('coinBg').getChildByName('label').getComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
            error: Error()
          }), Digits) : Digits);
          this._digits.diplayLayer = 1 << Layers.nameToLayer('fx'); //log('check_awardNode',this.node);

          this._topAnimation = this.node.getComponent(Animation);
          var clips = this._topAnimation.clips;
          this._topAnimation.defaultClip = clips[0];
          this._particle2d = this.node.getChildByName('particleStar').getComponent(ParticleSystem2D);

          this._particle2d.stopSystem();

          this._topAnimation.on(Animation.EventType.FINISHED, this.onComplete);
        }

        playAndShowPayOff(payOff) {
          this.node.active = true;
          this.isplaying = true;

          this._digits.display(payOff, 'center');

          this._topAnimation.play();

          this._particle2d.resetSystem();
        }

      });

      _export("AwardDiscAniEffect", AwardDiscAniEffect = class AwardDiscAniEffect {
        constructor() {
          //--拿_aniPositionInfo裡面的 positions-->砲管出口的位置
          this._aryDeathLightNodes = void 0;
          this._containerNode = void 0;
          this._maxmumTable = void 0;
          this._aryPlayerDiscItem = void 0;

          this.onCompleteAward = e => {
            //log('chec_award_finish',e);
            //--e.sendObj
            this.checkDataIntheQueue(e.sendObj);
          };

          this._aryDeathLightNodes = [];
          this._aryPlayerDiscItem = [{
            disc: [],
            queue: [],
            ogPos: []
          }, {
            disc: [],
            queue: [],
            ogPos: []
          }, {
            disc: [],
            queue: [],
            ogPos: []
          }, {
            disc: [],
            queue: [],
            ogPos: []
          }]; //log('this._aryPlayerDiscItem',this._aryPlayerDiscItem);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          this._containerNode = args[0].container;
          this._maxmumTable = args[0].maxmumTable; //let pos:{x:number,y:number}[]=args[0].position;
          //let tableIndex:number=args[0].playerTable;

          var textures = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(args[0].digitsTexturePath).sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).sortDigitsSpriteFrames);

          for (var i = 0; i < this._maxmumTable; i++) {
            var awardNode = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(args[0].prefabId));
            var bigCoinComponent = awardNode.addComponent(BigCoinEffect);
            bigCoinComponent.awardId = i;
            var dg = awardNode.getChildByName('coinBg').getChildByName('label').addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
              error: Error()
            }), Digits) : Digits);
            dg.textures = textures;
            dg.padding = 1;
            dg.digitScale = .8;
            dg.useCommand = true;
            dg.symbolStr = [','];
            dg.symbolIndex = [10];

            this._containerNode.addChild(awardNode);
            /*
            let offsetY:number=0;
             let heightDistance:number=(awardNode.getComponent(UITransform).contentSize.height/2)+90;
             if(tableIndex==0 || tableIndex==1)
            {
               //--轉下來
               //--不轉
               if(i==0 || i==1)
               {
                 offsetY=heightDistance*1;
                }else{
                
                 offsetY=heightDistance*-1;
               }  
                 
            
             }else{
               //--不轉
               if(i==0 || i==1)
               {
                 offsetY=heightDistance*-1;
                }else{
                
                 offsetY=heightDistance*1;
               }  
            }*/
            //let lpos=this._containerNode.getComponent(UITransform).convertToNodeSpaceAR(v3(pos[i].x,pos[i].y+offsetY));
            //log('check_node_award',awardNode);
            //awardNode.setPosition(lpos);


            awardNode.on((_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
              error: Error()
            }), BaseEvent) : BaseEvent).COMPLETE, this.onCompleteAward);
            awardNode.active = false;

            this._aryPlayerDiscItem[i].disc.push(awardNode);

            this._aryPlayerDiscItem[i].ogPos.push({
              x: awardNode.position.x,
              y: awardNode.position.y
            }); //this._aryDeathLightNodes.push(awardNode);

          }
        }

        resetRoomData() {
          for (var i = 0; i < this._maxmumTable; i++) {
            this._aryPlayerDiscItem[i].disc[0].setPosition(v3(this._aryPlayerDiscItem[i].ogPos[0].x, this._aryPlayerDiscItem[i].ogPos[0].y));
          }
        }

        setDataAfterSetRoom(positions, playerIndex) {
          var pos = positions;
          var tableIndex = playerIndex;
          var awardNode;

          for (var i = 0; i < this._maxmumTable; i++) {
            awardNode = this._aryPlayerDiscItem[i].disc[0];
            var offsetY = 0;
            var heightDistance = awardNode.getComponent(UITransform).contentSize.height / 2 + 90;

            if (tableIndex == 0 || tableIndex == 1) {
              //--轉下來
              //--不轉
              if (i == 0 || i == 1) {
                offsetY = heightDistance * 1;
              } else {
                offsetY = heightDistance * -1;
              }
            } else {
              //--不轉
              if (i == 0 || i == 1) {
                offsetY = heightDistance * -1;
              } else {
                offsetY = heightDistance * 1;
              }
            }

            var lpos = this._containerNode.getComponent(UITransform).convertToNodeSpaceAR(v3(pos[i].x, pos[i].y + offsetY)); //log('check_node_award',awardNode);


            awardNode.setPosition(lpos); //awardNode.active=true;//--for test
          }
        }

        checkDataIntheQueue(playerIndex) {
          var len = this._aryPlayerDiscItem[playerIndex].queue.length;
          var index = 0; //--用來檢查每個位置上的彩盤形式(1代只有一個, index=0)
          //let discIndex:number=-1;

          /*--1代只有一個彩盤所以不檢查了
          for(let i:number=0;i<len;i++)
          {
              //--檢查賠率要開那個彩盤出來
          }*/

          if (len > 0) {
            if (!this._aryPlayerDiscItem[playerIndex].disc[index].getComponent(BigCoinEffect).isplaying) {
              var data = this._aryPlayerDiscItem[playerIndex].queue.shift(); //--拿第一個出來


              this._aryPlayerDiscItem[playerIndex].disc[index].getComponent(BigCoinEffect).playAndShowPayOff(data.money);
            }
          }
        }

        playAndShowPayOff(value) {
          /**
           * export type AwardQueueData=
              {
                  money?:number,
                  fish?:number,//--魚的圖片(fish type)
                  ratioOdds?:number,
                  spMode:number
               }
           */
          //--目前只會送2個資料進來(座位0-3,金額)
          this._aryPlayerDiscItem[value.playerIndex].queue.push({
            money: value.money
          });

          this.checkDataIntheQueue(value.playerIndex); //--for test

          /*
          let len:number=this._aryDeathLightNodes.length;
           for(let i:number=0;i<len;i++)
          {
              this._aryDeathLightNodes[i].getComponent(BigCoinEffect).playAndShowPayOff(123);
          }*/
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a000595774b7e084cf85752e207a9284f247a8a1.js.map