import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Example')
export class Example extends Component {

    public play() {
        console.log("成功呼叫 Example 的 play 方法");
    }
}


