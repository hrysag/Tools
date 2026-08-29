System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, _dec, _class, _crd, ccclass, property, scoreGridMarquee;

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

      _cclegacy._RF.push({}, "aadc9D2rktPMpGyDMTP2Eka", "scoreGridMarquee", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Animation', 'AnimationClip']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("scoreGridMarquee", scoreGridMarquee = (_dec = ccclass('scoreGridMarquee'), _dec(_class = class scoreGridMarquee extends Component {
        constructor(...args) {
          super(...args);
          this.animationList = [];
          this.playingIndex = 0;
          this.anim = void 0;
        }

        onEnable() {
          this.anim = this.node.getComponent(Animation);
          this.animationList = this.anim.clips;
          console.warn(this.animationList); // this.playingIndex = 0;

          this.play();
          this.anim.on(Animation.EventType.FINISHED, () => {
            this.play();
          });
          console.error("enable");
        }

        play() {
          this.anim.getState(this.animationList[this.playingIndex].name).setTime(0);
          this.playingIndex++;
          if (this.playingIndex >= this.animationList.length) this.playingIndex = 0;
          this.anim.play(this.animationList[this.playingIndex].name);
        }

        stop() {
          this.anim.pause();
          this.node.active = false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a716b47b2611194e26c4f7ae519731d0a56b42f5.js.map