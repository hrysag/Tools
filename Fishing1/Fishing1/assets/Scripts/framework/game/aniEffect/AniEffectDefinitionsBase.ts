/**
 * Created by EricHuang on 2023/10/05.
 */

import {Node,EventTarget} from 'cc';

//--每個執行動作都需要依靠不同的command
//--所以有可能不同的command中會有相同的class,只是操作的動作不同
export interface IfAniEffectCommand
{
    //new (): IfAniEffectCommand;
    setDataAfterSetRoom(value:any):void//--20240110--再進桌後寫入相關位置資訊

    resetRoomData(value?:any):void//--20240307--重設相關資料座標
    
    execute(value?:ExecuteOption):any

    //setTarget(value:any):void//--要操作的物件
}

//--excute function data
export type ExecuteOption=
{
    command?:number,//--commandclass id 
    aniEffectTypeId?:number//--AniEffectTypeMap id
    //--要取消掉,用不同的command來做就好了
    //fun?:string,//--要跑多個fun用的(預設會執行的是execute)
    other?:any //---要帶入的參數 
}

//--setting datat
export type AniOption=
{
    positions?:{x:number,y:number}[],
    coinEndinfo?:{x:number,y:number,width:number,height:number}[],
    exchangePositions?:{x:number , y:number , width:number , height:number}[],
    mountPositions?:{[key:string]:{x:number,y:number,width:number,height:number}}[],
    container?:Node,
    playerIndex?:number,
    listenerStr?:string[],
    other?:any
       
}

export type InitAniEffect=
{
    id:number,//--command id
    commandConstructor: new (...args: any[]) => IfAniEffectCommand,
    //commandConstructor: IfAniEffectCommand,
    classConstructor: new (...args: any[]) => any,
    /**
     * 20240328-在cocos creator發布選項中,如果將<調試模式>打開,
     * 在build-config-for-cicd.json裡面的debug屬性=true
     * uglifyjs將不會介入作混淆縮排的動作.此時的js輸出會是保留function name的型態
     * 但是正式發布時debug的屬性=false時,uglifyjs將介入作混淆縮排的動作,
     * function name將會被拿掉(外層是用一個object包覆住).
     * 所以取constructor.name會出現你意想不到的名稱
     */
    classConstructorId?:string,
    classArgs: any[],
    listenerStr?:string,

}

export abstract class AniEffectBaseCommand extends EventTarget implements IfAniEffectCommand
{
    constructor()
    {
        super();
    }

    abstract resetRoomData(value?:any):void

    abstract setDataAfterSetRoom(value:any):void

    abstract execute(value?:ExecuteOption):any

}







