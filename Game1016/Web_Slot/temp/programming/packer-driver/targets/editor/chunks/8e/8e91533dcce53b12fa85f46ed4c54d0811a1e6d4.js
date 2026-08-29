System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, IteratorFactory, List, Dictionary, KeyValue, _crd;

  function _reportPossibleCrUseOfIterator(extras) {
    _reporterNs.report("Iterator", "./Iterator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIteratorFactory(extras) {
    _reporterNs.report("IteratorFactory", "./IteratorFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfList(extras) {
    _reporterNs.report("List", "./List", _context.meta, extras);
  }

  _export("Dictionary", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      IteratorFactory = _unresolved_2.IteratorFactory;
    }, function (_unresolved_3) {
      List = _unresolved_3.List;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "399e1qAcoBLVYP6vo3TiFKn", "Dictionary", undefined);

      /**
       * Key Value 儲存類別
       */
      _export("Dictionary", Dictionary = class Dictionary {
        constructor() {
          this.m_KeyValue = void 0;
          this.m_iCount = 0;
          this.m_KeyValue = new KeyValue();
        }

        getCount() {
          return this.m_iCount;
        } // 新增.


        add(key, value) {
          if (!this.containsKey(key)) {
            ++this.m_iCount;
          }

          this.m_KeyValue[key] = value;
        } // 判斷key是否存在.


        containsKey(key) {
          if (undefined === this.m_KeyValue[key]) {
            return false;
          }

          return true;
        } // 刪除.


        remove(key) {
          if (true == this.containsKey(key)) {
            delete this.m_KeyValue[key];
            --this.m_iCount;
          }
        }

        clear() {
          this.m_KeyValue = new KeyValue();
          this.m_iCount = 0;
        } // 取值, 找不到傳回undefined.


        get(key) {
          return this.m_KeyValue[key];
        } // 列舉所有key.


        getKeys() {
          let listKey = new (_crd && List === void 0 ? (_reportPossibleCrUseOfList({
            error: Error()
          }), List) : List)();

          for (let key in this.m_KeyValue) {
            listKey.add(key);
          }

          return listKey.toArray();
        } // 列舉所有key/value.


        getKeyValues() {
          let listKey = new (_crd && List === void 0 ? (_reportPossibleCrUseOfList({
            error: Error()
          }), List) : List)();
          let listValue = new (_crd && List === void 0 ? (_reportPossibleCrUseOfList({
            error: Error()
          }), List) : List)();

          for (let key in this.m_KeyValue) {
            listKey.add(key);
            listValue.add(this.m_KeyValue[key]);
          }

          return [listKey.toArray(), listValue.toArray()];
        } // 取出Iterator.


        getIterator() {
          return (_crd && IteratorFactory === void 0 ? (_reportPossibleCrUseOfIteratorFactory({
            error: Error()
          }), IteratorFactory) : IteratorFactory).createDictionaryIterator(this);
        }

      });

      KeyValue = class KeyValue {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8e91533dcce53b12fa85f46ed4c54d0811a1e6d4.js.map