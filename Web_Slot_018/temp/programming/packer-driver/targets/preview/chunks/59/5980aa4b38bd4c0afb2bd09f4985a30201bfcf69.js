System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, js, Vec3, EventTouch, Button, UITransform, v3, JsonAsset, Utility, ClassA, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, BasicTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../Scripts/Utils/Utility", _context.meta, extras);
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
      js = _cc.js;
      Vec3 = _cc.Vec3;
      EventTouch = _cc.EventTouch;
      Button = _cc.Button;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      JsonAsset = _cc.JsonAsset;
    }, function (_unresolved_2) {}, function (_unresolved_3) {
      Utility = _unresolved_3.Utility;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e012P0uztFI74OaCDZ5YLC", "BasicTest", undefined); // 將自行定義的函式加入到全域範圍


      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys', 'screen', 'log', 'TextAsset', 'SpriteFrame', 'Asset', 'js', 'Enum', 'RichText', 'Event', 'Prefab', 'instantiate', 'Vec3', 'EventTouch', 'Button', 'CCInteger', 'UIRenderer', 'Camera', 'Layers', 'tween', 'Sprite', 'Material', 'ParticleSystem', 'Animation', 'RenderTexture', 'view', 'director', 'Canvas', 'gfx', 'input', 'Input', 'Touch', 'UITransform', 'v3', 'JsonAsset', 'EventHandler']);

      ClassA = class ClassA {
        constructor() {
          js.setClassName('ClassA', ClassA);
        }

      };
      ({
        ccclass,
        property
      } = _decorator);

      _export("BasicTest", BasicTest = (_dec = ccclass('BasicTest'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Node), _dec5 = property(Button), _dec6 = property(Node), _dec7 = property(JsonAsset), _dec(_class = (_class2 = class BasicTest extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "btn1", _descriptor, this);

          _initializerDefineProperty(this, "btn2", _descriptor2, this);

          _initializerDefineProperty(this, "btn3", _descriptor3, this);

          _initializerDefineProperty(this, "btn4", _descriptor4, this);

          _initializerDefineProperty(this, "btnGroup", _descriptor5, this);

          _initializerDefineProperty(this, "jsonData", _descriptor6, this);

          this.cc = 100;
          this.testtest = void 0;
        }

        start() {
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.btn1.node, this, 'onBtnClick');
        }

        update(deltaTime) {}

        onBtnClick() {
          console.log("onBtnClick1");
          alert("onBtnClick1");
        }

        onBtnClick2() {
          // this.btn1.node.emit(Button.EventType.CLICK, this);
          this.btn1.emitEvents();
        }

        onBtnClick3() {
          console.log("onBtnClick3");
        }

        onBtnClick4() {
          console.log("onBtnClick4");
        }

        onKeyDownOrPressing() {
          // this.btn3.emit(Node.EventType.TOUCH_START);
          this.btnGroup.active = !this.btnGroup.active;
        }

        fakeClick(targetNode) {
          var changedTouches = [];
          var touch = new EventTouch(changedTouches, true, Node.EventType.TOUCH_CANCEL);
          touch.type = Node.EventType.TOUCH_CANCEL;
          touch.target = targetNode;
          var touchPoint = new Vec3();
          targetNode.getComponent(UITransform).convertToNodeSpaceAR(v3(100, 100, 0), touchPoint); // 替换为触摸位置

          touch.setLocation(touchPoint.x, touchPoint.y);
          targetNode.dispatchEvent(touch);
        }

        fakeClick2(targetNode) {
          var changedTouches = [];
          var touch = new EventTouch(changedTouches, true, Node.EventType.TOUCH_END);
          touch.type = Node.EventType.TOUCH_END;
          touch.target = targetNode;
          var touchPoint = new Vec3();
          targetNode.getComponent(UITransform).convertToNodeSpaceAR(v3(100, 100, 0), touchPoint); // 替换为触摸位置

          touch.setLocation(touchPoint.x, touchPoint.y);
          targetNode.dispatchEvent(touch);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btn1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btn2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btn3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btn4", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnGroup", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "jsonData", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5980aa4b38bd4c0afb2bd09f4985a30201bfcf69.js.map