System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, _dec, _class, _crd, ccclass, IconBase;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c502RUlWxEJLil/Wq27dT2", "IconBase", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform', 'Vec3']);

      ({
        ccclass
      } = _decorator);

      _export("IconBase", IconBase = (_dec = ccclass('IconBase'), _dec(_class = class IconBase extends Component {
        constructor(...args) {
          super(...args);
          this._originSiblingIndex = 0;
        }

        set originSiblingIndex(index) {
          this._originSiblingIndex = index;
        }

        get originSiblingIndex() {
          return this._originSiblingIndex;
        }

        init() {
          this.originSiblingIndex = this.node.getSiblingIndex();
        }

        setParent(rootNode) {
          this.node.setParent(rootNode);
        }

        setPosition(pos) {
          this.node.setPosition(pos);
        }

        show() {
          this.node.active = true;
        }

        hide() {
          this.node.active = false;
        }

        setAnchor(anchorX, anchorY) {
          this.getComponent(UITransform).setAnchorPoint(anchorX, anchorY);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e341401fb13a46d62e702507b453b5990dd9498.js.map