import { Component } from "cc"
import { GameState } from '../../../DefinitionGameData/GameStateConfigDef';
import { IWindowResize } from "db://assets/Scripts/Utils/IWindowResize";
import { Orientation } from 'db://assets/Scripts/Utils/Config';

export interface IGameState extends Component {
    changeGameState(gameState: GameState, camp?: number)
}


export class BasicGameStateAndRotationResolution extends IWindowResize implements IGameState {

    protected _gameState: GameState = null;
    protected _currentResizeOrientation: Orientation = null;

    /*
    protected onLoad(): void {
        super.onLoad();

    }*/

    public init(): void {
        if (!this._gameState) {
            this.changeGameState(GameState.NORMAL);
        }
    }

    public override onWindowResize(orientation: Orientation): void {
        if (this._currentResizeOrientation == orientation) return;
        this._currentResizeOrientation = orientation;
        if (orientation == Orientation.Landscape) {
            this.landscapeChange();
        } else if (orientation == Orientation.Portrait) {
            this.portraitChange();
        }
    }

    public changeGameState(gameState: GameState, camp?: number): void {
        // Implement the method here
        if (this._gameState == gameState) return;
        this._gameState = gameState;

    }

    public closeAllShowContainer(): void {
        this.node.active = false;
    }

    public openAllShowContainer(): void {
        this.node.active = true;
    }
    //--不寫抽象類別是因為getComponent他不允許直接抽取抽象類別
    protected landscapeChange(): void { }
    protected portraitChange(): void { }
}
