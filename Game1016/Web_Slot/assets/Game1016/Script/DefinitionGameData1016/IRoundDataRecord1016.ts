
export interface IFGorRSCount {
    reels: number[];
    total: number;
    hope?: number[];
}
export interface IRoundDataRecord1016 {
    reSpinCount?: IFGorRSCount | null;
    fgCount?: IFGorRSCount;
    //usePreviousData: boolean;
    firstNgToRsData?: {
        reSpinCount: IFGorRSCount | null;
        fgCount: IFGorRSCount;
        usePreviousData: boolean;
    }
}

export class RoundDataRecord1016 implements IRoundDataRecord1016 {

    public reSpinCount: IFGorRSCount | null;
    public fgCount: IFGorRSCount;
    public firstNgToRsData: {
        reSpinCount: IFGorRSCount | null;
        fgCount: IFGorRSCount;
        usePreviousData: boolean;
    }

    public firstNgToFgData: {
        fgCount: IFGorRSCount;
        //usePreviousData: boolean;
    }

    constructor() {
        this.resetData();
    }

    public resetData(): void {
        this.reSpinCount = null;
        this.fgCount = { reels: [], total: 0 };
        this.firstNgToRsData = null;
        this.firstNgToFgData = null;
    }
}