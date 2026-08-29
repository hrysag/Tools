import { _decorator, Camera, Canvas, CCBoolean, Color, Component, director, gfx, instantiate, Layers, Node, Prefab, RenderTexture, Sprite, SpriteFrame, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FeatherRTHelper')
export class FeatherRTHelper extends Component {

    public readonly FEATHER_LAYER: number = 1 << 18;

    @property({ type: Sprite, tooltip: '羽化完成的RT放置的Sprite位置' })
    public targetSprite: Sprite = null;

    @property({ type: Node, tooltip: '生成羽化Canvas的根節點，若沒有放則預設放在scene Node下' })
    public featherCanvasRoot: Node = null;

    @property({ tooltip: '是否為羽化Prefab，若為場景節點請不要勾選' })
    public isPrefab: boolean = true;

    @property({ type: Prefab, visible() { return (this as FeatherRTHelper).isPrefab }, tooltip: '羽化Prefab' })
    public featherPrefab: Prefab = null;

    @property({ type: Node, visible() { return !(this as FeatherRTHelper).isPrefab }, tooltip: '羽化目標母節點' })
    public featherNode: Node = null;

    @property({ tooltip: '是否自動開始羽化，RD控制使用' })
    public isAutoStart: boolean = true;

    @property({ tooltip: '是否使用自訂RenderTexture，RD控制使用' })
    public isUsedCustomRenderTexture: boolean = false;

    public camera: Camera = null;
    public canvas: Canvas = null;
    public renderTexture: RenderTexture = null;
    public targetNode: Node = null;
    public customRTInfo: RenderTextureInfo = null;

    start() {
        if (!this.isAutoStart) {
            return;
        } else {
            this.generateFeatherRenderTexture();
        }
    }

    public generateFeatherRenderTexture() {
        this.createFeatherObject();
        this.createCanvasWithCamera();
        this.adjustLayerAndPos();
        this.createRenderTexture();
        this.alignCameraSetting();
    }

    protected createCanvasWithCamera() {
        this.createCanvas();

        if (this.featherCanvasRoot) {
            this.featherCanvasRoot.addChild(this.canvas.node);
        } else {
            const scene = director.getScene();
            scene.addChild(this.canvas.node);
        }

        if (this.isPrefab) {
            this.canvas.node.setPosition(-10000, 0, 0); // 避免生成在原本的canvas上不好調整物件位置
        } else {
            this.canvas.node.setWorldPosition(this.targetNode.getWorldPosition().x, this.targetNode.getWorldPosition().y, 0); // 跟隨原物件位置
        }

        this.targetNode.setParent(this.canvas.node);
        this.targetNode.setPosition(0, 0, 0);  // targetNode 跟隨 canvas 位置 避免直橫轉位移

        this.createCamera();
        this.canvas.node.addChild(this.camera.node);
        this.canvas.cameraComponent = this.camera;
    }

    private createCanvas() {
        const canvasNode = new Node("FeatherCanvas");
        this.canvas = canvasNode.addComponent(Canvas);
    }

    private createCamera() {
        const cameraNode = new Node("FeatherCamera");
        this.camera = cameraNode.addComponent(Camera);
        this.camera.clearFlags = Camera.ClearFlag.SOLID_COLOR;
        this.camera.clearColor = new Color(0, 0, 0, 0);
        this.camera.projection = Camera.ProjectionType.ORTHO;
        this.camera.visibility = this.FEATHER_LAYER;
        this.camera.priority = 1;
    }

    protected alignCameraSetting() {
        const featherSize = this.getFeatherObjectSize();
        this.camera.targetTexture = this.renderTexture as (RenderTexture | null);
        this.camera.orthoHeight = this.fitCameraToTargetSize(featherSize.width, featherSize.height);
        const spriteFrame = new SpriteFrame();
        spriteFrame.texture = this.renderTexture;
        this.targetSprite.spriteFrame = spriteFrame;
    }

    protected createFeatherObject() {
        if (this.isPrefab) {
            this.targetNode = instantiate(this.featherPrefab);
        } else {
            this.targetNode = this.featherNode;
        }
    }

    private adjustLayerAndPos() {
        this.targetNode.layer = this.FEATHER_LAYER;
        this.targetNode.children.forEach((child) => {
            child.layer = this.FEATHER_LAYER;
            const pos = child.getPosition();
            child.setPosition(pos.x, pos.y, 0); // 確保 pos z 正常
        });
    }

    public createRenderTexture() {
        if (this.isUsedCustomRenderTexture) {
            this.renderTexture = this.customRenderTexture(this.customRTInfo);
        } else {
            const size = this.getFeatherObjectSize();
            this.renderTexture = this.defaultRenderTexture(size.width, size.height);
        }
    }

    protected getFeatherObjectSize() {
        const width = this.targetNode.getComponent(UITransform).width;
        const height = this.targetNode.getComponent(UITransform).height;
        return { width, height };
    }

    protected defaultRenderTexture(width: number, height: number): RenderTexture {
        const rt = new RenderTexture();
        rt.reset({
            width: width,
            height: height,
        });
        return rt;
    }

    protected fitCameraToTargetSize(targetWidth: number, targetHeight: number) {
        const aspect = this.camera.camera.aspect;
        const targetAspect = targetWidth / targetHeight;

        if (aspect > targetAspect) {
            return targetHeight / 2; // camera 比例相對較寬，直接以高度為基準計算高度
        } else {
            const visibleHeight = targetWidth / aspect;
            return visibleHeight / 2; // camera 比例相對較窄，以寬度為基準計算高度
        }
    }

    public customRenderTexture(rtInfo: RenderTextureInfo) {
        const rt = new RenderTexture();
        rt.reset(rtInfo);
        return rt;
    }

    public destroyRT() {
        if (this.renderTexture) {
            this.renderTexture.destroy();
            this.renderTexture = null;
        }
    }

    public resetRT(rtInfo: RenderTextureInfo) {
        this.renderTexture?.reset(rtInfo);
    }
}

export class RenderTextureInfo {
    name?: string;
    width: number;
    height: number;
    passInfo?: gfx.RenderPassInfo;
    externalResLow?: number;
    externalResHigh?: number;
    externalFlag?: gfx.TextureFlags;
}

