System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ListIterator, _crd;

  function _reportPossibleCrUseOfIterator(extras) {
    _reporterNs.report("Iterator", "./Iterator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfList(extras) {
    _reporterNs.report("List", "./List", _context.meta, extras);
  }

  _export("ListIterator", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6f360Vc/lJg53SXF47lrVc", "ListIterator", undefined);

      /**
       * 走訪List用的迭代器.
       */
      _export("ListIterator", ListIterator = class ListIterator {
        constructor(list) {
          this.m_listTarget = null;
          this.m_iCurrentIndex = 0;
          this.m_listTarget = list;
        }

        getFirst() {
          this.m_iCurrentIndex = 0;
          return this.getNext();
        }

        getNext() {
          if (null === this.m_listTarget) {
            return null;
          }

          if (this.m_iCurrentIndex >= this.m_listTarget.getCount()) {
            return null;
          }

          return this.m_listTarget.get(this.m_iCurrentIndex++);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b9780db579e492f8d511ca94ca20aa7081b75fa4.js.map