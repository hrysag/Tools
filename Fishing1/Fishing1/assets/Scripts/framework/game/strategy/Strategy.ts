/**
 * Created by EricHuang on 2023/9/11.
 * 策略模式模式(Strategy pattern)
 * 用來抽換容易變動或是實作性差異極大的狀態
 * ex:connect,collision.....
 */
import {Vec2} from 'cc';

export type ResultForConnect=
{
    type:string,//--connect type
    sendObject:any
}


export interface IfConnectStrategy
{
    strategyConnectDataFromPomelo:(code: string, data: any)=>ResultForConnect
}

//--逆時針採點-1.左下 2.右下 3.右上 4.左上(這是cocos 採點的順序)
export type CollisionData=
{
    a?:Vec2[],
    b?:Vec2[]
    otherData?:any//---其他演算法需要的資料
}

export interface IfCollisionStrategy
{
    getCollision:(value:CollisionData)=>boolean
}

