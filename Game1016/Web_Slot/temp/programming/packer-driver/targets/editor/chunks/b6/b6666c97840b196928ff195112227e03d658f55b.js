System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, SlotRelayLang, GameStatus, _dec, _class, _class2, _crd, ccclass, property, GameSetting;

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "../Utils/Config", _context.meta, extras);
  }

  _export("GameStatus", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      SlotRelayLang = _unresolved_2.SlotRelayLang;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3b35e3yQpHWo0W95zbUkZX", "GameSetting", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameSetting", GameSetting = (_dec = ccclass('GameSetting'), _dec(_class = (_class2 = class GameSetting {
        static get gameLogo() {
          return this._gameLogo;
        }

        static set gameLogo(value) {
          this._gameLogo = value;
        }

        static get gameLang() {
          return this._gameLang;
        }

        static set gameLang(value) {
          this._gameLang = value;
        }

        static get platformBetValueList() {
          return this._platformBetValueList;
        }

        static set platformBetValueList(value) {
          this._platformBetValueList = value;
        }

      }, _class2._gameLang = (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
        error: Error()
      }), SlotRelayLang) : SlotRelayLang).tw, _class2._gameLogo = "ApexWin", _class2.isShowAWLogo = true, _class2.isShowBottomAWLogo = true, _class2.isShowCoinAWLogo = true, _class2.shouldSwapThousandAndDecimalSeparators = false, _class2.keyboardLock = false, _class2.historyURL = "https://dev-gamerecord.apex-win.com/#/game-list?lang=[lang]&history=[json]", _class2.payTableURL = "https://gameapi.apex-win.com/ApexWin?gameID=[gameID]&lang=[lang]&page=introduction", _class2.ruleURL = "https://gameapi.apex-win.com/ApexWin?gameID=[gameID]&lang=[lang]&page=operation", _class2._platformBetValueList = [100, 200, 300, 500, 800, 1000, 1500, 2000, 2500, 3000, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 20000, 30000, 50000], _class2)) || _class));

      _export("GameStatus", GameStatus = class GameStatus {});

      GameStatus.isBuyBonusOpen = false;
      GameStatus.isExtraBetOpen = false;
      GameStatus.isBuyBonusOn = false;
      GameStatus.isExtraBetOn = false;
      GameStatus.isEnterFromGameStart = false;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b6666c97840b196928ff195112227e03d658f55b.js.map