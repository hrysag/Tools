System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, RenderTexture, Camera, Sprite, Texture2D, ImageAsset, UITransform, SpriteFrame, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, CaptureNodeScreen;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      RenderTexture = _cc.RenderTexture;
      Camera = _cc.Camera;
      Sprite = _cc.Sprite;
      Texture2D = _cc.Texture2D;
      ImageAsset = _cc.ImageAsset;
      UITransform = _cc.UITransform;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "29603savJ9O/pJrbmtdjWmi", "CaptureNodeScreen", undefined);

      __checkObsolete__(['_decorator', 'Component', 'find', 'Node', 'v3', 'RenderTexture', 'Camera', 'view', 'Sprite', 'Texture2D', 'ImageAsset', 'Size', 'UITransform', 'SpriteFrame']);

      __checkObsolete__(['renderer', 'Layers']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CaptureNodeScreen", CaptureNodeScreen = (_dec = ccclass('CaptureNodeScreen'), _dec2 = property(Camera), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class CaptureNodeScreen extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "copyCamera", _descriptor, this);

          _initializerDefineProperty(this, "targetNode", _descriptor2, this);

          _initializerDefineProperty(this, "copyNode", _descriptor3, this);

          this.rt = null;
          this._buffer = null;
        }

        /*
        public async getNodeCaptureScreen(nodeToCapture: Node,copyNode:Node): Promise<SpriteFrame | null> 
        {
            if (!nodeToCapture) {
                console.error('getNodeCaptureScreen: nodeToCapture 為空');
                return null;
            }
              try {
                const uiTransform = nodeToCapture.getComponent(UITransform);
                if (!uiTransform) {
                    console.error('getNodeCaptureScreen: nodeToCapture 沒有 UITransform 元件');
                    return null;
                }
                  const width = uiTransform.width;
                const height = uiTransform.height;
                  this.rt = new RenderTexture();
                this.rt.reset({
                    width: width,
                    height: height,
                });
                  console.log('check_targetWH:', width, height); // 偵錯輸出
                  const cameraNode = new Node('CAMERA_NODE');
                const camera = cameraNode.addComponent(Camera);
                camera.visibility=Layers.Enum.UI_2D;
                camera.priority = 65535;
                camera.targetTexture = this.rt;
                camera.projection = Camera.ProjectionType.ORTHO;
                camera.orthoHeight = height / 2;
                cameraNode.parent = nodeToCapture.parent;
                
                //cameraNode.parent = nodeToCapture.parent;
                //cameraNode.position = v3(nodeToCapture.position.x, nodeToCapture.position.y, nodeToCapture.position.z + 1);
                //nodeToCapture.parent = cameraNode;
                //nodeToCapture.setPosition(0, 0, 0);
                
                
                this._buffer = this.rt.readPixels(nodeToCapture.position.x, nodeToCapture.position.y, width, height);
                  console.log('readPixels buffer:', this._buffer); // 偵錯輸出
                  await new Promise(resolve => setTimeout(resolve, 0));
                  let img = new ImageAsset();
                img.reset({
                    _data: this._buffer,
                    width: width,
                    height: height,
                    format: Texture2D.PixelFormat.RGBA8888,
                    _compressed: false,
                });
                  console.log('ImageAsset:', img); // 偵錯輸出
                  let texture = new Texture2D();
                texture.image = img;
                  console.log('Texture2D:', texture); // 偵錯輸出
                  let sf = new SpriteFrame();
                sf.texture = texture;
                sf.packable = false;
                //nodeToCapture.parent = nodeToCapture.parent.parent;
                copyNode!.getComponent(Sprite).spriteFrame = sf;
                copyNode!.getComponent(Sprite).spriteFrame.flipUVY = true;
                copyNode?.getComponent(UITransform)?.setContentSize(new Size(width, height));
                  return sf;
            } catch (error) {
                console.error('getNodeCaptureScreen 發生錯誤:', error);
                return null;
            }
            
        }*/
        getNodeCaptureScreen2() {
          this.rt = new RenderTexture();
          const uiTransform = this.targetNode.getComponent(UITransform);
          this.rt.reset({
            //width: view.getVisibleSize().width,
            //height: view.getVisibleSize().height,
            width: uiTransform.width,
            height: uiTransform.height //width:500,
            //height:500

          });
          this.copyCamera.targetTexture = this.rt;
          this.copyCamera.orthoHeight = 300; // 縮小視野
          //this.copyCamera.target

          this.scheduleOnce(() => {
            this.capture();
          }, .5);
        }

        capture() {
          var width = this.targetNode.getComponent(UITransform).width;
          var height = this.targetNode.getComponent(UITransform).height;
          var worldPos = this.targetNode.getWorldPosition(); //this._buffer = this.rt.readPixels(Math.round(worldPos.x), Math.round(worldPos.y), width, height);

          this._buffer = this.rt.readPixels(0, 0, width, height);
          console.log('check_targetWH:', width, height); // 偵錯輸出

          let img = new ImageAsset();
          img.reset({
            _data: this._buffer,
            width: width,
            height: height,
            format: Texture2D.PixelFormat.RGBA8888,
            _compressed: false
          });
          let texture = new Texture2D();
          texture.image = img;
          let sf = new SpriteFrame();
          sf.texture = texture;
          sf.packable = false;
          this.copyNode.getComponent(Sprite).spriteFrame = sf;
          this.copyNode.getComponent(Sprite).spriteFrame.flipUVY = true; //this.copyNode?.getComponent(UITransform)?.setContentSize(new Size(width, height));
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "copyCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "copyNode", [_dec4], {
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
//# sourceMappingURL=a0a8b623e58d7c881ae2de5bd9f972b0e55a1e12.js.map