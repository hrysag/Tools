import { _decorator, Component, instantiate, Node, Prefab, RichText, Sprite, SpriteFrame, tween, UIOpacity, UITransform, v3, Vec3, } from "cc";
import { Localization } from 'db://assets/Scripts/GameScripts/Localization';
import { LocalizationSpine } from 'db://assets/Scripts/GameScripts/LocalizationSpine';
import { RotationResize } from 'db://assets/Scripts/Utils/RotationResize';
import { KeySpriteFramePair } from 'db://assets/Scripts/Utils/KeySpriteFramePair';
import { GameInfoUI } from "db://assets/Scripts/GameScripts/GameInfoUI";
import { LoadingPage } from "db://assets/Scripts/GameScripts/GameInfoUI";
import { DragOutChecker } from "db://assets/Scripts/GameScripts/DragOutChecker";
import { Orientation } from "db://assets/Scripts/Utils/Config";
import { SkeletonExtension } from 'db://assets/Scripts/GameScripts/SkeletonExtension';
import { FindComponent } from "../MyUtils/FindComponent";

const { ccclass, property } = _decorator;

@ccclass("GameInfoUIFix")
export class GameInfoUIFix extends GameInfoUI {

    private _initLoadLanguageFlag: boolean = false;
    private _isRunningReLoadLanguage: boolean = false;
    //private _dirtyFlag: boolean = false;
    //private _prefabNodes: Node[] = [];

    public override init(textSpriteFrameMaps: KeySpriteFramePair[]) {

        const isNew = this['isNewLoading'];
        if (isNew) {
            const onResize = this['onSpineRotationResize'].bind(this);
            //this.node.getComponent(RotationResize).onRotationResize = this.onSpineRotationResizeFix.bind(this);
            this.node.getComponent(RotationResize).onRotationResize = onResize;
            //this.customSpawnPages();
            this['pageLength'] = 3;
            //this['pageIconGroup'].setTotalPage(this['pageLength']);
            //this['updatePageIcon']();
            let dragOutChecker = this.addComponent(DragOutChecker);
            dragOutChecker.onDragOutOfRange = this['onDragOutOfRange'].bind(this);

        } else {
            super.init(textSpriteFrameMaps); // 保留原始流程
        }

    }


    //public customSpawnPages(): void {
    public async customSpawnPages(): Promise<void> {

        const children = this['pageNode'].children;
        const pageGroup = this['pageGroup'] as LoadingPage[];
        pageGroup.length = 0;

        for (let i = 0; i < children.length; i++) {
            const node = children[i];
            node.position = v3(0, 0, 0);
            const page = new LoadingPage(node);
            const targetOpacity = i === 0 ? 255 : 0.1;

            page.setOpacity(targetOpacity);
            pageGroup.push(page);
            //this._prefabNodes.push(node);
            page.setSpine(); // 同步執行
        }
        return Promise.resolve();
        /*
        console.log(this['pageNode'].children.length);
        let index = 0;
        for (let node of this['pageNode'].children) {
            const page = new LoadingPage(node);
            const targetOpacity = index === 0 ? 255 : 0.1;
            index++
            page.setOpacity(targetOpacity);
            this['pageGroup'].push(page);
            page.setSpine();
        }*/

        /*
        const currentLangKey = Localization.instance.currentLangKey;

        const pagePromises = this['pagePrefabs'].map(async (prefab, index) => {
            const pageNode = instantiate(prefab);
            const page = new LoadingPage(pageNode);
            const targetOpacity = index === 0 ? 255 : 0.1;

            page.setOpacity(targetOpacity);
            this['pageNode'].addChild(pageNode);

            const localizationSpine = pageNode.getComponentInChildren(LocalizationSpine);
            if (localizationSpine) {
                await localizationSpine.loadAllSpine(currentLangKey);
            }
            page.setSpine();
            this['pageGroup'].push(page);
            this._prefabNodes.push(pageNode);
        });

        await Promise.all(pagePromises);
        */

    }
    /*
    private async loadLanguageSpineUpdateAgain(): Promise<void> {
        for (let node of this._prefabNodes) {
            const localizationSpine = node.getComponentInChildren(LocalizationSpine);
            if (localizationSpine) {
                await localizationSpine.loadAllSpine(Localization.instance.currentLangKey);
                this.scheduleOnce(() => {
                    localizationSpine.getComponent(SkeletonExtension).checkAndUpdateSlot();
                }, 0);
            }

        }
    }

    private onSpineRotationResizeFix(orientation: Orientation) {
        for (let i = 0; i < this['pageGroup'].length; i++) {
            this['pageGroup'][i].playAnchorAnimation(orientation);
            const targetNode = this['pageGroup'][i]['node'];
            const comp = FindComponent.findComponentInChildren(targetNode, SkeletonExtension);
            //comp?.updateSlotTexture();
        }
        //this.loadLanguageSpineUpdateAgain();
    }*/



    private async startReLoadLanguageSpine(): Promise<void> {
        await this.customSpawnPages();
        this._initLoadLanguageFlag = true;
        this._isRunningReLoadLanguage = false;
        //this.startDetect();
        //--接管新版本的startDetect流程---
        this['dragNodeEvent'].init();
        this['dragNodeEvent'].onDrag = this['onDrag'].bind(this);
        this['dragNodeEvent'].onRelease = this['onRelease'].bind(this);
        this['isDetecting'] = true;
        this['pageIconGroup'].setTotalPage(this['pageLength']);
        this['updatePageIcon']();
        this.playTargetSpine(0);
    }

    public override startDetect(): void {
        if (!this._initLoadLanguageFlag) {
            this._isRunningReLoadLanguage = true;
            this.startReLoadLanguageSpine();
        } else {
            super.startDetect();
        }
    }

    public override playTargetSpine(id: number): void {
        if (!this._initLoadLanguageFlag || this._isRunningReLoadLanguage) {
            return;
        } else {
            super.playTargetSpine(id);
            /*
            if (!this._dirtyFlag) {
                this._dirtyFlag = true;
            } else {
                super.playTargetSpine(id);
            }*/

        }
    }


}


