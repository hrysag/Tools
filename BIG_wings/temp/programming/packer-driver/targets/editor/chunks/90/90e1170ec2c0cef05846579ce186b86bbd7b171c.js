System.register(["cc", "@casino-mono/mvc"], function (_export, _context) {
  "use strict";

  var _cclegacy, mvc, BaseDataModel, AnalysisInfo, _crd;

  _export({
    BaseDataModel: void 0,
    AnalysisInfo: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_casinoMonoMvc) {
      mvc = _casinoMonoMvc;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "34fdexM6u9JhqtdT83hhWbr", "BaseDataModel", undefined); // import { nanoid } from "nanoid";


      _export("BaseDataModel", BaseDataModel = class BaseDataModel extends mvc.DataModel {
        get requestId() {
          return `${this.uuid}/${++this.reqConunter}`;
        }

        constructor() {
          super();
          // 分析資料
          this.analysisInfo = new AnalysisInfo();
          //
          this.reqConunter = 0;
          // 進入遊戲
          this.isJoinGame = false;
          this.lang = "";
          this.connected = false;
        }

      });

      _export("AnalysisInfo", AnalysisInfo = class AnalysisInfo {
        constructor() {
          this.metricData = {};
          this.init();
        } // 初始化


        init() {// TODO: 初始值
        } // 設定資料


        setData(key, value) {
          this.metricData[key] = value;
        } // 產生資料


        report() {
          return this.metricData;
        } // 清除


        clear() {
          this.metricData = {};
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=90e1170ec2c0cef05846579ce186b86bbd7b171c.js.map