System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c56574vqPdBJ4WKXwid/fbh", "Strategy", undefined);

      /**
       * Created by EricHuang on 2023/9/11.
       * 策略模式模式(Strategy pattern)
       * 用來抽換容易變動或是實作性差異極大的狀態
       * ex:connect,collision.....
       */
      __checkObsolete__(['Vec2']); //--逆時針採點-1.左下 2.右下 3.右上 4.左上(這是cocos 採點的順序)


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=471f5aca04fa99851054087dbf1225750a5bb9ec.js.map