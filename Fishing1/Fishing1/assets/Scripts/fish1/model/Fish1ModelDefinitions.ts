/**
 * Created by EricHuang on 2023/9/26.
 */
/*
export type addbullet=
{
   s:number,//-座位號(0-3)
   p:number,//-最新餘額
   id:number,//-子彈id
   w:number,//-砲台型態/武器類別(不會用到)
   si:any,//-前端自定義座位表演參數物件(砲台角度,x,y,....),長度不得大於1000
   l?:number//-鎖定魚隻id(自動射擊才給)
}
*/

export type addbullet=
{
   siteIndex:number,//-座位號(0-3)
   credit:number,//-最新餘額
   sn:number,//-子彈id
   w:number,//-砲台型態/武器類別(不會用到)
   info:any,//-前端自定義座位表演參數物件(砲台角度,x,y,....),長度不得大於1000
   lockTarget?:number//-鎖定魚隻id(自動射擊才給)
}

export type addFish=
{
   id:number;//-魚隻id number
   type:number;//-魚種代碼 number
   pathID:number;//-路徑代碼 number
   speed:number;//-速度(秒) number
   time:number;//-已存活時間/目前移動多久(毫秒) number
   freeze:number;//-被冰凍時間累積(毫秒)number 
   isReverse:boolean;//-是否路徑反向 boolean
}

export enum PropType
{
   PROP_CALL=1,//----召喚道具(5sec)
   PROP_FREEZE=2,//--冰凍道具(10sec)
   PROP_CRAZY=3//--狂暴道具(10sec)

}


export type PropData=
{
   type:number,//--種類(1=召喚,2=冰凍,3=狂暴)
   lock:boolean,
   total:number,
   dcd:number,//(default cold downTime),----預設CD時間
   ncd:number,//(now cold downTime),-------當下CD時間
   isRunning:boolean
}


//--用於不同環境的廳主要開關不同的menubar
//--有的要拿掉離開按鈕,有的要關閉開洗分按鈕
/*
export const EXIT_OPTION_STATUS=
{
   type:1
}*/