System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, sp, RPSGuessData, AudioManager, SOUND_TYPE, AudioSourceList, SoundList, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, RPSBattle;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRPSGuessData(extras) {
    _reporterNs.report("RPSGuessData", "./RPSDataDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND_TYPE(extras) {
    _reporterNs.report("SOUND_TYPE", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      RPSGuessData = _unresolved_2.RPSGuessData;
    }, function (_unresolved_3) {
      AudioManager = _unresolved_3.AudioManager;
      SOUND_TYPE = _unresolved_3.SOUND_TYPE;
    }, function (_unresolved_4) {
      AudioSourceList = _unresolved_4.AudioSourceList;
      SoundList = _unresolved_4.SoundList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa310aapONCO5L89MduHt9E", "RPSBattle", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RPSBattle", RPSBattle = (_dec = ccclass('RPSBattle'), _dec2 = property({
        type: Node,
        visible: true,
        displayName: 'RPSItemNode',
        tooltip: '拳種的itemNodes'
      }), _dec3 = property({
        type: [_crd && RPSGuessData === void 0 ? (_reportPossibleCrUseOfRPSGuessData({
          error: Error()
        }), RPSGuessData) : RPSGuessData],
        visible: true,
        displayName: 'L_RPSItems',
        tooltip: '左邊拳種的item'
      }), _dec4 = property({
        type: [_crd && RPSGuessData === void 0 ? (_reportPossibleCrUseOfRPSGuessData({
          error: Error()
        }), RPSGuessData) : RPSGuessData],
        visible: true,
        displayName: 'R_RPSItems',
        tooltip: '右邊拳種的item'
      }), _dec5 = property({
        type: Node,
        visible: true,
        displayName: 'explosion',
        tooltip: '爆炸效果Node'
      }), _dec6 = property({
        type: Node,
        visible: true,
        displayName: 'RPS_Motion',
        tooltip: '撞擊效果Node'
      }), _dec(_class = (_class2 = class RPSBattle extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_RPSItemNode", _descriptor, this);

          _initializerDefineProperty(this, "_L_RPSItems", _descriptor2, this);

          _initializerDefineProperty(this, "_R_RPSItems", _descriptor3, this);

          _initializerDefineProperty(this, "_explosion", _descriptor4, this);

          _initializerDefineProperty(this, "_RPS_Motion", _descriptor5, this);

          this._skMotion = void 0;
          this._skExplosion = void 0;
        }

        init() {
          this._skMotion = this._RPS_Motion.getComponent(sp.Skeleton);
          this._skExplosion = this._explosion.getComponent(sp.Skeleton);
          this.node.active = false;
        }

        closeAllRPSItem() {
          const allRPSItems = [...this._L_RPSItems, ...this._R_RPSItems];
          allRPSItems.forEach(item => {
            item.RPSGuessData.forEach(itemData => {
              if (itemData && itemData.rpsNode) {
                itemData.rpsNode.active = false;
              }
            });
          });
        }

        closeBattle() {
          this.node.active = false;
        }

        setResultForGuess(lrIndex, iconIndex, result) {
          let targetBattleData;

          if (lrIndex == 1) {
            targetBattleData = this._L_RPSItems[iconIndex];
          } else {
            targetBattleData = this._R_RPSItems[iconIndex];
          }

          let targetNode = this.getTargetRPSItem(targetBattleData, result);
          targetNode.active = true;
        }

        playRPSMotion() {
          this.node.active = true;
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).FgIconFight, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
            error: Error()
          }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).BtnAS);
          return new Promise(async (resolve, reject) => {
            let promises = [this.playRPSMotionPromise(), this.playExplosionPromise()];

            try {
              await Promise.all(promises);
              this.node.active = false;
              this.closeAllRPSItem();
              resolve();
            } catch (e) {
              reject(e);
            }
          });
        }

        async playRPSMotionPromise() {
          return new Promise(resolve => {
            this._skMotion.setAnimation(0, 'battle', false);

            this._skMotion.setCompleteListener(() => {
              resolve();
            });
          });
        }

        async playExplosionPromise() {
          return new Promise(resolve => {
            this._skExplosion.setAnimation(0, 'battle', false);

            this._skExplosion.setCompleteListener(() => {
              resolve();
            });
          });
        }

        getTargetRPSItem(targetWildBattle, iconIndex) {
          let targetNode;

          for (let item of targetWildBattle.RPSGuessData) {
            if (item.iconId == iconIndex) {
              targetNode = item.rpsNode;
              break;
            }
          }

          return targetNode;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_RPSItemNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_L_RPSItems", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_R_RPSItems", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_explosion", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_RPS_Motion", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3fc6afe8681323da897ef6dbf7cf38228028499c.js.map