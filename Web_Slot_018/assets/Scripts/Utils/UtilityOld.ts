import { _decorator, Button, Component, EventHandler, EventTouch, Node, js, director, assetManager, Camera, Canvas, view, RenderTexture, resources, instantiate, Prefab, Label, error, gfx, Color, EventMouse, Vec3, UITransform, tween } from 'cc';
import { BinaryBuffer } from "../Communication/BinaryBuffer";
import { Debug } from './Debug';
import { EDITOR, PREVIEW } from 'cc/env';
import { GameSetting } from '../GameScripts/GameSetting';

export class Utility {

    // 以下封包處理相關========================================

    public static numberArrayToBase64(numberArray: number[]): string {
        if (numberArray.some((v) => v > 255)) {
            error("numberArrayToBase64 error: numberArray has value > 255");
            return null;
        }
        let byteArray = new Uint8Array(numberArray);
        return this.uint8ArrayToBase64(byteArray);
    }

    private static byteArrayToArrayBuffer(byteArray: number[]): ArrayBuffer {
        if (byteArray.some((v) => v > 255)) {
            error("byteArrayToArrayBuffer error: byteArray has value > 255");
            return null;
        }

        var uint8Array = new Uint8Array(byteArray.length);
        for (var i = 0; i < uint8Array.length; i++) {
            uint8Array[i] = byteArray[i];
        }
        return uint8Array.buffer;
    }

    private static base64ToArrayBuffer(base64: string): ArrayBuffer {
        var binaryString = window.atob(base64);
        var bytes = new Uint8Array(binaryString.length);
        for (var i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }

    public static uint8ArrayToBase64(bytes: Uint8Array) {
        let binary = '';
        let len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    // 將Uint8Array 轉成 BinaryBuffer
    public static uint8ArrayToBinaryBuffer(bytes: Uint8Array): BinaryBuffer {
        return new BinaryBuffer(bytes.buffer);
    }

    // 將base64字串 轉成 BinaryBuffer
    public static base64ToBinaryBuffer(base64: string): BinaryBuffer {
        let binaryBuffer = new BinaryBuffer(this.base64ToArrayBuffer(base64));
        return binaryBuffer;
    }

    public static binaryBufferToDecimalArray(binaryBuffer: BinaryBuffer): number[] {
        let success = true;
        let decimalArray: number[] = []
        while (success) {
            let result = binaryBuffer.getByte();
            success = result[0];
            if (success) {
                decimalArray.push(result[1]);
            }
        }
        return decimalArray;
    }

    // 將byte array 轉成 BinaryBuffer
    public static byteArrayToBinaryBuffer(byteArray: number[]): BinaryBuffer {
        let binaryBuffer = new BinaryBuffer(this.byteArrayToArrayBuffer(byteArray));
        return binaryBuffer;
    }

    // 將base64字串轉乘number[]( byte array) 測試用
    public static base64ToByteArray(base64: string): number[] {
        var binaryString = atob(base64);
        var bytes: number[] = []
        for (var i = 0; i < binaryString.length; i++) {
            bytes.push(binaryString.charCodeAt(i));
        }
        return bytes;
    }

    public static base64ToByteArray16(base64: string): string[] {
        var binaryString = atob(base64);
        var bytes: number[] = []
        for (var i = 0; i < binaryString.length; i++) {
            bytes.push(binaryString.charCodeAt(i));
        }
        let result: string[] = bytes.map(v => v.toString(16).toUpperCase()).map(v => v.length === 1 ? '0' + v : v);
        return result;
    }

    // 以上封包處理相關========================================

    public static addEventHandlerToButton(buttonNode: Node, component: Component, callback: string, customEventData: string = '') {

        const clickEventHandler = new EventHandler();
        clickEventHandler.target = component.node; // 這個 node 節點是你的事件處理代碼組件所属的節點
        clickEventHandler.component = js.getClassName(component);// 這個是腳本類名
        clickEventHandler.handler = callback; // 參數是 event: EventTouch, customEventData: string
        clickEventHandler.customEventData = customEventData;

        let button = buttonNode.getComponent(Button);
        if (!button) {
            Debug.LogError(`${buttonNode.name}  不存在 Button  Component!!`);
        }
        let buttonClickEvents = button.clickEvents;
        const index = buttonClickEvents.indexOf(clickEventHandler);
        if (index > -1) {
            buttonClickEvents.splice(index, 1);
        }

        buttonClickEvents.push(clickEventHandler);
    }


    public static waitPromise(seconds: number, signal: AbortSignal = undefined): Promise<any> {
        return new Promise((resolve, reject) => {
            let _tween = tween({})
                .delay(seconds)
                .call(() => {
                    resolve(null);
                })
                .start();
            if (signal) {
                signal.addEventListener('abort', () => {
                    _tween.stop();
                    resolve(null);
                });
            }
        });
    }



    public static getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    public static preloadScenePromise(sceneName: string, onProgress: any): Promise<any> {
        return new Promise((resolve, reject) => {
            director.preloadScene(sceneName, onProgress, () => {
                const bundle = assetManager.bundles.find((bundle): boolean => !!bundle.getSceneInfo(sceneName));
                if (bundle) {
                    bundle.loadScene(sceneName, (err, scene): void => {
                        if (!err) {
                            resolve(scene);
                        } else {
                            reject(err);
                        }
                    });
                }
                else {
                    reject("Bundle not found");
                }
            });
        });
    }

    static getCurrentTime(): string {
        let nowDate: Date = new Date();
        let hours = nowDate.getHours();
        let min = nowDate.getMinutes();
        let seconds = nowDate.getSeconds();
        let minStr = min < 10 ? `0${min}` : `${min}`;
        let year = nowDate.getFullYear();
        let month = nowDate.getMonth() + 1;
        let date = nowDate.getDate();
        let str = `${year}/${month}/${date}  ${hours}:${minStr}:${seconds}`;
        return str;
    }

    static getURLParams(url: string): Map<string, string> {
        // 創建 URLSearchParams 物件並傳入網址的 search 部分
        const params = new URLSearchParams(new URL(url).search);
        // 宣告一個空的 JSON 物件
        const paramsMap: Map<string, string> = new Map<string, string>();

        // 使用 forEach 方法遍歷 URLSearchParams 物件並將參數加入 JSON 物件中
        params.forEach((value, key) => {
            paramsMap.set(key, value);
        });
        return paramsMap;
    }

    static getURLLanguage(): string {
        const params = this.getURLParams(window.location.href);
        return params.get('lang') ?? "tw"; // 要在Editor檢查不同語系時，直接替換tw, cn, en, vn
    }

    static getHost(): string {

        let url = "testgame.apex-win.com";

        if (EDITOR || PREVIEW) {
            return url;
        }

        if (window.location.host.includes("localhost")) {
            return url;
        }

        return window.location.host;
    }

    public static screenShot(): Promise<string> {

        return new Promise((resolve, reject) => {
            let cam = director.getScene().getComponentInChildren(Canvas).cameraComponent;
            let newCamNode = instantiate(cam.node);
            let newCam = newCamNode.getComponent(Camera);
            newCamNode.parent = cam.node.parent;
            let renderTex = new RenderTexture();
            newCam.clearFlags = gfx.ClearFlagBit.ALL;
            newCam.clearColor = new Color(0, 0, 0, 0);
            renderTex.initialize({
                width: Math.floor(view.getVisibleSize().width),
                height: Math.floor(view.getVisibleSize().height),
            });

            newCam.targetTexture = renderTex;
            newCam.scheduleOnce(() => {
                let data = renderTex.readPixels();
                let canvas = document.createElement('canvas');
                let ctx = canvas.getContext('2d');
                canvas.width = renderTex.width;
                canvas.height = renderTex.height;

                let width = renderTex.width;
                let height = renderTex.height;

                let rowBytes = width * 4;
                for (let row = 0; row < height; row++) {
                    let srow = height - 1 - row;
                    let imageData = ctx.createImageData(width, 1);
                    let start = srow * width * 4;
                    for (let i = 0; i < rowBytes; i++) {
                        imageData.data[i] = data[start + i];
                    }
                    ctx.putImageData(imageData, 0, row);
                }

                let dataURL = canvas.toDataURL("image/png");
                newCamNode.destroy();
                resolve(dataURL);

            });
        });
    }

    public static isDev() {
        return EDITOR || PREVIEW;
    }

    public static getCurrentTimeStampInSeconds(): number {
        const timestampInSeconds: number = Math.floor(Date.now() / 1000);
        return timestampInSeconds;
    }

    public static getBrowserAndDeviceInfo(): any {
        var userAgent = navigator.userAgent;
        // 检查是否是 iPhone
        var isIphone = /iPhone/.test(userAgent);
        // 检查是否是 Android 设备
        var isAndroid = /Android/.test(userAgent);

        // 检查是否是 Safari
        var isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
        // 检查是否是 Chrome
        var isChrome = /Chrome/.test(userAgent) && !/Edge/.test(userAgent);

        // 检查是否是 iPad（如果需要区分）
        var isIpad = /iPad/.test(userAgent);

        // 检查是否是 iOS 设备（包含 iPhone 和 iPad）
        var isIos = /iPhone|iPad|iPod/.test(userAgent);

        return {
            isIphone: isIphone,
            isAndroid: isAndroid,
            isSafari: isSafari,
            isChrome: isChrome,
            isIpad: isIpad,
            isIos: isIos
        };
    }

    public static setIntervalWithLimit(callback: Function, interval: number, maxCount: number): number {
        let count = 0;

        let intervalId = setInterval(function () {
            count++;
            callback(count); // 執行回呼函數並傳入當前次數

            if (count >= maxCount) {
                clearInterval(intervalId); // 停止 setInterval
            }
        }, interval); // 設定間隔時間
        return intervalId;
    }

    public static getTimezoneFormat() {
        const date = new Date();
        const timezoneOffset = date.getTimezoneOffset();

        // 計算小時和分鐘的時區差異
        const hoursOffset = Math.floor(Math.abs(timezoneOffset) / 60);
        const minutesOffset = Math.abs(timezoneOffset) % 60;
        const sign = timezoneOffset > 0 ? '-' : '+';

        // 格式化成 "+HH:MM" 或 "-HH:MM"
        // const formattedOffset = `UTC${sign}${String(hoursOffset).padStart(2, '0')}:${String(minutesOffset).padStart(2, '0')}`;
        const formattedOffset = `UTC${sign}${String(hoursOffset)}`;
        return formattedOffset;
    }

    public static loadResourcePrefab(url: string): Promise<Node> {
        return new Promise<Node>((resolve, reject) => {
            resources.load(url, Prefab, (err, prefab: Prefab) => {
                if (err) {
                    reject(err);
                } else {
                    let node: Node = instantiate(prefab);
                    resolve(node);
                }
            });
        });
    }

    public static replaceRichTextImgKey(str: string): string {
        // return str.replace(/<<([^>]+)>>/g, "<img src='$1' height=60 align=center />");
        return str.replace(/(\S?)<<([^>]+)>>(\S?)/g, (match, before, content, after) => {
            // 確保前後有空格
            const prefix = before && before !== ' ' ? `${before} ` : before;
            const suffix = after && after !== ' ' ? ` ${after}` : after;

            return `${prefix}<img src='${content}' height=60 align=center />${suffix}`;
        });
    }

    public static getCurrentCanvas(): Canvas {
        return director.getScene().getComponentInChildren(Canvas);
    }

    public static getPayTableURL(gameID: string, lang: string): string {
        let timestamp = new Date().getTime();
        let payTableURL = GameSetting.payTableURL;
        payTableURL = payTableURL.replace("[gameID]", gameID.toLowerCase());
        payTableURL = payTableURL.replace("[lang]", lang);
        payTableURL += `&timestamp=${timestamp}`;
        return payTableURL;
    }

    public static getRuleURL(gameID: string, lang: string): string {
        let timestamp = new Date().getTime();
        let ruleURL = GameSetting.ruleURL;
        ruleURL = ruleURL.replace("[gameID]", gameID.toLowerCase());
        ruleURL = ruleURL.replace("[lang]", lang);
        ruleURL += `&timestamp=${timestamp}`;

        return ruleURL;
    }

    public static getHistoryURL(lang: string, recordJsonString: string): string {

        // let historyURL = "https://dev-gamerecord.apex-win.com/#/game-list?lang=[lang]&history=[json]";
        // if (this.isTestEnvironment() === false) {
        //     historyURL = `https://gamerecord.apex-win.com/#/game-list?lang=[lang]&history=[json]`;
        // }

        let historyURL = GameSetting.historyURL;
        let timestamp = new Date().getTime();
        historyURL = historyURL.replace("[lang]", lang);
        historyURL = historyURL.replace("[json]", recordJsonString);
        historyURL += `&timestamp=${timestamp}`;

        return historyURL;
    }

    public static isTestEnvironment(): boolean {
        return window.location.host.includes('test');
    }

    public static checkLabelBold(langKey: string) {
        let allLabels = director.getScene().getComponentsInChildren(Label);
        let isSafari = Utility.getBrowserAndDeviceInfo().isSafari;
        // let isChinese = langKey === "tw" || "cn";
        if (isSafari) {
            for (let label of allLabels) {
                label.isBold = false;
            }
        }
    }

    // 測試EventMouse所在的區域是否在Node範圍內
    public static isEventMouseInNode(camera: Camera, event: EventMouse, node: Node): boolean {
        let screenSpacePos = camera.screenToWorld(event.getLocation().toVec3(), new Vec3());
        let localSpacePos = node.inverseTransformPoint(new Vec3(), screenSpacePos);
        let contentSize = node.getComponent(UITransform).contentSize;
        let halfWidth = contentSize.width / 2;
        let halfHeight = contentSize.height / 2;
        if (localSpacePos.x > -halfWidth && localSpacePos.x < halfWidth && localSpacePos.y > -halfHeight && localSpacePos.y < halfHeight) {
            return true;
        }
        return false;
    }

    public static getEventLocalPos(camera: Camera, event: EventMouse | EventTouch, node: Node): Vec3 {
        let screenSpacePos = camera.screenToWorld(event.getLocation().toVec3(), new Vec3());
        let localSpacePos = node.inverseTransformPoint(new Vec3(), screenSpacePos);
        return localSpacePos;
    }

    public static getEventScreenPos(camera: Camera, event: EventMouse | EventTouch): Vec3 {
        let screenSpacePos = camera.screenToWorld(event.getLocation().toVec3(), new Vec3());
        return screenSpacePos;
    }

    // ---計時器功能------
    private static startTimer: number = 0;

    public static startPerformanceTimer() {
        this.startTimer = Date.now();
    }

    public static endPerformanceTimer() {
        let endTimer = Date.now();
        let duration = endTimer - this.startTimer;
        return duration;
    }
    // ------------------

}
