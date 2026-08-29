System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameUtilsTools, AniBuilderMediator, _crd;

  function _reportPossibleCrUseOfIPlayAniData(extras) {
    _reporterNs.report("IPlayAniData", "./IAniBuilder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISymbolAniMediator(extras) {
    _reporterNs.report("ISymbolAniMediator", "./IAniBuilder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISymbolAniKey(extras) {
    _reporterNs.report("ISymbolAniKey", "./IAniBuilder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISymbolAniMediatorHooks(extras) {
    _reporterNs.report("ISymbolAniMediatorHooks", "./IAniBuilder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProcessSlotSymbolAniData(extras) {
    _reporterNs.report("IProcessSlotSymbolAniData", "./IAniBuilder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIObjectPoolManager(extras) {
    _reporterNs.report("IObjectPoolManager", "../../ObjectPoolManager/Definitions/IBasicPoolObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../../GameUtilsTool", _context.meta, extras);
  }

  _export("AniBuilderMediator", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameUtilsTools = _unresolved_2.GameUtilsTools;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3f7f0GHw5OxaQLr8bNEDjp", "AniBuilderMediator", undefined);

      /**
       * @author:Eric
       * @description: <動畫建構器中介者>
       * 1.為了解決在產生動畫時需要處理的各種資料和物件池的交互問題
       * 2.可以透過中介者跨越不同的系統來使用唯一一份的邏輯來處理產生提取動畫的key
       * (有些prefab/aniNode,他的狀態會依照不同的遊戲狀態改變,例如:變化skin,待機/中線等不同的狀態下,
       * 這個中介者可以在不同的系統當中,統一處理這些狀態的變化而產生不同的動畫名稱,與抽取物件池的動畫
       * )
       * 3.採用Mediator pattern可以讓使用的系統降低耦合度,只需要關注於如何使用這個中介者來產生動畫即可
       * 4.IProcessSlotSymbolAniData: 他是處理輸入資料並產生播放動畫資料的泛型接口,
       *                              可依照不同遊戲來替換不同邏輯
       * 5.ISymbolAniMediatorHooks:   允許輕度的對產生的node進行擴展(動態的塞資料)
       * 6.IObjectPoolManager:        負責管理物件池的接口
       * PS-你也可以透過直接抽取singleton 物件池來取得物件.
       * P=IPlayAniData(包含ISymbolAniKey的資料)--多了tokenId,containerNodeId等
       * K=ISymbolAniKey(含動畫所需的所有關鍵資料aniId(spine))
       * 
       * @date: 2025/08/11
       * 
       * 
       * 
       */
      _export("AniBuilderMediator", AniBuilderMediator = class AniBuilderMediator {
        constructor(_processor, //--ani key/data產生核心
        _pool, //--物件池
        _hooks //--再修飾賦予產出aniNode一些動態屬性使用
        ) {
          this._processor = _processor;
          this._pool = _pool;
          this._hooks = _hooks;
        } //=======interface==================================================

        /** 以 T 輸入生成 Node（一般情境） */
        //public async requestNodeByInput(inp: T): Promise<C> {


        requestNodeByInput(inp) {
          const playData = this.buildPlayData(inp);
          const poolKey = playData.prefabKey;

          const instance = this._pool.getInstantiatedObjFromPool(poolKey);

          if (!instance) {
            throw new Error(`[SymbolAniMediator] Pool empty for key: ${String(poolKey)}`);
          }

          let tokenId = Date.now();
          playData.tokenId = tokenId + '_' + (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).getRangeRandom(0, 100); //--隨機tokenId

          playData.prefabKey = poolKey; //await this.decorate(instance, playData);

          this.decorate(instance, playData);
          return instance;
        } //public async decorate(target: C, playData: P): Promise<void> {


        decorate(target, playData) {
          var _this$_hooks;

          // 如果有 hooks，則使用它來修飾 target
          if (!this._hooks) {
            throw new Error("[SymbolAniMediator] No hooks provided for decoration.");
          } // 這裡會將 playData 的資料塞進 target 中
          // 例如：target[DYN_NODE_PROPERTIES.PREFAB_ID] = playData.prefabKey;


          (_this$_hooks = this._hooks) == null || _this$_hooks.decorate == null || _this$_hooks.decorate(target, playData);
        }
        /**
         * 這裡是給外部使用的，讓外部可以設定動畫群組
         * 例如:我在表演層的時候,我可以再去設定
         * 在slotMachine中不會去設定groupId
         * @param inp 
         * @param groupId 
         */


        setAniGroup(inp, groupId) {
          var _this$_hooks2;

          (_this$_hooks2 = this._hooks) == null || _this$_hooks2.setAniGroup == null || _this$_hooks2.setAniGroup(inp, groupId);
        }
        /**
         * 以 K（AniKey）輸入生成 Node（流程圖裡的 SymbolAniKey 路徑）
         * 你也可以透過P(AniKey)輸入生成 Node..用於檢查是否重複node後再來拿
         * @param key K
         * @returns 
         */


        async requestNodeByKey(key) {
          // 如果需要真的由 key→input 的轉換，建議額外注入 mapper。
          // 這裡先示範直接把 key 當作 T 使用（依專案自訂）：
          const asInput = key;
          return this.requestNodeByInput(asInput);
        }
        /** （可選）只產資料不取節點，提供需要的人用 */
        //-T=IProcessInput


        buildPlayData(inp) {
          return this._processor.createPlayAniData(inp);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1fd11d4f746d2960bdc5668c6aacd6f632d045bc.js.map