System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Debug, _dec, _class, _crd, ccclass, property, CodeTest;

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../Scripts/Utils/Debug", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6341nhyfxNqYyl4569lVvm", "CodeTest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CodeTest", CodeTest = (_dec = ccclass('CodeTest'), _dec(_class = class CodeTest extends Component {
        start() {}

        test1() {
          let str = "RmFEZUI5VQQA";
          let utf8Encode = new TextEncoder();
          let b = utf8Encode.encode("RmFEZUI5VQQA");

          for (let item of b) {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Log(item);
          }

          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("====================");
        }

        test2() {
          let raw = {
            GameName: "XinH5",
            GameNumber: 141,
            Bet: 1000
          };
          let url = "https://bpdev2.xin-stars.com/60887/Bet";
          fetch(url, {
            method: "POST",
            body: JSON.stringify(raw)
          }).then(response => {
            response.type;
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Log(response);
            return response.json();
          }).then(myJson => {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Log(myJson);
          }).catch(reason => {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).LogError(reason);
          });
        }

        onButtonClick() {
          this.test2();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9f8d3f6d06777499bf3b12bc69401df2bff63691.js.map