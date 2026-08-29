System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, error, _dec, _class, _crd, ccclass, property, playAnimOnEnable;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Animation = _cc.Animation;
      error = _cc.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27cc8/G6h1HI4gcB5aynUyt", "playAnimOnEnable", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Animation', 'error']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("playAnimOnEnable", playAnimOnEnable = (_dec = ccclass('playAnimOnEnable'), _dec(_class = class playAnimOnEnable extends Component {
        // private state: AnimationState = null!;
        onEnable() {
          const anim = this.getComponent(Animation);

          if (anim.clips.length === 0) {
            error(`[ERROR] ${this.node.name} has no clip to play!!!`);
            return;
          }

          anim.play();
        }

        onDisable() {
          var _anim$defaultClip;

          const anim = this.getComponent(Animation);

          if (anim.clips.length === 0) {
            return;
          }

          const name = (_anim$defaultClip = anim.defaultClip) == null ? void 0 : _anim$defaultClip.name;
          anim.getState(name).setTime(0); // this.getComponent(Animation)!.setCurrentTime(0);

          this.getComponent(Animation).stop();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6c23c4ead8aebe39cd11e0ab37e1dbc639b6a5a2.js.map