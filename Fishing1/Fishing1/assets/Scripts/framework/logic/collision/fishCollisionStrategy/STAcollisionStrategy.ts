/**
 * Created by EricHuang on 2023/10/03.
 * 
 */

import {IfCollisionStrategy} from '../../../game/strategy/Strategy';
import {CollisionData} from '../../../game/strategy/Strategy';
import {Vec2} from 'cc';


export class STAcollisionStrategy implements IfCollisionStrategy
{
    
    //--collider worldpoint= [new Vec2(-1, -1), new Vec2(1, -1), new Vec2(1, 1), new Vec2(-1, 1)];

    /*
    //---SAT collision---
  
    //--逆時針採點-1.左下 2.右下 3.右上 4.左上(這是cocos 採點的順序)
    /*
        collider worldpoint= [new Vec2(-1, -1), new Vec2(1, -1), new Vec2(1, 1), new Vec2(-1, 1)];
        --逆時針採點-1.左下 2.右下 3.右上 4.左上(這是cocos 採點的順序)

         4(transformedLeftTop) 3(transformedMax)
         |---------------------|
         |                     |
         |                     |
         |---------------------|
         1(transformedMin)     2(transformedRightBottom)
    */
    public getCollision(data:CollisionData):boolean
    {
        //let aryPointB1:{x:number,y:number}[]=[data.a.transformedLeftTop,data.a.transformedMin,data.a.transformedRightBottom,data.a.transformedMax];
        
        //let aryPointB2:{x:number,y:number}[]=[data.b.transformedLeftTop,data.b.transformedMin,data.b.transformedRightBottom,data.b.transformedMax];
        if(data.a.length==0 || data.b.length==0)
        {
           return false;
        }

        let aryPointB1:Vec2[]=data.a;
        
        let aryPointB2:Vec2[]=data.b;

        for(let i:number=0;i<2;i++)
        {
            let max:number=-Number.MAX_VALUE;
            let min:number=Number.MAX_VALUE;
               
            let axis:{x:number,y:number}= {x:aryPointB1[i+1].x-aryPointB1[i].x,y:aryPointB1[i+1].y-aryPointB1[i].y};

            let axisLen:number=axis.x * axis.x + axis.y * axis.y;

            for(let j:number=0;j<4;j++)
            {
                let v:{x:number,y:number}=
                {
                    x:aryPointB2[j].x-aryPointB1[i].x,
                    y:aryPointB2[j].y-aryPointB1[i].y
                }

                let projLen:number=(v.x *axis.x + v.y * axis.y) ;

                if(projLen>max)
                {
                    max=projLen;                    
                }

                if(projLen<min)
                {
                    min=projLen;                    
                }

                if(projLen>=0 && projLen<=axisLen)
                {
                    break;
                }

                if(j==3)
                {

                    if(min<0 && max>axisLen)
                    {
                        break;
                    
                    }else{
                        
                        return false;
                    }


                }


            }
        
        }

        return true;

    }
}