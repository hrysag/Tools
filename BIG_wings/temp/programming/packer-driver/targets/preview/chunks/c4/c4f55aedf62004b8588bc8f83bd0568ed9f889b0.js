System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, URLParameter, JPType, DataModel, _crd;

  function _reportPossibleCrUseOfURLParameter(extras) {
    _reporterNs.report("URLParameter", "../../../../share-tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJPType(extras) {
    _reporterNs.report("JPType", "../../connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinJPType(extras) {
    _reporterNs.report("WinJPType", "../../connection/connector/data/Receive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateJP(extras) {
    _reporterNs.report("updateJP", "../../connection/connector/data/Receive", _context.meta, extras);
  }

  _export("DataModel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      URLParameter = _unresolved_2.URLParameter;
    }, function (_unresolved_3) {
      JPType = _unresolved_3.JPType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2781cAOuLNBCK6NLsv7ukbi", "DataModel", undefined);

      _export("DataModel", DataModel = class DataModel {
        static BaseToRatio(base) {
          return base.split(':').map(s => {
            return s.includes('K') ? parseFloat(s.replace('K', '')) * 1000 : parseFloat(s);
          }).reduce((numerator, denominator) => numerator / denominator);
        }

        constructor() {
          var _sid;

          this.credit = 0;
          this.creditEnd = 0;
          this.balance = 0;
          this.line = void 0;
          this.maxLine = void 0;
          this.lineBet = void 0;
          this.maxLineBet = void 0;
          this.bet = void 0;
          this.gameType = void 0;

          /** 機台編號 */
          this.gameCode = void 0;
          this.userId = void 0;

          /** 支援的比例列表 */
          this.base = void 0;

          /** 目前的比例 */
          this.betBase = void 0;

          /** 預設的比例 */
          this.defaultBase = void 0;
          this.rates = void 0;
          this.lineList = void 0;
          this.wagersID = void 0;
          this.payoff = void 0;
          this.cards = void 0;
          this.lines = void 0;
          this.scatter = void 0;
          this.bonus = void 0;
          this.freeGame = void 0;
          this.freeTimes = void 0;

          /** 目前四層彩金的數值 */
          this.jpValue = void 0;

          /** 可下注的金額列表 */
          this.creditList = void 0;

          /** 預設下注金額 */
          this.defaultBetCredit = void 0;

          /** 泰國廳 專用tag 自動會在onOnLoadInfo 換好分數 , 後續不給換分 */
          this.noExchange = void 0;

          /** server 預設自動換分 */
          this.autoExchange = void 0;

          /** 使用的幣別 */
          this.currency = "";
          this.isCash = false;
          this.loginName = "";
          this.sid = "";
          this.winJPType = (_crd && JPType === void 0 ? (_reportPossibleCrUseOfJPType({
            error: Error()
          }), JPType) : JPType).None;
          this.winJPAmount = 0;
          this.washInfo = void 0;
          this.marquee = void 0;
          this.sid = (_sid = (_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
            error: Error()
          }), URLParameter) : URLParameter).sid) != null ? _sid : this.sid;
          this.gameType = (_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
            error: Error()
          }), URLParameter) : URLParameter).gameType;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c4f55aedf62004b8588bc8f83bd0568ed9f889b0.js.map