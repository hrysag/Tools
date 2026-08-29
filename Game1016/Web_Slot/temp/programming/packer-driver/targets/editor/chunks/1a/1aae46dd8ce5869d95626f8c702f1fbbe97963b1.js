System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, UnitTest, LogExecutionTime, UnitTestComponent, Utility, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _crd, ccclass, property, UnitTestExample;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _reportPossibleCrUseOfUnitTest(extras) {
    _reporterNs.report("UnitTest", "./TestableFunction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogExecutionTime(extras) {
    _reporterNs.report("LogExecutionTime", "./LogExecutionTIme", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUnitTestComponent(extras) {
    _reporterNs.report("UnitTestComponent", "./UnitTestComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../Utils/Core", _context.meta, extras);
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
      tween = _cc.tween;
    }, function (_unresolved_2) {
      UnitTest = _unresolved_2.UnitTest;
    }, function (_unresolved_3) {
      LogExecutionTime = _unresolved_3.LogExecutionTime;
    }, function (_unresolved_4) {
      UnitTestComponent = _unresolved_4.UnitTestComponent;
    }, function (_unresolved_5) {
      Utility = _unresolved_5.Utility;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3a29c4Fx9AHroaZY/ZjDQk", "UnitTestExample", undefined);

      __checkObsolete__(['_decorator', 'Component', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UnitTestExample", UnitTestExample = (_dec = ccclass('UnitTestExample'), _dec2 = (_crd && UnitTest === void 0 ? (_reportPossibleCrUseOfUnitTest({
        error: Error()
      }), UnitTest) : UnitTest)(), _dec3 = (_crd && UnitTest === void 0 ? (_reportPossibleCrUseOfUnitTest({
        error: Error()
      }), UnitTest) : UnitTest)(), _dec4 = (_crd && UnitTest === void 0 ? (_reportPossibleCrUseOfUnitTest({
        error: Error()
      }), UnitTest) : UnitTest)(), _dec5 = (_crd && UnitTest === void 0 ? (_reportPossibleCrUseOfUnitTest({
        error: Error()
      }), UnitTest) : UnitTest)(), _dec6 = (_crd && UnitTest === void 0 ? (_reportPossibleCrUseOfUnitTest({
        error: Error()
      }), UnitTest) : UnitTest)(123, '456', false, [1, 2, 3], ['a', 'b', 'c']), _dec7 = _crd && LogExecutionTime === void 0 ? (_reportPossibleCrUseOfLogExecutionTime({
        error: Error()
      }), LogExecutionTime) : LogExecutionTime, _dec8 = _crd && LogExecutionTime === void 0 ? (_reportPossibleCrUseOfLogExecutionTime({
        error: Error()
      }), LogExecutionTime) : LogExecutionTime, _dec9 = _crd && LogExecutionTime === void 0 ? (_reportPossibleCrUseOfLogExecutionTime({
        error: Error()
      }), LogExecutionTime) : LogExecutionTime, _dec10 = _crd && LogExecutionTime === void 0 ? (_reportPossibleCrUseOfLogExecutionTime({
        error: Error()
      }), LogExecutionTime) : LogExecutionTime, _dec(_class = (_class2 = class UnitTestExample extends Component {
        onLoad() {
          // 可以在編輯器運行時手動拖入 UnitTestComponent，也可以在待測組件的 onLoad 用 addComponent
          this.node.addComponent(_crd && UnitTestComponent === void 0 ? (_reportPossibleCrUseOfUnitTestComponent({
            error: Error()
          }), UnitTestComponent) : UnitTestComponent);
        } // 有 TestableFunction 裝飾器，會被執行
        // 案例: 方法顯示順序由腳本內排序決定 (UnitTest 註冊時機)


        funcZ() {
          console.log('funcZ executed');
        } // 有 TestableFunction 裝飾器，會顯示在裝飾器測試按鈕列表


        funcA() {
          console.log('funcA executed');
        } // 沒有 TestableFunction 裝飾器，不會顯示在裝飾器測試按鈕列表


        funcB() {
          console.log('funcB executed');
        } // 有 TestableFunction 裝飾器


        funcC() {
          console.log('funcC executed');
          this.funcD();
          this.funcE();
        } // 有 TestableFunction 裝飾器，會顯示在裝飾器測試按鈕列表，也會被 funcC 呼叫執行


        funcD() {
          console.log('funcD executed');
        } // 沒有 TestableFunction 裝飾器，不會顯示在裝飾器測試按鈕列表，但會被 funcC 呼叫執行


        funcE() {
          console.log('funcE executed');
        }

        funcArgs(arg1, arg2, arg3, arg4, arg5) {
          console.log(`${arg1}: ${typeof arg1}`);
          console.log(`${arg2}: ${typeof arg2}`);
          console.log(`${arg3}: ${typeof arg3}`);
          console.log(`${arg4}: ${typeof arg4}`);
          console.log(`${arg5}: ${typeof arg5}`);
        }

        async delayBySetTimeout() {
          console.log('delayBySetTimeout executed start');
          return new Promise((resolve, reject) => {
            // 注意: 這裡使用 setTimeout 只是方便於不需要跑遊戲就可以直接測試，一般情況請勿使用 setTimeout
            setTimeout(() => {
              console.log('delayBySetTimeout executed end');
              resolve();
            }, 1000);
          });
        }

        async delayByScheduleOnce() {
          console.log('delayByScheduleOnce executed start');
          return new Promise((resolve, reject) => {
            this.scheduleOnce(() => {
              console.log('delayByScheduleOnce executed end');
              resolve();
            }, 1);
          });
        }

        async delayByTween() {
          console.log('delayByTween executed start');
          return new Promise((resolve, reject) => {
            const a = {};
            tween(a).delay(1).call(() => {
              console.log('delayByTween executed end');
              resolve();
            }).start();
          });
        }

        async delayByWaitPromise() {
          console.log('delayByWaitPromise executed start');
          await (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).waitPromise(1);
          console.log('delayByWaitPromise executed end');
        }

      }, (_applyDecoratedDescriptor(_class2.prototype, "funcZ", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "funcZ"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "funcA", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "funcA"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "funcC", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "funcC"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "funcD", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "funcD"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "funcArgs", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "funcArgs"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "delayBySetTimeout", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "delayBySetTimeout"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "delayByScheduleOnce", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "delayByScheduleOnce"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "delayByTween", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "delayByTween"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "delayByWaitPromise", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "delayByWaitPromise"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1aae46dd8ce5869d95626f8c702f1fbbe97963b1.js.map