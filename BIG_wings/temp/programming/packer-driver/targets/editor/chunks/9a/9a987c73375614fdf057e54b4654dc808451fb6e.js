System.register(["__unresolved_0", "cc", "@casino-mono/mvc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Component, Graphics, Vec3, _decorator, sp, tween, Node, Button, UIOpacity, Label, Sprite, CommandEventName, UtilsKit, AudioMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, menu, BuyFreeGamePanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCommandEventName(extras) {
    _reporterNs.report("CommandEventName", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilsKit(extras) {
    _reporterNs.report("UtilsKit", "../lib/UtilsKit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "../tools/audio/AudioMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      sp = _cc.sp;
      tween = _cc.tween;
      Node = _cc.Node;
      Button = _cc.Button;
      UIOpacity = _cc.UIOpacity;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_casinoMonoMvc) {
      CommandEventName = _casinoMonoMvc.CommandEventName;
    }, function (_unresolved_2) {
      UtilsKit = _unresolved_2.UtilsKit;
    }, function (_unresolved_3) {
      AudioMgr = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a133bmhMy1GdLELMJRzgUaZ", "BuyFreeGamePanel", undefined);

      __checkObsolete__(['Color', 'Component', 'Graphics', 'Vec3', '_decorator', 'sp', 'tween', 'Node', 'Button', 'UIOpacity', 'Label', 'Sprite', 'debug']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("BuyFreeGamePanel", BuyFreeGamePanel = (_dec = ccclass('BuyFreeGamePanel'), _dec2 = menu('BigWings/BuyFreeGamePanel'), _dec3 = property(Graphics), _dec4 = property(Node), _dec5 = property(sp.Skeleton), _dec6 = property({
        type: Sprite
      }), _dec7 = property({
        type: Label
      }), _dec8 = property({
        type: Button
      }), _dec9 = property({
        type: Button
      }), _dec(_class = _dec2(_class = (_class2 = class BuyFreeGamePanel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "black_graphics", _descriptor, this);

          _initializerDefineProperty(this, "panel_node", _descriptor2, this);

          _initializerDefineProperty(this, "panel_spine", _descriptor3, this);

          _initializerDefineProperty(this, "buyFree_Text", _descriptor4, this);

          _initializerDefineProperty(this, "buyFree_value_label", _descriptor5, this);

          _initializerDefineProperty(this, "confirmButton", _descriptor6, this);

          _initializerDefineProperty(this, "cancelButton", _descriptor7, this);

          this._buyFreeValue = 0;
        }

        set buyFreeValue(value) {
          this._buyFreeValue = value;
          this.buyFree_value_label.string = value.toString();
        }

        get buyFreeValue() {
          return this._buyFreeValue;
        }

        onLoad() {
          this.black_graphics.clear();
          this.black_graphics.fillColor = new Color(0, 0, 0, 102);
          this.black_graphics.rect(0, 0, 1080, 1920);
          this.black_graphics.fill();
          this.node.active = false;
          this.buyFreeValue = this._buyFreeValue;
        }

        async openPanel() {
          return new Promise((resolve, reject) => {
            var _this$panel_spine, _this$panel_node;

            this.cancelButton.enabled = true;
            this.confirmButton.enabled = true;
            this.node.active = true;
            this.node.getComponent(UIOpacity).opacity = 255;
            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).play('ui_button_buy_fg');
            (_this$panel_spine = this.panel_spine) == null ? void 0 : _this$panel_spine.setAnimation(0, 'loop', true);
            (_this$panel_node = this.panel_node) == null ? void 0 : _this$panel_node.setScale(0, 0);
            tween(this.panel_node).to(0.3, {
              scale: new Vec3(1, 1, 1)
            }).start().call(resolve);
          });
        }

        closePanel() {
          this.node.active = false;
        }

        async cancel() {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).play('ui_button_buy_fg_cancel');
          this.closePanel();
        }

        async confirm() {
          var _this$panel_spine2;

          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).play('ui_button_buy_fg_confirm');
          this.cancelButton.enabled = false;
          this.confirmButton.enabled = false;
          (_this$panel_spine2 = this.panel_spine) == null ? void 0 : _this$panel_spine2.setAnimation(0, 'down', false);
          await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
            error: Error()
          }), UtilsKit) : UtilsKit).Defer(700);
          tween(this.node.getComponent(UIOpacity)).to(0.3, {
            opacity: 0
          }).start();
          await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
            error: Error()
          }), UtilsKit) : UtilsKit).Defer(300);
          this.node.active = false;
          this.node.emit((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
            error: Error()
          }), CommandEventName) : CommandEventName).BUY_FREEGAME);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "black_graphics", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "panel_node", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "panel_spine", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buyFree_Text", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "buyFree_value_label", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "confirmButton", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "cancelButton", [_dec9], {
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
//# sourceMappingURL=9a987c73375614fdf057e54b4654dc808451fb6e.js.map