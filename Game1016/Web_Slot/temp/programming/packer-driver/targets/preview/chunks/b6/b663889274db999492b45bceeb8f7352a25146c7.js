System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27d9dG9stFPQI1QFirvzsVz", "BasicGameDataDefinition", undefined);
      /**
       * 20250812-原先的SlotMachineIndexInfo用這個取代
       * 幾乎一樣只是iconID改成symbolId
       * V1版本:
       * export type SlotMachineIndexInfo =
          {
              reelIndex?: number;//--reel index
              iconIndex?: number;//--icon index
              iconID?: number;   //--icon id
              groupID?: number;//--group id
      
          }
       * 
       */

      /**
       * 原先的type GroupAniData改用interface取代
       */

      /**
       * 原先的type WinScoreData改用interface取代
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b663889274db999492b45bceeb8f7352a25146c7.js.map