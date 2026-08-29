System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Component, _dec, _class, _crd, ccclass, property, AniAutoPlay;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8289zf+Y9MApXU1UZZi4fh", "AniAutoPlay", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AniAutoPlay", AniAutoPlay = (_dec = ccclass('AniAutoPlay'), _dec(_class = class AniAutoPlay extends Component {
        onEnable() {
          this.getComponent(Animation).play(this.getComponent(Animation).defaultClip.name);
        }

        onDisable() {
          this.getComponent(Animation).stop();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cac0027bb7ca642a2963ea62955cc7116f14faf8.js.map