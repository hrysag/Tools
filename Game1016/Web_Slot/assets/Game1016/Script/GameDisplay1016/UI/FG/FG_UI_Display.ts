import { _decorator, Component, Label, Node, Vec3, v3, UITransform, UIOpacity, tween } from 'cc';
import { AnimationController, GameUtilsTools } from '../../../ReferencePath';
import { ContainerWholeBehavior } from '../../../MyUtils/BasicShowContainerManager/Component/ContainerWholeBehavior';
import { IBasicGUI } from '../IBasicGUI';
import { GameGlobalData, GameGlobalKeys } from '../../../DefinitionGameData1016/GameGlobalData1016';
import { GlobalAccessReader } from '../../../DefinitionGameData1016/AccessDefs/GlobalAccess';
import { AsyncScope } from '../../../MyUtils/AsyncScope/AsyncScope';
import { SoundList, AudioSourceList, MusicList } from '../../../DefinitionGameData1016/SoundList1016';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/ModuleEntry';
//import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';

const { ccclass, property } = _decorator;
const ANIMATION_FGUI_TYPE = {
     FG_COUNT: 'FG_Num_Up'
}
const SIGNAL_KEY = 'FG_UI_CTRL_SIGNAL';
const LOG_TITLE = 'FG_UI_Display';
@ccclass('FG_UI_Display')
export class FG_UI_Display extends ContainerWholeBehavior implements IBasicGUI {

     @property({ type: AnimationController, visible: true, displayName: 'FG_UI動畫控制器', tooltip: 'FG_UI動畫控制器' })
     private _aniCtrl: AnimationController = null;

     @property({ type: Node, visible: true, displayName: 'FG_UI_label', tooltip: 'FG_UI_label' })
     private _fgLabelNode: Node = null;

     private _dirtyFlag: boolean = false;
     private _fgcount: number = 0;
     private _label: Label = null;
     private _async: AsyncScope;

     protected onLoad(): void {
          if (this._dirtyFlag) return;
          this._dirtyFlag = true;
          //this.init();
     }

     protected start(): void {
          this.init();
     }

     public init(): void {
          if (!this._dirtyFlag) return;
          this._aniCtrl?.init();
          this._label = this._fgLabelNode.getComponent(Label);
          super.init();
          this.setFGCount(0);
          this._async = AsyncScope.getInstance();
     }

     public reset(): void {
          this._fgcount = 0;
          this._label.string = '0';
     }

     public setTotalFgCount(total: number): void {
          this._fgcount = total;
          this._label.string = this._fgcount.numberComma();
     }

     public setFGCount(count: number): void {
          this._fgcount += count;
          this._label.string = this._fgcount.numberComma();
     }



     //---太尷尬了我也不想寫成這樣直接return promise
     public async triggerFGCountUp(value: number): Promise<void> {
          //--動畫時間0.4秒-particle 0.3秒
          const timeout = 0.4;
          this.setFGCount(value);
          const dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.fg?.showFgTimes);
          //this._aniCtrl?.changeSpeedWithAep({ aniState: ANIMATION_FGUI_TYPE.FG_COUNT }, dt);
          this._aniCtrl?.gotoPlayLastFrame({ aniState: ANIMATION_FGUI_TYPE.FG_COUNT });
          const signal = this._async.createAbortScope(SIGNAL_KEY);
          const p = this._aniCtrl.playAniInPromise({ aniState: ANIMATION_FGUI_TYPE.FG_COUNT });
          this.playVoice();
          const cancel = (value) => {
               //--加速
               this._aniCtrl?.goBackToDefault();

          }

          this._async.withTimeout(
               p,
               timeout,//--race time
               { opt: 'triggerFGCountUp_FGBoard', tag: LOG_TITLE },
               'NG_UI_Display:triggerFGCountUp',
               true,
               null,
               signal,
               SIGNAL_KEY,
               cancel
          );

          const flag = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
          if (flag) {
               this._async.abortAll(SIGNAL_KEY);
          }
          return p;
     }

     private playVoice(): void {

          const voiceList = [SoundList.FG_SpinAdd_01, SoundList.FG_SpinAdd_02, SoundList.FG_SpinAdd_03];
          const randomIndex = GameUtilsTools.getRangeRandomInt(0, voiceList.length - 1);
          AudioManager.instance.playSound(voiceList[randomIndex], SOUND_TYPE.ONE_SHOT, AudioSourceList.Voice);
     }

     //---就空著吧
     public openFGCountUI(): Promise<void> {
          return Promise.resolve();
     }

     public getFGCountWPos(): Vec3 {
          let parentUiTransform = this._fgLabelNode.parent.getComponent(UITransform);
          if (parentUiTransform) {
               let lPos = this._fgLabelNode.position.clone();
               let wPos = parentUiTransform.convertToWorldSpaceAR(lPos);
               return wPos;
          }
          return v3(0, 0, 0);
     }




}


