import { _decorator, Component, Node, Label, UIOpacity, tween, UI } from 'cc';
import { FindComponent } from '../../../MyUtils/FindComponent';
import { SpineController } from '../../../MyUtils/AnimationSystem/Components/SpineController';
import { SkeletonExtension } from '../../../../../../Scripts/GameScripts/SkeletonExtension';
import { TransitionsState } from '../../../DefinitionGameData/GameStateConfigDef';
import { AnimationControllersPoolManager } from '../../../MyUtils/AnimationSystem/AnimationControllersPoolManager';
import { Localization } from 'db://assets/Scripts/GameScripts/Localization';
import { LocalizationSpine } from 'db://assets/Scripts/GameScripts/LocalizationSpine';
import { LocalizationLabel } from 'db://assets/Scripts/GameScripts/LocalizationLabel';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { SoundList, AudioSourceList } from '../../../DefinitionGameData/SoundList';
import { GameUtils } from '../../../MyUtils/GameUtils';
const { ccclass, property } = _decorator;
const FG_01_PREFAB_NAME = 'FG_01_FreeStart_FreeBack';
const FG_02_PREFAB_NAME = 'FG_02_FreeStart_FreeBack';

@ccclass('Fg_UI_Component')
export class Fg_UI_Component extends Component {

    public callBackFreeBackFinish: () => void = null;
    private _targetSpine: SpineController = null;
    private _fgTimes_Label: Label = null;
    private _fgResult_Label: Label = null;
    private _camp: number = -1;
    private _currentSpineNodePrefabId: string;
    private _freeBackOutAniRunning: boolean = false;
    private _uiTweenInRunning: boolean = false;//--進場要跑完才會接續處理
    private _isUIlooping: boolean = false;//--確認跑完進場但還在loop的狀態
    private _transitionState: TransitionsState = TransitionsState.NONE;
    private _externalResolve?: () => void;
    private _onCustomSpineCompleteHandler: ((entry?: any) => void) | null = null;


    set transitionState(value: TransitionsState) {
        this._transitionState = value;
    }

    public init(): void {
        this._currentSpineNodePrefabId = '';
        this.node.active = false;
    }

    public async changeFgUITargetForCamp(camp: number): Promise<void> {

        return new Promise(async (resolve, reject) => {
            if (this._camp == camp) {
                resolve();
            } else {
                this.node.active = true;
                let comps;

                if (camp == 0) {
                    this._currentSpineNodePrefabId = FG_01_PREFAB_NAME;
                } else {
                    this._currentSpineNodePrefabId = FG_02_PREFAB_NAME;
                }
                let targetPrefabNode = await this.createSpineNodeUI(this._currentSpineNodePrefabId);

                const currentLanguageKey = Localization.instance.currentLangKey;
                const localizationSpine = FindComponent.findComponentInChildren(targetPrefabNode, LocalizationSpine);
                if (localizationSpine) {
                    await localizationSpine.loadAllSpine(currentLanguageKey);
                    //targetPrefabNode.active = true;
                }
                const localizationLabelComponent = FindComponent.findComponentInChildren(targetPrefabNode, LocalizationLabel);
                if (localizationLabelComponent) {
                    const t = Localization.instance.t.bind(Localization.instance);
                    localizationLabelComponent.updateLabel(t);

                }

                let targetSpineUIComponent = this.initSpineUI(targetPrefabNode, camp);
                this._targetSpine = targetSpineUIComponent;
                comps = FindComponent.findALLCompsInChildren(targetPrefabNode, Label);
                this._fgTimes_Label = this.getLabelComps(comps, 'fnt_FG_freespins');
                this._fgResult_Label = this.getLabelComps(comps, 'fnt_FreeBack_settle');
                this._fgTimes_Label.node.active = false;
                this._fgResult_Label.node.active = false;
                this._camp = camp;
                resolve();
            }
        })

    }

    public setFgResultLabel(value: number): void {
        this._fgResult_Label.string = value.numberComma();
    }

    //-FG轉場次數面板/結算分數面板的進場
    public async playFgFadeInOut(): Promise<void> {
        //console.log('fg_ui_component_playFgFadeInOut:', this._transitionState);
        //-_fadeOutIsRunning
        this._uiTweenInRunning = true;
        this._isUIlooping = false;
        this.node.active = true;
        this.node.on(Node.EventType.TOUCH_START, this.clickHandler);
        this._targetSpine.node.getComponent(UIOpacity).opacity = 255;
        this._targetSpine.node.active = true;
        let currentCampSoundAppear;
        if (this._transitionState == TransitionsState.IN) {
            this._fgTimes_Label.node.active = true;
            currentCampSoundAppear = (this._camp == 0) ? SoundList.FgEnterPageIn1 : SoundList.FgEnterPageIn2;
        } else {
            this._fgResult_Label.node.active = true;
            currentCampSoundAppear = SoundList.FgExitPageIn1;
        }
        AudioManager.instance.playSound(currentCampSoundAppear, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
        // 建立手動 Promise
        return new Promise<void>(async (resolve, reject) => {
            this._externalResolve = resolve;
            try {
                await this.customSpinePlay();//--這個做完就已經完全彈出來了
                this._uiTweenInRunning = false;
                await this.playFGUILoopAni();//--這個2sec
                //await GameUtils.Defer(2000);//--等1秒,讓spine的loop
                await GameUtils.DeferByTweenPromise(2000 / 1000);//--等1秒,讓spine的loop

                this._externalResolve?.();
                this._externalResolve = undefined;
            } catch (e) {
                this._externalResolve?.();
                this._externalResolve = undefined;
                reject(e);
            }
        });



    }

    //-FG轉場次數面板/結算分數面板的退場
    public async playFgFadeOut(): Promise<void> {
        if (this.node.hasEventListener(Node.EventType.TOUCH_START)) {
            this.node.off(Node.EventType.TOUCH_START, this.clickHandler);
        }
        let inOutKey = (this._transitionState == TransitionsState.IN) ? 'freestart_out' : 'freeback_out';
        //console.log('playFgFadeOut:', inOutKey);
        if (inOutKey == 'freeback_out') {
            this._freeBackOutAniRunning = true;
        }

        this._targetSpine.playAni(inOutKey);//--spineFreeBackKeyFrameEvtHandler退場完接tween

    }

    public resetData(): void {
        if (this._targetSpine) {
            this._targetSpine.stopAni();
            this._targetSpine.node.active = false;
            this._fgTimes_Label.node.active = false;
            this._fgResult_Label.node.active = false;
            this.node.active = false;
            /*
            if (this._freeBackOutAniRunning) {
                this._freeBackOutAniRunning = false;
                this.callBackFreeBackFinish?.();
            }*/
        }
    }

    public cleanFGUI(): void {
        if (this._onCustomSpineCompleteHandler) {
            this._targetSpine.spine.setCompleteListener(null);
            this._onCustomSpineCompleteHandler = null;
        }
        this.node.removeChild(this._targetSpine.node);
        AnimationControllersPoolManager.getInstance().pushInstancePrefabNodeToPool(this._currentSpineNodePrefabId, this._targetSpine.node);
        this._currentSpineNodePrefabId = '';
        this._fgTimes_Label = null;
        this._fgResult_Label = null;
        this._targetSpine = null;
        this.node.active = false;
        this._camp = -1;
        //console.log("_targetSpine_CLEAN");
    }


    private createSpineNodeUI(prefabKey: string): Promise<Node> {
        return new Promise((resolve, reject) => {
            let spineNode = AnimationControllersPoolManager.getInstance().getPrefabNode(prefabKey);
            this.node.once(Node.EventType.CHILD_ADDED, () => {
                resolve(spineNode);
            });
            spineNode.getComponent(UIOpacity).opacity = 0;//--會先讀取多語系的spine圖片,所以先關閉opacity
            spineNode.active = true;
            this.node.addChild(spineNode);
        })
    }

    private initSpineUI(spineNode: Node, camp: number): SpineController {
        let spineComponent: SpineController;
        spineComponent = FindComponent.findComponentInChildren(spineNode, SpineController);
        spineComponent.init();
        //-回收後pool會Call resetData(裡面有clearKeyFrameEvent)
        //--20250605棄用(ui面板執行退場動畫結束送出的事件)
        spineComponent.setKeyFrameEvent('out', this.spineFreeBackKeyFrameEvtHandler);
        spineComponent.node.active = false;
        return spineComponent;
    }



    private spineFreeBackKeyFrameEvtHandler = (...args) => {
        if (args[0] == 'out') {
            let opacity = this._targetSpine.node.getComponent(UIOpacity);
            tween(opacity)
                .to(0.46, { opacity: 0 })
                .call(() => {
                    if (this._freeBackOutAniRunning) {
                        this._freeBackOutAniRunning = false;
                        this.callBackFreeBackFinish?.();
                    }
                    this.resetData();
                    opacity.opacity = 255;
                })
                .start();
        }
    }

    private clickHandler = async () => {

        this.node.off(Node.EventType.TOUCH_START, this.clickHandler);//--20250610
        if (this._uiTweenInRunning) {
            this.playFGUILoopAni();
            //await GameUtils.Defer(1000);//--等1秒,讓spine的loop
            await GameUtils.DeferByTweenPromise(1000 / 1000);//--等1秒,讓spine的loop
            this._uiTweenInRunning = false;
            // 手動 resolve 掉原本 playFgFadeInOut() 裡的 promise
            this._externalResolve?.();
            this._externalResolve = undefined;

        } else {
            console.log('clickHandler: finish_in_uiTweenInRunning_during_looping');
            //this._dirtyLockUIClick = false;
            //--不需要了..直接提早進入退場
            /**
             * 這邊是要做完整個進場+loop後才會resolve掉promise
             * 當玩家click的時候,
             * 1.還沒做完進場就直接loop 1秒 resolve掉promise(外面流程做退場控制)
             * 2.已經做完進場,但還在loop中,就直接resolve掉promise(外面流程做退場控制)
             */
            //this.callBackForUIClick?.();//--播放兩個前後光圈的轉場
            this._externalResolve?.();
            this._externalResolve = undefined;
        }

    }

    private async playFGUILoopAni(): Promise<void> {
        if (this._targetSpine) {
            const inOutKey = (this._transitionState == TransitionsState.IN) ? 'freestart_loop' : 'freeback_loop';
            this._isUIlooping = true;
            await this._targetSpine.playAniInPromise(inOutKey);
            this._isUIlooping = false;
        }
    }

    /**
     * FG轉場次數面板/結算分數面板的退場的keyframe事件
     * 準備收掉面板
     * PS--要播放 freestart_out 或 freeback_out 的時候,會觸發這個事件
     * call playFgFadeOut
     */
    private customSpinePlay(): Promise<void> {
        return new Promise((resolve, reject) => {
            const spine = this._targetSpine.spine;

            this._onCustomSpineCompleteHandler = (trackEntry) => {
                spine.setCompleteListener(null);
                this._onCustomSpineCompleteHandler = null;
                resolve();
            }
            /*
            const spineCompleteHandler = (trackEntry) => {
                spine.setCompleteListener(null);
                resolve();
            }*/
            let inOutKey = (this._transitionState == TransitionsState.IN) ? 'freestart_in' : 'freeback_in';
            let inOutKeySub = (this._transitionState == TransitionsState.IN) ? 'freestart_in_sub' : 'freeback_in_sub';
            spine.setAnimation(0, inOutKey, false);
            spine.setAnimation(1, inOutKeySub, false);
            spine.setCompleteListener(this._onCustomSpineCompleteHandler);
        })
    }

    private getLabelComps<T extends Component>(value: T[], str: string): T {
        for (let comp of value) {
            if (comp.node.name == str) {
                return comp;
            }
        }
    }


}


