import 'jest';
import {afterEach, beforeEach, describe, expect, jest, test} from '@jest/globals';
import { Dict } from '../../assets/game/mahjong/script/include';
import { envSetup } from './envSetup';
import { Marquee } from '../../assets/game/mahjong/script/components/Marquee';
import { UITransform } from 'cc';
describe('Marquee testing', () => {

    test('should initialize', () => {
    
        let marquee = new Marquee();
        let tarn = marquee.node.getComponent(UITransform);
        tarn.width = 900;
        tarn.height = 80;
        marquee.node.setPosition(0, 860);
        // marquee.start();

    });

});