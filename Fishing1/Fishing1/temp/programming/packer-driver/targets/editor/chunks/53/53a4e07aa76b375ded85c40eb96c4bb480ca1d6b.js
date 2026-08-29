System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AbstractModel, Mutable, log, _dec, _dec2, _class, _descriptor, _descriptor2, _crd, TestModel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAbstractModel(extras) {
    _reporterNs.report("AbstractModel", "../abstract/mvvm/AbstractModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMutable(extras) {
    _reporterNs.report("Mutable", "../abstract/mvvm/AbstractModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      AbstractModel = _unresolved_2.AbstractModel;
      Mutable = _unresolved_2.Mutable;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2f268Sv+ZFO26lXN8PnJBLF", "TestModel", undefined);

      __checkObsolete__(['log']);

      _export("TestModel", TestModel = (_dec = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec2 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, (_class = class TestModel extends (_crd && AbstractModel === void 0 ? (_reportPossibleCrUseOfAbstractModel({
        error: Error()
      }), AbstractModel) : AbstractModel) {
        constructor() {
          super();

          _initializerDefineProperty(this, "_testTestModeValue2", _descriptor, this);

          _initializerDefineProperty(this, "_testTestModeValue3", _descriptor2, this);

          log('helllo_TestModel');
        }

        loaded() {
          super.loaded();
        }

        testChangeValue(value) {
          //this['_testTestModeValue2']='hehheheheehhehehe';
          log('set__testTestModeValue2', value);
          this._testTestModeValue2 = value;
        }

        testChangeValue2(value) {
          //this['_testTestModeValue2']='hehheheheehhehehe';
          log('set__testTestModeValue3', value);
          this._testTestModeValue3 = value;
        }

        sendServer(key, value) {
          if (key == '0') {
            this.testChangeValue(value);
          } else {
            this.testChangeValue2(value);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_testTestModeValue2", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_testTestModeValue3", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class)));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53a4e07aa76b375ded85c40eb96c4bb480ca1d6b.js.map