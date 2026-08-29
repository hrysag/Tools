System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameMainLogicBase, ServerResCode, ServerSendCode, GameEventBase, Notifycation, GUIEvent, GameViewMediatorUser, GameViewMediatorUserDataKey, GuiNotifycationSubbscriptionSubject, MouseBehaviorAutoClick, FishGameAutoAndLockData, AutoAndLockEvent, UITransform, v2, CameraComponent, AREA_BOUNDARY, viewBind, fishMeshState, GameUtils, SchedulableTool, i18n, director, Scheduler, macro, log, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, FishGameMainLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameMainLogicBase(extras) {
    _reporterNs.report("GameMainLogicBase", "../../game/logic/GameMainLogicBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerResCode(extras) {
    _reporterNs.report("ServerResCode", "../../logic/connect/ConnectBaseDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerSendCode(extras) {
    _reporterNs.report("ServerSendCode", "../../logic/connect/ConnectBaseDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEventBase(extras) {
    _reporterNs.report("GameEventBase", "../../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifycation(extras) {
    _reporterNs.report("Notifycation", "../../abstract/mvvm/Notifycation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGUIEvent(extras) {
    _reporterNs.report("GUIEvent", "../../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUser(extras) {
    _reporterNs.report("GameViewMediatorUser", "./FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUserDataKey(extras) {
    _reporterNs.report("GameViewMediatorUserDataKey", "./FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject(extras) {
    _reporterNs.report("GuiNotifycationSubbscriptionSubject", "../../game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMouseBehaviorBase(extras) {
    _reporterNs.report("MouseBehaviorBase", "../../game/mouseBehavior/mouseBehaviorBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMouseBehaviorAutoClick(extras) {
    _reporterNs.report("MouseBehaviorAutoClick", "../mouseBehavior/MouseBehaviorAutoClick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishGameAutoAndLockData(extras) {
    _reporterNs.report("FishGameAutoAndLockData", "./FishGameAutoAndLockData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionInfo(extras) {
    _reporterNs.report("CollisionInfo", "../../game/collision/CollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoAndLockEvent(extras) {
    _reporterNs.report("AutoAndLockEvent", "../../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishData(extras) {
    _reporterNs.report("FishData", "../views/fishView/FishData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAREA_BOUNDARY(extras) {
    _reporterNs.report("AREA_BOUNDARY", "../../game/mouseBehavior/MouseBehaviorDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewBind(extras) {
    _reporterNs.report("viewBind", "../../../framework/abstract/mvvm/AbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishMeshState(extras) {
    _reporterNs.report("fishMeshState", "../../game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSchedulableTool(extras) {
    _reporterNs.report("SchedulableTool", "../../abstract/mvvm/SchedulableTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfi18n(extras) {
    _reporterNs.report("i18n", "../../utils/i18n/LanguageData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      UITransform = _cc.UITransform;
      v2 = _cc.v2;
      CameraComponent = _cc.CameraComponent;
      director = _cc.director;
      Scheduler = _cc.Scheduler;
      macro = _cc.macro;
      log = _cc.log;
    }, function (_unresolved_2) {
      GameMainLogicBase = _unresolved_2.GameMainLogicBase;
    }, function (_unresolved_3) {
      ServerResCode = _unresolved_3.ServerResCode;
      ServerSendCode = _unresolved_3.ServerSendCode;
    }, function (_unresolved_4) {
      GameEventBase = _unresolved_4.GameEventBase;
    }, function (_unresolved_5) {
      Notifycation = _unresolved_5.Notifycation;
    }, function (_unresolved_6) {
      GUIEvent = _unresolved_6.GUIEvent;
    }, function (_unresolved_7) {
      GameViewMediatorUser = _unresolved_7.GameViewMediatorUser;
      GameViewMediatorUserDataKey = _unresolved_7.GameViewMediatorUserDataKey;
    }, function (_unresolved_8) {
      GuiNotifycationSubbscriptionSubject = _unresolved_8.GuiNotifycationSubbscriptionSubject;
    }, function (_unresolved_9) {
      MouseBehaviorAutoClick = _unresolved_9.MouseBehaviorAutoClick;
    }, function (_unresolved_10) {
      FishGameAutoAndLockData = _unresolved_10.FishGameAutoAndLockData;
    }, function (_unresolved_11) {
      AutoAndLockEvent = _unresolved_11.AutoAndLockEvent;
    }, function (_unresolved_12) {
      AREA_BOUNDARY = _unresolved_12.AREA_BOUNDARY;
    }, function (_unresolved_13) {
      viewBind = _unresolved_13.viewBind;
    }, function (_unresolved_14) {
      fishMeshState = _unresolved_14.fishMeshState;
    }, function (_unresolved_15) {
      GameUtils = _unresolved_15.GameUtils;
    }, function (_unresolved_16) {
      SchedulableTool = _unresolved_16.SchedulableTool;
    }, function (_unresolved_17) {
      i18n = _unresolved_17.i18n;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1dcaf+XNoZJGIi70u7bzxPK", "FishGameMainLogic", undefined);
      /**
       * Created by EricHuang on 2023/10/01.
       * 射擊/自動射擊/鎖定/定向射擊
       */


      __checkObsolete__(['Vec2', 'Node', 'find', 'Vec3', 'UITransform', 'v2', 'CameraComponent']);

      __checkObsolete__(['director']);

      __checkObsolete__(['Scheduler', 'macro']);

      __checkObsolete__(['log']);

      _export("FishGameMainLogic", FishGameMainLogic = (_dec = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
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
      }), viewBind) : viewBind, (_class = class FishGameMainLogic extends (_crd && GameMainLogicBase === void 0 ? (_reportPossibleCrUseOfGameMainLogicBase({
        error: Error()
      }), GameMainLogicBase) : GameMainLogicBase) {
        //--0-3
        constructor() {
          super();

          _initializerDefineProperty(this, "_hitFishs", _descriptor, this);

          _initializerDefineProperty(this, "_roomStatus", _descriptor2, this);

          _initializerDefineProperty(this, "_noExchange", _descriptor3, this);

          _initializerDefineProperty(this, "_onCreditExchange", _descriptor4, this);

          _initializerDefineProperty(this, "_errorCode", _descriptor5, this);

          //--錯誤訊息
          _initializerDefineProperty(this, "_enterRoom", _descriptor6, this);

          //--進房
          _initializerDefineProperty(this, "_refundBullets", _descriptor7, this);

          //--回收子彈
          this._autoShootStatus = void 0;
          //---自動打擊
          this._aryAutoLock = void 0;
          //---自動射擊資料
          this._directionTargetPoint = void 0;
          //--20230207--定向射擊
          this._enoughGunBet = void 0;
          //--20230504--玩家當前的餘額無法擊發當前炮分,但可以擊發較低分的炮分
          this._isLocking = void 0;
          //--鎖定狀態(doubleClick)--好像沒有用到
          this._lockModeFlag = void 0;
          //---確認是否進入lockmod(aim btn)
          this._shootFlag = void 0;
          //--發射鎖(魚群離場-魚潮開始前這段時間上鎖)
          this._isfreeGame = void 0;
          //---20211127--雙擊手動鎖定
          this._manualDoubleClickLock = void 0;
          this._doubleTween = void 0;
          this._doubleTweenObj = void 0;
          this._doubleFlag = void 0;
          this._doubleTweenTimer = void 0;
          //----計算滑鼠雙擊的功能--這個要拿去滑鼠那邊
          this._mouseBehavior = void 0;
          this._autoFlagBynoExchange = void 0;
          this._fishGameAutoAndLockData = void 0;
          this._arySpFishType = void 0;
          //---特殊魚種的邊界檢測
          this._fish2DContainerNode = void 0;
          this._sceneCameraNode = void 0;
          this._canvasCameraNode = void 0;
          this._mouseContainerNode = void 0;
          this._bulletContainerNode = void 0;
          this._aryAutoUseProps = void 0;
          //---自動使用道具列表
          this._autoUsePropCount = void 0;
          //---自動使用道具計數器
          this._autoUsePropsTime = void 0;
          //---自動使用道具間格時間
          this._scheduler = void 0;
          this._frozenStatus = void 0;
          this._spBossId = void 0;
          //--20240308
          this.canUpdate = void 0;
          this._playerTable = void 0;

          this.fishGameAutoAndLockDataEventHandler = e => {
            log('check_fishGameAutoAndLockDataEventHandler', e, e.sendObj);

            switch (e.type) {
              case (_crd && AutoAndLockEvent === void 0 ? (_reportPossibleCrUseOfAutoAndLockEvent({
                error: Error()
              }), AutoAndLockEvent) : AutoAndLockEvent).FISH_ADD_LOCK_AIM:
                //--這個好像沒用到
                break;

              /*
              case AutoAndLockEvent.UPDATE_BULLET_LOCK_TARGET:
               this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_resetEndPositionAndFishTargetId,e.sendObj);
               break;
                case AutoAndLockEvent.REMOVE_FISH_AIMLOCK:
               
              this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_removeFishAimLock); 
               break;
              */
            }
          };

          //---箭頭函式不能用super來overrride
          this.modeleChangeHandler = (sub, value) => {
            this.processModelData(sub, value);
          };

          this.guiEvtGameLogicHandler = (sub, value) => {
            log('guiEvtGameLogicHandler', sub, value);

            switch (sub) {
              case (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).AIM_SHOOT:
                let previousFish_aim = 0;
                log('AIMSHOOT', value[0]);

                if (value[0]) {
                  if (this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                    error: Error()
                  }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                    error: Error()
                  }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_getIsAutoShoot)) {
                    log('aimShoot_true'); //--有autoshoot

                    this.pauseAutoShootTime(); //--有啟動自動使用道具

                    if (this._scheduler) {
                      this._scheduler.pauseTarget(this._schedulableTool);
                    }

                    this._aryAutoUseProps.length = 0; //--清空自動使用道具

                    this._autoUsePropCount = 0; //--自動使用道具計數歸0

                    previousFish_aim = this._fishGameAutoAndLockData.aryLockFishBullets[this._playerTable].lockFish;

                    if (previousFish_aim != 0) {
                      this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                        error: Error()
                      }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                        error: Error()
                      }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_cleanAllPreviousLockTarget, previousFish_aim);
                    }

                    this._fishGameAutoAndLockData.cleanPlayerLockData();

                    this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                      error: Error()
                    }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                      error: Error()
                    }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_cleanAllAutoShootData);

                    this._autoShootStatus = false;
                    this._mouseBehavior.autoShoot = false;
                    this._aryAutoLock.length = 0; //--清除瞄準圖示

                    this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                      error: Error()
                    }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                      error: Error()
                    }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_removeFishAimLock);
                  }

                  log('check_autoshoot_afterAim', this._mouseBehavior, this._mouseBehavior.autoShoot);

                  if (!this._mouseBehavior.autoShoot) {
                    //--這邊直接會再度啟動tween
                    this._mouseBehavior.autoShoot = true;
                  }

                  this._autoShootStatus = true;
                  this._lockModeFlag = true;
                } else {
                  this._mouseBehavior.autoShoot = false;
                  previousFish_aim = this._fishGameAutoAndLockData.aryLockFishBullets[this._playerTable].lockFish;
                  log('previousFish_aim', previousFish_aim);

                  if (previousFish_aim != 0) {
                    this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                      error: Error()
                    }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                      error: Error()
                    }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_cleanAllPreviousLockTarget, previousFish_aim);

                    this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                      error: Error()
                    }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                      error: Error()
                    }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_removeFishAimLockByLockId, previousFish_aim);
                  }

                  this._fishGameAutoAndLockData.cleanPlayerLockData();

                  this._lockModeFlag = false;
                  this._autoShootStatus = false; //this._isLocking=false;//--20190108新增

                  this._enoughGunBet = false;
                }

                break;

              case (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).AUTO_SHOOT:
                //--取value[0]={lockdata:[{id: 21, odds: '500'}],props:[1,2,3,4]}
                this._aryAutoLock = value[0].lockdata;
                this._aryAutoUseProps = value[0].props;
                log('check_setAuto', value[0]);
                this.pauseAutoShootTime();

                if (this._scheduler) {
                  this._scheduler.pauseTarget(this._schedulableTool);
                } //--直接清掉玩家的資料


                this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                  error: Error()
                }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                  error: Error()
                }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_cleanAllPlayerLockData); //--清除瞄準圖示


                this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                  error: Error()
                }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                  error: Error()
                }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_removeFishAimLock);

                this._fishGameAutoAndLockData.cleanPlayerLockData();
                /*
                let previousFish:number=0;
                 previousFish=this._fishGameAutoAndLockData.aryLockFishBullets[this._playerTable].lockFish;
                
                if(previousFish!=0)
                {
                    this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView, GameViewMediatorUserDataKey.Bullet_cleanAllPreviousLockTarget,previousFish);
                     this._gameMediator.getViewUserData(GameViewMediatorUser.FishView, GameViewMediatorUserDataKey.Fish_removeFishAimLockByLockId,previousFish);
                }*/


                if (this._aryAutoLock.length > 0) {
                  if (this._mouseBehavior.directionShoot) {
                    //--啟動鎖定擊關閉定向射擊功能
                    this._mouseBehavior.resetDitrectShoot();

                    this._directionTargetPoint = v2(-1, -1); //- this._gui.lockDirectionShoot(false);
                    //this._renderBase.removeEnterFrameMouse();
                    //this._renderBase.closeDirectionMouse();
                  }

                  if (this._lockModeFlag) {
                    this._lockModeFlag = false;

                    this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                      error: Error()
                    }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                      error: Error()
                    }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_locakAim, false);

                    this._manualDoubleClickLock.fishId = -1;
                    this._manualDoubleClickLock.flag = false;
                    this._autoShootStatus = false;
                    this._mouseBehavior.autoShoot = false; //this.cleanAutoLockCooldown();//--裡面也是走cleanLockdDataByTable
                  }
                  /*
                  previousFish=this._fishGameAutoAndLockData.aryLockFishBullets[this._playerTable].lockFish;
                      
                  if(previousFish!=0)
                  {
                      this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView, GameViewMediatorUserDataKey.Bullet_cleanAllPreviousLockTarget,previousFish);
                       this._gameMediator.getViewUserData(GameViewMediatorUser.FishView, GameViewMediatorUserDataKey.Fish_removeFishAimLockByLockId,previousFish);
                  }
                   this._fishGameAutoAndLockData.cleanLockdDataByTable(this._playerTable);
                  */


                  this._autoShootStatus = true; //--gamebase的tween就會啟動了

                  this._mouseBehavior.autoShoot = true;
                } else {
                  log('this._aryAutoLock.length <0', this._mouseBehavior.directionShoot, this._lockModeFlag);

                  if (!this._mouseBehavior.directionShoot && !this._lockModeFlag) {
                    //--只有autoshot的情況
                    this._mouseBehavior.autoShoot = false;
                    this._autoShootStatus = false;
                    this._enoughGunBet = false; //this._isLocking=false;--好像沒用到
                    //this._fishGameAutoAndLockData.cleanPlayerLockData();//--內容跟cleanLockdDataByTable依樣

                    /*                         
                    previousFish=this._fishGameAutoAndLockData.aryLockFishBullets[this._playerTable].lockFish;
                     if(previousFish!=0)
                    {
                        this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView, GameViewMediatorUserDataKey.Bullet_cleanAllPreviousLockTarget,previousFish);
                        
                        this._gameMediator.getViewUserData(GameViewMediatorUser.FishView, GameViewMediatorUserDataKey.Fish_removeFishAimLockByLockId,previousFish);
                     }
                    
                    this._fishGameAutoAndLockData.cleanLockdDataByTable(this._playerTable);
                    */
                  } else {
                    //--定向或是鎖定啟用的情況下(因為在關閉面板時,會先暫停機制)
                    if (this._lockModeFlag) {
                      this.reStartAutoShoot();
                    } else if (this._mouseBehavior.directionShoot) {
                      if (this._directionTargetPoint.x != -1 && this._directionTargetPoint.y != -1) {
                        this.reStartAutoShoot();
                      }
                    }
                  }
                }

                if (this._aryAutoUseProps.length > 0) {
                  this._autoUsePropCount = 0;

                  if (!this._scheduler && !this._schedulableTool) {
                    //--註冊在direct裡面的system--當前視窗縮小他就會停了
                    this._scheduler = director.getScheduler();
                    this._schedulableTool = new (_crd && SchedulableTool === void 0 ? (_reportPossibleCrUseOfSchedulableTool({
                      error: Error()
                    }), SchedulableTool) : SchedulableTool)();
                    Scheduler.enableForTarget(this._schedulableTool);

                    this._scheduler.schedule(this.autoUsePropUpdate, this._schedulableTool, this._autoUsePropsTime, macro.REPEAT_FOREVER, 0, true);
                  }

                  if (this._scheduler.isTargetPaused(this._schedulableTool)) {
                    this._scheduler.resumeTarget(this._schedulableTool);
                  }
                }

                break;

              case (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).CHANG_BULLETS:
                if (this._enoughGunBet) {
                  if (!this._mouseBehavior.getAutoUpdatStstus() && this._autoShootStatus) {
                    this._enoughGunBet = false;
                    this.reStartAutoShoot();
                  }
                }

                break;
            }
          };

          this.autoUsePropUpdate = dt => {
            let roomStatus = this._viewModel['_roomStatus'].status;
            log('autoUsePropUpdate_', roomStatus, this._aryAutoUseProps); //--this._aryAutoUseProps=[1,2,3]-->道具代號

            /**
             PropType.PROP_CALL=1;//----召喚道具(5sec)
             PropType.PROP_FREEZE=2,//--冰凍道具(10sec) 
             PropType.PROP_CRAZY=3//--狂暴道具(10sec)
             *  ps狀態代碼資訊
                 0=正常/一般狀態,
                 1=冰凍,(禁止使用-召喚)
                 2=金龍來襲,(禁止使用-召喚,冰凍)
                 3=金龍死亡(禁止進房)
             */

            let target = this._aryAutoUseProps[this._autoUsePropCount];
            let originalCount = this._autoUsePropCount;

            while (true) {
              if (this.isDataValid(target, roomStatus)) {
                this._autoUsePropCount++;

                if (this._autoUsePropCount === this._aryAutoUseProps.length) {
                  this._autoUsePropCount = 0;
                } //log('auto_picked_prop',target);
                //this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView, GameViewMediatorUserDataKey.Gui_autoUseProps, this._aryAutoUseProps[this._autoUsePropCount]);


                this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                  error: Error()
                }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                  error: Error()
                }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_autoUseProps, target);

                break; //return target;
              }

              this._autoUsePropCount++;

              if (this._autoUsePropCount === this._aryAutoUseProps.length) {
                this._autoUsePropCount = 0;
              } // 如果一輪都沒找到合適的資料，表示沒有符合條件的資料，可以考慮返回 undefined 或拋出錯誤


              if (this._autoUsePropCount === originalCount) {
                break; //return undefined;
              }

              target = this._aryAutoUseProps[this._autoUsePropCount];
            }
            /*
            if (!this._frozenStatus) 
            {
                this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView, GameViewMediatorUserDataKey.Gui_autoUseProps, this._aryAutoUseProps[this._autoUsePropCount]);
            }
             this._autoUsePropCount++;
             if (this._autoUsePropCount == this._aryAutoUseProps.length) 
            {
                this._autoUsePropCount = 0;
            }*/

          };

          this.blockClickHandler = value => {
            //-Gui_showGameMessage
            log('check_blockClickHandler', value, '_getMatchineDetial', this._viewModel['_getMatchineDetial'], '_onCreditExchange', this._viewModel['_onCreditExchange']);

            if (!this._autoShootStatus || this._lockModeFlag) {
              //--沒有call玩家餘額和開洗分
              if (this._viewModel['_getMatchineDetial'] && this._viewModel['_onCreditExchange']) {
                if (this._viewModel['_credit'] <= 0) {
                  if (!this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                    error: Error()
                  }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                    error: Error()
                  }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_checkExChangeShow)) {
                    //let message=i18n.t('MSG.NOT_ENOUGH_CREDIT');
                    let message = {
                      message: (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                        error: Error()
                      }), i18n) : i18n).t('MSG.NOT_ENOUGH_CREDIT'),
                      type: 'MSG.NOT_ENOUGH_CREDIT'
                    };

                    this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                      error: Error()
                    }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                      error: Error()
                    }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_showGameMessage, message);

                    this._viewModel['_getMatchineDetial'] = false;

                    this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
                      error: Error()
                    }), ServerSendCode) : ServerSendCode).GetBalance, null, //--(實際上不用代資料)
                    (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                      error: Error()
                    }), ServerResCode) : ServerResCode).Balance);
                  }
                }
              }
            }
          };

          this.autoShootHandler = value => {
            if (!this._shootFlag) {
              return;
            }

            let rp = this.checkLockIsinSide(); //log('check_autoShootHandler_rp',rp);

            if (rp) {
              //--aim lock--
              this.shootHandler({
                endX: rp.pos.x,
                endY: rp.pos.y,
                reLockTarget: rp.reLockTarget,
                lockFishType: rp.lockFishType
              });
            } else {
              //-- auto shoot--
              //---目前尚未鎖定任何魚隻,或是鎖定的魚出界了,要換鎖定目標(幫玩家挑一隻)
              //--{id: 21, odds: '500'}
              if (this._autoShootStatus && this._aryAutoLock.length > 0) {
                let checkfish = this.checkTargetAndAutoShoot();

                if (checkfish) {
                  this.addFishAimTarget(checkfish.reLockTarget);
                  this.shootHandler({
                    endX: checkfish.pos.x,
                    endY: checkfish.pos.y,
                    reLockTarget: checkfish.reLockTarget,
                    lockFishType: checkfish.lockFishType
                  });
                }
              }
            }
          };

          //protected shootAndAutoShoot=(sub,value)=>
          this.shootHandler = value => {
            /*
            if((<MouseBehaviorAutoClick>this._mouseBehavior).block)
            {
                return;
            }*/
            log('shootHandler@_click_begin', value); //--超出範圍會送null

            if (value) {
              let bulletInfo = {};
              bulletInfo.actionId = this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                error: Error()
              }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                error: Error()
              }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_actionId);
              bulletInfo.gunCredit = this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                error: Error()
              }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                error: Error()
              }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_gunScore);
              bulletInfo.weaponType = this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                error: Error()
              }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                error: Error()
              }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_weaponType, bulletInfo.gunCredit);
              bulletInfo.reLockTarget = -1;
              let sendobject = {
                info: bulletInfo,
                endX: value.endX,
                endY: value.endY,
                isFree: this._isfreeGame
              };

              if (value.reLockTarget != undefined) {
                sendobject['reLockTarget'] = value.reLockTarget;
                sendobject['lockFishType'] = value.lockFishType;
                bulletInfo.reLockTarget = value.reLockTarget;
              }

              log('shootHandler@_click_endAfter', value, bulletInfo);
              this.beforeShootCheck(sendobject);
            }
          };

          this._classId = 'FishGameMainLogic';
          this._shootFlag = true; //--發射鎖(魚群離場-魚潮開始前這段時間上鎖)

          this._manualDoubleClickLock = {
            fishId: -1,
            flag: false
          };
          this._aryAutoLock = [];
          this._arySpFishType = [];
          this._playerTable = -1;
          this._isfreeGame = false;
          this.canUpdate = false;
          this._lockModeFlag = false;
          this._enoughGunBet = false; //--這個好像也沒有用到?

          this._aryAutoUseProps = [];
          this._autoUsePropCount = 0;
          this._autoUsePropsTime = 0.6; //--sec

          this._frozenStatus = false; //--房間使用冰凍狀態

          this._spBossId = 0;
          this._directionTargetPoint = v2(-1, -1);
        }

        setAfterInitPlayerSeatData(table) {
          this.setPlayerIndex();

          if (!this._fishGameAutoAndLockData) {
            this._fishGameAutoAndLockData = new (_crd && FishGameAutoAndLockData === void 0 ? (_reportPossibleCrUseOfFishGameAutoAndLockData({
              error: Error()
            }), FishGameAutoAndLockData) : FishGameAutoAndLockData)();
          } //this._fishGameAutoAndLockData.on(AutoAndLockEvent.REMOVE_FISH_AIMLOCK,this.fishGameAutoAndLockDataEventHandler);
          //this._fishGameAutoAndLockData.on(AutoAndLockEvent.KILL_TARGET_BULLETS,this.fishGameAutoAndLockDataEventHandler);
          //this._fishGameAutoAndLockData.on(AutoAndLockEvent.FISH_LOCK_IS_CLEAN,this.fishGameAutoAndLockDataEventHandler);
          //--好像沒用到


          if (!this._fishGameAutoAndLockData.hasEventListener((_crd && AutoAndLockEvent === void 0 ? (_reportPossibleCrUseOfAutoAndLockEvent({
            error: Error()
          }), AutoAndLockEvent) : AutoAndLockEvent).FISH_ADD_LOCK_AIM, this.fishGameAutoAndLockDataEventHandler)) {
            this._fishGameAutoAndLockData.on((_crd && AutoAndLockEvent === void 0 ? (_reportPossibleCrUseOfAutoAndLockEvent({
              error: Error()
            }), AutoAndLockEvent) : AutoAndLockEvent).FISH_ADD_LOCK_AIM, this.fishGameAutoAndLockDataEventHandler);
          } //this._fishGameAutoAndLockData.on(AutoAndLockEvent.UPDATE_BULLET_LOCK_TARGET,this.fishGameAutoAndLockDataEventHandler);


          if (!this._fishGameAutoAndLockData.fishNode) {
            this._fishGameAutoAndLockData.fishNode = this._fish2DContainerNode;
          }

          if (!this._fishGameAutoAndLockData.mouseNode) {
            this._fishGameAutoAndLockData.mouseNode = this._mouseContainerNode;
          }

          if (!this._fishGameAutoAndLockData.bulletNode) {
            this._fishGameAutoAndLockData.bulletNode = this._bulletContainerNode;
          }

          if (!this._fishGameAutoAndLockData.sceneCameraNode) {
            this._fishGameAutoAndLockData.sceneCameraNode = this._sceneCameraNode;
          }

          if (!this._fishGameAutoAndLockData.canvasCameraNode) {
            this._fishGameAutoAndLockData.canvasCameraNode = this._canvasCameraNode;
          }

          if (!this._fishGameAutoAndLockData.view) {
            this._fishGameAutoAndLockData.view = this; //--無言的作法
          }

          this.canUpdate = true;
        }

        setPlayerIndex() {
          this._playerTable = this._viewModel['_playerTableId'];
          this._fishGameAutoAndLockData.userTableIndex = this._playerTable;
        }

        init() {
          //--到時候要換掉MouseBehaviorClick,先暫時這樣2023-10-01
          //--這裡要拿去給繼承這個類別的子類別實作
          this._mouseBehavior = this._mouseContainerNode.addComponent(_crd && MouseBehaviorAutoClick === void 0 ? (_reportPossibleCrUseOfMouseBehaviorAutoClick({
            error: Error()
          }), MouseBehaviorAutoClick) : MouseBehaviorAutoClick);
          this._mouseBehavior.cameraComponentForUitransform = this._canvasCameraNode.getComponent(CameraComponent);
          log('init_mouseBehavior', this._mouseBehavior, this._viewModel['']);

          this._mouseBehavior.init(); //--從大廳進遊戲後再開啟


          this._mouseBehavior.node.on((_crd && GameEventBase === void 0 ? (_reportPossibleCrUseOfGameEventBase({
            error: Error()
          }), GameEventBase) : GameEventBase).CLICK_SHOOT, this.shootHandler);

          this._mouseBehavior.node.on((_crd && GameEventBase === void 0 ? (_reportPossibleCrUseOfGameEventBase({
            error: Error()
          }), GameEventBase) : GameEventBase).AUTO_SHOOT, this.autoShootHandler);

          this._mouseBehavior.node.on((_crd && GameEventBase === void 0 ? (_reportPossibleCrUseOfGameEventBase({
            error: Error()
          }), GameEventBase) : GameEventBase).BLOCK_CLICK, this.blockClickHandler);
          /**
           * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
           * 所以function name會被拿掉..很雷20240328
           */

          /*
          Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION, GUIEvent.AIM_SHOOT, this.guiEvtGameLogicHandler, this.constructor.name);
           Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION, GUIEvent.AUTO_SHOOT, this.guiEvtGameLogicHandler, this.constructor.name);
           Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.CHANG_BULLETS,this.guiEvtGameLogicHandler,this.constructor.name);
          */


          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).AIM_SHOOT, this.guiEvtGameLogicHandler, this._classId);
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).AUTO_SHOOT, this.guiEvtGameLogicHandler, this._classId);
          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).CHANG_BULLETS, this.guiEvtGameLogicHandler, this._classId);
        }
        /**
         * 以畫面中心點為0,0
         * 左邊的邊界為-gameWidth/2,右邊的邊界為gameWidth/2
         * 上面的邊界為gameheight/2,下面的邊界為-gameHeight/2
         * @param x 距離左邊的距離
         * @param y 距離下面的距離
         * @param w 距離右邊的距離
         * @param h 距離上面的距離
         */
        //public setGameBoundary(x: number, y: number, w: number, h: number): void 


        setGameBoundary(w, h) {
          this._mouseBehavior.setBoundary(w, h);
        }

        afterRotationPos(value) {
          this._mouseBehavior.afterRotationPos(value);
        }

        cleanTable() {
          this._fishGameAutoAndLockData.removeAllLockData();
        } //---失去焦點關閉相關計時


        loseFocusToCloseTimeStemp() {
          if (this._autoShootStatus) {
            this._mouseBehavior.autoShoot = false;
          }

          this._autoUsePropCount = 0;
        } //--重回焦點後回復相關計時


        reFocusToOpenTimeStemp() {
          if (this._autoShootStatus) {
            this._mouseBehavior.autoShoot = true;
          }
        }

        updateLockBullets() {
          if (this._fishGameAutoAndLockData) {
            let data = this._fishGameAutoAndLockData.updateLockBullets();

            if (data.bullets.length > 0) {
              this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                error: Error()
              }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                error: Error()
              }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_cleanMoreFishTarget, data.bullets);
            }

            if (data.fishs.length > 0) {
              this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                error: Error()
              }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                error: Error()
              }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_cleanLocakTargetByDeathFishs, data.fishs); //--fish自己在exit/kill的時候會做掉刪去鎖定符號

            }
          }
        }

        afterUpdateforDeate(bullets) {
          if (this._fishGameAutoAndLockData) {
            this._fishGameAutoAndLockData.afterUpdateforDeate(bullets);
          }
        }

        async getData(dataKey, value) {
          let returnData = null;

          switch (dataKey) {
            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).GameLogic_setLockFishBullet:
              //--serverback 新增子彈
              let fd = this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                error: Error()
              }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                error: Error()
              }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_getFishById, value.lockTarget);

              if (fd) {
                let isPlayer = value.siteIndex == this._playerTable ? true : false; //returnData = await this._fishGameAutoAndLockData.setLockFishBullet(

                returnData = this._fishGameAutoAndLockData.setLockFishBullet(fd, value.sn, value.siteIndex, isPlayer);
              } else {
                returnData = null;
              }

              log('check_GameLogic_getData_GameLogic_setLockFishBullet', value, returnData);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).GameLogic_afterHitRemoveLockBulletData:
              log('check_GameLogic_afterHitRemoveLockBulletData', value); //--這邊是只要有碰撞就會送進來......

              this._fishGameAutoAndLockData.afterHitRemoveLockBulletData(value);

              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).GameLogic_blockALL:
              this._mouseBehavior.blockALL();

              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).GameLogic_unBlockALL:
              this._mouseBehavior.unBlockALL();

              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).GameLogic_cleanManualLock:
              log('check_GameLogic_GameLogic_cleanManualLock', value);
              this.cleanManualLock(value);
              break;
          }

          return returnData;
        }

        processModelData(sub, value) {
          log('gameLogic__processModelData', value);

          switch (sub) {
            case '_hitFishs':
              //-value[0]
              let killData = value[0];

              this._fishGameAutoAndLockData.hitFish([killData.bsn]);

              if (killData.fish.iskill) {
                this._fishGameAutoAndLockData.removeLockFishData(killData.fish.sn);

                this.cleanManualLock(killData.fish.sn);
              }

              break;

            case '_roomStatus':
              /**
               *  ps狀態代碼資訊
                  0=正常/一般狀態,
                  1=冰凍,
                  2=金龍來襲,
                  3=金龍死亡(禁止進房)
              */
              //--鎖定的魚群的資料刪除要在fish/bullet裡面做(拿掉準星/移除子彈)
              if (value[0].status == 0) {
                this._frozenStatus = false; //--這邊可能要改成魚群的進退場(轉場)
                //this._fishGameAutoAndLockData?.removeAllLockData();
                //--刪掉boss的鎖定即可--to do 20240307
                //--removeAllLockDatabyRoomStatuChange這個方法要檢查,後續被清掉的子彈該何去何從?--to do 20240307
                //this.removeAllLockDatabyRoomStatuChange();

                if (this._spBossId > 0) {
                  this.removeAllLockDatabyRoomStatuChangeBosssTarget(this._spBossId);
                  this._spBossId = 0;
                }
              } else if (value[0].status == 1) {
                this._frozenStatus = true;
              } else if (value[0].status == 2) {
                this.removeAllLockDatabyRoomStatuChange();
              } //-


              break;

            case '_enterRoom':
              log('firstTime_enterRoom');

              this._mouseBehavior.setCreditToClickArea(0);

              break;

            case '_onCreditExchange':
              //--ps如果是開0分的話server他不會回-20240221
              //--開洗分回來
              if (value[0]) {
                //log('logic__onCreditExchange',this._viewModel['_exchangePlayerCredit']);
                //--因為第一次如果直接不換分進入遊戲,他會沒有相關的資料
                if (this._viewModel['_exchangePlayerCredit']) {
                  this._mouseBehavior.unBlockALL(); //-MSG.WAIT_EXCHANGING


                  this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                    error: Error()
                  }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                    error: Error()
                  }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_removeMessages, ['MSG.WAIT_EXCHANGING']);

                  this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                    error: Error()
                  }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                    error: Error()
                  }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_closeGameMessage, false);

                  let playercredit = this._viewModel['_exchangePlayerCredit'];
                  log('check_onCreditExchange', playercredit, playercredit.credits[this._playerTable].credit);

                  this._mouseBehavior.setCreditToClickArea(playercredit.credits[this._playerTable].credit);

                  if (this._autoShootStatus) {
                    this._enoughGunBet = false;
                    this.reStartAutoShoot();
                  }
                }
              }

              break;

            case '_errorCode':
              if (value[0].error == 'MSG.BALANCE_IS_NOT_ENOUGH') {
                this._mouseBehavior.unBlockALL();
              }

              break;

            case '_refundBullets':
              //let removeBulletids=this._viewModel['']
              log('Fish1GameLogicView___refundBullets', value[0]);

              this._fishGameAutoAndLockData.refundBulletDatas(value[0]);

              break;
          }
        }

        isDataValid(data, roomStatus) {
          if (roomStatus === 0) {
            return true;
          } else if (roomStatus === 1) {
            return data !== 1;
          } else if (roomStatus === 2) {
            return data !== 1 && data !== 2;
          }

          return false;
        }

        removeAllLockDatabyRoomStatuChange() {
          if (this._fishGameAutoAndLockData) {
            //this._fishGameAutoAndLockData.removeAllLockData();
            let removeLockFishData = this._fishGameAutoAndLockData.removeAllLockDataAndGetLockFishs();

            if (removeLockFishData.length > 0) {
              this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                error: Error()
              }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                error: Error()
              }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_cleanLocakTargetByDeathFishs, removeLockFishData);
            }
          }
        }

        removeAllLockDatabyRoomStatuChangeBosssTarget(spBossId) {
          if (this._fishGameAutoAndLockData) {
            this._fishGameAutoAndLockData.removeLockFishData(spBossId);

            this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
              error: Error()
            }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_cleanLocakTargetByDeathFishs, [this._spBossId]);
          }
        }

        //---check something before shoot bullet 
        beforeShootCheck(sendObj) {
          let s = sendObj;
          let fishTargetId; //let evt:GamePlayerModeEvent;

          if (this._autoShootStatus) {
            if (s.reLockTarget != undefined) {
              this.shootBeforCheck(s); //---dispatcher event
              //evt=new GamePlayerModeEvent(GamePlayerModeEvent.GAMEPLAYER_MODE_EVENT,GameBaseEvent.CLICK_SHOOT,false,s);
              //this.emit(GamePlayerModeEvent.GAMEPLAYER_MODE_EVENT,evt);
            } else {
              log("玩家手賤", s);

              if (s.endX != undefined && s.endY != undefined) {
                fishTargetId = this.addLockFishAimTarget(s.endX, s.endY);
                log('check_clickFish', fishTargetId);

                if (fishTargetId != -1) {
                  this.pauseAutoShootTime();

                  if (this._manualDoubleClickLock.fishId != -1) {
                    this._manualDoubleClickLock.fishId = fishTargetId;
                    this._manualDoubleClickLock.flag = true;
                  }

                  log("點選到魚", this._manualDoubleClickLock); //this._isLocking=true;

                  this.addFishAimTarget(fishTargetId);
                  this.reStartAutoShoot(); //-----市場資料需求20190604--

                  /*
                  if(this._lockModeFlag)
                  {
                     CommandStr.LockTimes+=1;
                     this.emit(GamePlayerModeEvent.GAMEPLAYER_MODE_EVENT,new GamePlayerModeEvent(GamePlayerModeEvent.GAMEPLAYER_MODE_EVENT,CommandStr.SEND_ANALYSIS_CLIENT,false,CommandStr.ANALYSIS_AUTO_LOCK)); 
                  }*/
                } else {
                  //log("沒選到魚::::"+this._isLocking,this._manualDoubleClickLock);
                  log("沒選到魚::::", this._manualDoubleClickLock);
                  log("check>>>" + this._autoShootStatus);
                  log("_lockModeFlag>>>>" + this._lockModeFlag);

                  if (this._manualDoubleClickLock.fishId != -1 && this._manualDoubleClickLock.flag) {
                    log("@@@@@@@@@@_doubleClick_nothing@@@@@@@@@"); //----取消並且發射單發
                    //---點到別處

                    this._lockModeFlag = false;
                    this._manualDoubleClickLock.fishId = -1;
                    this._manualDoubleClickLock.flag = false;

                    if (this._aryAutoLock.length <= 0) {
                      this.autoLockprocess(); //---true
                    }

                    this.cleanAutoLockCooldown(); //this._gui.lockAni(false);

                    this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                      error: Error()
                    }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                      error: Error()
                    }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_locakAim, false); //---原本的單擊發射


                    log("click_enought money_____close");
                    /*
                    if(this.checkSideExChangePanels())
                    {
                        this.closeSideExChangePanels();//--close
                    }  */
                    //---dispatcher event
                    //evt=new GamePlayerModeEvent(GamePlayerModeEvent.GAMEPLAYER_MODE_EVENT,GameBaseEvent.CLICK_SHOOT,false,s);
                    //this.emit(GamePlayerModeEvent.GAMEPLAYER_MODE_EVENT,evt);
                  } else {
                    if (this._aryAutoLock.length > 0) //---auto mode
                      {
                        if (this._lockModeFlag) {
                          this._lockModeFlag = false;
                          this.cleanAutoLockCooldown(); //this._gui.lockAni(false);

                          this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                            error: Error()
                          }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                            error: Error()
                          }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_locakAim, false);
                        }
                      }
                  }
                }
              }
            }
          } else {
            //--手動射擊
            let checkManualShoot = true;

            if (s.longPress != undefined && s.longPress != null) {
              if (!s.longPress) {
                if (s.endX != undefined && s.endY != undefined) {
                  fishTargetId = this.addLockFishAimTarget(s.endX, s.endY);

                  if (s.direction != undefined) {
                    if (s.direction) {
                      if (this._directionTargetPoint.x != s.endX || this._directionTargetPoint.y != s.endY) {
                        //--定向射擊
                        this._directionTargetPoint.x = s.endX;
                        this._directionTargetPoint.y = s.endY;
                        log('direction@@@@>>>', s.endX, s.endY, this._directionTargetPoint); //--後續處理特效(瞄準的數標放到新的座標)

                        this.removeEnterFrameMouse();
                        this.manualSetFollowPosition(s.endX, s.endY);
                      }
                    }
                  }

                  if (!this._doubleFlag) {
                    this._doubleFlag = true; //clickObj.doubleClick=false;
                    //---啟動計時器( 500-700ms)
                    //https://github.com/pixijs/pixi.js/issues/5910
                    //https://github.com/HusakYurii/pixi-additional-events
                    //https://www.pixiplayground.com/#/edit/UvM_wgJh0686y7Pdatx8C
                    //https://www.html5gamedevs.com/topic/27891-does-pixijs-support-double-tap-event-on-mobile-devices/

                    if (this._doubleTween == null) {
                      this._doubleTween = new TweenMax(this._doubleTweenObj, this._doubleTweenTimer, {
                        onComplete: () => {
                          this._doubleFlag = false;

                          this._doubleTween.pause(); //log("doubleclick_ENDD");


                          if (this._manualDoubleClickLock.fishId != -1 && !this._manualDoubleClickLock.flag) {
                            this._manualDoubleClickLock.fishId = -1;
                            this._manualDoubleClickLock.flag = false;
                          } //---double click

                        }
                      });

                      this._doubleTween.pause();
                    }

                    log("doubleclick_start"); //---第一次點擊(參考對照)
                    //---在時間內再度點擊~即視為double click的狀態

                    this._manualDoubleClickLock.fishId = fishTargetId;
                    this._manualDoubleClickLock.flag = false;

                    this._doubleTween.restart(); //--停止direction shoot

                  } else {
                    //---double click---短時間內連擊只會送double click
                    log('double click', fishTargetId); //clickObj.doubleClick=true;

                    if (this._manualDoubleClickLock.fishId != -1 && !this._manualDoubleClickLock.flag) {
                      if (this._manualDoubleClickLock.fishId == fishTargetId) {
                        checkManualShoot = false;
                        this._manualDoubleClickLock.fishId = fishTargetId;
                        this._manualDoubleClickLock.flag = true;
                        this._autoShootStatus = true;
                        this._lockModeFlag = true;
                        this.manualDoubleClickLockProcess(); //---選到魚

                        this.pauseAutoShootTime(); //this._isLocking=true;

                        this.addFishAimTarget(fishTargetId);
                        this.reStartAutoShoot(); //this._gui.lockAni(true);

                        this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                          error: Error()
                        }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                          error: Error()
                        }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_locakAim, true);
                      }
                    }
                  }
                }
              }
            }

            if (checkManualShoot) {
              //---原本的單擊發射
              log("click_enought money_____close", s);
              this.shootBeforCheck(s);
              /*
              if(this.checkSideExChangePanels())
              {
                  this.closeSideExChangePanels();//--close
              } 
              
              
              //---dispatcher event
              
              evt=new GamePlayerModeEvent(GamePlayerModeEvent.GAMEPLAYER_MODE_EVENT,GameBaseEvent.CLICK_SHOOT,false,s);
              
              this.emit(GamePlayerModeEvent.GAMEPLAYER_MODE_EVENT,evt);
              */
            }
          }
        }

        shootBeforCheck(s) {
          let shootflag = false; //log('shootBeforCheck', s)
          //--s裡面的info 已經有actionId
          //let str:string = (<GameSystemMode.PlayerMode>this._gamePlaySystem).getGunNowAction();

          let nowMoney = this._viewModel['_credit'];

          if (s.isFree) {
            shootflag = true;
          } else if (nowMoney - s.info.gunCredit >= 0) {
            shootflag = true;
          } //log("shootflag>>>",shootflag);

          /**
           * actionId: "BulletImage_0_0"
              endX: 1021.0532823741007
              endY: 575.2863084532374
              gunCredit: 5
              */
          // if (this._gameViewModel.getCredit() - this._gameViewModel.getCannonMoney(str) >= 0)


          if (shootflag) {
            if (this._autoFlagBynoExchange) {
              this._autoFlagBynoExchange = false; //this._viewModel.setModelData('_strErrorCode', '');
            }

            let strLockTarget = -1; //let useProp:number=0;

            if (s.reLockTarget != undefined) {
              strLockTarget = s.reLockTarget; //useProp=1;---20231027鎖定現在拔除道具改為常規功能
            }
            /**
             *  ---server 回送我這邊包裝出去的資料
             *  endX:data.si.x,
                endY:data.si.y,
                actionId:data.si.a,
                lockTarget:data.si.l,
                prop:data.si.p,
                isCrazy:data.si.c
             */
            //--實際內容要再修改


            let sendData = this.getShootData(s);

            if (strLockTarget != -1) {
              sendData['l'] = strLockTarget;
            }

            log('check_FishGameLogic_playerIndex', this._viewModel['_playerTableId'], s.info, strLockTarget, sendData);
            this.sendRecordData({
              data: sendData,
              lockMode: this._lockModeFlag
            });

            this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).ShootBullet, sendData, (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
              error: Error()
            }), ServerResCode) : ServerResCode).ShootBullet);
          } else {
            //--錢不夠的後續處理
            //--關閉面板的狀態下
            if (this._viewModel['_getMatchineDetial']) {
              if (!this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                error: Error()
              }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                error: Error()
              }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_checkExChangeShow)) {
                //---關閉面板狀態
                //--20240129--目前沒有一次換到爽的體系,所以是不會進來這裡
                if (this._viewModel['_noExchange']) {
                  //--換分直接換到完的模式
                  if (!this._autoFlagBynoExchange) {
                    let closeErrorMsg = {
                      type: 'connectClose',
                      code: -1,
                      error: 'MSG.NOT_ENOUGH_CREDIT'
                    };

                    this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                      error: Error()
                    }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                      error: Error()
                    }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_showAlert, closeErrorMsg);
                  }
                } else {
                  //--一般模式
                  if (this._autoShootStatus) {
                    //--自動模式
                    this.pauseAutoShootTime();
                  } else {
                    //--手動模式
                    if (this.checkClickStatus()) {
                      //--手動連續打擊的狀態
                      this.resetClickStatus();
                    }
                  } //let messageData=i18n.t('MSG.NOT_ENOUGH_CREDIT');


                  let messageData = {
                    message: (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                      error: Error()
                    }), i18n) : i18n).t('MSG.NOT_ENOUGH_CREDIT'),
                    type: 'MSG.NOT_ENOUGH_CREDIT'
                  };

                  this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                    error: Error()
                  }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                    error: Error()
                  }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_showGameMessage, messageData);

                  this._viewModel['_getMatchineDetial'] = false;
                  TweenMax.to({}, 0.5, {
                    onComplete: () => {
                      //--這裡只是拿機台的資料getmatchingdetail,不是exchange
                      //messageData={message:i18n.t('MSG.WAIT_EXCHANGING'),type:'MSG.WAIT_EXCHANGING'};
                      //this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView,GameViewMediatorUserDataKey.Gui_showGameMessage,messageData);
                      this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
                        error: Error()
                      }), ServerSendCode) : ServerSendCode).GetBalance, null, //--(實際上不用代資料)
                      (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                        error: Error()
                      }), ServerResCode) : ServerResCode).Balance);
                    }
                  }); //---show gamemessage   
                }
              }
            }
          }
        } //----mouseGameBase相關處理--------

        /*
        protected isIFAutoShoot(obj: any): obj is IFAutoShoot {
            return obj !== undefined && obj._autoShoot !== undefined;
        }*/


        autoLockprocess() {
          this._autoShootStatus = false; //this._isLocking=false;//--20190108新增

          if (this._mouseBehavior instanceof (_crd && MouseBehaviorAutoClick === void 0 ? (_reportPossibleCrUseOfMouseBehaviorAutoClick({
            error: Error()
          }), MouseBehaviorAutoClick) : MouseBehaviorAutoClick)) {
            this._mouseBehavior.autoShoot = false;
          }
        }

        manualDoubleClickLockProcess() {
          if (this._mouseBehavior instanceof (_crd && MouseBehaviorAutoClick === void 0 ? (_reportPossibleCrUseOfMouseBehaviorAutoClick({
            error: Error()
          }), MouseBehaviorAutoClick) : MouseBehaviorAutoClick)) {
            this._mouseBehavior.autoShoot = true;
          }

          if (this._mouseBehavior instanceof (_crd && MouseBehaviorAutoClick === void 0 ? (_reportPossibleCrUseOfMouseBehaviorAutoClick({
            error: Error()
          }), MouseBehaviorAutoClick) : MouseBehaviorAutoClick)) {
            //---取消定向射擊
            this._mouseBehavior.resetDitrectShoot();

            this._directionTargetPoint.x = -1;
            this._directionTargetPoint.y = -1; //this._gui.lockDirectionShoot(false);

            this.removeEnterFrameMouse();
            this.closeDirectionMouse();
            this._enoughGunBet = false;
          }
        } //----mouseGameBase相關處理--------


        checkClickStatus() {
          return this._mouseBehavior.checkClickStatus();
        }

        resetClickStatus() {
          return this._mouseBehavior.resetClickStatus();
        } //--自動打擊用的


        pauseAutoShootTime() {
          this._mouseBehavior.pauseAutoShootTime();
        }

        reStartAutoShoot() {
          //this._gameBase.reStartAutoShoot();---待補
          this._mouseBehavior.reStartAutoShoot();
        } //--定向射擊用的


        removeEnterFrameMouse() {
          /*
          this._showAnimationSystem.executeAnimation({
              type:CommandStr.ANI_Cid_FollowAimTargetEffectEffect,
              fun:CommandStr.ANI_FollowAimTargetEffect_removeEnterTarget
          });
          */
        } //--定向射擊用的


        closeDirectionMouse() {
          /*
          this._showAnimationSystem.executeAnimation({
              type:CommandStr.ANI_Cid_FollowAimTargetEffectEffect,
              fun:CommandStr.ANI_FollowAimTargetEffect_Close
          });
          */
        } //--定向射擊用的


        manualSetFollowPosition(x, y) {
          /*
          this._showAnimationSystem.executeAnimation({
              type:CommandStr.ANI_Cid_FollowAimTargetEffectEffect,
              fun:CommandStr.ANI_FollowAimTargetEffect_ManualSetPosition,
              other:
              {
                  endX:x,
                  endY:y
              }
          });
          */
        } //---移除前一個鎖定的魚種,並且清空子彈(玩家本身用的)

        /**
         * 
         * @param value fsih id
         */


        addFishAimTarget(value) {
          let previousFish = this._fishGameAutoAndLockData.addFishAimTarget(value); //--20231212
          //--這邊的fishID要寫進去
          //--子彈要回去bullet system刪掉,fishGameAutoAndLockData裡面只是刪掉編號


          if (previousFish != 0) {
            this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
              error: Error()
            }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_cleanAllPreviousLockTarget, previousFish);
          }

          this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
            error: Error()
          }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
            error: Error()
          }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_addFishAimLock, {
            fid: value,
            isPlayer: true,
            //index:this._viewModel['_playerTableId']
            index: this._playerTable
          });
        }

        cleanAutoLockCooldown() {
          log("cleanAutoLockCooldown");
          /*
          this._isLocking=false;
          var ary:any[]=this._renderBase.aryLockFishBullets;
          this._renderBase.removeLockFishData(ary[this._playerTable-1].lockFish);
          this.lockColdDownReady(this._playerTable);
          */

          /**
          * 舊版是gameplayerMode會call cleanAutoLockCooldown,裡面再call removeLockFishData
          * 新版直接call cleanLockdDataByTable送入玩家自己的桌號,
          * lockColdDownReady做的事情跟cleanLockdDataByTable一樣,刪除資料拔除子彈資料和魚網資料
          * 所以就直接在cleanLockdDataByTable做完就好
          * 這樣就不用在拿一次子彈 
          */
          //--會打出事件要回過頭來刪除魚支顯示面的資料和子彈的的實體紀錄資料
          //this._fishGameAutoAndLockData.cleanLockdDataByTable(this._viewModel['_playerTableId']);

          let previousFish = this._fishGameAutoAndLockData.aryLockFishBullets[this._playerTable].lockFish;

          if (previousFish != 0) {
            this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
              error: Error()
            }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_cleanAllPreviousLockTarget, previousFish);
          }

          this._fishGameAutoAndLockData.cleanLockdDataByTable(this._playerTable);
        } //--鎖定時間結束~釋放相關資料(整併到cleanAutoLockCooldown)

        /*
        protected lockColdDownReady(table:number):void
        {
            
            //this._renderBase.lockColdDownReady(table);
        }*/


        cleanManualLock(value) {
          if (this._manualDoubleClickLock.fishId == value) {
            this._manualDoubleClickLock.fishId = -1;
            this._manualDoubleClickLock.flag = false;

            if (this._aryAutoLock.length <= 0) {
              this._autoShootStatus = false;

              if (this._mouseBehavior instanceof (_crd && MouseBehaviorAutoClick === void 0 ? (_reportPossibleCrUseOfMouseBehaviorAutoClick({
                error: Error()
              }), MouseBehaviorAutoClick) : MouseBehaviorAutoClick)) {
                this._mouseBehavior.autoShoot = false;
              } //this._isLocking=false;//--20190108新增

            }

            this.cleanAutoLockCooldown();
            log('gameLogic_cleanManualLock_locakAim_');

            this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
              error: Error()
            }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_locakAim, false);
          }
        }
        /**
         *
         * @param mouseX 滑鼠點擊座標X
         * @param mouseY 滑鼠點擊座標Y
         * 回傳字串檢核是否與選定魚隻產生碰撞,沒有碰撞及回傳空字串
         */


        addLockFishAimTarget(mouseX, mouseY) {
          let returnFishId = -1;
          /**
           * 20231204-
           * return data={
           * fishDatas:[{fishSn: 1069, fishType: 10}]
           * }
           */

          if (this._shootFlag) {
            let checkPickUpData = this.checkLockFishAimTarget(mouseX, mouseY);
            log('addLockFishAimTarget_checkPickUpData', checkPickUpData);

            if (checkPickUpData) {
              returnFishId = checkPickUpData.fishDatas[0].fishSn;
            }
          }

          log('addLockFishAimTarget__shootFlag', this._shootFlag, returnFishId);
          return returnFishId;
        } //--check 鎖定+自動的物件是否在區域內


        checkLockIsinSide() {
          let rp = null; //let aryFishLockData: { lockFish: number, lockBullets: number[] }[] = this._fishGameAutoAndLockData.aryLockFishBullets;
          //let fishId: number = aryFishLockData[this._playerTable].lockFish;

          let fishId = this._fishGameAutoAndLockData.getLockFishData(this._playerTable); //log('checkLockIsinSide',aryFishLockData,fishId);
          //let fish2dNode:Node=


          if (fishId != 0) {
            let f = this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
              error: Error()
            }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_getFishById, fishId);

            if (f) {
              if (!f.prohibit && !f.isDead) {
                rp = this.checkFishDataInBaundary(f);
              }
            }
            /*
            if(f)
            {
               let worldPos:Vec3;
               let localPos:Vec3;
                if(this._arySpFishType.indexOf(f.fishType)!=-1)
               {
                    rp=this.checkSpFishInSide(f);
                }else{
                  
                 
                   if(!f.prohibit && !f.isDead)
                  {
                        
                       //--這邊要分2D/3D魚
                        worldPos=(f.fishMeshState==fishMeshState.fish2D)?GameUtils.cover3dor2dToWorldPos(this._fish2DContainerNode,f.fishMesh.position):GameUtils.cover3dor2dToWorldPos(this._sceneCameraNode,f.fishMesh.position,this._canvasCameraNode);
                         //worldPos=this._fish2DContainerNode.getComponent(UITransform).convertToWorldSpaceAR(f.fishMesh.position); 
                         localPos=this._mouseContainerNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
                         if(localPos.x<=AREA_BOUNDARY.w && localPos.x>AREA_BOUNDARY.x)
                        {
                            if(localPos.y<=AREA_BOUNDARY.h && localPos.y>AREA_BOUNDARY.y)
                            {
                                //--這邊給world座標(滑鼠也是送world pos)
                                //-{pos:Vec3,reLockTarget:number,lockFishType:number}
                                rp=
                                {
                                    pos:worldPos,
                                    reLockTarget:f.id,
                                    lockFishType:f.fishType//--這個好像不會用到阿
                                }
                            }
                         }
                  }
                } 
            }*/

          }

          return rp;
        } //--自動選擇


        checkTargetAndAutoShoot() {
          //let rp:any=null;
          let rp = null;

          if (this._autoShootStatus && this._aryAutoLock.length > 0) {
            let fishs = this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
              error: Error()
            }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_getFishs);

            let len = this._aryAutoLock.length;

            for (let i = 0; i < len; i++) {
              //--{id: 21, odds: '500'}
              for (let j = 0; j < fishs.length; j++) {
                if (this._aryAutoLock[i].id == fishs[j].fishType && !fishs[j].fishIsFlash && !fishs[j].prohibit && !fishs[j].isDead) {
                  rp = this.checkFishDataInBaundary(fishs[j]);

                  if (rp) {
                    break;
                  }
                }
              }

              if (rp != null) break;
            }
          }

          return rp;
        }

        checkFishDataInBaundary(f) {
          let rp = null;
          let worldPos;
          let localPos;

          if (this._arySpFishType.indexOf(f.fishType) != -1) {
            rp = this.checkSpFishInSide(f);
          } else {
            //if(!f.prohibit && !f.isDead)
            //{
            //--這邊要分2D/3D魚
            worldPos = f.fishMeshState == (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
              error: Error()
            }), fishMeshState) : fishMeshState).fish2D ? (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).cover3dor2dToWorldPos(this._fish2DContainerNode, f.fishMesh.position) : (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).cover3dor2dToWorldPos(this._sceneCameraNode, f.fishMesh.position, this._canvasCameraNode); //worldPos=this._fish2DContainerNode.getComponent(UITransform).convertToWorldSpaceAR(f.fishMesh.position); 

            localPos = this._mouseContainerNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);

            if (localPos.x <= (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
              error: Error()
            }), AREA_BOUNDARY) : AREA_BOUNDARY).w && localPos.x > (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
              error: Error()
            }), AREA_BOUNDARY) : AREA_BOUNDARY).x) {
              if (localPos.y <= (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
                error: Error()
              }), AREA_BOUNDARY) : AREA_BOUNDARY).h && localPos.y > (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
                error: Error()
              }), AREA_BOUNDARY) : AREA_BOUNDARY).y) {
                //--這邊給world座標(滑鼠也是送world pos)
                //-{pos:Vec3,reLockTarget:number,lockFishType:number}
                rp = {
                  pos: worldPos,
                  reLockTarget: f.id,
                  lockFishType: f.fishType //--這個好像不會用到阿

                };
              }
            } //}

          }

          return rp;
        } //---特殊物件的邊界檢測(autoshoot)
        //---測試用塞入點擊座標
        //---20240412--塞入紀錄資料


      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_hitFishs", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_roomStatus", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "_noExchange", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "_onCreditExchange", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "_errorCode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "_enterRoom", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "_refundBullets", [_dec7], {
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
//# sourceMappingURL=ac24e03650854ad914ecb6a8eee22e391edc6da1.js.map