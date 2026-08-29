import { _decorator, CCInteger, } from 'cc';
import { UniMovement } from './Movement/UniMovement';
import { SymbolBase } from './Interface/SymbolBase';
const { ccclass, property } = _decorator;

@ccclass('UniIconBase')
export class UniIconBase<Symbol extends SymbolBase> extends UniMovement {
    @property({ type: CCInteger, visible: true, readonly: true })
    protected _siblingIndex: number = 0;

    public set siblingIndex(index: number) {
        this._lastSiblingIndex = index;
        this._siblingIndex = index;
        this.node.setSiblingIndex(index);
    }

    public get siblingIndex(): number {
        return this._siblingIndex;
    }

    protected _symbol: Symbol;

    public get symbol(): Symbol {
        return this._symbol;
    }

    public set symbol(value: Symbol) {
        this._symbol = value;
    }

    protected _lastSiblingIndex: number = 0;

    public get lastSiblingIndex(): number {
        return this._lastSiblingIndex;
    }

    public init(): void {
        this.siblingIndex = this.node.getSiblingIndex();
    }
}