System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, UITransform, Vec3, UIOpacity, tween, Sprite, Layout, Vec2, symbolResource_TA, _dec, _class, _crd, ccclass, property, symbolSet_TA;

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
      find = _cc.find;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      UIOpacity = _cc.UIOpacity;
      tween = _cc.tween;
      Sprite = _cc.Sprite;
      Layout = _cc.Layout;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      symbolResource_TA = _unresolved_2.symbolResource_TA;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fb563StSJK4oS+MwXV6uvR", "symbolSet_TA", undefined);

      __checkObsolete__(['_decorator', 'Component', 'find', 'UITransform', 'Vec3', 'UIOpacity', 'tween', 'Sprite', 'Layout', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("symbolSet_TA", symbolSet_TA = (_dec = ccclass('symbolSet_TA'), _dec(_class = class symbolSet_TA extends Component {
        constructor() {
          super(...arguments);
          this.tileNum = 0;
          //牌型張數
          this.symID = 0;
        }

        //牌型編號
        //初始化
        init(tileNum, symID) {
          this.tileNum = tileNum;
          this.symID = symID;
          this.node.getComponent(UIOpacity).opacity = 255; //設置透明度
        } //設置牌型與貼圖


        setType() {
          var symbolSFTA = find('Canvas/TADemo/symbolResource_TA').getComponent(_crd && symbolResource_TA === void 0 ? (_reportPossibleCrUseOfsymbolResource_TA({
            error: Error()
          }), symbolResource_TA) : symbolResource_TA); //獲取場景內的symbolResource_TA腳本
          //隱藏子牌，設置貼圖

          for (var i = 0; i < 4; i++) {
            this.node.children[i].active = false;
            this.node.children[i].getComponent(Sprite).spriteFrame = symbolSFTA.symbolSF[this.symID - 1]; //設置貼圖
          }

          for (var _i = 0; _i < this.node.children.length; _i++) {
            this.node.children[_i].getComponent(UITransform).setAnchorPoint(new Vec2(0.5, 0.5)); //校正中心點(因對退場動畫會控制這個參數)

          } //判斷張數配置牌型位置分布


          if (this.tileNum > 2) {
            this.node.getComponent(UITransform).width = 186;
            this.node.children[0].setPosition(new Vec3(-60, 0, 0));
            this.node.children[1].setPosition(new Vec3(0, 0, 0));
            this.node.children[2].setPosition(new Vec3(60, 0, 0));
            this.node.children[3].setPosition(new Vec3(4, 6, 0));
          } else if (this.tileNum == 2) {
            this.node.getComponent(UITransform).width = 120;
            this.node.children[0].setPosition(new Vec3(-30, 0, 0));
            this.node.children[1].setPosition(new Vec3(30, 0, 0));
          } else {
            this.node.getComponent(UITransform).width = 60;
            this.node.children[0].setPosition(new Vec3(0, 0, 0));
          }

          this.node.parent.getComponent(Layout).updateLayout(); //更新layout
          // this.scheduleOnce(() => {
          //     for (let i = 0; i < this.tileNum; i++) {
          //         this.node.children[i].active = true;//顯示子牌
          //     }
          // }, 0.9)
        } //顯示子牌


        showChildren() {
          for (var i = 0; i < this.tileNum; i++) {
            this.node.children[i].active = true;
          }
        } //退出牌型


        exitSet() {
          tween(this.node.getComponent(UIOpacity)).by(0.5, {
            opacity: 0
          }).start(); //淡出

          for (var i = 0; i < 4; i++) {
            tween(this.node.children[i]).by(0.5, {
              position: new Vec3(0, 5, 0)
            }).start(); //持續上移
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=763507ad2feb3617e7158b4e9f1e66d25fce3f1b.js.map