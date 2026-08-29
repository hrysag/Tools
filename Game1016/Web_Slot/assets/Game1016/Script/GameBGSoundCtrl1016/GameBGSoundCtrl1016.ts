import { _decorator, AudioSource } from 'cc';
import { IGameMode } from '../MyUtils/BasicGameViewManager/IBasicGameModeManager';
import { MusicList } from '../DefinitionGameData1016/SoundList1016';
import { GameState } from '../ReferencePath';
import { AudioManager } from 'db://assets/Scripts/ModuleEntry';
const { ccclass, property } = _decorator;


export class GameBGSoundCtrl1016 implements IGameMode {

    private _musicAudioSource: AudioSource = null;//--播放的背景音樂

    private _afterLoadingFlag: boolean = false;//--第一次的背景音樂播放會在loading的時候就運作了
    private _isPauseBGM: boolean = false;
    //---原本的設計真的是......
    /**
     * 有關_isPlayNG_BGM的說明
     * 20260126在預設loading頁面就會播放.
     * 避免玩家在沒有RS的情況下直接進入FG導致因為_isPlayNG_BGM=false
     * 而無法關閉聲音
     */
    private _isPlayNG_BGM: boolean = true;
    private _isPlayRS_BGM: boolean = false;
    private _isPlayFG_BGM: boolean = false;

    set afterLoadingFlag(value: boolean) {
        this._afterLoadingFlag = value;
    }

    //--可以刪了
    set musicAudioSource(value: AudioSource) {
        this._musicAudioSource = value;
    }

    // Implement specific logic for changing game state
    public changeGameState(value: GameState): void {

        if (value == GameState.NORMAL && !this._afterLoadingFlag) {
            this._afterLoadingFlag = true;
            return;
        }

        switch (value) {
            case GameState.NORMAL:
                this.processPlayNgMusic1();
                break;
            case GameState.RE_SPINE:

                this.processPlayMusicToRs(MusicList.RespinBgm, value);
                break;

            case GameState.FREE_GAME:

                this.processPlayMusicToFG(MusicList.FgBgm, value);
                break;

        }
    }

    //--企劃要求以百分比來改變音量--
    /**
     * 將百分比數值轉換為 0-1 的浮點數
     * @param percent 百分比 (0-100)
     * 
     */
    public setMusicVolume(percent: number): void {

        //--確保在0-100之間
        const safePercent = Math.max(0, Math.min(100, percent));
        const volume = safePercent / 100;
        if (this._isPlayFG_BGM || this._isPlayRS_BGM) {
            AudioManager.instance.setMusic2Volume(volume);
        } else if (this._isPlayNG_BGM) {
            AudioManager.instance.setMusicVolume(volume);
        }
    }

    //--這只有離開FG會call
    public fadeOutFGWithBGM(): Promise<void> {

        if (this._isPlayFG_BGM) {

            AudioManager.instance.fadeMusic2Volume(1, 0, 0.5, () => {
                AudioManager.instance.stopMusic2();
            })
            this._isPlayFG_BGM = false;
        }

        return;
    }

    //--這只有進FG會call
    public fadeOutNGorRSWithBGM(): Promise<void> {

        if (this._isPlayRS_BGM) {
            this._isPlayRS_BGM = false;
            AudioManager.instance.fadeMusic2Volume(1, 0, 0.5, () => {
                AudioManager.instance.stopMusic2();
            });
        }

        if (this._isPlayNG_BGM) {

            this._isPlayNG_BGM = false;
            this._isPauseBGM = false;
            AudioManager.instance.fadeMusicVolume(1, 0, 0.5, () => {
                AudioManager.instance.stopMusic();
            });
        }

        return;
    }

    private processPlayNgMusic1(): void {

        if (this._isPlayRS_BGM || this._isPlayFG_BGM) {
            AudioManager.instance.fadeMusic2Volume(1, 0, 0.5, () => {
                AudioManager.instance.stopMusic2();
            });
            this._isPlayRS_BGM = false;
            this._isPlayFG_BGM = false;
        }

        if (this._isPauseBGM) {
            AudioManager.instance.resumeMusic();
            this._isPauseBGM = false;
        } else {

            AudioManager.instance.playMusic(MusicList.ngBgm);
        }
        this._isPlayNG_BGM = true;
        AudioManager.instance.fadeMusicVolume(0, 1, 0.5);
    }

    private processPlayMusicToRs(id: number, gs: GameState): void {

        if (gs == GameState.RE_SPINE) {

            this._isPlayNG_BGM = false;
            this._isPlayRS_BGM = true;
            //-musicAudioSource
            //if (this._musicAudioSource.clip != null) {
            AudioManager.instance.fadeMusicVolume(1, 0, 0.5, () => {
                AudioManager.instance.pauseMusic();
                this._isPauseBGM = true;
            });
            //}
        }
        AudioManager.instance.playMusic2(id);//--用第2個去播
        AudioManager.instance.fadeMusic2Volume(0, 1, 0.5);
    }

    private processPlayMusicToFG(id: number, gs: GameState): void {

        if (this._isPlayNG_BGM) {
            this._isPlayNG_BGM = false;
            this._isPauseBGM = false;
            AudioManager.instance.fadeMusicVolume(1, 0, 0.5, () => {
                AudioManager.instance.stopMusic();
            });
        }
        if (gs == GameState.FREE_GAME) {

            this._isPlayFG_BGM = true;
            AudioManager.instance.playMusic2(id);
            AudioManager.instance.fadeMusic2Volume(0, 1, 0.5);
        }
    }




}

