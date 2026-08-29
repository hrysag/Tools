System.register(["__unresolved_0", "cc", "__unresolved_1", "@casino-mono/mvc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Toggle, BaseAutoSet, CommandEventName, _dec, _class, _crd, ccclass, property, BetSetPanel;

  function _reportPossibleCrUseOfBaseAutoSet(extras) {
    _reporterNs.report("BaseAutoSet", "./BaseAutoSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandEventName(extras) {
    _reporterNs.report("CommandEventName", "@casino-mono/mvc", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      BaseAutoSet = _unresolved_2.BaseAutoSet;
    }, function (_casinoMonoMvc) {
      CommandEventName = _casinoMonoMvc.CommandEventName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d7ecHO4adDXrLzqrf15833", "BetSetPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Event', 'EventHandler', 'js', 'Label', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BetSetPanel", BetSetPanel = (_dec = ccclass('BetSetPanel'), _dec(_class = class BetSetPanel extends (_crd && BaseAutoSet === void 0 ? (_reportPossibleCrUseOfBaseAutoSet({
        error: Error()
      }), BaseAutoSet) : BaseAutoSet) {
        constructor(...args) {
          super(...args);
          this.arrToggle = [];
          this._currentBetNode = void 0;
          this._currentBet = void 0;
          this.betCreditList = [];
          this.toggleIndex = 1;
        }

        set BetCreditList(n) {
          this.betCreditList = n;

          if (this.arrToggle.length == 0) {
            this.init();
            console.log(this._currentBet);
            this.clickToggle(this._currentBet);
          }
        }

        set currentBet(n) {
          this._currentBet = n;
        }

        init() {
          if (this.betCreditList.length == 0) {
            this.betCreditList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
          }

          const betToggle = this.node.getChildByName("toggle");
          let len = betToggle.children.length; // console.log(betToggle, len)

          for (let i = 0; i < len; i++) {
            let toggleNode = betToggle.children[i];
            let toggle = toggleNode.getComponent(Toggle);
            let labelNode = toggleNode.getChildByName("label");
            let checkmarkLabel = toggleNode.getChildByName("checkmark").getChildByName("label");
            this.arrToggle.push(toggle);
            let betNumber = `${this.betCreditList[i]}`;
            labelNode.getComponent(Label).string = betNumber;
            checkmarkLabel.getComponent(Label).string = betNumber;
            toggle.node.on("click", () => {
              this.clickToggle(this.betCreditList[i]);
            }); // console.log(this.arrToggle)
          }
        }

        clickToggle(bet) {
          // if (this._currentBetNode) {
          //     this._currentBetNode.getComponent(Toggle).isChecked = false;
          // }
          const index = this.betCreditList.indexOf(bet);
          const toggle = this.arrToggle[index];
          this._currentBetNode = toggle.node; // this._currentBetNode.getComponent(Toggle).isChecked = true;

          this._currentBet = bet;
          this.toggleIndex = index;
          this.node.emit((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
            error: Error()
          }), CommandEventName) : CommandEventName).UPDATE_LINEBET, this._currentBet);
        }

        setBetBytoggleIndex(index) {
          console.log('this.setBetBytoggleIndex');

          if (this._currentBetNode) {
            this._currentBetNode.getComponent(Toggle).isChecked = false;
            console.log('this._currentBetNode');
            console.log(this._currentBetNode);
          }

          console.log("this.arrToggle[index].node", index, this.arrToggle[index]);
          this._currentBetNode = this.arrToggle[index].node;
          this._currentBetNode.getComponent(Toggle).isChecked = true;
          console.log(this._currentBetNode);
          this._currentBet = this.betCreditList[index];
          console.log(this._currentBet);
          this.node.emit((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
            error: Error()
          }), CommandEventName) : CommandEventName).UPDATE_LINEBET, this._currentBet);
        }

        next() {
          this.toggleIndex++;

          if (this.toggleIndex > this.betCreditList.length - 1) {
            this.toggleIndex = 0;
          }

          this.setBetBytoggleIndex(this.toggleIndex);
        }

        previous() {
          this.toggleIndex--;

          if (this.toggleIndex < 0) {
            this.toggleIndex = this.betCreditList.length - 1;
          }

          this.setBetBytoggleIndex(this.toggleIndex);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3466380d2ca80d86d282ce761ae8d7de99c319f9.js.map