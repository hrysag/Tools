import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Example2')
export class Example2 extends Component {
    public playWithParam(param: string) {
        console.log("成功呼叫 Example2 的 playWithParam 方法，參數: " + param);
    }
}