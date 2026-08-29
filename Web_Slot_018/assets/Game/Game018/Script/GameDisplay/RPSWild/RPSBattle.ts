import { _decorator, Component, Node, sp } from 'cc';
import { WildBattleData, RPSGuessData } from './RPSDataDef';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { AudioSourceList, SoundList } from '../../DefinitionGameData/SoundList';
const { ccclass, property } = _decorator;

@ccclass('RPSBattle')

export class RPSBattle extends Component {

    @property({ type: Node, visible: true, displayName: 'RPSItemNode', tooltip: '拳種的itemNodes' })
    private _RPSItemNode: Node;

    @property({ type: [RPSGuessData], visible: true, displayName: 'L_RPSItems', tooltip: '左邊拳種的item' })
    private _L_RPSItems: RPSGuessData[] = [];

    @property({ type: [RPSGuessData], visible: true, displayName: 'R_RPSItems', tooltip: '右邊拳種的item' })
    private _R_RPSItems: RPSGuessData[] = [];

    @property({ type: Node, visible: true, displayName: 'explosion', tooltip: '爆炸效果Node' })
    private _explosion: Node;

    @property({ type: Node, visible: true, displayName: 'RPS_Motion', tooltip: '撞擊效果Node' })
    private _RPS_Motion: Node;

    private _skMotion: sp.Skeleton;
    private _skExplosion: sp.Skeleton;

    public init(): void {
        this._skMotion = this._RPS_Motion.getComponent(sp.Skeleton);
        this._skExplosion = this._explosion.getComponent(sp.Skeleton);
        this.node.active = false;
    }

    public closeAllRPSItem(): void {
        const allRPSItems = [...this._L_RPSItems, ...this._R_RPSItems];
        allRPSItems.forEach(item => {
            item.RPSGuessData.forEach(itemData => {
                if (itemData && itemData.rpsNode) {
                    itemData.rpsNode.active = false;
                }
            });
        });
    }

    public closeBattle(): void {
        this.node.active = false;
    }

    public setResultForGuess(lrIndex: number, iconIndex: number, result: number): void {
        let targetBattleData: RPSGuessData;
        if (lrIndex == 1) {
            targetBattleData = this._L_RPSItems[iconIndex];
        } else {
            targetBattleData = this._R_RPSItems[iconIndex];
        }

        let targetNode = this.getTargetRPSItem(targetBattleData, result);
        targetNode.active = true;
    }

    public playRPSMotion(): Promise<void> {

        this.node.active = true;
        AudioManager.instance.playSound(SoundList.FgIconFight, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);

        return new Promise<void>(async (resolve, reject) => {

            let promises: Promise<void>[] = [
                this.playRPSMotionPromise(),
                this.playExplosionPromise()
            ];

            try {

                await Promise.all(promises);
                this.node.active = false;
                this.closeAllRPSItem();
                resolve();

            } catch (e) {
                reject(e);
            }
        });
    }


    private async playRPSMotionPromise(): Promise<void> {
        return new Promise((resolve) => {
            this._skMotion.setAnimation(0, 'battle', false);
            this._skMotion.setCompleteListener(() => {
                resolve()
            });
        });
    }

    private async playExplosionPromise(): Promise<void> {
        return new Promise((resolve) => {
            this._skExplosion.setAnimation(0, 'battle', false);
            this._skExplosion.setCompleteListener(() => {
                resolve()
            });
        });
    }

    private getTargetRPSItem(targetWildBattle: RPSGuessData, iconIndex: number): Node {

        let targetNode: Node;
        for (let item of targetWildBattle.RPSGuessData) {
            if (item.iconId == iconIndex) {
                targetNode = item.rpsNode;
                break;
            }

        }
        return targetNode;
    }
}


