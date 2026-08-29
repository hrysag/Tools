import { _decorator, Vec3, Component, Node, sp, v3, UITransform } from 'cc';
import { AnimationPlayStateList, AniCtrlPropDef } from '../../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase';
import { CustomAnimationController } from '../../../MyUtils/AnimationSystem/Components/CustomAnimationController';
import { FindComponent } from '../../../MyUtils/FindComponent';
import { FG_BonusSkinState, FG_BonusAniState, FG_BonusLevel } from './FG_bonusDataDef';
import { Orientation } from '../../../../../../Scripts/Utils/Config';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { SoundList, AudioSourceList } from '../../../DefinitionGameData/SoundList';
const { ccclass, property } = _decorator;

@ccclass('FG_BonusBarAniController')
export class FG_BonusBarAniController extends CustomAnimationController {

    @property({ type: AnimationPlayStateList, displayName: 'animationPlayStateList', visible: true, tooltip: '單一的識別碼' })
    private _animationPlayStateList: AnimationPlayStateList;

    @property({ type: [Vec3], displayName: 'horizontal_pos_CAMP_0', visible: true, tooltip: '橫版的位置_camp_0' })
    private _horizontal_pos_CAMP_0: Vec3[] = [];

    @property({ type: [Vec3], displayName: 'horizontal_pos_CAMP_1', visible: true, tooltip: '橫版的位置_camp_1' })
    private _horizontal_pos_CAMP_1: Vec3[] = [];

    @property({ type: [Vec3], displayName: 'vertical_pos_CAMP_0', visible: true, tooltip: '直版的位置_camp_0' })
    private _vertical_pos_CAMP_0: Vec3[] = [];

    @property({ type: [Vec3], displayName: 'vertical_pos_CAMP_1', visible: true, tooltip: '直版的位置_camp_1' })
    private _vertical_pos_CAMP_1: Vec3[] = [];

    private _mapSkin: Map<string, Map<string, string>>;
    private _mapAni: Map<string, string>;
    private _mapSpine: Map<number, sp.Skeleton>;
    private _mapSpineWorldPos: Map<number, Vec3>;
    private _gameScreenRotationResolution: Orientation = null;
    private _camp: number = -1;

    set camp(value: number) {
        this._camp = value;
    }

    protected onLoad(): void {

        //console.log('FG_BonusBarAniController onLoad', this._animationPlayStateList);
        this.init();
        const targetNode = this.node.getChildByName('Root');

        //const children=targetNode.children;
        const len = targetNode.children.length;
        for (let i: number = 0; i < len; i++) {
            const child = targetNode.getChildByName('sp_' + i);
            const spine = child.getComponent(sp.Skeleton);
            if (spine) {
                this._mapSpine.set(i, spine);
                spine.clearTracks();
            }
        }
    }
    public init(): void {
        this._mapSkin = new Map([
            [
                'FG_01',
                new Map([
                    [FG_BonusSkinState.Sub_01, '_sub_01'],
                    [FG_BonusSkinState.Sub_05, '_sub_05'],
                    [FG_BonusSkinState.Sub_09, '_sub_09'],
                    [FG_BonusSkinState.Sub_13, '_sub_13'],
                    [FG_BonusSkinState.Sub_normal, '_sub_normal']
                ])
            ],
            [
                'FG_02',
                new Map([
                    [FG_BonusSkinState.Sub_01, '_sub_01'],
                    [FG_BonusSkinState.Sub_05, '_sub_05'],
                    [FG_BonusSkinState.Sub_09, '_sub_09'],
                    [FG_BonusSkinState.Sub_13, '_sub_13'],
                    [FG_BonusSkinState.Sub_normal, '_sub_normal']
                ])
            ]
        ]);

        this._mapAni = new Map([
            [FG_BonusAniState.ON, 'on'],
            [FG_BonusAniState.OFF, 'off'],
            [FG_BonusAniState.ON_TO_OFF, 'on_to_off'],
            [FG_BonusAniState.OFF_TO_ON, 'off_to_on']
        ]);

        this._mapSpine = new Map();
        this._mapSpineWorldPos = new Map();
        //this._gameScreenRotationResolution = Orientation.Landscape;
    }



    public getWorldPosition(index: number): Vec3 {
        //-_mapSpine(index,spine)
        return this._mapSpineWorldPos.get(index);
    }

    public getSpine(index: number): sp.Skeleton {
        return this._mapSpine.get(index);
    }

    //--直橫版改位置
    public setGameScreenRotationResolution(value: Orientation): void {
        this._gameScreenRotationResolution = value;
        this.setPositions();
    }
    //--依照陣營不同設定不同的位置與skin
    public setPositions(): void {
        this.scheduleOnce(() => {
            let targetPos: Vec3[]
            if (this._camp == 0) {
                targetPos = (this._gameScreenRotationResolution == Orientation.Landscape) ? this._horizontal_pos_CAMP_0 : this._vertical_pos_CAMP_0;
            } else {
                targetPos = (this._gameScreenRotationResolution == Orientation.Landscape) ? this._horizontal_pos_CAMP_1 : this._vertical_pos_CAMP_1;
            }
            const targetNode = this.node.getChildByName('Root');
            const uiTransform = targetNode.getComponent(UITransform);
            this._mapSpineWorldPos.clear();
            for (let i = 0; i < targetPos.length; i++) {
                const targetSpine = this._mapSpine.get(i);
                if (targetSpine) {
                    targetSpine.node.setPosition(targetPos[i]);
                    const worldPos = uiTransform.convertToWorldSpaceAR(targetSpine.node.position);
                    this._mapSpineWorldPos.set(i, worldPos);
                }
            }
        }, 0);
    }
    //-0/4/8/12
    public async playTitleAni(level: FG_BonusLevel): Promise<void> {
        const targetSpine = this._mapSpine.get(level);
        if (targetSpine) {
            await this.playTargetAniInPromise(targetSpine, this._mapAni.get(FG_BonusAniState.OFF_TO_ON));
            targetSpine.setAnimation(0, this._mapAni.get(FG_BonusAniState.ON), false);
        }
    }

    public async playSingleItemAni(itemIndex: number): Promise<void> {
        const targetSpine = this._mapSpine.get(itemIndex);
        //console.log('playSingleItemAni', itemIndex, targetSpine);
        if (targetSpine) {
            this.checkIndexForSound(itemIndex);
            await this.playTargetAniInPromise(targetSpine, this._mapAni.get(FG_BonusAniState.OFF_TO_ON));
            targetSpine.setAnimation(0, this._mapAni.get(FG_BonusAniState.ON), false);
        }
    }

    /**
     * PS不能顛倒或是倒播,startIndex必須<小於>endIndex
     * @param startIndex 
     * @param endIndex 
     */
    public async playRangesAni(startIndex: number, endIndex: number): Promise<void> {
        let count = startIndex;
        const maxLen = endIndex - 1;
        while (count < maxLen) {
            const targetSpine = this._mapSpine.get(count);
            if (targetSpine) {
                await this.playTargetAniInPromise(targetSpine, this._mapAni.get(FG_BonusAniState.OFF_TO_ON));
                targetSpine.setAnimation(0, this._mapAni.get(FG_BonusAniState.ON), false);
            }
            count++;
        }
    }

    public override resetData(): void {
        for (let [key, value] of this._mapSpine) {
            if (value) {
                let trackEntry = value.getCurrent(0);
                if (trackEntry) {
                    value.clearTrack(trackEntry.trackIndex);
                }
                value.setToSetupPose();
                value.setBonesToSetupPose();
                value.setSlotsToSetupPose();
            }
        }
    }

    public playTargetAniInPromise(sp: sp.Skeleton, aniKey: string): Promise<void> {
        return new Promise((resolve) => {
            const spineCompleteHandler = (trackEntry) => {
                resolve();
            }

            sp.setCompleteListener(spineCompleteHandler);
            sp.setAnimation(0, aniKey, false);
        });
    }


    public setSkinAndInitSpine(key: string): void {

        let targetMap = this._mapSkin.get(key);
        let skinKey: string = '';
        const len = this._mapSpine.size;
        for (let i: number = 0; i < len; i++) {
            const sp = this._mapSpine.get(i);
            if (sp) {
                if (i % 4 == 0) {
                    skinKey = targetMap.get(this.getSPSkinKey(i));
                } else {
                    skinKey = targetMap.get(FG_BonusSkinState.Sub_normal);
                }
                sp.setSkin(key + skinKey);
                sp.setAnimation(0, this.getAniKeyByState(FG_BonusAniState.OFF), false);
            }
        }
    }


    private checkIndexForSound(index: number): void {
        const target = [0, 4, 8, 12];
        if (target.includes(index)) {
            //播放音效
            AudioManager.instance.playSound(SoundList.X2, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
        }

    }


    private getSPSkinKey(index: number): FG_BonusSkinState {
        const skinObject: { [key: number]: FG_BonusSkinState } = {
            0: FG_BonusSkinState.Sub_01,
            4: FG_BonusSkinState.Sub_05,
            8: FG_BonusSkinState.Sub_09,
            12: FG_BonusSkinState.Sub_13
        };
        return skinObject[index];
    }

    private getSkinKeyByState(skinKey: string, state: FG_BonusSkinState): string {
        return this._mapSkin.get(skinKey).get(state);
    }
    private getAniKeyByState(state: FG_BonusAniState): string {
        return this._mapAni.get(state);
    }
}


