System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CommandforMediatorViewUser, _crd;

  _export("CommandforMediatorViewUser", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53207PnTCdEB6E4NDM7ydd9", "Mediator", undefined);
      /**
       * Created by EricHuang on 2023/9/11.
       * 中介者模式(mediator pattern)+命令模式(command pattern)
       * command 用來限縮 加入中介者的類別倒過來亂使用中介者的方法
       */


      _export("CommandforMediatorViewUser", CommandforMediatorViewUser = class CommandforMediatorViewUser {
        constructor(value) {
          this._viewUser = void 0;
          //--interface
          this._dataForGetViewData = void 0;
          //--interface
          this._dataForExecute = void 0;
          this._viewUser = value;
        } //--override-


        execute() {//this._viewUser.excute()
        } //--override-


        getData() {//this._viewUser.
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e00eb2502ac8fc12f4a55b69af7d16e885f44dfc.js.map