System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AbstractModel, Mutable, GameEventBase, GameUtils, log, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _crd, FishModelBase;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAbstractModel(extras) {
    _reporterNs.report("AbstractModel", "../../abstract/mvvm/AbstractModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMutable(extras) {
    _reporterNs.report("Mutable", "../../abstract/mvvm/AbstractModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEventBase(extras) {
    _reporterNs.report("GameEventBase", "../../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResultForConnect(extras) {
    _reporterNs.report("ResultForConnect", "../../game/strategy/Strategy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishInitData(extras) {
    _reporterNs.report("FishInitData", "../../game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOddsInfo(extras) {
    _reporterNs.report("OddsInfo", "../../game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletSettingData(extras) {
    _reporterNs.report("BulletSettingData", "../../game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableInfo(extras) {
    _reporterNs.report("TableInfo", "../../game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../utils/GameUtils", _context.meta, extras);
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
      AbstractModel = _unresolved_2.AbstractModel;
      Mutable = _unresolved_2.Mutable;
    }, function (_unresolved_3) {
      GameEventBase = _unresolved_3.GameEventBase;
    }, function (_unresolved_4) {
      GameUtils = _unresolved_4.GameUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3237ats29JMAYztRnIGP9jY", "FishModel", undefined);
      /**
       * Created by EricHuang on 2023/9/19.
       */


      __checkObsolete__(['log']);

      _export("FishModelBase", FishModelBase = (_dec = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec2 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec3 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec4 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec5 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec6 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec7 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec8 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec9 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec10 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec11 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec12 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec13 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec14 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec15 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec16 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec17 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec18 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec19 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec20 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec21 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec22 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec23 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec24 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec25 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec26 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec27 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec28 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec29 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec30 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec31 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec32 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec33 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec34 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, _dec35 = _crd && Mutable === void 0 ? (_reportPossibleCrUseOfMutable({
        error: Error()
      }), Mutable) : Mutable, (_class = class FishModelBase extends (_crd && AbstractModel === void 0 ? (_reportPossibleCrUseOfAbstractModel({
        error: Error()
      }), AbstractModel) : AbstractModel) {
        //--房間人數上限
        //protected _balance:number;
        constructor() {
          super();

          //====預設資料,view不需要綁定,因為他不會變化
          _initializerDefineProperty(this, "_fishTypeKeyMap", _descriptor, this);

          _initializerDefineProperty(this, "_fishTypeSpeedMap", _descriptor2, this);

          _initializerDefineProperty(this, "_aryOddsInfo", _descriptor3, this);

          //---賠率資訊
          //@Mutable _aryScorePool:number[][];//--砲塔的分數與樣式的分布

          /**
           * scoer-分數
           * type-子彈的樣式(server吃這個資料)
           * pu=powerup
           */
          //@Mutable _aryScorePool:{score:number,type:number,pu:number}[][];//--砲塔的分數與樣式的分布
          _initializerDefineProperty(this, "_aryScorePool", _descriptor4, this);

          //--砲塔的分數與樣式的分布
          _initializerDefineProperty(this, "_mapCannonInfo", _descriptor5, this);

          _initializerDefineProperty(this, "_cleanAllRoom", _descriptor6, this);

          //--20240301--玩家離開房間回到選聽畫面
          //@Mutable _aryScore:number[][];//--砲塔的分數與樣式的分布
          _initializerDefineProperty(this, "_defualtGunValue", _descriptor7, this);

          //--預設分數
          _initializerDefineProperty(this, "_aryActionInfo", _descriptor8, this);

          //--這邊要做兩層,一層成就子彈,一層一般子彈
          _initializerDefineProperty(this, "_aryRoomInfo", _descriptor9, this);

          //---房間內桌位資訊(一個房間四個位置)--紀錄桌位
          //====預設資料,view不需要綁定,因為他不會變化
          _initializerDefineProperty(this, "_uid", _descriptor10, this);

          //--user id
          _initializerDefineProperty(this, "_hallID", _descriptor11, this);

          //--hall id
          _initializerDefineProperty(this, "_loginName", _descriptor12, this);

          // 會員帳號
          _initializerDefineProperty(this, "_playerTableId", _descriptor13, this);

          //--userTable id 0-3
          _initializerDefineProperty(this, "_noExchange", _descriptor14, this);

          //--true=該版本(直接換分換完),false正常版本
          _initializerDefineProperty(this, "_exchangeCredit", _descriptor15, this);

          //--洗分分數
          _initializerDefineProperty(this, "_exchangeAmount", _descriptor16, this);

          //---洗分金額
          _initializerDefineProperty(this, "_balance", _descriptor17, this);

          // 會員餘額
          _initializerDefineProperty(this, "_getMatchineDetial", _descriptor18, this);

          _initializerDefineProperty(this, "_base", _descriptor19, this);

          // 匯率(基注)列表
          _initializerDefineProperty(this, "_defaultBase", _descriptor20, this);

          // 預設匯率(基注)
          _initializerDefineProperty(this, "_betBase", _descriptor21, this);

          // 匯率(基注)
          _initializerDefineProperty(this, "_wagersID", _descriptor22, this);

          // 局號
          _initializerDefineProperty(this, "_payoff", _descriptor23, this);

          // 得分
          _initializerDefineProperty(this, "_autoCreditExchange", _descriptor24, this);

          //--玩家是否啟動自動換分
          _initializerDefineProperty(this, "_autoCreditMoney", _descriptor25, this);

          //---玩家自動換分的金額
          _initializerDefineProperty(this, "_firstgetAutoCreditExchange", _descriptor26, this);

          //--紀錄第一次取用autoCreditExchange資料
          _initializerDefineProperty(this, "_exchangeRatio", _descriptor27, this);

          //----玩家使用的匯率
          //@Mutable _strErrorCode:string;//----error code
          _initializerDefineProperty(this, "_hadMission", _descriptor28, this);

          //----任務系統
          _initializerDefineProperty(this, "_onCreditExchange", _descriptor29, this);

          //----開洗分回來(要開洗分通知=false,成功返回=true)
          _initializerDefineProperty(this, "_exchangePlayerCredit", _descriptor30, this);

          //----開分後,尚未擊發子彈玩家所有的餘額
          _initializerDefineProperty(this, "_credit", _descriptor31, this);

          // 可用分數
          //--errorcode---這邊的type是要來判斷開啟哪一個面板
          //@Mutable _errorCode:{type:string,code:number,error:string};     
          _initializerDefineProperty(this, "_errorCode", _descriptor32, this);

          _initializerDefineProperty(this, "_inGameMessage", _descriptor33, this);

          _initializerDefineProperty(this, "_pingInfo", _descriptor34, this);

          _initializerDefineProperty(this, "_enterRoom", _descriptor35, this);

          //@Mutable _exitAllFish:boolean;   //--魚群離場
          this._roomTableMax = void 0;

          //--erroe code---

          /*
          public getErrorCode():string
          {
             return this._strErrorCode;
          }
           public noChangeSetErrCode(value:string):void
          {
             this._strErrorCode=value;
          }*/
          this.serverPingBack = value => {};

          this.serverResBack = value => {};

          this._fishTypeKeyMap = {};
          this._fishTypeSpeedMap = {};
          this._aryOddsInfo = [];
          this._aryScorePool = [];
          this._mapCannonInfo = {}; //--20231004新增

          this._defualtGunValue = 0;
          this._aryActionInfo = [];
          this._aryRoomInfo = [];
          this._cleanAllRoom = false; //--20240301 玩家離開房間回到選聽畫面

          this._uid = 0;
          this._hallID = -99999;
          this._exchangeRatio = 1;
          this._noExchange = false;
          this._exchangeCredit = 0; //--洗分分數

          this._exchangeAmount = 0; //---洗分金額

          this._loginName = ""; // 會員帳號

          this._balance = 0; // 會員餘額

          this._credit = 0; // 可用分數

          this._base = ""; // 匯率(基注)列表

          this._defaultBase = ""; // 預設匯率(基注)

          this._betBase = ""; // 匯率(基注)

          this._getMatchineDetial = false;
          this._wagersID = 0; // 局號

          this._payoff = 0;
          this._autoCreditExchange = true; //--玩家啟動自動換分(2022預設值=true) 

          this._autoCreditMoney = 0; //----玩家需要自動換分的金額

          this._firstgetAutoCreditExchange = false;
          this._playerTableId = -1;
          this._onCreditExchange = true;
          this._enterRoom = false;
          this._hadMission = false; //--任務系統
        }

        loaded() {
          super.loaded();
          this.initModelData();
          this.initSetRoom();

          this._netConnect.on((_crd && GameEventBase === void 0 ? (_reportPossibleCrUseOfGameEventBase({
            error: Error()
          }), GameEventBase) : GameEventBase).CONNECTOR_EVT, this.serverResBack);

          this._netConnect.on((_crd && GameEventBase === void 0 ? (_reportPossibleCrUseOfGameEventBase({
            error: Error()
          }), GameEventBase) : GameEventBase).CONNECTOR_PING_EVT, this.serverPingBack);
        } //--初始要設定的資料(遊戲初始化的必要資料(沒有連server))


        initModelData() {} //--可以override--


        initSetRoom() {
          let table;

          for (let i = 0; i < this._roomTableMax; i++) {
            table = {
              tableID: i,
              //--桌位編號 index 0-3
              userID: 0,
              isPlayer: false,
              userLoginName: '',
              credit: 0
            };
            this._aryRoomInfo[i] = table;
          }
        } //---分配座位或是換位置server認可後的資料


        setRoom(seats) {
          log('check_setroom_fishMode@@@@_start', seats); //--這邊送進來是一個object map--20230807-

          /**
          * 進來會是一個object
          * [key:tableIndex--0-3]
          * { 
          a:"test123RMB"---玩家帳號
          bt:0---bonus狀態(?)
          n:"test123RMB"--玩家暱稱
          p:456052319---玩家id
          po:0--玩家分數
          s:0---座位號
          si:null--client自定義的資料
          w:1--砲台型態,武器類別
          }
          */

          for (let i in seats) {
            if (seats[i].p == this._uid) {
              //--玩家本身
              this._aryRoomInfo[seats[i].s].isPlayer = true;
              this._loginName = seats[i].a;
              this._aryRoomInfo[seats[i].s].userLoginName = seats[i].a;
            } else {
              this._aryRoomInfo[seats[i].s].userLoginName = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).processAccountName(seats[i].a);
            }

            this._aryRoomInfo[seats[i].s].credit = seats[i].po;
            this._aryRoomInfo[seats[i].s].userID = seats[i].p;
          }

          this._playerTableId = this.getTableIdByUserId(this._uid); //log('setRoom',this._aryRoomInfo,this._playerTableId);
        } //---房間內玩家金錢異動
        //protected setRoomCredit(a:any[]):void

        /**
         * serverback={ s: 0(座位), p: 1000(餘額) }
         * @param a 
         */


        setRoomCredit(index, credit) {
          //----20190221--正式要打開
          let len = this._aryRoomInfo.length;

          for (var i = 0; i < len; i++) {
            if (i == index) {
              this._aryRoomInfo[i].credit = credit;

              if (this._aryRoomInfo[i].userID == this._uid) {
                this._credit = credit; //log('setRoomCredit',this._aryRoomInfo);
              }

              break;
            }
          }
        } //---清空座位


        cleanRoomTable(table) {
          this._aryRoomInfo[table].userID = 0;
          this._aryRoomInfo[table].credit = 0;
          this._aryRoomInfo[table].userLoginName = "";
          this._aryRoomInfo[table].isPlayer = false;
        }

        cleanRoom() {
          for (let i = 0; i < this._aryRoomInfo.length; i++) {
            this._aryRoomInfo[i].userID = 0;
            this._aryRoomInfo[i].credit = 0;
            this._aryRoomInfo[i].userLoginName = "";
            this._aryRoomInfo[i].isPlayer = false;
          }
        }

        getTableIdByUserId(id) {
          let uid = id == undefined ? this._uid : id; //log('getTableIdByUserId',id,uid,this._aryRoomInfo);

          let index = -1;

          for (let i = 0; i < this._aryRoomInfo.length; i++) {
            if (this._aryRoomInfo[i].userID == uid) {
              index = i;
              break;
            }
          } //--資料異動他自己會透過setter回傳
          //this._playerTableId=index;


          return index;
        }

        //--override or pending completion--20230920
        gameLogout() {} //--override or pending completion--20230920


        closeAIOtoGameMenu() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_fishTypeKeyMap", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_fishTypeSpeedMap", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "_aryOddsInfo", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "_aryScorePool", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "_mapCannonInfo", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "_cleanAllRoom", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "_defualtGunValue", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "_aryActionInfo", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "_aryRoomInfo", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "_uid", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "_hallID", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "_loginName", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "_playerTableId", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "_noExchange", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "_exchangeCredit", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "_exchangeAmount", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "_balance", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "_getMatchineDetial", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, "_base", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, "_defaultBase", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, "_betBase", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, "_wagersID", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, "_payoff", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, "_autoCreditExchange", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, "_autoCreditMoney", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, "_firstgetAutoCreditExchange", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, "_exchangeRatio", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor28 = _applyDecoratedDescriptor(_class.prototype, "_hadMission", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor29 = _applyDecoratedDescriptor(_class.prototype, "_onCreditExchange", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor30 = _applyDecoratedDescriptor(_class.prototype, "_exchangePlayerCredit", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor31 = _applyDecoratedDescriptor(_class.prototype, "_credit", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor32 = _applyDecoratedDescriptor(_class.prototype, "_errorCode", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor33 = _applyDecoratedDescriptor(_class.prototype, "_inGameMessage", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor34 = _applyDecoratedDescriptor(_class.prototype, "_pingInfo", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor35 = _applyDecoratedDescriptor(_class.prototype, "_enterRoom", [_dec35], {
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
//# sourceMappingURL=e3684846bd32fbd543bdb3a681827896b75c621f.js.map