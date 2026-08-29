System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BasicDisplayContainer, Orientation, _dec, _class, _crd, ccclass, property, NG_FrameController;

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
    }, function (_unresolved_2) {
      BasicDisplayContainer = _unresolved_2.BasicDisplayContainer;
    }, function (_unresolved_3) {
      Orientation = _unresolved_3.Orientation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e5f09q4hytA9ZRMQwVpoa/Z", "NG_FrameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sp', 'Vec3', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NG_FrameController", NG_FrameController = (_dec = ccclass('NG_FrameController'), _dec(_class = class NG_FrameController extends (_crd && BasicDisplayContainer === void 0 ? (_reportPossibleCrUseOfBasicDisplayContainer({
        error: Error()
      }), BasicDisplayContainer) : BasicDisplayContainer) {
        constructor(...args) {
          super(...args);
          this._isSpineRunning = false;
          this._dirtyFlag = false;
        }

        //--這邊只做一次啟動的動作
        onLoad() {
          if (!this._dirtyFlag) {
            super.onLoad();
          }
        }

        init() {
          if (!this._dirtyFlag) {
            this._dirtyFlag = true;
            super.init();
          }
        }

        changeRotationResolution(value) {
          this._gameRotationResolution = value;

          if (value === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            this.changeToLandscape();
          } else if (value === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            this.changeToPortrait();
          }

          if (this.node.active) {
            //-NG_frame只有橫版的狀態..他的container要縮小而已(直版)縮小0.702，位移y軸至50.661
            if (!this.isSpineCurrentlyPlaying()) {
              this._targetSpine.setAnimation(0, this._landscapeAniKey, true);

              this._isSpineRunning = true;
            }
          }
        } //--先這樣拉出來寫,免得以後有得沒的或是判斷條件有變或是spine支援相關API再來處理


        checkPlayingState() {
          if (this._targetSpine) {
            return this._isSpineRunning;
          }

          return false;
        }

        isSpineCurrentlyPlaying(trackIndex = 0) {
          var _entry$animation$dura, _entry$animation;

          //--spine animation 預設none也是會抓不到(只有播放才會有值)
          const entry = this._targetSpine.getCurrent(trackIndex);

          if (!entry) return false; //--播完就會拿不到啦

          const duration = (_entry$animation$dura = (_entry$animation = entry.animation) == null ? void 0 : _entry$animation.duration) != null ? _entry$animation$dura : 0;

          if (!entry.loop) {
            return entry.trackTime < duration;
          } else {
            // loop 模式只要還存在 entry 就算持續播放中（timeScale 也要大於 0）
            return this._targetSpine.timeScale > 0;
          }
        }
        /*
        protected override update(dt: number): void {
            if (this._testFlag) {
                const spineEntry: sp.spine.TrackEntry = this._targetSpine.getCurrent(0);
                //spineEntry.trackEnd
                
                 //* ps:取得spine時間的方法
                 //* 1.spine.getCurrent(0)取得TrackEntry(沒有setAnimation的話會是null)
                 //* 2.spineEntry.trackTime取得當前時間(單位/秒)
                 //* 3.spineEntry.animation.duration取得動畫的總時間(單位/秒)--總時間
                 //* 4.spineEntry.getAnimationTime()取得動畫的時間(單位/秒)--現在播放到哪的時間
                 //* 5.spineEntry.isComplete()取得動畫是否播放完畢(如果是循環動畫第一次播放完即會變成true)
                 //* 6.spineEntry.trackEnd取得動畫的結束時間(單位/秒)--預設為spine的最大上限時間(MAX.FLOAT)
                 //* 7.spineEntry.trackTime取得當前時間(單位/秒)--累進(不會因為是循環就會改變..播多久就累進多久)
                 //* 7.spineEntry.animationEnd取得動畫的結束時間(單位/秒)--為spine的最大上限時間(MAX.FLOAT)
                 
                console.log('spineEntry::', spineEntry, spineEntry.trackEnd);
                console.log('complete::' + spineEntry.isComplete() + '\n' + 'time::' + spineEntry.trackTime + '\n' + 'animationEnd::' + spineEntry.animation.duration + '\n' + 'aniTime:' + spineEntry.getAnimationTime());
            }
        }*/


        stopAllAni() {
          if (this._targetSpine) {
            this.cleanCurrentTrack();
          }
        }

        moveTargetTo(target, container) {
          if (!target || !container) return;
          target.removeFromParent(); // 強制脫離當前 parent

          container.addChild(target);
          target.setPosition(0, 0, 0);
        }

        changeToLandscape() {
          //--很確定裡面只會裝一個才這樣寫的
          const target = this.portrait[0].children[0] || this.landscape[0].children[0];

          if (target) {
            const landscapeNode = this.landscape[0];
            const portraitNode = this.portrait[0];
            landscapeNode.active = true;
            portraitNode.active = false;
            this.moveTargetTo(target, landscapeNode);
          }
        }

        changeToPortrait() {
          const target = this.portrait[0].children[0] || this.landscape[0].children[0];

          if (target) {
            const landscapeNode = this.landscape[0];
            const portraitNode = this.portrait[0];
            portraitNode.active = true;
            landscapeNode.active = false;
            this.moveTargetTo(target, portraitNode);
          }
        }

        cleanCurrentTrack() {
          let trackEntry = this._targetSpine.getCurrent(0);

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
            this._targetSpine.getState().setEmptyAnimation(0, 0); //const test = this._targetSpine.getState();
            //console.log('checkAniState::', test, this._targetSpine.animation);
            //this._targetSpine.clearTracks();

          }

          this._isSpineRunning = false;

          this._targetSpine.setCompleteListener(null);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef6abea9ddf2bdba492fb9de2b78936dbc2f942a.js.map