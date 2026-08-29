System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BasePresenter, _decorator, ClientRecvAction, ClientSendAction, _dec, _dec2, _class, _crd, ccclass, menu, BigWingsPresenter;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfBasePresenter(extras) {
    _reporterNs.report("BasePresenter", "../lib/BasePresenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientRecvAction(extras) {
    _reporterNs.report("ClientRecvAction", "../lib/RecvMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecvMessage(extras) {
    _reporterNs.report("RecvMessage", "../lib/RecvMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientSendAction(extras) {
    _reporterNs.report("ClientSendAction", "../lib/SendMessage", _context.meta, extras);
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
      BasePresenter = _unresolved_2.BasePresenter;
    }, function (_unresolved_3) {
      ClientRecvAction = _unresolved_3.ClientRecvAction;
    }, function (_unresolved_4) {
      ClientSendAction = _unresolved_4.ClientSendAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "765adhIwlpHmpHXxwQgoVKy", "BigWingsPresenter", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        menu
      } = _decorator);

      _export("BigWingsPresenter", BigWingsPresenter = (_dec = ccclass('BigWingPresenter'), _dec2 = menu('BigWings/BigWingPresenter'), _dec(_class = _dec2(_class = class BigWingsPresenter extends (_crd && BasePresenter === void 0 ? (_reportPossibleCrUseOfBasePresenter({
        error: Error()
      }), BasePresenter) : BasePresenter) {
        /**
         * 開始遊戲
         * @param opts 下注參數betInfo
         * @description { BetCredit: number }
         * @returns RecvMessage.MachjongBeginGameData 碰碰胡遊戲結果
         */
        beginGame(betInfo) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var {
              sender,
              receiver,
              model
            } = _this;
            var {
              gameType
            } = model.dataModel;
            var type = typeof betInfo;

            if (type == "number") {
              betInfo = {
                BetCredit: betInfo
              };
            } else if (Array.isArray(betInfo)) {
              betInfo = {
                BetCredit: betInfo[0],
                HitFree: betInfo[1]
              }; // return Promise.reject({ event: false, message: `beginGame: Invalid betInfo value for ${betInfo}` });
            }

            return new Promise((resolve, reject) => {
              sender.callServer((_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
                error: Error()
              }), ClientSendAction) : ClientSendAction).BeginGame, {
                action: (_crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
                  error: Error()
                }), ClientSendAction) : ClientSendAction).BeginGame,
                gameType,
                betInfo
              });
              receiver.once((_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
                error: Error()
              }), ClientRecvAction) : ClientRecvAction).BeginGame, result => {
                (result.result.event ? resolve : reject)(result);
              });
            });
          })();
        }

        gamble() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              var {
                sender,
                receiver,
                model
              } = _this2;
              var {
                Gamble
              } = _crd && ClientSendAction === void 0 ? (_reportPossibleCrUseOfClientSendAction({
                error: Error()
              }), ClientSendAction) : ClientSendAction;
              var {
                sid,
                wagersID,
                gameType,
                gameCode
              } = model.data;
              sender.callServer(Gamble, {
                action: Gamble,
                sid,
                wagersID,
                gameType,
                gameCode
              });
              receiver.once((_crd && ClientRecvAction === void 0 ? (_reportPossibleCrUseOfClientRecvAction({
                error: Error()
              }), ClientRecvAction) : ClientRecvAction).Gamble, result => {
                (result.result.event ? resolve : reject)(result);
              });
            });
          })();
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a50f576e73356704d21e9cd012f2ab2affa879d2.js.map