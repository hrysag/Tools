/**
 * Created by EricHuang on 2023/10/09.
 */
import {AniEffectBaseCommand} from '../../../../game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../game/aniEffect/AniEffectDefinitionsBase';
import {JumpDigitsEffect} from '../anieffects/JumpDigitsEffect';
import {log} from 'cc';

export class JumpDigitsEffectCommand extends AniEffectBaseCommand
{
    private _JumpDigitsEffect:JumpDigitsEffect;
    
    constructor(...args)
    {
        super();
        log('JumpDigitsEffectCommand__',args);

        this._JumpDigitsEffect=args[0];
    }

    public setDataAfterSetRoom(value:any):void
    {
        
    }

    public resetRoomData(value?:any):void
    {
        
    }

    /**
     * 
     * @param value 
     *  showNumber:2500, 
        x:value[0].info.endX,
        y:value[0].info.endY,
        strTexture?:....
     */
    public execute(value?:ExecuteOption):any
    {
        this._JumpDigitsEffect.showJumpDigits(value.other.showNumber,value.other.x,value.other.y,value.other.strTexture);
    }
}