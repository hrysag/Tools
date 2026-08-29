System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, instantiate, Localization, LocalizationSpine, FindComponent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, TestCodeForPrefab;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLocalization(extras) {
    _reporterNs.report("Localization", "db://assets/Scripts/GameScripts/Localization", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizationSpine(extras) {
    _reporterNs.report("LocalizationSpine", "db://assets/Scripts/GameScripts/LocalizationSpine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../MyUtils/FindComponent", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Localization = _unresolved_2.Localization;
    }, function (_unresolved_3) {
      LocalizationSpine = _unresolved_3.LocalizationSpine;
    }, function (_unresolved_4) {
      FindComponent = _unresolved_4.FindComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e333bnQj/xGY6sdrIF+3aX/", "TestCodeForPrefab", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TestCodeForPrefab", TestCodeForPrefab = (_dec = ccclass('TestCodeForPrefab'), _dec2 = property({
        type: Prefab,
        tooltip: "Prefab to instantiate"
      }), _dec(_class = (_class2 = class TestCodeForPrefab extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "testPrefab", _descriptor, this);

          this._testPrefabNodeTarget = void 0;
        }

        onLoad() {
          this._testPrefabNodeTarget = instantiate(this.testPrefab);
          console.log('testCode onLoad');
          this.node.addChild(this._testPrefabNodeTarget); //this._testPrefabNodeTarget.parent = this.node;

          return;
          this.node.once(Node.EventType.CHILD_ADDED, () => {
            console.log('testCode onLoad CHILD_ADDED');
            this.testLoadLanguageSpine();
          });
          this.node.addChild(this._testPrefabNodeTarget);
        }

        async testLoadLanguageSpine() {
          const currentLanguageKey = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.currentLangKey;
          const localizationSpine = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(this._testPrefabNodeTarget, _crd && LocalizationSpine === void 0 ? (_reportPossibleCrUseOfLocalizationSpine({
            error: Error()
          }), LocalizationSpine) : LocalizationSpine);

          if (localizationSpine) {
            await localizationSpine.loadAllSpine(currentLanguageKey); //targetPrefabNode.active = true;

            console.log('completed loadSpineLanguage');
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "testPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a69809f59bb1c1f450679adc5c0c0a1a27e372a9.js.map