System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, PropertyDecorator, log, AbstractModel, _crd, Mutable;

  function _reportPossibleCrUseOfObserverSubjectClassical(extras) {
    _reporterNs.report("ObserverSubjectClassical", "./Observer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObserverClassical(extras) {
    _reporterNs.report("ObserverClassical", "./Observer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropertyDecorator(extras) {
    _reporterNs.report("PropertyDecorator", "../PropertyDecorator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConnectBase(extras) {
    _reporterNs.report("GameConnectBase", "../../game/connect/ConnectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfConnectStrategy(extras) {
    _reporterNs.report("IfConnectStrategy", "../../game/strategy/Strategy", _context.meta, extras);
  }

  _export("AbstractModel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      PropertyDecorator = _unresolved_2.PropertyDecorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56c59EbAvRDbJMc9p2mznEM", "AbstractModel", undefined);
      /**
       * Created by EricHuang on 2023/9/06.
       */


      __checkObsolete__(['ISchedulable']);

      /**
       * 繼承AbstractModel的class
       * 透過裝飾器@ mutables 將屬性映射上去 添加get/set方法
       */
      __checkObsolete__(['log']);

      _export("AbstractModel", AbstractModel = class AbstractModel {
        set debug(value) {
          this._debug = value;
        }

        set netConnect(value) {
          this._netConnect = value;
        } //--給繼承的來做


        constructor() {
          this.id = void 0;
          this.uuid = void 0;
          this._listeners = void 0;
          this._debug = void 0;
          this._netConnect = void 0;
          log('AbstractModel_init', this);
          this._listeners = [];
          this._debug = false;
        }

        loaded() {
          this.mutables(this.constructor['mutables'] || []);
          log('AbstractModel_loaded');
        }

        getMutables() {
          return this.constructor['mutables'];
        } //--override it(該方法不對VM開放,直接由mediator操作)


        async prepareBeforeConnect(gameType) {
          return await this._netConnect.prepareBeforeConnect(gameType);
        } //--override it(該方法不對VM開放,直接由mediator操作)


        async connect() {
          //await this._netConnect.prepareBeforeConnect();
          this._netConnect.connect(); //log('NOOOOConnectGOGO');  

        } //--notify再針對特定函示
        //public addObserver(callback: Handler,contextID: string):void


        addObserver(o) {
          let index = this._listeners.findIndex(item => this.compar(o));

          if (index === -1) {
            this._listeners.push(o);
          }

          log('cgheck_addobserver', this._listeners);
        }

        compar(o) {
          return this._listeners.some(existingObserver => {
            //--檢查ObserverClassical的id是否相同
            return existingObserver.id === o.id;
          });
        } //public removeObserver(callback: Handler,contextID: string):void


        removeObserver(o) {
          for (let i = 0; i < this._listeners.length; i++) {
            //let ob:Observer=this._listeners[i];
            if (this.compar(this._listeners[i])) {
              this._listeners.splice(i, 1);

              i--;
            }
          }
        }

        hasObserverListen(o) {
          return this.compar(o); //return false;
        }

        notify(key, value) {
          this._listeners.forEach(observer => observer.notify(key, value));
        }

        destroy() {//--清空觀察者?
        }

        sendServer(key, value) {
          this._netConnect.sendServer(key, value);
        } //--20240129--實在不想開出這個方法(用來執行model裡面的方法)


        executeModelMethod(id, value) {} //--local端的測試流程20230927 


        localDebugMode(key, value, localDebugResType) {
          this._netConnect.localDebugMode(key, value, localDebugResType);
        }
        /**
         * 
         *  @Command onBind() {
            this.onBindHandler()
        }
         */
        //--在vm再用同樣的方式把屬性動態的映射到vm當中,只會給get方法


        mutables(keys = []) {
          keys.forEach(key => {
            //-  await this.module.notify.emit('bankCardManag', 'close')
            //let value = this.observable(key, this[key]);
            let value = this[key];
            Object.defineProperty(this, key, {
              get: () => value,
              set: newValue => {
                if (value === newValue) return;
                value = newValue;
                this.notify(key, value);
              } //configurable:true

            });
          });
        }
        /**
         * 添加觀察者的對象
         * @param key 
         * @param value 
         */

        /*
        private observable(key: string, value: any):any
        {
            if (this.isObservable(value))
            {
                
                (value as IObservable).addObserver((subKey, value) => {
                    
                    this.notify(`${key}.${subKey}`, value)
                
                }, this.constructor.name);
            }
            return value
        }*/

        /**
         * 檢察屬性對象(value)是否為觀察者的觀察對象
         * @param value 
         * @returns 
         */

        /*
        private isObservable(value: any): boolean 
        {
            return !!(undefined !== value && null !== value && value['addObserver'])
        }*/


      }); //--動態把要觀察的屬性灌進去model裡面


      _export("Mutable", Mutable = (_crd && PropertyDecorator === void 0 ? (_reportPossibleCrUseOfPropertyDecorator({
        error: Error()
      }), PropertyDecorator) : PropertyDecorator).bind(null, 'mutables'));
      /*export let Mutable = function (target: any, key: string) {
          
          log('check_Mutable',target,key,target.constructor.prototype);
          //let test=Object.getPrototypeOf(target.prototype.constructor);
          
          if (!target.constructor.hasOwnProperty('mutables')) {
              target.constructor['mutables'] = [];
          }
          if (target.constructor['mutables'].indexOf(key) === -1) {
              target.constructor['mutables'].push(key);
          }
      }*/
      //export let MutableArray = PropertyDecorator.bind(null, 'mutablesArray');


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c275ce72dd718a8c7fe0413629e6ebd58c51e44a.js.map