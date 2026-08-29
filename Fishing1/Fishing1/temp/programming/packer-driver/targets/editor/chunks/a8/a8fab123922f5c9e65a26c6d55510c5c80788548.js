System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GuiBasic, LoadingResManager, TweenMaxCocosPlugin, i18n, GUIEvent, Notifycation, GuiNotifycationSubbscriptionSubject, GuisSystemView, Button, find, instantiate, Node, Label, Color, Layers, UITransform, Size, HorizontalTextAlignment, VerticalTextAlignment, Overflow, Sprite, math, log, SystemMessageGuiView, _crd;

  function _reportPossibleCrUseOfGuiBasic(extras) {
    _reporterNs.report("GuiBasic", "../../../../game/guiCore/GuiBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiOption(extras) {
    _reporterNs.report("GuiOption", "../../../../game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../utils/TweenMaxPlugin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfi18n(extras) {
    _reporterNs.report("i18n", "../../../../utils/i18n/LanguageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGUIEvent(extras) {
    _reporterNs.report("GUIEvent", "../../../../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifycation(extras) {
    _reporterNs.report("Notifycation", "../../../../abstract/mvvm/Notifycation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject(extras) {
    _reporterNs.report("GuiNotifycationSubbscriptionSubject", "../../../../game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuisSystemView(extras) {
    _reporterNs.report("GuisSystemView", "../GuisSystemView", _context.meta, extras);
  }

  _export("SystemMessageGuiView", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Label = _cc.Label;
      Color = _cc.Color;
      Layers = _cc.Layers;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      HorizontalTextAlignment = _cc.HorizontalTextAlignment;
      VerticalTextAlignment = _cc.VerticalTextAlignment;
      Overflow = _cc.Overflow;
      Sprite = _cc.Sprite;
      math = _cc.math;
      log = _cc.log;
    }, function (_unresolved_2) {
      GuiBasic = _unresolved_2.GuiBasic;
    }, function (_unresolved_3) {
      LoadingResManager = _unresolved_3.LoadingResManager;
    }, function (_unresolved_4) {
      TweenMaxCocosPlugin = _unresolved_4.TweenMaxCocosPlugin;
    }, function (_unresolved_5) {
      i18n = _unresolved_5.i18n;
    }, function (_unresolved_6) {
      GUIEvent = _unresolved_6.GUIEvent;
    }, function (_unresolved_7) {
      Notifycation = _unresolved_7.Notifycation;
    }, function (_unresolved_8) {
      GuiNotifycationSubbscriptionSubject = _unresolved_8.GuiNotifycationSubbscriptionSubject;
    }, function (_unresolved_9) {
      GuisSystemView = _unresolved_9.GuisSystemView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf4a6FR6rFNZ75AM6qeEBQI", "SystemMessageGuiView", undefined);
      /**
       * Created by EricHuang on 2023/12/19.
       */


      __checkObsolete__(['Button', 'find', 'instantiate', 'Node', 'Label', 'SpriteFrame', 'Color']);

      __checkObsolete__(['Layers']);

      __checkObsolete__(['UITransform']);

      __checkObsolete__(['Size']);

      __checkObsolete__(['HorizontalTextAlignment']);

      __checkObsolete__(['VerticalTextAlignment']);

      __checkObsolete__(['Overflow']);

      __checkObsolete__(['Sprite']);

      __checkObsolete__(['math']);

      /**
       * 會使用這個幾乎都是已經被踢出房間才會觸發,因為按下確定按鈕就會執行離開的動作
       */
      __checkObsolete__(['log']);

      _export("SystemMessageGuiView", SystemMessageGuiView = class SystemMessageGuiView extends (_crd && GuiBasic === void 0 ? (_reportPossibleCrUseOfGuiBasic({
        error: Error()
      }), GuiBasic) : GuiBasic) {
        get errorType() {
          return this._errorType;
        }

        constructor() {
          super();
          this._strprefab = void 0;
          this._stageContainer = void 0;
          this._lableShowContainerNode = void 0;
          //--這邊放所有的動態文字顯示(單獨一層容器)
          this._messageGui = void 0;
          this._label = void 0;
          this._strTitleSpriteFrame = void 0;
          this._strCloseBtnSpriteFrame = void 0;
          this._timeVar = void 0;
          this._errorType = void 0;

          this.btnEventHandler = e => {
            this.closePanel();
            (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
              error: Error()
            }), Notifycation) : Notifycation).getInstance().emitSync((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
              error: Error()
            }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).ALERT_CLOSE, this._errorType);
          };

          this.closePanel = () => {
            this.active = false;
            this._label.node.active = false;

            this._stageContainer.removeChild((_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
              error: Error()
            }), GuisSystemView) : GuisSystemView).BGMask); //--exit event

          };
        }
        /**
        * step1.
        * overrite it
        * @param value guiData before layout
        */


        setData(value) {
          super.setData(value);
          this._strprefab = value.other.prefabId;
          this._stageContainer = find(value.other.container);
          this._lableShowContainerNode = find(value.other.labelContainer);
          this._strTitleSpriteFrame = value.other.spriteFrameTitleId;
          this._strCloseBtnSpriteFrame = value.other.spriteFrameCloseBtnId;
          this._errorType = ''; //this._guiNode=this;

          log('check_SystemMessageGuiView_', value);
        }
        /**
         * step2.
         * overrite it
        */


        init() {//this._defultType=[GUIEvent.BTN_MUTE,GUIEvent.BTN_EXCHANGE,GUIEvent.BTN_HISTORY,GUIEvent.BTN_HELP,GUIEvent.BTN_EXIT];
        }

        async setLayout() {
          return new Promise(resolve => {
            this._messageGui = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(this._strprefab));
            this.addChild(this._messageGui);
            let titleSpriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(this._strTitleSpriteFrame)[0];

            let sprTitle = this._messageGui.children[0].getChildByName('title').getChildByName('Label').addComponent(Sprite);

            sprTitle.spriteFrame = titleSpriteFrame;

            let btn = this._messageGui.children[0].getChildByName('closeBtn');

            let sprCloseBtn = btn.getChildByName('Label').addComponent(Sprite);
            let closeBtnSpriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(this._strCloseBtnSpriteFrame)[0];
            sprCloseBtn.spriteFrame = closeBtnSpriteFrame;
            btn.on(Button.EventType.CLICK, this.btnEventHandler);
            let labelNode = new Node('SystemMessageLabelNode');
            labelNode.layer = Layers.Enum.UI_2D;
            let labelTransForm = labelNode.addComponent(UITransform);
            labelTransForm.contentSize = new Size(1060, 50.4);
            labelTransForm.anchorX = labelTransForm.anchorY = .5;
            this._label = labelNode.addComponent(Label);
            this._label.horizontalAlign = HorizontalTextAlignment.CENTER;
            this._label.verticalAlign = VerticalTextAlignment.CENTER;
            this._label.overflow = Overflow.RESIZE_HEIGHT;
            this._label.fontSize = 32;
            this._label.lineHeight = 40;
            this._label.useSystemFont = true;
            this._label.fontFamily = 'Arial';
            this._label.color = Color.WHITE; //this._label.isBold=true;
            //---要在處理座位旋轉後的_label旋轉問題
            //this._lableShowContainerNode.addChild(labelNode);

            this.addChild(labelNode); //this._label=this._messageGui.children[0].getChildByName('message').getComponent(Label);

            this._label.string = 'mmmmmmmmmmmm';
            this.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

            this._stageContainer.addChild(this);

            this.active = false;
            this._label.node.active = false; //---完成的時候做

            resolve();
          });
        }

        showAlert(errorType, dictString, autoDisappearTime = 0) {
          log('showAlert_data', errorType, this._errorType, dictString);

          if (this._errorType == errorType) {
            return;
          }

          this._stageContainer.addChild((_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
            error: Error()
          }), GuisSystemView) : GuisSystemView).BGMask);

          this._errorType = errorType;
          let index = this._stageContainer.children.length - 1;

          this._stageContainer.insertChild(this, index);

          this._label.string = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).t(dictString); //--先取字典檔之類的東西

          this.active = true;
          this._label.node.active = true;

          if (autoDisappearTime > 0) {
            let tween = this.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

            if (TweenMax.isTweening(tween)) {
              TweenMax.killTweensOf(tween);
            }

            TweenMax.to(tween, autoDisappearTime, {
              onComplete: this.closePanel
            });
          }
          /*
          if(autoDisappearTime>0)
          {
              if(this._timeVar!=null)
              {
                  clearTimeout(this._timeVar);
                   this._timeVar=window.setTimeout(()=>
                  {
                      this.closePanel();
                   },autoDisappearTime);
              }
          }*/

        }

        /**
         * 旋轉完座位後
         * @param value 1-4
         * 20240307--不使用labelContainer帶進來的layer..因為層級會被擋在下面
         * 原本是Canvas/PlayerNameText,需要跟著座位旋轉
         */
        afterCoordinatesChange(value) {
          return;

          if (value == 1 || value == 2) {
            this._label.node.angle = math.toDegree(Math.PI);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a8fab123922f5c9e65a26c6d55510c5c80788548.js.map