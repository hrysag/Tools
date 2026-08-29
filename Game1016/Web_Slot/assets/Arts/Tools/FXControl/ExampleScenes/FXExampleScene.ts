import { _decorator, Button, Component, Node } from 'cc';
import { ActionEventPlayer } from '../Script/Event/ActionEventPlayer';
const { ccclass, property } = _decorator;

@ccclass('ExampleSet')
export class ExampleSet {
    @property(Button)
    button: Button = null;

    @property(ActionEventPlayer)
    player: ActionEventPlayer = null;

    @property(ActionEventPlayer)
    player2: ActionEventPlayer = null;

    init() {
        this.button.node.on(Button.EventType.CLICK, () => {
            console.log('button press');
            this.player.play();
            this.player2?.play();
        }, this);
    }
}

@ccclass('FXExampleScene')
export class FXExampleScene extends Component {

    @property({ type: [ExampleSet] })
    exampleSets: ExampleSet[] = [];

    start() {
        for (let i = 0; i < this.exampleSets.length; i++) {
            this.exampleSets[i].init();
        }
    }
}


