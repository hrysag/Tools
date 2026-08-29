System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, TimeUpdateForMove, _crd;

  _export("TimeUpdateForMove", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18132U1ootIn5rQsrW1bd7v", "TimeUpdateForMove", undefined);

      /**
       * Created by EricHuang on 2024/04/25.
       * 情非得已
       * 取代在瀏覽器不在當前使用tween計算的移動物件
       * 將採用worker的時間來更新
       */
      __checkObsolete__(['Component']);

      _export("TimeUpdateForMove", TimeUpdateForMove = class TimeUpdateForMove extends Component {
        constructor() {
          super();
          this.startPos = void 0;
          this.endPos = void 0;
          this.duration = void 0;
          // 移动time，單位=秒
          this.currentTime = void 0;
          // 已經經過的時間
          this.targetReached = void 0;
          // 是否已經抵達目標位置
          //private velocity: { x: number; y: number }; // 移動速度
          this._onCallBackComplete = void 0;
          this.isRunning = void 0;
          this.currentTime = 0;
          this.targetReached = false;
          this.isRunning = false;
          this._onCallBackComplete = null;
        }

        easeInOutQuad(progress) {
          progress /= 0.5;
          if (progress < 1) return 0.5 * progress * progress;
          progress--;
          return -0.5 * (progress * (progress - 2) - 1);
        }

        setCompleteCallBack(callback) {
          this._onCallBackComplete = callback;
        }

        destory() {
          this._onCallBackComplete = null;
          this.currentTime = 0;
          this.targetReached = false;
          this.isRunning = false;
          this.startPos = null;
          this.endPos = null;
          this.duration = 0;
        }

        setUpdateData(startPos, endPos, duration) {
          this.startPos = startPos;
          this.endPos = endPos;
          this.duration = duration;
          /*
          this.velocity = {
              x: (endPos.x - startPos.x) / duration,
              y: (endPos.y - startPos.y) / duration
          };*/

          this.currentTime = 0;
          this.isRunning = true;
          this.targetReached = false;
        }

        updatePath(deltaTime) {
          if (!this.targetReached) {
            this.currentTime += deltaTime;
            var progress = Math.min(1, this.currentTime / this.duration); // 進度不超過1

            var easedProgress = this.easeInOutQuad(progress);
            var newX = this.startPos.x + (this.endPos.x - this.startPos.x) * easedProgress;
            var newY = this.startPos.y + (this.endPos.y - this.startPos.y) * easedProgress;
            /*
            let newX = this.startPos.x + this.velocity.x * this.currentTime;
            let newY = this.startPos.y + this.velocity.y * this.currentTime;
            */

            this.node.setPosition(newX, newY);

            if (this.currentTime >= this.duration) {
              this.targetReached = true;
              this.isRunning = false;
              newX = this.endPos.x;
              newY = this.endPos.y;
              this.node.setPosition(newX, newY);

              if (this._onCallBackComplete) {
                this._onCallBackComplete();
              }
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4307dce47a8c3fee56818e9276ae9ad66355a514.js.map