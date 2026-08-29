System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2edd2UTAE1H6ZTuKkq1Kzvy", "IBasicGameViewManager", undefined); //--以下interface定義了遊戲流程中所有共通邏輯與流程事件的接口
      //--可以在不同的類型的遊戲當中自由的選擇要組合實作哪一種interface

      /**
       * @author Eric 20250805
       * @description: 基本遊戲流程管理介面
       * - 定義了遊戲流程中所有共通邏輯與流程事件的接口。
       * - 所有具體 GameViewManager 應繼承本類並實作 abstract 方法。
       * - 包含遊戲模式管理、場景切換、返回大廳等功能。
       * - 這個介面是遊戲流程的核心，
       */

      /**
       * @author Eric 20250805
       * @description: 基本遊戲流程介面
       * - 定義了遊戲流程中所有共通邏輯與流程事件的接口。
       * - 所有具體 GameViewManager 應繼承本類並實作 abstract 方法。
       */

      /**
       * @author Eric 20250805
       * @description: 購買FG的流程
       * - 這個介面定義了購買FG的流程方法。
       * - 需要實作購買FG的相關邏輯。
       * 如果你的遊戲有該功能，請實作這個介面。
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5377465d879c6b3ffa70b7647b06dc1be3739491.js.map