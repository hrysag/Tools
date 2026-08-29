System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, FishRotationState, fishMeshState, BulletActionType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ba6abOyg2JEdpOFGpVzOuUj", "ModelDefinitionsBase", undefined);

      /**
       * Created by EricHuang on 2023/9/18.
       * 如果要擴充屬性可以採用以下方式
       * export interface ExtendedOddsInfo extends OddsInfo {
          additionalProperty?: string,
          // 添加其他属性
      }
       * 
       */
      _export("FishRotationState", FishRotationState = /*#__PURE__*/function (FishRotationState) {
        FishRotationState[FishRotationState["normalRotation"] = 0] = "normalRotation";
        FishRotationState[FishRotationState["horizontalRotation"] = 1] = "horizontalRotation";
        FishRotationState[FishRotationState["noRotation"] = 2] = "noRotation";
        return FishRotationState;
      }({}));

      //--fish mesh的狀態2D/3D
      _export("fishMeshState", fishMeshState = /*#__PURE__*/function (fishMeshState) {
        fishMeshState[fishMeshState["fish2D"] = 0] = "fish2D";
        fishMeshState[fishMeshState["fish3D"] = 1] = "fish3D";
        return fishMeshState;
      }({})); //---子彈的運動函式改到model(原本在bullet)


      _export("BulletActionType", BulletActionType = /*#__PURE__*/function (BulletActionType) {
        BulletActionType[BulletActionType["BULLET_ACTION_PREFAB"] = 0] = "BULLET_ACTION_PREFAB";
        BulletActionType[BulletActionType["BULLET_ACTION_DYNAMIC"] = 1] = "BULLET_ACTION_DYNAMIC";
        return BulletActionType;
      }({}));
      /**
       * 送到bullet裡面會是2維的array
       * index=0---一般系統的子彈
       * index=1---成就系統的子彈
       * 改到model(原本在bullet)
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f6a89f3a5aaa2089cb51929f26b7934c1ba5317.js.map