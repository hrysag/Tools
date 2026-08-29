System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, IconSlotMachine, GameState, DefinitionGameConfigData, FindComponent, AudioManager, SOUND_TYPE, SoundList, AudioSourceList, SpineController, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, FORECAST_REEL, REEL_AMOUNT, SlotMachineController018;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIconSlotMachine(extras) {
    _reporterNs.report("IconSlotMachine", "db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/IconSlotMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelView(extras) {
    _reporterNs.report("ReelView018", "./ReelView018", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotMachineData(extras) {
    _reporterNs.report("SlotMachineData018", "./SlotMachineData018", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../DefinitionGameData/DefinitionGameConfigData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "db://assets/Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../MyUtils/FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND_TYPE(extras) {
    _reporterNs.report("SOUND_TYPE", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../DefinitionGameData/SoundList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../DefinitionGameData/SoundList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../MyUtils/AnimationSystem/Components/SpineController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      IconSlotMachine = _unresolved_2.IconSlotMachine;
    }, function (_unresolved_3) {
      GameState = _unresolved_3.GameState;
    }, function (_unresolved_4) {
      DefinitionGameConfigData = _unresolved_4.DefinitionGameConfigData;
    }, function (_unresolved_5) {
      FindComponent = _unresolved_5.FindComponent;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
      SOUND_TYPE = _unresolved_6.SOUND_TYPE;
    }, function (_unresolved_7) {
      SoundList = _unresolved_7.SoundList;
      AudioSourceList = _unresolved_7.AudioSourceList;
    }, function (_unresolved_8) {
      SpineController = _unresolved_8.SpineController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae21b9Tx3NKDazk9LZ5rJaA", "SlotMachineController018", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'randomRangeInt', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        FORECAST_REEL,
        REEL_AMOUNT
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);

      _export("SlotMachineController018", SlotMachineController018 = (_dec = ccclass('SlotMachineController018'), _dec2 = property({
        type: Node,
        visible: true,
        displayName: 'ReadyBox'
      }), _dec(_class = (_class2 = class SlotMachineController018 extends (_crd && IconSlotMachine === void 0 ? (_reportPossibleCrUseOfIconSlotMachine({
        error: Error()
      }), IconSlotMachine) : IconSlotMachine) {
        constructor() {
          super();

          //--聽牌效果的滾輪
          _initializerDefineProperty(this, "_forecastEffectNode", _descriptor, this);

          this._forecastSpineController = null;
          this._rollerStateForGame = void 0;
          //private _reelVewGame018: ReelView018 = null;

          /**
           * 滾輪系統的管理者.管理reelView,負責傳輸數據和對外接口
           * 所有的(我指的是全部的輪軸)滾輪事件會在這裡被管理,以下為4種狀態
           * 1.showReadyHandCallback
           * 2.hideReadyHandCallback
           * 3.oneReelRollEndCallBack
           * 4.allReelRollEndCallBack
           * 個別的輪軸事件會在reelView裡面自己去override相關的function
           * (iconReelView.receiveReelEvent)
           * reelIDs 要表演的滾輪的順序，沒有傳入預設全部滾輪表演 ex:[2, 1, 0]代表從2開始停，0最後停
           * 你可以在這邊自己改變滾輪的順序
           * 要秀幾軸來自reelNodeList的長度(reelView面板塞的)
           * this._reels = ComponentExt.getComps<IconReel>(this._reelNodeList, 'IconReel');
           */
          //--for test--
          this.allReelRollEndCallBackToView = null;

          /**
           * 關閉/開啟指定的全部(整個盤面)的亮度(true=變暗/false=正常) 
           * @param brightnessFlag 
           */
          this.closeOrOpenAllGameIconBright = brightnessFlag => {
            this._reelView.closeOrOpenAllGameIconBright(brightnessFlag);
          };

          this.addBackToGameIcon = (reelIndex, iconIndex, aniNode) => {
            var _this$_reelView;

            (_this$_reelView = this._reelView) == null || _this$_reelView.addBackToGameIcon(reelIndex, iconIndex, aniNode);
          };

          this.setSingleGameIconBrightness = (reelIndex, iconIndex, value) => {
            var _this$_reelView2;

            (_this$_reelView2 = this._reelView) == null || _this$_reelView2.setSingleGameIconBrightness(reelIndex, iconIndex, value);
          };

          this.getAndRemoveSymbolAniNodeWithWorldPos = (reelIndex, iconIndex) => {
            var _this$_reelView3;

            return (_this$_reelView3 = this._reelView) == null ? void 0 : _this$_reelView3.getAndRemoveSymbolAniNodeWithWorldPos(reelIndex, iconIndex);
          };

          this.changeInitSpineAniNode = () => {
            var _this$_reelView4;

            (_this$_reelView4 = this._reelView) == null || _this$_reelView4.changeInitSpineAniNode();
          };

          this.startShowReadyHand = reelID => {
            //--急停不會進來
            if (reelID == FORECAST_REEL) {
              this._reelView.setTweenDarkForForecast();

              this._reelView.changeReadyHandMode(reelID, true);
              /*
              const forecastSpine = FindComponent.findComponentInChildren(this._forecastEffectNode, sp.Skeleton);
              if (forecastSpine) {
                  //-預設anikey不是default會在scene上面開播
                  AudioManager.instance.playSound(SoundList.FgIconSpin, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
                  forecastSpine.setAnimation(0, 'expect');
              }*/


              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                error: Error()
              }), SoundList) : SoundList).FgIconSpin, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                error: Error()
              }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                error: Error()
              }), AudioSourceList) : AudioSourceList).BasicAS);
              this._forecastEffectNode.active = true; //-預設anikey不是default會在scene上面開播

              this._forecastSpineController.playAni('expect');
            } else if (reelID == REEL_AMOUNT - 1) {
              //--聽牌情況下的最後一軸
              this._reelView.cancelTweenDarkForForecast();
            }
          };

          this.stopShowReadyHand = reelID => {
            this._reelView.changeReadyHandMode(reelID, false);
            /*
            const forecastSpine = FindComponent.findComponentInChildren(this._forecastEffectNode, sp.Skeleton);
            if (forecastSpine) {
                forecastSpine.getState().setEmptyAnimation(0, 0);
            }*/


            this._forecastSpineController.forceToDoBeforeDestroy();

            this._forecastEffectNode.active = false;
          };

          this._rollerStateForGame = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL;
        }

        init() {
          super.init(); //--聽牌的開啟&關閉

          this.hideReadyHandCallback = this.stopShowReadyHand;
          this.showReadyHandCallback = this.startShowReadyHand;
          this._forecastSpineController = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(this._forecastEffectNode, _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
            error: Error()
          }), SpineController) : SpineController);

          if (this._forecastSpineController) {
            this._forecastSpineController.init();

            this._forecastEffectNode.active = false;
          }
        }

        setProcessAniSymbolData(value) {
          this._reelView.processAniSymbolData = value;
        } //--20250611 FG結束後待機表演的高賠率spineAni


        setGetHighOddSpineAniAfterFGEnd(value) {
          this._reelView.processHighOddSpineAniAfterFGEnd = value;
        }
        /**
         * 
         * @param reel 每一個reel(0-X)從左邊開始
         * @param iconId 每一個reel裡面的icon(0-X)從上到下-ps-公版會產生多兩個(一上一下,所以自己的index不能從0開始,和最後一個)
         * @returns 
         */


        getSymbolWorldPosition(reel, iconId) {
          return this._reelView.getSymbolWorldPosition(reel, iconId);
        }

        /**
         * 20240429
         * 告知gameIcon現在是否啟動wild模式(背景的壓黑會有兩種不同的狀態)  
         */
        setWildModeForGameIconDarkness() {
          this._reelView.setWildModeForGameIconDarkness();
        }
        /**
         * 關閉/開啟指定的指定軸的亮度(true=變暗/false=正常)
         * @param reelIndex 
         * @param brightnessFlag 
         */


        openOrCloseWholeReelIconBright(reelIndex, brightnessFlag) {
          this._reelView.openOrCloseWholeReelIconBright(reelIndex, brightnessFlag);
        }
        /**
         * 關閉/開啟指定的指定軸的指定icon的亮度(true=變暗/false=正常)
         * @param value 
         */


        openOrCloseSingleGameIconBright(value) {
          this._reelView.openOrCloseSingleGameIconBright(value);
        }
        /**
         * 
         * @param reelIndex 
         * @param iconIndex 
         * @param colorAlpha 0-255 不指定為預設恢復原本的spriteFrame color
         */


        setIconAlpha(reelIndex, iconIndex, colorAlpha) {
          this._reelView.setIconAlpha(reelIndex, iconIndex, colorAlpha);
        }
        /**
         * 主要用於FG切換時,寫入陣營資料
         * 當遊戲從NG->FG時,會將全局陣營資料寫入
         * 當遊戲從FG->NG時,會將全局陣營資料reset=-1
         * @param value GameState
         * @param campIndex FG的陣營資料
         * @returns 
         */


        setGameState(value, campIndex) {
          if (value == this._rollerStateForGame) return false;

          if (value === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL || value === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) {
            this._reelView.updateIconCamp(-1);
          } else if (value === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME && campIndex !== undefined) {
            this._reelView.updateIconCamp(campIndex);
          }

          this._reelView.changeGameMode(value, campIndex);

          this._rollerStateForGame = value;
          return true;
        }

        changeRotationResolution(value) {
          var _this$_reelView5;

          (_this$_reelView5 = this._reelView) == null || _this$_reelView5.changeRotationResolution(value);
        } //--FG2模式下盤面的計算


        calulateFGSymbolList(multiplier) {
          this._slotMachineData.calulateFGSymbolList(multiplier);
        } //----重置FG2


        reSetCurrentAllSymbolList_FG() {
          this._slotMachineData.reSetCurrentAllSymbolList_FG();
        } //--取得之前先塞進gameIcon裡面的spineNode,並且從顯示節點拔掉


        getAndRemoveSymbolAniNodeInReel(reelIndex, iconIndex) {
          var _this$_reelView6;

          return (_this$_reelView6 = this._reelView) == null ? void 0 : _this$_reelView6.getAndRemoveSymbolAniNodeInReel(reelIndex, iconIndex);
        } //--關閉前先塞進gameIcon裡面的spineNode(沒有得分要反黑了)


        closeSymbolAniNode() {
          var _this$_reelView7;

          (_this$_reelView7 = this._reelView) == null || _this$_reelView7.closeAllSymbolAniNode();
        }

        playAllSymbolAni() {
          var _this$_reelView8;

          (_this$_reelView8 = this._reelView) == null || _this$_reelView8.playAllSymbolAni();
        }
        /**
         * 準備把所有的icon的spineAni關閉,並且回收到物件池
         * 這邊是沒有中線的高賠率spineAni,會留在gameIcon裡面所以要回收掉
         * startSpin used to call this function
         */


        cleanIdleSymbolAnis() {
          var _this$_reelView9;

          (_this$_reelView9 = this._reelView) == null || _this$_reelView9.cleanIdleSymbolAnis();
        }
        /**
         * 20250610 當FG結束時需要切換spineAniNode的skin
         * (因為FG他的陣營已經決定了,切換回NG要再換回來正確陣營的skin)
         */


        resetSpineAniNodeSkinForCampAfterFG() {
          var _this$_reelView10;

          (_this$_reelView10 = this._reelView) == null || _this$_reelView10.changeSpineAniNodeSkinAfterFG();
        }

        //--20250526--for test
        checkGameIconForTest() {
          var _this$_reelView11;

          (_this$_reelView11 = this._reelView) == null || _this$_reelView11.checkGameIconForTest();
        } //--20250609--for check fast stop 


        getFastStopClick() {
          return this._reelView.fastStopClick;
        } //- (<ReelView018>this._reelView).fastStopClick = false;


        startRoll(isTurboMode, reelIDs) {
          this._reelView.fastStopClick = false;
          super.startRoll(isTurboMode, reelIDs);
        }

        generateRandomIconData(reelID, previousIcons) {
          var sourceList = this._slotMachineData.getTargetAllSymbolList(this._rollerStateForGame);

          var uniqueList = this._slotMachineData.getTargetUniqueSymbolList(reelID, this._rollerStateForGame);

          var pickedSymbols = [];
          var possibleSymbols = [];
          var usedUniqueSymbols = [];
          var iconAmount = this.getIconAmount(reelID); // 產生所有可能的符號組合

          for (var i = 0; i < sourceList.length; i++) {
            possibleSymbols.push(sourceList[i]);
          }

          possibleSymbols.push(...uniqueList); // 隨機選擇符號

          for (var _i = 0; _i < iconAmount; _i++) {
            if (possibleSymbols.length === 0) {
              break; // 如果沒有剩餘的符號，則跳出迴圈
            }

            var randomIndex = Math.floor(Math.random() * possibleSymbols.length);
            var symbol = possibleSymbols[randomIndex]; // 檢查唯一性

            if (uniqueList && uniqueList.includes(symbol)) {
              if (usedUniqueSymbols.includes(symbol)) {
                // 如果已經使用過，則重新選擇
                _i--;
                possibleSymbols.splice(randomIndex, 1); // 移除已經使用過的符號

                continue;
              } else {
                usedUniqueSymbols.push(symbol);
              }
            }

            pickedSymbols.push(symbol);
            possibleSymbols.splice(randomIndex, 1); // 移除已經選取的符號
          } //console.log('checkGenerateRandomIconData:', sourceList.join(","), pickedSymbols.join(","));


          return pickedSymbols;
        }

        allReelRollEnd() {
          var _this$allReelRollEndC;

          super.allReelRollEnd();
          (_this$allReelRollEndC = this.allReelRollEndCallBackToView) == null || _this$allReelRollEndC.call(this); //---來抓每個icon的資料---
          //console.log('this.reelViewList:', (<ReelView1003>this._reelView).testGetReels());
        }
        /*
        public closeAllGameIconBright(): void {
            //this._reelView.
            (<ReelView1003>this._reelView).closeAllIconBright();
        }*/


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_forecastEffectNode", [_dec2], {
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
//# sourceMappingURL=5beff9d27a7b8bf10fbaf890a01f0b7e26a27c12.js.map