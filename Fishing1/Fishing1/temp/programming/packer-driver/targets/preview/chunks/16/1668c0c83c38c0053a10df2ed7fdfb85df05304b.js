System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FishVM, ServerSendCode, ServerResCode, log, Bindable, viewModel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _crd, Fish1VM;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFishVM(extras) {
    _reporterNs.report("FishVM", "../../framework/logic/viewModel/FishVM", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableInfo(extras) {
    _reporterNs.report("TableInfo", "../../framework/game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddbullet(extras) {
    _reporterNs.report("addbullet", "./../model/Fish1ModelDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddFish(extras) {
    _reporterNs.report("addFish", "./../model/Fish1ModelDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerSendCode(extras) {
    _reporterNs.report("ServerSendCode", "../../framework/logic/connect/ConnectBaseDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerResCode(extras) {
    _reporterNs.report("ServerResCode", "../../framework/logic/connect/ConnectBaseDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBindable(extras) {
    _reporterNs.report("Bindable", "../../framework/abstract/mvvm/AbstractViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewModel(extras) {
    _reporterNs.report("viewModel", "../../framework/abstract/mvvm/AbstractViewModel", _context.meta, extras);
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
      FishVM = _unresolved_2.FishVM;
    }, function (_unresolved_3) {
      ServerSendCode = _unresolved_3.ServerSendCode;
      ServerResCode = _unresolved_3.ServerResCode;
    }, function (_unresolved_4) {
      Bindable = _unresolved_4.Bindable;
      viewModel = _unresolved_4.viewModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "17d68EkQcdE5KnM4skjLCGX", "Fish1VM", undefined);
      /**
       * Created by EricHuang on 2023/9/23.
       * 
       */


      __checkObsolete__(['log']);

      _export("Fish1VM", Fish1VM = (_dec = (_crd && viewModel === void 0 ? (_reportPossibleCrUseOfviewModel({
        error: Error()
      }), viewModel) : viewModel)('Fish1VM'), _dec2 = _crd && Bindable === void 0 ? (_reportPossibleCrUseOfBindable({
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
      }), Bindable) : Bindable, _dec(_class = (_class2 = class Fish1VM extends (_crd && FishVM === void 0 ? (_reportPossibleCrUseOfFishVM({
        error: Error()
      }), FishVM) : FishVM) {
        constructor() {
          super();

          //--透過 @Bindable註冊要拿的變數(向VM拿,不拿只是單純收到通知就不用在這註冊了)
          _initializerDefineProperty(this, "_addbullets", _descriptor, this);

          //====fish===========
          _initializerDefineProperty(this, "_addFishs", _descriptor2, this);

          _initializerDefineProperty(this, "_addPopFishs", _descriptor3, this);

          _initializerDefineProperty(this, "_hitFishs", _descriptor4, this);

          //=====Lobby==========
          _initializerDefineProperty(this, "_lobbyData", _descriptor5, this);

          _initializerDefineProperty(this, "_loginName", _descriptor6, this);

          // 會員帳號
          //======room=======
          _initializerDefineProperty(this, "_roomTableInfo", _descriptor7, this);

          //---credit for after exchange
          _initializerDefineProperty(this, "_exchangePlayerCredit", _descriptor8, this);

          _initializerDefineProperty(this, "_credit", _descriptor9, this);

          _initializerDefineProperty(this, "_firstgetAutoCreditExchange", _descriptor10, this);

          _initializerDefineProperty(this, "_roomStatus", _descriptor11, this);

          //=====bullets==========
          _initializerDefineProperty(this, "_refundBullets", _descriptor12, this);

          //====props=============
          _initializerDefineProperty(this, "_props", _descriptor13, this);

          _initializerDefineProperty(this, "_propRunData", _descriptor14, this);

          //====boss=============
          _initializerDefineProperty(this, "_bossStatus", _descriptor15, this);

          //--檢查龍的離場狀態 
          _initializerDefineProperty(this, "_exchangeRatio", _descriptor16, this);
        }

        localDebugInitRoom(key) {
          var _this = this;

          return _asyncToGenerator(function* () {
            //--call server(把資料寫回去繼續下一步驟)
            log('localDebugInitRoom_Fish1VM', key);

            _this.changeRoomStatus(0); //--server這個會比換座位送的還要快,所以要先做


            return new Promise((resolve, reject) => {
              _this.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
                error: Error()
              }), ServerSendCode) : ServerSendCode).InitPlayerInfoLocalDebug, {
                //'0':{a:'testEric',bt:0,n:"testEric",p:456052319,po:12345,s:0,si:null,put:{},w:1},
                //'0':{a:'testOtherX',bt:0,n:"testOtherx",p:456052300,po:124,s:0,si:null,put:{},w:1},
                '0': {
                  a: '',
                  bt: 0,
                  n: "",
                  p: 0,
                  po: 0,
                  s: 0,
                  si: null,
                  put: {},
                  w: 1
                },
                //'1':{a:'testEric',bt:0,n:"testEric",p:456052319,po:12345,s:1,si:null,put:{},w:1},
                '1': {
                  a: '',
                  bt: 0,
                  n: "",
                  p: 0,
                  po: 0,
                  s: 1,
                  si: null,
                  put: {},
                  w: 1
                },
                '2': {
                  a: '',
                  bt: 0,
                  n: "",
                  p: 0,
                  po: 0,
                  s: 2,
                  si: null,
                  put: {},
                  w: 1
                },
                //'2':{a:'testOther1',bt:0,n:"testOther1",p:456052300,po:124,s:2,si:null,put:{},w:1},
                '3': {
                  a: 'testEric',
                  bt: 0,
                  n: "testEric",
                  p: 456052319,
                  po: 12345,
                  s: 3,
                  si: null,
                  put: {},
                  w: 1
                } //'3':{a:'',bt:0,n:"",p:0,po:0,s:3,si:null,put:{},w:1}
                //'3':{a:'testOther2',bt:0,n:"testOther2",p:456052319,po:12345.658,s:3,si:null,put:{},w:1}

              }, (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).InitPlayerInfo);

              resolve();
            });
          })();
        } //--模擬進房後第一次server送進來的balance


        setBalance() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              _this2.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
                error: Error()
              }), ServerSendCode) : ServerSendCode).GetBalance, null, //--(實際上不用代資料)
              (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                error: Error()
              }), ServerResCode) : ServerResCode).Balance);

              resolve();
            });
          })();
        }

        changeRoomStatus(value) {
          /**
           * 房間狀態server回送的
              et: 1697522412269
              s: 2
              st: 1697522345269
          *
            ps狀態代碼資訊
            0=正常/一般狀態,
            1=冰凍,
            2=金龍來襲,
            3=金龍死亡(禁止進房)
          */

          /**
           returnObj=
           {
             status:data.s,//--狀態
             startTime:data.st,//--開始時間(毫秒?)
             endTime:data.et//---結束時間(毫秒?)
           }
           */
          this.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
            error: Error()
          }), ServerSendCode) : ServerSendCode).UpdateRoomStsteLocalDebug, {
            s: value,
            st: 0,
            et: 0
          }, (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).UpdateRoomStatus);
        } //--這邊就是localdebug用的


        afterFirstSendServerDebug(key, value, localDebugResType) {
          log('afterFirstSendServerDebug', key, value, localDebugResType);

          if (localDebugResType == (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).UseProp) {
            if (value.pt == 2) {
              //---冰凍
              this.changeRoomStatus(1);
              this.testPropRoomStateTimer(value.dcd);
            }
          } else if (localDebugResType == (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
            error: Error()
          }), ServerResCode) : ServerResCode).HitFish) {
            this.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).UpdatePropLocalDebug, {
              pl: {
                '1': Math.floor(Math.random() * 100),
                '2': Math.floor(Math.random() * 100),
                '3': Math.floor(Math.random() * 100)
              }
            }, (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
              error: Error()
            }), ServerResCode) : ServerResCode).UpdateProp);
          }
        }

        testPropRoomStateTimer(time) {
          TweenMax.to({}, time, {
            onComplete: () => {
              this.changeRoomStatus(0);
            }
          });
        } //---test data


        localDebugTestData() {
          this.changeRoomStatus(2);
        } //--做想要的測試,ex createfish


        localDebugCreateFish() {
          var _this3 = this;

          //return;
          //--for test

          /*
          let fishData=[
            
             22948,13,0,211000,false,
             22980,4,0,104003,false,
             22982,5,0,113011,false,
             23005,7,0,204002,false
            ];*/

          /**
            * server 回送的資料
            * fs物件陣列-魚隻陣列(物件陣列)
            * 物件資料->
            * id-魚隻id number
            * type-魚種代碼 number
            * pathID-路徑代碼 number
            * speed-速度(秒) number
            * time-已存活時間/目前移動多久(毫秒) number
            * freeze-被冰凍時間累積(毫秒)number 
            * isReverse-是否路徑反向 boolean
            * 
            * { fs:
                 [ { id: 1,
                     type: 1,
                     pathID: 111000,
                     speed: 1,
                     time: 6026,
                     freeze: 10000,
                     isReverse: true },
                     { id: 2,
                     type: 1,
                     pathID: 111006,
                     speed: 1,
                     time: 6026,
                     freeze: 10000,
                     isReverse: true }
                 ]}
             * 
             * --old
             * 0->fishID 
               1->fishType 
               2->alreadyRunTime--->目前存活的時間 
               3->pathId 
               4->isRevese  
               5->level-->成長魚種(會變大的)..沒有就不代入了
           
             * 
             *  */
          //let fishData=[ [22855,21,33170,203004,false,10]];//--3D龍
          //let fishData=[ 22855,16,0,113008,false,10];//--3D黃金鯊
          //let fishData=[ 22855,13,0,113008,false,10];//--3D黃金鯊
          //let fishData=[ 22855,15,33170,203004,false,10];//--2D閃電魚

          /*
          let fishData=[ 
            [22855,23,0,113008,false,10],
            [22948,14,0,211000,false],
            [22980,23,0,104003,false],
            [22982,19,0,113011,false],
            [23005,15,0,204002,false],
            [23010,16,0,104003,false],
            [23016,17,0,209002,false],
            [23019,18,0,105005,false],
            [23029,19,0,104010,false]
          ];*/
          //---boss路徑代號-301000

          /*
          let fishData=[
            {fs:[
              {
                id:8905,
                type:6,
                pathID:208004,
                speed:1,
                //time:7009,
                time:0,
                freeze:0,
                isReverse:true
               }
            ]} 
          ]*/
          //--3d fish

          /*
          let fishData=[
            {fs:[
              {
                id:8905,
                type:17,
                pathID:208004,
                speed:1,
                //time:7009,
                time:0,
                freeze:0,
                isReverse:false
               }
            ]} 
          ]*/
          //-createServerTime
          var createServerTime = new Date().getTime();
          /*
          let fishData=[{
            fs:[
          {id:1067,type:22,pathID:208004,speed:1,time:0,createTime:createServerTime,freeze:0,isReverse:false},
          {id:10709,type:11,pathID:113010,speed:1,time:47054,createTime:createServerTime,freeze:0,isReverse:true},
          {id:1068,type:12,pathID:208003,speed:1,time:0,createTime:createServerTime,freeze:0,isReverse:false},
          {id:1069,type:19,pathID:207003,speed:1,time:0,createTime:createServerTime,freeze:0,isReverse:false},
          {id:1069,type:14,pathID:113010,speed:1,time:0,createTime:createServerTime,freeze:0,isReverse:false}
           ]
          }];
          */

          var fishData = [{
            fs: [{
              id: 1067,
              type: 22,
              pathID: 208004,
              speed: 1,
              time: 0,
              createTime: createServerTime,
              freeze: 0,
              isReverse: false
            }, {
              id: 10709,
              type: 11,
              pathID: 113010,
              speed: 1,
              time: 47054,
              createTime: createServerTime,
              freeze: 0,
              isReverse: true
            }, {
              id: 1068,
              type: 12,
              pathID: 208003,
              speed: 1,
              time: 0,
              createTime: createServerTime,
              freeze: 0,
              isReverse: false
            }, {
              id: 1069,
              type: 19,
              pathID: 207003,
              speed: 1,
              time: 0,
              createTime: createServerTime,
              freeze: 0,
              isReverse: false
            }, {
              id: 1069,
              type: 14,
              pathID: 113010,
              speed: 1,
              time: 0,
              createTime: createServerTime,
              freeze: 0,
              isReverse: false
            }]
          }]; //--single fish

          /*
          let fishData=[{
            fs:[
          {id:3820,type:22,pathID:212003,speed:1,time:0,createTime:0,freeze:0,isReverse:false}
           ]
          }];
          */
          //--sp fish(301000~306000)

          /*
          let fishData=[
            {fs:[{ id:8905,type:22,pathID:306000,speed:1,time:0,freeze:0,isReverse:false}]} 
          ]*/
          //--boss test

          /*
          let fishData=[
            {fs:[{ id:8905,type:21,pathID:401000,speed:1,time:0,freeze:0,isReverse:false}]} 
          ]*/

          var _loop = function _loop(i) {
            TweenMax.to({}, .5, {
              delay: i * .2,
              onCompleteParams: [fishData[i]],
              onComplete: value => {
                //createfish
                log('check_creatFishData', value, i);

                _this3.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
                  error: Error()
                }), ServerSendCode) : ServerSendCode).NewFishLocalDebug, value, (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                  error: Error()
                }), ServerResCode) : ServerResCode).NewFish);
              }
            });
          };

          for (var i = 0; i < fishData.length; i++) {
            _loop(i);
          } //this.changeRoomStatus(2);

        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_addbullets", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_addFishs", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_addPopFishs", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_hitFishs", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_lobbyData", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_loginName", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_roomTableInfo", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_exchangePlayerCredit", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_credit", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_firstgetAutoCreditExchange", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_roomStatus", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_refundBullets", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_props", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "_propRunData", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "_bossStatus", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "_exchangeRatio", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1668c0c83c38c0053a10df2ed7fdfb85df05304b.js.map