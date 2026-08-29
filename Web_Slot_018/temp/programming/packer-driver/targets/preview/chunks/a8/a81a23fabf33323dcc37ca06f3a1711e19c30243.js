System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, IAniWithAniCtrl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _dec14, _dec15, _dec16, _class4, _class5, _descriptor13, _descriptor14, _dec17, _dec18, _dec19, _dec20, _class7, _class8, _descriptor15, _descriptor16, _descriptor17, _dec21, _dec22, _dec23, _class10, _class11, _descriptor18, _descriptor19, _crd, ccclass, property, AniCtrlPropDef, AnimationPlayStateList, SpineSequenceItem, SpineSequenceList;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimationPlayParams(extras) {
    _reporterNs.report("AnimationPlayParams", "../../Definitions/AnimationDataOptions", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3072ei8nH5P3YZ+akA5W+2O", "AnimationPlayStateBase", undefined);

      //import { AnimationPlayParamsList } from '../../Definitions/AnimationDataOptions';
      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AniCtrlPropDef", AniCtrlPropDef = (_dec = ccclass('AniCtrlPropDef'), _dec2 = property({
        tooltip: '循環播放'
      }), _dec3 = property({
        tooltip: '重複次數'
      }), _dec4 = property({
        tooltip: '延遲播放'
      }), _dec5 = property({
        tooltip: '動畫片段名稱'
      }), _dec6 = property({
        tooltip: '播放速度'
      }), _dec7 = property({
        tooltip: '播放模式'
      }), _dec8 = property({
        tooltip: 'timescale'
      }), _dec9 = property({
        tooltip: 'useDefault'
      }), _dec10 = property({
        tooltip: 'trackIndex'
      }), _dec11 = property({
        tooltip: 'skinName'
      }), _dec12 = property({
        tooltip: 'eventFrameType'
      }), _dec13 = property({
        tooltip: 'useCompleteListen'
      }), _dec(_class = (_class2 = class AniCtrlPropDef {
        constructor() {
          _initializerDefineProperty(this, "loop", _descriptor, this);

          _initializerDefineProperty(this, "repeatCount", _descriptor2, this);

          _initializerDefineProperty(this, "delay", _descriptor3, this);

          _initializerDefineProperty(this, "targetName", _descriptor4, this);

          _initializerDefineProperty(this, "speed", _descriptor5, this);

          _initializerDefineProperty(this, "wrapMode", _descriptor6, this);

          _initializerDefineProperty(this, "timeScale", _descriptor7, this);

          _initializerDefineProperty(this, "useDefault", _descriptor8, this);

          _initializerDefineProperty(this, "trackIndex", _descriptor9, this);

          _initializerDefineProperty(this, "skinName", _descriptor10, this);

          //--要塞入事件通知的影格事件--
          _initializerDefineProperty(this, "eventFrameType", _descriptor11, this);

          _initializerDefineProperty(this, "useCompleteListen", _descriptor12, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loop", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "repeatCount", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "delay", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "targetName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "wrapMode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "timeScale", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "useDefault", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "trackIndex", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "skinName", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "eventFrameType", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "useCompleteListen", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));

      _export("AnimationPlayStateList", AnimationPlayStateList = (_dec14 = ccclass('AnimationPlayStateList'), _dec15 = property({
        visible: true,
        tooltip: '是否啟用自訂state'
      }), _dec16 = property({
        type: [AniCtrlPropDef],
        tooltip: '自定義動畫片段清單(播放幾個就放幾個)',
        visible: function visible() {
          return !this.useDefaultState;
        }
      }), _dec14(_class4 = (_class5 = class AnimationPlayStateList {
        constructor() {
          _initializerDefineProperty(this, "useDefaultState", _descriptor13, this);

          //@ts-ignore
          _initializerDefineProperty(this, "clipsInfo", _descriptor14, this);
        }

      }, (_descriptor13 = _applyDecoratedDescriptor(_class5.prototype, "useDefaultState", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class5.prototype, "clipsInfo", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class5)) || _class4));

      _export("SpineSequenceItem", SpineSequenceItem = (_dec17 = ccclass('SpineSequenceItem'), _dec18 = property({
        tooltip: '動畫的序列群組名稱'
      }), _dec19 = property({
        tooltip: '是否循環播放這個播放列表'
      }), _dec20 = property({
        type: [AniCtrlPropDef],
        tooltip: '動畫片段資料'
      }), _dec17(_class7 = (_class8 = class SpineSequenceItem {
        constructor() {
          _initializerDefineProperty(this, "SequenceId", _descriptor15, this);

          _initializerDefineProperty(this, "loopSequence", _descriptor16, this);

          _initializerDefineProperty(this, "sequence", _descriptor17, this);
        }

      }, (_descriptor15 = _applyDecoratedDescriptor(_class8.prototype, "SequenceId", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class8.prototype, "loopSequence", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class8.prototype, "sequence", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class8)) || _class7));

      _export("SpineSequenceList", SpineSequenceList = (_dec21 = ccclass('SpineSequenceList'), _dec22 = property({
        type: [SpineSequenceItem],
        tooltip: '動畫序列清單'
      }), _dec23 = property({
        tooltip: '是否循環播<整個>播放列表'
      }), _dec21(_class10 = (_class11 = class SpineSequenceList {
        constructor() {
          _initializerDefineProperty(this, "sequenceList", _descriptor18, this);

          _initializerDefineProperty(this, "loopAllSequence", _descriptor19, this);
        }

      }, (_descriptor18 = _applyDecoratedDescriptor(_class11.prototype, "sequenceList", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class11.prototype, "loopAllSequence", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class11)) || _class10)); //-IAnimationControl


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
//# sourceMappingURL=a81a23fabf33323dcc37ca06f3a1711e19c30243.js.map