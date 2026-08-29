export enum AudioSourceList {
    BasicAS,//--基本音效的audioSource
    BtnAS//--按鈕音效的audioSource
}

export enum MusicList {
    //-BGM--
    NgBgm,//--Loop
    FgBgm1,//--Loop
    FgBgm2,//--Loop
}

export enum SoundList {

    //--slot roll-
    SpinStart,
    SpinRoll,
    SpinStop,
    //--symbol
    IconWin,//-圖示連線得分時播放
    FgIconDebut,//-猜拳圖示落定時播放(轉輪wild圖案到定位後播放)
    FgIconSpin,//-猜拳圖示中出現手掌+轉動時撥放(猜拳開始轉動時撥放)
    FgIconFight,//-猜拳圖示碰撞時撥放
    FgIconLock,//-觸發RESPIN，猜拳圖示鎖定於盤面時撥放(進入第二把長出大框框的時候撥放)
    TreasureDebut,//-FG中，寶箱圖示落定時撥放
    TreasureCollect,//-寶箱圖示打開後飛出光芒擊中上方蒐集欄
    MoneyDebut,//-FG中，錢袋圖示落定時撥放
    MoneyCollect,//-錢袋圖示打開後飛出光芒擊中上方蒐集欄
    X2,//-獲得上方蒐集欄倍數時
    //--遊戲機制
    Respin,//-RESPIN(重新旋轉)訊息字出現時撥放
    RespinWin,//-RESPIN中猜拳勝利 (勝訊息字出現) 時撥放
    RespinDraw,//-RESPIN中猜拳平手 (平手訊息字出現) 時撥放
    GemCollect,//-猜拳勝利，獲得中央寶石時撥放
    GemLight,//-獲得三顆中央寶石，門縫發光時撥放
    //--GUI/system轉換
    FgEnterPageIn1,//-FG1進入介面出現時播放(NG→FG1進入介面登場)
    FgEnterPageIn2,//-FG2進入介面出現時播放(NG→FG2進入介面登場)
    ModeChange1,//-場景轉換演繹時播放(FG1場景轉場)開門
    ModeChange2,//-場景轉換演繹時播放(FG2場景轉場)開門
    FgExitPageIn1,//-FG結算介面登場
    //--購買介面
    BuyFGbutton,//-點擊［購買免費遊戲］按鍵時撥放
    BuyFGBoard,//-購買免費遊戲介面登場時撥放
    BuyButton,//-點擊［購買］按鍵時撥放
    BuyFGLeave,//-購買免費遊戲介面離場時撥放
    //--人物角色
    AlibabaWin,//--盤面得分，阿里巴巴拋金幣時的金屬掉落音
    ThievesWin,//--盤面得分，盜賊首領拉繩子掉下錢幣跟寶石時的金屬掉落音
    SPINAddOne,//--多出來的不知道啥時用
    //--基礎按鈕
    public_choice

}