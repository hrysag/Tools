System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AbstractView, viewBind, viewfun, log, _dec, _dec2, _class, _class2, _descriptor, _crd, TestGameView2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAbstractView(extras) {
    _reporterNs.report("AbstractView", "../abstract/mvvm/AbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewBind(extras) {
    _reporterNs.report("viewBind", "../abstract/mvvm/AbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewfun(extras) {
    _reporterNs.report("viewfun", "../abstract/mvvm/AbstractView", _context.meta, extras);
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
      AbstractView = _unresolved_2.AbstractView;
      viewBind = _unresolved_2.viewBind;
    }, function (_unresolved_3) {
      viewfun = _unresolved_3.viewfun;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eadc79c/IpEAqIR9AKLzJEZ", "TestGameView2", undefined);

      __checkObsolete__(['log']);

      _export("TestGameView2", TestGameView2 = (_dec = (_crd && viewfun === void 0 ? (_reportPossibleCrUseOfviewfun({
        error: Error()
      }), viewfun) : viewfun)('TestView'), _dec2 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec(_class = (_class2 = class TestGameView2 extends (_crd && AbstractView === void 0 ? (_reportPossibleCrUseOfAbstractView({
        error: Error()
      }), AbstractView) : AbstractView) {
        constructor() {
          super();

          _initializerDefineProperty(this, "_testTestModeValue3", _descriptor, this);

          //-要監聽model資料改變的變數(名稱與model相同)
          this._testgameview2Data = void 0;

          //--註冊你要聽的VM資料回傳事件(從notify拿)

          /*
          protected initRegisterNotifyFromVM():void
          {
              //Notifycation.getInstance().on(NotifycationSubbscriptionSubject.AbstractViewModel,'事件名稱',callbackfun,observerID=你的classID)
              
              Notifycation.getInstance().on(NotifycationSubbscriptionSubject.AbstractViewModel,'_testTestModeValue3',this.testGameView1NotifyBack,this.constructor.name);
          }*/
          this.modeleChangeHandler = (sub, value) => {
            log('TestGameView2222', sub, value);
            this.getVMData();
          };

          log('init TEST2');
          this._testgameview2Data = 123456789;
        }

        onLoad() {
          log('TestView_onLoad');
          super.onLoad();
        }

        /*
        private testGameView1NotifyBack=(value)=>
        {
            log('testGameView1NotifyBack222',value);
            this.getVMData();
        }*/
        getVMData() {
          /**
           * PS--動態添加的屬性,編輯器會無法識別所以會出現找不到的警告
           * 但是實際上他是存在的.
           * this._viewModel._testTestModeValue2---這樣會報錯,但是可以運作,也拿到值
           * this._viewModel['_testTestModeValue2']--這樣可以,但使用要吻合字串
           */
          log('getVMData_TestGameView@', this._viewModel['_testTestModeValue3']); //--拿view的資料

          log('check_1_data', this._gameMediator.getViewUserData('TestGameView', 'test'));
        }

        testGameViewCallConnect() {
          log('call_testGameViewCallConnect');
        } //--interface abstract


        getData(dataKey, value) {
          if (dataKey == 'test2') {
            return this._testgameview2Data;
          }
        } //--interface abstract


        excute(value) {
          this._viewModel.sendServer('1', {
            valu: 1,
            test: false,
            fn: () => {}
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_testTestModeValue3", [_dec2], {
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
//# sourceMappingURL=e23c5f1816bb6d49642b52c68a0696232418f536.js.map