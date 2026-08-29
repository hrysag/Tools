System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, find, sp, Animation, Vec3, UIOpacity, Color, symbolResource_TA, _dec, _class, _crd, ccclass, symbolWin_TA;

  function _reportPossibleCrUseOfsymbolResource_TA(extras) {
    _reporterNs.report("symbolResource_TA", "./symbolResource_TA", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      find = _cc.find;
      sp = _cc.sp;
      Animation = _cc.Animation;
      Vec3 = _cc.Vec3;
      UIOpacity = _cc.UIOpacity;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      symbolResource_TA = _unresolved_2.symbolResource_TA;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3e3b2Vq3p9DaK4Mg8dEdDGa", "symbolWin_TA", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'find', 'sp', 'Animation', 'Node', 'Vec3', 'UIOpacity', 'Color']);

      ({
        ccclass
      } = _decorator);

      _export("symbolWin_TA", symbolWin_TA = (_dec = ccclass('symbolWin_TA'), _dec(_class = class symbolWin_TA extends Component {
        constructor(...args) {
          super(...args);
          this.targetSymbol = null;
        }

        //設置要執行的symbolWin表演(symID，聽牌狀態，輪軸的symbol節點)
        setSymbolWinData(symID, scatterReady, symbolNode) {
          this.targetSymbol = symbolNode;
          this.getComponent(UIOpacity).opacity = 255;
          this.node.scale = new Vec3(1, 1, 1); //尺寸初始化

          const scatter = this.node.getChildByName('scatter');
          const stayFx = this.node.getChildByName('stayFx');
          const symbol = this.node.getChildByName('symbol');
          const frame = this.node.getChildByName('frame');
          scatter.active = false;
          stayFx.active = false;
          symbol.active = false;
          frame.active = false;
          const symbolSFTA = find('Canvas/TADemo/symbolResource_TA').getComponent(_crd && symbolResource_TA === void 0 ? (_reportPossibleCrUseOfsymbolResource_TA({
            error: Error()
          }), symbolResource_TA) : symbolResource_TA); //獲取場景內的symbolResource_TA腳本

          this.node.position = symbolNode.getPosition().add(symbolNode.parent.parent.getPosition()); //中獎顯示的世界座標位置

          symbolNode.active = false; //隱藏輪軸的symbol

          if (symID === 43) {
            scatter.getChildByName('scatterSpine').setScale(new Vec3(1, 1, 1));
            scatter.getChildByName('scatterSpine').getComponent(sp.Skeleton).color = new Color(255, 255, 255, 255);
            scatter.getChildByName('scatterHideFx').getComponent(UIOpacity).opacity = 0;
            scatter.active = true;

            if (scatterReady) {
              stayFx.active = true;
              scatter.getChildByName('scatterSpine').getComponent(sp.Skeleton).setAnimation(0, 'stay', true); //播放scatter聽牌動態
            } else scatter.getChildByName('scatterSpine').getComponent(sp.Skeleton).setAnimation(0, 'win', true); //播放scatter贏牌動態

          } else {
            symbol.active = true;
            frame.active = true;
            this.node.getComponent(Animation).play(); //播放動態

            symbol.getComponent(Sprite).spriteFrame = symbolSFTA.symbolSF[symID - 1]; //設置貼圖
          }
        }

        update() {
          if (this.targetSymbol) {
            const targetPos = this.targetSymbol.getPosition().add(this.targetSymbol.parent.parent.getPosition());
            if (this.node.position.y != targetPos.y) this.node.position = targetPos; //中獎顯示的世界座標位置
          }
        } //scatter牌消除


        scatterRemove() {
          this.node.getChildByName('scatter').getComponent(Animation).play(); //播放消除動態
        }

        resetTarget() {
          this.targetSymbol = null;
        }

        onDisable() {
          this.resetTarget();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3c58d6997f0752da850680900e72fd67946d4a61.js.map