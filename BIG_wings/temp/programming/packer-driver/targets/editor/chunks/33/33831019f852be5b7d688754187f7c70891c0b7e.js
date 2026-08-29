System.register(["__unresolved_0", "cc", "strict-event-emitter"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Emitter, LifecycleImpl, _crd, ACTIVE, PASSIVE, HIDDEN, FROZEN, TERMINATED, STATES, IS_SAFARI, SUPPORTS_PAGE_TRANSITION_EVENTS, EVENTS, toIndexedObject, LEGAL_STATE_TRANSITIONS, PageLifecycle;

  function getLegalStateTransitionPath(oldState, newState) {
    // We're intentionally not using for...of here so when we transpile to ES5
    // we don't need to include the Symbol polyfills.
    for (let order, i = 0; order = LEGAL_STATE_TRANSITIONS[i]; ++i) {
      const oldIndex = order[oldState];
      const newIndex = order[newState];

      if (oldIndex >= 0 && newIndex >= 0 && newIndex > oldIndex) {
        // Differences greater than one should be reported
        // because it means aorder state was skipped.
        return Object.keys(order).slice(oldIndex, newIndex + 1);
      }
    }

    return []; // TODO(philipwalton): it shouldn't be possible to get here, but
    // consider some kind of warning or call to action if it happens.
    // console.warn(`Invalid state change detected: ${oldState} > ${newState}`);
  }

  function getCurrentState() {
    if (document.visibilityState === HIDDEN) {
      return HIDDEN;
    }

    if (document.hasFocus()) {
      return ACTIVE;
    }

    return PASSIVE;
  }

  function _reportPossibleCrUseOfEmitter(extras) {
    _reporterNs.report("Emitter", "strict-event-emitter", _context.meta, extras);
  }

  _export("LifecycleImpl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_strictEventEmitter) {
      Emitter = _strictEventEmitter.Emitter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6f333707dFP7b3t+DT/FRsf", "PageLifecycle", undefined);

      //https://wd.imgix.net/image/eqprBhZUGfb8WYnumQ9ljAxRrA72/wgyY9jyBaPTlVZIrJfoD.svg
      //https://developer.chrome.com/articles/page-lifecycle-api/#developer-recommendations-for-each-state
      //https://github.com/GoogleChromeLabs/page-lifecycle#readme
      ACTIVE = 'active'; //A page is in the active state if it is visible and has input focus.
      //Possible previous states: passive, frozen
      //Possible next states: passive

      PASSIVE = 'passive'; //A page is in the passive state if it is visible and does not have input focus.
      //Possible previous states: active, hidden , frozen
      //Possible next states: active, hidden

      HIDDEN = 'hidden'; //A page is in the hidden state if it is not visible (and has not been frozen, discarded, or terminated).
      //Possible previous states:  passive, frozen
      //Possible next states:passive , frozen , terminated

      FROZEN = 'frozen'; // In the frozen state the browser suspends execution of freezable tasks in the page's task queues until the page is unfrozen.
      // This means things like JavaScript timers and fetch callbacks do not run. Already-running tasks can finish (most importantly the freeze callback), but they may be limited in what they can do and how long they can run.
      // 
      // Browsers freeze pages as a way to preserve CPU/battery/data usage; 
      // they also do it as a way to enable faster back/forward navigations — avoiding the need for a full page reload.
      // Possible previous states:  hidden
      // Possible next states: active, passive, hidden

      TERMINATED = 'terminated'; //A page is in the terminated state once it has started being unloaded and cleared from memory by the browser.
      //  No new tasks can start in this state, and in-progress tasks may be killed if they run too long.
      //Possible previous states: hidden
      //Possible next states: NONE

      STATES = [ACTIVE, PASSIVE, HIDDEN, FROZEN, TERMINATED]; //@ts-ignore

      IS_SAFARI = typeof safari === 'object' && safari.pushNotification;
      SUPPORTS_PAGE_TRANSITION_EVENTS = 'onpageshow' in self;
      EVENTS = ['focus', 'blur', 'visibilitychange', 'freeze', 'resume', 'pageshow', // IE9-10 do not support the pagehide event, so we fall back to unload
      // Note: unload *MUST ONLY* be added conditionally, otherwise it will
      // prevent page navigation caching (a.k.a bfcache).
      SUPPORTS_PAGE_TRANSITION_EVENTS ? 'pagehide' : 'unload'];
      /**
       * Converts an array of states into an object where the state is the key
       * and the value is the index.
       * @param {!Array<string>} arr
       * @return {!Object}
       */

      toIndexedObject = arr => arr.reduce((acc, val, idx) => {
        acc[val] = idx;
        return acc;
      }, {});

      LEGAL_STATE_TRANSITIONS = [// The normal unload process (bfcache process is addressed above).
      [ACTIVE, PASSIVE, HIDDEN, TERMINATED], // An active page transitioning to frozen,
      // or an unloading page going into the bfcache.
      [ACTIVE, PASSIVE, HIDDEN, FROZEN], // A hidden page transitioning back to active.
      [HIDDEN, PASSIVE, ACTIVE], // A frozen page being resumed
      [FROZEN, HIDDEN], // A frozen (bfcached) page navigated back to
      // Note: [FROZEN, HIDDEN] can happen here, but it's already covered above.
      [FROZEN, ACTIVE], [FROZEN, PASSIVE]].map(toIndexedObject);
      ;
      ;

      _export("LifecycleImpl", LifecycleImpl = class LifecycleImpl extends (_crd && Emitter === void 0 ? (_reportPossibleCrUseOfEmitter({
        error: Error()
      }), Emitter) : Emitter) {
        get state() {
          return this._state;
        }

        constructor() {
          super();
          this._state = getCurrentState();
          this._safariBeforeUnloadTimeout = null;
          EVENTS.forEach(eventName => {
            window.addEventListener(eventName, this.handleEvents.bind(this));
          }); // Safari does not reliably fire the `pagehide` or `visibilitychange`
          // events when closing a tab, so we have to use `beforeunload` with a
          // timeout to check whether the default action was prevented.
          // - https://bugs.webkit.org/show_bug.cgi?id=151610
          // - https://bugs.webkit.org/show_bug.cgi?id=151234
          // NOTE: we only add this to Safari because adding it to Firefox would
          // prevent the page from being eligible for bfcache.

          if (IS_SAFARI) {
            window.addEventListener('beforeunload', evt => {
              this._safariBeforeUnloadTimeout = setTimeout(() => {
                if (!(evt.defaultPrevented || evt.returnValue.length > 0)) {
                  this._dispatchChangesIfNeeded(evt, HIDDEN);
                }
              }, 0);
            });
          }
        }

        handleEvents(evt) {
          window.addEventListener('pagehide', evt => {});

          if (IS_SAFARI) {
            clearTimeout(this._safariBeforeUnloadTimeout);
          }

          switch (evt.type) {
            case 'pageshow':
            case 'resume':
              this._dispatchChangesIfNeeded(evt, getCurrentState());

              break;

            case 'focus':
              this._dispatchChangesIfNeeded(evt, ACTIVE);

              break;

            case 'blur':
              // The `blur` event can fire while the page is being unloaded, so we
              // only need to update the state if the current state is "active".
              if (this._state === ACTIVE) {
                this._dispatchChangesIfNeeded(evt, getCurrentState());
              }

              break;

            case 'pagehide':
            case 'unload':
              this._dispatchChangesIfNeeded(evt, evt.persisted ? FROZEN : TERMINATED);

              break;

            case 'visibilitychange':
              // The document's `visibilityState` will change to hidden  as the page
              // is being unloaded, but in such cases the lifecycle state shouldn't
              // change.
              if (this._state !== FROZEN && this._state !== TERMINATED) {
                this._dispatchChangesIfNeeded(evt, getCurrentState());
              }

              break;

            case 'freeze':
              this._dispatchChangesIfNeeded(evt, FROZEN);

              break;
          }
        }

        _dispatchChangesIfNeeded(originalEvent, newState) {
          if (newState !== this._state) {
            const oldState = this._state;
            const path = getLegalStateTransitionPath(oldState, newState);

            for (let i = 0; i < path.length - 1; ++i) {
              const oldState = path[i];
              const newState = path[i + 1];
              this._state = newState;
              this.emit('statechange', {
                oldState,
                newState,
                originalEvent
              });
            }
          }
        }

      });

      _export("PageLifecycle", PageLifecycle = new LifecycleImpl());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=33831019f852be5b7d688754187f7c70891c0b7e.js.map