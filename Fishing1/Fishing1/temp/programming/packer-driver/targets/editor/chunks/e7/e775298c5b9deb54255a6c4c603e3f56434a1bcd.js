System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingResManager, Digits, GameUtils, v3, instantiate, Sprite, Label, TweenMaxCocosPlugin, log, DgAnnounceAni, _crd;

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDigits(extras) {
    _reporterNs.report("Digits", "../../../../framework/utils/Digits", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../framework/utils/TweenMaxPlugin", _context.meta, extras);
  }

  _export("DgAnnounceAni", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      v3 = _cc.v3;
      instantiate = _cc.instantiate;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      log = _cc.log;
    }, function (_unresolved_2) {
      LoadingResManager = _unresolved_2.LoadingResManager;
    }, function (_unresolved_3) {
      Digits = _unresolved_3.Digits;
    }, function (_unresolved_4) {
      GameUtils = _unresolved_4.GameUtils;
    }, function (_unresolved_5) {
      TweenMaxCocosPlugin = _unresolved_5.TweenMaxCocosPlugin;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75935ONqUVHlrAeRBKceYnW", "DgAnnounceAni", undefined);
      /**
       * Created by EricHuang on 2023/10/23.
       */


      __checkObsolete__(['v3', 'Layers', 'color', 'Node', 'instantiate', 'SpriteFrame', 'Sprite', 'Vec3', 'Label']);

      __checkObsolete__(['log']);

      _export("DgAnnounceAni", DgAnnounceAni = class DgAnnounceAni {
        constructor(...args) {
          this._containerNode = void 0;
          this._allContainerNode = void 0;
          this._bg = void 0;
          this._lBar = void 0;
          this._rBar = void 0;
          this._congratulate = void 0;
          this._get = void 0;
          this._digitsNode = void 0;
          this._userLabelNode = void 0;
          this._ogfinalEndPos = void 0;
          this._tweenObj = void 0;
          this._containerNode = args[0].container;
          this._allContainerNode = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(args[0].other.prefabId));
          this._bg = this._allContainerNode.getChildByName('reelMid');

          this._bg.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          this._lBar = this._allContainerNode.getChildByName('reelRodL');

          this._lBar.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          this._rBar = this._allContainerNode.getChildByName('reelRodR');

          this._rBar.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          this._ogfinalEndPos = {
            lx: this._lBar.position.x,
            rx: this._rBar.position.x
          };

          let languageNode = this._allContainerNode.getChildByName('winTx');

          this._congratulate = languageNode.getChildByName('congratulateTx');
          let spriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrameFromSpriteAtlas(args[0].other.tx_congratulate_atlasId, args[0].other.tx_congratulate);
          this._congratulate.getComponent(Sprite).spriteFrame = spriteFrame;
          this._get = languageNode.getChildByName('getTx');
          spriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrameFromSpriteAtlas(args[0].other.tx_get_atlasId, args[0].other.tx_get);
          this._get.getComponent(Sprite).spriteFrame = spriteFrame;
          this._digitsNode = this._allContainerNode.getChildByName('score'); //let digitsNode:Node=new Node('digitsNode');
          //let dg:Digits=digitsNode.addComponent(Digits);

          let dg = this._digitsNode.addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
            error: Error()
          }), Digits) : Digits);

          let textures = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(args[0].other.digitsTexturePath).sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).sortDigitsSpriteFrames);
          dg.textures = textures; //dg.padding=-10;

          dg.padding = 1;
          dg.digitScale = .7;
          dg.useCommand = true;
          dg.symbolStr = [','];
          dg.symbolIndex = [10];
          log('_DgKillDragonTitleAni_', args[0], this._allContainerNode); //--這個要在處理,因為討厭的label

          this._userLabelNode = this._allContainerNode.getChildByName('playerName');
          this._tweenObj = {};
          this._allContainerNode.active = false;
        }

        async showAnnounceForGD(id, payOff) {
          if (TweenMax.isTweening(this._bg.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin))) {
            TweenMax.killTweensOf(this._bg.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin));
          }

          if (TweenMax.isTweening(this._lBar.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin))) {
            TweenMax.killTweensOf(this._lBar.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin));
          }

          if (TweenMax.isTweening(this._rBar.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin))) {
            TweenMax.killTweensOf(this._rBar.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin));
          }

          if (TweenMax.isTweening(this._tweenObj)) {
            TweenMax.killTweensOf(this._tweenObj);
            this.destory();
          }

          this._containerNode.addChild(this._allContainerNode);

          this._allContainerNode.active = true;

          this._digitsNode.getComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
            error: Error()
          }), Digits) : Digits).display(payOff, 'center');

          this._userLabelNode.getComponent(Label).string = id;
          this._digitsNode.active = this._userLabelNode.active = this._congratulate.active = this._get.active = false;

          this._bg.setScale(v3(0.05, 1, 1));

          await Promise.all([this.showBg(), this.showLbar(), this.showRbar()]);
          TweenMax.to(this._tweenObj, 3, {
            onComplete: () => {
              this.destory();
            }
          });
        }

        async showBg() {
          return new Promise(resolve => {
            TweenMax.to(this._bg.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), .8, {
              scaleX: 1,
              ease: Elastic.easeOut,
              onComplete: () => {
                //--show payoff and id
                this._digitsNode.active = this._userLabelNode.active = this._congratulate.active = this._get.active = true;
                resolve();
              }
            });
          });
        }

        async showLbar() {
          return new Promise(resolve => {
            //let lp:Vec3=this._lBar.getPosition();
            this._lBar.setPosition(v3(0, 0, 0));

            TweenMax.to(this._lBar.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), .8, {
              x: this._ogfinalEndPos.lx,
              ease: Elastic.easeOut,
              onComplete: () => {
                resolve();
              }
            });
          });
        }

        async showRbar() {
          return new Promise(resolve => {
            //let rp:Vec3=this._rBar.getPosition();
            this._rBar.setPosition(v3(0, 0, 0));

            TweenMax.to(this._rBar.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), .8, {
              x: this._ogfinalEndPos.rx,
              ease: Elastic.easeOut,
              onComplete: () => {
                resolve();
              }
            });
          });
        }

        destory() {
          this._allContainerNode.active = true;
          this._digitsNode.active = this._userLabelNode.active = this._congratulate.active = this._get.active = false;

          this._containerNode.removeChild(this._allContainerNode);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e775298c5b9deb54255a6c4c603e3f56434a1bcd.js.map