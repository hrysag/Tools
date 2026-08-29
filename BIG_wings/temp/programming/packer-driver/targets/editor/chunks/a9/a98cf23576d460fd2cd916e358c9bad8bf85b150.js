System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, tween, Vec3, Tween, Vec2, UITransform, UIOpacity, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, coinDropAnim;

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
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Tween = _cc.Tween;
      Vec2 = _cc.Vec2;
      UITransform = _cc.UITransform;
      UIOpacity = _cc.UIOpacity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf34evOqSBJiZYjyyKD9DA6", "coinDropAnim", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Vec3', 'Tween', 'Vec2', 'UITransform', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("coinDropAnim", coinDropAnim = (_dec = ccclass('coinDropAnim'), _dec2 = property({
        type: Node,
        tooltip: "隨機動畫主物件(子物件執行掉落)"
      }), _dec3 = property({
        tooltip: "掉落生存時間(x=生存時間，y=生存浮動時間"
      }), _dec(_class = (_class2 = class coinDropAnim extends Component {
        constructor(...args) {
          super(...args);

          //掉落範圍會自動根據節點的尺寸決定
          _initializerDefineProperty(this, "anim", _descriptor, this);

          _initializerDefineProperty(this, "lifeTime", _descriptor2, this);
        }

        onEnable() {
          this.anim.getComponent(UIOpacity).opacity = 255;

          for (let i = 0; i < this.anim.children.length; i++) {
            for (const node of this.anim.children[i].children) {
              const waitTime = Math.random() * this.lifeTime.x;
              tween(this.node).delay(waitTime).call(() => {
                node.active = true;
                this.loopRun(node);
              }).start();
            }
          }
        } //執行循環掉落表演


        loopRun(node) {
          const size = this.node.getComponent(UITransform);
          const randomX = size.width / 2 - Math.random() * size.width; //根據節點的寬度決定掉落範圍

          node.angle = Math.random() * 360; //隨機起始角度

          node.setScale(new Vec3(0.8 + Math.random() * 0.2, 0.8 + Math.random() * 0.2, 1));
          node.setPosition(new Vec3(randomX, 0, 0)); //設置隨機位置

          let randomTime = this.lifeTime.x + Math.random() * this.lifeTime.y;
          tween(node).by(randomTime, {
            angle: 90 + Math.random() * 90
          }).start(); //執行動態

          tween(node).to(randomTime, {
            position: new Vec3(randomX, -size.height, 0)
          }, {
            easing: 'sineIn'
          }).call(() => {
            this.loopRun(node);
          }).start();
        } //聽牌背景表演結束


        readyHide() {
          tween(this.anim.getComponent(UIOpacity)).to(0.3, {
            opacity: 0
          }).call(() => {
            this.node.active = false; //隱藏此節點
          }).start();
        }

        onDisable() {
          Tween.stopAllByTarget(this.node); //結束等待執行動態

          for (let i = 0; i < this.anim.children.length; i++) {
            for (const node of this.anim.children[i].children) {
              Tween.stopAllByTarget(node); //結束下落動態

              node.active = false;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lifeTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2(1.5, 0.5);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a98cf23576d460fd2cd916e358c9bad8bf85b150.js.map