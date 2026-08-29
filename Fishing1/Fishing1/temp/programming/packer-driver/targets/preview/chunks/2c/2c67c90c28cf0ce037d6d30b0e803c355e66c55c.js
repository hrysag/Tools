System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CoordinatesFormMode, _crd;

  _export("CoordinatesFormMode", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07c65pyntdGW5UomoE2Gt1Y", "CoordinatesFormModeBase", undefined);

      /**
       * Created by EricHuang on 2023/09/18.
       */
      _export("CoordinatesFormMode", CoordinatesFormMode = class CoordinatesFormMode {
        constructor() {//this.initNodeContainer();  
        } //--override it(把預設的node塞進來)
        //--4合一座位系統專用(1,2號位置會往下轉,34不變)
        //--不旋轉座位的系統
        //--重設歸0(玩家離開房間回到大廳)


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2c67c90c28cf0ce037d6d30b0e803c355e66c55c.js.map