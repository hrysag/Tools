interface IPomeloEvent {
    onConnect(): void;
    onDisconnect(msg: object): void;
    onKick(msg: object): void;
    onError(msg: object): void;
    onAccountRequest(msg: object): void;
    onHeartBeat(millisecond: number): void;
}

type InitialSetting = {
    ssl: boolean;
    host: string;
    port: number | undefined;
    timeout: number;
    codeMap: Map<string, CodeMapFunction>;
};
type CodeMapFunction = (code: string, data: any) => void;
type LoginInfo = {
    sid: string;
    cid: number;
    gid: number;
    entry: PlatformDeviceEntryInfo;
};
type PlatformDeviceEntryInfo = {
    client: number;
    portal: number;
    platform: number;
};
type SendWithSync = {
    code: string;
    timeout?: number;
};
type LoginResponse = {
    id: number;
    hallID: number;
    account: string;
    isTransferAll: boolean;
};
interface PomeloDisconnectEvents {
    onDisconnected: (info: object) => void;
    onError: (error: object) => void;
    onKick: (msg: {
        reason: string;
    }) => void;
    onPing: (quality: 'good' | 'adequate' | 'poor') => void;
}

declare class Connector implements IPomeloEvent {
    timeout: number;
    private pomelo;
    private setting;
    private delegate;
    private gid;
    private resolves;
    constructor();
    init(setting: InitialSetting, delegate: PomeloDisconnectEvents): void;
    connect(): Promise<boolean>;
    login(info: LoginInfo): Promise<LoginResponse>;
    send<T>(route: string, data: object, sync?: SendWithSync): void | Promise<T>;
    onConnect(): void;
    onAccountRequest(data: LoginResponse): void;
    onDisconnect(data: object): void;
    onKick(data: {
        reason: string;
    }): void;
    onError(data: object): void;
    onHeartBeat(millisecond: number): void;
    private addListeningCodes;
}

interface FloatHelper {
    fixed: (num: string | number, decimal: number) => number;
}
declare const o$2: FloatHelper;

interface Prettifier {
    numberWithComma(num: string | number): string;
    numberInKilo(num: string | number): string;
    numberInMillion(num: string | number): string;
}
declare const o$1: Prettifier;

interface DeviceHelper {
    getOSVersion(): number;
    getPlatformDeviceEntryInfo(): PlatformDeviceEntryInfo;
    isIframe: boolean;
    isWebView: boolean;
}
declare const o: DeviceHelper;

type AnalyticParam = {
    event: 'fishing_click' | 'fishing_enter_game' | 'fishing_shoot' | 'achievement';
    argument?: string | number;
    name?: string;
    version?: string;
    game_version?: string;
    company_id?: string | number;
    user_id?: string | number;
    hall_id?: string | number;
    game_type?: string | number;
    normal_shoot?: number;
    auto_shoot?: number;
    lock_shoot?: number;
    had_achievement_on?: boolean;
    open_bag?: boolean;
    open_mission?: boolean;
};
declare class ShootTypeAnalytics {
    private static normalShoot;
    private static lockShoot;
    private static autoShoot;
    private static interval;
    private static intervalID;
    static accumulate(type: 'normal' | 'lock' | 'auto'): void;
    static start(minute?: number): void;
}

interface Util {
    network: Network;
    numeric: Numeric;
    general: General;
    analytic: Analytic;
    version: string;
}
interface Network {
    connector: Connector;
}
interface Numeric {
    float: typeof o$2;
    prettify: typeof o$1;
}
interface Analytic {
    analyze(d: AnalyticParam): void;
    setUserID(id: number): void;
    ShootTypeAnalytics: typeof ShootTypeAnalytics;
}
interface General {
    device: typeof o;
    urlGet(key: string): string | undefined;
    getCookie(key: string): string | undefined;
    setCookie(key: string, value: string): void;
    loginWithDemo(data: LoginWithDemo): Promise<string>;
    parseEntryData(encryptedData: string): object;
    toLocalLangSuffix(lang: string): string;
    checkWebGLSupport(): boolean;
    isLocalTesting(): boolean;
    getLocalTestDomain(env: 'DEV' | 'TEST' | 'PROD'): {
        domain: string;
        gsSubDomain: string;
    };
    exit(): void;
}
type LoginWithDemo = {
    account: string;
    gameType: string;
    lang: 'tw' | 'cn' | 'en';
    env: 'DEV' | 'TEST' | 'PROD';
};

declare global {
    interface Window {
        util: Util;
        useLocalUtil: boolean;
    }
}
