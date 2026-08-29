import { _decorator, } from 'cc';
import { UniSlotMachine } from '../../Scripts/UniSlotMachine';
import { UniReelViewExample } from './UniReelViewExample';
const { ccclass, property } = _decorator;

@ccclass('UniSlotMachineExample')
export class UniSlotMachineExample extends UniSlotMachine<UniReelViewExample> {
    start() {

    }

    update(deltaTime: number) {

    }
}