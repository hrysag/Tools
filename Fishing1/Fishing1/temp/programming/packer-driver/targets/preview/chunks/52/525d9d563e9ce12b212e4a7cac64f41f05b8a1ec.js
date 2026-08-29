System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FishViewBase, log, FishView, _crd;

  function _reportPossibleCrUseOfFishViewBase(extras) {
    _reporterNs.report("FishViewBase", "../../../game/views/fishViewBase/FishViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishData(extras) {
    _reporterNs.report("FishData", "./FishData", _context.meta, extras);
  }

  _export("FishView", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      FishViewBase = _unresolved_2.FishViewBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b8de6z+EdLFYPlBch/LmYT", "FishView", undefined);
      /**
       * Created by EricHuang on 2023/9/20.
       * 抽象類別,讓使用者繼承來擴展
       */


      __checkObsolete__(['Node']);

      //export abstract class FishView <TFishData extends FishData>extends FishViewBase{ 
      __checkObsolete__(['log']);

      _export("FishView", FishView = class FishView extends (_crd && FishViewBase === void 0 ? (_reportPossibleCrUseOfFishViewBase({
        error: Error()
      }), FishViewBase) : FishViewBase) {
        //--被鎖定的魚
        constructor() {
          super();
          this._aryFishData = void 0;
          this._poolFishData = void 0;
          //--objPool
          this._fishContainer = void 0;
          this._fishShadowContainer = void 0;
          this._fishAimContainer = void 0;
          this._lockFish = void 0;
          this._classId = 'FishView';
        } //===================about fish===================================================================================================
        //--秀出禁止打擊的符號在魚身上
        //--持續改變顯示魚的賠率 


        init() {
          //拿魚種的設定資料
          this.fishTypeKeyMap = this._viewModel['_fishTypeKeyMap'];
          this.fishTypeSpeedMap = this._viewModel['_fishTypeSpeedMap']; //拿賠率表(這邊是要clone出來的資料)

          this.oddsList = this._viewModel['_aryOddsInfo'];
          this._poolFishData = [];
          this._aryFishData = [];
          log('check_fishData_init', this._fishTypeSpeedMap, this._fishTypeKeyMap, this._oddsList);
        } //--假死狀態
        //---魚隻假死(不受碰撞/打擊/更新/路徑)影響.但存在場上..


        setFishisDead(id) {
          for (var i = 0; i < this._aryFishData.length; i++) {
            if (this._aryFishData[i].id == id) {
              this._aryFishData[i].isDead = true;
              this._aryFishData[i].countHitAni = 0;
              this.hitFishAniComplete(this._aryFishData[i]);
              break;
            }
          }
        } //-----禁止打擊某種type的魚隻


        prohibitFish(type) {
          for (var i = 0; i < this._aryFishData.length; i++) {
            if (this._aryFishData[i].fishType == type) {
              this._aryFishData[i].prohibit = true;
              this.displayProhibitSign(this._aryFishData[i]);
              /*   
              if(this._aryFishData[i].fishMesh.constructor==FishCenter.FishCustomAnimation)
              {
                  (<FishCenter.FishCustomAnimation>this._aryFishData[i].fishMesh).stopShooting();
               }else{
                      
                  this._aryFishData[i].stopShooting();
              }*/
            }
          }
        } //-----解鎖某種類型的魚隻


        unProhibitFish(type) {
          for (var i = 0; i < this._aryFishData.length; i++) {
            if (this._aryFishData[i].fishType == type) {
              this._aryFishData[i].prohibit = false;
              this.unDisplayProhibitSign(this._aryFishData[i]);
            }
          }
        }

        getFishTypeById(id) {
          var returnType = -1;
          var fd = this.getFishById(id);

          if (fd != null) {
            returnType = fd.fishType;
          }

          return returnType;
        }

        getFishById(id) {
          var len = this._aryFishData.length;
          var f = null;

          for (var i = 0; i < len; i++) {
            if (this._aryFishData[i].id == id) {
              f = this._aryFishData[i];
              break;
            }
          }

          return f;
        }

        getSchoolOfFishByType(type) {
          var len = this._aryFishData.length;
          var schoolOfFish = [];

          for (var i = 0; i < len; i++) {
            if (this._aryFishData[i].fishType == type) {
              schoolOfFish.push(this._aryFishData[i]);
            }
          }

          return schoolOfFish;
        }

        getFishAndIndexbyId(id) {
          var fd = {
            f: null,
            index: -1
          };

          for (var i = 0; i < this._aryFishData.length; i++) {
            if (this._aryFishData[i].id == id) {
              fd.f = this._aryFishData[i];
              fd.index = i;
              break;
            }
          }

          return fd;
        }

        getOddsByFishType(type) {
          var r = '';
          var len = this._oddsList.length;

          for (var i = 0; i < len; i++) {
            if (this._oddsList[i].id == type) {
              r = this._oddsList[i].odds;
              break;
            }
          }

          return r;
        } //===================about path===================================================================================================
        //---新產生的表演群校正時間(送進時間(秒)..重新校正)
        //abstract reSetFishBronTime(value:any[]):void

        /**
         * 魚群表演系統全部退場
         */


        /**
         * 
         * @param groupId 目前把pathID放在fd.groupID裡面(fd.pathID他是pathid+'_'+Date.now)
         */

        /*
        public exitSingleGloupPath(groupId:string):void
        {
            let  len:number=this._aryFishData.length;
             let aryExit:{f:PathFlockUnit,pathId:string}[]=[];
             for(let i:number=0;i<len;i++)
            {
                if(this._aryFishData[i].pathGroupID==groupId)
                {
                    //--fishFlockUnit:PathFlockUnit;
                    aryExit.push({f:this._aryFishData[i].fishFlockUnit,pathId:this._aryFishData[i].pathID});
                }
            }
            
            this._pathCenter.exitSingleGloupPath(groupId,aryExit);
         }*/
        //---將魚隻剃除在運動路徑之外

        /*
        public removeSinglePathUnitByFishId(fishId:number):void
        {
            //-this._pathCenter.createPath(unit[3],fd.pathID,unit[4]);
            let len:number=this._aryFishData.length;
             let fishPathLen:number=-1;
             for(let i:number=0;i<len;i++)
            {
                if(this._aryFishData[i].id==fishId)
                {
                    
                    fishPathLen=this._pathCenter.removeSingleUnit(this._aryFishData[i].pathID,this._aryFishData[i].fishFlockUnit);
                    
                    if(fishPathLen==0)
                    {
                        log('removeGroup!!!!!');
                        this._pathCenter.deleteGroupPath(this._aryFishData[i].pathID);
                        //--該表演群裏頭的魚隻都被移除
                    } 
                     break;
                }
            }
         }*/

        /**
         * 單一表演群路徑退場(移除單一路徑)
         * @param id 表演路徑單一識別碼
         */

        /*
        public exitSinglePathByPathId(id:string):void
        {
        
            let len:number=this._aryFishData.length;
             let aryFlockUnit:PathFlockUnit[]=[];
             for(let i:number=0;i<len;i++)
            {
                if(this._aryFishData[i].pathID==id)
                {
                    aryFlockUnit.push(this._aryFishData[i].fishFlockUnit);
                }
            }
             this._pathCenter.exitPath(id,aryFlockUnit);
        }*/
        //===================hit fish animation===================================================================================================
        changeFishesAnimation(value) {
          var len = value.length;

          for (var i = 0; i < len; i++) {
            this.changeSingleFishAnimation(value[i]);
          }
        } //---擊中動畫效果
        //===================aim target===================================================================================================
        //abstract removeFishAimLock(fishId:number,table:number):void
        //===================sp function of fish===================================================================================================


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=525d9d563e9ce12b212e4a7cac64f41f05b8a1ec.js.map