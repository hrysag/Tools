import { AbstractView,viewBind } from "../abstract/mvvm/AbstractView";
import { viewfun } from "../abstract/mvvm/AbstractView";
import { Notifycation,NotifycationSubbscriptionSubject } from "../abstract/mvvm/Notifycation";
import {log} from 'cc';

@viewfun('TestView')

export class TestGameView extends AbstractView
{
    @viewBind _testTestModeValue2;//-要監聽model資料改變的變數(名稱與model相同)
    private _testgameview1Data;

    constructor()
    {
        super();
        this._testgameview1Data={value:897};
    }

    protected onLoad():void
    {
        super.onLoad();
        //this.setModelData();
    }

    //--註冊你要聽的VM資料回傳事件(從notify拿)
    /*
    protected initRegisterNotifyFromVM():void
    {
        //Notifycation.getInstance().on(NotifycationSubbscriptionSubject.AbstractViewModel,'事件名稱',callbackfun,observerID=你的classID)
        Notifycation.getInstance().on(NotifycationSubbscriptionSubject.AbstractViewModel,'_testTestModeValue2',this.testGameView1NotifyBack,this.constructor.name);
        
    }*/
    protected modeleChangeHandler=(sub,value)=>
    {
        log('TestGameView111',sub,value);
        this.getVMData();   
    }

    /*
    private testGameView1NotifyBack=(value)=>
    {
        log('testGameView1NotifyBack111111',value);
        this.getVMData();
    }*/

    private getVMData():void
    {
        
        /**
         * PS--動態添加的屬性,編輯器會無法識別所以會出現找不到的警告
         * 但是實際上他是存在的.
         * this._viewModel._testTestModeValue2---這樣會報錯,但是可以運作,也拿到值
         * this._viewModel['_testTestModeValue2']--這樣可以,但使用要吻合字串
         */
        log('getVMData_TestGameView',this._viewModel['_testTestModeValue2']);
        //--拿view的資料
        log('check_2_data',this._gameMediator.getViewUserData('TestGameView2','test2'));
    }

    public testGameViewCallConnect():void
    {
        log('call_testGameViewCallConnect'); 
    }

    //--interface abstract
    public getData(dataKey:string,value?:any):any
    {
        if(dataKey=='test')
        {
           return this._testgameview1Data; 
        }
    }
    //--interface abstract
    public excute(value?:any):any
    {
        log('TestGameView_excute');
        this._viewModel.sendServer('0','whthfuidsfhdsfhuislfdsa');
    }
}