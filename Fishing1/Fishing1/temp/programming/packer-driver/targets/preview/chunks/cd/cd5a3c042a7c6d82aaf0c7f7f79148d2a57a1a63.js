System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, FacadeForGameView, Notifycation, NotifycationSubbscriptionSubject, PropertyDecorator, log, AbstractView, _crd, viewBind;

  function viewfun(viewModelId) {
    return function (target) {
      target.prototype._vmId = viewModelId;
    };
  }

  function _reportPossibleCrUseOfAbstractViewModel(extras) {
    _reporterNs.report("AbstractViewModel", "./AbstractViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacadeForGameView(extras) {
    _reporterNs.report("FacadeForGameView", "./Facade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSchedulableTool(extras) {
    _reporterNs.report("SchedulableTool", "./SchedulableTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifycation(extras) {
    _reporterNs.report("Notifycation", "./Notifycation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifycationSubbscriptionSubject(extras) {
    _reporterNs.report("NotifycationSubbscriptionSubject", "./Notifycation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMediatorViewUser(extras) {
    _reporterNs.report("MediatorViewUser", "./Mediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMediator(extras) {
    _reporterNs.report("GameMediator", "./Mediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropertyDecorator(extras) {
    _reporterNs.report("PropertyDecorator", "../PropertyDecorator", _context.meta, extras);
  }

  _export({
    AbstractView: void 0,
    viewfun: viewfun
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
    }, function (_unresolved_3) {
      Notifycation = _unresolved_3.Notifycation;
      NotifycationSubbscriptionSubject = _unresolved_3.NotifycationSubbscriptionSubject;
    }, function (_unresolved_4) {
      PropertyDecorator = _unresolved_4.PropertyDecorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce2f5qOw6tH07+XKsbHwnWA", "AbstractView", undefined);
      /**
       * Created by EricHuang on 2023/9/06.
       */


      __checkObsolete__(['Component']);

      __checkObsolete__(['ISchedulable']);

      //import { Notifycation,NotifycationSubbscriptionSubject} from "./Notifycation";
      __checkObsolete__(['log']);

      _export("AbstractView", AbstractView = class AbstractView extends Component {
        get schedulableTool() {
          return this._schedulableTool;
        }

        //--wtf..沒用到?
        constructor() {
          super();
          this._viewModel = void 0;
          this._gameMediator = void 0;
          this._vmId = void 0;
          this._schedulableTool = void 0;
          this._classId = void 0;
          this.id = void 0;

          /**
           * override it
           * 你可以將sub當作key值,switch case他來做相關的處理
           * @param sub 屬性變數的字串
           * @param value 傳送的資料
           */
          this.modeleChangeHandler = (sub, value) => {};

          this.id = '';
          this._classId = '';
        }

        onLoad() {
          this._viewModel = (_crd && FacadeForGameView === void 0 ? (_reportPossibleCrUseOfFacadeForGameView({
            error: Error()
          }), FacadeForGameView) : FacadeForGameView).getInstance().getClassInstance();
          log('testAbstractView_onLoad', this._viewModel);
          log('check_viewBind!!', this.constructor['viewBinds']); //--有綁定資料的情況下直接掛上監聽

          if (this.constructor['viewBinds']) {
            this.initRegisterNotifyFromVM();
          }
        } //--註冊你要聽的VM資料回傳事件(從notify拿)---使用者自己監聽

        /**
         * view 每new一個就會產生一個,只有vm和model是單一實體
         * 所以就讓使用view的使用者去override掉modeleChangeHandler
         */


        initRegisterNotifyFromVM() {
          //Notifycation.getInstance().on(NotifycationSubbscriptionSubject.AbstractViewModel,'事件名稱',callbackfun,observerID=你的classID)
          for (var i of this.constructor['viewBinds']) {
            if (i != undefined && i != null) {
              log('check_initRegisterNotifyFromVM', this._classId, i, this.constructor.name);
              /**
               * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
               * 所以function name會被拿掉..很雷20240328
               */

              (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
                error: Error()
              }), Notifycation) : Notifycation).getInstance().on((_crd && NotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfNotifycationSubbscriptionSubject({
                error: Error()
              }), NotifycationSubbscriptionSubject) : NotifycationSubbscriptionSubject).AbstractViewModel, i, this.modeleChangeHandler, this._classId);
            }
          }
        }

        /**
         *  this._gameMediator.getViewUserData(viewid,viewfunkey,funvalue)--
         * @param mediator 塞入中介者,你可以反過來藉由中介者的方法去拿別的view的資料
         */
        setMediator(mediator) {
          this._gameMediator = mediator;
        } //---interface 別的view拿你的資料

        /**
         * view向中介者拿其他view的資料會執行
         * @param dataKey 用來分辨要拿啥資料
         * @param value 用來給拿資料需要的參數
         */

        /**
         * 中介者要統一執行view的方法會用
         * @param value 用來分辨要執行哪個方法
         */


      });

      _export("viewBind", viewBind = (_crd && PropertyDecorator === void 0 ? (_reportPossibleCrUseOfPropertyDecorator({
        error: Error()
      }), PropertyDecorator) : PropertyDecorator).bind(null, 'viewBinds'));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cd5a3c042a7c6d82aaf0c7f7f79148d2a57a1a63.js.map