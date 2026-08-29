import { _decorator, Component, Node, Label, SpriteFrame, Sprite } from 'cc';
import {
    AnimationController,
    AniCtrlPropDef,
    GameUtilsTools

} from '../../ReferencePath';
import { GlobalAccessReader } from '../../DefinitionGameData1016/AccessDefs/GlobalAccess';
import { GameGlobalData, GameGlobalKeys } from '../../DefinitionGameData1016/GameGlobalData1016';
import { AsyncScope } from '../../MyUtils/AsyncScope/AsyncScope';
import { PlaySelector } from '../../MyUtils/AnimationSystemV2/Definitions/IPlayOptions';
import { SoundList, AudioSourceList, MusicList } from '../../DefinitionGameData1016/SoundList1016';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/ModuleEntry';
//import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
const ANI_SHOWUP_NAME = 'Show';
const DEBUG_TITLE = 'RespinBoardController';
const SIGNAL_KEY = 'RESPIN_BOARD_CTRL_SIGNAL';
const { ccclass, property } = _decorator;
/**
 * 這是進去RS之前顯示次數的大面板
 */
@ccclass('RespinBoardController')
export class RespinBoardController extends Component {

    @property({ type: Node, visible: true, displayName: "LabelNode", tooltip: "LabelNode" })
    private _labelNode: Node = null;

    @property({ type: AnimationController, visible: true, displayName: "AnimationController", tooltip: "動畫面板" })
    private _animationController: AnimationController = null;

    @property({ type: [SpriteFrame], visible: true, displayName: "NumberSpriteFrames", tooltip: "數字圖片spriteframe陣列" })
    private _numberSpriteFrames: SpriteFrame[] = [];

    //private _label:Label;
    private _fakeLabelSprite: Sprite;
    private _dirtyFirstOnLoad: boolean = false;
    private _async: AsyncScope;


    protected onLoad(): void {
        if (this._dirtyFirstOnLoad) return;
        this._dirtyFirstOnLoad = true;
        this.init();
    }

    public init(): void {
        if (!this._dirtyFirstOnLoad) return;
        this._animationController.init();
        this._fakeLabelSprite = this._labelNode.getComponent(Sprite);
        this.setReSpinTimes(0); // 初始化分數顯示為0
        this._async = AsyncScope.getInstance();
    }

    public setReSpinTimes(count: number): void {
        const index = (count == 2) ? 0 : 1;
        this._fakeLabelSprite.spriteFrame = this._numberSpriteFrames[index];
        //this._label.string = count.numberComma();
    }


    public async openWithEvtAndFinishPromise(evtCallBack: (...args: any[]) => void): Promise<void> {

        const duringBoardTime = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.respin?.duringBoard);
        //--直接改變撥放的速度來達成想要的時間(AEP獨有方法)
        //this._animationController.gotoPlayLastFrame({ aniState: ANI_SHOWUP_NAME });

        this._animationController.changeSpeedWithAep(
            { aniState: ANI_SHOWUP_NAME },
            duringBoardTime,
            ['Connect']
        );

        const signal = this._async.createAbortScope(SIGNAL_KEY);
        AudioManager.instance.playSound(SoundList.respin_in, SOUND_TYPE.NORMAL, AudioSourceList.RsAs);
        this.playVoice();
        const h = this.playAniAsCancelable({ aniState: ANI_SHOWUP_NAME }, evtCallBack);
        const callbackWrapper = (value: any) => {
            //this._animationController.gotoPlayLastFrame({ aniState: ANI_SHOWUP_NAME });
            h.cancel();
            evtCallBack();
        }
        const task = this._async.registerCancelablePromise(
            SIGNAL_KEY,
            h.promise,
            callbackWrapper,
            signal,
            SIGNAL_KEY
        )
        /*
        const task = new Promise<void>((resolve) => {
            this._animationController.playAniWithFrameEvtCallBack(
                evtCallBack,
                async () => {
                    GameUtilsTools.debugLog(DEBUG_TITLE, 'openWithEvtAndFinishPromise', {msg:'evtCallBack'});
                    resolve();
                },
                false,
                { aniState: ANI_SHOWUP_NAME }
            )
        });
        */
        await task;
    }

    private playAniAsCancelable(
        aniState: PlaySelector,
        evtCallBack: (...args: any[]) => void
    ): { promise: Promise<void>, cancel: () => void } {

        let resolveFn: () => void;
        let finished = false;
        const promise = new Promise<void>((resolve) => {

            resolveFn = resolve;
            // 播放動畫，完成時 resolve
            this._animationController.playAniWithFrameEvtCallBack(
                evtCallBack,
                () => {
                    if (finished) return;
                    finished = true;
                    resolveFn();
                },
                false,
                aniState
            );
        });

        // 取消：停止，強制 resolve
        const cancel = () => {
            if (finished) return;
            finished = true;
            try {
                this._animationController.stopAni?.();
                this._animationController.goBackToDefault?.();
                AudioManager.instance.stopSound([AudioSourceList.RsAs]);
                AudioManager.instance.stopSound([AudioSourceList.Voice]);
                // this._animationController.playAni?.(AnimationStateType.Idle);

            } finally {
                resolveFn?.();
            }
        };

        return { promise, cancel };
    }

    private playVoice(): void {

        let voiceList = [SoundList.Respin_01, SoundList.Respin_02, SoundList.Respin_03, SoundList.Respin_04, SoundList.Respin_05];
        let conditionNumber = 30;//--30%的機率
        if (conditionNumber > 0) {
            const checkFlag = GameUtilsTools.createAndShuffleProbabilityPool(conditionNumber);
            if (checkFlag) {
                const randomIndex = GameUtilsTools.getRangeRandomInt(0, voiceList.length - 1);
                AudioManager.instance.playSound(voiceList[randomIndex], SOUND_TYPE.ONE_SHOT, AudioSourceList.Voice);
            }
        }
    }

    public goBack(): Promise<void> {
        //--保留未來切成進退場兩段來播放退場用的
        return Promise.resolve();
    }

    public close(): void {
        if (this._animationController.isPlaying) this._animationController.stopPromiseAni();
        this._animationController.goBackToDefault();
    }

    public stop(): void {

    }

}


