System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Enum, _decorator, sp, Node, CleanTrackType, Orientation, GameState, _dec, _dec2, _class, _descriptor, _descriptor2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class3, _class4, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, AbstractBasicDisplayContainer, BasicDisplayContainer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCleanTrackType(extras) {
    _reporterNs.report("CleanTrackType", "../../../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../../../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameState(extras) {
    _reporterNs.report("IGameState", "../Components/IGameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Enum = _cc.Enum;
      _decorator = _cc._decorator;
      sp = _cc.sp;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      CleanTrackType = _unresolved_2.CleanTrackType;
    }, function (_unresolved_3) {
      Orientation = _unresolved_3.Orientation;
    }, function (_unresolved_4) {
      GameState = _unresolved_4.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "430a4TJF1lP+IHEBRWUDMUS", "IBG_Ani", undefined);

      __checkObsolete__(['Component', 'Enum', '_decorator', 'CCBoolean', 'sp', 'Node', 'CCString']);

      ({
        ccclass,
        property
      } = _decorator);
      Enum(_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
        error: Error()
      }), CleanTrackType) : CleanTrackType);

      _export("AbstractBasicDisplayContainer", AbstractBasicDisplayContainer = (_dec = property({
        visible: true,
        tooltip: '是否要播放完畢後停止'
      }), _dec2 = property({
        type: _crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
          error: Error()
        }), CleanTrackType) : CleanTrackType,
        visible: true,
        tooltip: '清除全部tracks或是當前撥放的trackIndex'
      }), (_class = class AbstractBasicDisplayContainer extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_afterPlayDoStop", _descriptor, this);

          _initializerDefineProperty(this, "_clearTracks", _descriptor2, this);

          this._isPlaying = false;
          this._isShowing = false;
        }

        get isPlaying() {
          return this._isPlaying;
        }

        get isShowing() {
          return this._isShowing;
        }

        set isShowing(value) {
          this._isShowing = value;
        }
        /**
         * 這邊因為findComponent他不能接收抽象abstract類別
         */


        onAniComplete() {
          if (this._afterPlayDoStop) {
            if (this._clearTracks == (_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
              error: Error()
            }), CleanTrackType) : CleanTrackType).All_TRACKS) {
              this.clearTracks();
            } else if (this._clearTracks == (_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
              error: Error()
            }), CleanTrackType) : CleanTrackType).CURRENT_TRACK) {
              this.cleanCurrentTrack();
            }
          }

          this._isPlaying = false;
        } //--針對沒有選取_afterPlayDoStop的物件,在需要強制停止動畫時使用


        forceToStopAni() {
          if (this._clearTracks == (_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
            error: Error()
          }), CleanTrackType) : CleanTrackType).All_TRACKS) {
            this.clearTracks();
          } else if (this._clearTracks == (_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
            error: Error()
          }), CleanTrackType) : CleanTrackType).CURRENT_TRACK) {
            this.cleanCurrentTrack();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_afterPlayDoStop", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_clearTracks", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class)));

      _export("BasicDisplayContainer", BasicDisplayContainer = (_dec3 = ccclass('BasicDisplayContainer'), _dec4 = property({
        type: Node,
        visible: true,
        displayName: 'targetNode',
        tooltip: '遊戲使用有動畫component的Node'
      }), _dec5 = property({
        visible: true,
        displayName: 'LANDSCAPE_Ani_key',
        tooltip: '直版ani key'
      }), _dec6 = property({
        visible: true,
        displayName: 'PORTRAIT_Ani_key',
        tooltip: '橫版ani key'
      }), _dec7 = property([Node]), _dec8 = property([Node]), _dec3(_class3 = (_class4 = class BasicDisplayContainer extends AbstractBasicDisplayContainer {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_targetSpineNode", _descriptor3, this);

          _initializerDefineProperty(this, "_landscapeAniKey", _descriptor4, this);

          _initializerDefineProperty(this, "_portraitAniKey", _descriptor5, this);

          _initializerDefineProperty(this, "switchChild", _descriptor6, this);

          _initializerDefineProperty(this, "landscape", _descriptor7, this);

          _initializerDefineProperty(this, "portrait", _descriptor8, this);

          this.initCallBack = null;
          //---fuck..0702shareBG有可能錯過寫入直橫版的時機.因為它不會常駐在盜賊或是阿里的容器內(它會跳來跳去)
          this._gameRotationResolution = (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape;
          this._targetSpine = null;
          this._camp = -1;
          this._gameState = null;
        }

        //--檢查是否執行過init
        get targetSpine() {
          return this._targetSpine;
        }

        set camp(value) {
          this._camp = value;
        }

        onLoad() {
          if (this._targetSpineNode) {
            this._targetSpine = this._targetSpineNode.getComponent(sp.Skeleton);
          }

          this.init();
        }

        init() {
          var _this$initCallBack;

          if (!this._gameState) {
            this.changeGameState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NORMAL);
          }

          (_this$initCallBack = this.initCallBack) == null || _this$initCallBack.call(this);
        }

        stopAllAni() {
          if (this._targetSpine && this.node.active) {
            this.onAniComplete();
          }
        }

        playAni(value) {
          if (value) {
            var _this$_targetSpine;

            (_this$_targetSpine = this._targetSpine) == null || _this$_targetSpine.setAnimation(0, value, true);
          } else {
            this.changeRotationResolution(this._gameRotationResolution);
          }
        }

        changeRotationResolution(value) {
          this._gameRotationResolution = value;

          if (this.node.active) {
            if (value == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
              error: Error()
            }), Orientation) : Orientation).Landscape) {
              this.playAni(this._landscapeAniKey);
            } else if (value == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
              error: Error()
            }), Orientation) : Orientation).Portrait) {
              this.playAni(this._portraitAniKey);
            }
          }

          this.otherRotationResolutionProcess(value);
        }

        changeGameState(gameState, camp) {
          if (this._gameState == gameState) return;
          this._gameState = gameState;
        }

        otherRotationResolutionProcess(value) {}

        cleanCurrentTrack() {
          var _this$_targetSpine2, _this$_targetSpine4;

          var trackEntry = (_this$_targetSpine2 = this._targetSpine) == null ? void 0 : _this$_targetSpine2.getCurrent(0);

          if (trackEntry) {
            var _this$_targetSpine3;

            (_this$_targetSpine3 = this._targetSpine) == null || _this$_targetSpine3.clearTrack(trackEntry.trackIndex);
          }

          (_this$_targetSpine4 = this._targetSpine) == null || _this$_targetSpine4.setCompleteListener(null);
        }

        clearTracks() {
          var _this$_targetSpine5, _this$_targetSpine6;

          (_this$_targetSpine5 = this._targetSpine) == null || _this$_targetSpine5.clearTracks(); //-https://forum.cocos.org/t/topic/159467/8
          //-這樣清不掉

          (_this$_targetSpine6 = this._targetSpine) == null || _this$_targetSpine6.setCompleteListener(null);
        }

        changeToLandscape() {
          for (var i = 0; i < this.landscape.length; i += 1) {
            var landscapeNode = this.landscape[i];
            var portraitNode = this.portrait[i]; // 注意順序

            landscapeNode.active = true;

            if (this.switchChild) {
              while (portraitNode.children.length !== 0) {
                var target = portraitNode.children[0];
                target.parent = landscapeNode;
                target.setPosition(0, 0, 0);
              }
            }

            portraitNode.active = false;
          }
        }

        changeToPortrait() {
          for (var i = 0; i < this.landscape.length; i += 1) {
            var landscapeNode = this.landscape[i];
            var portraitNode = this.portrait[i]; // 注意順序

            portraitNode.active = true;

            if (this.switchChild) {
              while (landscapeNode.children.length !== 0) {
                // log(`切換${landscapeNode.children[0].name} to ${portraitNode.name}`);
                var target = landscapeNode.children[0];
                target.parent = portraitNode;
                target.setPosition(0, 0, 0);
              }
            }

            landscapeNode.active = false;
          }
        }

      }, (_descriptor3 = _applyDecoratedDescriptor(_class4.prototype, "_targetSpineNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class4.prototype, "_landscapeAniKey", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class4.prototype, "_portraitAniKey", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class4.prototype, "switchChild", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class4.prototype, "landscape", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class4.prototype, "portrait", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class4)) || _class3));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b862c4928359bf58af49717d0e10da713ec40b31.js.map