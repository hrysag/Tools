System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Canvas, Component, director, Node, Vec3, Utility, _dec, _class, _crd, ccclass, property, DragNodeEvent;

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../Utils/Utility", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Canvas = _cc.Canvas;
      Component = _cc.Component;
      director = _cc.director;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6e88bLIzfNFUJGXrS8XRHGE", "DragNodeEvent", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Canvas', 'Component', 'director', 'EventTouch', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragNodeEvent", DragNodeEvent = (_dec = ccclass('DragNodeEvent'), _dec(_class = class DragNodeEvent extends Component {
        constructor(...args) {
          super(...args);
          this.camera = null;
          this.canvas = null;
          this.startTouchPos = new Vec3();
          this.onDrag = null;
          this.onRelease = null;
          this.onDragStart = null;
        }

        init() {
          this.canvas = director.getScene().getComponentInChildren(Canvas);
          this.camera = this.canvas.cameraComponent;
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        }

        onTouchStart(event) {
          var _this$onDragStart;

          let touchPos = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).getEventLocalPos(this.camera, event, event.target);
          this.startTouchPos = touchPos;
          (_this$onDragStart = this.onDragStart) == null || _this$onDragStart.call(this);
        }

        onTouchMove(event) {
          var _this$onDrag;

          let touchPosOfNode = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).getEventLocalPos(this.camera, event, event.target);
          let touchPosCanvas = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).getEventLocalPos(this.camera, event, this.canvas.node);
          let diffVec = touchPosOfNode.subtract(this.startTouchPos);
          (_this$onDrag = this.onDrag) == null || _this$onDrag.call(this, diffVec, touchPosOfNode, touchPosCanvas);
        }

        onTouchCancel(event) {
          this.onTouchEnd(event);
        }

        onTouchEnd(event) {
          var _this$onRelease;

          let touchPosCanvas = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).getEventLocalPos(this.camera, event, this.canvas.node);
          let touchPosOfNode = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).getEventLocalPos(this.camera, event, event.target);
          let diffVec = touchPosOfNode.subtract(this.startTouchPos);
          (_this$onRelease = this.onRelease) == null || _this$onRelease.call(this, diffVec, touchPosOfNode, touchPosCanvas);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=47032ee7d10fc07b766bd196ad3fb7f6e391b9bd.js.map