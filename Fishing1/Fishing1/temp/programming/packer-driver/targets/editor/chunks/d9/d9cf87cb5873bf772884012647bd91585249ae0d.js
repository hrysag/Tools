System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Notifycation, PropType, Fish1LobbyGuiView, Fish1CannonGuiView, Fish1MenuGuiView, Fish1CreditExchangeGuiView, Fish1PropGuiView, Fish1AutoShootGuiView, IframeGuiView, ToolBarGuiView, SystemMessageGuiView, InGameMessageGuiView, viewBind, GUIEvent, GuiNotifycationSubbscriptionSubject, ServerSendCode, ServerResCode, GameViewMediatorUserDataKey, GameViewMediatorUser, Node, Layers, instantiate, LoadingResManager, SoundsManager, GuisSystemView, CocosGameSetting, i18n, log, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, Fish1GuisSystemView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfNotifycation(extras) {
    _reporterNs.report("Notifycation", "../../../framework/abstract/mvvm/Notifycation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableInfo(extras) {
    _reporterNs.report("TableInfo", "../../../framework/game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfGui(extras) {
    _reporterNs.report("IfGui", "../../../framework/game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiOption(extras) {
    _reporterNs.report("GuiOption", "../../../framework/game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddbullet(extras) {
    _reporterNs.report("addbullet", "./../../model/Fish1ModelDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropType(extras) {
    _reporterNs.report("PropType", "./../../model/Fish1ModelDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1LobbyGuiView(extras) {
    _reporterNs.report("Fish1LobbyGuiView", "./guis/Fish1LobbyGuiView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1CannonGuiView(extras) {
    _reporterNs.report("Fish1CannonGuiView", "./guis/Fish1CannonGuiView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1MenuGuiView(extras) {
    _reporterNs.report("Fish1MenuGuiView", "./guis/Fish1MenuGuiView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1CreditExchangeGuiView(extras) {
    _reporterNs.report("Fish1CreditExchangeGuiView", "./guis/Fish1CreditExchangeGuiView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1PropGuiView(extras) {
    _reporterNs.report("Fish1PropGuiView", "./guis/Fish1PropGuiView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1AutoShootGuiView(extras) {
    _reporterNs.report("Fish1AutoShootGuiView", "./guis/Fish1AutoShootGuiView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIframeGuiView(extras) {
    _reporterNs.report("IframeGuiView", "../../../framework/logic/views/guisSystemView/basicGuis/IframeGuiView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToolBarGuiView(extras) {
    _reporterNs.report("ToolBarGuiView", "../../../framework/logic/views/guisSystemView/basicGuis/ToolBarGuiView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemMessageGuiView(extras) {
    _reporterNs.report("SystemMessageGuiView", "../../../framework/logic/views/guisSystemView/basicGuis/SystemMessageGuiView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInGameMessageGuiView(extras) {
    _reporterNs.report("InGameMessageGuiView", "../../../framework/logic/views/guisSystemView/basicGuis/InGameMessageGuiView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewBind(extras) {
    _reporterNs.report("viewBind", "../../../framework/abstract/mvvm/AbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventSendObject(extras) {
    _reporterNs.report("EventSendObject", "../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGUIEvent(extras) {
    _reporterNs.report("GUIEvent", "../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject(extras) {
    _reporterNs.report("GuiNotifycationSubbscriptionSubject", "../../../framework/game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerSendCode(extras) {
    _reporterNs.report("ServerSendCode", "../../../framework/logic/connect/ConnectBaseDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerResCode(extras) {
    _reporterNs.report("ServerResCode", "../../../framework/logic/connect/ConnectBaseDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUserDataKey(extras) {
    _reporterNs.report("GameViewMediatorUserDataKey", "../../../framework/logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUser(extras) {
    _reporterNs.report("GameViewMediatorUser", "../../../framework/logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundsManager(extras) {
    _reporterNs.report("SoundsManager", "../../../framework/logic/audio/SoundsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuisSystemView(extras) {
    _reporterNs.report("GuisSystemView", "../../../framework/logic/views/guisSystemView/GuisSystemView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosGameSetting(extras) {
    _reporterNs.report("CocosGameSetting", "../../../framework/utils/CocosGameSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfi18n(extras) {
    _reporterNs.report("i18n", "../../../framework/utils/i18n/LanguageData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Layers = _cc.Layers;
      instantiate = _cc.instantiate;
      log = _cc.log;
    }, function (_unresolved_2) {
      Notifycation = _unresolved_2.Notifycation;
    }, function (_unresolved_3) {
      PropType = _unresolved_3.PropType;
    }, function (_unresolved_4) {
      Fish1LobbyGuiView = _unresolved_4.Fish1LobbyGuiView;
    }, function (_unresolved_5) {
      Fish1CannonGuiView = _unresolved_5.Fish1CannonGuiView;
    }, function (_unresolved_6) {
      Fish1MenuGuiView = _unresolved_6.Fish1MenuGuiView;
    }, function (_unresolved_7) {
      Fish1CreditExchangeGuiView = _unresolved_7.Fish1CreditExchangeGuiView;
    }, function (_unresolved_8) {
      Fish1PropGuiView = _unresolved_8.Fish1PropGuiView;
    }, function (_unresolved_9) {
      Fish1AutoShootGuiView = _unresolved_9.Fish1AutoShootGuiView;
    }, function (_unresolved_10) {
      IframeGuiView = _unresolved_10.IframeGuiView;
    }, function (_unresolved_11) {
      ToolBarGuiView = _unresolved_11.ToolBarGuiView;
    }, function (_unresolved_12) {
      SystemMessageGuiView = _unresolved_12.SystemMessageGuiView;
    }, function (_unresolved_13) {
      InGameMessageGuiView = _unresolved_13.InGameMessageGuiView;
    }, function (_unresolved_14) {
      viewBind = _unresolved_14.viewBind;
    }, function (_unresolved_15) {
      GUIEvent = _unresolved_15.GUIEvent;
    }, function (_unresolved_16) {
      GuiNotifycationSubbscriptionSubject = _unresolved_16.GuiNotifycationSubbscriptionSubject;
    }, function (_unresolved_17) {
      ServerSendCode = _unresolved_17.ServerSendCode;
      ServerResCode = _unresolved_17.ServerResCode;
    }, function (_unresolved_18) {
      GameViewMediatorUserDataKey = _unresolved_18.GameViewMediatorUserDataKey;
      GameViewMediatorUser = _unresolved_18.GameViewMediatorUser;
    }, function (_unresolved_19) {
      LoadingResManager = _unresolved_19.LoadingResManager;
    }, function (_unresolved_20) {
      SoundsManager = _unresolved_20.SoundsManager;
    }, function (_unresolved_21) {
      GuisSystemView = _unresolved_21.GuisSystemView;
    }, function (_unresolved_22) {
      CocosGameSetting = _unresolved_22.CocosGameSetting;
    }, function (_unresolved_23) {
      i18n = _unresolved_23.i18n;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a680HbCsFPDptKc+iZTy7o", "Fish1GuisSystemView", undefined);
      /**
       * Created by EricHuang on 2023/9/28.
       */
      //import {viewfun,viewBind} from '../../../framework/abstract/mvvm/AbstractView';


      __checkObsolete__(['find', 'Intersection2D', 'Vec2', 'Node', 'Layers', 'instantiate']);

      //@viewfun('Fish1VM')
      __checkObsolete__(['log']);

      _export("Fish1GuisSystemView", Fish1GuisSystemView = (_dec = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec2 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec3 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec4 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec5 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec6 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec7 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec8 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec9 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec10 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec11 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec12 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec13 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec14 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec15 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, (_class = class Fish1GuisSystemView extends (_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
        error: Error()
      }), GuisSystemView) : GuisSystemView) {
        constructor() {
          super();

          //-要監聽model資料改變的變數(名稱與model相同)
          _initializerDefineProperty(this, "_lobbyData", _descriptor, this);

          _initializerDefineProperty(this, "_roomTableInfo", _descriptor2, this);

          //@viewBind _cleanAllRoom:boolean;
          _initializerDefineProperty(this, "_addbullets", _descriptor3, this);

          _initializerDefineProperty(this, "_getMatchineDetial", _descriptor4, this);

          _initializerDefineProperty(this, "_exchangePlayerCredit", _descriptor5, this);

          // 可用分數(第一次進房間更新用的)
          _initializerDefineProperty(this, "_base", _descriptor6, this);

          // 寫匯率
          _initializerDefineProperty(this, "_props", _descriptor7, this);

          // 道具
          _initializerDefineProperty(this, "_useProp", _descriptor8, this);

          // 使用道具
          _initializerDefineProperty(this, "_propRunData", _descriptor9, this);

          // 道具啟動用
          _initializerDefineProperty(this, "_roomStatus", _descriptor10, this);

          //--改變房間的狀態(道具使用)
          _initializerDefineProperty(this, "_wagersID", _descriptor11, this);

          //--局號
          _initializerDefineProperty(this, "_errorCode", _descriptor12, this);

          //--錯誤訊息
          _initializerDefineProperty(this, "_inGameMessage", _descriptor13, this);

          //--系統通知(server)訊息
          _initializerDefineProperty(this, "_pingInfo", _descriptor14, this);

          //--ping info
          _initializerDefineProperty(this, "_exchangeRatio", _descriptor15, this);

          //--_exchangeRatio
          //@viewBind _autoCreditExchange;//--auto exchange 沒有要聽異動的事件可以不用註冊了
          //@viewBind _autoCreditMoney;//--auto exchange
          //public static BGMask:Node;
          this._propGui = void 0;
          this._firstOpen = void 0;
          //--檢查是否第一次展開開洗分面板(自動開洗分的)
          this._openExchangePanel = void 0;
          //--由選單開啟開洗分按鈕
          this._rebuildFlag = void 0;

          /**
           * 20240111
           * 因為server送<房間狀態>的順序在<更新房間玩家資訊>之前
           * 會導致玩家的座位尚未被設定的情況,缺乏_playerIndex的資料
           * 所以用這個來紀錄是否需要變更roomstatu的情況下,_playerIndex還沒準備好.
           * 如果=true(準備好),=false(還沒準備好)
           * 在資料異動後,回過頭來再檢查一次房間狀態再作後續變更
           */
          this._flagReadySetPlayerIndex = void 0;

          //===========server respond================================================================

          /**
          * override it
          * 你可以將sub當作key值,switch case他來做相關的處理
          * @param sub 屬性變數的字串
          * @param value 傳送的資料
          */
          this.modeleChangeHandler = (sub, value) => {
            log('modeleChangeHandler_guisSystemView_', sub, value);

            switch (sub) {
              case '_lobbyData':
                //--create lobby
                log('lobby_serverResBack');
                this.createLobby(value[0].playerRoomBase, value[0].loginName);
                (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
                  error: Error()
                }), Notifycation) : Notifycation).getInstance().emit((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
                  error: Error()
                }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                  error: Error()
                }), GUIEvent) : GUIEvent).LOBBY_IS_READY);
                break;

              case '_roomTableInfo':
                log('_firstTakeSeatData_serverResBack', value); //--只要有玩家進桌就會送近來

                this.setRoomData(value[0].tables);

                if (!value[0].firstIntoRoom) {
                  //--第一次進桌
                  this.setGuiDataInfo({
                    playerIndex: this._viewModel['_playerTableId'] + 1
                  }); //--1-4
                  //let gunType:string=this.changeBulletStyle(roomData.gun,roomData.table-1);
                  //log('checkChangeData',this._viewModel['_playerTableId'],this._viewModel['_defualtGunValue']);

                  let gunType = this._cannonGuiCenter.changeBulletStyle(this._viewModel['_playerTableId'], this._viewModel['_defualtGunValue']);

                  if (gunType != "" && gunType != undefined) {
                    //--送事件出去
                    log('changeBullet@@');
                    (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
                      error: Error()
                    }), Notifycation) : Notifycation).getInstance().emitSync((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
                      error: Error()
                    }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                      error: Error()
                    }), GUIEvent) : GUIEvent).CHANG_BULLETS, gunType);
                  }
                }

                break;
              //case '_addbullets':
              //log('fish1Gui__addbullets',value[0]);
              //--20240205你這樣直接轉同時轉換座標還在處理當然會不准
              //(<Fish1CannonGuiView>this._cannonGuiCenter).rotationCannon(value[0].siteIndex,value[0].info.endX,value[0].info.endY);
              //break;

              case '_getMatchineDetial':
                log('fish1Gui__getMatchineDetial', value[0]);

                if (value[0]) {
                  log('loginName', this._viewModel['_loginName'], '_base', this._viewModel['_base'], '_balance', this._viewModel['_balance']); //Fish1GuisSystemView.BGMask

                  /**
                   * 20240129--目前沒有做泰文換到爽的體系
                   */

                  if (!this._firstOpen) {
                    this._firstOpen = true;
                    this._openExchangePanel = false;
                    this._creditExchange.base = this._viewModel['_base'];

                    this._creditExchange.updateOpenInfo(this._viewModel['_balance'], this._viewModel['_credit'], this._viewModel['_autoCreditExchange'] //--要再確認autoCredit 是否開啟自動換分
                    );
                  } else {
                    //--this._openExchangePanel是否開啟自動換分的面板
                    //--_autoCreditExchange是否自動換分
                    //--_balance餘額
                    log('check__autoCreditExchange', this._viewModel['_autoCreditExchange'] + '\n', '_balance', this._viewModel['_balance'] + '\n', '_openExchangePanel', this._openExchangePanel);

                    if (this._viewModel['_autoCreditExchange'] && this._viewModel['_balance'] > 0 && !this._openExchangePanel) {
                      //--開洗分面板沒開,且餘額充足+要使用自動開洗分
                      //--點擊區要先上鎖--20231228待補
                      //-(<GameSystemMode.PlayerMode>this._gamePlaySystem).blockALL();--old
                      //--
                      //log('checkAutoShoot',(<Fish1AutoShootGuiView>this._autoShootGui).isAutoShoot);

                      /**
                       *
                       * 玩家沒錢打出一發子彈的情況下才會允許換分(去擋掉短時間內快速點擊要自動換分)
                       * 但是在autoshoot當中則不會檢查
                       */
                      let checkCanExchange = true; //---沒錢就直接換了20240312

                      /*
                      if(!(<Fish1AutoShootGuiView>this._autoShootGui).isAutoShoot)
                      {
                          checkCanExchange=this.checkPlayerCreditCanAutoExchange();
                      }*/

                      if (checkCanExchange) {
                        this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                          error: Error()
                        }), GameViewMediatorUser) : GameViewMediatorUser).GameLogicSystem, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                          error: Error()
                        }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).GameLogic_blockALL);

                        let checkAmount = this.checkPlayerAutoExchange();

                        if (checkAmount > 0) {
                          if (!this._viewModel['_firstgetAutoCreditExchange']) {
                            //--第一次預設值=true,且只能是500-50000-50000
                            this._viewModel['_autoCreditExchange'] = true;
                            /**
                             * 第一次都沒有選擇金額兌換的情況下,checkAmount會給預設值500
                             * 並且寫入
                             */

                            if (this._viewModel['_autoCreditMoney'] <= 0) {
                              this._viewModel['_autoCreditMoney'] = checkAmount;
                            } //this._viewModel['_autoCreditMoney']=500;

                          }

                          log('check__onCreditExchange', this._viewModel['_onCreditExchange']); //--確保開洗分流程完成才可以進行下一輪

                          if (this._viewModel['_onCreditExchange']) {
                            this._viewModel['_onCreditExchange'] = false;
                            let ratio = this._viewModel['_base']; //log('check_autoExchangeRatio',ratio);

                            let messageData = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                              error: Error()
                            }), i18n) : i18n).t('MSG.WAIT_EXCHANGING');
                            this.showGameMessage(messageData, 'MSG.WAIT_EXCHANGING');
                            this._viewModel['_firstgetAutoCreditExchange'] = true; //--直接幫他換錢

                            this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
                              error: Error()
                            }), ServerSendCode) : ServerSendCode).Exchange, {
                              p: checkAmount,
                              r: ratio
                            }, //--Exchange--->p=換分分數,r=換分比(string)--換分比,model裡面做掉
                            (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                              error: Error()
                            }), ServerResCode) : ServerResCode).Exchange);
                          }
                        } else {
                          //--沒錢啦
                          this.showGameMessage((_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                            error: Error()
                          }), i18n) : i18n).t('MSG.BALANCE_IS_NOT_ENOUGH'), 'MSG.BALANCE_IS_NOT_ENOUGH'); //---更新餘額,打開開洗分面板
                          //- (<GameSystemMode.PlayerMode>this._gamePlaySystem).unBlock();

                          this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                            error: Error()
                          }), GameViewMediatorUser) : GameViewMediatorUser).GameLogicSystem, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                            error: Error()
                          }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).GameLogic_unBlockALL);

                          this._openExchangePanel = false;

                          this._creditExchange.updateOpenInfo(this._viewModel['_balance'], this._viewModel['_credit'], this._viewModel['_autoCreditExchange'] //--要再確認autoCredit 是否開啟自動換分
                          );
                        }
                      }
                    } else {
                      this._openExchangePanel = false;

                      this._creditExchange.updateOpenInfo(this._viewModel['_balance'], this._viewModel['_credit'], this._viewModel['_autoCreditExchange'] //--要再確認autoCredit 是否開啟自動換分
                      );
                    }
                  }
                }

                break;

              case '_exchangePlayerCredit':
                log('fish1_gui__exchangePlayerCredit', value[0]);

                this._cannonGuiCenter.changeScore(value[0].credits);

                break;

              case '_base':
                log('check_guiSystem_base', this._viewModel['_base']);

                this._menuToolGui.updateRatio(this._viewModel['_base']);

                break;

              case '_props':
                log('check_guiSystem_fish1_gui__props', value[0], this._viewModel['_props']);
                this.resetPropList(value[0]); //-_propRunData

                break;

              case '_useProp':
                log('check_guiSystem_fish1_gui__useProp', value[0]);
                this.useProp(value[0]);
                break;

              case '_propRunData':
                log('check_guiSystem_fish1_gui___propRunData', value[0], this._viewModel['_propRunData']);
                this.updatePropColdDown(value[0]); //-_propRunData

                break;

              case '_roomStatus':
                log('check_guiSystem_fish1_gui___roomStatus', value[0]); //--房間變更狀態(一般0/冰凍1/金龍來襲2/金龍死亡3)

                this.setRoomStatus(value[0].status);

                if (value[0].status == 0) {
                  this.unLockPropBtn((_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
                    error: Error()
                  }), PropType) : PropType).PROP_CALL);
                  this.unLockPropBtn((_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
                    error: Error()
                  }), PropType) : PropType).PROP_FREEZE);
                  this.roomToDefault();
                } else if (value[0].status == 1) {
                  this.stopPropcoldDown((_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
                    error: Error()
                  }), PropType) : PropType).PROP_CALL);
                  this.lockPropBtn((_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
                    error: Error()
                  }), PropType) : PropType).PROP_CALL);
                  this.lockPropBtn((_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
                    error: Error()
                  }), PropType) : PropType).PROP_FREEZE);
                } else if (value[0].status == 2) {
                  //--金龍來襲(召喚冰凍上鎖,停止計時)
                  this.stopPropcoldDown((_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
                    error: Error()
                  }), PropType) : PropType).PROP_CALL);
                  this.lockPropBtn((_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
                    error: Error()
                  }), PropType) : PropType).PROP_CALL);
                  this.stopPropcoldDown((_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
                    error: Error()
                  }), PropType) : PropType).PROP_FREEZE);
                  this.lockPropBtn((_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
                    error: Error()
                  }), PropType) : PropType).PROP_FREEZE); //---解鎖砲塔(因為使用道具被上鎖)

                  /*
                  if(this._flagReadySetPlayerIndex)
                  {
                      this.unlockPropBtnForCannon(this._playerIndex-1);
                  }*/
                } else if (value[0].status == 3) {}

                break;

              case '_wagersID':
                log('check_guiSystem_fish1_gui____wagersID', value[0]);
                this.updateWagersID(value[0]);
                break;

              case '_errorCode':
                log('check_guiSystem_fish1_gui___errorCode', value[0]); //-_errorCode:{code:number,error:string};  
                //--開黑色的系統訊息 

                /*
                if(this._gameLobbyGui)
                {
                    this.removeLobby();
                }*/

                let messageContain = value[0].code + ':' + (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                  error: Error()
                }), i18n) : i18n).t(value[0].error);
                this.showAlert(value[0].type, messageContain); //-

                break;

              case '_inGameMessage':
                log('check_guiSystem_fish1_gui___inGameMessage', value[0]); //-_errorCode:{code:number,error:string};  
                //let ingameMessage=i18n.t(value[0].msg); 

                this.showGameMessage((_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                  error: Error()
                }), i18n) : i18n).t(value[0].msg), value[0].msg); //this.showAlert(value[0].type,messageContain);

                break;

              case '_pingInfo':
                log('check_guiSystem_fish1_gui____pingInfo', value[0]);
                this.updatePing(value[0]);
                break;
            }
            /*
            if(sub=='_addbullets')
            {
                //--do something---
            }*/

          };

          this._classId = 'Fish1GuisSystemView';
          this._propGui = null;
          this._firstOpen = false;
          this._openExchangePanel = false;
          this._flagReadySetPlayerIndex = false;
        } //--step1(外部啟動)
        //--step2 call setLayoutData(override)


        setLayoutData(value) {
          //--直接寫入要layout的data
          //-{id:string,class:GuiBasic,initData:GuiOption,immediateSendEvt:boolean,cloneId?:string}[]

          /*
          this._aryLayoutData=[
              
              {id:"classname",class:realclass,initData:GuiOption,immediateSendEvt:false},
              {id:"classname",class:realclass,initData:GuiOption,immediateSendEvt:false},
              {id:"classname",class:realclass,initData:GuiOption,immediateSendEvt:false},
              {id:"classname",class:realclass,initData:GuiOption,immediateSendEvt:false},
              {id:"classname",class:realclass,initData:GuiOption,immediateSendEvt:false}   
          ];*/
          //let scene:Scene=director.getScene();
          //--這邊要把GUI的canvas的名字塞進來
          //let canvas:Node=scene.getChildByName('Canvas');
          //let canvas=scene.getComponent(Canvas); 
          //log('check_oddsData',this._viewModel['_aryOddsInfo']);
          this._aryLayoutData = [//--注意,array裡面的位置決定建立的上下位置
          //-Fish1LobbyGuiView
          // @ts-ignore
          //{id:"GuiTest1",class:GuiTest1,initData:{id:'GuiTest1',other:'hello'},immediateSendEvt:false},
          // @ts-ignore
          {
            id: "CannonGui",
            class: _crd && Fish1CannonGuiView === void 0 ? (_reportPossibleCrUseOfFish1CannonGuiView({
              error: Error()
            }), Fish1CannonGuiView) : Fish1CannonGuiView,
            initData: {
              id: 'CannonGui'
            },
            immediateSendEvt: false
          }, // @ts-ignore
          //{id:"CreditExchangeGui",class:CreditExchangeGui,initData:{id:'CreditExchangeGui'},immediateSendEvt:false},
          //--propgui--ps-dcd這個要改成從model灌進來..
          {
            id: "PropGui",
            class: _crd && Fish1PropGuiView === void 0 ? (_reportPossibleCrUseOfFish1PropGuiView({
              error: Error()
            }), Fish1PropGuiView) : Fish1PropGuiView,
            initData: {
              id: 'PropGui',
              other: {
                container: 'Canvas/guiContainer',
                dcd: [5, 10, 10]
              }
            },
            immediateSendEvt: false
          }, {
            id: "AutoShootGui",
            class: _crd && Fish1AutoShootGuiView === void 0 ? (_reportPossibleCrUseOfFish1AutoShootGuiView({
              error: Error()
            }), Fish1AutoShootGuiView) : Fish1AutoShootGuiView,
            initData: {
              id: 'AutoShootGui',
              other: {
                container: 'Canvas/exchangeGuiNode',
                btnContainer: 'Canvas/guiContainer',
                odds: this._viewModel['_aryOddsInfo'],
                digitsPath: 'num_auto_'
              }
            },
            immediateSendEvt: false
          }, {
            id: "MenuGui",
            class: _crd && Fish1MenuGuiView === void 0 ? (_reportPossibleCrUseOfFish1MenuGuiView({
              error: Error()
            }), Fish1MenuGuiView) : Fish1MenuGuiView,
            initData: {
              id: 'MenuGui',
              other: 'Canvas/guiContainer'
            },
            immediateSendEvt: false
          }, {
            id: "toolBar",
            class: _crd && ToolBarGuiView === void 0 ? (_reportPossibleCrUseOfToolBarGuiView({
              error: Error()
            }), ToolBarGuiView) : ToolBarGuiView,
            initData: {
              id: 'toolBar',
              other: {
                prefabId: 'prefab/gui/bottomBar',
                spriteFrameSnId: 'tx_sn',
                snDigitsId: 'fnt_arial32_',
                versionDigitsId: 'fnt_arialBd24_',
                container: 'Canvas/guiContainer'
              }
            },
            immediateSendEvt: false
          }, {
            id: "CreditExchangeGui",
            class: _crd && Fish1CreditExchangeGuiView === void 0 ? (_reportPossibleCrUseOfFish1CreditExchangeGuiView({
              error: Error()
            }), Fish1CreditExchangeGuiView) : Fish1CreditExchangeGuiView,
            initData: {
              id: 'CreditExchangeGui',
              other: 'Canvas/exchangeGuiNode'
            },
            immediateSendEvt: false
          }, //@ts-ignore
          {
            id: "LobbyGui",
            class: _crd && Fish1LobbyGuiView === void 0 ? (_reportPossibleCrUseOfFish1LobbyGuiView({
              error: Error()
            }), Fish1LobbyGuiView) : Fish1LobbyGuiView,
            initData: {
              id: 'LobbyGui',
              other: {
                lobbyNames: ['tx_shark', 'tx_dragon', ''],
                container: 'Canvas/lobbyNode'
              }
            },
            immediateSendEvt: false
          }, {
            id: "IframeGui",
            class: _crd && IframeGuiView === void 0 ? (_reportPossibleCrUseOfIframeGuiView({
              error: Error()
            }), IframeGuiView) : IframeGuiView,
            initData: {
              id: 'IframeGui',
              other: {
                prefabId: 'prefab/gui/webviewbg',
                titleRule: 'tx_GameInstruction',
                titleHistory: 'tx_History',
                container: 'Canvas/guiContainer'
              }
            },
            immediateSendEvt: false
          }, {
            id: "InGameMessage",
            class: _crd && InGameMessageGuiView === void 0 ? (_reportPossibleCrUseOfInGameMessageGuiView({
              error: Error()
            }), InGameMessageGuiView) : InGameMessageGuiView,
            initData: {
              id: 'InGameMessage',
              other: {
                prefabId: 'prefab/gui/info',
                container: 'Canvas/guiContainer',
                labelContainer: 'Canvas/PlayerNameText'
              }
            },
            immediateSendEvt: false
          }, //{id:"SystemMessageGui",class:SystemMessageGuiView,initData:{id:'SystemMessageGui',other:{prefabId:'prefab/gui/systemMessage',container:'Canvas/alertGuiNode',spriteFrameTitleId:'tx_warning',spriteFrameCloseBtnId:'tx_close',labelContainer:'Canvas/PlayerNameText'}},immediateSendEvt:false}
          {
            id: "SystemMessageGui",
            class: _crd && SystemMessageGuiView === void 0 ? (_reportPossibleCrUseOfSystemMessageGuiView({
              error: Error()
            }), SystemMessageGuiView) : SystemMessageGuiView,
            initData: {
              id: 'SystemMessageGui',
              other: {
                prefabId: 'prefab/gui/systemMessage',
                container: 'Canvas/alertGuiNode',
                spriteFrameTitleId: 'tx_warning',
                spriteFrameCloseBtnId: 'tx_close',
                labelContainer: 'Canvas/alertGuiNode'
              }
            },
            immediateSendEvt: false
          }];
        } //--重新獲取class並且重新導向變數
        //--step3


        afterAllGuiComplete() {
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
          this._gameLobbyGui = this.getClassById('LobbyGui');
          this._cannonGuiCenter = this.getClassById('CannonGui');
          this._menuToolGui = this.getClassById('MenuGui');
          this._propGui = this.getClassById('PropGui');
          this._creditExchange = this.getClassById('CreditExchangeGui');
          this._autoShootGui = this.getClassById('AutoShootGui');
          this._gameIframeGui = this.getClassById('IframeGui');
          this._toolbarGui = this.getClassById('toolBar');
          this._systemMessageGui = this.getClassById('SystemMessageGui');
          this._inGameMessageGui = this.getClassById('InGameMessage'); //@ts-ignore
          //this.setLauncherVersionNumber(window.game_version);

          /*
          this._cannonGuiCenter=this.getClassById('CannonGui') as CannonGui;
          //--lobbyGui
          this._gameLobbyGui=this.getClassById('LobbyGui') as LobbyGui;
          //--creditExchange
          this._creditExchange=this.getClassById('CreditExchangeGui') as CreditExchangeGui;
          this.setCreditExchangePanelActive(false);
          */
          //--預設的internal裡面的source無法~
          //internal资源慎用，会导致在原生平台开启动态合图之后出脚本错，而且很难查
          //-https://forum.cocos.org/t/default-sprite-splash/98689/2
          //--loadany的option參數
          //-https://docs.cocos.com/creator/2.4/manual/zh/asset-manager/options.html
          //-https://docs.cocos.com/creator/2.4/manual/zh/asset-manager/downloader-parser.html
          //-https://forum.cocos.org/t/topic/134829/7

          (_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
            error: Error()
          }), GuisSystemView) : GuisSystemView).BGMask = new Node('testMask');
          (_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
            error: Error()
          }), GuisSystemView) : GuisSystemView).BGMask.addChild(instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getPrefab('prefab/gui/bgMask')));
          (_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
            error: Error()
          }), GuisSystemView) : GuisSystemView).BGMask.layer = Layers.Enum.UI_2D;
          (_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
            error: Error()
          }), GuisSystemView) : GuisSystemView).BGMask.name = 'GuiSysBGMask'; //find('Canvas').addChild(Fish1GuisSystemView.BGMask); 
        } //--step4
        //-addEventListener


        addEventListener() {
          super.addEventListener();
          /**
          * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
          * 所以function name會被拿掉..很雷20240328
          */
          //Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.USE_PROP,this.guiEventHandler,this.constructor.name);

          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).USE_PROP, this.guiEventHandler, this._classId);
        }

        guiEvtProcessHandler(sub, value) {
          super.guiEvtProcessHandler(sub, value);

          switch (sub) {
            case (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).USE_PROP:
              //--do something
              //log('use_prop_from_guiSystem',sub,value[0]);
              this.usePropCallServer(value[0]);
              break;

            case (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).OPEN_EXCHANGE_FIRST:
              //log('firstOpen_CreditExchange_from_guiSystem',sub);
              this.showOpenAnimation();
              break;

            case (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).OPEN_EXCHANGE:
              this._openExchangePanel = true;

              this._menuToolGui.closeMenuBar();

              break;

            case (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).BTN_MUTE:
              (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                error: Error()
              }), SoundsManager) : SoundsManager).getInstance().mute();

              this._menuToolGui.closeMenuBar();

              break;

            case (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).BTN_HELP:
              //--會從utilTool.general.urlGet('d');裡面解析出來網址
              //--規則說明要串成這樣

              /*
               url = `https://${host}/${path}?GameType=${FishGameInfo.gameType}&Lang=${FishGameInfo.lang}`;
              
              */
              let path_help_domain = (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).isLocal ? (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).localPathData.domain : (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).host; //let protocolData=window.location.protocol.split(':');
              //log('open_help',protocolData,path_help_domain);

              this.openIframeGui('https://' + path_help_domain + (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_RulePath + '?GameType=' + (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).GameType + '&Lang=' + (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_Lang, (_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
                error: Error()
              }), GuisSystemView) : GuisSystemView)._webView_key_rule); //this.openIframeGui('https://demo.in-app.cc/Platform/');
              //this.openIframeGui('http://www.google.com.tw/');

              this._menuToolGui.closeMenuBar();

              break;

            case (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).BTN_HISTORY:
              log('open_history'); //--會從utilTool.general.urlGet('d');裡面解析出來網址
              //this.openIframeGui('http://www.google.com.tw/?enablejsapi=1');

              let path_history_domain = (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).isLocal ? (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).localPathData.domain : (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).host;
              const url = 'https://' + path_history_domain + (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_WagersPath + `?pf=${(_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_Cid}&sid=${(_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_Sid}&gameType=${(_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).GameType}&lang=${(_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_Lang}`;
              this.openIframeGui(url, (_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
                error: Error()
              }), GuisSystemView) : GuisSystemView)._webView_key_history); //this.openIframeGui('https://demo.in-app.cc/Platform/');
              //this.openIframeGui('http://www.google.com.tw/');

              this._menuToolGui.closeMenuBar();

              break;

            case (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).BTN_EXIT:
              log('guiSys_btn_EXIT'); //this._viewModel['_testData']=1;//---for test

              /*
              let fish=this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_getFishs);
               let bullet=this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_getBullets);
                let dxy:{x:number,y:number}={x:bullet[0].bulletShell.position.x-fish[0].fishMesh.position.x,y:bullet[0].bulletShell.position.y-fish[0].fishMesh.position.y};
                           //--距離小於35-40已經在附近了
              let dist=Math.sqrt(dxy.x*dxy.x+dxy.y*dxy.y); 
                let bulletColliderPoint=bullet[0].collisions[0].worldPoints as Vec2[];
               let fishColliderPoints=fish[0].collisionArea[0].worldPoints as Vec2[];
               let f:boolean=false;
              
              for(let i:number=0;i<bulletColliderPoint.length;i++)
              {
                  if(Intersection2D.pointInPolygon(bulletColliderPoint[i],fishColliderPoints))
                  {
                      f=true;
                      
                      break;
                  }
              }
               log('check_tesfish',f,dist,bulletColliderPoint,fishColliderPoints,fish[0].collisionArea,bullet[0].collisions);
              */
              //--測試關閉,正式打開20240227

              window.util.general.exit();

              this._menuToolGui.closeMenuBar(); //--測試關閉,正式打開20240227


              break;

            case (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).ALERT_CLOSE:
              log('guiSys_AlertClose', value);

              this._inGameMessageGui.setVisibleForPriority(false);

              if (value[0] == 'connectClose') {
                window.util.general.exit();
              }

              break;
          }
        }

        //===========server respond================================================================
        //===========after server getPlayerIndex================================================================
        setDataAfterreadySetPlayerIndex() {
          return;
          this._flagReadySetPlayerIndex = true; //-_roomStatus:{status:number,startTime:number,endTime:number};

          let roomStatusData = this._viewModel['_roomStatus'];

          if (roomStatusData.status == 2) {
            //---解鎖砲塔(因為使用道具被上鎖)
            this.unlockPropBtnForCannon(this._playerIndex - 1);
          }

          log('setDataAfterreadySetPlayerIndex', roomStatusData, this._playerIndex);
        } //===========after server getPlayerIndex================================================================
        //============get Data==================================================================
        //======給其他平行的view拿資料用的(透過mediator去拿)
        //--interface abstract


        getData(dataKey, value) {
          //--這邊直接拿下面需要拿的資料
          log('getGuiData', dataKey);
          let r = null;

          switch (dataKey) {
            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_getCannonPosition:
              log('Gui_getCannonPosition_fishGuisSystem', value);
              r = this._cannonGuiCenter.getCannonPosition(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_changeBulletStyle:
              r = this._cannonGuiCenter.changeBulletStyle(value.index, value.score);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_rotateCannonAndGetPosition:
              log('Gui_rotateCannonAndGetPosition@@_', value);

              this._cannonGuiCenter.rotationCannon(value.index, value.pos.x, value.pos.y);

              r = this._cannonGuiCenter.getCannonPosition(value.index);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_getIsAutoShoot:
              r = this._autoShootGui.isAutoShoot;
              log('Gui_getIsAutoShoot', r);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_cleanAllAutoShootData:
              this._autoShootGui.cleanAllAutoShootData();

              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_locakAim:
              log('Gui_Gui_locakAim', r);

              this._autoShootGui.locakAim(value);

              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_autoUseProps:
              //(<Fish1PropGuiView>this._propGui).autoUseProps(value);
              this.autoUsePropCheck(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_showGameMessage:
              this.showGameMessage(value.message, value.type);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_removeMessages:
              this.removeMessages(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_closeGameMessage:
              this.closeGameMessage(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_showAlert:
              //---{type:'connectClose',code:-1,error:'MSG.NOT_ENOUGH_CREDIT'};
              let messageContain = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                error: Error()
              }), i18n) : i18n).t(value[0].error);

              if (value[0].code > 0) {
                messageContain = value[0].code + messageContain;
              }

              this.showAlert(value.type, messageContain);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_checkExChangeShow:
              r = this.checkExChangeShow();
              break;
          }

          return r;
        } //--interface abstract


        excute(value) {} //============get Data==================================================================
        //============room=========================================================================
        //--這邊插在連線前完成


        init(value) {
          let r; //--要寫資料進去

          if (this._cannonGuiCenter) {
            this._cannonGuiCenter.defaultGunScore = this._viewModel['_defualtGunValue'];

            this._cannonGuiCenter.setCannonInfo(this._viewModel['_aryActionInfo'], this._viewModel['_aryScorePool']);
          }

          if (this._propGui) {
            let propData = this._viewModel['_props']; //-{[key:number]:{time:number,count:number}};

            let times = [propData[(_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
              error: Error()
            }), PropType) : PropType).PROP_CALL].time, propData[(_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
              error: Error()
            }), PropType) : PropType).PROP_FREEZE].time, propData[(_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
              error: Error()
            }), PropType) : PropType).PROP_CRAZY].time]; //log('check_guiPropInitData',propData,times);

            this._propGui.defaultcdTimes = times;
          }

          return null;
        } //--重置房間資料


        resetRoom() {
          this.cleanAllRoom();

          this._inGameMessageGui.resetCoordinatesChange();
        } //--重新layout房間


        reBuildRoom() {
          this._aryLayoutData = [//--注意,array裡面的位置決定建立的上下位置
          {
            id: "LobbyGui",
            class: _crd && Fish1LobbyGuiView === void 0 ? (_reportPossibleCrUseOfFish1LobbyGuiView({
              error: Error()
            }), Fish1LobbyGuiView) : Fish1LobbyGuiView,
            initData: {
              id: 'LobbyGui',
              other: {
                lobbyNames: ['tx_shark', 'tx_dragon', ''],
                container: 'Canvas/lobbyNode'
              }
            },
            immediateSendEvt: false
          }];
          this.startProcessing();
        } //--這個是在takeseat的時候用的


        setRoomData(room, uid) //--考慮拿掉
        {
          this._cannonGuiCenter.setRoomData(room);
        }

        cleanAllRoom() {
          this._cannonGuiCenter.cleanAllRoom();
        } //============room=========================================================================
        //============creditExchange=========================================================================
        //--call server


        creditExchangeEnterGame(value) {
          log('creditExchangeEnterGame', value); //--auto exchange

          let lastclickValue = value.sendObj.lastClick > 0 ? value.sendObj.lastClick : this._viewModel['_autoCreditMoney'];
          this._viewModel['_autoCreditExchange'] = value.sendObj.isAutoExchange;
          this._viewModel['_autoCreditMoney'] = lastclickValue;
          log('check_vmdata after exchange', this._viewModel['_autoCreditExchange'], this._viewModel['_autoCreditMoney']); //--開洗分流程結束的狀態

          if (this._viewModel['_onCreditExchange']) {
            //--auto exchange
            this._viewModel['_onCreditExchange'] = false;
            log('check_notautoExchangeRatio', value.sendObj.exchangeRatio);

            if (value.sendObj.exchangeCredit > 0) {
              let messageData = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                error: Error()
              }), i18n) : i18n).t('MSG.WAIT_EXCHANGING');
              this.showGameMessage(messageData, 'MSG.WAIT_EXCHANGING');
            } else {
              //--小於0的話server不會回,_onCreditExchange也就不會被回復成true
              this._viewModel['_onCreditExchange'] = true;
            }

            this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).Exchange, {
              p: value.sendObj.exchangeCredit,
              r: value.sendObj.exchangeRatio
            }, //--Exchange--->p=換分分數,r=換分比(string)--換分比,model裡面做掉
            (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
              error: Error()
            }), ServerResCode) : ServerResCode).Exchange);
          }
        } //--洗分--送出後直接斷線


        banlaceExchange() {
          //---to do -20240301

          /*
          this._viewModel.sendServer
          (
              ServerSendCode.LeaveRoom,
              null,
              ServerResCode.LeaveRoom
          );
          */
          this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).CashOut, null, (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).CashOut); //--也不用回了..直接斷線離開(因為沒有回到廳房的功能)


          TweenMax.to({}, 1, {
            onComplete: () => {
              window.util.general.exit();
            }
          });
        }

        openCreditExchange() {
          this._viewModel['_getMatchineDetial'] = false;
          /*
          let messageData=i18n.t('MSG.WAIT_EXCHANGING');
           this.showGameMessage(messageData,'MSG.WAIT_EXCHANGING');
          */

          this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).GetBalance, null, //--(實際上不用代資料)
          (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).Balance);
        } //--檢查面板是否是開啟狀態


        checkExChangeShow() {
          return this._creditExchange.checkExChangeShow();
        }

        checkPlayerAutoExchange() {
          let changeCredit;
          let autoCreditMoney = this._viewModel['_autoCreditMoney'];
          let balance = this._viewModel['_balance'];
          let exchangeRatio = this._viewModel['_exchangeRatio'];
          log('checkPlayerAutoExchange', balance, autoCreditMoney, exchangeRatio);

          if (autoCreditMoney < 500) {
            autoCreditMoney = 500; //--第一次沒有手動換分的情況下直接進入遊戲
          }

          if (balance < autoCreditMoney * exchangeRatio && balance > 0) {
            //-----錢不夠就自動開全部的分數給他換    
            changeCredit = Math.floor(balance / exchangeRatio);
            log('not_enougth', changeCredit, balance, exchangeRatio);
          } else {
            //---吻合
            changeCredit = autoCreditMoney;
          }

          log("checkPlayerAutoExchange@@", changeCredit);
          return changeCredit;
        }
        /**
         * 玩家在沒得打出任何一發子彈的時候才會允許換分
         * @returns boolean
         */


        checkPlayerCreditCanAutoExchange() {
          let playerCredit = this._viewModel['_aryRoomInfo'][this._playerIndex - 1].credit;
          let bulletScore = this._viewModel['_aryScorePool'];
          let f = true; //---這邊自動幫玩家換子彈--?

          for (let i = 0; i < bulletScore.length; i++) {
            for (let j = 0; j < bulletScore[i].length; j++) {
              if (bulletScore[i][j] < playerCredit) {
                f = false;
                break;
              }
            }

            if (!f) {
              break;
            }
          }

          log('checkPlayer_credit', f, this._viewModel['_aryRoomInfo'][this._playerIndex - 1].credit, this._viewModel['_aryScorePool']);
          return f;
        }
        /*
        protected  setCreditExchangePanelActive(value:boolean):void
        { 
         }*/
        //============creditExchange=========================================================================
        //============lobby====================================================================


        lobbySetPlayerRoom(value) {
          log('Fish1GuiSystemView__', value);

          this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).ChoiceLobby, value.sendObj //ServerResCode.EnterRoom
          );

          this.removeLobby(); //--要在秀出laoding bar
        }

        lobbySetPlayerRoomExit(value) {}
        /**
        * 新增大廳頁
        * @param o 傳入的比例資料
        * @param userID 使用者名稱
        */


        createLobby(o, userID) {
          if (this._gameLobbyGui) {
            this._gameLobbyGui.setRoomData(o, userID);
          } //this.setUserName(userID);

        }

        forSPLobbyHost(userID) {
          //--移除大廳,此為無大廳的廳主
          if (this._gameLobbyGui != null) {
            this.removeLobby();
          } //this.setUserName(userID);

        } //============lobby====================================================================
        //---以下的功能可能要改成protected
        //=======cannon===================================================================

        /**
        *override it 
        * @returns 取得玩家炮管的座位位置,作為動畫顯示的依據座標
        * 原本的getGunLocat():{x:number , y:number}[]方法
        */


        getGunContainerPosition() {
          return this._cannonGuiCenter.getGunContainerPosition();
        }
        /**
         * override it 
         * @returns 玩家砲塔座位座標
         */


        getALLPlayerPositions() {
          return this._cannonGuiCenter.getALLPlayerPositions();
        }
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


        getCreditCoinPosition() {
          return this._cannonGuiCenter.getCreditCoinPosition();
        }
        /**
        * @returns 座位的<玩家分數顯示框的資訊(座標(global)/寬高)>
        * override it
        */


        getPlayerTextDigitsInfoData() {
          return this._cannonGuiCenter.getPlayerTextDigitsInfoData();
        }
        /**
        * override it
        * 舊版本是給spine用的(因為砲座是spine做的)
        * @returns 取得所有cannonMount相關資訊(座標/寬高)
        */


        getCannonMountPositions() {
          return this._cannonGuiCenter.getCannonMountPositions();
        }
        /**
         * 旋轉前準備(中心座標的偏移之類的--上下位置會有不同)
         * @param tableId 1-4
         */


        setPlayerInfoCoordinate(tableId) {
          this._cannonGuiCenter.setPlayerInfoCoordinate(tableId);
        }
        /**
         * 旋轉後調整砲塔
         * @param tableId 1-4
         */


        afterCoordinatesChange(tableId) {
          this._cannonGuiCenter.afterCoordinatesChange(tableId);

          this._inGameMessageGui.afterCoordinatesChange(tableId); //(<SystemMessageGuiView>this._systemMessageGui).afterCoordinatesChange(tableId);

        } //--使用道具上鎖


        lockPropBtnForCannon(index, scoreValue) {
          this._cannonGuiCenter.lockPropBtn(index, scoreValue);
        } //--使用道具解鎖


        unlockPropBtnForCannon(index) {
          this._cannonGuiCenter.unlockPropBtn(index);
        } //=======cannon===================================================================
        //=======menu=====================================================================


        getMenuPositions() {
          let propData = this._propGui.getPropMenuPositions();

          return propData;
        } //=======menu=====================================================================
        //========prop====================================================================


        autoUsePropCheck(value) {
          let props = this._viewModel['_props'];
          let propRunningdata = this._viewModel['_propRunData'];

          if (props[value].count > 0 && !propRunningdata[value].isRunning) {
            this._propGui.autoUseProps(value);
          }
        } //--使用道具(玩家本身)call server


        usePropCallServer(propType) {
          let props = this._viewModel['_props'];
          let propRunningdata = this._viewModel['_propRunData'];
          let playerCredit = this._viewModel['_credit'];
          log('check_beforeUseProp', playerCredit, props, propRunningdata, propType);

          if (props[propType].count > 0 && !propRunningdata[propType].isRunning && playerCredit > 0) {
            this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).useProp, {
              pt: propType,
              //--以下是debug用的
              dPlayer: this._playerIndex - 1,
              //--0-3
              dcd: props[propType].time
            }, (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
              error: Error()
            }), ServerResCode) : ServerResCode).UseProp);
          } else {
            let messageData;
            let type;

            if (playerCredit <= 0) {
              messageData = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                error: Error()
              }), i18n) : i18n).t('MSG.CANT_NOT_USE_PROPS');
              type = 'MSG.CANT_NOT_USE_PROPS';
            } else {
              messageData = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                error: Error()
              }), i18n) : i18n).t('MSG.PROPS_NOT_ENOUGH');
              type = 'MSG.PROPS_NOT_ENOUGH';
            }

            this.showGameMessage(messageData, type);
            /*
            let messageData=i18n.t('MSG.PROPS_NOT_ENOUGH');
             let type='MSG.PROPS_NOT_ENOUGH';
            
            this.showGameMessage(messageData,type);
            */
          }
        }

        useProp(value) {
          log('check_useProp_beforeUseProp', value, this._playerIndex); //--20240131取消道具與砲台的上鎖連動

          if (value.index == this._playerIndex - 1 && value.propType != 0) {
            this._propGui.beforeUseProp(value);
          }
          /*
          if(value.index==this._playerIndex-1 && value.propType!=0)
          {
              (<Fish1PropGuiView>this._propGui).beforeUseProp(value);
               //--上鎖--
              let gunScoreType=this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_gunScore);
              
              log('check_guiUseProp_gunScoreValue',gunScoreType); 
               this.lockPropBtnForCannon(value.index,gunScoreType);
              
           }else if(value.index==-1 && value.propType==0)
          {
              //--全部結束--魚潮/金龍也要結束
              this.unlockPropBtnForCannon(this._playerIndex-1);
          }*/

        } //-更新背包數量


        resetPropList(props) {
          this._propGui.setProps(props);
        } //private updatePropColdDown(type:number,time:number):void


        updatePropColdDown(coldDownValue) {
          this._propGui.updateColdDownTime(coldDownValue);
        } //--強制停止colddown


        stopPropcoldDown(propType) {
          this._propGui.stopColdDown(propType);
        } //--道具按鈕上鎖


        lockPropBtn(propType) {
          this._propGui.lockPropBtn(propType);
        } //--道具按鈕解鎖


        unLockPropBtn(propType) {
          this._propGui.unLockPropBtn(propType);
        }

        roomToDefault() {
          this._propGui.roomToDefault();
        }

        setRoomStatus(value) {
          this._propGui.roomStatus = value;
        } //========prop====================================================================
        //========openanimation===========================================================

        /**
         * 第一次開洗分面板打開後的時候做
         */


        showOpenAnimation() {
          //---開場動畫(gun/btns)
          this._propGui.openShow();

          let menuToolbtn = this._menuToolGui.getCompontItem('_menuToolBtn');

          let menuOgPosition = this._menuToolGui.ogPosition;
          log('showOpenAnimation', menuToolbtn, menuOgPosition);

          this._autoShootGui.openShow(menuToolbtn.node, menuOgPosition);
        } //========openanimation===========================================================
        //========open IframeGui============================================================


        openIframeGui(url, titleKey) {
          this._gameIframeGui.showWebView(url, titleKey, 2);
        }

        closeIframeGui() {
          this._gameIframeGui.hideWebView();
        } //========toolbarGui============================================================


        updateWagersID(value) {
          this._toolbarGui.updateWagersID(value);
        }

        updatePing(value) {
          this._toolbarGui.updatePing(value);
        }

        setGameLauncherVersionNumber(value) {
          log('check_setLauncherVersionNumber', value);

          if (value != undefined) {
            this._toolbarGui.setLauncherVersionNumber(value);

            this._gameLobbyGui.setLauncherVersionNumber(value);
          }
        } //==========inGameMessage============================================================


        showGameMessage(message, type) {
          this._inGameMessageGui.showGameMessage(message, type);
        } //-removeMessages


        removeMessages(messages) {
          this._inGameMessageGui.removeMessages(messages);
        }

        closeGameMessage(clean = false) {
          this._inGameMessageGui.closeGameMessage(clean);
        }

        showAlert(errorType, dictString, autoDisappearTime = 0) {
          if (this._systemMessageGui.errorType != errorType) {
            this._inGameMessageGui.setVisibleForPriority(true);
          } //--20240115--cocos 的webview他的引擎是固定畫在最上面的


          if (this._gameIframeGui.active) {
            this._gameIframeGui.hideWebView();
          }

          this._systemMessageGui.showAlert(errorType, dictString, autoDisappearTime);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_lobbyData", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_roomTableInfo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "_addbullets", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "_getMatchineDetial", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "_exchangePlayerCredit", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "_base", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "_props", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "_useProp", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "_propRunData", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "_roomStatus", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "_wagersID", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "_errorCode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "_inGameMessage", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "_pingInfo", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "_exchangeRatio", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class)));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d9cf87cb5873bf772884012647bd91585249ae0d.js.map