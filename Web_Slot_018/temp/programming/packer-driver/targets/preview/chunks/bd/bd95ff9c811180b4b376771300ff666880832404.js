System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseEvent, _crd;

  function _reportPossibleCrUseOfEventDispatcher(extras) {
    _reporterNs.report("EventDispatcher", "./EventDispatcher", _context.meta, extras);
  }

  _export("BaseEvent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4b3ei73+BIc7YcdRN8CE5k", "BaseEvent", undefined);
      /**
       * Created by EricHuang on 2016/4/14.
       */


      _export("BaseEvent", BaseEvent = class BaseEvent {
        //---阻斷事件流的傳遞
        constructor(type, obj) {
          if (obj === void 0) {
            obj = null;
          }

          this._target = void 0;
          //---事件流中的目標(觸發者)--事件流的目標階段
          this._currentTarget = void 0;
          //--有註冊事件監聽or正在處理事件者--事件流的冒泡/目標/捕獲階段
          //--PS只有在事件流的<目標階段>target與currentTarget才會相同
          //--總之~target指的就是發送者的本身,currenttarget指的是當前事件活動的對象
          //protected _bubbles:boolean;
          this._sendObject = void 0;
          //---用於隨事件夾帶的值
          this._type = void 0;
          this._stopOtherListener = false;
          //---不要讓其他的監聽接受
          this._stopCommunication = false;
          this._type = type; //this._bubbles=bubbles;

          this._currentTarget = null;
          this._target = null;
          this._sendObject = obj;
        }

        get type() {
          return this._type;
        }

        get target() {
          return this._target;
        }

        get currentTarget() {
          return this._currentTarget;
        }

        get sendObject() {
          return this._sendObject;
        } //get bubbles():boolean{return this._bubbles;}


        get stopOtherListener() {
          return this._stopOtherListener;
        }

        get stopCommunication() {
          return this._stopCommunication;
        }

        set sendObject(value) {
          this._sendObject = value;
        }

        set target(value) {
          this._target = value;
        }

        set currentTarget(value) {
          this._currentTarget = value;
        }

        set stopOtherListener(value) {
          this._stopOtherListener = value;
        }

        set stopCommunication(value) {
          this._stopCommunication = value;
        } //----自己override吧=..=


        clone() {
          return new BaseEvent(this._type, this._sendObject);
        }

      });

      BaseEvent.COMPLETE = "H5Event_complete";
      BaseEvent.CHANGE = "H5Event_change";
      BaseEvent.REMOVED = "H5Event_removed";
      BaseEvent.IO_ERROR = "H5Event_ioError";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd95ff9c811180b4b376771300ff666880832404.js.map