/**
 * Created by EricHuang on 2023/9/23.
 */
import {FishGameMain} from '../framework/logic/FishGameMain';
import {gameMainAbstractView} from '../framework/game/GameMainAbstractView';
import {Fish1VM} from './vm/Fish1VM';
import {Fish1Model} from './model/Fish1Model';
import {Fish1Connect} from './model/connect/Fish1Connect';
import {Fish1ConnectStrategy} from './model/connect/Fish1ConnectStrategy';
import {Fish1BulletView} from './views/bulletView/Fish1BulletView';
import {Fish1View} from './views/fishView/Fish1View';
import {Fish1GuisSystemView} from './views/guiSystemView/Fish1GuisSystemView';
import {Fish1AniEffectSystemView} from './views/aniEffectView/Fish1AniEffectSystemView';
import {GameCoordinateMode} from '../framework/game/coordinates/CoordinateDefinitions';
import {Fish1CoordinatesFormMode} from './beforeinit/coordinates/Fish1CoordinatesFormMode';
import {Fish1GameMainLogic} from './gameMainLogic/Fish1GameMainLogic';
import {Fish1CollisionSystem} from './collision/Fish1CollisionSystem';
import {FishPickUpCollisionBase} from '../framework/logic/collision/FishPickUpCollisionBase';
import {BaseCollisionType} from '../framework/game/collision/CollisionBase';
import {PickUpCollisionStrategy} from '../framework/logic/collision/fishCollisionStrategy/PickUpCollisionStrategy';
import { director,_decorator,Node,find,PhysicsSystem,PhysicsSystem2D } from 'cc';
import { CocosGameSetting } from '../framework/utils/CocosGameSetting';
import { SoundsManager } from '../framework/logic/audio/SoundsManager';
import {ResizeTool} from '../framework/logic/resize/ResizeTool';
import { profiler } from 'cc';


const {ccclass,property} = _decorator;

@ccclass('Fish1GameMain')
//@fishGameMain(Fish1View,Fish1BulletView,'Canvas/fishNodeContainer/fishNode','Canvas/bulletNodeContainer/bulletNode')
@gameMainAbstractView(Fish1VM,Fish1Model,Fish1Connect,Fish1ConnectStrategy)

export class Fish1GameMain extends FishGameMain
{
    constructor()
    {
        super();

        this._classId='Fish1GameMain';
        //--測試模式
        this.setLocalDebugMode(true);
        
        this._gameType=38003;

        //profiler.hideStats();//--關閉相關測試面板
      
    }

    
    protected async onLoad():Promise<void>
    {
        
        super.onLoad();

        PhysicsSystem.instance.enable=false;

        PhysicsSystem2D.instance.enable=false;

        this._useGuiSystem=true;

        this.gameCoordinatesMode=GameCoordinateMode.GameViewMode_Four_in_one;
        
        //========================================
      
        //--到時候要換掉FishGameMainLogic,先暫時這樣2023-10-01
        
        let logicNode:Node=new Node('gameMainLogicNode');

        //--抽象類別不能直接實體化,一定要透過繼承,然後實體化繼承過來那個類別
        //this._gameLogic=logicNode.addComponent(FishGameMainLogic);
        this._gameLogic=logicNode.addComponent(Fish1GameMainLogic);
        
        director.addPersistRootNode(logicNode);//--加到node後才會觸發onload
            

    }

    protected start():void
    {
        ResizeTool.getInstance().resize();

        
        // 範例如何紀錄『射擊種類』
        /*
        const shootAnal = util.analytic.ShootTypeAnalytics;
        shootAnal.start(1); // 每一分鐘採樣一次
        shootAnal.accumulate('auto'); // 每次射一發自動射擊就紀錄一次
        shootAnal.accumulate('normal'); // 每次射一發手動射擊就紀錄一次
        shootAnal.accumulate('lock'); // 每次射一發鎖定射擊就紀錄一次
        shootAnal.accumulate('lock'); // 第二次鎖定射擊
        */
        // 假設1分鐘到，就會送出1次自動、1次手動、2次鎖定。 然後清空。
    }



    //--寫入laoding資料--override-
    protected setLoadingResourceMap():void
    {
       this.loadingQuene=[
        //--bundleId=資料夾名稱(or 路徑),prefabId:物件名稱
        //{lzmaId:'pathCommonMiddle'}
        //---json
        {bundleId:'GameResources',lzmaId:'pathCommon'},
        {bundleId:'GameResources',lzmaId:'pathCommonMiddle'},
        {bundleId:'GameResources',lzmaId:'pathCommonSp'},//--特殊路徑(召喚)
        {bundleId:'GameResources',lzmaId:'pathCommonBoss'},//--特殊路徑(boss)
        //--這邊就是採用多語系的方式針對語系拉下來-直接拿plist就好了
        //{bundleId:'GameResources',spriteFrameId:'lang/en/fishHunter_en/tx_dragon'},
        //--PS-要注意在stage上面或是prefab上面不能引用該素材,否則該素材會被整張拉下來
        {bundleId:'Language_'+CocosGameSetting.Game_Lang,plist:'fishHunter_'+CocosGameSetting.Game_Lang},
        {bundleId:'GameResources',plist:'prefab/textures/fishHunterGui'},
        {bundleId:'GameResources',plist:'prefab/textures/fishHunterPopup'},
        {bundleId:'GameResources',plist:'prefab/textures/fishHunterSystemGUI'},
        {bundleId:'GameResources',plist:'prefab/textures/fishHunterLobby'},
        {bundleId:'GameResources',plist:'prefab/textures/fishHunterDragon'},
        {bundleId:'GameResources',plist:'prefab/textures/fishHunterFish'},
        //------audios----
        {bundleId:'GameResources',audioId:'sounds/BGM01'},
        {bundleId:'GameResources',audioId:'sounds/bigcoin'},
        {bundleId:'GameResources',audioId:'sounds/bigfishkill-1'},
        {bundleId:'GameResources',audioId:'sounds/bigfishkill-2'},
        {bundleId:'GameResources',audioId:'sounds/button'},
        {bundleId:'GameResources',audioId:'sounds/coin'},
        {bundleId:'GameResources',audioId:'sounds/coinscollect'},
        {bundleId:'GameResources',audioId:'sounds/dragonattack'},
        {bundleId:'GameResources',audioId:'sounds/dragonbattlebgm-1'},
        {bundleId:'GameResources',audioId:'sounds/dragonflame'},
        {bundleId:'GameResources',audioId:'sounds/dragonkilled'},
        {bundleId:'GameResources',audioId:'sounds/fire1'},
        {bundleId:'GameResources',audioId:'sounds/fire2'},
        {bundleId:'GameResources',audioId:'sounds/fire3'},
        {bundleId:'GameResources',audioId:'sounds/fire4'},
        {bundleId:'GameResources',audioId:'sounds/fire5'},
        {bundleId:'GameResources',audioId:'sounds/ice'},
        {bundleId:'GameResources',audioId:'sounds/lightning'},
        {bundleId:'GameResources',audioId:'sounds/moneydrop'},
        {bundleId:'GameResources',audioId:'sounds/summon'},
        {bundleId:'GameResources',audioId:'sounds/switch_weapon'},
        
        //--spriteframe
        {bundleId:'GameResources',texture2dId:'bg/bg_1/texture'},
        {bundleId:'GameResources',texture2dId:'bg/bg_2/texture'},
        //{bundleId:'GameResources',textureImageAssetId:'bg/bg_1'},//--要拿ImageAsset
        
        {bundleId:'GameResources',spriteFrameId:'bg/fishHunterFrozen/spriteFrame'},
        
        //--texture
        {bundleId:'GameResources',texture2dId:'prefab/textures/lightning/texture'},

        //--gui test for webview close btn
        //{bundleId:'GameResources',prefabId:'prefab/gui/closeBtn'},
        //--gui
        {bundleId:'GameResources',prefabId:'prefab/gui/creditExchange'},
        {bundleId:'GameResources',prefabId:'prefab/gui/bgMask'},
        {bundleId:'GameResources',prefabId:'prefab/gui/lobby'},
        {bundleId:'GameResources',prefabId:'prefab/gui/settingBar'},
        {bundleId:'GameResources',prefabId:'prefab/gui/settingBtn'},
        {bundleId:'GameResources',prefabId:'prefab/gui/lockBtn'},
        {bundleId:'GameResources',prefabId:'prefab/gui/autoBtn'},
        {bundleId:'GameResources',prefabId:'prefab/gui/propBtns'},
        {bundleId:'GameResources',prefabId:'prefab/gui/autoShotSetting'},
        {bundleId:'GameResources',prefabId:'prefab/gui/systemMessage'},
        {bundleId:'GameResources',prefabId:'prefab/gui/bottomBar'},
        {bundleId:'GameResources',prefabId:'prefab/gui/info'},
        {bundleId:'GameResources',prefabId:'prefab/gui/webviewbg'},
        //--effect
        {bundleId:'GameResources',prefabId:'prefab/aniEffect/titleGD'},
        {bundleId:'GameResources',prefabId:'prefab/aniEffect/fish_24_opening'},
        {bundleId:'GameResources',prefabId:'prefab/aniEffect/nuclearBombDragon'},
        {bundleId:'GameResources',prefabId:'prefab/aniEffect/aniKillDragonTitle'},
        {bundleId:'GameResources',prefabId:'prefab/aniEffect/particleCoins'},
        {bundleId:'GameResources',prefabId:'prefab/aniEffect/win'},
        {bundleId:'GameResources',prefabId:'prefab/aniEffect/wave'},
        {bundleId:'GameResources',prefabId:'prefab/aniEffect/powerUp'},
        {bundleId:'GameResources',prefabId:'prefab/aniEffect/lightningPoint'},
        {bundleId:'GameResources',prefabId:'prefab/aniEffect/giftbomb'},
        {bundleId:'GameResources',prefabId:'prefab/aniEffect/fishDeath'},
        {bundleId:'GameResources',prefabId:'prefab/aniEffect/bigCoin'},
        {bundleId:'GameResources',prefabId:'prefab/aniEffect/itemCallFX'},
        {bundleId:'GameResources',prefabId:'prefab/aniEffect/itemCallSymbol'},
        {bundleId:'GameResources',prefabId:'prefab/aniEffect/itemCallTowerFx'},
        {bundleId:'GameResources',prefabId:'prefab/aniEffect/itemCrazyTowerFx'},
        //--bullet
        {bundleId:'GameResources',prefabId:'prefab/bullet/bullet1'},
        {bundleId:'GameResources',prefabId:'prefab/bullet/bullet1_crazy'},
        {bundleId:'GameResources',prefabId:'prefab/bullet/bullet2'},
        {bundleId:'GameResources',prefabId:'prefab/bullet/bullet2_crazy'},
        {bundleId:'GameResources',prefabId:'prefab/bullet/bullet3'},
        {bundleId:'GameResources',prefabId:'prefab/bullet/bullet3_crazy'},
        {bundleId:'GameResources',prefabId:'prefab/bullet/bullet4'},
        {bundleId:'GameResources',prefabId:'prefab/bullet/bullet4_crazy'},
        {bundleId:'GameResources',prefabId:'prefab/bullet/bullet5'},
        {bundleId:'GameResources',prefabId:'prefab/bullet/bullet5_crazy'},
        //--fish
        {bundleId:'GameResources',prefabId:'prefab/fish/3d/fish_23'},
        {bundleId:'GameResources',prefabId:'prefab/fish/3d/fish_24'},
        {bundleId:'GameResources',prefabId:'prefab/fish/3d/fish_16'},
        {bundleId:'GameResources',prefabId:'prefab/fish/3d/fish_17'},
        {bundleId:'GameResources',prefabId:'prefab/fish/3d/fish_18'},
        {bundleId:'GameResources',prefabId:'prefab/fish/3d/fish_19'},
        {bundleId:'GameResources',prefabId:'prefab/fish/3d/fish_20'},
        {bundleId:'GameResources',prefabId:'prefab/fish/3d/fish_21'},
        {bundleId:'GameResources',prefabId:'prefab/fish/3d/fish_22'},
        {bundleId:'GameResources',prefabId:'prefab/fish/fish_01'},
        {bundleId:'GameResources',prefabId:'prefab/fish/fish_02'},
        {bundleId:'GameResources',prefabId:'prefab/fish/fish_03'},
        {bundleId:'GameResources',prefabId:'prefab/fish/fish_04'},
        {bundleId:'GameResources',prefabId:'prefab/fish/fish_05'},
        {bundleId:'GameResources',prefabId:'prefab/fish/fish_06'},
        {bundleId:'GameResources',prefabId:'prefab/fish/fish_07'},
        {bundleId:'GameResources',prefabId:'prefab/fish/fish_08'},
        {bundleId:'GameResources',prefabId:'prefab/fish/fish_09'},
        {bundleId:'GameResources',prefabId:'prefab/fish/fish_10'},
        {bundleId:'GameResources',prefabId:'prefab/fish/fish_11'},
        {bundleId:'GameResources',prefabId:'prefab/fish/fish_12'},
        {bundleId:'GameResources',prefabId:'prefab/fish/fish_13'},
        {bundleId:'GameResources',prefabId:'prefab/fish/fish_14'},
        {bundleId:'GameResources',prefabId:'prefab/fish/fish_15'}
        //{bundleId:'GameResources',jsonId:'type1'}
        //--挖操~要直接用spriteFrame這個物件,不是上層的那個圖片texture
        //{bundleId:'testLoading',spriteFrameId:'btn_menu_exit/spriteFrame'},
        //{bundleId:'testLoading',texture2dId:'pic_gun_base_01/texture'}
        ];

        //--setting for loadingpage
        this.loadingPageInfo={loadingNodeId:'Canvas/LoadingBar',loadingLabelId:'LoadingBar'};

        super.setLoadingResourceMap();

        this.startLoad();
    }

    //--override---
    protected createBgList():void
    {
        SoundsManager.getInstance().setBgSoundList(['sounds/BGM01','sounds/dragonbattlebgm-1']);

        //--for test
        SoundsManager.getInstance().mute();
    }

    //--override---
    protected playSound():void
    {
        SoundsManager.getInstance().playBGMusic('sounds/BGM01');
        
    }

    /**
     * 1.如果要使用framework提供的guisystem再去override
     * 2.不使用的話,直接把abstractView component掛在要使用的GUI上就好了
     */
    protected initGuiSystem():void
    {
        
        let node:Node=new Node('Fish1GuisSystemView');
        
        this._guiSystem=node.addComponent(Fish1GuisSystemView);
        
        director.addPersistRootNode(node);//--加到node後才會觸發onload

        super.initGuiSystem();
  
    }

    protected initUserViews():void
    {
        
        let node:Node=find('Canvas/fishNodeContainer/fishNode');

        this._fishSystem=node.addComponent(Fish1View);

        node=find('Canvas/bulletNodeContainer/bulletNode');

        this._bulletSystem=node.addComponent(Fish1BulletView);

        node=find('Canvas/aniEffectNode');
          
        this._aniEffectViewSystem=node.addComponent(Fish1AniEffectSystemView);

        super.initUserViews();    
    }

    /*
    protected coordinatesChange(strMode:string,tableID:number):void
    {
        super.coordinatesChange(strMode,tableID);

        //--設定滑鼠感應區域(這也是邊界檢測的區域)
        this._gameLogic.setGameBoundary(20,20,20,20);
    }*/


    protected setCollisionSystem():void
    {
        let gameCollisionSystemNode:Node=new Node('gameCollisionSystemNode');

        //--抽象類別不能直接實體化,一定要透過繼承,然後實體化繼承過來那個類別
        //this._gameLogic=logicNode.addComponent(FishGameMainLogic);
        this._collisionSystem=gameCollisionSystemNode.addComponent(Fish1CollisionSystem);
        
        director.addPersistRootNode(gameCollisionSystemNode);//--加到node後才會觸發onload
        
        this._collisionSystem.addCollisions({
            
            id:BaseCollisionType.PICKUP_Collision,
            collisionBaseConstructor:FishPickUpCollisionBase,
            strategyConstructor:PickUpCollisionStrategy,
            strategyConstructorId:'PickUpCollisionStrategy',
            strategyArgs:null,
            collisionBaseArgs:
            {
                //camera2dnodeId:'Canvas/Camera',
                camera2dnodeId:'Canvas/CameraGUI',
                camera3dnodeId:'Main Camera'
            }
        });

        (<Fish1CollisionSystem>this._collisionSystem).aryRangeHitFishType=[22,23];

        super.setCollisionSystem();

        //--20240107
        this._collisionSystem.getCollisionBaseFromId(BaseCollisionType.SAT_Collision).cameraPathInfo=
        {
            camerabulletnodeId:'Canvas/CameraGUI',
            camera3dnodeId:'Main Camera'
        };
    }

    protected checkCollisionFrameByFrame():any
    {
        (<Fish1CollisionSystem>this._collisionSystem).checkCollisionData({collisionKey:BaseCollisionType.SAT_Collision});
    }


    protected async beforeinit():Promise<void>
    {
        this._coordinate=new Fish1CoordinatesFormMode();
        
        await super.beforeinit(); 
    }

   

    
}

