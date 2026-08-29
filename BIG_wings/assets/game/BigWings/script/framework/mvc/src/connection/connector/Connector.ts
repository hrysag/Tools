
import { BaseSendActionParams, ClientSendActionParams } from './send/ClientAction';
import { BaseSeverEventMap, ServerSendActionEventMap } from './receive/SeverAction';
import { WebSocketCore, WebsocketCoreConfig } from '../ws/WebSocketCore';
import { deserializer } from '../ws/deserializer';
import { serializer, stringify } from '../ws/serializer';
import { Receive } from './receive/Receive';
import { Send } from './send/Send';

import { Emitter, EventMap } from "strict-event-emitter";


/**
 * 連線中心
 * 
 * 1. socket 主控 websocket 連線實體
 * 2. receiver 接收server端訊息 並轉換成事件發出
 * 3. sender 發送訊息給server端
 */
export class Connector<
    ServerEventMap extends EventMap = ServerSendActionEventMap,
    ClientSendMap extends BaseSendActionParams = ClientSendActionParams
> {

    get socket() { return this._socket; }
    get receiver() { return this._receiver; }
    get sender() { return this._sender; }
    get event() { return this._receiver; }

    protected _socket: WebSocketCore;
    protected _receiver: Receive<ServerEventMap>;
    protected _sender: Send<ClientSendMap>;

    constructor() {
        this._socket = this.initWebSocket();
        this._receiver = this.initReceiver();
        this._sender = this.initSender();


        this._receiver.on('connect', () => {
            console.log('connect');
        });
    }
    protected initWebSocket() {

        const websocketCore = new WebSocketCore();

        return websocketCore;
    }

    protected initReceiver() { return new Receive<ServerEventMap>(this._socket!); }

    protected initSender() { return new Send<ClientSendMap>(this._socket!); }


    connect(url: string, binary: boolean = true): Promise<boolean> {

        const config: WebsocketCoreConfig = {
            deserializer: deserializer,
            serializer: (binary) ? serializer : stringify,
        };

        if (binary) {
            config.binaryType = 'arraybuffer';
        }

        return this._socket?.connect(url, config);

    }
}


