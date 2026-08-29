System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, UITransform, ParticleSystem, tween, Graphics, color, Layers, Tween, isValid, ParticlePool, FindComponent, AniSysTools, GameGlobalKeys, AsyncScope, GlobalAccessReader, SoundList, AudioSourceList, AudioManager, SOUND_TYPE, _dec, _class, _crd, ANI_STATE_NAME, ccclass, property, SIGNAL_KEY, CountTimesFXController;

  function _reportPossibleCrUseOfParticlePool(extras) {
    _reporterNs.report("ParticlePool", "./ParticlePool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../../MyUtils/AnimationSystemV2/Components/AnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "../../MyUtils/AnimationSystemV2/Definitions/IAnimationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../MyUtils/FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniSysTools(extras) {
    _reporterNs.report("AniSysTools", "../../MyUtils/AnimationSystemV2/AniTools/AniSysTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalKeys(extras) {
    _reporterNs.report("GameGlobalKeys", "../../DefinitionGameData1016/GameGlobalData1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncScope(extras) {
    _reporterNs.report("AsyncScope", "../../MyUtils/AsyncScope/AsyncScope", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalAccessReader(extras) {
    _reporterNs.report("GlobalAccessReader", "../../DefinitionGameData1016/AccessDefs/GlobalAccess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../../DefinitionGameData1016/SoundList1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../../DefinitionGameData1016/SoundList1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND_TYPE(extras) {
    _reporterNs.report("SOUND_TYPE", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      ParticleSystem = _cc.ParticleSystem;
      tween = _cc.tween;
      Graphics = _cc.Graphics;
      color = _cc.color;
      Layers = _cc.Layers;
      Tween = _cc.Tween;
      isValid = _cc.isValid;
    }, function (_unresolved_2) {
      ParticlePool = _unresolved_2.ParticlePool;
    }, function (_unresolved_3) {
      FindComponent = _unresolved_3.FindComponent;
    }, function (_unresolved_4) {
      AniSysTools = _unresolved_4.AniSysTools;
    }, function (_unresolved_5) {
      GameGlobalKeys = _unresolved_5.GameGlobalKeys;
    }, function (_unresolved_6) {
      AsyncScope = _unresolved_6.AsyncScope;
    }, function (_unresolved_7) {
      GlobalAccessReader = _unresolved_7.GlobalAccessReader;
    }, function (_unresolved_8) {
      SoundList = _unresolved_8.SoundList;
      AudioSourceList = _unresolved_8.AudioSourceList;
    }, function (_unresolved_9) {
      AudioManager = _unresolved_9.AudioManager;
      SOUND_TYPE = _unresolved_9.SOUND_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "704aaWgnopFuYYmpkUTK5XH", "CountTimesFXController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'UITransform', 'ParticleSystem', 'tween', 'Graphics', 'color', 'Layers', 'Enum', 'Tween', 'isValid', 'TweenAction']);

      _export("ANI_STATE_NAME", ANI_STATE_NAME = /*#__PURE__*/function (ANI_STATE_NAME) {
        ANI_STATE_NAME["APPEAR"] = "Appear";
        ANI_STATE_NAME["END"] = "End";
        return ANI_STATE_NAME;
      }({}));

      ({
        ccclass,
        property
      } = _decorator);
      SIGNAL_KEY = 'PARTICLE_FX_CTRL_SIGNAL';

      _export("CountTimesFXController", CountTimesFXController = (_dec = ccclass('CountTimesFXController'), _dec(_class = class CountTimesFXController extends Component {
        constructor(...args) {
          super(...args);
          this._particlePool = void 0;
          this._async = void 0;

          this.cancelAll = () => {
            Tween.stopAllByTag(1);

            while (this.node.children.length > 0) {
              const child = this.node.children[0];
              child.removeFromParent();
              const testComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(child);

              if (testComponent) {
                const ani = testComponent.ani;

                if (!ani) {//console.log();
                }
              }

              if (child && isValid(child, true)) {
                child.destroy();
              }
            }
          };
        }

        onLoad() {}

        init() {
          this._particlePool = new (_crd && ParticlePool === void 0 ? (_reportPossibleCrUseOfParticlePool({
            error: Error()
          }), ParticlePool) : ParticlePool)();
          this._async = (_crd && AsyncScope === void 0 ? (_reportPossibleCrUseOfAsyncScope({
            error: Error()
          }), AsyncScope) : AsyncScope).getInstance();
        }

        reset() {}

        close() {}

        testPos(startPos, endPos) {
          let pos = [startPos, endPos];

          for (let i = 0; i < pos.length; i++) {
            let testNode = new Node();
            let graphic = testNode.addComponent(Graphics); //-graphic 不受到UIOpacity組件影響~有夠78(color 0-255)
            //graphic.fillColor = color(255, 255, 255, 255);

            graphic.fillColor = color(255, 0, 0, 255);
            graphic.rect(-10, -10, 20, 20);
            graphic.fill();
            testNode.layer = Layers.Enum.UI_2D;
            this.node.addChild(testNode);
            testNode.setPosition(pos[i]);
          }
        }

        async playCountTimesFX(info, totalDuration = 1.0) {
          const uiTransform = this.node.getComponent(UITransform);
          const count = info.length;
          if (count === 0) return; //---全部同時開始，但每顆飛行時間依照數量壓縮

          const baseFlyTime = 0.3; // 原本每顆粒子基準飛行時間

          const minFlyTime = 0.1; // 不要低於這個值，避免太快不明顯

          const flyTime = Math.max(minFlyTime, totalDuration / count);
          const taskList = [];

          for (let i = 0; i < count; i++) {
            const {
              startPos,
              endPos
            } = info[i];
            const localStart = uiTransform.convertToNodeSpaceAR(startPos);
            const localEnd = uiTransform.convertToNodeSpaceAR(endPos);
            const particleNode = await this._particlePool.getParticleNode();
            particleNode.active = true;
            this.node.addChild(particleNode);
            const ani = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(particleNode);
            ani.init();
            const p = this.shootParticle(particleNode, localStart, localEnd, {
              duration: flyTime
            });

            const cancel = value => {
              p.t.stop(); //this.node.removeChild(particleNode);
              //particleNode.destroy();

              this.cancelAll();
              p.cancel(); //console.log();
            };

            const task = (async () => {
              const particleEmitter = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                error: Error()
              }), FindComponent) : FindComponent).findComponentInChildren(particleNode, ParticleSystem);
              particleEmitter.clear();
              particleEmitter.play();
              await p.promise;
            })();

            const single = this._async.createAbortScope(SIGNAL_KEY);

            this._async.registerCancelablePromise(SIGNAL_KEY + `_${i}`, task, cancel, single, SIGNAL_KEY);

            taskList.push(task);
            const flag = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
              error: Error()
            }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
              error: Error()
            }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess);

            if (flag) {
              this._async.abortAll(SIGNAL_KEY);
            }
          }
          /*
          for (let i: number = 0; i < info.length; i++) {
              let particleNode = await this._particlePool.getParticleNode();
              particleNode.active = true;
              this.node.addChild(particleNode);
              let ani = AniSysTools.findAndGetIAniComponent(particleNode) as IAnimationControl;
              ani.init();
              let startPos = uiTransform.convertToNodeSpaceAR(info[i].startPos);
              let endPos = uiTransform.convertToNodeSpaceAR(info[i].endPos);
              //this.testPos(startPos, endPos);
              particleNode.setPosition(startPos);
              let particleEmitter = FindComponent.findComponentInChildren(particleNode, ParticleSystem);
              particleEmitter.clear();
              particleEmitter.play();
              taskList.push(this.shootParticle(particleNode, startPos, endPos));
              
          }*/


          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).light_move, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
            error: Error()
          }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
            error: Error()
          }), AudioSourceList) : AudioSourceList).BasicAS);
          await Promise.all(taskList);
        }

        shootParticle(particleNode, startPos, endPos, opt) {
          var _opt$duration, _opt$amplitude, _opt$frequency;

          const duration = (_opt$duration = opt == null ? void 0 : opt.duration) != null ? _opt$duration : 0.3; // ← 外部 now 決定長度

          const amplitude = (_opt$amplitude = opt == null ? void 0 : opt.amplitude) != null ? _opt$amplitude : 50;
          const frequency = (_opt$frequency = opt == null ? void 0 : opt.frequency) != null ? _opt$frequency : 0.5;
          const uiTransform = this.node.getComponent(UITransform);
          const tempVec3 = new Vec3();
          const ani = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
            error: Error()
          }), AniSysTools) : AniSysTools).findAndGetIAniComponent(particleNode);
          ani.playAni({
            aniState: ANI_STATE_NAME.APPEAR
          });
          let resolveFunc = null;
          let tw;
          const p = new Promise(async (resolve, reject) => {
            resolveFunc = resolve;
            tw = tween(particleNode).to(duration, {}, {
              onUpdate: (target, ratio) => {
                tempVec3.x = startPos.x + (endPos.x - startPos.x) * ratio; // 水平移動到終點

                tempVec3.y = startPos.y + (endPos.y - startPos.y) * ratio + Math.sin(ratio * frequency * Math.PI * 2) * amplitude; // 垂直正弦波移動

                particleNode.setPosition(tempVec3);
              }
            }).call(async () => {
              resolveFunc == null || resolveFunc();

              try {
                await ani.playAniInPromise({
                  aniState: ANI_STATE_NAME.END
                });
              } finally {
                this.node.removeChild(particleNode);
                particleNode.destroy(); //resolveFunc();

                /*
                ani.playAniWithCallBack(() => {
                    this.node.removeChild(particleNode);
                    particleNode.destroy();
                    //this._particlePool.recycleParticleNode(particleNode);
                    resolve();
                },false,{aniState:ANI_STATE_NAME});*/
              }
            }).tag(1).start();
          });
          return {
            promise: p,
            cancel: resolveFunc,
            t: tw
          };
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cdf34fc5e1ee12f2ad70f5c8bc1424d576eab74d.js.map