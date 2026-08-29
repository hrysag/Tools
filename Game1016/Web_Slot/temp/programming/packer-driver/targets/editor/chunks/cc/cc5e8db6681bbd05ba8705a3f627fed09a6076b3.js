System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, CCBoolean, ContainerWholeBehavior, AnimationStateType, SpineController, GameState, BkgChangeColor, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, FG_BG_Display;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfContainerWholeBehavior(extras) {
    _reporterNs.report("ContainerWholeBehavior", "../../../MyUtils/BasicShowContainerManager/Component/ContainerWholeBehavior", _context.meta, extras);
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
      AnimationStateType = _unresolved_3.AnimationStateType;
      SpineController = _unresolved_3.SpineController;
      GameState = _unresolved_3.GameState;
    }, function (_unresolved_4) {
      BkgChangeColor = _unresolved_4.BkgChangeColor;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a98c2W+1rJLd6YX7G25vU0b", "FG_BG_Display", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'CCBoolean']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FG_BG_Display", FG_BG_Display = (_dec = ccclass('FG_BG_Display'), _dec2 = property({
        type: _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
          error: Error()
        }), SpineController) : SpineController,
        visible: true,
        displayName: 'spineController',
        tooltip: 'BG_AM'
      }), _dec3 = property({
        type: CCBoolean,
        visible: true,
        displayName: '是否為背景動畫',
        tooltip: '預設false'
      }), _dec(_class = (_class2 = class FG_BG_Display extends (_crd && ContainerWholeBehavior === void 0 ? (_reportPossibleCrUseOfContainerWholeBehavior({
        error: Error()
      }), ContainerWholeBehavior) : ContainerWholeBehavior) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_spineController", _descriptor, this);

          _initializerDefineProperty(this, "isBkgAni", _descriptor2, this);

          this._colorChangeComp = void 0;
          this._dirtyFlag = false;
          this._showState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL;
        }

        onLoad() {
          if (this._dirtyFlag) return;
          this._dirtyFlag = true;

          this._spineController.node.once(Node.EventType.CHILD_ADDED, () => {
            this.init();
          }); //this.name='FG_BG_Display';
          //this.init();

        }

        init() {
          var _this$_spineControlle, _this$_spineControlle2;

          if (!this._dirtyFlag) return;
          super.init();
          this._colorChangeComp = this.getComponent(_crd && BkgChangeColor === void 0 ? (_reportPossibleCrUseOfBkgChangeColor({
            error: Error()
          }), BkgChangeColor) : BkgChangeColor);
          (_this$_spineControlle = this._spineController) == null || _this$_spineControlle.init();
          (_this$_spineControlle2 = this._spineController) == null || _this$_spineControlle2.playAni({
            aniState: (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
              error: Error()
            }), AnimationStateType) : AnimationStateType).Loop
          });
        } //---給控制器去呼叫使用的(遊戲狀態改變時呼叫)


        changeGameMode(gameState) {
          //--do something
          //this.node.active=(gameState==this._showState)?true:false;
          console.log();

          if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            this.playAni();
          } else {
            this.stopAllAni();
          }
        }

        stopAllAni() {
          var _this$_spineControlle3;

          // Stop all animations
          if ((_this$_spineControlle3 = this._spineController) != null && _this$_spineControlle3.isPlaying) {
            var _this$_spineControlle4;

            (_this$_spineControlle4 = this._spineController) == null || _this$_spineControlle4.stopAni();
          }

          console.log();
        }

        playAni(value) {
          var _this$_spineControlle5;

          // Play animation
          (_this$_spineControlle5 = this._spineController) == null || _this$_spineControlle5.playAni({
            aniState: (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
              error: Error()
            }), AnimationStateType) : AnimationStateType).Loop
          });
          console.log();
        } //---開啟背景反黑


        openDark(spColorMode) {
          var _this$_colorChangeCom;

          (_this$_colorChangeCom = this._colorChangeComp) == null || _this$_colorChangeCom.openDark(spColorMode);
        } //---關閉背景反黑


        closeDark(spColorMode) {
          var _this$_colorChangeCom2;

          (_this$_colorChangeCom2 = this._colorChangeComp) == null || _this$_colorChangeCom2.closeDark(spColorMode);
        } //---漸變反黑


        async openTweenDark(spColorMode) {
          var _this$_colorChangeCom3;

          await ((_this$_colorChangeCom3 = this._colorChangeComp) == null ? void 0 : _this$_colorChangeCom3.openTweenDark(spColorMode));
        }

        async closeTweenDark(spColorMode) {
          var _this$_colorChangeCom4;

          await ((_this$_colorChangeCom4 = this._colorChangeComp) == null ? void 0 : _this$_colorChangeCom4.closeTweenDark(spColorMode));
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_spineController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isBkgAni", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cc5e8db6681bbd05ba8705a3f627fed09a6076b3.js.map