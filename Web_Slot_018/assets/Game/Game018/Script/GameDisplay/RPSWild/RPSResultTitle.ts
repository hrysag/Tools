import { _decorator, Component, Node, sp } from 'cc';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { SoundList, AudioSourceList } from '../../DefinitionGameData/SoundList';
const { ccclass, property } = _decorator;

@ccclass('RPSResultTitle')
export class RPSResultTitle extends Component {

    @property({ type: Node, visible: true, displayName: 'ResultTitle spine node', tooltip: '猜拳結果標題(spine node)' })
    private _resultTitle: Node = null;
    private _spResultTitle: sp.Skeleton;
    private _mapResultTitle: Map<number, string>;
    private _thisRoundCampForLight: number = -1;//--開啟猜拳陣營 1=左邊 2=右邊 -1=無陣營
    private _firstOpenWinner: boolean = false;//--第一次開啟猜拳陣營

    set thisRoundCampForLight(value: number) {
        this._thisRoundCampForLight = value;
        //console.log('thisRoundCampForLight', this._thisRoundCampForLight);
    }

    public init(): void {
        this._spResultTitle = this._resultTitle.getComponent(sp.Skeleton);
        this._mapResultTitle = new Map<number, string>(
            [
                [0, 'draw'],//--平手
                [1, 'icon_08_win'],//--左邊贏
                [2, 'icon_09_win'],//--右邊贏
                [3, 'respin']//--重新旋轉
            ]
        );
        this.node.active = false;
        //console.log('check_rpsResultTitle', this._spResultTitle, this._mapResultTitle);
    }

    public showResultTitle(value: number): Promise<void> {
        return new Promise<void>((resolve) => {
            this.node.active = true;
            this._spResultTitle.setCompleteListener((trackEntry) => {
                this._spResultTitle.setCompleteListener(null);
                this.node.active = false;
                resolve();
            });

            let targetAniName = this._mapResultTitle.get(value);
            let soundTarget = -1;
            if (value == 1 || value == 2) {//--左邊贏或右邊贏
                if (this._thisRoundCampForLight == 1) {
                    //--左邊開啟猜拳陣營(以他的輸贏決定播放書或是贏的音效)
                    if (value == 1) {
                        soundTarget = SoundList.RespinWin;
                    }
                } else if (this._thisRoundCampForLight == 2) {
                    //--右邊開啟猜拳陣營(以他的輸贏決定播放書或是贏的音效)
                    if (value == 2) {
                        soundTarget = SoundList.RespinWin;
                    }
                }
            } else if (value == 0) {
                soundTarget = SoundList.RespinDraw;//--平手
            } else if (value == 3) {
                soundTarget = SoundList.Respin;//--重新旋轉
            }
            if (soundTarget != -1) {
                AudioManager.instance.playSound(soundTarget, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
            }

            this._spResultTitle.setAnimation(0, targetAniName, false);
        });


    }


}


