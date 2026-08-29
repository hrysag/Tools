System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, TestComponent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1b67dIPbEVBL6OWgEBYQLTV", "TestComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TestComponent", TestComponent = (_dec = ccclass('TestComponent'), _dec(_class = class TestComponent extends Component {
        onLoad() {
          console.log(`${this.node.name} TestComponent onLoad`);
        }

        start() {
          console.log(`${this.node.name} TestComponent start`);
        }

        update(deltaTime) {}

        onEnable() {
          console.log(`${this.node.name} TestComponent onEnable`);
        }

        onDisable() {
          console.log(`${this.node.name} TestComponent onDisable`);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eaf6d4a5fc92c6f6a358e4fe66e3bf2750d83a9e.js.map