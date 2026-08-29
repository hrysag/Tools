System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Digits, CocosGameSetting, GameUtils, TweenMaxCocosPlugin, LoadingResManager, UITransform, Node, UIOpacity, v3, Layout, log, BasicDigits, JumpDigitsEffect, _crd;

  function _reportPossibleCrUseOfDigits(extras) {
    _reporterNs.report("Digits", "../../../../utils/Digits", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosGameSetting(extras) {
    _reporterNs.report("CocosGameSetting", "../../../../utils/CocosGameSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../../utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../utils/TweenMaxPlugin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../loading/LoadingResManager", _context.meta, extras);
  }

  _export({
    BasicDigits: void 0,
    JumpDigitsEffect: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      UITransform = _cc.UITransform;
      Node = _cc.Node;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
      Layout = _cc.Layout;
      log = _cc.log;
    }, function (_unresolved_2) {
      Digits = _unresolved_2.Digits;
    }, function (_unresolved_3) {
      CocosGameSetting = _unresolved_3.CocosGameSetting;
    }, function (_unresolved_4) {
      GameUtils = _unresolved_4.GameUtils;
    }, function (_unresolved_5) {
      TweenMaxCocosPlugin = _unresolved_5.TweenMaxCocosPlugin;
    }, function (_unresolved_6) {
      LoadingResManager = _unresolved_6.LoadingResManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35ba0Ei11tBoJA2Pk57BAXT", "JumpDigitsEffect", undefined);
      /**
       * Created by EricHuang on 2023/10/09
       * 
       */


      __checkObsolete__(['SpriteFrame', 'UITransform', 'Node', 'Vec3', 'UIOpacity', 'v3', 'Layout']);

      __checkObsolete__(['log']);

      _export("BasicDigits", BasicDigits = class BasicDigits extends Node {
        constructor() {
          super();
          this.id = void 0;
          this.scaleData = void 0;
          this._textures = void 0;
          this.id = 0;
          this.scaleData = 1; //this._textures=textures;
          //this.getComponent(Digits).textures=textures;
        }

        seteTextures(value) {
          //this._textures=value;
          this.getComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
            error: Error()
          }), Digits) : Digits).textures = value;
        }

      });

      _export("JumpDigitsEffect", JumpDigitsEffect = class JumpDigitsEffect {
        constructor(...args) {
          this._strdefultTexture = void 0;
          this._stage = void 0;
          this._textureHashMap = void 0;
          this._aryDigitsEffectPool = void 0;
          log('check_JumpDigitsEffect', args);
          this._textureHashMap = {};
          this._aryDigitsEffectPool = [];
          this._stage = args[0].container;
          this._strdefultTexture = args[0].other.strDefultTexturePath;
        }
        /**
         * 
         * @param showNumber 
         * @param x global
         * @param y blobal
         * @param textureIndex 要用的圖片索引,沒有填寫則是使用預設的 
         * 要注意因為這個stage他是只有一層,所以上下左右邊界是要/2的+-值,0,0在中心點
         */


        async showJumpDigits(showNumber, x, y, textureIndex) {
          let localPoint = this._stage.getComponent(UITransform).convertToNodeSpaceAR(v3(x, y));

          let dg;
          let texturePath = this.getTextureIndex(textureIndex);
          let textures = this.createTexture(texturePath);
          log('jumpDigitsTexture', textures);

          if (this._aryDigitsEffectPool.length > 0) {
            dg = this._aryDigitsEffectPool.pop(); //dg.reSteTextures(textures);
          } else {
            dg = new BasicDigits();
            dg.addComponent(UITransform);
            dg.addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
              error: Error()
            }), Digits) : Digits);
            dg.addComponent(UIOpacity);
            dg.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
          }

          this._stage.addChild(dg);

          dg.seteTextures(textures);
          dg.getComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
            error: Error()
          }), Digits) : Digits).useCommand = true;
          dg.getComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
            error: Error()
          }), Digits) : Digits).symbolStr = [',', '+'];
          dg.getComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
            error: Error()
          }), Digits) : Digits).symbolIndex = [10, 12];
          dg.getComponent(Layout).resizeMode = Layout.ResizeMode.CONTAINER;
          dg.scaleData = 1;
          dg.getComponent(UIOpacity).opacity = 255;
          dg.getComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
            error: Error()
          }), Digits) : Digits).displayWithStr('+' + showNumber, 'center');
          let c = dg.getComponent(UITransform).contentSize;
          let position = {
            x: localPoint.x,
            y: localPoint.y
          }; //log('-----------@@@@',position.y,c.height,CocosGameSetting.Game_Height/2,-CocosGameSetting.Game_Height/2);

          if (position.x + c.width / 2 >= (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_Width / 2) {
            position.x = (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
              error: Error()
            }), CocosGameSetting) : CocosGameSetting).Game_Width / 2 - c.width / 2;
          } else if (position.x - c.width / 2 <= -(_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_Width / 2) {
            position.x = -(_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
              error: Error()
            }), CocosGameSetting) : CocosGameSetting).Game_Width / 2 + c.width / 2;
          }

          if (position.y + c.height / 2 > (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_Height / 2) {
            position.y = position.y - c.height;
          } else if (position.y - c.height / 2 - 50 <= -(_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_Height / 2) {
            position.y = position.y + c.height;
          } //dg.x=position.x;
          //dg.y=position.y;
          //dg.setPosition(v3(localPoint.x,localPoint.y));


          dg.setPosition(v3(position.x, position.y));
          let target = dg.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
          let t1 = await this.scaleYoyoTween(target);
          let t2 = await this.goOut(t1);

          this._stage.removeChild(t2.node);

          if (this._aryDigitsEffectPool.length <= 10) {
            this._aryDigitsEffectPool.push(t2.node);
          }
        } //--1


        async scaleYoyoTween(target) {
          return new Promise(resolve => {
            TweenMax.to(target, 0.1, {
              //scaleData:2,
              scale: 2,
              yoyo: true,
              repeat: 1,
              onCompleteParams: [target],
              onComplete: value => {
                resolve(value);
              }
            });
          });
        } //--step 2


        async goOut(target) {
          return new Promise(resolve => {
            TweenMax.to(target, .8, {
              y: target.node.position.y - 50,
              opacity: 0,
              ease: Power0.easeIn,
              //ease:Elastic.easeIn,
              onCompleteParams: [target],
              //onComplete:this.remove
              onComplete: value => {
                resolve(value);
              }
            });
          });
        }
        /*
        private goOut=(value)=>
        {
            TweenMax.to(value,.8,{
                
                y:value.position.y-50,
                opacity:0, 
                ease:Power0.easeIn,
                //ease:Elastic.easeIn,
                onCompleteParams:[value],
                onComplete:this.remove
             });
         }*/

        /*
        private remove=(dg)=>
        {
           //-DigitsEffectCenter.aryDigitsEffectPool.length 長度要限制
           this._stage.removeChild(dg.node);
           if(this._aryDigitsEffectPool.length<=10)
           {
              this._aryDigitsEffectPool.push(dg);
           }
        }*/


        getTextureIndex(value) {
          let r = value ? value : this._strdefultTexture;

          if (this._textureHashMap[value]) {
            r = this._textureHashMap[value];
          }

          return r;
        }

        createTexture(value) {
          let textures = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(value).sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).sortDigitsSpriteFrames);
          return textures;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3c723541eeaf26f4183b88daa7d7f52d88f65d04.js.map