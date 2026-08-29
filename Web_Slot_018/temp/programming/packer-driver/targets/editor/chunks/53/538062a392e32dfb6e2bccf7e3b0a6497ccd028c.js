System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, game, tween, _dec, _class, _crd, ccclass, property, Movement;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d17dbFlpS5AOKu31uwvqz9H", "Movement", undefined);

      __checkObsolete__(['_decorator', 'Component', 'game', 'Node', 'Tween', 'tween', 'TweenEasing', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Movement", Movement = (_dec = ccclass('Movement'), _dec(_class = class Movement extends Component {
        constructor(...args) {
          super(...args);
          this._isPlaying = false;
          this._currentTween = null;
          this._onStepUpdateCallback = null;
        }

        setStepUpdateCallback(callback) {
          this._onStepUpdateCallback = callback;
          return this;
        }

        moveTo(dest, duration, isLocal = true, ease = 'linear') {
          if (duration < 0) return this;
          let newDuration = this.calculateDuration(duration);
          const targetPos = dest.clone();

          if (isLocal) {
            this.append(tween(this.node).to(newDuration, {
              position: targetPos
            }, {
              easing: ease,
              onUpdate: this == null ? void 0 : this._onStepUpdateCallback
            }));
          } else {
            this.append(tween(this.node).to(newDuration, {
              worldPosition: targetPos
            }, {
              easing: ease,
              onUpdate: this == null ? void 0 : this._onStepUpdateCallback
            }));
          }

          return this;
        }

        moveBy(delta, duration, isLocal = true, ease = 'linear') {
          if (duration < 0) return this;
          let newDuration = this.calculateDuration(duration);
          const targetPos = delta;

          if (isLocal) {
            this.append(tween(this.node).by(newDuration, {
              position: targetPos
            }, {
              easing: ease,
              onUpdate: this == null ? void 0 : this._onStepUpdateCallback
            }));
          } else {
            this.append(tween(this.node).by(newDuration, {
              worldPosition: targetPos
            }, {
              easing: ease,
              onUpdate: this == null ? void 0 : this._onStepUpdateCallback
            }));
          }

          return this;
        }

        moveFrom(from, dest, duration, isLocal = true, ease = 'linear') {
          if (duration < 0) return this;
          let newDuration = this.calculateDuration(duration);
          const fromPos = from.clone();
          const targetPos = dest.clone();

          if (isLocal) {
            this.append(tween(this.node).set({
              position: fromPos
            }).to(newDuration, {
              position: targetPos
            }, {
              easing: ease,
              onUpdate: this == null ? void 0 : this._onStepUpdateCallback
            }));
          } else {
            this.append(tween(this.node).call(() => this.node.worldPosition = fromPos).to(newDuration, {
              worldPosition: targetPos
            }, {
              easing: ease,
              onUpdate: this == null ? void 0 : this._onStepUpdateCallback
            }));
          }

          return this;
        }

        addCallback(callback) {
          this.append(tween(this.node).call(callback));
          return this;
        }

        stop() {
          if (this._currentTween) {
            this._currentTween.stop();

            this._currentTween = null;
          }
        }

        isPlaying() {
          return this._isPlaying;
        }

        play(finishCallback = null) {
          if (this._currentTween) {
            this._isPlaying = true;

            this._currentTween.call(() => {
              this._isPlaying = false;
              this._currentTween = null;
            }).then(tween(this.node).call(() => {
              if (finishCallback) {
                finishCallback();
              }
            })).start();
          }
        }

        append(tween) {
          if (this._isPlaying) {
            console.warn('Cannot append tween while playing');
            return;
          }

          if (this._currentTween) {
            this._currentTween.then(tween);
          } else {
            this._currentTween = tween;
          }
        }

        calculateDuration(duration) {
          let updateCount = Math.floor(duration / game.frameTime * 1000) + 1;
          let newDuration = game.frameTime * updateCount / 1000;
          newDuration = this.floorDecimalPlace(newDuration, 4);
          return newDuration;
        }
        /**
         * 小數點後幾位無條件捨去
         * @param num 要處理的小數
         * @param place 第幾位後捨去
         * @returns 
         */


        floorDecimalPlace(num, place) {
          let decimal = Math.pow(10, place);
          return Math.floor(num * decimal) / decimal;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=538062a392e32dfb6e2bccf7e3b0a6497ccd028c.js.map