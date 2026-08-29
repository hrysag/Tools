System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AbstractView, BulletViewBase, _crd;

  function _reportPossibleCrUseOfAbstractView(extras) {
    _reporterNs.report("AbstractView", "../../../abstract/mvvm/AbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletSettingData(extras) {
    _reporterNs.report("BulletSettingData", "../../model/ModelDefinitionsBase", _context.meta, extras);
  }

  _export("BulletViewBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AbstractView = _unresolved_2.AbstractView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4215duiWxBNTKX6uuXid9Hl", "BulletViewBase", undefined);
      /**
       * Created by EricHuang on 2023/9/17.
       * 初始與啟動流程會用到的方法與資料
       */


      _export("BulletViewBase", BulletViewBase = class BulletViewBase extends (_crd && AbstractView === void 0 ? (_reportPossibleCrUseOfAbstractView({
        error: Error()
      }), AbstractView) : AbstractView) {
        //--分數夾的設定(他與砲座變化相關)
        //--可以override掉
        set aryGunScorePool(value) {
          this._aryGunScorePool = value;
        } //--可以override掉


        set aryActionInfo(value) {
          //---0=一般系統/1=成就系統
          this._aryActionInfo = value;
        } //--可以override掉


        set playerTableIndex(value) {
          //--index=1-4
          this._playerTableIndex = value;
        }

        set canUpdate(value) {
          this._canUpdate = value;
        }

        get canUpdate() {
          return this._canUpdate;
        }

        constructor() {
          super();
          this._playerTableIndex = void 0;
          //---玩家所在座位 20210914
          this._canUpdate = void 0;
          this._aryActionInfo = void 0;
          //--基本子彈設定資料
          this._strNowAction = void 0;
          //-local端再用的當前子彈種類資料
          //--key就是server 要的子彈種類--20231004
          this._mapCannonInfo = void 0;

          /**
           * this._aryScorePool=[[2],[5],[10],[20],[50]]; or
           * this._aryScorePool=[
                      [5,10,20,30,40],---共用一個砲座與炮管
                      [50,60,70,80,90],
                      [100,200,300,400,500]
              ]
            * 每個陣列就代表砲座與炮管的切換單位 
           */
          this._aryGunScorePool = void 0;
          this._playerTableIndex = -1;
          this._canUpdate = false;
          this._aryActionInfo = []; //---子彈種類的相關資訊

          this._strNowAction = ''; //--當前的運動系統

          this._mapCannonInfo = {};
        }

        changeBullet(id) {} //======給其他平行的view拿資料用的(透過mediator去拿)
        //--interface abstract


        getData(dataKey, value) {} //--interface abstract


        excute(value) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7bbad869a0241cd809d62ee89a02ef9cc2b9fe7c.js.map