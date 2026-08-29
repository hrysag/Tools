import { _decorator, AudioClip, AudioSource, Component, director, Tween, tween, warn } from 'cc';
import { Debug, Utility } from '../Core';

const { ccclass, property } = _decorator;

export enum SOUND_TYPE {
    NORMAL = 0,
    ONE_SHOT = 1,
}

@ccclass('AudioManager')
export class AudioManager extends Component {

    @property(AudioSource)
    private musicAudioSource: AudioSource;

    @property([AudioSource])
    private musicExtraAudioSource: AudioSource[] = [];

    @property(AudioSource)
    private soundAudioSource: AudioSource;

    @property([AudioSource])
    private soundAudioSources: AudioSource[] = [];

    private static _instance: AudioManager = null;
    private musicAudioClips: AudioClip[] = null;
    private soundAudioClips: AudioClip[] = null;
    private genericSoundAudioClips: AudioClip[] = null;

    private fadeMusicTween: Tween<BindTarget> = null;
    private fadeMusicExtraTween: Tween<BindTarget>[] = [];

    private _isAudioEnable: boolean = true;

    private musicVolume: number = 1;
    private musicExtraVolume: number[] = [];

    private activeOnsShotSoundCnt: number = 0;
    private lastOneShotSoundClip: AudioClip = null;

    public static get instance(): AudioManager {
        if (this._instance === null) {
            Debug.LogError("AudioManager _instance 為空");
        }
        return this._instance;
    }

    public onLoad(): void {
        Debug.Log("AudioManager onLoad");
        if (director.getScene().name.includes("Start")) {
            this.node.destroy();
            return;
        }
        if (!AudioManager._instance) {
            AudioManager._instance = this.node.getComponent(AudioManager);
        }
        else {
            this.node.destroy();
            return;
        }
        director.addPersistRootNode(this.node);

        for (let i = 0; i < this.musicExtraAudioSource.length; i++) {
            this.musicExtraVolume.push(1);
        }
    }

    public setGenericSoundAudioClips(clips: AudioClip[]): void {
        this.genericSoundAudioClips = clips;
    }

    public setMusicAudioClips(clips: AudioClip[]): void {
        this.musicAudioClips = clips;
    }

    public setSoundAudioClips(clips: AudioClip[]): void {
        this.soundAudioClips = clips;
    }

    public playGenericSound(id: number, type: SOUND_TYPE = SOUND_TYPE.ONE_SHOT, isLoop: boolean = false, sourceID: number = -1): void {
        if (!this.genericSoundAudioClips) {
            return;
        }

        let targetSource = sourceID === -1 ? this.soundAudioSource : this.soundAudioSources[sourceID];
        let soundClip = this.genericSoundAudioClips[id];

        if (type === SOUND_TYPE.ONE_SHOT) {
            targetSource.playOneShot(soundClip);
        }
        else if (type === SOUND_TYPE.NORMAL) {
            targetSource.clip = soundClip;
            targetSource.loop = isLoop;
            targetSource.play();
        }
    }

    public isPlaying(sourceID: number = -1): boolean {
        let targetSource = sourceID === -1 ? this.soundAudioSource : this.soundAudioSources[sourceID];
        return targetSource.playing;
    }

    public playSound(clipID: number, type: SOUND_TYPE = SOUND_TYPE.ONE_SHOT, sourceID: number = -1, volume: number = 1): void {
        if (!this.soundAudioClips) {
            return;
        }

        let targetSource = sourceID === -1 ? this.soundAudioSource : this.soundAudioSources[sourceID];

        let soundClip: AudioClip = this.soundAudioClips[clipID];

        if (this._isAudioEnable) {
            targetSource.volume = volume;
        }

        if (type === SOUND_TYPE.ONE_SHOT) {
            if (this.lastOneShotSoundClip !== soundClip) {
                this.activeOnsShotSoundCnt = 0;
            }
            let volume = 1 / Math.pow(3, this.activeOnsShotSoundCnt);
            targetSource.playOneShot(soundClip, volume);
            this.activeOnsShotSoundCnt++;
            this.scheduleOnce(() => {
                this.activeOnsShotSoundCnt--;
                if (this.activeOnsShotSoundCnt < 0) {
                    this.activeOnsShotSoundCnt = 0;
                }
            }, 0.01);

            this.lastOneShotSoundClip = soundClip;
        }
        else if (type === SOUND_TYPE.NORMAL) {
            targetSource.loop = false;
            targetSource.clip = soundClip;
            targetSource.play();
        }
    }

    public playSoundLoop(id: number, sourceID: number = -1): void {
        if (!this.soundAudioClips) {
            return;
        }

        let targetSource = sourceID === -1 ? this.soundAudioSource : this.soundAudioSources[sourceID];
        targetSource.clip = this.soundAudioClips[id];
        targetSource.loop = true;
        targetSource.play();
    }

    public stopSound(sourceID: number[] = [-1]): void {
        if (!this.soundAudioClips) {
            return;
        }

        for (let i = 0; i < sourceID.length; i++) {
            if (sourceID[i] === -1) {
                this.soundAudioSource.stop();
            }
            else {
                this.soundAudioSources[sourceID[i]].stop();
            }
        }

    }

    public stopAllSound(): void {
        for (let i = 0; i < this.soundAudioSources.length; i++) {
            this.soundAudioSource.stop();
            this.soundAudioSources[i].stop();
        }
    }

    public playSoundClip(clip: AudioClip, sourceID: number = -1): void {
        let targetSource = sourceID === -1 ? this.soundAudioSource : this.soundAudioSources[sourceID];
        targetSource.playOneShot(clip);
    }

    public playSoundRandom(ids: number[], sourceID: number = -1): void {
        if (!this.soundAudioClips) {
            return;
        }

        let targetSource = sourceID === -1 ? this.soundAudioSource : this.soundAudioSources[sourceID];
        let len = ids.length;
        let id = Utility.getRandomInt(len);
        targetSource.playOneShot(this.soundAudioClips[ids[id]]);
    }

    // playSoundConsecutively 專用 請勿隨意呼叫
    private playSoundPromise(id: number, sourceID: number = -1): Promise<unknown> {
        let targetSource = sourceID === -1 ? this.soundAudioSource : this.soundAudioSources[sourceID];
        return new Promise((resolve, reject) => {
            targetSource.clip = this.soundAudioClips[id];
            targetSource.loop = false;
            targetSource.node.off(AudioSource.EventType.ENDED);
            targetSource.node.once(AudioSource.EventType.ENDED, () => {
                resolve?.(null);
            }, this);
            targetSource.play();
        });
    }

    public playSoundConsecutively(ids: number[], sourceID: number = -1): Promise<unknown> {
        if (!this.soundAudioClips) {
            return;
        }
        let len = ids.length;
        if (len <= 0) {
            return Promise.resolve();
        }
        else if (len === 1) {
            return this.playSoundPromise(ids[0], sourceID);
        }
        else {
            return this.playSoundPromise(ids[0], sourceID)
                .then(() => {
                    return this.playSoundConsecutively(ids.slice(1));
                });
        }
    }

    //#region Music

    private stopFadeMusicTween(): void {
        if (this.fadeMusicTween) {
            this.fadeMusicTween.stop();
            this.fadeMusicTween = null;
            this.setMusicVolume(1);
        }
    }

    private stopFadeMusicExtraTween(index: number): void {
        if (this.fadeMusicExtraTween[index]) {
            this.fadeMusicExtraTween[index].stop();
            this.fadeMusicExtraTween[index] = null;
            this.setMusicExtraVolume(index, 1);
        }
    }

    public fadeMusicVolume(startVolume: number, targetVolume: number, duration: number = 0.5, callback: Function = null): void {
        this.stopFadeMusicTween();
        let target = new BindTarget();
        target.volume = startVolume;
        this.fadeMusicTween = tween(target)
            .to(duration, { volume: targetVolume }, {
                onUpdate: (v: any, progress) => {
                    this.setMusicVolume(v.volume);
                }
            })
            .call(() => {
                this.fadeMusicTween = null;
                callback?.();
            })
            .start();
    }

    public fadeMusicExtraVolume(index: number, startVolume: number, targetVolume: number, duration: number = 0.5, callback: Function = null): void {
        this.stopFadeMusicExtraTween(index);
        let target = new BindTarget();
        target.volume = startVolume;
        this.fadeMusicExtraTween[index] = tween(target)
            .to(duration, { volume: targetVolume }, {
                onUpdate: (v: any, progress) => {
                    this.setMusicExtraVolume(index, v.volume);
                }
            })
            .call(() => {
                this.fadeMusicExtraTween[index] = null;
                callback?.();
            })
            .start();
    }

    public fadeMusicVolumePromise(startVolume: number, targetVolume: number, duration: number = 0.5): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fadeMusicVolume(startVolume, targetVolume, duration, () => {
                resolve?.(null);
            });
        });
    }

    public fadeMusicExtraVolumePromise(index: number, startVolume: number, targetVolume: number, duration: number = 0.5): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fadeMusicExtraVolume(index, startVolume, targetVolume, duration, () => {
                resolve?.(null);
            });
        });
    }

    public pauseMusic(): void {
        this.musicAudioSource.pause();
    }

    public pauseMusicExtra(index: number): void {
        this.musicExtraAudioSource[index].pause();
    }

    public playMusic(id: number): void {
        this.stopFadeMusicTween();
        if (!this.musicAudioClips || !this.musicAudioClips[id]) {
            console.error("playMusic id error", id);
            return;
        }

        if (this.musicAudioSource.clip === this.musicAudioClips[id]) {
            warn("playMusic id is playing", id);
            return;
        }

        this.playMusicClip(this.musicAudioClips[id]);
    }

    public playMusicExtra(index: number, id: number): void {
        // this.stopFadeMusic2Tween();
        if (!this.musicAudioClips || !this.musicAudioClips[id]) {
            console.error("playMusic2 id error", id);
            return;
        }

        if (this.musicExtraAudioSource[index].clip === this.musicAudioClips[id]) {
            warn("playMusic2 id is playing", id);
            return;
        }

        this.playMusicExtraClip(index, this.musicAudioClips[id]);
    }

    public resumeMusic(): void {
        this.musicAudioSource.play();
    }

    public resumeMusicExtra(index: number): void {
        this.musicExtraAudioSource[index].play();
    }

    public playMusicClip(clip: AudioClip): void {
        this.musicAudioSource.stop();
        this.musicAudioSource.clip = clip;
        this.musicAudioSource.loop = true;
        this.musicAudioSource.play();
    }

    public playMusicExtraClip(index: number, clip: AudioClip): void {
        this.musicExtraAudioSource[index].stop();
        this.musicExtraAudioSource[index].clip = clip;
        this.musicExtraAudioSource[index].loop = true;
        this.musicExtraAudioSource[index].play();
    }

    public stopMusic(): void {
        this.musicAudioSource.stop();
        this.musicAudioSource.clip = null;
    }

    public stopMusicExtra(index: number): void {
        this.musicExtraAudioSource[index].stop();
        this.musicExtraAudioSource[index].clip = null;
    }

    public playMusicOncePromise(id: number): Promise<unknown> {
        return new Promise((resolve, reject) => {
            this.musicAudioSource.stop();
            this.musicAudioSource.clip = this.musicAudioClips[id];
            this.musicAudioSource.loop = false;
            this.musicAudioSource.node.once(AudioSource.EventType.ENDED, () => {
                resolve?.(null);
            }, this);
            this.musicAudioSource.play();
        });
    }

    public playMusicExtraOncePromise(index: number, id: number): Promise<unknown> {
        return new Promise((resolve, reject) => {
            this.musicExtraAudioSource[index].stop();
            this.musicExtraAudioSource[index].clip = this.musicAudioClips[id];
            this.musicExtraAudioSource[index].loop = false;
            this.musicExtraAudioSource[index].node.once(AudioSource.EventType.ENDED, () => {
                resolve?.(null);
            }, this);
            this.musicExtraAudioSource[index].play();
        });
    }

    public setAudioEnable(b: boolean): void {
        let audioSources: AudioSource[] = director.getScene().getComponentsInChildren(AudioSource);
        this._isAudioEnable = b;
        for (let item of audioSources) {
            if (this._isAudioEnable) {
                item.volume = 1;
            }
            else {
                item.volume = 0;
            }
        }

        // 強制將音樂音量設為目標音量(因為音樂有可能因為fade效果不直接是1)
        if (this._isAudioEnable) {
            this.setMusicVolume(this.musicVolume);
            for (let i = 0; i < this.musicExtraAudioSource.length; i++) {
                this.setMusicExtraVolume(i, this.musicExtraVolume[i]);
            }
        }
    }

    public setMusicVolume(volume: number): void {
        this.musicVolume = volume;
        if (!this._isAudioEnable) {
            return;
        }
        this.musicAudioSource.volume = volume;
    }

    public setMusicExtraVolume(index: number, volume: number): void {
        this.musicExtraVolume[index] = volume;
        if (!this._isAudioEnable) {
            return;
        }
        if (!this.musicExtraAudioSource[index]) {
            return;
        }
        this.musicExtraAudioSource[index].volume = volume;
    }

    public getMusicVolume(): number {
        return this.musicVolume;
    }

    public getMusicExtraVolume(index: number): number {
        return this.musicExtraVolume[index];
    }

    public isAudioEnable(): boolean {
        return this._isAudioEnable;
    }

    //#endregion
}


class BindTarget {
    public volume: number = 1
}
