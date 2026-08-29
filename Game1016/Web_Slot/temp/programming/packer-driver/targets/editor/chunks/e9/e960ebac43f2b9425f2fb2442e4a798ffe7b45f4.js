System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, UIOpacity, tween, ContainerBasicBehavior, ResizeStateList, ResizeHandler, Orientation, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, ContainerWholeBehavior;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfContainerBasicBehavior(extras) {
    _reporterNs.report("ContainerBasicBehavior", "./ContainerBasicBehavior", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBG_Ani(extras) {
    _reporterNs.report("IBG_Ani", "../Definitions/GameNodeWithRotation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameNodeWithRotation(extras) {
    _reporterNs.report("IGameNodeWithRotation", "../Definitions/GameNodeWithRotation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResizeStateList(extras) {
    _reporterNs.report("ResizeStateList", "../../BasicResize/Definitions/BasicResizeState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResizeState(extras) {
    _reporterNs.report("ResizeState", "../../BasicResize/Definitions/BasicResizeState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResizeStateType(extras) {
    _reporterNs.report("ResizeStateType", "../../BasicResize/Definitions/BasicResizeState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResizeHandler(extras) {
    _reporterNs.report("ResizeHandler", "../../BasicResize/Component/ResizeHandler", _context.meta, extras);
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
      UIOpacity = _cc.UIOpacity;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      ContainerBasicBehavior = _unresolved_2.ContainerBasicBehavior;
    }, function (_unresolved_3) {
      ResizeStateList = _unresolved_3.ResizeStateList;
    }, function (_unresolved_4) {
      ResizeHandler = _unresolved_4.ResizeHandler;
    }, function (_unresolved_5) {
      Orientation = _unresolved_5.Orientation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b9899++ng1DU5lEtv/SGGEK", "ContainerWholeBehavior", undefined);

      __checkObsolete__(['_decorator', 'Node', 'CCBoolean', 'Component', 'UIOpacity', 'tween']); //import { Orientation } from "db://assets/Scripts/Utils/Config";


      /**
       * 包含旋轉縮放的行為
       * 這個是給<ShowContainerWithResizeManager>BasicShowContainerManager使用的
       * 讓BasicShowContainerManager可以同時擁有旋轉縮放的行為
       * 以及基本的顯示隱藏行為
       */
      ({
        ccclass,
        property
      } = _decorator);

      _export("ContainerWholeBehavior", ContainerWholeBehavior = (_dec = ccclass('ContainerWholeBehavior'), _dec2 = property({
        type: _crd && ResizeStateList === void 0 ? (_reportPossibleCrUseOfResizeStateList({
          error: Error()
        }), ResizeStateList) : ResizeStateList,
        displayName: 'ResizeStateList',
        visible: true,
        tooltip: '狀態控制Resize清單'
      }), _dec3 = property({
        visible: true,
        tooltip: '是否交換容器'
      }), _dec4 = property({
        type: [Node],
        tooltip: '需要交換的橫版容器',
        displayName: 'LandscapeContainer',
        visible: function () {
          return this.switchChild;
        }
      }), _dec5 = property({
        type: [Node],
        tooltip: '需要交換的直版容器',
        displayName: 'PortraitContainer',
        visible: function () {
          return this.switchChild;
        }
      }), _dec6 = property({
        type: Node,
        tooltip: '預設容器',
        displayName: 'DefaultContainer',
        visible: function () {
          return !this.switchChild;
        }
      }), _dec7 = property({
        type: UIOpacity,
        visible: true,
        displayName: 'FG_UI_Opacity',
        tooltip: 'FG_UI_Opacity'
      }), _dec(_class = (_class2 = class ContainerWholeBehavior extends (_crd && ContainerBasicBehavior === void 0 ? (_reportPossibleCrUseOfContainerBasicBehavior({
        error: Error()
      }), ContainerBasicBehavior) : ContainerBasicBehavior) {
        constructor(...args) {
          super(...args);

          //--他會依照ResizeStateList的狀態來做相關的反映+組合
          _initializerDefineProperty(this, "_resizeStateList", _descriptor, this);

          _initializerDefineProperty(this, "switchChild", _descriptor2, this);

          _initializerDefineProperty(this, "landscape", _descriptor3, this);

          _initializerDefineProperty(this, "portrait", _descriptor4, this);

          _initializerDefineProperty(this, "_defaultContainer", _descriptor5, this);

          _initializerDefineProperty(this, "GUIOpacity", _descriptor6, this);

          this._currentOrientation = (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape;
          this._currentContainer = null;
          this._previousContainer = null;
          this._resizeHandler = new (_crd && ResizeHandler === void 0 ? (_reportPossibleCrUseOfResizeHandler({
            error: Error()
          }), ResizeHandler) : ResizeHandler)();
        }

        //--???
        beforeChangeGameMode(gameState) {} //---給控制器去呼叫使用的(遊戲狀態改變時呼叫)


        changeGameMode(gameState) {}

        init() {
          var _this$_resizeHandler;

          super.init();
          (_this$_resizeHandler = this._resizeHandler) == null || _this$_resizeHandler.initializeDefaultActions();
        } // Implementation


        openContainer() {
          // Open container logic
          this.node.active = true;
        }

        closeContainer() {
          // Close container logic
          this.node.active = false;
        } //--自己要實作阿.....


        openContainerTween() {
          if (!this.GUIOpacity) return;
          this.node.active = true;
          tween(this.GUIOpacity).to(0.5, {
            opacity: 255
          }).call(() => {//this.node.active = true;
          }).start();
        } //--自己要實作阿.....


        closeContainerTween() {
          if (!this.GUIOpacity) return;
          tween(this.GUIOpacity).to(0.5, {
            opacity: 0
          }).call(() => {
            this.node.active = false;
          }).start();
        } //===========================<public function>=========================================================================================================
        //--for _resizeHandler---


        registerAction(resizeStateType, action) {
          var _this$_resizeHandler2;

          (_this$_resizeHandler2 = this._resizeHandler) == null || _this$_resizeHandler2.registerAction(resizeStateType, action);
        } //--for _resizeHandler---
        //===========================<public function>=========================================================================================================
        //==========================<interface IBG_Ani>========================================================================================================


        stopAllAni() {// Stop all animations
        }

        playAni(value) {// Play animation
        } //==========================<interface IBG_Ani>=========================================================================================================
        //==========================<interface IGameNodeWithRotation>==========================================================================================
        //--給上層控制器使用,控制器繼承IWindowResize,當視窗改變時會呼叫這個方法


        changeRotationResolution(value) {
          // Handle window resize logic here
          if (value === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            this.changeToLandscape();
          } else if (value === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            this.changeToPortrait();
          }

          this.doDefaultResizeProcess(value);
        } //--override it


        doDefaultResizeProcess(value) {}

        changeToLandscape() {
          //--要再補上不使用交換容器只使用接收通知的功能之類的
          if (this.switchChild) {
            for (let i = 0; i < this.landscape.length; i += 1) {
              const landscapeNode = this.landscape[i];
              const portraitNode = this.portrait[i]; // 注意順序

              landscapeNode.active = true;
              this._currentContainer = landscapeNode;
              this._previousContainer = portraitNode;

              if (this.switchChild) {
                while (portraitNode.children.length !== 0) {
                  const target = portraitNode.children[0];
                  target.removeFromParent(); // 強制脫離當前 parent

                  landscapeNode.addChild(target); //--有針對node做added事件的可以在這邊觸發

                  this._resizeHandler.applyMultiResize(target, this._resizeStateList, landscapeNode);
                }
              }

              portraitNode.active = false;
            }
          } else {
            this._resizeHandler.applyMultiResize(this._defaultContainer, this._resizeStateList);
          }
        }

        changeToPortrait() {
          for (let i = 0; i < this.landscape.length; i += 1) {
            const landscapeNode = this.landscape[i];
            const portraitNode = this.portrait[i]; // 注意順序

            portraitNode.active = true;
            this._currentContainer = portraitNode;
            this._previousContainer = landscapeNode;

            if (this.switchChild) {
              while (landscapeNode.children.length !== 0) {
                const target = landscapeNode.children[0];
                target.removeFromParent(); // 強制脫離當前 parent

                portraitNode.addChild(target); //--有針對node做added事件的可以在這邊觸發
                //this.doMultiProcessAfterResize(target);

                this._resizeHandler.applyMultiResize(target, this._resizeStateList, portraitNode);
              }
            }

            landscapeNode.active = false;
          }
        } //==========================<interface IGameNodeWithRotation>==========================================================================================


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_resizeStateList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new (_crd && ResizeStateList === void 0 ? (_reportPossibleCrUseOfResizeStateList({
            error: Error()
          }), ResizeStateList) : ResizeStateList)();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "switchChild", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "landscape", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "portrait", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_defaultContainer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "GUIOpacity", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e960ebac43f2b9425f2fb2442e4a798ffe7b45f4.js.map