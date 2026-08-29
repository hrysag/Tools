System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, CCString, Component, Enum, EDITOR_NOT_IN_PREVIEW, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, GameModeExample, ControllerSettingData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      CCString = _cc.CCString;
      Component = _cc.Component;
      Enum = _cc.Enum;
    }, function (_ccEnv) {
      EDITOR_NOT_IN_PREVIEW = _ccEnv.EDITOR_NOT_IN_PREVIEW;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bea8cLteolJvb9aWH7M+qw6", "ControllerSettingData", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCInteger', 'CCString', 'Component', 'Enum', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameModeExample", GameModeExample = /*#__PURE__*/function (GameModeExample) {
        GameModeExample[GameModeExample["NG"] = 0] = "NG";
        GameModeExample[GameModeExample["FG"] = 1] = "FG";
        return GameModeExample;
      }({}));

      _export("ControllerSettingData", ControllerSettingData = (_dec = ccclass('ControllerSettingData'), _dec2 = property({
        type: Enum(GameModeExample),
        displayName: '當前模式',
        group: {
          id: '5',
          name: '控制'
        }
      }), _dec3 = property({
        displayName: '強押中獎',
        group: {
          id: '5',
          name: '控制'
        }
      }), _dec4 = property({
        displayName: '強押大獎',
        group: {
          id: '5',
          name: '控制'
        }
      }), _dec5 = property({
        type: CCInteger,
        displayName: '聽牌滾輪ID',
        group: {
          id: '5',
          name: '控制'
        }
      }), _dec6 = property({
        type: CCInteger,
        displayName: '滾輪順序',
        group: {
          id: '5',
          name: '控制'
        }
      }), _dec7 = property({
        type: CCString,
        displayName: '最終盤面，請用,分隔',
        group: {
          id: '5',
          name: '控制'
        }
      }), _dec8 = property({
        type: CCString,
        displayName: '中線位置，請用,分隔',
        group: {
          id: '5',
          name: '控制'
        }
      }), _dec9 = property({
        displayName: '開啟排版',
        visible: EDITOR_NOT_IN_PREVIEW,
        group: {
          id: '5',
          name: '控制'
        }
      }), _dec(_class = (_class2 = class ControllerSettingData extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gameMode", _descriptor, this);

          _initializerDefineProperty(this, "forceWin", _descriptor2, this);

          _initializerDefineProperty(this, "forceBigWin", _descriptor3, this);

          _initializerDefineProperty(this, "readyHandReelList", _descriptor4, this);

          _initializerDefineProperty(this, "rollingReelIDs", _descriptor5, this);

          _initializerDefineProperty(this, "diskData", _descriptor6, this);

          _initializerDefineProperty(this, "winLineData", _descriptor7, this);

          this.onIsLayoutChange = void 0;
          this._isLayout = false;
        }

        set isLayout(value) {
          if (this._isLayout !== value) {
            var _this$onIsLayoutChang;

            this._isLayout = value;
            (_this$onIsLayoutChang = this.onIsLayoutChange) == null || _this$onIsLayoutChang.call(this, this._isLayout);
          }
        }

        get isLayout() {
          return this._isLayout;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameMode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return GameModeExample.NG;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "forceWin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "forceBigWin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "readyHandReelList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rollingReelIDs", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [0, 1, 2, 3];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "diskData", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "winLineData", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "isLayout", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "isLayout"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1f8b2176314308eb6084b48dcd917bd92117eb93.js.map