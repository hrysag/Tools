/**
 * Created by EricHuang on 2023/10/03.
 * 
 */
import {CollisionBase,CollisionTarget,CollisionInfo} from '../../game/collision/CollisionBase';
import {fishMeshState} from '../../game/model/ModelDefinitionsBase';
import {CollisionData} from '../../game/strategy/Strategy';
import { Bullet } from '../views/bulletView/BulletDefinitions';
import {FishData} from '../../logic/views/fishView/FishData';
import { UITransform, Vec2 } from 'cc';
import { Collider2D } from 'cc';
import { PolygonCollider2D } from 'cc';
import { BuiltinBoxShape } from 'cc';
import { BoxCollider } from 'cc';
import { Vec3 } from 'cc';
import { CameraComponent } from 'cc';
import { director } from 'cc';
import { v2,v3 } from 'cc';
import { find } from 'cc';
import { Intersection2D } from 'cc';
import { geometry } from 'cc';
import { Sprite,Color,color } from 'cc';
import {log} from 'cc';

export class FishCollisionBase extends CollisionBase
{

    private _bulletCamera2dComponent:CameraComponent;

    private _camera3dComponent:CameraComponent;

    constructor(...args)
    {
        super(args[0]);

        this._camera3dComponent=null;

        this._bulletCamera2dComponent=null;
    }

    protected setCameraData():void
    {
        
        this._camera3dComponent=director.getScene().getChildByName(this._cameraPathInfo.camera3dnodeId).getComponent(CameraComponent);

        this._bulletCamera2dComponent=find(this._cameraPathInfo.camerabulletnodeId).getComponent(CameraComponent);    

    }
    
    //--檢查碰撞
    public checkCollision<T extends CollisionTarget>(t:T):any
    {
        let target:Bullet=t.target;
        
        let bulletColliders:Collider2D[]=target.collisions;
       
        let fishColliderPoint:Vec2[];

        let bulletPoints:Vec2[];

        let scBulletPoints:Vec2[];//--只要取一次就好了(螢幕坐標系)
        
        let bulletRect:Vec2[];

        let fishRect:Vec2[];

        let isCollisions:CollisionInfo=null;

        let breakFlag:boolean=false;
        
        if(target.isHitFlag)
        {
            //--穿越狀況--直接撈魚判定碰撞
            //--20240229--穿越狀況
            let type=this.getFishData(target.lockFishTarget);
                
            if(type!=-1)
            {
                isCollisions={fishDatas:[{fishSn:target.lockFishTarget,fishType:type}],bulletSn:target.id};
            }
            

        }else{

            for(let i of bulletColliders)
            {
                bulletPoints=(<PolygonCollider2D>i).worldPoints as Vec2[];
                
                scBulletPoints=[];
                
                for(let j:number=0;j<this._aryCompairs.length;j++)
                {
                    //--檢查要不要碰--
                    if(!this._aryCompairs[j].fishIsFlash && !this._aryCompairs[j].isDead && !this._aryCompairs[j].prohibit)
                    {
                        //--檢查要不要碰--
                        //if((target.isPlayerTarget && !this._aryCompairs[j].prohibit && !target.useFishingNets)
                        //){
                        for(let k:number=0;k<this._aryCompairs[j].collisionArea.length;k++)
                        {
                            
                            if(this._aryCompairs[j].fishMeshState==fishMeshState.fish2D)
                            {
                                fishColliderPoint=(<PolygonCollider2D>this._aryCompairs[j].collisionArea[k]).worldPoints as Vec2[];
                                
                                bulletRect=bulletPoints;
                                
                            }else{
                                
                                //let camera=director.getScene().getChildByName('Main Camera').getComponent(CameraComponent);
                                //---20230823-先將8個點換成螢幕坐標系,再去找min和max
                                let screenPoints:Vec3[]=[];

                                fishColliderPoint=[];
                                
                                if(this._aryCompairs[j].fishType!=21)
                                {
                                
                                    let fish3Dget2DColliderPoints=(<PolygonCollider2D>this._aryCompairs[j].collisionArea[k]).worldPoints as Vec2[];
                                    //fish3Dget2DColliderPoints,this._aryFishes[j].collisionArea[k]);

                                    //log('fish3Dget2DColliderPoints',this._aryCompairs,this._aryCompairs[j],fish3Dget2DColliderPoints);
                                    if(fish3Dget2DColliderPoints.length==4)
                                    {
                                    screenPoints[0]=this._camera3dComponent.worldToScreen(v3(fish3Dget2DColliderPoints[0].x,fish3Dget2DColliderPoints[0].y));
                                    
                                    screenPoints[1]=this._camera3dComponent.worldToScreen(v3(fish3Dget2DColliderPoints[1].x,fish3Dget2DColliderPoints[1].y));
                                    
                                    screenPoints[2]=this._camera3dComponent.worldToScreen(v3(fish3Dget2DColliderPoints[2].x,fish3Dget2DColliderPoints[2].y));
                                    
                                    screenPoints[3]=this._camera3dComponent.worldToScreen(v3(fish3Dget2DColliderPoints[3].x,fish3Dget2DColliderPoints[3].y));
                                    
                                    fishColliderPoint[0]=v2(screenPoints[0].x,screenPoints[0].y);
                                    
                                    fishColliderPoint[1]=v2(screenPoints[1].x,screenPoints[1].y);
                                    
                                    fishColliderPoint[2]=v2(screenPoints[2].x,screenPoints[2].y);
                                    
                                    fishColliderPoint[3]=v2(screenPoints[3].x,screenPoints[3].y);
                                    }  
                                    


                                }else{

                                    let shape:BuiltinBoxShape=(<BoxCollider>this._aryCompairs[j].collisionArea[k]).shape;

                                    let worldObb =shape.worldObb;

                                    let min:Vec3=new Vec3();

                                    let max:Vec3=new Vec3();

                                    (<geometry.OBB>worldObb).getBoundary(min,max);

                                    let minScreen=this._camera3dComponent.worldToScreen(min);
                                    
                                    let maxScreen=this._camera3dComponent.worldToScreen(max);

                                    //--左下(cocos左下角為(0,0))
                                    fishColliderPoint[0]=v2(minScreen.x,minScreen.y);
                                    //--右下
                                    fishColliderPoint[1]=v2(maxScreen.x,minScreen.y);
                                    //--右上
                                    fishColliderPoint[2]=v2(maxScreen.x,maxScreen.y);
                                    //--左上
                                    fishColliderPoint[3]=v2(minScreen.x,maxScreen.y);
                                    
                                    //let obbCenter=worldObb.center;
                                    
                                    //let obbHalfExtents=worldObb.halfExtents;

                                    /*
                                    let obbCorners:Vec3[]=
                                    [
                                    //-Front Bottom Left
                                    new Vec3(obbCenter.x - obbHalfExtents.x, obbCenter.y - obbHalfExtents.y, obbCenter.z - obbHalfExtents.z),
                                    //-Front Bottom Right
                                    new Vec3(obbCenter.x + obbHalfExtents.x, obbCenter.y - obbHalfExtents.y, obbCenter.z - obbHalfExtents.z),
                                    //-Front Top Left
                                    new Vec3(obbCenter.x - obbHalfExtents.x, obbCenter.y + obbHalfExtents.y, obbCenter.z - obbHalfExtents.z),
                                    //-Front Top Right
                                    new Vec3(obbCenter.x + obbHalfExtents.x, obbCenter.y + obbHalfExtents.y, obbCenter.z - obbHalfExtents.z),
                                    //-Back Bottom Left
                                    new Vec3(obbCenter.x - obbHalfExtents.x, obbCenter.y - obbHalfExtents.y, obbCenter.z + obbHalfExtents.z),
                                    //-Back Bottom Right
                                    new Vec3(obbCenter.x + obbHalfExtents.x, obbCenter.y - obbHalfExtents.y, obbCenter.z + obbHalfExtents.z),
                                    //-Back Top Left
                                    new Vec3(obbCenter.x - obbHalfExtents.x, obbCenter.y + obbHalfExtents.y, obbCenter.z + obbHalfExtents.z),
                                    //-Back Top Right
                                    new Vec3(obbCenter.x + obbHalfExtents.x, obbCenter.y + obbHalfExtents.y, obbCenter.z + obbHalfExtents.z)
                                    ];
            
                                    screenPoints[0]=camera.worldToScreen(obbCorners[0]);

                                    screenPoints[1]=camera.worldToScreen(obbCorners[1]);
                                    
                                    screenPoints[2]=camera.worldToScreen(obbCorners[2]);
                                    
                                    screenPoints[3]=camera.worldToScreen(obbCorners[3]);
                                    
                                    screenPoints[4]=camera.worldToScreen(obbCorners[4]);
                                    
                                    screenPoints[5]=camera.worldToScreen(obbCorners[5]);
                                    
                                    screenPoints[6]=camera.worldToScreen(obbCorners[6]);
                                    
                                    screenPoints[7]=camera.worldToScreen(obbCorners[7]);
                                    
                                    let minX = screenPoints[0].x;
                                    
                                    let minY = screenPoints[0].y;
                                    
                                    let maxX = screenPoints[0].x;
                                    
                                    let maxY = screenPoints[0].y;

                                    for(let corner of screenPoints)
                                    {
                                        minX = Math.min(minX, corner.x);
                                        
                                        minY = Math.min(minY, corner.y);
                                        
                                        maxX = Math.max(maxX, corner.x);
                                        
                                        maxY = Math.max(maxY, corner.y);
                                    }

                                    //--把它塞成cocos預設的逆時針順序
                                    //--cocos 採點的順序-逆時針採點-1.左下 2.右下 3.右上 4.左上(這是cocos 採點的順序)
                                    //--左下(cocos左下角為(0,0))
                                    fishColliderPoint[0]=v2(minX,minY);
                                    //--右下
                                    fishColliderPoint[1]=v2(maxX,minY);
                                    //--右上
                                    fishColliderPoint[2]=v2(maxX,maxY);
                                    //--左上
                                    fishColliderPoint[3]=v2(minX,maxY);
                                    */
                                }


                                //--test---
                                /*
                                let container:Node=find('Canvas/fishNodeContainer/fishNode');
                                let transform:UITransform=container.getComponent(UITransform);
                                let canvas=find('Canvas/Camera');
                                let cameraCanvas=canvas.getComponent(CameraComponent);
                                
                                for(let k:number=0;k<fishColliderPoint.length;k++)
                                {
                                    
                                    let wpCanvas=cameraCanvas.screenToWorld(v3(fishColliderPoint[k].x,fishColliderPoint[k].y));
                                    let spacePoint=transform.convertToNodeSpaceAR(wpCanvas);
                                
                                    let graphicNode:Node=new Node();
                                    let graphic=graphicNode.addComponent(Graphics);
                                    graphicNode.layer=Layers.Enum.UI_2D;
                                    
                                    graphic.fillColor=color(0xffffff);
                                    graphic.rect(-10,-10,20,20);
                                    graphic.fill();

                                    container.addChild(graphicNode);
                                    graphicNode.setPosition(spacePoint);

                                }*/

                                //log('check_bullet_SAT',bulletPoints);
                                //---bullet
                                if(scBulletPoints.length==0 /*&& bulletPoints.length!=0*/)
                                {

                                    //let canvasCamera=find('Canvas/Camera').getComponent(CameraComponent);
                                    //let canvasCamera=find('Canvas/CameraGUI').getComponent(CameraComponent);
                                
                                    //let wcPoint=canvasCamera.worldToScreen(v3(centerPoint.x,centerPoint.y));
                                    
                                    let wcPoint:Vec3[]=[];
                                    
                                    wcPoint[0]=this._bulletCamera2dComponent.worldToScreen(v3(bulletPoints[0].x,bulletPoints[0].y));
                                    
                                    wcPoint[1]=this._bulletCamera2dComponent.worldToScreen(v3(bulletPoints[1].x,bulletPoints[1].y));
                                    
                                    wcPoint[2]=this._bulletCamera2dComponent.worldToScreen(v3(bulletPoints[2].x,bulletPoints[2].y));
                                    
                                    wcPoint[3]=this._bulletCamera2dComponent.worldToScreen(v3(bulletPoints[3].x,bulletPoints[3].y));

                                    scBulletPoints[0]=v2(wcPoint[0].x,wcPoint[0].y);
                                    
                                    scBulletPoints[1]=v2(wcPoint[1].x,wcPoint[1].y);
                                    
                                    scBulletPoints[2]=v2(wcPoint[2].x,wcPoint[2].y);
                                    
                                    scBulletPoints[3]=v2(wcPoint[3].x,wcPoint[3].y);
                                }

                                bulletRect=scBulletPoints;
                                
                                

                            }

                            fishRect=fishColliderPoint;
                            
                            //--collider worldpoint= [new Vec2(-1, -1), new Vec2(1, -1), new Vec2(1, 1), new Vec2(-1, 1)];
                            //--逆時針採點-1.左下 2.右下 3.右上 4.左上(這是cocos 採點的順序)
                            /**
                             *  transformedMin:{x:number,y:number},
                                transformedMax:{x:number,y:number},
                                transformedLeftTop:{x:number,y:number},
                                transformedRightBottom:{x:number,y:number}, 
                                */
                            /*---演算法座標採樣順序(1234)
                                1(transformedLeftTop) 4(transformedMax)(右上)
                                |---------------------|
                                |                     |
                                |                     |
                                |---------------------|
                                2(transformedMin)     3(transformedRightBottom)
                            */
                            //--但沒差,只要能閉合就好了
                            
                            
                            //if(this.getCollision({a:bulletRect,b:fishRect}))
                            //log('this._strategyAlgorithm',this._strategyAlgorithm);
                            if(fishRect.length>0 && bulletRect.length>0)
                            {
                                if(this._strategyAlgorithm.getCollision({a:bulletRect,b:fishRect}))
                                {
                                    if(this._strategyAlgorithm.getCollision({a:fishRect,b:bulletRect}))
                                    {
                                        //---碰撞成立,後續過濾資料內容
                                        //--PS-只要一個被撞到就直接break
                                        //log('SAT got Collision!!!');

                                        isCollisions=this.prefareCollisionData(this._aryCompairs[j],target);
                                        
                                        breakFlag=true;

                                        break;
                                        /*
                                        if(target.lockFishTarget!=-1)
                                        {
                        
                                            if(target.lockFishTarget==this._aryCompairs[j].id)
                                            {

                                                //log("特殊碰撞成立::::::");
                                                isCollisions={fishDatas:[{fishSn:this._aryCompairs[j].id,fishType:this._aryCompairs[j].fishType}],bulletSn:target.id};
                                                
                                                //breakFlag=true;
                                                
                                                break;

                                            }
                                        
                                        }else if(target.isFree)
                                        {
                                            //--auto ban fish
                                            let f:boolean=this._aryBannedFishType.every(num=>num!==this._aryCompairs[j].fishType);
                                            
                                            if(!f)
                                            {
                                                isCollisions={fishDatas:[{fishSn:this._aryCompairs[j].id,fishType:this._aryCompairs[j].fishType}],bulletSn:target.id};
                                                
                                                //breakFlag=true;
                                                
                                                break;
                                            }


                                        }else{
                                        
                                            isCollisions={fishDatas:[{fishSn:this._aryCompairs[j].id,fishType:this._aryCompairs[j].fishType}],bulletSn:target.id};
                                            
                                            break;
                                        }*/



                                    }else{

                                        if(this.finalMissCheck(bulletRect,fishRect))
                                        {
                                            
                                            isCollisions=this.prefareCollisionData(this._aryCompairs[j],target);
                                            
                                            breakFlag=true;

                                            break;
                                        }

                                    }


                                }else{
                                    
                                    //--final check 1---
                                    if(this.finalMissCheck(bulletRect,fishRect))
                                    {
                                        
                                        isCollisions=this.prefareCollisionData(this._aryCompairs[j],target);
                                        
                                        breakFlag=true;
                                        
                                        break;
                                    }

                                }
                            }

                        }

                        //}
                        
                    }

                    if(breakFlag)
                    {
                        break;
                    }
                        
                }
            
            }


        }

        

        return isCollisions;


    }

    private getFishData(id:number):number
    {
        let type:number=-1;

        for(let i:number=0;i<this._aryCompairs.length;i++)
        {
            if(this._aryCompairs[i].id==id)
            {
                type=this._aryCompairs[i].fishType;

                break;
            }
        }

        return type
    }


    private prefareCollisionData(fd:FishData,bullet:Bullet):CollisionInfo
    {

        let collisionInfo:CollisionInfo=null;
        
        if(bullet.lockFishTarget!=-1)
        {

            if(bullet.lockFishTarget==fd.id)
            {

                //log("特殊碰撞成立::::::");
                collisionInfo={fishDatas:[{fishSn:fd.id,fishType:fd.fishType}],bulletSn:bullet.id};
                
                //breakFlag=true;
                
            }else if(bullet.isHitFlag)
            {
                //--20240229--穿越狀況
                let type=this.getFishData(bullet.lockFishTarget);
                
                if(type!=-1)
                {
                    collisionInfo={fishDatas:[{fishSn:bullet.lockFishTarget,fishType:type}],bulletSn:bullet.id};
                }

            }


        
        }else if(bullet.isFree)
        {
            //--auto ban fish
            let f:boolean=this._aryBannedFishType.every(num=>num!==fd.fishType);
            
            if(!f)
            {
                collisionInfo={fishDatas:[{fishSn:fd.id,fishType:fd.fishType}],bulletSn:bullet.id};
                
                //breakFlag=true;
                
            }


        }else{
        
            collisionInfo={fishDatas:[{fishSn:fd.id,fishType:fd.fishType}],bulletSn:bullet.id};
              
        }

        return collisionInfo;
    }




    //-漏網之魚最終檢查
    
    //private finalMissCheck(bullet:Bullet,fish:FishData,bulletRect:Vec2[],fishRect:Vec2[]):boolean
    private finalMissCheck(bulletRect:Vec2[],fishRect:Vec2[]):boolean
    {
        let finalCollisionResult:boolean=false;

        for(let i:number=0;i<bulletRect.length;i++)
        {
            if(Intersection2D.pointInPolygon(bulletRect[i],fishRect))
            {
                finalCollisionResult=true;
                
                break;
            }
        }
        

        return finalCollisionResult;
    }
} 
