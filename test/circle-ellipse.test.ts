import {
    getSquareInCircleSide,
    getCircleCircumference,
    getEllipseCircumference,
    isAngleInCircleArc,
} from '../src/main/circle-ellipse';

describe('Circle / Ellipse', () => {

    describe('getSquareInCircleSide()', () => {
        test('square side in circle with radius = 10', () => {
            expect(getSquareInCircleSide(10)).toStrictEqual(14.14213562373095);
        });

        test('square side in circle with radius = 10 and 2 decimal places', () => {
            expect(getSquareInCircleSide(10, 2)).toStrictEqual(14.14);
        });
    });

    describe('getCircleCircumference()', () => {
        test('getCircleCircumference(10)', () => {
            expect(getCircleCircumference(10, 2)).toStrictEqual(62.83);
        });
    });

    describe('getEllipseCircumference()', () => {
        test('getEllipseCircumference(10, 20)', () => {
            expect(getEllipseCircumference(10, 20, 2)).toStrictEqual(99.35);
        });
    });

    describe('isAngleInCircleArc()', () => {
        test('isAngleInCircleArc(0, 90, 45)', () => {
            expect(isAngleInCircleArc(0, 90, 45)).toStrictEqual(true);
        });

        test('isAngleInCircleArc(0, 90, 45)', () => {
            expect(isAngleInCircleArc(0, 90, 180)).toStrictEqual(false);
        });
    });
});