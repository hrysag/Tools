System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, SpriteFrame, CCInteger, IconData, ReelRoundState, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, IconData018;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIconData(extras) {
    _reporterNs.report("IconData", "db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/Model/IconData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelRoundState(extras) {
    _reporterNs.report("ReelRoundState", "db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/Model/ReelData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      SpriteFrame = _cc.SpriteFrame;
      CCInteger = _cc.CCInteger;
    }, function (_unresolved_2) {
      IconData = _unresolved_2.IconData;
    }, function (_unresolved_3) {
      ReelRoundState = _unresolved_3.ReelRoundState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77a20ocL4hOZ728S3Y/yBh1", "IconData018", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'CCInteger']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IconData018", IconData018 = (_dec = ccclass('IconData018'), _dec2 = property({
        type: SpriteFrame,
        visible: true,
        displayName: 'RightSide_SpriteFrame',
        tooltip: '右側盤面的圖片'
      }), _dec3 = property({
        type: SpriteFrame,
        visible: true,
        displayName: 'LeftSide_BlurSpriteFrame',
        tooltip: '左側盤面的模糊圖片'
      }), _dec4 = property({
        type: SpriteFrame,
        visible: true,
        displayName: 'RightSide_BlurSpriteFrame',
        tooltip: '右側盤面的模糊圖片'
      }), _dec5 = property({
        type: CCInteger,
        range: [0, 255],
        visible: true,
        tooltip: '特殊模式壓黑後的明亮度'
      }), _dec(_class = (_class2 = class IconData018 extends (_crd && IconData === void 0 ? (_reportPossibleCrUseOfIconData({
        error: Error()
      }), IconData) : IconData) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_rightSide_SpriteFrames", _descriptor, this);

          _initializerDefineProperty(this, "_leftSide_BlurSpriteFrames", _descriptor2, this);

          _initializerDefineProperty(this, "_rightSide_BlurSpriteFrames", _descriptor3, this);

          _initializerDefineProperty(this, "_sp_darkBrightness", _descriptor4, this);

          this.reelId = -1;
          //--icon 在這個reel裡面的index
          this.iconIndexInReel = -1;
          //--這個在iconData裡面也有類似的屬性...在考慮要不要寫進去.或是不做更動.
          //public iconId: number=-1;
          //--陣營的編號(阿里巴巴/四十大盜)--camp=0是阿里巴巴, camp=1是四十大盜
          this.camp = -1;
          this.rollState = (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).Unknown;
        }

        set sp_darkBrightness(value) {
          this._sp_darkBrightness = value;
        }

        get sp_darkBrightness() {
          return this._sp_darkBrightness;
        }

        get rightSide_SpriteFrames() {
          return this._rightSide_SpriteFrames;
        }

        set rightSide_SpriteFrames(spriteFrames) {
          this._rightSide_SpriteFrames = spriteFrames;
        }

        get leftSide_BlurSpriteFrames() {
          return this._leftSide_BlurSpriteFrames;
        }

        set leftSide_BlurSpriteFrames(spriteFrames) {
          this._leftSide_BlurSpriteFrames = spriteFrames;
        }

        get rightSide_BlurSpriteFrames() {
          return this._rightSide_BlurSpriteFrames;
        }

        set rightSide_BlurSpriteFrames(spriteFrames) {
          this._rightSide_BlurSpriteFrames = spriteFrames;
        }
        /**
         * 1.wild圖案在轉的時候呈現wild的圖案(沒有猜拳)
         * 2.停輪的時候才開始猜拳
         * 3.猜拳的結果是在轉輪的時候就已經決定好了
         * 4.wild又分為左右兩邊(阿里巴巴/四十大盜)
         * 
         * 5.freeGame模式下的symbol_09(寶箱(阿里巴巴)/錢袋(四十大盜))是分陣營呈現的
         * 
         * <原始的_spriteFrameList為左側NG圖案>
         * 0-5是一般symbol
         * 6-8是特殊wild
         * 9-FG左側陣營使用的特殊圖案<寶箱>
         * 10-wild旋轉的symbol(server 6-7-8為wild圖案)
         * 在旋轉的時候要替換成wild圖案
         * 到定點後滿足條件及開啟動態圖案(旋轉猜拳)
         * 結束後替換成(6-8wild圖案)
         * 
         * <<<新>_rightSide_SpriteFrames為右側NG圖案>>
         * 9-FG右側陣營使用的特殊圖案<錢袋>
         * 其餘與原始的_spriteFrameList一樣的內容
         
         * 
         * <<新>_leftSide_BlurSpriteFrames為左側NG模糊圖案>>
         * 0-5是一般symbol
         * 6-左側FG特殊圖案<寶箱>
         * WILD不呈現模糊
         * 
         * <新>_rightSide_BlurSpriteFrames為右側NG模糊圖案
         * 6-右側FG特殊圖案<錢袋>
         * 
         * SpriteNode==>最終結果
         * BlurModeSprite==>模糊模式
         * 
         */


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_rightSide_SpriteFrames", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_leftSide_BlurSpriteFrames", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_rightSide_BlurSpriteFrames", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_sp_darkBrightness", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aaaa6549c8c20ad498ba23603325571ae97a9d99.js.map