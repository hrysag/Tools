System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, macro, _dec, _class, _crd, ccclass, property, Clock;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      macro = _cc.macro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3c57dIcG+FEnZ3oZXWYQDWX", "Clock", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'macro', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Clock", Clock = (_dec = ccclass('Clock'), _dec(_class = class Clock extends Component {
        constructor(...args) {
          super(...args);
          this.clockLabel = null;
        }

        onLoad() {
          this.clockLabel = this.getComponent(Label);
          this.schedule(this.updateClock, 1, macro.REPEAT_FOREVER, 0.001);
          this.updateClock();
        }

        updateClock() {
          let nowDate = new Date();
          let hours = nowDate.getHours();
          let min = nowDate.getMinutes();
          let minStr = min < 10 ? `0${min}` : `${min}`;
          let str = `${hours}:${minStr}`;
          this.clockLabel.string = `${str}`;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=787e9c9b13d0fc03c5fc215894b897290e359bf3.js.map