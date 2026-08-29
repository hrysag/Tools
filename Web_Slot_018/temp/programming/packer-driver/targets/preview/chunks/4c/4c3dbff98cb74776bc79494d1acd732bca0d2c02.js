System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, SpineController, AnimationControllersPoolManager, AudioManager, SOUND_TYPE, SoundList, AudioSourceList, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, LIGHT_PREFAB_NAME, RPSCollection;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../../MyUtils/AnimationSystem/Components/SpineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationControllersPoolManager(extras) {
    _reporterNs.report("AnimationControllersPoolManager", "../../MyUtils/AnimationSystem/AnimationControllersPoolManager", _context.meta, extras);
  }

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
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      SpineController = _unresolved_2.SpineController;
    }, function (_unresolved_3) {
      AnimationControllersPoolManager = _unresolved_3.AnimationControllersPoolManager;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
      SOUND_TYPE = _unresolved_4.SOUND_TYPE;
    }, function (_unresolved_5) {
      SoundList = _unresolved_5.SoundList;
      AudioSourceList = _unresolved_5.AudioSourceList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a6bc9aH/udCWKzef1OWjcm4", "RPSCollection", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'Node', 'Prefab', 'instantiate', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      LIGHT_PREFAB_NAME = 'NG_CollectLight';

      _export("RPSCollection", RPSCollection = (_dec = ccclass('RPSCollection'), _dec2 = property({
        type: [Vec3],
        visible: true,
        displayName: 'light position',
        tooltip: '燈號的位置'
      }), _dec3 = property({
        type: Node,
        visible: true,
        displayName: 'light BG',
        tooltip: '燈號的BG'
      }), _dec4 = property({
        type: Node,
        visible: true,
        displayName: 'light container',
        tooltip: '放所有燈號的容器'
      }), _dec5 = property({
        type: Node,
        visible: true,
        displayName: 'door Light Effect',
        tooltip: '門框的特效'
      }), _dec(_class = (_class2 = class RPSCollection extends Component {
        constructor() {
          super(...arguments);

          //@property({ type: Prefab, visible: true, displayName: 'light Prefab', tooltip: '顯示蒐集燈號的Prefab' })
          //private _lightPrefab: Prefab = null;
          _initializerDefineProperty(this, "_lightPos", _descriptor, this);

          _initializerDefineProperty(this, "_lightBG", _descriptor2, this);

          _initializerDefineProperty(this, "_lightContainer", _descriptor3, this);

          _initializerDefineProperty(this, "_doorLightEffectNode", _descriptor4, this);

          this._mapRunningLight = void 0;
          this._spineDoorLightEffect = null;
          this._startCamp = void 0;
          //--開啟燈號系統的陣營(由第一把的贏方開啟)
          this._level = void 0;
        }

        init() {
          this._startCamp = -1;
          this._level = 0;
          this._spineDoorLightEffect = this._doorLightEffectNode.getComponent(_crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
            error: Error()
          }), SpineController) : SpineController);

          this._spineDoorLightEffect.init();

          this._doorLightEffectNode.active = false;
          this._mapRunningLight = new Map([[1, null], [2, null], [3, null]]);
        }

        reset() {
          this._startCamp = -1;
          this._level = 0;
        }

        openCollectionLightSystem(camp) {
          if (this._startCamp == -1) {
            this._startCamp = camp;
          }
        } //--20250731 新增


        appearCollectionLights() {
          for (var [key, value] of this._mapRunningLight) {
            if (value) {
              var light = value.node;
              light.active = true;
            }
          }

          this._doorLightEffectNode.active = true;
        } //--20250731 新增


        hideCollectionLights() {
          for (var [key, value] of this._mapRunningLight) {
            if (value) {
              var light = value.node;
              light.active = false;
            }
          }

          this._doorLightEffectNode.active = false;
        }

        closeCollectionLightSystem() {
          for (var [key, value] of this._mapRunningLight) {
            if (value) {
              value.resetData();
              var light = value.node;

              this._lightContainer.removeChild(light); //this.recycleLightNode(light);  


              (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
                error: Error()
              }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstancePrefabNodeToPool(LIGHT_PREFAB_NAME, light);

              this._mapRunningLight.set(key, null);
            }
          }

          this._spineDoorLightEffect.forceToStopAni(); //-沒有勾選afterPlayDoStop選項stopAni不會執行


          this._doorLightEffectNode.active = false;
          this.reset();
        }

        setLevel(level) {
          var _this = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
              if (level == 0) resolve(); //--平手不處理

              var lightComponent = null;
              var lightComponent_1 = null;
              var lightComponent_2 = null;
              var previousLevel = _this._level;
              _this._level += level;

              if (_this._level < 1) {
                _this._level = 0; //--這種情況..有點不太可能會發生
              } //--level正數表示升級,負數表示降級(不處理平手狀態)


              if (previousLevel < _this._level) {
                if (_this._level == 1) {
                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                    error: Error()
                  }), SoundList) : SoundList).GemCollect, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                    error: Error()
                  }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                    error: Error()
                  }), AudioSourceList) : AudioSourceList).BasicAS); //---default to 1 

                  lightComponent = _this.getLightNodeComponent(_this._level);
                  lightComponent.node.active = true; //await lightComponent.playAniInPromise('default_to_01');

                  yield lightComponent.playAniInPromise('default_to_01');
                  lightComponent.playAni('01_loop'); //--01_loop-->這個不會發光

                  resolve();
                } else if (_this._level == 2) {
                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                    error: Error()
                  }), SoundList) : SoundList).GemCollect, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                    error: Error()
                  }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                    error: Error()
                  }), AudioSourceList) : AudioSourceList).BasicAS); //--1 to 2

                  lightComponent = _this.getLightNodeComponent(_this._level);
                  lightComponent.node.active = true; //await lightComponent.playAniInPromise('01_to_02');//--一開始出現都要用default_to_01

                  yield lightComponent.playAniInPromise('default_to_01'); //--一開始出現都要用default_to_01

                  lightComponent.playAni('02_loop');
                  lightComponent_1 = _this.getLightNodeComponent(1);
                  yield lightComponent_1.playAni('01_to_02');
                  lightComponent_1.playAni('02_loop');
                  resolve(); //--2勝之後..兩顆都要loop-->02_loop
                } else if (_this._level == 3) {
                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                    error: Error()
                  }), SoundList) : SoundList).GemLight, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                    error: Error()
                  }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                    error: Error()
                  }), AudioSourceList) : AudioSourceList).BasicAS); //--2 to 3 

                  lightComponent = _this.getLightNodeComponent(_this._level);
                  lightComponent.node.active = true; //await lightComponent.playAniInPromise('02_to_03');

                  lightComponent.playAniInPromise('02_to_03');
                  lightComponent.playAni('03_loop');
                  lightComponent_1 = _this.getLightNodeComponent(1);
                  lightComponent_1.node.active = true;
                  lightComponent_1.playAni('03_loop');
                  lightComponent_2 = _this.getLightNodeComponent(2);
                  lightComponent_2.node.active = true;
                  lightComponent_2.playAni('03_loop'); //--show door light effect

                  _this._doorLightEffectNode.active = true;
                  yield _this._spineDoorLightEffect.playAniInPromise('02_to_03');

                  _this._spineDoorLightEffect.playAni('03_loop');

                  resolve();
                }
              } else {
                //--20250527--平手或是輸了不處理
                resolve(); //--降級(3就結束啦,所以也不會有3to2,只會有2to1,1to0就直接結束了)
                //--3就結束啦(3勝結束)不會有3to2(即level=2)
                //--1to0就直接結束了(1勝一敗隨即結束)(即level=0)
                //--2to1在兩勝後,規則沒有說到2勝1敗結束,只有提到3勝結束(即level=1)

                /*
                if (this._level == 1) {
                    //--2toDefault(閃一下)+default(消失)
                    lightComponent = this.getLightNodeComponent(2);
                    lightComponent.node.active = true;
                    await lightComponent.playAniInPromise('02_to_default');
                    lightComponent.node.active = false;
                    resolve();
                } else if (this._level == 0) {
                    //--1toDefault(閃一下)+default(消失)
                    lightComponent = this.getLightNodeComponent(1);
                    lightComponent.node.active = true;
                    await lightComponent.playAniInPromise('01_to_default');
                    lightComponent.node.active = false;
                    resolve();
                } else {
                    resolve();
                }*/
              }
            }));
          })();
        }

        getLightNodeComponent(lv) {
          var lightEffectComponent = this._mapRunningLight.get(lv);

          if (lightEffectComponent === null) {
            lightEffectComponent = this.createLightNode(lv);

            this._mapRunningLight.set(lv, lightEffectComponent);
          }

          return lightEffectComponent;
        }
        /**
         * 
         * @param lv 1-3
         */


        createLightNode(lv) {
          var light = (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
            error: Error()
          }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().getPrefabNode(LIGHT_PREFAB_NAME);

          this._lightContainer.addChild(light);

          var spineAniComponent = light.getComponent(_crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
            error: Error()
          }), SpineController) : SpineController);
          spineAniComponent.init();
          this.changeSkin(spineAniComponent);
          light.setPosition(this._lightPos[lv - 1]);
          light.active = false;
          return spineAniComponent;
        }

        changeSkin(spineAniComponent) {
          var skinName = 'FG_0' + this._startCamp; //console.log('changetSkin_wild', skinName);

          spineAniComponent.changeSkin(skinName);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_lightPos", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_lightBG", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_lightContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_doorLightEffectNode", [_dec5], {
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
//# sourceMappingURL=4c3dbff98cb74776bc79494d1acd732bca0d2c02.js.map