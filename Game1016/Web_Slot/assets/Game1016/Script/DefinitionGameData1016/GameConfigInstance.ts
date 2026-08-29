import { DefinitionGameConfigData016 } from './DefinitionGameConfigData016';
import { GameState } from '../MyUtils/GameStateConfigDef/GameStateConfigDef';
//--避免循環依賴(要用解構的方式抽出config裡面的變數)
export const DefinitionGameConfigData = new DefinitionGameConfigData016();

//--wild 特殊資料用的
export const DYN_WILD_INFO = {

    WILD_CONTINUE: 'wildContinue',
    // Add more dynamic properties as needed
}

//--判斷目前狀態與下一個狀態
export interface IStateCondition {
    currentRoundState: GameState,
    nextRoundState: GameState | null,//--沒有就是最後一步了
    isDifferentStateNext: boolean,
    isFinal: boolean//-是否為最後一round
}