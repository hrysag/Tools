import { _decorator, CCFloat, CCInteger, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('StackRateData')
export class StackRateData {
    @property({ type: CCInteger, displayName: '連續次數', min: 0, step: 1 })
    public consecutiveCount: number = 0;

    @property({ type: CCFloat, displayName: '推疊率(%)', min: 0, max: 100, step: 1 })
    public rate: number = 0;
}

@ccclass('SymbolProbabilityData')
export class SymbolProbabilityData {
    @property({ type: CCFloat, displayName: '出現機率(%)', min: 0, step: 0.01 })
    public probability: number = 0;

    @property({ displayName: '本輪中不重複出現', tooltip: '勾選後該icon在一輪隨機中只能出現一次' })
    public noRepeat: boolean = false;

    @property({
        type: CCFloat, displayName: '出現時一定會連續的次數', tooltip: '0為都有可能', min: 0, step: 1,
        visible() { return !(this as SymbolProbabilityData).noRepeat }
    })
    public maxConsecutiveCount: number = 0;
}

@ccclass('ProbabilitySettingData')
export class ProbabilitySettingData extends Component {
    @property({ displayName: '使用堆疊率取代連續次數' })
    public useStackRate: boolean = false;

    @property({ type: StackRateData, displayName: '推疊率集合', visible() { return (this as ProbabilitySettingData).useStackRate } })
    public stackRateData: StackRateData[] = [];

    @property({ type: SymbolProbabilityData, displayName: 'icon機率資料列表' })
    public symbolProbabilityDataList: SymbolProbabilityData[] = [];
}


