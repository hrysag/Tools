System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Vec3, _decorator, tween, Node, UIOpacity, Label, Sprite, sp, UtilsKit, BigWingsCommand, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, menu, GamblePanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtilsKit(extras) {
    _reporterNs.report("UtilsKit", "../lib/UtilsKit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBigWingsCommand(extras) {
    _reporterNs.report("BigWingsCommand", "./BigWingsCommand", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      tween = _cc.tween;
      Node = _cc.Node;
      UIOpacity = _cc.UIOpacity;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      UtilsKit = _unresolved_2.UtilsKit;
    }, function (_unresolved_3) {
      BigWingsCommand = _unresolved_3.BigWingsCommand;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22dd96lbe9HuIipDW0/xJBs", "GamblePanel", undefined);

      __checkObsolete__(['Color', 'Component', 'Graphics', 'Vec3', '_decorator', 'tween', 'Node', 'Button', 'UIOpacity', 'Label', 'Sprite', 'debug', 'sp', 'Quat']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("GamblePanel", GamblePanel = (_dec = ccclass('GamblePanel'), _dec2 = menu('BigWings/GamblePanel'), _dec3 = property(Node), _dec4 = property({
        type: sp.Skeleton
      }), _dec5 = property({
        type: Sprite
      }), _dec6 = property({
        type: Node,
        tooltip: "除了中央轉輪及背景以外的物件"
      }), _dec7 = property({
        type: sp.Skeleton
      }), _dec8 = property({
        type: sp.Skeleton
      }), _dec9 = property({
        type: sp.Skeleton
      }), _dec10 = property({
        type: Label
      }), _dec11 = property(Node), _dec12 = property(_crd && BigWingsCommand === void 0 ? (_reportPossibleCrUseOfBigWingsCommand({
        error: Error()
      }), BigWingsCommand) : BigWingsCommand), _dec13 = property(_crd && BigWingsCommand === void 0 ? (_reportPossibleCrUseOfBigWingsCommand({
        error: Error()
      }), BigWingsCommand) : BigWingsCommand), _dec14 = property({
        type: Label
      }), _dec15 = property({
        type: Label
      }), _dec(_class = _dec2(_class = (_class2 = class GamblePanel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "roulette", _descriptor, this);

          _initializerDefineProperty(this, "roulette_effect", _descriptor2, this);

          _initializerDefineProperty(this, "roulette_bg", _descriptor3, this);

          _initializerDefineProperty(this, "other", _descriptor4, this);

          _initializerDefineProperty(this, "win_effect", _descriptor5, this);

          _initializerDefineProperty(this, "leaf", _descriptor6, this);

          _initializerDefineProperty(this, "countdown_sp", _descriptor7, this);

          _initializerDefineProperty(this, "countdown_label", _descriptor8, this);

          _initializerDefineProperty(this, "pin", _descriptor9, this);

          _initializerDefineProperty(this, "start_freegame", _descriptor10, this);

          _initializerDefineProperty(this, "bet", _descriptor11, this);

          _initializerDefineProperty(this, "extra_freetime", _descriptor12, this);

          _initializerDefineProperty(this, "remain_freetime", _descriptor13, this);

          this._remainFreetime = 10;
          this._extraFreetime = 5;
          this._nowCount = 10;
        }

        set remainFreetime(value) {
          this._remainFreetime = value;
        }

        set extraFreetime(value) {
          this._extraFreetime = value;
        }

        onLoad() {
          this.node.active = false;
          this.countdown_sp.setCompleteListener(() => {
            this._nowCount -= 1;
            this.countdown_label.string = String(this._nowCount);

            if (this._nowCount == 0) {
              this.onStartFreeGame();
            }
          });
        }

        fadeIn() {
          this.other.getComponent(UIOpacity).opacity = 0;
          tween(this.other.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).start();
        }

        rouletteAppear() {
          this.roulette.setScale(0, 0);
          tween(this.roulette).to(0.2, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).start();
        }

        async openPanel() {
          this.node.active = true;
          this.node.getComponent(UIOpacity).opacity = 255;
          this.bet.enabled = false;
          this.start_freegame.enabled = false;
          this._nowCount = 10;
          this.countdown_label.string = String(this._nowCount);
          this.remain_freetime.string = String(this._remainFreetime);
          this.extra_freetime.string = String(this._extraFreetime);
          this.fadeIn();
          this.rouletteAppear();
          await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
            error: Error()
          }), UtilsKit) : UtilsKit).Defer(300);
          this.bet.enabled = true;
          this.start_freegame.enabled = true;
          this.roulette_effect.setAnimation(0, "loop", true);
          this.leaf.setAnimation(0, "loop", true);
          this.countdown_sp.setAnimation(0, "loop", true); // return new Promise<void>((resolve, reject) => {
          //     this.cancelButton.enabled = true;
          //     this.confirmButton.enabled = true;
          //     this.node.active = true;
          //     this.node.getComponent(UIOpacity).opacity = 255;
          //     AudioMgr.play('ui_button_buy_fg');
          //     this.panel_spine?.setAnimation(0, 'loop', true);
          //     this.panel_node?.setScale(0, 0);
          //     tween(this.panel_node)
          //         .to(0.3, { scale: new Vec3(1, 1, 1) })
          //         .start()
          //         .call(resolve);
          // });
        }

        async onStartFreeGame() {
          this.bet.enabled = false;
          this.start_freegame.enabled = false;
          this.countdown_sp.paused = true;
          await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
            error: Error()
          }), UtilsKit) : UtilsKit).Defer(500);
          await this.end();
        }

        onBet() {
          this.bet.enabled = false;
          this.start_freegame.enabled = false;
          this.countdown_sp.paused = true; // 應該是送事件

          this.roll();
        }

        async roll() {
          let win = Math.floor(Math.random() * 2);
          let spine = this.pin.getChildByName("Spine").getComponent(sp.Skeleton);

          if (win == 1) {
            let reverse = Math.floor(Math.random() * 2) == 1 ? 1 : -1;
            let angle = Math.floor(Math.random() * 105) + 1;
            tween(this.pin).to(2, {
              angle: -1080 + reverse * angle
            }, {
              easing: "cubicOut"
            }).start();
            await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
              error: Error()
            }), UtilsKit) : UtilsKit).Defer(2000);
            spine.setAnimation(0, "stop", false);
            this.win_effect.setAnimation(0, "win", false);
            this._remainFreetime += this._extraFreetime;
            this.remain_freetime.string = String(this._remainFreetime);
            await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
              error: Error()
            }), UtilsKit) : UtilsKit).Defer(500);
            this._nowCount = 10;
            this.countdown_label.string = String(this._nowCount);
            this.countdown_sp.clearTracks();
            this.countdown_sp.paused = false;
            this.countdown_sp.setAnimation(0, "loop", true);
            this.bet.enabled = true;
            this.start_freegame.enabled = true;
            this.pin.angle = 0;
          } else {
            let reverse = Math.floor(Math.random() * 2) == 1 ? 1 : -1;
            let angle = 140 + Math.floor(Math.random() * 40);
            tween(this.pin).to(2, {
              angle: -1080 + reverse * angle
            }, {
              easing: "cubicOut"
            }).start();
            await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
              error: Error()
            }), UtilsKit) : UtilsKit).Defer(2000);
            spine.setAnimation(0, "stop", false);
            this.remain_freetime.string = "0";
            await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
              error: Error()
            }), UtilsKit) : UtilsKit).Defer(500);
            await this.end();
          }
        }

        async end() {
          tween(this.node.getComponent(UIOpacity)).to(0.3, {
            opacity: 0
          }).start();
          await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
            error: Error()
          }), UtilsKit) : UtilsKit).Defer(500);
          this.reset();
        }

        reset() {
          this.countdown_sp.paused = false;
          this.countdown_sp.clearAnimation();
          this.leaf.clearAnimation();
          this.roulette_effect.clearAnimation();
          this.node.active = false;
          this.pin.angle = 0; // 這個應該是外面傳進來重置

          this._remainFreetime = 10;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roulette", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roulette_effect", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "roulette_bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "other", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "win_effect", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "leaf", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "countdown_sp", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "countdown_label", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "pin", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "start_freegame", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bet", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "extra_freetime", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "remain_freetime", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e32433854bdfa9c4a6da8bed50d56b538809ab1f.js.map