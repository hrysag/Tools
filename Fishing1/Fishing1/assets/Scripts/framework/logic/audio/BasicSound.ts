/**
 * Created by EricHuang on 2023/12/14.
 */
import {AudioClip, AudioSource} from 'cc';

export class BasicSound extends AudioSource
{
    public static PLAY_MODE: string = "play_mode";
    public static STOP_MODE: string = "stop_mode";
    public static PAUSE_MODE: string = "pause_mode"; 
    public id: string = "";
    public isloop: boolean = false;
    public mute: boolean = false;
    public auto: boolean = false;
    public isPause:boolean=false;
     
    public statesOfBasicSound:string;
    
    //private _playingAudioClip:AudioClip;

    private _isPlayingOfSound:boolean;

    /*
    set playingAudioClip(value:AudioClip)
    {
        this._playingAudioClip=value;
    }

    get playingAudioClip():AudioClip
    {
        return this._playingAudioClip;
    }*/

    get isPlayingOfSound():boolean
    {
        let isplay:boolean=false;

        if(this.currentTime!=0)
        {
            isplay=true;
        }

        this._isPlayingOfSound=isplay;

        return isplay;
    }

    constructor()
    {
        super();

        this.statesOfBasicSound=BasicSound.STOP_MODE;

        this._isPlayingOfSound=false;

    }

    public onLoad():void
    {
        this.playOnAwake=false;//--關閉自動播放

    }

    public playSound(loop?:boolean):void
    {
        if(loop!=undefined)
        {
            this.isloop=loop;

            this.loop=this.isloop;
        }

        if(!this.clip)
        {
            return;
        }

        this.volume=1;//--沒有gain!!!?????應該被封裝住了

        this.isPause=false;

        this._isPlayingOfSound=true;

        this.statesOfBasicSound=BasicSound.PLAY_MODE;

        this.play();


    }

    public stopSound():void
    {
        this.stop();

        this._isPlayingOfSound=false;

        this.statesOfBasicSound = BasicSound.STOP_MODE;
    }

    
   

    public pauseSound():void
    {
        this.pause();

        this.isPause=true;

        this.statesOfBasicSound=BasicSound.PAUSE_MODE;
    }


}