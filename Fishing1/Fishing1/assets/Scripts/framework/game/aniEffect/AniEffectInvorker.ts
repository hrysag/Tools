/**
 * Created by EricHuang on 2023/10/05.
 */
import {IfAniEffectCommand,InitAniEffect,ExecuteOption,AniEffectBaseCommand} from './AniEffectDefinitionsBase';
import {AniEffectCommandFactory} from './AniEffectCommandFactory';
import {AniEffectInstanceSingleton} from './AniEffectInstanceSingleton';
import {AnimationEffectEvent} from '../events/eventBase';
import {EventSendObject} from '../events/eventBase';
import {EventTarget} from 'cc';
import {log} from 'cc';

export abstract class AniEffectInvorker extends EventTarget
{
    
    private _commands: { [id: number]: IfAniEffectCommand };

    private _instances: { [key: string]: any };

    constructor()
    {
        super(); 
        
        this._commands={};

        this._instances={};

    }

    public addCommand(commandDefinition:InitAniEffect):void
    {
        const { id, commandConstructor,classConstructor,classConstructorId,listenerStr ,classArgs } = commandDefinition;
        
        if (!this._commands[id]) 
        {
          /**
         * 20240328-在cocos creator發布選項中,如果將<調試模式>打開,
         * 在build-config-for-cicd.json裡面的debug屬性=true
         * uglifyjs將不會介入作混淆縮排的動作.此時的js輸出會是保留function name的型態
         * 但是正式發布時debug的屬性=false時,uglifyjs將介入作混淆縮排的動作,
         * function name將會被拿掉(外層是用一個object包覆住).
         * 所以取constructor.name會出現你意想不到的名稱
         */
        //const classKey = classConstructor.name;
          const classKey = classConstructorId;
          
          if (!this._instances[classKey]) 
          {
            this._instances[classKey] = AniEffectInstanceSingleton.getInstance(classKey, () => new classConstructor(...classArgs));
          }
        
          this._commands[id] = AniEffectCommandFactory.createCommand(commandConstructor, this._instances[classKey]);

          if(listenerStr)
          {
            if(listenerStr!='')
            {
                (<AniEffectBaseCommand>this._commands[id]).on(listenerStr,this.listenHandler);
            }

          }
          
          (<AniEffectBaseCommand>this._commands[id]).on(AnimationEffectEvent.COMPLETE,this.listenHandler);

        
        } else {
          
            log(`Command with ID ${id} already exists and cannot be overwritten.`);

        }

        //log('Invoker_aniEffect',this._commands,this._instances);
    }

    private listenHandler=(e:EventSendObject)=>
    {
        if(e.type==AnimationEffectEvent.COMPLETE)
        {
         
            this.aniEffectCompleteHandler(e);

        }else{

            this.aniEffectEventHandler(e);
        }
    }


    protected abstract aniEffectCompleteHandler(e:EventSendObject):void
    

    protected abstract aniEffectEventHandler(e:EventSendObject):void
   

    public executeAnimation(executeOption:ExecuteOption):any
    {
        let r:any=null;
       
        const command = this._commands[executeOption.command];

        log('check_effectData',command,executeOption);

        if (command) {
            
            r=command.execute(executeOption);
        } 
        
        return r;
    }

    public getCommand(command:number):IfAniEffectCommand
    {
        return this._commands[command];
    }

    public getInstances(instancesKey:string):any
    {
       return this._instances[instancesKey];
    }




   



}