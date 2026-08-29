System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EventTarget, Vec3, PathActionBase, LoadingResManager, Flock, PathFlockInfo, CocosGameSetting, log, PathCenter, _crd;

  function _reportPossibleCrUseOfPathActionBase(extras) {
    _reporterNs.report("PathActionBase", "./PathActionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFlock(extras) {
    _reporterNs.report("Flock", "./basePath/BasePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPathFlockInfo(extras) {
    _reporterNs.report("PathFlockInfo", "./basePath/BasePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPathFlockUnit(extras) {
    _reporterNs.report("PathFlockUnit", "./basePath/BasePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosGameSetting(extras) {
    _reporterNs.report("CocosGameSetting", "../../../../framework/utils/CocosGameSetting", _context.meta, extras);
  }

  _export("PathCenter", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventTarget = _cc.EventTarget;
      Vec3 = _cc.Vec3;
      log = _cc.log;
    }, function (_unresolved_2) {
      PathActionBase = _unresolved_2.PathActionBase;
    }, function (_unresolved_3) {
      LoadingResManager = _unresolved_3.LoadingResManager;
    }, function (_unresolved_4) {
      Flock = _unresolved_4.Flock;
    }, function (_unresolved_5) {
      PathFlockInfo = _unresolved_5.PathFlockInfo;
    }, function (_unresolved_6) {
      CocosGameSetting = _unresolved_6.CocosGameSetting;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5897PfIDNEMKfzB55QC0Ps", "PathCenter", undefined);
      /**
       * Created by EricHuang on 2023/7/12.
       */


      __checkObsolete__(['EventTarget', 'path', 'Vec3']);

      __checkObsolete__(['JsonAsset']);

      //import { HFFishPath } from './testPath';
      __checkObsolete__(['log']);

      _export("PathCenter", PathCenter = class PathCenter extends EventTarget {
        //constructor(boundary:{x:number,y:number,w:number,h:number})
        constructor() {
          super(); //this._stageWH={w:boundary.w,h:boundary.h};

          this._aryPlayingPathAction = void 0;
          //private _countId:number;
          //private _stageWH:{w:number,h:number};//---座標轉換在路徑之外做
          //private _frustum:FrustumInfo;//---3d frustum
          //private _createFlockInfo:CreateFlockInfo;//----產生基本路徑
          //----2016/11/28--用來比對參照的
          //private _mapFlockInfoTarget:any;//---hasmap--預先創造的flockinfo
          //---2020-05-28
          this._hasMapPaths = void 0;
          //---server送進來的指定路徑包
          //private _pathIndex:string;//--每個專案都會變---這邊用來搜尋專案路徑(與一般基本路徑的差別)
          this.pathList = [];
          this.reversePath = [];
          (_crd && Flock === void 0 ? (_reportPossibleCrUseOfFlock({
            error: Error()
          }), Flock) : Flock).bound = {
            x: 0,
            y: 0,
            width: (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
              error: Error()
            }), CocosGameSetting) : CocosGameSetting).Game_Width,
            height: (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
              error: Error()
            }), CocosGameSetting) : CocosGameSetting).Game_Height
          };
          this._hasMapPaths = {};
          this._aryPlayingPathAction = []; //-groupPath--小隻魚

          /**
           * 20230925-以下呼叫兩次this.setPath,先關閉
           * 還沒處理完loadingmanager的問題
           */

          this.setPath((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getJsonData('pathCommon'), 100000, 13); //-middle--大隻魚

          this.setPath((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getJsonData('pathCommonMiddle'), 200000, 13); //--20231018-特殊路徑(召喚/boss)
          //log('check_pathSp',LoadingResManager.getInstance().getJsonData('pathCommonSp'));
          //--20231018-特殊路徑(召喚)

          this.setPath((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getJsonData('pathCommonSp'), 300000, 6); //--20231127-特殊路徑(boss)

          this.setPath((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getJsonData('pathCommonBoss'), 400000, 1);
          log('check_map', this._hasMapPaths); //this.testOldPath();
          //this.testPathPos();
        }

        testPathPos() {
          var count = [];

          for (var i in this._hasMapPaths) {
            var len = this._hasMapPaths[i].length;

            for (var j = 0; j < len; j++) {
              /*
              if(this._hasMapPaths[i][j].position.x<0 || this._hasMapPaths[i][j].position.y<0 || this._hasMapPaths[i][j].position.x>1920 || this._hasMapPaths[i][j].position.y>1080)
              {
                  if(j>1)
                  {
                      log('overPath_',i,'index_',j,'_data_',this._hasMapPaths[i][j].position);
                      
                      if(count[count.length-1]!=i)
                      {
                          count.push(i);
                      }
                  }
                  
              }*/
            }
          }

          log('total_overpath', count.length, count);
        } //--測試用~要刪掉

        /*
        private testOldPath():void
        {
            for (const groupmidkey of Object.keys(FBSFMMIDDLE_PATH)) {
                const group = FBSFMMIDDLE_PATH[parseInt(groupmidkey)];
                const groupID: number = group.type;
                let startPathID = (1 + groupID) * 1000 + 200000;
                log('startPathID',startPathID,'_groupID_',groupID);
                const paths = group.pathData;
                for (const pathkey of Object.keys(paths)) {
                    const path = paths[parseInt(pathkey)];
                    const nodeData = path.NodeData;
                    const pointList = [];
                    const reversepointList = [];
                    for (const nodeKey of Object.keys(nodeData)) {
                        const node = nodeData[parseInt(nodeKey)];
                        const point = {x : 0, y : 0, time : 0};
                        point.x = node.x;
                        point.y = node.y;
                        point.time = node.time * 1000;
                        pointList.push(point);
                         const point2 = {x : 0, y : 0, time : 0};
                        point2.x = node.x;
                        point2.y = node.y;
                        point2.time = node.time * 1000;
                        reversepointList.push(point2);
                    }
                     //this.pathList[startPathID] = new HFFishPath(pointList, false);
                    //this.reversePath[startPathID] = new HFFishPath(reversepointList, true);
                     this.pathList[startPathID] = pointList
                    this.reversePath[startPathID] =reversepointList;
                     startPathID++;
                }
            }
             log('check_path_testOld',this.pathList);
         }*/

        /**
         * 
         * @param pathId server 送進來的pathId
         * @param pathTokenID 自己創的單一識別碼的pathid
         * @param reverse 是否反轉路徑
         * @param gloupSN 群組路徑(目前沒有用到)
         */
        //--step1


        createPath(pathId, pathTokenID, reverse, gloupSN) {
          var pathGroup;
          var pathData = this.getPathData(pathId, reverse);
          log('check_createPath', pathData, pathId, pathTokenID, reverse, gloupSN);

          if (pathData) {
            var p = new (_crd && PathActionBase === void 0 ? (_reportPossibleCrUseOfPathActionBase({
              error: Error()
            }), PathActionBase) : PathActionBase)(pathTokenID);
            p.setReverse(reverse);
            p.setPath(pathData);
            p.setFlock(); //--沒再用20240403
            //--因為現在幾乎沒有使用群的關係,所以路徑群的ID幾乎用pathTokenID來儲存

            var gloupId = gloupSN ? gloupSN : pathTokenID;
            pathGroup = {
              id: gloupId,
              path: [p],
              bornTime: 0
            }; //pathGroup.path.push(p);

            this._aryPlayingPathAction.push(pathGroup);
          }
        }
        /**
         * 初始後啟動路徑
         * @param id 表演群單一識別id
         * @param ary PathFlockUnit[](通常一隻魚掛一個,但也可以是一群魚掛一個(但這是以群為單位,目前應該是移除該機制))
         * @param t 時間(單位-秒) 
         * @param fishType 魚的形式(2d/3d)
         * @param transforme 縮放的比例依據
         */
        //--step2


        setUnitInFlock(id, ary, t, fishType, transforme) {
          var a = this.getPlayingPathClass(id);
          log('setUnitInFlock', a);

          if (a) {
            a.injectUnitInFlocks(ary, t, fishType, transforme); //---送進去就啟動魚群
          }
        } //---新產生的表演群校正時間


        reSetNewFishBronTime(value) {
          var len = value.length;

          for (var i = 0; i < len; i++) {
            for (var j = 0; j < this._aryPlayingPathAction.length; j++) {
              if (this._aryPlayingPathAction[j].id == value[i].pathTokenID) {
                var lenPath = this._aryPlayingPathAction[i].path.length;

                for (var k = 0; k < lenPath; k++) {
                  this._aryPlayingPathAction[j].path[k].reSetAllFlockUnits([value[i].flockUnit], value[i].reNewBornTime);
                }
              }
            }
          }
        } //---因網頁凍結重設路徑位置與時


        reSetPathTime(fishInfo, groupPath) {} //--秒為單位


        updataPath(t) {
          var len = this._aryPlayingPathAction.length;

          if (len > 0) {
            var lenPath;

            for (var i = 0; i < len; i++) {
              lenPath = this._aryPlayingPathAction[i].path.length;

              for (var j = 0; j < lenPath; j++) {
                this._aryPlayingPathAction[i].path[j].updatePathAction(t);
              }
            }
          }
        }
        /**
         * ps-這是刪除表演群裡面的一個路徑
         * @param pathId  單一識別碼
         * @param flockunit 魚隻本身的flock參照
         * @returns 在表演群中flock當下的flockunit總量
         */


        removeSingleUnit(pathId, flockunit) {
          var a = this.getPlayingPathClass(pathId);

          if (a) {
            var len = a.removeSingleUnit(flockunit);
            return len;
          } else {
            return -1;
          }
        }
        /**
         * 在尚未發生退場時,移除該路徑(這是刪除整個路徑)
         * @param pathId 單一識別碼
         */


        removeAllPath(pathId) {
          var a = this.getPlayingPathClass(pathId);

          if (a) {
            a.cleanAll();
          }
        } //--直接將整個表演群剃除更新序列


        deleteGroupPath(pathId) {
          var len = this._aryPlayingPathAction.length;

          for (var i = 0; i < len; i++) {
            if (this._aryPlayingPathAction[i].id == pathId) {
              var pathLen = this._aryPlayingPathAction[i].path.length;

              for (var j = 0; j < pathLen; j++) {
                this._aryPlayingPathAction[i].path[j].beforeRemoveToClean();
              }

              this._aryPlayingPathAction.splice(i, 1); //log('removeFishGroupPath_',pathId,'\n'+'paths',this._aryPlayingPathAction,'\n'+'len',this._aryPlayingPathAction.length);


              break;
            }
          }
        }
        /**
         * 單一表演路徑退場
         * @param pathId 表演系統單一識別碼
         * @param f PathFlockUnit
         */


        exitPath(pathId, f) {
          var a = this.getPlayingPathClass(pathId);

          if (a) {
            a.exitPath(f);
          }
        } //--全部表演路徑退場


        exitAllPath() {
          for (var i = 0; i < this._aryPlayingPathAction.length; i++) {
            var a = this.getPlayingPathClass(this._aryPlayingPathAction[i].id);

            if (a) {
              a.exitAllPath();
            }
          }
        } //-單一表演群離場(要思考一下,因為現在沒有群了)


        exitSingleGloupPath(groupId, obj) //public exitSingleGloupPath(pathId:string):void
        {
          var len = this._aryPlayingPathAction.length;

          for (var i = 0; i < len; i++) {
            if (this._aryPlayingPathAction[i].id == groupId) {
              var pathLen = this._aryPlayingPathAction[i].path.length;
              var groupdataLen = obj.length;

              for (var k = 0; k < groupdataLen; k++) {
                for (var p = 0; p < pathLen; p++) {
                  if (this._aryPlayingPathAction[i].path[p].tokenID == obj[k].pathId) {
                    //log("get_groupExit");
                    this._aryPlayingPathAction[i].path[p].exitPath([obj[k].f]);

                    break;
                  }
                }
              }

              break;
            }
          }
          /*
          for(let i:number=0;i<this._aryPlayingPathAction.length;i++)
          {
              if(this._aryPlayingPathAction[i].id==pathId)
              {
                  let a:PathActionBase;
                  for(let j:number=0;j<this._aryPlayingPathAction[i].path.length;j++)
                  {
                     a=this._aryPlayingPathAction[i].path[j];
                     a.exitAllPath();
                  } 
              }
          }*/

        }
        /**
         * 
         * @param jsonData jsondata
         * @param newIndex 路徑編碼的類群(base-100000/midele-200000/sp-300000)
         * @param len 要抽取的數量
         */


        setPath(jsonData, newIndex, len) {
          //let jsonDatas=LoadManager.getInstance().getJsonData('pathCommonMiddle');
          var jsonDatas = jsonData; //let keys:string=['type1'];

          log('check_JsonDatas', jsonDatas);
          var maxLen = len;
          var key;
          var data;
          var paths;
          var pd;
          var d;
          var pathIdKey = 0;

          for (var i = 0; i < maxLen; i++) {
            key = 'type' + i + '.json';
            data = jsonDatas[key]; //--sp path是3000開頭的編號(所以加300000)
            //--midele path 是2000開頭的編號(所以加200000)
            //--base path是1000開頭的編號(所以加100000)

            pathIdKey = (1 + data.type) * 1000 + newIndex;

            for (var j = 0; j < data.pathData.length; j++) {
              paths = [];

              for (var k = 0; k < data.pathData[j].NodeData.length; k++) {
                d = data.pathData[j].NodeData[k];
                pd = new (_crd && PathFlockInfo === void 0 ? (_reportPossibleCrUseOfPathFlockInfo({
                  error: Error()
                }), PathFlockInfo) : PathFlockInfo)();
                pd.position = new Vec3(d.x, d.y, 0);
                pd.time = d.time;
                pd.gloupId = key;
                pd.id = data.type;
                paths.push(pd);
              } //log('index_',pathIdKey+j,'check_node_len:',data.type,data.pathData[j].NodeData.length);


              this._hasMapPaths[pathIdKey + j] = paths;
            }
          }
        } //--取得該路徑的名稱


        getPathData(id, reverse) {
          var r = this._hasMapPaths[id];

          if (r) {
            r = JSON.parse(JSON.stringify(r)); //-deep clone objects

            if (reverse) {
              r = r.reverse();
            }
          }

          return r;
        }
        /**
         * 
         * @param id 單一識別碼
         * @returns PathActionBase
         */


        getPlayingPathClass(id) {
          var t = null;
          var len = this._aryPlayingPathAction.length; //-{id:string,path:PathActionBase[],bornTime:number}

          for (var i = 0; i < len; i++) {
            if (this._aryPlayingPathAction[i].id == id) {
              var aryPaths = this._aryPlayingPathAction[i].path;

              for (var j = 0; j < aryPaths.length; j++) {
                if (aryPaths[j].tokenID == id) {
                  t = aryPaths[j];
                  break;
                }
              }
            }

            if (t != null) {
              break;
            }
          }

          return t;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=35aff65d5ce4a9b7c1f5f3c860eb2b743971c019.js.map