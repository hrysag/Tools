import { _decorator, Component, Node, sp } from 'cc';
import { Utility } from 'db://assets/Scripts/Utils/Utility';
const { ccclass, property } = _decorator;

@ccclass('MixTest')
export class MixTest extends Component {
    // async start() {

    //     let spine = this.getComponent(sp.Skeleton);


    //     spine.setMix('NG_idle', 'FG_idle', 0.5);
    //     // spine.setMix('FG_idle', 'NG_idle', 0.5);

    //     await Utility.waitPromise(2);
    //     spine.setAnimation(0, 'NG_idle', true);
    //     await Utility.waitPromise(5);
    //     spine.setAnimation(0, 'FG_idle', false);
    //     spine.setAnimation(0, 'FG_idle', false);

    // }

}
