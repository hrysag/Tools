System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Enum, Node, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec5, _dec6, _dec7, _class4, _class5, _descriptor4, _descriptor5, _crd, ccclass, property, ResizeStateType, ResizeStateEnum, ResizeState, ResizeStateList;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Enum = _cc.Enum;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06f50tj0RxIzbtU8cNbt+fj", "BasicResizeState", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Enum', 'Node']);

      ({
        ccclass,
        property
      } = _decorator); //--組合使用--你可以連續組合使用多個ResizeState來達成你想要的效果

      _export("ResizeStateType", ResizeStateType = /*#__PURE__*/function (ResizeStateType) {
        ResizeStateType[ResizeStateType["DEFAULT"] = 0] = "DEFAULT";
        ResizeStateType[ResizeStateType["RESIZE"] = 1] = "RESIZE";
        ResizeStateType[ResizeStateType["SET_SCALE_TO_DEFAULT"] = 2] = "SET_SCALE_TO_DEFAULT";
        ResizeStateType[ResizeStateType["SET_SCALE_TO_SWITCH"] = 3] = "SET_SCALE_TO_SWITCH";
        ResizeStateType[ResizeStateType["SET_POS_TO_DEFAULT"] = 4] = "SET_POS_TO_DEFAULT";
        ResizeStateType[ResizeStateType["SET_POS_TO_SWITCH"] = 5] = "SET_POS_TO_SWITCH";
        ResizeStateType[ResizeStateType["SET_UI_TRANSFORM_SWITCH_CONTAINER"] = 6] = "SET_UI_TRANSFORM_SWITCH_CONTAINER";
        ResizeStateType[ResizeStateType["SET_UI_TRANSFORM_CUSTOM_CONTAINER"] = 7] = "SET_UI_TRANSFORM_CUSTOM_CONTAINER";
        ResizeStateType[ResizeStateType["CHANGE_ANIMATION"] = 8] = "CHANGE_ANIMATION";
        ResizeStateType[ResizeStateType["CUSTOM"] = 9] = "CUSTOM";
        return ResizeStateType;
      }({}));

      ResizeStateEnum = Enum(ResizeStateType);

      _export("ResizeState", ResizeState = (_dec = ccclass('ResizeState'), _dec2 = property({
        type: ResizeStateEnum,
        visible: true,
        tooltip: 'Resize狀態類型'
      }), _dec3 = property({
        type: Node,
        tooltip: ' 自訂改變uiTransForm(當上面選 SET_UI_TRANSFORM_CUSTOM_CONTAINER 時顯示）',

        visible() {
          return this.resizeStateType === ResizeStateType.SET_UI_TRANSFORM_CUSTOM_CONTAINER;
        }

      }), _dec4 = property({
        tooltip: '掛載名稱_辨識名稱(不填無所謂)'
      }), _dec(_class = (_class2 = class ResizeState {
        constructor() {
          _initializerDefineProperty(this, "resizeStateType", _descriptor, this);

          _initializerDefineProperty(this, "customChangeUITransformTarget", _descriptor2, this);

          _initializerDefineProperty(this, "targetName", _descriptor3, this);
        }

        getStateKey() {
          return ResizeStateType[this.resizeStateType]; // e.g. 'DEFAULT' | 'RESIZE' | 'SET_SCALE'.........
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "resizeStateType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ResizeStateType.DEFAULT;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "customChangeUITransformTarget", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "targetName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class));

      _export("ResizeStateList", ResizeStateList = (_dec5 = ccclass('ResizeStateList'), _dec6 = property({
        visible: true,
        tooltip: '是否啟用自訂狀態state'
      }), _dec7 = property({
        type: [ResizeState],
        tooltip: '自定Resize狀態(狀態對應播放清單的tagetName)',
        visible: function visible() {
          return !this.useDefaultState;
        }
      }), _dec5(_class4 = (_class5 = class ResizeStateList {
        constructor() {
          _initializerDefineProperty(this, "useDefaultState", _descriptor4, this);

          //@ts-ignore
          _initializerDefineProperty(this, "stateInfo", _descriptor5, this);
        }

      }, (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "useDefaultState", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "stateInfo", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=807e5dbbd87c37315cf79b37624e99f784a069de.js.map