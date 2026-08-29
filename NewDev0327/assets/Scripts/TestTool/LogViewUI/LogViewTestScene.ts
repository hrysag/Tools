import { _decorator, Component } from 'cc';
import { Utility } from '../../Utils/Core';

const { ccclass, property } = _decorator;

@ccclass('LogViewTestScene')
export class LogViewTestScene extends Component {
    public debugSyncMethod(): void {
        console.log('debugSyncMethod');
        this.funcA();
        this.funcD();
    }


    private funcA(): void {
        console.log('A');
        this.funcB();
    }

    private funcB(): void {
        console.log('B');
        this.funcC();
    }

    private funcC(): void {
        console.log('C');
    }

    private funcD(): void {
        console.log('D');
    }

    private funcE(): void {
        console.log('E');
        this.funcF();
    }

    private funcF(): void {
        console.log('F');
    }

    public async debugAsyncMethod(): Promise<void> {
        console.log('debugAsyncMethod');
        await this.asyncFuncA();
        await this.asyncFuncD();
    }

    private async asyncFuncA(): Promise<void> {
        console.log('asyncFuncA start');
        await Utility.waitPromise(0.5);
        await this.asyncFuncB();
        console.log('asyncFuncA end');
    }

    private async asyncFuncB(): Promise<void> {
        console.log('asyncFuncB start');
        await Utility.waitPromise(0.5);
        await this.asyncFuncC();
        console.log('asyncFuncB end');
    }

    public async asyncFuncC(): Promise<void> {
        console.log('asyncFuncC start');
        await Utility.waitPromise(1);
        console.log('asyncFuncC end');
    }

    private async asyncFuncD(): Promise<void> {
        console.log('asyncFuncD start');
        await Utility.waitPromise(1);
        console.log('asyncFuncD end');
    }

    private async asyncFuncE(): Promise<void> {
        console.log('asyncFuncE start');
        await Utility.waitPromise(1);
        console.log('asyncFuncE end');
    }

    private async asyncFuncF(): Promise<void> {
        console.log('asyncFuncF start');
        await Utility.waitPromise(1);
        console.log('asyncFuncF end');
    }
}
