System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, Layout, Label, LineInfoSprite, PrefabInstancePoolManager, BigWingsSymbol, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, LineInfo;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLineInfoSprite(extras) {
    _reporterNs.report("LineInfoSprite", "./LineInfoSprite", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabInstancePoolManager(extras) {
    _reporterNs.report("PrefabInstancePoolManager", "../tools/PrefabInstancePoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBigWingsSymbol(extras) {
    _reporterNs.report("BigWingsSymbol", "../wheel/BigWingsSymbol", _context.meta, extras);
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
      Layout = _cc.Layout;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      LineInfoSprite = _unresolved_2.LineInfoSprite;
    }, function (_unresolved_3) {
      PrefabInstancePoolManager = _unresolved_3.PrefabInstancePoolManager;
    }, function (_unresolved_4) {
      BigWingsSymbol = _unresolved_4.BigWingsSymbol;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "918dftM1kdPl7UBPQwAm7IH", "LineInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Prefab', 'Layout', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LineInfo", LineInfo = (_dec = ccclass('LineInfo'), _dec2 = property({
        type: Prefab,
        tooltip: "滾輪內物件 prefab"
      }), _dec(_class = (_class2 = class LineInfo extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "symbolPrefab", _descriptor, this);

          this.lineImage = null;
          this.lineSym = null;
          this.label = null;
          this.symbolList = [];
        }

        start() {
          this.lineImage = this.node.getChildByName('LineImage').getComponent(_crd && LineInfoSprite === void 0 ? (_reportPossibleCrUseOfLineInfoSprite({
            error: Error()
          }), LineInfoSprite) : LineInfoSprite);
          this.lineSym = this.node.getChildByName('sym');
          this.label = this.node.getChildByName('label').getComponent(Label);

          for (var i = 0; i < 5; i++) {
            var symbol = (_crd && PrefabInstancePoolManager === void 0 ? (_reportPossibleCrUseOfPrefabInstancePoolManager({
              error: Error()
            }), PrefabInstancePoolManager) : PrefabInstancePoolManager).instance.takeOut(this.symbolPrefab).getComponent(_crd && BigWingsSymbol === void 0 ? (_reportPossibleCrUseOfBigWingsSymbol({
              error: Error()
            }), BigWingsSymbol) : BigWingsSymbol);
            symbol.changeSymbolID(1);
            symbol.node.scale.set(0.3, 0.3, 1);
            this.symbolList.push(symbol);
            this.lineSym.addChild(symbol.node);
          }

          this.lineSym.getComponent(Layout).spacingX = 170 * 0.3;
        }

        updateElement(id, element, payoff) {
          console.log('id: ' + id + ' element: ' + element + 'payoff: ' + payoff);
          this.lineImage.updateLine(id);

          for (var i = 0; i < 5; i++) {
            this.lineSym.children[i].active = false;
          }

          for (var _i = 0; _i < element.length; _i++) {
            this.lineSym.children[_i].active = true;

            this.symbolList[_i].changeSymbolID(element[_i]);
          }

          this.label.string = '= ' + payoff;
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
//# sourceMappingURL=699a1b1c542914daf5173ee30970c144245bd07b.js.map