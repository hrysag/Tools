System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, v3, director, geometry, UITransform, find, CameraComponent, tween, GameUtils, _crd;

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
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f2c6f6vs7dEdpv2sI8eyV8n", "GameUtils", undefined);

      __checkObsolete__(['Vec3', 'instantiate', 'v3', 'director', 'geometry', 'Node', 'SpriteFrame', 'UITransform', 'sp', 'Animation', 'Component']);

      __checkObsolete__(['find', 'Vec2']);

      __checkObsolete__(['CameraComponent', 'tween']);

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
          var nameA = a.name;
          var nameB = b.name;
          var suffixA = nameA.split('_').pop();
          var suffixB = nameB.split('_').pop(); //log('check_sortDigitsSpriteFrames',suffixA,suffixB);

          if (suffixA == 'x') {
            suffixA = 'X';
          }

          if (suffixB == 'x') {
            suffixB = 'X';
          }

          var isNumberA = !isNaN(Number(suffixA));
          var isNumberB = !isNaN(Number(suffixB));

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


          var orderOfSuffixes = ['comma', 'point', 'colon', 'BK', 'X', 'plus', 'minus', 'BM'];
          var indexA = orderOfSuffixes.indexOf(suffixA);
          var indexB = orderOfSuffixes.indexOf(suffixB);
          return indexA - indexB;
        }

        static deepCloneForObject(obj, map) {
          if (map === void 0) {
            map = new WeakMap();
          }

          if (null == obj || "object" != typeof obj) return obj;

          if (map.has(obj)) {
            return map.get(obj); // 處理循環引用
          }

          if (obj instanceof Date) {
            return new Date(obj);
          }

          if (obj instanceof Map) {
            var clonedMap = new Map();
            map.set(obj, clonedMap);
            obj.forEach((value, key) => {
              clonedMap.set(key, this.deepCloneForObject(value, map));
            });
            return clonedMap;
          }

          if (obj instanceof Set) {
            var clonedSet = new Set();
            map.set(obj, clonedSet);
            obj.forEach(value => {
              clonedSet.add(this.deepCloneForObject(value, map));
            });
            return clonedSet;
          }

          if (typeof obj === 'function') {
            return obj; // 函數通常不需要深拷貝，直接返回引用
          }

          if (obj instanceof Array) {
            var copy = [];
            map.set(obj, copy);

            for (var i = 0, len = obj.length; i < len; i++) {
              copy[i] = this.deepCloneForObject(obj[i], map);
            }

            return copy;
          }

          if (obj instanceof Object) {
            var _copy = {};
            map.set(obj, _copy);

            for (var attr in obj) {
              if (obj.hasOwnProperty(attr)) {
                _copy[attr] = this.deepCloneForObject(obj[attr], map);
              }
            }

            return _copy;
          }

          throw new Error("Unable to copy obj! Its type isn't supported.");
        }

        static deepClone(obj, map) {
          if (map === void 0) {
            map = new WeakMap();
          }

          if (typeof obj !== 'object' || obj === null) {
            return obj; // 處理原始類型和 null
          }

          if (map.has(obj)) {
            return map.get(obj); // 處理循環引用
          }

          if (obj instanceof Date) {
            return new Date(obj);
          }

          if (obj instanceof Map) {
            var clonedMap = new Map();
            map.set(obj, clonedMap);
            obj.forEach((value, key) => {
              clonedMap.set(key, this.deepClone(value, map));
            });
            return clonedMap;
          }

          if (obj instanceof Set) {
            var clonedSet = new Set();
            map.set(obj, clonedSet);
            obj.forEach(value => {
              clonedSet.add(this.deepClone(value, map));
            });
            return clonedSet;
          }

          if (typeof obj === 'function') {
            return obj; // 函數通常不需要深拷貝，直接返回引用
          }

          var clonedObj = Array.isArray(obj) ? [] : {};
          map.set(obj, clonedObj);

          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              clonedObj[key] = this.deepClone(obj[key], map);
            }
          }

          return clonedObj;
        }
        /**
         * 將千位數換成K
         * @param ratio ex:1:1 ot 1:1000...
         * @returns 
         */


        static repK(ratio) {
          var n = Number(ratio);

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
          var pos3d = null;
          var camera3d = director.getScene().getChildByName(value.camera3dnodeId).getComponent(CameraComponent);
          var canvasCamera2d = find(value.camera2dnodeId).getComponent(CameraComponent);
          var projectType = camera3d.projection; //-0=ORTHO/1=PERSPECTIVE
          //log('check_conver2dposTo3dpos',camera3d,canvasCamera2d);

          if (camera3d && canvasCamera2d) {
            var worldPosition;
            /**
             * pos2d?:Vec2,
               node2d:Node,
               camera2dnodeId:string,
               camera3dnodeId:string
             */

            if (value.pos2d != undefined) {
              var uiComponent = value.node2d.getComponent(UITransform);
              worldPosition = uiComponent.convertToWorldSpaceAR(v3(value.pos2d.x, value.pos2d.y, 0));
            } else {
              worldPosition = value.node2d.getWorldPosition(); //-這個跟convertToWorldSpaceAR是一樣的(會從updateWorldTransform去取parent的矩陣相乘)
            }

            var screenPos = canvasCamera2d.worldToScreen(worldPosition); //--取得射線後,可以得到射線的起點o,射線的方向d

            var ray = camera3d.screenPointToRay(screenPos.x, screenPos.y);
            pos3d = new Vec3(ray.o); //log('_wp:',worldPosition,'\n'+'_fup:',value.pos2d,'\n'+'_sp:',screenPos,'\n'+'_3dp:',pos3d);
            //--perspective project才需要再算距離(orthogonal project就直接偷掉了啦)

            if (projectType == 1) {
              //--盡量要避免這樣動態產生一個平面
              var a = new Vec3(value.node2d.worldPosition);
              var b = new Vec3(value.node2d.worldPosition);
              b.x += 1;
              var c = new Vec3(value.node2d.worldPosition);
              c.y += 1; //--在透視投影裡面要用,可是在正交頭影裡面是0(取得ray與plane的交點距離)
              //--geometry.intersect如果回傳-1代表是平行無交集的狀況

              var plane = geometry.Plane.fromPoints(new geometry.Plane(), a, b, c);
              var dist = geometry.intersect.rayPlane(ray, plane); //--注意在正交投影裡面ray的d是000,所以在正交投影中,以下相乘可以不用做了

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
          var camera3dNode = find(camera3dNodeId);
          var camera3dComponent = camera3dNode.getComponent(CameraComponent); //---world to screen

          var wts = camera3dComponent.worldToScreen(pos3d); //---2d canvas camera node------

          var canvasCameraNode = find(canvasCameraNodeId); //--canvas camera cameracomponent

          var canvasCameraComponent = canvasCameraNode.getComponent(CameraComponent); //--screen to world

          var wp = canvasCameraComponent.screenToWorld(wts);
          var localPos = node2dContainer.getComponent(UITransform).convertToNodeSpaceAR(wp);
          return localPos;
        }

        static cover3dor2dToWorldPos(targetNodeContainer, pos, changeContainerNode) {
          var wp;

          if (targetNodeContainer.getComponent(UITransform)) {
            wp = targetNodeContainer.getComponent(UITransform).convertToWorldSpaceAR(pos);
          } else {
            var cameraComponent = targetNodeContainer.getComponent(CameraComponent); //---world to screen

            var wts = cameraComponent.worldToScreen(pos);
            var changeContainerNodeCameraComponent = changeContainerNode.getComponent(CameraComponent);
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
          var cameraComponent = director.getScene().getComponentInChildren(CameraComponent);
          var camera = cameraComponent.camera;
          var frustumInfo = camera.frustum;
          var planes = frustumInfo.planes;
          var frustumInfoData = {
            leftPoint: 0,
            rightPoint: 0,
            topPoint: 0,
            bottomPoint: 0
          };
          var v = new Vec3(-1, 0, 0); // 點朝向左邊平面的向量

          v.normalize();
          var point = new Vec3(0, 0, 0);
          var leftPoint = planes[0].n.x * point.x + planes[0].n.y * point.y + planes[0].n.z * point.z - planes[0].d;
          frustumInfoData.leftPoint = -leftPoint / -Vec3.dot(planes[0].n, v);
          v = new Vec3(1, 0, 0); // 點朝向右邊平面的向量

          v.normalize();
          point = new Vec3(0, 0, 0);
          var rightPoint = planes[1].n.x * point.x + planes[1].n.y * point.y + planes[1].n.z * point.z - planes[1].d;
          frustumInfoData.rightPoint = rightPoint / -Vec3.dot(planes[1].n, v);
          v = new Vec3(0, 1, 0); // 點朝向上面平面的向量

          v.normalize();
          point = new Vec3(0, 0, 0);
          var topPoint = planes[3].n.x * point.x + planes[3].n.y * point.y + planes[3].n.z * point.z - planes[3].d;
          frustumInfoData.topPoint = topPoint / -Vec3.dot(planes[3].n, v);
          v = new Vec3(0, -1, 0); // 點朝向下面平面的向量

          v.normalize();
          point = new Vec3(0, 0, 0);
          var bottomPoint = planes[2].n.x * point.x + planes[2].n.y * point.y + planes[2].n.z * point.z - planes[2].d;
          frustumInfoData.bottomPoint = -bottomPoint / -Vec3.dot(planes[2].n, v);
          return frustumInfoData;
        }
        /**
         * 延遲事件..超廢的..他可不會隨著瀏覽器進入休眠而終止.會以瀏覽器休眠模式下最低FPS執行
         * @param duration 單位：毫秒
         * e.g.
         *  UtilsKit.Defer(options.duration).then(() => {
                this.onResolve({ state: DialogEventTypes.TIMEOUT, isAccept: false, isCancel: false });
            });
        */


        static Defer(duration) {
          if (duration === void 0) {
            duration = 0;
          }

          return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), duration);
          });
        }
        /**
         * 與DeferByTweenPromiseWithCancel 相同,但不會有取消功能
         * @param duration 單位：秒
         * @param tweenObj 
         * @returns 
         */


        static DeferByTweenPromise(duration, tweenObj) {
          if (duration === void 0) {
            duration = 0;
          }

          return new Promise((resolve, reject) => {
            var tObj = tweenObj || {}; // 若沒傳則使用空 object

            tween(tObj).to(duration, {}).call(() => {
              resolve();
            }).start();
          });
        }
        /**
         * 與 DeferByTweenPromise 相同,但可以取消
         * 中途終止時不會觸發 resolve,將不會有後續的行程
         * @param duration 單位:秒
         * @param tweenObj 
         * @returns   控制物件 { promise, cancel, forceCancelAndResolve }
         * note:
         * cancel: 取消延遲事件(resolve將不會被觸發)
         * forceCancelAndResolve: 強制取消並觸發 resolve,這個方法會立即結束延遲事件
         * 使用時要注意,如果有使用 forceCancelAndResolve,就不需要再使用 cancel
         * @example
         * const delay = GameUtils.DeferByTweenPromiseWithCancel(1);
         * this._delayTweenCancel = delay.cancel; // 保存取消函式
         * await delay.promise; // 等待延遲完成
         * this._delayTweenCancel = null; // 清掉
         */


        static DeferByTweenPromiseWithCancel(duration, tweenObj) {
          if (duration === void 0) {
            duration = 0;
          }

          var isCanceled = false;
          var resolveFunc = null;
          var tObj = tweenObj || {};
          var t = tween(tObj).to(duration, {}).call(() => {
            if (!isCanceled) resolveFunc == null || resolveFunc(); // 若已取消就不觸發 resolve
          });
          var promise = new Promise(resolve => {
            resolveFunc = resolve;
            t.start();
          }); //--cancel 和 forceCancelAndResolve 都會回傳,需要哪個自己決定接哪個起來用

          return {
            promise,
            cancel: () => {
              isCanceled = true;
              t.stop();
              resolveFunc = null;
            },
            forceCancelAndResolve: () => {
              isCanceled = true;
              t.stop();
              resolveFunc == null || resolveFunc(); // 立即觸發 resolve

              resolveFunc = null; // 清除引用
            }
          };
        }
        /**
         * 延遲事件(藉由 cocos api "scheduleOnce")
         * TODO: 這個方法目前無法使用
         * 需要擴增在沒有component的情況下可以使用
         * @param duration 單位：毫秒
        */


        static DeferByScheduleOnce(duration) {
          if (duration === void 0) {
            duration = 0;
          }

          return;
          return new Promise((resolve, reject) => {//let scene = director.getScene();
            //let rootNode: Node = scene.children[0];
            //rootNode.getComponent(UITransform).scheduleOnce(() => resolve(), duration / 1000);
            //director.getScene().scheduleOnce(() => resolve(), duration / 1000);  

            /*
            director.getScheduler().schedule(
                ()=>{},
                this,
                0,0,0,0
            )*/
          });
        }

        static DeferByScheduleOnceWithComponent(targetComponent, duration) {
          if (duration === void 0) {
            duration = 0;
          }

          return new Promise((resolve, reject) => {
            targetComponent.scheduleOnce(() => resolve(), duration);
          });
        }
        /**
         * 規格化數值(取小數點後2位)
         * @param num 數值
         * @returns 
         */


        static NumberSpecification(num) {
          return num.toLocaleString('zh', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          });
        }
        /**
         * 縮短數字字串
         * @param value 
         * @returns {string}
         */


        static FormatNumber(value) {
          var digitsNummberOptions = {
            maximumFractionDigits: 3,
            minimumFractionDigits: 0
          };
          var output = '';
          var suffix = '';

          if (value >= 100000) {
            suffix = "K";
            output = (value / 1000).toLocaleString('zh', digitsNummberOptions) + suffix;
          } else {
            output += value.toLocaleString('zh', digitsNummberOptions);
          }

          return output;
        }

        static get parent() {
          var Site = parent['Site'] || "";
          return {
            Site
          };
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a713db80dc8e316e938c0758042069742ef1473.js.map