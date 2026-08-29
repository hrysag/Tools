import { _decorator, Component, Game, Node } from 'cc';
import { IWindowResize } from 'db://assets/Scripts/Utils/IWindowResize';
import { Orientation } from 'db://assets/Scripts/Utils/Config';
import { GameState } from '../../../DefinitionGameData/GameStateConfigDef';
import { BasicGameStateAndRotationResolution } from './IGameState';
const { ccclass, property } = _decorator;

@ccclass('NG_BGFKRotationAndVisible')
export class NG_BGFKRotationAndVisible extends BasicGameStateAndRotationResolution {

    /**
     * 這個太靠邀了沒辦法透過container的parent來做
     * @param orientation 
     */
    public override changeGameState(gameState: GameState, camp?: number): void {
        // Implement the method here
        super.changeGameState(gameState, camp);
        if (this._gameState == GameState.FREE_GAME) {
            this.node.active = false;
        }
        //console.log('NG_BGFKRotationAndVisible', this.node.name);
        if ((this._gameState == GameState.NORMAL || this._gameState == GameState.RE_SPINE)
            && this._currentResizeOrientation == Orientation.Portrait) {
            this.node.active = true;
        } else {
            this.node.active = false;
        }

    }

    public override openAllShowContainer(): void {
        if ((this._gameState == GameState.NORMAL || this._gameState == GameState.RE_SPINE)
            && this._currentResizeOrientation == Orientation.Portrait) {
            this.node.active = true;
        }
    }

    protected landscapeChange(): void {
        this.node.active = false;
    }

    protected portraitChange(): void {
        if (this._gameState == GameState.NORMAL || this._gameState == GameState.RE_SPINE) {
            this.node.active = true;
        }
    }


}