System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseModel, BasePresenter, BaseView, _crd;

  function _reportPossibleCrUseOfBaseModel(extras) {
    _reporterNs.report("BaseModel", "./lib/BaseModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasePresenter(extras) {
    _reporterNs.report("BasePresenter", "./lib/BasePresenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseView(extras) {
    _reporterNs.report("BaseView", "./lib/BaseView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BaseModel = _unresolved_2.BaseModel;
    }, function (_unresolved_3) {
      BasePresenter = _unresolved_3.BasePresenter;
    }, function (_unresolved_4) {
      BaseView = _unresolved_4.BaseView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6874aEay3NFw7Fbiaf8XX/f", "index", undefined);

      // MVP Architecture
      _export("BaseModel", BaseModel);

      _export("BasePresenter", BasePresenter);

      _export("BaseView", BaseView);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3aaa5118cd14eac12f53816452ccd677202cdfaf.js.map