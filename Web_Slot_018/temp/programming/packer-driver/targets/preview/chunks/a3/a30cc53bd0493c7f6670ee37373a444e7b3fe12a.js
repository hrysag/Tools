System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ParticleSystem, ParticleSystem2D, _dec, _class, _crd, ccclass, property, ParticleReset;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ParticleSystem = _cc.ParticleSystem;
      ParticleSystem2D = _cc.ParticleSystem2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf638Wv209MS79mlr4tvxLL", "ParticleReset", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ParticleSystem', 'ParticleSystem2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ParticleReset", ParticleReset = (_dec = ccclass('ParticleReset'), _dec(_class = class ParticleReset extends Component {
        constructor() {
          super(...arguments);
          this.particle2DList = null;
          this.particle3DList = null;
        }

        onLoad() {
          this.particle2DList = this.getComponentsInChildren(ParticleSystem2D);
          this.particle3DList = this.getComponentsInChildren(ParticleSystem);
        }

        onEnable() {
          for (var item of this.particle2DList) {
            item.resetSystem();
          }

          for (var _item of this.particle3DList) {
            _item.clear();
          }
        }

        onDisable() {
          for (var item of this.particle2DList) {
            item.stopSystem();
          }

          for (var _item2 of this.particle3DList) {
            _item2.stop();

            _item2.clear();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a30cc53bd0493c7f6670ee37373a444e7b3fe12a.js.map