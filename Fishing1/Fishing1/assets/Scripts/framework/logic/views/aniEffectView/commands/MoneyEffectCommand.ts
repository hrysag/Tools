/**
 * Created by EricHuang on 2023/10/08.
 */
import {AniEffectBaseCommand} from '../../../../game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../game/aniEffect/AniEffectDefinitionsBase';
import {MoneyEffect} from '../anieffects/MoneyEffect';
import {log} from 'cc';


export class MoneyEffectCommand extends AniEffectBaseCommand
{
    private _moneyEffect:MoneyEffect;
    
    constructor(...args)
    {
        super();
        log('MoneyEffectCommand_',args);

        this._moneyEffect=args[0];
    }

    public resetRoomData(value?:any):void
    {
        
    }

    public setDataAfterSetRoom(value:any):void
    {
        /**
         *  coinEndinfo:this._aniPositionInfo.coniEndinfo,
            playerIndex:this._playerIndex,
         */
        this._moneyEffect.setDataAfterSetRoom(value.coinEndinfo);
    }

    public execute(value?:ExecuteOption):any
    {
        this._moneyEffect.showMoneyAnimation(value.other.isPlayer,value.other.x,value.other.y,value.other.playerIndex);
    }
}