        
 <動畫轉移持有控制權的流程示意圖> 
 1.ISymbolOwnerAgent讓需要交互持有動畫的系統實踐
 2.各系統透過依賴注入(dependency injection)的方式將SymbolAniHandoffManager注入
 3.注入後註冊自己
 4.透過使用SymbolAniHandoffManager(改介面注入)操作介面方法
 5.ISymbolAniMediator來操作取得動畫資料與取得動畫物件+修飾動畫實體屬性     
        
        
                 ┌─────────────────────────────┐
                 │   GameInit / DI Container   │
                 │  綁定與注入：                │
                 │  ICrossSystemSymbolAniService
                 │  → CrossSystemAniServiceFacade
                 └───────────────┬─────────────┘
                                 │ inject
     uses interface              │
┌──────────────────────────┐     │      ┌──────────────────────────┐
│ SlotMachineControl (SMC) │◀────┘      │ ShowAniController (SAC)  │
│  implements ISymbolOwner │            │  implements ISymbolOwner │
└────────────┬─────────────┘            └────────────┬─────────────┘
             │  ICrossSystemSymbolAniService                 ▲
             │  (介面呼叫)                                    │  ICrossSystemSymbolAniService
        ▼                                                    │  (介面呼叫)
      ┌──────────────────────────────────────────┐           │
      │   CrossSystemAniServiceFacade            │◀──────────┘
      │   (implements ICrossSystemSymbolAniService)          Facade
      │  ──────────────────────────────────────── │
      │  + createAndRegister(info, owner)         │
      │  + handoff({reelIndex,iconIndex}, newOwn) │
      │  + decorateNode(target, playData)         │
      │  + setTargetGroup(target, groupId)        │
      │  + buildPlayData(info)                    │  ← 供「先比對再取節點」用
      └───────────────┬──────────────────────────┘
                      │ uses
                      ▼
          ┌───────────────────────────────┐
          │ AniBuilderMediator            │  ← 取 PlayData / 取 Node / decorate
          │  - buildPlayData(info)       │
          │  - requestNodeByInput(info)  │
          │  - decorate(node, playData)  │
          │  - setAniGroup(node, group)  │
          └───────────────┬──────────────┘
                          │ uses
                          ▼
          ┌───────────────────────────────┐
          │ IProcessSlotSymbolAniData     │  ← 規則/命名/prefabKey/compareKey
          └───────────────────────────────┘
                          │ prefabKey
                          ▼
          ┌───────────────────────────────┐
          │ AniObjectPoolManager          │  ← 物件池取 Node
          └───────────────────────────────┘

                      and
                      ▼
          ┌───────────────────────────────┐
          │ SymbolAniHandoffManager<I>    │  ← 位置所有權交接
          │  - register(info, owner)      │  (info 至少含 reelIndex, iconIndex)
          │  - handoff(info, newOwner)    │  → beforeRelease/afterAcquire
          │  - getOwner / unregister      │
          └───────────────────────────────┘

