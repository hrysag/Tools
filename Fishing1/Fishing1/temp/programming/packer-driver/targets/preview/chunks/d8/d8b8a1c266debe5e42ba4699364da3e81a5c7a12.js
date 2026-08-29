System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Flock, EventTarget, fishMeshState, PathActionBase, _crd;

  function _reportPossibleCrUseOfPathFlockInfo(extras) {
    _reporterNs.report("PathFlockInfo", "../pathCore/basePath/BasePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPathFlockUnit(extras) {
    _reporterNs.report("PathFlockUnit", "../pathCore/basePath/BasePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFlock(extras) {
    _reporterNs.report("Flock", "../pathCore/basePath/BasePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishMeshState(extras) {
    _reporterNs.report("fishMeshState", "../../../../framework/game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  _export("PathActionBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventTarget = _cc.EventTarget;
    }, function (_unresolved_2) {
      Flock = _unresolved_2.Flock;
    }, function (_unresolved_3) {
      fishMeshState = _unresolved_3.fishMeshState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30f21AVV7hD8Kzl0U5oVmpY", "PathActionBase", undefined);
      /**
       * Created by EricHuang on 2023/7/12.
       */


      __checkObsolete__(['EventTarget']);

      __checkObsolete__(['log']);

      _export("PathActionBase", PathActionBase = class PathActionBase extends EventTarget {
        //--是否反轉路徑
        //protected _currentPath:string;
        constructor(id) {
          super();
          this.numActionsID = void 0;
          this.tokenID = void 0;
          this._stageWH = void 0;
          //---layer2D stage
          //protected _frustum:{leftPoint:number,rightPoint:number,topPoint:number,bottomPoint:number};//---3d frustum
          //protected _frustum:FrustumInfo;//---3d frustum
          //public strPathID:string;
          this._fishTypeState = (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
            error: Error()
          }), fishMeshState) : fishMeshState).fish2D;
          this._transforme = 1;
          this._jsonPathTarget = void 0;
          //---json路徑
          this._flockInfo = void 0;
          this._flock = void 0;
          this._isReverse = void 0;
          this.tokenID = id;
          this._jsonPathTarget = null;
          this._flockInfo = [];
          this._flock = new (_crd && Flock === void 0 ? (_reportPossibleCrUseOfFlock({
            error: Error()
          }), Flock) : Flock)();
          this._isReverse = false; //this._marchOutPositions=null;
        }

        setReverse(b) {
          this._isReverse = b;
        }
        /*
         *json:有json產生的路徑就會塞陣列,沒有則是null
         * FlockInfo反正你自定義自己在這裏面搞定..自己銷毀
         *
        */


        setPath(f) {
          //--這邊改成直接產生路徑(因為jsondata會先set好)
          this._flockInfo = f;
        } //---重新加回群聚核心裡面(20230712取消群聚)


        addPath(u) {} //---產生路徑override this~flock在這邊自己產生搞定^_<


        setFlock() {//---當然你也可以在裡面自定義多組的flock(flock在裡面產生)
          //---一種群聚產生一個flock..在特殊魚群當中,有可能存在1個以上的flock
        }
        /**
         *
         * @param o {aryFish:flockingCore.FlockUnit}[該表演的魚群數量]
         *  @param t 時間
         * @param fishType 魚隻的呈現形式("2D" / "3D")
         * @param transforme 魚隻的變形比例
         */
        //public injectUnitInFlocks(o:{aryFish:flockingCore.FlockUnit[]}[],t:number,fishType:string,transforme:number):void


        injectUnitInFlocks(o, t, fishType, transforme) {
          this._fishTypeState = fishType;
          this._transforme = transforme;
          /*
          if (this._jsonPathTarget["summon"]) //招喚用
          {
              var count:number = Math.floor(this._flockInfo.modifyCurve.length / 4);
              var tempArray = this._flockInfo.modifyCurve.splice(count,this._flockInfo.modifyCurve.length - count);
              this._flockInfo.modifyCurve = tempArray.concat(this._flockInfo.modifyCurve);
          }*/
          //log('injectUnitInFlocks',t);

          this.setFlockUnits(o);
          this.behaviorScript(t);
        }

        reSetAllFlockUnits(o, t) {
          //log("reSetAllFlockUnits*****",o,t);
          this._flock.removeAllFlockUnit(); //---clean


          this.setFlockUnits(o);
          this.behaviorScript(t);
        }

        setFlockUnits(o) {
          var flockUnit;
          var len = o.length;

          for (var i = 0; i < len; i++) {
            flockUnit = o[i];
            flockUnit.isReverse = this._isReverse;
            flockUnit.positions = this._flockInfo;

            this._flock.pushFlockUnit(flockUnit);
          } //log('setFlockUnits_checkUnits',this._flock.getUnits());

        } //----override this---需要回傳flock裡面的flockunit的當前數量


        removeSingleUnit(u) {
          var n = this._flock.removeFlockUnit(u);

          return n; //return 0;
        } //----移除該路徑(remove flockunits)


        cleanAll() {
          //---全部移除
          this._flock.removeAllFlockUnit();
        }

        beforeRemoveToClean() {
          this._flock = null;
          this._jsonPathTarget = null;
          this._flockInfo = null; //this._marchOutPositions=null;
        } //---行為腳本


        behaviorScript(t) {
          //log("TTTTTT>>>"+t);
          this._flock.update(t);
        }

        updatePathAction(t) {
          this.behaviorScript(t);
        }

        exitAllPath() {
          var pathFlockUnits = this._flock.getUnits();

          this.exitPath(pathFlockUnits);
          /*
          let len:number=pathFlockUnits.length;
          for(let i:number=0;i<len;i++)
          {
           }
          */
        } //---退場要把魚群灌進來


        exitPath(f) {
          //---退場完成移除送REMOVED事件出來
          //this.dispatchEvent(new PathCenter.PathEvent(PathCenter.PathEvent.PATH_REMOVED));
          var len = f.length; //let random:number=0;
          //let vx:number=0;
          //let vy:number=0;

          for (var i = 0; i < len; i++) {
            //random= Math.PI + Math.random() * (Math.PI / 3);
            //vx = Math.cos(random) * 20;
            //vy = Math.sin(random) * 20;
            //f[i].goAway(5, {x:vx, y:vy, z:0});
            f[i].goAway(5);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d8b8a1c266debe5e42ba4699364da3e81a5c7a12.js.map