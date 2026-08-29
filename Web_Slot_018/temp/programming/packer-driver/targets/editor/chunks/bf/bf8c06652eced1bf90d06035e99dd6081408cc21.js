System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Canvas, Component, director, Node, UITransform, Vec3, _dec, _class, _crd, ccclass, property, ScrollBarTouch;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Canvas = _cc.Canvas;
      Component = _cc.Component;
      director = _cc.director;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e9aaft3GeNJvpmk1RkzubPN", "ScrollBarTouch", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Canvas', 'Component', 'director', 'EventTouch', 'Node', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScrollBarTouch", ScrollBarTouch = (_dec = ccclass('ScrollBarTouch'), _dec(_class = class ScrollBarTouch extends Component {
        constructor(...args) {
          super(...args);
          this.camera = null;
          this.trans = null;
          this.onScrollBarTouchMoveCallback = null;
        }

        init() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.camera = director.getScene().getComponentInChildren(Canvas).cameraComponent;
          this.trans = this.getComponent(UITransform);
        }

        onTouchMove(event) {
          var _this$onScrollBarTouc;

          let height = this.trans.contentSize.height;
          let touchPos = event.getLocation().toVec3();
          let localPos = new Vec3();
          let worldPoint = this.camera.screenToWorld(touchPos); //世界座標

          this.trans.convertToNodeSpaceAR(worldPoint, localPos);
          let yPos = Math.floor(localPos.y);
          yPos = yPos * -1;

          if (yPos < 0) {
            yPos = 0;
          } else if (yPos > height) {
            yPos = height;
          }

          let ratio = yPos / height;
          (_this$onScrollBarTouc = this.onScrollBarTouchMoveCallback) == null || _this$onScrollBarTouc.call(this, ratio);
        }

        setHeight(height) {
          this.trans.setContentSize(this.trans.width, height);
        }

        getHeight() {
          return this.trans.height;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf8c06652eced1bf90d06035e99dd6081408cc21.js.map