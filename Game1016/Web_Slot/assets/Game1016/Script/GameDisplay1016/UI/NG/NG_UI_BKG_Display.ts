import { _decorator, Component, Node, Vec3, v3, Label, UITransform, sp, game } from 'cc';
import { ContainerWholeBehavior } from '../../../MyUtils/BasicShowContainerManager/Component/ContainerWholeBehavior';
import { GameUtilsTools, GameState, } from '../../../ReferencePath';
import { GlobalAccessReader } from '../../../DefinitionGameData1016/AccessDefs/GlobalAccess';
import { GameGlobalData, GameGlobalKeys } from '../../../DefinitionGameData1016/GameGlobalData1016';


const { ccclass, property } = _decorator;

@ccclass('NG_UI_BKG_Display')
export class NG_UI_BKG_Display extends ContainerWholeBehavior {

    constructor() {
        super();
    }

    //---給控制器去呼叫使用的(遊戲狀態改變時呼叫)-備用
    public override changeGameMode(gameState: GameState): void {
        //this._currentGameState = gameState;
    }

    public override closeContainerTween(): void {

        const gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
        if (gameState == GameState.FREE_GAME || gameState == GameState.NULL) {
            super.closeContainerTween();
        }
    }

    public override openContainerTween(): void {

        const gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
        if (gameState == GameState.NORMAL) {
            super.openContainerTween();
        }

    }

}


