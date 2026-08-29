System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AbstractViewModel, Bindable, ServerSendCode, ServerResCode, log, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _crd, FishVM;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAbstractViewModel(extras) {
    _reporterNs.report("AbstractViewModel", "../../abstract/mvvm/AbstractViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBindable(extras) {
    _reporterNs.report("Bindable", "../../abstract/mvvm/AbstractViewModel", _context.meta, extras);
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

  function _reportPossibleCrUseOfServerSendCode(extras) {
    _reporterNs.report("ServerSendCode", "../../logic/connect/ConnectBaseDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerResCode(extras) {
    _reporterNs.report("ServerResCode", "../../logic/connect/ConnectBaseDefinitions", _context.meta, extras);
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
      AbstractViewModel = _unresolved_2.AbstractViewModel;
      Bindable = _unresolved_2.Bindable;
    }, function (_unresolved_3) {
      ServerSendCode = _unresolved_3.ServerSendCode;
      ServerResCode = _unresolved_3.ServerResCode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b792LuP9NOgLA0mfX2P3SG", "FishVM", undefined);
      /**
       * Created by EricHuang on 2023/9/20.
       * VM主要控制
       * 1.拿model的映射資料
       * 2.call server
       * 3.派送server responde data
       * 4.控制流程(call server的流程,或是相關與server的流程(例如斷線後的處理))
       * 5.也可以對映射資料做操作
       */


      __checkObsolete__(['log']);

      _export("FishVM", FishVM = (_dec = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec2 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec3 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec4 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec5 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec6 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec7 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec8 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec9 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec10 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec11 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec12 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec13 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec14 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec15 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec16 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec17 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec18 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec19 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec20 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec21 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec22 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, _dec23 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
        error: Error()
      }), Bindable) : Bindable, (_class = class FishVM extends (_crd && AbstractViewModel === void 0 ? (_reportPossibleCrUseOfAbstractViewModel({
        error: Error()
      }), AbstractViewModel) : AbstractViewModel) {
        constructor() {
          super();

          //====預設資料,view不需要綁定,因為他不會變化
          _initializerDefineProperty(this, "_fishTypeKeyMap", _descriptor, this);

          _initializerDefineProperty(this, "_fishTypeSpeedMap", _descriptor2, this);

          _initializerDefineProperty(this, "_aryOddsInfo", _descriptor3, this);

          //---賠率資訊
          _initializerDefineProperty(this, "_aryScorePool", _descriptor4, this);

          //--砲塔的分數與樣式的分布
          _initializerDefineProperty(this, "_mapCannonInfo", _descriptor5, this);

          _initializerDefineProperty(this, "_defualtGunValue", _descriptor6, this);

          //--預設分數
          _initializerDefineProperty(this, "_aryActionInfo", _descriptor7, this);

          _initializerDefineProperty(this, "_enterRoom", _descriptor8, this);

          //--進房通知
          _initializerDefineProperty(this, "_aryRoomInfo", _descriptor9, this);

          //---房間內桌位資訊(一個房間四個位置)--紀錄桌位
          _initializerDefineProperty(this, "_playerTableId", _descriptor10, this);

          //--userTable id  0-3
          _initializerDefineProperty(this, "_cleanAllRoom", _descriptor11, this);

          _initializerDefineProperty(this, "_credit", _descriptor12, this);

          // 可用分數
          _initializerDefineProperty(this, "_balance", _descriptor13, this);

          // 可用餘額
          _initializerDefineProperty(this, "_base", _descriptor14, this);

          // 匯率(基注)列表
          _initializerDefineProperty(this, "_loginName", _descriptor15, this);

          // 會員帳號
          _initializerDefineProperty(this, "_getMatchineDetial", _descriptor16, this);

          // 拿會員的機台資訊(餘額)
          _initializerDefineProperty(this, "_autoCreditExchange", _descriptor17, this);

          //--玩家啟動自動換分(2022預設值=true) 
          _initializerDefineProperty(this, "_autoCreditMoney", _descriptor18, this);

          //----玩家需要自動換分的金額
          _initializerDefineProperty(this, "_onCreditExchange", _descriptor19, this);

          //----玩家開洗分來回
          _initializerDefineProperty(this, "_hallID", _descriptor20, this);

          //_hallID
          _initializerDefineProperty(this, "_strErrorCode", _descriptor21, this);

          // error
          //====預設資料,view不需要綁定,因為他不會變化
          _initializerDefineProperty(this, "_setPlayerRoomforLocalDebug", _descriptor22, this);

          //--localyDebug
          _initializerDefineProperty(this, "_testData", _descriptor23, this);
        }

        onLoad() {//super.onLoad();
          //---do something
        }

        async notify(key, value) {
          //---接收model資料改變的派送
          log('vm get notify', key, value);
          super.notify(key, value);

          if (key == '_setPlayerRoomforLocalDebug') {
            await this.localDebugInitRoom(key);
            await this.setBalance();
            this.localDebugCreateFish();
          }

          if (key == '_testData') {
            this.localDebugTestData();
          }
        }
        /*
        protected localDebugInit():void
        {
         }*/


        localDebugTestData() {}

        localDebugCreateFish() {}

        async localDebugInitRoom(key) {//--call server(把資料寫回去繼續下一步驟)
        }

        async setBalance() {//--模擬進房後第一次server送進來的balance
        }
        /*
        public noChangeSetErrCode(value:string):void
        {
          //this._mo=value;
          this._model['_strErrorCode']=value;
        }*/


        sendServer(key, value, localDebugResType) {
          if (this._localDebug) {
            //---走lcoal端的測試流程
            if (key == (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).ChoiceLobby) {
              localDebugResType = (_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
                error: Error()
              }), ServerSendCode) : ServerSendCode).EnterRoomLocalDebug;
              localDebugResType = (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).EnterRoomLocalDebug;
            }

            log('check_localDebug_sendServer', key, value, localDebugResType);
            this.localDebugMode(key, value, localDebugResType);
            this.afterFirstSendServerDebug(key, value, localDebugResType);
          } else {
            super.sendServer(key, value);
          }
        }
        /**
         * 用於localdebug要分兩次驅動不同的server
         * @param key 
         * @param value 
         * @param localDebugResType 
         */


        afterFirstSendServerDebug(key, value, localDebugResType) {} //--override or pending completion--20230920


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
      }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "_defualtGunValue", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "_aryActionInfo", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "_enterRoom", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "_aryRoomInfo", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "_playerTableId", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "_cleanAllRoom", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "_credit", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "_balance", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "_base", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "_loginName", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "_getMatchineDetial", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "_autoCreditExchange", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "_autoCreditMoney", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, "_onCreditExchange", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, "_hallID", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, "_strErrorCode", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, "_setPlayerRoomforLocalDebug", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, "_testData", [_dec23], {
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
//# sourceMappingURL=16884ade8eb22c9c6bc4e8cdf8f5c18defc08088.js.map