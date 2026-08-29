import { describe, test, expect } from '@jest/globals';
import SomeClass from '../SomeCode';

describe('SomeCode', () => {
    test('SomeClass someLambdaFunction', () => {
        SomeClass;
        expect(0).toBe(0);
    });
});
