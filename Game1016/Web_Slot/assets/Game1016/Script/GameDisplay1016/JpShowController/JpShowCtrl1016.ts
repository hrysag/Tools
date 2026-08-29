import { _decorator, AudioSource, Component, Game, Node, tween, UIOpacity } from 'cc';
import { BasicJPShowWinCtrl, GameUtilsTools } from '../../ReferencePath';
import { JpShowAniCtrl1016 } from './components/JpShowAniCtrl1016';
import { GlobalAccessReader } from '../../DefinitionGameData1016/AccessDefs/GlobalAccess';
import { GameGlobalData, GameGlobalKeys } from '../../DefinitionGameData1016/GameGlobalData1016';
import { WinType, IJpInterruptTime } from '../../MyUtils/BasicWinShowTools/Definitions/ShowWinDef';
//import { AudioManager } from 'db://assets/Scripts/Audio/AudioManager';
import { MusicList } from '../../DefinitionGameData1016/SoundList1016';
import { AudioManager } from 'db://assets/Scripts/ModuleEntry';
const { ccclass, property } = _decorator;

@ccclass('JpShowCtrl1016')
export class JpShowCtrl1016 extends BasicJPShowWinCtrl {

    @property({ type: Node, visible: true, displayName: 'bgDarkNode', tooltip: '背景的黑底' })
    private _bgDarkNode: Node = null;
    private _tweenResolvePromise: (() => void) | null;//--可外部中斷的tween promise

    @property({ type: AudioSource, visible: true, displayName: 'bgmAudioSource1', tooltip: '背景音樂AudioSource1' })
    private _bgmAudioSource1: AudioSource = null;

    @property({ type: AudioSource, visible: true, displayName: 'bgmAudioSource2', tooltip: '背景音樂AudioSource2' })
    private _bgmAudioSource2: AudioSource = null;

    public override init(): void {
        super.init();
        this._bgDarkNode.active = false;
        this._frameEventCallBack = this.frameEvtCallBack;

    }

    public register(): void {

        const gameStepDelayTimeList = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList);
        const loopDuration = gameStepDelayTimeList.get(cfg => cfg.Jackpot?.loopDuration);
        const fastLoopDuration = gameStepDelayTimeList.get(cfg => cfg.Jackpot?.fastLoopDuration);
        const runNumberDuration = gameStepDelayTimeList.get(cfg => cfg.Jackpot?.runDuration);
        const interruptTime = gameStepDelayTimeList.get(cfg => cfg.Jackpot?.interruptTime);
        this._interruptTimeData = new Map<WinType, IJpInterruptTime>(
            [
                [WinType.BigWin, {
                    loopDurationTime: loopDuration,
                    fastLoopDuration: fastLoopDuration,
                    runDurationTime: runNumberDuration,
                    canInterruptTime: interruptTime
                }],
                [WinType.SuperWin, {
                    loopDurationTime: loopDuration,
                    fastLoopDuration: fastLoopDuration,
                    runDurationTime: runNumberDuration,
                    canInterruptTime: interruptTime
                }],
                [WinType.EpicWin, {
                    loopDurationTime: loopDuration,
                    fastLoopDuration: fastLoopDuration,
                    runDurationTime: runNumberDuration,
                    canInterruptTime: interruptTime
                }],
                [WinType.MegaWin, {
                    loopDurationTime: loopDuration,
                    fastLoopDuration: fastLoopDuration,
                    runDurationTime: runNumberDuration,
                    canInterruptTime: interruptTime
                }]

            ]
        );

        //this._gameStepDelayTimeList = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList);

        super.register();
    }



    //--強制中止tween promise
    public forceStopPromise(): void {

        if (this._tweenResolvePromise) {
            this._tweenResolvePromise();
            this._tweenResolvePromise = null;
        }
    }

    public test(): void {
        this.showJPWin(200, 100);
    }

    //--override it
    protected override async processBoardIn(): Promise<void> {

        this._currentJpBoard.node.active = true;
        this._bgDarkNode.active = true;
        this.tweenOpacity(this._bgDarkNode, 255, 0.25);
        await this._currentJpBoard.openUIBoard();
    }

    //--override it
    protected addFrameEventCallBack(): void {
        const jpAniCtrl = this._currentJpBoard as JpShowAniCtrl1016;
        if (jpAniCtrl.frameEventCallBack == null) {
            jpAniCtrl.frameEventCallBack = this.frameEvtCallBack;
        }
    }

    //--78有夠不好做的功能
    private frameEvtCallBack = async (): Promise<void> => {
        //console.log('FrameEvtCallBack: HideNumber');
        await this.tweenOpacity(this._bgDarkNode, 0, 0.25);
        this._bgDarkNode.active = false;
    }

    private tweenOpacity(target: Node, opacityValue: number, duration: number): Promise<void> {

        const upOpacity = target.getComponent(UIOpacity);
        const { promise, cancel } = GameUtilsTools.TweenActionPromiseWithCancel(
            upOpacity,
            duration,
            { opacity: opacityValue }
        );
        // 保存 cancel 以便外部中斷
        this._tweenResolvePromise = () => cancel(true);
        return promise;
    }

    protected override async processRunScoreLabel(value: number): Promise<void> {

        let label = (this._currentJpBoard as JpShowAniCtrl1016).labelNumber;
        if (label) {
            this._jpDigitsAniNumber.setLabelNode(label);
        }
        await this._jpDigitsAniNumber.showJpDigitsAniNumber(value);
    }

    //--0=fadeIn, 1=fadeOut
    protected override fadeInOrOutBGMusic(value: number): void {

        const music1Playing: boolean = this._bgmAudioSource1.playing;
        const music2Playing: boolean = this._bgmAudioSource2.playing;
        //const currentMusicSource = music1Playing ? this._bgmAudioSource1 : (music2Playing ? this._bgmAudioSource2 : null);


        const startVolume = (value == 0) ? 0 : 1;
        const endVolume = (value == 0) ? 1 : 0;
        this._musicFadeOutComplete = null;
        if (value == 1) {
            //--fade out
            this._musicFadeOutComplete = () => {
                //---ready
                //AudioManager.instance.pauseMusic();
                if (music1Playing) {
                    AudioManager.instance.pauseMusic();
                } else {
                    AudioManager.instance.pauseMusic2();
                }
                this._musicFadeOutComplete = null;
            }
        } else {
            //-fade in
            //AudioManager.instance.resumeMusic();
            if (music1Playing) {
                AudioManager.instance.resumeMusic();
            } else {
                AudioManager.instance.resume2Music();
            }
        }

        if (music1Playing) {
            AudioManager.instance.fadeMusicVolume(startVolume, endVolume, 0.5, this._musicFadeOutComplete);
        } else {
            AudioManager.instance.fadeMusic2Volume(startVolume, endVolume, 0.5, this._musicFadeOutComplete);
        }

    }

}


