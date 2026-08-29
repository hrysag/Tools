System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, AniEffectInstanceSingleton, _crd;

  _export("AniEffectInstanceSingleton", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4dd85pp+kpCHovO8eiYCYUC", "AniEffectInstanceSingleton", undefined);

      /**
       * Created by EricHuang on 2023/10/07.
       */
      _export("AniEffectInstanceSingleton", AniEffectInstanceSingleton = class AniEffectInstanceSingleton {
        static getInstance(key, constructor) {
          if (!this.instances[key]) {
            this.instances[key] = constructor();
          }

          return this.instances[key];
        }

      });

      AniEffectInstanceSingleton.instances = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c29364035cb0948e41b4bd8d35c260f62fb8b5b4.js.map