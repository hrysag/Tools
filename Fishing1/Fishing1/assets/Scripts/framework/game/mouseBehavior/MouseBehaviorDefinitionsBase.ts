/**
 * Created by EricHuang on 2023/10/01.
 * 
 */
import {Vec2} from 'cc';

export interface IFClickShoot 
{
    _leaveClick: boolean;
}

export interface IFAutoShoot
{
    _autoTime:number;
    _autoShoot:boolean;//---自動射擊

}

export enum ShootSpeedRate
{
    SHOOTING_RATE_STAND=0.14,//-(140ms)
    SHOOTING_RATE_CRAZY=0.07,//-(70ms)
    SHOOTING_RATE_FAST=0.1//-(100ms)
}

//--點擊的區域
export const AREA_BOUNDARY=
{
    x:0,
    y:0,
    w:0,
    h:0
}

export interface IFDirectionShoot
{
    _directionShoot:boolean;//--20230206-新功能(定向射擊) 
    _directionPoint:Vec2;
    //--在定向射擊計時器尚未結束前取消定向射擊,會打出最後一發,但因為相關參數被重設了,所以就以一般子彈打出
    _lastShootForDirection:boolean;//--20230417-定向射擊再區間取消的最後一發
    resetDitrectShoot():void
}

