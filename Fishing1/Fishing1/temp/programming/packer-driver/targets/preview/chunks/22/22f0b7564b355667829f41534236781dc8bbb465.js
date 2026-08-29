System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd, BulletEffectSourceType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "28283SyvPxNwZQlQPmGYh5t", "BulletDefinitions", undefined);

      /**
       * Created by EricHuang on 2023/9/021.
       *
       */
      //---槍口的位置
      __checkObsolete__(['Node', 'SpriteFrame', 'Prefab', 'Collider2D', 'Vec3', 'Label']); //--基本的bullet interface
      //---子彈的動作行為,可以透過實踐多種不同的interface來達到不同的子彈動作
      //--辨識工廠用的


      _export("BulletEffectSourceType", BulletEffectSourceType = /*#__PURE__*/function (BulletEffectSourceType) {
        BulletEffectSourceType[BulletEffectSourceType["EFFECTSOURCE_MOVIECLIP"] = 0] = "EFFECTSOURCE_MOVIECLIP";
        BulletEffectSourceType[BulletEffectSourceType["EFFECTSOURC_IMAGE"] = 1] = "EFFECTSOURC_IMAGE";
        BulletEffectSourceType[BulletEffectSourceType["EFFECTSOURCE_GRAPHIC"] = 2] = "EFFECTSOURCE_GRAPHIC";
        BulletEffectSourceType[BulletEffectSourceType["EFFECTSOURCE_PREFAB"] = 3] = "EFFECTSOURCE_PREFAB";
        BulletEffectSourceType[BulletEffectSourceType["EFFECTSOURCE_DYNAMIC"] = 4] = "EFFECTSOURCE_DYNAMIC";
        return BulletEffectSourceType;
      }({}));
      /**
       * 更換原本的子彈貼圖使用,當然也可以直接替換掉
       * PS-目前只支援同種類型換同種類型ex-img2img,ani2ani,graphic2graphic
       * 只有prefab功能可以pre2pre,也支援更換prefab裡面的material或是新創其他的animation
       */
      //--server送進來的子彈資訊

      /**
       * 以下為server送進來的子彈資訊
       * {
       *  s: 0,----座位號0-3
       *  p: 970,-該子彈玩家的當前分數餘額
       *  id: 3,--子彈id
       *  w: 3, --武器類別
       * //--si為client 自定義的資料(長度1000內)
       *  si: { x: 77777, y: 66666, r: 8787 }
       *  }
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=22f0b7564b355667829f41534236781dc8bbb465.js.map