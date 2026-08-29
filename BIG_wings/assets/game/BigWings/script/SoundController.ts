import InstanceBase from "./tools/InstanceBase";
import AudioMgr from "./tools/audio/AudioMgr";
import AudioUnit from "./tools/audio/AudioUnit";

import { _decorator, log, debug } from "cc";
class SoundController extends InstanceBase {


    constructor() {
        super();
        debug('SoundController constructor');
    }
    async load() {
        debug('SoundController load');
        await AudioMgr.addBundle('audio');
        this.initBgm();
    }

    initBgm() {
        [
            "bgm_fg",
            // "bgm_lw",
            "bgm_mg",
            // "bgm_win_big",
            // "bgm_win_end",
            // "bgm_win_mega",
            // "bgm_win_super"
        ].forEach((k) => {
            const unit = AudioMgr.getUnitByName(k);
            unit!.type = AudioUnit.Type.Music;
            unit!.loop = true;
        });
    }

    private _bgmOpt: { isFree: boolean; } = { isFree: false };

    playBGM(opt?: { isFree: boolean; }) {
        this._bgmOpt = Object.assign(this._bgmOpt, opt);
        const isFree = this._bgmOpt.isFree || false;
        AudioMgr.stop('bgm_fg');
        AudioMgr.stop('bgm_mg');
        if (isFree) {
            AudioMgr.play('bgm_fg');
        } else {
            AudioMgr.play('bgm_mg');
        }
    }


}





export default SoundController.instance();