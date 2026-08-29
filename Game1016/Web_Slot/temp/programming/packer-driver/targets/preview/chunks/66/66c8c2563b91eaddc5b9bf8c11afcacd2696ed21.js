System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DictionaryIterator, ListIterator, IteratorFactory, _crd;

  function _reportPossibleCrUseOfDictionary(extras) {
    _reporterNs.report("Dictionary", "./Dictionary", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDictionaryIterator(extras) {
    _reporterNs.report("DictionaryIterator", "./DictionaryIterator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIterator(extras) {
    _reporterNs.report("Iterator", "./Iterator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfList(extras) {
    _reporterNs.report("List", "./List", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListIterator(extras) {
    _reporterNs.report("ListIterator", "./ListIterator", _context.meta, extras);
  }

  _export("IteratorFactory", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DictionaryIterator = _unresolved_2.DictionaryIterator;
    }, function (_unresolved_3) {
      ListIterator = _unresolved_3.ListIterator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5f9ab7UfBEar+w5h/nqr7v", "IteratorFactory", undefined);

      /**
      * IteratorFactory. 用來生成各種容器的迭代器.
      */
      _export("IteratorFactory", IteratorFactory = class IteratorFactory {
        /** 
         * 產生List的迭代器.
         */
        static createListIterator(list) {
          return new (_crd && ListIterator === void 0 ? (_reportPossibleCrUseOfListIterator({
            error: Error()
          }), ListIterator) : ListIterator)(list);
        }
        /** 
         * 產生Dictionary的迭代器.
         */


        static createDictionaryIterator(dictionary) {
          return new (_crd && DictionaryIterator === void 0 ? (_reportPossibleCrUseOfDictionaryIterator({
            error: Error()
          }), DictionaryIterator) : DictionaryIterator)(dictionary);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=66c8c2563b91eaddc5b9bf8c11afcacd2696ed21.js.map