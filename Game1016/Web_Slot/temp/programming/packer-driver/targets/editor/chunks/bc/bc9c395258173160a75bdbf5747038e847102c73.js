System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CrossSystemAniServiceFacade, _crd;

  function _reportPossibleCrUseOfIPlayAniData(extras) {
    _reporterNs.report("IPlayAniData", "../AniBuilder/IAniBuilder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISymbolAniKey(extras) {
    _reporterNs.report("ISymbolAniKey", "../AniBuilder/IAniBuilder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReelInfo(extras) {
    _reporterNs.report("IReelInfo", "../../BasicGameDataDefinition/BasicGameDataDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISymbolOwnerAgent(extras) {
    _reporterNs.report("ISymbolOwnerAgent", "../AniHandoff/IAniHandoff", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniBuilderMediator(extras) {
    _reporterNs.report("AniBuilderMediator", "../AniBuilder/AniBuilderMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolAniHandoffManager(extras) {
    _reporterNs.report("SymbolAniHandoffManager", "../AniHandoff/SymbolAniHandoffManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICrossSystemSymbolAniService(extras) {
    _reporterNs.report("ICrossSystemSymbolAniService", "./ICrossSystemAniServiceFacade", _context.meta, extras);
  }

  _export("CrossSystemAniServiceFacade", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "960583J0xFCWaX2YF7fG2Jg", "CrossSystemAniServiceFacade", undefined);

      __checkObsolete__(['Game']);

      _export("CrossSystemAniServiceFacade", CrossSystemAniServiceFacade = class CrossSystemAniServiceFacade {
        constructor(_mediator, _handoffManager) {
          this._mediator = _mediator;
          this._handoffManager = _handoffManager;
        } //--產生並註冊動畫物件
        //public async createAndRegister(info: T, owner: OwnerAgent): Promise<N> {


        createAndRegister(info, owner) {
          const node = this._mediator.requestNodeByInput(info); //this._handoffManager.register(info, owner);//--20250925-轉完再一次註冊


          return node;
        }
        /**
         * 由owner主動將自己擁有的動畫位置資料交給另一個owner（透過ownerId找）
         * @param info any extends IReelInfo
         * @param targetOwnerId ISymbolOwnerAgent裡面有ownerId屬性
         */


        async handoffSingleByOwnerId(info, targetOwnerId) {
          return this._handoffManager.handoffSingleByOwnerId(info, targetOwnerId);
        }

        getInfoByOwnerAgent(info, owner) {
          return this._handoffManager.getInfoByOwnerAgent(info, owner);
        } //--向列表移除註冊(銷毀物件或推回物件池使用)


        unRegisterData(info) {
          this._handoffManager.unRegister(info);
        }

        registerData(info, owner) {
          this._handoffManager.register(info, owner);
        }

        multiUnRegister(infos) {
          this._handoffManager.multiUnRegister(infos);
        } //public async multiRegisty(info: T[], owner: OwnerAgent): Promise<void> {


        multiRegisty(info, owner) {
          //await this._handoffManager.multiRegisty(info, owner);
          this._handoffManager.multiRegisty(info, owner);
        } // 註冊自己為擁有者


        registerYourself(owner) {
          this._handoffManager.registerOwner(owner);
        }

        releaseAll() {
          this._handoffManager.releaseAll();
        }
        /**除錯使用,查看列表狀態 */


        debugCheckAllOwners() {
          /*
          GameUtilsTools.debugLog('DEBUG_TITLE', 'debugCheckAllOwners', {
              message: '==call by CrossAniServer:debugCheckAllOwners==='
          });*/
          this._handoffManager.debugCheckAllOwners();
        }
        /*目前外部應該沒有要使用這個方法
        public getAllOwnersInCell(reelIndex: number, iconIndex: number): Array<{ info: Pick<I, "reelIndex" | "iconIndex" | "symbolId">, owner: ISymbolOwnerAgent }> {
            return this._handoffManager.getAllOwnersInCell(reelIndex, iconIndex);
        }*/

        /*目前外部應該沒有要使用這個方法
        public unRegisterAllBySameOwner(owner: ISymbolOwnerAgent): void {
            this._handoffManager.unRegisterAllBySameOwner(owner);
        }*/
        //--轉移控制權與抽取對方持有的物件


        async handoff(info, newOwner) {
          await this._handoffManager.handoff(info, newOwner);
        } //--轉移多個控制權與抽取對方持有的物件(非持有者要求轉移多個物件)


        async multiHandoffBySameOwner(infos, newOwner) {
          await this._handoffManager.multiHandoffBySameOwner(infos, newOwner);
        } //--轉移多個控制權與抽取對方持有的物件(給持有者本身使用,從自己轉移到別人身上) by ownerId


        async multiHandoffBySameOwnerID(infos, targetOwnerId) {
          await this._handoffManager.multiHandoffBySameOwnerID(infos, targetOwnerId);
        } //--註冊多個物件(非持有者要求註冊多個物件給已知的owner)


        async multiRegistryByID(info, targetOwnerId) {
          await this._handoffManager.multiRegistryByID(info, targetOwnerId);
        } //--取消..沒甚麼意義的功能,且已經超出權責了


        async decorateNode(target, playData) {
          this._mediator.decorate(target, playData);
        }
        /*
        public setTargetGroup(target: N, groupId: number): void {
            this._mediator.setAniGroup(target, groupId);
        }*/

        /**
         * 只產動畫資料不產生實體..適合需要檢查是否有同個位置有相同物件的檢查.
         * 如果你有該需求,請透過該方法取出動畫資料後自行比對.
         * 再比對後,如果依然需要產出動畫實體,可以再呼叫createAndRegister方法來產出實體。
         * @param info 
         * @returns
         */


        buildPlayData(info) {
          return this._mediator.buildPlayData(info);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bc9c395258173160a75bdbf5747038e847102c73.js.map