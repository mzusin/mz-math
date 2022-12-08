import { getV2Angle } from '../src/angle';

describe('Get Vector Angle', () => {
    test('angle of { x: 10, y: 20 } should be 1.11', () => {
        expect(getV2Angle({ x: 10, y: 20 })).toStrictEqual(1.1071487177940904);
    });

    test('angle of { x: 10, y: 20 } with 2 decimal places should be 1.11', () => {
        expect(getV2Angle({ x: 10, y: 20 }, 2)).toStrictEqual(1.11);
    });

    test('angle of { x: 10, y: 0 } should be 0', () => {
        expect(getV2Angle({ x: 10, y: 0 })).toStrictEqual(0);
    });

    test('angle of { x: 0, y: 10 } should be 1.5707963267948966', () => {
        expect(getV2Angle({ x: 0, y: 10 })).toStrictEqual(1.5707963267948966);
    });
});