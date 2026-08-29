import { Camera, Canvas, Component, EventMouse, EventTouch, Node, Vec3 } from "cc";
import { BinaryBuffer } from "../../Communication/BinaryBuffer";
import { addEventHandlerToButton, addEventHandlerToToggle, checkLabelBold, endPerformanceTimer, getBrowserAndDeviceInfo, getCurrentCanvas, getCurrentTime, getCurrentTimeStampInSeconds, getEventLocalPos, getEventScreenPos, getGameCode, getHistoryURL, getHost, getPayTableURL, getRandomInt, getRuleURL, getTimezoneFormat, getURLLanguage, getURLParams, isDev, isEventMouseInNode, isTestEnvironment, loadResourcePrefab, preloadScenePromise, replaceRichTextImgKey, screenShot, setIntervalWithLimit, makeSkippablePromise, startPerformanceTimer, waitPromise, waitUntilPromise } from "./CCExtension";
import { base64ToArrayBuffer, base64ToBinaryBuffer, base64ToByteArray, base64ToByteArray16, binaryBufferToDecimalArray, byteArrayToArrayBuffer, byteArrayToBinaryBuffer, numberArrayToBase64, uint8ArrayToBase64, uint8ArrayToBinaryBuffer } from "./PacketHandle";
import { checkProbability, pickRandomNumber } from "./MathExt";


class _utility {
    public static numberArrayToBase64: (numberArray: number[]) => string = (numberArray: number[]): string => numberArrayToBase64(numberArray);
    public static byteArrayToArrayBuffer: (byteArray: number[]) => ArrayBuffer = (byteArray: number[]): ArrayBuffer => byteArrayToArrayBuffer(byteArray);
    public static base64ToArrayBuffer: (base64: string) => ArrayBuffer = (base64: string): ArrayBuffer => base64ToArrayBuffer(base64);
    public static uint8ArrayToBase64: (bytes: Uint8Array) => string = (bytes: Uint8Array): string => uint8ArrayToBase64(bytes);
    public static uint8ArrayToBinaryBuffer: (bytes: Uint8Array) => BinaryBuffer = (bytes: Uint8Array): BinaryBuffer => uint8ArrayToBinaryBuffer(bytes);
    public static base64ToBinaryBuffer: (base64: string) => BinaryBuffer = (base64: string): BinaryBuffer => base64ToBinaryBuffer(base64);
    public static binaryBufferToDecimalArray: (binaryBuffer: BinaryBuffer) => number[] = (binaryBuffer: BinaryBuffer): number[] => binaryBufferToDecimalArray(binaryBuffer);
    public static byteArrayToBinaryBuffer: (byteArray: number[]) => BinaryBuffer = (byteArray: number[]): BinaryBuffer => byteArrayToBinaryBuffer(byteArray);
    public static base64ToByteArray: (base64: string) => number[] = (base64: string): number[] => base64ToByteArray(base64);
    public static base64ToByteArray16: (base64: string) => string[] = (base64: string): string[] => base64ToByteArray16(base64);

    public static addEventHandlerToButton: (buttonNode: Node, component: Component, callback: string, customEventData?: string) => void = (buttonNode: Node, component: Component, callback: string, customEventData: string = '') => addEventHandlerToButton(buttonNode, component, callback, customEventData);
    public static addEventHandlerToToggle: (toggleNode: Node, component: Component, callback: string, customEventData?: string) => void = (toggleNode: Node, component: Component, callback: string, customEventData: string = '') => addEventHandlerToToggle(toggleNode, component, callback, customEventData);
    public static waitPromise: (seconds: number, signal?: AbortSignal) => Promise<any> = (seconds: number, signal: AbortSignal = undefined): Promise<any> => waitPromise(seconds, signal);
    public static waitUntilPromise: (checkCallback: () => boolean, interval?: number, signal?: AbortSignal) => Promise<void> = (checkCallback: () => boolean, interval: number = 0.01, signal: AbortSignal = undefined): Promise<void> => waitUntilPromise(checkCallback, interval, signal);
    public static getRandomInt: (max: number) => number = (max: number): number => getRandomInt(max);
    public static preloadScenePromise: (sceneName: string, onProgress: any) => Promise<any> = (sceneName: string, onProgress: any): Promise<any> => preloadScenePromise(sceneName, onProgress);
    public static getCurrentTime: () => string = (): string => getCurrentTime();
    public static getURLParams: (url: string) => Map<string, string> = (url: string): Map<string, string> => getURLParams(url);
    public static getURLLanguage: () => string = (): string => getURLLanguage();
    public static getGameCode: () => string = (): string => getGameCode();
    public static getHost: () => string = (): string => getHost();
    public static screenShot: () => Promise<string> = (): Promise<string> => screenShot();
    public static isDev: () => boolean = (): boolean => isDev();
    public static getCurrentTimeStampInSeconds: () => number = (): number => getCurrentTimeStampInSeconds();
    public static getBrowserAndDeviceInfo: () => any = (): any => getBrowserAndDeviceInfo();
    public static setIntervalWithLimit: (callback: Function, interval: number, maxCount: number) => number = (callback: Function, interval: number, maxCount: number): number => setIntervalWithLimit(callback, interval, maxCount);
    public static getTimezoneFormat: () => string = (): string => getTimezoneFormat();
    public static loadResourcePrefab: (url: string) => Promise<Node> = (url: string): Promise<Node> => loadResourcePrefab(url);
    public static replaceRichTextImgKey: (str: string) => string = (str: string): string => replaceRichTextImgKey(str);
    public static getCurrentCanvas: () => Canvas = (): Canvas => getCurrentCanvas();
    public static getPayTableURL: (gameID: string, lang: string) => string = (gameID: string, lang: string): string => getPayTableURL(gameID, lang);
    public static getRuleURL: (gameID: string, lang: string) => string = (gameID: string, lang: string): string => getRuleURL(gameID, lang);
    public static getHistoryURL: (lang: string, recordJsonString: string) => string = (lang: string, recordJsonString: string): string => getHistoryURL(lang, recordJsonString);
    public static isTestEnvironment: () => boolean = (): boolean => isTestEnvironment();
    public static checkLabelBold: (langKey: string) => void = (langKey: string): void => checkLabelBold(langKey);
    public static isEventMouseInNode: (camera: Camera, event: EventMouse, node: Node) => boolean = (camera: Camera, event: EventMouse, node: Node): boolean => isEventMouseInNode(camera, event, node);
    public static getEventLocalPos: (camera: Camera, event: EventMouse | EventTouch, node: Node) => Vec3 = (camera: Camera, event: EventMouse | EventTouch, node: Node): Vec3 => getEventLocalPos(camera, event, node);
    public static getEventScreenPos: (camera: Camera, event: EventMouse | EventTouch) => Vec3 = (camera: Camera, event: EventMouse | EventTouch): Vec3 => getEventScreenPos(camera, event);
    public static startPerformanceTimer: () => void = (): void => startPerformanceTimer();
    public static endPerformanceTimer: () => number = (): number => endPerformanceTimer();
    public static makeSkippablePromise: (promise: Promise<any>) => { promise: Promise<any>, skip: Function } = (promise: Promise<any>): { promise: Promise<any>, skip: Function } => makeSkippablePromise(promise);
    public static checkProbability: (chance: number) => boolean = (chance: number): boolean => checkProbability(chance);
    public static pickRandomNumber: (list: number[]) => number | undefined = (list: number[]): number | undefined => pickRandomNumber(list);
}

export const Utility = _utility;

export * from "./BinaryBufferParser";
export * from "./ComponentExt";
export * from "./Debug";
export * from "./GoogleLog";
export * from "./IdStringPair";
export * from "./IObjPool";
export * from "./KeySpriteFramePair";
export * from "./KeyStringPair";
export * from "./NodeExt";
export * from "./ObjPoolMgr";
export * from "./PrefabList";
export * from "./Queue";
export * from "./StringExt";
export * from "./TweenExt";


