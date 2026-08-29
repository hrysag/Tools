System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Animation, RichText, sp, v2, math, v3, Button, Sprite, js, EventMouse, EventHandler, EventTouch, Color, SpriteAtlas, Touch, GameSetting, SpineTimeScaleTuner, GameTimeScale, _crd;

  function _reportPossibleCrUseOfGameSetting(extras) {
    _reporterNs.report("GameSetting", "../Scripts/GameScripts/Definition/GameSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeySpriteFramePair(extras) {
    _reporterNs.report("KeySpriteFramePair", "../Scripts/Utils/Core/KeySpriteFramePair", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineTimeScaleTuner(extras) {
    _reporterNs.report("SpineTimeScaleTuner", "../Scripts/GameScripts/TimeScale/SpineTimeScaleTuner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTimeScale(extras) {
    _reporterNs.report("GameTimeScale", "../Scripts/GameScripts/TimeScale/GameTimeScale", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Animation = _cc.Animation;
      RichText = _cc.RichText;
      sp = _cc.sp;
      v2 = _cc.v2;
      math = _cc.math;
      v3 = _cc.v3;
      Button = _cc.Button;
      Sprite = _cc.Sprite;
      js = _cc.js;
      EventMouse = _cc.EventMouse;
      EventHandler = _cc.EventHandler;
      EventTouch = _cc.EventTouch;
      Color = _cc.Color;
      SpriteAtlas = _cc.SpriteAtlas;
      Touch = _cc.Touch;
    }, function (_unresolved_2) {
      GameSetting = _unresolved_2.GameSetting;
    }, function (_unresolved_3) {
      SpineTimeScaleTuner = _unresolved_3.SpineTimeScaleTuner;
    }, function (_unresolved_4) {
      GameTimeScale = _unresolved_4.GameTimeScale;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2fdf+BABNALZJ0UIfR3Cpd", "externalDefinitions", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Animation', 'RichText', 'sp', 'Vec3', 'v2', 'math', 'v3', 'Button', 'Sprite', 'js', 'EventMouse', 'EventHandler', 'EventTouch', 'Color']);

      __checkObsolete__(['SpriteAtlas']);

      __checkObsolete__(['Touch']);

      // console.log('externalDefinitions.ts loaded');

      /* globals define */
      Array.prototype.count = function (value) {
        return this.filter(x => x == value).length;
      }; //計算陣列中，所有參數陣列元素出現的次數 例如 arr = [1,2,3,3,4] arr.countOccurrencesOfArray([2,3]) 會等於 3 


      Array.prototype.countOccurrencesOfArray = function (arr) {
        return arr.reduce((count, elem) => {
          return count + this.filter(x => x === elem).length;
        }, 0);
      };

      Array.prototype.indexesOf = function (value) {
        var positions = this.map(function (e, i) {
          return e === value ? i : -1;
        }).filter(function (e) {
          return e !== -1;
        });
        return positions;
      };

      Array.prototype.set = function () {
        var set = new Set(this);
        var arr = Array.from(set);
        return arr;
      };

      Array.prototype.setSelf = function () {
        var uniqueValues = Array.from(new Set(this)); // 取得去重後的陣列

        this.length = 0; // 清空原陣列

        this.push(...uniqueValues); // 將去重後的元素推回原陣列

        return this; // 返回修改後的陣列（可選）
      }; // 為 Array.prototype 添加一個名為 remove 的方法


      Array.prototype.remove = function (value) {
        // 找到元素的索引
        var index = this.indexOf(value); // 如果找到該元素

        if (index > -1) {
          // 使用 splice 方法從數組中移除該元素
          this.splice(index, 1);
        } // 返回數組自身以便方法鏈接


        return this;
      };

      Array.prototype.getRandomElement = function () {
        var len = this.length;
        var index = Math.floor(Math.random() * len);
        return this[index];
      };

      Number.prototype.fixed = function () {
        return parseFloat(this.toFixed(4));
      };

      Number.prototype.readByte = function (start, length) {
        var byte = this.valueOf();

        if (byte < 0 || byte > 255) {
          console.error('Number out of range');
          return byte;
        }

        var mask = (1 << length) - 1; // 右移，使 start 位置的 bit 变成最低位

        return byte >> 8 - start - length & mask;
      };

      Number.prototype.numberComma = function () {
        var numStr = this.toString();
        var result = ''; // 每三位加入一個逗號

        while (numStr.length > 3) {
          result = ',' + numStr.slice(-3) + result;
          numStr = numStr.slice(0, numStr.length - 3);
        } // 若數字剩餘不到三位則直接加入


        if (numStr) {
          result = numStr + result;
        }

        if ((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
          error: Error()
        }), GameSetting) : GameSetting).shouldSwapThousandAndDecimalSeparators) {
          result = result.replaceAll(',', '@');
          result = result.replaceAll('.', ',');
          result = result.replaceAll('@', '.');
        }

        return result;
      }; // ======================== Global End ========================


      Node.prototype.setActive = function (b) {
        this.active = b;
      };

      Node.prototype.forceTouchEnd = function (x, y) {
        var event = new EventTouch([], true, Node.EventType.TOUCH_END);
        event.touch = new Touch(x, y);
        this.dispatchEvent(event);
      };

      Node.prototype.cleanClaimedTouchIdList = function () {
        // 清理 claimedTouchIdList
        var eventProcessor = this._eventProcessor;

        if (eventProcessor) {
          // 重新初始化 claimedTouchIdList
          eventProcessor.claimedTouchIdList.length = 0;
        }
      };

      Animation.prototype.playWithCallback = function (clipName, callback) {
        this.off(Animation.EventType.FINISHED);

        if (callback) {
          this.once(Animation.EventType.FINISHED, () => {
            callback == null || callback();
          }, this);
        }

        this.play(clipName);
      };

      Animation.prototype.playPromise = function (clipName) {
        return new Promise((resolve, reject) => {
          this.playWithCallback(clipName, resolve);
        });
      };

      Animation.prototype.setSpeedByClipName = function (clipName, speed) {
        if (speed === void 0) {
          speed = 1;
        }

        if (clipName) {
          for (var clip of this.clips) {
            if (clip.name === clipName) {
              this.getState(clip.name).speed = speed;
              return;
            }
          }

          console.error("Animation clip not found: " + clipName);
        } else {
          console.error('Animation clip name is empty');
        }
      };

      RichText.prototype.addSpriteFrame = function (spriteFrameMap) {
        if (!this.imageAtlas) {
          this.imageAtlas = new SpriteAtlas();
        }

        for (var item of spriteFrameMap) {
          if (item.key && item.spriteFrame) {
            this.imageAtlas.spriteFrames["" + item.key] = item.spriteFrame;
          }
        }
      };

      Button.prototype.resetStatus = function () {
        if (this.transition === Button.Transition.SPRITE) {
          this.getComponent(Sprite).spriteFrame = this.normalSprite;
        } else if (this.transition === Button.Transition.COLOR) {
          this.getComponent(Sprite).color = this.normalColor;
        } else if (this.transition === Button.Transition.SCALE) {
          this.node.setScale(1, 1, 1);
        }
      };

      Button.prototype.emitEvents = function () {
        EventHandler.emitEvents(this.clickEvents);
      };

      sp.Skeleton.prototype.playWithCallback = function (animationName, callback, track) {
        if (track === void 0) {
          track = 0;
        }

        this.clearTrack(track);
        this.setToSetupPose();
        var tr = this.setAnimation(track, animationName, false);
        this.setTrackCompleteListener(tr, () => {
          callback == null || callback();
        });
      };

      sp.Skeleton.prototype.playPromise = function (animationName, track) {
        if (track === void 0) {
          track = 0;
        }

        return new Promise((resolve, reject) => {
          this.playWithCallback(animationName, resolve, track);
        });
      };

      sp.Skeleton.prototype.playLoop = function (animationName, track) {
        if (track === void 0) {
          track = 0;
        }

        this.clearTrack(track);
        this.setToSetupPose();
        var tr = this.setAnimation(track, animationName, true);
      };

      sp.Skeleton.prototype.playAnimPromise = function (animName, track) {
        return new Promise((resolve, reject) => {
          var trackID = track != null ? track : 0;
          this.setAnimation(trackID, animName, false);
          this.setCompleteListener(() => {
            resolve();
          });
        });
      };

      sp.Skeleton.prototype.tuneAnimationByTimeScale = function (gameTimeScale) {
        var _this$getComponent;

        if (gameTimeScale === void 0) {
          gameTimeScale = (_crd && GameTimeScale === void 0 ? (_reportPossibleCrUseOfGameTimeScale({
            error: Error()
          }), GameTimeScale) : GameTimeScale).timeScale;
        }

        (_this$getComponent = this.getComponent(_crd && SpineTimeScaleTuner === void 0 ? (_reportPossibleCrUseOfSpineTimeScaleTuner({
          error: Error()
        }), SpineTimeScaleTuner) : SpineTimeScaleTuner)) == null || _this$getComponent.tuneAnimationByTimeScale(gameTimeScale);
      };

      sp.Skeleton.prototype.setOpacity = function (opacity) {
        var color = new Color(this.color);
        color.a = opacity;
        this.color = color;
      };

      math.Vec3.prototype.toVec2 = function () {
        return v2(this.x, this.y);
      };

      math.Vec2.prototype.toVec3 = function () {
        return v3(this.x, this.y, 0);
      };

      js.setClassName('EventMouse', EventMouse);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0da9b376f61c442cc1ff5431f42343afb1e25ae3.js.map