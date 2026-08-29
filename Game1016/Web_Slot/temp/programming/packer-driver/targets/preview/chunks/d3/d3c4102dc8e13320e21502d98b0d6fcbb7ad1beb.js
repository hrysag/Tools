System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, sp, CCBoolean, ActionEventPlayer, ActionEventType, NodeExt, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, SymbolControllerExample;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfActionEventPlayer(extras) {
    _reporterNs.report("ActionEventPlayer", "../../Arts/Tools/FXControl/Script/Event/ActionEventPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionEventType(extras) {
    _reporterNs.report("ActionEventType", "../../Arts/Tools/FXControl/Script/Event/ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeExt(extras) {
    _reporterNs.report("NodeExt", "../../Scripts/ModuleEntry", _context.meta, extras);
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
      Animation = _cc.Animation;
      sp = _cc.sp;
      CCBoolean = _cc.CCBoolean;
    }, function (_unresolved_2) {
      ActionEventPlayer = _unresolved_2.ActionEventPlayer;
    }, function (_unresolved_3) {
      ActionEventType = _unresolved_3.ActionEventType;
    }, function (_unresolved_4) {
      NodeExt = _unresolved_4.NodeExt;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35245+c/c5ItJO7E49vGSKc", "SymbolControllerExample", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation', 'sp', 'CCBoolean']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SymbolControllerExample", SymbolControllerExample = (_dec = ccclass('SymbolControllerExample'), _dec2 = property(_crd && ActionEventPlayer === void 0 ? (_reportPossibleCrUseOfActionEventPlayer({
        error: Error()
      }), ActionEventPlayer) : ActionEventPlayer), _dec3 = property(CCBoolean), _dec(_class = (_class2 = class SymbolControllerExample extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "aep", _descriptor, this);

          _initializerDefineProperty(this, "isSprite", _descriptor2, this);
        }

        init(defaultAnim) {
          this.aep = this.getComponent(_crd && ActionEventPlayer === void 0 ? (_reportPossibleCrUseOfActionEventPlayer({
            error: Error()
          }), ActionEventPlayer) : ActionEventPlayer);

          if (!this.aep) {
            this.isSprite = true;
          } else {
            this.aep.Init(); //要先初始化才能播放default動畫

            if (defaultAnim !== '') {
              this.playAnim(defaultAnim);
            }
          }
        }

        playAnim(animName) {
          if (this.isSprite) {
            return;
          }

          var eventList = this.aep.EventList;

          for (var index = 0; index < eventList.length; index++) {
            var event = eventList[index];
            var eventType = event.eventType;
            var params = void 0;

            if (eventType === (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
              error: Error()
            }), ActionEventType) : ActionEventType).ANIM_PLAY) {
              params = event.animPlayParams;
              params.clipName = animName;
              event.animPlayParams = params;
            } else if (eventType === (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
              error: Error()
            }), ActionEventType) : ActionEventType).SPINE_PLAY) {
              params = event.spinePlayParams;
              params.clipName = animName;
              event.spinePlayParams = params;
            }
          }

          this.aep.updateClip();
          this.aep.play();
        }

        stopAnim(defaultAnim) {
          if (defaultAnim === void 0) {
            defaultAnim = null;
          }

          if (this.isSprite) {
            return;
          }

          for (var index = 0; index < this.aep.EventList.length; index++) {
            var event = this.aep.EventList[index];

            if (event.eventType === (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
              error: Error()
            }), ActionEventType) : ActionEventType).ANIM_PLAY) {
              var nodeName = event.animPlayParams.nodeName;
              var names = nodeName.replace(/\s/g, "").split(',');

              for (var _index = 0; _index < names.length; _index++) {
                var _nodeName = names[_index];
                var animList = (_crd && NodeExt === void 0 ? (_reportPossibleCrUseOfNodeExt({
                  error: Error()
                }), NodeExt) : NodeExt).findNodes(this.node, _nodeName);

                if (animList.length > 0) {
                  var anim = animList[0].getComponent(Animation);

                  if (anim) {
                    anim.stop();

                    if (defaultAnim !== null) {
                      anim.play(defaultAnim);
                    }
                  }
                }
              }
            } else if (event.eventType === (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
              error: Error()
            }), ActionEventType) : ActionEventType).SPINE_PLAY) {
              var _nodeName2 = event.spinePlayParams.nodeName;

              var _names = _nodeName2.replace(/\s/g, "").split(',');

              for (var _index2 = 0; _index2 < _names.length; _index2++) {
                var _nodeName3 = _names[_index2];
                var spineList = (_crd && NodeExt === void 0 ? (_reportPossibleCrUseOfNodeExt({
                  error: Error()
                }), NodeExt) : NodeExt).findNodes(this.node, _nodeName3);

                if (spineList.length > 0) {
                  var spineComp = spineList[0].getComponent(sp.Skeleton);

                  if (spineComp) {
                    spineComp.setToSetupPose();
                  }
                }
              }
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "aep", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d3c4102dc8e13320e21502d98b0d6fcbb7ad1beb.js.map