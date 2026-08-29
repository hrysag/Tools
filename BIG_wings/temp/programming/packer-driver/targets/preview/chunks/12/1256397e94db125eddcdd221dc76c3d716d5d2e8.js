System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, BasePresenter, BaseModel, BaseView, Resize, BigWingsView, _dec, _class, _class2, _crd, ccclass, property, Application;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfBasePresenter(extras) {
    _reporterNs.report("BasePresenter", "./lib/BasePresenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseModel(extras) {
    _reporterNs.report("BaseModel", "./lib/BaseModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseView(extras) {
    _reporterNs.report("BaseView", "./lib/BaseView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResize(extras) {
    _reporterNs.report("Resize", "./tools/Resize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBigWingsView(extras) {
    _reporterNs.report("BigWingsView", "./components/BigWingsView", _context.meta, extras);
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
      BasePresenter = _unresolved_2.BasePresenter;
    }, function (_unresolved_3) {
      BaseModel = _unresolved_3.BaseModel;
    }, function (_unresolved_4) {
      BaseView = _unresolved_4.BaseView;
    }, function (_unresolved_5) {
      Resize = _unresolved_5.Resize;
    }, function (_unresolved_6) {
      BigWingsView = _unresolved_6.BigWingsView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "93885dsIIhAsqPLvc8mMZ/f", "Applicaiton", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Application", Application = (_dec = ccclass('Application'), _dec(_class = (_class2 = class Application extends Component {
        constructor() {
          super(...arguments);
          this.isSingleton = false;
        }

        onLoad() {
          this.resize(); // this.setup();
        }

        setup() {
          var _this = this;

          return _asyncToGenerator(function* () {
            console.log(_this.getComponent(_crd && BigWingsView === void 0 ? (_reportPossibleCrUseOfBigWingsView({
              error: Error()
            }), BigWingsView) : BigWingsView), _this);
            var model = new (_crd && BaseModel === void 0 ? (_reportPossibleCrUseOfBaseModel({
              error: Error()
            }), BaseModel) : BaseModel)();
            var view = new (_crd && BaseView === void 0 ? (_reportPossibleCrUseOfBaseView({
              error: Error()
            }), BaseView) : BaseView)();
            var presenter = new (_crd && BasePresenter === void 0 ? (_reportPossibleCrUseOfBasePresenter({
              error: Error()
            }), BasePresenter) : BasePresenter)(model, view); // view.presenter = presenter;

            presenter.registerRecvEvents();
            presenter.registerHandleProgressEvents();
            var event = false;
            console.log("Connect", event = yield presenter.connect().catch(() => {
              return false;
            }));
            if (event === false) return;
            console.log("login:", yield presenter.login().catch(e => e.error));
            console.log("gameCode:", yield presenter.takeMachine());
            console.log("getMachineDetail:", yield presenter.getMachineDetail());
            console.log("onLoadInfo:", yield presenter.onLoadInfo());
            console.log("creditExchange:", yield presenter.creditExchange('1:1', 100));
            console.log("balanceExchange:", yield presenter.balanceExchange());
            console.log("JoinGame:", yield presenter.joinGame().catch(e => {
              return e;
            }));
            console.log("LeaveGame:", yield presenter.leaveGame().catch(e => {
              return e;
            }));
            console.log("Exit:", yield presenter.exit());
          })();
        }

        update(deltaTime) {}

        resize() {
          var leftBG = document.createElement("div");
          leftBG.style.position = "absolute";
          leftBG.style.width = "100%";
          leftBG.style.height = "100%";
          leftBG.style.zIndex = "-1";
          leftBG.style.backgroundSize = "cover";
          leftBG.style.backgroundPosition = "right center";
          leftBG.style.backgroundImage = "url('https://demo.casinovir999.net/app/flash/pig/game/casinoH5/BigWings/assets/image/bg_stretch1_land.jpg')";
          var rightBG = document.createElement("div");
          rightBG.style.position = "absolute";
          rightBG.style.width = "100%";
          rightBG.style.height = "100%";
          rightBG.style.zIndex = "-1";
          rightBG.style.backgroundSize = "cover";
          rightBG.style.backgroundPosition = "left center";
          rightBG.style.backgroundImage = "url('https://demo.casinovir999.net/app/flash/pig/game/casinoH5/BigWings/assets/image/bg_stretch2_land.jpg')";
          new (_crd && Resize === void 0 ? (_reportPossibleCrUseOfResize({
            error: Error()
          }), Resize) : Resize)(leftBG, rightBG);
        }

        relese() {
          if (this.isSingleton) Application.singleton = null;
        }

        static getInstance() {
          if (!Application.singleton) {
            Application.singleton = new Application();
            Application.singleton.isSingleton = true;
          }

          return Application.singleton;
        }

      }, _class2.singleton = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1256397e94db125eddcdd221dc76c3d716d5d2e8.js.map