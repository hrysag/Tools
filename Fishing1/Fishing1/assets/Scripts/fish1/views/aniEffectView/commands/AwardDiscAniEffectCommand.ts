/**
 * Created by EricHuang on 2023/10/23.
 */
import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {AwardDiscAniEffect} from '../aniEffects/AwardDiscAniEffect';
import {log} from 'cc';

export class AwardDiscAniEffectCommand extends AniEffectBaseCommand
{
    private _awardDiscAniEffect:AwardDiscAniEffect;

    constructor(...args)
    {
        super();
        
        log('AwardDiscAniEffectCommand',args);

        this._awardDiscAniEffect=args[0];

    }

    public resetRoomData(value?:any):void
    {
        this._awardDiscAniEffect.resetRoomData(); 
    }

    public setDataAfterSetRoom(value:any):void
    {
        this._awardDiscAniEffect.setDataAfterSetRoom(value.positions,value.playerIndex);
    }

    public execute(value?:ExecuteOption):any
    {
        log('execute_AwardDiscAniEffectCommand',value);
        
        this._awardDiscAniEffect.playAndShowPayOff(value.other);//-test
    }
}