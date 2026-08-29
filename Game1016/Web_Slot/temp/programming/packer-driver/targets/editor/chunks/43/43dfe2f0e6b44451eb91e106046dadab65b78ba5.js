System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, ReelMgr;

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

      _cclegacy._RF.push({}, "eff5cWsSZ5M+oEGZgyUpaAl", "ReelMgr", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ReelMgr", ReelMgr = (_dec = ccclass('ReelMgr'), _dec(_class = class ReelMgr extends Component {
        constructor(...args) {
          super(...args);
          this.reelList = [];
        }

        init() {}

        create() {
          return null;
        }

        add(reel) {}

        Remove(index) {}

        update() {}

        get(index) {
          return null;
        }

        getByState() {
          return this.reelList;
        } //public getByxxx..............


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=43dfe2f0e6b44451eb91e106046dadab65b78ba5.js.map