import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EventTest')
export class EventTest extends Component {
    start() {
        //this.node.emit('event_test', 'arg0', 'arg1', 'arg2', 'arg3', 'arg4');
        this.node.on('event_test', this.event_test, this);
    }

    private event_test(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string) {
        console.log("recive event_test : " + arg0 + " " + arg1 + " " + arg2 + " " + arg3 + " " + arg4);
    }


    update(deltaTime: number) {

    }
}


