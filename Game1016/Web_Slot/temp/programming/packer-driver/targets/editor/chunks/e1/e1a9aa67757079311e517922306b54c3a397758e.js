System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, DIAgentFactory, _crd;

  function _reportPossibleCrUseOfIReelInfo(extras) {
    _reporterNs.report("IReelInfo", "../../MyUtils/BasicGameDataDefinition/BasicGameDataDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICrossSystemSymbolAniService(extras) {
    _reporterNs.report("ICrossSystemSymbolAniService", "../../MyUtils/AniHandoffManager/CrossSystemAniServiceFacade/ICrossSystemAniServiceFacade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISymbolOwnerAgent(extras) {
    _reporterNs.report("ISymbolOwnerAgent", "../../MyUtils/AniHandoffManager/AniHandoff/IAniHandoff", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDIAgentFactory(extras) {
    _reporterNs.report("IDIAgentFactory", "./IDIAgentFactory", _context.meta, extras);
  }

  _export("DIAgentFactory", void 0);

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

      _cclegacy._RF.push({}, "9d051HzJ8NFoaFQI5o16sKT", "DIAgentFactory", undefined);

      __checkObsolete__(['Node']);

      _export("DIAgentFactory", DIAgentFactory = class DIAgentFactory {
        /**
         * 因為實際產生動畫物件的服務是跨系統的,所以這裡需要注入一個跨系統的動畫服務
         * 且是從reel裡面去執行產生的動作
         * 但是slotMachine本身才是實踐ISymbolOwnerAgent的物件,
         * 如果直接將ISymbolOwnerAgent注入到reel裡面,(也就是this=slotMachine)
         * 雖然注入reel是interface會保護住上層的slotMachine不會被reel改變,
         * 但這樣低層級的物件卻會持有高層級的物件的控制權有違依賴反轉原則.
         * 所以這裡需要一個DI的工廠來注入這個服務,且讓reel不知道握有這個控制權的物件是誰.就可以切割開來
         * 將耦合集中在factory上,而不是reel上.
         * @param aniService 
         * @param owner 
         */
        constructor(_aniService, _owner) {
          this._aniService = _aniService;
          this._owner = _owner;
        } //public async createAndRegister(info: IReelInfo): Promise<Node> {


        createAndRegister(info) {
          return this._aniService.createAndRegister(info, this._owner);
        }

        unRegister(info) {
          this._aniService.unRegisterData(info);
        }

        multiUnRegister(infos) {
          this._aniService.multiUnRegister(infos);
        }

        register(info) {
          //console.log('check_register_____reelIndex', info.reelIndex,'iconIndex__', info.iconIndex,'_symbolId__', info.symbolId);
          this._aniService.registerData(info, this._owner);
        }

        handoffSingleByOwnerId(info, targetOwnerId) {
          this._aniService.handoffSingleByOwnerId(info, targetOwnerId);
        }

        getInfoByOwnerAgent(info) {
          return this._aniService.getInfoByOwnerAgent(info, this._owner);
        }

        debugCheckAllOwners() {
          this._aniService.debugCheckAllOwners();
        } //public async multiRegisty(info: IReelInfo[]): Promise<void> {


        multiRegisty(info) {
          //await this._aniService.multiRegisty(info, this._owner);
          this._aniService.multiRegisty(info, this._owner);
        }

        async multiRegistryByID(info, targetOwnerId) {
          await this._aniService.multiRegistryByID(info, targetOwnerId);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e1a9aa67757079311e517922306b54c3a397758e.js.map