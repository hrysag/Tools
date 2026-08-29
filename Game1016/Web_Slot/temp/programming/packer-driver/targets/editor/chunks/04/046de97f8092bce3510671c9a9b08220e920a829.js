System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, UniMovement, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, UniIconBase;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUniMovement(extras) {
    _reporterNs.report("UniMovement", "./Movement/UniMovement", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolBase(extras) {
    _reporterNs.report("SymbolBase", "./Interface/SymbolBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
    }, function (_unresolved_2) {
      UniMovement = _unresolved_2.UniMovement;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37bf4bCVXhC9IAYFvj+aDWf", "UniIconBase", undefined);

      __checkObsolete__(['_decorator', 'CCInteger']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 滾輪的最小單位，裝載一個Symbol資料，繼承UniMovement
       */

      _export("UniIconBase", UniIconBase = (_dec = ccclass('UniIconBase'), _dec2 = property({
        type: CCInteger,
        visible: true,
        readonly: true
      }), _dec(_class = (_class2 = class UniIconBase extends (_crd && UniMovement === void 0 ? (_reportPossibleCrUseOfUniMovement({
        error: Error()
      }), UniMovement) : UniMovement) {
        constructor(...args) {
          super(...args);

          /**內部使用，紀錄當前的siblingIndex */
          _initializerDefineProperty(this, "_siblingIndex", _descriptor, this);

          /**內部使用，紀錄當前的Symbol */
          this._symbol = void 0;

          /**內部使用，紀錄上一個siblingIndex */
          this._lastSiblingIndex = 0;
        }

        /**
         * 設定siblingIndex，會立即更新siblingIndex，並且紀錄上一個siblingIndex
         */
        set siblingIndex(index) {
          this._lastSiblingIndex = this._siblingIndex;
          this._siblingIndex = index;
          this.node.setSiblingIndex(index);
        }
        /**取得當前的siblingIndex */


        get siblingIndex() {
          return this._siblingIndex;
        }

        /**取得當前的Symbol */
        get symbol() {
          return this._symbol;
        }
        /**設定當前的Symbol 
         * @param value Symbol
         * @example
         * Symbol變更時，更新圖片資源
         * 
         * 如果override屬性，get跟set都必須要override
         * ```ts
         * public set symbol(symbol: SymbolNumber) {
                this._symbol = symbol;
                this.gameSprite.spriteFrame = this.spriteFrameList[symbol.symbolID];
        }
         * ```
        */


        set symbol(value) {
          this._symbol = value;
        }

        /**取得上一個siblingIndex */
        get lastSiblingIndex() {
          return this._lastSiblingIndex;
        }
        /**初始化，紀錄當前的siblingIndex */


        init() {
          this.siblingIndex = this.node.getSiblingIndex();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_siblingIndex", [_dec2], {
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
//# sourceMappingURL=046de97f8092bce3510671c9a9b08220e920a829.js.map