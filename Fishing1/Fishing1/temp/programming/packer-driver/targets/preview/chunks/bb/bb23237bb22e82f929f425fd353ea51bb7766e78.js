System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, LoadingPageInfo, LoadingPage, _crd;

  function _reportPossibleCrUseOfLoadingPageInfo(extras) {
    _reporterNs.report("LoadingPageInfo", "./LoadingDefinitions", _context.meta, extras);
  }

  _export("LoadingPage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      LoadingPageInfo = _unresolved_2.LoadingPageInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b6f5k5Fr9AVqaoKdS7uL52", "LoadingPage", undefined);
      /**
       * Created by EricHuang on 2023/9/20.
       * 定義讀取進度.
       * 這邊是先假定在cocos creator裡面完成loading bar讀取頁面
       * 之後要把他從cocos裡面抽離出來變成動態加到canvas上面or div上面
       */


      __checkObsolete__(['Component', 'Node']);

      _export("LoadingPage", LoadingPage = class LoadingPage extends Node {
        constructor() {
          super();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bb23237bb22e82f929f425fd353ea51bb7766e78.js.map