System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, sp, Orientation, BasicDisplayContainer, FindComponent, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ShareBg;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../../../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicDisplayContainer(extras) {
    _reporterNs.report("BasicDisplayContainer", "./IBG_Ani", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../../MyUtils/FindComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      Orientation = _unresolved_2.Orientation;
    }, function (_unresolved_3) {
      BasicDisplayContainer = _unresolved_3.BasicDisplayContainer;
    }, function (_unresolved_4) {
      FindComponent = _unresolved_4.FindComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53335HsLbhNf6gbecsfqPTC", "ShareBg", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShareBg", ShareBg = (_dec = ccclass('ShareBg'), _dec2 = property({
        type: Node,
        visible: true,
        displayName: 'ShareBkNode',
        tooltip: '共用BG的Node'
      }), _dec3 = property({
        visible: true,
        displayName: 'LANDSCAPE_Ani_key',
        tooltip: '直版ani key'
      }), _dec4 = property({
        visible: true,
        displayName: 'PORTRAIT_Ani_key',
        tooltip: '橫版ani key'
      }), _dec(_class = (_class2 = class ShareBg extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_shareNode", _descriptor, this);

          _initializerDefineProperty(this, "_landscapeAniKey", _descriptor2, this);

          _initializerDefineProperty(this, "_portraitAniKey", _descriptor3, this);

          this._shareBg = null;
          this._mapAniKey = void 0;
          this._fgCamp = '';
          this._dirtyFlag = false;
          this._gameRotationResolution = (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape;
          this._camp = -1;
        }

        set camp(value) {
          this._camp = value;

          if (value != 0 && value != 1) {
            this._fgCamp = '';
          } else {
            this._fgCamp = this._camp == 0 ? 'FG_01' : 'FG_02';
          }
        }

        onLoad() {
          if (!this._dirtyFlag) {
            if (this._shareNode) {
              this._dirtyFlag = true;
              this._shareBg = this._shareNode.getComponent(sp.Skeleton); //this._shareBg = this._shareNode.getComponent(SpineController);
              //this._shareBg.init();

              this.init();
            }
          }
        }

        init() {
          this._mapAniKey = new Map([['L', new Map([['FG_01', 'Fg_01_L'], ['sub', 'FG_01_sub_L'], ['FG_02', 'Fg_02_L']])], ['P', new Map([['FG_01', 'Fg_01_P'], ['sub', 'FG_01_sub_P'], ['FG_02', 'Fg_02_P']])]]);
        }

        playMutiTrackAni(rotationKey) {
          var aniKey1 = this._mapAniKey.get(rotationKey).get(this._fgCamp);

          var aniKey2 = this._mapAniKey.get(rotationKey).get('sub'); //this._shareBg.playMutipleAni([aniKey1, aniKey2]);


          this._shareBg.setAnimation(0, aniKey1, true);

          this._shareBg.setAnimation(1, aniKey2, true);
        }

        cleanCurrentTrack() {
          //--不適用,因為共用下播放的狀態和軌道不同
          //this._shareBg?.getState().setEmptyAnimation(0, 0);
          if (this._camp == 0) {
            this._shareBg.clearTrack(0);

            this._shareBg.clearTrack(1);
          } else {
            var trackEntry = this._shareBg.getCurrent(0);

            if (trackEntry) {
              this._shareBg.clearTrack(trackEntry.trackIndex);
            }
          }
        }

        clearTracks() {
          this._shareBg.clearTracks();

          this._shareBg.setCompleteListener(null);

          this.unscheduleAllCallbacks();
        }

        cleanBGAniAfterFG() {
          this.clearTracks();
        }

        stopAllAni() {
          this.clearTracks();
        } //--iwindow呼叫的(resize)


        changeRotationResolution(value) {
          this._gameRotationResolution = value;
          var comp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(this.node.parent.parent, _crd && BasicDisplayContainer === void 0 ? (_reportPossibleCrUseOfBasicDisplayContainer({
            error: Error()
          }), BasicDisplayContainer) : BasicDisplayContainer);

          if (comp) {
            if (comp._gameRotationResolution != this._gameRotationResolution) {
              this._gameRotationResolution = comp._gameRotationResolution;
            }
          }

          if (this.node.active) {
            var rotationKey = '';

            if (this._gameRotationResolution == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
              error: Error()
            }), Orientation) : Orientation).Landscape) {
              rotationKey = this._landscapeAniKey;
            } else if (this._gameRotationResolution == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
              error: Error()
            }), Orientation) : Orientation).Portrait) {
              rotationKey = this._portraitAniKey;
            }

            if (this._camp == 0) {
              this.playMutiTrackAni(rotationKey);
            } else if (this._camp == 1) {
              this.playAni(this._mapAniKey.get(rotationKey).get(this._fgCamp));
            }
          }
        }

        playAni(value) {
          if (value) {
            var _this$_shareBg;

            (_this$_shareBg = this._shareBg) == null || _this$_shareBg.setAnimation(0, value, true);
          } else {
            var comp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(this.node.parent.parent, _crd && BasicDisplayContainer === void 0 ? (_reportPossibleCrUseOfBasicDisplayContainer({
              error: Error()
            }), BasicDisplayContainer) : BasicDisplayContainer);

            if (comp) {
              this._gameRotationResolution = comp._gameRotationResolution;
            }

            this.changeRotationResolution(this._gameRotationResolution);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_shareNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_landscapeAniKey", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_portraitAniKey", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=34adb96a7886b2efec455c37ce0714911053d923.js.map