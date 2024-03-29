import {
    degreesToRadians,
    getV2Angle,
    getV2AngleInEllipse,
    radiansToDegrees,
    setV2Angle,
    getAnglesSub,
    isAngleBetween,
    isClockwise,
    getAnglesDistance,
    percentToAngle
} from '../src/main/angle';

describe('Angles', () => {

    describe('Get Vector Angle', () => {
        test('angle of [10, 20] should be 1.11', () => {
            expect(getV2Angle([10, 20])).toStrictEqual(1.1071487177940904);
        });

        test('angle of [10, 20] with 2 decimal places should be 1.11', () => {
            expect(getV2Angle([10, 20], 2)).toStrictEqual(1.11);
        });

        test('angle of [10, 0] should be 0', () => {
            expect(getV2Angle([10, 0])).toStrictEqual(0);
        });

        test('angle of [0, 10] should be 1.5707963267948966', () => {
            expect(getV2Angle([0, 10])).toStrictEqual(1.5707963267948966);
        });

        test('getV2AngleInEllipse([10, 20], [100, 200], 2)', () => {
            expect(getV2AngleInEllipse([10, 20], [100, 200], 2)).toStrictEqual(0.79);
        });
    });

    describe('Set Vector Angle', () => {

        test('Given vector [10, 20] with angle 1.11 --> change the angle to 1.22. ', () => {
            expect(setV2Angle([10, 20], 1.22)).toStrictEqual([7.684152489413291, 20.99889998355732]);
        });

        test('Given vector [10, 20] with angle 1.11 --> change the angle to 1.22 (decimal places = 2). ', () => {
            expect(setV2Angle([10, 20], 1.22, 2)).toStrictEqual([7.68, 21]);
        });

        test('Given vector [5, 6] --> change the angle to 0', () => {
            expect(setV2Angle([5, 6], 0)).toStrictEqual([7.810249675906654, 0]);
        });

        test('Given vector [5, 6] --> change the angle to Math.PI / 6 with 4 decimal places', () => {
            expect(setV2Angle([5, 6], Math.PI / 6, 4)).toStrictEqual([6.7639, 3.9051]);
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

    describe('Is Angle Between', () => {

        test('isAngleBetween(45, 0, 90)', () => {
            expect(isAngleBetween(45, 0, 90)).toStrictEqual(true);
        });

        test('isAngleBetween(-10, 0, 90)', () => {
            expect(isAngleBetween(-10, 0, 90)).toStrictEqual(false);
        });

        test('isAngleBetween(180, 0, 90)', () => {
            expect(isAngleBetween(180, 0, 90)).toStrictEqual(false);
        });

        test('isAngleBetween(0, -10, 45)', () => {
            expect(isAngleBetween(0, -10, 45)).toStrictEqual(true);
        });

        test('isAngleBetween(10, 280, 45)', () => {
            expect(isAngleBetween(10, 280, 45)).toStrictEqual(true);
        });

        test('isAngleBetween(30, 0, 60)', () => {
            expect(isAngleBetween(30, 0, 60)).toStrictEqual(true);
        });

        test('isAngleBetween(30, 0, 60)', () => {
            expect(isAngleBetween(60, 0, 60)).toStrictEqual(true);
        });

        test('isAngleBetween(0, 0, 60)', () => {
            expect(isAngleBetween(0, 0, 60)).toStrictEqual(true);
        });

        test('isAngleBetween(359, 350, 10)', () => {
            expect(isAngleBetween(359, 350, 10)).toStrictEqual(true);
        });

        test('isAngleBetween(0, 0, 60)', () => {
            expect(isAngleBetween(0, 0, 60)).toStrictEqual(true);
        });

        test('isAngleBetween(0, 0, 0)', () => {
            expect(isAngleBetween(0, 0, 0)).toStrictEqual(true);
        });

        test('isAngleBetween(359, 0, 359)', () => {
            expect(isAngleBetween(359, 0, 359)).toStrictEqual(true);
        });

        test('isAngleBetween(70, 0, 60)', () => {
            expect(isAngleBetween(70, 0, 60)).toStrictEqual(false);
        });

        test('isAngleBetween(300, 0, 60)', () => {
            expect(isAngleBetween(300, 0, 60)).toStrictEqual(false);
        });

        test('isAngleBetween(0, 10, 20)', () => {
            expect(isAngleBetween(0, 10, 20)).toStrictEqual(false);
        });

        test('isAngleBetween(10, 20, 30)', () => {
            expect(isAngleBetween(10, 20, 30)).toStrictEqual(false);
        });

    });

    describe('isClockwise()', () => {

        test('isClockwise(0, 90)', () => {
            expect(isClockwise(0, 90)).toStrictEqual(true);
        });

        test('isClockwise(0, 0)', () => {
            expect(isClockwise(0, 0)).toStrictEqual(true);
        });

        test('isClockwise(0, 180)', () => {
            expect(isClockwise(0, 180)).toStrictEqual(true);
        });

        test('isClockwise(0, 270)', () => {
            expect(isClockwise(0, 270)).toStrictEqual(true);
        });

        test('isClockwise(0, 360)', () => {
            expect(isClockwise(0, 360)).toStrictEqual(true);
        });

        test('isClockwise(0, 360 + 45)', () => {
            expect(isClockwise(0, 360 + 45)).toStrictEqual(true);
        });

        test('isClockwise(0, 360 + 90)', () => {
            expect(isClockwise(0, 360 + 90)).toStrictEqual(true);
        });

        test('isClockwise(90, 0)', () => {
            expect(isClockwise(90, 0)).toStrictEqual(false);
        });

        test('isClockwise(90, 270, 270)', () => {
            expect(isClockwise(90, 270, 270)).toStrictEqual(false);
        });

    });

    describe('Get Angular Distance', () => {
        test('getAnglesSub(0, 90)', () => {
            expect(getAnglesSub(0, 90)).toStrictEqual(90);
        });

        test('getAnglesSub(0, 45)', () => {
            expect(getAnglesSub(0, 45)).toStrictEqual(45);
        });

        test('getAnglesSub(315, 0)', () => {
            expect(getAnglesSub(315, 0)).toStrictEqual(45);
        });

        test('getAnglesSub(0, 180)', () => {
            expect(getAnglesSub(0, 180)).toStrictEqual(180);
        });

        test('getAnglesSub(45, 270)', () => {
            expect(getAnglesSub(45, 270)).toStrictEqual(135);
        });

        test('getAnglesSub(270, 360)', () => {
            expect(getAnglesSub(270, 360)).toStrictEqual(90);
        });

        test('getAnglesSub(270, 0)', () => {
            expect(getAnglesSub(270, 0)).toStrictEqual(90);
        });

        test('getAnglesSub(270, 10)', () => {
            expect(getAnglesSub(270, 10)).toStrictEqual(100);
        });

        test('getAnglesSub(-10, 90)', () => {
            expect(getAnglesSub(-10, 90)).toStrictEqual(100);
        });

        test('getAnglesSub(-10, 0)', () => {
            expect(getAnglesSub(-10, 0)).toStrictEqual(10);
        });

        test('getAnglesSub(-90, 90)', () => {
            expect(getAnglesSub(-90, 90)).toStrictEqual(180);
        });

        test('getAnglesSub(0, 0)', () => {
            expect(getAnglesSub(0, 0)).toStrictEqual(0);
        });

        test('getAnglesSub(0, 360)', () => {
            expect(getAnglesSub(0, 360)).toStrictEqual(0);
        });

        test('getAnglesSub(0, 720)', () => {
            expect(getAnglesSub(0, 720)).toStrictEqual(0);
        });

        test('getAnglesSub(0, 740)', () => {
            expect(getAnglesSub(0, 740)).toStrictEqual(20);
        });

        test('getAnglesSub(280 + 360 * 3, 10)', () => {
            expect(getAnglesSub(280 + 360 * 3, 10)).toStrictEqual(90);
        });
    });

    describe('getAnglesDistance()' ,() => {

        test('getAnglesDistance(0, 0)', () => {
            expect(getAnglesDistance(0, 0)).toStrictEqual(0);
        });

        test('getAnglesDistance(0, 360)', () => {
            expect(getAnglesDistance(0, 360)).toStrictEqual(0);
        });

        test('getAnglesDistance(90, 90)', () => {
            expect(getAnglesDistance(90, 90)).toStrictEqual(0);
        });

        test('getAnglesDistance(0, 90)', () => {
            expect(getAnglesDistance(0, 90)).toStrictEqual(90);
        });

        test('getAnglesDistance(0, 180)', () => {
            expect(getAnglesDistance(0, 180)).toStrictEqual(180);
        });

        test('getAnglesDistance(90, 0)', () => {
            expect(getAnglesDistance(90, 0)).toStrictEqual(90);
        });

        test('getAnglesDistance(180, 0)', () => {
            expect(getAnglesDistance(180, 0)).toStrictEqual(180);
        });

        test('getAnglesDistance(270, 90)', () => {
            expect(getAnglesDistance(270, 90)).toStrictEqual(180);
        });
    });

    describe('percentToAngle()', () => {
        test('percentToAngle(0, 0, 90)', () => {
            expect(percentToAngle(0, 0, 90)).toStrictEqual(0);
        });

        test('percentToAngle(50, 0, 90)', () => {
            expect(percentToAngle(50, 0, 90)).toStrictEqual(45);
        });

        test('percentToAngle(90, 0, 90)', () => {
            expect(percentToAngle(100, 0, 90)).toStrictEqual(90);
        });
    });
});