System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingResManager, instantiate, Animation, v3, log, DgOpenAniEffect, _crd;

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  _export("DgOpenAniEffect", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      Animation = _cc.Animation;
      v3 = _cc.v3;
      log = _cc.log;
    }, function (_unresolved_2) {
      LoadingResManager = _unresolved_2.LoadingResManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83f7dnRKGhO3bj9Ti0gD2Vp", "DgOpenAniEffect", undefined);
      /**
       * Created by EricHuang on 2023/10/18.
       */


      __checkObsolete__(['Scene', 'instantiate', 'Node', 'Animation', 'AnimationClip', 'AnimationState']);

      __checkObsolete__(['v3']);

      __checkObsolete__(['log']);

      _export("DgOpenAniEffect", DgOpenAniEffect = class DgOpenAniEffect {
        constructor() {
          this._scene = void 0;
          this._openNode = void 0;
          this._animationTop = void 0;
          //--控制 in/out/waitting的狀態
          this._animationBgEffect = void 0;
          //--控制bg的動態效果
          this._nowStatus = void 0;

          this.aniOnComplete = (type, state) => {
            //log('check__animationTop_Complete',type,state.name); 
            if (state.name == 'in') {
              this._animationBgEffect.stop();

              this._nowStatus = 'idle';
              var aniClipTop = this.getAnimationClip(this._animationTop, 'idle');
              this._animationTop.defaultClip = aniClipTop;

              this._animationTop.play(aniClipTop.name);
            } else if (state.name == 'out') {
              //aniClipTop=this.getAnimationClip(this._animationTop,'out');
              this._nowStatus = 'finish';

              this._animationTop.stop();

              this._scene.removeChild(this._openNode);

              this._openNode.active = false;
            }
          };

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          this._scene = args[0].container;
          this._openNode = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(args[0].other.prefabId));
          this._animationTop = this._openNode.children[0].getComponent(Animation);
          this._animationBgEffect = this._openNode.children[0].getChildByName('DragonOpeningDummy').getComponent(Animation);
          log('DgOpenAniEffect_check', args, this._openNode, this._animationTop);

          this._animationTop.on(Animation.EventType.FINISHED, this.aniOnComplete);

          this._nowStatus = '';
        }

        getAnimationClip(target, index) {
          var clip = null;
          var clips = target.clips;
          log('getAnimationClip', target);

          for (var i = 0; i < clips.length; i++) {
            if (clips[i].name == index) {
              clip = clips[i];
              break;
            }
          }

          return clip;
        }

        bossOpenInInitGame() {
          this._nowStatus = 'in';

          this._scene.addChild(this._openNode);

          this._openNode.active = true;

          this._openNode.setPosition(v3(0, 0, 0)); //--opening--


          var aniClipTop = this.getAnimationClip(this._animationTop, 'in');
          this._animationTop.defaultClip = aniClipTop;

          this._animationTop.play(aniClipTop.name); //--bg


          var aniClipBg = this.getAnimationClip(this._animationBgEffect, 'fishFx24Opening');
          this._animationBgEffect.defaultClip = aniClipBg;

          this._animationBgEffect.play(aniClipBg.name);
        }

        bossWaitting() {
          this._nowStatus = 'idle';
          var aniClipTop = this.getAnimationClip(this._animationTop, 'idle');
          this._animationTop.defaultClip = aniClipTop;

          this._animationTop.play(aniClipTop.name);
        }

        bossOut() {
          if (this._nowStatus == 'out') {
            this._animationTop.stop();

            this._scene.removeChild(this._openNode);

            this._openNode.active = false;
          } else if (this._nowStatus != 'finish') {
            this._nowStatus = 'out';
            var aniClipTop = this.getAnimationClip(this._animationTop, 'out');
            this._animationTop.defaultClip = aniClipTop;

            this._animationTop.play(aniClipTop.name);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1b4e39fa48b64ca718619ce10acb44863750f058.js.map