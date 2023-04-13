import { lerp } from '../src/main/linear-interpolation';

describe('Linear Interpolation', () => {

    test('lerp(5, 0, 100)', () => {
        expect(lerp(5, 0, 100)).toStrictEqual(500);
    });
});