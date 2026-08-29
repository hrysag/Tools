System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GuiBasic, LoadingResManager, GUIEvent, Notifycation, GuiNotifycationSubbscriptionSubject, GameUtils, TweenMaxCocosPlugin, instantiate, find, Node, Button, Component, Sprite, Color, color, Layout, log, SoundsManager, GuisSystemView, Digits, BtnExchangeMoney, Fish1CreditExchangeGuiView, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfGuiBasic(extras) {
    _reporterNs.report("GuiBasic", "../../../../framework/game/guiCore/GuiBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiOption(extras) {
    _reporterNs.report("GuiOption", "../../../../framework/game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGUIEvent(extras) {
    _reporterNs.report("GUIEvent", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifycation(extras) {
    _reporterNs.report("Notifycation", "../../../../framework/abstract/mvvm/Notifycation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject(extras) {
    _reporterNs.report("GuiNotifycationSubbscriptionSubject", "../../../../framework/game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../framework/utils/TweenMaxPlugin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundsManager(extras) {
    _reporterNs.report("SoundsManager", "../../../../framework/logic/audio/SoundsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuisSystemView(extras) {
    _reporterNs.report("GuisSystemView", "../../../../framework/logic/views/guisSystemView/GuisSystemView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDigits(extras) {
    _reporterNs.report("Digits", "../../../../framework/utils/Digits", _context.meta, extras);
  }

  _export({
    BtnExchangeMoney: void 0,
    Fish1CreditExchangeGuiView: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      find = _cc.find;
      Node = _cc.Node;
      Button = _cc.Button;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      color = _cc.color;
      Layout = _cc.Layout;
      log = _cc.log;
    }, function (_unresolved_2) {
      GuiBasic = _unresolved_2.GuiBasic;
    }, function (_unresolved_3) {
      LoadingResManager = _unresolved_3.LoadingResManager;
    }, function (_unresolved_4) {
      GUIEvent = _unresolved_4.GUIEvent;
    }, function (_unresolved_5) {
      Notifycation = _unresolved_5.Notifycation;
    }, function (_unresolved_6) {
      GuiNotifycationSubbscriptionSubject = _unresolved_6.GuiNotifycationSubbscriptionSubject;
    }, function (_unresolved_7) {
      GameUtils = _unresolved_7.GameUtils;
    }, function (_unresolved_8) {
      TweenMaxCocosPlugin = _unresolved_8.TweenMaxCocosPlugin;
    }, function (_unresolved_9) {
      SoundsManager = _unresolved_9.SoundsManager;
    }, function (_unresolved_10) {
      GuisSystemView = _unresolved_10.GuisSystemView;
    }, function (_unresolved_11) {
      Digits = _unresolved_11.Digits;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68450OI/VBFRoAzDx8UwJi4", "Fish1CreditExchangeGuiView", undefined);
      /**
       * Created by EricHuang on 2023/8/02.
       */


      __checkObsolete__(['AudioSource', 'instantiate', 'Size', 'UITransform']);

      __checkObsolete__(['find']);

      __checkObsolete__(['Node']);

      __checkObsolete__(['Label']);

      __checkObsolete__(['Button']);

      __checkObsolete__(['Material']);

      __checkObsolete__(['Component']);

      __checkObsolete__(['SpriteFrame']);

      __checkObsolete__(['Sprite']);

      __checkObsolete__(['Color', 'color']);

      __checkObsolete__(['Layout']);

      //--test--
      __checkObsolete__(['log']);

      _export("BtnExchangeMoney", BtnExchangeMoney = class BtnExchangeMoney extends Component {
        //private _grayMaterial:Material;
        constructor() {
          super();
          this.id = void 0;
          this.money = void 0;
          //public label:Label;
          this.label = void 0;
          this.labelDisable = void 0;
          this.lastChoose = void 0;
          this._btn = void 0;
          this.id = -1;
          this.money = -1;
          this.label = null;
          this.labelDisable = null;
          this.lastChoose = null; //this._grayMaterial=null;
        }
        /*
        public setData(value:{id:number}):void
        {
         }*/


        onLoad() {
          //--lastChoose--這個要補
          var lableSpriteFrames = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('num_denom_').sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).sortDigitsSpriteFrames);
          this.label = this.node.getChildByName('label').addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
            error: Error()
          }), Digits) : Digits);
          this.label.resizeMode = Layout.ResizeMode.NONE;
          this.label.useCommand = false;
          this.label.textures = lableSpriteFrames;
          var labelDisableSpriteFrames = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('num_denomGray_').sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).sortDigitsSpriteFrames);
          this.labelDisable = this.node.getChildByName('labelNo').addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
            error: Error()
          }), Digits) : Digits);
          this.labelDisable.resizeMode = Layout.ResizeMode.NONE;
          this.labelDisable.useCommand = false;
          this.labelDisable.textures = labelDisableSpriteFrames;
          this._btn = this.node.getComponent(Button);
          this.lastChoose = this.node.getChildByName('light');
          this.lastChoose.active = false;
          /*
          this._grayMaterial=this.label.customMaterial;
          this.label=this.node.getChildByName('label').getComponent(Label);
          //let test=Material.get
          //-efe8e2a3-eace-427b-b4f1-cb8a937ec77d
          //-Sprite.grayscale:boolean (灰階)
          if(this.money>-1)
          {
              this.label.string=GameUtils.addCommas(this.money+'');
              log('check_default',this.label.customMaterial);
          }*/
        } //--改變滑鼠的狀態


        setMouseStatus(value) {
          if (value) {
            //--開啟滑鼠的狀態(可選) 
            //this.label.color=color(255,255,255,255);
            //this.label.customMaterial=null;
            this.label.node.active = true;
            this.labelDisable.node.active = false;
            this._btn.interactable = true;
          } else {
            //-https://ithelp.ithome.com.tw/m/articles/10271416
            this.label.node.active = false;
            this.labelDisable.node.active = true;
            this._btn.interactable = false; //--這邊就會自動把按鈕切換到disable的狀態
            //this.label.color=color(128,128,128,255);//--這樣改不夠灰

            /**
             * 可以透過uuid去抓到
             * this._grayMaterial=assetManager.assets.get('efe8e2a3-eace-427b-b4f1-cb8a937ec77d') as Material;
             */
            //this.label.customMaterial=this._grayMaterial;//-預設值=null
          }
        }

        setBtnActive(value) {
          this.node.active = value;
        }

        setDigits(value) {
          //log('check_digitsUiTransForm_label',this.label.node.getComponent(UITransform).contentSize);
          //log('check_digitsUiTransForm_labelDisable',this.labelDisable.node.getComponent(UITransform).contentSize);
          //log('check_digitsUiTransForm_Node',this.label.node);
          //this.label.node.getComponent(UITransform).contentSize=new Size(220,80);
          this.label.display(value, 'center'); //this.labelDisable.node.getComponent(UITransform).contentSize=new Size(220,80);

          this.labelDisable.display(value, 'center');
        }

      });

      _export("Fish1CreditExchangeGuiView", Fish1CreditExchangeGuiView = class Fish1CreditExchangeGuiView extends (_crd && GuiBasic === void 0 ? (_reportPossibleCrUseOfGuiBasic({
        error: Error()
      }), GuiBasic) : GuiBasic) {
        /*
        set active(isActive: boolean)
        {
            this.active= isActive;
        }*/

        /*
            ---特殊的規則-for捕魚-
            每次開啟的時候,若玩家持有餘額超過上限50萬,依然開啟換分選項給他
        */
        set balance(value) {
          this._balance = value;
        }

        set credit(value) {
          this._credit = value;
        } //--set ratio


        set base(n) {
          this._base = n;
          this._nowBase = n;
          this.setChangeRatio();
          /*
          let ary:string[] = n.split(':');
          n = ary[0] +  "," + ary[1];
          this._denomTx.displayWithStr(n , 'right');
          this._multiple = Number(ary[0]) / Number(ary[1]);
          log("set denom",n,this._multiple);
          */
        }

        get changeRatio() {
          return this._changeRatio;
        }

        set changeAuto(value) {
          this._changeAuto = value;
          this.changeAutoState();
        }

        constructor() {
          super();
          this._exchangelist = void 0;
          //換分按鈕可以換的金額
          this._changeAuto = void 0;
          //是否自動換分
          this._balance = void 0;
          //可用餘額
          this._credit = void 0;
          //兌換分數---玩家當前持有的遊戲分數(遊戲幣credit)
          this._lastExchange = void 0;
          //最後一個點的兌換金額
          this._exchange = void 0;
          //---注意!這邊用來表示玩家在面板中操作多少錢
          this._theMaxChange = void 0;
          //最大兌換分數
          this._balanceTx = void 0;
          this._creditTx = void 0;
          this._ratioTx = void 0;
          this._changeRatio = void 0;
          //兌換比例 ex: 1000:1 => 1000/1
          this._base = void 0;
          //所有兌換比例
          this._nowBase = void 0;
          //目前的兌換比例
          this._limitBalance = void 0;
          //---玩家最多可以換到的金額
          this._lastChoose = void 0;
          //--上一個選擇的分數按鈕
          this._aryExchangeBtns = void 0;
          //private _creditExchange:Node;
          this._container = void 0;
          //private _toggle:Toggle;---太肥又麻煩
          this._toggle = void 0;
          this._toggleTexture = void 0;
          this._labelAutoExchange = void 0;
          this._autoExchangeSencorZone = void 0;
          this._firstOpenFlag = void 0;
          this._enterGameBtn = void 0;
          this._exitGameBtn = void 0;

          //--auto exchange btnEvent
          this.autoExchangeBtnMouseHandler = e => {
            //log('check_toggle_evt',this._toggle.isChecked);
            (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
              error: Error()
            }), SoundsManager) : SoundsManager).getInstance().play('sounds/button'); //--可以透過toggle.isChecked來判斷現在核取的狀態

            this._changeAuto = !this._changeAuto; //this._toggle.isChecked=this._changeAuto;

            this.changeAutoState();
          };

          //--enter game or exit game btnEvent
          this.infoBtnHandler = e => {
            //log('check_infoBtnHandler',e.currentTarget.name);
            (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
              error: Error()
            }), SoundsManager) : SoundsManager).getInstance().play('sounds/button');
            var sendObj;
            var evtType;

            if (e.currentTarget.name == 'startBtn') {
              //---enter game
              sendObj = {
                exchangeRatio: this._nowBase,
                exchangeCredit: this._exchange,
                isAutoExchange: this._changeAuto,
                lastClick: this._lastExchange
              };
              evtType = (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).CREDIT_EXCHANGE_ENTER;
            } else {
              //--exit game
              sendObj = null;
              evtType = (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).CREDIT_EXCHANGE_EXIT;
            }

            this._exchange = 0;
            var sendData = {
              type: evtType,
              sendObj: sendObj
            };
            this.openOrClose(false); //--這邊直接送server

            (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
              error: Error()
            }), Notifycation) : Notifycation).getInstance().emit((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
              error: Error()
            }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, evtType, sendData);
          };

          //--btn mouseEventHandler
          this.creditExchangeBtnHandler = e => {
            log('check_clickEvt', e);
            (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
              error: Error()
            }), SoundsManager) : SoundsManager).getInstance().play('sounds/button'); //--注意!這個是btn的node送出來的事件,如果要在拿到btn相關的資料要在getComponent

            var target = e.currentTarget.getComponent(BtnExchangeMoney);
            this._exchange += target.money;
            this._lastExchange = target.money;
            this.resetLastChooseImg();
            this._lastChoose = target.id;
            this._aryExchangeBtns[this._lastChoose].lastChoose.active = true;
            this.reSetexChangePanel();
          };

          this._exchange = 0;
          this._credit = 0;
          this._nowBase = "1:1";
          this._base = "1:1";
          this._balance = 0;
          this._theMaxChange = 500000; //---最大兌換分數限制

          this._changeRatio = 1;
          this._changeRatio = parseInt(this._nowBase.split(":")[0]) / parseInt(this._nowBase.split(":")[1]);
          this._limitBalance = 0;
          this._lastChoose = -1;
          this._lastExchange = 0;
          this._exchangelist = [0, 500, 5000, 50000];
          this._aryExchangeBtns = [];
          this._changeAuto = true; //--自動換分預設為true

          this._toggle = null; //--creator的核取按鈕組件

          this._autoExchangeSencorZone = null;
          this._toggleTexture = {
            on: null,
            off: null
          };
          this._firstOpenFlag = false; //--第一次進場的表演

          this._container = null; //--這邊要給特定的layer
        }

        setData(value) {
          log('creditExchangeView_setData', value);
          this._container = find(value.other);
          super.setData(value);
        }
        /**
         * step2.
         * overrite it
         */


        init() {//--do something about initGuiData
        } //--override--step3
        //--layout ur gui


        setLayout() {
          var _this = this;

          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              var creditExchange = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getPrefab('prefab/gui/creditExchange'));
              var wholeContentWithoutBg = creditExchange.getChildByName('exchange');
              log('_creditExchangeNode', creditExchange); //let lableNode:Node=wholeContentWithoutBg.getChildByName('label');

              var titleSpriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('tx_creditexchange')[0];
              wholeContentWithoutBg.getChildByName('titletx').getComponent(Sprite).spriteFrame = titleSpriteFrame;
              var titleBalanceSpriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('tx_Balance')[0];
              wholeContentWithoutBg.getChildByName('labelL0').getComponent(Sprite).spriteFrame = titleBalanceSpriteFrame;
              var titleExchangeSpriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('tx_Exchange')[0];
              wholeContentWithoutBg.getChildByName('labelL1').getComponent(Sprite).spriteFrame = titleExchangeSpriteFrame;
              var titleRatioSpriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('tx_Denom')[0];
              wholeContentWithoutBg.getChildByName('labelL2').getComponent(Sprite).spriteFrame = titleRatioSpriteFrame;
              var autoExchangeBtnTitleSpriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('tx_AutoExchangeCredits')[0]; //wholeContentWithoutBg.getChildByName('autoExchange').getChildByName('label').getComponent(Sprite).spriteFrame=autoExchangeBtnTitleSpriteFrame;

              _this._labelAutoExchange = wholeContentWithoutBg.getChildByName('autoExchangelabel').getComponent(Sprite);
              _this._labelAutoExchange.spriteFrame = autoExchangeBtnTitleSpriteFrame;
              var digitsSpruteFrames = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('fnt_arialBd24_').sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).sortDigitsSpriteFrames); //--語系要另外處理

              _this._balanceTx = wholeContentWithoutBg.getChildByName('labelR1').addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
                error: Error()
              }), Digits) : Digits);
              _this._balanceTx.textures = digitsSpruteFrames;
              _this._balanceTx.useCommand = true;
              _this._balanceTx.symbolStr = ['-'];
              _this._balanceTx.symbolIndex = [14];
              _this._creditTx = wholeContentWithoutBg.getChildByName('labelR2').addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
                error: Error()
              }), Digits) : Digits);
              _this._creditTx.textures = digitsSpruteFrames;
              _this._creditTx.useCommand = true;
              _this._ratioTx = wholeContentWithoutBg.getChildByName('labelR3').addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
                error: Error()
              }), Digits) : Digits);
              _this._ratioTx.textures = digitsSpruteFrames; //this._ratioTx.useCommand=true;

              _this._ratioTx.symbolStr = [':', 'K', '-'];
              _this._ratioTx.symbolIndex = [12, 13, 14]; //log('check_exchangeDigits',digitsSpruteFrames,this._ratioTx);

              /*
              this._creditTx=lableNode.getChildByName('labelR2').getComponent(Label);
              
              this._ratioTx=lableNode.getChildByName('labelR3').getComponent(Label);
              */

              _this._enterGameBtn = wholeContentWithoutBg.getChildByName('controlBtn').getChildByName('startBtn');
              var enterSpriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('tx_Start')[0];
              wholeContentWithoutBg.getChildByName('startBtnlabel').getComponent(Sprite).spriteFrame = enterSpriteFrame;
              _this._exitGameBtn = wholeContentWithoutBg.getChildByName('controlBtn').getChildByName('exitBtn');
              var exitSpriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('tx_CashOutandExit')[0];
              wholeContentWithoutBg.getChildByName('exitBtnlabel').getComponent(Sprite).spriteFrame = exitSpriteFrame;

              _this._enterGameBtn.on(Node.EventType.TOUCH_START, _this.infoBtnHandler);

              _this._exitGameBtn.on(Node.EventType.TOUCH_START, _this.infoBtnHandler); //let autoExchangeBtnNode:Node=wholeContentWithoutBg.getChildByName('autoExchange');
              //log('autoExchangeBtnNode',autoExchangeBtnNode);
              //--這邊每次修改toggle.isChecked屬性,都會觸發toggle事件....
              //this._toggle=wholeContentWithoutBg.getChildByName('autoExchange').getChildByName('toggle').getComponent(Toggle);
              //this._toggle.interactable=false;//--因為toggle本身就是btn啦..你要讓他不隨著按鈕的反應作動應該禁止使用
              //this._toggle.node.on('toggle',this.autoExchangeBtnMouseHandler);
              //this._toggle.isChecked=false;


              _this._toggle = wholeContentWithoutBg.getChildByName('autoExchange').getChildByName('toggleSpr').getComponent(Sprite);
              _this._toggleTexture = {
                on: _this._toggle.spriteFrame,
                off: (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                  error: Error()
                }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrameFromSpriteAtlas('prefab/textures/fishHunterPopup', 'btn_switch_off')
              };
              log('check_toggle', _this._toggleTexture);
              _this._autoExchangeSencorZone = wholeContentWithoutBg.getChildByName('autoExchange');

              _this._autoExchangeSencorZone.on(Node.EventType.TOUCH_START, _this.autoExchangeBtnMouseHandler);

              _this.addChild(creditExchange);

              _this.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

              _this._container.addChild(_this);

              var btn;

              for (var i = 0; i < _this._exchangelist.length; i++) {
                btn = wholeContentWithoutBg.getChildByName('scoreSelect').getChildByName('score' + i).addComponent(BtnExchangeMoney);
                btn.money = _this._exchangelist[i];
                btn.id = i;
                btn.setDigits(_this._exchangelist[i]); //btn.node.addComponent(BlockInputEvents);
                //btn.node.on(Node.EventType.MOUSE_DOWN,this.creditExchangeBtnHandler);

                btn.node.on(Node.EventType.TOUCH_START, _this.creditExchangeBtnHandler); //btn.setMouseStatus(false);

                _this._aryExchangeBtns.push(btn);
              }

              _this.active = false;
              resolve();
            });
          })();
        } //--do something after layout

        /**
         * override-step4
         * do something after layoutgui
         */


        layoutComplete() {
          log('finsih_initExchangeGui');
        }

        setChangeRatio() {
          this._changeRatio = parseInt(this._nowBase.split(":")[0]) / parseInt(this._nowBase.split(":")[1]);
          var n = this._nowBase; //--test-
          //n='1:50000';
          //- let ary:string[]=baseRatio.split(":");

          var ary = n.split(':'); //n = ary[0] +  ":" + ary[1];
          //log('check_changeRatio',n);
          //this._ratioTx.string=GameUtils.repK(ary[0])+':'+GameUtils.repK(ary[1]);

          this._ratioTx.displayWithStr((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).repK(ary[0]) + ':' + (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).repK(ary[1]), 'right'); //---test-20230417
          //this._ratioTx.alpha=.5;
          //this._multiple = Number(ary[0]) / Number(ary[1]);
          //log("set denom",n,'1_',this._nowBase,'_2_',this._multiple,'_3_',this._changeRatio);    

        } //--這邊啟動


        updateOpenInfo(balance, credit, autoCredit) {
          this._balance = balance;
          this._credit = credit;
          this._changeAuto = autoCredit;
          this.changeAutoState();

          if (this._exchange < 0) {
            this._exchange = 0;
          }

          this.reSetexChangePanel();
          log('updateOpenInfo', balance, credit, autoCredit, this._lastChoose, this._lastExchange); //-1283 1234567 true 1 500

          if (this._lastExchange > 0 && this._lastChoose != -1) {
            //--是否要幫玩家先預設先選好上一次換的錢了???
            //this._exchange = this._lastExchange;
            this.resetLastChooseImg();
            this._aryExchangeBtns[this._lastChoose].lastChoose.active = true;
          }

          this.openOrClose(true);
        }

        checkExChangeShow() {
          return this.active;
        }

        openOrClose(f) {
          var c = this.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          if (f) {
            this.parent.addChild((_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
              error: Error()
            }), GuisSystemView) : GuisSystemView).BGMask);
            this.setScale(0, 0, 0);
            this.parent.insertChild(this, this.parent.children.length - 1);
            log('check_parent', this.parent);
            this.active = true;
            TweenMax.to(c, .1, {
              scale: 1,
              onComplete: () => {
                /**
                 * 20240424讓他強制重置btn的狀態
                 * (
                 * 因為使用者可能沒有完成over的動作下,面板就收起來了.
                 * 導致按鈕處在down的狀態下
                 * )
                 */
                this._enterGameBtn.getComponent(Button).interactable = false;
                this._exitGameBtn.getComponent(Button).interactable = false;
                this._enterGameBtn.getComponent(Button).interactable = true;
                this._exitGameBtn.getComponent(Button).interactable = true;

                if (!this._firstOpenFlag) {
                  this._firstOpenFlag = true;
                  (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
                    error: Error()
                  }), Notifycation) : Notifycation).getInstance().emit((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
                    error: Error()
                  }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                    error: Error()
                  }), GUIEvent) : GUIEvent).OPEN_EXCHANGE_FIRST);
                }
              }
            });
          } else {
            this.parent.removeChild((_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
              error: Error()
            }), GuisSystemView) : GuisSystemView).BGMask);
            TweenMax.to(c, .1, {
              scale: 0,
              onComplete: () => {
                this.active = false;
              }
            });
          }
        }

        changeAutoState() {
          var sprTexture = this._changeAuto ? this._toggleTexture.on : this._toggleTexture.off;
          this._toggle.spriteFrame = sprTexture;
          /*
          if(this._toggle.isChecked!=this._changeAuto)
          {
              //--改變核取的狀態
              this._toggle.isChecked=this._changeAuto;
          }*/

          log('changeAutoState', this._changeAuto);

          if (!this._changeAuto) {
            this._labelAutoExchange.color = color(208, 208, 208, 128);
          } else {
            //log('checkColor',Color.WHITE);
            this._labelAutoExchange.color = Color.WHITE;
          }
        }

        //--設定最後一次兌換的金額按鈕顯示
        resetLastChooseImg() {
          var len = this._aryExchangeBtns.length;

          for (var i = 0; i < len; i++) {
            this._aryExchangeBtns[i].lastChoose.active = false;
          }
        }

        removeOrAddListen(index, interactable) {
          if (this._aryExchangeBtns[index]) {
            //this._aryExchangeBtns[index].node
            //if(this._aryExchangeBtns[index].node.hasEventListener(Node.EventType.MOUSE_DOWN,this.creditExchangeBtnHandler))
            if (this._aryExchangeBtns[index].node.hasEventListener(Node.EventType.TOUCH_START, this.creditExchangeBtnHandler)) {
              //-btn.node.hasEventListener()
              //
              if (!interactable) {
                //this._aryExchangeBtns[index].node.off(Node.EventType.MOUSE_DOWN,this.creditExchangeBtnHandler);
                this._aryExchangeBtns[index].node.off(Node.EventType.TOUCH_START, this.creditExchangeBtnHandler);
              }
            } else {
              if (interactable) {
                //this._aryExchangeBtns[index].node.on(Node.EventType.MOUSE_DOWN,this.creditExchangeBtnHandler);
                this._aryExchangeBtns[index].node.on(Node.EventType.TOUCH_START, this.creditExchangeBtnHandler);
              }
            }
          }
        }
        /**
         * 只秀小數點最後兩位
         */


        reSetexChangePanel() {
          //this._creditTx.string=this._exchange+'';
          this._creditTx.display(this._exchange, 'right');

          var exBalance = this.floatSubtraction(this._balance, this.floatMultipaction(this._exchange, this._changeRatio));
          var showBalance = exBalance.toString();
          var index = showBalance.indexOf(".");

          if (index != -1) {
            if (showBalance[showBalance.length - 1] == "0") {
              showBalance = showBalance.substring(0, showBalance.length - 1);

              if (showBalance.substring(index, 1) == "0") {
                //--小數點後一位為0--去掉0
                //this._balanceTx.string=showBalance.substring(0,showBalance.length-2);
                this._balanceTx.displayWithStr(showBalance.substring(0, showBalance.length - 2), 'right');
              } else {
                //--小數點後一位不為0(不去0,秀2位)
                //this._balanceTx.string= showBalance.substring(0,showBalance.length-1);    
                this._balanceTx.displayWithStr(showBalance.substring(0, showBalance.length - 1), 'right');
              }
            } else {
              //--直接秀(最後一位不等於0)
              //this._balanceTx.string=showBalance.substring(0,showBalance.length);
              this._balanceTx.displayWithStr(showBalance.substring(0, showBalance.length), 'right');
            }
          } else {
            //--整數
            //this._balanceTx.string=showBalance.substring(0,showBalance.length);
            log('check_minusValue', showBalance.substring(0, showBalance.length));

            this._balanceTx.displayWithStr(showBalance.substring(0, showBalance.length), 'right');
          }

          this.allExBtnOpen();
          this._limitBalance = Math.floor(this.getRound(exBalance / this._changeRatio, 10));
          log('check__limitBalance', this._limitBalance);
          /**
           * 20240409 rd7在玩家balance為負值還是會送進來
           * PS-他們不檔玩家進遊戲
           */

          if (this._limitBalance >= 0) {
            this._aryExchangeBtns[0].setDigits(this._limitBalance); //--正式打開20240402


            this._aryExchangeBtns[0].money = this._limitBalance; //--正式打開20240402
          } //this._aryExchangeBtns[0].setDigits(3);//--測試數據,正式關閉20240402
          //this._aryExchangeBtns[0].money=3;//--測試數據,正式關閉20240402
          //log('reSetexChangePanel::','this._balance::'+this._balance+'\n'+'exBalance::'+exBalance+'\n'+'this._exchange::'+this._exchange+'\n'+'this._changeRatio::'+this._changeRatio+'\n'+'showBalance::'+showBalance+'\n'+'index::'+index+'\n'+'this._limitBalance::'+this._limitBalance);


          this.setExBtnState(); //---正式打開20240402
        }

        setExBtnState() {
          //return;
          var len = this._aryExchangeBtns.length;

          for (var i = 0; i < len; i++) {
            if (i == 0) {
              if (this._aryExchangeBtns[i].money < 500) {
                if (this._aryExchangeBtns[i].money > 0) {
                  this._aryExchangeBtns[i].setMouseStatus(true);

                  this.removeOrAddListen(i, true); //this._aryExchangeBtns[i].setBtnActive(true);
                } else {
                  this._aryExchangeBtns[i].setMouseStatus(false);

                  this.removeOrAddListen(i, false);

                  this._aryExchangeBtns[i].setBtnActive(false);
                }
              } else {
                //---關閉玩家全部餘額的按鈕
                this._aryExchangeBtns[i].setMouseStatus(false);

                this._aryExchangeBtns[i].setBtnActive(false);

                this.removeOrAddListen(i, false);
              }
            }
            /*
            let f1=(this._theMaxChange - this._exchange < this._aryExchangeBtns[i].money)?true:false;
            let f2=(this._balance - this._exchange * this._changeRatio < this._aryExchangeBtns[i].money * this._changeRatio)?true:false;
            let f3=(this._exchange + this._credit > this._theMaxChange - this._aryExchangeBtns[i].money)?true:false;
            
            log('this._theMaxChange',this._theMaxChange,'\n','this._balance',this._balance,'\n','this._exchange',this._exchange,'\n','this._aryExchangeBtns[i].money',this._aryExchangeBtns[i].money,'\n','this._credit',this._credit,'\n',' this._changeRatio', this._changeRatio);
            log("check_status_",f1,f2,f3,this._aryExchangeBtns[i].money);
            */


            if (this._theMaxChange - this._exchange < this._aryExchangeBtns[i].money || this._balance - this._exchange * this._changeRatio < this._aryExchangeBtns[i].money * this._changeRatio || this._exchange + this._credit > this._theMaxChange - this._aryExchangeBtns[i].money //this._aryExchangeBtns[i].money==0
            ) {
              //---lock
              this._aryExchangeBtns[i].setMouseStatus(false);

              this.removeOrAddListen(i, false); //log('close_'+this._aryExchangeBtns[i].money);
            } else {
              this._aryExchangeBtns[i].setMouseStatus(true);

              this.removeOrAddListen(i, true); //log('open_'+this._aryExchangeBtns[i].money);
              //this._aryExchangeBtns[i].setBtnActive(true);
              //log('setExBtnState__opennnn');
            }
          }
        }

        allExBtnOpen() {
          //return;
          var len = this._aryExchangeBtns.length;

          for (var i = 0; i < len; i++) {
            this._aryExchangeBtns[i].setMouseStatus(true);

            this._aryExchangeBtns[i].setBtnActive(true);
          }
        }

        getRound(num, len) {
          //log("getRound__"+(Math.round(num * Math.pow(10, len)) / Math.pow(10, len)));
          return Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
        }
        /**20230328--這是nela 搞得
        * 為了避免減法出現浮點數錯誤
        * @param arg1 
        * @param arg2 
        */


        floatSubtraction(arg1, arg2) {
          var r1, r2, m, n;

          try {
            r1 = arg1.toString().split(".")[1].length;
          } catch (e) {
            r1 = 0;
          }

          try {
            r2 = arg2.toString().split(".")[1].length;
          } catch (e) {
            r2 = 0;
          }

          m = Math.pow(10, Math.max(r1, r2));
          n = r1 >= r2 ? r1 : r2;
          return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
        }
        /**20230328--這是nela 搞得
        * 為了避免乘法出現浮點數錯誤
        * @param arg1 
        * @param arg2 
        */


        floatMultipaction(arg1, arg2) {
          var m = 0,
              s1 = arg1.toString(),
              s2 = arg2.toString();

          try {
            m += s1.split(".")[1].length;
          } catch (e) {}

          try {
            m += s2.split(".")[1].length;
          } catch (e) {}

          return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7bc0ba6eeb91cafd7bfef248c6bd55f59c3a02c.js.map