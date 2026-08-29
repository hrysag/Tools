import { _decorator, CCBoolean, Component, CCInteger, Node, CCString, CCFloat } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('GameNodeHashInfo')
export class GameNodeHashInfo {
    @property({ visible: true, displayName: 'NodeName' })
    public nodeName: string = '';

    @property({ type: Node, visible: true, displayName: 'Node' })
    public displayNode: Node = null;

}

@ccclass('GameModeNode')
export class GameModeNode {

    @property({ visible: true, displayName: 'GameCamp', tooltip: '陣營名稱' })
    public gameCamp: number = 0;

    @property({ visible: true, displayName: 'IsShow', tooltip: '是否顯示' })
    public isShow: boolean = false;

    @property({ type: GameNodeHashInfo, visible: true, displayName: 'GameNodeHashInfo', tooltip: '顯示的NodeList' })
    public gameNodeHashInfo: GameNodeHashInfo[] = [];

}