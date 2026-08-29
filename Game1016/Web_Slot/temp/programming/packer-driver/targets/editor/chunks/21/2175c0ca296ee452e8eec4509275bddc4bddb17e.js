System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DictionaryIterator, _crd;

  function _reportPossibleCrUseOfDictionary(extras) {
    _reporterNs.report("Dictionary", "./Dictionary", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIterator(extras) {
    _reporterNs.report("Iterator", "./Iterator", _context.meta, extras);
  }

  _export("DictionaryIterator", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e89654j2PNMzZkDbasMmrCF", "DictionaryIterator", undefined);

      /**
       *  走訪Dictionary用的迭代器.
       */
      _export("DictionaryIterator", DictionaryIterator = class DictionaryIterator {
        constructor(dictionary) {
          this.m_dictTarget = null;
          this.m_arIterKey = null;
          this.m_iCurrentIndex = 0;
          this.m_dictTarget = dictionary;
        }

        getFirst() {
          this.m_iCurrentIndex = 0;

          if (null == this.m_dictTarget) {
            return null;
          }

          this.m_arIterKey = this.m_dictTarget.getKeys();
          return this.getNext();
        }

        getNext() {
          if (null == this.m_dictTarget) {
            return null;
          }

          if (this.m_iCurrentIndex >= this.m_arIterKey.length) {
            return null;
          }

          return this.m_dictTarget.get(this.m_arIterKey[this.m_iCurrentIndex++]);
        }

        getCurrentKey() {
          let tmp = this.m_iCurrentIndex - 1;
          return this.m_arIterKey[tmp];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2175c0ca296ee452e8eec4509275bddc4bddb17e.js.map