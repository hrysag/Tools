import { assetManager, AudioClip, AudioSource, Node } from "cc";
//import { AudioManager } from "db://assets/Scripts/Audio/AudioManager";

export enum AudioSourceList {
    BasicAS,//--基本音效的audioSource
    BtnAS,//--按鈕音效的audioSource
    Voice,//--語音音效的audioSource
    WildAS,//--wild專用音效的audioSource
    RsAs,//--RS專用音效的audioSource
    RsVs, //--RS效果專用語音的audioSource
    SP_ReadyHands_0,//--聽牌效果專用音效的audioSource
    SP_ReadyHands_1,//--聽牌效果專用音效的audioSource
    SP_ReadyHands_2,//--聽牌效果專用音效的audioSource
    SP_ReadyHands_3,//--聽牌效果專用音效的audioSource
    SP_ReadyHands_4//--聽牌效果專用音效的audioSource
}


export enum MusicList {
    //-BGM--
    ngBgm,//--Loop
    RespinBgm,//--Loop
    FgBgm,//--Loop
}

export enum SoundList {
    //====================<?遊戲音效?>=============================================================
    //--slot roll-
    Spin,
    SpinStop,
    //--symbol-
    symWin1,//-低分圖示得分，且沒有比他高倍數的圖示中獎時撥放
    symWin2,//-中分圖示得分，且沒有比他高倍數的圖示中獎時撥放
    symWin3,//-高分圖示得分，且沒有比他高倍數的圖示中獎時撥放
    //--遊戲機制--
    //-<wild>--
    wild_move,//-WILD移動(女王榮耀觸發成功時播放)
    wild_in,//-WILD啟動演繹(女王WILD生成光球時觸發)
    //--<scatter>--
    Sc_in,//-scatter圖示出現時撥放
    Sc_get,//-scatter圖示中獎
    Sc_Ready,//-預報演繹(聽牌框)
    //-<RS>--
    respin_in,//-RESPIN底板出現時播放
    frame_open,//-盤面局數框開啟時播放
    light_move,//-光球向盤面上方移動時播放
    number_increase,//-光球移動至局數中，局數增加時播放
    //-<FG>--
    fgEnterPage_In,//--FG進入頁面(進場版出現時)
    fgExitPage_In,//--FG結束頁面(結束版出現時)
    //--GUI/system轉換--
    //--基礎按鈕--
    //====================<?遊戲語音?>=============================================================
    //--進遊戲隨機播以下3個的其中一個
    Start_01,
    Start_02,
    Start_03,
    //--依照得分的賠率播以下的語音(沒有_02)
    //--5-10倍率 20%啟動隨機挑一個
    Score_01,
    Score_03,
    Score_04,
    Score_05,
    //--11-24倍率 30%啟動隨機一個
    Score_06,
    Score_07,
    Score_08,
    Score_09,
    //--RS語音--
    //--觸發機制30%機率播一個(大的顯示RS次數面板開啟時候撥放)
    Respin_01,
    Respin_02,
    Respin_03,
    Respin_04,
    Respin_05,
    //--加局隨機播一個(左側面板數字累進)
    Respin_06,
    Respin_07,
    //--FG語音--
    //--FG面板進場隨機挑一個播
    FG_In_01,
    FG_In_02,
    FG_In_03,
    FG_In_04,
    FG_In_05,
    //--FG面板出場
    //--低於15倍隨機挑一個播
    FG_Out_01,
    FG_Out_03,
    FG_Out_04,
    //--高於15倍隨機挑一個播
    FG_Out_05,
    FG_Out_06,
    FG_Out_07,
    //--FG加局語音隨機挑一個播
    FG_SpinAdd_01,
    FG_SpinAdd_02,
    FG_SpinAdd_03,
    //===1125新增 wild移動失敗===
    Wild_Ready

}




