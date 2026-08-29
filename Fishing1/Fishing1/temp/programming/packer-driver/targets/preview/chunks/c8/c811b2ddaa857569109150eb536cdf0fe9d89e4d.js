System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectCommandFactory, AniEffectInstanceSingleton, AnimationEffectEvent, EventTarget, log, AniEffectInvorker, _crd;

  function _reportPossibleCrUseOfIfAniEffectCommand(extras) {
    _reporterNs.report("IfAniEffectCommand", "./AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitAniEffect(extras) {
    _reporterNs.report("InitAniEffect", "./AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "./AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "./AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniEffectCommandFactory(extras) {
    _reporterNs.report("AniEffectCommandFactory", "./AniEffectCommandFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniEffectInstanceSingleton(extras) {
    _reporterNs.report("AniEffectInstanceSingleton", "./AniEffectInstanceSingleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationEffectEvent(extras) {
    _reporterNs.report("AnimationEffectEvent", "../events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventSendObject(extras) {
    _reporterNs.report("EventSendObject", "../events/eventBase", _context.meta, extras);
  }

  _export("AniEffectInvorker", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventTarget = _cc.EventTarget;
      log = _cc.log;
    }, function (_unresolved_2) {
      AniEffectCommandFactory = _unresolved_2.AniEffectCommandFactory;
    }, function (_unresolved_3) {
      AniEffectInstanceSingleton = _unresolved_3.AniEffectInstanceSingleton;
    }, function (_unresolved_4) {
      AnimationEffectEvent = _unresolved_4.AnimationEffectEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9202fpKrbhEsJWm0r7Y7yjd", "AniEffectInvorker", undefined);
      /**
       * Created by EricHuang on 2023/10/05.
       */


      __checkObsolete__(['EventTarget']);

      __checkObsolete__(['log']);

      _export("AniEffectInvorker", AniEffectInvorker = class AniEffectInvorker extends EventTarget {
        constructor() {
          super();
          this._commands = void 0;
          this._instances = void 0;

          this.listenHandler = e => {
            if (e.type == (_crd && AnimationEffectEvent === void 0 ? (_reportPossibleCrUseOfAnimationEffectEvent({
              error: Error()
            }), AnimationEffectEvent) : AnimationEffectEvent).COMPLETE) {
              this.aniEffectCompleteHandler(e);
            } else {
              this.aniEffectEventHandler(e);
            }
          };

          this._commands = {};
          this._instances = {};
        }

        addCommand(commandDefinition) {
          var {
            id,
            commandConstructor,
            classConstructor,
            classConstructorId,
            listenerStr,
            classArgs
          } = commandDefinition;

          if (!this._commands[id]) {
            /**
            * 20240328-在cocos creator發布選項中,如果將<調試模式>打開,
            * 在build-config-for-cicd.json裡面的debug屬性=true
            * uglifyjs將不會介入作混淆縮排的動作.此時的js輸出會是保留function name的型態
            * 但是正式發布時debug的屬性=false時,uglifyjs將介入作混淆縮排的動作,
            * function name將會被拿掉(外層是用一個object包覆住).
            * 所以取constructor.name會出現你意想不到的名稱
            */
            //const classKey = classConstructor.name;
            var classKey = classConstructorId;

            if (!this._instances[classKey]) {
              this._instances[classKey] = (_crd && AniEffectInstanceSingleton === void 0 ? (_reportPossibleCrUseOfAniEffectInstanceSingleton({
                error: Error()
              }), AniEffectInstanceSingleton) : AniEffectInstanceSingleton).getInstance(classKey, () => new classConstructor(...classArgs));
            }

            this._commands[id] = (_crd && AniEffectCommandFactory === void 0 ? (_reportPossibleCrUseOfAniEffectCommandFactory({
              error: Error()
            }), AniEffectCommandFactory) : AniEffectCommandFactory).createCommand(commandConstructor, this._instances[classKey]);

            if (listenerStr) {
              if (listenerStr != '') {
                this._commands[id].on(listenerStr, this.listenHandler);
              }
            }

            this._commands[id].on((_crd && AnimationEffectEvent === void 0 ? (_reportPossibleCrUseOfAnimationEffectEvent({
              error: Error()
            }), AnimationEffectEvent) : AnimationEffectEvent).COMPLETE, this.listenHandler);
          } else {
            log("Command with ID " + id + " already exists and cannot be overwritten.");
          } //log('Invoker_aniEffect',this._commands,this._instances);

        }

        executeAnimation(executeOption) {
          var r = null;
          var command = this._commands[executeOption.command];
          log('check_effectData', command, executeOption);

          if (command) {
            r = command.execute(executeOption);
          }

          return r;
        }

        getCommand(command) {
          return this._commands[command];
        }

        getInstances(instancesKey) {
          return this._instances[instancesKey];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c811b2ddaa857569109150eb536cdf0fe9d89e4d.js.map