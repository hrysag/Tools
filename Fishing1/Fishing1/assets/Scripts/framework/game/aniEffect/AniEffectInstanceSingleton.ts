/**
 * Created by EricHuang on 2023/10/07.
 */

export class AniEffectInstanceSingleton 
{
    private static instances: { [key: string]: any } = {};
  
    static getInstance<T>(key: string, constructor: () => T): T {
      if (!this.instances[key]) {
        this.instances[key] = constructor();
      }
      return this.instances[key];
    }
}