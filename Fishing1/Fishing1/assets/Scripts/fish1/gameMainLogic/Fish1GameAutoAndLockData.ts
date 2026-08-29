/**
 * Created by EricHuang on 2023/12/08.
 */
import {FishGameAutoAndLockData} from '../../framework/logic/gameLogic/FishGameAutoAndLockData';
import { FishData } from '../../framework/logic/views/fishView/FishData';
import {GameUtils} from '../../framework/utils/GameUtils';
import { GameViewMediatorUser, GameViewMediatorUserDataKey} from "../../framework/logic/gameLogic/FishGameLogicDefinitions";
import { AREA_BOUNDARY } from "../../framework/game/mouseBehavior/MouseBehaviorDefinitionsBase";
import {UITransform, Vec3,log} from 'cc';
import {BuiltinBoxShape} from 'cc';
import {BoxCollider} from 'cc';


export class Fish1GameAutoAndLockData extends FishGameAutoAndLockData
{
    constructor()
    {
        super();
    }



    //----直接拿龍頭
    protected spFishSetLockFishBullet(f:FishData,isPlayer:boolean):{position:{x:number,y:number},sp:number,useBullet:boolean,previousTarget:number}
    {
        let p:{position:{x:number,y:number},sp:number,useBullet:boolean,previousTarget:number}=null;


        let colliders=f.collisionArea;

        let shape:BuiltinBoxShape=(<BoxCollider>colliders[6]).shape;

        let worldobb=shape.worldObb;

        //let worldPos:Vec3=this.getCanvasWorldPosition(f.fishMeshState,worldobb.center);
        log('check__sceneCameraNode',this._sceneCameraNode,'_canvasCameraNode',this._canvasCameraNode);

        let worldPos:Vec3=GameUtils.cover3dor2dToWorldPos(this._sceneCameraNode,worldobb.center,this._canvasCameraNode);
        
        let localPos:Vec3=this._mouseNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);

        if(isPlayer)
        {
            if(localPos.x<=AREA_BOUNDARY.w && localPos.x>AREA_BOUNDARY.x)
            {
                if(localPos.y<=AREA_BOUNDARY.h && localPos.y>AREA_BOUNDARY.y)
                {
                    //--這邊給world座標(滑鼠也是送world pos)
                    //-{pos:Vec3,reLockTarget:number,lockFishType:number}
                   
                    p={position:worldPos,sp:0,useBullet:false,previousTarget:0};
    
                }
    
            }

        }else{
            
            /**
             * 20240326
             * 其他玩家的子彈依然給予產出,(回收交給玩家自己來做)
             * 其他玩家只需接收_refundBullets的資料來進行刪除
             * 避免在某些尷尬的狀況吻合出界(自己),但是在其他玩家卻是沒出界而擊發的情況
             */
             p={position:worldPos,sp:0,useBullet:false,previousTarget:0};


        }

        return p;
    }


    protected spFishupdateLockBullets(f:FishData,bulletId:number,isPlayer:boolean):number[]
    {
        let destoryData:number[]=[];
        
        let colliders=f.collisionArea;

        let shape:BuiltinBoxShape=(<BoxCollider>colliders[6]).shape;

        let worldobb=shape.worldObb;

        //let worldPos:Vec3=this.getCanvasWorldPosition(f.fishMeshState,worldobb.center);
        let worldPos:Vec3=GameUtils.cover3dor2dToWorldPos(this._sceneCameraNode,worldobb.center,this._canvasCameraNode);

        let localPos:Vec3=this._mouseNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);

        let rp:Vec3=this._bulletNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
        
        //--要判斷是不是玩家本人
        if(isPlayer)
        {
            
            if(localPos.x<=AREA_BOUNDARY.w && localPos.x>AREA_BOUNDARY.x)
            {
                if(localPos.y<=AREA_BOUNDARY.h && localPos.y>AREA_BOUNDARY.y)
                {
                    
                    //let rp:Vec3=this._bulletNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
    
                    //--要補
                    //this._bulletsSystem.resetEndPositionAndFishTargetId(rp,this._aryLockFishBullets[i].lockBullets[j]);
                    this._view.getDataFromgameMediator(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_resetEndPositionAndFishTargetId,
                    {
                        pos:rp,
    
                        id:bulletId,
                        
                        lockFishId:f.id
                    });
    
                }else{
    
                    destoryData.push(bulletId);
                }

            }else{

                destoryData.push(bulletId);

            }
       

        }else{

            //destoryData.push(bulletId);
            /**
             * 20240326
             * 其他玩家的子彈依然給予產出,(回收交給玩家自己來做)
             * 其他玩家只需接收_refundBullets的資料來進行刪除
             * 避免在某些尷尬的狀況吻合出界(自己),但是在其他玩家卻是沒出界而擊發的情況
             */
            this._view.getDataFromgameMediator(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_resetEndPositionAndFishTargetId,
            {
                pos:rp,

                id:bulletId,
                
                lockFishId:f.id
            });
        }

        
        return destoryData;
    }


}