/**
 * Created by EricHuang on 2023/10/17.
 * 
 */
import {CollisionBase,CollisionTarget,CollisionInfo} from '../../game/collision/CollisionBase';
import {fishMeshState} from '../../game/model/ModelDefinitionsBase';
import { Bullet } from '../views/bulletView/BulletDefinitions';
import {CollisionData} from '../../game/strategy/Strategy';
import { Collider2D } from 'cc';
import { PolygonCollider2D } from 'cc';
import { BuiltinBoxShape } from 'cc';
import { BoxCollider } from 'cc';
import { Vec2 } from 'cc';
import { director } from 'cc';
import { CameraComponent } from 'cc';
import { v2,v3 } from 'cc';
import { find } from 'cc';
import { geometry } from 'cc';
import { Vec3 } from 'cc';
import { Intersection2D } from 'cc';
import {log} from 'cc';

export class FishPickUpCollisionBase extends CollisionBase
{
    

    private _canvasCamera2dComponent:CameraComponent;

    private _camera3dComponent:CameraComponent;

    constructor(...args)
    {
        super(args[0]);

        this._canvasCamera2dComponent=find(args[1].camera2dnodeId).getComponent(CameraComponent);

        this._camera3dComponent=director.getScene().getChildByName(args[1].camera3dnodeId).getComponent(CameraComponent);

        log('check_FishPickUpCollisionBase',args,this._canvasCamera2dComponent,this._camera3dComponent);


    }

    //--檢查碰撞--送座標進來
    public checkCollision<T extends CollisionTarget>(t:T):any
    {
        //let target:Bullet=t.target;
        
        //let bulletColliders:Collider2D[]=target.collisions;
    
        let fishColliderPoint:Vec2[];
    
        let bulletRect:Vec2[];

        let fishRect:Vec2[];

        let isCollisions:CollisionInfo=null;

        

        let pointTarget:Vec2=v2(t.target.x,t.target.y);//--送出來的座標已經是canvas的world position

        log('check_checkCollision_value',t,pointTarget);

        let checkCollisionData:CollisionData;

        let ray:geometry.Ray=null;

        let f:boolean=false;

        for(let i:number=0;i<this._aryCompairs.length;i++)
        {
            if(!this._aryCompairs[i].fishIsFlash && !this._aryCompairs[i].isDead && !this._aryCompairs[i].prohibit)
            {

                //-https://docs.cocos.com/creator/api/zh/namespace/geometry?id=intersect
                //-https://docs.cocos.com/creator/api/zh/class/Intersection2D?id=pointInPolygon

                for(let k:number=0;k<this._aryCompairs[i].collisionArea.length;k++)
                {
                    if(this._aryCompairs[i].fishMeshState==fishMeshState.fish2D)
                    {

                        fishColliderPoint=(<PolygonCollider2D>this._aryCompairs[i].collisionArea[k]).worldPoints as Vec2[];

                        //--以下為測試
                        //let check2DClick=Intersection2D.pointInPolygon(pointTarget,fishColliderPoint);
                        checkCollisionData={
                            
                            otherData:{
                                
                                fishType:fishMeshState.fish2D,

                                fishColliderPoint:fishColliderPoint,

                                pointTarget:pointTarget
                            
                            }
                        };
                        


                    }else{
                        
                                            
                        if(this._aryCompairs[i].fishType!=21)
                        {
                            //--用Intersection2D檢查pointInPolygon 
                            let fish3Dget2DColliderPoints=(<PolygonCollider2D>this._aryCompairs[i].collisionArea[k]).worldPoints as Vec2[];
                            //fish3Dget2DColliderPoints,this._aryFishes[j].collisionArea[k]);
                            let screenPoints:Vec3[]=[];

                            fishColliderPoint=[];
                            
                            screenPoints[0]=this._camera3dComponent.worldToScreen(v3(fish3Dget2DColliderPoints[0].x,fish3Dget2DColliderPoints[0].y));
                            
                            screenPoints[1]=this._camera3dComponent.worldToScreen(v3(fish3Dget2DColliderPoints[1].x,fish3Dget2DColliderPoints[1].y));
                            
                            screenPoints[2]=this._camera3dComponent.worldToScreen(v3(fish3Dget2DColliderPoints[2].x,fish3Dget2DColliderPoints[2].y));
                            
                            screenPoints[3]=this._camera3dComponent.worldToScreen(v3(fish3Dget2DColliderPoints[3].x,fish3Dget2DColliderPoints[3].y));
                            
                            fishColliderPoint[0]=v2(screenPoints[0].x,screenPoints[0].y);
                            
                            fishColliderPoint[1]=v2(screenPoints[1].x,screenPoints[1].y);
                            
                            fishColliderPoint[2]=v2(screenPoints[2].x,screenPoints[2].y);
                            
                            fishColliderPoint[3]=v2(screenPoints[3].x,screenPoints[3].y);

                            let clickScreenPoint=this._canvasCamera2dComponent.worldToScreen(v3(pointTarget.x,pointTarget.y));

                            checkCollisionData={
                            
                                otherData:{
                                    
                                    fishType:fishMeshState.fish2D,
    
                                    fishColliderPoint:fishColliderPoint,
    
                                    pointTarget:clickScreenPoint
                                
                                }
                            };





                        }else{
                        
                            //-rayOBB : (ray : Ray, obb : OBB) => number(intersect) 
                            let shape:BuiltinBoxShape=(<BoxCollider>this._aryCompairs[i].collisionArea[k]).shape;

                            let worldObb =shape.worldObb;

                            //--射線拿來這邊做(做一次就好了)--20231029
                            if(!ray)
                            {
                                let screenPos=this._canvasCamera2dComponent.worldToScreen(v3(pointTarget.x,pointTarget.y));
                                
                                ray=this._camera3dComponent.screenPointToRay(screenPos.x,screenPos.y);
                            }


                            
                            checkCollisionData={
                            
                                otherData:{
                                    
                                    fishType:fishMeshState.fish3D,

                                    fishObb:worldObb,
                                    
                                    rayData:ray
                                
                                }
                            };


                        }
                        
                    }

                    //log('pickUp_hittest',this._strategyAlgorithm.getCollision(checkCollisionData));
                    //--檢查碰撞
                    
                    if(this._strategyAlgorithm.getCollision(checkCollisionData))
                    {
                        isCollisions={fishDatas:[{fishSn:this._aryCompairs[i].id,fishType:this._aryCompairs[i].fishType}]};

                        f=true;
                        
                        break;
                    }


                }

            }

            if(f)
            {
                break;
            }
        }

        return isCollisions;

    }


}