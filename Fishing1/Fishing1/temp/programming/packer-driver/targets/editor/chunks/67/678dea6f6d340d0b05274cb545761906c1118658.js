System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd, ShootSpeedRate, AREA_BOUNDARY;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6e80USJuJKnJunRZdqMg2c", "MouseBehaviorDefinitionsBase", undefined);

      /**
       * Created by EricHuang on 2023/10/01.
       * 
       */
      __checkObsolete__(['Vec2']);

      _export("ShootSpeedRate", ShootSpeedRate = /*#__PURE__*/function (ShootSpeedRate) {
        ShootSpeedRate[ShootSpeedRate["SHOOTING_RATE_STAND"] = 0.14] = "SHOOTING_RATE_STAND";
        ShootSpeedRate[ShootSpeedRate["SHOOTING_RATE_CRAZY"] = 0.07] = "SHOOTING_RATE_CRAZY";
        ShootSpeedRate[ShootSpeedRate["SHOOTING_RATE_FAST"] = 0.1] = "SHOOTING_RATE_FAST";
        return ShootSpeedRate;
      }({})); //--點擊的區域


      _export("AREA_BOUNDARY", AREA_BOUNDARY = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=678dea6f6d340d0b05274cb545761906c1118658.js.map