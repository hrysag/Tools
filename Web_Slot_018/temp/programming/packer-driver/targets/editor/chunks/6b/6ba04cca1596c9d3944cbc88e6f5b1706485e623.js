System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, Sprite, tween, v3, GameIcon, ReelRoundState, DefinitionGameConfigData, AniSysTools, FindComponent, SpineController, DYN_NODE_PROPERTIES, RPSWildAnimationController, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, WILD_LIST, INSTEAD_WILD, SPECIAL_SYMBOL_LIST, GameIcon018;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameIcon(extras) {
    _reporterNs.report("GameIcon", "db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/GameIcon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelRoundState(extras) {
    _reporterNs.report("ReelRoundState", "db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconData(extras) {
    _reporterNs.report("IconData018", "./IconData018", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../DefinitionGameData/DefinitionGameConfigData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "../MyUtils/AnimationSystem/Definitions/IAnimationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniSysTools(extras) {
    _reporterNs.report("AniSysTools", "../MyUtils/AnimationSystem/AniTools/AniSysTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../MyUtils/FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../MyUtils/AnimationSystem/Components/SpineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_NODE_PROPERTIES(extras) {
    _reporterNs.report("DYN_NODE_PROPERTIES", "../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWildAnimationController(extras) {
    _reporterNs.report("RPSWildAnimationController", "../GameDisplay/RPSWild/RPSWildAnimationController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      color = _cc.color;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      GameIcon = _unresolved_2.GameIcon;
    }, function (_unresolved_3) {
      ReelRoundState = _unresolved_3.ReelRoundState;
    }, function (_unresolved_4) {
      DefinitionGameConfigData = _unresolved_4.DefinitionGameConfigData;
    }, function (_unresolved_5) {
      AniSysTools = _unresolved_5.AniSysTools;
    }, function (_unresolved_6) {
      FindComponent = _unresolved_6.FindComponent;
    }, function (_unresolved_7) {
      SpineController = _unresolved_7.SpineController;
    }, function (_unresolved_8) {
      DYN_NODE_PROPERTIES = _unresolved_8.DYN_NODE_PROPERTIES;
    }, function (_unresolved_9) {
      RPSWildAnimationController = _unresolved_9.RPSWildAnimationController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fd2fbuS+stNVaXYGpuaWukD", "GameIcon018", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'color', 'Sprite', 'tween', 'sp', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        WILD_LIST,
        INSTEAD_WILD,
        SPECIAL_SYMBOL_LIST
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);

      _export("GameIcon018", GameIcon018 = (_dec = ccclass('GameIcon018'), _dec2 = property({
        type: Sprite,
        visible: true,
        displayName: 'gameBlurSpr',
        tooltip: '換圖的模糊圖片'
      }), _dec(_class = (_class2 = class GameIcon018 extends (_crd && GameIcon === void 0 ? (_reportPossibleCrUseOfGameIcon({
        error: Error()
      }), GameIcon) : GameIcon) {
        set rollState(value) {
          this._rollState = value;
        } //---這個要看啟動的FG是哪一個camp.他要換的圖片不一樣


        set nowFgCamp(value) {
          this._nowFgCamp = value;
          this.updateSymbol(this._iconData.iconID);
        }

        constructor() {
          super();

          _initializerDefineProperty(this, "_gameBlurSpr", _descriptor, this);

          this._ogColorAlphaValue = void 0;
          this._rollState = void 0;
          this._aniSymbol = null;
          this._nowFgCamp = void 0;
          this._ogColorAlphaValue = 255;
          this._rollState = (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).Unknown;
          this._nowFgCamp = -1;
        }

        init() {
          super.init();
        }

        setAlpha(colorAlpha) {
          let colorAlphaValue = colorAlpha ? colorAlpha : this._ogColorAlphaValue;
          this._gameSprite.color = color(this._gameSprite.color.r, this._gameSprite.color.g, this._gameSprite.color.b, colorAlphaValue);
        }

        getIconReelInfo() {
          let reelData = {
            reelIndex: this._iconData.reelId,
            iconIndex: this._iconData.iconIndexInReel
          };
          return reelData;
        }

        getCurrentCamp() {
          let currentCamp = this._iconData.camp;

          if (currentCamp === -1) {
            currentCamp = this._nowFgCamp;
          }

          return currentCamp;
        } //---寫入需要用的資料到iconData裡面


        setGameIconData(reelId, iconIndex, campId) {
          let iconData = this._iconData;
          iconData.reelId = reelId;
          iconData.iconIndexInReel = iconIndex;
          iconData.camp = campId;
        }

        getGameIconData() {
          return this._iconData;
        }

        openBlur(symbolID) {
          //this.closeBlurSymbol();
          this._gameSprite.node.active = false;
          this._gameBlurSpr.node.active = true;
        }

        closeBlur() {
          this._gameSprite.node.active = true;
          this._gameBlurSpr.node.active = false;
        }

        setTweenDark() {
          let darkBrightness = this._iconData.sp_darkBrightness;
          let colorNumber = {
            value: 255
          };
          tween(colorNumber).to(0.16, {
            value: darkBrightness
          }, {
            onUpdate: (t, r) => {
              this._gameSprite.color = color(colorNumber.value, colorNumber.value, colorNumber.value, this._gameSprite.color.a);
              this.changeSpineColor(colorNumber.value);
            }
          })
          /*
          .call(() => {
              console.log('finishDark');//--for test
          })*/
          .start();
        }

        changeCamp() {
          this.updateSymbol(this._iconData.iconID);
        } //--20250429-78美術壓黑有兩種不同的明亮度,wild猜拳的明亮度更暗


        setWildBrightness() {
          let darkBrightness = this._iconData.sp_darkBrightness;
          this._gameSprite.color = color(darkBrightness, darkBrightness, darkBrightness, this._gameSprite.color.a);
          this.changeSpineColor(darkBrightness);
        }

        setBrightness(isDark) {
          let darkBrightness = isDark ? this._iconData.darkBrightness : 255;
          this._gameSprite.color = color(darkBrightness, darkBrightness, darkBrightness, this._gameSprite.color.a);
          this.changeSpineColor(darkBrightness);
        }

        addSymbolAniNode(aniSymbol) {
          this._aniSymbol = aniSymbol;
          this._aniSymbol.active = true;
          this.node.addChild(this._aniSymbol);

          this._aniSymbol.setPosition(v3(0, 0, 0));

          this.playSymbolAni();
        }

        playSymbolAni(aniName) {
          if (this._aniSymbol) {
            this._aniSymbol.active = true;
            let iAnimationControl = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(this._aniSymbol);

            if (aniName) {
              iAnimationControl.playAni(aniName);
            } else {
              iAnimationControl.playAni('idle');
            }
          }
        }

        closeSymbolAniNode() {
          if (this._aniSymbol) {
            this._aniSymbol.active = false;
            let iAnimationControl = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(this._aniSymbol);
            iAnimationControl.stopAni();
          }
        } //public getSymbolAniNode(): Node | null {


        getSymbolAniNodeAndRemove() {
          if (!this._aniSymbol) {
            return null;
          } else {
            let iAnimationControl = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(this._aniSymbol);
            iAnimationControl.stopAni();
            this.node.removeChild(this._aniSymbol);
            this.changeSpineColor(this._ogColorAlphaValue); //--255

            let returnAniNode = this._aniSymbol;
            this._aniSymbol = null;
            return returnAniNode;
          }
        }

        getSymbolAniNode() {
          if (!this._aniSymbol) {
            return null;
          } else {
            return this._aniSymbol;
          }
        }

        getSymbolAniNodeName() {
          if (!this._aniSymbol) {
            return '';
          } else {
            return this._aniSymbol.name;
          }
        }

        setSymbolAniNodeToNull() {
          this._aniSymbol = null;
        }

        updateSymbol(symbolID) {
          let iconData = this._iconData;
          iconData.iconID = symbolID; //--最後一輪會換成最終的iconId
          //--camp=0是阿里巴巴, camp=1是四十大盜
          //--_nowFgCamp=<-1>是一般狀態, _nowFgCamp=<0>是阿里巴巴(FG), _nowFgCamp=<1>是四十大盜(FG)

          const FINAL_SYMBOL_ID = INSTEAD_WILD;
          const isAlibaba = iconData.camp === 0;
          const isFinalRoll = this._rollState === (_crd && ReelRoundState === void 0 ? (_reportPossibleCrUseOfReelRoundState({
            error: Error()
          }), ReelRoundState) : ReelRoundState).FinalRoll;
          const isWildSymbol = WILD_LIST.includes(symbolID);
          let spriteFramesTarget;
          let blurSpriteFramesTarget;

          if (this._nowFgCamp !== -1) {
            //-FG
            spriteFramesTarget = this._nowFgCamp === 0 ? iconData.spriteFrameList : iconData.rightSide_SpriteFrames;
            blurSpriteFramesTarget = this._nowFgCamp === 0 ? iconData.leftSide_BlurSpriteFrames : iconData.rightSide_BlurSpriteFrames;
          } else {
            //--NG
            spriteFramesTarget = isAlibaba ? iconData.spriteFrameList : iconData.rightSide_SpriteFrames;
            blurSpriteFramesTarget = isAlibaba ? iconData.leftSide_BlurSpriteFrames : iconData.rightSide_BlurSpriteFrames;

            if (isFinalRoll && isWildSymbol) {
              symbolID = FINAL_SYMBOL_ID;
            }
          }

          this._iconData.symbolID = symbolID;
          this._gameSprite.spriteFrame = spriteFramesTarget[symbolID];
          let fgTargetIndex = symbolID;

          if (SPECIAL_SYMBOL_LIST.includes(symbolID)) {
            fgTargetIndex = blurSpriteFramesTarget.length - 1; //--最後一個是特殊符號  
          }

          this._gameBlurSpr.spriteFrame = blurSpriteFramesTarget[fgTargetIndex];
          /**
          updateSymbol的內容
          this._iconData.symbolID = symbolID;
          this._gameSprite.spriteFrame = this._iconData.spriteFrameList[symbolID];
          */
        }

        changeSpineColor(colorValue) {
          if (this._aniSymbol) {
            if (WILD_LIST.includes(this._aniSymbol[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconID)) {
              //-RPSWildAnimationController
              const spineTargetTop = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                error: Error()
              }), FindComponent) : FindComponent).findComponentInChildren(this._aniSymbol, _crd && RPSWildAnimationController === void 0 ? (_reportPossibleCrUseOfRPSWildAnimationController({
                error: Error()
              }), RPSWildAnimationController) : RPSWildAnimationController).spineFront;
              const spineTargetBottom = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                error: Error()
              }), FindComponent) : FindComponent).findComponentInChildren(this._aniSymbol, _crd && RPSWildAnimationController === void 0 ? (_reportPossibleCrUseOfRPSWildAnimationController({
                error: Error()
              }), RPSWildAnimationController) : RPSWildAnimationController).spineBack;
              spineTargetTop.color = color(colorValue, colorValue, colorValue, spineTargetTop.color.a);
              spineTargetBottom.color = color(colorValue, colorValue, colorValue, spineTargetBottom.color.a);
            } else {
              const spineTarget = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                error: Error()
              }), FindComponent) : FindComponent).findComponentInChildren(this._aniSymbol, _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
                error: Error()
              }), SpineController) : SpineController).spine;
              spineTarget.color = color(colorValue, colorValue, colorValue, spineTarget.color.a);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_gameBlurSpr", [_dec2], {
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
//# sourceMappingURL=6ba04cca1596c9d3944cbc88e6f5b1706485e623.js.map