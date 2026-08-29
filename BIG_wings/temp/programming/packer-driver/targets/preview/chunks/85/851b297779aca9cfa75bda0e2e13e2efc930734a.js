System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, BigWingsWheel, BigWingsRoller, BigWingsSymbol, PrefabInstancePoolManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SymbolSpine;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBigWingsWheel(extras) {
    _reporterNs.report("BigWingsWheel", "./BigWingsWheel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBigWingsRoller(extras) {
    _reporterNs.report("BigWingsRoller", "./BigWingsRoller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBigWingsSymbol(extras) {
    _reporterNs.report("BigWingsSymbol", "./BigWingsSymbol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabInstancePoolManager(extras) {
    _reporterNs.report("PrefabInstancePoolManager", "../tools/PrefabInstancePoolManager", _context.meta, extras);
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
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      BigWingsWheel = _unresolved_2.BigWingsWheel;
    }, function (_unresolved_3) {
      BigWingsRoller = _unresolved_3.BigWingsRoller;
    }, function (_unresolved_4) {
      BigWingsSymbol = _unresolved_4.BigWingsSymbol;
    }, function (_unresolved_5) {
      PrefabInstancePoolManager = _unresolved_5.PrefabInstancePoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88b83Oir0xA0ZYedJPEhm5I", "SymbolSpine", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Animation', 'AnimationClip', 'CCFloat', 'Color', 'Component', 'Graphics', 'Node', 'UIOpacity', 'UITransform', 'Vec3', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SymbolSpine", SymbolSpine = (_dec = ccclass('SymbolSpine'), _dec2 = property({
        type: Prefab,
        tooltip: "滾輪內物件 prefab"
      }), _dec(_class = (_class2 = class SymbolSpine extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "symbolPrefab", _descriptor, this);

          this.symArr = [];
        }

        onLoad() {
          var wheelCount = this.node.parent.getComponent(_crd && BigWingsRoller === void 0 ? (_reportPossibleCrUseOfBigWingsRoller({
            error: Error()
          }), BigWingsRoller) : BigWingsRoller).arrWheel.length;
          var mainSymCount = this.node.parent.getComponentInChildren(_crd && BigWingsWheel === void 0 ? (_reportPossibleCrUseOfBigWingsWheel({
            error: Error()
          }), BigWingsWheel) : BigWingsWheel).mainSymbolAmount;

          for (var i = 0; i < wheelCount; i++) {
            for (var j = 0; j < mainSymCount; j++) {
              var sym = (_crd && PrefabInstancePoolManager === void 0 ? (_reportPossibleCrUseOfPrefabInstancePoolManager({
                error: Error()
              }), PrefabInstancePoolManager) : PrefabInstancePoolManager).instance.takeOut(this.symbolPrefab).getComponent(_crd && BigWingsSymbol === void 0 ? (_reportPossibleCrUseOfBigWingsSymbol({
                error: Error()
              }), BigWingsSymbol) : BigWingsSymbol);
              sym.changeSymbolID(0);
              this.node.addChild(sym.node);
              sym.node.setPosition((i - 2) * 215, (3 - j + 0.5) * sym.height - 438);
              this.symArr.push(sym);
              sym.node.active = false;
            }
          }

          var wildArr = [];

          for (var _i = 0; _i < wheelCount; _i++) {
            var _sym = (_crd && PrefabInstancePoolManager === void 0 ? (_reportPossibleCrUseOfPrefabInstancePoolManager({
              error: Error()
            }), PrefabInstancePoolManager) : PrefabInstancePoolManager).instance.takeOut(this.symbolPrefab).getComponent(_crd && BigWingsSymbol === void 0 ? (_reportPossibleCrUseOfBigWingsSymbol({
              error: Error()
            }), BigWingsSymbol) : BigWingsSymbol);

            _sym.changeSymbolID(13);

            this.node.addChild(_sym.node);

            _sym.node.setPosition((_i - 2) * 215, -37);

            wildArr.push(_sym);
            _sym.node.active = false;
          }

          this.node.parent.getComponent(_crd && BigWingsRoller === void 0 ? (_reportPossibleCrUseOfBigWingsRoller({
            error: Error()
          }), BigWingsRoller) : BigWingsRoller).setSymSpine(this.symArr, wildArr);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "symbolPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=851b297779aca9cfa75bda0e2e13e2efc930734a.js.map