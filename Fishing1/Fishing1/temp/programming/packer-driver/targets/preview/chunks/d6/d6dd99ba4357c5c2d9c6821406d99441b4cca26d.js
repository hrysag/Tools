System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GuiBasic, LoadingResManager, CocosGameSetting, TweenMaxCocosPlugin, GuisSystemView, ResizeTool, sys, WebView, find, instantiate, Button, Sprite, v3, UITransform, Size, Layers, log, IframeGuiView, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfGuiBasic(extras) {
    _reporterNs.report("GuiBasic", "../../../../game/guiCore/GuiBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiOption(extras) {
    _reporterNs.report("GuiOption", "../../../../game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosGameSetting(extras) {
    _reporterNs.report("CocosGameSetting", "../../../../utils/CocosGameSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../utils/TweenMaxPlugin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuisSystemView(extras) {
    _reporterNs.report("GuisSystemView", "../GuisSystemView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResizeTool(extras) {
    _reporterNs.report("ResizeTool", "../../../resize/ResizeTool", _context.meta, extras);
  }

  _export("IframeGuiView", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
      WebView = _cc.WebView;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Button = _cc.Button;
      Sprite = _cc.Sprite;
      v3 = _cc.v3;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      Layers = _cc.Layers;
      log = _cc.log;
    }, function (_unresolved_2) {
      GuiBasic = _unresolved_2.GuiBasic;
    }, function (_unresolved_3) {
      LoadingResManager = _unresolved_3.LoadingResManager;
    }, function (_unresolved_4) {
      CocosGameSetting = _unresolved_4.CocosGameSetting;
    }, function (_unresolved_5) {
      TweenMaxCocosPlugin = _unresolved_5.TweenMaxCocosPlugin;
    }, function (_unresolved_6) {
      GuisSystemView = _unresolved_6.GuisSystemView;
    }, function (_unresolved_7) {
      ResizeTool = _unresolved_7.ResizeTool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d0325FXA2ZEDoDiF9D8OM9X", "IframeGuiView", undefined);
      /**
       * Created by EricHuang on 2023/12/19.
       */


      __checkObsolete__(['sys', 'WebView', 'Node', 'find', 'instantiate', 'Button', 'Sprite', 'v3', 'UITransform', 'Size', 'Layers', 'SpriteFrame', 'game']);

      __checkObsolete__(['log']);

      _export("IframeGuiView", IframeGuiView = class IframeGuiView extends (_crd && GuiBasic === void 0 ? (_reportPossibleCrUseOfGuiBasic({
        error: Error()
      }), GuiBasic) : GuiBasic) {
        constructor() {
          super();
          this._webViewUrl = void 0;
          this._stageContainer = void 0;
          //private _strCloseBtn:string;
          this._strWebviewPrefab = void 0;
          this._strTitleRule = void 0;
          this._strTitleHistory = void 0;
          this._textureRule = void 0;
          this._textureHistory = void 0;
          this._titleSprite = void 0;
          this._webViewCloseBtn = void 0;
          this._webViewNode = void 0;

          this.btnEventHandler = e => {
            log('webView_closeBtn', e.node.name);
            this.hideWebView();
            this.active = false;
          };

          //--現在不會再走這段(這是用APP原生開發會走的)

          /*
          private showWebViewNativeLater=()=>
          {
              const domain = FishGameInfo.domain.split(':')[0];
              pt.sizeWebView(180, 109, 1560, 800, 'SlotGameWebView');
              CYPluginManager.WebViewUtils.loadUrl(this.webViewUrl, 'SlotGameWebView');
              CYPluginManager.WebViewUtils.setCookie(domain, '/', 'SESSION_ID', bbsdk.getUserInfo().sid, 'SlotGameWebView');
          }*/
          this.onWebViewLoaded = () => {
            this._webViewNode.off('loaded', this.onWebViewLoaded);

            this._webViewNode.getComponent(WebView).url = this._webViewUrl;
            (_crd && ResizeTool === void 0 ? (_reportPossibleCrUseOfResizeTool({
              error: Error()
            }), ResizeTool) : ResizeTool).getInstance().resize(); //let webViewElement=document.getElementById('webview-wrapper');

            /*
            webViewElement.style.bottom = "0%";
            webViewElement.style.position = "absolute";
            webViewElement.style.top = "50%";
            webViewElement.style.left = "50%";
            webViewElement.style.transform = "translate(-50%, -50%)";
            */
            //log('check_webView_loaded',webViewElement,this._webViewUrl,this);

            log('checkWebViewNodeData', this._webViewNode.position, this._webViewNode.getComponent(UITransform).contentSize); //let uiTransFrom=this.addComponent(UITransform);
            //uiTransFrom.contentSize=new Size(1000,900);
            //uiTransFrom.anchorX=uiTransFrom.anchorY=0.5;
            //this._stageContainer.isChildOf(GuisSystemView.BGMask);
            //this.

            if (!this._stageContainer.getChildByName('GuiSysBGMask')) {
              this._stageContainer.addChild((_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
                error: Error()
              }), GuisSystemView) : GuisSystemView).BGMask);
            }

            var index = this._stageContainer.children.length - 1;

            this._stageContainer.insertChild(this, index);
            /*
            index=this.children.length-1;
             this.insertChild(this._webViewCloseBtn,index);*/


            this.active = true;
          };

          this._webViewUrl = '';
        }
        /**
         * step1.
         * overrite it
         * @param value guiData before layout
        */


        setData(value) {
          super.setData(value);
          this._stageContainer = find(value.other.container); //this._strCloseBtn=value.other.closeBtn;

          this._strWebviewPrefab = value.other.prefabId;
          this._strTitleRule = value.other.titleRule;
          this._strTitleHistory = value.other.titleHistory;
          log('check_helpGuiView_', value);
        }
        /**
         * step2.
         * overrite it
         */


        init() {//this._defultType=[GUIEvent.BTN_MUTE,GUIEvent.BTN_EXCHANGE,GUIEvent.BTN_HISTORY,GUIEvent.BTN_HELP,GUIEvent.BTN_EXIT];
        }

        setLayout() {
          var _this = this;

          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              _this.active = false;
              var prefabNode = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(_this._strWebviewPrefab));

              _this.addChild(prefabNode);

              var mainNode = prefabNode.children[0];
              _this._titleSprite = mainNode.getChildByName('title').getComponent(Sprite);
              _this._webViewCloseBtn = mainNode.getChildByName('closeBtn');

              _this._webViewCloseBtn.on(Button.EventType.CLICK, _this.btnEventHandler);

              _this.layer = Layers.Enum.UI_2D;

              _this.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

              var uiTransFrom = _this.addComponent(UITransform); //uiTransFrom.contentSize=new Size(1500,900);


              uiTransFrom.contentSize = new Size((_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_Width, (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                error: Error()
              }), CocosGameSetting) : CocosGameSetting).Game_Height);
              uiTransFrom.anchorX = uiTransFrom.anchorY = 0.5;
              /*
              this._webViewNode=new Node('webViewNode');
               this._webViewNode.layer=Layers.Enum.UI_2D;
              
              let webuiTransFrom=this._webViewNode.addComponent(UITransform);
               webuiTransFrom.contentSize=new Size(1768,948);
               webuiTransFrom.anchorX=webuiTransFrom.anchorY=0.5;
              */

              _this._webViewNode = mainNode.getChildByName('webview'); //let webComponent=this._webViewNode.addComponent(WebView);

              var webComponent = _this._webViewNode.getComponent(WebView);

              webComponent.url = ''; //--fuck cocos預設是直接給到cocos的網頁,網頁掛掉會跳百度的錯誤訊息

              _this._textureRule = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(_this._strTitleRule)[0];
              _this._textureHistory = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(_this._strTitleHistory)[0];

              _this._stageContainer.addChild(_this);

              _this.setPosition(v3(0, 0)); //---完成的時候做


              resolve();
            });
          })();
        }

        _iframeInitialize(url, scale) {
          /*
          if (document.location.protocol === 'https') 
          {
              this._webViewUrl = this._webViewUrl.replace('http://', 'https://');
          }*/
          log('_iframeInitialize_URL', url, scale);
          this._webViewNode.getComponent(WebView).url = '';
          this.active = true; //this._webViewNode.setScale(scale,scale);

          this._webViewNode.setScale(v3(2, 1.9));

          this._webViewNode.on('loaded', this.onWebViewLoaded);

          var cocos2dGameContainer = document.getElementById('Cocos2dGameContainer');
          var iframe = cocos2dGameContainer ? cocos2dGameContainer.children[1] : null;

          if (iframe) {
            iframe.style.opacity = 100;
          }

          if (document.querySelector('#gameWebviewBtnDiv')) {
            //@ts-ignore
            document.querySelector('#gameWebviewBtnDiv').style.display = 'block';
          }

          if (document.querySelector('#webCloseBtn')) {
            //@ts-ignore
            document.querySelector('#webCloseBtn').height = '0';
          }

          if (sys.os === sys.OS.IOS) {
            if (iframe) {
              var iframeContent = iframe.children[0];
              iframeContent.style.height = '100%';
            }
            /*
            if (url.toLowerCase().match('record')) {
                iframeContent.style.height = '5000px';
            }
            */

          }
        }
        /*
        public checkIframeActive():boolean
        {
            return this.active;
        }*/


        hideWebView() {
          if (sys.isNative) {
            //this.unschedule(this.showWebViewNativeLater);
            //CYPluginManager.WebViewUtils.clearAll();//--???
            return;
          } else {
            this._webViewNode.getComponent(WebView).url = '';
            this.active = false;

            if (sys.isBrowser) {
              var cocos2dGameContainer = document.getElementById('Cocos2dGameContainer');
              var iframe = cocos2dGameContainer ? cocos2dGameContainer.children[1] : null;

              if (iframe) {
                iframe.style.opacity = 0;
              }

              if (document.querySelector('#gameWebviewBtnDiv')) {
                //@ts-ignore
                document.querySelector('#gameWebviewBtnDiv').style.display = 'none';
              }
            }
          }

          this._stageContainer.removeChild((_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
            error: Error()
          }), GuisSystemView) : GuisSystemView).BGMask);
        }

        showWebView(url, viewName, scale) {
          if (viewName === void 0) {
            viewName = '';
          }

          if (scale === void 0) {
            scale = 1;
          }

          this._webViewUrl = url;
          log('showWebView', url);

          if (sys.isNative) {
            return; //this.unschedule(this.showWebViewNativeLater);
            //this.scheduleOnce(this.showWebViewNativeLater, 0.5);

            TweenMax.to(this.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), 0.5, {//onComplete:this.showWebViewNativeLater
            });
          } else {
            if (viewName != '') {
              if (viewName == (_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
                error: Error()
              }), GuisSystemView) : GuisSystemView)._webView_key_history) {
                this._titleSprite.spriteFrame = this._textureHistory;
              } else if (viewName == (_crd && GuisSystemView === void 0 ? (_reportPossibleCrUseOfGuisSystemView({
                error: Error()
              }), GuisSystemView) : GuisSystemView)._webView_key_rule) {
                this._titleSprite.spriteFrame = this._textureRule;
              }
            }

            this._iframeInitialize(url, /iPad/i.test(navigator.userAgent) ? 2 : scale);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d6dd99ba4357c5c2d9c6821406d99441b4cca26d.js.map