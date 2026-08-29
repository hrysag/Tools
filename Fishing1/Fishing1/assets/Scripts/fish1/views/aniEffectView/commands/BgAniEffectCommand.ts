/**
 * Created by EricHuang on 2023/10/23.
 */
import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {BgAniEffect} from '../aniEffects/BgAniEffect';
import {log} from 'cc';

export class BgAniEffectCommand extends AniEffectBaseCommand
{
    private _bgAniEffect:BgAniEffect;

    constructor(...args)
    {
        super();
        
        log('BgAniEffectCommand',args);

        this._bgAniEffect=args[0];

    }
    
    public resetRoomData(value?:any):void
    {
        
    }

    public setDataAfterSetRoom(value:any):void
    {
        
    }

    public execute(value?:ExecuteOption):any
    {
        log('execute_bgCommands',value);
        if(value.other==0)
        {
            this._bgAniEffect.changeBg();
        
        }else if(value.other==1)
        {

            this._bgAniEffect.bgToWhite();

        }else{

            this._bgAniEffect.bgToDarkBlack();
        }
        
    }
}