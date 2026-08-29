System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Toggle, BaseAutoSet, _dec, _class, _crd, ccclass, property, AutoSetPanel;

  function _reportPossibleCrUseOfBaseAutoSet(extras) {
    _reporterNs.report("BaseAutoSet", "./BaseAutoSet", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65afeCQAB5AB6pO8Uc7XmXJ", "AutoSetPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Event', 'EventHandler', 'js', 'Label', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoSetPanel", AutoSetPanel = (_dec = ccclass('AutoSetPanel'), _dec(_class = class AutoSetPanel extends (_crd && BaseAutoSet === void 0 ? (_reportPossibleCrUseOfBaseAutoSet({
        error: Error()
      }), BaseAutoSet) : BaseAutoSet) {
        constructor(...args) {
          super(...args);
          this.arrToggle = [];
        }

        start() {
          this.init();
          console.log('start');
        }

        onEnable() {
          console.log('onEnable');
          this._currentAutoNumber = 0;
          let len = this.arrToggle.length;

          for (let i = 0; i < len; i++) {
            this.arrToggle[i].isChecked = false;
          }

          if (this._currentAutoNumberNode) {
            const lableNode = this._currentAutoNumberNode.getChildByName("label");

            lableNode.active = false;
          }
        }

        init() {
          const content = this.node.getChildByName("content");
          const autoToggle = content.getChildByName("autoToggle");
          console.log("init");
          let len = autoToggle.children.length;
          console.log(len);

          for (let i = 0; i < len; i++) {
            let toggleNode = autoToggle.children[i];
            let toggle = toggleNode.getComponent(Toggle);
            let labelNode = toggleNode.getChildByName("label");
            let autoNumber;

            if (labelNode) {
              autoNumber = labelNode.getComponent(Label).string;
            } else {
              autoNumber = "-1"; // which means infinity;
            }

            console.log(toggle);
            toggle.node.on("click", () => {
              this.clickTogglt(toggle, autoNumber);
            });
            this.arrToggle.push(toggle);
          }
        }

        clickTogglt(toggle, autoNumber) {
          if (toggle.isChecked) {
            this._currentAutoNumber = Number(autoNumber);
          } else {
            this._currentAutoNumber = 0;
          }

          if (this._currentAutoNumberNode) {
            const lableNode = this._currentAutoNumberNode.getChildByName("label");

            if (this._currentAutoNumber >= 0) {
              lableNode.active = true;
              lableNode.getComponent(Label).string = this._currentAutoNumber.toString();
            } else {
              lableNode.getComponent(Label).string = "@";
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec6341662c1d8c0b709536b8eccdd93cf13c1014.js.map