/**
 * Created by EricHuang on 2023/9/12.
 * 
 */

import {IfConnectStrategy} from '../game/strategy/Strategy';
import {log} from 'cc';

export type ResultForConnect=
{
    type:string,//--connect type
    sendObject:any
}

//--for test
export class TestConnectStrategy implements IfConnectStrategy
{
    /**
     * 有可能每一代的捕魚產品他傳送的資料差距過大,或是
     * 有新增不同的特殊功能之類的,所以與server來回的這段就直接用策略模式來達到
     * 因不同產品的需求來做抽換
     */
    //public  strategyConnectDataFromPomelo:(code: string, data: any)=>Promise<any> 
    //=async(code: string, data: any):Promise<any> =>
    //--箭頭函是沒辦法在定義成屬性後用async
    constructor()
    {
        log('hellooo_TestConnectStrategy');

    }
    public  strategyConnectDataFromPomelo(code: string, data: any):ResultForConnect
    {
        let sendEvent:ResultForConnect;
        let returnObj:any; 
        switch(code)
        {
            case 'test1':
                returnObj={
                    id:data.id,
                    set:data.set
                };

            break;

            case 'test2':

                returnObj={
                    bullet:data.bullet,
                    info:data.info
                };

            break;

        }

        sendEvent={type:code,sendObject:returnObj};
       
        return sendEvent;
    }

    
}