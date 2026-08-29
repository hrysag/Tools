System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, EventTest;

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

      _cclegacy._RF.push({}, "e2383qqhuZKtbkYFzjVEzyA", "EventTest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EventTest", EventTest = (_dec = ccclass('EventTest'), _dec(_class = class EventTest extends Component {
        start() {
          //this.node.emit('event_test', 'arg0', 'arg1', 'arg2', 'arg3', 'arg4');
          this.node.on('event_test', this.event_test, this);
        }

        event_test(arg0, arg1, arg2, arg3, arg4) {
          console.log("recive event_test : " + arg0 + " " + arg1 + " " + arg2 + " " + arg3 + " " + arg4);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5926d9ab138024191e30579f870c565d101d75d9.js.map