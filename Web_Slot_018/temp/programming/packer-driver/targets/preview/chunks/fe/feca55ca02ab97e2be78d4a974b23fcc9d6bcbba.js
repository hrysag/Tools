System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AutoOrientation, BasicDisplayContainer, BasicRotationResolution, FindComponent, _dec, _class, _crd, ccclass, property, AutoOrientExtension;

  function _reportPossibleCrUseOfAutoOrientation(extras) {
    _reporterNs.report("AutoOrientation", "../../../../../../Scripts/Utils/AutoOrientation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../../../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicDisplayContainer(extras) {
    _reporterNs.report("BasicDisplayContainer", "./IBG_Ani", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicRotationResolution(extras) {
    _reporterNs.report("BasicRotationResolution", "./BasicRotationResolution", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../../MyUtils/FindComponent", _context.meta, extras);
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
      AutoOrientation = _unresolved_2.AutoOrientation;
    }, function (_unresolved_3) {
      BasicDisplayContainer = _unresolved_3.BasicDisplayContainer;
    }, function (_unresolved_4) {
      BasicRotationResolution = _unresolved_4.BasicRotationResolution;
    }, function (_unresolved_5) {
      FindComponent = _unresolved_5.FindComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "991a9+pGpdGCLuYUv+mXL+s", "AutoOrientExtension", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'Component', 'Node', 'log', 'screen']);

      /**
       * 繼承原本的 AutoOrientation 類別
       * 這個類別是用來處理自動旋轉的擴展
       * 因為有些只是需要切換動畫的key即可
       */
      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoOrientExtension", AutoOrientExtension = (_dec = ccclass('AutoOrientExtension'), _dec(_class = class AutoOrientExtension extends (_crd && AutoOrientation === void 0 ? (_reportPossibleCrUseOfAutoOrientation({
        error: Error()
      }), AutoOrientation) : AutoOrientation) {
        constructor() {
          super(...arguments);

          //this.onResizeCall=;

          /*
          public override onResize(orientation: Orientation): void {
              let targetComponent = FindComponent.findComponentInChildren(this.node, BasicRotationResolution);
              if (!targetComponent) {
                  //--需要轉換的其他物件
                  targetComponent = FindComponent.findComponentInChildren(this.node, BasicDisplayContainer);
              }
              if (targetComponent) {
                  targetComponent.changeRotationResolution(orientation);
              }
              super.onResize(orientation);
          }*/
          this.onResizeCall = orientation => {
            var targetComponent = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(this.node, _crd && BasicRotationResolution === void 0 ? (_reportPossibleCrUseOfBasicRotationResolution({
              error: Error()
            }), BasicRotationResolution) : BasicRotationResolution);

            if (!targetComponent) {
              //--需要轉換的其他物件
              targetComponent = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                error: Error()
              }), FindComponent) : FindComponent).findComponentInChildren(this.node, _crd && BasicDisplayContainer === void 0 ? (_reportPossibleCrUseOfBasicDisplayContainer({
                error: Error()
              }), BasicDisplayContainer) : BasicDisplayContainer);
            }

            if (targetComponent) {
              targetComponent.changeRotationResolution(orientation);
            }
          };
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=feca55ca02ab97e2be78d4a974b23fcc9d6bcbba.js.map