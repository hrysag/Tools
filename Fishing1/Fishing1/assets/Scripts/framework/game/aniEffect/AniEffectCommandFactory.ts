/**
 * Created by EricHuang on 2023/10/07.
 */
import {IfAniEffectCommand} from './AniEffectDefinitionsBase';

export class AniEffectCommandFactory 
{
    public static createCommand<T extends IfAniEffectCommand>(
      constructor: new (...args: any[]) => T,
      ...args: any[]
    ): T {
      return new constructor(...args);
    }
}