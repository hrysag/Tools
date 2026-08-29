System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, sp, AudioManager, SOUND_TYPE, SoundList, AudioSourceList, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, RPSResultTitle;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND_TYPE(extras) {
    _reporterNs.report("SOUND_TYPE", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../../DefinitionGameData/SoundList", _context.meta, extras);
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
      AudioManager = _unresolved_2.AudioManager;
      SOUND_TYPE = _unresolved_2.SOUND_TYPE;
    }, function (_unresolved_3) {
      SoundList = _unresolved_3.SoundList;
      AudioSourceList = _unresolved_3.AudioSourceList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e1e42zWhOtGK749pXuNOwz5", "RPSResultTitle", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RPSResultTitle", RPSResultTitle = (_dec = ccclass('RPSResultTitle'), _dec2 = property({
        type: Node,
        visible: true,
        displayName: 'ResultTitle spine node',
        tooltip: '猜拳結果標題(spine node)'
      }), _dec(_class = (_class2 = class RPSResultTitle extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_resultTitle", _descriptor, this);

          this._spResultTitle = void 0;
          this._mapResultTitle = void 0;
          this._thisRoundCampForLight = -1;
          //--開啟猜拳陣營 1=左邊 2=右邊 -1=無陣營
          this._firstOpenWinner = false;
        }

        //--第一次開啟猜拳陣營
        set thisRoundCampForLight(value) {
          this._thisRoundCampForLight = value; //console.log('thisRoundCampForLight', this._thisRoundCampForLight);
        }

        init() {
          this._spResultTitle = this._resultTitle.getComponent(sp.Skeleton);
          this._mapResultTitle = new Map([[0, 'draw'], //--平手
          [1, 'icon_08_win'], //--左邊贏
          [2, 'icon_09_win'], //--右邊贏
          [3, 'respin'] //--重新旋轉
          ]);
          this.node.active = false; //console.log('check_rpsResultTitle', this._spResultTitle, this._mapResultTitle);
        }

        showResultTitle(value) {
          return new Promise(resolve => {
            this.node.active = true;

            this._spResultTitle.setCompleteListener(trackEntry => {
              this._spResultTitle.setCompleteListener(null);

              this.node.active = false;
              resolve();
            });

            var targetAniName = this._mapResultTitle.get(value);

            var soundTarget = -1;

            if (value == 1 || value == 2) {
              //--左邊贏或右邊贏
              if (this._thisRoundCampForLight == 1) {
                //--左邊開啟猜拳陣營(以他的輸贏決定播放書或是贏的音效)
                if (value == 1) {
                  soundTarget = (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                    error: Error()
                  }), SoundList) : SoundList).RespinWin;
                }
              } else if (this._thisRoundCampForLight == 2) {
                //--右邊開啟猜拳陣營(以他的輸贏決定播放書或是贏的音效)
                if (value == 2) {
                  soundTarget = (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                    error: Error()
                  }), SoundList) : SoundList).RespinWin;
                }
              }
            } else if (value == 0) {
              soundTarget = (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                error: Error()
              }), SoundList) : SoundList).RespinDraw; //--平手
            } else if (value == 3) {
              soundTarget = (_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                error: Error()
              }), SoundList) : SoundList).Respin; //--重新旋轉
            }

            if (soundTarget != -1) {
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playSound(soundTarget, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                error: Error()
              }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                error: Error()
              }), AudioSourceList) : AudioSourceList).BasicAS);
            }

            this._spResultTitle.setAnimation(0, targetAniName, false);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_resultTitle", [_dec2], {
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
//# sourceMappingURL=992a8432f8ba840b8c62ae1a3484ef20d5c72362.js.map