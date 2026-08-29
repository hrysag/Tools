/**
 * Created by EricHuang on 2023/9/18.
 * 可能要刪掉這個....
 */
import {IfGui} from './GuiDefinitionsBase';
import {GuiOption} from './GuiDefinitionsBase';
import {GuisCenterFWBase} from './GuisCenterFWBase';
import {Component,Node} from 'cc';
import {log} from 'cc';

export abstract class GuiBasic extends Node implements IfGui
{
    
    
    /**
     * ps-
     * Component再被添加到node的時候,這個node才會有值
     * 该组件被附加到的节点。组件总会附加到一个节点
    */

    //public emitter:EventTarget;

    constructor(public ids:string='')
    {
       super();
       //this.emitter=new EventTarget();
       //this.id='';
    
       
    }

    /*--20230621已取消,用promise來取代
    set layoutCompleteFreebackFunction(func:() => void)
    {
        this._layoutCompleteFreebackFunction=func;
        
    }*/

    /**
     * step1.
     * overrite it
     * @param value guiData before layout
     */
    public setData(value:GuiOption):void
    {
        
        //--這邊要再修掉
        //GuisCenterFWBase.aryMapGuiClass[this.id]=this;
        GuisCenterFWBase.aryMapGuiClass[value.id]=this;

        this.ids=value.id;//--381之後會讀不到這個interface的屬性...

        log('test_guiInterface',this.ids);
    }

    
    //public init(others?:any):void
    /**
     * step2.
     * overrite it
     */
    public init():void
    {
       //--do something about initGuiData
    }

    /**
     * step3
     */
    public async execute(): Promise<void>
    {
        await this.setLayout();
        this.layoutComplete();
    }



    
    
    /**
      * override it
      * do ur layout
      * 
      */
    public async setLayout(): Promise<void>
    {
         
     
    }

    //--do something after layout
    /**
     * override-step4
     * do something after layoutgui
     */
    public layoutComplete():void
    {
        //this._layoutCompleteFreebackFunction();
    }
     
    public remove():void
    {

    }

    //getCompontItem(id:string):Component
    //getNodeItem(id:string):Node
    //--override it-------return this
    public getCompontItem(id:string):Component
    {
        let r:Component; 
        return r;
    }

    /*
    public getNodeItem(id:string):Node
    {
        let r:Node; 
        return r;
    }*/

}