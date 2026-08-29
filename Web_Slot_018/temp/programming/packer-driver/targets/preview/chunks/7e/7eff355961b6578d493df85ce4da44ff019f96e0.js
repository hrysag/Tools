System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Animation, BasicDisplayContainer, Orientation, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ANI_PLAY_ID_L, ANI_PLAY_ID_P, ANI_PLAY_ID_DEFAULT, NG_BkgController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasicDisplayContainer(extras) {
    _reporterNs.report("BasicDisplayContainer", "./IBG_Ani", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../../../../Scripts/Utils/Config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      BasicDisplayContainer = _unresolved_2.BasicDisplayContainer;
    }, function (_unresolved_3) {
      Orientation = _unresolved_3.Orientation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88c3corWw1ODpi3SWUlXHKW", "NG_BkgController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sp', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);
      ANI_PLAY_ID_L = 'NG_Bkg_back_mask_L_ani';
      ANI_PLAY_ID_P = 'NG_Bkg_back_mask_P_ani';
      ANI_PLAY_ID_DEFAULT = 'NG_Bkg_back_default_ani';

      _export("NG_BkgController", NG_BkgController = (_dec = ccclass('NG_BkgController'), _dec2 = property({
        type: Node,
        visible: true,
        displayName: 'NG_Ani_Mask',
        tooltip: 'NG_遊戲NG_mask_ani動畫node'
      }), _dec(_class = (_class2 = class NG_BkgController extends (_crd && BasicDisplayContainer === void 0 ? (_reportPossibleCrUseOfBasicDisplayContainer({
        error: Error()
      }), BasicDisplayContainer) : BasicDisplayContainer) {
        constructor() {
          super(...arguments);

          /**
           * NG的背景
           * PS:
           * 1.橫板模式下,NG只會有一個咖啡色的底圖
           * 2.直版模式下,NG會有一個咖啡色的底圖+範圍只有一半的會動的背景
           * mask是反向的..美術用動畫去控制mask的範圍(有L和P兩種會在兩種直橫板模式下分別控制L/P這兩個mask的containSize)
           */
          _initializerDefineProperty(this, "_ng_AniMaskLNode", _descriptor, this);

          this._ngMaskAni = null;
          this._dirtyFlag = false;
        }

        init() {
          if (!this._dirtyFlag) {
            this._dirtyFlag = true;
            this._ngMaskAni = this._ng_AniMaskLNode.getComponent(Animation);
            super.init();
          }
        }
        /**
         * 在changeGameMode之前先關閉動畫(只有)
         * 執行processNormalRound時機
         * 1.processNormalRound(每一局結束)
         * 2.processRound(reSpin/Fg每一局)
         * 但是只要狀態與上一次相同就不會繼續往下
         */


        stopAllAni() {
          //if (this._targetSpine && this._ngMaskAni && this.node.active) {
          if (this._targetSpine && this._ngMaskAni && !this.node.active) {
            //--20250617這邊沒有選取_afterPlayDoStop所以根本不會執行清除
            //--為了處理NG->RE_SPINE的狀態下,背景動畫被觸發重播
            //--這邊FG的時候狀態不會寫進來,因為map就是不同群組(只有同群組的狀態才會改變)
            this.onAniComplete();
          }
        }

        onAniComplete() {
          this.cleanCurrentTrack();
          this._isPlaying = false;
        }
        /*
         在changeGameMode之前先關閉動畫
         在call playAni(因為送進空字串,所以再走changeRotationResolution)
           if (value) {
                this._targetSpine.setAnimation(0, value, true);
            } else {
                this.changeRotationResolution(this._gameRotationResolution);
            }
           這邊就會被反覆觸發播放NG_bkg_back的動畫了     
        */


        changeRotationResolution(value) {
          //this._previousRotationResolution = this._gameRotationResolution;
          this._gameRotationResolution = value; //--檢查是否還在播放

          if (this.node.active) {
            if (value == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
              error: Error()
            }), Orientation) : Orientation).Landscape) {
              this.playSpineAniForResolution(this._landscapeAniKey);
              this.playAniCompAniForResolution(ANI_PLAY_ID_L);
              this.changeToLandscape();
            } else if (value == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
              error: Error()
            }), Orientation) : Orientation).Portrait) {
              this.playSpineAniForResolution(this._portraitAniKey);
              this.playAniCompAniForResolution(ANI_PLAY_ID_P);
              this.changeToPortrait();
            }
          }
        } //--如果沒有播放動畫(spineComponent) 或是 正在播放的動畫不是指定的動畫


        playSpineAniForResolution(spineAniKey) {
          var isPlaying = this.isSpineCurrentlyPlaying();
          var isSameAni = this.checkPlayingSameSpineAni(spineAniKey);

          if (!isPlaying || !isSameAni) {
            this.playAni(spineAniKey);
          }
        } //--如果沒有播放動畫(animationComponent) 或是 正在播放的動畫不是指定的動畫


        playAniCompAniForResolution(aniKey) {
          var isPlaying = this.isAniCompCurrentlyPlaying(aniKey);
          var isSameAni = this.checkPlayingSameAni(aniKey);

          if (!isPlaying || !isSameAni) {
            this._ngMaskAni.play(aniKey);
          }
        } //--檢查現在播放的Animation動畫是否為同一個名稱<for Animation component>


        checkPlayingSameAni(aniKey) {
          if (this._ngMaskAni) {
            var currentClip = this._ngMaskAni.getState(aniKey);

            if (currentClip) {
              return true;
            } else {
              return false;
            }
          }
        } //--檢查現在播放的spine動畫是否為同一個名稱<for spine>


        checkPlayingSameSpineAni(aniKey) {
          var entry = this._targetSpine.getCurrent(0);

          if (!entry || !entry.animation) return false;

          if (aniKey === entry.animation.name) {
            return true;
          } else {
            return false;
          }
        } //--檢查當前的spine物件是否正在播放


        isAniCompCurrentlyPlaying(aniKey) {
          if (this._ngMaskAni) {
            var currentClip = this._ngMaskAni.getState(aniKey);

            if (currentClip && currentClip.isPlaying) {
              return true;
            } else {
              return false;
            }
          }
        } //--檢查當前的spine物件是否正在播放


        isSpineCurrentlyPlaying(trackIndex) {
          var _entry$animation$dura, _entry$animation;

          if (trackIndex === void 0) {
            trackIndex = 0;
          }

          //--spine animation 預設none也是會抓不到(只有播放才會有值)
          var entry = this._targetSpine.getCurrent(trackIndex);

          if (!entry) return false; //--播完就會拿不到啦

          var duration = (_entry$animation$dura = (_entry$animation = entry.animation) == null ? void 0 : _entry$animation.duration) != null ? _entry$animation$dura : 0;

          if (!entry.loop) {
            return entry.trackTime < duration;
          } else {
            // loop 模式只要還存在 entry 就算持續播放中（timeScale 也要大於 0）
            return this._targetSpine.timeScale > 0;
          }
        }

        cleanCurrentTrack() {
          var trackEntry = this._targetSpine.getCurrent(0);

          if (trackEntry) {
            //this._targetSpine.clearAnimation();
            //---creator的API(預設直接清掉第一軌的動畫,並且回到setup pos的狀態)

            /**
             * if (!this.isAnimationCached()) {
                this.clearTrack(trackIndex || 0);
                this.setToSetupPose(); 
            }
            */
            //--spine官方API,只在animationState裡面才有該API(直接過度到空動畫並且直接回到setup pos的狀態)
            this._targetSpine.getState().setEmptyAnimation(0, 0);
          }

          this._targetSpine.setCompleteListener(null);

          this._ngMaskAni.play(ANI_PLAY_ID_DEFAULT);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_ng_AniMaskLNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7eff355961b6578d493df85ce4da44ff019f96e0.js.map