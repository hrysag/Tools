System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29", "__unresolved_30", "__unresolved_31", "__unresolved_32", "__unresolved_33", "__unresolved_34", "__unresolved_35", "__unresolved_36", "__unresolved_37", "__unresolved_38", "__unresolved_39", "__unresolved_40", "__unresolved_41", "__unresolved_42", "__unresolved_43"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AnimationEffectViewBase, AniEffectID, MoneyEffect, DgCommingTitleAni, DgOpenAniEffect, DgExplosionAniEffect, DgKillDragonTitleAni, DgAnnounceAni, BgAniEffect, ShakeAniEffect, DgParticleCoinsAnieffect, PowerUpAni, LightningEffect, GiftBombAniEffect, DeathLightAniEffect, AwardDiscAniEffect, CallAniEffect, FrozenAniEffect, CrazyAniEffect, GetPropAniEffect, JumpDigitsEffect, MoneyEffectCommand, JumpDigitsEffectCommand, BgAniEffectCommand, DgCommingCommand, DgOpenCommand, DgOutCommand, DgExplosionCommand, DgKillDragonTitleCommand, DgAnnounceAniCommand, DgParticleCoinsAnieffectCommand, PowerUpAniCommand, ShakeAniEffectCommand, LightningEffectCommand, GiftBombEffectCommand, DeathLightAniEffectCommand, AwardDiscAniEffectCommand, CallAniEffectCommand, FrozenAniEffectCommand, CrazyAniEffectCommand, GetPropAniEffectCommand, Fish1AniEffectID, CocosGameSetting, director, find, log, Fish1AniEffectView, _crd;

  function _reportPossibleCrUseOfAnimationEffectViewBase(extras) {
    _reporterNs.report("AnimationEffectViewBase", "../../../framework/game/views/animationEffectViewBase/AnimationEffectViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitAniEffect(extras) {
    _reporterNs.report("InitAniEffect", "../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniEffectID(extras) {
    _reporterNs.report("AniEffectID", "../../../framework/logic/views/aniEffectView/AniEffectDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoneyEffect(extras) {
    _reporterNs.report("MoneyEffect", "../../../framework/logic/views/aniEffectView/anieffects/MoneyEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgCommingTitleAni(extras) {
    _reporterNs.report("DgCommingTitleAni", "./aniEffects/DgCommingTitleAni", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgOpenAniEffect(extras) {
    _reporterNs.report("DgOpenAniEffect", "./aniEffects/DgOpenAniEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgExplosionAniEffect(extras) {
    _reporterNs.report("DgExplosionAniEffect", "./aniEffects/DgExplosionAniEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgKillDragonTitleAni(extras) {
    _reporterNs.report("DgKillDragonTitleAni", "./aniEffects/DgKillDragonTitleAni", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgAnnounceAni(extras) {
    _reporterNs.report("DgAnnounceAni", "./aniEffects/DgAnnounceAni", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgAniEffect(extras) {
    _reporterNs.report("BgAniEffect", "./aniEffects/BgAniEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShakeAniEffect(extras) {
    _reporterNs.report("ShakeAniEffect", "./aniEffects/ShakeAniEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgParticleCoinsAnieffect(extras) {
    _reporterNs.report("DgParticleCoinsAnieffect", "./aniEffects/DgParticleCoinsAnieffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerUpAni(extras) {
    _reporterNs.report("PowerUpAni", "./aniEffects/PowerUpAni", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLightningEffect(extras) {
    _reporterNs.report("LightningEffect", "./aniEffects/LightningEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGiftBombAniEffect(extras) {
    _reporterNs.report("GiftBombAniEffect", "./aniEffects/GiftBombAniEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeathLightAniEffect(extras) {
    _reporterNs.report("DeathLightAniEffect", "./aniEffects/DeathLightAniEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAwardDiscAniEffect(extras) {
    _reporterNs.report("AwardDiscAniEffect", "./aniEffects/AwardDiscAniEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCallAniEffect(extras) {
    _reporterNs.report("CallAniEffect", "./aniEffects/CallAniEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrozenAniEffect(extras) {
    _reporterNs.report("FrozenAniEffect", "./aniEffects/FrozenAniEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrazyAniEffect(extras) {
    _reporterNs.report("CrazyAniEffect", "./aniEffects/CrazyAniEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetPropAniEffect(extras) {
    _reporterNs.report("GetPropAniEffect", "./aniEffects/GetPropAniEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJumpDigitsEffect(extras) {
    _reporterNs.report("JumpDigitsEffect", "../../../framework/logic/views/aniEffectView/anieffects/JumpDigitsEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoneyEffectCommand(extras) {
    _reporterNs.report("MoneyEffectCommand", "../../../framework/logic/views/aniEffectView/commands/MoneyEffectCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJumpDigitsEffectCommand(extras) {
    _reporterNs.report("JumpDigitsEffectCommand", "../../../framework/logic/views/aniEffectView/commands/JumpDigitsEffectCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgAniEffectCommand(extras) {
    _reporterNs.report("BgAniEffectCommand", "./commands/BgAniEffectCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgCommingCommand(extras) {
    _reporterNs.report("DgCommingCommand", "./commands/DgCommingCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgOpenCommand(extras) {
    _reporterNs.report("DgOpenCommand", "./commands/DgOpenCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgOutCommand(extras) {
    _reporterNs.report("DgOutCommand", "./commands/DgOutCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgExplosionCommand(extras) {
    _reporterNs.report("DgExplosionCommand", "./commands/DgExplosionCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgKillDragonTitleCommand(extras) {
    _reporterNs.report("DgKillDragonTitleCommand", "./commands/DgKillDragonTitleCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgAnnounceAniCommand(extras) {
    _reporterNs.report("DgAnnounceAniCommand", "./commands/DgAnnounceAniCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgParticleCoinsAnieffectCommand(extras) {
    _reporterNs.report("DgParticleCoinsAnieffectCommand", "./commands/DgParticleCoinsAnieffectCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerUpAniCommand(extras) {
    _reporterNs.report("PowerUpAniCommand", "./commands/PowerUpAniCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShakeAniEffectCommand(extras) {
    _reporterNs.report("ShakeAniEffectCommand", "./commands/ShakeAniEffectCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLightningEffectCommand(extras) {
    _reporterNs.report("LightningEffectCommand", "./commands/LightningEffectCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGiftBombEffectCommand(extras) {
    _reporterNs.report("GiftBombEffectCommand", "./commands/GiftBombEffectCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeathLightAniEffectCommand(extras) {
    _reporterNs.report("DeathLightAniEffectCommand", "./commands/DeathLightAniEffectCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAwardDiscAniEffectCommand(extras) {
    _reporterNs.report("AwardDiscAniEffectCommand", "./commands/AwardDiscAniEffectCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCallAniEffectCommand(extras) {
    _reporterNs.report("CallAniEffectCommand", "./commands/CallAniEffectCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrozenAniEffectCommand(extras) {
    _reporterNs.report("FrozenAniEffectCommand", "./commands/FrozenAniEffectCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrazyAniEffectCommand(extras) {
    _reporterNs.report("CrazyAniEffectCommand", "./commands/CrazyAniEffectCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetPropAniEffectCommand(extras) {
    _reporterNs.report("GetPropAniEffectCommand", "./commands/GetPropAniEffectCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1AniEffectID(extras) {
    _reporterNs.report("Fish1AniEffectID", "./Fish1AniEffectDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosGameSetting(extras) {
    _reporterNs.report("CocosGameSetting", "../../../framework/utils/CocosGameSetting", _context.meta, extras);
  }

  _export("Fish1AniEffectView", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      find = _cc.find;
      log = _cc.log;
    }, function (_unresolved_2) {
      AnimationEffectViewBase = _unresolved_2.AnimationEffectViewBase;
    }, function (_unresolved_3) {
      AniEffectID = _unresolved_3.AniEffectID;
    }, function (_unresolved_4) {
      MoneyEffect = _unresolved_4.MoneyEffect;
    }, function (_unresolved_5) {
      DgCommingTitleAni = _unresolved_5.DgCommingTitleAni;
    }, function (_unresolved_6) {
      DgOpenAniEffect = _unresolved_6.DgOpenAniEffect;
    }, function (_unresolved_7) {
      DgExplosionAniEffect = _unresolved_7.DgExplosionAniEffect;
    }, function (_unresolved_8) {
      DgKillDragonTitleAni = _unresolved_8.DgKillDragonTitleAni;
    }, function (_unresolved_9) {
      DgAnnounceAni = _unresolved_9.DgAnnounceAni;
    }, function (_unresolved_10) {
      BgAniEffect = _unresolved_10.BgAniEffect;
    }, function (_unresolved_11) {
      ShakeAniEffect = _unresolved_11.ShakeAniEffect;
    }, function (_unresolved_12) {
      DgParticleCoinsAnieffect = _unresolved_12.DgParticleCoinsAnieffect;
    }, function (_unresolved_13) {
      PowerUpAni = _unresolved_13.PowerUpAni;
    }, function (_unresolved_14) {
      LightningEffect = _unresolved_14.LightningEffect;
    }, function (_unresolved_15) {
      GiftBombAniEffect = _unresolved_15.GiftBombAniEffect;
    }, function (_unresolved_16) {
      DeathLightAniEffect = _unresolved_16.DeathLightAniEffect;
    }, function (_unresolved_17) {
      AwardDiscAniEffect = _unresolved_17.AwardDiscAniEffect;
    }, function (_unresolved_18) {
      CallAniEffect = _unresolved_18.CallAniEffect;
    }, function (_unresolved_19) {
      FrozenAniEffect = _unresolved_19.FrozenAniEffect;
    }, function (_unresolved_20) {
      CrazyAniEffect = _unresolved_20.CrazyAniEffect;
    }, function (_unresolved_21) {
      GetPropAniEffect = _unresolved_21.GetPropAniEffect;
    }, function (_unresolved_22) {
      JumpDigitsEffect = _unresolved_22.JumpDigitsEffect;
    }, function (_unresolved_23) {
      MoneyEffectCommand = _unresolved_23.MoneyEffectCommand;
    }, function (_unresolved_24) {
      JumpDigitsEffectCommand = _unresolved_24.JumpDigitsEffectCommand;
    }, function (_unresolved_25) {
      BgAniEffectCommand = _unresolved_25.BgAniEffectCommand;
    }, function (_unresolved_26) {
      DgCommingCommand = _unresolved_26.DgCommingCommand;
    }, function (_unresolved_27) {
      DgOpenCommand = _unresolved_27.DgOpenCommand;
    }, function (_unresolved_28) {
      DgOutCommand = _unresolved_28.DgOutCommand;
    }, function (_unresolved_29) {
      DgExplosionCommand = _unresolved_29.DgExplosionCommand;
    }, function (_unresolved_30) {
      DgKillDragonTitleCommand = _unresolved_30.DgKillDragonTitleCommand;
    }, function (_unresolved_31) {
      DgAnnounceAniCommand = _unresolved_31.DgAnnounceAniCommand;
    }, function (_unresolved_32) {
      DgParticleCoinsAnieffectCommand = _unresolved_32.DgParticleCoinsAnieffectCommand;
    }, function (_unresolved_33) {
      PowerUpAniCommand = _unresolved_33.PowerUpAniCommand;
    }, function (_unresolved_34) {
      ShakeAniEffectCommand = _unresolved_34.ShakeAniEffectCommand;
    }, function (_unresolved_35) {
      LightningEffectCommand = _unresolved_35.LightningEffectCommand;
    }, function (_unresolved_36) {
      GiftBombEffectCommand = _unresolved_36.GiftBombEffectCommand;
    }, function (_unresolved_37) {
      DeathLightAniEffectCommand = _unresolved_37.DeathLightAniEffectCommand;
    }, function (_unresolved_38) {
      AwardDiscAniEffectCommand = _unresolved_38.AwardDiscAniEffectCommand;
    }, function (_unresolved_39) {
      CallAniEffectCommand = _unresolved_39.CallAniEffectCommand;
    }, function (_unresolved_40) {
      FrozenAniEffectCommand = _unresolved_40.FrozenAniEffectCommand;
    }, function (_unresolved_41) {
      CrazyAniEffectCommand = _unresolved_41.CrazyAniEffectCommand;
    }, function (_unresolved_42) {
      GetPropAniEffectCommand = _unresolved_42.GetPropAniEffectCommand;
    }, function (_unresolved_43) {
      Fish1AniEffectID = _unresolved_43.Fish1AniEffectID;
    }, function (_unresolved_44) {
      CocosGameSetting = _unresolved_44.CocosGameSetting;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6992fSmRz5Pl6z27fhwPUgg", "Fish1AniEffectView", undefined);
      /**
       * Created by EricHuang on 2023/10/08.
       * 這邊接hit fish
       */


      __checkObsolete__(['director', 'find']);

      //--這是AniEffectInvorker
      __checkObsolete__(['log']);

      _export("Fish1AniEffectView", Fish1AniEffectView = class Fish1AniEffectView extends (_crd && AnimationEffectViewBase === void 0 ? (_reportPossibleCrUseOfAnimationEffectViewBase({
        error: Error()
      }), AnimationEffectViewBase) : AnimationEffectViewBase) {
        constructor() {
          super();
        } //--override(進房間後取得資訊再執行)


        setDataAfterSetRoom() {
          var _command, _command2, _command3, _command4, _command5, _command6;

          log('setDataAfterSetRoom'); //---寫入進房間後相關座位資訊

          var command = this.getCommand((_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
            error: Error()
          }), AniEffectID) : AniEffectID).ANI_Money);
          (_command = command) == null ? void 0 : _command.setDataAfterSetRoom({
            coinEndinfo: this._aniPositionInfo.coniEndinfo
          });
          command = this.getCommand((_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
            error: Error()
          }), Fish1AniEffectID) : Fish1AniEffectID).ANI_POWERUP_EFFECT);
          (_command2 = command) == null ? void 0 : _command2.setDataAfterSetRoom({
            exchangePositions: this._aniPositionInfo.exchangePositions,
            playerIndex: this._playerIndex
          });
          command = this.getCommand((_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
            error: Error()
          }), Fish1AniEffectID) : Fish1AniEffectID).ANI_AWARD_DISC_EFFECT);
          (_command3 = command) == null ? void 0 : _command3.setDataAfterSetRoom({
            positions: this._aniPositionInfo.positions,
            playerIndex: this._playerIndex
          });
          command = this.getCommand((_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
            error: Error()
          }), Fish1AniEffectID) : Fish1AniEffectID).ANI_SUMMON_EFFECT); //--this._aniPositionInfo.playerPositions=global world positions

          (_command4 = command) == null ? void 0 : _command4.setDataAfterSetRoom({
            positions: this._aniPositionInfo.playerPositions
          });
          command = this.getCommand((_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
            error: Error()
          }), Fish1AniEffectID) : Fish1AniEffectID).ANI_CRAZY_EFFECT); //--this._aniPositionInfo.playerPositions=global world positions

          (_command5 = command) == null ? void 0 : _command5.setDataAfterSetRoom({
            positions: this._aniPositionInfo.playerPositions
          });
          command = this.getCommand((_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
            error: Error()
          }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GET_PROP_EFFECT);
          (_command6 = command) == null ? void 0 : _command6.setDataAfterSetRoom({
            menuPositions: this._aniPositionInfo.menuPositions
          });
        }

        resetRoomData() {
          var _command7, _command8, _command9;

          var command = this.getCommand((_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
            error: Error()
          }), Fish1AniEffectID) : Fish1AniEffectID).ANI_AWARD_DISC_EFFECT);
          (_command7 = command) == null ? void 0 : _command7.resetRoomData();
          command = this.getCommand((_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
            error: Error()
          }), Fish1AniEffectID) : Fish1AniEffectID).ANI_SUMMON_EFFECT);
          (_command8 = command) == null ? void 0 : _command8.resetRoomData();
          command = this.getCommand((_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
            error: Error()
          }), Fish1AniEffectID) : Fish1AniEffectID).ANI_CRAZY_EFFECT);
          (_command9 = command) == null ? void 0 : _command9.resetRoomData();
        } //--override(進房間前先執行)


        setCommands() {
          //---寫入要建構的class/data也在這邊先做好
          var command = {
            id: (_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
              error: Error()
            }), AniEffectID) : AniEffectID).ANI_Money,
            commandConstructor: _crd && MoneyEffectCommand === void 0 ? (_reportPossibleCrUseOfMoneyEffectCommand({
              error: Error()
            }), MoneyEffectCommand) : MoneyEffectCommand,
            classConstructor: _crd && MoneyEffect === void 0 ? (_reportPossibleCrUseOfMoneyEffect({
              error: Error()
            }), MoneyEffect) : MoneyEffect,
            classConstructorId: 'MoneyEffect',
            classArgs: [{
              //container:this._stageNode,
              container: find('Canvas/coinAniEffectLayer'),
              //coinEndinfo:this._aniPositionInfo.coniEndinfo,
              //playerIndex:this._playerIndex,//-沒用到
              moneyTexturePath: {
                atlas: 'prefab/textures/fishHunterGui',
                spriteFrame: 'money_ani0000'
              }
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
              error: Error()
            }), AniEffectID) : AniEffectID).ANI_JumpDigits,
            commandConstructor: _crd && JumpDigitsEffectCommand === void 0 ? (_reportPossibleCrUseOfJumpDigitsEffectCommand({
              error: Error()
            }), JumpDigitsEffectCommand) : JumpDigitsEffectCommand,
            classConstructor: _crd && JumpDigitsEffect === void 0 ? (_reportPossibleCrUseOfJumpDigitsEffect({
              error: Error()
            }), JumpDigitsEffect) : JumpDigitsEffect,
            classConstructorId: 'JumpDigitsEffect',
            classArgs: [{
              container: this._stageNode,
              other: {
                strDefultTexturePath: 'num_winScore_'
              }
            }]
          };
          this.addCommand(command); //--title-- 

          command = {
            id: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
              error: Error()
            }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_COMMING,
            commandConstructor: _crd && DgCommingCommand === void 0 ? (_reportPossibleCrUseOfDgCommingCommand({
              error: Error()
            }), DgCommingCommand) : DgCommingCommand,
            classConstructor: _crd && DgCommingTitleAni === void 0 ? (_reportPossibleCrUseOfDgCommingTitleAni({
              error: Error()
            }), DgCommingTitleAni) : DgCommingTitleAni,
            classConstructorId: 'DgCommingTitleAni',
            classArgs: [{
              container: this._stageNode,
              other: {
                prefabId: 'prefab/aniEffect/titleGD',
                languageNodeId: 'tx',
                atlasId: 'fishHunter_' + (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                  error: Error()
                }), CocosGameSetting) : CocosGameSetting).Game_Lang,
                frameId: 'tx_main_gd_is_coming'
              }
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
              error: Error()
            }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_OPENING,
            commandConstructor: _crd && DgOpenCommand === void 0 ? (_reportPossibleCrUseOfDgOpenCommand({
              error: Error()
            }), DgOpenCommand) : DgOpenCommand,
            classConstructor: _crd && DgOpenAniEffect === void 0 ? (_reportPossibleCrUseOfDgOpenAniEffect({
              error: Error()
            }), DgOpenAniEffect) : DgOpenAniEffect,
            classConstructorId: 'DgOpenAniEffect',
            classArgs: [{
              container: director.getScene(),
              other: {
                prefabId: 'prefab/aniEffect/fish_24_opening'
              }
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
              error: Error()
            }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_OUT,
            commandConstructor: _crd && DgOutCommand === void 0 ? (_reportPossibleCrUseOfDgOutCommand({
              error: Error()
            }), DgOutCommand) : DgOutCommand,
            classConstructor: _crd && DgOpenAniEffect === void 0 ? (_reportPossibleCrUseOfDgOpenAniEffect({
              error: Error()
            }), DgOpenAniEffect) : DgOpenAniEffect,
            classConstructorId: 'DgOpenAniEffect',
            classArgs: [{
              container: director.getScene(),
              other: {
                prefabId: 'prefab/aniEffect/fish_24_opening'
              }
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
              error: Error()
            }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_EXPLOSION,
            commandConstructor: _crd && DgExplosionCommand === void 0 ? (_reportPossibleCrUseOfDgExplosionCommand({
              error: Error()
            }), DgExplosionCommand) : DgExplosionCommand,
            classConstructor: _crd && DgExplosionAniEffect === void 0 ? (_reportPossibleCrUseOfDgExplosionAniEffect({
              error: Error()
            }), DgExplosionAniEffect) : DgExplosionAniEffect,
            classConstructorId: 'DgExplosionAniEffect',
            classArgs: [{
              container: director.getScene(),
              other: {
                prefabId: 'prefab/aniEffect/nuclearBombDragon'
              }
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
              error: Error()
            }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_KILL_TITLE,
            commandConstructor: _crd && DgKillDragonTitleCommand === void 0 ? (_reportPossibleCrUseOfDgKillDragonTitleCommand({
              error: Error()
            }), DgKillDragonTitleCommand) : DgKillDragonTitleCommand,
            classConstructor: _crd && DgKillDragonTitleAni === void 0 ? (_reportPossibleCrUseOfDgKillDragonTitleAni({
              error: Error()
            }), DgKillDragonTitleAni) : DgKillDragonTitleAni,
            classConstructorId: 'DgKillDragonTitleAni',
            classArgs: [{
              container: this._stageNode,
              other: {
                prefabId: 'prefab/aniEffect/aniKillDragonTitle',
                atlasId: 'fishHunter_' + (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                  error: Error()
                }), CocosGameSetting) : CocosGameSetting).Game_Lang,
                frameId: 'tx_kill_dragon'
              }
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
              error: Error()
            }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_KILL_ANNOUNCE,
            commandConstructor: _crd && DgAnnounceAniCommand === void 0 ? (_reportPossibleCrUseOfDgAnnounceAniCommand({
              error: Error()
            }), DgAnnounceAniCommand) : DgAnnounceAniCommand,
            classConstructor: _crd && DgAnnounceAni === void 0 ? (_reportPossibleCrUseOfDgAnnounceAni({
              error: Error()
            }), DgAnnounceAni) : DgAnnounceAni,
            classConstructorId: 'DgAnnounceAni',
            classArgs: [{
              container: this._stageNode,
              other: {
                prefabId: 'prefab/aniEffect/win',
                tx_congratulate_atlasId: 'fishHunter_' + (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                  error: Error()
                }), CocosGameSetting) : CocosGameSetting).Game_Lang,
                tx_congratulate: 'tx_congratulate',
                tx_get_atlasId: 'fishHunter_' + (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                  error: Error()
                }), CocosGameSetting) : CocosGameSetting).Game_Lang,
                tx_get: 'tx_get',
                digitsTexturePath: 'num_winScore_' //atlasId:'fishHunter_'+CocosGameSetting.Game_Lang,
                //frameId:'tx_kill_dragon'

              }
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
              error: Error()
            }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_KILL_PARTICLE_COINS,
            commandConstructor: _crd && DgParticleCoinsAnieffectCommand === void 0 ? (_reportPossibleCrUseOfDgParticleCoinsAnieffectCommand({
              error: Error()
            }), DgParticleCoinsAnieffectCommand) : DgParticleCoinsAnieffectCommand,
            classConstructor: _crd && DgParticleCoinsAnieffect === void 0 ? (_reportPossibleCrUseOfDgParticleCoinsAnieffect({
              error: Error()
            }), DgParticleCoinsAnieffect) : DgParticleCoinsAnieffect,
            classConstructorId: 'DgParticleCoinsAnieffect',
            classArgs: [{
              container: director.getScene(),
              other: {
                prefabId: 'prefab/aniEffect/particleCoins'
              }
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
              error: Error()
            }), Fish1AniEffectID) : Fish1AniEffectID).ANI_BG_EFFECT_CHANGE,
            commandConstructor: _crd && BgAniEffectCommand === void 0 ? (_reportPossibleCrUseOfBgAniEffectCommand({
              error: Error()
            }), BgAniEffectCommand) : BgAniEffectCommand,
            classConstructor: _crd && BgAniEffect === void 0 ? (_reportPossibleCrUseOfBgAniEffect({
              error: Error()
            }), BgAniEffect) : BgAniEffect,
            classConstructorId: 'BgAniEffect',
            classArgs: [{
              container: this._stageNode,
              other: {
                scene: director.getScene(),
                sceneCameraNode: 'Main Camera',
                canvasCameraNode: 'Canvas/CameraGUI',
                spriteFrameIds: ['bg/bg_1/texture', 'bg/bg_2/texture'],
                prefabId: 'prefab/aniEffect/wave',
                motionTime: 2.2 //-秒

              }
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
              error: Error()
            }), Fish1AniEffectID) : Fish1AniEffectID).ANI_POWERUP_EFFECT,
            commandConstructor: _crd && PowerUpAniCommand === void 0 ? (_reportPossibleCrUseOfPowerUpAniCommand({
              error: Error()
            }), PowerUpAniCommand) : PowerUpAniCommand,
            classConstructor: _crd && PowerUpAni === void 0 ? (_reportPossibleCrUseOfPowerUpAni({
              error: Error()
            }), PowerUpAni) : PowerUpAni,
            classConstructorId: 'PowerUpAni',
            classArgs: [{
              container: this._stageNode,
              //playerIndex:this._playerIndex,
              //positions:this._aniPositionInfo.exchangePositions,//--old座位座標資訊(world position)
              //exchangePositions:this._aniPositionInfo.exchangePositions,//--座位座標資訊(world position)
              prefabId: 'prefab/aniEffect/powerUp',
              powerUpDigitsTexturePath: {
                //atlas:'prefab/textures/fishHunterDragon',
                spriteFrame: 'num_power_'
              }
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
              error: Error()
            }), AniEffectID) : AniEffectID).ANI_ShakeEffect,
            commandConstructor: _crd && ShakeAniEffectCommand === void 0 ? (_reportPossibleCrUseOfShakeAniEffectCommand({
              error: Error()
            }), ShakeAniEffectCommand) : ShakeAniEffectCommand,
            classConstructor: _crd && ShakeAniEffect === void 0 ? (_reportPossibleCrUseOfShakeAniEffect({
              error: Error()
            }), ShakeAniEffect) : ShakeAniEffect,
            classConstructorId: 'ShakeAniEffect',
            classArgs: [{
              container: this._stageNode
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
              error: Error()
            }), AniEffectID) : AniEffectID).ANI_Flash_Lightning,
            commandConstructor: _crd && LightningEffectCommand === void 0 ? (_reportPossibleCrUseOfLightningEffectCommand({
              error: Error()
            }), LightningEffectCommand) : LightningEffectCommand,
            classConstructor: _crd && LightningEffect === void 0 ? (_reportPossibleCrUseOfLightningEffect({
              error: Error()
            }), LightningEffect) : LightningEffect,
            classConstructorId: 'LightningEffect',
            classArgs: [{
              container: this._stageNode,
              scene: director.getScene(),
              cameraId: 'Canvas/CameraFX',
              textureId: 'prefab/textures/lightning/texture',
              prefabId: 'prefab/aniEffect/lightningPoint'
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
              error: Error()
            }), AniEffectID) : AniEffectID).ANI_BombEffect,
            commandConstructor: _crd && GiftBombEffectCommand === void 0 ? (_reportPossibleCrUseOfGiftBombEffectCommand({
              error: Error()
            }), GiftBombEffectCommand) : GiftBombEffectCommand,
            classConstructor: _crd && GiftBombAniEffect === void 0 ? (_reportPossibleCrUseOfGiftBombAniEffect({
              error: Error()
            }), GiftBombAniEffect) : GiftBombAniEffect,
            classConstructorId: 'GiftBombAniEffect',
            classArgs: [{
              container: this._stageNode,
              cameraId: 'Canvas/CameraFX',
              scene: director.getScene(),
              prefabId: 'prefab/aniEffect/giftbomb'
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
              error: Error()
            }), Fish1AniEffectID) : Fish1AniEffectID).ANI_DEATH_LIGHT_EFFECT,
            commandConstructor: _crd && DeathLightAniEffectCommand === void 0 ? (_reportPossibleCrUseOfDeathLightAniEffectCommand({
              error: Error()
            }), DeathLightAniEffectCommand) : DeathLightAniEffectCommand,
            classConstructor: _crd && DeathLightAniEffect === void 0 ? (_reportPossibleCrUseOfDeathLightAniEffect({
              error: Error()
            }), DeathLightAniEffect) : DeathLightAniEffect,
            classConstructorId: 'DeathLightAniEffect',
            classArgs: [{
              container: this._stageNode,
              cameraId: 'Canvas/CameraFX',
              scene: director.getScene(),
              prefabId: 'prefab/aniEffect/fishDeath'
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
              error: Error()
            }), Fish1AniEffectID) : Fish1AniEffectID).ANI_AWARD_DISC_EFFECT,
            commandConstructor: _crd && AwardDiscAniEffectCommand === void 0 ? (_reportPossibleCrUseOfAwardDiscAniEffectCommand({
              error: Error()
            }), AwardDiscAniEffectCommand) : AwardDiscAniEffectCommand,
            classConstructor: _crd && AwardDiscAniEffect === void 0 ? (_reportPossibleCrUseOfAwardDiscAniEffect({
              error: Error()
            }), AwardDiscAniEffect) : AwardDiscAniEffect,
            classConstructorId: 'AwardDiscAniEffect',
            classArgs: [{
              container: this._stageNode,
              cameraId: 'Canvas/CameraFX',
              //position:this._aniPositionInfo.positions,
              //playerTable:this._playerIndex,
              maxmumTable: 4,
              //--最大座位數(有的遊戲是3個)
              digitsTexturePath: 'num_big_',
              //scene:director.getScene(),
              prefabId: 'prefab/aniEffect/bigCoin'
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
              error: Error()
            }), Fish1AniEffectID) : Fish1AniEffectID).ANI_SUMMON_EFFECT,
            commandConstructor: _crd && CallAniEffectCommand === void 0 ? (_reportPossibleCrUseOfCallAniEffectCommand({
              error: Error()
            }), CallAniEffectCommand) : CallAniEffectCommand,
            classConstructor: _crd && CallAniEffect === void 0 ? (_reportPossibleCrUseOfCallAniEffect({
              error: Error()
            }), CallAniEffect) : CallAniEffect,
            classConstructorId: 'CallAniEffect',
            classArgs: [{
              container: find('Canvas/topAniEffectNode'),
              //--UI之上(圓盤特效用的)
              aniEffectContainer: this._stageNode,
              //--UI之下寶貝球
              scene: director.getScene(),
              //position:this._aniPositionInfo.positions,//-沒用到
              //playerPositions:this._aniPositionInfo.playerPositions,//--global world positions
              //playerTable:this._playerIndex,//-0-3(沒用到)
              callTowerPrefabId: 'prefab/aniEffect/itemCallTowerFx',
              callFxPrefabId: 'prefab/aniEffect/itemCallFX',
              //----上面一層是縮放,下面一層是透明度,所以要播兩段
              //callFxUnderPrefabId:'',
              callSymbolPrefabId: 'prefab/aniEffect/itemCallSymbol'
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
              error: Error()
            }), Fish1AniEffectID) : Fish1AniEffectID).ANI_FREEZE_EFFECT,
            commandConstructor: _crd && FrozenAniEffectCommand === void 0 ? (_reportPossibleCrUseOfFrozenAniEffectCommand({
              error: Error()
            }), FrozenAniEffectCommand) : FrozenAniEffectCommand,
            classConstructor: _crd && FrozenAniEffect === void 0 ? (_reportPossibleCrUseOfFrozenAniEffect({
              error: Error()
            }), FrozenAniEffect) : FrozenAniEffect,
            classConstructorId: 'FrozenAniEffect',
            classArgs: [{
              container: this._stageNode,
              spriteFrameId: 'bg/fishHunterFrozen/spriteFrame'
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
              error: Error()
            }), Fish1AniEffectID) : Fish1AniEffectID).ANI_CRAZY_EFFECT,
            commandConstructor: _crd && CrazyAniEffectCommand === void 0 ? (_reportPossibleCrUseOfCrazyAniEffectCommand({
              error: Error()
            }), CrazyAniEffectCommand) : CrazyAniEffectCommand,
            classConstructor: _crd && CrazyAniEffect === void 0 ? (_reportPossibleCrUseOfCrazyAniEffect({
              error: Error()
            }), CrazyAniEffect) : CrazyAniEffect,
            classConstructorId: 'CrazyAniEffect',
            classArgs: [{
              container: find('Canvas/topAniEffectNode'),
              //--UI之上(圓盤特效用的)
              //position:this._aniPositionInfo.positions,
              //playerPositions:this._aniPositionInfo.playerPositions,//--global world positions
              //playerTable:this._playerIndex,//-0-3--沒用到
              crazyTowerPrefabId: 'prefab/aniEffect/itemCrazyTowerFx'
            }]
          };
          this.addCommand(command);
          command = {
            id: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
              error: Error()
            }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GET_PROP_EFFECT,
            commandConstructor: _crd && GetPropAniEffectCommand === void 0 ? (_reportPossibleCrUseOfGetPropAniEffectCommand({
              error: Error()
            }), GetPropAniEffectCommand) : GetPropAniEffectCommand,
            classConstructor: _crd && GetPropAniEffect === void 0 ? (_reportPossibleCrUseOfGetPropAniEffect({
              error: Error()
            }), GetPropAniEffect) : GetPropAniEffect,
            classConstructorId: 'GetPropAniEffect',
            classArgs: [{
              container: find('Canvas/topAniEffectNode'),
              //--UI之上(圓盤特效用的)
              //cameraFishNode:find('Canvas/Camera'),
              //cameraGuiNode:find('Canvas/CameraGUI'),
              //position:this._aniPositionInfo.positions,
              //menuPositions:this._aniPositionInfo.menuPositions,//--global world positions
              //playerTable:this._playerIndex,//-0-3-沒用到
              //--1 summon 2 frozen 3 crazy
              propSpriteFrames: ['Props_call_btn_over', 'Props_frozen_btn_over', 'Props_crazy_btn_over']
            }]
          };
          this.addCommand(command);
          log('addEffectready@@');
        }

        playAniEffect() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4fcffdd475f466813d6ca63e20784268aefcdb02.js.map