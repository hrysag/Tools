System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, GameStepDelayTimeList1016_List;

  function _reportPossibleCrUseOfIGameStepDelayTimeList(extras) {
    _reporterNs.report("IGameStepDelayTimeList", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIOtherDelayMap(extras) {
    _reporterNs.report("IOtherDelayMap", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelayLevel(extras) {
    _reporterNs.report("DelayLevel", "../ReferencePath", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "95fb6RE7tlEdZ/4BfkkhDbP", "GameStepDelayTimeList1016", undefined); //--有用到再陸續補上時間


      //--可以直接擴充動態屬性
      //export const GameStepDelayTimeList1016_List: IGameStepDelayTimeListExt = {
      //export const GameStepDelayTimeList1016_List: IGameStepDelayTimeList = {
      _export("GameStepDelayTimeList1016_List", GameStepDelayTimeList1016_List = {
        regular: {
          roll: {
            //moveInterval: 0.0375,//--目前OK的- 20260202
            moveInterval: 0.053,
            //-+0.0155(總時間多0.2)
            //-看輸出資料誤差有0.1+第一軸多了0.2秒=0.3(補時間)
            //totalRoll: 0.7-0.01,
            totalRoll: 0.7,
            //--扣掉第一張牌會是0.2秒的誤差
            //totalRoll: 0.7 - 0.4,//--扣掉第一張牌會是0.2秒的誤差
            //totalRoll: 2,
            staggerRoll: 0,
            //--每軸起動的錯開時間(軸與軸之間的錯開delay時間)
            superMoveInterval: 0.016
          },
          stop: {
            //perReel: 0.2,//--停轉前的準備時間(這是給動畫/音效用的準備時間);
            //staggerStop: 0.2,//--每軸停輪錯開時間(軸與軸之間的錯開delay時間)
            //staggerStop: 0.2,//--每軸停輪錯開時間(軸與軸之間的錯開delay時間)
            staggerStop: 0.2,
            //--每軸停輪錯開時間(軸與軸之間的錯開delay時間)
            earlyStop: 0.4,

            /**
             * <全部軸停好後,到開始秀的等待時間>
             * 0.1是為了應付快速模式下的需求
             * 快速模式下要在停輪後0.1秒內接上
             * 其餘則在0.3秒接上.用beforeWait?: Ms;//--wild秀前的等待時間來補上中間的時間差
             */
            afterAllStop: 0 //--全部軸停好後,到開始秀的等待時間
            //fastStopExtra: 0.3//--快速停軸時,額外減少的時間

          },
          forecast: {
            eachReel: 2 //--每個預報軸的時間

          },
          Jackpot: {
            beforeOpenWait: 0.3,
            //--開始前的等待時間beforeOpenWait
            beforeWait: 1,
            //--(FG之外使用)彩金秀前的等待時間(得分後接大獎用的)
            interruptTime: 0.4,
            //--可中斷的時間點
            interruptEndTime: 0.3,
            //--中斷後移動到的時間點
            fastLoopDuration: 0.5,
            runDuration: 4.8,
            //--秀彩金的時間(背景音樂6S,但大約在5S就差不多了)
            loopDuration: 2 //--loop時間(背景音樂6S,但大約在5S就差不多了)

          },
          respin: {
            //openBoard: 0.8,//--開啟RS面板時間
            beforeBoardWait: 0.3,
            //--開啟RS面版前的等待時間
            duringBoard: 2.5 //--RS面板持續時間(美術動畫是做2秒)--這裡企劃說要1秒我也沒轍
            //showRSTimes: 0.8,//--顯示RS次數時間
            //closeBoard: 0.8//--關閉RS面板時間

          },
          fg: {
            beforeWait: 0.3,
            //--開始前的等待時間--scatter拿去用了
            beforeOpenWait: 1,
            //--公版規範
            openBoard: 0.75,
            //--開啟FG面板時間(動畫=0.75s)
            duringBoardIn: 5,
            //--FG面板持續時間(2s)--動畫0.75S
            duringBoardOut: 5,
            //--FG面板持續時間(2s)--動畫1.5S
            showFgTimes: 0.6,
            //--顯示FG次數時間--FG當中局內加局使用
            closeBoard: 0.6 //--關閉FG面板時間(動畫=0.6s) 

            /**
             *  openBoard: 0.25,//--開啟FG面板時間(動畫=0.75s)
                duringBoard: 0.5,//--FG面板持續時間(2s)
                showFgTimes: 0.3,//--顯示FG次數時間
                closeBoard: 0.25//--關閉FG面板時間(動畫=0.6s) 
             */

          },
          score: {
            in: 0.2 - 0.02,
            //--得分進場時間
            out: 0.2 - 0.02,
            //--得分退場時間
            loop: 0.3 - 0.02,
            //--得分顯示loop時間
            fastLoop: 0.1 //--快速得分顯示loop時間

          },
          //--誤差時間0.1秒在這邊補回去
          result: {
            interruptTime: 0.3,
            //--可中斷的時間點
            interruptEndTime: 0,
            //--中斷後移動到的時間點
            beforeShowWin: 0.3,
            //--秀得分前的等待時間(進入得分模式前的等待時間)
            afterShowAll: 0,
            //--第一次秀全部後進入輪播前
            showScoreAppear: 0.3 - 0.02,
            //--顯示得分出進場前等待時間
            eachWin: 0.2,
            //--每條線之間的間隔時間(輪播間格時間)
            noWinWait: 0,
            //--沒有得分的等待時間
            totalShowWin: 1,
            //--秀全部得分的時間
            beforeShowSequence: 2 //--秀輪播前的等待時間

          },
          round: {
            roundStep_NG_noWin: 0.2,
            //--局間停頓
            roundStep_NG_win: 0.3,
            //--局間停頓
            roundStep_NG_JP: 0.3,
            //--局間停頓
            roundStep_NG_wild: 0.3,
            //--局間停頓
            roundStep_RS_noWin: 0.3,
            //--局間停頓
            roundStep_RS_win: 0.3,
            //--局間停頓
            roundStep_RS_JP: 0.2,
            //--局間停頓
            roundStep_RS_wild: 0.2,
            //--局間停頓
            roundStep_FG_noWin: 0.2,
            //--局間停頓
            roundStep_FG_win: 0.3,
            //--局間停頓
            roundStep_FG_JP: 0.2,
            //--局間停頓
            roundStep_FG_wild: 0.2,
            //--局間停頓
            interRoundDelay_FG: 0.2,
            //--FG轉多久停止
            interRoundDelay_RS: 0.3,
            //--RS轉多久停止
            interRoundDelay_AUTO: 1 //--自動轉局間停頓(跟server要資料的間隔時間)

          },
          wild: {
            beforeWait: 0.3,
            //--wild秀前的等待時間(與afterAllStop相加=0.3秒)
            move: 1,
            //--wild移動時間--PS外面要再算逐軸delay的時間
            noMove: 0.5,
            //--wild不移動時間
            afterWildWait: 0,
            //--wild動作結束後的等待時間 
            //--動態新增屬性
            others: {
              beforeCountWait: 0.3 //--開始計數(RS/FG的次數)前的等待時間
              //afterWildWait_Ng: 0.2,//--NG局wild動作結束後的等待時間
              //move_Ng: 0.2,//--NG局wild移動時間

            }
          },
          other: {
            //--下面3個要在1秒內完成
            beforeParticleWait: 0,
            //--粒子特效出現前的等待時間
            particleTotalDuration: 0.3,
            //--粒子特效總時間(顯示次數用)
            openCountBoard: 0.4,
            //--開啟計數板時間
            countBoard: 0.3,
            //--計數板持續時間
            fg_particleTotalDuration: 0.2,
            fg_openCountBoard: 0.2,
            fg_countBoard: 0.2,
            beforeFirstFgRoundWait: 0.4 //--第一次進入FG局的等待時間(在第一輪FG開始前)

          }
        },
        fast_L1: {
          roll: {
            //moveInterval: 0.03,//--目前OK的20260202
            moveInterval: 0.06,
            //--+0.03(總時間多0.1)
            //totalRoll: 0.5-0.13,
            totalRoll: 0.5,
            //--扣掉第一張牌會是0.2秒的誤差
            staggerRoll: 0,
            //--每軸起動的錯開時間(軸與軸之間的錯開delay時間)
            superMoveInterval: 0.016
          },
          stop: {
            //perReel: 0.2,//--停轉前的準備時間(這是給動畫/音效用的準備時間);
            earlyStop: 0.4,
            staggerStop: 0,
            //<這邊要做fastStop>--每軸停輪錯開時間(軸與軸之間的錯開delay時間)--這邊要做fastStop
            afterAllStop: 0 //--全部軸停好後,到開始秀的等待時間
            //fastStopExtra: 0.3//--快速停軸時,額外減少的時間

          },
          forecast: {
            eachReel: 2 //--每個預報軸的時間

          },
          round: {
            roundStep_NG_noWin: 0.1,
            //--局間停頓
            roundStep_NG_win: 0.2,
            //--局間停頓
            roundStep_NG_JP: 0.2,
            //--局間停頓
            roundStep_NG_wild: 0.2,
            //--局間停頓
            roundStep_RS_noWin: 0.3,
            //--局間停頓
            roundStep_RS_win: 0.3,
            //--局間停頓
            roundStep_RS_JP: 0.1,
            //--局間停頓
            roundStep_RS_wild: 0.1,
            //--局間停頓
            roundStep_FG_noWin: 0.1,
            //--局間停頓
            roundStep_FG_win: 0.2,
            //--局間停頓
            roundStep_FG_JP: 0.2,
            //--局間停頓
            roundStep_FG_wild: 0.2,
            //--局間停頓
            interRoundDelay_FG: 0.2,
            //--FG轉多久停止
            interRoundDelay_RS: 0.3,
            //--RS轉多久停止
            interRoundDelay_AUTO: 1 //--自動轉局間停頓(跟server要資料的間隔時間)

          },
          score: {
            in: 0.1 - 0.02,
            //--得分進場時間
            out: 0.2 - 0.02,
            //--得分退場時間
            loop: 0.3 - 0.02,
            //--得分顯示loop時間
            fastLoop: 0.1 //--快速得分顯示loop時間

          },
          result: {
            interruptTime: 0.3,
            //--可中斷的時間點
            interruptEndTime: 0,
            //--中斷後移動到的時間點
            beforeShowWin: 0.2,
            //--秀得分前的等待時間(這邊跟afterAllStop相加=0.3秒)
            afterShowAll: 0,
            //--第一次秀全部後進入輪播前
            showScoreAppear: 0.3 - 0.02,
            //--顯示得分出進場前等待時間
            eachWin: 0.2,
            //--每條線之間的間隔時間(輪播間格時間)
            noWinWait: 0,
            //--沒有得分的等待時間
            totalShowWin: 1,
            //--秀全部得分的總時間
            beforeShowSequence: 2 //--秀輪播前的等待時間

          },
          wild: {
            beforeWait: 0.3,
            //--wild秀前的等待時間(與afterAllStop相加=0.1秒)
            move: 1,
            //--wild移動時間--PS外面要再算逐軸delay的時間
            noMove: 0.5,
            //--wild不移動時間
            afterWildWait: 0,
            //--wild動作結束後的等待時間 
            //-取消下面的設定,直接用regular的設定
            others: {
              beforeCountWait: 0.3 //--開始計數(RS/FG的次數)前的等待時間
              //afterWildWait_Ng: 0.2,//--NG局wild動作結束後的等待時間
              //move_Ng: 0.2,//--NG局wild移動時間

            }
          },
          Jackpot: {
            beforeOpenWait: 0.3,
            //--開始前的等待時間beforeOpenWait
            beforeWait: 1,
            //--(FG之外使用)彩金秀前的等待時間(得分後接大獎用的)
            interruptTime: 0.4,
            //--可中斷的時間點
            interruptEndTime: 0.3,
            //--中斷後移動到的時間點
            //runDuration: 4.8,//--秀彩金的時間(背景音樂6S,但大約在5S就差不多了)
            runDuration: 4.8,
            //--秀彩金的時間(背景音樂6S,但大約在5S就差不多了)
            loopDuration: 2,
            //--loop時間(背景音樂6S,但大約在5S就差不多了)
            fastLoopDuration: 0.5
          },
          fg: {
            beforeOpenWait: 1,
            //--公版規範
            beforeWait: 0.3,
            //--開始前的等待時間scatter拿去用了
            openBoard: 0.75,
            //--開啟FG面板時間(動畫=0.75s)
            duringBoardIn: 5,
            //--FG面板持續時間(2s)--動畫0.75S
            duringBoardOut: 5,
            //--FG面板持續時間(2s)--動畫1.5S
            //duringBoardIn: 0.75,//--FG面板持續時間(2s)--動畫0.75S
            //duringBoardOut: 1.5,//--FG面板持續時間(2s)--動畫1.5S
            showFgTimes: 0.6,
            //--顯示FG次數時間--FG當中局內加局使用
            closeBoard: 0.6 //--關閉FG面板時間(動畫=0.6s) 

          },
          respin: {
            //openBoard: 0.8,//--開啟RS面板時間
            beforeBoardWait: 0.3,
            //--開啟RS面版前的等待時間
            duringBoard: 2.5 //--RS面板持續時間(美術動畫是做2秒)
            //showRSTimes: 0.8,//--顯示RS次數時間
            //closeBoard: 0.8//--關閉RS面板時間

          },
          other: {
            //--下面3個要在1秒內完成
            beforeParticleWait: 0.3,
            //--粒子特效出現前的等待時間
            particleTotalDuration: 0.3,
            //--粒子特效總時間(顯示次數用)
            openCountBoard: 0.4,
            //--開啟計數板時間
            countBoard: 0.3,
            //--計數板持續時間
            fg_particleTotalDuration: 0.2,
            fg_openCountBoard: 0.2,
            fg_countBoard: 0.2,
            beforeFirstFgRoundWait: 0.4 //--第一次進入FG局的等待時間(在第一輪FG開始前)

            /**
             *   particleTotalDuration: 0.3,//--粒子特效總時間(顯示次數用)
                openCountBoard: 0.5,//--開啟計數板時間
                countBoard: 0.4,//--計數板持續時間
             */

          }
        },
        fast_L2: {
          roll: {
            //moveInterval: 0.016,//--目前OK的20260202
            moveInterval: 0.016,
            //--增加0.031(總時間多0.1)-0.3-需要全部0.4S
            //moveInterval: 0.047,//--增加0.031(總時間多0.1)-0.3-需要全部0.4S
            //moveInterval: 0.2,//--test--0204
            //superMoveInterval: 0.016,//--在接到server資料後直接要刷盤面
            //superMoveInterval: 0.01,
            //totalRoll: 0.018,//--正式
            totalRoll: 0.118,
            //--正式
            //totalRoll: 0.4,//--測試用
            //superMoveInterval: 0.005,
            //totalRoll: 0.005,
            staggerRoll: 0,
            //--每軸起動的錯開時間(軸與軸之間的錯開delay時間)
            superMoveInterval: 0.016
          },
          stop: {
            //perReel: 0.2,//--停轉前的準備時間(這是給動畫/音效用的準備時間);
            //earlyStop: 0,
            earlyStop: 0,
            staggerStop: 0,
            //<這邊要做fastStop>--每軸停輪錯開時間(軸與軸之間的錯開delay時間)--這邊要做fastStop
            afterAllStop: 0 //--全部軸停好後,到開始秀的等待時間
            //fastStopExtra: 0.3//--快速停軸時,額外減少的時間

          },
          forecast: {
            eachReel: 2 //--每個預報軸的時間

          },
          round: {
            roundStep_NG_noWin: 0.2,
            //--局間停頓
            roundStep_NG_win: 0.2,
            //--局間停頓
            roundStep_NG_JP: 0.1,
            //--局間停頓
            roundStep_NG_wild: 0.1,
            //--局間停頓
            roundStep_RS_noWin: 0.2,
            //--局間停頓
            roundStep_RS_win: 0.2,
            //--局間停頓
            roundStep_RS_JP: 0.1,
            //--局間停頓
            roundStep_RS_wild: 0.1,
            //--局間停頓
            roundStep_FG_noWin: 0.2,
            //--局間停頓
            roundStep_FG_win: 0.2,
            //--局間停頓
            roundStep_FG_JP: 0.1,
            //--局間停頓
            roundStep_FG_wild: 0.1,
            //--局間停頓
            interRoundDelay_FG: 0.1,
            //--FG轉多久停止
            interRoundDelay_RS: 0.1,
            //--RS轉多久停止
            interRoundDelay_AUTO: 1 //--自動轉局間停頓(跟server要資料的間隔時間)

          },
          //--要0.7秒內完成
          score: {
            in: 0.2 - 0.02,
            //--得分進場時間
            out: 0.2 - 0.02,
            //--得分退場時間
            loop: 0.3 - 0.02,
            //--得分顯示loop時間
            fastLoop: 0.1 //--快速得分顯示loop時間

          },
          //--誤差時間0.1秒在這邊補回去
          result: {
            interruptTime: 0.2,
            //--可中斷的時間點
            interruptEndTime: 0,
            //--中斷後移動到的時間點
            beforeShowWin: 0,
            //--秀得分前的等待時
            afterShowAll: 0,
            //--第一次秀全部後進入輪播前
            showScoreAppear: 0.1 - 0.02,
            //--顯示得分出進場前等待時間
            eachWin: 0.2,
            //--每條線之間的間隔時間(輪播間格時間)
            noWinWait: 0,
            //--沒有得分的等待時間
            totalShowWin: 0.7,
            //--秀全部得分的總時間--要改icon的變速度
            beforeShowSequence: 2 //--秀輪播前的等待時間

          },
          wild: {
            beforeWait: 0,
            //--wild秀前的等待時間
            move: 1,
            //--wild移動時間--PS外面要再算逐軸delay的時間
            noMove: 0.5,
            //--wild不移動時間
            afterWildWait: 0,
            //--wild動作結束後的等待時間 
            //-取消下面的設定,直接用regular的設定
            others: {
              beforeCountWait: 0 //--開始計數(RS/FG的次數)前的等待時間
              //afterWildWait_Ng: 0.2,//--NG局wild動作結束後的等待時間
              //move_Ng: 0.2,//--NG局wild移動時間

            }
          },
          Jackpot: {
            beforeOpenWait: 0.3,
            //--開始前的等待時間beforeOpenWait
            beforeWait: 1,
            //--(FG之外使用)彩金秀前的等待時間(得分後接大獎用的)
            interruptTime: 0.6,
            //--可中斷的時間點
            interruptEndTime: 0.6,
            //--中斷後移動到的時間點
            runDuration: 4.8,
            //--秀彩金的時間(背景音樂6S,但大約在5S就差不多了)
            loopDuration: 2,
            //--loop時間(背景音樂6S,但大約在5S就差不多了)
            fastLoopDuration: 0.5
          },
          fg: {
            beforeOpenWait: 1,
            //--公版規範
            beforeWait: 0.3,
            //--開始前的等待時間scatter動畫用的
            openBoard: 0.75,
            //--開啟FG面板時間(動畫=0.75s)
            duringBoardIn: 5,
            //--FG面板持續時間(2s)--動畫0.75S
            duringBoardOut: 5,
            //--FG面板持續時間(2s)--動畫1.5S
            //duringBoardIn: 0.75,//--FG面板持續時間(2s)--動畫0.75S
            //duringBoardOut: 1.5,//--FG面板持續時間(2s)--動畫1.5S
            showFgTimes: 0.6,
            //--顯示FG次數時間--FG當中局內加局使用
            closeBoard: 0.6 //--關閉FG面板時間(動畫=0.6s) 

          },
          respin: {
            //openBoard: 0.8,//--開啟RS面板時間
            beforeBoardWait: 0.1,
            //--開啟RS面版前的等待時間
            duringBoard: 2.5 //--RS面板持續時間(美術動畫是做2秒)
            //showRSTimes: 0.8,//--顯示RS次數時間
            //closeBoard: 0.8//--關閉RS面板時間

          },
          other: {
            //--下面3個要在1秒內完成
            beforeParticleWait: 0,
            //--粒子特效出現前的等待時間
            particleTotalDuration: 0.3,
            //--粒子特效總時間(顯示次數用)
            openCountBoard: 0.4,
            //--開啟計數板時間
            countBoard: 0.3,
            //--計數板持續時間
            fg_particleTotalDuration: 0.2,
            fg_openCountBoard: 0.2,
            fg_countBoard: 0.2,
            beforeFirstFgRoundWait: 0.4 //--第一次進入FG局的等待時間(在第一輪FG開始前)

            /**
             *   particleTotalDuration: 0.3,//--粒子特效總時間(顯示次數用)
                openCountBoard: 0.5,//--開啟計數板時間
                countBoard: 0.4,//--計數板持續時間
             */

          }
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a516330a196e2849e88135842f2d004e84b38d3.js.map