
export class FunctionLogData {
    // 類別名稱
    public target: string;
    // 方法名稱
    public function: string;
    // 方法被調用次數
    public count: number;
    // 方法總花費時間
    public cost: number;
    // 子方法
    public children: FunctionLogData[];
}

export class VirtualFunctionLogData {
    /** class名稱 */
    public target: string;
    /** method名稱 */
    public function: string;
    /** method執行花費時間 */
    public cost: number;

    /** 是否可以展開 */
    public canExpand: boolean;
    /** 是否為展開狀態 */
    public isExpanding: boolean;
    /** 是否為顯示狀態 */
    public isShowing: boolean;
    /** 層級 */
    public layer: number;
    /** 資料在完整列表中的索引位置 */
    public index: number;
}

export class ExpandButtonClickData {
    public isExpand: boolean;
    public index: number;
}

export class VirtualCoverageInfoData {
    public name: string;
    public value: number;
    public index: number;

    public isClass: boolean;
    public isExpanding: boolean;
    public isShowing: boolean;
}