System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, Enum, CleanTrackType, IAniWithAniCtrl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class4, _class5, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _dec19, _dec20, _dec21, _class7, _class8, _descriptor17, _descriptor18, _dec22, _dec23, _dec24, _class10, _class11, _descriptor19, _descriptor20, _dec25, _dec26, _class13, _class14, _descriptor21, _dec27, _dec28, _dec29, _dec30, _class16, _class17, _descriptor22, _descriptor23, _descriptor24, _dec31, _dec32, _dec33, _class19, _class20, _descriptor25, _descriptor26, _dec34, _dec35, _class22, _class23, _descriptor27, _dec36, _dec37, _class25, _class26, _descriptor28, _dec38, _dec39, _dec40, _dec41, _class28, _class29, _descriptor29, _descriptor30, _descriptor31, _dec42, _dec43, _dec44, _class31, _class32, _descriptor32, _descriptor33, _crd, ccclass, property, AniCtrlPropDef, SpineCtrlPropDef, SpineAniPlayInfoList, AnimationPlayInfoList, CleanTrackTypeEnum, ClearTrackTypeState, AnimationStateType, AnimationStateTypeEnum, AnimationState, AnimationStateList, MultiAnimationState, MultiAnimationStateList, SpineSequenceItem, SpineSequenceList;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimationPlayParams(extras) {
    _reporterNs.report("AnimationPlayParams", "../../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCleanTrackType(extras) {
    _reporterNs.report("CleanTrackType", "../../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpinePlayParams(extras) {
    _reporterNs.report("SpinePlayParams", "../../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "../../Definitions/IAnimationControl", _context.meta, extras);
  }

  _export("IAniWithAniCtrl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCString = _cc.CCString;
      Enum = _cc.Enum;
    }, function (_unresolved_2) {
      CleanTrackType = _unresolved_2.CleanTrackType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85a88pwvgxEL5GXFmAqZ1U1", "AnimationPlayStateBase", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Enum']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AniCtrlPropDef", AniCtrlPropDef = (_dec = ccclass('AniCtrlPropDef'), _dec2 = property({
        tooltip: 'useDefault'
      }), _dec3 = property({
        tooltip: '延遲播放'
      }), _dec4 = property({
        tooltip: '重複次數'
      }), _dec5 = property({
        tooltip: '動畫片段名稱'
      }), _dec6 = property({
        tooltip: '播放速度'
      }), _dec7 = property({
        tooltip: '播放模式'
      }), _dec8 = property({
        tooltip: '持續時間_單位:sec'
      }), _dec(_class = (_class2 = class AniCtrlPropDef {
        constructor() {
          _initializerDefineProperty(this, "useDefault", _descriptor, this);

          _initializerDefineProperty(this, "delay", _descriptor2, this);

          _initializerDefineProperty(this, "repeatCount", _descriptor3, this);

          _initializerDefineProperty(this, "targetName", _descriptor4, this);

          _initializerDefineProperty(this, "speed", _descriptor5, this);

          _initializerDefineProperty(this, "wrapMode", _descriptor6, this);

          _initializerDefineProperty(this, "duration", _descriptor7, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "useDefault", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "delay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "repeatCount", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "targetName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "wrapMode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "duration", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _export("SpineCtrlPropDef", SpineCtrlPropDef = (_dec9 = ccclass('SpineCtrlPropDef'), _dec10 = property({
        tooltip: '循環播放'
      }), _dec11 = property({
        tooltip: '重複次數'
      }), _dec12 = property({
        tooltip: '延遲播放'
      }), _dec13 = property({
        tooltip: '動畫片段名稱'
      }), _dec14 = property({
        tooltip: 'timescale'
      }), _dec15 = property({
        tooltip: 'useDefault'
      }), _dec16 = property({
        tooltip: 'trackIndex'
      }), _dec17 = property({
        tooltip: 'skinName'
      }), _dec18 = property({
        tooltip: 'eventFrameType'
      }), _dec9(_class4 = (_class5 = class SpineCtrlPropDef {
        constructor() {
          _initializerDefineProperty(this, "loop", _descriptor8, this);

          _initializerDefineProperty(this, "repeatCount", _descriptor9, this);

          _initializerDefineProperty(this, "delay", _descriptor10, this);

          _initializerDefineProperty(this, "targetName", _descriptor11, this);

          _initializerDefineProperty(this, "timeScale", _descriptor12, this);

          _initializerDefineProperty(this, "useDefault", _descriptor13, this);

          _initializerDefineProperty(this, "trackIndex", _descriptor14, this);

          _initializerDefineProperty(this, "skinName", _descriptor15, this);

          //--本身繼承component才能這樣搞
          //@property({ tooltip: 'frameEventType', visible() { return this.useFrameEvent } })
          _initializerDefineProperty(this, "eventFrameType", _descriptor16, this);
        } //@property({ tooltip: 'useFrameEvent' })
        //public useFrameEvent: boolean = false;


      }, (_descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "loop", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "repeatCount", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "delay", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class5.prototype, "targetName", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class5.prototype, "timeScale", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class5.prototype, "useDefault", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class5.prototype, "trackIndex", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class5.prototype, "skinName", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class5.prototype, "eventFrameType", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      })), _class5)) || _class4));

      _export("SpineAniPlayInfoList", SpineAniPlayInfoList = (_dec19 = ccclass('SpineAniPlayInfoList'), _dec20 = property({
        visible: true,
        tooltip: '是否啟用自訂state'
      }), _dec21 = property({
        type: [SpineCtrlPropDef],
        tooltip: '自定義動畫片段清單(播放幾個就放幾個)',
        visible: function () {
          return !this.useDefaultState;
        }
      }), _dec19(_class7 = (_class8 = class SpineAniPlayInfoList {
        constructor() {
          _initializerDefineProperty(this, "useDefaultState", _descriptor17, this);

          //@ts-ignore
          _initializerDefineProperty(this, "clipsInfo", _descriptor18, this);
        }

      }, (_descriptor17 = _applyDecoratedDescriptor(_class8.prototype, "useDefaultState", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class8.prototype, "clipsInfo", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class8)) || _class7));

      _export("AnimationPlayInfoList", AnimationPlayInfoList = (_dec22 = ccclass('AnimationPlayInfoList'), _dec23 = property({
        visible: true,
        tooltip: '是否啟用自訂state'
      }), _dec24 = property({
        type: [AniCtrlPropDef],
        tooltip: '自定義動畫片段清單(播放幾個就放幾個)',
        visible: function () {
          return !this.useDefaultState;
        }
      }), _dec22(_class10 = (_class11 = class AnimationPlayInfoList {
        constructor() {
          _initializerDefineProperty(this, "useDefaultState", _descriptor19, this);

          //@ts-ignore
          _initializerDefineProperty(this, "clipsInfo", _descriptor20, this);
        }

      }, (_descriptor19 = _applyDecoratedDescriptor(_class11.prototype, "useDefaultState", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class11.prototype, "clipsInfo", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class11)) || _class10));

      CleanTrackTypeEnum = Enum(_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
        error: Error()
      }), CleanTrackType) : CleanTrackType);

      _export("ClearTrackTypeState", ClearTrackTypeState = (_dec25 = ccclass('ClearTrackTypeState'), _dec26 = property({
        type: CleanTrackTypeEnum,
        visible: true,
        tooltip: '動畫狀態類型'
      }), _dec25(_class13 = (_class14 = class ClearTrackTypeState {
        constructor() {
          _initializerDefineProperty(this, "trackType", _descriptor21, this);
        }

      }, (_descriptor21 = _applyDecoratedDescriptor(_class14.prototype, "trackType", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
            error: Error()
          }), CleanTrackType) : CleanTrackType).All_TRACKS;
        }
      })), _class14)) || _class13)); //--用來判斷預設條件


      _export("AnimationStateType", AnimationStateType = /*#__PURE__*/function (AnimationStateType) {
        AnimationStateType[AnimationStateType["Idle"] = 0] = "Idle";
        AnimationStateType[AnimationStateType["Win"] = 1] = "Win";
        AnimationStateType[AnimationStateType["Default"] = 2] = "Default";
        AnimationStateType[AnimationStateType["Custom"] = 3] = "Custom";
        AnimationStateType[AnimationStateType["In"] = 4] = "In";
        AnimationStateType[AnimationStateType["Loop"] = 5] = "Loop";
        AnimationStateType[AnimationStateType["Out"] = 6] = "Out";
        return AnimationStateType;
      }({}));

      AnimationStateTypeEnum = Enum(AnimationStateType);

      _export("AnimationState", AnimationState = (_dec27 = ccclass('AnimationState'), _dec28 = property({
        type: AnimationStateTypeEnum,
        visible: true,
        tooltip: '動畫狀態類型'
      }), _dec29 = property({
        type: CCString,
        tooltip: '自訂狀態名稱（當上面選 Custom 時顯示）',

        visible() {
          return this.AniStateType === AnimationStateType.Custom;
        }

      }), _dec30 = property({
        tooltip: '動畫片段名稱'
      }), _dec27(_class16 = (_class17 = class AnimationState {
        constructor() {
          _initializerDefineProperty(this, "AniStateType", _descriptor22, this);

          _initializerDefineProperty(this, "customStateName", _descriptor23, this);

          _initializerDefineProperty(this, "targetName", _descriptor24, this);
        }

        getStateKey() {
          return this.AniStateType === AnimationStateType.Custom ? this.customStateName.trim() : AnimationStateType[this.AniStateType]; // e.g. 'Idle' | 'Win' | 'Default'
        }

      }, (_descriptor22 = _applyDecoratedDescriptor(_class17.prototype, "AniStateType", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return AnimationStateType.Default;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class17.prototype, "customStateName", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class17.prototype, "targetName", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      })), _class17)) || _class16));

      _export("AnimationStateList", AnimationStateList = (_dec31 = ccclass('AnimationStateList'), _dec32 = property({
        visible: true,
        tooltip: '是否啟用自訂狀態state'
      }), _dec33 = property({
        type: [AnimationState],
        tooltip: '自定義動畫狀態(狀態對應播放清單的tagetName)',
        visible: function () {
          return !this.useDefaultState;
        }
      }), _dec31(_class19 = (_class20 = class AnimationStateList {
        constructor() {
          _initializerDefineProperty(this, "useDefaultState", _descriptor25, this);

          //@ts-ignore
          _initializerDefineProperty(this, "stateInfo", _descriptor26, this);
        }

      }, (_descriptor25 = _applyDecoratedDescriptor(_class20.prototype, "useDefaultState", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class20.prototype, "stateInfo", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class20)) || _class19));

      _export("MultiAnimationState", MultiAnimationState = (_dec34 = ccclass('MultiAnimationState'), _dec35 = property({
        tooltip: '動畫索引'
      }), _dec34(_class22 = (_class23 = class MultiAnimationState extends AnimationState {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spineControllerKey", _descriptor27, this);
        }

      }, (_descriptor27 = _applyDecoratedDescriptor(_class23.prototype, "spineControllerKey", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      })), _class23)) || _class22));

      _export("MultiAnimationStateList", MultiAnimationStateList = (_dec36 = ccclass('MultiAnimationStateList'), _dec37 = property({
        type: [MultiAnimationState],
        tooltip: '自定義動畫狀態(含索引)',
        visible: function () {
          return !this.useDefaultState;
        }
      }), _dec36(_class25 = (_class26 = class MultiAnimationStateList extends AnimationStateList {
        constructor(...args) {
          super(...args);

          // 重新宣告並覆寫 clipsInfo 的型別與 decorator
          //@ts-ignore
          _initializerDefineProperty(this, "clipsInfo", _descriptor28, this);
        }

      }, (_descriptor28 = _applyDecoratedDescriptor(_class26.prototype, "clipsInfo", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class26)) || _class25));

      _export("SpineSequenceItem", SpineSequenceItem = (_dec38 = ccclass('SpineSequenceItem'), _dec39 = property({
        tooltip: '動畫的序列群組名稱'
      }), _dec40 = property({
        tooltip: '是否循環播放這個播放列表'
      }), _dec41 = property({
        type: [SpineCtrlPropDef],
        tooltip: '動畫片段資料'
      }), _dec38(_class28 = (_class29 = class SpineSequenceItem {
        constructor() {
          _initializerDefineProperty(this, "SequenceId", _descriptor29, this);

          _initializerDefineProperty(this, "loopSequence", _descriptor30, this);

          _initializerDefineProperty(this, "sequence", _descriptor31, this);
        }

      }, (_descriptor29 = _applyDecoratedDescriptor(_class29.prototype, "SequenceId", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class29.prototype, "loopSequence", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class29.prototype, "sequence", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class29)) || _class28));

      _export("SpineSequenceList", SpineSequenceList = (_dec42 = ccclass('SpineSequenceList'), _dec43 = property({
        type: [SpineSequenceItem],
        tooltip: '動畫序列清單'
      }), _dec44 = property({
        tooltip: '是否循環播<整個>播放列表'
      }), _dec42(_class31 = (_class32 = class SpineSequenceList {
        constructor() {
          _initializerDefineProperty(this, "sequenceList", _descriptor32, this);

          _initializerDefineProperty(this, "loopAllSequence", _descriptor33, this);
        }

      }, (_descriptor32 = _applyDecoratedDescriptor(_class32.prototype, "sequenceList", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class32.prototype, "loopAllSequence", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class32)) || _class31)); //-IAnimationControl


      _export("IAniWithAniCtrl", IAniWithAniCtrl = class IAniWithAniCtrl {
        constructor() {
          this.IAni = void 0;
          this.aniCtrl = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1208a5236cb8da87fd9b4980d89ad4468af39704.js.map