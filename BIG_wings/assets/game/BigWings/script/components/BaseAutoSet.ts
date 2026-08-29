import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BaseAutoSet')
export class BaseAutoSet extends Component {

    protected _currentAutoNumberNode: Node;

    protected _currentAutoNumber: number;

    set currentAutoLabel(node: Node) {
        this._currentAutoNumberNode = node;
    }

    get currentAutoNumber(): number {
        return this._currentAutoNumber;
    }
}
