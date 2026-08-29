System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FacadeForGameView, Component, log, GameMainAbstractView, _crd;

  //--送進來的參數屬性至少要繼承AbstractViewModel
  //export function gameMainAbstractView<T extends new ()=> AbstractViewModel,U extends typeof AbstractModel,Tconnect extends typeof GameConnectBase,TStrategy extends new ()=>IfConnectStrategy>(vmid: string, vmClass: T,modelClass:U,connetClass:Tconnect,strategyClass: TStrategy)
  function gameMainAbstractView(vmClass, modelClass, connetClass, strategyClass) {
    return function (target) {
      target.prototype._vmInstance = vmClass; //target.prototype._vmid = vmid;

      target.prototype._model = modelClass;
      target.prototype._connect = connetClass;
      target.prototype._strategy = strategyClass;
    };
  }

  function _reportPossibleCrUseOfGameMediator(extras) {
    _reporterNs.report("GameMediator", "../abstract/mvvm/Mediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMediatorViewUser(extras) {
    _reporterNs.report("MediatorViewUser", "../abstract/mvvm/Mediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractViewModel(extras) {
    _reporterNs.report("AbstractViewModel", "../abstract/mvvm/AbstractViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractModel(extras) {
    _reporterNs.report("AbstractModel", "../abstract/mvvm/AbstractModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacadeForGameView(extras) {
    _reporterNs.report("FacadeForGameView", "../abstract/mvvm/Facade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConnectBase(extras) {
    _reporterNs.report("GameConnectBase", "../game/connect/ConnectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfConnectStrategy(extras) {
    _reporterNs.report("IfConnectStrategy", "../game/strategy/Strategy", _context.meta, extras);
  }

  _export({
    GameMainAbstractView: void 0,
    gameMainAbstractView: gameMainAbstractView
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      log = _cc.log;
    }, function (_unresolved_2) {
      FacadeForGameView = _unresolved_2.FacadeForGameView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a78bz0vClDlLNoNqfPV5WR", "GameMainAbstractView", undefined);
      /**
       * Created by EricHuang on 2023/9/11.
       */


      __checkObsolete__(['Component']);

      __checkObsolete__(['log']);

      __checkObsolete__(['CCClass', '_decorator']);

      _export("GameMainAbstractView", GameMainAbstractView = class GameMainAbstractView extends Component {
        constructor() {
          super();
          this._mediatorViewUserMap = void 0;
          this._classId = void 0;
          this._vmInstance = void 0;
          this._connect = void 0;
          this._strategy = void 0;
          this._model = void 0;
          //-AbstractModel
          this._localDebug = void 0;
          this._gameType = void 0;
          this._classId = '';
          this._localDebug = false;
          this._gameType = 0;
          this._mediatorViewUserMap = {}; //this._vmid=this.constructor.prototype['_vmid'] || null;

          this._vmInstance = this.constructor.prototype['_vmInstance'] || null;
          this._strategy = this.constructor.prototype['_strategy'] || null;
          this._connect = new this.constructor.prototype['_connect'](this._strategy); //--繼承過來的model

          this._model = new this.constructor.prototype['_model']();
          this._model.netConnect = this._connect; //setModelInstance

          (_crd && FacadeForGameView === void 0 ? (_reportPossibleCrUseOfFacadeForGameView({
            error: Error()
          }), FacadeForGameView) : FacadeForGameView).getInstance().setModelInstance(this._model); //FacadeForGameView.getInstance().addClassInstance(this._vmid,this._vmInstance); 

          (_crd && FacadeForGameView === void 0 ? (_reportPossibleCrUseOfFacadeForGameView({
            error: Error()
          }), FacadeForGameView) : FacadeForGameView).getInstance().addClassInstance(this._vmInstance); //--裝飾器要先執行view的
          //log('helloGameMainAbstractView',this._vmid,this._vmInstance);

          log('helloGameMainAbstractView', this._vmInstance);
        } //---local端的測試


        setLocalDebugMode(value) {
          this._localDebug = value;
          this._model.debug = value;
          (_crd && FacadeForGameView === void 0 ? (_reportPossibleCrUseOfFacadeForGameView({
            error: Error()
          }), FacadeForGameView) : FacadeForGameView).getInstance().getClassInstance().localDebug = value;
        }
        /*
        protected setGameType(gameType:string):void
        {
            FacadeForGameView.getInstance().getClassInstance(this._vmid).setModelData('_gameType',gameType);
        }*/


        async onLoad() {
          log('SUPER_GameMainAbstractView');
          await this.beforeinit();
          this.initloading(); //this.initUserViews();
        }

        async beforeinit() {}
        /**
         * override it 
         * 建立處理loading相關的事宜
         */


        initloading() {}
        /**
         *1. start to create views 
         *2. if u need to get data of otherView in the view,u must to call setViewUser
         * 
         */


        initUserViews() {} //--local 的啟動程序(就是寫大廳的資料去啟動大廳啦)


        localDebugGameInit() {}

        async prepareBeforeConnect(gameType) {
          return this._model.prepareBeforeConnect(gameType);
        }

        async connect() {
          log('GameMainAbstractView_connect'); //await this.prepareBeforeConnect();

          this._model.connect();
        } //---將實踐MediatorViewUser interface的view塞進來


        setViewUser(id, view) {
          if (!this._mediatorViewUserMap[id]) {
            view.setMediator(this);
            this._mediatorViewUserMap[id] = view;
          }
        } //--取得MediatorViewUser 的資料


        getViewUserData(viewUserId, dataKey, value) {
          //log('getViewUserData',viewUserId,dataKey,this._mediatorViewUserMap);
          if (!this._mediatorViewUserMap[viewUserId]) {
            return null;
          } else {
            return this._mediatorViewUserMap[viewUserId].getData(dataKey, value);
          }
        }

        excute(viewUserId, value) {
          if (!this._mediatorViewUserMap[viewUserId]) {
            return null;
          } else {
            return this._mediatorViewUserMap[viewUserId].excute(value);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=637de04c886eb1af726e50ce63ee4432d697b90f.js.map