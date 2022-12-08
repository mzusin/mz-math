import { degreesToRadians, getV2Angle, radiansToDegrees } from '../src/angle';

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

describe('Radians to degrees', () => {
    test('0 rad should be 0 deg', () => {
        expect(radiansToDegrees(0)).toStrictEqual(0);
    });

    test('1.5708 rad should be 90 deg', () => {
        expect(radiansToDegrees(1.5708)).toStrictEqual(90.00021045914971);
    });

    test('1.5708 rad  with 0 decimal places should be 90 deg', () => {
        expect(radiansToDegrees(1.5708, 0)).toStrictEqual(90);
    });

    test('3.14159 rad with 3 decimal places should be should be 180 deg', () => {
        expect(radiansToDegrees(3.14159, 3)).toStrictEqual(180);
    });

    test('4.71239 rad with 3 decimal places should be should be 270 deg', () => {
        expect(radiansToDegrees(4.71239, 3)).toStrictEqual(270);
    });
});

describe('Degrees to radians', () => {
    test('0 deg should be 0 rad', () => {
        expect(degreesToRadians(0)).toStrictEqual(0);
    });

    test('90 deg should be 1.5707963267948966 rad', () => {
        expect(degreesToRadians(90)).toStrictEqual(1.5707963267948966);
    });

    test('90 deg with 2 decimal places should be 1.57 rad', () => {
        expect(degreesToRadians(90, 2)).toStrictEqual(1.57);
    });

    test('180 deg with 3 decimal places should be should be 3.142 rad', () => {
        expect(degreesToRadians(180, 3)).toStrictEqual(3.142);
    });

    test('270 deg with7 decimal places should be should be 4.7124 rad', () => {
        expect(degreesToRadians(270, 4)).toStrictEqual(4.7124);
    });
});