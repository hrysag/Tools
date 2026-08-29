/**
 * Created by EricHuang on 2023/10/07.
 * 這邊接hit fish
 */
import {AniEffectInvorker} from '../../aniEffect/AniEffectInvorker';
import {EventSendObject} from '../../events/eventBase';
import {Node} from 'cc';
import {log} from 'cc';


export class AnimationEffectViewBase extends AniEffectInvorker
{
    //protected _aniEffect:AniEffectInvorker;
    /**
     * positions-->砲管出口的位置
     * coniEndinfo--->也是金幣的位置--
     * exchangePositions--->玩家分數顯示框資訊
     * mountPositions-->所有玩家mount資料--20230315新增
     * menuPositions-->玩家自己menu的座標資料--2021124新增
     */
    protected _aniPositionInfo:{
        positions:{x:number,y:number}[],
        playerPositions:{x:number,y:number}[],
        coniEndinfo:{x:number,y:number,width:number,height:number}[],
        exchangePositions:{x:number , y:number , width:number , height:number}[],
        mountPositions:{[key:string]:{x:number,y:number,width:number,height:number}}[],
        menuPositions:{[key:string]:{x:number,y:number,width:number,height:number}}
    }

    protected _playerIndex:number;//--0-3

    protected _stageNode:Node;

    set aniPositionInfo(value: {
        positions:{x:number,y:number}[],
        playerPositions:{x:number,y:number}[],
        coniEndinfo:{x:number,y:number,width:number,height:number}[],
        exchangePositions:{x:number , y:number , width:number , height:number}[],
        mountPositions:{[key:string]:{x:number,y:number,width:number,height:number}}[],
        menuPositions:{[key:string]:{x:number,y:number,width:number,height:number}}
    })
    {
        this._aniPositionInfo=value;
    }


    set playerIndex(value:number)
    {
        this._playerIndex=value;

        log('animationEffectViewBase___playerIndex',this._playerIndex);
    }

    set stageNode(value:Node)
    {
        this._stageNode=value;
    }

    constructor()
    {
        super();
         
        this._aniPositionInfo=null;

        this._playerIndex=-1;

        this._stageNode=null;
          
    }

    

    //--override
    public setCommands():void
    {
        //---寫入要建構的class/data也在這邊先做好

    }

    //--override
    public setDataAfterSetRoom():void
    {
        //---寫入進房間後相關座位資訊
    }


    //--override
    public resetRoomData():void
    {
        //---重設進房前的座位相關資訊
    }

    protected aniEffectCompleteHandler(e:EventSendObject):void
    {
       log('check_aniEffectCompleteHandler',e);
       this.emit(e.type,e);
    }
    

    protected aniEffectEventHandler(e:EventSendObject):void
    {

    }

    //--aniEffect.setInitClasses();
    /*
    public setAniEffectInitClasses():void
    {

    }

    public setAniEffectDataBeforCreate():void
    {

    }*/


   
}