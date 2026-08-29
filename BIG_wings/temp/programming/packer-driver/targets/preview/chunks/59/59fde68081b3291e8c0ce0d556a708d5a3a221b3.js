System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Sprite, CCFloat, CCString, CCBoolean, Node, Vec3, tween, UIOpacity, SpriteFrame, Label, Font, sp, Tween, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec5, _dec6, _dec7, _class4, _class5, _descriptor4, _descriptor5, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class7, _class8, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _dec14, _dec15, _dec16, _dec17, _class10, _class11, _descriptor11, _descriptor12, _descriptor13, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class13, _class14, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _class16, _class17, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _crd, ccclass, property, ScaleArgument, DisableOpacity, SyncSpriteTransition, CustomButtonSyncLabel, SpineStatus, BigWingsCommand;

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
      CCString = _cc.CCString;
      CCBoolean = _cc.CCBoolean;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      SpriteFrame = _cc.SpriteFrame;
      Label = _cc.Label;
      Font = _cc.Font;
      sp = _cc.sp;
      Tween = _cc.Tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1ab3VqKepEE5ADmhX/u6ta", "BigWingsCommand", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Sprite', 'CCFloat', 'CCString', 'CCBoolean', 'EventTouch', 'Node', 'Vec3', 'tween', 'UITransform', 'UIOpacity', 'SpriteFrame', 'Color', 'color', 'Label', 'Font', 'sp', 'Tween']);

      ({
        ccclass,
        property
      } = _decorator);
      ScaleArgument = (_dec = ccclass('ScaleArgument'), _dec2 = property(Node), _dec3 = property(CCFloat), _dec4 = property(CCFloat), _dec(_class = (_class2 = class ScaleArgument {
        constructor() {
          _initializerDefineProperty(this, "target", _descriptor, this);

          _initializerDefineProperty(this, "zoomScale", _descriptor2, this);

          _initializerDefineProperty(this, "duration", _descriptor3, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "zoomScale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.9;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "duration", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      })), _class2)) || _class);
      DisableOpacity = (_dec5 = ccclass('DisableOpacity'), _dec6 = property(UIOpacity), _dec7 = property(CCFloat), _dec5(_class4 = (_class5 = class DisableOpacity {
        constructor() {
          _initializerDefineProperty(this, "uiOpacity", _descriptor4, this);

          _initializerDefineProperty(this, "opacity", _descriptor5, this);
        }

      }, (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "uiOpacity", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "opacity", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 150;
        }
      })), _class5)) || _class4);
      SyncSpriteTransition = (_dec8 = ccclass('SyncSpriteTransition'), _dec9 = property(Node), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec8(_class7 = (_class8 = class SyncSpriteTransition {
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
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class8.prototype, "normalSprite", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class8.prototype, "pressedSprite", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class8.prototype, "hoverSprite", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class8.prototype, "disabledSprite", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class8)) || _class7);
      CustomButtonSyncLabel = (_dec14 = ccclass('CustomButtonSyncLabel'), _dec15 = property(Font), _dec16 = property(Font), _dec17 = property(Font), _dec14(_class10 = (_class11 = class CustomButtonSyncLabel {
        constructor() {
          _initializerDefineProperty(this, "normalFont", _descriptor11, this);

          _initializerDefineProperty(this, "hoverFont", _descriptor12, this);

          _initializerDefineProperty(this, "disabledFont", _descriptor13, this);
        }

      }, (_descriptor11 = _applyDecoratedDescriptor(_class11.prototype, "normalFont", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Font();
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class11.prototype, "hoverFont", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Font();
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class11.prototype, "disabledFont", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Font();
        }
      })), _class11)) || _class10);
      SpineStatus = (_dec18 = ccclass('SpineStatus'), _dec19 = property(CCString), _dec20 = property(CCBoolean), _dec21 = property(CCString), _dec22 = property(CCBoolean), _dec23 = property(CCString), _dec24 = property(CCBoolean), _dec25 = property(CCString), _dec26 = property(CCBoolean), _dec18(_class13 = (_class14 = class SpineStatus {
        constructor() {
          _initializerDefineProperty(this, "normal", _descriptor14, this);

          _initializerDefineProperty(this, "normalAniLoop", _descriptor15, this);

          _initializerDefineProperty(this, "pressed", _descriptor16, this);

          _initializerDefineProperty(this, "pressedAniLoop", _descriptor17, this);

          _initializerDefineProperty(this, "hover", _descriptor18, this);

          _initializerDefineProperty(this, "hoverAniLoop", _descriptor19, this);

          _initializerDefineProperty(this, "disabled", _descriptor20, this);

          _initializerDefineProperty(this, "disabledAniLoop", _descriptor21, this);
        }

      }, (_descriptor14 = _applyDecoratedDescriptor(_class14.prototype, "normal", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class14.prototype, "normalAniLoop", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class14.prototype, "pressed", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class14.prototype, "pressedAniLoop", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class14.prototype, "hover", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class14.prototype, "hoverAniLoop", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class14.prototype, "disabled", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class14.prototype, "disabledAniLoop", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class14)) || _class13);

      _export("BigWingsCommand", BigWingsCommand = (_dec27 = ccclass('BigWingsCommand'), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property({
        type: [SyncSpriteTransition],
        tooltip: "需要與按鈕狀態同步的 Sprite 物件"
      }), _dec31 = property({
        type: [ScaleArgument],
        tooltip: "按鈕按下後 Node Scale 需要改變的資訊"
      }), _dec32 = property({
        type: [Sprite],
        tooltip: "按鈕禁用後 Sprite 物件需要啟用灰階功能"
      }), _dec33 = property({
        type: [DisableOpacity],
        tooltip: "按鈕禁用後 Opacity 需要改變的資訊"
      }), _dec34 = property({
        type: [Node],
        tooltip: "按鈕 Hover 時需要啟用的按鈕"
      }), _dec35 = property({
        type: [Node],
        tooltip: "按鈕按下時需要啟用的按鈕"
      }), _dec36 = property([CustomButtonSyncLabel]), _dec37 = property([SpineStatus]), _dec27(_class16 = (_class17 = class BigWingsCommand extends Button {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Label", _descriptor22, this);

          _initializerDefineProperty(this, "Spine", _descriptor23, this);

          _initializerDefineProperty(this, "syncSpriteTransition", _descriptor24, this);

          _initializerDefineProperty(this, "scaleArgument", _descriptor25, this);

          _initializerDefineProperty(this, "spriteDisabledGray", _descriptor26, this);

          _initializerDefineProperty(this, "spriteDisabledOpacity", _descriptor27, this);

          _initializerDefineProperty(this, "hoverNode", _descriptor28, this);

          _initializerDefineProperty(this, "downNode", _descriptor29, this);

          _initializerDefineProperty(this, "syncLabelTexture", _descriptor30, this);

          _initializerDefineProperty(this, "SpineStatus", _descriptor31, this);

          this.disableAllDownNode = void 0;
        }

        handleScaleArgument(duration, initialScale, destScale) {
          var _loop = function _loop(data) {
            Tween.stopAllByTarget(data.target);

            if (initialScale) {
              data.target.setScale(new Vec3(initialScale.x, initialScale.y, 1));
            }

            var initialScaleX = data.target.getScale().x;
            var initialScaleY = data.target.getScale().y;
            var destScaleX;
            var destScaleY;

            if (destScale) {
              destScaleX = destScale.x;
              destScaleY = destScale.y;

              if (destScaleX == initialScaleX && destScaleY == initialScaleY) {
                return 1; // continue
              }
            }

            var tweenDuration;

            if (duration) {
              tweenDuration = duration;
            }

            var dummyValue = {
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

                var currentScaleX = initialScaleX + target.value * (destScaleX - initialScaleX);
                var currentScaleY = initialScaleY + target.value * (destScaleY - initialScaleY);
                data.target.setScale(new Vec3(currentScaleX, currentScaleY, 1));
              },
              easing: 'sineOut'
            }).start();
          };

          for (var data of this.scaleArgument) {
            if (_loop(data)) continue;
          }
        }

        _onTouchBegan(event) {
          super._onTouchBegan(event); // console.log("按下按鈕")


          if (!this._interactable) return;

          if (this.downNode.length > 0) {
            if (!this.disableAllDownNode) {
              this.disableAllDownNode = () => {
                for (var data of this.downNode) {
                  data.active = false;
                }
              };
            }

            this.unschedule(this.disableAllDownNode);

            for (var data of this.downNode) {
              data.active = true;
            }

            this.scheduleOnce(this.disableAllDownNode, 1);
          }

          this.handleScaleArgument(0.05, new Vec3(1, 1, 1));
        }

        _onTouchEnded(event) {
          super._onTouchEnded(event); // console.log("放開按鈕")


          for (var data of this.hoverNode) {
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

          for (var data of this.hoverNode) {
            data.active = true;
          }

          this.handleScaleArgument(null, new Vec3(1, 1, 1), new Vec3(1.1, 1.1, 1.1)); // console.log("Button Move In");
        }

        _onMouseMoveOut() {
          super._onMouseMoveOut();

          for (var data of this.hoverNode) {
            data.active = false;
          }

          this.handleScaleArgument(null, null, new Vec3(1, 1, 1)); // console.log("Button Move Out");
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


          for (var data of this.syncSpriteTransition) {
            data.target.getComponent(Sprite).spriteFrame = data[this._getButtonState() + "Sprite"];
          } //這個專案應該不會用到這個
          // //同步更新label顏色四態
          // for (const data of this.syncLabelTransitionColor) {
          //     data.target.getComponent(Label).color = data[`${this._getButtonState()}Color`];
          // }


          for (var _data of this.syncLabelTexture) {
            if (_data[this._getButtonState() + "Font"]) this.Label.getComponent(Label).font = _data[this._getButtonState() + "Font"];
          }

          for (var _data2 of this.syncLabelTexture) {
            if (_data2[this._getButtonState() + "Font"]) this.Label.getComponent(Label).font = _data2[this._getButtonState() + "Font"];
          } //禁用時的灰階變化


          for (var _data3 of this.spriteDisabledGray) {
            _data3.grayscale = !this.interactable;
          }

          for (var _data4 of this.SpineStatus) {
            if (_data4["" + this._getButtonState()]) {
              this.Spine.getComponent(sp.Skeleton).setAnimation(0, _data4["" + this._getButtonState()], _data4[this._getButtonState() + "AniLoop"]);
            } else {
              this.Spine.getComponent(sp.Skeleton).clearAnimation(); // this.Spine.getComponent(sp.Skeleton).setAnimation(0, data[`${this._getButtonState()}`], data[`${this._getButtonState()}AniLoop`]);
            }
          } //禁用時的透明度變化


          for (var _data5 of this.spriteDisabledOpacity) {
            if (this.interactable) {
              _data5.uiOpacity.opacity = 255;
            } else {
              _data5.uiOpacity.opacity = _data5.opacity;
            }
          }
        }

      }, (_descriptor22 = _applyDecoratedDescriptor(_class17.prototype, "Label", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class17.prototype, "Spine", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class17.prototype, "syncSpriteTransition", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class17.prototype, "scaleArgument", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class17.prototype, "spriteDisabledGray", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class17.prototype, "spriteDisabledOpacity", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class17.prototype, "hoverNode", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class17.prototype, "downNode", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class17.prototype, "syncLabelTexture", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class17.prototype, "SpineStatus", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class17)) || _class16));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=59fde68081b3291e8c0ce0d556a708d5a3a221b3.js.map