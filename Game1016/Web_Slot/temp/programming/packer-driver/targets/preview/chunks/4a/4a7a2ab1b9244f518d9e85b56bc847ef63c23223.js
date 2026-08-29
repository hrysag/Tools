System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, CCBoolean, ContainerWholeBehavior, AnimationController, AnimationStateType, SpineController, GameState, BkgChangeColor, Orientation, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, SPINE_ANI_NAME, NG_BG_AM_Display;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfContainerWholeBehavior(extras) {
    _reporterNs.report("ContainerWholeBehavior", "../../../MyUtils/BasicShowContainerManager/Component/ContainerWholeBehavior", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStateType(extras) {
    _reporterNs.report("AnimationStateType", "../../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBkgDisplay(extras) {
    _reporterNs.report("IBkgDisplay", "../IBkgDisplay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBkgChangeColor(extras) {
    _reporterNs.report("BkgChangeColor", "../BkgChangeColor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      CCBoolean = _cc.CCBoolean;
    }, function (_unresolved_2) {
      ContainerWholeBehavior = _unresolved_2.ContainerWholeBehavior;
    }, function (_unresolved_3) {
      AnimationController = _unresolved_3.AnimationController;
      AnimationStateType = _unresolved_3.AnimationStateType;
      SpineController = _unresolved_3.SpineController;
      GameState = _unresolved_3.GameState;
    }, function (_unresolved_4) {
      BkgChangeColor = _unresolved_4.BkgChangeColor;
    }, function (_unresolved_5) {
      Orientation = _unresolved_5.Orientation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "530bcmXt29ISpjXj9N2EgkQ", "NG_BG_AM_Display", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'sp', 'CCBoolean']); //import { Orientation } from "db://assets/Scripts/Utils/Config";


      ({
        ccclass,
        property
      } = _decorator);
      SPINE_ANI_NAME = {
        L: 'L',
        P: 'P'
      };

      _export("NG_BG_AM_Display", NG_BG_AM_Display = (_dec = ccclass('NG_BG_AM_Display'), _dec2 = property({
        type: _crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
          error: Error()
        }), AnimationController) : AnimationController,
        visible: true,
        displayName: 'AnimationController',
        tooltip: 'BG_AM'
      }), _dec3 = property({
        type: _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
          error: Error()
        }), SpineController) : SpineController,
        visible: true,
        displayName: 'spineController',
        tooltip: 'BG_AM'
      }), _dec4 = property({
        type: CCBoolean,
        visible: true,
        displayName: '是否為背景動畫',
        tooltip: '預設false'
      }), _dec(_class = (_class2 = class NG_BG_AM_Display extends (_crd && ContainerWholeBehavior === void 0 ? (_reportPossibleCrUseOfContainerWholeBehavior({
        error: Error()
      }), ContainerWholeBehavior) : ContainerWholeBehavior) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_animationController", _descriptor, this);

          _initializerDefineProperty(this, "_spineController", _descriptor2, this);

          _initializerDefineProperty(this, "isBkgAni", _descriptor3, this);

          this._colorChangeComp = void 0;
          this._dirtyFlag = false;
          this._showState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL;
        }

        onLoad() {
          if (this._dirtyFlag) return;
          this._dirtyFlag = true; //--用node added比較保險一點,且確保它<一定>是onload之後才會被addChild進來

          this._spineController.node.once(Node.EventType.CHILD_ADDED, () => {
            this.init();
          }); //--也可以這樣用..
          //this._spineController.node.on(ANI_SYS_EVENTS.CTRL_LOADED, this.onSpineCtrlLoaded);

        }

        init() {
          var _this$_animationContr, _this$_spineControlle, _this$_animationContr2, _this$_spineControlle2;

          if (!this._dirtyFlag) return;
          super.init();
          this._colorChangeComp = this.getComponent(_crd && BkgChangeColor === void 0 ? (_reportPossibleCrUseOfBkgChangeColor({
            error: Error()
          }), BkgChangeColor) : BkgChangeColor);
          (_this$_animationContr = this._animationController) == null || _this$_animationContr.init();
          (_this$_spineControlle = this._spineController) == null || _this$_spineControlle.init();
          (_this$_animationContr2 = this._animationController) == null || _this$_animationContr2.playAni((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
            error: Error()
          }), AnimationStateType) : AnimationStateType).Default);
          (_this$_spineControlle2 = this._spineController) == null || _this$_spineControlle2.playAni({
            aniState: SPINE_ANI_NAME.L
          });
        }
        /*
        private onSpineCtrlLoaded = (event: AniSysEventData): void => {
            this.init();
            this._spineController.node.off(ANI_SYS_EVENTS.CTRL_LOADED, this.onSpineCtrlLoaded);
        }*/
        //---給控制器去呼叫使用的(遊戲狀態改變時呼叫)


        changeGameMode(gameState) {//--do something
          //this.node.active=(gameState==this._showState)?true:false;
        } //--override it


        doDefaultResizeProcess(value) {
          super.doDefaultResizeProcess(value);

          if (value == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            var _this$_spineControlle3;

            (_this$_spineControlle3 = this._spineController) == null || _this$_spineControlle3.playAni({
              aniState: SPINE_ANI_NAME.L
            });
          } else if (value == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            var _this$_spineControlle4;

            (_this$_spineControlle4 = this._spineController) == null || _this$_spineControlle4.playAni({
              aniState: SPINE_ANI_NAME.P
            });
          }
        } //---開啟背景反黑


        openDark(spColorMode) {
          var _this$_colorChangeCom;

          (_this$_colorChangeCom = this._colorChangeComp) == null || _this$_colorChangeCom.openDark(spColorMode);
        } //---關閉背景反黑


        closeDark(spColorMode) {
          var _this$_colorChangeCom2;

          (_this$_colorChangeCom2 = this._colorChangeComp) == null || _this$_colorChangeCom2.closeDark(spColorMode);
        } //---漸變反黑


        openTweenDark(spColorMode) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var _this$_colorChangeCom3;

            yield (_this$_colorChangeCom3 = _this._colorChangeComp) == null ? void 0 : _this$_colorChangeCom3.openTweenDark(spColorMode);
          })();
        }

        closeTweenDark(spColorMode) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var _this2$_colorChangeCo;

            yield (_this2$_colorChangeCo = _this2._colorChangeComp) == null ? void 0 : _this2$_colorChangeCo.closeTweenDark(spColorMode);
          })();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_animationController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_spineController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isBkgAni", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4a7a2ab1b9244f518d9e85b56bc847ef63c23223.js.map