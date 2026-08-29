System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CoordinatesFormMode, math, log, FishCoordinatesFormMode, _crd;

  function _reportPossibleCrUseOfCoordinatesFormMode(extras) {
    _reporterNs.report("CoordinatesFormMode", "../../game/coordinates/CoordinatesFormModeBase", _context.meta, extras);
  }

  _export("FishCoordinatesFormMode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      math = _cc.math;
      log = _cc.log;
    }, function (_unresolved_2) {
      CoordinatesFormMode = _unresolved_2.CoordinatesFormMode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3cc97LARM9CgZ4OK24LsVnx", "FishCoordinatesFormMode", undefined);
      /**
       * Created by EricHuang on 2023/09/29.
       */


      __checkObsolete__(['Node']);

      __checkObsolete__(['math']);

      __checkObsolete__(['log']);

      _export("FishCoordinatesFormMode", FishCoordinatesFormMode = class FishCoordinatesFormMode extends (_crd && CoordinatesFormMode === void 0 ? (_reportPossibleCrUseOfCoordinatesFormMode({
        error: Error()
      }), CoordinatesFormMode) : CoordinatesFormMode) {
        constructor() {
          super();
          //--有要旋轉的在塞進來
          this._fishContainer = void 0;
          this._fishAimContainer = void 0;
          this._fishShadowContainer = void 0;
          this._bulletContainer = void 0;
          this._cannonContainer = void 0;
          this._collisionContainer = void 0;
          //--可省
          this._clickAreaContainer = void 0;
          this._waittingTextAniContainer = void 0;
          this._playerIdTextContainer = void 0;
        } //--override it(把預設的node塞進來)


        initNodeContainer() {}

        coordinatesChange(strMode, tableID) {} //--ps--魚場因為轉移到mobile部門的版本1920*1080,所以不需要縮放了.


        showGlobalState() {
          return; //--幹!!!其他的容器也要縮小阿!!!!

          log("showGlobalState");
          this._waittingTextAniContainer && (this._waittingTextAniContainer.angle = 0);
          this._playerIdTextContainer && (this._playerIdTextContainer.angle = 0);
          this._fishContainer && (this._fishContainer.angle = 0); //this._fishContainer.scale.x = 0.5;
          //this._fishContainer.scale.y = 0.5;

          this._fishAimContainer && (this._fishAimContainer.angle = 0); //this._fishAimContainer.scale.x = 0.5;
          //this._fishAimContainer.scale.y = 0.5;
          //this._fishContainer.pivot.x = 0;//----正常顯示
          //this._fishContainer.pivot.y = 0;

          /*--old
          this._fishContainer.pivot.x = 1920;
          this._fishContainer.pivot.y = 1080;
          this._fishContainer.x = 1920 >> 1;
          this._fishContainer.y = 1080 >> 1;
          */

          /*
          this._fishAimContainer.pivot.x = 1920;
          this._fishAimContainer.pivot.y = 1080;
          this._fishAimContainer.x = 1920 >> 1;
          this._fishAimContainer.y = 1080 >> 1;
          */

          this._fishShadowContainer && (this._fishShadowContainer.angle = 0); //this._fishShadowContainer.scale.x = 0.5;
          //this._fishShadowContainer.scale.y = 0.5;
          //this._fishShadowContainer.pivot.x = 1920;
          //this._fishShadowContainer.pivot.y = 1080;
          //this._fishShadowContainer.x = 1920 >> 1;
          //this._fishShadowContainer.y = 1080 >> 1;
        }

        resetCoordinateMode() {
          this._fishContainer && (this._fishContainer.angle = 0);
          this._fishAimContainer && (this._fishAimContainer.angle = 0);
          this._fishShadowContainer && (this._fishShadowContainer.angle = 0);
          this._cannonContainer && (this._cannonContainer.angle = 0);
          this._bulletContainer && (this._bulletContainer.angle = 0);
          this._collisionContainer && (this._collisionContainer.angle = 0);
          this._clickAreaContainer && (this._clickAreaContainer.angle = 0);
          this._waittingTextAniContainer && (this._waittingTextAniContainer.angle = 0);
          this._playerIdTextContainer && (this._playerIdTextContainer.angle = 0);
        } //--4合一座位系統專用(1,2號位置會往下轉,34不變)
        //--4合一座位系統專用
        //--20230705-移植到cocos creator


        setContainerCoordinateMode(id) {
          log("setContainerCoordinateMode@@@@@", id); //接rd7魚場資料(1920*1080),中心點anchor point始終維持在中央    
          //this._bulletContainer.pivot.x=1920/2;
          //this._bulletContainer.pivot.y =1080/2;
          //this._clickAreaContainer.pivot.x=1920/2;
          //this._clickAreaContainer.pivot.y = 1080/2;
          //this._collisionContainer.pivot.x=1920/2;
          //this._collisionContainer.pivot.y=1080/2;

          if (id == 1 || id == 2) {
            log("set cannon table____1/2", math.toDegree(Math.PI));
            this._fishContainer && (this._fishContainer.angle = math.toDegree(Math.PI));
            this._fishAimContainer && (this._fishAimContainer.angle = math.toDegree(Math.PI));
            this._fishShadowContainer && (this._fishShadowContainer.angle = math.toDegree(Math.PI));
            this._collisionContainer && (this._collisionContainer.angle = math.toDegree(Math.PI));
            this._cannonContainer && (this._cannonContainer.angle = math.toDegree(Math.PI)); //this._cannonContainer.pivot.x = 1920;
            //this._cannonContainer.pivot.y = 1080;
            //log("@@@@@@@@@@@@>>",CoreRenderMode.RenderCore.app.renderer);
            //----?????!!!!!!! wtf??

            this._bulletContainer && (this._bulletContainer.angle = math.toDegree(Math.PI));
            this._clickAreaContainer && (this._clickAreaContainer.angle = math.toDegree(Math.PI));
            this._waittingTextAniContainer && (this._waittingTextAniContainer.angle = math.toDegree(Math.PI));
            this._playerIdTextContainer && (this._playerIdTextContainer.angle = math.toDegree(Math.PI));
          } else {
            log("set cannon table__3/4");
            this._fishContainer && (this._fishContainer.angle = 0);
            this._fishAimContainer && (this._fishAimContainer.angle = 0);
            this._fishShadowContainer && (this._fishShadowContainer.angle = 0);
            this._cannonContainer && (this._cannonContainer.angle = 0);
            this._bulletContainer && (this._bulletContainer.angle = 0);
            this._collisionContainer && (this._collisionContainer.angle = 0);
            this._clickAreaContainer && (this._clickAreaContainer.angle = 0);
            this._waittingTextAniContainer && (this._waittingTextAniContainer.angle = 0);
            this._playerIdTextContainer && (this._playerIdTextContainer.angle = 0); //this._cannonContainer.pivot.x = 0;
            //this._cannonContainer.pivot.y = 0;
          }
        } //--不旋轉座位的系統

        /**
         * 20220712--無旋轉的版本
         * 20230705--anchor point維持在(0.5,0.5)
         */


        setContainerCoordinateModeNoRotation(id) {
          //this._bulletContainer.pivot.x=1920/2;
          //this._bulletContainer.pivot.y =1080/2;
          //this._clickAreaContainer.pivot.x=1920/2;
          //this._clickAreaContainer.pivot.y = 1080/2;
          //--2020-04-01測試先關閉
          //this._collisionContainer.pivot.x=1920/2;
          //this._collisionContainer.pivot.y=1080/2;
          this._fishContainer && (this._fishContainer.angle = 0); //this._anycPathContainer.rotation = 0;
          //this._fishHitAnicontainer.rotation = 0;---已經改變碰撞區域的做法~取消

          this._fishAimContainer && (this._fishAimContainer.angle = 0);
          this._fishShadowContainer && (this._fishShadowContainer.angle = 0);
          this._cannonContainer && (this._cannonContainer.angle = 0); //this._cannonContainer.pivot.x = 0;
          //this._cannonContainer.pivot.y = 0;

          this._bulletContainer && (this._bulletContainer.angle = 0);
          this._collisionContainer && (this._collisionContainer.angle = 0);
          this._clickAreaContainer && (this._clickAreaContainer.angle = 0);
          this._waittingTextAniContainer && (this._waittingTextAniContainer.angle = 0);
          this._playerIdTextContainer && (this._playerIdTextContainer.angle = 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef9dccbcc0fe630fe21c4519e37ed38b312a4495.js.map