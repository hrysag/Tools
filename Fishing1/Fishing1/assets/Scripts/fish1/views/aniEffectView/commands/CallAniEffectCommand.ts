/**
 * Created by EricHuang on 2023/11/20.
 */
import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {CallAniEffect} from '../aniEffects/CallAniEffect';
import {log} from 'cc';


export class CallAniEffectCommand extends AniEffectBaseCommand
{
    private _callAniEffect:CallAniEffect;

    constructor(...args)
    {
        super();
        
        log('AwardDiscAniEffectCommand',args);

        this._callAniEffect=args[0];

    }

    public resetRoomData(value?:any):void
    {
        this._callAniEffect.resetRoomData();
    }

    public setDataAfterSetRoom(value:any):void
    {
        this._callAniEffect.setDataAfterSetRoom(value.positions);
    }

    public execute(value?:ExecuteOption):any
    {
        log('execute__callAniEffectCommand',value);

        if(value.other.close)
        {

            this._callAniEffect.closeEffect();

        }else{
            
            this._callAniEffect.showCallPropEffect(value.other.index,value.other.swp,value.other.ewp);
        }
        
        
    }
}