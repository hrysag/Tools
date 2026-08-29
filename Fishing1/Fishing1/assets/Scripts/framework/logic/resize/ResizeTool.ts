/**
 * Created by EricHuang on 2023/12/25.
 */
import {view,macro,screen,ResolutionPolicy,sys,Size,game,director,CameraComponent,Rect} from 'cc';
import {log} from 'cc';

export class ResizeTool 
{
    private _cameraComponent:CameraComponent;

    private _originalWidth:number;

    private _newWidth:number;

    private static _instance:ResizeTool;

    private timeoutID;

    public static getInstance(): ResizeTool { return (ResizeTool._instance) ? ResizeTool._instance : new ResizeTool(); }
    
    set cameraComponent(value:CameraComponent)
    {
        this._cameraComponent=value;
    }

    set originalWidth(value:number)
    {
        this._originalWidth=value;
    }


    set newWidth(value:number)
    {
        this._newWidth=value;
    }

    constructor()
    {
        
        if (ResizeTool._instance != null)
        {
            throw new Error('plz use getInstance()');
        }
        ResizeTool._instance = this;
        
        
        view.setOrientation(macro.ORIENTATION_LANDSCAPE);

        view.setResolutionPolicy(ResolutionPolicy.EXACT_FIT);

        this._cameraComponent=null;

        this._originalWidth=-1;

        this._newWidth=-1;
      
    }

    /**
     * after set _cameraComponent,_originalWidth,_newWidth
     */
    public init():void
    {
        
        //--橫豎螢幕的旋轉
        view.setOrientation(macro.ORIENTATION_LANDSCAPE);

        this.resize();

        view.on('canvas-resize', this.resize);
       
    }

    public resize:()=>void = ()=>
    {
        //return;
        //log("resize");
        // iOS 17.1以上且是safari才有的bug，疑似太早取得window.innerWidth跟innerHeight，所以要晚一點發resize
        //-https://forum.cocos.org/t/topic/155054/17
        //if (sys.isMobile && sys.browserType === sys.BrowserType.SAFARI && this.getIOSVersion() >= 17) 
        if (sys.isMobile) 
        {
            clearTimeout(this.timeoutID);
            
            this.timeoutID = setTimeout(() => {
                // 不知道為什麼isFrameRotated會被改成false，導致轉回直的也沒鎖橫屏。
                // 原本就是landscape再call一次landscape過不了。
                view.setOrientation(macro.ORIENTATION_PORTRAIT);

                view.setOrientation(macro.ORIENTATION_LANDSCAPE);
                
                window.dispatchEvent(new Event('resize'));
                
            }, 500);
        }

        const devicePixelRatio:number = screen.devicePixelRatio;
        const designResolutionSize:Size = view.getDesignResolutionSize();
        const windowSize:Size = screen.windowSize;

        const containerW:number = windowSize.width;
        const containerH:number = windowSize.height;
        const designW:number = designResolutionSize.width;
        const designH:number = designResolutionSize.height;
        const scaleX:number = containerW / designW;
        const scaleY:number = containerH / designH;

        let scale:number = 0;
        let contentW:number;
        let contentH:number;


        if (scaleX < scaleY) 
        {
            scale = scaleX;
            contentW = containerW;
            contentH = designH * scale;
        } 
        else 
        {
            scale = scaleY;
            contentW = designW * scale;
            contentH = containerH;
        }

        //let viewportW:number=this._clipWidth*scaleX;

        //let viewportH:number=this._clipWidth*scaleY;

        let x:number = Math.round(0.5 * (containerW - contentW) / devicePixelRatio);
        let y:number = Math.round(0.5 * (containerH - contentH) / devicePixelRatio);
        let w:number = Math.round(contentW / devicePixelRatio);
        let h:number = Math.round(contentH / devicePixelRatio); 
        
        game.canvas.style.position = "absolute";
        game.canvas.style.width = `${w}px`;
        game.canvas.style.height = `${h}px`;
        game.canvas.style.left = `${x}px`;
        game.canvas.style.top = `${y}px`;

        director.root.resize(contentW, contentH);


        const webview = document.getElementById('webview-wrapper');

        if (webview) 
        {
            webview.style.bottom = `${y}px`;
            webview.style.left = `${x}px`;
        }

        //let ogScaleSize:number=this._originalWidth*scaleX;

        
        if(this._cameraComponent)
        {

            let cameraComponent = this._cameraComponent;

            const originalWidth = this._originalWidth;

            const newWidth = this._newWidth;

            const currentViewport = cameraComponent.camera.viewport;
            
            const currentWidth = currentViewport.width;

            const widthRatio = newWidth / originalWidth;

            const newViewportWidth = currentWidth * widthRatio;

            // 將新的相機視口寬度限制在最小為1的範圍內
            const clampedNewWidth = Math.max(newViewportWidth, 1);

            // 計算新的 x 座標以保持視口中心對齊
            const newViewportX = currentViewport.x + (currentViewport.width - clampedNewWidth) / 2;

            let rect=new Rect
            (
                newViewportX, 
                currentViewport.y, 
                clampedNewWidth,
                currentViewport.height 
            )

            this._cameraComponent.camera.setViewportInOrientedSpace(rect);

            /*
            this._cameraComponent.camera.viewport=new Rect(
                newViewportX, 
                viewportRect.y, 
                newViewportWidth, 
                viewportRect.height
            );*/

        }

        




    }


    private getIOSVersion(): number 
    {
        const match = window.navigator.userAgent.match(/(iPhone OS|iPad OS) (\d+)_(\d+)/);
        let osVersion = null;
        if (match && match.length === 4) {
            osVersion = match[2]; // 取得版本號
            return Number(osVersion);
        }
        return 0
    }
    
    /*
    constructor()
    {
    view.setOrientation(macro.ORIENTATION_LANDSCAPE);
    view.setResizeCallback(() => {
        this.updateViewport()
    });
    this.updateViewport();
    }

    private updateViewport() {
        const policy = view.getResolutionPolicy();
        const width = screen.windowSize.width;
        const height =  screen.windowSize.height;
        const ratio = width / height;

        if (ratio >= 16 / 9) {
            policy.setContentStrategy(ResolutionPolicy.ContentStrategy.FIXED_HEIGHT)
        } else {
            policy.setContentStrategy(ResolutionPolicy.ContentStrategy.FIXED_WIDTH)
        }
        view.setResolutionPolicy(policy);
    }*/

    
}