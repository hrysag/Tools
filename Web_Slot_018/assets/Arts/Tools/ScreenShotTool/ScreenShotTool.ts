import { _decorator, Component, Node } from 'cc';
import { Utility } from 'db://assets/Scripts/Utils/Utility';
const { ccclass, property } = _decorator;

@ccclass('ScreenShotTool')
export class ScreenShotTool extends Component {

    private isLeftCtrlDown: boolean = false;

    @property(Node)
    private printBtn: Node = null;

    start() {
        // input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        // input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    private onPrintBtnClick() {
        this.printBtn.active = false;
        this.scheduleOnce(() => {
            Utility.screenShot()
                .then((dataURL: string) => {
                    this.printBtn.active = true;
                    this.saveDataURLAsPNG(dataURL, 'screenshot.png');
                });
        }, 0.001);
    }

    private saveDataURLAsPNG(dataURL, filename) {

        // 下載圖片
        // 创建一个链接元素

        var link = document.createElement('a');
        // 设置下载文件的名称和Base64 URL
        link.download = filename || "download.png";
        link.href = dataURL;
        // 模拟点击链接以触发下载
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);

    }

    /*
        private saveDataURLAsPNG(dataURL, filename) {
            // 解析 dataURL，轉換為 Blob
            const byteString = atob(dataURL.split(',')[1]); // 取得 base64 編碼的部分
            const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0]; // 取得 MIME 類型
    
            // 建立 ArrayBuffer 並填入數據
            const arrayBuffer = new ArrayBuffer(byteString.length);
            const uint8Array = new Uint8Array(arrayBuffer);
    
            for (let i = 0; i < byteString.length; i++) {
                uint8Array[i] = byteString.charCodeAt(i);
            }
    
            // 建立 Blob
            const blob = new Blob([uint8Array], { type: mimeString });
    
            // 產生下載連結
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = filename || "download.png";
    
            // 觸發下載
            document.body.appendChild(link);
            link.click();
    
            // 清理 DOM
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
        }
    */
    /*
        private onKeyDown(event: EventKeyboard) {
            if (event.keyCode === KeyCode.CTRL_LEFT) {
                this.isLeftCtrlDown = true;
            }
            else if (this.isLeftCtrlDown && event.keyCode === KeyCode.KEY_P) {
                if (this.isLeftCtrlDown) {
                    Utility.screenShot()
                        .then((dataURL: string) => {
                            // 下載圖片
                            // 创建一个链接元素
                            var link = document.createElement('a');
                            // 设置下载文件的名称和Base64 URL
                            link.download = 'screenshot.png';
                            link.href = dataURL;
                            // 模拟点击链接以触发下载
                            link.click();
                        });
                }
            }
        }
    
        private onKeyUp(event: EventKeyboard) {
            if (event.keyCode === KeyCode.CTRL_LEFT) {
                this.isLeftCtrlDown = false;
            }
        }
        */
}


