import { mod, convertRange, doRangesOverlap, isNumber, polarToCartesian, gcd } from '../src/main/other';
import { Vector2 } from '../src/types';

describe('Modulo', () => {
    test('-21 % 4 => 3', () => {
        expect(mod(-21, 4)).toStrictEqual(3);
    });

    test('7 % 3 => 1', () => {
        expect(mod(7, 3)).toStrictEqual(1);
    });

    test('5 % 2 => 1', () => {
        expect(mod(5, 2)).toStrictEqual(1);
    });

    test('-10 % -20 => -10', () => {
        expect(mod(10, -20)).toStrictEqual(-10);
    });

    test('-871 % -20 => -11', () => {
        expect(mod(-871, -20)).toStrictEqual(-11);
    });
});

describe('Convert Range', () => {

    test('0.5 from [0,1] to [100,200] => 150', () => {
        const res = convertRange(0.5, 0, 1, 100, 200)
        expect(res).toStrictEqual(150);
    });

    test('0 from [0,1] to [100, 200] => 100', () => {
        const res = convertRange(0, 0, 1, 100, 200)
        expect(res).toStrictEqual(100);
    });

    test('1 from [0,1] to [100, 200] => 200', () => {
        const res = convertRange(1, 0, 1, 100, 200)
        expect(res).toStrictEqual(200);
    });

    test('150 from [100, 200] to [0, 1] => 0.5', () => {
        const res = convertRange(150, 100, 200, 0, 1)
        expect(res).toStrictEqual(0.5);
    });

    test('100 from [100, 200] to [0, 1] => 0', () => {
        const res = convertRange(100, 100, 200, 0, 1)
        expect(res).toStrictEqual(0);
    });

    test('200 from [100, 200] to [0, 1] => 1', () => {
        const res = convertRange(200, 100, 200, 0, 1)
        expect(res).toStrictEqual(1);
    });

    test('1.5 from [0,1] to [100, 200] => 250', () => {
        const res = convertRange(1.5, 0, 1, 100, 200)
        expect(res).toStrictEqual(250);
    });
});

describe('Do Ranges Overlap', () => {

    test(`'[0,1] and [100,200] don't overlap`, () => {
        expect(doRangesOverlap(0, 1, 100, 200)).toStrictEqual(false);
    });

    test(`'[0,1] and [1,2] overlap`, () => {
        expect(doRangesOverlap(0, 1, 1, 2)).toStrictEqual(true);
    });

    test(`'[0,1] and [0.5, 1.5] overlap`, () => {
        expect(doRangesOverlap(0, 1, 0.5, 1.5)).toStrictEqual(true);
    });

    test(`'[0,1] and [-100,-200] don't overlap`, () => {
        expect(doRangesOverlap(0, 1, -100, -200)).toStrictEqual(false);
    });
});

describe('Is Number?', () => {
    test(`aaa is not a number`, () => {
        expect(isNumber('aaa')).toStrictEqual(false);
    });

    test(`"12" is a number`, () => {
        expect(isNumber('12')).toStrictEqual(true);
    });

    test(`10 is a number`, () => {
        expect(isNumber(10)).toStrictEqual(true);
    });

    test(`0 is a number`, () => {
        expect(isNumber(0)).toStrictEqual(true);
    });

    test(`"0" is a number`, () => {
        expect(isNumber(0)).toStrictEqual(true);
    });

    test(`null is not a number`, () => {
        expect(isNumber(null)).toStrictEqual(false);
    });

    test(`undefined is not a number`, () => {
        expect(isNumber(undefined)).toStrictEqual(false);
    });

    test(`"12.2" is a number`, () => {
        expect(isNumber('12.2')).toStrictEqual(true);
    });

    test(`12.2 is a number`, () => {
        expect(isNumber(12.2)).toStrictEqual(true);
    });

    test(`Infinity is not a number`, () => {
        expect(isNumber(Infinity)).toStrictEqual(false);
    });
});

describe('Polar to Cartesian', () => {
    test('polarToCartesian()', () => {
        const center: Vector2 = [0, 0];
        const radii: Vector2 = [10, 20];
        const angleInRad = Math.PI / 4;
        const decimalPlaces = 2;

        expect(polarToCartesian(center, radii, angleInRad, decimalPlaces)).toStrictEqual([7.07, 14.14]);
    });
});

describe('Greatest common divisor', () => {

    test('gcd(18, 6)', () => {
        expect(gcd(18, 6)).toStrictEqual(6);
    });

    test('gcd(-18, 6)', () => {
        expect(gcd(-18, 6)).toStrictEqual(6);
    });

    test('gcd(18, -6)', () => {
        expect(gcd(18, -6)).toStrictEqual(6);
    });

    test('gcd(-18, -6)', () => {
        expect(gcd(-18, -6)).toStrictEqual(6);
    });

    test('gcd(6, 10)', () => {
        expect(gcd(6, 10)).toStrictEqual(2);
    });

    test('gcd(10, 3)', () => {
        expect(gcd(10, 3)).toStrictEqual(1);
    });

    test('gcd(10, 0)', () => {
        expect(gcd(10, 0)).toStrictEqual(10);
    });

    test('gcd(0, 10)', () => {
        expect(gcd(0, 10)).toStrictEqual(10);
    });
});
