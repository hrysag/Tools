System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GuiNotifycationSubbscriptionSubject, Notifycation, GuiBasic, AbstractView, GUIEvent, GuisCenterFWBase, _crd;

  function _reportPossibleCrUseOfIfGuiCore(extras) {
    _reporterNs.report("IfGuiCore", "./GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfGui(extras) {
    _reporterNs.report("IfGui", "./GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject(extras) {
    _reporterNs.report("GuiNotifycationSubbscriptionSubject", "./GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifycation(extras) {
    _reporterNs.report("Notifycation", "../../abstract/mvvm/Notifycation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiBasic(extras) {
    _reporterNs.report("GuiBasic", "./GuiBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiOption(extras) {
    _reporterNs.report("GuiOption", "./GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractView(extras) {
    _reporterNs.report("AbstractView", "../../abstract/mvvm/AbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGUIEvent(extras) {
    _reporterNs.report("GUIEvent", "../../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventSendObject(extras) {
    _reporterNs.report("EventSendObject", "../../game/events/eventBase", _context.meta, extras);
  }

  _export("GuisCenterFWBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GuiNotifycationSubbscriptionSubject = _unresolved_2.GuiNotifycationSubbscriptionSubject;
    }, function (_unresolved_3) {
      Notifycation = _unresolved_3.Notifycation;
    }, function (_unresolved_4) {
      GuiBasic = _unresolved_4.GuiBasic;
    }, function (_unresolved_5) {
      AbstractView = _unresolved_5.AbstractView;
    }, function (_unresolved_6) {
      GUIEvent = _unresolved_6.GUIEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4fa20pjNwlKOb7Qk8HVwIJp", "GuisCenterFWBase", undefined);
      /**
       * Created by EricHuang on 2023/9/18.
       * 
       */


      //export abstract class GuisCenterFWBase <TifGui extends IfGui,Uinitdata extends GuiOption>extends EventTarget implements IfGuiCore<TifGui,Uinitdata> {
      //export abstract class GuisCenterFWBase <TifGui extends IfGui,Uinitdata extends GuiOption>extends AbstractView implements IfGuiCore<TifGui,Uinitdata> {
      _export("GuisCenterFWBase", GuisCenterFWBase = class GuisCenterFWBase extends (_crd && AbstractView === void 0 ? (_reportPossibleCrUseOfAbstractView({
        error: Error()
      }), AbstractView) : AbstractView) {
        set playerIndex(value) {
          this._playerIndex = value;
        }

        constructor() {
          super();
          //public _aryLayoutData:{id:string,class:TifGui,initData:Uinitdata,immediateSendEvt:boolean,cloneId?:string}[];
          this._aryLayoutData = void 0;
          this._positionInfo = void 0;
          this._playerIndex = void 0;
          GuisCenterFWBase.aryMapGuiClass = {};
          this._aryLayoutData = [];
          this._playerIndex = -1;
          this.createGuiNotifycationSubject();
        } //============interface=======================================================
        //--T約束一定要實現IfGui介面,U約束一定要實現GuiOption type
        //{id:string,class:TifGui,initData:Uinitdata,immediateSendEvt:boolean,cloneId?:string}
        //{id:string,class:T,initData:U,immediateSendEvt:boolean,cloneId?:string}
        //public setLayoutData<T extends TifGui,U extends Uinitdata>(value?:{id:string,class:T,initData:U,immediateSendEvt:boolean,cloneId?:string}[]):void


        setLayoutData(value) {
          if (value != undefined) {
            this._aryLayoutData = value;
          }
        }

        createGuiNotifycationSubject() {
          for (const key in _crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent) {
            if (typeof (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent)[key] === 'string') {
              (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
                error: Error()
              }), Notifycation) : Notifycation).getInstance().addSubbscriptionSubject((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
                error: Error()
              }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent)[key]);
            }
          }
        }

        async startLayout() {
          /**
           * 這邊要修,要把return promise完成,這樣startProcessing
           * 裡面的then才有意義
           */
          for (const i of this._aryLayoutData) {
            if (!(GuisCenterFWBase.aryMapGuiClass[i.id] instanceof (_crd && GuiBasic === void 0 ? (_reportPossibleCrUseOfGuiBasic({
              error: Error()
            }), GuiBasic) : GuiBasic))) {
              // @ts-ignore
              let cla = new i.class();
              cla.name = i.id; //canvasNode.addChild(cla);
              //let cla=instantiate(i.class);

              cla.setData(i.initData);
              cla.init();
              await cla.execute();

              if (i.immediateSendEvt) {
                //this.sendEvt(GUIEvent.SINGLE_UI_IS_READY,new GUIEvent(GUIEvent.SINGLE_UI_IS_READY,i.id));
                //this.node.emit(GUIEvent.SINGLE_UI_IS_READY,{evtId:GUIEvent.SINGLE_UI_IS_READY,sendObj:i.id});
                this.sendEvt((_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                  error: Error()
                }), GUIEvent) : GUIEvent).SINGLE_UI_IS_READY, {
                  type: (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                    error: Error()
                  }), GUIEvent) : GUIEvent).SINGLE_UI_IS_READY,
                  sendObj: i.id
                });
              }
            }
          }
        }
        /**
         * 
         * @param evtId sub notify的副主題
         * @param sendObject 
         */


        sendEvt(evtId, sendObject) {
          //---用notify送
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().emit((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, evtId, sendObject);
        } //--setting the data(json/costum class) of layout


        startProcessing() {
          this.startLayout().then(() => {
            this.afterAllGuiComplete();
            this.addEventListener(); //---send all layoutcomplete
            //this.sendEvt(GUIEvent.LAYOUT_IS_READY,new GUIEvent(GUIEvent.LAYOUT_IS_READY));
            //this.node.emit(GUIEvent.LAYOUT_IS_READY,{evtId:GUIEvent.LAYOUT_IS_READY});

            this.sendEvt((_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).LAYOUT_IS_READY); //--clean-

            this._aryLayoutData.length = 0;
            this._aryLayoutData = null;
          });
        }

        getClassById(classId) {
          //---找不到的情況下外面要再判斷處理
          return GuisCenterFWBase.aryMapGuiClass[classId];
        }

        removeClassById(classId) {
          delete GuisCenterFWBase.aryMapGuiClass[classId];
        } //--這邊插在連線前完成
        //abstract initGuiData(value?:any):void
        //--這個是在takeseat的時候用的
        //abstract setRoomData():void//--考慮拿掉
        //--提取完相關座標資訊後會再call setPlayerInfoCoordinate
        //--這個也是阿(takeseat之後用的)
        //override it
        //-override it(ps-addEventListener for gui not for guiCneter)


        //--外部盡量不要直接使用 setPlayerInfoCoordinate...
        //abstract setPlayerInfoCoordinate(tableId:number):void
        //======給其他平行的view拿資料用的(透過mediator去拿)
        //--interface abstract
        getData(dataKey, value) {} //--interface abstract


        excute(value) {}

      });

      GuisCenterFWBase.aryMapGuiClass = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac1f2a9c3893e08fd682f13ba949ea6edf1c1b18.js.map