System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingResManager, Digits, GameUtils, v3, instantiate, Sprite, Label, TweenMaxCocosPlugin, log, DgAnnounceAni, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
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

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

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

          var languageNode = this._allContainerNode.getChildByName('winTx');

          this._congratulate = languageNode.getChildByName('congratulateTx');
          var spriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
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

          var dg = this._digitsNode.addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
            error: Error()
          }), Digits) : Digits);

          var textures = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
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

        showAnnounceForGD(id, payOff) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (TweenMax.isTweening(_this._bg.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin))) {
              TweenMax.killTweensOf(_this._bg.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin));
            }

            if (TweenMax.isTweening(_this._lBar.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin))) {
              TweenMax.killTweensOf(_this._lBar.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin));
            }

            if (TweenMax.isTweening(_this._rBar.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin))) {
              TweenMax.killTweensOf(_this._rBar.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin));
            }

            if (TweenMax.isTweening(_this._tweenObj)) {
              TweenMax.killTweensOf(_this._tweenObj);

              _this.destory();
            }

            _this._containerNode.addChild(_this._allContainerNode);

            _this._allContainerNode.active = true;

            _this._digitsNode.getComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
              error: Error()
            }), Digits) : Digits).display(payOff, 'center');

            _this._userLabelNode.getComponent(Label).string = id;
            _this._digitsNode.active = _this._userLabelNode.active = _this._congratulate.active = _this._get.active = false;

            _this._bg.setScale(v3(0.05, 1, 1));

            yield Promise.all([_this.showBg(), _this.showLbar(), _this.showRbar()]);
            TweenMax.to(_this._tweenObj, 3, {
              onComplete: () => {
                _this.destory();
              }
            });
          })();
        }

        showBg() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              TweenMax.to(_this2._bg.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), .8, {
                scaleX: 1,
                ease: Elastic.easeOut,
                onComplete: () => {
                  //--show payoff and id
                  _this2._digitsNode.active = _this2._userLabelNode.active = _this2._congratulate.active = _this2._get.active = true;
                  resolve();
                }
              });
            });
          })();
        }

        showLbar() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              //let lp:Vec3=this._lBar.getPosition();
              _this3._lBar.setPosition(v3(0, 0, 0));

              TweenMax.to(_this3._lBar.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), .8, {
                x: _this3._ogfinalEndPos.lx,
                ease: Elastic.easeOut,
                onComplete: () => {
                  resolve();
                }
              });
            });
          })();
        }

        showRbar() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              //let rp:Vec3=this._rBar.getPosition();
              _this4._rBar.setPosition(v3(0, 0, 0));

              TweenMax.to(_this4._rBar.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), .8, {
                x: _this4._ogfinalEndPos.rx,
                ease: Elastic.easeOut,
                onComplete: () => {
                  resolve();
                }
              });
            });
          })();
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
//# sourceMappingURL=abc2600a3db6592789d927979a27fbe52e13ab2a.js.map