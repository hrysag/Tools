
import { AudioClip, _decorator, Enum, AudioSource } from 'cc';
import IPlayConfig from './IPlayConfig';
import AudioMgr from './AudioMgr';
const { property } = _decorator;



enum AudioUnitEvent {
    Init = 'init',
    Play = 'play',
    Pause = 'pause',
    Resume = 'resume',
    Stop = 'stop',
    End = 'end',
}

enum AudioState {
    /** 停止 */
    Stop = 1,
    /** 暫停 */
    Pause = 2,
    /** 播放 */
    Play = 4,
}

enum AudioType {
    Effect = -99,
    Music
}


class AudioUnit implements IPlayConfig {

    static EventType: typeof AudioUnitEvent = AudioUnitEvent;

    static State: typeof AudioState = AudioState;

    static Type: typeof AudioType = AudioType;


    @property({ displayName: "AudioClip", type: AudioClip })

    clip: AudioClip | null = null;

    state: AudioState = AudioState.Stop;

    type: AudioType = AudioType.Effect;


    usePlay: boolean = true;

    private _event?: EventTarget | null = null;

    private _init: boolean = false;

    private _audioSource: AudioSource | null = null;
    private _volume: number = 1;
    private _loop: boolean = false;
    private _currentTime: number = 0;

    groups: number[] = [];

    get event(): EventTarget { return this._event ?? (this._event = new EventTarget()); }

    get init(): boolean { return this._init; }
    get audioSource(): AudioSource | null { return this._audioSource; }
    get volume(): number { return this._volume; }
    get loop(): boolean { return this._loop; }
    get currentTime(): number {
        if (this.audioSource) {
            this._currentTime = this.audioSource.currentTime;
        }
        return this._currentTime;

    }
    get totalTime(): number { return this.audioSource ? this.audioSource.duration : 0; }

    set init(value: boolean) { this.setInit(value); }

    set audioSource(value: AudioSource | null) { this.setAudioSource(value); }
    set volume(value: number) { this.set_volume(value); }
    set loop(value: boolean) { this.set_loop(value); }
    set currentTime(value: number) { this.set_currentTime(value); }

    private setAudioSource(audioSource: AudioSource | null) {

        this._audioSource = audioSource;

        if (audioSource) {
            this.volume = this._volume;
            this.loop = this._loop;
            this.currentTime = this._currentTime;
        }

    }

    private setInit(value: boolean) {
        this._init = value;

        if (value) {
            this.event.dispatchEvent(new Event(AudioUnit.EventType.Init));
        }
    }


    private set_volume(value: number) {

        // volume value limit to 0~1
        if (value < 0) value = 0;
        if (value > 1) value = 1;

        console.log('set_volume', value);
        this._volume = value;

        if (this.audioSource) {
            this.audioSource.volume = value;
        }
    }



    private set_loop(value: boolean) {

        this._loop = value;

        if (this.audioSource) {
            this.audioSource.loop = value;
        }
    }

    private set_currentTime(value: number) {

        this._currentTime = value;

        if (this.audioSource) {
            this.audioSource.currentTime = value;
        }
    }

    clone(name: string) {
        
        const audio = new AudioUnit();
        audio.clip = this.clip;
        audio.usePlay = this.usePlay;
        audio.volume = this.volume;
        audio.loop = this.loop;
        audio.currentTime = this.currentTime;
        audio.type = this.type;
        audio.groups = this.groups;


        AudioMgr.setAudioUnit(audio, name);

        return audio;

    }



}

export default AudioUnit;