//import { GenericUIManager } from 'db://assets/GenericUI/Scripts/GenericUIManager';
//import { WaysWinScoreAnalyzer } from 'db://assets/Scripts/GameScripts/BoardAnalysis/WaysWinScoreAnalyzer';
import { GameState, TransitionsState, ShowBottomTextStatus } from '../MyUtils/GameStateConfigDef/GameStateConfigDef';
import { IGameMode } from '../MyUtils/BasicGameViewManager/IBasicGameModeManager';
import { IRandomData, InitRandomGenerator } from '../MyUtils/BasicRandomGenerator/InitRandomGenerator';
import { IStrategyRandomGenerator } from '../MyUtils/BasicRandomGenerator/IStrategyRandomGenerator';
import { GameUtilsTools } from '../MyUtils/GameUtilsTool';
import { BasicShowAniProcess } from '../MyUtils/BasicShowAniProcess/BasicShowAniProcess';
import { AbstractBasicGameController } from '../MyUtils/BasicGameController/AbstractBasicGameController';
import { BasicGameGlobalData } from '../MyUtils/BasicGlobalDataState/BasicGameGlobalData';
import { IReelInfo, GroupAniData, WinScoreData } from "../MyUtils/BasicGameDataDefinition/BasicGameDataDefinition";
import { NotifyCation } from '../MyUtils/EventSystem/NotifyCation';
import { GenericUIManager } from 'db://assets/Scripts/ModuleEntry';
import { WaysWinScoreAnalyzer } from 'db://assets/Scripts/GameScripts/BoardAnalysis/v1';
export {
    ShowBottomTextStatus,
    TransitionsState,
    GenericUIManager,
    WaysWinScoreAnalyzer,
    GameState,
    InitRandomGenerator,
    AbstractBasicGameController,
    GameUtilsTools,
    BasicShowAniProcess,
    BasicGameGlobalData,
    NotifyCation
}

//---interface
export type
{
    IGameMode,
    IRandomData,
    IStrategyRandomGenerator,
    WinScoreData,
    IReelInfo,
    GroupAniData,
}



