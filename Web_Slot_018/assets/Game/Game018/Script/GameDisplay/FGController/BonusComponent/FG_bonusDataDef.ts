import { Vec3 } from 'cc';
export enum FG_BonusSkinState {
    Sub_01 = '_sub_01',
    Sub_05 = '_sub_05',
    Sub_09 = '_sub_09',
    Sub_13 = '_sub_13',
    Sub_normal = '_sub_normal',
}

export enum FG_BonusAniState {
    ON = 'on',
    OFF = 'off',
    ON_TO_OFF = 'on_to_off',
    OFF_TO_ON = 'off_to_on'
}

export enum FG_BonusLevel {
    L1 = 0,
    L2 = 4,
    L3 = 8,
    L4 = 12
}
export type BonusInfo = {
    reelIndex: number;
    iconIndex: number;
    startWPos: Vec3;
    endWPos: Vec3;
}
export type BonusInfoForRound = {
    bonusIndex: BonusInfo[];
    multiplier: number;
}

