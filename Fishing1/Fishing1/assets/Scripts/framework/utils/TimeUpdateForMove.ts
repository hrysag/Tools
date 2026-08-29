import { Component } from "cc";

/**
 * Created by EricHuang on 2024/04/25.
 * 情非得已
 * 取代在瀏覽器不在當前使用tween計算的移動物件
 * 將採用worker的時間來更新
 */
export class TimeUpdateForMove extends Component
{
    private startPos: { x: number; y: number };
    private endPos: { x: number; y: number };
    private duration: number; // 移动time，單位=秒
    private currentTime: number; // 已經經過的時間
    private targetReached: boolean; // 是否已經抵達目標位置
    //private velocity: { x: number; y: number }; // 移動速度
    private _onCallBackComplete:()=>void;
    public isRunning:boolean;

   
    constructor() 
    {
        super();
       
        this.currentTime = 0;

        this.targetReached = false;

        this.isRunning=false;
        
        this._onCallBackComplete=null;
      
    }

    private easeInOutQuad(progress: number): number
    {
        progress /= 0.5;
        if (progress < 1) return 0.5 * progress * progress;
        progress--;
        return -0.5 * (progress * (progress - 2) - 1);
    }

    public setCompleteCallBack(callback: () => void):void
    {
        this._onCallBackComplete=callback;
    }

    public destory():void
    {
        this._onCallBackComplete=null;

        this.currentTime = 0;

        this.targetReached = false;
        
        this.isRunning=false;

        this.startPos = null;

        this.endPos = null;
        
        this.duration = 0;


    }

    public setUpdateData(startPos: { x: number; y: number }, endPos: { x: number; y: number }, duration: number):void
    {
        this.startPos = startPos;
        this.endPos = endPos;
        this.duration = duration;
        /*
        this.velocity = {
            x: (endPos.x - startPos.x) / duration,
            y: (endPos.y - startPos.y) / duration
        };*/

        this.currentTime=0;

        this.isRunning=true;
        
        this.targetReached = false;
    }

    public updatePath(deltaTime: number):void
    {
        if (!this.targetReached) {
            this.currentTime += deltaTime;

            const progress = Math.min(1, this.currentTime / this.duration); // 進度不超過1
            const easedProgress = this.easeInOutQuad(progress);

            let newX = this.startPos.x + (this.endPos.x - this.startPos.x) * easedProgress;
            let newY = this.startPos.y + (this.endPos.y - this.startPos.y) * easedProgress;
            /*
            let newX = this.startPos.x + this.velocity.x * this.currentTime;
            let newY = this.startPos.y + this.velocity.y * this.currentTime;
            */

            this.node.setPosition(newX,newY);

           
            if (this.currentTime >= this.duration) 
            {
                this.targetReached = true;

                this.isRunning=false;
                
                newX = this.endPos.x;
                
                newY = this.endPos.y;
                
                this.node.setPosition(newX,newY);
                
                if(this._onCallBackComplete)
                {
                    this._onCallBackComplete();
                }
                
            }

           
        }
    }
}