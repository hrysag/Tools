import { log } from "cc";
import { CodeMapFunction, PomeloDisconnectEvents } from "../Libs/fish-common-lib/types/networking/definitions";
import { EnterRoomData, Requests, ResponseCodes } from "../Scripts/gameUtils/definitions";
import Connector from "../Libs/fish-common-lib/types/networking/connector";

export default class ConnectToGSDemo {

    connector: Connector
    gid: number = 38003;

    constructor() {
        this.connector = window.util.network.connector
    }

    public async connect(sid: string): Promise<void> {
        const eventHandler = new EventHandler();
        this.connector.init({
            host: gsDomain(), // should be sub-domain(from cookie) + location.hostname
            port: 3010, // get it from cookie
            ssl: true,
            timeout: 5, // for every request
            codeMap: this.getCodeMap(eventHandler),
        }, eventHandler)
        const result = await this.connector.connect()
        log('yo1', result)
        const result2 = await this.connector.login({
            sid,
            gid: this.gid,
            cid: 11,
            entry: {
                portal: 1,
                client: 2,
                platform: 3
            },
            // entry: window.util.general.device.getPlatformDeviceEntryInfo()
        })
        log('yo2', result2)
    }
    
    getCodeMap(e: EventHandler): Map<string, CodeMapFunction> {
        const m = new Map<string, CodeMapFunction>()
        m.set(ResponseCodes.EnterLobby, e.onEnterLobby.bind(e));
        m.set(ResponseCodes.Balance, e.onBalance.bind(e));
        m.set(ResponseCodes.NewFish, e.onNewFish.bind(e));
        m.set(ResponseCodes.WeaponSettings, e.onWeaponSettings.bind(e));
        m.set(ResponseCodes.FishSettings, e.onFishSettings.bind(e));

        return m;
    }
}

class EventHandler implements PomeloDisconnectEvents  {

    connector: Connector

    constructor() {
        this.connector = window.util.network.connector;
    }

    async onEnterLobby(code: string, data: object) {
        log('onEnterLobby', data, this); 
        const result3 = await this.connector.send<EnterRoomData>(
            Requests.SelectRoom,
            { p: 0 },
            { code: ResponseCodes.EnterRoom, timeout: 5 })
        log('yo3', (result3 as EnterRoomData))
    }

    async onBalance(code: string, data: object) {
        log('onBalance', code, data);
        // alert(window.util.numeric.prettify.numberWithComma(data['b']))0
        const result = await this.connector.send(
            Requests.Exchange,
            { p: 500, r: '1:5' },
            { code: ResponseCodes.Exchange, timeout: 3 }
        )
        log('onExchange', result);
    }

    onExistBullets(data: object): void {

    }
    onWeaponSettings(code: string, data: object): void {
        log('onWeaponSettings', data);
    }
    onFishSettings(code: string, data: object): void {
        log('onFishSettings', data);
    }
    onSerialNumber(data: object): void {

    }
    onUpdateSeat(data: object): void {

    }
    onRefund(data: object): void {

    }
    onNewFish(code: string, data: object): void {
        log(data);
    }
    onFishFormation(data: object): void {

    }

    onInitSeats(data: object): void {
        log('onInitSeats', data);
    }
 
    onDisconnected(data: object): void {

    }
 
    onKick(msg: { reason: string; }): void {

    }

    onError(data: object): void {

    }

    onOtherEvents(code: string, data: object): void {
    }

    onEnterRoom(code: string, data: EnterRoomData): void {
        log('onEnterRoom', code, data);
    }
}

const gsDomain = () => {
    return 'ws01.fisher-dev.cc';
    // return 'ws01.fisher-test.cc';
}