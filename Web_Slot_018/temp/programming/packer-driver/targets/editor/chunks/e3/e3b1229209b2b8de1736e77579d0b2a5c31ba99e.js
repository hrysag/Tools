System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, _dec, _class, _crd, ccclass, property, AniTest;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Animation = _cc.Animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71f85EEcyZJprUnq60SqoOy", "AniPlayer", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AniTest", AniTest = (_dec = ccclass('AniPlayer'), _dec(_class = class AniTest extends Component {
        play(event, customEventData) {
          this.getComponent(Animation).play(customEventData);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e3b1229209b2b8de1736e77579d0b2a5c31ba99e.js.map