System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Animation, Slider, ProgressBar, Button, EventHandler, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, common_TA;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Animation = _cc.Animation;
      Slider = _cc.Slider;
      ProgressBar = _cc.ProgressBar;
      Button = _cc.Button;
      EventHandler = _cc.EventHandler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79bdbMfmIxP3IkDgSESQK2q", "common_TA", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation', 'Slider', 'ProgressBar', 'Button', 'EventHandler', 'Layers', 'Layout', 'Vec3', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("common_TA", common_TA = (_dec = ccclass('common_TA'), _dec2 = property({
        type: Node,
        tooltip: "設置按鈕"
      }), _dec3 = property({
        type: [Node],
        tooltip: "彈出視窗,0=音樂,1=紀錄,2=說明,3=回大廳,4=自動下注"
      }), _dec4 = property({
        type: [Node],
        tooltip: "彈出視窗關閉按鈕,0=音樂,1=紀錄,2=說明,3=回大廳,4=自動下注"
      }), _dec5 = property({
        type: [Node],
        tooltip: "聲音開關節點,0=音樂開,1=音樂關,2=聲音開,3=聲音關"
      }), _dec6 = property({
        type: Node,
        tooltip: " 回大廳視窗"
      }), _dec7 = property({
        type: Node,
        tooltip: "自動功能視窗"
      }), _dec(_class = (_class2 = class common_TA extends Component {
        constructor(...args) {
          super(...args);

          //公版相關
          _initializerDefineProperty(this, "settingBtn", _descriptor, this);

          // @property({ type: [Node], tooltip: "設置關閉按鈕,0=關閉按鈕1,1=0=關閉按鈕2" })
          // public settingCloseBtn: Node[] = []!;
          // @property({ type: [Node], tooltip: "公版按鈕,0=音樂,1=紀錄,2=說明,3=回大廳,4=自動下注" })
          // public commonBtn: Node[] = []!;
          _initializerDefineProperty(this, "popup", _descriptor2, this);

          _initializerDefineProperty(this, "popupClose", _descriptor3, this);

          _initializerDefineProperty(this, "musicBtn", _descriptor4, this);

          //【視窗】彈出視窗相關
          _initializerDefineProperty(this, "popupHome", _descriptor5, this);

          _initializerDefineProperty(this, "popupAuto", _descriptor6, this);
        }

        onLoad() {
          //設置按鈕功能
          let thisScriptName = this.node.components[0].name.split('<')[1].split('>')[0]; //公版按鈕
          // for (let i = 0; i < this.commonBtn.length; i++) {
          //     const commonBtnEventHandler = new EventHandler();
          //     commonBtnEventHandler.target = this.node;
          //     commonBtnEventHandler.component = thisScriptName;
          //     commonBtnEventHandler.handler = 'popupShow';
          //     commonBtnEventHandler.customEventData = i.toString();
          //     this.commonBtn[i].getComponent(Button)!.clickEvents.push(commonBtnEventHandler);
          // }
          //彈出視窗關閉按鈕

          for (let i = 0; i < this.popupClose.length; i++) {
            const popupCloseBtnEventHandler = new EventHandler();
            popupCloseBtnEventHandler.target = this.node;
            popupCloseBtnEventHandler.component = thisScriptName;
            popupCloseBtnEventHandler.handler = 'popupHide';
            popupCloseBtnEventHandler.customEventData = i.toString();
            this.popupClose[i].getComponent(Button).clickEvents.push(popupCloseBtnEventHandler);
          } //設置按鈕


          const settingBtnEventHandler = new EventHandler();
          settingBtnEventHandler.target = this.node;
          settingBtnEventHandler.component = thisScriptName;
          settingBtnEventHandler.handler = 'settingContentShow';
          this.settingBtn.getComponent(Button).clickEvents.push(settingBtnEventHandler); // //設置關閉按鈕
          // for (let i = 0; i < this.settingCloseBtn.length; i++) {
          //     const settingCloseBtnEventHandler = new EventHandler();
          //     settingCloseBtnEventHandler.target = this.node;
          //     settingCloseBtnEventHandler.component = thisScriptName;
          //     settingCloseBtnEventHandler.handler = 'settingContentHide';
          //     this.settingCloseBtn[i].getComponent(Button)!.clickEvents.push(settingCloseBtnEventHandler);
          // }
          //設置音樂音效按鈕

          for (let i = 0; i < this.musicBtn.length; i++) {
            const musicBtnEventHandler = new EventHandler();
            musicBtnEventHandler.target = this.node;
            musicBtnEventHandler.component = thisScriptName;
            musicBtnEventHandler.handler = 'musicOnOff';
            musicBtnEventHandler.customEventData = i.toString();
            this.musicBtn[i].getComponent(Button).clickEvents.push(musicBtnEventHandler);
          } //【視窗】回大廳取消按鈕


          const homeCancleBtnEventHandler = new EventHandler();
          homeCancleBtnEventHandler.target = this.node;
          homeCancleBtnEventHandler.component = thisScriptName;
          homeCancleBtnEventHandler.handler = 'homeCancle';
          this.popupHome.children[1].getChildByName('btnCancle').getComponent(Button).clickEvents.push(homeCancleBtnEventHandler); //【視窗】自動功能確認按鈕

          const autoConfirmBtnEventHandler = new EventHandler();
          autoConfirmBtnEventHandler.target = this.node;
          autoConfirmBtnEventHandler.component = thisScriptName;
          autoConfirmBtnEventHandler.handler = 'autoConfirm';
          this.popupAuto.children[1].getChildByName('btnConfirm').getComponent(Button).clickEvents.push(autoConfirmBtnEventHandler);
        } //設置選單顯示


        settingContentShow() {
          this.settingBtn.children[0].active = true;
          this.settingBtn.children[0].children[0].getComponent(Animation).play("settingContentShow");
        } //設置選單隱藏


        settingContentHide() {
          this.settingBtn.children[0].children[0].getComponent(Animation).play("settingContentHide");
          this.scheduleOnce(() => {
            this.settingBtn.children[0].active = false;
          }, 0.2);
        } //視窗顯示


        popupShow(event, customEventData) {
          this.popup[Number(customEventData)].active = true; //如果設置選單是開啟狀態，須關閉

          if (this.settingBtn.children[0]) this.settingContentHide();
        } //視窗關閉


        popupHide(event, customEventData) {
          this.popup[Number(customEventData)].active = false;
        } //音樂音效開關


        musicOnOff(event, customEventData) {
          switch (customEventData) {
            case '0':
              //音樂關
              this.musicBtn[0].active = false;
              this.musicBtn[1].active = true;
              break;

            case '1':
              //音樂開
              this.musicBtn[0].active = true;
              this.musicBtn[1].active = false;
              break;

            case '2':
              //聲音關
              this.musicBtn[2].active = false;
              this.musicBtn[3].active = true;
              break;

            case '3':
              //聲音開
              this.musicBtn[2].active = true;
              this.musicBtn[3].active = false;
              break;
          }
        } //【視窗】回大廳取消按鈕按下


        homeCancle() {
          this.popupHome.active = false;
        } //【視窗】自動功能確認按鈕按下


        autoConfirm() {
          this.popupAuto.active = false;
        }

        update() {
          //【視窗】自動視窗出現時，同步判斷進度條
          if (this.popupAuto) {
            let subSlider = this.popupAuto.children[1].getChildByName('subSlider');
            subSlider.getComponent(ProgressBar).progress = subSlider.getComponent(Slider).progress;
            let addSlider = this.popupAuto.children[1].getChildByName('addSlider');
            addSlider.getComponent(ProgressBar).progress = addSlider.getComponent(Slider).progress;
            let winSlider = this.popupAuto.children[1].getChildByName('winSlider');
            winSlider.getComponent(ProgressBar).progress = winSlider.getComponent(Slider).progress;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "settingBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "popup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "popupClose", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "musicBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "popupHome", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "popupAuto", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b7d34e973211f83ee634be033d0cea5974a0a360.js.map