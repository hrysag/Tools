/**
 * Created by EricHuang on 2023/9/18.
 * 
 */
import {IfGuiCore} from './GuiDefinitionsBase';
import {IfGui} from './GuiDefinitionsBase';
import {GuiNotifycationSubbscriptionSubject} from './GuiDefinitionsBase';
import {Notifycation} from '../../abstract/mvvm/Notifycation';
import {GuiBasic} from './GuiBase';
import {GuiOption} from './GuiDefinitionsBase';
import {AbstractView} from '../../abstract/mvvm/AbstractView';
import {GUIEvent,EventSendObject} from '../../game/events/eventBase';


//export abstract class GuisCenterFWBase <TifGui extends IfGui,Uinitdata extends GuiOption>extends EventTarget implements IfGuiCore<TifGui,Uinitdata> {
//export abstract class GuisCenterFWBase <TifGui extends IfGui,Uinitdata extends GuiOption>extends AbstractView implements IfGuiCore<TifGui,Uinitdata> {
export abstract class GuisCenterFWBase extends AbstractView implements IfGuiCore{
    
    //public _aryLayoutData:{id:string,class:TifGui,initData:Uinitdata,immediateSendEvt:boolean,cloneId?:string}[];
    public _aryLayoutData:{id:string,class:new ()=> IfGui,initData:GuiOption ,immediateSendEvt:boolean,cloneId?:string}[];
    
    public static aryMapGuiClass:{[key:string]:GuiBasic};

    protected _positionInfo:{
        positions:{x:number,y:number}[],
        playerPositions:{x:number,y:number}[],
        coniEndinfo:{x:number,y:number,width:number,height:number}[],
        exchangePositions:{x:number , y:number , width:number , height:number}[],
        mountPositions:{[key:string]:{x:number,y:number,width:number,height:number}}[],
        menuPositions:{[key:string]:{x:number,y:number,width:number,height:number}}
    }

    protected _playerIndex:number;

    set playerIndex(value:number)
    {
       this._playerIndex=value;
    }
    
    constructor()
    {
        super();
        
        GuisCenterFWBase.aryMapGuiClass={};  
        
        this._aryLayoutData=[];  
        
        this._playerIndex=-1;

        this.createGuiNotifycationSubject();

    }
    //============interface=======================================================
    //--T約束一定要實現IfGui介面,U約束一定要實現GuiOption type
    //{id:string,class:TifGui,initData:Uinitdata,immediateSendEvt:boolean,cloneId?:string}
    //{id:string,class:T,initData:U,immediateSendEvt:boolean,cloneId?:string}
    //public setLayoutData<T extends TifGui,U extends Uinitdata>(value?:{id:string,class:T,initData:U,immediateSendEvt:boolean,cloneId?:string}[]):void
    public setLayoutData<T extends IfGui,U extends GuiOption>(value?:{id:string,class:new () => T,initData:U,immediateSendEvt:boolean,cloneId?:string}[]):void 
    {
        if(value!=undefined)
        {
          this._aryLayoutData=value;  
        }   
    }

    protected createGuiNotifycationSubject():void
    {
        for(const key in GUIEvent)
        {
           if(typeof GUIEvent[key]==='string')
           {
                Notifycation.getInstance().addSubbscriptionSubject(
                    
                    GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,
                    GUIEvent[key]  
                );
           }
        }
    }

    protected async startLayout():Promise<void>
    {
        /**
         * 這邊要修,要把return promise完成,這樣startProcessing
         * 裡面的then才有意義
         */
        for(const i of this._aryLayoutData)
        {
            if(!(GuisCenterFWBase.aryMapGuiClass[i.id] instanceof GuiBasic))
            {
                // @ts-ignore
                let cla:GuiBasic=new i.class();
                cla.name=i.id;
                //canvasNode.addChild(cla);
                //let cla=instantiate(i.class);
                cla.setData(i.initData);
                cla.init();
                await cla.execute();
                if(i.immediateSendEvt)
                {
                    //this.sendEvt(GUIEvent.SINGLE_UI_IS_READY,new GUIEvent(GUIEvent.SINGLE_UI_IS_READY,i.id));
                    //this.node.emit(GUIEvent.SINGLE_UI_IS_READY,{evtId:GUIEvent.SINGLE_UI_IS_READY,sendObj:i.id});
                    this.sendEvt(GUIEvent.SINGLE_UI_IS_READY,{type:GUIEvent.SINGLE_UI_IS_READY,sendObj:i.id});
                }
            }
        }

    }

    /**
     * 
     * @param evtId sub notify的副主題
     * @param sendObject 
     */
    public sendEvt(evtId:string,sendObject?:EventSendObject):void
    {
        //---用notify送
        Notifycation.getInstance().emit
        (
            GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,
            evtId,
            sendObject
        );
  
    }

    //--setting the data(json/costum class) of layout
    public startProcessing():void
    {
        this.startLayout().then(()=>
        {
            this.afterAllGuiComplete();
            this.addEventListener();
            //---send all layoutcomplete
            //this.sendEvt(GUIEvent.LAYOUT_IS_READY,new GUIEvent(GUIEvent.LAYOUT_IS_READY));
            //this.node.emit(GUIEvent.LAYOUT_IS_READY,{evtId:GUIEvent.LAYOUT_IS_READY});
            this.sendEvt(GUIEvent.LAYOUT_IS_READY);
            //--clean-
            this._aryLayoutData.length=0;
            this._aryLayoutData=null;
                 
        })
    }

    public getClassById(classId:string):GuiBasic
    {
       //---找不到的情況下外面要再判斷處理
       return GuisCenterFWBase.aryMapGuiClass[classId];
    }

    public removeClassById(classId:string):void
    {
       delete  GuisCenterFWBase.aryMapGuiClass[classId];
    }

    protected abstract useInfoDataGui():void

    //--這邊插在連線前完成
    //abstract initGuiData(value?:any):void

    //--這個是在takeseat的時候用的
    //abstract setRoomData():void//--考慮拿掉
    //--提取完相關座標資訊後會再call setPlayerInfoCoordinate
    abstract setGuiDataInfo(value:any):void//--這個也是阿(takeseat之後用的)


    //override it
    protected abstract afterAllGuiComplete():void

    //-override it(ps-addEventListener for gui not for guiCneter)
    protected abstract addEventListener():void

   





    //--外部盡量不要直接使用 setPlayerInfoCoordinate...
    //abstract setPlayerInfoCoordinate(tableId:number):void




    //======給其他平行的view拿資料用的(透過mediator去拿)
    //--interface abstract
    public getData(dataKey:string,value?:any):any
    {
       
    }
    //--interface abstract
    public excute(value?:any):any
    {
        
        
    }
    



}