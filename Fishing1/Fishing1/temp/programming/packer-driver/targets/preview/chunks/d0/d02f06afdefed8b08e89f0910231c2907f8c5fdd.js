System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GuiBasic, TweenMaxCocosPlugin, LoadingResManager, GUIEvent, Notifycation, GuiNotifycationSubbscriptionSubject, GameUtils, CocosGameSetting, Digits, find, instantiate, Toggle, UITransform, v3, Button, Animation, Component, Color, Sprite, log, PropType, GuisSystemView, SoundsManager, OddsBtnInfo, OddsPropBtn, AutoShootAndAimBtn, SelectRatioToggleBtn, Fish1AutoShootGuiView, _crd, OddsData;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfGuiBasic(extras) {
    _reporterNs.report("GuiBasic", "../../../../framework/game/guiCore/GuiBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOddsInfo(extras) {
    _reporterNs.report("OddsInfo", "../../../../framework/game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiOption(extras) {
    _reporterNs.report("GuiOption", "../../../../framework/game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../framework/utils/TweenMaxPlugin", _context.meta, extras);
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

  function _reportPossibleCrUseOfCocosGameSetting(extras) {
    _reporterNs.report("CocosGameSetting", "../../../../framework/utils/CocosGameSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDigits(extras) {
    _reporterNs.report("Digits", "../../../../framework/utils/Digits", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropType(extras) {
    _reporterNs.report("PropType", "../../../model/Fish1ModelDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuisSystemView(extras) {
    _reporterNs.report("GuisSystemView", "../../../../framework/logic/views/guisSystemView/GuisSystemView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundsManager(extras) {
    _reporterNs.report("SoundsManager", "../../../../framework/logic/audio/SoundsManager", _context.meta, extras);
  }

  _export({
    OddsBtnInfo: void 0,
    OddsPropBtn: void 0,
    AutoShootAndAimBtn: void 0,
    SelectRatioToggleBtn: void 0,
    Fish1AutoShootGuiView: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Toggle = _cc.Toggle;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Button = _cc.Button;
      Animation = _cc.Animation;
      Component = _cc.Component;
      Color = _cc.Color;
      Sprite = _cc.Sprite;
      log = _cc.log;
    }, function (_unresolved_2) {
      GuiBasic = _unresolved_2.GuiBasic;
    }, function (_unresolved_3) {
      TweenMaxCocosPlugin = _unresolved_3.TweenMaxCocosPlugin;
    }, function (_unresolved_4) {
      LoadingResManager = _unresolved_4.LoadingResManager;
    }, function (_unresolved_5) {
      GUIEvent = _unresolved_5.GUIEvent;
    }, function (_unresolved_6) {
      Notifycation = _unresolved_6.Notifycation;
    }, function (_unresolved_7) {
      GuiNotifycationSubbscriptionSubject = _unresolved_7.GuiNotifycationSubbscriptionSubject;
    }, function (_unresolved_8) {
      GameUtils = _unresolved_8.GameUtils;
    }, function (_unresolved_9) {
      CocosGameSetting = _unresolved_9.CocosGameSetting;
    }, function (_unresolved_10) {
      Digits = _unresolved_10.Digits;
    }, function (_unresolved_11) {
      PropType = _unresolved_11.PropType;
    }, function (_unresolved_12) {
      GuisSystemView = _unresolved_12.GuisSystemView;
    }, function (_unresolved_13) {
      SoundsManager = _unresolved_13.SoundsManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c451QFAcNMEbLEVfbxGPlq", "Fish1AutoShootGuiView", undefined);
      /**
       * Created by EricHuang on 2023/9/28.
       */


      __checkObsolete__(['Node', 'find', 'instantiate', 'Toggle', 'UITransform', 'v3', 'Size', 'SpriteFrame', 'Button', 'Animation', 'Vec3']);

      __checkObsolete__(['Component']);

      __checkObsolete__(['Color', 'color']);

      __checkObsolete__(['Sprite']);

      __checkObsolete__(['log']);

      _export("OddsData", OddsData = /*#__PURE__*/function (OddsData) {
        OddsData["ODDS_LOW"] = "odds_low";
        OddsData["ODDS_MEDIUM"] = "odds_medium";
        OddsData["ODDS_HIGH"] = "odds_high";
        OddsData["ODDS_BOSS"] = "odds_boss";
        return OddsData;
      }({}));

      _export("OddsBtnInfo", OddsBtnInfo = class OddsBtnInfo extends Component {
        constructor() {
          super();
          this._isCanHit = void 0;
          this.odds = void 0;
          this.atkPriority = void 0;
          this.isChoose = void 0;
          this.id = void 0;
          this.oddsStatus = void 0;
          this._choiceImg = void 0;
          this._status = void 0;
          this._btnName = void 0;

          this.oddsBtnEventHandler = e => {
            log('oddsBtnEventHandler', e, e.node.name);
            (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
              error: Error()
            }), SoundsManager) : SoundsManager).getInstance().play('sounds/button');
            this.changestatus();
            this.node.emit('setOddsEvt', {
              type: 'setOddsEvt',
              sendObj: this._status
            });
          };

          this._isCanHit = true;
          this.isChoose = false;
          this.oddsStatus = '';
          this.odds = '';
          this.id = -1;
          this.atkPriority = -1;
          this._status = -1;
        }

        init(name, id) {
          this._choiceImg = this.node.getChildByName('select');
          this._choiceImg.active = false;
          this.id = id;
          this._btnName = name; //this.setIsCanHit(false);

          this.node.getComponent(Toggle).disabledColor = Color.BLACK;
          this.node.on(Toggle.EventType.CLICK, this.oddsBtnEventHandler);
        }

        setOdds(odds, isCanHit) {
          this.odds = odds;
          this._isCanHit = isCanHit;
          this.node.getChildByName('label').getComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
            error: Error()
          }), Digits) : Digits).displayWithStr('x' + odds, 'center');
          this.oddsStatus = this.checkOddsStaus(odds);
          log('check_btnNode', this.oddsStatus);
        }

        onLoad() {}

        select() {
          if (!this._choiceImg.active) {
            this.changestatus();
          }
        }

        clean() {
          if (this._choiceImg.active) {
            this.changestatus();
          }
        }

        setIsCanHit(value) {
          //return;
          this._isCanHit = value; //this._btn.interactive=value;
          //this._btn.setMouseStatus(value);

          if (this._isCanHit) {
            //---變回原色
            //this._imgItem.tint=16777215;
            //this._lockImg.visible=false;
            //this.node.getComponent(Toggle).enabled=false;
            this.node.getComponent(Toggle).interactable = false;
          } else {
            //----反灰  
            //this._imgItem.tint=0x444444;
            //this._lockImg.visible=true;
            this.node.getComponent(Toggle).interactable = false;
          }
        }

        checkOddsStaus(odds) {
          var r = '';
          var ary = odds.split('~');
          log('check_oddsValue', ary);
          var len = ary.length;
          var target = 0;

          for (var i = 0; i < len; i++) {
            target = Number(ary[i]);

            if (target <= 10) {
              r = OddsData.ODDS_LOW;
            } else if (target > 10 && target <= 50) {
              r = OddsData.ODDS_MEDIUM;
            } else if (target > 50 && target <= 200) {
              r = OddsData.ODDS_HIGH;
            } else if (target >= 500) {
              r = OddsData.ODDS_BOSS;
            }
          }

          return r;
        }

        changestatus() {
          this._status *= -1;
          this.isChoose = !this.isChoose;
          this._choiceImg.active = this.isChoose; //--this.isChoose=true 被選取
          //log('check_isChoose',this.id,this.isChoose);
          //---PS--20230323-底層的touchend事件失效...

          /*
          if(DeviceAndEnvironment.Device.isMobile() && !this.isChoose)
          {
              this._btn.forceBtnOut();
          }*/
        }

      });

      _export("OddsPropBtn", OddsPropBtn = class OddsPropBtn extends Component {
        //--proptype
        constructor() {
          super();
          this._choiceImg = void 0;
          this._status = void 0;
          this.isChoose = void 0;
          this.id = void 0;

          this.propBtnEventHandler = e => {
            log('propBtnEventHandler', e, e.node.name);
            (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
              error: Error()
            }), SoundsManager) : SoundsManager).getInstance().play('sounds/button');
            this.changestatus();
            this.node.emit('setPropEvt', {
              type: 'setPropEvt',
              sendObj: {
                status: this._status,
                propType: this.id
              }
            });
          };

          this._status = -1;
        }

        init() {
          this._choiceImg = this.node.getChildByName('on');
          this._choiceImg.active = false;
          this.node.getComponent(Toggle).enabled = false;
          this.node.on(Toggle.EventType.CLICK, this.propBtnEventHandler);
        }

        setEnabled(value) {
          this.node.getComponent(Toggle).enabled = value;

          if (!value) {
            this.clean();
          }
        }

        select() {
          if (!this._choiceImg.active) {
            this.changestatus();
          }
        }

        clean() {
          if (this._choiceImg.active) {
            this.changestatus();
          }
        }

        changestatus() {
          this._status *= -1;
          this.isChoose = !this.isChoose;
          this._choiceImg.active = this.isChoose;
        }

      });

      _export("AutoShootAndAimBtn", AutoShootAndAimBtn = class AutoShootAndAimBtn extends Component {
        set useImgFlag(value) {
          this._useImgFlag = value;
        }

        set strAniNode(value) {
          this._strAniNode = value;
        }

        set ogPosition(value) {
          this._ogPosition = v3(value.x, value.y);
        }

        get ogPosition() {
          return this._ogPosition;
        }

        constructor() {
          super();
          this.id = void 0;
          this._useingImage = void 0;
          this._animation = void 0;
          this._aniNode = void 0;
          this._status = void 0;
          this._useImgFlag = void 0;
          this._setInterval = void 0;
          this._strAniNode = void 0;
          this._ogPosition = void 0;
          this.id = '';
          this._status = -1;
          this._strAniNode = '';
          this._useImgFlag = false;
        }

        init() {
          this._setInterval = window.setInterval(() => {
            if (this.node) {
              window.clearInterval(this._setInterval); //this.checkNode();
            }
          }, 200);
        } //private checkNode():void


        onLoad() {
          this._animation = this.node.getChildByName('lockOn').getChildByName('light').getComponent(Animation);
          var clips = this._animation.clips;
          this._animation.defaultClip = clips[0];

          this._animation.stop();

          this._aniNode = this.node.getChildByName('lockOn');
          this._aniNode.active = false;
          this._useingImage = this.node.getChildByName('lockOn').getComponent(Sprite);
          this._useingImage.enabled = false; //this._useingImage.color=color(255,255,255,0);

          log('check_onLoadBTN', this._useingImage.enabled);
        }

        useBtn(f) {
          log('check_autoBtn', this.node, this, this.id, f, this._animation);

          if (f) {
            this._aniNode.active = true; //--use

            if (this._useImgFlag) {
              //this._useingImage.color=color(255,255,255,255);
              this._useingImage.enabled = true;
            }

            this._animation.play();

            this._status = 1;
          } else {
            this._aniNode.active = false; //--lock

            if (this._useImgFlag) {
              //this._useingImage.color=color(255,255,255,0);
              this._useingImage.enabled = false;
            }

            this._animation.stop();

            this._status = -1;
          }
        }

      });

      _export("SelectRatioToggleBtn", SelectRatioToggleBtn = class SelectRatioToggleBtn extends Component {
        constructor() {
          super();
          this.isChoose = void 0;
          this.id = void 0;
          this.oddsStatus = void 0;
          this._tickOnImage = void 0;
          this._tickOffImage = void 0;
          this.isChoose = false;
          this.id = '';
          this.oddsStatus = '';
        }

        init(atlasId, frameId) {
          this._tickOnImage = this.node.getChildByName('tickOn');
          this._tickOffImage = this.node.getChildByName('tickOff');
          /*
          let textureOff:SpriteFrame=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas(atlasId,frameId+'_off');
          
          let textureOn:SpriteFrame=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas(atlasId,frameId+'_on');
          */

          var textureOff = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(atlasId + '_off')[0];
          var textureOn = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(atlasId + '_on')[0];
          this._tickOnImage.getComponent(Sprite).spriteFrame = textureOn;
          this._tickOffImage.getComponent(Sprite).spriteFrame = textureOff;
          this.changeStatus();
        }

        changeStatus() {
          this._tickOnImage.active = this.isChoose;
          this._tickOffImage.active = !this.isChoose;
        }

        select() {
          this.isChoose = true;
          this.changeStatus();
        }

        clean() {
          this.isChoose = false;
          this.changeStatus();
        }

      });

      _export("Fish1AutoShootGuiView", Fish1AutoShootGuiView = class Fish1AutoShootGuiView extends (_crd && GuiBasic === void 0 ? (_reportPossibleCrUseOfGuiBasic({
        error: Error()
      }), GuiBasic) : GuiBasic) {
        //--20240424 btn用的guiContainer
        get isAutoShoot() {
          return this._isAutoShoot;
        }

        constructor() {
          super();
          //--裝載全部的GUI的node
          this._stage = void 0;
          this._autoShootBtn = void 0;
          this._aimBtn = void 0;
          this._isAimShoot = void 0;
          this._isAutoShoot = void 0;
          this._autoPanel = void 0;
          this._oddsData = void 0;
          this._aryOddsBtnInfo = void 0;
          this._aryPropBtn = void 0;
          this._mapSelectRatioToggleBtn = void 0;
          this._digitsTexturePath = void 0;
          this._chooseStatus = void 0;
          this._pickAutoProps = void 0;
          this._mapTotalOddsNum = void 0;
          this._btnContainer = void 0;

          this.btnEventHandler = e => {
            log('hello_btnEventHandler', e); //Notifycation.getInstance().emitSync(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,type,sendObj);
            //-autoBtn
            //-lockBtn

            (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
              error: Error()
            }), SoundsManager) : SoundsManager).getInstance().play('sounds/button');

            if (e.node.name == 'autoBtn') {
              find('Canvas/PlayerNameText').active = false;

              this._stage.addChild((_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
                error: Error()
              }), GuisSystemView) : GuisSystemView).BGMask);

              var index = this._stage.children.length - 1;

              this._stage.insertChild(this._autoPanel, index);

              this._autoPanel.active = true;
            } else if (e.node.name == 'lockBtn') {
              //--aim
              this._isAimShoot = !this._isAimShoot;

              this._aimBtn.getComponent(AutoShootAndAimBtn).useBtn(this._isAimShoot);

              (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
                error: Error()
              }), Notifycation) : Notifycation).getInstance().emitSync((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
                error: Error()
              }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).AIM_SHOOT, this._isAimShoot);
            }
          };

          this.propBtnClickHandler = e => {
            //-sendObj:{status:this._status,propType:this.id}
            if (e.sendObj.status == -1) {
              //--取消
              var index = this._pickAutoProps.indexOf(e.sendObj.propType);

              if (index != -1) {
                this._pickAutoProps.splice(index, 1);

                this._aryPropBtn[e.sendObj.propType - 1].clean();
              }
            } else {
              this._aryPropBtn[e.sendObj.propType - 1].select();

              this._pickAutoProps.push(e.sendObj.propType);
            }

            log('propBtnClickHandler', this._pickAutoProps);
          };

          /**
           * 
           * 檢查現在魚按鈕選得怎樣了 我的全選\清除按鈕要如何顯示?
           */
          this.itemAfterClickHandler = e => {
            this._chooseStatus += e.sendObj;
            log('check_selectStatus', e, this._chooseStatus, this._mapSelectRatioToggleBtn);

            if (this._chooseStatus <= 0) {
              for (var i in this._mapSelectRatioToggleBtn) {
                //-isChoose
                if (this._mapSelectRatioToggleBtn[i].isChoose) {
                  this._mapSelectRatioToggleBtn[i].clean();
                }
              }

              this._pickAutoProps.length = 0;
            } //-逐一選取連動快速選取倍率的按鈕20240311


            this.checkToggleAfterSelectStatus();
            this.checkAutoUsePropBtnsStatus();
          };

          this.btnOddsEventFunction = e => {
            log('btnOddsEventFunction', e.node.name);
            (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
              error: Error()
            }), SoundsManager) : SoundsManager).getInstance().play('sounds/button');

            switch (e.node.name) {
              case 'cancelBtn':
                this.cleanAll();
                this.cleanAllProp();
                this.cleanAllRatioBtn();
                this._chooseStatus = 0;
                this.checkAutoUsePropBtnsStatus(); //this.selectOrClean();     

                break;

              case 'allSelectBtn':
                this.selectAll();
                this.selectAllProp();
                this.selectAllRatioBtn(); //this.selectOrClean();     

                this._chooseStatus = this._aryOddsBtnInfo.length;
                this.checkAutoUsePropBtnsStatus(); //log('check_allSelectBtn',this._chooseStatus);

                break;

              /*
              case 'closeBtn':
                 this.closeAndconfirmBtn();
                
              break;
              */

              case 'confirmBtn':
                //--進入遊戲
                //--選取的魚
                this.closeAndconfirmBtn();
                break;
            }
          };

          this.btnToggleOddsEventFunction = e => {
            //let ischecked=e.target.getComponent(Toggle).isChecked;---有夠雷的,有時候送的資料是錯的
            log('check_btnToggleOddsEventFunction', e);
            this._mapSelectRatioToggleBtn[e.node.name].isChoose = !this._mapSelectRatioToggleBtn[e.node.name].isChoose;

            this._mapSelectRatioToggleBtn[e.node.name].changeStatus(); //e.node['status']*=-1;
            //let ischecked=(e.node['status']==1)?true:false;


            var ischecked = this._mapSelectRatioToggleBtn[e.node.name].isChoose; //log('check_btnOddsEventFunction',e.node['status'],e.node.name,e.target,ischecked,e.isChecked);

            var targetType = '';
            (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
              error: Error()
            }), SoundsManager) : SoundsManager).getInstance().play('sounds/button');
            log('toggleBtn_Click', e.node);
            targetType = e.node.getComponent(SelectRatioToggleBtn).oddsStatus;

            if (ischecked) {
              this.selectSpecialItem(targetType);
            } else {
              this.cleanSpecialItem(targetType);
            } //this.selectOrClean();

          };

          this._isAimShoot = false;
          this._isAutoShoot = false;
          this._aryOddsBtnInfo = [];
          this._pickAutoProps = [];
          this._aryPropBtn = [];
          this._mapSelectRatioToggleBtn = {};
          this._chooseStatus = 0; //--要刪掉了,現在沒有用了

          this._mapTotalOddsNum = {
            [OddsData.ODDS_LOW]: 0,
            [OddsData.ODDS_MEDIUM]: 0,
            [OddsData.ODDS_HIGH]: 0,
            [OddsData.ODDS_BOSS]: 0
          };
          log('check__mapTotalOddsNum', this._mapTotalOddsNum);
        }
        /**
         * step1.
         * overrite it
         * @param value guiData before layout
        */


        setData(value) {
          super.setData(value);
          this._stage = find(value.other.container);
          this._btnContainer = find(value.other.btnContainer);
          this._oddsData = value.other.odds;
          this._digitsTexturePath = value.other.digitsPath;
        }
        /**
         * step2.
         * overrite it
         */


        init() {
          this.setOdds(); //this._defultType=[GUIEvent.BTN_MUTE,GUIEvent.BTN_EXCHANGE,GUIEvent.BTN_HISTORY,GUIEvent.BTN_HELP,GUIEvent.BTN_EXIT];
        }

        setLayout() {
          var _this = this;

          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              //this._stage.addChild(this);
              //--啟動按鈕
              //--autoShoot btn
              _this._autoShootBtn = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getPrefab('prefab/gui/autoBtn')); //-AutoShootAndAimBtn

              _this._autoShootBtn.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

              var autobtnComponent = _this._autoShootBtn.addComponent(AutoShootAndAimBtn);

              autobtnComponent.useImgFlag = true;
              autobtnComponent.id = '_autoShootBtn'; //this._stage.addChild(this._autoShootBtn);

              _this._btnContainer.addChild(_this._autoShootBtn);

              autobtnComponent.ogPosition = _this._autoShootBtn.position;

              _this._autoShootBtn.setPosition(v3(autobtnComponent.ogPosition.x - 200, autobtnComponent.ogPosition.y));

              _this._autoShootBtn.on(Toggle.EventType.CLICK, _this.btnEventHandler);

              _this._autoShootBtn.getComponent(Toggle).interactable = false; //--lock btn

              _this._aimBtn = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getPrefab('prefab/gui/lockBtn'));

              _this._aimBtn.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

              var aimbtnComponent = _this._aimBtn.addComponent(AutoShootAndAimBtn);

              aimbtnComponent.useImgFlag = false;
              aimbtnComponent.id = '_aimBtn'; //this._stage.addChild(this._aimBtn);

              _this._btnContainer.addChild(_this._aimBtn);

              aimbtnComponent.ogPosition = _this._aimBtn.position;

              _this._aimBtn.setPosition(v3(aimbtnComponent.ogPosition.x - 200, aimbtnComponent.ogPosition.y));

              _this._aimBtn.on(Toggle.EventType.CLICK, _this.btnEventHandler);

              _this._aimBtn.getComponent(Toggle).interactable = false; //--自動射擊面板

              _this._autoPanel = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getPrefab('prefab/gui/autoShotSetting'));

              _this._stage.addChild(_this._autoPanel); //--title---


              var languageSpriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrameFromSpriteAtlas('fishHunter_' + (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_Lang, 'tx_AutoShot');
              _this._autoPanel.children[0].getChildByName('title').getComponent(Sprite).spriteFrame = languageSpriteFrame; //languageSpriteFrame=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas('fishHunter_'+CocosGameSetting.Game_Lang,'tx_AutoUse');

              languageSpriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('tx_AutoUse')[0]; //--title---
              //this._autoPanel.children[0].getChildByName('autoItem').getChildByName('title').getComponent(Sprite).spriteFrame=languageSpriteFrame;

              _this._autoPanel.children[0].getChildByName('titleAutoProp').getComponent(Sprite).spriteFrame = languageSpriteFrame;

              var btnDatas = _this._autoPanel.children[0].getChildByName('fishSelect').children;

              log('check_Panel_container', _this._autoPanel, btnDatas, _this._oddsData);
              var digitsTextures = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(_this._digitsTexturePath).sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                error: Error()
              }), GameUtils) : GameUtils).sortDigitsSpriteFrames);
              log('autoShootGui_digitsTextures', digitsTextures);
              var digits;
              var btn;
              var index = -1;
              var oddsType; //for(let i:number=0;i< this._oddsData.length;i++)

              var _loop = function _loop(i) {
                var matchNode = btnDatas.find(cObj => cObj.name === i.name);
                index += 1;

                if (matchNode) {
                  log('check_objName', matchNode.name, index, i);
                  var size = matchNode.getComponent(UITransform).contentSize;
                  btn = matchNode.addComponent(OddsBtnInfo);
                  btn.init(i.name, i.id);
                  digits = matchNode.getChildByName('label').addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
                    error: Error()
                  }), Digits) : Digits);
                  digits.textures = digitsTextures;
                  digits.symbolStr = ['~', 'x'];
                  digits.symbolIndex = [10, 11];
                  var xValue = -787.5 + index % 8 * size.width;
                  var yValue = -90 - Math.floor(index / 8) * (size.height + 2);
                  matchNode.setPosition(v3(xValue, yValue)); //digits.displayWithStr(this._oddsData[i].odds,'center');

                  btn.setOdds(i.odds, i.isCanHit);
                  btn.atkPriority = i.atkPriority; //--攻擊優先順序

                  matchNode.on('setOddsEvt', _this.itemAfterClickHandler);
                  _this._aryOddsBtnInfo[index] = btn; //--reset map

                  var _oddsType = _this._aryOddsBtnInfo[index].oddsStatus;
                  _this._mapTotalOddsNum[_oddsType] += 1;
                }
              };

              for (var i of _this._oddsData) {
                _loop(i);
              }

              _this.sortAtkPriority(_this._aryOddsBtnInfo);

              log('btnOdds', _this._aryOddsBtnInfo); //-this._autoPanel

              var propNode = _this._autoPanel.children[0].getChildByName('autoItem').getChildByName('itemCallBtn');

              var propBtn = propNode.addComponent(OddsPropBtn);
              propBtn.init();
              propBtn.id = (_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
                error: Error()
              }), PropType) : PropType).PROP_CALL;
              propNode.on('setPropEvt', _this.propBtnClickHandler);

              _this._aryPropBtn.push(propBtn);

              propNode = _this._autoPanel.children[0].getChildByName('autoItem').getChildByName('itemFrozenBtn');
              propBtn = propNode.addComponent(OddsPropBtn);
              propBtn.init();
              propBtn.id = (_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
                error: Error()
              }), PropType) : PropType).PROP_FREEZE;
              propNode.on('setPropEvt', _this.propBtnClickHandler);

              _this._aryPropBtn.push(propBtn);

              propNode = _this._autoPanel.children[0].getChildByName('autoItem').getChildByName('itemCrazyBtn');
              propBtn = propNode.addComponent(OddsPropBtn);
              propBtn.init();
              propBtn.id = (_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
                error: Error()
              }), PropType) : PropType).PROP_CRAZY;
              propNode.on('setPropEvt', _this.propBtnClickHandler);

              _this._aryPropBtn.push(propBtn);
              /*
              let btnNodePath=[
                {top:'select',nodeId:'lowOdds',frameId:'tx_low_odd_fish',atlasId:'fishHunter_'+CocosGameSetting.Game_Lang},
                {top:'select',nodeId:'mediumOdds',frameId:'tx_mid_odd_fish',atlasId:'fishHunter_'+CocosGameSetting.Game_Lang},
                {top:'select',nodeId:'highOdds',frameId:'tx_high_odd_fish',atlasId:'fishHunter_'+CocosGameSetting.Game_Lang},
                {top:'select',nodeId:'boss',frameId:'tx_boss_fish',atlasId:'fishHunter_'+CocosGameSetting.Game_Lang},
                {top:'controlBtn',nodeId:'cancelBtn',frameId:'txBtn_clear',atlasId:'fishHunter_'+CocosGameSetting.Game_Lang},
                {top:'controlBtn',nodeId:'allSelectBtn',frameId:'txBtn_selectAll',atlasId:'fishHunter_'+CocosGameSetting.Game_Lang},
                {top:'controlBtn',nodeId:'confirmBtn',frameId:'txBtn_enter',atlasId:'fishHunter_'+CocosGameSetting.Game_Lang},
                {top:'closeBtn',nodeId:''}
              ];
              */


              var btnNodePath = [{
                top: 'select',
                oddsStatus: OddsData.ODDS_LOW,
                nodeId: 'lowOdds',
                frameId: 'tx_low_odd_fish',
                atlasId: 'tx_low_odd_fish'
              }, {
                top: 'select',
                oddsStatus: OddsData.ODDS_MEDIUM,
                nodeId: 'mediumOdds',
                frameId: 'tx_mid_odd_fish',
                atlasId: 'tx_mid_odd_fish'
              }, {
                top: 'select',
                oddsStatus: OddsData.ODDS_HIGH,
                nodeId: 'highOdds',
                frameId: 'tx_high_odd_fish',
                atlasId: 'tx_high_odd_fish'
              }, {
                top: 'select',
                oddsStatus: OddsData.ODDS_BOSS,
                nodeId: 'boss',
                frameId: 'tx_boss_fish',
                atlasId: 'tx_boss_fish'
              }, {
                top: 'controlBtn',
                nodeId: 'cancelBtn',
                frameId: 'txBtn_clear',
                atlasId: 'tx_clear'
              }, {
                top: 'controlBtn',
                nodeId: 'allSelectBtn',
                frameId: 'txBtn_selectAll',
                atlasId: 'tx_select_all'
              }, {
                top: 'controlBtn',
                nodeId: 'confirmBtn',
                frameId: 'txBtn_enter',
                atlasId: 'tx_enter'
              } //{top:'closeBtn',nodeId:''}
              ];

              for (var j of btnNodePath) {
                if (j.nodeId == '') {
                  _this._autoPanel.children[0].getChildByName(j.top).on(Button.EventType.CLICK, _this.btnOddsEventFunction);
                } else {
                  if (_this._autoPanel.children[0].getChildByName(j.top).getChildByName(j.nodeId).getComponent(Toggle)) {
                    _this._autoPanel.children[0].getChildByName(j.top).getChildByName(j.nodeId).on(Toggle.EventType.CLICK, _this.btnToggleOddsEventFunction); //--幹,超雷的,有時候isChecked 的資料會相反
                    //this._autoPanel.children[0].getChildByName(j.top).getChildByName(j.nodeId)['status']=-1;


                    var ratioToggleComponent = _this._autoPanel.children[0].getChildByName(j.top).getChildByName(j.nodeId).addComponent(SelectRatioToggleBtn);

                    ratioToggleComponent.id = j.nodeId;
                    ratioToggleComponent.init(j.atlasId, j.frameId);
                    ratioToggleComponent.oddsStatus = j.oddsStatus;
                    _this._mapSelectRatioToggleBtn[j.nodeId] = ratioToggleComponent;
                  } else {
                    //let languageBtnSpriteFrame=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas(j.atlasId,j.frameId);
                    //let languageBtnSpriteFrame:SpriteFrame;
                    var languageBtnSpriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                      error: Error()
                    }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(j.atlasId)[0];
                    _this._autoPanel.children[0].getChildByName(j.frameId).getComponent(Sprite).spriteFrame = languageBtnSpriteFrame;
                    /*
                    if(j.top=='controlBtn')
                    {
                      
                      languageBtnSpriteFrame=LoadingResManager.getInstance().getSpriteFrames(j.atlasId)[0];
                      
                      this._autoPanel.children[0].getChildByName(j.frameId).getComponent(Sprite).spriteFrame=languageBtnSpriteFrame;
                      
                     }else{
                       //--這裡根本不會跑
                      languageBtnSpriteFrame=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas(j.atlasId,j.frameId);
                       this._autoPanel.children[0].getChildByName(j.top).getChildByName(j.nodeId).getChildByName('tx').getComponent(Sprite).spriteFrame=languageBtnSpriteFrame;
                     }*/

                    _this._autoPanel.children[0].getChildByName(j.top).getChildByName(j.nodeId).on(Button.EventType.CLICK, _this.btnOddsEventFunction);
                  }
                }
              }

              _this._autoPanel.active = false;
              log('check_autoShootGui', _this._aryOddsBtnInfo, _this._mapTotalOddsNum); //---完成的時候做

              resolve();
            });
          })();
        }

        cleanAllAutoShootData() {
          this.cleanAll();
          this.cleanAllProp();
          this.cleanAllRatioBtn();
          this._chooseStatus = 0;
          this._isAutoShoot = false;
          this.checkAutoUsePropBtnsStatus();

          this._autoShootBtn.getComponent(AutoShootAndAimBtn).useBtn(this._isAutoShoot);
        }

        openShow(otherBtn, otherOgPosition) {
          var aryAni = [otherBtn, this._autoShootBtn, this._aimBtn];
          var aryOgpositions = [otherOgPosition.x, this._autoShootBtn.getComponent(AutoShootAndAimBtn).ogPosition.x, this._aimBtn.getComponent(AutoShootAndAimBtn).ogPosition.x];
          var len = aryAni.length;
          var tweenComponent;
          var count = 0;

          for (var i = 0; i < len; i++) {
            tweenComponent = aryAni[i].getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
            TweenMax.to(tweenComponent, .7, {
              x: aryOgpositions[i],
              delay: i * 0.08,
              ease: Bounce.easeOut,
              onComplete: () => {
                count++;

                if (count == len) {
                  //--unlockall
                  for (var j of aryAni) {
                    j.getComponent(Toggle).interactable = true;
                  }
                }
              }
            });
          }
        }

        locakAim(b) {
          log('check_gui_locakAim_', b);
          this._isAimShoot = b;

          this._aimBtn.getComponent(AutoShootAndAimBtn).useBtn(this._isAimShoot);
        }

        /**
         * 舊版的全選/清除是做在一起的複合式按鈕,所以要切換狀態
         * 新版-全選/清除/確定是分開3個個別的按鈕,所以這個功能可以刪除了
         */
        selectOrClean() {//--全選/確認/清除
        }
        /**
         * 逐一選取連動快速選取倍率的按鈕
         * 20240311
         */


        checkToggleAfterSelectStatus() {
          //log('autoBtnItem_click',this._aryOddsBtnInfo, this._mapTotalOddsNum);
          var len = this._aryOddsBtnInfo.length;
          var checkObj = {};
          checkObj[OddsData.ODDS_LOW] = 0;
          checkObj[OddsData.ODDS_MEDIUM] = 0;
          checkObj[OddsData.ODDS_HIGH] = 0;
          checkObj[OddsData.ODDS_BOSS] = 0;

          for (var i = 0; i < len; i++) {
            if (this._aryOddsBtnInfo[i].isChoose) {
              if (this._aryOddsBtnInfo[i].oddsStatus == OddsData.ODDS_LOW) {
                checkObj[OddsData.ODDS_LOW] += 1;
              } else if (this._aryOddsBtnInfo[i].oddsStatus == OddsData.ODDS_MEDIUM) {
                checkObj[OddsData.ODDS_MEDIUM] += 1;
              } else if (this._aryOddsBtnInfo[i].oddsStatus == OddsData.ODDS_HIGH) {
                checkObj[OddsData.ODDS_HIGH] += 1;
              } else {
                //--boss
                checkObj[OddsData.ODDS_BOSS] += 1;
              }
            }
          } //log('check_autoDataFromToggle',checkObj);


          for (var j in this._mapTotalOddsNum) {
            var open = false;

            if (this._mapTotalOddsNum[j] == checkObj[j]) {
              //log('got the same count',j,this._mapSelectRatioToggleBtn);
              open = true;
            }

            for (var k in this._mapSelectRatioToggleBtn) {
              if (j == this._mapSelectRatioToggleBtn[k].oddsStatus) {
                if (open) {
                  if (!this._mapSelectRatioToggleBtn[k].isChoose) {
                    this._mapSelectRatioToggleBtn[k].select();
                  }
                } else {
                  if (this._mapSelectRatioToggleBtn[k].isChoose) {
                    this._mapSelectRatioToggleBtn[k].clean();
                  }
                }

                break;
              }
            }
          }
        } //--他只會改變狀態


        checkAutoUsePropBtnsStatus() {
          var f = this._chooseStatus > 0 ? true : false;

          for (var i = 0; i < this._aryPropBtn.length; i++) {
            this._aryPropBtn[i].setEnabled(f);
          }
        }

        closeAndconfirmBtn() {
          //--選取的魚
          var returnData = this.getData(); //--選取道具

          var propData = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).deepCloneForObject(this._pickAutoProps);

          if (returnData.length > 0 || propData.length > 0) {
            this._isAutoShoot = true;
          } else {
            this._isAutoShoot = false;
          }

          this._autoShootBtn.getComponent(AutoShootAndAimBtn).useBtn(this._isAutoShoot);

          this._stage.removeChild((_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
            error: Error()
          }), GuisSystemView) : GuisSystemView).BGMask);

          this._autoPanel.active = false;
          find('Canvas/PlayerNameText').active = true; //this.emit(GuiCore.GUIEvent.AUTO_SHOOT,new H5PIXIEvent.BaseEvent(GuiCore.GUIEvent.AUTO_SHOOT,returnData));

          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().emitSync((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).AUTO_SHOOT, {
            lockdata: returnData,
            props: propData
          });
          log('checkAutoshootdata', returnData);
        }

        //--送出前取得玩家選擇的資料
        getData() {
          //--id=fishtype  
          var data = [];
          var len = this._aryOddsBtnInfo.length;

          for (var i = 0; i < len; i++) {
            if (this._aryOddsBtnInfo[i].isChoose) {
              data.push({
                id: this._aryOddsBtnInfo[i].id,
                odds: this._aryOddsBtnInfo[i].odds
              });
            }
          }

          return data;
        }

        selectAllRatioBtn() {
          for (var i in this._mapSelectRatioToggleBtn) {
            this._mapSelectRatioToggleBtn[i].select();
          }
        }

        selectAllProp() {
          var len = this._aryPropBtn.length;
          this._pickAutoProps.length = 0;

          for (var i = 0; i < len; i++) {
            this._aryPropBtn[i].select();

            this._pickAutoProps.push(this._aryPropBtn[i].id);
          }

          log('selectAllProp', this._pickAutoProps);
        }

        selectAll() {
          var len = this._aryOddsBtnInfo.length;

          for (var i = 0; i < len; i++) {
            if (this._aryOddsBtnInfo[i]._isCanHit) {
              this._aryOddsBtnInfo[i].select();
            }
          } //this._chooseStatus=this._aryOddsBtnInfo.length;

        }

        cleanAll() {
          var len = this._aryOddsBtnInfo.length;

          for (var i = 0; i < len; i++) {
            this._aryOddsBtnInfo[i].clean();
          } //this._chooseStatus=0; 

        }

        cleanAllProp() {
          var len = this._aryPropBtn.length;

          for (var i = 0; i < len; i++) {
            this._aryPropBtn[i].clean();
          }

          this._pickAutoProps.length = 0;
        }

        cleanAllRatioBtn() {
          for (var i in this._mapSelectRatioToggleBtn) {
            this._mapSelectRatioToggleBtn[i].clean();
          }
        }

        selectSpecialItem(value) {
          var len = this._aryOddsBtnInfo.length;
          var count = 0;

          for (var i = 0; i < len; i++) {
            if (this._aryOddsBtnInfo[i].oddsStatus == value && this._aryOddsBtnInfo[i]._isCanHit && !this._aryOddsBtnInfo[i].isChoose) {
              //-!this._aryOddsBtnInfo[i].isChoose裡面有檢察
              this._aryOddsBtnInfo[i].select();

              count++;
            }
          }

          this._chooseStatus += count;
          this.checkAutoUsePropBtnsStatus();
        }

        cleanSpecialItem(value) {
          var len = this._aryOddsBtnInfo.length;
          var count = 0;

          for (var i = 0; i < len; i++) {
            if (this._aryOddsBtnInfo[i].oddsStatus == value && this._aryOddsBtnInfo[i].isChoose) {
              this._aryOddsBtnInfo[i].clean();

              count++;
            }
          }

          this._chooseStatus -= count;
          this.checkAutoUsePropBtnsStatus();
        }
        /**
         * 
         * @param oddsType 賠率(低中高)type 
         * PS-true=該賠率尚有可選物件的狀態,false=該賠率全選狀態
         */


        checkSpSeclectOrClean(oddsType) {
          var len = this._aryOddsBtnInfo.length;
          var total = this._mapTotalOddsNum[oddsType];

          for (var i = 0; i < len; i++) {
            if (this._aryOddsBtnInfo[i].oddsStatus == oddsType) {
              if (this._aryOddsBtnInfo[i].isChoose) {
                total -= 1;
              }
            }
          }

          var f = total > 0 ? true : false;
          return f;
        }
        /**
         * 指定面板排序(自動打擊會依照這個順序來決定.所以打擊順序要另外排序)
         */


        setOdds() {
          var len = this._oddsData.length;

          for (var i = 0; i < len; i++) {
            var sort = this._oddsData[i].name.split('_');

            log('SetOdds_function', sort);

            switch (sort[1]) {
              //--for ub 
              case '01':
                this._oddsData[i].sortNum = 1;
                this._oddsData[i].atkPriority = 1;
                break;

              case '20':
                this._oddsData[i].sortNum = 3;
                this._oddsData[i].atkPriority = 5;
                break;

              case '21':
                this._oddsData[i].sortNum = 4;
                this._oddsData[i].atkPriority = 6;
                break;

              case '22':
                this._oddsData[i].sortNum = 5;
                this._oddsData[i].atkPriority = 7;
                break;

              case '23':
                this._oddsData[i].sortNum = 6;
                this._oddsData[i].atkPriority = 8;
                break;

              case '24':
                this._oddsData[i].sortNum = 7;
                this._oddsData[i].atkPriority = 9;
                break;

              case '15':
                this._oddsData[i].atkPriority = 3;
                this._oddsData[i].sortNum = 0;
                break;

              case '16':
                this._oddsData[i].atkPriority = 4;
                this._oddsData[i].sortNum = 0;
                break;

              case '19':
              case '18':
              case '17':
              case '14':
                this._oddsData[i].atkPriority = 3.5;
                this._oddsData[i].sortNum = 2;
                break;

              default:
                this._oddsData[i].atkPriority = 2;
                this._oddsData[i].sortNum = 2;
                break;
            }
          }

          this.sort(this._oddsData);
          log('check_odds after sort', this._oddsData);
        }
        /**
         * 排序自動射擊的資料 依照sortNum排序後,同個sortNum再依照odds排序
         * @param o 
         */


        sort(o) {
          //log("check_autoShootObj",o);
          var data = o.sort((a, b) => {
            if (a["sortNum"] > b["sortNum"]) {
              return -1;
            }

            if (a["sortNum"] < b["sortNum"]) {
              return 1;
            }

            if (Number(a["odds"]) > Number(b["odds"])) {
              return -1;
            }

            if (Number(a["odds"]) < Number(b["odds"])) {
              return 1;
            }

            return a - b;
          });
        }

        sortAtkPriority(o) {
          //log("check_autoShootObj",o);
          var data = o.sort((a, b) => {
            if (a["atkPriority"] > b["atkPriority"]) {
              return -1;
            }

            if (a["atkPriority"] < b["atkPriority"]) {
              return 1;
            }

            return a - b;
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d02f06afdefed8b08e89f0910231c2907f8c5fdd.js.map