/**
 * Created by EricHuang on 2023/10/29.
 * 
 */

import {IfCollisionStrategy} from '../../../game/strategy/Strategy';
import {CollisionData} from '../../../game/strategy/Strategy';
import {fishMeshState} from '../../../game/model/ModelDefinitionsBase';
import { Intersection2D } from 'cc';
import {Vec2,find,CameraComponent,director,geometry} from 'cc';
import {log} from 'cc';


export class PickUpCollisionStrategy implements IfCollisionStrategy
{
    
    public getCollision(data:CollisionData):boolean
    {
        if(data.otherData.fishType==fishMeshState.fish2D)
        {
        //--這邊是2D魚跟非boss的魚會送進來
        return Intersection2D.pointInPolygon(data.otherData.pointTarget,data.otherData.fishColliderPoint);
            
        }else{

        //--boss or spfish 會送進來 
        /*
        let canvasCamera2d=find(data.otherData.camera2dnodeId).getComponent(CameraComponent);
        
        let camera3d=director.getScene().getChildByName(data.otherData.camera3dnodeId).getComponent(CameraComponent);
        
        let screenPos=canvasCamera2d.worldToScreen(data.otherData.pointTarget);

        let ray:geometry.Ray=camera3d.screenPointToRay(screenPos.x,screenPos.y);
        */
        
        let dist:number=geometry.intersect.rayOBB(data.otherData.rayData,data.otherData.fishObb);
        
        log('check_rayOBB',dist);


            if(dist>0)
            {

                return true;

            }else{

                return false;

            }

        }
        
        

    }
}