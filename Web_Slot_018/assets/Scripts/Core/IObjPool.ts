export interface IObjPool {
    onObjLoad(): void;
    onObjInstance(): void;
    onObjRecycle(): void;
    onObjUnLoad(): void;
}
