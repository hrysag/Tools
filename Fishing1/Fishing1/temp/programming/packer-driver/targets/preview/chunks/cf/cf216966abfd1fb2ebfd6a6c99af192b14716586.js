System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AbstractView, GameCoordinateMode, FishViewBase, _crd;

  function _reportPossibleCrUseOfAbstractView(extras) {
    _reporterNs.report("AbstractView", "../../../abstract/mvvm/AbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishInitData(extras) {
    _reporterNs.report("FishInitData", "../../model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOddsInfo(extras) {
    _reporterNs.report("OddsInfo", "../../model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCoordinateMode(extras) {
    _reporterNs.report("GameCoordinateMode", "../../../game/coordinates/CoordinateDefinitions", _context.meta, extras);
  }

  _export("FishViewBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AbstractView = _unresolved_2.AbstractView;
    }, function (_unresolved_3) {
      GameCoordinateMode = _unresolved_3.GameCoordinateMode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85c51DvbktIWqUms2Fh4NjI", "FishViewBase", undefined);
      /**
       * Created by EricHuang on 2023/9/17.
       * 初始與啟動流程會用到的方法與資料
       */


      _export("FishViewBase", FishViewBase = class FishViewBase extends (_crd && AbstractView === void 0 ? (_reportPossibleCrUseOfAbstractView({
        error: Error()
      }), AbstractView) : AbstractView) {
        //--剔除邊界檢測
        set aryblockBoundaryTest(value) {
          this._aryblockBoundaryTest = value;
        } //--可以override掉


        set playerTableCoordinate(value) {
          this._playerTableCoordinate = value; //--因座位不同判定旋轉用的  

          this._rotateValue = value == 1 || value == 2 ? -1 : 1;
        }

        set coordinateMode(value) {
          //--會先做set playerTableCoordinate,之後才做set coordinateMode
          this._coordinateMode = value;

          if (this._coordinateMode == (_crd && GameCoordinateMode === void 0 ? (_reportPossibleCrUseOfGameCoordinateMode({
            error: Error()
          }), GameCoordinateMode) : GameCoordinateMode).GameViewMode_Four_in_one_noRotation) {
            this._rotateValue = 1;
          }
        } //--可以override掉


        set fishTypeKeyMap(value) {
          this._fishTypeKeyMap = value;
        }

        set fishTypeSpeedMap(value) {
          this._fishTypeSpeedMap = value;
        }

        set oddsList(value) {
          this._oddsList = value;
        }

        get canUpdate() {
          return this._canUpdate;
        }

        set canUpdate(value) {
          this._canUpdate = value;
        }

        constructor() {
          super();
          this._playerTableCoordinate = void 0;
          this._rotateValue = void 0;
          this._coordinateMode = void 0;
          this._fishTypeSpeedMap = void 0;
          //--產生魚用的資料 
          this._fishTypeKeyMap = void 0;
          //--odds list
          this._oddsList = void 0;
          this._canUpdate = void 0;
          this._aryblockBoundaryTest = void 0;

          //--以秒為單位
          this.updateFish = t => {};
        }

        //======給其他平行的view拿資料用的(透過mediator去拿)
        //--interface abstract
        getData(dataKey, value) {} //--interface abstract


        excute(value) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cf216966abfd1fb2ebfd6a6c99af192b14716586.js.map