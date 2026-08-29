//-FacadeForGameView.getInstance().addClassInstance('TestView',TestView);
import { GameMainAbstractView,gameMainAbstractView} from "./../game/GameMainAbstractView";

import { FacadeForGameView } from "../abstract/mvvm/Facade";
import { AbstractViewModel } from "../abstract/mvvm/AbstractViewModel";
import { viewfun } from "../abstract/mvvm/AbstractView";
import { TestViewModel } from "./TestVM";
import { TestGameView } from "./TestGameView";
import { TestGameView2 } from "./TestGameView2";
import { TestModel } from "./TestModel";
import { director, Node,_decorator } from "cc";
import { TestConnect } from "./TestConnect";
import { TestConnectStrategy } from "./TestConnectStrategy";
import {log} from 'cc';

//--裝飾器的執行是由下往上,由左往右(在class被定義的時候運作)
//@viewfun('TestView')
const {ccclass,property} = _decorator;

@ccclass('TestGameMainAbstractView')
@gameMainAbstractView('TestView',TestViewModel,TestModel,TestConnect,TestConnectStrategy)
export class TestGameMainAbstractView extends GameMainAbstractView
{
    
    private _testView:TestGameView;
    private _testView2:TestGameView2;

    constructor()
    {
        super(); 
        log('TestGameMainAbstractView@@');
    }

    //--把其他的view 建構出來
    protected initUserViews():void
    {
        let node:Node=new Node('_testView');
        this._testView=node.addComponent(TestGameView);
        this._testView2=node.addComponent(TestGameView2);
        director.getScene().addChild(node);

        
        /*
        let node2:Node=new Node('_testView2');
        this._testView2=node2.addComponent(TestGameView2);
        director.getScene().addChild(node);
        */


        //--塞入中介者pool
        this.setViewUser(this._testView.constructor.name,this._testView);
        this.setViewUser(this._testView2.constructor.name,this._testView2);
        //--中介者執行
        this.excute(this._testView.constructor.name);
        this.excute(this._testView2.constructor.name);
        //this._testView.setModelData();
        //this._testView2.setModelData();
    }

    public testConnect ():void
    {
        //this._viewModel.connect(this);
        //(this._viewModel as AbstractViewModel).connect();
        this.connect();
    }

    
    
}