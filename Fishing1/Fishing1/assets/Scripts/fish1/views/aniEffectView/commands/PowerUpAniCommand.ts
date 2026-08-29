/**
 * Created by EricHuang on 2023/10/26.
 */
import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {PowerUpAni} from '../aniEffects/PowerUpAni';
import {log} from 'cc';

export class PowerUpAniCommand extends AniEffectBaseCommand
{
    private _powerUpAni:PowerUpAni;

    constructor(...args)
    {
        super();
        
        //log('PowerUpAniCommand',args);

        this._powerUpAni=args[0];

    }

    public resetRoomData(value?:any):void
    {
        
    }

    public setDataAfterSetRoom(value:any):void
    {
        this._powerUpAni.setDataAfterSetRoom(value.exchangePositions,value.playerIndex);
    }

    public execute(value?:ExecuteOption):any
    {
        //log('execute_PowerUpAniCommand',value);

        this._powerUpAni.showPowerUp(value.other.index,value.other.pwvalue);
    }
}