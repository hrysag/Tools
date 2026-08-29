/**
 * Created by EricHuang on 2023/9/20.
 */
import {fishMeshState} from '../../../game/model/ModelDefinitionsBase';
import {FishCustomAnimation} from '../../../utils/FishCustomAnimation';
import {Collider2D,Collider,Node} from 'cc';

export interface FishData
{
    id:number,
    glowup:number,
    isDead:boolean,
    fishIsFlash:boolean,
    freeze:number,//--冰凍道具的持續時間(PS-假設一次10秒,連續使用5次=50秒(以毫秒為單位))
    lv:number,//--layer index 
    fishType:number,//---辨識魚種在用的(特殊子彈會一口氣擊中所有相同的魚種)
    pathID:string;//-----魚種的路徑辨識碼
    pathGroupID:string;
    prohibit:boolean;//--禁止打擊
    countHitAni:number;//--計算打擊效果秒數
    fishMesh:Node| FishCustomAnimation;
    fishMeshState:fishMeshState;
    //fishMeshState:fishMeshState;
    collisionArea:Collider2D[] | Collider[]
    init():void
}
