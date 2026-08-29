System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GuisCenterFWBase, Notifycation, GuiNotifycationSubbscriptionSubject, GUIEvent, log, GuisSystemView, _crd;

  function _reportPossibleCrUseOfGuisCenterFWBase(extras) {
    _reporterNs.report("GuisCenterFWBase", "../../../game/guiCore/GuisCenterFWBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiBasic(extras) {
    _reporterNs.report("GuiBasic", "../../../game/guiCore/GuiBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifycation(extras) {
    _reporterNs.report("Notifycation", "../../../abstract/mvvm/Notifycation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject(extras) {
    _reporterNs.report("GuiNotifycationSubbscriptionSubject", "../../../game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGUIEvent(extras) {
    _reporterNs.report("GUIEvent", "../../../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventSendObject(extras) {
    _reporterNs.report("EventSendObject", "../../../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableInfo(extras) {
    _reporterNs.report("TableInfo", "../../../game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  _export("GuisSystemView", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      GuisCenterFWBase = _unresolved_2.GuisCenterFWBase;
    }, function (_unresolved_3) {
      Notifycation = _unresolved_3.Notifycation;
    }, function (_unresolved_4) {
      GuiNotifycationSubbscriptionSubject = _unresolved_4.GuiNotifycationSubbscriptionSubject;
    }, function (_unresolved_5) {
      GUIEvent = _unresolved_5.GUIEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8478eVhjRJAFbNa3OmVOWkk", "GuisSystemView", undefined);
      /**
       * Created by EricHuang on 2023/9/27.
       */


      __checkObsolete__(['Node']);

      __checkObsolete__(['log']);

      _export("GuisSystemView", GuisSystemView = class GuisSystemView extends (_crd && GuisCenterFWBase === void 0 ? (_reportPossibleCrUseOfGuisCenterFWBase({
        error: Error()
      }), GuisCenterFWBase) : GuisCenterFWBase) {
        /*---這樣寫會爆
        set playerIndex(value:number)
        {
           super.playerIndex=value;
            this.setDataAfterreadySetPlayerIndex();
        }*/
        constructor() {
          super();
          this._cannonGuiCenter = void 0;
          this._creditExchange = void 0;
          this._menuToolGui = void 0;
          this._autoShootGui = void 0;
          this._gameMessageGui = void 0;
          this._gameLobbyGui = void 0;
          //---以下的做預設
          this._gameIframeGui = void 0;
          this._toolbarGui = void 0;
          //--遊戲提示(無關閉按鈕,時間到自行關閉)
          this._inGameMessageGui = void 0;
          //--錯誤訊息(有關閉按鈕)
          this._systemMessageGui = void 0;

          //--箭頭函式不能override
          this.guiEventHandler = (sub, value) => {
            log('GuiCenterbase_Evt', sub, value[0]);
            this.guiEvtProcessHandler(sub, value); //this.emit(e.type,e);//--應該也沒必要再送出來了
          };

          this._classId = 'GuisSystemView';
        }

        setPlayerIndex(value) {
          this._playerIndex = value;
          this.setDataAfterreadySetPlayerIndex();
        } //--step1(外部啟動)


        settingGuiInit() {
          log('layout@@ settingInit');
          this.setLayoutData(); //this.setJsondata('position');//---目前沒有用到輸出排版
          //this.startLayout();

          this.startProcessing();
        } //--這邊插在連線前完成
        //--這個是在takeseat的時候用的
        //--考慮拿掉


        //--step2 call setLayoutData(override)
        //--重新獲取class並且重新導向變數
        //--step3 
        //override it
        //--注意,在操作時要使用instance的方式來操作或是直接轉型

        /**
        * 這裡要透過this.getClassById('classid')去取得實際的class
        * 1.
         * this._gui=this._gui as Class1;
        * or u can do this
        * 2.
        * if (test instanceof Class1) {
            test.onlyforClass1();
                }
        */
        afterAllGuiComplete() {} //--step4
        //-override it(ps-addEventListener for gui not for guiCneter)


        addEventListener() {
          //--以下監聽的第三個參數指的是target,有填入的話this會變成target..
          //-this.node.on(Node.EventType.TOUCH_START, this.onBtnClick, this);
          //this._cannonGuiCenter.emitter.on(GUIEvent.CHANG_BULLETS,this.guiEventHandler);

          /**
           * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
           * 所以function name會被拿掉..很雷20240328
           */
          //--這邊有些要改到其他的view裡面做處理
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).CREDIT_EXCHANGE_ENTER, this.guiEventHandler, this._classId);
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).CREDIT_EXCHANGE_EXIT, this.guiEventHandler, this._classId);
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).BTN_MUTE, this.guiEventHandler, this._classId);
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).BTN_HELP, this.guiEventHandler, this._classId);
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).BTN_HISTORY, this.guiEventHandler, this._classId); //--現在好像沒有儲值的功能?
          //Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.BTN_DEPOSIT,this.guiEventHandler,this.constructor.name);

          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).OPEN_EXCHANGE, this.guiEventHandler, this._classId);
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).OPEN_EXCHANGE_FIRST, this.guiEventHandler, this._classId);
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).BTN_EXIT, this.guiEventHandler, this._classId);
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).AIM_SHOOT, this.guiEventHandler, this._classId);
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).AUTO_SHOOT, this.guiEventHandler, this._classId);
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).LOCK_DIRECTION_SHOOT, this.guiEventHandler, this._classId);
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).SET_PLAYER_ROOM, this.guiEventHandler, this._classId);
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).SET_PLAYER_ROOM_EXIT, this.guiEventHandler, this._classId);
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).ALERT_CLOSE, this.guiEventHandler, this._classId);
        }

        guiEvtProcessHandler(sub, value) {
          log('guiEvtProcessHandler', sub, value[0]);

          switch (sub) {
            case (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).CREDIT_EXCHANGE_ENTER:
              this.creditExchangeEnterGame(value[0]); //--這裡要改
              //this.setCreditExchangePanelActive(false);

              break;

            case (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).CREDIT_EXCHANGE_EXIT:
              this.banlaceExchange();
              break;

            case (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).SET_PLAYER_ROOM:
              this.lobbySetPlayerRoom(value[0]);
              break;

            case (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).SET_PLAYER_ROOM_EXIT:
              this.lobbySetPlayerRoomExit(value[0]);
              break;

            case (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).OPEN_EXCHANGE:
              this.openCreditExchange();
              break;
          }
        }

        getPositionsforGui() {
          return this._positionInfo;
        } //--提取完相關座標資訊後會再call setPlayerInfoCoordinate
        //--這個也是阿(takeseat之後用的)


        setGuiDataInfo(value) {
          log('after_table', value); //--會先set playerIndex(1-4)--setPlayerInfoCoordinate
          //--再取座標資訊--coordinatesChange
          //this._playerIndex=value.playerIndex;//--1-4
          //this.playerIndex=value.playerIndex;//--1-4(去啟動setter方法)--這樣寫在mobile平台會爆炸

          this.setPlayerIndex(value.playerIndex); //-1-4

          /**
           * --這個要旋轉後再拿
           * positions-->砲管出口的位置
           * coniEndinfo--->也是金幣的位置--
           * exchangePositions--->玩家分數顯示框資訊
           * mountPositions-->所有玩家mount資料--20230315新增
           */

          /*
          this._positionInfo={
              positions:this.getGunContainerPosition(),
              playerPositions:this.getALLPlayerPositions(),
              coniEndinfo:this.getCreditCoinPosition(),
              exchangePositions:this.getPlayerTextDigitsInfoData(),
              mountPositions:this.getCannonMountPositions()
          }
          log('chek_guiPositionData',this._positionInfo,this._playerIndex);
          */

          this.useInfoDataGui();
        }

        afterRotationPos() {
          /**
           * --這個要旋轉後再拿
           * positions-->砲管出口的位置
           * coniEndinfo--->也是金幣的位置--
           * exchangePositions--->玩家分數顯示框資訊
           * mountPositions-->所有玩家mount資料--20230315新增
           */
          this._positionInfo = {
            positions: this.getGunContainerPosition(),
            playerPositions: this.getALLPlayerPositions(),
            coniEndinfo: this.getCreditCoinPosition(),
            exchangePositions: this.getPlayerTextDigitsInfoData(),
            mountPositions: this.getCannonMountPositions(),
            menuPositions: this.getMenuPositions()
          };
          log('chek_guiPositionData', this._positionInfo, this._playerIndex);
        }

        useInfoDataGui() {
          //---這邊是已經進遊戲後(GUI被初始後),GUI需要玩家相關資訊做後續變動
          this.setPlayerInfoCoordinate(this._playerIndex);
        } //======setDataAfterreadySetPlayerIndex=========
        //======openAnimation=========
        //=======cannon===================================================================

        /**
        *override it 
        * @returns 取得玩家炮管的座位位置,作為動畫顯示的依據座標
        * 原本的getGunLocat():{x:number , y:number}[]方法
        */

        /**
         * override it 
         * @returns 玩家砲塔座位座標
         */

        /**
         * 取得使用者:"金幣"圖片座標位置和長寬
         * 在前幾代是取玩家砲管資訊上面的金幣圖案位置,作為金幣噴出飛回來的座標
         * 在第6代是採取飛回砲管正中間
         * 記得要toLocal回去喔~~~~
         * PS-回傳的參數都是global
         * 
         *  //return [{x:0 , y:0 , width:0 , height:0},{x:0 , y:0 , width:0 , height:0},{x:0 , y:0 , width:0 , height:0},{x:0 , y:0 , width:0 , height:0}];
            //return this._gunGui.getCreditLocat();
            //return this._cannonGuiCenter.getCreditCoinPosition();
         * override it
        */

        /**
        * @returns 座位的<玩家分數顯示框的資訊(座標(global)/寬高)>
        * override it
        */

        /**
        * override it
        * @returns 取得所有cannonMount相關資訊(座標/寬高)
        */

        /**
         * 旋轉前準備(中心座標的偏移之類的--上下位置會有不同)
         * @param tableId 1-4
         */
        //=======cannon===================================================================
        //========menu=====================================================================
        //--取得其他必要menu的座標資料
        //========menu=====================================================================
        //========lobby==========================================================================


        checkLobbyStatus() {
          let f = true;

          if (this._gameLobbyGui == null) {
            f = false;
          }

          return f; //---因為第三代是等取得loginbysid後再create lobby(泰文換到爽的版本,不需要直接建立lobby)
        } //--這邊要改成protected--因為由server 回call來關閉?20230927


        removeLobby() {
          this._gameLobbyGui.off((_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).SET_PLAYER_ROOM, this.guiEventHandler);

          this._gameLobbyGui.off((_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).SET_PLAYER_ROOM_EXIT, this.guiEventHandler);

          this._gameLobbyGui.remove();

          this.removeClassById(this._gameLobbyGui.name);
          this._gameLobbyGui = null;
        } //========lobby==========================================================================
        //========creditExchange panel===========================================================
        //protected abstract setCreditExchangePanelActive(value:boolean):void
        //{
        //this._creditExchange.active=value;
        //}
        //========creditExchange panel===========================================================


      });

      GuisSystemView._webView_key_rule = 'webview_rule';
      GuisSystemView._webView_key_history = 'webview_history';
      //---以上的做預設
      GuisSystemView.BGMask = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fafa9f90211a6703065717062e2b51b5dcc9d08e.js.map