System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FishGameMain, gameMainAbstractView, Fish1VM, Fish1Model, Fish1Connect, Fish1ConnectStrategy, Fish1BulletView, Fish1View, Fish1GuisSystemView, Fish1AniEffectSystemView, GameCoordinateMode, Fish1CoordinatesFormMode, Fish1GameMainLogic, Fish1CollisionSystem, FishPickUpCollisionBase, BaseCollisionType, PickUpCollisionStrategy, director, _decorator, Node, find, PhysicsSystem, PhysicsSystem2D, CocosGameSetting, SoundsManager, ResizeTool, profiler, _dec, _dec2, _class, _crd, ccclass, property, Fish1GameMain;

  function _reportPossibleCrUseOfFishGameMain(extras) {
    _reporterNs.report("FishGameMain", "../framework/logic/FishGameMain", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameMainAbstractView(extras) {
    _reporterNs.report("gameMainAbstractView", "../framework/game/GameMainAbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1VM(extras) {
    _reporterNs.report("Fish1VM", "./vm/Fish1VM", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1Model(extras) {
    _reporterNs.report("Fish1Model", "./model/Fish1Model", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1Connect(extras) {
    _reporterNs.report("Fish1Connect", "./model/connect/Fish1Connect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1ConnectStrategy(extras) {
    _reporterNs.report("Fish1ConnectStrategy", "./model/connect/Fish1ConnectStrategy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1BulletView(extras) {
    _reporterNs.report("Fish1BulletView", "./views/bulletView/Fish1BulletView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1View(extras) {
    _reporterNs.report("Fish1View", "./views/fishView/Fish1View", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1GuisSystemView(extras) {
    _reporterNs.report("Fish1GuisSystemView", "./views/guiSystemView/Fish1GuisSystemView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1AniEffectSystemView(extras) {
    _reporterNs.report("Fish1AniEffectSystemView", "./views/aniEffectView/Fish1AniEffectSystemView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCoordinateMode(extras) {
    _reporterNs.report("GameCoordinateMode", "../framework/game/coordinates/CoordinateDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1CoordinatesFormMode(extras) {
    _reporterNs.report("Fish1CoordinatesFormMode", "./beforeinit/coordinates/Fish1CoordinatesFormMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1GameMainLogic(extras) {
    _reporterNs.report("Fish1GameMainLogic", "./gameMainLogic/Fish1GameMainLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1CollisionSystem(extras) {
    _reporterNs.report("Fish1CollisionSystem", "./collision/Fish1CollisionSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishPickUpCollisionBase(extras) {
    _reporterNs.report("FishPickUpCollisionBase", "../framework/logic/collision/FishPickUpCollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCollisionType(extras) {
    _reporterNs.report("BaseCollisionType", "../framework/game/collision/CollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPickUpCollisionStrategy(extras) {
    _reporterNs.report("PickUpCollisionStrategy", "../framework/logic/collision/fishCollisionStrategy/PickUpCollisionStrategy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosGameSetting(extras) {
    _reporterNs.report("CocosGameSetting", "../framework/utils/CocosGameSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundsManager(extras) {
    _reporterNs.report("SoundsManager", "../framework/logic/audio/SoundsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResizeTool(extras) {
    _reporterNs.report("ResizeTool", "../framework/logic/resize/ResizeTool", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      find = _cc.find;
      PhysicsSystem = _cc.PhysicsSystem;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      profiler = _cc.profiler;
    }, function (_unresolved_2) {
      FishGameMain = _unresolved_2.FishGameMain;
    }, function (_unresolved_3) {
      gameMainAbstractView = _unresolved_3.gameMainAbstractView;
    }, function (_unresolved_4) {
      Fish1VM = _unresolved_4.Fish1VM;
    }, function (_unresolved_5) {
      Fish1Model = _unresolved_5.Fish1Model;
    }, function (_unresolved_6) {
      Fish1Connect = _unresolved_6.Fish1Connect;
    }, function (_unresolved_7) {
      Fish1ConnectStrategy = _unresolved_7.Fish1ConnectStrategy;
    }, function (_unresolved_8) {
      Fish1BulletView = _unresolved_8.Fish1BulletView;
    }, function (_unresolved_9) {
      Fish1View = _unresolved_9.Fish1View;
    }, function (_unresolved_10) {
      Fish1GuisSystemView = _unresolved_10.Fish1GuisSystemView;
    }, function (_unresolved_11) {
      Fish1AniEffectSystemView = _unresolved_11.Fish1AniEffectSystemView;
    }, function (_unresolved_12) {
      GameCoordinateMode = _unresolved_12.GameCoordinateMode;
    }, function (_unresolved_13) {
      Fish1CoordinatesFormMode = _unresolved_13.Fish1CoordinatesFormMode;
    }, function (_unresolved_14) {
      Fish1GameMainLogic = _unresolved_14.Fish1GameMainLogic;
    }, function (_unresolved_15) {
      Fish1CollisionSystem = _unresolved_15.Fish1CollisionSystem;
    }, function (_unresolved_16) {
      FishPickUpCollisionBase = _unresolved_16.FishPickUpCollisionBase;
    }, function (_unresolved_17) {
      BaseCollisionType = _unresolved_17.BaseCollisionType;
    }, function (_unresolved_18) {
      PickUpCollisionStrategy = _unresolved_18.PickUpCollisionStrategy;
    }, function (_unresolved_19) {
      CocosGameSetting = _unresolved_19.CocosGameSetting;
    }, function (_unresolved_20) {
      SoundsManager = _unresolved_20.SoundsManager;
    }, function (_unresolved_21) {
      ResizeTool = _unresolved_21.ResizeTool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5561zz1WlIzaJsW2Hqjzn2", "Fish1GameMain", undefined);
      /**
       * Created by EricHuang on 2023/9/23.
       */


      __checkObsolete__(['director', '_decorator', 'Node', 'find', 'PhysicsSystem', 'PhysicsSystem2D']);

      __checkObsolete__(['profiler']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Fish1GameMain", Fish1GameMain = (_dec = ccclass('Fish1GameMain'), _dec2 = (_crd && gameMainAbstractView === void 0 ? (_reportPossibleCrUseOfgameMainAbstractView({
        error: Error()
      }), gameMainAbstractView) : gameMainAbstractView)(_crd && Fish1VM === void 0 ? (_reportPossibleCrUseOfFish1VM({
        error: Error()
      }), Fish1VM) : Fish1VM, _crd && Fish1Model === void 0 ? (_reportPossibleCrUseOfFish1Model({
        error: Error()
      }), Fish1Model) : Fish1Model, _crd && Fish1Connect === void 0 ? (_reportPossibleCrUseOfFish1Connect({
        error: Error()
      }), Fish1Connect) : Fish1Connect, _crd && Fish1ConnectStrategy === void 0 ? (_reportPossibleCrUseOfFish1ConnectStrategy({
        error: Error()
      }), Fish1ConnectStrategy) : Fish1ConnectStrategy), _dec(_class = _dec2(_class = class Fish1GameMain extends (_crd && FishGameMain === void 0 ? (_reportPossibleCrUseOfFishGameMain({
        error: Error()
      }), FishGameMain) : FishGameMain) {
        constructor() {
          super();
          this._classId = 'Fish1GameMain'; //--測試模式

          this.setLocalDebugMode(false);
          this._gameType = 38003;
          profiler.hideStats(); //--關閉相關測試面板
        }

        async onLoad() {
          super.onLoad();
          PhysicsSystem.instance.enable = false;
          PhysicsSystem2D.instance.enable = false;
          this._useGuiSystem = true;
          this.gameCoordinatesMode = (_crd && GameCoordinateMode === void 0 ? (_reportPossibleCrUseOfGameCoordinateMode({
            error: Error()
          }), GameCoordinateMode) : GameCoordinateMode).GameViewMode_Four_in_one; //========================================
          //--到時候要換掉FishGameMainLogic,先暫時這樣2023-10-01

          let logicNode = new Node('gameMainLogicNode'); //--抽象類別不能直接實體化,一定要透過繼承,然後實體化繼承過來那個類別
          //this._gameLogic=logicNode.addComponent(FishGameMainLogic);

          this._gameLogic = logicNode.addComponent(_crd && Fish1GameMainLogic === void 0 ? (_reportPossibleCrUseOfFish1GameMainLogic({
            error: Error()
          }), Fish1GameMainLogic) : Fish1GameMainLogic);
          director.addPersistRootNode(logicNode); //--加到node後才會觸發onload
        }

        start() {
          (_crd && ResizeTool === void 0 ? (_reportPossibleCrUseOfResizeTool({
            error: Error()
          }), ResizeTool) : ResizeTool).getInstance().resize(); // 範例如何紀錄『射擊種類』

          /*
          const shootAnal = util.analytic.ShootTypeAnalytics;
          shootAnal.start(1); // 每一分鐘採樣一次
          shootAnal.accumulate('auto'); // 每次射一發自動射擊就紀錄一次
          shootAnal.accumulate('normal'); // 每次射一發手動射擊就紀錄一次
          shootAnal.accumulate('lock'); // 每次射一發鎖定射擊就紀錄一次
          shootAnal.accumulate('lock'); // 第二次鎖定射擊
          */
          // 假設1分鐘到，就會送出1次自動、1次手動、2次鎖定。 然後清空。
        } //--寫入laoding資料--override-


        setLoadingResourceMap() {
          this.loadingQuene = [//--bundleId=資料夾名稱(or 路徑),prefabId:物件名稱
          //{lzmaId:'pathCommonMiddle'}
          //---json
          {
            bundleId: 'GameResources',
            lzmaId: 'pathCommon'
          }, {
            bundleId: 'GameResources',
            lzmaId: 'pathCommonMiddle'
          }, {
            bundleId: 'GameResources',
            lzmaId: 'pathCommonSp'
          }, //--特殊路徑(召喚)
          {
            bundleId: 'GameResources',
            lzmaId: 'pathCommonBoss'
          }, //--特殊路徑(boss)
          //--這邊就是採用多語系的方式針對語系拉下來-直接拿plist就好了
          //{bundleId:'GameResources',spriteFrameId:'lang/en/fishHunter_en/tx_dragon'},
          //--PS-要注意在stage上面或是prefab上面不能引用該素材,否則該素材會被整張拉下來
          {
            bundleId: 'Language_' + (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
              error: Error()
            }), CocosGameSetting) : CocosGameSetting).Game_Lang,
            plist: 'fishHunter_' + (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
              error: Error()
            }), CocosGameSetting) : CocosGameSetting).Game_Lang
          }, {
            bundleId: 'GameResources',
            plist: 'prefab/textures/fishHunterGui'
          }, {
            bundleId: 'GameResources',
            plist: 'prefab/textures/fishHunterPopup'
          }, {
            bundleId: 'GameResources',
            plist: 'prefab/textures/fishHunterSystemGUI'
          }, {
            bundleId: 'GameResources',
            plist: 'prefab/textures/fishHunterLobby'
          }, {
            bundleId: 'GameResources',
            plist: 'prefab/textures/fishHunterDragon'
          }, {
            bundleId: 'GameResources',
            plist: 'prefab/textures/fishHunterFish'
          }, //------audios----
          {
            bundleId: 'GameResources',
            audioId: 'sounds/BGM01'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/bigcoin'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/bigfishkill-1'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/bigfishkill-2'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/button'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/coin'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/coinscollect'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/dragonattack'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/dragonbattlebgm-1'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/dragonflame'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/dragonkilled'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/fire1'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/fire2'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/fire3'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/fire4'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/fire5'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/ice'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/lightning'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/moneydrop'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/summon'
          }, {
            bundleId: 'GameResources',
            audioId: 'sounds/switch_weapon'
          }, //--spriteframe
          {
            bundleId: 'GameResources',
            texture2dId: 'bg/bg_1/texture'
          }, {
            bundleId: 'GameResources',
            texture2dId: 'bg/bg_2/texture'
          }, //{bundleId:'GameResources',textureImageAssetId:'bg/bg_1'},//--要拿ImageAsset
          {
            bundleId: 'GameResources',
            spriteFrameId: 'bg/fishHunterFrozen/spriteFrame'
          }, //--texture
          {
            bundleId: 'GameResources',
            texture2dId: 'prefab/textures/lightning/texture'
          }, //--gui test for webview close btn
          //{bundleId:'GameResources',prefabId:'prefab/gui/closeBtn'},
          //--gui
          {
            bundleId: 'GameResources',
            prefabId: 'prefab/gui/creditExchange'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/gui/bgMask'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/gui/lobby'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/gui/settingBar'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/gui/settingBtn'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/gui/lockBtn'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/gui/autoBtn'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/gui/propBtns'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/gui/autoShotSetting'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/gui/systemMessage'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/gui/bottomBar'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/gui/info'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/gui/webviewbg'
          }, //--effect
          {
            bundleId: 'GameResources',
            prefabId: 'prefab/aniEffect/titleGD'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/aniEffect/fish_24_opening'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/aniEffect/nuclearBombDragon'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/aniEffect/aniKillDragonTitle'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/aniEffect/particleCoins'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/aniEffect/win'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/aniEffect/wave'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/aniEffect/powerUp'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/aniEffect/lightningPoint'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/aniEffect/giftbomb'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/aniEffect/fishDeath'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/aniEffect/bigCoin'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/aniEffect/itemCallFX'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/aniEffect/itemCallSymbol'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/aniEffect/itemCallTowerFx'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/aniEffect/itemCrazyTowerFx'
          }, //--bullet
          {
            bundleId: 'GameResources',
            prefabId: 'prefab/bullet/bullet1'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/bullet/bullet1_crazy'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/bullet/bullet2'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/bullet/bullet2_crazy'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/bullet/bullet3'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/bullet/bullet3_crazy'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/bullet/bullet4'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/bullet/bullet4_crazy'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/bullet/bullet5'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/bullet/bullet5_crazy'
          }, //--fish
          {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/3d/fish_23'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/3d/fish_24'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/3d/fish_16'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/3d/fish_17'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/3d/fish_18'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/3d/fish_19'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/3d/fish_20'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/3d/fish_21'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/3d/fish_22'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/fish_01'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/fish_02'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/fish_03'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/fish_04'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/fish_05'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/fish_06'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/fish_07'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/fish_08'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/fish_09'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/fish_10'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/fish_11'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/fish_12'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/fish_13'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/fish_14'
          }, {
            bundleId: 'GameResources',
            prefabId: 'prefab/fish/fish_15'
          } //{bundleId:'GameResources',jsonId:'type1'}
          //--挖操~要直接用spriteFrame這個物件,不是上層的那個圖片texture
          //{bundleId:'testLoading',spriteFrameId:'btn_menu_exit/spriteFrame'},
          //{bundleId:'testLoading',texture2dId:'pic_gun_base_01/texture'}
          ]; //--setting for loadingpage

          this.loadingPageInfo = {
            loadingNodeId: 'Canvas/LoadingBar',
            loadingLabelId: 'LoadingBar'
          };
          super.setLoadingResourceMap();
          this.startLoad();
        } //--override---


        createBgList() {
          (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
            error: Error()
          }), SoundsManager) : SoundsManager).getInstance().setBgSoundList(['sounds/BGM01', 'sounds/dragonbattlebgm-1']); //--for test

          (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
            error: Error()
          }), SoundsManager) : SoundsManager).getInstance().mute();
        } //--override---


        playSound() {
          (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
            error: Error()
          }), SoundsManager) : SoundsManager).getInstance().playBGMusic('sounds/BGM01');
        }
        /**
         * 1.如果要使用framework提供的guisystem再去override
         * 2.不使用的話,直接把abstractView component掛在要使用的GUI上就好了
         */


        initGuiSystem() {
          let node = new Node('Fish1GuisSystemView');
          this._guiSystem = node.addComponent(_crd && Fish1GuisSystemView === void 0 ? (_reportPossibleCrUseOfFish1GuisSystemView({
            error: Error()
          }), Fish1GuisSystemView) : Fish1GuisSystemView);
          director.addPersistRootNode(node); //--加到node後才會觸發onload

          super.initGuiSystem();
        }

        initUserViews() {
          let node = find('Canvas/fishNodeContainer/fishNode');
          this._fishSystem = node.addComponent(_crd && Fish1View === void 0 ? (_reportPossibleCrUseOfFish1View({
            error: Error()
          }), Fish1View) : Fish1View);
          node = find('Canvas/bulletNodeContainer/bulletNode');
          this._bulletSystem = node.addComponent(_crd && Fish1BulletView === void 0 ? (_reportPossibleCrUseOfFish1BulletView({
            error: Error()
          }), Fish1BulletView) : Fish1BulletView);
          node = find('Canvas/aniEffectNode');
          this._aniEffectViewSystem = node.addComponent(_crd && Fish1AniEffectSystemView === void 0 ? (_reportPossibleCrUseOfFish1AniEffectSystemView({
            error: Error()
          }), Fish1AniEffectSystemView) : Fish1AniEffectSystemView);
          super.initUserViews();
        }
        /*
        protected coordinatesChange(strMode:string,tableID:number):void
        {
            super.coordinatesChange(strMode,tableID);
             //--設定滑鼠感應區域(這也是邊界檢測的區域)
            this._gameLogic.setGameBoundary(20,20,20,20);
        }*/


        setCollisionSystem() {
          let gameCollisionSystemNode = new Node('gameCollisionSystemNode'); //--抽象類別不能直接實體化,一定要透過繼承,然後實體化繼承過來那個類別
          //this._gameLogic=logicNode.addComponent(FishGameMainLogic);

          this._collisionSystem = gameCollisionSystemNode.addComponent(_crd && Fish1CollisionSystem === void 0 ? (_reportPossibleCrUseOfFish1CollisionSystem({
            error: Error()
          }), Fish1CollisionSystem) : Fish1CollisionSystem);
          director.addPersistRootNode(gameCollisionSystemNode); //--加到node後才會觸發onload

          this._collisionSystem.addCollisions({
            id: (_crd && BaseCollisionType === void 0 ? (_reportPossibleCrUseOfBaseCollisionType({
              error: Error()
            }), BaseCollisionType) : BaseCollisionType).PICKUP_Collision,
            collisionBaseConstructor: _crd && FishPickUpCollisionBase === void 0 ? (_reportPossibleCrUseOfFishPickUpCollisionBase({
              error: Error()
            }), FishPickUpCollisionBase) : FishPickUpCollisionBase,
            strategyConstructor: _crd && PickUpCollisionStrategy === void 0 ? (_reportPossibleCrUseOfPickUpCollisionStrategy({
              error: Error()
            }), PickUpCollisionStrategy) : PickUpCollisionStrategy,
            strategyConstructorId: 'PickUpCollisionStrategy',
            strategyArgs: null,
            collisionBaseArgs: {
              //camera2dnodeId:'Canvas/Camera',
              camera2dnodeId: 'Canvas/CameraGUI',
              camera3dnodeId: 'Main Camera'
            }
          });

          this._collisionSystem.aryRangeHitFishType = [22, 23];
          super.setCollisionSystem(); //--20240107

          this._collisionSystem.getCollisionBaseFromId((_crd && BaseCollisionType === void 0 ? (_reportPossibleCrUseOfBaseCollisionType({
            error: Error()
          }), BaseCollisionType) : BaseCollisionType).SAT_Collision).cameraPathInfo = {
            camerabulletnodeId: 'Canvas/CameraGUI',
            camera3dnodeId: 'Main Camera'
          };
        }

        checkCollisionFrameByFrame() {
          this._collisionSystem.checkCollisionData({
            collisionKey: (_crd && BaseCollisionType === void 0 ? (_reportPossibleCrUseOfBaseCollisionType({
              error: Error()
            }), BaseCollisionType) : BaseCollisionType).SAT_Collision
          });
        }

        async beforeinit() {
          this._coordinate = new (_crd && Fish1CoordinatesFormMode === void 0 ? (_reportPossibleCrUseOfFish1CoordinatesFormMode({
            error: Error()
          }), Fish1CoordinatesFormMode) : Fish1CoordinatesFormMode)();
          await super.beforeinit();
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c90e7defe41124b515e3c371ba57f4a100e97a6c.js.map