System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ParticleReset, _dec, _class, _crd, ccclass, property, ParticleExtension;

  function _reportPossibleCrUseOfParticleReset(extras) {
    _reporterNs.report("ParticleReset", "db://assets/Scripts/Utils/ParticleReset", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ParticleReset = _unresolved_2.ParticleReset;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "86173qq3VRGToTLr23OG3Tv", "ParticleExtension", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ParticleSystem2D', 'ParticleSystem']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ParticleExtension", ParticleExtension = (_dec = ccclass('ParticleExtension'), _dec(_class = class ParticleExtension extends (_crd && ParticleReset === void 0 ? (_reportPossibleCrUseOfParticleReset({
        error: Error()
      }), ParticleReset) : ParticleReset) {
        constructor() {
          super();
        }
        /**
         * enable=true,active=true
         * node.removeChild這種行為不會觸發onEnable
         */

        /**
        * enable=false,active=false
        * node.removeChild這種行為不會觸發onDisable
        */
        //--new one


        stopParticle() {
          this.onDisable();
        } //--new one


        resetParticle() {
          this.onEnable(); //ㄟ幹..居然沒有public reset的方法
          //-https://github.com/cocos/cocos-engine/blob/0e4607f/cocos/particle/particle-system.ts#L1030
          //-他在stop的時候會去call reset
          //particle.stop();//--只能這樣了...
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2d6c287a55fc328a6523288cfd9d97ecc5890b5b.js.map