/**
 * Created by EricHuang on 2023/10/23.
 */
import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ShakeAniEffect} from '../aniEffects/ShakeAniEffect';
import {log} from 'cc';

export class ShakeAniEffectCommand extends AniEffectBaseCommand
{
    private _shakeAniEffect:ShakeAniEffect;

    constructor(...args)
    {
        super();
        
        log('ShakeAniEffectCommand',args);

        this._shakeAniEffect=args[0];

    }

    public resetRoomData(value?:any):void
    {
        
    }

    public setDataAfterSetRoom(value:any):void
    {
        
    }

    public execute(value?:ExecuteOption):any
    {
        log('execute_ShakeAniEffectCommand',value);
        this._shakeAniEffect.shakeEffect(value.other);
    }
}