System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, sp, SlotAttaches, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, SkeletonExtension;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSlotAttaches(extras) {
    _reporterNs.report("SlotAttaches", "./SlotAttaches", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      SlotAttaches = _unresolved_2.SlotAttaches;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cdf37/gQP5EXqatWLNU8Eu+", "SkeletonExtension", undefined);

      __checkObsolete__(['_decorator', 'sp', 'Texture2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkeletonExtension", SkeletonExtension = (_dec = ccclass('SkeletonExtension'), _dec2 = property({
        tooltip: "是否需要創建新的 attachment, 如果為 false, 所有共享相同 attachment 的组件都將受影響。"
      }), _dec3 = property(_crd && SlotAttaches === void 0 ? (_reportPossibleCrUseOfSlotAttaches({
        error: Error()
      }), SlotAttaches) : SlotAttaches), _dec(_class = (_class2 = class SkeletonExtension extends sp.Skeleton {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "isCreateNew", _descriptor, this);

          _initializerDefineProperty(this, "slotAttaches", _descriptor2, this);

          this.needUpdate = false;
        }

        onEnable() {
          super.onEnable();

          if (this.needUpdate) {
            this.updateSlotTexture();
            this.needUpdate = false;
          }
        }
        /**
         * slot 需要 spine 在 hierarchy 上 active 下才能被讀取，
         * 故若原為 inactive，採取先更改 flag 狀態，等到 active 後再更新。
         */


        checkAndUpdateSlot() {
          if (this.node.activeInHierarchy) {
            this.updateSlotTexture();
          } else {
            this.needUpdate = true;
          }
        }

        updateSlotTexture() {
          for (let slotAttach of this.slotAttaches) {
            let tex = slotAttach.spriteFrame.texture;
            this.setSlotTexture(slotAttach.slotName, tex, this.isCreateNew);
          }
        }

        playLocalizationSpine(animName, track = 0, isLoop = false) {
          this.clearAnimation(track);
          this.updateSlotTexture();
          this.setAnimation(track, animName, isLoop);
        }

        playLocalizationSpinePromise(animName, track = 0, isLoop = false) {
          this.clearAnimation(track);
          this.updateSlotTexture();
          return new Promise((resolve, reject) => {
            let tr = this.setAnimation(track, animName, isLoop);
            this.setTrackCompleteListener(tr, () => {
              resolve();
            });
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isCreateNew", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "slotAttaches", [_dec3], {
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
//# sourceMappingURL=90d016dba407c10ce7f195e420d9f06936c917a4.js.map