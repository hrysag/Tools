import { _decorator, Component,find, Node,v3, RenderTexture,Camera,view, Sprite,Texture2D,ImageAsset ,Size, UITransform,SpriteFrame } from 'cc';
import{renderer,Layers,} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CaptureNodeScreen')
export class CaptureNodeScreen extends Component {
    
    @property(Camera)
    copyCamera: Camera = null!;

    @property(Node)
    targetNode: Node = null!;

   
    @property(Node)
    copyNode: Node = null!;
    
    
    rt: RenderTexture = null;
    _buffer: ArrayBufferView = null!;

    /*
    public async getNodeCaptureScreen(nodeToCapture: Node,copyNode:Node): Promise<SpriteFrame | null> 
    {
        if (!nodeToCapture) {
            console.error('getNodeCaptureScreen: nodeToCapture 為空');
            return null;
        }

        try {
            const uiTransform = nodeToCapture.getComponent(UITransform);
            if (!uiTransform) {
                console.error('getNodeCaptureScreen: nodeToCapture 沒有 UITransform 元件');
                return null;
            }

            const width = uiTransform.width;
            const height = uiTransform.height;

            this.rt = new RenderTexture();
            this.rt.reset({
                width: width,
                height: height,
            });

            console.log('check_targetWH:', width, height); // 偵錯輸出

            const cameraNode = new Node('CAMERA_NODE');
            const camera = cameraNode.addComponent(Camera);
            camera.visibility=Layers.Enum.UI_2D;
            camera.priority = 65535;
            camera.targetTexture = this.rt;
            camera.projection = Camera.ProjectionType.ORTHO;
            camera.orthoHeight = height / 2;
            cameraNode.parent = nodeToCapture.parent;
            
            //cameraNode.parent = nodeToCapture.parent;
            //cameraNode.position = v3(nodeToCapture.position.x, nodeToCapture.position.y, nodeToCapture.position.z + 1);
            //nodeToCapture.parent = cameraNode;
            //nodeToCapture.setPosition(0, 0, 0);
            
            
            this._buffer = this.rt.readPixels(nodeToCapture.position.x, nodeToCapture.position.y, width, height);

            console.log('readPixels buffer:', this._buffer); // 偵錯輸出

            await new Promise(resolve => setTimeout(resolve, 0));

            let img = new ImageAsset();
            img.reset({
                _data: this._buffer,
                width: width,
                height: height,
                format: Texture2D.PixelFormat.RGBA8888,
                _compressed: false,
            });

            console.log('ImageAsset:', img); // 偵錯輸出

            let texture = new Texture2D();
            texture.image = img;

            console.log('Texture2D:', texture); // 偵錯輸出

            let sf = new SpriteFrame();
            sf.texture = texture;
            sf.packable = false;
            //nodeToCapture.parent = nodeToCapture.parent.parent;
            copyNode!.getComponent(Sprite).spriteFrame = sf;
            copyNode!.getComponent(Sprite).spriteFrame.flipUVY = true;
            copyNode?.getComponent(UITransform)?.setContentSize(new Size(width, height));

            return sf;
        } catch (error) {
            console.error('getNodeCaptureScreen 發生錯誤:', error);
            return null;
        }
        
    }*/
    
    
    public getNodeCaptureScreen2(): void 
    {
        
        this.rt = new RenderTexture();
        const uiTransform = this.targetNode.getComponent(UITransform);
        this.rt.reset({
            //width: view.getVisibleSize().width,
            //height: view.getVisibleSize().height,
            width: uiTransform.width,
            height: uiTransform.height
            //width:500,
            //height:500
        })
        this.copyCamera.targetTexture = this.rt;
        this.copyCamera.orthoHeight = 300; // 縮小視野
        //this.copyCamera.target
        this.scheduleOnce(() => {
            this.capture();
        }, .5)
        
    }


    public capture() 
    {
        var width = this.targetNode.getComponent(UITransform).width;
        var height = this.targetNode.getComponent(UITransform).height;
        var worldPos = this.targetNode.getWorldPosition();
        //this._buffer = this.rt.readPixels(Math.round(worldPos.x), Math.round(worldPos.y), width, height);
        this._buffer = this.rt.readPixels(0, 0, width, height);
        console.log('check_targetWH:', width, height); // 偵錯輸出
        let img = new ImageAsset();
        img.reset({
            _data: this._buffer,
            width: width,
            height: height,
            format: Texture2D.PixelFormat.RGBA8888,
            _compressed: false
        });
        let texture = new Texture2D();
        texture.image = img;
        let sf = new SpriteFrame();
        sf.texture = texture;
        sf.packable = false;
        this.copyNode!.getComponent(Sprite).spriteFrame = sf;
        this.copyNode!.getComponent(Sprite).spriteFrame.flipUVY = true;
        //this.copyNode?.getComponent(UITransform)?.setContentSize(new Size(width, height));
    }

}


