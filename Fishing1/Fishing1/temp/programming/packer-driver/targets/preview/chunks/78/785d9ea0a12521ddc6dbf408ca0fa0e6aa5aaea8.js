System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Notifycation, NotifycationSubbscriptionSubject, PropertyDecorator, log, AbstractViewModel, _crd, Bindable;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function viewModel(observerid, model) {
    return function (target) {
      //target.prototype._model= model;
      target.prototype.id = observerid; //log('check_dectator',target,model,target.prototype._model);
    };
  }
  /*
  export function restrictToGameMediator(target: any, key: string, descriptor: PropertyDescriptor)
  {
      const connect = descriptor.value;
    
      descriptor.value = function (...args: any[])
      {
        // 檢查call function是否為GameMainAbstractView(GameMediator)
        log('check_restrictToGameMediator',this,args);
        if (this instanceof GameMainAbstractView) 
        {
          return connect.apply(this, args);
        
        } else {
          
          throw new Error("Access to this method is restricted.");
        }
      
      };
  }*/

  /*
  export function restrictToGameMain() {
      return function (target: any, key: string, descriptor: PropertyDescriptor) {
          const originalMethod = descriptor.value;
  
          descriptor.value = function (...args: any[]) {
              if (this instanceof GameMainAbstractView) {
                  return originalMethod.apply(this, args);
              } else {
                  throw new Error("Access to this method is restricted.");
              }
          };
  
          return descriptor;
      };
  }*/


  function _reportPossibleCrUseOfObserverClassical(extras) {
    _reporterNs.report("ObserverClassical", "./Observer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifycation(extras) {
    _reporterNs.report("Notifycation", "./Notifycation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifycationSubbscriptionSubject(extras) {
    _reporterNs.report("NotifycationSubbscriptionSubject", "./Notifycation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractModel(extras) {
    _reporterNs.report("AbstractModel", "./AbstractModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropertyDecorator(extras) {
    _reporterNs.report("PropertyDecorator", "../PropertyDecorator", _context.meta, extras);
  }

  _export({
    AbstractViewModel: void 0,
    viewModel: viewModel
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      Notifycation = _unresolved_2.Notifycation;
      NotifycationSubbscriptionSubject = _unresolved_2.NotifycationSubbscriptionSubject;
    }, function (_unresolved_3) {
      PropertyDecorator = _unresolved_3.PropertyDecorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "daf56CtR21DbZkvAJqvuQcr", "AbstractViewModel", undefined);
      /**
       * Created by EricHuang on 2023/9/07.
       */


      __checkObsolete__(['Component']);

      //import {restrictToGameMain } from'../mvvm/';
      //export class AbstractViewModel extends Component implements ObserverClassical
      __checkObsolete__(['log']);

      _export("AbstractViewModel", AbstractViewModel = class AbstractViewModel {
        /*
        protected _gameType:string;
         set gameType(value:string)
        {
          this._gameType=value; 
        }*/
        set localDebug(value) {
          this._localDebug = value;
        }

        get localDebug() {
          return this._localDebug;
        } //-@Bindable stopGame


        constructor() {
          this.id = void 0;
          //--實作他的類別名稱
          this._model = null;
          //--local端測試模式
          this._localDebug = void 0;
          //super();
          this._localDebug = false; //--觀察者比對需要用的

          this.id = this.constructor.prototype['id'] || null; //--繼承過來的model
          //this._model =new (this.constructor.prototype['_model'])();
          //this._model =this.constructor.prototype['_model'];
          //log('check_vmData',this._model,this.id);

          /*
          this._model =new (this.constructor.prototype['_model'])();
          
          this._model.addObserver(this);
          log('check_vmData',this._model,this.id);
          (<TestModel>this._model).testChangeValue();
          */
          //this.bindables(this.constructor['bindables'] || [])
        }

        addModel(value) {
          this._model = value;
        }
        /*
        protected onLoad():void
        {
            this.bindables(this.constructor['bindables'] || [])
            //--新增給view訂閱的model資料異動主題
            //Notifycation.getInstance().addSubbscriptionSubject(NotifycationSubbscriptionSubject.AbstractViewModel,NotifycationSubbscriptionSubject.ModelChangeData);
            
            this._model.addObserver(this);
            
            this._model.loaded();
            
            this.onModelChangeSubject();
            //--this._model.getMutables可以取得model註冊的屬性(這個要給view監聽用的)
            log('check_vmData',this._model,this.id,this._model.getMutables(),this);
            //log('check_vmData_instance',this._model instanceof TestModel);
            //(<TestModel>this._model).testChangeValue('sfasfsasdadsadsa');
        }*/


        init() {
          this.bindables(this.constructor['bindables'] || []); //--新增給view訂閱的model資料異動主題
          //Notifycation.getInstance().addSubbscriptionSubject(NotifycationSubbscriptionSubject.AbstractViewModel,NotifycationSubbscriptionSubject.ModelChangeData);

          this._model.addObserver(this);

          this._model.loaded();

          this.onModelChangeSubject();
          log('check_vmData', this._model, this.id, this._model.getMutables(), this);
        }

        notify(key, value) {
          return _asyncToGenerator(function* () {
            //---接收model資料改變的派送
            log('vm get notify', key, value);
            (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
              error: Error()
            }), Notifycation) : Notifycation).getInstance().emit((_crd && NotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfNotifycationSubbscriptionSubject({
              error: Error()
            }), NotifycationSubbscriptionSubject) : NotifycationSubbscriptionSubject).AbstractViewModel, key, value);
          })();
        } //--local端的測試流程20230927 


        localDebugMode(key, value, localDebugResType) {
          this._model.localDebugMode(key, value, localDebugResType);
        }

        sendServer(key, value, localDebugResType) {
          log('check_VM_sendServer', key, value);

          this._model.sendServer(key, value);
        } //--20240129--實在不想開出這個方法(用來執行model裡面的方法)


        executeModelMethod(id, value) {
          this._model.executeModelMethod(id, value);
        } //---給View訂閱的,要拿model的變化事件


        onModelChangeSubject() {
          var ary = this._model.getMutables();

          for (var i = 0; i < ary.length; i++) {
            //--view 自己去註冊變動的屬性名稱(變動的屬性也是使用者自己定義的)
            (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
              error: Error()
            }), Notifycation) : Notifycation).getInstance().addSubbscriptionSubject((_crd && NotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfNotifycationSubbscriptionSubject({
              error: Error()
            }), NotifycationSubbscriptionSubject) : NotifycationSubbscriptionSubject).AbstractViewModel, ary[i]);
          }
        }

        setModelData(key, value) {
          this._model[key] = value;
        }
        /**
         * view只需要透過vm.XXX就可以拿資料了
         * PS這些動態的屬性是透過 @Bindable _testTestModeValue2
         * (這是在model透過@Mutable _testTestModeValue2:string綁上去的)
         * 所以vm 在綁的時候名字要跟model綁的名稱相同.
         * 且,拿的時候也要用相同的名稱
         * @param keys 綁定的屬性
         */


        bindables(keys) {
          if (keys === void 0) {
            keys = [];
          }

          keys.forEach(key => {
            var parent = this.getDescriptor(key);

            if (!parent) {
              Object.defineProperty(this, key, {
                get: () => {
                  //log('get vm data form modle',key);
                  //log('check_model_data',this._model[key]);
                  return this._model[key];
                },
                set: value => {
                  this._model[key] = value;
                },
                configurable: true
              });
            }
          });
        } //--檢查VM裡面是否已經綁過了


        getDescriptor(key) {
          var object = this,
              descriptor;

          do {
            //返回指定对象所有自身屬性（非继承屬性）的指定描述對象
            //--return 
            descriptor = Object.getOwnPropertyDescriptor(object, key);
            object = Object.getPrototypeOf(object);

            if (descriptor) {
              return descriptor.get || descriptor.set ? descriptor : null;
            }
          } while (object);

          return null;
        }

      }); //--在vm上透過裝飾器將要取model的變數給綁近來,vm再透過model去拿


      _export("Bindable", Bindable = (_crd && PropertyDecorator === void 0 ? (_reportPossibleCrUseOfPropertyDecorator({
        error: Error()
      }), PropertyDecorator) : PropertyDecorator).bind(null, 'bindables'));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=785d9ea0a12521ddc6dbf408ca0fa0e6aa5aaea8.js.map