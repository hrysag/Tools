import { Node, assetManager,Sprite, ImageAsset, Texture2D, SpriteFrame } from 'cc';

export class CanvasRender {
    /**
     * 使用離屏 Canvas 繪製 Node 的 Sprite 內容。
     * @param {Node} nodeToRender 需要繪製的 Node。
     * @returns {Promise<SpriteFrame | null>} 回傳 SpriteFrame 或 null（若繪製失敗）。
     */
    async renderNodeToCanvas(nodeToRender: Node): Promise<SpriteFrame | null> {
        if (!nodeToRender) {
            console.error('renderNodeToCanvas: nodeToRender 為空');
            return null;
        }

        const sprite = nodeToRender.getComponent(Sprite);
        if (!sprite || !sprite.spriteFrame || !sprite.spriteFrame.texture) {
            console.error('renderNodeToCanvas: nodeToRender 沒有有效的 Sprite 元件');
            return null;
        }

        const texture = sprite.spriteFrame.texture;
        const width = texture.width;
        const height = texture.height;

        // 建立離屏 Canvas
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            console.error('renderNodeToCanvas: 無法取得 Canvas 2D 上下文');
            return null;
        }
        console.log('check_assetManager:',this.getUrl(sprite.spriteFrame));
        // 將紋理繪製到 Canvas
        const image = new Image();
        //image.src = texture.nativeUrl;
        image.src = this.getUrl(sprite.spriteFrame);
        await new Promise(resolve => image.onload = resolve);
        ctx.drawImage(image, 0, 0);

        // 將 Canvas 內容轉換為 ImageAsset
        const imageData = ctx.getImageData(0, 0, width, height);
        const imageAsset = new ImageAsset();
        console.log('check_imageData:', imageData); // 偵錯輸出
        imageAsset.reset({
            //@ts-ignore
            _data: imageData.data.buffer,
            width: width,
            height: height,
            format: Texture2D.PixelFormat.RGBA8888,
            _compressed: false,
        });

        // 建立 Texture2D 和 SpriteFrame
        const newTexture = new Texture2D();
        newTexture.image = imageAsset;
        const spriteFrame = new SpriteFrame();
        spriteFrame.texture = newTexture;

        return spriteFrame;
    }


    private getUrl(target:any):string
    {
        let assetMap=assetManager.assets['_map'];
        let uuid = null;
        for(let key in assetMap){
            if(assetMap[key] === target){
            uuid = key;
            //let test=assetMap[key];
            //return assetMap[key].url;
            break;
            }
        }
        let bundles = assetManager.bundles['_map'];
        for (let key in bundles) {
            //if (key === 'internal' || key === 'main' || key === 'resources') continue;
            let infoMap = bundles[key]._config.assetInfos._map;
            if (infoMap[uuid] !== undefined) {
                return infoMap[uuid].path;
            }
        }
        return null;
    }
}