System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingResManager, GameUtils, UIOpacity, UITransform, v3, instantiate, TweenMaxCocosPlugin, Digits, PwNode, PowerUpAni, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../framework/utils/TweenMaxPlugin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDigits(extras) {
    _reporterNs.report("Digits", "../../../../framework/utils/Digits", _context.meta, extras);
  }

  _export({
    PwNode: void 0,
    PowerUpAni: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      LoadingResManager = _unresolved_2.LoadingResManager;
    }, function (_unresolved_3) {
      GameUtils = _unresolved_3.GameUtils;
    }, function (_unresolved_4) {
      TweenMaxCocosPlugin = _unresolved_4.TweenMaxCocosPlugin;
    }, function (_unresolved_5) {
      Digits = _unresolved_5.Digits;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1bafftzBNlMjJPc/Mjxe+k1", "PowerUpAni", undefined);
      /**
       * Created by EricHuang on 2023/10/26.
       */


      __checkObsolete__(['UIOpacity', 'UITransform']);

      __checkObsolete__(['Vec3']);

      __checkObsolete__(['v3']);

      __checkObsolete__(['SpriteFrame']);

      __checkObsolete__(['Node']);

      __checkObsolete__(['instantiate']);

      __checkObsolete__(['log']);

      _export("PwNode", PwNode = class PwNode {
        constructor() {
          this.pwNode = void 0;
          this.startOpacity = void 0;
          this.ogPosition = void 0;
          this.startPosition = void 0;
        }

      });

      _export("PowerUpAni", PowerUpAni = class PowerUpAni {
        constructor() {
          this._container = void 0;
          this._aryPowerUpNodes = void 0;
          this._digitsTextures = void 0;
          this._positions = void 0;
          this._playerIndex = void 0;
          //--0-3
          this._pwPrefabPath = void 0;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          this._container = args[0].container;
          this._aryPowerUpNodes = [];
          this._digitsTextures = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(args[0].powerUpDigitsTexturePath.spriteFrame).sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).sortDigitsSpriteFrames); //log('check_digitsData_for_powerup',this._digitsTextures);
          //this._positions=args[0].positions;
          //this._positions=args[0].exchangePositions;
          //this._playerIndex=args[0].playerIndex;

          this._pwPrefabPath = args[0].prefabId;
        }

        setDataAfterSetRoom(positions, playerIndex) {
          this._positions = positions;
          this._playerIndex = playerIndex;
        }

        showPowerUp(playerIndex, powerPlus) {
          var _this = this;

          return _asyncToGenerator(function* () {
            //let pwAll:{pwAll:Node,digits:Digits};
            //let pw:Node;
            //log('showPowerUp',powerPlus);
            var digits;
            var pw;

            if (_this._aryPowerUpNodes.length > 0) {
              pw = _this._aryPowerUpNodes.pop();
              digits = pw.pwNode.children[0].getChildByName('label').getComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
                error: Error()
              }), Digits) : Digits); //log('check_recyclePW',pw,digits);
            } else {
              pw = new PwNode();
              var prefabNode = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(_this._pwPrefabPath));
              pw.pwNode = prefabNode;
              prefabNode.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
              prefabNode.addComponent(UIOpacity); //let uiTransFrom=prefabNode.addComponent(UITransform);
              //uiTransFrom.anchorX=uiTransFrom.anchorY=0.5;

              digits = prefabNode.children[0].getChildByName('label').addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
                error: Error()
              }), Digits) : Digits);
              digits.textures = _this._digitsTextures;
              digits.pointIndex = 10;
              digits.padding = -20;
              digits.symbolStr = ['X'];
              digits.symbolIndex = [11];
              digits.digitScale = .8;
              digits.floatScale = .8;
              digits.floatScale = .8;
            }

            var size = pw.pwNode.getComponent(UITransform).contentSize;
            var offsetX = -50;
            var offsetY = size.height / 2;
            var pwActionY = 1;

            if (_this._playerIndex == 0 || _this._playerIndex == 1) {
              //offsetX=offsetX*-1;
              if (playerIndex == 2 || playerIndex == 3) {
                offsetY = offsetY * -1 - 30; //--遞減Y軸

                pwActionY = -1;
              }
            } else {
              //--2-3
              //offsetX=offsetX*-1;
              if (playerIndex == 0 || playerIndex == 1) {
                offsetY = offsetY * -1 - 30;
                pwActionY = -1;
              }
            } //let localPos:Vec3= this._container.getComponent(UITransform).convertToNodeSpaceAR(v3(this._positions[playerIndex].x+offsetX,this._positions[playerIndex].y+offsetY));


            var localPos = _this._container.getComponent(UITransform).convertToNodeSpaceAR(v3(_this._positions[playerIndex].x, _this._positions[playerIndex].y));

            pw.startPosition = v3(localPos.x + offsetX, localPos.y + offsetY, localPos.z); //pw.startPosition=v3(localPos.x,localPos.y+offsetY,localPos.z);

            pw.ogPosition = v3(pw.startPosition.x, localPos.y, localPos.z);
            pw.startOpacity = playerIndex != _this._playerIndex ? 128 : 255;

            _this._container.addChild(pw.pwNode); //pw.setPosition(localPos);//--這是出現的最終位置


            pw.pwNode.setPosition(pw.startPosition); //--這是出現的最終位置

            pw.pwNode.setScale(v3(.8, .8));
            digits.displayWithStr('X' + powerPlus, 'center');
            pw.pwNode.getComponent(UIOpacity).opacity = 0;
            var finishShowNode = yield _this.popUpShow(pw, pwActionY, pw.startOpacity);
            var beforeRemoveNode = yield _this.beforeRemove(finishShowNode);
            var removeMotationNode = yield _this.removeMotation(beforeRemoveNode);

            _this._container.removeChild(removeMotationNode.pwNode);

            _this._aryPowerUpNodes.push(removeMotationNode);
          })();
        }
        /**
         * 
         * @param target 
         * @param actionY 
         * @param opacity 預定到達的透明度(非玩家本身128,玩家本身255)
         * @returns 執行對象本身的node
         */
        //private async popUpShow(target:Node,actionY:number,opacity:number):Promise<Node>


        popUpShow(target, actionY, opacity) {
          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              TweenMax.to(target.pwNode.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), 0.2, {
                opacity: opacity,
                y: target.pwNode.position.y + 30 * actionY,
                ease: Back.easeOut,
                onCompleteParams: [target],
                onComplete: value => {
                  resolve(value);
                }
              });
            });
          })();
        } //private async beforeRemove(target:Node):Promise<Node>


        beforeRemove(target) {
          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              TweenMax.to(target.pwNode.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), 0.5, {
                opacity: 76.5,
                onCompleteParams: [target],
                onComplete: c => {
                  resolve(c);
                }
              });
            });
          })();
        }

        removeMotation(target) {
          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              TweenMax.to(target.pwNode.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), 0.3, {
                opacity: 0,
                y: target.ogPosition.y,
                onCompleteParams: [target],
                onComplete: c => {
                  resolve(c);
                }
              });
            });
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=815672cc0113794ff93e0c4d99b7a359dfe2c944.js.map