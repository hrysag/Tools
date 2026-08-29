System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, sp, UITransform, AnimationPlayStateList, CustomAnimationController, FG_BonusSkinState, FG_BonusAniState, Orientation, AudioManager, SOUND_TYPE, SoundList, AudioSourceList, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, FG_BonusBarAniController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimationPlayStateList(extras) {
    _reporterNs.report("AnimationPlayStateList", "../../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomAnimationController(extras) {
    _reporterNs.report("CustomAnimationController", "../../../MyUtils/AnimationSystem/Components/CustomAnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFG_BonusSkinState(extras) {
    _reporterNs.report("FG_BonusSkinState", "./FG_bonusDataDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFG_BonusAniState(extras) {
    _reporterNs.report("FG_BonusAniState", "./FG_bonusDataDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFG_BonusLevel(extras) {
    _reporterNs.report("FG_BonusLevel", "./FG_bonusDataDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../../../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND_TYPE(extras) {
    _reporterNs.report("SOUND_TYPE", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      sp = _cc.sp;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      AnimationPlayStateList = _unresolved_2.AnimationPlayStateList;
    }, function (_unresolved_3) {
      CustomAnimationController = _unresolved_3.CustomAnimationController;
    }, function (_unresolved_4) {
      FG_BonusSkinState = _unresolved_4.FG_BonusSkinState;
      FG_BonusAniState = _unresolved_4.FG_BonusAniState;
    }, function (_unresolved_5) {
      Orientation = _unresolved_5.Orientation;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
      SOUND_TYPE = _unresolved_6.SOUND_TYPE;
    }, function (_unresolved_7) {
      SoundList = _unresolved_7.SoundList;
      AudioSourceList = _unresolved_7.AudioSourceList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "14f22GMKItP5rJ9mqLy0Roy", "FG_BonusBarAniController", undefined);

      __checkObsolete__(['_decorator', 'Vec3', 'Component', 'Node', 'sp', 'v3', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FG_BonusBarAniController", FG_BonusBarAniController = (_dec = ccclass('FG_BonusBarAniController'), _dec2 = property({
        type: _crd && AnimationPlayStateList === void 0 ? (_reportPossibleCrUseOfAnimationPlayStateList({
          error: Error()
        }), AnimationPlayStateList) : AnimationPlayStateList,
        displayName: 'animationPlayStateList',
        visible: true,
        tooltip: '單一的識別碼'
      }), _dec3 = property({
        type: [Vec3],
        displayName: 'horizontal_pos_CAMP_0',
        visible: true,
        tooltip: '橫版的位置_camp_0'
      }), _dec4 = property({
        type: [Vec3],
        displayName: 'horizontal_pos_CAMP_1',
        visible: true,
        tooltip: '橫版的位置_camp_1'
      }), _dec5 = property({
        type: [Vec3],
        displayName: 'vertical_pos_CAMP_0',
        visible: true,
        tooltip: '直版的位置_camp_0'
      }), _dec6 = property({
        type: [Vec3],
        displayName: 'vertical_pos_CAMP_1',
        visible: true,
        tooltip: '直版的位置_camp_1'
      }), _dec(_class = (_class2 = class FG_BonusBarAniController extends (_crd && CustomAnimationController === void 0 ? (_reportPossibleCrUseOfCustomAnimationController({
        error: Error()
      }), CustomAnimationController) : CustomAnimationController) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_animationPlayStateList", _descriptor, this);

          _initializerDefineProperty(this, "_horizontal_pos_CAMP_0", _descriptor2, this);

          _initializerDefineProperty(this, "_horizontal_pos_CAMP_1", _descriptor3, this);

          _initializerDefineProperty(this, "_vertical_pos_CAMP_0", _descriptor4, this);

          _initializerDefineProperty(this, "_vertical_pos_CAMP_1", _descriptor5, this);

          this._mapSkin = void 0;
          this._mapAni = void 0;
          this._mapSpine = void 0;
          this._mapSpineWorldPos = void 0;
          this._gameScreenRotationResolution = null;
          this._camp = -1;
        }

        set camp(value) {
          this._camp = value;
        }

        onLoad() {
          //console.log('FG_BonusBarAniController onLoad', this._animationPlayStateList);
          this.init();
          const targetNode = this.node.getChildByName('Root'); //const children=targetNode.children;

          const len = targetNode.children.length;

          for (let i = 0; i < len; i++) {
            const child = targetNode.getChildByName('sp_' + i);
            const spine = child.getComponent(sp.Skeleton);

            if (spine) {
              this._mapSpine.set(i, spine);

              spine.clearTracks();
            }
          }
        }

        init() {
          this._mapSkin = new Map([['FG_01', new Map([[(_crd && FG_BonusSkinState === void 0 ? (_reportPossibleCrUseOfFG_BonusSkinState({
            error: Error()
          }), FG_BonusSkinState) : FG_BonusSkinState).Sub_01, '_sub_01'], [(_crd && FG_BonusSkinState === void 0 ? (_reportPossibleCrUseOfFG_BonusSkinState({
            error: Error()
          }), FG_BonusSkinState) : FG_BonusSkinState).Sub_05, '_sub_05'], [(_crd && FG_BonusSkinState === void 0 ? (_reportPossibleCrUseOfFG_BonusSkinState({
            error: Error()
          }), FG_BonusSkinState) : FG_BonusSkinState).Sub_09, '_sub_09'], [(_crd && FG_BonusSkinState === void 0 ? (_reportPossibleCrUseOfFG_BonusSkinState({
            error: Error()
          }), FG_BonusSkinState) : FG_BonusSkinState).Sub_13, '_sub_13'], [(_crd && FG_BonusSkinState === void 0 ? (_reportPossibleCrUseOfFG_BonusSkinState({
            error: Error()
          }), FG_BonusSkinState) : FG_BonusSkinState).Sub_normal, '_sub_normal']])], ['FG_02', new Map([[(_crd && FG_BonusSkinState === void 0 ? (_reportPossibleCrUseOfFG_BonusSkinState({
            error: Error()
          }), FG_BonusSkinState) : FG_BonusSkinState).Sub_01, '_sub_01'], [(_crd && FG_BonusSkinState === void 0 ? (_reportPossibleCrUseOfFG_BonusSkinState({
            error: Error()
          }), FG_BonusSkinState) : FG_BonusSkinState).Sub_05, '_sub_05'], [(_crd && FG_BonusSkinState === void 0 ? (_reportPossibleCrUseOfFG_BonusSkinState({
            error: Error()
          }), FG_BonusSkinState) : FG_BonusSkinState).Sub_09, '_sub_09'], [(_crd && FG_BonusSkinState === void 0 ? (_reportPossibleCrUseOfFG_BonusSkinState({
            error: Error()
          }), FG_BonusSkinState) : FG_BonusSkinState).Sub_13, '_sub_13'], [(_crd && FG_BonusSkinState === void 0 ? (_reportPossibleCrUseOfFG_BonusSkinState({
            error: Error()
          }), FG_BonusSkinState) : FG_BonusSkinState).Sub_normal, '_sub_normal']])]]);
          this._mapAni = new Map([[(_crd && FG_BonusAniState === void 0 ? (_reportPossibleCrUseOfFG_BonusAniState({
            error: Error()
          }), FG_BonusAniState) : FG_BonusAniState).ON, 'on'], [(_crd && FG_BonusAniState === void 0 ? (_reportPossibleCrUseOfFG_BonusAniState({
            error: Error()
          }), FG_BonusAniState) : FG_BonusAniState).OFF, 'off'], [(_crd && FG_BonusAniState === void 0 ? (_reportPossibleCrUseOfFG_BonusAniState({
            error: Error()
          }), FG_BonusAniState) : FG_BonusAniState).ON_TO_OFF, 'on_to_off'], [(_crd && FG_BonusAniState === void 0 ? (_reportPossibleCrUseOfFG_BonusAniState({
            error: Error()
          }), FG_BonusAniState) : FG_BonusAniState).OFF_TO_ON, 'off_to_on']]);
          this._mapSpine = new Map();
          this._mapSpineWorldPos = new Map(); //this._gameScreenRotationResolution = Orientation.Landscape;
        }

        getWorldPosition(index) {
          //-_mapSpine(index,spine)
          return this._mapSpineWorldPos.get(index);
        }

        getSpine(index) {
          return this._mapSpine.get(index);
        } //--直橫版改位置


        setGameScreenRotationResolution(value) {
          this._gameScreenRotationResolution = value;
          this.setPositions();
        } //--依照陣營不同設定不同的位置與skin


        setPositions() {
          this.scheduleOnce(() => {
            let targetPos;

            if (this._camp == 0) {
              targetPos = this._gameScreenRotationResolution == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
                error: Error()
              }), Orientation) : Orientation).Landscape ? this._horizontal_pos_CAMP_0 : this._vertical_pos_CAMP_0;
            } else {
              targetPos = this._gameScreenRotationResolution == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
                error: Error()
              }), Orientation) : Orientation).Landscape ? this._horizontal_pos_CAMP_1 : this._vertical_pos_CAMP_1;
            }

            const targetNode = this.node.getChildByName('Root');
            const uiTransform = targetNode.getComponent(UITransform);

            this._mapSpineWorldPos.clear();

            for (let i = 0; i < targetPos.length; i++) {
              const targetSpine = this._mapSpine.get(i);

              if (targetSpine) {
                targetSpine.node.setPosition(targetPos[i]);
                const worldPos = uiTransform.convertToWorldSpaceAR(targetSpine.node.position);

                this._mapSpineWorldPos.set(i, worldPos);
              }
            }
          }, 0);
        } //-0/4/8/12


        async playTitleAni(level) {
          const targetSpine = this._mapSpine.get(level);

          if (targetSpine) {
            await this.playTargetAniInPromise(targetSpine, this._mapAni.get((_crd && FG_BonusAniState === void 0 ? (_reportPossibleCrUseOfFG_BonusAniState({
              error: Error()
            }), FG_BonusAniState) : FG_BonusAniState).OFF_TO_ON));
            targetSpine.setAnimation(0, this._mapAni.get((_crd && FG_BonusAniState === void 0 ? (_reportPossibleCrUseOfFG_BonusAniState({
              error: Error()
            }), FG_BonusAniState) : FG_BonusAniState).ON), false);
          }
        }

        async playSingleItemAni(itemIndex) {
          const targetSpine = this._mapSpine.get(itemIndex); //console.log('playSingleItemAni', itemIndex, targetSpine);


          if (targetSpine) {
            this.checkIndexForSound(itemIndex);
            await this.playTargetAniInPromise(targetSpine, this._mapAni.get((_crd && FG_BonusAniState === void 0 ? (_reportPossibleCrUseOfFG_BonusAniState({
              error: Error()
            }), FG_BonusAniState) : FG_BonusAniState).OFF_TO_ON));
            targetSpine.setAnimation(0, this._mapAni.get((_crd && FG_BonusAniState === void 0 ? (_reportPossibleCrUseOfFG_BonusAniState({
              error: Error()
            }), FG_BonusAniState) : FG_BonusAniState).ON), false);
          }
        }
        /**
         * PS不能顛倒或是倒播,startIndex必須<小於>endIndex
         * @param startIndex 
         * @param endIndex 
         */


        async playRangesAni(startIndex, endIndex) {
          let count = startIndex;
          const maxLen = endIndex - 1;

          while (count < maxLen) {
            const targetSpine = this._mapSpine.get(count);

            if (targetSpine) {
              await this.playTargetAniInPromise(targetSpine, this._mapAni.get((_crd && FG_BonusAniState === void 0 ? (_reportPossibleCrUseOfFG_BonusAniState({
                error: Error()
              }), FG_BonusAniState) : FG_BonusAniState).OFF_TO_ON));
              targetSpine.setAnimation(0, this._mapAni.get((_crd && FG_BonusAniState === void 0 ? (_reportPossibleCrUseOfFG_BonusAniState({
                error: Error()
              }), FG_BonusAniState) : FG_BonusAniState).ON), false);
            }

            count++;
          }
        }

        resetData() {
          for (let [key, value] of this._mapSpine) {
            if (value) {
              let trackEntry = value.getCurrent(0);

              if (trackEntry) {
                value.clearTrack(trackEntry.trackIndex);
              }

              value.setToSetupPose();
              value.setBonesToSetupPose();
              value.setSlotsToSetupPose();
            }
          }
        }

        playTargetAniInPromise(sp, aniKey) {
          return new Promise(resolve => {
            const spineCompleteHandler = trackEntry => {
              resolve();
            };

            sp.setCompleteListener(spineCompleteHandler);
            sp.setAnimation(0, aniKey, false);
          });
        }

        setSkinAndInitSpine(key) {
          let targetMap = this._mapSkin.get(key);

          let skinKey = '';
          const len = this._mapSpine.size;

          for (let i = 0; i < len; i++) {
            const sp = this._mapSpine.get(i);

            if (sp) {
              if (i % 4 == 0) {
                skinKey = targetMap.get(this.getSPSkinKey(i));
              } else {
                skinKey = targetMap.get((_crd && FG_BonusSkinState === void 0 ? (_reportPossibleCrUseOfFG_BonusSkinState({
                  error: Error()
                }), FG_BonusSkinState) : FG_BonusSkinState).Sub_normal);
              }

              sp.setSkin(key + skinKey);
              sp.setAnimation(0, this.getAniKeyByState((_crd && FG_BonusAniState === void 0 ? (_reportPossibleCrUseOfFG_BonusAniState({
                error: Error()
              }), FG_BonusAniState) : FG_BonusAniState).OFF), false);
            }
          }
        }

        checkIndexForSound(index) {
          const target = [0, 4, 8, 12];

          if (target.includes(index)) {
            //播放音效
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).X2, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).BasicAS);
          }
        }

        getSPSkinKey(index) {
          const skinObject = {
            0: (_crd && FG_BonusSkinState === void 0 ? (_reportPossibleCrUseOfFG_BonusSkinState({
              error: Error()
            }), FG_BonusSkinState) : FG_BonusSkinState).Sub_01,
            4: (_crd && FG_BonusSkinState === void 0 ? (_reportPossibleCrUseOfFG_BonusSkinState({
              error: Error()
            }), FG_BonusSkinState) : FG_BonusSkinState).Sub_05,
            8: (_crd && FG_BonusSkinState === void 0 ? (_reportPossibleCrUseOfFG_BonusSkinState({
              error: Error()
            }), FG_BonusSkinState) : FG_BonusSkinState).Sub_09,
            12: (_crd && FG_BonusSkinState === void 0 ? (_reportPossibleCrUseOfFG_BonusSkinState({
              error: Error()
            }), FG_BonusSkinState) : FG_BonusSkinState).Sub_13
          };
          return skinObject[index];
        }

        getSkinKeyByState(skinKey, state) {
          return this._mapSkin.get(skinKey).get(state);
        }

        getAniKeyByState(state) {
          return this._mapAni.get(state);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_animationPlayStateList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_horizontal_pos_CAMP_0", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_horizontal_pos_CAMP_1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_vertical_pos_CAMP_0", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_vertical_pos_CAMP_1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8495548493e193d9effbe3d84c1265d6cfbeac3f.js.map