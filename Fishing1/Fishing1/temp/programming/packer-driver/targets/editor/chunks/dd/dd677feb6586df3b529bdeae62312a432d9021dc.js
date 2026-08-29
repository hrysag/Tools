System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GuiBasic, Digits, GameUtils, LoadingResManager, CocosGameSetting, find, instantiate, Sprite, v3, log, ToolBarGuiView, _crd;

  function _reportPossibleCrUseOfGuiBasic(extras) {
    _reporterNs.report("GuiBasic", "../../../../game/guiCore/GuiBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiOption(extras) {
    _reporterNs.report("GuiOption", "../../../../game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDigits(extras) {
    _reporterNs.report("Digits", "../../../../utils/Digits", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../../utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosGameSetting(extras) {
    _reporterNs.report("CocosGameSetting", "../../../../utils/CocosGameSetting", _context.meta, extras);
  }

  _export("ToolBarGuiView", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Sprite = _cc.Sprite;
      v3 = _cc.v3;
      log = _cc.log;
    }, function (_unresolved_2) {
      GuiBasic = _unresolved_2.GuiBasic;
    }, function (_unresolved_3) {
      Digits = _unresolved_3.Digits;
    }, function (_unresolved_4) {
      GameUtils = _unresolved_4.GameUtils;
    }, function (_unresolved_5) {
      LoadingResManager = _unresolved_5.LoadingResManager;
    }, function (_unresolved_6) {
      CocosGameSetting = _unresolved_6.CocosGameSetting;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7a28dENwlZMRZCAZ+SZarbc", "ToolBarGuiView", undefined);
      /**
       * Created by EricHuang on 2023/12/19.
       */


      __checkObsolete__(['find', 'instantiate', 'Node', 'SpriteFrame', 'UITransform', 'Sprite', 'v3']);

      __checkObsolete__(['log']);

      _export("ToolBarGuiView", ToolBarGuiView = class ToolBarGuiView extends (_crd && GuiBasic === void 0 ? (_reportPossibleCrUseOfGuiBasic({
        error: Error()
      }), GuiBasic) : GuiBasic) {
        constructor() {
          super();
          this._strprefab = void 0;
          this._stageContainer = void 0;
          this._toolbar = void 0;
          this._strSnSpriteFrameId = void 0;
          this._strDigitsId = void 0;
          this._digitsSn = void 0;
          this._strVersionDigitsId = void 0;
          this._digitsLauncherVersionNumber = void 0;
          this._pingNodes = void 0;
          this._pingNodes = {};
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
          this._strSnSpriteFrameId = value.other.spriteFrameSnId;
          this._strDigitsId = value.other.snDigitsId;
          this._strVersionDigitsId = value.other.versionDigitsId;
          log('toolbar_data', value);
        }
        /**
         * step2.
         * overrite it
         */


        init() {//this._defultType=[GUIEvent.BTN_MUTE,GUIEvent.BTN_EXCHANGE,GUIEvent.BTN_HISTORY,GUIEvent.BTN_HELP,GUIEvent.BTN_EXIT];
        }

        async setLayout() {
          return new Promise(resolve => {
            this._toolbar = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(this._strprefab));
            let snSpriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(this._strSnSpriteFrameId)[0];
            let digitsSpriteFrames = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(this._strDigitsId).sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).sortDigitsSpriteFrames);
            log('check_toolbar_textures', snSpriteFrame, digitsSpriteFrames);

            let snSpr = this._toolbar.getChildByName('sn').getChildByName('Label').addComponent(Sprite);

            snSpr.spriteFrame = snSpriteFrame;
            this._digitsSn = this._toolbar.getChildByName('sn').getChildByName('snLabel').addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
              error: Error()
            }), Digits) : Digits);
            this._digitsSn.textures = digitsSpriteFrames;

            for (let i = 1; i <= 5; i++) {
              let pingNode = this._toolbar.getChildByName('ping').getChildByName('pl' + i);

              this._pingNodes['pl' + i] = pingNode;
            }

            let versionDigitsSpriteFrames = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(this._strVersionDigitsId).sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).sortDigitsSpriteFrames);
            this._digitsLauncherVersionNumber = this._toolbar.getChildByName('launcherVersion').addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
              error: Error()
            }), Digits) : Digits);
            this._digitsLauncherVersionNumber.textures = versionDigitsSpriteFrames;
            this._digitsLauncherVersionNumber.digitScale = 0.8;
            this._digitsLauncherVersionNumber.floatScale = 0.8; //this._digitsLauncherVersionNumber.useCommand=true;

            this.addChild(this._toolbar);

            this._stageContainer.addChild(this); //let containSize=this._toolbar.getComponent(UITransform).contentSize;


            this.setPosition(v3(0, -(_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
              error: Error()
            }), CocosGameSetting) : CocosGameSetting).Game_Height / 2)); //---完成的時候做

            resolve();
          });
        }

        onLoad() {
          var _this$_digitsSn;

          log('onLoad_snToolBar');
          (_this$_digitsSn = this._digitsSn) == null ? void 0 : _this$_digitsSn.display(2222222222222, 'center');
        }

        updateWagersID(sn) {
          //this._sn.display(sn , 'left');
          log('updateWagersID', sn);

          if (sn) {
            var _this$_digitsSn2;

            (_this$_digitsSn2 = this._digitsSn) == null ? void 0 : _this$_digitsSn2.display(sn + '', 'center');
          }
        }

        setLauncherVersionNumber(value) {
          this._digitsLauncherVersionNumber.displayWithStr(value, 'right');
        }

        updatePing(value) {
          this.closeAllPingNode();

          if (value == 'good') {
            this._pingNodes['pl5'].active = true;
          } else if (value == 'adequate') {
            this._pingNodes['pl4'].active = true;
          } else if (value == 'poor') {
            this._pingNodes['pl3'].active = true;
          }
        }

        closeAllPingNode() {
          for (let i in this._pingNodes) {
            this._pingNodes[i].active = false;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dd677feb6586df3b529bdeae62312a432d9021dc.js.map