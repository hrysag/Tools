System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, ProcessTempoConfig;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55778VxUV9JyZwhK78ri95/", "ProcessTempoConfig", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ProcessTempoConfig", ProcessTempoConfig = (_dec = ccclass('ProcessTempoConfig'), _dec2 = property({
        type: CCFloat,
        displayName: '滾輪結束到中獎間隔',
        min: 0,
        max: 99,
        step: 0.01,
        slide: true,
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec3 = property({
        type: CCFloat,
        displayName: '圖示中獎到秀分間隔',
        min: 0,
        max: 99,
        step: 0.01,
        slide: true,
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec4 = property({
        type: CCFloat,
        displayName: '圖示中獎到大獎間隔',
        min: 0,
        max: 99,
        step: 0.01,
        slide: true,
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec5 = property({
        type: CCFloat,
        displayName: '得分到Scatter演繹間隔',
        min: 0,
        max: 99,
        step: 0.01,
        slide: true,
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec6 = property({
        type: CCFloat,
        displayName: 'Scatter演繹到FG轉場版間隔',
        min: 0,
        max: 99,
        step: 0.01,
        slide: true,
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec7 = property({
        type: CCFloat,
        displayName: 'Scatter演繹到FG加局間隔',
        min: 0,
        max: 99,
        step: 0.01,
        slide: true,
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec8 = property({
        type: CCFloat,
        displayName: 'FG結束到FG退場版間隔',
        min: 0,
        max: 99,
        step: 0.01,
        slide: true,
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec9 = property({
        type: CCFloat,
        displayName: '整局結束到輪播間隔',
        min: 0,
        max: 99,
        step: 0.01,
        slide: true,
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec10 = property({
        type: CCFloat,
        displayName: '待機中獎輪播間隔',
        min: 0,
        max: 99,
        step: 0.01,
        slide: true,
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec11 = property({
        type: CCFloat,
        displayName: '無得分換局間隔',
        min: 0,
        max: 99,
        step: 0.01,
        slide: true,
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec12 = property({
        type: CCFloat,
        displayName: '有得分換局間隔',
        min: 0,
        max: 99,
        step: 0.01,
        slide: true,
        group: {
          name: '時間配置',
          id: '1'
        }
      }), _dec(_class = (_class2 = class ProcessTempoConfig {
        constructor() {
          _initializerDefineProperty(this, "rollToWinTime", _descriptor, this);

          _initializerDefineProperty(this, "winToScoreTime", _descriptor2, this);

          _initializerDefineProperty(this, "winToBigWinTime", _descriptor3, this);

          _initializerDefineProperty(this, "scoreToScatterTime", _descriptor4, this);

          _initializerDefineProperty(this, "scatterToFGTime", _descriptor5, this);

          _initializerDefineProperty(this, "scatterToFGAddTime", _descriptor6, this);

          _initializerDefineProperty(this, "fgOverToOutTime", _descriptor7, this);

          _initializerDefineProperty(this, "rollOverToStandByTime", _descriptor8, this);

          _initializerDefineProperty(this, "standBySpaceTime", _descriptor9, this);

          _initializerDefineProperty(this, "autoSpaceTime", _descriptor10, this);

          _initializerDefineProperty(this, "winAutoSpaceTime", _descriptor11, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rollToWinTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "winToScoreTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "winToBigWinTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scoreToScatterTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scatterToFGTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scatterToFGAddTime", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "fgOverToOutTime", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rollOverToStandByTime", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "standBySpaceTime", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "autoSpaceTime", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "winAutoSpaceTime", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=76a2b083ca6ffb5394688df34995764fcb90a1cd.js.map