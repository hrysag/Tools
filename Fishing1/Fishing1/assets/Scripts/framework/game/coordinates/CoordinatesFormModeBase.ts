/**
 * Created by EricHuang on 2023/09/18.
 */
 export abstract class CoordinatesFormMode
{
  constructor()
  {
    //this.initNodeContainer();  
  }
    
  //--override it(把預設的node塞進來)
  abstract initNodeContainer():void
  

  abstract coordinatesChange(strMode:string,tableID:number):void
  

  abstract showGlobalState():void
  


  //--4合一座位系統專用(1,2號位置會往下轉,34不變)
  abstract setContainerCoordinateMode(id:number):void
  

  //--不旋轉座位的系統
  abstract setContainerCoordinateModeNoRotation(id:number):void

  //--重設歸0(玩家離開房間回到大廳)
  abstract resetCoordinateMode():void


  

}
