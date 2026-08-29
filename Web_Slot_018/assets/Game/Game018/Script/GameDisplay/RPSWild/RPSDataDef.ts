import { _decorator, CCBoolean, CCInteger, Node, CCString, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WildBattleData')

export class WildBattleData {

    @property({ type: CCInteger, tooltip: 'item_serverNumber' })
    public iconId: number = 0;

    @property({ type: Node, tooltip: 'RPSNodeItems' })
    public rpsNode: Node = null;

}

@ccclass('RPSGuessData')
export class RPSGuessData {

    @property({ type: [WildBattleData], tooltip: 'RPSItems for reel' })
    public RPSGuessData: WildBattleData[] = [];
}
