System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TestScriptUnit, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, UnitTestComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTestScriptUnit(extras) {
    _reporterNs.report("TestScriptUnit", "./TestScriptUnit", _context.meta, extras);
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
      TestScriptUnit = _unresolved_2.TestScriptUnit;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06aa3RqXypAJKWYA8KOlubz", "UnitTestComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UnitTestComponent", UnitTestComponent = (_dec = ccclass('UnitTestComponent'), _dec2 = property({
        type: [_crd && TestScriptUnit === void 0 ? (_reportPossibleCrUseOfTestScriptUnit({
          error: Error()
        }), TestScriptUnit) : TestScriptUnit],
        readonly: true,
        serializable: false
      }), _dec(_class = (_class2 = class UnitTestComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "testScriptUnits", _descriptor, this);
        }

        onLoad() {
          this.testScriptUnits.length = 0;
          const components = this.node.components.filter(component => component !== this);
          components.forEach(component => {
            /*
             * constructor 會因為序列化一直被觸發 所以只能做額外 assign
             * 潛在問題: 序列化不斷創建物件 (根據 constructor 一直被觸發) 可能造成 memory leak
             * 但如果不把這個腳本掛到場景上就沒事
            */
            const newUnit = new (_crd && TestScriptUnit === void 0 ? (_reportPossibleCrUseOfTestScriptUnit({
              error: Error()
            }), TestScriptUnit) : TestScriptUnit)();
            newUnit.targetComponent = component;
            this.testScriptUnits.push(newUnit);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "testScriptUnits", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5a907936dc55ce87c2e6968b87b4c346297dc4ca.js.map