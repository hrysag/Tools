System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EventTarget, LoadingManager, _crd;

  function _reportPossibleCrUseOfFileConfigLoadingOption(extras) {
    _reporterNs.report("FileConfigLoadingOption", "../../game/loading/LoadingDefinitions", _context.meta, extras);
  }

  _export("LoadingManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventTarget = _cc.EventTarget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a2eeJpJ/hBd5C8rXyzBx3B", "LoadingManager", undefined);
      /**
       * Created by EricHuang on 2023/9/20.
       * 
       */


      __checkObsolete__(['EventTarget', 'SpriteFrame', 'Prefab']);

      _export("LoadingManager", LoadingManager = class LoadingManager extends EventTarget {
        set loadingQueue(value) {
          this._loadingQueue = value;
        }

        constructor() {
          super();
          this._loadingQueue = void 0;
        } //abstract getSpriteFrames(id:string):SpriteFrame[];
        //abstract getPrefab(id: string): Prefab; 


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=61aed95a1edb6a6fc2d46174687026a4a62592c0.js.map