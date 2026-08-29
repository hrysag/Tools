/**
 * Created by EricHuang on 2023/9/17.
 * 
 */
import {CollisionData,IfCollisionStrategy} from '../strategy/Strategy';
import {AbstractView} from '../../../framework/abstract/mvvm/AbstractView';
import {FishData} from '../../logic/views/fishView/FishData';
import {log} from 'cc';

//import {GameViewMediatorUserDataKey,GameViewMediatorUser} from '../../../framework/logic/gameLogic/FishGameLogicDefinitions';
export interface IfCollisionSystemBase
{
   
    checkCollision(collisionData?:CollisionTarget):Promise<CollisionInfo>
  
    setMapUseCollision(classId:string,collisionKey:number):void
    
    //--set collisionData--20231016
    addCollisions(collisionDefinition:InitCollision):void


}

export interface IfCollisonBase
{
    //setStrategyAlgorithm<T extends new ()=>IfCollisionStrategy>(value:T):void
    setStrategyAlgorithm<T extends IfCollisionStrategy>(value:T):void
    checkCollision<T extends CollisionTarget>(t:T):any
}

//--要比較的資料
export type CollisionTarget=
{
    collisionKey?:string,//--放BaseCollisionType
    target?:any,
    otherCompairs?:any
}

//--碰撞檢查return的資料
export type CollisionInfo=
{
    //--可容許一彈多魚
    isPlayer?:boolean,     
    fishDatas?:{fishSn:number,fishType:number}[];
    bulletSn?:number    
}

export type InitCollision=
{
    id:string,//--collision id
    collisionBaseConstructor: new (...args:any) => CollisionBase,
    strategyConstructor: new (...args: any) => IfCollisionStrategy,
    /**
     * 20240328-在cocos creator發布選項中,如果將<調試模式>打開,
     * 在build-config-for-cicd.json裡面的debug屬性=true
     * uglifyjs將不會介入作混淆縮排的動作.此時的js輸出會是保留function name的型態
     * 但是正式發布時debug的屬性=false時,uglifyjs將介入作混淆縮排的動作,
     * function name將會被拿掉(外層是用一個object包覆住).
     * 所以取constructor.name會出現你意想不到的名稱
     */
    strategyConstructorId?:string,
    strategyArgs?:any[],
    collisionBaseArgs?:any  
}

export enum CollisionKey
{
    SELECTION=-1,
    BULLET_ACTION_PREFAB=0,
    BULLET_ACTION_DYNAMIC=1
}

export enum BaseCollisionType
{
    SAT_Collision='SAT_Collision',
    PICKUP_Collision='PICKUP_Collision'//--選取
}


export class CollisionStrategyInstanceSingleton 
{
    private static instances: { [key: string]: any } = {};

    static getInstance<T>(key: string, constructor: () => T): T {
    if (!this.instances[key]) {
        this.instances[key] = constructor();
    }
    return this.instances[key];
    }
}

export abstract class CollisionSystemBase extends AbstractView implements IfCollisionSystemBase
{
    protected _canUpdate:boolean;

    //--_mapCollision/_mapStrategyAlgorithm這兩個key要對起來
    //--這個放實體化的
    protected _mapCollision:{[key:string]:CollisionBase};

    protected _mapStrategy:{[key:string]:IfCollisionStrategy};

    //protected _class2constructorMap:{[key:string]:new ()=>CollisionBase};//-映射需要實體化的class
    
  
    
    /**
     * 用來set要使用_mapCollision中哪一個碰撞演算法
     * 當中的key就是_mapCollision裡面的key-
     * 當中的number[]就是bullet裡面的systemID-
     * ex:BulletActionType.BULLET_ACTION_PREFAB
     * 
     * 也就是說有可能會有多個不同的bullet的systemID共用同一個演算法
     */
    protected _mapUseCollision:{[key:string]:number[]};

    protected _aryBannedFishType:number[];
    

    set canUpdate(value:boolean)
    {
        this._canUpdate=value;
    }

    get canUpdate():boolean
    {
        return this._canUpdate;
    }

    //--auto ban or special situation should ban
    //--一開始就會被設定
    set aryBannedFishType(value:number[])
    {
        this._aryBannedFishType=value;
    }

    constructor()
    {
        super();
        
        this._mapCollision={};

        this._mapStrategy={};

        //this._class2constructorMap={};
        
        //this._strategy2constructorMap={};

        this._mapUseCollision={};
        
        //this.setCollisions();
    }

    /**
     * 
     * @param classId BaseCollisionType--演算法的檢查類型
     * @param collisionKey ---子彈的類型(後面改成collisionKey)
     */
    public setMapUseCollision(classId:string,collisionKey:number):void
    {
        if(!this._mapUseCollision[classId])
        {
            this._mapUseCollision[classId]=[];
        }

        this._mapUseCollision[classId].push(collisionKey);

    }

    //--set collisionData--20231016
    public addCollisions(collisionDefinition:InitCollision):void
    {
        const { id, collisionBaseConstructor, strategyConstructor,strategyConstructorId ,strategyArgs,collisionBaseArgs} = collisionDefinition;
        
        log('addCollisions',collisionDefinition);
        
        if(!this._mapCollision[id])
        {
            /**
             * 20240328-在cocos creator發布選項中,如果將<調試模式>打開,
             * 在build-config-for-cicd.json裡面的debug屬性=true
             * uglifyjs將不會介入作混淆縮排的動作.此時的js輸出會是保留function name的型態
             * 但是正式發布時debug的屬性=false時,uglifyjs將介入作混淆縮排的動作,
             * function name將會被拿掉(外層是用一個object包覆住).
             * 所以取constructor.name會出現你意想不到的名稱
             */
            //--演算法
            //const classKey = strategyConstructor.name;
            const classKey = strategyConstructorId;

            if (!this._mapStrategy[classKey]) 
            {
                this._mapStrategy[classKey] = CollisionStrategyInstanceSingleton.getInstance(classKey, () => new strategyConstructor(...(strategyArgs || [])));
            }

            //log('check_Collision@@',classKey,collisionDefinition,this._mapStrategy[classKey],this._mapStrategy);
            
            this._mapCollision[id] = new collisionBaseConstructor(this._mapStrategy[classKey],collisionBaseArgs);
            
        
        }else{
            
            log(`collision with ID ${id} already exists and cannot be overwritten.`);
        }

    }

    //--20240107--
    public getCollisionBaseFromId(value:string):CollisionBase
    {
        return this._mapCollision[value];
    }
    
    
    abstract checkCollision(collisionData?:CollisionTarget):Promise<CollisionInfo>


    
    protected getCollision(id:number):CollisionBase
    {
        let index:string=this.getIdByClassName(id);
        
        return  this._mapCollision[index];
    }

    protected getIdByClassName(id:number):string
    {
        let r:string="";
        
        for(let i in this._mapUseCollision)
        {
            for(let j of this._mapUseCollision[i])
            {
                if(j==id)
                {
                    r=i;
                    break;
                }
            }
        }

        return r;

    }


}


export abstract class CollisionBase implements IfCollisonBase
{
    protected _strategyAlgorithm:IfCollisionStrategy;

    protected _aryBannedFishType:number[];//-特殊禁止打擊的魚auto ban

    protected _aryCompairs:FishData[];

    //--其他要轉換座標的攝影機
    /*
    protected _cameraPathInfo:{
        mainCamera:string,
        others:any[]
    };
    */
    protected _cameraPathInfo:{[key:string]:string};

    set aryBannedFishType(value:number[])
    {
        this._aryBannedFishType=value;
    }

    set aryCompairs(value:any[])
    {
        this._aryCompairs=value;

        //log('set_aryCompairs',this._aryCompairs);
    }


    //--20240107--
    set cameraPathInfo(value:{[key:string]:string})
    {
        this._cameraPathInfo=value;

        this.setCameraData();
    }


    protected setCameraData():void
    {

    }
 

    constructor(...args)
    {
        this._aryCompairs=[];

        this._aryBannedFishType=[];
        //---要確認一下--
        //log('check_args',args);
        this._strategyAlgorithm=args[0];
    }

    //--塞入核心演算
    //public setStrategyAlgorithm<T extends new ()=>IfCollisionStrategy>(value:T):void
    public setStrategyAlgorithm<T extends IfCollisionStrategy>(value:T):void
    {
        this._strategyAlgorithm=value;
    }

    //--檢查碰撞
    public checkCollision<T extends CollisionTarget>(t:T):any
    {

    }
}