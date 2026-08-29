System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd, DYN_NODE_PROPERTIES, CleanTrackType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bfc553WNWREN6kOCiuNsztr", "AnimationDataOptions", undefined);

      //--用來記錄for slotMachine的索引資料
      __checkObsolete__(['Vec3']);

      _export("DYN_NODE_PROPERTIES", DYN_NODE_PROPERTIES = {
        PREFAB_ID: 'prefabId',
        TOKEN_ID: 'tokenId',
        GROUP_ID: 'groupId',
        SYMBOL_ICON_INFO: 'symbolIconInfo'
      });

      _export("CleanTrackType", CleanTrackType = /*#__PURE__*/function (CleanTrackType) {
        CleanTrackType[CleanTrackType["All_TRACKS"] = 0] = "All_TRACKS";
        CleanTrackType[CleanTrackType["CURRENT_TRACK"] = 1] = "CURRENT_TRACK";
        return CleanTrackType;
      }({})); //---這個是用來設定要播放的動畫資料
      //--基礎共用的播放定義屬性


      ; //--for animation
      //--animation 特有的參數...

      ; // Spine 特有的參數...

      ; // MixedAnimation 特有的參數...

      ;
      /*
      export type BaseAnimationParams = {
          timeScale?: number;
          loop?: boolean;
          repeatCount?: number;
          delay?: number;
          targetNodeId?: string;//--prefab(放component的nodeId)的node id
          tokenID?: string;//---prefab單一識別碼
          rootNode?: Node;//--乘載這個animation的最上頭根結點(這樣做很危險啊)
      
      };
      
      //--for animation
      //--animation 特有的參數...
      
      export type AnimationPlayParams = BaseAnimationParams & {
          wrapMode?: number;
          clipName?: string;
      };
      
      // Spine 特有的參數...
      export type SpinePlayParams = BaseAnimationParams & {
          spineName?: string;
      };
      
      // MixedAnimation 特有的參數...
      export type MixedAnimationPlayParams = BaseAnimationParams & {
      
      };
      */

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f1108381af9cb2c405cabd12b56a859011638eaf.js.map