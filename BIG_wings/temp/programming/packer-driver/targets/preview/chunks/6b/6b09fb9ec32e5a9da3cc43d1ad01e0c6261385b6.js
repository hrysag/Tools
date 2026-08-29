System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Animation, EventHandler, Button, tween, Vec3, sp, Label, Tween, UIOpacity, Prefab, UITransform, Sprite, poolHandler, demoInfo_TA, symbolResource_TA, symbolSetting_TA, symbolSet_TA, symbolWin_TA, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _crd, ccclass, property, mahjong_TA;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfpoolHandler(extras) {
    _reporterNs.report("poolHandler", "../../../common/script/poolHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdemoInfo_TA(extras) {
    _reporterNs.report("demoInfo_TA", "./demoInfo_TA", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsymbolResource_TA(extras) {
    _reporterNs.report("symbolResource_TA", "./symbolResource_TA", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsymbolSetting_TA(extras) {
    _reporterNs.report("symbolSetting_TA", "./symbolSetting_TA", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsymbolSet_TA(extras) {
    _reporterNs.report("symbolSet_TA", "./symbolSet_TA", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsymbolWin_TA(extras) {
    _reporterNs.report("symbolWin_TA", "./symbolWin_TA", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Animation = _cc.Animation;
      EventHandler = _cc.EventHandler;
      Button = _cc.Button;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      sp = _cc.sp;
      Label = _cc.Label;
      Tween = _cc.Tween;
      UIOpacity = _cc.UIOpacity;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      poolHandler = _unresolved_2.default;
    }, function (_unresolved_3) {
      demoInfo_TA = _unresolved_3.demoInfo_TA;
    }, function (_unresolved_4) {
      symbolResource_TA = _unresolved_4.symbolResource_TA;
    }, function (_unresolved_5) {
      symbolSetting_TA = _unresolved_5.symbolSetting_TA;
    }, function (_unresolved_6) {
      symbolSet_TA = _unresolved_6.symbolSet_TA;
    }, function (_unresolved_7) {
      symbolWin_TA = _unresolved_7.symbolWin_TA;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6f157jD1olOQJjqaz8mM0EF", "mahjong_TA", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation', 'EventHandler', 'Button', 'tween', 'Vec3', 'Toggle', 'sp', 'Label', 'Tween', 'UIOpacity', 'Prefab', 'UITransform', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mahjong_TA", mahjong_TA = (_dec = ccclass('mahjong_TA'), _dec2 = property({
        type: Node,
        tooltip: "spin按鈕"
      }), _dec3 = property({
        type: Node,
        tooltip: "stop按鈕"
      }), _dec4 = property({
        type: Node,
        tooltip: "自動按鈕停止"
      }), _dec5 = property({
        type: Node,
        tooltip: "閃電按鈕(關閉狀態)"
      }), _dec6 = property({
        type: Node,
        tooltip: "閃電按鈕(開啟狀態)"
      }), _dec7 = property({
        type: Button,
        tooltip: "自動按鈕"
      }), _dec8 = property({
        type: Button,
        tooltip: "下注加分按鈕"
      }), _dec9 = property({
        type: Button,
        tooltip: "下注減分按鈕"
      }), _dec10 = property({
        type: Button,
        tooltip: "設置選單按鈕"
      }), _dec11 = property({
        type: Node,
        tooltip: "slot主界面"
      }), _dec12 = property({
        type: Node,
        tooltip: "symbol勝利動畫層"
      }), _dec13 = property({
        type: [Node],
        tooltip: "slot轉動層"
      }), _dec14 = property({
        type: Node,
        tooltip: "slot遮黑層"
      }), _dec15 = property({
        type: Node,
        tooltip: "slot聽牌層"
      }), _dec16 = property({
        type: Node,
        tooltip: "大獎跑分層"
      }), _dec17 = property({
        type: Node,
        tooltip: "free紀錄顯示"
      }), _dec18 = property({
        type: Node,
        tooltip: "花牌置牌區"
      }), _dec19 = property({
        type: Node,
        tooltip: "碰/槓/眼睛置牌區"
      }), _dec20 = property({
        type: Prefab,
        tooltip: "牌型prefab"
      }), _dec21 = property({
        type: [Node],
        tooltip: "牌型顯示(0=free，1=花，2=槓，3=碰，4=碰，5=碰)"
      }), _dec22 = property({
        type: Node,
        tooltip: "胡牌結算畫面"
      }), _dec23 = property({
        type: Node,
        tooltip: "胡牌結算得分顯示"
      }), _dec24 = property({
        type: Node,
        tooltip: "免費遊戲獲得"
      }), _dec25 = property({
        type: Node,
        tooltip: "免費遊戲結算"
      }), _dec26 = property({
        type: Node,
        tooltip: "免費遊戲上方背景圖"
      }), _dec27 = property({
        type: Node,
        tooltip: "免費遊戲剩餘次數介面"
      }), _dec28 = property({
        type: Label,
        tooltip: "玩家分數"
      }), _dec29 = property({
        type: Node,
        tooltip: "共贏得分數資訊"
      }), _dec30 = property({
        type: _crd && demoInfo_TA === void 0 ? (_reportPossibleCrUseOfdemoInfo_TA({
          error: Error()
        }), demoInfo_TA) : demoInfo_TA,
        tooltip: "demo內容腳本"
      }), _dec31 = property({
        type: _crd && symbolResource_TA === void 0 ? (_reportPossibleCrUseOfsymbolResource_TA({
          error: Error()
        }), symbolResource_TA) : symbolResource_TA,
        tooltip: "symbol資源"
      }), _dec(_class = (_class2 = class mahjong_TA extends Component {
        constructor() {
          super(...arguments);

          //按鈕相關
          _initializerDefineProperty(this, "btnSpin", _descriptor, this);

          _initializerDefineProperty(this, "btnStop", _descriptor2, this);

          _initializerDefineProperty(this, "btnAutoStop", _descriptor3, this);

          _initializerDefineProperty(this, "btnFastOff", _descriptor4, this);

          _initializerDefineProperty(this, "btnFastOn", _descriptor5, this);

          _initializerDefineProperty(this, "btnAuto", _descriptor6, this);

          _initializerDefineProperty(this, "betAdd", _descriptor7, this);

          _initializerDefineProperty(this, "betLess", _descriptor8, this);

          _initializerDefineProperty(this, "btnSetting", _descriptor9, this);

          //主要介面
          _initializerDefineProperty(this, "slotGameUI", _descriptor10, this);

          _initializerDefineProperty(this, "symbolWinLayer", _descriptor11, this);

          _initializerDefineProperty(this, "slotRun", _descriptor12, this);

          _initializerDefineProperty(this, "slotBlack", _descriptor13, this);

          _initializerDefineProperty(this, "slotListen", _descriptor14, this);

          _initializerDefineProperty(this, "bigWin", _descriptor15, this);

          _initializerDefineProperty(this, "freeGet", _descriptor16, this);

          _initializerDefineProperty(this, "flowerArea", _descriptor17, this);

          _initializerDefineProperty(this, "setArea", _descriptor18, this);

          _initializerDefineProperty(this, "symbolSet", _descriptor19, this);

          _initializerDefineProperty(this, "fontType", _descriptor20, this);

          //stateName對應typeState位置(表演資料對應用)
          this.stateNameID = {
            'free': 0,
            'flower': 1,
            'kong': 2,
            'pong': 3
          };

          // @property({ type: Node, tooltip: "聽牌金幣特效" })
          // private readyCoinFx: Node = null;
          _initializerDefineProperty(this, "result", _descriptor21, this);

          _initializerDefineProperty(this, "resultWinScore", _descriptor22, this);

          // @property({ type: Node, tooltip: "按鈕操作區" })
          // private controlBtns: Node = null;
          //免費遊戲相關介面
          _initializerDefineProperty(this, "freeGameGet", _descriptor23, this);

          _initializerDefineProperty(this, "totalWin", _descriptor24, this);

          _initializerDefineProperty(this, "freeTopBg", _descriptor25, this);

          _initializerDefineProperty(this, "freeGameTimes", _descriptor26, this);

          // @property({ type: Node, tooltip: "免費遊戲背景" })
          // private freeGameBg: Node = null;
          this.scatterSym = [];

          //中獎的free符號節點
          //分數相關
          _initializerDefineProperty(this, "userCashLabel", _descriptor27, this);

          // @property({ type: Label, tooltip: "玩家下注分數" })
          // private betScoreLabel: Label = null;
          // @property({ type: Node, tooltip: "贏得分數資訊" })
          // public winScoreInfo: Node = null;
          _initializerDefineProperty(this, "winTotalScoreInfo", _descriptor28, this);

          //時間參數
          this.slotRunSpeed = 0.4;
          //slot轉動速度時間
          this.scheduleStartTime = 0.1;
          //slot依序表演的間隔時間
          this.scheduleStopTime = 0.2;
          //依序停止的間隔時間
          this.fastStopTime = 0.6;
          //閃電模式，開始轉動後等待停止的時間
          this.stopTime = 1;
          //開始轉動後等待停止的時間
          // private lineTime: number = 2;//中獎表演停留時間(全線跟單線一致)
          this.listenTime = 2.5;
          //轉動聽牌時間
          this.dropListenTime = 1.5;
          //掉落聽牌時間
          this.runScoreTime = 10;
          //跑分時間(最多)
          //遊戲模式設置
          this.freeGameMode = false;
          //免費遊戲:一般模式
          this.autoGameMode = false;
          //自動遊戲模式狀態
          this.fastMode = false;
          //閃電模式狀態
          //其他
          // private symbolShark: boolean = false;//symbol抖動狀態
          this.userCash = 0;
          //玩家分數
          // private scoreWinNum: number = 0;//分數跑分分數
          this.autoGameRound = 0;
          //自動遊戲回合
          // private autoTimesSetting = [10, 30, 50, 80, 100];
          this.bigWinMultiple = [20, 40, 70, 100];
          //切換bigWin的分數倍率
          this.bigWinSpineAnimName = ['win', 'big_win', 'mega_win', 'super_win'];
          //bigWinSpine動態名稱
          this.myPool = new (_crd && poolHandler === void 0 ? (_reportPossibleCrUseOfpoolHandler({
            error: Error()
          }), poolHandler) : poolHandler)();
          //創建物件池
          this.symbolHeight = 260;
          //此款遊戲的symbol欄位高度
          this.stopSlot = [false, false, false, false, false];
          //每段slot停止狀態
          // private nowSlotNumber: number[] = [];//目前盤面的Symbol編號(25組)
          this.gameRound = 0;
          //紀錄遊戲目前demo回合(第0局開始)
          this.hideSlot = [0, 0, 0, 0, 0];

          //掉落前的各symbol隱藏數量(用來判斷該行是否判斷掉落跟聽牌)
          //腳本連結
          _initializerDefineProperty(this, "demoInfoTA", _descriptor29, this);

          _initializerDefineProperty(this, "symbolResourceTA", _descriptor30, this);
        }

        onLoad() {
          //按鈕觸發設置
          var thisScriptName = this.name.split('<')[1].split('>')[0]; //spin按鈕

          var spinBtnEventHandler = new EventHandler();
          spinBtnEventHandler.target = this.node;
          spinBtnEventHandler.component = thisScriptName;
          spinBtnEventHandler.handler = 'clickSpin';
          this.btnSpin.getComponent(Button).clickEvents.push(spinBtnEventHandler); //stop按鈕

          var stopBtnEventHandler = new EventHandler();
          stopBtnEventHandler.target = this.node;
          stopBtnEventHandler.component = thisScriptName;
          stopBtnEventHandler.handler = 'stopGameSlotRunNow';
          this.btnStop.getComponent(Button).clickEvents.push(stopBtnEventHandler); //fast按鈕(關閉)

          var fastBtnOffEventHandler = new EventHandler();
          fastBtnOffEventHandler.target = this.node;
          fastBtnOffEventHandler.component = thisScriptName;
          fastBtnOffEventHandler.handler = 'fastSlotOn';
          this.btnFastOff.getComponent(Button).clickEvents.push(fastBtnOffEventHandler); //fast按鈕(開啟)

          var fastBtnOnEventHandler = new EventHandler();
          fastBtnOnEventHandler.target = this.node;
          fastBtnOnEventHandler.component = thisScriptName;
          fastBtnOnEventHandler.handler = 'fastSlotOff';
          this.btnFastOn.getComponent(Button).clickEvents.push(fastBtnOnEventHandler); //停止自動遊戲按鈕

          var stopAutoBtnEventHandler = new EventHandler();
          stopAutoBtnEventHandler.target = this.node;
          stopAutoBtnEventHandler.component = thisScriptName;
          stopAutoBtnEventHandler.handler = 'stopAutoGame';
          this.btnAutoStop.getComponent(Button).clickEvents.push(stopAutoBtnEventHandler); //配置初始牌面

          var initSymbol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 43, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
          var slotLength = this.slotRun.length; //slot行數

          for (var i = 0; i < slotLength; i++) {
            for (var j = 0; j < 3; j++) {
              for (var k = 0; k < 5; k++) {
                var instsymbol = this.myPool.get(this.symbolResourceTA.symbolNode); //生成symbolNode物件池內容

                instsymbol.parent = this.slotRun[i].children[j];
                var symID = initSymbol[i * slotLength + k];
                instsymbol.getComponent(_crd && symbolSetting_TA === void 0 ? (_reportPossibleCrUseOfsymbolSetting_TA({
                  error: Error()
                }), symbolSetting_TA) : symbolSetting_TA).resetSymbol(symID); //設置symbol初始值
              }
            }

            this.slotRun[i].children[2].active = false; //隱藏下層
          }
        } //-------------------按鈕事件觸發-------------------/
        //閃電加速開啟


        fastSlotOn() {
          this.fastMode = true;
          this.listenTime = 1.5; //聽牌時間2秒

          this.dropListenTime = 1; //下落聽牌時間

          this.btnFastOn.active = true;
          this.btnFastOff.active = false;
        } //閃電加速關閉


        fastSlotOff() {
          this.fastMode = false;
          this.listenTime = 2.5; //聽牌時間3秒

          this.dropListenTime = 1.5; //下落聽牌時間

          this.btnFastOn.active = false;
          this.btnFastOff.active = true;
        } //開始自動遊戲


        startAutoGame() {
          this.autoGameMode = true; //啟用自動模式

          this.btnAutoStop.active = true; //顯示自動停止按鈕

          this.btnSpin.active = false; //隱藏spin按鈕

          this.startGameSlotRun(); //開始spin轉動

          this.autoGameRound--;
          this.btnAutoStop.children[0].getChildByName('label').getComponent(Label).string = this.autoGameRound.toString();
        } //停止自動遊戲


        stopAutoGame() {
          this.autoGameMode = false; //關閉自動模式

          this.btnAutoStop.active = false; //隱藏自動停止按鈕

          this.btnSpin.active = true; //顯示spin按鈕
          //如果自動按鈕是啟用狀態，且spin按鈕未啟用狀態，才啟用spin按鈕

          if (this.btnAuto.interactable && !this.btnSpin.getComponent(Button).interactable) this.btnSpin.getComponent(Button).interactable = true; //啟用spin按鈕
        } //開始spin轉動


        clickSpin() {
          this.startGameSlotRun();
        } //遊戲立即停止(按鍵觸發)


        stopGameSlotRunNow() {
          this.btnStop.active = false; //隱藏聽牌物件

          for (var i = 0; i < this.slotListen.children.length; i++) {
            this.listenHide(i); //聽牌特效淡出(slotLine)
          }

          this.unscheduleAllCallbacks(); //停止所有計時器

          for (var _i = 0; _i < this.stopSlot.length; _i++) {
            //如果有未執行停止轉動的才執行停止slot
            if (!this.stopSlot[_i]) this.stopSlotRun(_i); //停止slot轉動(排除已停止的slot)
          }
        } //-------------------按鈕事件觸發-------------------/
        //-------------------主要slot流程-----------------------/
        //開始遊戲slot轉動


        startGameSlotRun() {
          this.gameRound++; //表演回合+1

          if (this.gameRound > this.demoInfoTA.demoRound - 1) this.gameRound = 0; //演示回合0

          for (var i = 0; i < this.stopSlot.length; i++) {
            this.stopSlot[i] = false;
          }

          this.btnStop.active = true; //顯示停止按鈕

          this.btnSetting.interactable = false; //禁用設置按鈕

          this.btnAuto.interactable = false; //禁用自動按鈕

          this.betAdd.interactable = false; //禁用下注加分按鈕

          this.betLess.interactable = false; //禁用下注減分按鈕

          this.winTotalScoreInfo.active = false; //隱藏共贏得資訊

          this.btnSpin.getComponent(Animation).getState('btnSpinRotate').speed = 4; //加速旋轉

          this.btnSpin.getChildByName('loopFx').active = true; //顯示旋轉狀態
          //執行slot轉動

          if (this.fastMode) {
            //起始同時轉動
            for (var _i2 = 0; _i2 < this.slotRun.length; _i2++) {
              this.startSlotRun(_i2);
            } //等待轉動時間結束


            this.scheduleOnce(() => {
              this.waitGameStopSlot(0, 0.01); //等待遊戲依序停止(哪行slot,等待停止時間)
            }, this.fastStopTime);
          } else {
            //起始依序轉動
            var _i3 = 0;
            this.schedule(() => {
              this.startSlotRun(_i3);
              _i3++;
            }, this.scheduleStartTime, this.slotRun.length - 1, 0.01); //等待轉動時間結束

            this.scheduleOnce(() => {
              this.waitGameStopSlot(0, this.scheduleStopTime); //等待遊戲依序停止(哪行slot,等待停止時間)
            }, this.stopTime);
          }
        } //等待遊戲依序停止(哪行slot,等待停止時間)


        waitGameStopSlot(slotLine, time) {
          //如果此行聽牌狀態未顯示，正常停止此行slot
          if (!this.slotListen.children[slotLine].active) this.stopSlotRun(slotLine);
          if (slotLine === this.slotRun.length - 1) return; //最後一行不執行聽牌判斷

          this.scatterSave(slotLine); //紀錄中獎scatter

          var readyTime = 0; //等待聽牌時間
          //scatter數量>=2時

          if (this.scatterSym.length >= 2) {
            readyTime = this.listenTime;
            this.scheduleOnce(() => {
              this.creatScatter(); //生成scatter聽牌物件

              this.listenLoopSlot(slotLine + 1); //執行減速聽牌(哪行slot)
            }, this.slotRunSpeed);
          }

          this.scheduleOnce(() => {
            slotLine++; //執行下一行slot

            this.waitGameStopSlot(slotLine, time); //再次執行遊戲依序停止(下行slot)
          }, time + readyTime);
        } //開始轉動slot(哪行slot)


        startSlotRun(slotLine) {
          var slotRunLine = this.slotRun[slotLine]; //該行slotRun

          slotRunLine.children[2].active = true; //顯示下層

          var slotRunLineHeight = slotRunLine.getComponent(UITransform).height; //行高

          var downPos = new Vec3(slotRunLine.position.x, -slotRunLineHeight, 0); //移到下方位置

          tween(slotRunLine).to(this.slotRunSpeed, {
            position: downPos
          }, {
            easing: "cubicIn"
          }).call(() => {
            this.loopSlotRun(slotLine); //執行循環轉動

            for (var i = 0; i < 3; i++) {
              for (var j = 0; j < slotRunLine.children[i].children.length; j++) {
                slotRunLine.children[i].children[j].getComponent(_crd && symbolSetting_TA === void 0 ? (_reportPossibleCrUseOfsymbolSetting_TA({
                  error: Error()
                }), symbolSetting_TA) : symbolSetting_TA).blurShow(); //顯示模糊漸變
              }
            }
          }).tag(slotLine).start();
        } //循環轉動slot(哪行slot)


        loopSlotRun(slotLine) {
          //設置隨機上中下的數值(先預設固定值)
          var slotRunLine = this.slotRun[slotLine]; //該行slotRun

          var slotRunLineHeight = slotRunLine.getComponent(UITransform).height; //行高

          var upPos = new Vec3(slotRunLine.position.x, slotRunLineHeight, 0); //移到上方位置

          var downPos = new Vec3(slotRunLine.position.x, -slotRunLineHeight, 0); //移到下方位置

          var symbolAmount = slotRunLine.children[1].children.length; //該行symbol數量
          //檢查如果symbol節點有隱藏的，需重新顯示(因為此遊戲會有空牌狀態)

          for (var i = 0; i < symbolAmount; i++) {
            if (!slotRunLine.children[1].children[i].active) slotRunLine.children[1].children[i].active = true;
          }

          this.setSymbolImage(slotRunLine.children[1], this.randomSymbolNum(symbolAmount)); //設置正symbol圖案(隨機)

          slotRunLine.position = upPos; //每次循環時會回到上面

          var changeSymbol = true; //等待上下換圖

          tween(slotRunLine).to(this.slotRunSpeed, {
            position: downPos
          }, {
            onUpdate: () => {
              //轉到一半時，設置上下symbol圖案一致(隨機)
              if (slotRunLine.position.y < 0 && changeSymbol) {
                changeSymbol = false;
                var randomData = this.randomSymbolNum(symbolAmount);
                this.setSymbolImage(slotRunLine.children[0], randomData); //設置上symbol圖案(隨機一致)

                this.setSymbolImage(slotRunLine.children[2], randomData); //設置下symbol圖案(隨機一致)
              }
            }
          }).call(() => {
            this.loopSlotRun(slotLine); //持續轉動
          }).tag(slotLine).start();
        } //停止轉動slot(哪行slot)


        stopSlotRun(slotLine) {
          Tween.stopAllByTag(slotLine); //停止一般loop輪盤轉動

          this.stopSlot[slotLine] = true; //設定該行已執行停止轉動

          var slotRunLine = this.slotRun[slotLine]; //該行slotRun

          var xPos = slotRunLine.position.x;
          var slotRunLineHeight = slotRunLine.getComponent(UITransform).height; //行高

          var upPos = new Vec3(xPos, slotRunLineHeight, 0); //移到上方位置

          var endingPos = new Vec3(xPos, -30, 0); //移到停止超出位置

          var endPos = new Vec3(xPos, 0, 0); //移到停止位置

          var symbolAmount = slotRunLine.children[1].children.length; //該行symbol數量

          var slotSymbolNumber = this.demoInfoTA.symData[this.gameRound].slotNumber[0]; //設置本回合各slot的symbol停止編號

          var symbolNumber = slotSymbolNumber.slice(symbolAmount * slotLine, symbolAmount * (slotLine + 1)); //該行的symbol停止編號

          this.setSymbolImage(slotRunLine.children[1], symbolNumber); //設置正symbol圖案(結果)

          slotRunLine.position = upPos; //slot回歸到上面

          this.blurSFReset(slotRunLine); //轉換為正常貼圖

          tween(slotRunLine).to(this.slotRunSpeed - 0.1, {
            position: endingPos
          }, {
            easing: 'cubicOut'
          }).call(() => {//播放回彈音效
          }).then(tween(slotRunLine).to(0.1, {
            position: endPos
          })).call(() => {
            this.endSlot(slotLine); //結束slot轉動時執行(哪行slot)
          }).start();
        } //scatter節點紀錄(哪行slot)


        scatterSave(slotLine) {
          var mainSlotRun = this.slotRun[slotLine].children[1]; //每行第一個資料不判斷

          for (var i = 1; i < mainSlotRun.children.length; i++) {
            if (mainSlotRun.children[i].getComponent(_crd && symbolSetting_TA === void 0 ? (_reportPossibleCrUseOfsymbolSetting_TA({
              error: Error()
            }), symbolSetting_TA) : symbolSetting_TA).symID === 43) this.scatterSym.push(mainSlotRun.children[i]); //儲存scatter節點
          }
        } //生成scatter聽牌物件


        creatScatter() {
          for (var i = 0; i < this.scatterSym.length; i++) {
            //生成過的話就不生成(子物件數量跟生成數量相比)
            if (this.symbolWinLayer.children.length < i + 1) {
              var instScatter = this.myPool.get(this.symbolResourceTA.symbolWin); //生成中獎symbol物件池內容

              instScatter.parent = this.symbolWinLayer; //設置父節點

              instScatter.getComponent(_crd && symbolWin_TA === void 0 ? (_reportPossibleCrUseOfsymbolWin_TA({
                error: Error()
              }), symbolWin_TA) : symbolWin_TA).setSymbolWinData(43, true, this.scatterSym[i]); //設置symbolWin編號(symID，聽牌狀態，輪軸的symbol節點)
            }
          }
        } //聽牌特效淡入顯示(哪行slot)


        listenShow(slotLine, hideTime) {
          var slotListen = this.slotListen.children[slotLine];
          slotListen.getComponent(UIOpacity).opacity = 0;
          slotListen.active = true; //顯示第N行聽牌特效

          tween(slotListen.getComponent(UIOpacity)).to(0.2, {
            opacity: 255
          }).start(); //淡入

          this.scheduleOnce(() => {
            this.listenHide(slotLine); //隱藏聽牌
          }, hideTime);
        } //聽牌特效淡出(哪行slot)


        listenHide(slotLine) {
          var slotListen = this.slotListen.children[slotLine];
          tween(slotListen.getComponent(UIOpacity)).to(0.2, {
            opacity: 0
          }).call(() => {
            slotListen.active = false; //隱藏聽牌特效
          }).start(); //淡出
        } //執行聽牌loop依序減速並停止轉動(哪行slot)


        listenLoopSlot(slotLine) {
          Tween.stopAllByTag(slotLine); //停止一般loop輪盤轉動

          this.listenShow(slotLine, this.listenTime); //聽牌特效淡入顯示(slotLine)

          var slotRunLine = this.slotRun[slotLine]; //該行slotRun

          var time = [0.1, 0.13, 0.16, 0.19]; //loop依序減速的時間百分比(2段時間一組)

          var timeStep = 0; //陣列時間段

          var xPos = slotRunLine.position.x;
          var slotRunLineHeight = slotRunLine.getComponent(UITransform).height; //行高

          var upPos = new Vec3(xPos, slotRunLineHeight, 0); //移到上方位置

          var downPos = new Vec3(xPos, -slotRunLineHeight, 0); //移到下方位置

          var endingPos = new Vec3(xPos, -30, 0); //移到停止超出位置

          var endPos = new Vec3(xPos, 0, 0); //移到停止位置

          var symbolAmount = slotRunLine.children[1].children.length; //該行symbol數量

          var slowSlot = () => {
            this.setSymbolImage(slotRunLine.children[1], this.randomSymbolNum(symbolAmount)); //設置正symbol圖案(隨機)

            slotRunLine.position = upPos; //每次循環時會回到上面

            tween(slotRunLine).to(this.listenTime * time[timeStep], {
              position: endPos
            }).call(() => {
              timeStep++; //表演時間段+1

              var randomData = this.randomSymbolNum(symbolAmount);
              this.setSymbolImage(slotRunLine.children[0], randomData); //設置上symbol圖案(隨機一致)

              this.setSymbolImage(slotRunLine.children[2], randomData); //設置下symbol圖案(隨機一致)

              tween(slotRunLine).to(this.listenTime * time[timeStep], {
                position: downPos
              }).call(() => {
                timeStep++; //表演時間段+1

                if (timeStep < time.length) slowSlot.bind(this)(); //再次轉動
                else {
                  //執行減速停止轉動
                  var slotSymbolNumber = this.demoInfoTA.symData[this.gameRound].slotNumber[0]; //設置本回合各slot的symbol停止編號

                  var symbolNumber = slotSymbolNumber.slice(symbolAmount * slotLine, symbolAmount * (slotLine + 1)); //該行的symbol停止編號

                  this.setSymbolImage(slotRunLine.children[1], symbolNumber); //設置正symbol圖案(結果)

                  slotRunLine.position = upPos; //slot回歸到上面

                  this.blurSFReset(slotRunLine); //轉換為正常貼圖

                  tween(slotRunLine).to(this.listenTime * 0.36, {
                    position: endingPos
                  }, {
                    easing: 'sineOut'
                  }).then(tween(slotRunLine).to(this.listenTime * 0.06, {
                    position: endPos
                  })).call(() => {
                    this.stopSlot[slotLine] = true; //設定該行已執行停止轉動

                    this.endSlot(slotLine); //結束slot轉動時執行(哪行slot)
                  }).tag(slotLine).start();
                }
              }).tag(slotLine).start();
            }).tag(slotLine).start();
          };

          slowSlot.bind(this)();
        } //結束slot(哪行slot)


        endSlot(slotLine) {
          var slotRunLine = this.slotRun[slotLine]; //該行slotRun

          slotRunLine.children[2].active = false; //隱藏下層

          this.listenHide(slotLine); //聽牌特效淡出(slotLine)

          var slotSymbolNumber = this.demoInfoTA.symData[this.gameRound].slotNumber[0]; //設置本回合symbol停止編號

          var symbolAmount = slotRunLine.children[1].children.length; //該行symbol數量
          //判斷此行的symbol是否有需要提前出現的動態

          for (var i = 0; i < symbolAmount; i++) {
            if (slotSymbolNumber[symbolAmount * slotLine + i] === 43) slotRunLine.children[1].children[i].getComponent(_crd && symbolSetting_TA === void 0 ? (_reportPossibleCrUseOfsymbolSetting_TA({
              error: Error()
            }), symbolSetting_TA) : symbolSetting_TA).scatterStay(); //如果是scatter編號，顯示停留動態
          } //如果是最後一段停止，執行結果判斷


          if (slotLine === this.slotRun.length - 1) this.resultGameSpin(); //遊戲spin結果判斷
        } //遊戲spin結果判斷


        resultGameSpin() {
          this.btnSpin.getComponent(Animation).getState('btnSpinRotate').speed = 1; //旋轉速度回歸

          this.btnSpin.getComponent(Button).interactable = false; //禁用spin按鈕

          this.unscheduleAllCallbacks(); //停止所有計時器

          this.btnStop.active = false; //隱藏停止按鈕
          //如果最後一行聽牌結束沒有蒐集到3個free，要清除表演動態，並回歸靜態節點顯示

          this.putSymbolWinLayer(); //退還所有勝利表演pool物件

          for (var data of this.scatterSym) {
            data.active = true;
            data.getComponent(_crd && symbolSetting_TA === void 0 ? (_reportPossibleCrUseOfsymbolSetting_TA({
              error: Error()
            }), symbolSetting_TA) : symbolSetting_TA).scatterStay(); //播放停留動態
          }

          if (this.autoGameRound === 0 && this.autoGameMode) this.stopAutoGame(); //停止自動遊戲

          var symData = this.demoInfoTA.symData[this.gameRound]; //該回合sym資料

          var lineAward = symData.lineAward; //中獎連線資料
          //判斷有沒有中獎

          if (lineAward.length > 0) {
            var step = 0; //紀錄要表演的中獎次數
            //中獎表演

            var lineAwardShow = () => {
              this.hideSlot = [0, 0, 0, 0, 0]; //清空空缺處數量紀錄

              var slotNumber = symData.slotNumber[step]; //本回合slot編號

              var typeAward = lineAward[step].typeAward; //中獎線牌型表演資料

              var typeRound = 0; //該次中獎的牌型表演回合，可能包含(free、花牌、槓、碰、眼睛等等)

              var updataAll = false; //判斷下回是否要全刷掉補牌(MG模式下有遇到3碰或4槓才會true)
              //牌型表演

              var typeAwardShow = () => {
                this.slotBlackShow(); //顯示遮黑層

                this.putSymbolWinLayer(); //退還所有勝利表演pool物件
                //生成並表演symbol中獎

                for (var i = 0; i < typeAward[typeRound].symPos.length; i++) {
                  for (var j = 0; j < typeAward[typeRound].symPos[i].length; j++) {
                    var pos = typeAward[typeRound].symPos[i][j]; //中獎圖標位置

                    var instSymbolAnim = this.myPool.get(this.symbolResourceTA.symbolWin); //生成中獎symbol物件池內容

                    instSymbolAnim.parent = this.symbolWinLayer; //設置父節點

                    var winSymbol = this.slotRun[Math.floor(pos / 5)].children[1].children[pos % 5]; //勝利的symbol節點

                    instSymbolAnim.getComponent(_crd && symbolWin_TA === void 0 ? (_reportPossibleCrUseOfsymbolWin_TA({
                      error: Error()
                    }), symbolWin_TA) : symbolWin_TA).setSymbolWinData(slotNumber[pos], false, winSymbol); //執行表演(symID，聽牌狀態，輪軸的symbol節點)
                  }
                }

                var typeName = typeAward[typeRound].name; //贏得的牌型名稱

                var typeSymID = typeAward[typeRound].symID; //贏得的牌型symbol編號資料

                var typeSymPos = typeAward[typeRound].symPos; //贏得的牌型symbol位置資料

                var fontType = this.fontType[this.stateNameID[typeName]]; //該回合要顯示的牌型動態
                //顯示牌型動態(眼睛牌型除外)

                var waitMoveTime = 1;
                if (typeName !== 'eye') if (typeName === 'free') {
                  waitMoveTime = 3; //免費遊戲獲得表演等待秒數
                  //等待一秒(free牌表演)

                  this.scheduleOnce(() => {
                    this.scheduleOnce(() => {
                      //等待指向線特效出現
                      if (this.freeGet.active) {
                        this.freeGet.getComponent(Animation).play('freeGetAgain');
                        this.freeGet.getChildByName('freeGetTx').getChildByName('label').getComponent(Label).string = '+22';
                      } else {
                        this.freeGet.getComponent(UIOpacity).opacity = 0; //透明度0

                        this.freeGet.getChildByName('freeGetTx').getChildByName('label').getComponent(Label).string = '+11';
                        this.freeGet.active = true; //顯示獲得免費遊戲紀錄

                        this.freeGet.getComponent(Animation).play('freeGet');
                      }
                    }, 2.2);
                    this.scatterSym = []; //清空scatter節點紀錄資料(全刷掉才要清空)

                    for (var _data of this.symbolWinLayer.children) {
                      _data.getComponent(_crd && symbolWin_TA === void 0 ? (_reportPossibleCrUseOfsymbolWin_TA({
                        error: Error()
                      }), symbolWin_TA) : symbolWin_TA).scatterRemove(); //表演scatter牌消除

                    }

                    fontType.active = true; //顯示牌型動態

                    if (this.freeGameMode) {
                      //顯示再次獲得
                      fontType.getChildByName('getAgain').active = true;
                      this.scheduleOnce(() => {
                        //等待指向線特效出現，表演加局
                        var timesLabel = this.freeGameTimes.getChildByName('label');
                        timesLabel.getComponent(Animation).play(); //播放縮放動態

                        timesLabel.getComponent(Label).string = (Number(timesLabel.getComponent(Label).string) + 11).toString(); //剩餘次數+11局
                      }, 2.2);
                    } else fontType.getChildByName('getAgain').active = false;
                  }, 1);
                } else {
                  fontType.active = true; //顯示牌型動態

                  if (typeName == 'pong' || typeName == 'kong') this.slotGameUI.getComponent(Animation).play('shark'); //播放震動
                } //等待牌型表演結束後，勝利牌移到置牌區

                this.scheduleOnce(() => {
                  this.slotBlackHide(); //隱藏遮黑層

                  if (typeName !== 'free') updataAll = this.winSymbolSet(typeName, typeSymID, typeSymPos); //勝利牌移到置牌區(名稱類型,勝利編號,勝利位置),回傳是否要全刷掉補牌

                  typeRound++; //牌型表演+1
                  //1秒後，判斷牌型表演結束

                  this.scheduleOnce(() => {
                    if (typeName !== 'eye') fontType.active = false; //隱藏牌型動態
                    //如果牌型表演結束

                    if (typeRound === typeAward.length) {
                      this.putSymbolWinLayer(); //退還所有勝利表演pool物件

                      step++; //連線表演次數+1

                      var nextSlotNumber = symData.slotNumber[step]; //下一個中獎線的停止編號
                      //無symbol表演資料，直接結算

                      if (!nextSlotNumber) {
                        this.resultGame(); //執行結算

                        return;
                      }

                      var waitReadyTime = 0; //如果目前剛好有四組碰牌，表演聽(胡)牌

                      if (this.setArea.children.length === 4) {
                        this.slotBlackShow(); //顯示遮黑層

                        this.fontType[4].active = true; //顯示聽牌

                        this.scheduleOnce(() => {
                          this.slotBlackHide(); //隱藏遮黑層
                        }, 1.8);
                        waitReadyTime = 1; //因聽牌表演時間2秒，所以須多等待1秒掉牌
                      }

                      this.scheduleOnce(() => {
                        //更新盤面(slot盤面編號，是否全刷掉)
                        this.updataSlot(nextSlotNumber, updataAll, () => {
                          //執行symbol掉落補牌(是否全刷掉)
                          this.dropSymbol(() => {
                            //掉落完畢後判斷，無中獎資料，直接結算
                            if (!lineAward[step]) {
                              this.resultGame(); //執行結算

                              return;
                            } else lineAwardShow.bind(this)(); //再次判斷中獎表演

                          });
                        });
                      }, waitReadyTime);
                    } else typeAwardShow.bind(this)(); //再次執行牌型表演

                  }, 1);
                }, waitMoveTime);
              };

              typeAwardShow.bind(this)(); //執行牌型表演
            };

            lineAwardShow.bind(this)(); //執行中獎表演
          } else this.scheduleOnce(() => {
            this.scatterWinTest(); //判斷是否進入免費模式
          }, 0.3);
        } //更新下一個盤面配置(下一個slot盤面編號，是否全刷掉)


        updataSlot(slotNumber, updataAll, callback) {
          var _this = this;

          if (updataAll) {
            //更新下一個盤面配置_全刷掉(下一個slot盤面編號)
            this.hideSlot = [4, 4, 4, 4, 4]; //全空

            var slotLength = this.slotRun.length; //slot行數

            var i = 0;
            this.schedule(() => {
              var mainSlotLine = this.slotRun[i].children[1];
              var symbolAmount = mainSlotLine.children.length; //該行symbol數量

              var _loop = function _loop() {
                var moveSymbol = mainSlotLine.children[j];
                var movePos = moveSymbol.position.y - 1590;
                var pos = i * symbolAmount + j;
                tween(moveSymbol).to(0.3, {
                  position: new Vec3(0, movePos, 0)
                }, {
                  easing: 'cubicIn'
                }).call(() => {
                  moveSymbol.position = new Vec3(0, 2470 - moveSymbol.getSiblingIndex() * _this.symbolHeight, 0);
                  moveSymbol.active = true; //顯示symbol

                  moveSymbol.getComponent(_crd && symbolSetting_TA === void 0 ? (_reportPossibleCrUseOfsymbolSetting_TA({
                    error: Error()
                  }), symbolSetting_TA) : symbolSetting_TA).setSymbolData(slotNumber[pos]); //設置下局的symbol(不更新位置)
                }).start();
              };

              for (var j = 0; j < symbolAmount; j++) {
                _loop();
              }

              i++;

              if (i === slotLength) {
                this.scheduleOnce(() => {
                  callback();
                }, 0.3);
              }
            }, 0.05, slotLength - 1, 0.01);
          } else {
            //更新下一個盤面配置_紀錄缺口(下一個slot盤面編號)
            for (var _i4 = 0; _i4 < this.slotRun.length; _i4++) {
              var slotSymbol = this.slotRun[_i4].children[1];
              var moveNum = 0; //消除移動的數量

              var saveSymbol = []; //先紀錄symbol排序，因為設置siblingIndex後排序可能會抓錯

              for (var data of slotSymbol.children) {
                saveSymbol.push(data);
              } //從下方開始判斷(最後一個子物件)


              for (var j = saveSymbol.length - 1; j >= 0; j--) {
                var symNode = saveSymbol[j];

                if (!symNode.active) {
                  this.hideSlot[_i4]++; //該行空缺數+1

                  moveNum++; //消除移動的數量+1

                  symNode.setSiblingIndex(0); //如果該節點隱藏，排序就要移到最上層

                  symNode.position.add(new Vec3(0, this.symbolHeight * (moveNum + j), 0)); //設置上移後Y參數

                  symNode.active = true;
                }
              } //再執行symbol圖案設置


              var symbolAmount = slotSymbol.children.length; //該行symbol數量

              for (var _j = 0; _j < symbolAmount; _j++) {
                var symID = slotNumber[symbolAmount * _i4 + _j];

                slotSymbol.children[_j].getComponent(_crd && symbolSetting_TA === void 0 ? (_reportPossibleCrUseOfsymbolSetting_TA({
                  error: Error()
                }), symbolSetting_TA) : symbolSetting_TA).setSymbolData(symID); //設置下局的symbol(不更新位置)

              }
            }

            callback();
          }
        } //執行下落表演(是否是全掉落，callback)


        dropSymbol(callback) {
          var slotLength = this.slotRun.length; //slot行數

          var drop = slotLine => {
            if (slotLine === slotLength) {
              //等待掉落完
              this.scheduleOnce(() => {
                if (this.scatterSym.length < 3) {
                  this.putSymbolWinLayer(); //退還所有勝利表演pool物件

                  for (var data of this.scatterSym) {
                    data.active = true;
                    data.getComponent(_crd && symbolSetting_TA === void 0 ? (_reportPossibleCrUseOfsymbolSetting_TA({
                      error: Error()
                    }), symbolSetting_TA) : symbolSetting_TA).scatterStay(); //播放停留動態
                  }
                }

                callback(); //回傳掉落完畢
              }, 0.9);
            } else {
              //執行掉落表演
              var slotSymbol = this.slotRun[slotLine].children[1].children;

              for (var moveSymbol of slotSymbol) {
                var setPos = new Vec3(0, 1170 - this.symbolHeight * moveSymbol.getSiblingIndex(), 0); //實際放置的位置

                var yPos = moveSymbol.position.y; //判斷是否執行掉落

                if (yPos > setPos.y) {
                  var time = 0.45 + 0.05 * (yPos - setPos.y) / this.symbolHeight; //基礎下落時間0.35+0.05*相差高度/基本高度

                  var delayTime = 0.05 * (slotSymbol.length - moveSymbol.getSiblingIndex() - 1); //根據排序來決定延遲執行掉落時間

                  tween(moveSymbol).delay(delayTime).to(time - 0.2, {
                    position: new Vec3(0, setPos.y, 0)
                  }, {
                    easing: 'cubicIn'
                  }).then(tween(moveSymbol).to(0.065, {
                    position: new Vec3(0, setPos.y + 30, 0)
                  }, {
                    easing: 'cubicOut'
                  })).then(tween(moveSymbol).to(0.065, {
                    position: new Vec3(0, setPos.y, 0)
                  }, {
                    easing: 'cubicIn'
                  })).then(tween(moveSymbol).to(0.035, {
                    position: new Vec3(0, setPos.y + 10, 0)
                  }, {
                    easing: 'cubicOut'
                  })).then(tween(moveSymbol).to(0.035, {
                    position: new Vec3(0, setPos.y, 0)
                  }, {
                    easing: 'cubicIn'
                  })).start();
                } else moveSymbol.position = setPos; //設置位置

              }

              this.scatterSave(slotLine); //紀錄中獎scatter

              slotLine++;

              if ((this.fontType[4].active || this.scatterSym.length >= 2) && slotLine < slotLength && this.hideSlot[slotLine] > 0) {
                // this.slotBgFx.active = true;//顯示聽牌背景特效
                this.scheduleOnce(() => {
                  this.listenShow(slotLine, this.dropListenTime); //顯示第n行聽牌

                  if (this.scatterSym.length >= 2) this.creatScatter(); //生成scatter聽牌物件
                }, 0.7); //等待掉落聽牌時間

                this.scheduleOnce(() => {
                  drop.bind(this)(slotLine); //判斷下一行
                }, this.dropListenTime);
              } else {
                this.scheduleOnce(() => {
                  drop.bind(this)(slotLine); //判斷下一行
                }, this.scheduleStartTime);
              }
            }
          }; //判斷聽牌以及該行是否有空缺


          if ((this.fontType[4].active || this.scatterSym.length >= 2) && this.hideSlot[0] > 0) {
            // this.scheduleOnce(() => {
            this.listenShow(0, this.dropListenTime); //顯示第一行聽牌

            if (this.scatterSym.length >= 2) {
              this.creatScatter(); //生成scatter聽牌物件
            } // }, 0.7)


            this.scheduleOnce(() => {
              drop.bind(this)(0); //第一行開始執行掉落
            }, this.dropListenTime - 0.7);
          } else drop.bind(this)(0); //第一行開始執行掉落

        } //勝利牌移到置牌區(名稱,symID,sym位置)


        winSymbolSet(name, symID, symPos) {
          var _this2 = this;

          var updataAll = false; //判斷下回是否要全刷掉補牌(MG模式下有遇到3碰或4槓才會true)

          var symbolMovePos = []; //紀錄symbol移動的位置

          for (var i = 0; i < symID.length; i++) {
            //判斷是否是中途槓牌(不新增牌組)
            if (name === 'kong' && symPos[i].length === 1) {
              //中途槓牌類型(要移到置牌區)
              for (var data of this.setArea.children) {
                if (data.getComponent(_crd && symbolSet_TA === void 0 ? (_reportPossibleCrUseOfsymbolSet_TA({
                  error: Error()
                }), symbolSet_TA) : symbolSet_TA).symID === symID[i]) {
                  symbolMovePos.push(data.children[3]); //要移動的牌型位置

                  data.getComponent(_crd && symbolSet_TA === void 0 ? (_reportPossibleCrUseOfsymbolSet_TA({
                    error: Error()
                  }), symbolSet_TA) : symbolSet_TA).tileNum = 4;
                  break; //退出迴圈
                }
              }
            } else {
              var instSymbolSet = this.myPool.get(this.symbolSet); //生成symbolSet物件池內容

              switch (name) {
                case 'flower':
                  instSymbolSet.parent = this.flowerArea; //花牌置牌區

                  break;

                case 'kong':
                  instSymbolSet.parent = this.setArea; //眼、碰、槓牌置牌區

                  if (!this.freeGameMode) updataAll = true; //非免費模式，下一回合要全刷掉補牌

                  break;

                case 'pong':
                  instSymbolSet.parent = this.setArea; //眼、碰、槓牌置牌區

                  if (!this.freeGameMode) updataAll = true; //非免費模式，下一回合要全刷掉補牌

                  break;

                case 'eye':
                  instSymbolSet.parent = this.setArea; //眼、碰、槓牌置牌區

                  break;
              }

              instSymbolSet.getComponent(_crd && symbolSet_TA === void 0 ? (_reportPossibleCrUseOfsymbolSet_TA({
                error: Error()
              }), symbolSet_TA) : symbolSet_TA).init(symPos[i].length, symID[i]); //初始化(張數，symbol編號)

              instSymbolSet.getComponent(_crd && symbolSet_TA === void 0 ? (_reportPossibleCrUseOfsymbolSet_TA({
                error: Error()
              }), symbolSet_TA) : symbolSet_TA).setType(); //設置牌型與貼圖

              for (var j = 0; j < symPos[i].length; j++) {
                symbolMovePos.push(instSymbolSet.children[j]); //要移動的牌型位置
              }
            }
          }

          var winScale = 0.28; //移動到置牌區的尺寸

          var _loop2 = function _loop2(_i5) {
            var symbolWinNode = _this2.symbolWinLayer.children[_i5];

            var moveWorldPos = symbolMovePos[_i5].worldPosition.subtract(_this2.symbolWinLayer.worldPosition);

            symbolWinNode.getComponent(_crd && symbolWin_TA === void 0 ? (_reportPossibleCrUseOfsymbolWin_TA({
              error: Error()
            }), symbolWin_TA) : symbolWin_TA).resetTarget(); //清除跟隨節點

            tween(symbolWinNode).to(0.5, {
              position: moveWorldPos
            }, {
              easing: 'quartOut'
            }).start();
            tween(symbolWinNode).to(0.5, {
              scale: new Vec3(winScale + 0.03, winScale + 0.03, 1)
            }, {
              easing: 'quartOut'
            }).then(tween(symbolWinNode).to(0.2, {
              scale: new Vec3(winScale, winScale, 1)
            }, {
              easing: 'sineOut'
            })).call(() => {
              symbolMovePos[_i5].parent.getComponent(_crd && symbolSet_TA === void 0 ? (_reportPossibleCrUseOfsymbolSet_TA({
                error: Error()
              }), symbolSet_TA) : symbolSet_TA).showChildren();

              symbolWinNode.scale = new Vec3(0, 0, 0);
            }).start();
          };

          for (var _i5 = 0; _i5 < symbolMovePos.length; _i5++) {
            _loop2(_i5);
          }

          return updataAll;
        } //結算此回合


        resultGame() {
          this.putSymbolWinLayer(); //退還所有勝利表演pool物件

          for (var data of this.scatterSym) {
            data.active = true;
            data.getComponent(_crd && symbolSetting_TA === void 0 ? (_reportPossibleCrUseOfsymbolSetting_TA({
              error: Error()
            }), symbolSetting_TA) : symbolSetting_TA).scatterStay(); //播放停留動態
          }

          this.scatterSym = [];
          this.fontType[4].active = false; //隱藏聽牌狀態

          var ws = this.demoInfoTA.symData[this.gameRound].ws; //共贏分
          //判斷是否胡牌

          if (this.setArea.children.length > 4) {
            this.slotBlackShow(); //顯示遮黑層

            this.fontType[5].active = true; //顯示胡牌

            this.slotGameUI.getComponent(Animation).play('shark'); //播放震動
            //3秒後

            this.scheduleOnce(() => {
              this.slotBlackHide(); //隱藏遮黑層

              this.putPlaceArea(); //退還置牌區的pool物件

              this.fontType[5].active = false; //隱藏胡牌狀態

              this.result.active = true; //顯示胡牌結算畫面

              var anim = this.result.getComponent(Animation);
              anim.play(anim.clips[0].name);
              this.setResult(); //設置結算內容

              this.resultWinScore.getChildByName('label').getComponent(Label).string = this.numberSpecification(ws); //設置結算得分
              //等待動畫播完

              this.scheduleOnce(() => {
                //判斷是否執行bigWin跑分
                if (ws > this.demoInfoTA.betScore * this.bigWinMultiple[0]) this.bigWinRunning();else this.showResultScore(); //顯示結算總得分
              }, anim.clips[0].duration);
            }, 3);
          } else {
            this.showWinTotalScore(ws); //顯示共贏得

            this.scheduleOnce(() => {
              //判斷是否執行bigWin跑分
              if (ws > this.demoInfoTA.betScore * this.bigWinMultiple[0]) this.bigWinRunning();else {
                this.putPlaceArea(); //退還置牌區的pool物件

                this.scheduleOnce(() => {
                  this.scatterWinTest(); //判斷是否進入免費模式
                }, 0.3);
              }
            }, 1);
          }
        } //設置胡牌內容


        setResult() {
          var huAward = this.demoInfoTA.symData[this.gameRound].huAward; //該回合胡牌資料
          //設置牌型標題

          var huCount = 0; //胡牌牌型數量(牌型編號10以內的)

          for (var i = 0; i < huAward.huType[0].length; i++) {
            if (huAward.huType[0][i] < 11) {
              var huTypeTitleSpriteFrame = this.symbolResourceTA.huTypeTitleSF[huAward.huType[0][i]];
              this.result.getChildByName('titles').children[i].getComponent(Sprite).spriteFrame = huTypeTitleSpriteFrame;
              this.result.getChildByName('titles').children[i].active = true;
              huCount++;
            }
          }

          this.result.getChildByName('titles').getComponent(Animation).play('resultTitle' + huCount.toString()); //播放待機模式
          //設置花牌

          for (var _i6 = 0; _i6 < 8; _i6++) {
            var flowerTile = this.result.getChildByName('tiles').getChildByName('flowerTile');

            if (_i6 < huAward.flower.length) {
              var flowerSpriteFrame = this.symbolResourceTA.symbolSF[huAward.flower[_i6] - 1];
              flowerTile.children[_i6].active = true; //顯示花牌

              flowerTile.children[_i6].children[0].getComponent(Sprite).spriteFrame = flowerSpriteFrame;
            } else flowerTile.children[_i6].active = false; //隱藏花牌

          } //設置碰、槓、眼睛牌


          for (var _i7 = 0; _i7 < 5; _i7++) {
            var winTileSet = this.result.getChildByName('tiles').getChildByName('winTile').children[_i7];

            for (var j = 0; j < winTileSet.children.length; j++) {
              if (j < huAward.setSym[_i7].length) {
                var symbolSpriteFrame = this.symbolResourceTA.symbolSF[huAward.setSym[_i7][j] - 1];
                winTileSet.children[j].children[0].getComponent(Sprite).spriteFrame = symbolSpriteFrame;
                winTileSet.children[j].active = true; //顯示麻將牌
              } else winTileSet.children[j].active = false; //隱藏麻將牌

            }
          } //設置牌型台數


          for (var _i8 = 0; _i8 < 8; _i8++) {
            var winPoints = this.result.getChildByName('points').getChildByName('winPoints');

            if (_i8 < huAward.huType[0].length) {
              var huTypeSpriteFrame = this.symbolResourceTA.huTypeSF[huAward.huType[0][_i8]];
              winPoints.children[_i8].active = true; //顯示牌型台數

              winPoints.children[_i8].getChildByName('tx').getComponent(Sprite).spriteFrame = huTypeSpriteFrame; //設置牌型語系貼圖

              winPoints.children[_i8].getChildByName('points').children[0].getComponent(Label).string = huAward.huType[1][_i8].toString(); //設置台數
            } else winPoints.children[_i8].active = false; //隱藏牌型台數

          }

          this.result.getChildByName('points').getChildByName('allPoints').getChildByName('label').getComponent(Label).string = huAward.allPoints.toString(); //設置總台數
        } //顯示結算得分


        showResultScore() {
          this.resultWinScore.active = true; //顯示結算總得分
          //等待5秒關閉結算後判斷免費模式

          this.scheduleOnce(() => {
            var anim = this.result.getComponent(Animation);
            anim.play(anim.clips[1].name); //等待動畫播放結束

            this.scheduleOnce(() => {
              this.result.active = false;
              this.resultWinScore.active = false;
            }, anim.clips[1].duration); //胡牌盤面掉落更新
            // this.putPlaceArea();//退還置牌區的pool物件

            this.scatterWinTest(); //判斷是否進入免費模式
          }, 5);
        } //重啟spin按鈕


        resetGameSpin() {
          //先判斷是否為免費模式
          if (this.freeGameMode) {
            var symData = this.demoInfoTA.symData[this.gameRound];

            if (symData.freeGameLeft <= 0) {
              //免費遊戲結束
              this.totalWin.active = true; //顯示免費遊戲結算

              this.totalWin.getComponent(Animation).play("totalWinShow"); //播放得分畫面

              this.totalWin.getChildByName('label').getComponent(Label).string = this.numberSpecification(symData.bala); //設置免費遊戲總得分
              //5秒後自動執行(根據動畫資訊出現開始算5秒)

              tween(this).delay(5).call(() => {
                this.freeGameExit(symData.bala); //自動執行免費遊戲結算
              }).tag(88).start();
            } else {
              //等待0.4秒下局轉動
              this.scheduleOnce(() => {
                this.startGameSlotRun(); //開始下局轉動

                this.freeGameTimes.getChildByName('label').getComponent(Label).string = (symData.freeGameLeft - 1).toString(); //免費次數更新
              }, 0.4);
            }

            return;
          } //如果是自動遊戲狀態，等待0.4秒下局轉動
          else if (this.autoGameMode) {
            this.scheduleOnce(() => {
              this.startGameSlotRun(); //開始下局轉動

              this.autoGameRound--;
              this.btnAutoStop.children[0].getChildByName('label').getComponent(Label).string = this.autoGameRound.toString();
            }, 0.4);
            return;
          }

          this.btnSpin.getComponent(Button).interactable = true; //啟用spin

          this.btnAuto.interactable = true; //啟用自動按鈕

          this.btnSetting.interactable = true; //啟用設置按鈕

          this.betAdd.interactable = true; //啟用下注加分按鈕

          this.betLess.interactable = true; //啟用下注減分按鈕
        } //-------------------主要slot流程-------------------/
        //-------------------功能類-------------------/
        //symbol抖動效果(哪一行)
        // runSymbolShark() {
        //     if (this.symbolShark)
        //         return;
        //     this.symbolShark = true;//啟用抖動
        //     // const startSymbolShark = (symbol: Node) => {
        //     //     const randomPos = new Vec3(5 - Math.random() * 10, 5 - Math.random() * 10, 0);
        //     //     tween(symbol).to(0.05, { position: randomPos }).start();
        //     // }
        //     for (let i = 0; i < this.slotRun.length; i++) {
        //         for (let j = 0; j < this.slotRun[i].children[1].children.length; j++) {
        //             if (this.slotRun[i].children[1].children[j].active) {
        //                 let count = 0;//目前抖動次數
        //                 this.schedule(() => {
        //                     if (count < 30) {
        //                         this.slotRun[i].children[1].children[j].children[0].position = new Vec3(5 - Math.random() * 10, 5 - Math.random() * 10, 0);
        //                         count++
        //                     } else
        //                         this.slotRun[i].children[1].children[j].children[0].position = new Vec3(0, 0, 0);//回歸位置
        //                 }, 0.05, 30, 0.01)
        //             }
        //         }
        //     }
        // }
        //聽牌特效開關
        // setReadyFx(bool: boolean) {
        // }
        //設置symbol圖案(哪行slotSymbol,該行顯示的symbol編號)


        setSymbolImage(slotSymbol, symbolNumber) {
          for (var i = 0; i < slotSymbol.children.length; i++) {
            slotSymbol.children[i].getComponent(_crd && symbolSetting_TA === void 0 ? (_reportPossibleCrUseOfsymbolSetting_TA({
              error: Error()
            }), symbolSetting_TA) : symbolSetting_TA).setSymbolData(symbolNumber[i]); //設置顯示的symbol
          }
        } //回傳該行隨機symbol圖案編號(要隨機產生的編號數量)


        randomSymbolNum(amount) {
          var result = []; //要回傳的隨機編號陣列

          for (var i = 0; i < amount; i++) {
            result.push(Math.ceil(Math.random() * 43)); //隨機1~43
          }

          return result; //回傳該行隨機symbol圖案編號
        } //模糊貼圖回歸正常(哪行slot)


        blurSFReset(slotRunLine) {
          //設置上下用模糊貼圖
          for (var data of slotRunLine.children) {
            for (var data2 of data.children) {
              data2.getComponent(_crd && symbolSetting_TA === void 0 ? (_reportPossibleCrUseOfsymbolSetting_TA({
                error: Error()
              }), symbolSetting_TA) : symbolSetting_TA).blurHide(); //顯示模糊漸變
            }
          }
        } //遮黑淡入


        slotBlackShow() {
          this.slotBlack.getComponent(UIOpacity).opacity = 0;
          this.slotBlack.active = true; //顯示遮黑

          tween(this.slotBlack.getComponent(UIOpacity)).to(0.15, {
            opacity: 255
          }).start(); //淡入
        } //遮黑淡出


        slotBlackHide() {
          tween(this.slotBlack.getComponent(UIOpacity)).to(0.15, {
            opacity: 0
          }).call(() => {
            this.slotBlack.active = false; //隱藏遮黑
          }).start(); //淡出
        } //顯示共贏得分數


        showWinTotalScore(score) {
          this.winTotalScoreInfo.getChildByName('score').getChildByName('label').getComponent(Label).string = this.numberSpecification(score); //共贏分設置

          this.winTotalScoreInfo.active = true; //顯示共贏得
        } //錢包歸分(得分)


        walletScore(score) {
          this.userCash = Number(this.userCash) + score * 10000; //玩家得分增加

          var cashStr = this.numberSpecification(this.userCash / 10000);
          this.runScore(Number(this.userCashLabel.string.replace(/,/gi, '')), Number(cashStr.replace(/,/gi, '')), this.userCashLabel); //執行小跑分
        }
        /**規格化數值(取小數點後2位)*/


        numberSpecification(num) {
          return num.toLocaleString('zh', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          });
        } //退還symbolWinLayer節點下的pool


        putSymbolWinLayer() {
          while (this.symbolWinLayer.children.length > 0) {
            this.myPool.put(this.symbolWinLayer.children[0]); //退還symbolWinLayer節點下的pool
          }
        } //退還placeArea下的pool


        putPlaceArea() {
          // for (const data of this.freeArea.children) {
          //     data.getComponent(Animation).play();
          // }
          for (var data of this.flowerArea.children) {
            data.getComponent(Animation).play();
          }

          for (var _data2 of this.setArea.children) {
            _data2.getComponent(Animation).play();
          }

          this.scheduleOnce(() => {
            // while (this.freeArea.children.length > 0) {
            //     this.myPool.put(this.freeArea.children[0]);//退還symbolWinLayer節點下的pool
            // }
            while (this.flowerArea.children.length > 0) {
              this.myPool.put(this.flowerArea.children[0]); //退還symbolWinLayer節點下的pool
            }

            while (this.setArea.children.length > 0) {
              this.myPool.put(this.setArea.children[0]); //退還symbolWinLayer節點下的pool
            }
          }, 1);
        } //跑分


        runScore(stratScore, endScore, label) {
          var runScore = {
            score: stratScore
          }; //設置起始分

          tween(runScore).to(0.5, {
            score: endScore
          }, {
            onUpdate: () => {
              label.string = this.numberSpecification(runScore.score); //更新分數
            }
          }).call(() => {
            label.string = this.numberSpecification(endScore); //更新分數
          }).start();
        } //-------------------功能類-------------------/
        //-------------------大獎跑分相關-------------------/
        //執行大獎跑跑分(滑鼠點擊後直接跳結果)


        bigWinRunning() {
          var ws = this.demoInfoTA.symData[this.gameRound].ws; //共贏分

          var runningScoreLabel = this.bigWin.getChildByName("label").getComponent(Label);
          runningScoreLabel.string = "0"; //清空跑分

          this.bigWin.active = true; //顯示跑分物件

          this.bigWin.getComponent(Button).interactable = true; //啟用按鈕

          this.bigWin.getComponent(Animation).play("bigWinReset");
          var arrayId = 0;
          var bigWinSpine = this.bigWin.getChildByName("spine").getComponent(sp.Skeleton);
          bigWinSpine.setAnimation(0, this.bigWinSpineAnimName[arrayId] + '_begin', false); //進場

          bigWinSpine.setCompleteListener(() => {
            bigWinSpine.setAnimation(0, this.bigWinSpineAnimName[arrayId] + '_loop', true); //循環播放

            bigWinSpine.setCompleteListener(null); //結束監聽
          }); //等待跑分結束(回傳)

          var runBigWinScore = {
            runScore: 0
          };
          tween(runBigWinScore).to(this.runScoreTime, {
            runScore: ws
          }, {
            onUpdate: () => {
              runningScoreLabel.string = this.numberSpecification(runBigWinScore.runScore);

              if (arrayId < 4 && runBigWinScore.runScore > this.demoInfoTA.betScore * this.bigWinMultiple[arrayId]) {
                arrayId++; //判斷下個階段

                bigWinSpine.setAnimation(0, this.bigWinSpineAnimName[arrayId] + '_begin', false); //進場

                bigWinSpine.setCompleteListener(() => {
                  bigWinSpine.setAnimation(0, this.bigWinSpineAnimName[arrayId] + '_loop', true); //循環播放

                  bigWinSpine.setCompleteListener(null); //結束監聽
                });
              }
            }
          }).call(() => {
            this.bigWinOver(); //執行bigWin跑分結束
          }).tag(88).start();
        } //執行bigWin跑分結束


        bigWinOver() {
          var ws = this.demoInfoTA.symData[this.gameRound].ws; //共贏分

          this.bigWin.getComponent(Button).interactable = false; //禁用按鈕

          var runningScoreLabel = this.bigWin.getChildByName("label").getComponent(Label);
          runningScoreLabel.string = this.numberSpecification(ws);
          this.bigWin.getComponent(Animation).play("bigWinOver");
          this.scheduleOnce(() => {
            this.bigWin.active = false; //隱藏跑分物件
            //如果是胡牌結算階段

            if (this.result.active) this.showResultScore(); //顯示結算總得分
            else if (!this.freeGameMode) this.showWinTotalScore(ws); //顯示共贏得
            else this.scheduleOnce(() => {
              this.scatterWinTest(); //判斷是否進入免費模式
            }, 0.3);
          }, 2);
        } //大獎跑分畫面按下觸發


        endBigWinRun() {
          var ws = this.demoInfoTA.symData[this.gameRound].ws; //共贏分

          Tween.stopAllByTag(88);
          this.unscheduleAllCallbacks();
          var bigWinSpine = this.bigWin.getChildByName("spine").getComponent(sp.Skeleton);
          bigWinSpine.setCompleteListener(null); //結束監聽

          for (var i = 0; i < this.bigWinMultiple.length; i++) {
            if (ws < this.demoInfoTA.betScore * this.bigWinMultiple[i]) {
              bigWinSpine.setAnimation(0, this.bigWinSpineAnimName[i - 1] + '_loop', true);
              break;
            }

            if (i === this.bigWinMultiple.length - 1) bigWinSpine.setAnimation(0, this.bigWinSpineAnimName[i] + '_loop', true);
          }

          this.bigWinOver();
        } //-------------------大獎跑分相關-------------------/
        //-------------------免費遊戲表演相關-------------------/
        //判斷是否進入免費模式,判斷盤面的symbol


        scatterWinTest() {
          this.btnSpin.getChildByName('loopFx').active = false; //隱藏旋轉狀態
          //判斷是否有獲得免費圖示

          if (this.freeGet.active) {
            this.scheduleOnce(() => {
              this.freeGet.getComponent(Animation).play('freeGetExit');
              this.scheduleOnce(() => {
                this.freeGet.active = false; //隱藏免費遊戲紀錄
              }, 0.3);
              this.startFreeGame(); //表演時間結束後【執行freeGame表演流程】
            }, 0.3);
          } else this.resetGameSpin(); //重啟spin(等待0.3秒)

        } //執行freeGame流程


        startFreeGame() {
          this.slotBlackHide(); //隱藏遮黑層
          //如果是第一次進入免費遊戲，會先出現介面

          if (!this.freeGameMode) {
            var freeGameTimesUIOpacity = this.freeGameTimes.getComponent(UIOpacity);
            freeGameTimesUIOpacity.opacity = 0;
            this.freeGameTimes.active = true;
            tween(freeGameTimesUIOpacity).to(0.3, {
              opacity: 255
            }).start();
            var freeTopBgUIOpacity = this.freeTopBg.getComponent(UIOpacity);
            freeTopBgUIOpacity.opacity = 0;
            this.freeTopBg.active = true;
            tween(freeTopBgUIOpacity).to(0.3, {
              opacity: 255
            }).start(); // this.controlBtns.active = false;//隱藏操作按鈕區

            this.freeGameGet.active = true; //獲得免費遊戲

            this.scheduleOnce(() => {
              this.freeGameStart(); //自動執行免費遊戲開始
            }, 4.1);
          } else this.freeGameStart(); //自動執行免費遊戲開始

        } //免費遊戲開始


        freeGameStart() {
          Tween.stopAllByTag(88); //停止免費遊戲自動關閉視窗倒數

          if (!this.freeGameMode) {
            this.freeGameSet(true); //免費遊戲進退場設置(如果是第一次進入免費模式，需設置參數)

            this.freeGameGet.active = false;
          }

          this.scheduleOnce(() => {
            this.resetGameSpin(); //重啟遊戲spin轉動
          }, 0.3);
        } //免費遊戲進退場設置(免費遊戲狀態)


        freeGameSet(bool) {
          this.freeGameMode = bool; //免費模式開關
          //freeGame介面淡出

          if (!bool) {
            tween(this.freeTopBg.getComponent(UIOpacity)).to(0.3, {
              opacity: 0
            }).call(() => {
              this.freeTopBg.active = false;
            }).start();
            tween(this.freeGameTimes.getComponent(UIOpacity)).to(0.3, {
              opacity: 0
            }).call(() => {
              this.freeGameTimes.active = false;
            }).start();
          }

          if (!bool && this.autoGameMode) {
            this.btnAutoStop.active = true; //顯示自動停止按鈕

            this.btnSpin.active = false; //隱藏spin按鈕
          }
        } //免費遊戲結算退出(按鈕觸發或5秒自動觸發)


        freeGameExit(score) {
          Tween.stopAllByTag(88); //停止免費遊戲自動關閉視窗倒數

          this.freeGameSet(false); //免費遊戲進退場設置

          this.totalWin.getComponent(Animation).play("totalWinExit");
          this.scheduleOnce(() => {
            this.totalWin.active = false; //隱藏免費遊戲結算畫面

            this.showWinTotalScore(score); //顯示共贏得

            this.scheduleOnce(() => {
              this.resetGameSpin(); //重啟spin
            }, 0.3);
          }, 0.2);
        } //-------------------免費遊戲表演相關-------------------/


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnSpin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnStop", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnAutoStop", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnFastOff", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnFastOn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnAuto", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "betAdd", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "betLess", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnSetting", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "slotGameUI", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "symbolWinLayer", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "slotRun", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "slotBlack", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "slotListen", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "bigWin", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "freeGet", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "flowerArea", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "setArea", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "symbolSet", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "fontType", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "result", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "resultWinScore", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "freeGameGet", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "totalWin", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "freeTopBg", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "freeGameTimes", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "userCashLabel", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "winTotalScoreInfo", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "demoInfoTA", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "symbolResourceTA", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6b09fb9ec32e5a9da3cc43d1ad01e0c6261385b6.js.map