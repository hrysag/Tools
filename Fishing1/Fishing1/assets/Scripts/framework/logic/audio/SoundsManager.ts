/**
 * Created by EricHuang on 2023/12/14.
 */

import { AudioClip } from "cc";
import { Node} from "cc";
import { director} from "cc";
import { BasicSound } from "./BasicSound";
import {log} from 'cc';

export class SoundsManager 
{
    public static getInstance(): SoundsManager { return (SoundsManager._instance) ? SoundsManager._instance : new SoundsManager(); }
    
    private static _instance:SoundsManager;

    private _mapSounds:{[key:string]:BasicSound};

    private _mapAudioClips:{[key:string]:AudioClip};

    private _bgSoundList:string[];

    private _bgSound:BasicSound[];

    private _bgVolume:number;

    public  _isMute: boolean = false;

    private _isBgMute: boolean = false;


    constructor()
    {
        
        if (SoundsManager._instance != null)
        {
            throw new Error('plz use getInstance()');
        }
        SoundsManager._instance = this;
        
        this._mapSounds = {};
        
        this._mapAudioClips={};
        
        this._bgSoundList=[];

        this._bgSound=[];

        this._bgVolume=1;

        log('check_init_constructor_SoundMgr');

        //--test----
        //--看起來那個node必須存在且持久,一旦node.active=false該AudioSource即失效
        /*
        let testAudioSource=this.addComponent(BasicSound);
        
        testAudioSource.clip=LoadingResManager.getInstance().getAudio('sounds/BGM01');
        
        
        testAudioSource.play();

        window.setInterval(()=>{
            log(testAudioSource.isPlayingOfSound);
        },1000)
        */
            


    }


    public addAudioClip(id:string,clip:AudioClip):void
    {
        if(!this._mapAudioClips[id] && clip)
        {
            this._mapAudioClips[id]=clip;
        }
    }



    public addSound(id:string,sound:BasicSound):void
    {
        if(!this._mapSounds[id])
        {
            this._mapSounds[id]=sound;
        }
    }

    public createSound(soundId:string,clipId:string):void
    {
        if(!this._mapSounds[soundId])
        {
            if(this._mapAudioClips[clipId])
            {
                let audioNode:Node=new Node(soundId);

                let audio:BasicSound=audioNode.addComponent(BasicSound);

                audio.id=soundId;

                audio.clip=this._mapAudioClips[clipId];

                director.addPersistRootNode(audioNode);

                this._mapSounds[soundId]=audio;

            }
        }
    }


    public getSound(id:string):BasicSound
    {
        return this._mapSounds[id];
    }

    public play(id:string,loop?:boolean): void 
    {
        //if(this._mapSounds[id] && !this._isMute)
        //--因為mute他只是將Volume去改為0--20240311
        if(this._mapSounds[id])
        {
            this._mapSounds[id].playSound(loop);
            
            if(this._isMute)
            {
                this._mapSounds[id].volume=0;
            
            }else{

                this._mapSounds[id].volume=1;
            }

        }
    }


    public isPlaying(id:string): boolean 
    {
        let b: boolean = null

        if(this._mapSounds[id])
        {
            b=this._mapSounds[id].isPlayingOfSound;
        }

        return b;
    }

    public stop(id: string): void 
    {
        if(this._mapSounds[id])
        {
            this._mapSounds[id].stopSound();
        }
    }


    public stopAll(): void 
    {
        for(let i in this._mapSounds)
        {
            this._mapSounds[i].stopSound();
        }
    }

    public setVolume(id:string, vol:number): void 
    {
        let s: BasicSound = this.getSound(id);
        
        if (s)
        {
            //log("setting sounds");
            //log(s);
            s.volume=vol;
        }
    }

    public muteSingle(id:string):void
    {
        let s: BasicSound = this.getSound(id);
        
        if (s)
        {
            //log("setting sounds");
            //log(s);
            s.stop();
        }
    }

    public mute():void 
    {
        this._isMute = !this._isMute;

        if(this._isMute)
        {
            this.setAllVolume(0);

        }else{

            this.setAllVolume(1);

            this.checkBGMusic();
        }
        //this.stop(id);
    }

    public bgMute(): void 
    {
        this._isBgMute = !this._isBgMute;

        this.checkBGMusic();
    }

    public setBgVolume(value:number):void
    {
        this._bgVolume=value;

        this.checkBGMusic();
    }

    public setAllVolume(vol:number):void
    {
        for(let i in this._mapSounds)
        {
            this._mapSounds[i].volume=vol;
        }
    }


    public pause(id:string): void 
    {
        if(this._mapSounds[id])
        {
            this._mapSounds[id].pauseSound();
        }
    }


    public setBgSoundList(list:string[]):void
    {
        this._bgSoundList=list;

        this._bgSound = [];//--根本沒用到

        for(let i of list)
        {
            let s=this.getSound(i);
            
            if(s)
            {
                this._bgSound.push(s);
            }
        }

    }

   

    public playBGMusic(sound: string):void
    {
        if (!~this._bgSoundList.indexOf(sound)) 
        {
            log('[SoundController] can not find name : ' + sound + ' in list');
            return;
        }

        let len:number=this._bgSoundList.length;

        for(let i = 0; i < len; i++)
        {
            this.stop(this._bgSoundList[i]);
        }

        this.play(sound,true);

    }

  

    private checkBGMusic():void
    {
        if (!this._isMute && !this._isBgMute ) 
        {
            
            for (let i = 0; i < this._bgSound.length; i++) 
            {
                let sound:BasicSound = this._bgSound[i];

                if (sound)
                {
                    sound.volume=this._bgVolume;
                } 
            }

        } else if (this._isMute || this._isBgMute) 
        {
            
            for (let i = 0; i < this._bgSound.length; i++)
            {
                let sound = this._bgSound[i];
                
                if (sound) sound.volume=0;
            }
        }
    }






























}
