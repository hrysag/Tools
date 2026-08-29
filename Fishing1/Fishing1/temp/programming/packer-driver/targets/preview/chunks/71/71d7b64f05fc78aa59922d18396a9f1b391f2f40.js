System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AbstractView, GameMainLogicBase, _crd;

  function _reportPossibleCrUseOfAbstractView(extras) {
    _reporterNs.report("AbstractView", "../../abstract/mvvm/AbstractView", _context.meta, extras);
  }

  _export("GameMainLogicBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AbstractView = _unresolved_2.AbstractView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5fb3FTgIJAP7YeMrNg97Xj", "GameMainLogicBase", undefined);
      /**
       * Created by EricHuang on 2023/10/01.
       * 
       */


      _export("GameMainLogicBase", GameMainLogicBase = class GameMainLogicBase extends (_crd && AbstractView === void 0 ? (_reportPossibleCrUseOfAbstractView({
        error: Error()
      }), AbstractView) : AbstractView) {
        constructor() {
          super();
        }

        getDataFromgameMediator(viewUserId, dataKey, value) {
          return this._gameMediator.getViewUserData(viewUserId, dataKey, value);
        } //======給其他平行的view拿資料用的(透過mediator去拿)
        //--interface abstract


        getData(dataKey, value) {} //--interface abstract


        excute(value) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=71d7b64f05fc78aa59922d18396a9f1b391f2f40.js.map