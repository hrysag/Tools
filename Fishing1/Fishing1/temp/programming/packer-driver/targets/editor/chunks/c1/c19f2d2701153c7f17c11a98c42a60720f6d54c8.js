System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, v3, director, geometry, UITransform, find, CameraComponent, GameUtils, _crd;

  _export("GameUtils", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
      director = _cc.director;
      geometry = _cc.geometry;
      UITransform = _cc.UITransform;
      find = _cc.find;
      CameraComponent = _cc.CameraComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa31foa+LtMUq8iC5G5vOtw", "GameUtils", undefined);

      __checkObsolete__(['Vec3', 'instantiate', 'v3', 'director', 'geometry', 'Node', 'SpriteFrame', 'UITransform']);

      __checkObsolete__(['find', 'Vec2']);

      __checkObsolete__(['CameraComponent']);

      /**
       * Created by EricHuang on 2023/7/24.
       */
      __checkObsolete__(['log']);

      _export("GameUtils", GameUtils = class GameUtils {
        /**
        *   將傳入的字串 每三位加入一個逗點
        * @param nStr
        * @returns {string}
        */
        static addCommas(nStr) {
          nStr += '';
          var x = nStr.split('.');
          var x1 = x[0];
          var x2 = x.length > 1 ? '.' + x[1] : '';
          var rgx = /(\d+)(\d{3})/;

          while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
          }

          return x1 + x2; //-Tools.Digits.addCommas(digits.toString()).split("")
        }
        /**
         * 因為美術沒有套用之前的規則,
         * 這邊強制排序美術製作的spriteFrames為了符合digits工具使用
         * 0-9>逗號>小數點(這之前為固定放置)>:>K>X
         * 可以再依此類推往後...
         * @param a 
         * @param b 
         */


        static sortDigitsSpriteFrames(a, b) {
          let nameA = a.name;
          let nameB = b.name;
          let suffixA = nameA.split('_').pop();
          let suffixB = nameB.split('_').pop(); //log('check_sortDigitsSpriteFrames',suffixA,suffixB);

          if (suffixA == 'x') {
            suffixA = 'X';
          }

          if (suffixB == 'x') {
            suffixB = 'X';
          }

          let isNumberA = !isNaN(Number(suffixA));
          let isNumberB = !isNaN(Number(suffixB));

          if (isNumberA && isNumberB) {
            return Number(suffixA) - Number(suffixB);
          } else if (isNumberA) {
            return -1;
          } else if (isNumberB) {
            return 1;
          }
          /**
           * 數字封包的順序為:0-9>逗號>小數點(這之前為固定放置)>:>K>X
           *  ：＞冒號
              ；＞分號
              comma=,  point=. colon=: BK=K ; BM=M
           */


          let orderOfSuffixes = ['comma', 'point', 'colon', 'BK', 'X', 'plus', 'minus', 'BM'];
          let indexA = orderOfSuffixes.indexOf(suffixA);
          let indexB = orderOfSuffixes.indexOf(suffixB);
          return indexA - indexB;
        }

        static deepCloneForObject(obj) {
          let copy; // Handle the 3 simple types, and null or undefined

          if (null == obj || "object" != typeof obj) return obj;

          if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
          }

          if (obj instanceof Array) {
            copy = [];

            for (var i = 0, len = obj.length; i < len; i++) {
              //copy[i] = clone(obj[i]);
              copy[i] = this.deepCloneForObject(obj[i]);
            }

            return copy;
          }

          if (obj instanceof Object) {
            copy = {};

            for (var attr in obj) {
              if (obj.hasOwnProperty(attr)) copy[attr] = this.deepCloneForObject(obj[attr]);
            }

            return copy;
          }

          throw new Error("Unable to copy obj! Its type isn't supported.");
        }
        /**
         * 將千位數換成K
         * @param ratio ex:1:1 ot 1:1000...
         * @returns 
         */


        static repK(ratio) {
          let n = Number(ratio);

          if (n >= 1000) {
            n = n / 1000;
            ratio = n.toString() + 'K';
          }

          return ratio;
        }

        static getRangeRandom(min, max) {
          return Math.random() * (max - min) + min;
        } //--遮蔽玩家帳號,只顯示前三碼


        static processAccountName(val) {
          return val.slice(0, 3) + '***';
        } //public static conver2dposTo3dpos(pos2d?:Vec2,node2d:Node,camera2dnodeId:string,camera3dnodeId:string):Vec3


        static conver2dposTo3dpos(value) {
          /**
           * 不論是哪台攝影機,他的物件的世界座標是代表只在自己的space的位置,
           * 最終成像還是要畫出screenpoint.
           * 所以在不同camera要溝通就靠screenpoint
           */
          let pos3d = null;
          let camera3d = director.getScene().getChildByName(value.camera3dnodeId).getComponent(CameraComponent);
          let canvasCamera2d = find(value.camera2dnodeId).getComponent(CameraComponent);
          let projectType = camera3d.projection; //-0=ORTHO/1=PERSPECTIVE
          //log('check_conver2dposTo3dpos',camera3d,canvasCamera2d);

          if (camera3d && canvasCamera2d) {
            let worldPosition;
            /**
             * pos2d?:Vec2,
               node2d:Node,
               camera2dnodeId:string,
               camera3dnodeId:string
             */

            if (value.pos2d != undefined) {
              let uiComponent = value.node2d.getComponent(UITransform);
              worldPosition = uiComponent.convertToWorldSpaceAR(v3(value.pos2d.x, value.pos2d.y, 0));
            } else {
              worldPosition = value.node2d.getWorldPosition(); //-這個跟convertToWorldSpaceAR是一樣的(會從updateWorldTransform去取parent的矩陣相乘)
            }

            let screenPos = canvasCamera2d.worldToScreen(worldPosition); //--取得射線後,可以得到射線的起點o,射線的方向d

            let ray = camera3d.screenPointToRay(screenPos.x, screenPos.y);
            pos3d = new Vec3(ray.o); //log('_wp:',worldPosition,'\n'+'_fup:',value.pos2d,'\n'+'_sp:',screenPos,'\n'+'_3dp:',pos3d);
            //--perspective project才需要再算距離(orthogonal project就直接偷掉了啦)

            if (projectType == 1) {
              //--盡量要避免這樣動態產生一個平面
              let a = new Vec3(value.node2d.worldPosition);
              let b = new Vec3(value.node2d.worldPosition);
              b.x += 1;
              let c = new Vec3(value.node2d.worldPosition);
              c.y += 1; //--在透視投影裡面要用,可是在正交頭影裡面是0(取得ray與plane的交點距離)
              //--geometry.intersect如果回傳-1代表是平行無交集的狀況

              let plane = geometry.Plane.fromPoints(new geometry.Plane(), a, b, c);
              let dist = geometry.intersect.rayPlane(ray, plane); //--注意在正交投影裡面ray的d是000,所以在正交投影中,以下相乘可以不用做了

              pos3d.x += ray.d.x * dist;
              pos3d.y += ray.d.y * dist;
              pos3d.z += ray.d.z * dist;
            }
          }

          return pos3d;
        }
        /**
         * 
         * @param node2dContainer 要轉入座標的UI node
         * @param canvasCameraNodeId canvasCameraNode id
         * @param camera3dNodeId 3dCameraNode id
         * @param pos3d 要轉換的3d position(vec3)(screen point)自己要轉成screen space的座標系
         * 注意,convertToWorldSpaceAR 矩陣相乘所有的parent最終找到scene(canvas camera 看到的scene)
         * @returns Vec3
         */


        static conver3dposTo2dpos(node2dContainer, canvasCameraNodeId, camera3dNodeId, pos3d) {
          //--3d cameraNode
          let camera3dNode = find(camera3dNodeId);
          let camera3dComponent = camera3dNode.getComponent(CameraComponent); //---world to screen

          let wts = camera3dComponent.worldToScreen(pos3d); //---2d canvas camera node------

          let canvasCameraNode = find(canvasCameraNodeId); //--canvas camera cameracomponent

          let canvasCameraComponent = canvasCameraNode.getComponent(CameraComponent); //--screen to world

          let wp = canvasCameraComponent.screenToWorld(wts);
          let localPos = node2dContainer.getComponent(UITransform).convertToNodeSpaceAR(wp);
          return localPos;
        }

        static cover3dor2dToWorldPos(targetNodeContainer, pos, changeContainerNode) {
          let wp;

          if (targetNodeContainer.getComponent(UITransform)) {
            wp = targetNodeContainer.getComponent(UITransform).convertToWorldSpaceAR(pos);
          } else {
            let cameraComponent = targetNodeContainer.getComponent(CameraComponent); //---world to screen

            let wts = cameraComponent.worldToScreen(pos);
            let changeContainerNodeCameraComponent = changeContainerNode.getComponent(CameraComponent);
            wp = changeContainerNodeCameraComponent.screenToWorld(wts);
          }

          return wp;
        } //--範圍換算


        static convertRange(A, minA, maxA, minB, maxB) {
          return (A - minA) / (maxA - minA) * (maxB - minB) + minB;
        }
        /**
         * 抽取視錐體的資料,取出邊界上下左右的座標點 
         * @returns frustumInfoData
         */


        static getFrustumData() {
          let cameraComponent = director.getScene().getComponentInChildren(CameraComponent);
          let camera = cameraComponent.camera;
          let frustumInfo = camera.frustum;
          let planes = frustumInfo.planes;
          let frustumInfoData = {
            leftPoint: 0,
            rightPoint: 0,
            topPoint: 0,
            bottomPoint: 0
          };
          let v = new Vec3(-1, 0, 0); // 點朝向左邊平面的向量

          v.normalize();
          let point = new Vec3(0, 0, 0);
          let leftPoint = planes[0].n.x * point.x + planes[0].n.y * point.y + planes[0].n.z * point.z - planes[0].d;
          frustumInfoData.leftPoint = -leftPoint / -Vec3.dot(planes[0].n, v);
          v = new Vec3(1, 0, 0); // 點朝向右邊平面的向量

          v.normalize();
          point = new Vec3(0, 0, 0);
          let rightPoint = planes[1].n.x * point.x + planes[1].n.y * point.y + planes[1].n.z * point.z - planes[1].d;
          frustumInfoData.rightPoint = rightPoint / -Vec3.dot(planes[1].n, v);
          v = new Vec3(0, 1, 0); // 點朝向上面平面的向量

          v.normalize();
          point = new Vec3(0, 0, 0);
          let topPoint = planes[3].n.x * point.x + planes[3].n.y * point.y + planes[3].n.z * point.z - planes[3].d;
          frustumInfoData.topPoint = topPoint / -Vec3.dot(planes[3].n, v);
          v = new Vec3(0, -1, 0); // 點朝向下面平面的向量

          v.normalize();
          point = new Vec3(0, 0, 0);
          let bottomPoint = planes[2].n.x * point.x + planes[2].n.y * point.y + planes[2].n.z * point.z - planes[2].d;
          frustumInfoData.bottomPoint = -bottomPoint / -Vec3.dot(planes[2].n, v);
          return frustumInfoData;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c19f2d2701153c7f17c11a98c42a60720f6d54c8.js.map