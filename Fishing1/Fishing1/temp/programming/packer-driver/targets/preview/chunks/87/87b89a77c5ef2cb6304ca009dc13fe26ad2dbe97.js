System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, log, PathFlockInfo, PathFlockUnit, Flock, _crd;

  _export({
    PathFlockInfo: void 0,
    PathFlockUnit: void 0,
    Flock: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae2fbrbYsBHwKWMQJTaPeCC", "BasePath", undefined);
      /**
       * Created by EricHuang on 2023/7/10.
       */


      __checkObsolete__(['Vec3']);

      //-flock裡面裝多個flockUnit
      //-flockunit裡面有設定的參數(這邊由路徑檔帶入)
      //-每次更新就是update當中flock持有的flockunit
      //-每個魚身上都會綁一個flockunit,
      //-所有的相關當前資料都透過flockunit去操作
      //-每條路徑會掛一個flock
      //--每次的異動都會針對flock,藉此針對裡面的flockunit做改變

      /**
       * flock,(當然也可以定義多個flock在一個flockunit裡面)
       * 就用push的方式把flock推進去
       * flock裡面有更新的函示(通過設定,可以調整flock裡面的參數)
       * 
       * 
       */
      __checkObsolete__(['log']);

      //--基本的路徑資料(類似之前的FlockInfo)
      _export("PathFlockInfo", PathFlockInfo = class PathFlockInfo {
        constructor() {
          this.position = void 0;
          this.time = void 0;
          //--甚麼時間點要走到這裡
          this.gloupId = void 0;
          //--哪個大群組的路徑標號
          this.id = void 0;
          //--在gloup裡面的單位編號 
          this.duringTime = void 0;
          this.init();
        }

        init() {
          this.position = {
            x: 0,
            y: 0,
            z: 0
          };
          this.time = 0;
          this.duringTime = 0;
        }

      }); //--運作路徑基礎資料(每一隻魚身上都有一個)


      _export("PathFlockUnit", PathFlockUnit = class PathFlockUnit {
        //--群聚在用的
        constructor() {
          //public updateTime:number;--做在flock裡面
          this.time = void 0;
          // 路徑函數上的時間參數(累加的參數)
          this.isDeath = void 0;
          this.velocity = void 0;
          //--速度
          //public acceleration:Vec3; // 加速度
          this.goAwayVelocity = void 0;
          //-離場速度
          this.isAway = void 0;
          //--是否離場
          this.goingAway = void 0;
          //--離場中
          this.fishID = void 0;
          //--使用該路徑的魚(單一識別碼)
          this.fishType = void 0;
          //---fish的編號(fishType)
          this.position = void 0;
          //-當下的路徑資料
          this.offset = void 0;
          //--偏移值
          //public updateTime:number;
          //public currentTime:number;//--目前累計的時間
          this.nowIndex = void 0;
          this.testDtime = void 0;
          this.isReverse = void 0;
          //--20231013
          this.speed = void 0;
          //--20240220;
          this._positions = void 0;
          //--放所有的該路徑資料(單一的路徑資料)
          this._goAwayTime = void 0;
          // 退場所花的時間
          this._pathTotalTime = void 0;
          // 路徑所花的時間
          this._positionsRepeatTimes = void 0;
          // 繞場幾圈
          this._secPerPathInterval = void 0;

          /*
          this.velocity={x:0,y:0,z:0};
          this.goAwayVelocity={x:0,y:0,z:0};
          this.position={x:0,y:0,z:0};
          this.offset={x:0,y:0,z:0};
          */
          //this.acceleration=new Vec3(0,0,0);
          this._positions = [];
          this.reset();
        }

        set pathTotalTime(value) {
          this._pathTotalTime = value;
          this.calculateSecPerPathInterval();
        }

        set positionsRepeatTimes(value) {
          if (value < 0) value = 0;
          this._positionsRepeatTimes = value;
          this.calculateSecPerPathInterval();
        }

        get pathTotalTime() {
          return this._pathTotalTime;
        }

        get positions() {
          return this._positions;
        }

        set positions(value) {
          //log('check_PathFlockUnit_isReverse',this.isReverse);
          this._positions = value; //--替換時間

          if (this.isReverse) {
            for (var j = 0; j < this._positions.length; j++) {
              if (j < this._positions.length - 1) {
                this._positions[j].time = this._positions[j + 1].time;
              } else {
                this._positions[j].time = 0;
              }
            }
          }

          var totalTime = 0;

          for (var i = 0; i < this._positions.length; i++) {
            //this._positions[i].duringTime=totalTime;
            this._positions[i].duringTime = totalTime; //totalTime+=this._positions[i].time;

            if (i != this._positions.length - 1) {
              /**--node路徑節點資料
               * {
              "x": 1865.27,
              "y": 621.64,
              "time": 0.77,
              "rotate": 0.65
              }
               duringtime=當前節點要移動到下一個節點的總時間
               最後一個如果是正向的路徑－沒有反轉的路徑．則不需要最後一個節點的時間
               */
              totalTime += this._positions[i].time;
            }
          }

          this._pathTotalTime = totalTime; //--不重複跑一次的情況下 

          log('pathFlockUnitSetPsoitions', this._positions, this._pathTotalTime);
          this.calculateSecPerPathInterval();
        }

        get positionsRepeatTimes() {
          return this._positionsRepeatTimes;
        }

        get secPerPathInterval() {
          return this._secPerPathInterval;
        }

        get goAwayTime() {
          return this._goAwayTime;
        }

        reset() {
          this._pathTotalTime = 0;
          this.time = 0;
          this.nowIndex = 0;
          this.isAway = false;
          this.isDeath = false;
          this.fishID = 0;
          this.fishType = 0;
          this.goingAway = false;
          this.velocity = {
            x: 0,
            y: 0,
            z: 0
          };
          this.isReverse = false; //this.acceleration.x=this.acceleration.y=this.acceleration.z=0;

          this.goAwayVelocity = {
            x: 0,
            y: 0,
            z: 0
          };
          this.position = {
            x: 0,
            y: 0,
            z: 0
          };
          this.offset = {
            x: 0,
            y: 0,
            z: 0
          };
          this._goAwayTime = 1; //--之前的設定檔都是2秒 

          this._positionsRepeatTimes = 1;
          this._secPerPathInterval = 0;
          this.speed = 1; //this.currentTime=0;
          //this.updateTime=0;
        }

        goAway(time) {
          this._goAwayTime = time;
          this.calculateSecPerPathInterval();
          this.speed = 2.5;
          this.time = this.pathTotalTime - this._goAwayTime;
        } //--PS-這個是在算法向量的(群聚在用的)


        getPathPositionByIndex(index) {
          index = index % this._positions.length;
          var lastindex = index - 1;
          var v;

          if (lastindex < 0) {
            //v = {x:-(this._positions[1].y - this._positions[0].y), y:this._positions[1].x - this._positions[0].x, z:0};
            v = new Vec3(-(this._positions[1].position.y - this._positions[0].position.y), this._positions[1].position.x - this._positions[0].position.x, 0);
          } else if (lastindex > this._positions.length - 1) {
            //v = {x:-(this._positions[this._positions.length - 1].y - this._positions[this._positions.length - 2].y), y:this._positions[this._positions.length - 1].x - this._positions[this._positions.length - 2].x, z:0};
            v = new Vec3(-(this._positions[this._positions.length - 1].position.y - this._positions[this._positions.length - 2].position.y), this._positions[this._positions.length - 1].position.x - this._positions[this._positions.length - 2].position.x, 0);
          } else {
            //v = {x:-(this._positions[index].y - this._positions[lastindex].y), y:this._positions[index].x - this._positions[lastindex].x, z:0};
            v = new Vec3(-(this._positions[index].position.y - this._positions[lastindex].position.y), this._positions[index].position.x - this._positions[lastindex].position.x, 0);
          }

          var vLength = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
          v.x = v.x / vLength;
          v.y = v.y / vLength;
          v.z = v.z / vLength; //return {x:this._positions[index].x + this.offset.x * v.x, y:this._positions[index].y + this.offset.y * v.y, z:this._positions[index].z + this.offset.z * v.z};

          return new Vec3(this._positions[index].position.x + this.offset.x * v.x, this._positions[index].position.y + this.offset.y * v.y, this._positions[index].position.z + this.offset.z * v.z);
        }

        set2DGoAwayProperties(time, bound) {
          this._goAwayTime = time;
          this.calculateSecPerPathInterval();

          if (this.velocity.x == 0 && this.velocity.y == 0) {
            this.velocity.x = 0.5 - Math.random();
            this.velocity.y = 0.5 - Math.random();
          }

          var xTimes = 0;

          if (this.velocity.x >= 0) {
            xTimes = (bound.width - this.position.x) / this.velocity.x;
          } else {
            xTimes = (bound.x - this.position.x) / this.velocity.x;
          }

          xTimes = Math.max(0, xTimes);
          var yTimes = 0;

          if (this.velocity.y >= 0) {
            yTimes = (bound.height - this.position.y) / this.velocity.y;
          } else {
            yTimes = (bound.y - this.position.y) / this.velocity.y;
          }

          yTimes = Math.max(0, yTimes);
          var times = Math.min(xTimes, yTimes);
          this.goAwayVelocity.x = this.velocity.x * times / time;
          this.goAwayVelocity.y = this.velocity.y * times / time;
        }

        updatePositions(updateTime) {
          var len = this._positions.length;

          if (this.time >= this._positions[this._positions.length - 2].duringTime) {
            this.nowIndex = this._positions.length - 1;
          } else {
            for (var i = 0; i < len; i++) {
              //addAllTime+=this._positions[i].time;
              //log('check_updatePositions',this.time ,this._positions[i].duringTime);
              //if(this.time < addAllTime)
              if (this.time < this._positions[i].duringTime) {
                this.nowIndex = i; //this.testDtime=this._pathTotalTime-addAllTime;

                break;
              } //pathIndex++;

            }
          }
        } //--群聚在用的~可以無視了


        calculateSecPerPathInterval() {
          return;
          var len = Math.floor(this._positions.length * this._positionsRepeatTimes);

          if (len > 1) {
            if (this._pathTotalTime < this._goAwayTime) {
              this._pathTotalTime = this._goAwayTime;
            }

            this._secPerPathInterval = (this._pathTotalTime - this._goAwayTime) / (len - 1);
          } else {
            this._secPerPathInterval = 0;
            this._pathTotalTime = this._goAwayTime;
          }
        }

      });

      _export("Flock", Flock = class Flock {
        //private _updateCount:number = 0; // update 累積次數
        constructor() {
          this.skipMotion = false;
          //  魚群離場將游到此 bound 外
          this._updateTime = 0;
          // 更新時間(單位:秒)
          this._units = void 0;
          this._units = []; //this._updateCount=0;

          this._updateTime = 0;
        }

        pushFlockUnit(flockUnit) {
          this._units.push(flockUnit);
        }

        getUnits() {
          return this._units;
        }

        removeFlockUnit(flockUnit) {
          var compareUnit;

          for (var i = 0; i < this._units.length; i++) {
            compareUnit = this._units[i];

            if (compareUnit == flockUnit) {
              this._units.splice(i, 1);

              break;
            }
          }

          if (this._units.length == 0) {
            this.reset();
          }

          return this._units.length;
        }

        removeAllFlockUnit() {
          this._units.length = 0;
          this.reset();
          return this._units.length;
        }

        reset() {
          this._updateTime = 0; //this._updateCount = 0;        
        }

        update(updateTime) {
          this._updateTime += updateTime;
          var flockUnit; //--強迫每次都以1/60的更新率更新
          //log('update_path',updateTime,this._updateTime);

          while (this._updateTime >= Flock.updateTimePerUpdate) {
            updateTime = Flock.updateTimePerUpdate;
            this._updateTime -= updateTime;

            if (this.skipMotion) {
              //--不做路徑的更新,就等著耗完時間離場
              for (var j = 0; j < this._units.length; j++) {
                flockUnit = this._units[j]; //--ps原先的speed他是基於毫秒再更新的,現在的更新單位是秒,所以除以1000

                flockUnit.time += updateTime * flockUnit.speed; //log('check_pathBoss',flockUnit.time);

                if (flockUnit.time >= flockUnit.pathTotalTime - flockUnit.goAwayTime && flockUnit.time < flockUnit.pathTotalTime) {
                  if (!flockUnit.goingAway) {
                    flockUnit.set2DGoAwayProperties(flockUnit.goAwayTime, Flock.bound);
                    flockUnit.goingAway = true;
                  }
                } else if (flockUnit.time >= flockUnit.pathTotalTime) {
                  if (!flockUnit.isAway) {
                    flockUnit.isAway = true;
                  }
                }
              } //-0.4666666666666666//-1.4499999999999997

            } else {
              //log('readyToUpdate@@_path');
              for (var i = 0; i < this._units.length; i++) {
                flockUnit = this._units[i]; //--ps原先的speed他是基於毫秒再更新的,現在的更新單位是秒,所以除以1000

                flockUnit.time += updateTime * flockUnit.speed; //log('pathUpdate_time_',flockUnit.time,'pathUpdate_pathTotalTime_',flockUnit.pathTotalTime);

                if (flockUnit.time >= 0
                /*&& flockUnit.time < flockUnit.pathTotalTime - flockUnit.goAwayTime*/
                ) {
                  flockUnit.updatePositions(updateTime); //flockUnit.time+=updateTime;

                  var p0Index = flockUnit.nowIndex == 0 ? 0 : flockUnit.nowIndex - 1;
                  var p1Index = flockUnit.nowIndex; //log('check_nowIndex',p0Index,p1Index);

                  if (p0Index != p1Index) {
                    var p0 = flockUnit.positions[p0Index].position;
                    var p1 = flockUnit.positions[p1Index].position;
                    flockUnit.velocity.x = p1.x - p0.x;
                    flockUnit.velocity.y = p1.y - p0.y;
                    flockUnit.velocity.z = 0; //--test-113008--len-43
                    //--路徑資料裡面的time是跟前一個還是下一個的時間差?
                    //--目前的時間-  目前的時間(flockUnit.time)-P0的time~一路累計(P0前面的時間都要加起來)/P0time~和p1的時間差(其實就是它資料上面的P1的時間)
                    //log('testPath>>',flockUnit.time,flockUnit.positions[p0Index].duringTime,flockUnit.positions[p0Index].time,((flockUnit.time-flockUnit.positions[p0Index].duringTime)/(flockUnit.positions[p0Index].time)));

                    var testX = p0.x + flockUnit.velocity.x * ((flockUnit.time - flockUnit.positions[p0Index].duringTime) / flockUnit.positions[p0Index].time);
                    var testY = p0.y + flockUnit.velocity.y * ((flockUnit.time - flockUnit.positions[p0Index].duringTime) / flockUnit.positions[p0Index].time); //--PS-要0-1之間的值(-0~-1也不行)--20231115

                    /*
                    if((flockUnit.time-flockUnit.positions[p0Index].duringTime)/(flockUnit.positions[p0Index].time)<-2)
                    {
                        log('checkTimeRatioPosition','nowIndex_',flockUnit.nowIndex,(flockUnit.time-flockUnit.positions[p0Index].duringTime)/(flockUnit.positions[p0Index].time));
                        log('@@@@check_ratio1',flockUnit.time-flockUnit.positions[p0Index].duringTime);
                        log('@@@@check_ratio1_flockUnittime',flockUnit.time);
                        log('@@@@check_ratio1_duringTime',flockUnit.positions[p0Index].duringTime);
                        log('@@@@check_ratio2_p0_time',flockUnit.positions[p0Index].time);
                        log('check_p0');
                    }else{
                         log('KKKcheckTimeRatioPosition','nowIndex_',flockUnit.nowIndex,(flockUnit.time-flockUnit.positions[p0Index].duringTime)/(flockUnit.positions[p0Index].time));
                        log('check_ratio1',flockUnit.time-flockUnit.positions[p0Index].duringTime);
                        log('check_ratio1_1_flockUnittime',flockUnit.time);
                        log('check_ratio1_2_duringTime',flockUnit.positions[p0Index].duringTime);
                        log('check_ratio2_p0_time',flockUnit.positions[p0Index].time);
                    }*/
                    //let testX:number=p0.x+flockUnit.velocity.x*((flockUnit.time-flockUnit.positions[p0Index].duringTime)/(flockUnit.positions[p1Index].time));
                    //let testY:number=p0.y+flockUnit.velocity.y*((flockUnit.time-flockUnit.positions[p0Index].duringTime)/(flockUnit.positions[p1Index].time));
                    //let testX:number=p0.x+flockUnit.velocity.x*((flockUnit.time-flockUnit.positions[p0Index].duringTime)/(flockUnit.positions[p0Index].time));
                    //let testY:number=p0.y+flockUnit.velocity.y*((flockUnit.time-flockUnit.positions[p0Index].duringTime)/(flockUnit.positions[p0Index].time));

                    var testZ = 0;
                    flockUnit.position.x = testX;
                    flockUnit.position.y = testY;
                    flockUnit.position.z = testZ; //log('check_flockunitPositions',flockUnit.position.x,flockUnit.position.y);
                  } else {
                    flockUnit.position.x = flockUnit.positions[p0Index].position.x;
                    flockUnit.position.y = flockUnit.positions[p0Index].position.y;
                    flockUnit.position.z = 0;
                  }

                  if (flockUnit.time > flockUnit.pathTotalTime) {
                    if (!flockUnit.isAway) {
                      flockUnit.isAway = true;
                    }
                  }
                } else if (flockUnit.time < 0) {
                  //--這段(或是這個判斷還有必要存在嗎?)
                  flockUnit.time += updateTime;
                } else if (flockUnit.time >= flockUnit.pathTotalTime - flockUnit.goAwayTime && flockUnit.time < flockUnit.pathTotalTime) {
                  if (!flockUnit.goingAway) {
                    flockUnit.set2DGoAwayProperties(flockUnit.goAwayTime, Flock.bound);
                    flockUnit.goingAway = true;
                  }

                  flockUnit.velocity.x = flockUnit.goAwayVelocity.x * updateTime;
                  flockUnit.velocity.y = flockUnit.goAwayVelocity.y * updateTime;
                  flockUnit.velocity.z = flockUnit.goAwayVelocity.z * updateTime;
                  flockUnit.position.x += flockUnit.velocity.x;
                  flockUnit.position.y += flockUnit.velocity.y;
                  flockUnit.position.z += flockUnit.velocity.z;
                } else if (flockUnit.time > flockUnit.pathTotalTime) {
                  if (!flockUnit.isAway) {
                    flockUnit.isAway = true;
                  }
                }
              }
            }
          }
        }

      });

      //每次更新的單位時間(單位:秒)--約16ms(60FPS的速率)
      Flock.updateTimePerUpdate = 1 / 60;
      Flock.bound = {
        x: 0,
        y: 0,
        width: 1,
        height: 1
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=87b89a77c5ef2cb6304ca009dc13fe26ad2dbe97.js.map