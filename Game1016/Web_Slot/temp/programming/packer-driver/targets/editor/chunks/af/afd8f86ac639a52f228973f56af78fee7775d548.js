System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Camera, Canvas, Color, Component, director, instantiate, Node, Prefab, RenderTexture, Sprite, SpriteFrame, UITransform, RenderTextureInfo, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, FeatherRTHelper;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  _export("RenderTextureInfo", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Canvas = _cc.Canvas;
      Color = _cc.Color;
      Component = _cc.Component;
      director = _cc.director;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      RenderTexture = _cc.RenderTexture;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb2a9fcxAdIwIvsJS/MUkjE", "FeatherRTHelper", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Canvas', 'CCBoolean', 'Color', 'Component', 'director', 'gfx', 'instantiate', 'Layers', 'Node', 'Prefab', 'RenderTexture', 'Sprite', 'SpriteFrame', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FeatherRTHelper", FeatherRTHelper = (_dec = ccclass('FeatherRTHelper'), _dec2 = property({
        type: Sprite,
        tooltip: '羽化完成的RT放置的Sprite位置'
      }), _dec3 = property({
        type: Node,
        tooltip: '生成羽化Canvas的根節點，若沒有放則預設放在scene Node下'
      }), _dec4 = property({
        tooltip: '是否為羽化Prefab，若為場景節點請不要勾選'
      }), _dec5 = property({
        type: Prefab,

        visible() {
          return this.isPrefab;
        },

        tooltip: '羽化Prefab'
      }), _dec6 = property({
        type: Node,

        visible() {
          return !this.isPrefab;
        },

        tooltip: '羽化目標母節點'
      }), _dec7 = property({
        tooltip: '是否自動開始羽化，RD控制使用'
      }), _dec8 = property({
        tooltip: '是否使用自訂RenderTexture，RD控制使用'
      }), _dec(_class = (_class2 = class FeatherRTHelper extends Component {
        constructor(...args) {
          super(...args);
          this.FEATHER_LAYER = 1 << 18;

          _initializerDefineProperty(this, "targetSprite", _descriptor, this);

          _initializerDefineProperty(this, "featherCanvasRoot", _descriptor2, this);

          _initializerDefineProperty(this, "isPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "featherPrefab", _descriptor4, this);

          _initializerDefineProperty(this, "featherNode", _descriptor5, this);

          _initializerDefineProperty(this, "isAutoStart", _descriptor6, this);

          _initializerDefineProperty(this, "isUsedCustomRenderTexture", _descriptor7, this);

          this.camera = null;
          this.canvas = null;
          this.renderTexture = null;
          this.targetNode = null;
          this.customRTInfo = null;
        }

        start() {
          if (!this.isAutoStart) {
            return;
          } else {
            this.generateFeatherRenderTexture();
          }
        }

        generateFeatherRenderTexture() {
          this.createFeatherObject();
          this.createCanvasWithCamera();
          this.adjustLayerAndPos();
          this.createRenderTexture();
          this.alignCameraSetting();
        }

        createCanvasWithCamera() {
          this.createCanvas();

          if (this.featherCanvasRoot) {
            this.featherCanvasRoot.addChild(this.canvas.node);
          } else {
            const scene = director.getScene();
            scene.addChild(this.canvas.node);
          }

          if (this.isPrefab) {
            this.canvas.node.setPosition(-10000, 0, 0); // 避免生成在原本的canvas上不好調整物件位置
          } else {
            this.canvas.node.setWorldPosition(this.targetNode.getWorldPosition().x, this.targetNode.getWorldPosition().y, 0); // 跟隨原物件位置
          }

          this.createCamera();
          this.canvas.node.addChild(this.camera.node);
          this.canvas.cameraComponent = this.camera;
        }

        createCanvas() {
          const canvasNode = new Node("FeatherCanvas");
          this.canvas = canvasNode.addComponent(Canvas);
        }

        createCamera() {
          const cameraNode = new Node("FeatherCamera");
          this.camera = cameraNode.addComponent(Camera);
          this.camera.clearFlags = Camera.ClearFlag.SOLID_COLOR;
          this.camera.clearColor = new Color(0, 0, 0, 0);
          this.camera.projection = Camera.ProjectionType.ORTHO;
          this.camera.visibility = this.FEATHER_LAYER;
          this.camera.priority = 1;
        }

        alignCameraSetting() {
          const featherSize = this.getFeatherObjectSize();
          this.camera.targetTexture = this.renderTexture;
          this.camera.orthoHeight = this.fitCameraToTargetSize(featherSize.width, featherSize.height);
          const spriteFrame = new SpriteFrame();
          spriteFrame.texture = this.renderTexture;
          this.targetSprite.spriteFrame = spriteFrame;
        }

        createFeatherObject() {
          if (this.isPrefab) {
            this.targetNode = instantiate(this.featherPrefab);
          } else {
            this.targetNode = this.featherNode;
          }
        }

        adjustLayerAndPos() {
          this.targetNode.layer = this.FEATHER_LAYER;
          this.targetNode.children.forEach(child => {
            child.layer = this.FEATHER_LAYER;
            const pos = child.getPosition();
            child.setPosition(pos.x, pos.y, 0); // 確保 pos z 正常
          });
        }

        createRenderTexture() {
          if (this.isUsedCustomRenderTexture) {
            this.renderTexture = this.customRenderTexture(this.customRTInfo);
          } else {
            const size = this.getFeatherObjectSize();
            this.renderTexture = this.defaultRenderTexture(size.width, size.height);
          }
        }

        getFeatherObjectSize() {
          const width = this.targetNode.getComponent(UITransform).width;
          const height = this.targetNode.getComponent(UITransform).height;
          return {
            width,
            height
          };
        }

        defaultRenderTexture(width, height) {
          const rt = new RenderTexture();
          rt.reset({
            width: width,
            height: height
          });
          return rt;
        }

        fitCameraToTargetSize(targetWidth, targetHeight) {
          const aspect = this.camera.camera.aspect;
          const targetAspect = targetWidth / targetHeight;

          if (aspect > targetAspect) {
            return targetHeight / 2; // camera 比例相對較寬，直接以高度為基準計算高度
          } else {
            const visibleHeight = targetWidth / aspect;
            return visibleHeight / 2; // camera 比例相對較窄，以寬度為基準計算高度
          }
        }

        customRenderTexture(rtInfo) {
          const rt = new RenderTexture();
          rt.reset(rtInfo);
          return rt;
        }

        destroyRT() {
          if (this.renderTexture) {
            this.renderTexture.destroy();
            this.renderTexture = null;
          }
        }

        resetRT(rtInfo) {
          var _this$renderTexture;

          (_this$renderTexture = this.renderTexture) == null || _this$renderTexture.reset(rtInfo);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "targetSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "featherCanvasRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "featherPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "featherNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "isAutoStart", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "isUsedCustomRenderTexture", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));

      _export("RenderTextureInfo", RenderTextureInfo = class RenderTextureInfo {
        constructor() {
          this.name = void 0;
          this.width = void 0;
          this.height = void 0;
          this.passInfo = void 0;
          this.externalResLow = void 0;
          this.externalResHigh = void 0;
          this.externalFlag = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=afd8f86ac639a52f228973f56af78fee7775d548.js.map