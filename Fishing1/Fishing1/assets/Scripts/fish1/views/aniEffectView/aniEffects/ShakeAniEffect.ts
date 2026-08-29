/**
 * Created by EricHuang on 2023/10/27.
 */

import { TweenMaxCocosPlugin } from "../../../../framework/utils/TweenMaxPlugin";
import {Node,v3} from 'cc';
import {log} from 'cc';

export class ShakeAniEffect
{
    private _container:Node;

    constructor(...args)
    {
       
    }

    public shakeEffect(target:Node):void
    {
       
       log('shakeEffect',target.position);
       
       target.setPosition(v3(0,0,target.position.z));
      
       let component:TweenMaxCocosPlugin=target.getComponent(TweenMaxCocosPlugin);

       if(!target)
       {
            component=target.addComponent(TweenMaxCocosPlugin);
       }

       TweenMax.fromTo(component, 0.05, {x:100,y:80}, {x:0,y:0,clearProps:"x,y", repeat:4});
       //TweenMax.fromTo(target, 0.05, {x:100,y:80},{x:0,y:0,clearProps:"x,y",repeat:2});
        
    }

}
 
             