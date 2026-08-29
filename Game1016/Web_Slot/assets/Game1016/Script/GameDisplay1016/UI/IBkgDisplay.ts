//--背景反黑的共通行為
export interface IBkgDisplay 
{
    //---開啟背景反黑
    openDark(spColorMode?:boolean): void;
    //---關閉背景反黑
    closeDark(spColorMode?:boolean): void;
    //---漸變反黑
    openTweenDark(spColorMode?:boolean): Promise<void>;
    closeTweenDark(spColorMode?:boolean): Promise<void>;

}