System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, TweenMaxCocosPlugin, LoadingResManager, AniEffectID, AnimationEffectEvent, Component, EventTarget, instantiate, Node, ParticleSystem2D, Sprite, UITransform, Line, v2, v3, Layers, CurveRange, color, find, Vec2, CameraComponent, log, LinghtningBall, LightningLine, LightningEffect, _crd;

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../framework/utils/TweenMaxPlugin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniEffectID(extras) {
    _reporterNs.report("AniEffectID", "../../../../framework/logic/views/aniEffectView/AniEffectDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationEffectEvent(extras) {
    _reporterNs.report("AnimationEffectEvent", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  _export({
    LinghtningBall: void 0,
    LightningLine: void 0,
    LightningEffect: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      EventTarget = _cc.EventTarget;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      ParticleSystem2D = _cc.ParticleSystem2D;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Line = _cc.Line;
      v2 = _cc.v2;
      v3 = _cc.v3;
      Layers = _cc.Layers;
      CurveRange = _cc.CurveRange;
      color = _cc.color;
      find = _cc.find;
      Vec2 = _cc.Vec2;
      CameraComponent = _cc.CameraComponent;
      log = _cc.log;
    }, function (_unresolved_2) {
      TweenMaxCocosPlugin = _unresolved_2.TweenMaxCocosPlugin;
    }, function (_unresolved_3) {
      LoadingResManager = _unresolved_3.LoadingResManager;
    }, function (_unresolved_4) {
      AniEffectID = _unresolved_4.AniEffectID;
    }, function (_unresolved_5) {
      AnimationEffectEvent = _unresolved_5.AnimationEffectEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "396bcVIxk5PSbWUaioe1YT+", "LightningEffect", undefined);
      /**
       * Created by EricHuang on 2023/10/31.
       */


      __checkObsolete__(['AnimationClip', 'Component', 'EventTarget', 'instantiate', 'Material', 'Node', 'ParticleSystem2D', 'Sprite', 'Texture2D', 'UITransform']);

      __checkObsolete__(['Scene']);

      __checkObsolete__(['Line']);

      __checkObsolete__(['v2', 'v3']);

      __checkObsolete__(['Layers']);

      __checkObsolete__(['CurveRange']);

      __checkObsolete__(['Animation']);

      __checkObsolete__(['color']);

      __checkObsolete__(['find']);

      __checkObsolete__(['Vec3', 'Vec2']);

      __checkObsolete__(['CameraComponent']);

      __checkObsolete__(['log']);

      _export("LinghtningBall", LinghtningBall = class LinghtningBall extends Component {
        constructor() {
          super();
          this._glowNode = void 0;
          this._circleNode = void 0;
          this._particle2d = void 0;
        }

        onLoad() {
          this._glowNode = this.node.getChildByName('lightningCircle');
          this._glowNode.getComponent(Sprite).color = color(255, 255, 255, 0);

          this._glowNode.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          TweenMax.to(this._glowNode.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), 0.2, {
            sprColorAlpha: 255,
            repeat: -1,
            yoyo: true
          });
          this._circleNode = this.node.getChildByName('lightningGlow');
          this._circleNode.getComponent(Sprite).color = color(255, 255, 255, 200);

          this._circleNode.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          TweenMax.to(this._circleNode.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), 0.2, {
            sprColorAlpha: 255,
            repeat: -1,
            yoyo: true
          });
          this._particle2d = this.node.getChildByName('lightningParticle').getComponent(ParticleSystem2D);

          this._particle2d.stopSystem();

          this._particle2d.resetSystem();
        }

        destory() {
          TweenMax.killTweensOf(this._glowNode.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin));
          TweenMax.killTweensOf(this._circleNode.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin));

          this._particle2d.stopSystem();

          this._particle2d.destroy();
        }

      }); //export class LightningLine extends Line


      _export("LightningLine", LightningLine = class LightningLine extends Component {
        set startAndEndPos(value) {
          this._startAndEndPos = value;

          if (value) {
            this.createLine();
          }
        }

        set targetTexture(value) {
          this._targetTexture = value;
        }

        constructor() {
          super();
          this._startAndEndPos = void 0;
          this._linecomponent = void 0;
          this._targetTexture = void 0;
          this.startAndEndPos = null;
          this._targetTexture = null;
          this._linecomponent = null;
        }

        onLoad() {
          this._linecomponent = this.node.addComponent(Line);
          this.node.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
        }

        createLine() {
          var dxy = {
            x: this._startAndEndPos.endPos.x - this._startAndEndPos.startPos.x,
            y: this._startAndEndPos.endPos.y - this._startAndEndPos.startPos.y
          };
          var dist = Math.sqrt(dxy.x * dxy.x + dxy.y * dxy.y);
          var numberOfTile = Math.ceil(dist / this._targetTexture.width); //@ts-ignore 

          this._linecomponent.texture = this._targetTexture;
          this._linecomponent.worldSpace = true;
          var w = new CurveRange();
          w.mode = 0; //--引擎限制是0-1
          //w.constant=texture.height;

          w.constant = 150; //--美術設定150

          this._linecomponent.width = w; //linecomponent.tile=v2(numberOfTile,1);

          this._linecomponent.tile = v2(numberOfTile, 1); //let posData=[v3(this._startAndEndPos.startPos.x,this._startAndEndPos.startPos.y),v3(this._startAndEndPos.endPos.x,this._startAndEndPos.endPos.y)];

          var posData = [this._startAndEndPos.startPos, this._startAndEndPos.endPos]; //--for test
          //let posData=[v3(startPos.x,startPos.y),v3(startPos.x,startPos.y)];

          this._linecomponent.positions = posData;
          this._linecomponent.offset = new Vec2(0, 0); //--延伸生長

          TweenMax.to(this.node.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), .5, {
            linePosEndX: this._startAndEndPos.endPos.x,
            linePosEndY: this._startAndEndPos.endPos.y,
            onComplete: () => {//--不能一開始沒塞好後面動態新增,且一開始塞好3個點,轉角會不平滑
            }
          });
          TweenMax.to(this.node.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), 0.25, {
            lineOffestX: 1,
            repeat: -1
          });
        }

        destory() {
          TweenMax.killTweensOf(this.node.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin));
        }

      });

      _export("LightningEffect", LightningEffect = class LightningEffect extends EventTarget {
        constructor() {
          super();
          this._scene = void 0;
          this._container = void 0;
          this._aryLightningPartNodes = void 0;
          this._lightningLineTexture = void 0;
          this._prefabId = void 0;
          this._afterAnimationDataId = void 0;
          this._canvasCameraFx = void 0;

          this.lightningComplete = () => {
            var targetNode;

            while (this._aryLightningPartNodes.length > 0) {
              targetNode = this._aryLightningPartNodes[0];

              if (targetNode.getComponent(LightningLine)) {
                targetNode.getComponent(LightningLine).destory();

                this._scene.removeChild(targetNode);
              } else if (targetNode.getComponent(LinghtningBall)) {
                targetNode.getComponent(LinghtningBall).destory();

                this._container.removeChild(targetNode);
              }

              this._aryLightningPartNodes.splice(0, 1);
            }

            this.emit((_crd && AnimationEffectEvent === void 0 ? (_reportPossibleCrUseOfAnimationEffectEvent({
              error: Error()
            }), AnimationEffectEvent) : AnimationEffectEvent).COMPLETE, {
              type: (_crd && AnimationEffectEvent === void 0 ? (_reportPossibleCrUseOfAnimationEffectEvent({
                error: Error()
              }), AnimationEffectEvent) : AnimationEffectEvent).COMPLETE,
              sendObj: {
                id: (_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
                  error: Error()
                }), AniEffectID) : AniEffectID).ANI_Flash_Lightning,
                afterId: this._afterAnimationDataId
              }
            });
          };

          this._afterAnimationDataId = 0;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          this._scene = args[0].scene;
          this._container = args[0].container;
          this._prefabId = args[0].prefabId;
          this._canvasCameraFx = find(args[0].cameraId).getComponent(CameraComponent);
          this._aryLightningPartNodes = [];
          this._lightningLineTexture = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getTexture2d(args[0].textureId);
          log('check_lightningEffectNode', args[0]); //let texture:Texture2D=LoadingResManager.getInstance().getTexture2d(args[0].textureId);
          //---test
          //--for test--

          /*--這是以scene為主的視錐體範圍(scene上的一般的攝影機)
          let startPos={x:testfrustum.leftPoint,y:0};
          let endPos={x:testfrustum.rightPoint,y:0};
          */

          /*
          let startPos={x:0,y:1080/2};
          let endPos={x:1920,y:1080/2};
          //--ps 起點與終點的座標需要換算到scene
          let dxy:{x:number,y:number}={x:endPos.x-startPos.x,y:endPos.y-startPos.y};
          
          let dist=Math.sqrt(dxy.x*dxy.x+dxy.y*dxy.y);
          
          let numberOfTile:number=Math.ceil(dist/texture.width);
          */
          //let testNode:Node=new Node('lightningTest');
          //--要檢查攝影機的Z軸 20231031
          //-https://forum.cocos.org/t/topic/101343
          //-https://forum.cocos.org/t/topic/128594

          /**
           * (1(固定值) << 1(索引值))
           * ex:
           * 以預設UI_2D來看,他在layer 25,所以表示就是
           * (1<<25)
           */
          //testNode.layer=1 << Layers.nameToLayer('fx');//--test for fx
          //testNode.layer=Layers.Enum.UI_2D;//--test for fx
          //log('check_effectLayer',Layers.nameToLayer('fx'),testNode.layer);

          /*
          testNode.addComponent(TweenMaxCocosPlugin);
          
          let linecomponent:Line=testNode.addComponent(Line);
          //@ts-ignore 
          linecomponent.texture=texture;
           linecomponent.worldSpace=true;
           let w=new CurveRange();
                 w.mode=0;//--引擎限制是0-1
          //w.constant=texture.height;
          w.constant=150;//--美術設定150
          linecomponent.width=w;
           //linecomponent.tile=v2(numberOfTile,1);
          linecomponent.tile=v2(numberOfTile,1);
          
          
          let posData=[v3(startPos.x,startPos.y),v3(endPos.x,endPos.y)];
          //--for test
          //let posData=[v3(startPos.x,startPos.y),v3(startPos.x,startPos.y)];
           linecomponent.positions=posData as never;
           linecomponent.offset=new Vec2(0,0);
          */

          /*
          let lineComponent=testNode.addComponent(LightningLine); 
          
          lineComponent.targetTexture=this._lightningLineTexture;
           this._scene.addChild(testNode);
           testNode.setPosition(v3(0,0,0));
           //--for test--
          //--{ startPos: {x:number,y:number},endPos:{x:number,y:number}}
          lineComponent.startAndEndPos=
          {
              startPos:v3(0,1080/2),
              endPos:v3(1920,1080/2)
          };*/

          /*
          TweenMax.to(testNode.getComponent(TweenMaxCocosPlugin),0.25,
          {
              lineOffestX:1,
              repeat:-1
             
          });*/

          /*
          log('LightningEffect@@Node',args[0],testNode);
           let lightningBall:Node=instantiate(LoadingResManager.getInstance().getPrefab(args[0].prefabId));
          
          lightningBall.addComponent(LinghtningBall);
          //lightningBall.layer=1 << Layers.nameToLayer('fx');
           log('lightningBall',lightningBall);
           this._container.addChild(lightningBall);
                lightningBall.setPosition(v3(0,200,0));
          */
        }

        convertToScreenCoordinates(centerX, centerY, screenWidth, screenHeight, targetX, targetY) {
          var screenCenterX = screenWidth / 2;
          var screenCenterY = screenHeight / 2;
          var offsetX = targetX - centerX;
          var offsetY = targetY - centerY;
          var screenX = screenCenterX + offsetX;
          var screenY = screenCenterY + offsetY;
          return v3(screenX, screenY);
        }

        converToSceneCoordinates(wPos) {
          var spos = this._canvasCameraFx.worldToScreen(wPos);

          var localpos = this._canvasCameraFx.screenToWorld(spos);

          return localpos;
        }
        /**
         * ps--會依照塞進來的順序來開始連線(會把閃電魚塞在第一個)
         * PS--魚的座標會先換成world position
         * @param pos fish world position
         */
        //public showLightningEffect(pos:Vec3[]):void


        showLightningEffect(data) {
          this._afterAnimationDataId = data.id; //-{fpos:Vec3,sn:number,type:number,payoff:number}[]

          var pos = this.getPosData(data.chainFishDatas);
          log('check_showLightningEffect_pos', pos);
          var len = pos.length;
          var lightningLineNode;
          var lightningBallNode;
          var lpStart;
          var lpEnd; //let startAndEndPos:{startPos:Vec3,endPos:Vec3};

          for (var i = 0; i < len - 1; i++) {
            lpStart = this._container.getComponent(UITransform).convertToNodeSpaceAR(pos[i]);
            lpEnd = this._container.getComponent(UITransform).convertToNodeSpaceAR(pos[i + 1]); //startAndEndPos={startPos:lpStart,endPos:lpEnd};

            lightningLineNode = new Node('lightningLineNode_' + i); //--要檢查攝影機的Z軸 20231031
            //-https://forum.cocos.org/t/topic/101343
            //-https://forum.cocos.org/t/topic/128594

            /**
             * (1(固定值) << 1(索引值))
             * ex:
             * 以預設UI_2D來看,他在layer 25,所以表示就是
             * (1<<25)
             */

            lightningLineNode.layer = 1 << Layers.nameToLayer('fx');
            var lineComponent = lightningLineNode.addComponent(LightningLine);
            lineComponent.targetTexture = this._lightningLineTexture;

            this._scene.addChild(lightningLineNode);

            lightningLineNode.setPosition(v3(0, 0, 0)); //let lpStartScreen:Vec3=this.convertToScreenCoordinates(0,0,CocosGameSetting.Game_Width,CocosGameSetting.Game_Height,lpStart.x,lpStart.y);
            //let lplpEndScreen:Vec3=this.convertToScreenCoordinates(0,0,CocosGameSetting.Game_Width,CocosGameSetting.Game_Height,lpEnd.x,lpEnd.y);
            //-converToSceneCoordinates

            var lpStartScreen = this.converToSceneCoordinates(pos[i]);
            var lplpEndScreen = this.converToSceneCoordinates(pos[i + 1]); //--開始產生 LINE--

            lineComponent.startAndEndPos = {
              startPos: lpStartScreen,
              endPos: lplpEndScreen
            }; //lineComponent.startAndEndPos={startPos:lpStart,endPos:lpEnd};

            log('check_localPointData', lpStart, lpEnd, lpStartScreen, lplpEndScreen); //--閃電球

            lightningBallNode = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(this._prefabId));
            lightningBallNode.addComponent(LinghtningBall);
            log('lightningBall', lightningBallNode);

            this._container.addChild(lightningBallNode);

            lightningBallNode.setPosition(lpStart);

            this._aryLightningPartNodes.push(lightningLineNode);

            this._aryLightningPartNodes.push(lightningBallNode);
          } //-- the last one


          lpEnd = this._container.getComponent(UITransform).convertToNodeSpaceAR(pos[len - 1]); //--閃電球

          lightningBallNode = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(this._prefabId));
          lightningBallNode.addComponent(LinghtningBall); //lightningBall.layer=1 << Layers.nameToLayer('fx');

          log('lightningBall', lightningBallNode);

          this._container.addChild(lightningBallNode);

          lightningBallNode.setPosition(lpEnd);

          this._aryLightningPartNodes.push(lightningBallNode);

          log('check_allLightData', this._aryLightningPartNodes);
          TweenMax.to({}, 1.5, {
            onComplete: this.lightningComplete
          });
        }

        getPosData(data) {
          //-{fpos:Vec3,sn:number,type:number,payoff:number}
          var pos = [];
          var len = data.length;

          for (var i = 0; i < len; i++) {
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
//# sourceMappingURL=6e836e8293920a690190bf943eb98c0ab4f6df43.js.map