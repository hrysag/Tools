System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, fishMeshState, Intersection2D, geometry, log, PickUpCollisionStrategy, _crd;

  function _reportPossibleCrUseOfIfCollisionStrategy(extras) {
    _reporterNs.report("IfCollisionStrategy", "../../../game/strategy/Strategy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionData(extras) {
    _reporterNs.report("CollisionData", "../../../game/strategy/Strategy", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishMeshState(extras) {
    _reporterNs.report("fishMeshState", "../../../game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  _export("PickUpCollisionStrategy", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Intersection2D = _cc.Intersection2D;
      geometry = _cc.geometry;
      log = _cc.log;
    }, function (_unresolved_2) {
      fishMeshState = _unresolved_2.fishMeshState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c58663/gvlGYLvEtROm2TvJ", "PickUpCollisionStrategy", undefined);
      /**
       * Created by EricHuang on 2023/10/29.
       * 
       */


      __checkObsolete__(['Intersection2D']);

      __checkObsolete__(['Vec2', 'find', 'CameraComponent', 'director', 'geometry']);

      __checkObsolete__(['log']);

      _export("PickUpCollisionStrategy", PickUpCollisionStrategy = class PickUpCollisionStrategy {
        getCollision(data) {
          if (data.otherData.fishType == (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
            error: Error()
          }), fishMeshState) : fishMeshState).fish2D) {
            //--這邊是2D魚跟非boss的魚會送進來
            return Intersection2D.pointInPolygon(data.otherData.pointTarget, data.otherData.fishColliderPoint);
          } else {
            //--boss or spfish 會送進來 

            /*
            let canvasCamera2d=find(data.otherData.camera2dnodeId).getComponent(CameraComponent);
            
            let camera3d=director.getScene().getChildByName(data.otherData.camera3dnodeId).getComponent(CameraComponent);
            
            let screenPos=canvasCamera2d.worldToScreen(data.otherData.pointTarget);
             let ray:geometry.Ray=camera3d.screenPointToRay(screenPos.x,screenPos.y);
            */
            var dist = geometry.intersect.rayOBB(data.otherData.rayData, data.otherData.fishObb);
            log('check_rayOBB', dist);

            if (dist > 0) {
              return true;
            } else {
              return false;
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=45745f3055dfb288a9a2cd742004a2d1bd1a283f.js.map