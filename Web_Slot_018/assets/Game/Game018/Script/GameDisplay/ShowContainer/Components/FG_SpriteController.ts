import { Component, Enum, _decorator, CCBoolean, sp, Node, CCString } from "cc";
import { CleanTrackType } from "../../../MyUtils/AnimationSystem/Definitions/AnimationDataOptions";
import { Orientation } from "../../../../../../Scripts/Utils/Config";
import { IGameState } from "../Components/IGameState";
import { GameState } from '../../../DefinitionGameData/GameStateConfigDef';
import { AbstractBasicDisplayContainer } from './IBG_Ani';
const { ccclass, property } = _decorator;

@ccclass('FG_SpriteController')
export class FG_SpriteController extends AbstractBasicDisplayContainer {
    /**
     * 單純的拿AbstractBasicDisplayContainer來硬灌給<只有sprite的內容+又要換層級的顯示群組>
     * FG_Ali/FG_Thieves(在slotFrame裡面)
     */
    @property(CCBoolean)
    public switchChild: boolean = false;

    @property([Node])
    public landscape: Node[] = [];

    @property([Node])
    public portrait: Node[] = [];

    protected _gameRotationResolution: Orientation = Orientation.Landscape;
    protected _camp: number = -1;
    protected _gameState: GameState = null;
    private _dirtyFlag: boolean = false;

    set camp(value: number) {
        this._camp = value;
    }

    //--這邊只做一次啟動的動作
    protected onLoad(): void {
        if (!this._dirtyFlag) {
            this.init();
        }
    }

    public init(): void {

        if (!this._dirtyFlag) {
            this._dirtyFlag = true;
            if (!this._gameState) {
                this.changeGameState(GameState.NORMAL);
            }
        }
    }

    public stopAllAni(): void {
        this.closeNode();
    }
    public playAni(value?: string): void {
        this.changeRotationResolution(this._gameRotationResolution);
    }

    public changeRotationResolution(value: Orientation): void {
        this._gameRotationResolution = value;
        if (this.node.active) {
            if (value == Orientation.Landscape) {
                this.changeToLandscape();
            } else if (value == Orientation.Portrait) {
                this.changeToPortrait();
            }
        }
    }



    protected changeToLandscape(): void {
        for (let i = 0; i < this.landscape.length; i += 1) {
            const landscapeNode = this.landscape[i];
            const portraitNode = this.portrait[i];
            // 注意順序
            landscapeNode.active = true;
            while (portraitNode.children.length !== 0) {
                const target = portraitNode.children[0];
                target.parent = landscapeNode;

                if (target.name == 'FG_BonusCollectionBox') {
                    if (this._camp == 0) {
                        target.setPosition(0, 10, 0);
                    } else if (this._camp == 1) {
                        target.setPosition(0, 7, 0);
                    }

                    if (target.children.length > 0) {
                        //-78企劃0714
                        if (target.children[0].name == 'FG_CollectBox_all') {
                            target.children[0].setPosition(0, 0, 0); // 確保位置正確  
                        }
                    }
                } else {
                    target.setPosition(0, 0, 0);
                }

            }
            portraitNode.active = false;
        }
    }

    protected changeToPortrait(): void {
        for (let i = 0; i < this.landscape.length; i += 1) {
            const landscapeNode = this.landscape[i];
            const portraitNode = this.portrait[i];
            // 注意順序
            portraitNode.active = true;
            while (landscapeNode.children.length !== 0) {
                // log(`切換${landscapeNode.children[0].name} to ${portraitNode.name}`);
                const target = landscapeNode.children[0];
                target.parent = portraitNode;
                if (target.name == 'FG_BonusCollectionBox') {

                    if (this._camp == 0) {
                        target.setPosition(2, 50, 0);
                    } else if (this._camp == 1) {
                        target.setPosition(0, 47, 0);
                    }
                    if (target.children.length > 0) {
                        //-78企劃0714
                        if (target.children[0].name == 'FG_CollectBox_all') {
                            target.children[0].setPosition(0, 0, 0); // 確保位置正確  
                        }
                    }
                } else {
                    target.setPosition(0, 0, 0);
                }
            }
            landscapeNode.active = false;
        }
    }


    public changeGameState(gameState: GameState, camp?: number) {
        if (this._gameState == gameState) return;
        this._gameState = gameState;
        this.changeRotationResolution(this._gameRotationResolution);

    }

    protected closeNode(): void {
        this.node.active = false;
    }

    protected openNode(targetNodeList: Node[]): void {
        this.node.active = true;
    }

    protected cleanCurrentTrack(): void {
        return null;
    }

    protected clearTracks(): void {
        return null;
    }
}