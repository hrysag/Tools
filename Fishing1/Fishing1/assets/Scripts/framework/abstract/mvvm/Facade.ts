/**
 * Created by EricHuang on 2023/9/07.
 */
import { AbstractViewModel,viewModel } from './AbstractViewModel';
import { AbstractModel } from './AbstractModel';
import { Component, director, Node } from 'cc';
import {log} from 'cc';
/**
 * 只會產生一唯一一筆vm資料,並且回傳該vm component
 */
export class FacadeForGameView
{
    
    private static _instance:FacadeForGameView; 

    public static getInstance(): FacadeForGameView { return (FacadeForGameView._instance) ? FacadeForGameView._instance : new FacadeForGameView(); }

    //private _classMap: {[key:string]:new ()=> AbstractViewModel}
    //private _classMap: new ()=> AbstractViewModel;
    //private _classMap: {[key:string]: T}

    private _classVM:new ()=> AbstractViewModel;
    
    

    
    private _realVM:AbstractViewModel;

    private _realModel:AbstractModel;

    constructor()
    {
        if (FacadeForGameView._instance != null)
        {
            throw new Error('plz use getInstance() to get FacadeForGameView');
        }
        
        FacadeForGameView._instance = this;
        
        //this._classMap={};

        this._realVM=null;

    }

    public getClassInstance(className?:string): any
    {
        if(this._realVM)
        {
            log('get_vm');
            return this._realVM;
        }else{
            log('create_vm');
            this._realVM=new this._classVM();
            this._realVM.addModel(this._realModel);
            this._realVM.init();
            return this._realVM;
        }

        /*
        if(this._realVM)
        {
            log('return_realVM');
            return this._realVM;

        }else if(!this._realVM && this._classMap[className])
        {
            log('return_create_realVM');

            let instance=this._classMap[className];

            let node:Node=new Node(className);
            
            this._realVM=node.addComponent(instance);

            this._realVM.addModel(this._realModel);
            
             //cocos creator就是那麼機掰, Object.defineProperty
             //必須要其中的物件是component然後附加到node上面才會正常啟動.
             //不然會出現[重複定義屬性]的雞掰問題.
             //這也是vm非得繼承component的關係
            
            director.addPersistRootNode(node);//--加到node後才會觸發onload
            
            delete this._classMap[className];

            log('wtf_nodes',director.getScene());
            
            return this._realVM;
            
        }else{
            
            console.error(`Class '${className}' not found in classMap.`);
            
            return null;
        }*/
        
    }
  
    public setModelInstance<T extends AbstractModel>(instance:T):void
    {
       if(!this._realModel)
       {
           this._realModel=instance;
       }
    }

    


    //public addClassInstance<T extends new ()=> AbstractViewModel>(className: string, instance: T ): void
    public addClassInstance<T extends new ()=> AbstractViewModel>(instance: T ): void
    {
        this._classVM=instance;
        /*
        if (!this._classMap[className]) 
        {
           this._classMap[className] = instance;

        } else {
            
            console.error(`Class '${className}' already exists in classMap.`);
        }*/
    }



}