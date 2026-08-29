System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AbstractViewModel, viewModel, Bindable, log, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, TestViewModel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAbstractViewModel(extras) {
    _reporterNs.report("AbstractViewModel", "../abstract/mvvm/AbstractViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewModel(extras) {
    _reporterNs.report("viewModel", "../abstract/mvvm/AbstractViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBindable(extras) {
    _reporterNs.report("Bindable", "../abstract/mvvm/AbstractViewModel", _context.meta, extras);
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
      AbstractViewModel = _unresolved_2.AbstractViewModel;
      viewModel = _unresolved_2.viewModel;
      Bindable = _unresolved_2.Bindable;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe234igtgtE0IT2WILQBeyM", "TestVM", undefined);

      //@viewModel('AbstractViewModel',TestModel)
      __checkObsolete__(['log']);

      _export("TestViewModel", TestViewModel = (_dec = (_crd && viewModel === void 0 ? (_reportPossibleCrUseOfviewModel({
        error: Error()
      }), viewModel) : viewModel)('AbstractViewModel'), _dec2 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec3 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec(_class = (_class2 = class TestViewModel extends (_crd && AbstractViewModel === void 0 ? (_reportPossibleCrUseOfAbstractViewModel({
        error: Error()
      }), AbstractViewModel) : AbstractViewModel) {
        //--這個就是寫你要拿model裡面那些屬性
        constructor() {
          super();

          _initializerDefineProperty(this, "_testTestModeValue2", _descriptor, this);

          //--這個就是寫你要拿model裡面那些屬性
          _initializerDefineProperty(this, "_testTestModeValue3", _descriptor2, this);

          log('he@@@@@@@@@@@@@@@@@TestView');
        }

        onLoad() {
          //log('WTF',);
          super.onLoad(); //---可能不要放在onloaded去拿,因為base-node在初始會去call一次this._onHierarchyChanged(oldParent);
          //--初始後就只會進行一次

          log('check_data VM from Modole', this); //log('check_data VM from Modole2',this._testTestModeValue2);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_testTestModeValue2", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_testTestModeValue3", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9485b25c686a9e137fec5ce41a4e78841b932c28.js.map