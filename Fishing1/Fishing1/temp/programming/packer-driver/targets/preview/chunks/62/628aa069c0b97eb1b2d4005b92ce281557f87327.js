System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameMainAbstractView, gameMainAbstractView, TestViewModel, TestGameView, TestGameView2, TestModel, director, Node, _decorator, TestConnect, TestConnectStrategy, log, _dec, _dec2, _class, _crd, ccclass, property, TestGameMainAbstractView;

  function _reportPossibleCrUseOfGameMainAbstractView(extras) {
    _reporterNs.report("GameMainAbstractView", "./../game/GameMainAbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameMainAbstractView(extras) {
    _reporterNs.report("gameMainAbstractView", "./../game/GameMainAbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestViewModel(extras) {
    _reporterNs.report("TestViewModel", "./TestVM", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestGameView(extras) {
    _reporterNs.report("TestGameView", "./TestGameView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestGameView2(extras) {
    _reporterNs.report("TestGameView2", "./TestGameView2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestModel(extras) {
    _reporterNs.report("TestModel", "./TestModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestConnect(extras) {
    _reporterNs.report("TestConnect", "./TestConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestConnectStrategy(extras) {
    _reporterNs.report("TestConnectStrategy", "./TestConnectStrategy", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      Node = _cc.Node;
      _decorator = _cc._decorator;
      log = _cc.log;
    }, function (_unresolved_2) {
      GameMainAbstractView = _unresolved_2.GameMainAbstractView;
      gameMainAbstractView = _unresolved_2.gameMainAbstractView;
    }, function (_unresolved_3) {
      TestViewModel = _unresolved_3.TestViewModel;
    }, function (_unresolved_4) {
      TestGameView = _unresolved_4.TestGameView;
    }, function (_unresolved_5) {
      TestGameView2 = _unresolved_5.TestGameView2;
    }, function (_unresolved_6) {
      TestModel = _unresolved_6.TestModel;
    }, function (_unresolved_7) {
      TestConnect = _unresolved_7.TestConnect;
    }, function (_unresolved_8) {
      TestConnectStrategy = _unresolved_8.TestConnectStrategy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b2f95jkHvJL+LZyRWN8QCio", "TestGameMainAbstractView", undefined); //-FacadeForGameView.getInstance().addClassInstance('TestView',TestView);


      __checkObsolete__(['director', 'Node', '_decorator']);

      //--裝飾器的執行是由下往上,由左往右(在class被定義的時候運作)
      //@viewfun('TestView')
      __checkObsolete__(['log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TestGameMainAbstractView", TestGameMainAbstractView = (_dec = ccclass('TestGameMainAbstractView'), _dec2 = (_crd && gameMainAbstractView === void 0 ? (_reportPossibleCrUseOfgameMainAbstractView({
        error: Error()
      }), gameMainAbstractView) : gameMainAbstractView)('TestView', _crd && TestViewModel === void 0 ? (_reportPossibleCrUseOfTestViewModel({
        error: Error()
      }), TestViewModel) : TestViewModel, _crd && TestModel === void 0 ? (_reportPossibleCrUseOfTestModel({
        error: Error()
      }), TestModel) : TestModel, _crd && TestConnect === void 0 ? (_reportPossibleCrUseOfTestConnect({
        error: Error()
      }), TestConnect) : TestConnect, _crd && TestConnectStrategy === void 0 ? (_reportPossibleCrUseOfTestConnectStrategy({
        error: Error()
      }), TestConnectStrategy) : TestConnectStrategy), _dec(_class = _dec2(_class = class TestGameMainAbstractView extends (_crd && GameMainAbstractView === void 0 ? (_reportPossibleCrUseOfGameMainAbstractView({
        error: Error()
      }), GameMainAbstractView) : GameMainAbstractView) {
        constructor() {
          super();
          this._testView = void 0;
          this._testView2 = void 0;
          log('TestGameMainAbstractView@@');
        } //--把其他的view 建構出來


        initUserViews() {
          var node = new Node('_testView');
          this._testView = node.addComponent(_crd && TestGameView === void 0 ? (_reportPossibleCrUseOfTestGameView({
            error: Error()
          }), TestGameView) : TestGameView);
          this._testView2 = node.addComponent(_crd && TestGameView2 === void 0 ? (_reportPossibleCrUseOfTestGameView2({
            error: Error()
          }), TestGameView2) : TestGameView2);
          director.getScene().addChild(node);
          /*
          let node2:Node=new Node('_testView2');
          this._testView2=node2.addComponent(TestGameView2);
          director.getScene().addChild(node);
          */
          //--塞入中介者pool

          this.setViewUser(this._testView.constructor.name, this._testView);
          this.setViewUser(this._testView2.constructor.name, this._testView2); //--中介者執行

          this.excute(this._testView.constructor.name);
          this.excute(this._testView2.constructor.name); //this._testView.setModelData();
          //this._testView2.setModelData();
        }

        testConnect() {
          //this._viewModel.connect(this);
          //(this._viewModel as AbstractViewModel).connect();
          this.connect();
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=628aa069c0b97eb1b2d4005b92ce281557f87327.js.map