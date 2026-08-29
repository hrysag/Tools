System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Sprite, Node, v3, UIOpacity, UITransform, Layers, TweenMaxCocosPlugin, GameUtils, LoadingResManager, log, BasicCoin, MoneyEffect, _crd;

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../utils/TweenMaxPlugin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../../utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../loading/LoadingResManager", _context.meta, extras);
  }

  _export({
    BasicCoin: void 0,
    MoneyEffect: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Sprite = _cc.Sprite;
      Node = _cc.Node;
      v3 = _cc.v3;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Layers = _cc.Layers;
      log = _cc.log;
    }, function (_unresolved_2) {
      TweenMaxCocosPlugin = _unresolved_2.TweenMaxCocosPlugin;
    }, function (_unresolved_3) {
      GameUtils = _unresolved_3.GameUtils;
    }, function (_unresolved_4) {
      LoadingResManager = _unresolved_4.LoadingResManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c6fffaFKJNB7lm/L5BHd2P", "MoneyEffect", undefined);
      /**
       * Created by EricHuang on 2023/10/08.
       */


      __checkObsolete__(['Sprite', 'SpriteFrame', 'Node', 'color', 'v3', 'UIOpacity', 'Vec2', 'Vec3', 'UITransform', 'Layers', 'Graphics', 'Size']);

      __checkObsolete__(['log']);

      _export("BasicCoin", BasicCoin = class BasicCoin extends Node {
        constructor() {
          super();
          this.isPlayer = void 0;
          this.id = void 0;
          this.scaleXY = void 0;
          this.endX = void 0;
          this.endY = void 0;
          this.init();
        }

        init() {
          this.isPlayer = false;
          this.id = 0;
          this.scaleXY = 1;
          this.endX = 0;
          this.endY = 0; //this.pivot.set(0,0);

          /*
          if(this.getComponent(UIOpacity))
          {
              this.getComponent(UIOpacity).opacity=1;
          }
                  this.scale.set(1);
          */
        }

      });

      _export("MoneyEffect", MoneyEffect = class MoneyEffect {
        constructor() {
          this._stage = void 0;
          this._uITransform = void 0;
          this._moneyTexturePath = void 0;
          //private _stage:PIXI.Container;
          this._positionInfo = void 0;
          //private _jumpMoney:JumpMoney;
          this._aryMoneyPools = void 0;
          this._texture = void 0;

          this.moveCointoPlayerCannon = target => {
            TweenMax.to(target, .4, {
              x: target.node.endX,
              y: target.node.endY,
              opacity: 70,
              onCompleteParams: [target],
              onComplete: value => {
                this._stage.removeChild(value.node);

                value.node.getComponent(UIOpacity).opacity = 255;
                value.node.init();

                this._aryMoneyPools.push(value.node);
              }
            });
          };

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          //---處理資料
          //-把positionInfo的座標轉local座標(stageNode坐標系)
          //-money_ani0000
          //-this._toggleTexture={on:this._toggle.spriteFrame,off:LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas('prefab/textures/fishHunterPopup','btn_switch_off') as SpriteFrame};
          this._stage = args[0].container;
          this._moneyTexturePath = args[0].moneyTexturePath;
          this._texture = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrameFromSpriteAtlas(this._moneyTexturePath.atlas, this._moneyTexturePath.spriteFrame);
          this._uITransform = this._stage.getComponent(UITransform);
          /* 
          this._positionInfo=args[0].coinEndinfo;
           let len:number=this._positionInfo.length;
           let lp:Vec3;
           for(let i:number=0;i<len;i++)
          {
              
              lp=this._uITransform.convertToNodeSpaceAR(v3(this._positionInfo[i].x,this._positionInfo[i].y));
              
              this._positionInfo[i].x=lp.x;
              
              this._positionInfo[i].y=lp.y;
          }*/

          this._aryMoneyPools = [];
          log('check_MoneyInit', args, this._texture);
        }

        setDataAfterSetRoom(coinEndinfo) {
          this._positionInfo = coinEndinfo;
          var len = this._positionInfo.length;
          var lp;

          for (var i = 0; i < len; i++) {
            lp = this._uITransform.convertToNodeSpaceAR(v3(this._positionInfo[i].x, this._positionInfo[i].y));
            this._positionInfo[i].x = lp.x;
            this._positionInfo[i].y = lp.y;
          }
        }
        /**
         * 
         * @param isPlayer 是否為玩家(false要半透明)
         * @param x 出發位置 canvas global pos
         * @param y 出發位置 canvas global pos
         * @param index 玩家座位 0-3
         */


        showMoneyAnimation(isPlayer, x, y, index) {
          log('showMoneyAnimation_jumpmoney', isPlayer, x, y, index);
          var len = 10;
          var scaleXY = 1; //let localPoint:PIXI.Point=this._stage.toLocal(new PIXI.Point(x,y));

          var localPoint = this._stage.getComponent(UITransform).convertToNodeSpaceAR(v3(x, y));

          log('check_jump_local', localPoint);
          var nodeCoin;

          for (var i = 0; i < len; i++) {
            if (this._aryMoneyPools.length > 0) {
              nodeCoin = this._aryMoneyPools.pop();
            } else {
              nodeCoin = new BasicCoin();
              nodeCoin.layer = Layers.Enum.UI_2D;
              var spr = nodeCoin.addComponent(Sprite);
              /*
              let sprUiTransform=nodeCoin.addComponent(UITransform);
               spr.trim=false;
              
              spr.sizeMode=Sprite.SizeMode.RAW;
               spr.type=Sprite.Type.SIMPLE;
              */

              spr.spriteFrame = this._texture; //let ogSize=spr.spriteFrame.originalSize;

              log('check_sizeOG', spr.spriteFrame.originalSize); //sprUiTransform.contentSize=new Size(ogSize.width,ogSize.height);

              nodeCoin.addComponent(UIOpacity);
              nodeCoin.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin); //-sp.sizeMode=Sprite.SizeMode.RAW;
            }
            /*
            let testGNode:Node=new Node('testGNode');
            testGNode.layer=Layers.Enum.UI_2D;
            let gp=testGNode.addComponent(Graphics);
            gp.fillColor=color(255,255,255,128);
            gp.rect(-50/2,-50/2,50,50);
            gp.fill();
             testGNode.addComponent(UITransform);
             this._stage.addChild(testGNode);
            
            testGNode.setPosition(v3(localPoint.x,localPoint.y));
            */


            nodeCoin.isPlayer = isPlayer;
            nodeCoin.id = i;
            nodeCoin.endX = this._positionInfo[index].x;
            nodeCoin.endY = this._positionInfo[index].y; //nodeCoin.pivot.set(nodeCoin.width/2,nodeCoin.height/2);
            //spr.index=i;---沒用到?
            //nodeCoin.scaleXY=scaleXY;
            //nodeCoin.scale.set(scaleXY);
            //--透明度
            //nodeCoin.getComponent(Sprite).color=(nodeCoin.isPlayer)?color(255,255,255,255):color(255,255,255,128);

            nodeCoin.getComponent(UIOpacity).opacity = nodeCoin.isPlayer ? 255 : 128;

            this._stage.addChild(nodeCoin); //nodeCoin.setPosition(0,0,0);


            nodeCoin.setPosition(v3(localPoint.x, localPoint.y));
            var endXY = {
              x: (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).getRangeRandom(localPoint.x - 150, localPoint.x + 150),
              y: localPoint.y
            };
            var midXY = {
              x: 0,
              y: 0
            };

            if (endXY.x >= localPoint.x) {
              midXY.x = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).getRangeRandom(localPoint.x, localPoint.x + 150);
            } else {
              midXY.x = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).getRangeRandom(localPoint.x - 150, localPoint.x);
            }

            midXY.y = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).getRangeRandom(localPoint.y + 300, localPoint.y + 200);
            log('check_jump_curve', localPoint, endXY, midXY); //this._aryRunningObjPools.push(spr);//--沒用到
            //--jump---
            //return;

            var t = nodeCoin.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
            TweenMax.to(t, 0.5, {
              bezier: {
                type: "soft",
                values: [{
                  x: localPoint.x,
                  y: localPoint.y
                }, {
                  x: midXY.x,
                  y: midXY.y
                }, {
                  x: endXY.x,
                  y: endXY.y
                }]
              },
              ease: Bounce.easeOut,
              delay: i * 0.04,
              onCompleteParams: [t],
              onComplete: this.moveCointoPlayerCannon
            });
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=27040842ae4f6d858da17b758435f1fbcf50d647.js.map