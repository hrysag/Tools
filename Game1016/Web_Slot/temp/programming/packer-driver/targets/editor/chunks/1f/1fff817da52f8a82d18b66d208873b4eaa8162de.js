System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Input, input, KeyCode, ActionEventPlayer, ActionEvent, ActionEventType, AnimPlayParams, _dec, _class, _crd, ccclass, property, Test;

  function _reportPossibleCrUseOfActionEventPlayer(extras) {
    _reporterNs.report("ActionEventPlayer", "../../Arts/Tools/FXControl/Script/Event/ActionEventPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionEvent(extras) {
    _reporterNs.report("ActionEvent", "../../Arts/Tools/FXControl/Script/Event/ActionEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionEventType(extras) {
    _reporterNs.report("ActionEventType", "../../Arts/Tools/FXControl/Script/Event/ActionEventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimPlayParams(extras) {
    _reporterNs.report("AnimPlayParams", "../../Arts/Tools/FXControl/Script/Event/ActionEventType", _context.meta, extras);
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
      Input = _cc.Input;
      input = _cc.input;
      KeyCode = _cc.KeyCode;
    }, function (_unresolved_2) {
      ActionEventPlayer = _unresolved_2.ActionEventPlayer;
    }, function (_unresolved_3) {
      ActionEvent = _unresolved_3.ActionEvent;
    }, function (_unresolved_4) {
      ActionEventType = _unresolved_4.ActionEventType;
      AnimPlayParams = _unresolved_4.AnimPlayParams;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "235e2a3y9dF4akoMD/mWPcX", "Test", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Input', 'input', 'KeyCode', 'Node', 'Animation', 'AnimationState']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Test", Test = (_dec = ccclass('Test'), _dec(_class = class Test extends Component {
        constructor(...args) {
          super(...args);
          this.aep = void 0;
        }

        start() {
          this.aep = this.getComponent(_crd && ActionEventPlayer === void 0 ? (_reportPossibleCrUseOfActionEventPlayer({
            error: Error()
          }), ActionEventPlayer) : ActionEventPlayer);
          let winEvent = new (_crd && ActionEvent === void 0 ? (_reportPossibleCrUseOfActionEvent({
            error: Error()
          }), ActionEvent) : ActionEvent)();
          winEvent.frame = 0;
          winEvent.eventType = (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
            error: Error()
          }), ActionEventType) : ActionEventType).ANIM_PLAY;
          winEvent.animPlayParams = new (_crd && AnimPlayParams === void 0 ? (_reportPossibleCrUseOfAnimPlayParams({
            error: Error()
          }), AnimPlayParams) : AnimPlayParams)(["Root", "Connect", "false"]);
          this.aep.EventList.push(winEvent);
          input.on(Input.EventType.KEY_DOWN, event => {
            if (event.keyCode === KeyCode.KEY_A) {
              this.aep.updateClip();
              this.aep.play();
            }

            if (event.keyCode === KeyCode.KEY_B) {
              let appearEvent = this.aep.EventList[0];
              appearEvent.frame = 2;
              appearEvent.eventType = (_crd && ActionEventType === void 0 ? (_reportPossibleCrUseOfActionEventType({
                error: Error()
              }), ActionEventType) : ActionEventType).ANIM_PLAY;
              appearEvent.animPlayParams = new (_crd && AnimPlayParams === void 0 ? (_reportPossibleCrUseOfAnimPlayParams({
                error: Error()
              }), AnimPlayParams) : AnimPlayParams)(["Root", "Appear", "false"]); // this.aep.EventList.push(appearEvent);
            }
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1fff817da52f8a82d18b66d208873b4eaa8162de.js.map