System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Sprite, CCFloat, Node, Vec3, tween, UIOpacity, SpriteFrame, Color, Label, Font, sp, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec5, _dec6, _dec7, _class4, _class5, _descriptor4, _descriptor5, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class7, _class8, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class10, _class11, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _dec20, _dec21, _dec22, _dec23, _class13, _class14, _descriptor16, _descriptor17, _descriptor18, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _class16, _class17, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _crd, ccclass, property, CustomButtonScaleArg, CustomButtonDisableOpacity, CustomButtonSyncSprite, CustomButtonSyncLabelColor, CustomButtonSyncLabel, customButton;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Sprite = _cc.Sprite;
      CCFloat = _cc.CCFloat;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      SpriteFrame = _cc.SpriteFrame;
      Color = _cc.Color;
      Label = _cc.Label;
      Font = _cc.Font;
      sp = _cc.sp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b2b0eFyeYJOGo5sD77hcTvN", "customButton", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Sprite', 'CCFloat', 'EventTouch', 'Node', 'Vec3', 'tween', 'UITransform', 'UIOpacity', 'SpriteFrame', 'Color', 'color', 'Label', 'Font', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);
      CustomButtonScaleArg = (_dec = ccclass('CustomButtonScaleArg'), _dec2 = property(Node), _dec3 = property(CCFloat), _dec4 = property(CCFloat), _dec(_class = (_class2 = class CustomButtonScaleArg {
        constructor() {
          _initializerDefineProperty(this, "target", _descriptor, this);

          _initializerDefineProperty(this, "zoomScale", _descriptor2, this);

          _initializerDefineProperty(this, "duration", _descriptor3, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "zoomScale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.9;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "duration", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      })), _class2)) || _class);
      CustomButtonDisableOpacity = (_dec5 = ccclass('CustomButtonDisableOpacity'), _dec6 = property(UIOpacity), _dec7 = property(CCFloat), _dec5(_class4 = (_class5 = class CustomButtonDisableOpacity {
        constructor() {
          _initializerDefineProperty(this, "uiOpacity", _descriptor4, this);

          _initializerDefineProperty(this, "opacity", _descriptor5, this);
        }

      }, (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "uiOpacity", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "opacity", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 150;
        }
      })), _class5)) || _class4);
      CustomButtonSyncSprite = (_dec8 = ccclass('CustomButtonSyncSprite'), _dec9 = property(Node), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec8(_class7 = (_class8 = class CustomButtonSyncSprite {
        constructor() {
          _initializerDefineProperty(this, "target", _descriptor6, this);

          _initializerDefineProperty(this, "normalSprite", _descriptor7, this);

          _initializerDefineProperty(this, "pressedSprite", _descriptor8, this);

          _initializerDefineProperty(this, "hoverSprite", _descriptor9, this);

          _initializerDefineProperty(this, "disabledSprite", _descriptor10, this);
        }

      }, (_descriptor6 = _applyDecoratedDescriptor(_class8.prototype, "target", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class8.prototype, "normalSprite", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class8.prototype, "pressedSprite", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class8.prototype, "hoverSprite", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class8.prototype, "disabledSprite", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class8)) || _class7);
      CustomButtonSyncLabelColor = (_dec14 = ccclass('CustomButtonSyncLabelColor'), _dec15 = property(Node), _dec16 = property(Color), _dec17 = property(Color), _dec18 = property(Color), _dec19 = property(Color), _dec14(_class10 = (_class11 = class CustomButtonSyncLabelColor {
        constructor() {
          _initializerDefineProperty(this, "target", _descriptor11, this);

          _initializerDefineProperty(this, "normalColor", _descriptor12, this);

          _initializerDefineProperty(this, "pressedColor", _descriptor13, this);

          _initializerDefineProperty(this, "hoverColor", _descriptor14, this);

          _initializerDefineProperty(this, "disabledColor", _descriptor15, this);
        }

      }, (_descriptor11 = _applyDecoratedDescriptor(_class11.prototype, "target", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class11.prototype, "normalColor", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color(255, 255, 255, 255);
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class11.prototype, "pressedColor", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color(255, 255, 255, 255);
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class11.prototype, "hoverColor", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color(255, 255, 255, 255);
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class11.prototype, "disabledColor", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color(255, 255, 255, 255);
        }
      })), _class11)) || _class10);
      CustomButtonSyncLabel = (_dec20 = ccclass('CustomButtonSyncLabel'), _dec21 = property(Font), _dec22 = property(Font), _dec23 = property(Font), _dec20(_class13 = (_class14 = class CustomButtonSyncLabel {
        constructor() {
          _initializerDefineProperty(this, "normalFont", _descriptor16, this);

          _initializerDefineProperty(this, "hoverFont", _descriptor17, this);

          _initializerDefineProperty(this, "disabledFont", _descriptor18, this);
        }

      }, (_descriptor16 = _applyDecoratedDescriptor(_class14.prototype, "normalFont", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Font();
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class14.prototype, "hoverFont", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Font();
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class14.prototype, "disabledFont", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Font();
        }
      })), _class14)) || _class13);

      _export("customButton", customButton = (_dec24 = ccclass('customButton'), _dec25 = property([CustomButtonSyncSprite]), _dec26 = property([CustomButtonSyncLabelColor]), _dec27 = property([CustomButtonSyncLabel]), _dec28 = property([CustomButtonScaleArg]), _dec29 = property([Sprite]), _dec30 = property([CustomButtonDisableOpacity]), _dec31 = property([Node]), _dec32 = property([Node]), _dec33 = property(Node), _dec34 = property(Node), _dec24(_class16 = (_class17 = class customButton extends Button {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "syncSprite", _descriptor19, this);

          _initializerDefineProperty(this, "syncLabelColor", _descriptor20, this);

          _initializerDefineProperty(this, "syncLabelTexture", _descriptor21, this);

          _initializerDefineProperty(this, "scaleArgs", _descriptor22, this);

          _initializerDefineProperty(this, "disabledGray", _descriptor23, this);

          _initializerDefineProperty(this, "disabledOpacity", _descriptor24, this);

          _initializerDefineProperty(this, "hoverNode", _descriptor25, this);

          _initializerDefineProperty(this, "downNode", _descriptor26, this);

          _initializerDefineProperty(this, "Label", _descriptor27, this);

          _initializerDefineProperty(this, "Spine", _descriptor28, this);
        }

        _onTouchBegan(event) {
          super._onTouchBegan(event);

          if (!this._interactable) return;
          console.log("按下按鈕");

          for (const data of this.downNode) {
            data.active = true;
            this.scheduleOnce(() => {
              data.active = false;
            }, 1);
          }

          for (const data of this.scaleArgs) {
            data.target.setScale(new Vec3(1, 1, 1));
            tween(data.target).to(data.duration, {
              scale: new Vec3(data.zoomScale, data.zoomScale, 1)
            }, {
              easing: 'sineOut'
            }).start();
          }

          this.Spine.getComponent(sp.Skeleton);
        }

        _onTouchEnded(event) {
          super._onTouchEnded(event); // console.log("放開按鈕")
          // this._onMouseMoveOut();//滑出


          for (const data of this.hoverNode) {
            data.active = false;
          }

          for (const data of this.scaleArgs) {
            if (data.target.scale.x === 1) return;
            tween(data.target).to(data.duration, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'sineOut'
            }).start();
          }
        }

        _onTouchCancel(event) {
          super._onTouchCancel(event);

          console.log("取消按鈕(移出)");

          for (const data of this.scaleArgs) {
            tween(data.target).to(data.duration, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'sineOut'
            }).start();
          }
        }

        _onMouseMoveIn() {
          super._onMouseMoveIn();

          if (!this._interactable) return;
          console.log("滑入");

          for (const data of this.hoverNode) {
            data.active = true;
          }

          tween(this.Label).to(0, {
            scale: new Vec3(1.1, 1.1, 1)
          }, {
            easing: 'sineOut'
          }).start();
        }

        _onMouseMoveOut() {
          super._onMouseMoveOut();

          console.log("滑出");

          for (const data of this.hoverNode) {
            data.active = false;
          }

          tween(this.Label).to(0, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'sineOut'
          }).start();
        }

        _onTouchMove(event) {
          super._onTouchMove(event);

          if (!this._interactable) return; // mobile phone will not emit _onMouseMoveOut,
          // so we have to do hit test when touch moving

          console.log("滑動");
          /**
          if (!event)
              return;
          const touch = (event).touch;
          if (!touch)
              return;
          const hit = this.node.getComponent(UITransform)!.hitTest(touch.getLocation());
          if (hit) {
              for (const data of this.scaleArgs) {
                  tween(data.target)
                      .to(data.duration, { scale: new Vec3(data.zoomScale, data.zoomScale, 1) }, { easing: 'sineOut' })
                      .start()
              }
          }
          else {
              for (const data of this.scaleArgs) {
                  data.target.setScale(new Vec3(1, 1, 1));
              }
          }
          if (event)
              event.propagationStopped = true;
          **/
        }

        _updateState() {
          var _this$syncLabelColor$;

          super._updateState(); //同步更新sprite圖片四態


          for (const data of this.syncSprite) {
            data.target.getComponent(Sprite).spriteFrame = data[`${this._getButtonState()}Sprite`];
          } //同步更新label顏色四態


          if (((_this$syncLabelColor$ = this.syncLabelColor[0]) == null ? void 0 : _this$syncLabelColor$.target) != null) {
            for (const data of this.syncLabelColor) {
              data.target.getComponent(Label).color = data[`${this._getButtonState()}Color`];
            }
          } // if(this._getButtonState()=="normal"||this._getButtonState()=="disabled"||this._getButtonState()=="hover"){


          for (const data of this.syncLabelTexture) {
            if (data[`${this._getButtonState()}Font`]) this.Label.getComponent(Label).font = data[`${this._getButtonState()}Font`];
          } // }
          //禁用時的灰階變化


          for (const data of this.disabledGray) {
            data.grayscale = !this.interactable;
          } //禁用時的透明度變化


          for (const data of this.disabledOpacity) {
            if (this.interactable) {
              data.uiOpacity.opacity = 255;
            } else {
              data.uiOpacity.opacity = data.opacity;
            }
          }
        }

      }, (_descriptor19 = _applyDecoratedDescriptor(_class17.prototype, "syncSprite", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class17.prototype, "syncLabelColor", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class17.prototype, "syncLabelTexture", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class17.prototype, "scaleArgs", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class17.prototype, "disabledGray", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class17.prototype, "disabledOpacity", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class17.prototype, "hoverNode", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class17.prototype, "downNode", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class17.prototype, "Label", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class17.prototype, "Spine", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class17)) || _class16));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ff82a99f44f8652d370b08e651ed7f452a527230.js.map