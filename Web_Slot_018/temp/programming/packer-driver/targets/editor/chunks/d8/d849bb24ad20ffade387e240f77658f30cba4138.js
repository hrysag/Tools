System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, CleanEventProcessorAuto;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ad918s+DUNIbYtZFZT5wJrr", "CleanEventProcessorAuto", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CleanEventProcessorAuto", CleanEventProcessorAuto = (_dec = ccclass('CleanEventProcessorAuto'), _dec(_class = class CleanEventProcessorAuto extends Component {
        onDisable() {
          const eventProcessor = this.node._eventProcessor;

          if (eventProcessor) {
            //重新初始化claimedTouchIdList
            eventProcessor.claimedTouchIdList.length = 0;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d849bb24ad20ffade387e240f77658f30cba4138.js.map