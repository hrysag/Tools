System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, sp, Sprite, SpriteFrame, Vec3, SymbolItem, UtilsKit, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, BigWingsSymbol;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSymbolItem(extras) {
    _reporterNs.report("SymbolItem", "./SymbolItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilsKit(extras) {
    _reporterNs.report("UtilsKit", "../lib/UtilsKit", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      SymbolItem = _unresolved_2.SymbolItem;
    }, function (_unresolved_3) {
      UtilsKit = _unresolved_3.UtilsKit;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b45f5dkK/JBUKsz0+MSZ/Bk", "BigWingsSymbol", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Color', 'Node', 'Prefab', 'Skeleton', 'sp', 'Sprite', 'SpriteFrame', 'UIOpacity', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BigWingsSymbol", BigWingsSymbol = (_dec = ccclass("BigWingsSymbol"), _dec2 = property({
        type: [SpriteFrame],
        tooltip: "symbol圖"
      }), _dec3 = property({
        type: [sp.SkeletonData],
        tooltip: "skeleton json"
      }), _dec4 = property({
        type: [sp.SkeletonData],
        tooltip: "bot skeleton json"
      }), _dec(_class = (_class2 = (_class3 = class BigWingsSymbol extends (_crd && SymbolItem === void 0 ? (_reportPossibleCrUseOfSymbolItem({
        error: Error()
      }), SymbolItem) : SymbolItem) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "symbolSpriteFrame", _descriptor, this);

          _initializerDefineProperty(this, "symbolSpineData", _descriptor2, this);

          _initializerDefineProperty(this, "botSpineData", _descriptor3, this);

          this.sprite = void 0;
          this.botSpine = void 0;
          this.frame = void 0;
          this.symSpine = void 0;
          this.lockSpine = void 0;
        }

        get height() {
          return 200;
        }

        changeSymbolID(id) {
          if (!this.sprite) {
            let len = this.node.children.length;

            for (let i = 0; i < len; i++) {
              let child = this.node.children[i];

              if (child.name == "sprite") {
                this.sprite = child;
                this.sprite.active = true;
              } else if (child.name == "botSpine") {
                this.botSpine = child;
                this.botSpine.active = false;
              } else if (child.name == "frame") {
                this.frame = child;
                this.frame.active = false;
              } else if (child.name == "symSpine") {
                this.symSpine = child;
                this.symSpine.active = false;
              } else if (child.name == "lock") {
                this.lockSpine = child;
                this.lockSpine.active = false;
              } else {
                child.active = false;
              }
            }
          }

          this._symbolID = id; // sprite

          this.sprite.getComponent(Sprite).spriteFrame = this.symbolSpriteFrame[this._symbolID]; // this.win();
          // this.idle();
        }

        hasBot() {
          return 2 <= this._symbolID && this._symbolID <= 5;
        }

        isWild() {
          return this._symbolID == 0 || this._symbolID == 12 || this._symbolID == 13;
        }
        /**
         * M1~M4有底版（蛋、玉璽、葫蘆、玉佩）
         *
         * 
         * symbol圖片順序
         * -sprite
         * -symbol底層
         * -連線框
         * -symbol spine
         *
         * Wild圖片順序
         * -sprite
         * -symbol底層 (沒顯示)
         * -symbol spine
         * -連線框
         */


        win(id) {
          return new Promise(async resolve => {
            var _skeletonComponent$ge;

            this.sprite.active = false;
            let changed = false;

            if (id && this._symbolID != id) {
              this.changeSymbolID(id);
              changed = true;
            }

            const skeletonComponent = this.symSpine.getComponent(sp.Skeleton);
            if (!skeletonComponent.skeletonData || changed) skeletonComponent.skeletonData = this.symbolSpineData[this._symbolID]; // console.error("playWin", this._symbolID);

            skeletonComponent.premultipliedAlpha = false;
            this.node.active = true;
            let ani = "";

            switch (this._symbolID) {
              case 12:
                ani = "11_connect";
                break;

              case 13:
                ani = "13_connect";
                if (((_skeletonComponent$ge = skeletonComponent.getCurrent(0)) == null ? void 0 : _skeletonComponent$ge.animation.name) == "13_connect") resolve(); // adjust position by the index of golden wild
                // this.symSpine.position = new Vec3(this.symSpine.position.x, this.symSpine.position.y + (pos - 1.5) * this.height, 0);
                // this.frame.position = new Vec3(this.frame.position.x, this.frame.position.y + (pos - 1.5) * this.height, 0);

                break;

              default:
                ani = "connect";
                break;
            }

            this.symSpine.active = true;
            this.symSpine.getComponent(sp.Skeleton).setAnimation(0, ani, true);
            this.botSpine.active = false; // 底板

            if (this.hasBot()) {
              const s = this.botSpine.getComponent(sp.Skeleton);
              s.skeletonData = this.botSpineData[this._symbolID - 2];
              this.botSpine.active = true;
              s.setAnimation(0, "connect", true);
            } // 連線框


            let frame = this.frame.getComponent(sp.Skeleton);
            ani = this._symbolID == 13 ? "connect_1x4" : "connect_1x1";
            this.frame.active = true;
            frame.setAnimation(0, ani, true);
            this.frame.setSiblingIndex(this.isWild() ? 3 : 2); // await UtilsKit.SetSkeletonAnimation(this.frame, 0, ani, false, true);

            await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
              error: Error()
            }), UtilsKit) : UtilsKit).Defer(1000 * 2); // this.reset();

            resolve();
          });
        }

        appear() {
          if (!this.isWild() && this._symbolID !== BigWingsSymbol.scatterId) return;
          return new Promise(async resolve => {
            this.node.active = true;
            this.sprite.active = false;
            this.symSpine.active = true;
            const skeletonComponent = this.symSpine.getComponent(sp.Skeleton);
            if (!skeletonComponent.skeletonData) skeletonComponent.skeletonData = this.symbolSpineData[this._symbolID];
            let ani = "";

            switch (this._symbolID) {
              case 0:
                ani = "12_appear";
                break;

              case 12:
                ani = "11_appear";
                break;

              default:
                ani = "appear";
                break;
            }

            await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
              error: Error()
            }), UtilsKit) : UtilsKit).SetSkeletonAnimation(this.symSpine, 0, ani, false, true); // this.reset();

            resolve();
          });
        }

        idle() {
          if (this._symbolID !== BigWingsSymbol.scatterId && !this.isWild()) return;
          return new Promise(async resolve => {
            var _skeletonComponent$ge2;

            let ani = "";

            switch (this._symbolID) {
              case 13:
                ani = "13_idle";
                break;

              case 12:
                ani = "11_idle";
                break;

              default:
                ani = "idle";
                break;
            }

            this.node.active = true;
            this.sprite.active = false;
            this.frame.active = false;
            this.symSpine.active = true;
            const skeletonComponent = this.symSpine.getComponent(sp.Skeleton);
            if (((_skeletonComponent$ge2 = skeletonComponent.getCurrent(0)) == null ? void 0 : _skeletonComponent$ge2.animation.name) == ani) resolve();
            if (!skeletonComponent.skeletonData) skeletonComponent.skeletonData = this.symbolSpineData[this._symbolID];
            skeletonComponent.setAnimation(0, ani, true);
          });
        }

        expand(pos) {
          if (this._symbolID !== 0) return;
          console.error("Expand :", pos);
          return new Promise(async resolve => {
            this.sprite.active = false;
            this.symSpine.active = true;
            const skeletonComponent = this.symSpine.getComponent(sp.Skeleton);
            if (!skeletonComponent.skeletonData) skeletonComponent.skeletonData = this.symbolSpineData[this._symbolID];
            skeletonComponent.setAnimation(0, `12_expanding${pos + 1}`, false);
            const siblingIndex = this.node.parent.children.length - 1;
            this.node.setSiblingIndex(siblingIndex); // console.log(pos);
            // this.changeToWild(pos);
            // this.sprite.active = true;

            await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
              error: Error()
            }), UtilsKit) : UtilsKit).SetSkeletonAnimation(this.symSpine, 0, `12_expanding${pos + 1}`, false, true);
            resolve();
          });
        }

        changeToWild(pos = 0) {
          this._symbolID = 13;
          this.sprite.getComponent(Sprite).spriteFrame = this.symbolSpriteFrame[13];
          this.sprite.position = new Vec3(this.sprite.position.x, this.sprite.position.y + (pos - 1.5) * this.height, 0);
          const siblingIndex = this.node.parent.children.length - 1;
          this.node.setSiblingIndex(siblingIndex);
        }

        lock() {
          return new Promise(async resolve => {
            this.lockSpine.active = true;
            await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
              error: Error()
            }), UtilsKit) : UtilsKit).SetSkeletonAnimation(this.lockSpine, 0, "lock", false, true);
            resolve();
          });
        }

        reset() {
          this.frame.active = false;
          this.botSpine.active = false;
          this.symSpine.active = false;
          this.sprite.active = true;
        }

        recycle() {
          this.symSpine.getComponent(sp.Skeleton).skeletonData = null;
          this.symSpine.active = false;
          this.frame.active = false;
          this.botSpine.active = false;
          this.symSpine.position = new Vec3(0, 0, 0);
          this.sprite.position = new Vec3(0, 0, 0);
          this.frame.position = new Vec3(0, 0, 0);
          super.recycle();
        }

      }, _class3.scatterId = 1, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "symbolSpriteFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "symbolSpineData", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "botSpineData", [_dec4], {
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
//# sourceMappingURL=10eecba6af38fb9947a2e227a39fc0e35fadd587.js.map