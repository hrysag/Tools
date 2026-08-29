System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, Vec2, v3, Canvas, director, Label, AnimationController, FindComponent, SkeletonExtension, DefinitionGameConfigData, Orientation, AudioManager, SOUND_TYPE, SoundList, AudioSourceList, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, BUY_FG_MULTIPLIER, BtnController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../../../MyUtils/AnimationSystem/Components/AnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../../MyUtils/FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonExtension(extras) {
    _reporterNs.report("SkeletonExtension", "../../../../../../Scripts/GameScripts/SkeletonExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../../../DefinitionGameData/DefinitionGameConfigData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../../../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND_TYPE(extras) {
    _reporterNs.report("SOUND_TYPE", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      v3 = _cc.v3;
      Canvas = _cc.Canvas;
      director = _cc.director;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      AnimationController = _unresolved_2.AnimationController;
    }, function (_unresolved_3) {
      FindComponent = _unresolved_3.FindComponent;
    }, function (_unresolved_4) {
      SkeletonExtension = _unresolved_4.SkeletonExtension;
    }, function (_unresolved_5) {
      DefinitionGameConfigData = _unresolved_5.DefinitionGameConfigData;
    }, function (_unresolved_6) {
      Orientation = _unresolved_6.Orientation;
    }, function (_unresolved_7) {
      AudioManager = _unresolved_7.AudioManager;
      SOUND_TYPE = _unresolved_7.SOUND_TYPE;
    }, function (_unresolved_8) {
      SoundList = _unresolved_8.SoundList;
      AudioSourceList = _unresolved_8.AudioSourceList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d3dbX/qXBJVLdp/XfkFdEr", "BtnController", undefined);

      __checkObsolete__(['_decorator', 'Size', 'Component', 'Node', 'EventTouch', 'EventMouse', 'UITransform', 'Graphics', 'color', 'Layers', 'Vec2', 'CameraComponent', 'v3', 'Canvas', 'Rect', 'Color', 'director', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        BUY_FG_MULTIPLIER
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);

      _export("BtnController", BtnController = (_dec = ccclass('BtnController'), _dec2 = property({
        visible: true,
        displayName: 'mouseHoverAniKey',
        tooltip: 'mouseHover的狀態'
      }), _dec3 = property({
        visible: true,
        displayName: 'mouseClickAniKey',
        tooltip: 'mouseClick的狀態'
      }), _dec4 = property({
        visible: true,
        displayName: 'mouseDisable',
        tooltip: 'mouseDisable的狀態'
      }), _dec5 = property({
        visible: true,
        displayName: 'mouseNormalAniKey',
        tooltip: 'mouseNormal的狀態'
      }), _dec6 = property({
        type: Node,
        visible: true,
        displayName: 'CameraNode',
        tooltip: 'cameraNode'
      }), _dec7 = property({
        type: Node,
        visible: true,
        displayName: 'maskNode',
        tooltip: 'mask'
      }), _dec8 = property({
        type: Node,
        visible: true,
        displayName: 'fxMaskNode_Horizontal',
        tooltip: '橫版mask'
      }), _dec9 = property({
        type: Node,
        visible: true,
        displayName: 'fxMaskNode_Vertical',
        tooltip: '直版mask'
      }), _dec10 = property({
        type: Node,
        visible: true,
        displayName: 'mouseSensorNode',
        tooltip: 'mouseSensorNode'
      }), _dec11 = property({
        type: Node,
        visible: true,
        displayName: 'btnNodeLanguageHorizontal',
        tooltip: '多語系橫版'
      }), _dec12 = property({
        type: Node,
        visible: true,
        displayName: 'btnNodeLanguageVertical',
        tooltip: '多語系直版'
      }), _dec13 = property({
        type: Node,
        visible: true,
        displayName: 'LabelNodeForBtnBet',
        tooltip: '購買FG的金額'
      }), _dec14 = property({
        type: Node,
        visible: true,
        displayName: 'mouseLeaveNode',
        tooltip: '離開區域使用感應區'
      }), _dec(_class = (_class2 = class BtnController extends Component {
        constructor(...args) {
          super(...args);

          /**
           * 啟動fg面板的按鈕
           */
          _initializerDefineProperty(this, "_mouseHoverAniKey", _descriptor, this);

          _initializerDefineProperty(this, "_mouseClickAniKey", _descriptor2, this);

          _initializerDefineProperty(this, "_mouseDisableAniKey", _descriptor3, this);

          _initializerDefineProperty(this, "_mouseNormalAniKey", _descriptor4, this);

          _initializerDefineProperty(this, "_cameraNode", _descriptor5, this);

          _initializerDefineProperty(this, "_maskNode", _descriptor6, this);

          _initializerDefineProperty(this, "fxMaskNode_Horizontal", _descriptor7, this);

          _initializerDefineProperty(this, "fxMaskNode_Vertical", _descriptor8, this);

          _initializerDefineProperty(this, "_mouseSensorNode", _descriptor9, this);

          _initializerDefineProperty(this, "_nodeLanguageHorizontal", _descriptor10, this);

          _initializerDefineProperty(this, "_nodeLanguageVertical", _descriptor11, this);

          _initializerDefineProperty(this, "_labelNode", _descriptor12, this);

          _initializerDefineProperty(this, "_mouseLeaveNode", _descriptor13, this);

          this._aniController = null;
          this._spineExtension = null;
          this._canvasNode = null;
          this._gameRotationResolution = null;
          this._isMouseIn = false;
          this._boundaryWp = void 0;
          this._blocking = false;
          //--當前是否在block狀態
          this._labelForBtnBetValue = null;
          this._isDisableBuyFgBtn = false;
          this.clickCallback = null;

          this.sensorMouseHandler = e => {
            e.preventSwallow = false;

            if (e.type == Node.EventType.TOUCH_START) {
              this.btnClickCallback();
            } else if (e.type == Node.EventType.TOUCH_END) {} else if (e.type == Node.EventType.MOUSE_MOVE) {
              let mousePos = e.getUILocation();
              const wpos = v3(mousePos.x, mousePos.y, 0);

              const localPos = this._mouseSensorNode.getComponent(UITransform).convertToNodeSpaceAR(wpos);

              const localPosV2 = new Vec2(localPos.x, localPos.y);

              const boundingBox = this._mouseSensorNode.getComponent(UITransform).getBoundingBox();

              const isCurrentlyInside = boundingBox.contains(localPosV2);

              if (isCurrentlyInside && !this._isMouseIn) {
                var _director$getScene$ge;

                this._isMouseIn = true;
                this.btnHoverCallback(); //--這邊要注意，canvas它的範圍在cocos裡面不會是整個遊戲畫面

                this._canvasNode = (_director$getScene$ge = director.getScene().getComponentInChildren(Canvas)) == null ? void 0 : _director$getScene$ge.node;

                this._canvasNode.on(Node.EventType.MOUSE_MOVE, this.sensorMouseHandler);

                this._mouseSensorNode.on(Node.EventType.MOUSE_LEAVE, this.sensorMouseHandler);
              } else if (!isCurrentlyInside && this._isMouseIn) {
                //console.log('canvasLeave!!');
                this._isMouseIn = false;
                this.btnLeaveCallback();

                this._canvasNode.off(Node.EventType.MOUSE_MOVE, this.sensorMouseHandler);

                this._mouseSensorNode.off(Node.EventType.MOUSE_LEAVE, this.sensorMouseHandler);
              }
              /*
              console.log('UI Mouse Pos:', mousePos);
              console.log('World Pos:', wpos);
              console.log('Local Pos (V2):', localPosV2);
              console.log('Bounding Box:', boundingBox);
              console.log('Is Currently Inside:', isCurrentlyInside);
              console.log('_isMouseInside:', this._isMouseIn);
              */

            } else if (e.type == Node.EventType.MOUSE_LEAVE) {
              //console.log('mouseLeave!!!!');
              this._canvasNode.off(Node.EventType.MOUSE_MOVE, this.sensorMouseHandler);

              this._mouseSensorNode.off(Node.EventType.MOUSE_LEAVE, this.sensorMouseHandler);

              this._isMouseIn = false;
              this.btnLeaveCallback();
            }
          };

          this.btnHoverCallback = () => {
            this._aniController.playAni(this._mouseHoverAniKey);
          };

          this.btnLeaveCallback = () => {
            this._aniController.playAni(this._mouseNormalAniKey);
          };

          this.btnClickCallback = () => {
            var _this$clickCallback;

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).BuyFGbutton, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).BasicAS);

            this._aniController.playAni(this._mouseClickAniKey);

            (_this$clickCallback = this.clickCallback) == null || _this$clickCallback.call(this);
            this.disableBuyFgBtn(); //this.blockOrOpenBtn(true);
          };
        }

        onLoad() {
          this.init();
        }

        init() {
          this._isMouseIn = false;
          this._boundaryWp = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
          };
          this._aniController = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(this.node, _crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
            error: Error()
          }), AnimationController) : AnimationController);

          this._aniController.init();

          this._spineExtension = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(this.node, _crd && SkeletonExtension === void 0 ? (_reportPossibleCrUseOfSkeletonExtension({
            error: Error()
          }), SkeletonExtension) : SkeletonExtension);
          this._labelForBtnBetValue = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(this._labelNode, Label); //this.node.preventSwallow=false;
          //this._mouseSensorNode.preventSwallow=true;
          //-https://docs.cocos.com/creator/3.8/manual/zh/engine/event/event-node.html

          /*
          this._mouseSensorNode.on(Node.EventType.TOUCH_START,this.sensorMouseHandler);
          this._mouseSensorNode.on(Node.EventType.TOUCH_END,this.sensorMouseHandler);
          this._mouseSensorNode.on(Node.EventType.MOUSE_MOVE,this.sensorMouseHandler);
          */
          //this._mouseSensorNode.on(Node.EventType.MOUSE_LEAVE,this.sensorMouseHandler);
          //window.addEventListener('mousemove', this.onMouseMove);
          //-https://forum.cocos.org/t/topic/161159 爛引擎
          //this._mouseSensorNode.on(Node.EventType.MOUSE_ENTER, this.sensorMouseHandler);
          //this._mouseSensorNode.on(Node.EventType.MOUSE_LEAVE, this.sensorMouseHandler);
        }

        setPlayerBetValue(value) {
          let totalMoney = (value * BUY_FG_MULTIPLIER).fixed();
          this._labelForBtnBetValue.string = totalMoney.numberComma();
          const len = this._labelForBtnBetValue.string.length; //let fontNodeSize = 1;

          let fontSize = 45.4; //default

          if (len >= 6 && len < 7) {
            //fontNodeSize = 0.7;
            fontSize = 42.4;
          } else if (len >= 7) {
            //fontNodeSize = 0.2;
            fontSize = 38.4;
          } //--這邊被綁到spine socket上面了
          //this._labelNode.setScale(v3(fontNodeSize, fontNodeSize, fontNodeSize));


          this._labelForBtnBetValue.fontSize = fontSize;
        }

        openContainer() {
          this._aniController.playAni(this._mouseNormalAniKey);

          this._mouseSensorNode.on(Node.EventType.TOUCH_START, this.sensorMouseHandler);

          this._mouseSensorNode.on(Node.EventType.TOUCH_END, this.sensorMouseHandler);

          this._mouseSensorNode.on(Node.EventType.MOUSE_MOVE, this.sensorMouseHandler);
        }

        closeContainer() {
          this._aniController.stopAni();

          this._mouseSensorNode.off(Node.EventType.TOUCH_START, this.sensorMouseHandler);

          this._mouseSensorNode.off(Node.EventType.TOUCH_END, this.sensorMouseHandler);

          this._mouseSensorNode.off(Node.EventType.MOUSE_MOVE, this.sensorMouseHandler);

          if (this._canvasNode) {
            if (this._canvasNode.hasEventListener(Node.EventType.MOUSE_MOVE)) {
              this._canvasNode.off(Node.EventType.MOUSE_MOVE, this.sensorMouseHandler);
            }
          }
        }

        disableBuyFgBtn() {
          if (!this._isDisableBuyFgBtn) {
            this._isDisableBuyFgBtn = true;
            this.closeContainer();
            this.blockOrOpenBtn(true);
          }
        }

        enableBuyFgBtn() {
          if (this._isDisableBuyFgBtn) {
            this._isDisableBuyFgBtn = false;
            this.openContainer();
            this.blockOrOpenBtn(false);
          }
        }

        blockOrOpenBtn(value) {
          this._blocking = value;

          if (value) {
            //--開啟mask
            this.closeAllFxMaskNode();
            this.enableBlockMaskNode();
          } else {
            //--關閉mask
            this.closeAllFxMaskNode();
            this.disableBlockMaskMode();
          }
        }

        closeAllFxMaskNode() {
          this._maskNode.active = false;
          this.fxMaskNode_Horizontal.active = false;
          this.fxMaskNode_Vertical.active = false;
        } //--關閉mask(取消反黑)


        disableBlockMaskMode() {
          let spineKey = '';

          if (this._gameRotationResolution == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            spineKey = 'idle_L';
          } else {
            spineKey = 'idle_P';
          }

          this._spineExtension.setAnimation(0, spineKey, true);

          this._maskNode.active = false;
        } //---展開mask(反黑)


        enableBlockMaskNode() {
          let spineKey = '';
          let targetNode = null;

          if (this._gameRotationResolution == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            targetNode = this.fxMaskNode_Horizontal;
            spineKey = 'disabled_L';
          } else {
            targetNode = this.fxMaskNode_Vertical;
            spineKey = 'disabled_P';
          }

          this._maskNode.active = true;
          targetNode.active = true;

          this._spineExtension.setAnimation(0, spineKey, true);
        }

        getCurrentMaskNode() {
          let targetNode = null;

          if (this._gameRotationResolution == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape && this.fxMaskNode_Horizontal.active) {
            targetNode = this.fxMaskNode_Horizontal;
          } else if (this._gameRotationResolution == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait && this.fxMaskNode_Vertical.active) {
            targetNode = this.fxMaskNode_Vertical;
          }

          return targetNode;
        } //--改變sensor的大小


        changeSensorRange(targetNode) {
          const uiTransform = targetNode.getComponent(UITransform);

          this._mouseSensorNode.getComponent(UITransform).setContentSize(uiTransform.contentSize);

          this._boundaryWp.w = uiTransform.contentSize.width;
          this._boundaryWp.h = uiTransform.contentSize.height;
          this._boundaryWp.x = uiTransform.anchorX * uiTransform.contentSize.width;
          this._boundaryWp.y = uiTransform.anchorY * uiTransform.contentSize.height;
        } //---只在不能click的時候顯示


        changeRotationResolution(value) {
          if (this._gameRotationResolution == value) return;
          this._gameRotationResolution = value;

          if (this._gameRotationResolution == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            this._spineExtension.setAnimation(0, 'idle_L', true);

            this._nodeLanguageHorizontal.active = true;
            this._nodeLanguageVertical.active = false; //this.fxMaskNode_Vertical.active = false;
            //this.fxMaskNode_Horizontal.active = true;

            this.changeSensorRange(this.fxMaskNode_Horizontal);
          } else {
            this._spineExtension.setAnimation(0, 'idle_P', true);

            this._nodeLanguageHorizontal.active = false;
            this._nodeLanguageVertical.active = true; //this.fxMaskNode_Vertical.active = true;
            //this.fxMaskNode_Horizontal.active = false;

            this.changeSensorRange(this.fxMaskNode_Vertical);
          }

          this.closeAllFxMaskNode();

          if (this._blocking) {
            this.enableBlockMaskNode();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_mouseHoverAniKey", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_mouseClickAniKey", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_mouseDisableAniKey", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_mouseNormalAniKey", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_cameraNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_maskNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "fxMaskNode_Horizontal", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "fxMaskNode_Vertical", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_mouseSensorNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_nodeLanguageHorizontal", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_nodeLanguageVertical", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_labelNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_mouseLeaveNode", [_dec14], {
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
//# sourceMappingURL=b11c3a539d44f95d1f221880461c688d5f3b7561.js.map