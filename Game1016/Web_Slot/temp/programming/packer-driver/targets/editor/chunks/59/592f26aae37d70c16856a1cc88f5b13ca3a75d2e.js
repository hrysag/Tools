System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BasicGameStepDelayTime, _crd, SpeedTimeMode;

  function _reportPossibleCrUseOfIGameStepDelayTimeList(extras) {
    _reporterNs.report("IGameStepDelayTimeList", "./IGameStepDelayTimeList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMs(extras) {
    _reporterNs.report("Ms", "./IGameStepDelayTimeList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelDelayMap(extras) {
    _reporterNs.report("ReelDelayMap", "./IGameStepDelayTimeList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelayLevel(extras) {
    _reporterNs.report("DelayLevel", "./IGameStepDelayTimeList", _context.meta, extras);
  }

  _export("BasicGameStepDelayTime", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8389aicCR9AaYfoMwZLgUSP", "BasicGameStepDelayTime", undefined);

      /**
       * @author Eric
       * 基本遊戲延遲時間列表
       * 這個類別是給各個遊戲專案繼承使用的,讓各個專案可以有自己的延遲時間列表
       * 直接使用也可以,關鍵還是在IGameStepDelayTimeList的定義上
       * BasicGameStepDelayTime他主要的功能就是在操作2階段加速_deltaTime(配合GameTimeScale.timeScale)
       * 單位:秒
       * TIPS:搭配的計時器是tween(所以單位用:秒)
       * PS:
       * 因為這是硬改的,所以沒辦法透過setGlobalData來改變裡面的屬性,原本的
       */
      _export("SpeedTimeMode", SpeedTimeMode = /*#__PURE__*/function (SpeedTimeMode) {
        SpeedTimeMode["NORMAL"] = "regular";
        SpeedTimeMode["Lv1"] = "fast_L1";
        SpeedTimeMode["Lv2"] = "fast_L2";
        return SpeedTimeMode;
      }({}));

      _export("BasicGameStepDelayTime", BasicGameStepDelayTime = class BasicGameStepDelayTime {
        //--new-
        set deltaTime(value) {
          this._deltaTime = value;
          this._deltaTime = 1; //--目前先固定1
        }

        get deltaTime() {
          return this._deltaTime;
        }

        get currentTimeMode() {
          return this._currentTimeMode;
        }

        set currentTimeMode(value) {
          this._currentTimeMode = value;
        } //constructor(config: IGameStepDelayTimeList) {


        constructor(config) {
          //--這邊都要用1,因為不主動加速引擎的frameRate
          this._deltaTime = 1;
          //--2階加速使用的單位時間(GameTimeScale.timeScale)
          this._currentTimeMode = SpeedTimeMode.NORMAL;
          this._delayTimeLevel = void 0;
          this._delayTimeLevel = config;
        }

        getCurrentList() {
          switch (this._currentTimeMode) {
            case SpeedTimeMode.Lv1:
              return this._delayTimeLevel.fast_L1;

            case SpeedTimeMode.Lv2:
              return this._delayTimeLevel.fast_L2;

            default:
              return this._delayTimeLevel.regular;
          }
        }

        get(selector) {
          const currentList = this.getCurrentList();
          const raw = selector(currentList);
          return this.toTime(raw, currentList.unit);
        }

        getReelDelay(selector, reelId) {
          const currentList = this.getCurrentList();
          const value = selector(currentList);
          if (value == null) return 0;
          if (typeof value === 'number') return this.toTime(value, currentList.unit);
          return this.toTime(value[reelId], currentList.unit);
        } //--單位轉換(加減速)--單位:秒

        /**
         * 20251016-廢棄
         * 原本是可以隨著engine的timeScale去做調整,讓相對應的時間可以被調整
         * @param value 
         * @returns 
         */


        toTime(value, unit = 's') {
          if (value == null) return 0;
          const seconds = unit === 'ms' ? value / 1000 : value;
          return seconds / this._deltaTime;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=592f26aae37d70c16856a1cc88f5b13ca3a75d2e.js.map