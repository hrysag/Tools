System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BasicGameStateAndRotationResolution, _dec, _class, _crd, ccclass, property, NG_SP_SpriteIWindowResize;

  function _reportPossibleCrUseOfBasicGameStateAndRotationResolution(extras) {
    _reporterNs.report("BasicGameStateAndRotationResolution", "./IGameState", _context.meta, extras);
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
      BasicGameStateAndRotationResolution = _unresolved_2.BasicGameStateAndRotationResolution;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ccdeUB+oRFVqr20K9U8oe4", "NG_SP_SpriteIWindowResize", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NG_SP_SpriteIWindowResize", NG_SP_SpriteIWindowResize = (_dec = ccclass('NG_SP_SpriteIWindowResize'), _dec(_class = class NG_SP_SpriteIWindowResize extends (_crd && BasicGameStateAndRotationResolution === void 0 ? (_reportPossibleCrUseOfBasicGameStateAndRotationResolution({
        error: Error()
      }), BasicGameStateAndRotationResolution) : BasicGameStateAndRotationResolution) {
        landscapeChange() {
          this.node.setPosition(0, 0, 0);
          this.node.setScale(1, 1, 1);
        } //-NG_SP_Sprite只有橫版的狀態..他的container要縮小而已(直版)縮小0.702，位移y軸至50.661


        portraitChange() {
          this.node.setPosition(0, 50.661, 0);
          this.node.setScale(0.702, 0.702, 0.702);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e79d4c3ad79b6f28d823918b4a9493aeba7b0fea.js.map