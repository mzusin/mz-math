import { getSquareInCircleSide } from '../src/shapes';

describe('Shapes', () => {
    test('square side in circle with radius = 10', () => {
        expect(getSquareInCircleSide(10)).toStrictEqual(14.14213562373095);
    });

    test('square side in circle with radius = 10 and 2 decimal places', () => {
        expect(getSquareInCircleSide(10, 2)).toStrictEqual(14.14);
    });
});