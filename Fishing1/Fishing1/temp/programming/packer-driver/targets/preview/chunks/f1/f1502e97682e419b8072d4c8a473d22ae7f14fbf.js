System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingPage, Label, find, LoadingResPage, _crd;

  function _reportPossibleCrUseOfLoadingPage(extras) {
    _reporterNs.report("LoadingPage", "../../game/loading/LoadingPage", _context.meta, extras);
  }

  _export("LoadingResPage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      find = _cc.find;
    }, function (_unresolved_2) {
      LoadingPage = _unresolved_2.LoadingPage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e6ech2WkZNMqEajnzzUjLB", "LoadingResPage", undefined);
      /**
       * Created by EricHuang on 2024/01/16.
       */


      __checkObsolete__(['Label', 'Node', 'find']);

      _export("LoadingResPage", LoadingResPage = class LoadingResPage extends (_crd && LoadingPage === void 0 ? (_reportPossibleCrUseOfLoadingPage({
        error: Error()
      }), LoadingPage) : LoadingPage) {
        static getInstance() {
          return LoadingResPage._instance ? LoadingResPage._instance : new LoadingResPage();
        }

        constructor() {
          super();
          this._contentNode = void 0;
          this._label = void 0;

          if (LoadingResPage._instance != null) {
            throw new Error('plz use getInstance()');
          }

          LoadingResPage._instance = this;
        }

        init(LoadingPageInfo) {
          this._contentNode = find(LoadingPageInfo.loadingNodeId);
          this._label = this._contentNode.getChildByName(LoadingPageInfo.loadingLabelId).getComponent(Label);
        }

        onErrorAndClose() {
          this.remove();
        }

        updateText(tx) {
          this._label.string = tx;
        }

        checkLoadingUI() {
          var flag = false;

          if (this._contentNode) {
            flag = this._contentNode.active;
          }

          return flag;
        }

        hideLoadingUI() {
          this._contentNode.active = false;
        }

        showLoadingUI() {
          this._contentNode.active = true;
        }

        remove() {
          var parentNode = this._contentNode.parent;
          parentNode.removeChild(this._contentNode);
          this._contentNode = null;
        }

        close() {
          this.remove();
        }

      });

      LoadingResPage._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f1502e97682e419b8072d4c8a473d22ae7f14fbf.js.map