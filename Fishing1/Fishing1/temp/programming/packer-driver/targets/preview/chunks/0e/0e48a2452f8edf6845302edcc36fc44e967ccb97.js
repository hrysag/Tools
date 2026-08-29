System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, SchedulableTool, _crd;

  _export("SchedulableTool", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dcced7tTVZI5b9H8RZgrrl3", "SchedulableTool", undefined);

      /**
       * Created by EricHuang on 2023/12/11.
       * 
       * ps--情非得已..因為原本的AbstractView裡面已經有一個屬性id
       * 他跟ISchedulable裡面的id是衝突的..
       */
      __checkObsolete__(['ISchedulable']);

      _export("SchedulableTool", SchedulableTool = class SchedulableTool {
        constructor() {
          this.id = void 0;
          this.uuid = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0e48a2452f8edf6845302edcc36fc44e967ccb97.js.map