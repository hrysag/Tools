System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, _dec, _class, _crd, ccclass, property, ButtonDynamic;

  function _reportPossibleCrUseOfButtonStatus(extras) {
    _reporterNs.report("ButtonStatus", "../Utils/Config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "292e8zESRBN8rl2VeqcQ2p7", "ButtonDynamic", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ButtonDynamic", ButtonDynamic = (_dec = ccclass('ButtonDynamic'), _dec(_class = class ButtonDynamic extends Button {
        _applyTransition(state) {
          super._applyTransition(state);

          let stateEnum = state;
          this.onStateChange(stateEnum);
        }

        onStateChange(state) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ce84a0750d31b87e92cf865a57d626f1ba4ce1dc.js.map