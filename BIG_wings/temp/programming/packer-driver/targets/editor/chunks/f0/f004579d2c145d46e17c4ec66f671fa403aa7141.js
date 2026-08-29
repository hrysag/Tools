System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, tween, UIOpacity, find, sp, Vec3, symbolResource_TA, _dec, _class, _crd, ccclass, symbolSetting_TA;

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
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      find = _cc.find;
      sp = _cc.sp;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      symbolResource_TA = _unresolved_2.symbolResource_TA;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "797ba8tZaxJlaXjSPyJtkBS", "symbolSetting_TA", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'tween', 'UIOpacity', 'find', 'sp', 'Vec3', 'Node']);

      ({
        ccclass
      } = _decorator); //設置symbol上的符號圖案

      _export("symbolSetting_TA", symbolSetting_TA = (_dec = ccclass('symbolSetting_TA'), _dec(_class = class symbolSetting_TA extends Component {
        constructor(...args) {
          super(...args);
          this.symID = 0;
          //紀錄本symID
          this.symbolHeight = 260;
          //symbol的高度間距
          this.symbol = void 0;
          this.scatter = void 0;
          this.blurSymbol = void 0;
          this.blurNode = void 0;
        }

        onLoad() {
          this.symbol = this.node.getChildByName('main').getChildByName('symbol');
          this.scatter = this.node.getChildByName('main').getChildByName('scatter');
          this.blurSymbol = this.node.getChildByName('blur').getChildByName('symbol');
          this.blurNode = this.node.getChildByName('blur');
        } //初始化symbol，重新配置圖示與位置(symID)


        resetSymbol(symID) {
          this.symbol.active = true; //顯示靜態symbol

          this.scatter.active = false;
          this.node.position = new Vec3(0, 1170 - this.symbolHeight * this.node.getSiblingIndex(), 0); //設置symbol位置

          this.setSymbolData(symID); //更新圖示
        } //設置symbol圖示(symID)


        setSymbolData(symID) {
          if (!this.node.parent.active) return;
          this.symID = symID; //設置本symID

          this.symbol.active = true; //顯示靜態symbol

          this.scatter.active = false;
          const symbolSFTA = find('Canvas/TADemo/symbolResource_TA').getComponent(_crd && symbolResource_TA === void 0 ? (_reportPossibleCrUseOfsymbolResource_TA({
            error: Error()
          }), symbolResource_TA) : symbolResource_TA); //獲取場景內的symbolResource_TA腳本

          this.symbol.getComponent(Sprite).spriteFrame = symbolSFTA.symbolSF[symID - 1];
          ; //正常貼圖

          this.blurSymbol.getComponent(Sprite).spriteFrame = symbolSFTA.symbolBlurSF[symID - 1];
          ; //模糊貼圖

          if (symID === 43) this.scatterStay();
        } //模糊淡入


        blurShow() {
          if (!this.blurNode.active) {
            this.blurNode.active = true; //顯示模糊物件

            tween(this.blurNode.getComponent(UIOpacity)).to(0.2, {
              opacity: 255
            }).start();
          }
        } //模糊淡出


        blurHide() {
          if (this.blurNode.active) {
            tween(this.blurNode.getComponent(UIOpacity)).to(0.3, {
              opacity: 0
            }).call(() => {
              this.blurNode.active = false; //隱藏模糊物件

              this.blurNode.getComponent(UIOpacity).opacity = 0;
            }).start(); //淡出動態
          }
        } //切換為scatter停留動態


        scatterStay() {
          this.symbol.active = false; //隱藏靜態symbol

          this.scatter.active = true;
          this.scatter.getComponent(sp.Skeleton).setAnimation(0, 'stay', true); //播放停留動態
        } // scatterWin() {
        //     this.symbol.active = false;//隱藏靜態symbol
        //     this.scatter.active = true;
        //     this.scatter.getComponent(sp.Skeleton).setAnimation(0, 'win', true);//播放停留動態
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f004579d2c145d46e17c4ec66f671fa403aa7141.js.map