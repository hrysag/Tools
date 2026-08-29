import { Skeleton, Vec3, _decorator, tween } from 'cc';
import { BigWingsSymbol } from './BigWingsSymbol';
import { SymbolItem } from './SymbolItem';
import { UtilsKit } from '../lib/UtilsKit';
import { PrefabInstancePoolManager } from '../tools/PrefabInstancePoolManager';
import { SlotWheel, SlotWheelEvent } from './SlotWheel';
import { GameManager } from "../components/GameManager";

const { ccclass, property } = _decorator;

export class BigWingsWheelEvent {
    public static DropAwayEnd: string = "DropAwayEnd";
}

@ccclass('BigWingsWheel')
export class BigWingsWheel extends SlotWheel {

    public wildSym: BigWingsSymbol = null;
    private wildStayTimes: number = 0;


    protected spawnSymbolByID(id: number = this.generateSymbolID(), prepend: boolean = true): BigWingsSymbol {
        let symbol: BigWingsSymbol = PrefabInstancePoolManager.instance.takeOut(this.symbolPrefab).getComponent(BigWingsSymbol);

        this.addSymbol(symbol, prepend);
        symbol.changeSymbolID(id);
        return symbol;
    }

    protected generateSymbolID(): number {
        let id: number;
        if (this._extendedCards.length > 0) {
            id = this._extendedCards.shift() - 1;
        } else {
            id = Math.floor(13 * Math.random());
        }
        return id;
    }


    launch() {
        super.launch();
    }

    // rewrite stopEnd
    protected run() {
        let deltaTime: number = this._lastTime;
        this._lastTime = Date.now() * 0.001;
        deltaTime = this._lastTime - deltaTime;

        let desireVelocity: number = this._inStoppingPhase ? this.bounceVelocity : this.maxVelocity;
        let accelerationTime: number = this._acceleration == 0 ? 0 : (desireVelocity - this._velocity) / this._acceleration;
        let uniformVelocityTime: number = 0;

        if (this._inStoppingPhase) { // 準備停止
            deltaTime = Math.min(this._timeToStop, deltaTime);
            this._timeToStop -= deltaTime;
            if (this._timeToStop <= 0) {
                this._isRunning = false;
                this.unschedule(this.run);
            }
        }

        if (accelerationTime < deltaTime) {
            uniformVelocityTime = deltaTime - accelerationTime;
        } else {
            accelerationTime = deltaTime;
        }

        let displacement: number = this._velocity * accelerationTime + 0.5 * this._acceleration * accelerationTime * accelerationTime + desireVelocity * uniformVelocityTime;
        let bounceDisplacement: number = this.getBounceDisplacement(this.bounceVelocity, this.maxVelocity, this._totalTimeToStop, this._velocity);
        bounceDisplacement += this.getBounceDisplacement(this.initialVelocity, this.maxVelocity, this.timeToAchieveMaxVelocity);


        let top: number;
        let len: number = this.arrSymbol.length;
        let symbol: SymbolItem;
        let symbolTop: number;
        for (let i: number = 0; i < len; i++) {
            symbol = this.arrSymbol[i];
            SlotWheel.vec3.set(0, displacement, 0);
            // symbol.node.setPosition(Vec3.add(SlotWheel.vec3, SlotWheel.vec3, symbol.node.getPosition()));
            symbol.node.position = symbol.node.position.add(SlotWheel.vec3);
            
            /*
            if(i==0)
            {
                //--test log
                console.log('check_resetPosNode',i,symbol.node.position.y,'displacement__',displacement,'bounceDisplacement___',bounceDisplacement); 
            }*/

            
            if (i == 0) {
                top = symbol.node.getPosition().y + 0.5 * symbol.height;
            }

            symbolTop = symbol.node.getPosition().y + 0.5 * symbol.height + (bounceDisplacement || 0);
            // bounceDisplacement 在轉的時候是NaN  因為沒this._totalTimeToStop
            if (symbolTop <= this.maskRect.y) {
                this.removeSymbol(symbol);
                i--;
                len--;
            }
        }

        let newSymbol: SymbolItem;
        while (top < this.maskRect.y + this.maskRect.height) {
            newSymbol = this.spawnSymbolByID();
            newSymbol.node.setPosition(0, top + 0.5 * newSymbol.height, 0);
            top += newSymbol.height;

            symbolTop = symbol.node.getPosition().y + 0.5 * symbol.height + bounceDisplacement;
            if (symbolTop <= this.maskRect.y) {
                // if (!this._inStoppingPhase && top <= this.maskRect.y) {
                this.removeSymbol(symbol);
            } else {
                if (!this._inStoppingPhase) {
                    newSymbol.gettingBlur(true);
                }
            }
        }

        this._velocity = uniformVelocityTime != 0 ? desireVelocity : this._velocity + accelerationTime * this._acceleration;

        if (!this._isRunning) { // 轉輪停止事件可以掛在這
            this.stopEnd();
            // this._inStoppingPhase = false;
            // this.node.emit(SlotWheelEvent.StopEnd);
        }
    }


    protected async stopEnd(): Promise<void> {
        await this.playAppear();
        await this.checkExpand();
        this._inStoppingPhase = false;
        this.node.emit(SlotWheelEvent.StopEnd);

    }

    protected async playAppear(): Promise<void> {
        for (let i = 0; i < this.mainSymbolAmount; i++) {
            let sym: BigWingsSymbol = <BigWingsSymbol>this.getMainSymbolByIndex(i);
            await sym.appear();
        }

    }
    protected async checkExpand(): Promise<void> {
        if (this.wildStayTimes > 0) return;
        for (let i = 0; i < this.mainSymbolAmount; i++) {
            let sym: BigWingsSymbol = <BigWingsSymbol>this.getMainSymbolByIndex(i);
            if (sym.symbolID == 0) {
                await sym.expand(i);

                (<BigWingsSymbol>this.arrMainSymbol[0]).changeToWild(0);

                this.wildStayTimes++;

                this.wildSym.idle();
                if (GameManager.isFree && this.wildStayTimes == 1) {
                    await this.wildSym.lock();
                    // this.wildStayTimes++;
                }
            }
        }
    }
    public async playWildWin(): Promise<void> {

        if (this.wildSym) {
            await this.wildSym.win();
        }
    }
    // spin的時候check
    public async checkStay(): Promise<void> {
        if (!this.isWildStaying()) return;
        if (GameManager.isFree && this.wildStayTimes <= 3) {
            // console.error("stay");
            this.wildSym.idle();
            this.wildStayTimes++;
        } else {

            console.error("end stay");
            this.wildSym.node.active = false;
            this.wildStayTimes = 0;

            // wild要走時再把下面symbol換成wild 
            // (<BigWingsSymbol>this.arrMainSymbol[0]).changeToWild(0);
        }
    }

    public isWildStaying(): boolean {
        return this.wildStayTimes > 0;
    }






}