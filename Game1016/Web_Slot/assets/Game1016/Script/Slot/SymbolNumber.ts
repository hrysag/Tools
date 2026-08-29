import { _decorator, randomRangeInt } from 'cc';
import { SymbolBase } from './ReferencePathForUniSlot';
//import { IObjPool } from 'db://assets/Scripts/Core/IObjPool';
//import { ObjPoolMgr } from 'db://assets/Scripts/Core/ObjPoolMgr';

/*
class Pool extends ObjPoolMgr<SymbolNumber> {
    public constructor() {
        super();
        this.init(10, SymbolNumber.createPoolObject);
    }
}*/

export class SymbolNumber implements SymbolBase {
    private _stopSymbol: boolean = false;
    private _symbolID: number = 0;
    private symbolCount: number = 8;
    //---new------
    private _reelIndex: number = -1; //--軸的index
    private _iconIndex: number = -1; //--icon的index
    private _isResult: boolean = false; //--是否為結果/亂數

    public get isResult(): boolean {
        return this._isResult;
    }

    public set isResult(value: boolean) {
        this._isResult = value;
    }

    public get iconIndex(): number {
        return this._iconIndex;
    }

    public set iconIndex(value: number) {
        this._iconIndex = value;
    }

    public get reelIndex(): number {
        return this._reelIndex;
    }
    public set reelIndex(value: number) {
        this._reelIndex = value;
    }


    public get symbolID(): number {
        return this._symbolID;
    }
    public set symbolID(value: number) {
        this._symbolID = value;
    }

    public get stopSymbol(): boolean {
        return this._stopSymbol;
    }
    public set stopSymbol(value: boolean) {
        this._stopSymbol = value;
    }

    constructor() { }

    /*
    public static createPoolObject(): SymbolNumber {
        return new SymbolNumber();
    }*/

    //public static pool: Pool = new Pool();

    public randomValue(): void {
        this.symbolID = this.randomSymbol();
    }

    private randomSymbol(): number {
        return randomRangeInt(0, this.symbolCount);
    }

    public onObjLoad(): void {

    }

    public onObjInstance(): void {

    }

    public onObjRecycle(): void {
        this.symbolID = -1;
        this._iconIndex = -1;
        this._reelIndex = -1;
        this._isResult = false;
    }

    public onObjUnLoad(): void {

    }
}