/**
 * Created by EricHuang on 2023/11/20.
 */
import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {CrazyAniEffect} from '../aniEffects/CrazyAniEffect';
import {log} from 'cc';

export class CrazyAniEffectCommand extends AniEffectBaseCommand
{
    private _crazyAniEffect:CrazyAniEffect;

    constructor(...args)
    {
        super();
        
        log('AwardDiscAniEffectCommand',args);

        this._crazyAniEffect=args[0];

    }

    public resetRoomData(value?:any):void
    {
        this._crazyAniEffect.resetRoomData();
    }

    public setDataAfterSetRoom(value:any):void
    {
        this._crazyAniEffect.setDataAfterSetRoom(value.positions);
    }

    public execute(value?:ExecuteOption):any
    {
        log('execute___crazyAniEffectCommand',value);
        
        if(value.other.open)
        {
            this._crazyAniEffect.openCrazyPropEffect(value.other.table);

        }else{

            this._crazyAniEffect.closeCrazyPropEffect(value.other.table);
        }
        //this._crazyAniEffect.showCallPropEffect(value.other.index,value.other.swp,value.other.ewp);
    }
}