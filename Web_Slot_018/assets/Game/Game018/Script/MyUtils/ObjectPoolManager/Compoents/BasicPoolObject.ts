import { _decorator, Component } from 'cc';
import { IBasicPoolObject } from '../Definitions/IBasicPoolObject';

const { ccclass, property } = _decorator;
@ccclass('BasicPoolObject')

export class BasicPoolObject extends Component implements IBasicPoolObject {

    public beforeDestroy(): void {

    }
    public resetData(): void {

    }

}