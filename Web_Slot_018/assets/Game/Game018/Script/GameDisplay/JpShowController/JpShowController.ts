import { _decorator, Component, Node, tween, UIOpacity, AudioSource, AudioClip, input, Input, randomRangeInt } from 'cc';
import { JpDigiAniNumber } from './Component/JpDigiAniNumber';
import { JpAniController } from './Component/JpAniController';
import { JpSoundController } from './Component/JpSoundController';
import { WinType } from 'db://assets/Scripts/Utils/Config';
import { GameUtils } from '../../MyUtils/GameUtils';
import { FindComponent } from '../../MyUtils/FindComponent';
import { Orientation } from '../../../../../Scripts/Utils/Config';
import { IWindowResize } from 'db://assets/Scripts/Utils/IWindowResize';
import { GameState } from '../../DefinitionGameData/GameStateConfigDef';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { SoundList, MusicList, AudioSourceList } from '../../DefinitionGameData/SoundList';

const { ccclass, property } = _decorator;

@ccclass('JpShowController')
export class JpShowController extends IWindowResize {

    @property({ type: JpDigiAniNumber, visible: true, displayName: 'JP數字顯示', tooltip: 'JP數字顯示' })
    private _jpDigiAniNumber: JpDigiAniNumber = null;
    @property({ type: JpAniController, visible: true, displayName: 'JP動畫控制', tooltip: 'JP動畫' })
    private _jpAniController: JpAniController = null;
    @property({ type: UIOpacity, visible: true, displayName: 'JP動畫控制UIOpacity', tooltip: 'JP動畫' })
    private _jpUIOpacity: UIOpacity = null;
    @property({ type: Node, visible: true, displayName: 'blockSensor', tooltip: '點擊空白處感應區' })
    private _blockSensor: Node = null;

    @property({ type: JpSoundController, visible: true, displayName: 'JP音效控制器', tooltip: 'JP音樂' })
    private _jpSoundController: JpSoundController = null; //---音效控制
    private _currentGameState: GameState;
    private _currentCampData: number;//--NG模式=-1
    private _musicFadeOutComplete: () => void = null; // 音樂淡出完成的回調函式
    private _screenRotationResolution: Orientation = null;
    private _onlyOnceFlag: boolean = false; //---結尾聲用的(因為動畫與公版的聲音對不起來)
    private _resolvePromise: (() => void) | undefined; // promise resolve 函式
    protected onLoad(): void {
        //要補keyboard事件
        //input.on(Input.EventType.KEY_PRESSING, this.onKeyDownOrPressing, this);
        //input.on(Input.EventType.KEY_DOWN, this.onKeyDownOrPressing, this);
    }

    /**
     * 因為該死的美術+企劃,搞出了JP動畫有直橫版的不同,如果在播動畫的時候,又要改變方向,會導致動畫錯誤
     * 為了要能夠接上來讓視覺合理化的smooth過渡,所以這邊同時播兩個直版/橫版的動畫,再去開關UIOpacity
     * PS-
     * 1.用這個方法的前提是,兩個動畫的時間長度要一樣,不然會導致動畫不同步
     * 2.不能使用active來開關,他會在active=true的時候,才會開始播放動畫
     * @param orientation 螢幕方向
     * @returns 
     */
    public override onWindowResize(orientation: Orientation): void {
        if (this._screenRotationResolution !== orientation) {
            this._screenRotationResolution = orientation;
            this._jpAniController?.changeScreenRotationResolution(orientation);
        }
    }


    public init(): void {

        this._jpDigiAniNumber.init();
        this._jpAniController.init();
        this.node.active = false;
        this._currentGameState = GameState.NORMAL;
        this._currentCampData = -1;
    }

    public changeGameMode(gameState: GameState, camp: number): void {
        this._currentGameState = gameState;
        this._currentCampData = camp;
    }

    public showJPWin(odds: number, totalBet: number): Promise<void> {

        return new Promise(async (resolve, reject) => {
            this._resolvePromise = resolve;
            this._onlyOnceFlag = false; //---重置結尾聲
            let type: WinType = WinType.BigWin;
            if (odds >= 25 && odds <= 50) {
                type = WinType.BigWin;
            }
            else if (odds > 50 && odds <= 100) {
                type = WinType.SuperWin;
            }
            else if (odds > 100 && odds <= 200) {
                type = WinType.MegaWin;
            }
            else if (odds > 200) {
                type = WinType.EpicWin;
            }
            else {
                //Debug.LogError(`錯誤倍數 ${odds}`)
                this.finishAndRemove();
            }
            //--20250613--修改為5S跑分 2秒停留
            this._blockSensor.on(Node.EventType.TOUCH_END, this.blockBtnClickHandler);
            this.node.active = true;
            let totalScore = (odds * totalBet).fixed();
            this._jpAniController.playJPAnimation(type);
            this._jpSoundController.playJPSound(type);//--播放音效
            this.fadeInOrOutBGMusic(1);//--fade out

            //console.log(`@@跑分開始@@顯示時間: ${t1}ms`);
            //--PS因為背景音樂的結尾那一聲約落在4S左右
            await this._jpDigiAniNumber.showJpDigiAniNumber(totalScore);//---4sec--20250613
            //let t2 = Date.now();
            //console.log(`@@跑分結束@@顯示時間: ${t2}ms`);
            //console.log(`@@跑分開始~數字結束@@持續時間: ${t2 - t1}ms`);
            /**
                會往下走一定是false,不然就不會return promise了
             * 
             * <播放音效>
             * -false代表完整播放結束
             */
            this.fadeInOrOutBGMusic(0);//--fade in
            this.onScoreRunEnd(false);

            //await GameUtils.Defer(2000);
            await GameUtils.DeferByTweenPromise(2000 / 1000);//--原本單位是毫秒現在換算成秒
            //let t3 = Date.now();
            //console.log(`@@跑分停留結束@@顯示時間: ${t3}ms`);
            //console.log(`@@跑分停留~結束@@持續時間: ${t3 - t2}ms`);
            await this.fadeOut();
            this.finishAndRemove();
        });
    }

    //--0=fadeIn, 1=fadeOut
    private fadeInOrOutBGMusic(value: number): void {
        let startVolume = (value == 0) ? 0 : 1;
        let endVolume = (value == 0) ? 1 : 0;
        this._musicFadeOutComplete = null;
        if (value == 1) {
            //--fade out
            this._musicFadeOutComplete = () => {
                //---ready
                AudioManager.instance.pauseMusic();
                this._musicFadeOutComplete = null;
            }

        } else {
            //-fade in
            AudioManager.instance.resumeMusic();
        }
        AudioManager.instance.fadeMusicVolume(startVolume, endVolume, 0.5, this._musicFadeOutComplete);
    }

    private fadeOutFinish(): void {
        this._jpAniController.closeAndStop();
        this._jpDigiAniNumber.stopJpDigiAniNumber();
    }

    private onScoreRunEnd = (isClickEnd: boolean): void => {
        if (isClickEnd) {
            this._jpSoundController.stopSound();
        }
        if (!this._onlyOnceFlag) {
            this._onlyOnceFlag = true; //---只播放一次
            this._jpSoundController.playSoundEnd(isClickEnd);
        }

    }

    //--20250613--先取消,因為不知道怎麼處理這些持續的聲音
    private blockBtnClickHandler = async (): Promise<void> => {
        if (this._blockSensor.hasEventListener(Node.EventType.TOUCH_END, this.blockBtnClickHandler)) {
            this._blockSensor.off(Node.EventType.TOUCH_END, this.blockBtnClickHandler);
        }
        this._jpDigiAniNumber.checkFinishWinScoreShow();
        //--true
        this.onScoreRunEnd(true);
        this.fadeInOrOutBGMusic(0);//--fade in
        //await GameUtils.Defer(2000); // 等待2秒鐘,讓數字顯示完畢
        await GameUtils.DeferByTweenPromise(2000 / 1000); // 等待2秒鐘,讓數字顯示完畢
        await this.fadeOut();
        this.finishAndRemove();
    }

    private finishAndRemove(): void {
        if (this._blockSensor.hasEventListener(Node.EventType.TOUCH_END, this.blockBtnClickHandler)) {
            this._blockSensor.off(Node.EventType.TOUCH_END, this.blockBtnClickHandler);
        }
        if (this._resolvePromise) {
            this._resolvePromise();
            this._resolvePromise = undefined;
        }
        this.node.active = false;
        if (this._jpUIOpacity) {
            this._jpUIOpacity.opacity = 255;
        }
        this._musicFadeOutComplete = null;
    }

    private fadeOut(): Promise<void> {
        return new Promise((resolve, reject) => {
            let uiOpacity = this._jpUIOpacity;
            if (uiOpacity) {
                tween(uiOpacity)
                    .to(0.33, { opacity: 0 }, { easing: 'fade' })
                    .call(() => {
                        this.fadeOutFinish();
                        resolve();
                    })
                    .start();
            } else {
                resolve();
            }
        });

    }

}


