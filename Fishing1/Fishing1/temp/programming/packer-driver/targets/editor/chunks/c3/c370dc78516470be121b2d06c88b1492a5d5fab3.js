System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingResManager, TweenMaxCocosPlugin, instantiate, Sprite, UIOpacity, v3, log, DgCommingTitleAni, _crd;

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../framework/utils/TweenMaxPlugin", _context.meta, extras);
  }

  _export("DgCommingTitleAni", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      Sprite = _cc.Sprite;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
      log = _cc.log;
    }, function (_unresolved_2) {
      LoadingResManager = _unresolved_2.LoadingResManager;
    }, function (_unresolved_3) {
      TweenMaxCocosPlugin = _unresolved_3.TweenMaxCocosPlugin;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "434f3jnArhF8p+PtrglX0CE", "DgCommingTitleAni", undefined);
      /**
       * Created by EricHuang on 2023/10/17.
       */


      __checkObsolete__(['Prefab', 'instantiate', 'Node', 'Sprite', 'SpriteFrame', 'UIOpacity', 'v3']);

      __checkObsolete__(['log']);

      _export("DgCommingTitleAni", DgCommingTitleAni = class DgCommingTitleAni {
        constructor(...args) {
          this._titleNode = void 0;
          this._languageSpr = void 0;
          this._bg = void 0;
          this._containerNode = void 0;
          log('check_DgCommingTitleAni', args);
          this._titleNode = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(args[0].other.prefabId));

          this._titleNode.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          this._bg = this._titleNode.getChildByName('bg');

          this._bg.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          this._languageSpr = this._titleNode.getChildByName(args[0].other.languageNodeId);

          this._languageSpr.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          let spr = this._languageSpr.getComponent(Sprite);

          let spriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrameFromSpriteAtlas(args[0].other.atlasId, args[0].other.frameId);

          if (spriteFrame) {
            spr.spriteFrame = spriteFrame;
          }

          this._containerNode = args[0].container;

          this._containerNode.addChild(this._titleNode);

          this._titleNode.active = false;
        } //--show title of gd


        async showOpenEffect() {
          if (this._titleNode && this._languageSpr) {
            this._titleNode.active = true;

            this._bg.setScale(v3(0.8, 0.2, 1));

            this._titleNode.getComponent(UIOpacity).opacity = 0;
            await Promise.all([this.allOpacityAction(), this.bgAction(), this.languageSprAction()]);
            TweenMax.to({}, 2, {
              onComplete: () => {
                this._titleNode.active = false;

                this._bg.setScale(v3(1, 1, 1));

                this._languageSpr.setScale(v3(1, 1, 1));
              }
            });
          }
        }

        async allOpacityAction() {
          return new Promise(resolve => {
            TweenMax.to(this._titleNode.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), 0.2, {
              opacity: 255,
              onComplete: () => {
                resolve();
              }
            });
          });
        }

        async bgAction() {
          return new Promise(resolve => {
            TweenMax.to(this._bg.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), 0.2, {
              scaleX: 1.05,
              scaleY: 1.2,
              //repeat:2,
              //yoyo:true,
              //ease:Elastic.easeOut,
              onCompleteParams: [this._bg.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin)],
              onComplete: value => {
                //--remove
                TweenMax.to(value, 0.2, {
                  scaleX: 0.95,
                  scaleY: 0.95,
                  onComplete: () => {
                    resolve();
                  }
                });
              }
            });
          });
        }

        async languageSprAction() {
          return new Promise(resolve => {
            TweenMax.to(this._languageSpr.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), 0.2, {
              scaleX: 2,
              scaleY: 1.2,
              //repeat:2,
              //yoyo:true,
              //ease:Elastic.easeOut,
              onCompleteParams: [this._languageSpr.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin)],
              onComplete: value => {
                //--remove
                TweenMax.to(value, 0.2, {
                  scaleX: 0.95,
                  scaleY: 0.95,
                  onComplete: () => {
                    resolve();
                  }
                });
              }
            });
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c370dc78516470be121b2d06c88b1492a5d5fab3.js.map