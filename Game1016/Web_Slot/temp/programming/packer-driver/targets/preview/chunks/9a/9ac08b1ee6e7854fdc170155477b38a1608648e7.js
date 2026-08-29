System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, _dec, _class, _crd, ccclass, property, DragOutChecker;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dcef3/PAZ1EUYplJnikyNCa", "DragOutChecker", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragOutChecker", DragOutChecker = (_dec = ccclass('DragOutChecker'), _dec(_class = class DragOutChecker extends Component {
        constructor() {
          super(...arguments);
          this.isTouching = false;
          this.onDragOutOfRange = null;
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }

        onTouchStart(event) {
          this.isTouching = true;
        }

        onTouchMove(event) {
          if (!this.isTouching) return;
          var touchLoc = event.getUILocation();
          var uiTransform = this.node.getComponent(UITransform);

          if (!uiTransform.getBoundingBoxToWorld().contains(touchLoc)) {
            var _this$onDragOutOfRang;

            (_this$onDragOutOfRang = this.onDragOutOfRange) == null || _this$onDragOutOfRang.call(this, event);
            this.isTouching = false;
          }
        }

        onTouchEnd(event) {
          this.isTouching = false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ac08b1ee6e7854fdc170155477b38a1608648e7.js.map