System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Component, UITransform, debug, director, sp, playAnimOnEnable, UtilsKit, _crd;

  function _reportPossibleCrUseOfplayAnimOnEnable(extras) {
    _reporterNs.report("playAnimOnEnable", "../../../../common/script/anim/playAnimOnEnable", _context.meta, extras);
  }

  _export("UtilsKit", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
      debug = _cc.debug;
      director = _cc.director;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      playAnimOnEnable = _unresolved_2.playAnimOnEnable;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e67fc4t4UFAYro6M6QxAmYm", "UtilsKit", undefined);

      __checkObsolete__(['Animation', 'Component', 'Node', 'UITransform', 'debug', 'director', 'sp']);

      _export("UtilsKit", UtilsKit = class UtilsKit {
        /**
         * 延遲事件
         * @param duration 單位：毫秒
        */
        static Defer(duration) {
          if (duration === void 0) {
            duration = 0;
          }

          return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), duration);
          });
        }
        /**
         * 延遲事件(藉由 cocos api "scheduleOnce")
         * @param duration 單位：秒
        */


        static DeferByScheduleOnce(duration) {
          if (duration === void 0) {
            duration = 0;
          }

          return new Promise((resolve, reject) => {
            var scene = director.getScene();
            var rootNode = scene.children[0];
            rootNode.getComponent(UITransform).scheduleOnce(() => resolve(), duration / 1000);
          }); // return new Promise<void>((resolve, reject) => {
          //     setTimeout(() => resolve(), duration);
          // });
        }
        /**
         * 播放動畫
         * @param node 持有動畫 Component 的 Node
         * @param animationName 動畫名稱(如果沒給即為預設動畫)
         * @param awaitFINISHED 是否監聽 FINISHED 事件
         * @returns 
         */


        static PlayAnimation(node, animationName, awaitFINISHED) {
          return new Promise((resolve, reject) => {
            var animationComponent = node.getComponent(Animation);

            if (node.getComponent(_crd && playAnimOnEnable === void 0 ? (_reportPossibleCrUseOfplayAnimOnEnable({
              error: Error()
            }), playAnimOnEnable) : playAnimOnEnable)) {
              if (node.active) {
                node.active = false;
              }

              node.active = true;
            } else {
              animationComponent.play(animationName);
            }

            if (awaitFINISHED) {
              var onAnimationFinished = () => {
                animationComponent.off(Animation.EventType.FINISHED, onAnimationFinished.bind(this));
                animationComponent.stop();
                resolve();
              };

              animationComponent.on(Animation.EventType.FINISHED, onAnimationFinished.bind(this));
            } else {
              resolve();
            }
          });
        }
        /**
         * 播放 Skeleton 動畫
         * @param node 持有 Skeleton Component 的 Node
         * @param trackIndex 動畫通道索引
         * @param animationName 動畫名稱
         * @param loop 是否循環
         * @param awaitFINISHED 是否等待 Complete
         * @returns 
         */


        static SetSkeletonAnimation(node, trackIndex, animationName, loop, awaitComplete) {
          return new Promise((resolve, reject) => {
            var skeletonComponent = node.getComponent(sp.Skeleton);
            skeletonComponent.setAnimation(trackIndex, animationName, loop);

            if (awaitComplete) {
              var onAnimationComplete = (trackEntry, loopCount) => {
                skeletonComponent.setCompleteListener(null);
                resolve();
              };

              skeletonComponent.setCompleteListener(onAnimationComplete.bind(this));
            } else {
              resolve();
            }
          });
        }
        /**
         * 規格化數值(取小數點後2位)
         * @param num 數值
         * @returns 
         */


        static NumberSpecification(num) {
          return num.toLocaleString('zh', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          });
        }
        /**
         * 批次綁定事件 , 可以指定事件名稱與目標
         * @param ary 
         *            描述每個 bindTarget 與 callback 的資料   
         *            可以個別指定 event 與 target  
         *            若沒有指定則使用 opts 的 defaultEvent 與 defaultTarget
         * 
         *            @variables bindTarget 綁定的目標 accept Component or Node
         *            @variables callback 事件的 callback. 
         *            @optional event 事件名稱
         *            @optional target callback 的 this 指向
         * 
         * @param opts 預設的 event 與 target
         */


        static BindEvents(ary, opts) {
          if (opts === void 0) {
            opts = {
              defaultEvent: 'click',
              defaultTarget: this
            };
          }

          var {
            defaultEvent,
            defaultTarget
          } = opts;
          if (defaultEvent == null) defaultEvent = 'click';
          if (defaultTarget == null) defaultTarget = this;
          ary.forEach(data => {
            var {
              bindTarget,
              callback,
              target,
              event
            } = data;
            if (!target) target = defaultTarget;
            if (!event) event = defaultEvent;
            if (!bindTarget) return;
            if (!callback) return;
            var node = bindTarget instanceof Component ? bindTarget.node : bindTarget;
            if (!node) return;
            debug("bindEvent: " + bindTarget.name + "::" + event + "==>" + callback.name);
            node.on(event, callback, target);
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fab5dffdb2b648a1d6ac5c0e675fbcd5c4c22c49.js.map