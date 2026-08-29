System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, tween, Vec3, Tween, CCInteger, CCFloat, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, tipMove_TA;

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
      UITransform = _cc.UITransform;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Tween = _cc.Tween;
      CCInteger = _cc.CCInteger;
      CCFloat = _cc.CCFloat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18a199mkw5CoZV9raPs+VBa", "tipMove_TA", undefined);

      __checkObsolete__(['_decorator', 'Component', 'UITransform', 'tween', 'Vec3', 'Tween', 'Node', 'CCInteger', 'CCFloat']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("tipMove_TA", tipMove_TA = (_dec = ccclass('tipMove_TA'), _dec2 = property(CCInteger), _dec3 = property(CCInteger), _dec4 = property(CCFloat), _dec5 = property(CCFloat), _dec(_class = (_class2 = class tipMove_TA extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mainTipNum", _descriptor, this);

          //主tip數量
          _initializerDefineProperty(this, "freeGameTipId", _descriptor2, this);

          //免費遊戲tip編號
          _initializerDefineProperty(this, "tipStartXPos", _descriptor3, this);

          //tip的X軸起始位置
          _initializerDefineProperty(this, "tipExitXPos", _descriptor4, this);

          //tip的X軸結束位置
          this.runTipId = 0;
          //紀錄執行中的主tip編號(0開頭)
          this.waitRunTime = 1;
        }

        //tip文字顯示時，等待移動的時間
        //tip跑動(免費模式狀態)(透過主腳本觸發)
        runTip(freeGameMode) {
          for (let i = 0; i < this.node.children.length; i++) {
            this.node.children[i].active = false; //先隱藏所有tip
          }

          const runningTip = tipNode => {
            const startXPos = tipNode.getComponent(UITransform).width / 2 + this.tipStartXPos; //計算該tip的起點X座標

            if (startXPos < 0) {
              //如果起點座標小於0(代表該提示長度在顯示範圍內，等待4秒後切換下一條)
              tipNode.position = new Vec3(0, 0, 0);
              tween(this).delay(4).call(() => {
                this.runTip(freeGameMode); //再次執行
              }).tag(99).start();
            } else {
              //長度超過顯示範圍，會移動到退出畫面外，換下一條
              tipNode.position = new Vec3(startXPos, 0, 0);
              const endXPos = -(tipNode.getComponent(UITransform).width / 2) + this.tipExitXPos; //計算該tip的終點X座標

              const runTime = (startXPos - endXPos) / 100; //計算移動時間(每秒移動100單位)

              tween(tipNode).delay(this.waitRunTime).to(runTime, {
                position: new Vec3(endXPos, 0, 0)
              }).call(() => {
                this.runTip(freeGameMode); //再次執行
              }).tag(99).start();
            }

            tipNode.active = true; //顯示該tip
          };

          if (freeGameMode) {
            const tipNode = this.node.children[this.freeGameTipId];
            runningTip(tipNode);
          } else {
            this.runTipId = this.runTipId < this.mainTipNum ? this.runTipId : 0; //判斷執行中的tipId

            const tipNode = this.node.children[this.runTipId];
            runningTip(tipNode);
            this.runTipId++; //下一個執行的編號
          }
        } //隱藏時


        onDisable() {
          Tween.stopAllByTag(99); //停止編號99的itween動態
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainTipNum", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 4;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "freeGameTipId", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 4;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tipStartXPos", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tipExitXPos", [_dec5], {
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
//# sourceMappingURL=bf011374bac6ddda1a45bf5c1f65ce87d2833b75.js.map