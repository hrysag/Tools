System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Observer, log, Notifycation, _crd, NotifycationSubbscriptionSubject;

  function _reportPossibleCrUseOfObserver(extras) {
    _reporterNs.report("Observer", "./Observer", _context.meta, extras);
  }

  _export("Notifycation", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      Observer = _unresolved_2.Observer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "993c03rRqVHf6A63wtdaB2e", "Notifycation", undefined);
      /**
       * Created by EricHuang on 2023/9/06.
       */


      __checkObsolete__(['log']);

      //--預設限定監聽的群組
      _export("NotifycationSubbscriptionSubject", NotifycationSubbscriptionSubject = /*#__PURE__*/function (NotifycationSubbscriptionSubject) {
        NotifycationSubbscriptionSubject["AbstractViewModel"] = "AbstractViewModelSubject";
        NotifycationSubbscriptionSubject["ModelChangeData"] = "ModleChangeDataSubtopic";
        return NotifycationSubbscriptionSubject;
      }({}));
      /**
       * 採用訂閱<主題 or module名稱>為分類,下轄再增訂<副主題>
       * ex:Connect為主題,副主題為updatePlayerIndex.
       * ex:FishModule 為module名稱,副主題為getViewModel(其實就是這個module的訂閱主題啦)
       */


      _export("Notifycation", Notifycation = class Notifycation {
        static getInstance() {
          return Notifycation._instance ? Notifycation._instance : new Notifycation();
        }

        constructor() {
          this._listeners = void 0;

          if (Notifycation._instance != null) {
            throw new Error('plz use getInstance() to get Notifycation');
          }

          this._listeners = {};
          Notifycation._instance = this;
        }
        /**
         * 開啟訂閱專欄的功能
         * @param subbscriptionSubjectMainId 訂閱的主題名稱
         * @param subtopicSubId 訂閱的副主題名稱
         */


        addSubbscriptionSubject(subbscriptionSubjectMainId, subtopicSubId) {
          if (!this._listeners[subbscriptionSubjectMainId]) {
            this._listeners[subbscriptionSubjectMainId] = {};
          }

          if (subtopicSubId) {
            if (!this._listeners[subbscriptionSubjectMainId][subtopicSubId]) {
              this._listeners[subbscriptionSubjectMainId][subtopicSubId] = [];
            }
          }
        }
        /**
         * 
         * @param mainName module名稱/主題名稱
         * @param subjectName 訂閱副主題名稱
         * @param callback 
         * @param once 
         * @returns 
         */


        on(mainName, subjectName, callback, observerID, once) {
          if (!callback) {
            return;
          }

          ;

          if (!this._listeners[mainName]) {
            this._listeners[mainName] = {};
          }

          if (!this._listeners[mainName][subjectName]) {
            this._listeners[mainName][subjectName] = [];
          }

          this._listeners[mainName][subjectName].push(new (_crd && Observer === void 0 ? (_reportPossibleCrUseOfObserver({
            error: Error()
          }), Observer) : Observer)(callback, observerID, once));
        }

        once(main, sub, callback, observerID) {
          this.on(main, sub, callback, observerID, true);
        } //--20230906--先想一下要不要給module這個功能,這樣就是讓module有溝通的能力


        async emitModulle() {}
        /**
         * 一個做完接一個
         * @param main module名稱/主題名稱
         * @param sub 訂閱副主題名稱
         * @param args 要回傳的東西
         * @returns 
         */


        async emit(main, sub, ...args) {
          let observers = this.getObservers(main, sub);
          if (!observers) return;

          for (let i = 0; i < observers.length; i++) {
            let observer = observers[i];

            if (observer.isOnce) {
              observers.splice(i, 1);
              i--;
            }

            await observer.notify(sub, ...args);
          }
        }
        /**
         * 一個我管你去死的概念,不管你處理得如何,一口氣通知
         * @param main module名稱/主題名稱
         * @param sub 訂閱副主題名稱
         * @param args 要回傳的東西
         * 也不用管訂閱者要不要回傳
         */


        emitSync(main, sub, ...args) //public emitSync(main: string, sub: string,args: any):void
        {
          let observers = this.getObservers(main, sub);
          if (!observers) return;

          for (let i = 0; i < observers.length; i++) {
            let observer = observers[i];

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


        async requestData(mainResponse, subRes, mainRequest, observerID) {
          return new Promise((resolve, reject) => {
            //- public once(main: string, sub: string, callback: Function,observerID:string): void
            //notification.on("dataResponse", "subtopic", (data: any) => {
            this.on(mainResponse, subRes, data => {
              resolve(data);
            }, observerID); //notification.emit("dataRequest", "subtopic");

            this.emitSync(mainRequest, subRes);
          });
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


        off(mainName, subjectName, callback, observerID) {
          if (!this._listeners[mainName]) return false;
          if (!this._listeners[mainName][subjectName]) return false;
          let observers = this._listeners[mainName][subjectName];
          if (!observers) return false;
          let index = observers.findIndex(observer => {
            return observer.compar(callback, observerID);
          });

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
          log('check_getObservers', mainName, subjectName, this._listeners);

          if (!this._listeners[mainName]) {
            return;
          }

          let observers = this._listeners[mainName][subjectName];

          if (!observers) {
            return;
          }

          return observers;
        }

      });

      Notifycation._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b2f451701da32635fe518910aba9f83c43f62751.js.map