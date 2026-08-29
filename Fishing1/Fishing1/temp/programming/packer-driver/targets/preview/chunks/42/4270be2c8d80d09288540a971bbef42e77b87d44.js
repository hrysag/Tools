System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingResManager, Layers, Node, Size, UITransform, v2, v3, Sprite, UIOpacity, TweenMaxCocosPlugin, GameUtils, PropType, log, GetPropAniEffect, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../framework/utils/TweenMaxPlugin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropType(extras) {
    _reporterNs.report("PropType", "../../../model/Fish1ModelDefinitions", _context.meta, extras);
  }

  _export("GetPropAniEffect", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Layers = _cc.Layers;
      Node = _cc.Node;
      Size = _cc.Size;
      UITransform = _cc.UITransform;
      v2 = _cc.v2;
      v3 = _cc.v3;
      Sprite = _cc.Sprite;
      UIOpacity = _cc.UIOpacity;
      log = _cc.log;
    }, function (_unresolved_2) {
      LoadingResManager = _unresolved_2.LoadingResManager;
    }, function (_unresolved_3) {
      TweenMaxCocosPlugin = _unresolved_3.TweenMaxCocosPlugin;
    }, function (_unresolved_4) {
      GameUtils = _unresolved_4.GameUtils;
    }, function (_unresolved_5) {
      PropType = _unresolved_5.PropType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac6bese5clIeqKDa0m+KcV1", "GetPropAniEffect", undefined);
      /**
       * Created by EricHuang on 2023/11/20.
       */


      __checkObsolete__(['Layers', 'Node', 'Size', 'SpriteFrame', 'UITransform', 'v2', 'v3', 'Vec3']);

      __checkObsolete__(['Sprite']);

      __checkObsolete__(['UIOpacity']);

      __checkObsolete__(['CameraComponent']);

      //export class GetPropAniEffect extends EventTarget
      __checkObsolete__(['log']);

      _export("GetPropAniEffect", GetPropAniEffect = class GetPropAniEffect {
        //private _canvasCameraGUI:CameraComponent;
        //private _canvasCameraFish:CameraComponent;
        constructor() {
          this._container = void 0;
          this._spriteFrames = void 0;
          this._poolSpiteNode = void 0;
          this._menuPositions = void 0;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          //super();
          log('check_GetPropAniEffect', args[0]); //-container:find('Canvas/topAniEffectNode')--在UI之上

          this._container = args[0].container; //this._canvasCameraGUI=args[0].cameraGuiNode.getComponent(CameraComponent);
          //this._canvasCameraFish=args[0].cameraFishNode.getComponent(CameraComponent);
          //--1 summon 2 frozen 3 crazy

          this._spriteFrames = {
            [(_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
              error: Error()
            }), PropType) : PropType).PROP_CALL]: (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(args[0].propSpriteFrames[0])[0],
            [(_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
              error: Error()
            }), PropType) : PropType).PROP_FREEZE]: (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(args[0].propSpriteFrames[1])[0],
            [(_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
              error: Error()
            }), PropType) : PropType).PROP_CRAZY]: (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(args[0].propSpriteFrames[2])[0]
          }; //this._menuPositions=args[0].menuPositions;

          this._poolSpiteNode = [];
        }

        setDataAfterSetRoom(menuPositions) {
          this._menuPositions = menuPositions;
        }

        showGetPropEffect(propType, worldV3) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var sprNode;

            if (_this._poolSpiteNode.length > 0) {
              sprNode = _this._poolSpiteNode.pop();
              sprNode.setScale(v3(1, 1));
              sprNode.getComponent(Sprite).spriteFrame = _this._spriteFrames[propType];
              sprNode.setScale(v3(0.6, 0.6));
              sprNode.addComponent(UIOpacity).opacity = 255; //log('showGetPropEffect',propType,this._spriteFrames[propType],);
            } else {
              sprNode = new Node();
              sprNode.layer = Layers.Enum.UI_2D;
              sprNode.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
              var spr = sprNode.addComponent(Sprite);
              spr.spriteFrame = _this._spriteFrames[propType];
              var uiTransFrom = sprNode.addComponent(UITransform);
              uiTransFrom.contentSize = new Size(_this._spriteFrames[propType].originalSize.width, _this._spriteFrames[propType].originalSize.height);
              uiTransFrom.anchorPoint = v2(0.5, 0.5);
              var opacityComponent = sprNode.addComponent(UIOpacity);
              opacityComponent.opacity = 255;
              sprNode.setScale(v3(0.6, 0.6));
            } //log('check_showGetPropEffect_worldV3',worldV3);
            //let spos=this._canvasCameraFish.worldToScreen(worldV3);
            //let localpos=this._canvasCameraGUI.screenToWorld(spos);
            //let localStartPosition=this._container.getComponent(UITransform).convertToNodeSpaceAR(localpos);


            var localStartPosition = _this._container.getComponent(UITransform).convertToNodeSpaceAR(worldV3);

            _this._container.addChild(sprNode);

            sprNode.setPosition(localStartPosition); //---menu的位置

            var localEndPosition = _this._container.getComponent(UITransform).convertToNodeSpaceAR(v3(_this._menuPositions[propType].x, _this._menuPositions[propType].y));

            var endXY = {
              x: (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).getRangeRandom(localStartPosition.x - 150, localStartPosition.x + 150),
              y: localStartPosition.y
            };
            var midXY = {
              x: 0,
              y: 0
            };

            if (endXY.x >= localStartPosition.x) {
              midXY.x = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).getRangeRandom(localStartPosition.x, localStartPosition.x + 150);
            } else {
              midXY.x = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).getRangeRandom(localStartPosition.x - 150, localStartPosition.x);
            }

            midXY.y = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).getRangeRandom(localStartPosition.y + 300, localStartPosition.y + 200);
            var tweenComponent = sprNode.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
            var t1 = yield _this.jumpTween(tweenComponent, localStartPosition, midXY, endXY);
            var t2 = yield _this.goBacktoMenu(t1, localEndPosition);

            _this._container.removeChild(t2.node);

            if (_this._poolSpiteNode.length < 10) {
              _this._poolSpiteNode.push(t2.node);
            }
          })();
        }

        jumpTween(target, localStartPosition, midXY, endXY) {
          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              TweenMax.to(target, 0.5, {
                bezier: {
                  type: "soft",
                  values: [{
                    x: localStartPosition.x,
                    y: localStartPosition.y
                  }, {
                    x: midXY.x,
                    y: midXY.y
                  }, {
                    x: endXY.x,
                    y: endXY.y
                  }]
                },
                ease: Bounce.easeOut,
                //delay:i*0.04,
                onCompleteParams: [target],
                onComplete: value => {
                  resolve(value);
                }
              });
            });
          })();
        }

        goBacktoMenu(target, endLocalPosition) {
          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              TweenMax.to(target, .4, {
                x: endLocalPosition.x,
                y: endLocalPosition.y,
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
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4270be2c8d80d09288540a971bbef42e77b87d44.js.map