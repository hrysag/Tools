System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, TransparentButton;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d5faBc8j5GH60SrJDv7dCH", "TransparentButton", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TransparentButton", TransparentButton = (_dec = ccclass('TransparentButton'), _dec(_class = class TransparentButton extends Component {
        onLoad() {
          this.node.on(Node.EventType.TOUCH_START, event => {
            event.preventSwallow = true;
          }, this, true);
          this.node.on(Node.EventType.TOUCH_END, event => {
            event.preventSwallow = true;
          }, this, true);
          this.node.on(Node.EventType.TOUCH_CANCEL, event => {
            event.preventSwallow = true;
          }, this, true);
          this.node.on(Node.EventType.MOUSE_MOVE, event => {
            event.preventSwallow = true;
          }, this, true);
          this.node.on(Node.EventType.MOUSE_LEAVE, event => {
            event.preventSwallow = true;
          }, this, true);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=69b182582557d88d54a8c8b9557d8d82a6771716.js.map