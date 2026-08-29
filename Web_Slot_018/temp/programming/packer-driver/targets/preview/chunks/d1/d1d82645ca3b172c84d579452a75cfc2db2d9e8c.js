System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ShowWin, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, WinScoreTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfShowWin(extras) {
    _reporterNs.report("ShowWin", "../ShowWin/Scripts/ShowWin", _context.meta, extras);
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
      ShowWin = _unresolved_2.ShowWin;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "191cdv9loNImLKUFYU692Iq", "WinScoreTest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WinScoreTest", WinScoreTest = (_dec = ccclass('WinScoreTest'), _dec2 = property(_crd && ShowWin === void 0 ? (_reportPossibleCrUseOfShowWin({
        error: Error()
      }), ShowWin) : ShowWin), _dec(_class = (_class2 = class WinScoreTest extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "showWin", _descriptor, this);
        }

        start() {}

        update(deltaTime) {}

        onClick1() {
          this.showWin.showSpecialWin(50, 10000).then(() => {// AudioManager.instance.stop();
          });
        }

        onClick2() {
          this.showWin.showSpecialWin(100, 10000).then(() => {// AudioManager.instance.stop();
          });
        }

        onClick3() {
          this.showWin.showSpecialWin(200, 10000).then(() => {// AudioManager.instance.stop();
          });
        }

        onClick4() {
          this.showWin.showSpecialWin(300, 10000).then(() => {// AudioManager.instance.stop();
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "showWin", [_dec2], {
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
//# sourceMappingURL=d1d82645ca3b172c84d579452a75cfc2db2d9e8c.js.map