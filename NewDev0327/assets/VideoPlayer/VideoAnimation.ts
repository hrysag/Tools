import { _decorator, assetManager, Color, Component, EffectAsset, Enum, Layers, Material, Sprite, SpriteFrame, UITransform, VideoClip } from 'cc';
import { PlayMode, VideoPlayer } from './VideoPlayer'


const { ccclass, property, requireComponent } = _decorator;

enum VideoMode {
    /** * 影片包含 RGB 與 Alpha 兩個區塊 (例如左色右灰或上色下灰)
     * 適合需要精確透明度與半透明效果的特效
     */
    SIDE_BY_SIDE = 1,
    /** * 透過特定顏色進行去背 (綠幕/藍幕模式)
     * 適合邊緣清晰、不含複雜半透明度的物件，節省影片檔案體積
     */
    CHROMA_KEY = 2
}

@ccclass('VideoAnimation')
@requireComponent(Sprite)
export class VideoAnimation extends Component {

    @property({
        type: Enum(VideoMode),
        tooltip: '影片播放模式: 側邊對比或綠幕去背'
    })
    public videoMode: VideoMode = VideoMode.SIDE_BY_SIDE;

    @property({
        // 這裡的 this 指向的是當前元件實例
        visible: function (this: VideoAnimation) {
            return this.videoMode === VideoMode.CHROMA_KEY;
        },
    })
    public chromaKeyColor: Color = new Color(0, 0, 255, 255);

    @property(VideoClip)
    public videoClipList: VideoClip[] = [];

    private player: VideoPlayer = null;
    private isLoaded: boolean = false;
    private sprite: Sprite;
    private isVideoVisible: boolean = false;

    private onInitCompleteCallback: () => void = null;

    public init(onInitComplete: () => void = null): void {

        if (this.node.active === false) {
            console.error("VideoAnimation node is inactive. Please set it active before init.");
            return;
        }
        this.node.layer = Layers.Enum.NONE;
        this.isLoaded = false;
        this.player = new VideoPlayer();
        this.onInitCompleteCallback = onInitComplete;
        this.sprite = this.getComponent(Sprite);
        this.loadEffectFromBundle()
            .then((effect) => {
                let material = new Material();
                material.initialize({
                    effectAsset: effect,
                });
                if (this.videoMode === VideoMode.SIDE_BY_SIDE) {
                    let height = this.node.getComponent(UITransform).height;
                    let colorUVScale = height / (2 * height + 16);
                    let alphaUVScale = height / (2 * height + 16);
                    let alphaUVOffset = (height + 16) / (2 * height + 16);
                    material.setProperty('colorUVScale', colorUVScale);
                    material.setProperty('alphaUVScale', alphaUVScale);
                    material.setProperty('alphaUVOffset', alphaUVOffset);
                }
                else if (this.videoMode === VideoMode.CHROMA_KEY) {
                    material.setProperty('keyColor', new Color(0, 0, 255, 255));
                    material.setProperty('Threshold', 0.3);
                    material.setProperty('Softness', 0.8);
                    material.setProperty('Despill', 0.5);
                }
                this.sprite.setSharedMaterial(material, 0);
                return this.loadAsset();
            })
            .then(() => {
                this.isLoaded = true;
            });

    }

    protected update(dt: number): void {
        this.player?.update(dt);
    }

    private async loadAsset(): Promise<void> {
        await this.loadMp4();
    }

    private async loadMp4(): Promise<void> {
        let url = [];
        for (let clipItem of this.videoClipList) {
            url.push(clipItem.nativeUrl);
        }
        await this.player.loadVideo(url);
        if (this.isLoaded === true) {
            return;
        }
        // 依照載入的影片開啟對應的Decoder
        this.player.createDecoder()
            .then(() => {
                // 建一個SpriteFrame
                const spriteFrame = new SpriteFrame();

                // 影片產生的RenderTexture  * 影片播放時會一直更新此RenderTexture
                spriteFrame.texture = this.player.GetRenderTexture();
                this.sprite.spriteFrame = spriteFrame;

                this.onInitCompleteCallback?.();

            })
    }

    // public play(mode: PlayMode = PlayMode.Once, list: number[] = [], onComplete?: () => void): void {
    //     this.player.play(mode, list);
    //     this.player.event.onEnd = () => {
    //         onComplete();
    //         // 清除事件
    //         this.player.event.onEnd = null;
    //     };
    // }

    public playOncePromise(clipIDs: number[]): Promise<void> {
        return new Promise((resolve, reject) => {
            this.playOnce(clipIDs, resolve);
        });
    }

    public playOnce(clipIDs: number[], onComplete?: () => void): void {
        if (this.isLoaded === false) {
            console.log('影片尚未載入完成，請再使用前先執行 init() 方法，並確認回調函式內的程式碼已被執行');
            return;
        }

        this.showVideo();
        let resultIDs = clipIDs.map((id) => id + 1);
        this.player.play(PlayMode.Once, resultIDs);

        this.player.event.onEnd = (): void => {
            // 清除事件
            this.player.event.onEnd = null;
            onComplete?.();
        };

    }

    public closeDecoder(): void {
        this.sprite.spriteFrame = null;
        this.player.closeDecoder();
        this.player.unloadVideo();
        // 要再使用要重新init一次
    }

    protected onDestroy(): void {
        this.player.closeDecoder();
    }

    public playLoop(clipIDs: number[]): void {
        if (this.isLoaded === false) {
            console.log('影片尚未載入完成');
            return;
        }
        this.showVideo();
        let resultIDs = clipIDs.map((id) => id + 1);
        this.player.play(PlayMode.RepeatAll, resultIDs);
    }

    public pause(): void {
        this.player.pause(true);
    }

    public resume(): void {
        this.player.pause(false);

    }

    public stop(): void {
        this.player.pause(true);
        this.hideVideo();
    }

    private loadEffectFromBundle(): Promise<EffectAsset> {
        return new Promise((resolve, reject) => {
            assetManager.loadBundle('VideoPlayerEffect', (err, bundle) => {
                if (err) {
                    reject(err);
                    return;
                }

                let targetEffectName = '';
                if (this.videoMode === VideoMode.SIDE_BY_SIDE) {
                    targetEffectName = 'playerEffect';
                } else if (this.videoMode === VideoMode.CHROMA_KEY) {
                    targetEffectName = 'KeyColorEffect';
                } else {
                    reject(new Error('未知的影片模式'));
                    return;
                }

                bundle.load(targetEffectName, EffectAsset, (err, effect) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(effect);
                    }
                });
            });
        });
    }

    public hideVideo(): void {
        if (this.isVideoVisible === false) {
            return;
        }

        this.node.layer = Layers.Enum.NONE;
        this.isVideoVisible = false;
    }

    public showVideo(): void {
        if (this.isVideoVisible === true) {
            return;
        }
        this.isVideoVisible = true;

        this.scheduleOnce(() => {
            this.node.layer = Layers.Enum.UI_2D;
        }, 0.04)
    }
}


/*
        let a = this.clip._nativeAsset;
        console.log(a.innerHTML)
        const str = a.innerHTML
        const container = document.createElement("div"); // 創建一個容器
        container.innerHTML = str;
        const element = container.firstChild; // 取得轉換後的元素
        console.log(element.src); // <source> 元素
        
*/