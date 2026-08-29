import InstanceBase from "../InstanceBase";
import AudioUnit from "./AudioUnit";
import IPlayConfig from "./IPlayConfig";

import { director, log, Director, Node, assetManager, AssetManager, AudioClip, AudioSource, error, warn, debug } from "cc";
import { ObjectPool } from "../ObjectPool";


import { EDITOR } from 'cc/env';


class AudioMgr extends InstanceBase {

    constructor() {
        super();
        log(`AudioMgr constructor`);
        this.init();
    }

    private _audio_node: Node;

    private _audioSourcePool: ObjectPool<AudioSource>;

    /**
     * audioSource uuid as key , map to audioUnit
     */
    private _audioUnitMap: Map<string, AudioUnit> = new Map();

    private _unitNameMap: Map<string, AudioUnit> = new Map();


    private _currentPlayingCount: number = 0;

    private _timer_set: Set<ReturnType<typeof setTimeout>> = new Set<ReturnType<typeof setTimeout>>();



    private async initSourcePool() {

        this._audioSourcePool?.clear();
        this._audioSourcePool = new ObjectPool<AudioSource>({

            create: () => {

                const audioSource = new AudioSource();

                audioSource.node = this._audio_node;

                return audioSource;
            },
            clear: (ary_audioSource) => {
                ary_audioSource.forEach((audioSource) => {
                    audioSource.destroy();
                });
            },
            reset: (audioSource) => {

                audioSource.playOnAwake = false;

                this._audioUnitMap.delete(audioSource.uuid);

                return audioSource;
            },
            initFillCount: (AudioSource.maxAudioChannel >> 1),
            maxHoldCount: AudioSource.maxAudioChannel
        });

    }


    private async init() {
        if (EDITOR) return;
        log(`AudioMgr init MaxAudioChannel: ${AudioSource.maxAudioChannel}`);

        let scene = director.getScene();

        if (!scene) {
            log(`AudioMgr init: scene is not loaded, wait for scene loaded`);
            //if scene is not loaded, wait for scene loaded
            await new Promise((resolve) => director.once(Director.EVENT_AFTER_SCENE_LAUNCH, resolve));
            log(`AudioMgr init: scene is loaded`);
            scene = director.getScene();
        }

        this._audio_node?.destroy();
        this._audio_node = new Node('audio');

        log(`[AudioMgr init] create audio node`, this._audio_node.uuid);
        scene.addChild(this._audio_node);
        director.addPersistRootNode(this._audio_node);


        //使用一個 persist node 來管理所有的 audioSource

        await this.initSourcePool();

        //----- bind audio source event
        this._audio_node.on(AudioSource.EventType.STARTED, (audioSource: AudioSource) => {
            const audioUnit = this._audioUnitMap.get(audioSource.uuid);
            if (audioUnit) {
                this._node_audio_started(audioUnit);
            }
        }, this);


        this._audio_node.on(AudioSource.EventType.ENDED, (audioSource: AudioSource) => {
            const audioUnit = this._audioUnitMap.get(audioSource.uuid);
            if (audioUnit) {
                this._node_audio_ended(audioUnit);
            }
        }, this);
        //-----


    }

    private bundleMap: Map<string, AssetManager.Bundle> = new Map();

    async addBundle(bundle: string | AssetManager.Bundle) {

        if (typeof bundle === 'string') {
            const bundleName = bundle;

            if (!this.bundleMap.has(bundleName)) {
                bundle = assetManager.getBundle(bundleName);
                if (!bundle) {
                    bundle = await (new Promise((resolve, reject) => {
                        assetManager.loadBundle(bundleName, (err, bundle) => (err) ? reject(err) : resolve(bundle));
                    }));
                    this.bundleMap.set(bundleName, bundle as AssetManager.Bundle);
                }

            } else {
                return;
            }

        }

        log(`[AudioMgr addBundle] bundle:`, bundle);


        const clips: AudioClip[] = await (new Promise((resolve, reject) => {
            (<AssetManager.Bundle>bundle).loadDir('', AudioClip, (err, clips) => (err) ? reject(err) : resolve(clips));
        }));

        log(`[AudioMgr addBundle] clips:`, clips);


        const units = clips.map((clip: AudioClip) => {
            const unit = this.getAudioUnit(clip);
            log(`[AudioMgr addBundle] add audio unit`, unit, clip.name);

            this.setAudioUnit(unit);
            return unit;
        });

        return units;

    }

    setAudioUnit(audio: AudioUnit, name?: string) {

        if (typeof name == 'undefined') name = audio.clip.name;

        if (this._unitNameMap.has(name)) {
            throw new Error(`[AudioMgr setAudioUnit] audio unit name ${name} is duplicated`);
        }

        this._unitNameMap.set(name, audio);

    }

    getUnitByName(name: string) {
        return this._unitNameMap.get(name);
    }

    play(audio: AudioUnit | string, config?: Partial<IPlayConfig>) {

        const unit: AudioUnit = (typeof audio === 'string') ? this.getUnitByName(audio) : audio;
        log(`[AudioMgr play] audio unit`, unit, this._unitNameMap);
        if (!unit) {
            warn(`[AudioMgr play] audio unit not found`, audio);
            return;
        }


        Object.assign(unit, config);
        this._play(unit);
    }


    async addAudio(path: string, bundle: string | AssetManager.Bundle = 'resources') {
        log(`[AudioMgr addAudio] path: ${path}, bundle: ${bundle}`);

        if (typeof bundle === 'string') {

            const bundleName = bundle;

            bundle = assetManager.getBundle(bundleName);


            log(`[AudioMgr addAudio] get bundle`, bundle);
            if (!bundle) {
                log(`[AudioMgr addAudio] bundle not found, load bundle`, bundle);
                bundle = await (new Promise((resolve, reject) => {
                    assetManager.loadBundle(bundleName, (err, bundle) => {
                        if (err) {
                            error(`[AudioMgr addAudio] load bundle error`, err);
                            reject(err);
                        }
                        else {
                            resolve(bundle);
                        }

                    });
                }));
                log(`[AudioMgr addAudio] bundle loaded`, bundle);
            }
        }


        const clip = await (new Promise((resolve, reject) => {
            (<AssetManager.Bundle>bundle).load(path, AudioClip, (err, clip) => (err) ? reject(err) : resolve(clip));
        }));

        log(`[AudioMgr addAudio] clip loaded`, clip);


    }


    private async _play(audio: AudioUnit) {


        const last_state = audio.state;

        if (last_state == AudioUnit.State.Pause) {
            audio.event?.dispatchEvent(new Event(AudioUnit.EventType.Resume));
        }

        audio.state = AudioUnit.State.Play;

        if (last_state == AudioUnit.State.Stop) {
            ++this._currentPlayingCount;
            log(`[AudioMgr] 目前播放數量: ${this._currentPlayingCount} play`);


            //取得 audioSource
            const source = await this._audioSourcePool.get();

            //setup audioSource
            audio.audioSource = source;

            //bind clio to audioSource
            source.clip = audio.clip;

            this._audioUnitMap.set(source.uuid, audio);

        }


        if (audio.usePlay) {

            if (last_state === AudioUnit.State.Stop && this._currentPlayingCount > AudioSource.maxAudioChannel) {
                warn(`[AudioMgr] 目前播放數量: ${this._currentPlayingCount} 超過最大播放數量限制`);
                this.stop(audio);
                return;
            }

            audio.audioSource!.play();
        } else {

            log(`[AudioMgr] playOneShot`, audio);

            audio.audioSource!.playOneShot(audio.clip);

            this._node_audio_started(audio);


            const timer = setTimeout(() => {
                this._timer_set.delete(timer);

                this._node_audio_ended(audio);

                if (audio.loop) {
                    this.play(audio);
                }
            }, audio.totalTime * 1000);

            this._timer_set.add(timer);
        }
    }

    stop(audio: AudioUnit | string) {


        const unit: AudioUnit = (typeof audio === 'string') ? this.getUnitByName(audio) : audio;
        if (!unit) return;
        if (unit.state === AudioUnit.State.Stop) return;


        --this._currentPlayingCount;

        debug(`[AudioMgr] 目前播放數量: ${this._currentPlayingCount} stop`);

        unit.state = AudioUnit.State.Stop;
        unit.audioSource!.stop();
        unit.event.dispatchEvent(new Event(AudioUnit.EventType.Stop));

        //回收 audioSource
        this._audioSourcePool.put(unit.audioSource!);
        unit.audioSource = null;
        //重置進度
        unit.currentTime = 0;
    }

    protected getAudioUnit(clip: AudioClip) {
        let audioUnit = new AudioUnit();
        audioUnit.clip = clip;
        return audioUnit;
    }

    protected _node_audio_started(audio: AudioUnit) {
        log(`[AudioMgr] audio started`);
        if (!audio) return;

        audio.event.dispatchEvent(new Event(AudioUnit.EventType.Play));

    }

    protected _node_audio_ended(audio: AudioUnit) {

        if (!audio) return;

        if (audio.state !== AudioUnit.State.Stop) {

            --this._currentPlayingCount;

            log(`[AudioMgr] 目前播放數量: ${this._currentPlayingCount} ended`);

            audio.state = AudioUnit.State.Stop;

            audio.event?.dispatchEvent(new Event(AudioUnit.EventType.End));

            //回收 audioSource
            this._audioSourcePool.put(audio.audioSource);

            audio.audioSource = null;

            audio.currentTime = 0;

        }

    }


    private _mute: boolean = false;

    private _musicMute: boolean = false;

    get isMute() { return this._mute; }
    get isMusicMute() { return this._musicMute; }

    toggleMute() {
        this._mute = !this._mute;
        this.checkMute();
    }

    toggleMusicMute() {
        if (!this._mute) return;
        this._musicMute = !this._musicMute;
        this.checkMute();
    }

    private checkMute() {

        if (this._mute) {
            this._audio_node.active = false;
        }
        else {
            this._audio_node.active = true;
            this._audioUnitMap.forEach((audioUnit) => {
                if (audioUnit.type == AudioUnit.Type.Music) {
                    audioUnit.volume = this._musicMute ? 0 : 1;
                }
            });
        }

    }
}

export default AudioMgr.instance();