System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, STAcollisionStrategy, _crd;

  function _reportPossibleCrUseOfIfCollisionStrategy(extras) {
    _reporterNs.report("IfCollisionStrategy", "../../../game/strategy/Strategy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionData(extras) {
    _reporterNs.report("CollisionData", "../../../game/strategy/Strategy", _context.meta, extras);
  }

  _export("STAcollisionStrategy", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3bc17Vll31CHL45ckAzFb/y", "STAcollisionStrategy", undefined);

      /**
       * Created by EricHuang on 2023/10/03.
       * 
       */
      __checkObsolete__(['Vec2']);

      _export("STAcollisionStrategy", STAcollisionStrategy = class STAcollisionStrategy {
        //--collider worldpoint= [new Vec2(-1, -1), new Vec2(1, -1), new Vec2(1, 1), new Vec2(-1, 1)];

        /*
        //---SAT collision---
           //--逆時針採點-1.左下 2.右下 3.右上 4.左上(這是cocos 採點的順序)
        /*
            collider worldpoint= [new Vec2(-1, -1), new Vec2(1, -1), new Vec2(1, 1), new Vec2(-1, 1)];
            --逆時針採點-1.左下 2.右下 3.右上 4.左上(這是cocos 採點的順序)
              4(transformedLeftTop) 3(transformedMax)
             |---------------------|
             |                     |
             |                     |
             |---------------------|
             1(transformedMin)     2(transformedRightBottom)
        */
        getCollision(data) {
          //let aryPointB1:{x:number,y:number}[]=[data.a.transformedLeftTop,data.a.transformedMin,data.a.transformedRightBottom,data.a.transformedMax];
          //let aryPointB2:{x:number,y:number}[]=[data.b.transformedLeftTop,data.b.transformedMin,data.b.transformedRightBottom,data.b.transformedMax];
          if (data.a.length == 0 || data.b.length == 0) {
            return false;
          }

          var aryPointB1 = data.a;
          var aryPointB2 = data.b;

          for (var i = 0; i < 2; i++) {
            var max = -Number.MAX_VALUE;
            var min = Number.MAX_VALUE;
            var axis = {
              x: aryPointB1[i + 1].x - aryPointB1[i].x,
              y: aryPointB1[i + 1].y - aryPointB1[i].y
            };
            var axisLen = axis.x * axis.x + axis.y * axis.y;

            for (var j = 0; j < 4; j++) {
              var v = {
                x: aryPointB2[j].x - aryPointB1[i].x,
                y: aryPointB2[j].y - aryPointB1[i].y
              };
              var projLen = v.x * axis.x + v.y * axis.y;

              if (projLen > max) {
                max = projLen;
              }

              if (projLen < min) {
                min = projLen;
              }

              if (projLen >= 0 && projLen <= axisLen) {
                break;
              }

              if (j == 3) {
                if (min < 0 && max > axisLen) {
                  break;
                } else {
                  return false;
                }
              }
            }
          }

          return true;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4c690097f1093923e40812b7df379db1438a2b48.js.map