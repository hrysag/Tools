/**
 * Created by EricHuang on 2023/9/18.
 */
import {Component} from 'cc';

export enum GuiNotifycationSubbscriptionSubject
{
    GUI_NOTIFYCATION='GuiMainSubject',//--GUI的主題群 
}

//--setting guiData
export type GuiOption=
{
    positions?:{x:number,y:number}[],
    coinEndinfo?:{x:number,y:number,width:number,height:number}[],
    exchangePositions?:{x:number , y:number , width:number , height:number}[],
    mountPositions?:{[key:string]:{x:number,y:number,width:number,height:number}}[],
    //container?:PIXI.Container,
    id:string,
    playerIndex?:number,
    listenerStr?:string[],
    other?:any     
}

export interface IfGui
{
    //--20230621-取消,使用type GuiOption代替
    //_other:any;
    ids:string;//---node屬性已有id這個變數..所以修改一下
    //--20230621-取消.已經使用promise來取代
    //_layoutCompleteFreebackFunction:()=>void;
    setData(value:GuiOption):void//--set gui data before init
    init():void//--init data before setLayout
    setLayout():Promise<void>
    remove():void
    getCompontItem(id:string):Component
    layoutComplete():void
       
}

//--basic guiCenter interface--
//export interface IfGuiCore<TifGui extends IfGui,Uinitdata extends GuiOption>
export interface IfGuiCore
{
    //-Tf extends new ()=> FishView
    //_aryLayoutData:{id:string,class:TifGui,initData:Uinitdata,immediateSendEvt:boolean,cloneId?:string}[];
    _aryLayoutData:{id:string,class:new ()=> IfGui,initData:GuiOption ,immediateSendEvt:boolean,cloneId?:string}[];
    //--T約束一定要實現IfGui介面,U約束一定要實現GuiOption type
    setLayoutData<T extends IfGui,U extends GuiOption>(value?:{id:string,class:new () => T,initData:U,immediateSendEvt:boolean,cloneId?:string}[]):void 
    sendEvt(evtId:string,sendObject:any):void
    //--setting the data(json/costum class) of layout
    startProcessing():void
    
}

