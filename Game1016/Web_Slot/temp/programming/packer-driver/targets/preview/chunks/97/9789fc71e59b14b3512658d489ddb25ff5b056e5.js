System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, Component, Label, Node, Sprite, Toggle, _dec, _class, _crd, ccclass, ConditionLayoutItem;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      color = _cc.color;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "062c4KPG1RIgr2FKnd91EJ3", "ConditionLayoutItem", undefined);

      __checkObsolete__(['_decorator', 'color', 'Component', 'Label', 'Node', 'Sprite', 'Toggle']);

      ({
        ccclass
      } = _decorator);

      _export("ConditionLayoutItem", ConditionLayoutItem = (_dec = ccclass('ConditionLayoutItem'), _dec(_class = class ConditionLayoutItem extends Component {
        start() {
          this.node.on(Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
          this.node.on(Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        }

        onMouseEnter() {
          var toggles = this.node.getComponentsInChildren(Toggle);
          toggles.forEach(toggle => {
            if (!toggle.isChecked) {
              toggle.node.getComponent(Sprite).spriteFrame = toggle.hoverSprite;
            }
          });
          var labels = this.node.getComponentsInChildren(Label);
          labels.forEach(label => {
            label.color = color(187, 187, 187);
          });
        }

        onMouseLeave() {
          var toggles = this.node.getComponentsInChildren(Toggle);
          toggles.forEach(toggle => {
            if (!toggle.isChecked) {
              toggle.node.getComponent(Sprite).spriteFrame = toggle.normalSprite;
            }
          });
          var labels = this.node.getComponentsInChildren(Label);
          labels.forEach(label => {
            label.color = color(255, 255, 255);
          });
        }

        onTouchEnd() {
          var toggles = this.node.getComponentsInChildren(Toggle);
          toggles.forEach(toggle => {
            toggle.isChecked = !toggle.isChecked;
          });
          var labels = this.node.getComponentsInChildren(Label);
          labels.forEach(label => {
            label.color = color(255, 255, 255);
          });
        }

        onDestroy() {
          this.node.off(Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
          this.node.off(Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9789fc71e59b14b3512658d489ddb25ff5b056e5.js.map