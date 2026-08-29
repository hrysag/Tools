System.register([], function (_export, _context) {
  "use strict";

  var MemoryLeakError, _Emitter, Emitter;

  return {
    setters: [],
    execute: function () {
      // src/MemoryLeakError.ts
      _export("MemoryLeakError", MemoryLeakError = class extends Error {
        constructor(emitter, type, count) {
          super("Possible EventEmitter memory leak detected. " + count + " " + type.toString() + " listeners added. Use emitter.setMaxListeners() to increase limit");
          this.emitter = emitter;
          this.type = type;
          this.count = count;
          this.name = "MaxListenersExceededWarning";
        }

      }); // src/Emitter.ts


      _Emitter = class {
        static listenerCount(emitter, eventName) {
          return emitter.listenerCount(eventName);
        }

        constructor() {
          this.events = /* @__PURE__ */new Map();
          this.maxListeners = _Emitter.defaultMaxListeners;
          this.hasWarnedAboutPotentialMemoryLeak = false;
        }

        _emitInternalEvent(internalEventName, eventName, listener) {
          this.emit(internalEventName, ...[eventName, listener]);
        }

        _getListeners(eventName) {
          return Array.prototype.concat.apply([], this.events.get(eventName)) || [];
        }

        _removeListener(listeners, listener) {
          var index = listeners.indexOf(listener);

          if (index > -1) {
            listeners.splice(index, 1);
          }

          return [];
        }

        _wrapOnceListener(eventName, listener) {
          var _this = this;

          var onceListener = function onceListener() {
            _this.removeListener(eventName, onceListener);

            for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
              data[_key] = arguments[_key];
            }

            return listener.apply(_this, data);
          };

          Object.defineProperty(onceListener, "name", {
            value: listener.name
          });
          return onceListener;
        }

        setMaxListeners(maxListeners) {
          this.maxListeners = maxListeners;
          return this;
        }
        /**
         * Returns the current max listener value for the `Emitter` which is
         * either set by `emitter.setMaxListeners(n)` or defaults to
         * `Emitter.defaultMaxListeners`.
         */


        getMaxListeners() {
          return this.maxListeners;
        }
        /**
         * Returns an array listing the events for which the emitter has registered listeners.
         * The values in the array will be strings or Symbols.
         */


        eventNames() {
          return Array.from(this.events.keys());
        }
        /**
         * Synchronously calls each of the listeners registered for the event named `eventName`,
         * in the order they were registered, passing the supplied arguments to each.
         * Returns `true` if the event has listeners, `false` otherwise.
         *
         * @example
         * const emitter = new Emitter<{ hello: [string] }>()
         * emitter.emit('hello', 'John')
         */


        emit(eventName) {
          for (var _len2 = arguments.length, data = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            data[_key2 - 1] = arguments[_key2];
          }

          var listeners = this._getListeners(eventName);

          listeners.forEach(listener => {
            listener.apply(this, data);
          });
          return listeners.length > 0;
        }

        addListener(eventName, listener) {
          this._emitInternalEvent("newListener", eventName, listener);

          var nextListeners = this._getListeners(eventName).concat(listener);

          this.events.set(eventName, nextListeners);

          if (this.maxListeners > 0 && this.listenerCount(eventName) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
            this.hasWarnedAboutPotentialMemoryLeak = true;
            var memoryLeakWarning = new MemoryLeakError(this, eventName, this.listenerCount(eventName));
            console.warn(memoryLeakWarning);
          }

          return this;
        }

        on(eventName, listener) {
          return this.addListener(eventName, listener);
        }

        once(eventName, listener) {
          return this.addListener(eventName, this._wrapOnceListener(eventName, listener));
        }

        prependListener(eventName, listener) {
          var listeners = this._getListeners(eventName);

          if (listeners.length > 0) {
            var nextListeners = [listener].concat(listeners);
            this.events.set(eventName, nextListeners);
          } else {
            this.events.set(eventName, listeners.concat(listener));
          }

          return this;
        }

        prependOnceListener(eventName, listener) {
          return this.prependListener(eventName, this._wrapOnceListener(eventName, listener));
        }

        removeListener(eventName, listener) {
          var listeners = this._getListeners(eventName);

          if (listeners.length > 0) {
            this._removeListener(listeners, listener);

            this.events.set(eventName, listeners);

            this._emitInternalEvent("removeListener", eventName, listener);
          }

          return this;
        }
        /**
         * Alias for `emitter.removeListener()`.
         *
         * @example
         * emitter.off('hello', listener)
         */


        off(eventName, listener) {
          return this.removeListener(eventName, listener);
        }

        removeAllListeners(eventName) {
          if (eventName) {
            this.events.delete(eventName);
          } else {
            this.events.clear();
          }

          return this;
        }
        /**
         * Returns a copy of the array of listeners for the event named `eventName`.
         */


        listeners(eventName) {
          return Array.from(this._getListeners(eventName));
        }
        /**
         * Returns the number of listeners listening to the event named `eventName`.
         */


        listenerCount(eventName) {
          return this._getListeners(eventName).length;
        }

        rawListeners(eventName) {
          return this.listeners(eventName);
        }

      };

      _export("Emitter", Emitter = _Emitter);

      Emitter.defaultMaxListeners = 10;
    }
  };
});
//# sourceMappingURL=3d0b5d35dbc9c3cd60cc5d3b4be6bb8521d55e72.js.map