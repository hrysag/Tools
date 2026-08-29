System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Sprite, _dec, _class, _crd, ccclass, property, SlotSymbolItem;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "92713mafaRBv5I9ezPmQEDW", "SlotSymbolItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'SpriteFrame', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SlotSymbolItem", SlotSymbolItem = (_dec = ccclass('SlotSymbolItem'), _dec(_class = class SlotSymbolItem extends Sprite {
        set blurSpriteFrame(value) {
          this._blurSpriteFrame = value;
        }

        set normalSpriteFrame(value) {
          this._normalSpriteFrame = value;
        }

        constructor() {
          super();
          this.symbolIndex = 0;
          this.targetSymbol = false;
          this.finalRolling = false;
          this.isRunning = false;
          this.isTweenign = false;
          this.initPosition = null;
          this._blurSpriteFrame = null;
          //--reSet要用的參數
          this._ogMovieDistance = void 0;
          this._ogVy = void 0;
          this._ogMaxDistance = void 0;
          this._ogFinalRolling = void 0;
          this._ogPosition = void 0;
          this._normalSpriteFrame = null;
          this.vy = 0;
          this.maxDistance = 0;
          this.movieDistance = 0;
        }

        setBlur() {
          this.spriteFrame = this._blurSpriteFrame;
        }

        setNormal() {
          this.spriteFrame = this._normalSpriteFrame;
        }

        reset() {
          this.node.setPosition(this._ogPosition);
          this.movieDistance = this._ogMovieDistance;
          this.vy = this._ogVy;
          this.maxDistance = this._ogMaxDistance;
          this.finalRolling = this._ogFinalRolling;
          this.isRunning = false;
          this.isTweenign = false;
        }

        setOriginal() {
          this._ogPosition = this.node.position.clone();
          this._ogMovieDistance = this.movieDistance;
          this._ogVy = this.vy;
          this._ogMaxDistance = this.maxDistance;
          this._ogFinalRolling = this.finalRolling;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8de533cdda8a1b538bfa0da18ee639101d789bc2.js.map