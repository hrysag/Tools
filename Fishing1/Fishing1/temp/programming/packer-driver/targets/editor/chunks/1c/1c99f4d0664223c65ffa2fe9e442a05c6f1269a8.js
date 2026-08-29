System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GuiBasic, LoadingResManager, TweenMaxCocosPlugin, find, instantiate, Node, Label, Layers, UITransform, Size, HorizontalTextAlignment, VerticalTextAlignment, math, log, InGameMessageGuiView, _crd;

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

  _export("InGameMessageGuiView", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Label = _cc.Label;
      Layers = _cc.Layers;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      HorizontalTextAlignment = _cc.HorizontalTextAlignment;
      VerticalTextAlignment = _cc.VerticalTextAlignment;
      math = _cc.math;
      log = _cc.log;
    }, function (_unresolved_2) {
      GuiBasic = _unresolved_2.GuiBasic;
    }, function (_unresolved_3) {
      LoadingResManager = _unresolved_3.LoadingResManager;
    }, function (_unresolved_4) {
      TweenMaxCocosPlugin = _unresolved_4.TweenMaxCocosPlugin;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38e04QPvQ1Dm5g9NTN5fMbC", "InGameMessageGuiView", undefined);
      /**
       * Created by EricHuang on 2023/12/19.
       */


      __checkObsolete__(['Button', 'find', 'instantiate', 'Node', 'Label', 'Layers', 'UITransform', 'Size', 'HorizontalTextAlignment', 'VerticalTextAlignment', 'math']);

      __checkObsolete__(['log']);

      _export("InGameMessageGuiView", InGameMessageGuiView = class InGameMessageGuiView extends (_crd && GuiBasic === void 0 ? (_reportPossibleCrUseOfGuiBasic({
        error: Error()
      }), GuiBasic) : GuiBasic) {
        //--sys message是否顯示
        //---輪播停留的時間(訊息顯示的時間(秒))
        set lifeTime(value) {
          this._lifeTime = value;
        }

        constructor() {
          super();
          this._strprefab = void 0;
          this._stageContainer = void 0;
          this._lableShowContainerNode = void 0;
          //--這邊放所有的動態文字顯示(單獨一層容器)
          this._inGameMessageNode = void 0;
          this._label = void 0;
          //--這個要跟玩家訊息放在一起
          this._aryTips = void 0;
          this._lifeTime = void 0;
          //--second
          this._visibleForPriority = void 0;
          this._lifeTime = 1.6; //---defult
          //--system msg顯示的話,ingame msg就不顯示,除非他關掉了

          this._visibleForPriority = false;
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
          this._aryTips = [];
          log('check_InGameMessageGuiView_', value);
        }
        /**
         * step2.
         * overrite it
         */


        init() {//this._defultType=[GUIEvent.BTN_MUTE,GUIEvent.BTN_EXCHANGE,GUIEvent.BTN_HISTORY,GUIEvent.BTN_HELP,GUIEvent.BTN_EXIT];
        }

        async setLayout() {
          return new Promise(resolve => {
            this._inGameMessageNode = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(this._strprefab));
            this.addChild(this._inGameMessageNode);
            let labelNode = new Node('inGameMessageLabelNode');
            labelNode.layer = Layers.Enum.UI_2D;
            let labelTransForm = labelNode.addComponent(UITransform);
            labelTransForm.contentSize = new Size(1400, 115);
            labelTransForm.anchorX = labelTransForm.anchorY = .5;
            this._label = labelNode.addComponent(Label);
            this._label.horizontalAlign = HorizontalTextAlignment.CENTER;
            this._label.verticalAlign = VerticalTextAlignment.CENTER;
            this._label.fontSize = 40;
            this._label.lineHeight = 50;
            this._label.useSystemFont = true;
            this._label.fontFamily = 'Arial';
            this._label.isBold = true;

            this._lableShowContainerNode.addChild(labelNode); //--這邊要在處理旋轉的顯示!!!


            this._label.string = 'LLLLLLLLLLLLLLLLLLLLLLLLL';
            this.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

            this._stageContainer.addChild(this);

            this._label.node.active = false;
            this.active = false; //---完成的時候做

            resolve();
          });
        }

        showGameMessage(message, type) {
          //--確認不重複內容即推入等待
          log('showMessage', message, type, this._aryTips);

          if (this.checkRepeatMessage(message)) {
            this._aryTips.push({
              str: message,
              type: type
            });

            this.checkTips();
          }
        } //-----回過頭來刪掉訊息


        removeMessages(messages) {
          log('removeMessage', messages);

          for (let i = 0; i < messages.length; i++) {
            for (let j = 0; j < this._aryTips.length; j++) {
              if (this._aryTips[j].str == messages[i] || this._aryTips[j].type == messages[i]) {
                this._aryTips.splice(j, 1);

                j = j - 1;
              }
            }
          }
        }
        /**
         * 
         * @param clean 是否要將尚未播送的訊息一併從陣列當中清除
         * PS-預設不會清除
         */


        closeGameMessage(clean = false) {
          let tweenComponent = this.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
          log('closeGameMessage', clean);

          if (TweenMax.isTweening(tweenComponent)) {
            TweenMax.killTweensOf(tweenComponent);
            this._label.node.active = false;
            this.active = false; //--等待的陣列並不會清空

            if (clean) {
              this._aryTips = [];
            } //--關閉該則訊息,但是輪播當中還有訊息的話,需要繼續播下去20240321


            this.checkTips();
          }
        }
        /**
         * 
         * @param value systemmessage是否顯示
         * 有秀system messag 視窗就不會顯示
         */


        setVisibleForPriority(value) {
          this._visibleForPriority = value;
          let tweenComponent = this.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin); //--現在在運作中

          if (TweenMax.isTweening(tweenComponent)) {
            let flag = this._visibleForPriority ? false : true;
            this._label.node.active = flag;
            this.active = flag;
          }
        }
        /**
         * 旋轉完座位後
         * @param value 1-4
         */


        afterCoordinatesChange(value) {
          if (value == 1 || value == 2) {
            this._label.node.angle = math.toDegree(Math.PI);
          }
        }

        resetCoordinatesChange() {
          this._label.node.angle = 0;
        }

        runTips() {
          let tweenComponent = this.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
          log('runTips', this._lifeTime);
          TweenMax.to(tweenComponent, this._lifeTime, {
            onComplete: () => {
              this.checkTips();
            }
          });
        }

        showTipsforGameMessage() {
          let tipsObj = this._aryTips.shift();

          this._label.string = tipsObj.str;
          log('show_ingameMessage', tipsObj, this._visibleForPriority);

          if (!this._visibleForPriority) {
            this._label.node.active = true;
            this.active = true;
          } //this._trumpetImg.visible=false;
          //this._textFieldforGameMessage.x=(this.width-this._textFieldforGameMessage.width)/2;
          //this._textFieldforGameMessage.y=(this.height-this._textFieldforGameMessage.height)/2;


          this.runTips();
        }

        testMessage() {
          log('check_testMessage');

          for (let i of this._aryTips) {
            log('testMessage', i);
          }
        }

        checkTips() {
          let tweenComponent = this.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
          this.testMessage();
          log('check_readyTips', this._aryTips.length, this._aryTips, TweenMax.isTweening(tweenComponent));

          if (!TweenMax.isTweening(tweenComponent)) {
            this._label.node.active = false;
            this.active = false;

            if (this._aryTips.length > 0) {
              //this._awardAnnouncementGui.visible=false;
              this.showTipsforGameMessage();
            }
          }
        }

        checkRepeatMessage(message) {
          let r = true;
          let len = this._aryTips.length;

          for (let i = 0; i < len; i++) {
            if (this._aryTips[i].str == message) {
              r = false;
              break;
            }
          }

          return r;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1c99f4d0664223c65ffa2fe9e442a05c6f1269a8.js.map