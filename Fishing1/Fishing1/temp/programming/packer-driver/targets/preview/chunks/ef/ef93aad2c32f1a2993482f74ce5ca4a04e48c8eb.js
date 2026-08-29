System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameMainAbstractView, LoadingEvent, GUIEvent, LoadingResProgress, LoadingResManager, ResizeTool, CocosGameSetting, i18n, Notifycation, NotifycationSubbscriptionSubject, FacadeForGameView, ServerSendCode, ServerResCode, GuiNotifycationSubbscriptionSubject, GameCoordinateMode, GameViewMediatorUser, FishCollisionBase, STAcollisionStrategy, BaseCollisionType, CollisionKey, find, director, Director, CameraComponent, log, SoundsManager, FishGameMain, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  /*
  export function fishGameMain<
      TFish extends new () => FishView<FishData>,
      TBullet extends new () => BulletView
  >(fishSysClass: TFish, bulletSysClass: TBullet) {
      return function <T extends { new (...args: any[]): {} }>(target: T) {
          return class extends target {
              protected _fishSystem: InstanceType<TFish>;
              protected _bulletSystem: InstanceType<TBullet>;
  
              constructor(...args: any[]) {
                  super(...args);
              }
          };
      };
  }*/

  /*
  export type GameParameters<T extends new () => FishView<FishData>, U extends new () => BulletView> = {
      tf: T,
      tb: U,
      fNodeId?:string,//--給路徑
      bNodeId?:string //--給路徑 
  };
  */
  function fishGameMain(fishSysClass, bulletSysClass, fNodeId, bNodeId) {
    //export function fishGameMain<T extends new () => FishView<FishData>, U extends new () => BulletView>(params: GameParameters<T, U>) {
    return function (target) {
      target.prototype._fishSystem = fishSysClass;
      target.prototype._bulletSystem = bulletSysClass;

      if (fNodeId != '') {
        //--這邊的_fnid是動態給的
        target.prototype._fnid = fNodeId;
      }

      if (bNodeId != '') {
        //--這邊的_bnid是動態給的
        target.prototype._bnid = bNodeId;
      }
    };
  }
  /**
   * 解決-This expression is not constructable.
    Type 'FishView<FishData>' has no construct signatures.
   * 
   * export interface FishSystemConstructor<T extends FishView<FishData>> {
      new (): T;
  }
  
  export class FishGameMain<TFishSystem extends FishView<FishData>> extends GameMainAbstractView {
      protected _fishSystem: TFishSystem;
  
      constructor(fishSystemClass: FishSystemConstructor<TFishSystem>) {
          super();
          this._fishSystem = new fishSystemClass();
      }
  
      // 其他方法...
  }
  
  export class FishViewOne extends FishView {
      // FishViewOne 的实现
  }
  
  class MyFishGameMain extends FishGameMain<FishViewOne> {
      constructor() {
          super(FishViewOne); // 通过构造函数传递 FishViewOne 类型参数
      }
  }
   */

  /**
   * class MyFishGameMain extends FishGameMain<FishViewOne> {
       
      constructor() {
        super();
       }
     }
   */

  /**
   * const fishGameMainInstance = new FishGameMain<MyFishView>();
   */


  function _reportPossibleCrUseOfGameMainAbstractView(extras) {
    _reporterNs.report("GameMainAbstractView", "../game/GameMainAbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishCoordinatesFormMode(extras) {
    _reporterNs.report("FishCoordinatesFormMode", "../logic/coordinates/FishCoordinatesFormMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingProgress(extras) {
    _reporterNs.report("LoadingProgress", "../game/loading/LoadingProgress", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingEvent(extras) {
    _reporterNs.report("LoadingEvent", "../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGUIEvent(extras) {
    _reporterNs.report("GUIEvent", "../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResProgress(extras) {
    _reporterNs.report("LoadingResProgress", "../logic/loading/LoadingResProgress", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishView(extras) {
    _reporterNs.report("FishView", "../logic/views/fishView/FishView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletView(extras) {
    _reporterNs.report("BulletView", "../logic/views/bulletView/BulletView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuisSystemView(extras) {
    _reporterNs.report("GuisSystemView", "../logic/views/guisSystemView/GuisSystemView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniEffectView(extras) {
    _reporterNs.report("AniEffectView", "../logic/views/aniEffectView/AniEffectView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResizeTool(extras) {
    _reporterNs.report("ResizeTool", "../logic/resize/ResizeTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFileConfigLoadingOption(extras) {
    _reporterNs.report("FileConfigLoadingOption", "../game/loading/LoadingDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingPageInfo(extras) {
    _reporterNs.report("LoadingPageInfo", "../game/loading/LoadingDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosGameSetting(extras) {
    _reporterNs.report("CocosGameSetting", "../utils/CocosGameSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfi18n(extras) {
    _reporterNs.report("i18n", "../utils/i18n/LanguageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifycation(extras) {
    _reporterNs.report("Notifycation", "../abstract/mvvm/Notifycation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifycationSubbscriptionSubject(extras) {
    _reporterNs.report("NotifycationSubbscriptionSubject", "../abstract/mvvm/Notifycation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacadeForGameView(extras) {
    _reporterNs.report("FacadeForGameView", "../abstract/mvvm/Facade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractViewModel(extras) {
    _reporterNs.report("AbstractViewModel", "../abstract/mvvm/AbstractViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerSendCode(extras) {
    _reporterNs.report("ServerSendCode", "../logic/connect/ConnectBaseDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerResCode(extras) {
    _reporterNs.report("ServerResCode", "../logic/connect/ConnectBaseDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject(extras) {
    _reporterNs.report("GuiNotifycationSubbscriptionSubject", "../game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCoordinateMode(extras) {
    _reporterNs.report("GameCoordinateMode", "../game/coordinates/CoordinateDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUser(extras) {
    _reporterNs.report("GameViewMediatorUser", "../logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishGameMainLogic(extras) {
    _reporterNs.report("FishGameMainLogic", "../logic/gameLogic/FishGameMainLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishCollisionSystem(extras) {
    _reporterNs.report("FishCollisionSystem", "../logic/collision/FishCollisionSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishCollisionBase(extras) {
    _reporterNs.report("FishCollisionBase", "../logic/collision/FishCollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSTAcollisionStrategy(extras) {
    _reporterNs.report("STAcollisionStrategy", "../logic/collision/fishCollisionStrategy/STAcollisionStrategy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCollisionType(extras) {
    _reporterNs.report("BaseCollisionType", "../game/collision/CollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionKey(extras) {
    _reporterNs.report("CollisionKey", "../game/collision/CollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundsManager(extras) {
    _reporterNs.report("SoundsManager", "./audio/SoundsManager", _context.meta, extras);
  }

  _export({
    FishGameMain: void 0,
    fishGameMain: fishGameMain
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      director = _cc.director;
      Director = _cc.Director;
      CameraComponent = _cc.CameraComponent;
      log = _cc.log;
    }, function (_unresolved_2) {
      GameMainAbstractView = _unresolved_2.GameMainAbstractView;
    }, function (_unresolved_3) {
      LoadingEvent = _unresolved_3.LoadingEvent;
      GUIEvent = _unresolved_3.GUIEvent;
    }, function (_unresolved_4) {
      LoadingResProgress = _unresolved_4.LoadingResProgress;
    }, function (_unresolved_5) {
      LoadingResManager = _unresolved_5.LoadingResManager;
    }, function (_unresolved_6) {
      ResizeTool = _unresolved_6.ResizeTool;
    }, function (_unresolved_7) {
      CocosGameSetting = _unresolved_7.CocosGameSetting;
    }, function (_unresolved_8) {
      i18n = _unresolved_8.i18n;
    }, function (_unresolved_9) {
      Notifycation = _unresolved_9.Notifycation;
      NotifycationSubbscriptionSubject = _unresolved_9.NotifycationSubbscriptionSubject;
    }, function (_unresolved_10) {
      FacadeForGameView = _unresolved_10.FacadeForGameView;
    }, function (_unresolved_11) {
      ServerSendCode = _unresolved_11.ServerSendCode;
      ServerResCode = _unresolved_11.ServerResCode;
    }, function (_unresolved_12) {
      GuiNotifycationSubbscriptionSubject = _unresolved_12.GuiNotifycationSubbscriptionSubject;
    }, function (_unresolved_13) {
      GameCoordinateMode = _unresolved_13.GameCoordinateMode;
    }, function (_unresolved_14) {
      GameViewMediatorUser = _unresolved_14.GameViewMediatorUser;
    }, function (_unresolved_15) {
      FishCollisionBase = _unresolved_15.FishCollisionBase;
    }, function (_unresolved_16) {
      STAcollisionStrategy = _unresolved_16.STAcollisionStrategy;
    }, function (_unresolved_17) {
      BaseCollisionType = _unresolved_17.BaseCollisionType;
      CollisionKey = _unresolved_17.CollisionKey;
    }, function (_unresolved_18) {
      SoundsManager = _unresolved_18.SoundsManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3345acS+H9CYKDGMFkcRTQQ", "FishGameMain", undefined);
      /**
       * Created by EricHuang on 2023/9/20.
       */


      __checkObsolete__(['EventTarget', 'find', 'Node', 'director', 'Director', 'CameraComponent', 'Rect', 'Game', 'game']);

      __checkObsolete__(['CCClass', '_decorator', 'log']);

      //--裝飾器的執行是由下往上,由左往右(在class被定義的時候運作)

      /**
       * 1.裝飾器的執行是由下往上,由左往右執行
       * 2.在class被定義的時候運作
       * 所以使用者在繼承FishGameMain的時候需要呼叫裝飾器@gameMainAbstractView
       * 藉此來去定義相關內容
       * 3.因為裝飾器他一旦經過定義class的動作後,隨即會啟動,在繼承的關係下,
       * 他已經沒辦法再次被定義了
       */
      //--這一行要使用者來呼叫,用來定義相關的class
      //@gameMainAbstractView('vm名稱',vmclass(未實體化),modelClass(未實體化),connectClass(未實體化),connectstrategy(未實體化))
      //--20230921--前面的建構式不能這樣寫,因為這支是掛在cocos creator裡面的node,不是從外面new的
      //export class FishGameMain<TFishSystem extends FishView<FishData>> extends GameMainAbstractView{
      _export("FishGameMain", FishGameMain = class FishGameMain extends (_crd && GameMainAbstractView === void 0 ? (_reportPossibleCrUseOfGameMainAbstractView({
        error: Error()
      }), GameMainAbstractView) : GameMainAbstractView) {
        set loadingQuene(value) {
          this._loadingQuene = value;
        }

        set loadingPageInfo(value) {
          this._loadingPageInfo = value;
        }

        set gameCoordinatesMode(value) {
          this._gameCoordinatesMode = value;
        }
        /**
         * 這隻主要用來掛載在cocos的node上的,是程式進入點用來啟動整個流程
         * 繼承練上的父物件會幫你完成建構vm model modelstrategy物件
         * 前提是在繼承該物件的使用者必須執行裝飾器來定義相關物件
         * 裝飾器>>@gameMainAbstractView
         */


        constructor() {
          super();
          //protected _fishSystem:FishView<FishData>;
          this._fishSystem = void 0;
          this._bulletSystem = void 0;
          this._fishNodeId = void 0;
          this._bulletNodeId = void 0;
          this._coordinate = void 0;
          this._aniEffectViewSystem = void 0;
          this._gameLogic = void 0;
          this._beforeInit = void 0;
          this._guiSystem = void 0;
          this._collisionSystem = void 0;
          //property _mapCollision
          //---這2個loading要整併
          this._loadingProgress = void 0;
          //private _loadingManager:LoadingManager;
          this._loadingQuene = void 0;
          this._loadingPageInfo = void 0;
          this._useGuiSystem = void 0;
          this._gameCoordinatesMode = void 0;
          this._loadingNode = void 0;
          //--20240116--暫時的
          this._focusFalseTime = void 0;
          //--20240125-失去焦點
          this._focus = void 0;
          //--20240125-失去焦點
          this._webWorker = void 0;

          this.lobbyIsReady = () => {
            log('lobby is ready_FishGameMain');
            /**
            * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
            * 所以function name會被拿掉..很雷20240328
            */

            (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
              error: Error()
            }), Notifycation) : Notifycation).getInstance().off((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
              error: Error()
            }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).LOBBY_IS_READY, this.lobbyIsReady, this._classId);

            this._loadingProgress.remove();

            log('check__hallID', (_crd && FacadeForGameView === void 0 ? (_reportPossibleCrUseOfFacadeForGameView({
              error: Error()
            }), FacadeForGameView) : FacadeForGameView).getInstance().getClassInstance()['_hallID']); //@ts-ignore

            var hallid = (_crd && FacadeForGameView === void 0 ? (_reportPossibleCrUseOfFacadeForGameView({
              error: Error()
            }), FacadeForGameView) : FacadeForGameView).getInstance().getClassInstance()['_hallID']; // 範例如何紀錄『加載時間』

            var util = window.util;
            util.analytic.analyze({
              event: 'fishing_enter_game',
              game_type: '38003',
              argument: window.timeMeasureBegin ? Math.ceil(Date.now() / 1000 - window.timeMeasureBegin) : '-1',
              company_id: (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_Cid,
              // Eric 再看一下怎麼取gs給你的company_id 應該login就給惹
              hall_id: hallid,
              // 同上
              version: window.game_version || undefined
            });
            var shootAnal = util.analytic.ShootTypeAnalytics;
            shootAnal.start(10); // 每10分鐘採樣一次
          };

          this.layoutisReady = () => {
            log('layout is ready_FishGameMain');

            this._loadingProgress.finish();
            /**
            * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
            * 所以function name會被拿掉..很雷20240328
            */


            (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
              error: Error()
            }), Notifycation) : Notifycation).getInstance().off((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
              error: Error()
            }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).LAYOUT_IS_READY, this.layoutisReady, this._classId); //this._loadingManager.off(LoadingEvent.LAYOUT_IS_READY,this.layoutisReady);
            //--這邊只是要顯示100%的進度,所以延遲1秒

            TweenMax.to({}, 1, {
              onComplete: () => {
                this.initUserViews();
              }
            });
          };

          this.assetsisReady = () => {
            //--寫入讀取時間
            //--開始建立系統
            //log('FishGameMain_ASSETS_IS_READY');
            this._loadingProgress.off((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
              error: Error()
            }), LoadingEvent) : LoadingEvent).ASSETS_IS_READY, this.assetsisReady);

            if (this._useGuiSystem) {
              this.initGuiSystem();
            } else {
              this.initUserViews();
            }

            this.createSounds();
            this.createBgList();
          };

          //--進桌完成
          this.finishTakeSeat = (sub, value) => {
            log('finish_player_takeseat', sub, value);
            /**
             * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
             * 所以function name會被拿掉..很雷20240328
             */

            (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
              error: Error()
            }), Notifycation) : Notifycation).getInstance().off((_crd && NotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfNotifycationSubbscriptionSubject({
              error: Error()
            }), NotifycationSubbscriptionSubject) : NotifycationSubbscriptionSubject).AbstractViewModel, '_playerTableId', this.finishTakeSeat, this._classId); //-step1
            //this.coordinatesChange(this._gameCoordinatesMode,value[0]+1);

            this.coordinatesChange(value[0] + 1); //--啟動碰撞偵測
            //------以下兩個方法待補
            //-step2
            //this._gameBase.coordinateMode=this._gameCoordinatesMode;
          };

          //--離開遊戲回到大廳
          this.cleanAllRoom = (sub, value) => {
            log('finish_player_cleanAllRoom', sub, value);

            if (value[0]) {
              this._coordinate.resetCoordinateMode();

              this._guiSystem.resetRoom();

              this._aniEffectViewSystem.setPlayerTableIndex(-1);

              this._aniEffectViewSystem.resetRoomData();

              this._bulletSystem.cleanTable();

              this._fishSystem.cleanTable();

              this._gameLogic.cleanTable();

              if (!(_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
                error: Error()
              }), Notifycation) : Notifycation).getInstance().hasCallback((_crd && NotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfNotifycationSubbscriptionSubject({
                error: Error()
              }), NotifycationSubbscriptionSubject) : NotifycationSubbscriptionSubject).AbstractViewModel, '_playerTableId', this.finishTakeSeat)) {
                /**
                 * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
                 * 所以function name會被拿掉..很雷20240328
                 */
                (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
                  error: Error()
                }), Notifycation) : Notifycation).getInstance().on((_crd && NotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfNotifycationSubbscriptionSubject({
                  error: Error()
                }), NotifycationSubbscriptionSubject) : NotifycationSubbscriptionSubject).AbstractViewModel, '_playerTableId', this.finishTakeSeat, this._classId);
              }

              this._guiSystem.reBuildRoom();
            }
          };

          //--瀏覽器失去焦點和回復焦點
          this.handleVisibilityChangeHide = () => {
            log('handleVisibilityChangeHide');
            this._focus = true;
            this._focusFalseTime = new Date().getTime();

            if (!this._webWorker) {
              //--一旦停止就沒有辦法再啟動了..thread就會被終止
              //--20240423 compiler 發布後他會在js後面加上後綴碼..what the fuck

              /*
              let workPath=(BUILD)?'src/assets/Libs/worker/worker.js':'plugins/assets/Libs/worker/worker.js';
              
              this._webWorker=new Worker(workPath);
              */
              var jsCode = "var timerId=null,elapsedTime=0;function runTimer(){var e=(new Date).getTime(),i=e-elapsedTime;elapsedTime=e,self.postMessage(i),timerId=setTimeout(runTimer,16)}self.onmessage=function(e){\"start\"===e.data&&(elapsedTime=(new Date).getTime(),runTimer())},self.onclose=function(){null!==timerId&&clearTimeout(timerId)};";
              var blob = new Blob([jsCode], {
                type: "application/javascript"
              });
              this._webWorker = new Worker(URL.createObjectURL(blob));

              this._webWorker.onmessage = e => {
                this.update(e.data / 1000);
              };
            }

            this.loseFocusToCloseTimeStemp();

            this._webWorker.postMessage('start');
          };

          //--瀏覽器失去焦點和回復焦點
          this.handleVisibilityChangeShow = () => {
            this._focus = false;
            var nowTimestamp = new Date().getTime();
            var missingTime = nowTimestamp - this._focusFalseTime;
            log('handleVisibilityChangeShow__missingTime', missingTime);

            if (this._webWorker) {
              this._webWorker.terminate();

              this._webWorker = null;
            }

            this.reFocusToOpenTimeStemp(missingTime);
          };

          this.afterDraw = () => {
            var _this$_collisionSyste;

            if ((_this$_collisionSyste = this._collisionSystem) != null && _this$_collisionSyste.canUpdate) {
              //this._collisionSystem.checkCollision();
              this.checkCollisionFrameByFrame();
            }
          };

          this._classId = 'FishGameMain';
          this._useGuiSystem = false;
          this._gameCoordinatesMode = '';
          this._loadingQuene = [];
          log('check_director_status_', this.constructor.prototype);
          this._loadingNode = null;
          this._focusFalseTime = 0;
          this._focus = false;
          this._webWorker = null;
          /**
           * 啟動順序
           * 1.beforeinit()
           * 2.定義每個layer是甚麼(可省?)
           * 3.掛監聽(laoding)LAYOUT_IS_READY/ASSETS_IS_READY
           * 4.定義下載的資料集
           * 5.啟動下載
           * 6.ASSETS_IS_READY-->
           * 7.初始啟動GUIsystem
           * 8.啟動layout
           * 9.LAYOUT_IS_READY-->
           * 10.啟動後續系統initUserViews
           * 11.連線
           */
        } //--這邊要再補啟動前的class

        /**
         * 1.寫入game width/height
         * 2.檢查webgl
         * 3.檢查平台(mobile/pc)
         * 4.定義引擎基本資訊
         * 5.啟動resize
         * 6.啟動螢幕旋轉
         * 7.啟動焦點移入移出偵測
         * 
         */


        beforeinit() {
          var _this = this;

          return _asyncToGenerator(function* () {
            log('fish1_gameMain_beforeinit'); //super.beforeinit();

            return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
              var _this$_coordinate;

              var data;
              var gameSetting = new (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting)(_this._gameType, 1920, 1080); //if(!this._localDebug)
              //{

              data = yield _this.prepareBeforeConnect(_this._gameType); //}else{
              //--這是資料回來的狀態(local需要模擬)

              /**
               * {
               *  analytics_path:"/client/resource/fish/system/analytics"
                  cid: 11
                  deposit_url: ""
                  exit_option: "1"
                  exit_url: ""
                  fish_jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbGllbnQiLCJpYXQiOjE2OTY1NzMxMTQsImV4cCI6MTY5NjYwNTUxNCwidG9rZW4iOiI5YzBkYjg3ZGY5NWIxOTVhNWMzMjMyNDY1OTgwZDUzYiIsImp0aSI6ImpkZGoiLCJkb3VibGVDaGVjayI6eyJjb21wYW55X2lkIjoxMSwidXNlcl9pZCI6NDU2MDUyMzE5fX0.2hotsTKpJuDmpZ6NN0MHL8533AlSH9RZ8NdPRo1qql4"
                  game_type: "38003"
                  gs_subdomain: "ws01:3010"
                  information_path: "/client/resource/information"
                  lang: "zh-cn"
                  props_path: "/client/resource/fish/system/props"
                  rule_path: "/client/resource/fish/game-rule"
                  sid: "6a3b74a65d1ec81494e7dba0176ca9bb"
                  task_path: "/client/resource/fish/system/task"
                  wagers_path: "/bet-record/fish/client/wager"
               * }
               */
              //--不做連線 

              /*
              data=
              {
                  cid:'',
                  exit_option:1,
                  game_type:this._gameType,
                  gs_subdomain:"ws01:3010",
                  lang:"zh-cn",
                  origin_domain:null,
                  rule_path:"/game-rule/help.php",
                  sid:"fee72639f05b00978064c48ed88a64f9",
                  wagers_path:"/bet-record/fish/client/wager"
              }*/
              //}

              log('check_data', data); //data.lang='th';
              //let gameSetting=new CocosGameSetting('2022222',1920,1080);

              (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).isLocal = window.util.general.isLocalTesting();

              if ((_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).isLocal) {
                (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                  error: Error()
                }), CocosGameSetting) : CocosGameSetting).localPathData = window.util.general.getLocalTestDomain('DEV'); //--開發站
                //CocosGameSetting.localPathData=window.util.general.getLocalTestDomain('TEST');--測試站
              }

              (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).host = window.location.hostname;
              (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_Lang = (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).GetGameLang(data.lang); //---正式
              //log('check_dataLanguage',CocosGameSetting.Game_Lang);
              //CocosGameSetting.Game_Lang='en';

              (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_Cid = data.cid; //--

              (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_GsSubdomain = data.gs_subdomain;
              (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_ExitOption = data.exit_option;
              (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_OriginDomain = data.origin_domain;
              (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_RulePath = data.rule_path;
              (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_Sid = data.sid;
              (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_WagersPath = data.wagers_path;
              (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_RulePath = data.rule_path;
              (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_WagersPath = data.wagers_path; //log('check_CocosGameSetting',CocosGameSetting);
              //--要再補Game_OriginDomain-20231220-alan要

              yield (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                error: Error()
              }), i18n) : i18n).init((_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_Lang);
              /**
               * 要拿字典檔裡面的東西這樣用>
               * i18n.t(objname.objvalue)
               * ex i18n.t(Uppercase.MUSIC)
               * 
               * 以純字串送進去可以長這樣
               * i18n.t('Uppercase.MUSIC')
               */

              (_this$_coordinate = _this._coordinate) == null ? void 0 : _this$_coordinate.initNodeContainer(); //let cameraNode=find('Main Camera');
              //let cameraComponent=cameraNode.getComponent(CameraComponent);
              //let resizeTool:ResizeTool=new ResizeTool();

              (_crd && ResizeTool === void 0 ? (_reportPossibleCrUseOfResizeTool({
                error: Error()
              }), ResizeTool) : ResizeTool).getInstance().cameraComponent = find('Main Camera').getComponent(CameraComponent);
              (_crd && ResizeTool === void 0 ? (_reportPossibleCrUseOfResizeTool({
                error: Error()
              }), ResizeTool) : ResizeTool).getInstance().newWidth = 1240;
              (_crd && ResizeTool === void 0 ? (_reportPossibleCrUseOfResizeTool({
                error: Error()
              }), ResizeTool) : ResizeTool).getInstance().originalWidth = (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_Width;
              (_crd && ResizeTool === void 0 ? (_reportPossibleCrUseOfResizeTool({
                error: Error()
              }), ResizeTool) : ResizeTool).getInstance().init();
              resolve();
            }));
          })();
        }
        /**
         * 在這邊建立laodingManager
         * 1.建立loading的過程要移過來這邊做(不要給使用者來處理)
         * 2.使用者要setLoadingQuene
         * 3.使用者保留可以start laoding 的能力
         * 4.以上過程均先在initloading完成,使用者自行override
         * ps-
         * 你也可以override掉整個內容,自己另外介入處理loading的過程
         */


        initloading() {
          log('fish1_gameMain_initloading'); //--for test-20230926-要刪掉initUserViews
          //this.initUserViews();
          //--for test-20230926-要刪掉initUserViews
          //this._loadingManager=LoadingResManager.getInstance();
          //--createLoading--
          //this._loadingManager && this._loadingManager.on(LoadingEvent.ASSETS_IS_READY,this.assetsisReady);

          this._loadingProgress = (_crd && LoadingResProgress === void 0 ? (_reportPossibleCrUseOfLoadingResProgress({
            error: Error()
          }), LoadingResProgress) : LoadingResProgress).getInstance();
          this._loadingProgress && this._loadingProgress.on((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
            error: Error()
          }), LoadingEvent) : LoadingEvent).ASSETS_IS_READY, this.assetsisReady);
          this.setLoadingResourceMap();
        } //--寫入laoding資料--override-


        setLoadingResourceMap() {
          if (this._loadingPageInfo) {
            this._loadingProgress.loadingPageInfo = this._loadingPageInfo;
          }

          if (this._loadingQuene.length > 0) {
            this._loadingProgress.loadingQuene = this._loadingQuene;
          }
        }

        startLoad() {
          this._loadingProgress.startLoading();
        }

        initGuiSystem() {
          /**
          * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
          * 所以function name會被拿掉..很雷20240328
          */
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).LAYOUT_IS_READY, this.layoutisReady, this._classId);
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).LOBBY_IS_READY, this.lobbyIsReady, this._classId); //this._loadingManager.on(LoadingEvent.LAYOUT_IS_READY,this.layoutisReady);
          //--do something
          //--create guisystem---

          this._guiSystem.settingGuiInit();
        }

        //--create sounds
        createSounds() {
          for (var i of this._loadingQuene) {
            if (i.audioId) {
              (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                error: Error()
              }), SoundsManager) : SoundsManager).getInstance().addAudioClip(i.audioId, (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getAudio(i.audioId));
              (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                error: Error()
              }), SoundsManager) : SoundsManager).getInstance().createSound(i.audioId, i.audioId);
            }
          }
        } //--override---


        createBgList() {} //--override---


        playSound() {} //--開始建立你的view--afterlayout


        initUserViews() {
          var _this$_gameLogic, _this$_guiSystem, _this$_aniEffectViewS, _this$_aniEffectViewS2;

          //--這邊要動態塞 node.addComponent(fishSystem);
          //this._fishSystem=new (this.constructor.prototype['_fishSystem'])();
          //this._fishSystem=new (this.constructor as typeof FishGameMain)._fishSystemType();
          //this._bulletSystem=new (this.constructor.prototype['_bulletSystem'])();
          //this._bulletSystem=new (this.constructor as typeof FishGameMain)._bulletSystemType();
          this._fishSystem.init();

          this._fishSystem.coordinateMode = this._gameCoordinatesMode;

          this._bulletSystem.init(); //this._mouseBehavior?.init();


          (_this$_gameLogic = this._gameLogic) == null ? void 0 : _this$_gameLogic.init();
          (_this$_guiSystem = this._guiSystem) == null ? void 0 : _this$_guiSystem.init();
          (_this$_aniEffectViewS = this._aniEffectViewSystem) == null ? void 0 : _this$_aniEffectViewS.init();
          (_this$_aniEffectViewS2 = this._aniEffectViewSystem) == null ? void 0 : _this$_aniEffectViewS2.setCommands();
          /*
          if(this._guiSystem)
          {
              this._guiSystem.init();
          }*/
          //--再從gui裡面call changebullet(看要不要直接從bullet裡面做第一次,Gui裡面自己在做default score)
          //---準備拿資料初始fishsystem and bulletsystem-
          //--準備要初始系統的資料  
          //this._fishSystem=new this._fishSystem();

          this.setCollisionSystem();
          this.setMediatorUsers();
          this.registerUpdate();
          /**
          * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
          * 所以function name會被拿掉..很雷20240328
          */

          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && NotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfNotifycationSubbscriptionSubject({
            error: Error()
          }), NotifycationSubbscriptionSubject) : NotifycationSubbscriptionSubject).AbstractViewModel, '_playerTableId', this.finishTakeSeat, this._classId);
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && NotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfNotifycationSubbscriptionSubject({
            error: Error()
          }), NotifycationSubbscriptionSubject) : NotifycationSubbscriptionSubject).AbstractViewModel, '_cleanAllRoom', this.cleanAllRoom, this._classId);
          this.initGameSystemReady();
        }

        //protected coordinatesChange(strMode:string,tableID:number):void
        coordinatesChange(tableID) {
          log("coordinatesChange_render_mode>>>", this._gameCoordinatesMode, tableID); //this._fishSystem.coordinateMode=strMode;

          if (this._gameCoordinatesMode == (_crd && GameCoordinateMode === void 0 ? (_reportPossibleCrUseOfGameCoordinateMode({
            error: Error()
          }), GameCoordinateMode) : GameCoordinateMode).GameViewMode_Four_in_one) {
            var _this$_coordinate2;

            //rd7部門的版本1920*1080,所以不需要縮放了魚場(showGlobalState)
            //this._coordinate?.showGlobalState();//---顯示4合一的座位(縮小魚場)
            (_this$_coordinate2 = this._coordinate) == null ? void 0 : _this$_coordinate2.setContainerCoordinateMode(tableID);

            this._aniEffectViewSystem.setPlayerTableIndex(tableID - 1);

            this._guiSystem.afterCoordinatesChange(tableID); //--調整砲塔位置
            //---旋轉座位後的砲塔座標－－因為中心點有被改變
            //---這邊的已經依照玩家的所在位置將座標換好了

          } else if (this._gameCoordinatesMode == (_crd && GameCoordinateMode === void 0 ? (_reportPossibleCrUseOfGameCoordinateMode({
            error: Error()
          }), GameCoordinateMode) : GameCoordinateMode).GameViewMode_Four_in_one_noRotation) {
            var _this$_coordinate3;

            //---無旋轉的模式
            //rd7部門的版本1920*1080,所以不需要縮放了魚場(showGlobalState)
            //this._coordinate?.showGlobalState();//---顯示4合一的座位(縮小魚場)
            (_this$_coordinate3 = this._coordinate) == null ? void 0 : _this$_coordinate3.setContainerCoordinateModeNoRotation(tableID);

            this._aniEffectViewSystem.setPlayerTableIndex(tableID - 1);
          }

          this._guiSystem.afterRotationPos(); //--取得調整過後的座標


          this._aniEffectViewSystem.setPositionsInfo(this._guiSystem.getPositionsforGui());

          this._aniEffectViewSystem.setDataAfterSetRoom(); //this._aniEffectViewSystem.setCommands();
          //@ts-ignore
          //let gameVersion=window.game_version;
          //this._guiSystem.setGameLauncherVersionNumber(gameVersion);
          //this._gameLogic.setPlayerIndex();


          this._gameLogic.setAfterInitPlayerSeatData(tableID);
          /**
           * 因為gui和其他的view系統會先建立後,監聽隨之掛載(_playerTableId)
           * 所以fishview就會先收到事件,
           * 在玩家是冰凍狀態進入時,魚群會先更新,之後輪到座標系統收到事件才會旋轉座標.
           * 因此倒置魚的位置始終對不起來
           * 20240315-
           */


          this._fishSystem.setPlayerIdAfterCoordinateMode(tableID);
        }

        initGameSystemReady() {
          this.playSound();

          this._loadingProgress.showLoadingTxt('connect'); //@ts-ignore


          var gameVersion = window.game_version;

          this._guiSystem.setGameLauncherVersionNumber(gameVersion);
          /**
           * 詳見system-info.ts
           * 根據每個瀏覽器送出的焦點事件字串不同
           */

          /*
          game.on(Game.EVENT_HIDE,this.handleVisibilityChangeHide);
           game.on(Game.EVENT_SHOW,this.handleVisibilityChangeShow);
          */


          var hidden, visibilityChange;

          if (typeof document.hidden !== "undefined") {
            // Opera 12.10 and Firefox 18 and later support
            hidden = "hidden";
            visibilityChange = "visibilitychange";
          } else if (typeof document["mozHidden"] !== "undefined") {
            hidden = "mozHidden";
            visibilityChange = "mozvisibilitychange";
          } else if (typeof document['msHidden'] !== "undefined") {
            hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
          } else if (typeof document["webkitHidden"] !== "undefined") {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
          }

          document.addEventListener(visibilityChange, () => {
            this.handleVisibilityChange(document[hidden]);
          }, false);

          if (this._localDebug) {
            this.localDebugGameInit();
          } else {
            this.connect();
          }
        } //--local 的啟動程序(就是寫大廳的資料去啟動大廳啦)


        localDebugGameInit() {
          (_crd && FacadeForGameView === void 0 ? (_reportPossibleCrUseOfFacadeForGameView({
            error: Error()
          }), FacadeForGameView) : FacadeForGameView).getInstance().getClassInstance().sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).InitLocalDebug, {
            playerId: 'hello_localTest',
            playerRoomBase: []
          }, (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).InitLocalDebug);
        }

        handleVisibilityChange(isHidden) {
          if (isHidden) {
            //--mobile斷線
            this.handleVisibilityChangeHide();
          } else {
            //--回復焦點
            this.handleVisibilityChangeShow();
          }
        }

        loseFocusToCloseTimeStemp() {
          var _this$_gameLogic2;

          //--暫停autoshoot
          //--暫停自動使用道具this._autoUsePropCount=0;
          (_this$_gameLogic2 = this._gameLogic) == null ? void 0 : _this$_gameLogic2.loseFocusToCloseTimeStemp();
        }

        reFocusToOpenTimeStemp(dt) {
          var _this$_gameLogic3;

          //--重啟autoshoot
          //--重啟自動使用道具?
          (_this$_gameLogic3 = this._gameLogic) == null ? void 0 : _this$_gameLogic3.reFocusToOpenTimeStemp();
          /**
           * -洗掉場上所有的子彈--
           * 20240301不主動回收子彈(server沒有lifetime)
           */
          //this._bulletSystem?.cleanTable();
          //this._fishSystem?.reSetFishBronTime();
          //--把時間送進去

          (_crd && FacadeForGameView === void 0 ? (_reportPossibleCrUseOfFacadeForGameView({
            error: Error()
          }), FacadeForGameView) : FacadeForGameView).getInstance().getClassInstance().executeModelMethod('resetFocus', dt / 1000);
        }

        setMediatorUsers() {
          this.setViewUser((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
            error: Error()
          }), GameViewMediatorUser) : GameViewMediatorUser).FishView, this._fishSystem);
          this.setViewUser((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
            error: Error()
          }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, this._bulletSystem);
          this.setViewUser((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
            error: Error()
          }), GameViewMediatorUser) : GameViewMediatorUser).CollisionSystemView, this._collisionSystem);
          this.setViewUser((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
            error: Error()
          }), GameViewMediatorUser) : GameViewMediatorUser).AniEffectSystemView, this._aniEffectViewSystem);
          this.setViewUser((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
            error: Error()
          }), GameViewMediatorUser) : GameViewMediatorUser).GameLogicSystem, this._gameLogic);

          if (this._useGuiSystem) {
            this.setViewUser((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
              error: Error()
            }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, this._guiSystem);
          } //--20240416可能要刪掉,因為裡面在setViewUser裡面就會做setMediator


          this._bulletSystem.setMediator(this); //-logic 要 setMediator


          this._gameLogic.setMediator(this);

          this._collisionSystem.setMediator(this);

          this._aniEffectViewSystem.setMediator(this); //--依此類推

        }

        setCollisionSystem() {
          /*
          let gameCollisionSystemNode:Node=new Node('gameCollisionSystemNode');
           this._collisionSystem=gameCollisionSystemNode.addComponent(FishCollisionSystem);
          
          director.addPersistRootNode(gameCollisionSystemNode);//--加到node後才會觸發onload
           log('init_collisionSystem',this._collisionSystem);
           this._collisionSystem.setCollisions('satCollision',FishCollisionBase);
           this._collisionSystem.setStrategys('satCollision',STAcollisionStrategy);
           this._collisionSystem.setMapUseCollision('satCollision',BulletActionType.BULLET_ACTION_PREFAB);
           this._collisionSystem.setMapUseCollision('satCollision',BulletActionType.BULLET_ACTION_DYNAMIC);
           this.setCollisionBannedFishType();
          */
          //-InitCollision
          this._collisionSystem.addCollisions({
            id: (_crd && BaseCollisionType === void 0 ? (_reportPossibleCrUseOfBaseCollisionType({
              error: Error()
            }), BaseCollisionType) : BaseCollisionType).SAT_Collision,
            collisionBaseConstructor: _crd && FishCollisionBase === void 0 ? (_reportPossibleCrUseOfFishCollisionBase({
              error: Error()
            }), FishCollisionBase) : FishCollisionBase,
            strategyConstructor: _crd && STAcollisionStrategy === void 0 ? (_reportPossibleCrUseOfSTAcollisionStrategy({
              error: Error()
            }), STAcollisionStrategy) : STAcollisionStrategy,
            strategyConstructorId: 'STAcollisionStrategy',
            strategyArgs: null,
            collisionBaseArgs: null
          });
          /**
           * 20231029-CollisionKey.BULLET_ACTION_PREFAB=BulletActionType.BULLET_ACTION_PREFAB
           *  與子彈系統的定義相同
           */


          this._collisionSystem.setMapUseCollision((_crd && BaseCollisionType === void 0 ? (_reportPossibleCrUseOfBaseCollisionType({
            error: Error()
          }), BaseCollisionType) : BaseCollisionType).SAT_Collision, (_crd && CollisionKey === void 0 ? (_reportPossibleCrUseOfCollisionKey({
            error: Error()
          }), CollisionKey) : CollisionKey).BULLET_ACTION_PREFAB);

          this._collisionSystem.setMapUseCollision((_crd && BaseCollisionType === void 0 ? (_reportPossibleCrUseOfBaseCollisionType({
            error: Error()
          }), BaseCollisionType) : BaseCollisionType).SAT_Collision, (_crd && CollisionKey === void 0 ? (_reportPossibleCrUseOfCollisionKey({
            error: Error()
          }), CollisionKey) : CollisionKey).BULLET_ACTION_DYNAMIC);

          this._collisionSystem.setMapUseCollision((_crd && BaseCollisionType === void 0 ? (_reportPossibleCrUseOfBaseCollisionType({
            error: Error()
          }), BaseCollisionType) : BaseCollisionType).PICKUP_Collision, (_crd && CollisionKey === void 0 ? (_reportPossibleCrUseOfCollisionKey({
            error: Error()
          }), CollisionKey) : CollisionKey).SELECTION);

          this.setCollisionBannedFishType();
        } //--設定禁止打擊的魚隻type


        setCollisionBannedFishType() {}

        registerUpdate() {
          //--更新啟動
          this._bulletSystem.canUpdate = true;
          this._fishSystem.canUpdate = true;
          this._collisionSystem.canUpdate = true;
          log('registerUpdate');
          director.on(Director.EVENT_AFTER_DRAW, this.afterDraw);
        }

        checkCollisionFrameByFrame() {} //protected update

        /*
        protected lateUpdate():void
        {
            if(this._collisionSystem?.canUpdate)
            {
               //this._collisionSystem.checkCollision();
               this.checkCollisionFrameByFrame();
            } 
        }*/

        /**
         * 
         * @param deltaTime 秒
         */


        update(deltaTime) {
          var _this$_gameLogic4, _this$_bulletSystem;

          //-deltaTime=秒
          //if(this._fishSystem?.canUpdate)
          //log('check_update_deltaTime',deltaTime);
          if (this._fishSystem) {
            this._fishSystem.updateFish(deltaTime);
          }

          if ((_this$_gameLogic4 = this._gameLogic) != null && _this$_gameLogic4.canUpdate) {
            this._gameLogic.updateLockBullets();
          }

          if ((_this$_bulletSystem = this._bulletSystem) != null && _this$_bulletSystem.canUpdate) {
            var updateBulletData = this._bulletSystem.updateAction(deltaTime);

            if (updateBulletData.dead.length > 0) {
              //--生命週期結束
              this._gameLogic.afterUpdateforDeate(updateBulletData.dead);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef93aad2c32f1a2993482f74ce5ca4a04e48c8eb.js.map