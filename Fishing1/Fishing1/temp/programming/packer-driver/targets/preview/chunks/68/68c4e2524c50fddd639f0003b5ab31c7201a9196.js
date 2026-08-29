System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, FishCustomAnimation, _crd;

  _export("FishCustomAnimation", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "140e8opWAhAp562lWLUCxg0", "FishCustomAnimation", undefined);
      /**
       * Created by EricHuang on 2023/7/17.
       * 特殊的fish mesh(主要用於自己手動程式碼建立,例如規律的圓盤物件)
       */


      __checkObsolete__(['Node']);

      _export("FishCustomAnimation", FishCustomAnimation = class FishCustomAnimation extends Node {
        constructor() {
          super();
        } //---override it 


        init() {}

        hitAndChangeState() {}

        reSetState() {}

        removeAndDispose() {}

        stopShooting() {}

        reShooting() {}

        play() {}

        stop() {}

        repeatChangeVertextDataColor() {}

        stopRepeatChangeVertextDataColor() {}
        /*
        public getBonusMesh():PIXI.Rectangle
        {
            return this.spCollision.getBounds();
        }
         public createCollisionArea(scale:number):void
        {
            this.spCollision=new PIXI.Graphics();
            this.spCollision.beginFill(0xFF0000);
            this.spCollision.drawRect(0,0,this.ogWidth,this.ogHeight);
            this.spCollision.endFill();
            this.spCollision.interactive=false;
            this.spCollision.alpha=0;
            
            this.spCollision.pivot.set(this.spCollision.width/2,this.spCollision.height/2);
            this.spCollision.scale.set(scale);
            this.addChild(this.spCollision);
        }*/


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=68c4e2524c50fddd639f0003b5ab31c7201a9196.js.map