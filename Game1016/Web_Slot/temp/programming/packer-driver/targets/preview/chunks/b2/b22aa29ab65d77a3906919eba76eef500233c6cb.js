System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Observer, NotifyCation, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfObserver(extras) {
    _reporterNs.report("Observer", "./Observer", _context.meta, extras);
  }

  _export("NotifyCation", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Observer = _unresolved_2.Observer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "81e14mfBp1NFrD47PK3F7YJ", "NotifyCation", undefined);
      /**
       * Created by EricHuang on 2023/9/06.
       */


      /**
       * 採用訂閱<主題 or module名稱>為分類,下轄再增訂<副主題>
       * ex:Connect為主題,副主題為updatePlayerIndex.
       * ex:FishModule 為module名稱,副主題為getViewModel(其實就是這個module的訂閱主題啦)
       */
      _export("NotifyCation", NotifyCation = class NotifyCation {
        static getInstance() {
          return NotifyCation._instance ? NotifyCation._instance : new NotifyCation();
        }

        constructor() {
          this._listeners = void 0;

          if (NotifyCation._instance != null) {
            throw new Error('plz use getInstance() to get NotifyCation');
          }

          this._listeners = {};
          NotifyCation._instance = this;
        }
        /**
         * 開啟訂閱專欄的功能
         * @param subscriptionSubjectMainId 訂閱的主題名稱
         * @param subtopicSubId 訂閱的副主題名稱
         */


        addSubscriptionSubject(subscriptionSubjectMainId, subtopicSubId) {
          if (!this._listeners[subscriptionSubjectMainId]) {
            this._listeners[subscriptionSubjectMainId] = {};
          }

          if (subtopicSubId) {
            if (!this._listeners[subscriptionSubjectMainId][subtopicSubId]) {
              this._listeners[subscriptionSubjectMainId][subtopicSubId] = [];
            }
          }
        } //--取回唯一的Observer


        getObserver(mainName, subjectName, callback) {
          if (!this._listeners[mainName] || !this._listeners[mainName][subjectName]) {
            return undefined;
          }

          return this._listeners[mainName][subjectName].find(observer => observer.callback === callback);
        }
        /**
         * 
         * @param mainName module名稱/主題名稱
         * @param subjectName 訂閱副主題名稱
         * @param callback 
         * @param once 
         * @returns 
         */


        on(mainName, subjectName, callback, instance, once) {
          if (!callback) {
            return;
          }

          ;

          if (!this._listeners[mainName]) {
            this._listeners[mainName] = {};
          }

          if (!this._listeners[mainName][subjectName]) {
            this._listeners[mainName][subjectName] = [];
          } // 檢查是否已經存在相同的 Observer 實例(避免相同class重複註冊)


          if (!this._listeners[mainName][subjectName].some(observer => observer.compar(callback, instance))) {
            this._listeners[mainName][subjectName].push(new (_crd && Observer === void 0 ? (_reportPossibleCrUseOfObserver({
              error: Error()
            }), Observer) : Observer)(callback, instance, once));
          } else {
            console.warn("The callback is already registered");
          }
        }

        once(main, sub, callback, instance) {
          this.on(main, sub, callback, instance, true);
        } //--20230906--先想一下要不要給module這個功能,這樣就是讓module有溝通的能力

        /*
        public async emitModule(): Promise<any> {
         }*/

        /**
         * 一個做完接一個
         * @param main module名稱/主題名稱
         * @param sub 訂閱副主題名稱
         * @param args 要回傳的東西
         * @returns 
         */


        emit(main, sub) {
          var _arguments = arguments,
              _this = this;

          return _asyncToGenerator(function* () {
            var observers = _this.getObservers(main, sub);

            if (!observers) return;

            for (var _len = _arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              args[_key - 2] = _arguments[_key];
            }

            for (var i = 0; i < observers.length; i++) {
              var observer = observers[i];

              if (observer.isOnce) {
                observers.splice(i, 1);
                i--;
              }

              yield observer.notify(sub, ...args);
            }
          })();
        }
        /**
         * 一個我管你去死的概念,不管你處理得如何,一口氣通知
         * @param main module名稱/主題名稱
         * @param sub 訂閱副主題名稱
         * @param args 要回傳的東西
         * 也不用管訂閱者要不要回傳
         */


        emitSync(main, sub) //public emitSync(main: string, sub: string,args: any):void
        {
          var observers = this.getObservers(main, sub);
          if (!observers) return;

          for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          for (var i = 0; i < observers.length; i++) {
            var observer = observers[i];

            if (observer.isOnce) {
              observers.splice(i, 1);
              i--;
            }

            observer.notify(sub, ...args); //observer.notify(sub,args);
          }
        }
        /*
        ---requestData demo----
        class testA { 
             constructor() {}
               async requestData() {
                 try {
                     const response = await notification.requestData();
                     log("testA received data:", response);
                   
                 } catch (error) {
                     console.error("Error in testA:", error);
                 }
             }
         }
           class testB {
             constructor() {
                 notification.on("dataRequest", "subtopic", this.handleDataRequest.bind(this));
             }
               async handleDataRequest() {
                 try {
                     
                     await new Promise((resolve) => setTimeout(resolve, 2000));
                     const responseData = "Data from testB";
                    
                     notification.emit("dataResponse", "subtopic", responseData);
                 } catch (error) {
                     console.error("Error in testB:", error);
                 }
             }
         }
          */


        requestData(mainResponse, subRes, mainRequest, payload, instance) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              _this2.on(mainResponse, subRes, data => {
                resolve(data);
              }, instance, true);

              if (payload !== undefined) {
                _this2.emitSync(mainRequest, subRes, payload);
              } else {
                _this2.emitSync(mainRequest, subRes);
              }
            });
          })();
        }
        /**
         * 
         * @param mainName module名稱/主題名稱
         * @param subjectName 訂閱副主題名稱
         * @param callback 
         * @returns 
         */


        hasCallback(mainName, subjectName, callback) {
          if (this._listeners[mainName] && this._listeners[mainName][subjectName] && this._listeners[mainName][subjectName].some(observer => observer.callback === callback)) {
            return true;
          }

          return false;
        }
        /**
         * 取消指定的訂閱
         * @param mainName module名稱/主題名稱
         * @param subjectName 訂閱副主題名稱
         * @param callback 
         * @returns 
         */


        off(mainName, subjectName, callback, instance) {
          if (!this._listeners[mainName]) return false;
          if (!this._listeners[mainName][subjectName]) return false;
          var observers = this._listeners[mainName][subjectName];
          if (!observers) return false;
          var index = observers.findIndex(observer => {
            return observer.compar(callback, instance);
          });
          /* 
          //--20250303--用symbol取代手動送class的id
          let index = observers.findIndex(observer => {
              return observer.compar(callback, observerID);
          });
          */

          if (-1 !== index) {
            observers.splice(index, 1);
          } else {
            return false;
          }

          if (observers.length === 0) {
            delete this._listeners[mainName][subjectName];
          }

          return true;
        }

        offMainListens(mainName) {
          if (this._listeners[mainName]) {
            delete this._listeners[mainName];
          }
        }

        offSubListens(mainName, subjectName) {
          if (this._listeners[mainName]) {
            delete this._listeners[mainName][subjectName];
          }
        }

        getObservers(mainName, subjectName) {
          if (!this._listeners[mainName]) {
            console.warn("No listener for mainName: " + mainName);
            return;
          }

          var observers = this._listeners[mainName][subjectName];

          if (!observers) {
            console.warn("No listener for subjectName: " + subjectName);
            return;
          }

          return observers;
        }

      });

      NotifyCation._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b22aa29ab65d77a3906919eba76eef500233c6cb.js.map