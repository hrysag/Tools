System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FishCoordinatesFormMode, find, Fish1CoordinatesFormMode, _crd;

  function _reportPossibleCrUseOfFishCoordinatesFormMode(extras) {
    _reporterNs.report("FishCoordinatesFormMode", "../../../framework/logic/coordinates/FishCoordinatesFormMode", _context.meta, extras);
  }

  _export("Fish1CoordinatesFormMode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
    }, function (_unresolved_2) {
      FishCoordinatesFormMode = _unresolved_2.FishCoordinatesFormMode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d56daBp8BtEP5F0oVHSEKyO", "Fish1CoordinatesFormMode", undefined);
      /**
       * Created by EricHuang on 2023/09/29.
       */


      __checkObsolete__(['find']);

      _export("Fish1CoordinatesFormMode", Fish1CoordinatesFormMode = class Fish1CoordinatesFormMode extends (_crd && FishCoordinatesFormMode === void 0 ? (_reportPossibleCrUseOfFishCoordinatesFormMode({
        error: Error()
      }), FishCoordinatesFormMode) : FishCoordinatesFormMode) {
        constructor() {
          super();
        } //--override it(把預設的node塞進來)


        initNodeContainer() {
          //--有要旋轉的在塞進來
          this._cannonContainer = find('Canvas/playerUI');
          this._waittingTextAniContainer = find('Canvas/waittingText');
          this._playerIdTextContainer = find('Canvas/PlayerNameText');
          this._fishContainer = find('Canvas/fishNodeContainer');
          this._fishShadowContainer = find('Canvas/fishShadowNodeContainer');
          this._bulletContainer = find('Canvas/bulletNodeContainer');
          this._clickAreaContainer = find('Canvas/mouseNode');
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=48a2d6309a72405582d82d9f9cab71b0e68bc755.js.map