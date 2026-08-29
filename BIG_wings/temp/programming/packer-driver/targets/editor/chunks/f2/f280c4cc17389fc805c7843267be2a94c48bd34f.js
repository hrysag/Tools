System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Sprite, CCFloat, Node, Vec3, tween, UIOpacity, SpriteFrame, Color, Label, Tween, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec5, _dec6, _dec7, _class4, _class5, _descriptor4, _descriptor5, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class7, _class8, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class10, _class11, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class13, _class14, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _crd, ccclass, property, ScaleArgument, DisableOpacity, SyncSpriteTransition, SyncLabelTransitionColor, CustomizedButton;

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
      Tween = _cc.Tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e714Jwd4FMJaO8CgYIHG6c", "CustomizedButton", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Sprite', 'CCFloat', 'EventTouch', 'Node', 'Vec3', 'tween', 'UITransform', 'UIOpacity', 'SpriteFrame', 'Color', 'color', 'Label', 'Tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScaleArgument", ScaleArgument = (_dec = ccclass('ScaleArgument'), _dec2 = property(Node), _dec3 = property(CCFloat), _dec4 = property(CCFloat), _dec(_class = (_class2 = class ScaleArgument {
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
      })), _class2)) || _class));

      _export("DisableOpacity", DisableOpacity = (_dec5 = ccclass('DisableOpacity'), _dec6 = property(UIOpacity), _dec7 = property(CCFloat), _dec5(_class4 = (_class5 = class DisableOpacity {
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
      })), _class5)) || _class4));

      _export("SyncSpriteTransition", SyncSpriteTransition = (_dec8 = ccclass('SyncSpriteTransition'), _dec9 = property(Node), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec8(_class7 = (_class8 = class SyncSpriteTransition {
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
      })), _class8)) || _class7));

      _export("SyncLabelTransitionColor", SyncLabelTransitionColor = (_dec14 = ccclass('SyncLabelTransitionColor'), _dec15 = property(Node), _dec16 = property(Color), _dec17 = property(Color), _dec18 = property(Color), _dec19 = property(Color), _dec14(_class10 = (_class11 = class SyncLabelTransitionColor {
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
      })), _class11)) || _class10));

      _export("CustomizedButton", CustomizedButton = (_dec20 = ccclass('CustomizedButton'), _dec21 = property({
        type: [SyncSpriteTransition],
        tooltip: "需要與按鈕狀態同步的 Sprite 物件"
      }), _dec22 = property({
        type: [SyncLabelTransitionColor],
        tooltip: "需要與按鈕狀態同步的 Label 物件"
      }), _dec23 = property({
        type: [ScaleArgument],
        tooltip: "按鈕按下後 Node Scale 需要改變的資訊"
      }), _dec24 = property({
        type: [Sprite],
        tooltip: "按鈕禁用後 Sprite 物件需要啟用灰階功能"
      }), _dec25 = property({
        type: [DisableOpacity],
        tooltip: "按鈕禁用後 Opacity 需要改變的資訊"
      }), _dec26 = property({
        type: [Node],
        tooltip: "按鈕 Hover 時需要啟用的按鈕"
      }), _dec27 = property({
        type: [Node],
        tooltip: "按鈕按下時需要啟用的按鈕"
      }), _dec20(_class13 = (_class14 = class CustomizedButton extends Button {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "syncSpriteTransition", _descriptor16, this);

          _initializerDefineProperty(this, "syncLabelTransitionColor", _descriptor17, this);

          _initializerDefineProperty(this, "scaleArgument", _descriptor18, this);

          _initializerDefineProperty(this, "spriteDisabledGray", _descriptor19, this);

          _initializerDefineProperty(this, "spriteDisabledOpacity", _descriptor20, this);

          _initializerDefineProperty(this, "hoverNode", _descriptor21, this);

          _initializerDefineProperty(this, "downNode", _descriptor22, this);

          this.disableAllDownNode = void 0;
        }

        handleScaleArgument(duration, initialScale, destScale) {
          for (const data of this.scaleArgument) {
            Tween.stopAllByTarget(data.target);

            if (initialScale) {
              data.target.setScale(new Vec3(initialScale.x, initialScale.y, 1));
            }

            let initialScaleX = data.target.getScale().x;
            let initialScaleY = data.target.getScale().y;
            let destScaleX;
            let destScaleY;

            if (destScale) {
              destScaleX = destScale.x;
              destScaleY = destScale.y;

              if (destScaleX == initialScaleX && destScaleY == initialScaleY) {
                continue;
              }
            }

            let tweenDuration;

            if (duration) {
              tweenDuration = duration;
            }

            let dummyValue = {
              value: 0
            };
            tween(dummyValue).to(tweenDuration ? tweenDuration : data.duration, {
              value: 1
            }, {
              onUpdate: (target, ratio) => {
                if (!destScaleX) {
                  destScaleX = data.zoomScale;
                  destScaleY = data.zoomScale;
                }

                let currentScaleX = initialScaleX + target.value * (destScaleX - initialScaleX);
                let currentScaleY = initialScaleY + target.value * (destScaleY - initialScaleY);
                data.target.setScale(new Vec3(currentScaleX, currentScaleY, 1));
              },
              easing: 'sineOut'
            }).start();
          }
        }

        _onTouchBegan(event) {
          super._onTouchBegan(event);

          if (!this._interactable) return;

          if (this.downNode.length > 0) {
            if (!this.disableAllDownNode) {
              this.disableAllDownNode = () => {
                for (const data of this.downNode) {
                  data.active = false;
                }
              };
            }

            this.unschedule(this.disableAllDownNode);

            for (const data of this.downNode) {
              data.active = true;
            }

            this.scheduleOnce(this.disableAllDownNode, 1);
          }

          this.handleScaleArgument(0.05, new Vec3(1, 1, 1)); // console.log("Button Begin");
        }

        _onTouchEnded(event) {
          super._onTouchEnded(event);

          for (const data of this.hoverNode) {
            data.active = false;
          }

          this.handleScaleArgument(null, null, new Vec3(1, 1, 1)); // console.log("Button End");
        }

        _onTouchCancel(event) {
          super._onTouchCancel(event);

          this.handleScaleArgument(null, null, new Vec3(1, 1, 1)); // console.log("Button Cancel");
        }

        _onMouseMoveIn() {
          super._onMouseMoveIn();

          if (!this._interactable) return;

          for (const data of this.hoverNode) {
            data.active = true;
          } // console.log("Button Move In");

        }

        _onMouseMoveOut() {
          super._onMouseMoveOut();

          for (const data of this.hoverNode) {
            data.active = false;
          } // console.log("Button Move Out");

        }

        _onTouchMove(event) {
          super._onTouchMove(event);

          if (!this._interactable) return; // mobile phone will not emit _onMouseMoveOut,
          // so we have to do hit test when touch moving

          /*
          if (!event)
              return;
            const touch = (event).touch;
          if (!touch)
              return;
            const hit = this.node.getComponent(UITransform)!.hitTest(touch.getLocation());
          if (hit) {
              this.handleScaleArgument(0.05);
              // console.log("Button Move hit");
          } else {
              this.handleScaleArgument(null, null, new Vec3(1, 1, 1));
              // console.log("Button Move doesn't hit");
          }
          
          event.propagationStopped = true;
          */
        }

        _updateState() {
          super._updateState(); //同步更新sprite圖片四態


          for (const data of this.syncSpriteTransition) {
            data.target.getComponent(Sprite).spriteFrame = data[`${this._getButtonState()}Sprite`];
          } //同步更新label顏色四態


          for (const data of this.syncLabelTransitionColor) {
            data.target.getComponent(Label).color = data[`${this._getButtonState()}Color`];
          } //禁用時的灰階變化


          for (const data of this.spriteDisabledGray) {
            data.grayscale = !this.interactable;
          } //禁用時的透明度變化


          for (const data of this.spriteDisabledOpacity) {
            if (this.interactable) {
              data.uiOpacity.opacity = 255;
            } else {
              data.uiOpacity.opacity = data.opacity;
            }
          }
        }

      }, (_descriptor16 = _applyDecoratedDescriptor(_class14.prototype, "syncSpriteTransition", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class14.prototype, "syncLabelTransitionColor", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class14.prototype, "scaleArgument", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class14.prototype, "spriteDisabledGray", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class14.prototype, "spriteDisabledOpacity", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class14.prototype, "hoverNode", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class14.prototype, "downNode", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class14)) || _class13));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f280c4cc17389fc805c7843267be2a94c48bd34f.js.map