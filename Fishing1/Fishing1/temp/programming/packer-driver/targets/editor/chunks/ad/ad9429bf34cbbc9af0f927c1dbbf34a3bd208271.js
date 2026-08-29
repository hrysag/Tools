System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GuiBasic, LoadingResManager, TweenMaxCocosPlugin, GUIEvent, Notifycation, GuiNotifycationSubbscriptionSubject, GameUtils, CocosGameSetting, Digits, Node, find, instantiate, Toggle, Button, UITransform, v3, Size, Layers, SoundsManager, log, Fish1MenuGuiView, _crd;

  function _reportPossibleCrUseOfGuiBasic(extras) {
    _reporterNs.report("GuiBasic", "../../../../framework/game/guiCore/GuiBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiOption(extras) {
    _reporterNs.report("GuiOption", "../../../../framework/game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../framework/utils/TweenMaxPlugin", _context.meta, extras);
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

  function _reportPossibleCrUseOfSoundsManager(extras) {
    _reporterNs.report("SoundsManager", "../../../../framework/logic/audio/SoundsManager", _context.meta, extras);
  }

  _export("Fish1MenuGuiView", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Toggle = _cc.Toggle;
      Button = _cc.Button;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Size = _cc.Size;
      Layers = _cc.Layers;
      log = _cc.log;
    }, function (_unresolved_2) {
      GuiBasic = _unresolved_2.GuiBasic;
    }, function (_unresolved_3) {
      LoadingResManager = _unresolved_3.LoadingResManager;
    }, function (_unresolved_4) {
      TweenMaxCocosPlugin = _unresolved_4.TweenMaxCocosPlugin;
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
      SoundsManager = _unresolved_11.SoundsManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e036kk6DdFMaggSdY4ojjM", "Fish1MenuGuiView", undefined);
      /**
       * Created by EricHuang on 2023/9/28.
       */


      __checkObsolete__(['Node', 'find', 'instantiate', 'Toggle', 'Button', 'UITransform', 'v3', 'Size', 'Component', 'Layers', 'SpriteFrame', 'Layout', 'Vec3']);

      __checkObsolete__(['log']);

      _export("Fish1MenuGuiView", Fish1MenuGuiView = class Fish1MenuGuiView extends (_crd && GuiBasic === void 0 ? (_reportPossibleCrUseOfGuiBasic({
        error: Error()
      }), GuiBasic) : GuiBasic) {
        get ogPosition() {
          return this._ogPosition;
        }

        constructor() {
          super();
          //--裝載全部的GUI的node
          this._menuStage = void 0;
          //--側拉選單
          this._sideContentContainer = void 0;
          this._aryBtn = void 0;
          this._menuBackBtn = void 0;
          this._menuToolBtn = void 0;
          this._isSound = void 0;
          this._ratioDigits = void 0;
          this._ogPosition = void 0;

          this.btnEventHandler = e => {
            log('hello_menuBtn', e); //let cocosMax:TweenMaxCocosPlugin;

            (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
              error: Error()
            }), SoundsManager) : SoundsManager).getInstance().play('sounds/button');

            switch (e.node.name) {
              case 'settingBtn':
                this.openMenu();
                break;

              case 'closeBtn':
                this.closeMenuBar();
                break;

              case 'soundBtn':
              case 'exchangeBtn':
              case 'historyBtn':
              case 'ruleBtn':
              case 'exitBtn':
                let type = e.node['type_status'];
                let sendObj = null;
                log('menubar_tools', e.node['type_status']);

                if (e.node['type_status'] == (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                  error: Error()
                }), GUIEvent) : GUIEvent).BTN_MUTE) {
                  //let c:Toggle=e.node.getComponent(Toggle);
                  //--checked=false-->未觸發,true--->觸發
                  this._isSound = !this._isSound;
                  sendObj = this._isSound; //log('soundBtn_checked',c.isChecked);
                } else if (e.node['type_status'] == (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                  error: Error()
                }), GUIEvent) : GUIEvent).BTN_EXCHANGE) {
                  //-OPEN_EXCHANGE
                  type = (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                    error: Error()
                  }), GUIEvent) : GUIEvent).OPEN_EXCHANGE;
                }

                (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
                  error: Error()
                }), Notifycation) : Notifycation).getInstance().emitSync((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
                  error: Error()
                }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, type, sendObj);
                break;
            }
          };

          this._aryBtn = [];
          this._menuBackBtn = null;
          this._menuToolBtn = null;
          this._isSound = true;
        }
        /**
         * step1.
         * overrite it
         * @param value guiData before layout
        */


        setData(value) {
          super.setData(value);
          this._menuStage = find(value.other);
        }
        /**
         * step2.
         * overrite it
         */


        init() {//this._defultType=[GUIEvent.BTN_MUTE,GUIEvent.BTN_EXCHANGE,GUIEvent.BTN_HISTORY,GUIEvent.BTN_HELP,GUIEvent.BTN_EXIT];
        }

        async setLayout() {
          return new Promise(resolve => {
            //--啟動按鈕
            this._menuToolBtn = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getPrefab('prefab/gui/settingBtn'));

            this._menuToolBtn.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

            this._menuStage.addChild(this._menuToolBtn);

            this._ogPosition = v3(this._menuToolBtn.position.x, this._menuToolBtn.position.y);
            this._menuToolBtn.active = true;
            this._menuToolBtn.getComponent(Toggle).interactable = false;

            this._menuToolBtn.setPosition(v3(this._ogPosition.x - 200, this._ogPosition.y)); //--展開工具bar


            this._sideContentContainer = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getPrefab('prefab/gui/settingBar'));

            this._sideContentContainer.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

            this._menuStage.addChild(this._sideContentContainer); //----rd7沒有deposit功能(會員儲值)
            //let aryTextures:string[]=['soundBtn','exchangeBtn','historyBtn','ruleBtn','exitBtn'];


            let defultType = [{
              type: (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).BTN_MUTE,
              id: 'soundBtn'
            }, {
              type: (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).BTN_EXCHANGE,
              id: 'exchangeBtn'
            }, {
              type: (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).BTN_HISTORY,
              id: 'historyBtn'
            }, {
              type: (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).BTN_HELP,
              id: 'ruleBtn'
            }, {
              type: (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).BTN_EXIT,
              id: 'exitBtn'
            }];
            let len = defultType.length;
            log('check_menuBarNode', this._sideContentContainer);
            let node; //let btnToggle:Toggle;

            let btn;

            for (let i = 0; i < len; i++) {
              node = this._sideContentContainer.getChildByName(defultType[i].id);
              log('check_btn', node);

              if (i == 0) {
                btn = node.getComponent(Toggle);
                node.on(Toggle.EventType.CLICK, this.btnEventHandler);
              } else {
                btn = node.getComponent(Button);

                if (node.name == 'exchangeBtn') {
                  let ratioNode = new Node('ratioNode');
                  ratioNode.layer = Layers.Enum.UI_2D;
                  this._ratioDigits = ratioNode.addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
                    error: Error()
                  }), Digits) : Digits);
                  ratioNode.addComponent(UITransform); //ratioNode.addComponent(BlockInputEvents);

                  let digitsTextures = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                    error: Error()
                  }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('fnt_arialBd24_').sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                    error: Error()
                  }), GameUtils) : GameUtils).sortDigitsSpriteFrames);
                  log('digitsTextures', digitsTextures);
                  this._ratioDigits.textures = digitsTextures;
                  this._ratioDigits.symbolStr = [':', 'K'];
                  this._ratioDigits.symbolIndex = [12, 13];
                  node.addChild(ratioNode);
                  this.updateRatio('1000:1');
                  ratioNode.setPosition(v3(ratioNode.position.x, ratioNode.position.y - digitsTextures[0].originalSize.height));
                }

                node.on(Button.EventType.CLICK, this.btnEventHandler);
              }

              btn.interactable = false;
              node['type_status'] = defultType[i].type;
              this._aryBtn[i] = {
                id: defultType[i].id,
                type: defultType[i].type,
                node: node,
                btn: btn
              };
            } //---收合按鈕


            this._menuBackBtn = this._sideContentContainer.getChildByName('closeBtn');
            this._menuBackBtn.active = false;

            this._menuBackBtn.on(Button.EventType.CLICK, this.btnEventHandler);

            let dis = this._sideContentContainer.position.x - this._sideContentContainer.getComponent(UITransform).contentSize.width;

            this._sideContentContainer.setPosition(v3(dis, this._sideContentContainer.position.y));

            log('check_menuToolBarPos', this._sideContentContainer.position);
            this._sideContentContainer.active = false;

            this._menuToolBtn.on(Toggle.EventType.CLICK, this.btnEventHandler); //EXIT_OPTION_STATUS.type=3;
            //this.setMenuStatus();//--test
            //---完成的時候做


            resolve();
          });
        }

        activeBtn(value) {
          for (let i of this._aryBtn) {
            i.btn.interactable = value;
          }
        }

        getBtn(index) {
          let c = null;
          let len = this._aryBtn.length;

          for (let i = 0; i < len; i++) {
            //let cc=this._aryBtn[i].btn;
            if (this._aryBtn[i].type == index) {
              c = this._aryBtn[i].node;
              break;
            }
          }

          return c;
        }

        removeBtnData(index) {
          let c = null;
          let len = this._aryBtn.length;
          let btn;

          for (let i = 0; i < len; i++) {
            if (this._aryBtn[i].type == index) {
              c = this._aryBtn[i].node;
              btn = this._aryBtn[i].btn;

              if (btn instanceof Toggle) {
                c.off(Toggle.EventType.CLICK, this.btnEventHandler);
              } else {
                c.off(Button.EventType.CLICK, this.btnEventHandler);
              }

              this._aryBtn.splice(i, 1);

              break;
            }
          }
        }

        openMenu() {
          //--啟動按鈕  
          this._menuToolBtn.getComponent(Toggle).interactable = false;
          this._menuToolBtn.active = false;

          let cocosMax = this._sideContentContainer.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          this._sideContentContainer.active = true;
          TweenMax.to(cocosMax, .1, {
            x: -960,
            onComplete: () => {
              this._menuBackBtn.active = true;
              this.activeBtn(true); //this._menuBackBtn.interactive=true;
              //this._sideContentContainer.interactive=false;
            }
          });
        }

        closeMenuBar() {
          this._menuBackBtn.active = false;
          this.activeBtn(false);

          let dis = this._sideContentContainer.position.x - this._sideContentContainer.getComponent(UITransform).contentSize.width;

          let cocosMax = this._sideContentContainer.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          TweenMax.to(cocosMax, .1, {
            x: dis,
            onComplete: () => {
              this._menuToolBtn.active = true;
              this._menuToolBtn.getComponent(Toggle).interactable = true;
              this._sideContentContainer.active = false;
            }
          });
        } //--等待美術完成切好數字圖片


        updateRatio(baseRatio) {
          //baseRatio='2500:1';
          let ary = baseRatio.split(":"); //log("updateRatio>>>>>>"+baseRatio,ary,GameUtils.repK(ary[0]));

          if (baseRatio == '') {
            //--noexchange時,關閉比例
            this._ratioDigits.node.active = false; //this._ratioDigits.visible=false;
            //this._foNoExchangeItem.visible=true;
          } else {
            this._ratioDigits.node.active = true; //this._foNoExchangeItem.visible=false;
            //this._ratioDigits.visible=true;

            this._ratioDigits.displayWithStr((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).repK(ary[0]) + ':' + (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).repK(ary[1]), 'center');
          }
        }
        /**
         * 
         * @param value base(比例資料,需要顯示在按鈕上面)
         */


        setRatioBase(value) {
          this.updateRatio(value);
        }

        lockExchangeBtn(b) {
          for (let i of this._aryBtn) {
            if (i.type == (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).BTN_EXCHANGE) {
              i.btn.interactable = b;
              break;
            }
          }
        }

        getCompontItem(id) {
          let r;

          if (id == '_menuToolBtn') {
            r = this._menuToolBtn.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
          }

          return r;
        } //--廳主機八要隱藏某些按鈕


        setMenuStatus() {
          let scaleValue = 1; //--(exitoption=3 & mobile device)

          let btn;
          /*
          CommandStr.EXIT_OPTION_STATUS=3;
          this._isCash=true;
          */

          if ((_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_ExitOption == 3) {
            //--關閉離開按鈕
            btn = this.getBtn((_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).BTN_EXIT);

            this._sideContentContainer.removeChild(btn);

            this.removeBtnData((_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).BTN_EXIT);
            scaleValue = 0.83; //-預設
          }
          /*
          if(!this._isCash || DeviceAndEnvironment.Device.isMobile())
          {
              let btnDeposit:PIXI.Container=this.getBtn(GuiCore.GUIEvent.BTN_DEPOSIT);
              this._sideContentContainer.removeChild(btnDeposit);//---儲值按鈕
              this.removeBtnData(GuiCore.GUIEvent.BTN_DEPOSIT);
              
              btn=this.getBtn(GuiCore.GUIEvent.BTN_EXIT);
              if(btn!=null)
              {
                  btn.y = btnDeposit.y;
                  scaleValue=0.83;//-預設
                  
               }else{
                  
                  scaleValue=0.7;
              }
              
          }*/


          let uiTrannsForm = this._sideContentContainer.getComponent(UITransform);

          let ogContentSize = uiTrannsForm.contentSize;
          uiTrannsForm.contentSize = new Size(ogContentSize.width, ogContentSize.height * scaleValue);

          let btnContentSize = this._aryBtn[0].node.getComponent(UITransform).contentSize.height;

          let value = 0;
          let spacing = 60;
          let starIndex = 240;

          for (let i = 0; i < this._aryBtn.length; i++) {
            value = starIndex - btnContentSize * i - spacing;

            this._aryBtn[i].node.setPosition(v3(this._aryBtn[i].node.position.x, value));
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ad9429bf34cbbc9af0f927c1dbbf34a3bd208271.js.map