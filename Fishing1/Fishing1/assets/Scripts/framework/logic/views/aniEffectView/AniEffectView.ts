/**
 * Created by EricHuang on 2023/10/08.
 */
//setPositionsInfo
import {AbstractView} from '../../../abstract/mvvm/AbstractView';
import {AnimationEffectViewBase} from '../../../game/views/animationEffectViewBase/AnimationEffectViewBase';
import {InitAniEffect} from '../../../game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption} from '../../../game/aniEffect/AniEffectDefinitionsBase';
import {IfAniEffectCommand} from '../../../game/aniEffect/AniEffectDefinitionsBase';
import {AnimationEffectEvent,EventSendObject} from '../../../game/events/eventBase';
import {AniEffectTypeMap,AniEffectID} from './AniEffectDefinitions';
import {primitives} from 'cc';
import {log} from 'cc';

//--這是給最上層sysytem繼承操作的
export class AniEffectView extends AbstractView
{

    protected _aniEffect:AnimationEffectViewBase;

    set aniEffect(value:AnimationEffectViewBase)
    {
        this._aniEffect=value;

        this._aniEffect.stageNode=this.node;
        //primitives.plane()

        this._aniEffect.on(AnimationEffectEvent.COMPLETE,this.aniAndEffectComplete);
    }

    constructor()
    {
        super();

        this._classId='AniEffectView';

    }

    public init():void
    {

    }

    /**
     * 
     * @param value 0-3 PlayertableIndex
     */
    public setPlayerTableIndex(value:number):void
    {
        this._aniEffect.playerIndex=value;
    }

    /**
     * 
    * positions-->砲管出口的位置
    * coniEndinfo--->也是金幣的位置--
    * exchangePositions--->玩家分數顯示框資訊
    * mountPositions-->所有玩家mount資料--20230315新增
     */
    public setPositionsInfo(value:{
        positions:{x:number,y:number}[],
        playerPositions:{x:number,y:number}[],
        coniEndinfo:{x:number,y:number,width:number,height:number}[],
        exchangePositions:{x:number , y:number , width:number , height:number}[],
        mountPositions:{[key:string]:{x:number,y:number,width:number,height:number}}[],
        menuPositions:{[key:string]:{x:number,y:number,width:number,height:number}}
    }):void
    {
      this._aniEffect.aniPositionInfo=value;
      
      //this._aniEffect.stageNode=this.node;

      log('aniEffect_setPositionsInfo',value);
    }

    public setAniEffetcClasses():void
    {
        this._aniEffect?.setCommands();
    }

    public setCommand(commandDefinition:InitAniEffect):void
    {
        this._aniEffect.addCommand(commandDefinition);
    }

    public setCommands():void
    {
        this._aniEffect.setCommands();
    }

    public setDataAfterSetRoom():void
    {
        this._aniEffect.setDataAfterSetRoom();
    }

    public resetRoomData():void
    {
        this._aniEffect.resetRoomData();
    }

    public getCommand(command:number):IfAniEffectCommand
    {
        return this._aniEffect.getCommand(command);
    }

    public getCommandInstance(instanceId:string):any
    {
        return this._aniEffect.getInstances(instanceId);
    }

    protected aniAndEffectComplete=(e:EventSendObject)=>
    {

    }

    //--預設的效果庫
    public executeAnimation(executeOption:ExecuteOption):any
    {
        let r:any=null;

        switch(executeOption.aniEffectTypeId)
        {
            case AniEffectTypeMap.ANI_showPayoffMoneyAndDigits:
              
                this._aniEffect.executeAnimation({command:AniEffectID.ANI_Money,other:executeOption.other.money});

                this._aniEffect.executeAnimation({command:AniEffectID.ANI_JumpDigits,other:executeOption.other.digits});

                r=0;

            break;
        }

        return r;
    }



    //--interface abstract
    public getData(dataKey:string,value?:any):any
    {
    
    }
    //--interface abstract
    public excute(value?:any):any
    {
        
        
    }
}
