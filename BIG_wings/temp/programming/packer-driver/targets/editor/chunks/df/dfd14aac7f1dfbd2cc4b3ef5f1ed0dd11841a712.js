System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameSetOrientation, OrientationType, URLParameter, _crd;

  /**
   *  取得loading圖片url
   */
  function GetLoadingPicURL() {
    let path = "";

    if (parent['LogoUrlPC'] && parent['LogoUrlMobile']) {
      //go+ 設定 windows 變數 , 需判斷遊戲路徑給圖
      path = (_crd && GameSetOrientation === void 0 ? (_reportPossibleCrUseOfGameSetOrientation({
        error: Error()
      }), GameSetOrientation) : GameSetOrientation) == (_crd && OrientationType === void 0 ? (_reportPossibleCrUseOfOrientationType({
        error: Error()
      }), OrientationType) : OrientationType).portrait ? parent['LogoUrlMobile'] : parent['LogoUrlPC'];
    } else if ((_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
      error: Error()
    }), URLParameter) : URLParameter).demo == '1') {
      //demo站
      path = '../ShareFile/Demo/loading.jpg';
    } else if ((_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
      error: Error()
    }), URLParameter) : URLParameter).special != null) {
      //特殊站台
      path = '../ShareFile/Special/loading.jpg?' + Math.ceil(Date.now() / 86400);
    } else {
      path = '../ShareFile/PC/Picture/loading.png';
    }

    return (_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
      error: Error()
    }), URLParameter) : URLParameter).getResourceURL(path);
  }

  function _reportPossibleCrUseOfGameSetOrientation(extras) {
    _reporterNs.report("GameSetOrientation", "../device/Orientation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientationType(extras) {
    _reporterNs.report("OrientationType", "../device/Orientation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfURLParameter(extras) {
    _reporterNs.report("URLParameter", "./URLParameter", _context.meta, extras);
  }

  _export("GetLoadingPicURL", GetLoadingPicURL);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameSetOrientation = _unresolved_2.GameSetOrientation;
      OrientationType = _unresolved_2.OrientationType;
    }, function (_unresolved_3) {
      URLParameter = _unresolved_3.URLParameter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5ef01RaY4dKUaSQq/PRuiqq", "LoadingPicUrl", undefined); //遊戲方向定義在字典檔中 direction
      //HFLoader 會將字典檔 direction 寫進cookie


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dfd14aac7f1dfbd2cc4b3ef5f1ed0dd11841a712.js.map