System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sp, Sprite, color, tween, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, BkgChangeColor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      color = _cc.color;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b4cff6+k+JGMJ2ICxGAnJ6N", "BkgChangeColor", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sp', 'Sprite', 'color', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BkgChangeColor", BkgChangeColor = (_dec = ccclass('BkgChangeColor'), _dec2 = property({
        range: [0, 255],
        visible: true,
        displayName: '物件灰階的參數',
        tooltip: '物件灰階的參數'
      }), _dec3 = property({
        range: [0, 255],
        visible: true,
        displayName: '物件特殊灰階的參數',
        tooltip: '美術要求在特殊時期要使用的漸變參數'
      }), _dec4 = property({
        range: [0, 5],
        visible: true,
        displayName: 'tween time',
        tooltip: '動態漸變的時間'
      }), _dec5 = property({
        type: [Sprite],
        visible: true,
        displayName: '需要反灰的靜態圖',
        tooltip: '需要反灰的靜態圖'
      }), _dec6 = property({
        type: [sp.Skeleton],
        visible: true,
        displayName: '需要反灰的Spine',
        tooltip: '需要反灰的Spine'
      }), _dec(_class = (_class2 = class BkgChangeColor extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_darkBrightness", _descriptor, this);

          //--78特殊的灰階
          _initializerDefineProperty(this, "_sp_darkBrightness", _descriptor2, this);

          _initializerDefineProperty(this, "_tweenTime", _descriptor3, this);

          //--反灰要用的實體
          _initializerDefineProperty(this, "_aeyDarkSprites", _descriptor4, this);

          _initializerDefineProperty(this, "_aryDarkSpines", _descriptor5, this);

          this._colorState = false;
        }

        //--目前的顏色狀態
        //==========================<interface IBkgDisplay>============================================================
        getDarkBrightness(isDark, spColorMode) {
          let returnvalue = 255;

          if (isDark) {
            returnvalue = spColorMode ? this._sp_darkBrightness : this._darkBrightness;
          }

          return returnvalue;
        }

        changeBasicSpineDarkState(colorValue) {
          for (const sp of this._aryDarkSpines) {
            sp.color = color(colorValue, colorValue, colorValue, sp.color.a);
          }
        }

        changeBasicSpriteDarkState(colorValue) {
          for (const spr of this._aeyDarkSprites) {
            spr.color = color(colorValue, colorValue, colorValue, spr.color.a);
          }
        }

        setTweenToDark(colorValue, isDark) {
          let darkBrightness = colorValue; //--終點顏色

          let colorNumber = isDark ? {
            value: darkBrightness
          } : {
            value: 255
          }; //--起點顏色

          const value = colorNumber.value.toString(); //console.log('check_setTweenBrightness:', isDark, this._symbol.reelIndex, value);

          return new Promise(resolve => {
            tween(colorNumber).to(this._tweenTime, {
              value: darkBrightness
            }, {
              onUpdate: (t, r) => {
                this.changeBasicSpineDarkState(colorNumber.value);
                this.changeBasicSpriteDarkState(colorNumber.value);
              }
            }).call(() => {
              resolve();
            }).start();
          });
        } //---開啟背景反黑


        openDark(spColorMode = false) {
          this._colorState = true;
          const colorValue = this.getDarkBrightness(true, spColorMode);
          this.changeBasicSpineDarkState(colorValue);
          this.changeBasicSpriteDarkState(colorValue);
        } //---關閉背景反黑


        closeDark(spColorMode = false) {
          this._colorState = false;
          const colorValue = this.getDarkBrightness(false, spColorMode);
          this.changeBasicSpineDarkState(colorValue);
          this.changeBasicSpriteDarkState(colorValue);
        }

        async openTweenDark(spColorMode = false) {
          this._colorState = true;
          const colorValue = this.getDarkBrightness(true, spColorMode);
          await this.setTweenToDark(colorValue, true);
        }

        async closeTweenDark(spColorMode = false) {
          this._colorState = false;
          const colorValue = this.getDarkBrightness(false, spColorMode);
          await this.setTweenToDark(colorValue, false);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_darkBrightness", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_sp_darkBrightness", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_tweenTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_aeyDarkSprites", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_aryDarkSpines", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=23fb63f38033783d48b52f28ea8b6679623f82d5.js.map