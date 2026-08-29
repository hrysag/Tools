System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _crd, ccclass, property, ProcessSettingData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9242tfk39E+bHZdy7TR5ol", "ProcessSettingData", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCFloat', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ProcessSettingData", ProcessSettingData = (_dec = ccclass('ProcessSettingData'), _dec2 = property({
        type: CCFloat,
        displayName: '普通模式滾輪停止後到中獎',
        group: {
          id: '1',
          name: '流程設定'
        },
        min: 0
      }), _dec3 = property({
        type: CCFloat,
        displayName: '快速模式滾輪停止後到中獎',
        group: {
          id: '1',
          name: '流程設定'
        },
        min: 0
      }), _dec4 = property({
        type: CCFloat,
        displayName: '普通模式每局間隔時間',
        group: {
          id: '1',
          name: '流程設定'
        },
        min: 0
      }), _dec5 = property({
        type: CCFloat,
        displayName: '快速模式每局間隔時間',
        group: {
          id: '1',
          name: '流程設定'
        },
        min: 0
      }), _dec6 = property({
        type: CCFloat,
        displayName: 'ICON中獎動畫後接到跑分',
        group: {
          id: '2',
          name: '動畫'
        },
        min: 0
      }), _dec7 = property({
        type: CCFloat,
        displayName: 'ICON中獎動畫時長',
        group: {
          id: '2',
          name: '動畫'
        },
        min: 0
      }), _dec8 = property({
        type: CCFloat,
        displayName: '顯示得分動畫時長',
        group: {
          id: '2',
          name: '動畫'
        },
        min: 0
      }), _dec9 = property({
        type: CCFloat,
        displayName: '關閉得分動畫時長',
        group: {
          id: '2',
          name: '動畫'
        },
        min: 0
      }), _dec10 = property({
        displayName: '得分是否跑分',
        group: {
          id: '2',
          name: '動畫'
        }
      }), _dec11 = property({
        type: CCFloat,
        displayName: '分數跑分時長',

        visible() {
          return this.needRunScore;
        },

        group: {
          id: '2',
          name: '動畫'
        },
        min: 0
      }), _dec12 = property({
        type: CCFloat,
        displayName: '分數顯示時長',
        group: {
          id: '2',
          name: '動畫'
        },
        min: 0
      }), _dec13 = property({
        type: CCFloat,
        displayName: '跑分結束接待機動畫',
        group: {
          id: '2',
          name: '動畫'
        },
        min: 0
      }), _dec14 = property({
        type: CCFloat,
        displayName: '待機動畫間隔時長',
        group: {
          id: '2',
          name: '動畫'
        },
        min: 0
      }), _dec15 = property({
        displayName: '中獎動畫與得分一起顯示',
        group: {
          id: '2',
          name: '動畫'
        }
      }), _dec16 = property({
        displayName: '跑分與底下得分一起顯示',
        group: {
          id: '2',
          name: '動畫'
        }
      }), _dec17 = property({
        displayName: '待機動畫與得分一起顯示',
        group: {
          id: '2',
          name: '動畫'
        }
      }), _dec(_class = (_class2 = class ProcessSettingData extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "normalStopToPlayWinTime", _descriptor, this);

          _initializerDefineProperty(this, "turboStopToPlayWinTime", _descriptor2, this);

          _initializerDefineProperty(this, "normalRoundSpaceTime", _descriptor3, this);

          _initializerDefineProperty(this, "turboRoundSpaceTime", _descriptor4, this);

          _initializerDefineProperty(this, "winAnimToScoreTime", _descriptor5, this);

          _initializerDefineProperty(this, "winAnimTime", _descriptor6, this);

          _initializerDefineProperty(this, "showScoreTime", _descriptor7, this);

          _initializerDefineProperty(this, "hideScoreTime", _descriptor8, this);

          _initializerDefineProperty(this, "needRunScore", _descriptor9, this);

          _initializerDefineProperty(this, "runScoreTime", _descriptor10, this);

          _initializerDefineProperty(this, "scoreShowTime", _descriptor11, this);

          _initializerDefineProperty(this, "runScoreToStandbyTime", _descriptor12, this);

          _initializerDefineProperty(this, "standbySpaceTime", _descriptor13, this);

          _initializerDefineProperty(this, "winAnimAndRunScore", _descriptor14, this);

          _initializerDefineProperty(this, "runScoreAndBottomScore", _descriptor15, this);

          _initializerDefineProperty(this, "readyHandAnimAndRunScore", _descriptor16, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "normalStopToPlayWinTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "turboStopToPlayWinTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "normalRoundSpaceTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "turboRoundSpaceTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "winAnimToScoreTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "winAnimTime", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "showScoreTime", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "hideScoreTime", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "needRunScore", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "runScoreTime", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "scoreShowTime", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "runScoreToStandbyTime", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "standbySpaceTime", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "winAnimAndRunScore", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "runScoreAndBottomScore", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "readyHandAnimAndRunScore", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=77d23b10b79cfaa7c08faa4af6e7edebbbf0dce8.js.map