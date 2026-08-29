System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Sprite, _dec, _dec2, _class, _crd, ccclass, property, requireComponent, ButtonCheck;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68338aecjBEC7Mh15CfngAJ", "ButtonCheck", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'Sprite']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("ButtonCheck", ButtonCheck = (_dec = ccclass('ButtonCheck'), _dec2 = requireComponent(Button), _dec(_class = _dec2(_class = class ButtonCheck extends Component {
        onEnable() {
          let btn = this.node.getComponent(Button);

          if (btn.interactable === false) {
            this.getComponent(Sprite).spriteFrame = btn.disabledSprite;
          }
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8ee9ca17745ff38976b48ed9f2648af24066870c.js.map