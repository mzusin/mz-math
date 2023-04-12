import { setDecimalPlaces } from '../src/main/format';

describe('Set Decimal Places', () => {
    test('2 decimal places of 1.2345 => 1.23', () => {
        expect(setDecimalPlaces(1.2345, 2)).toStrictEqual(1.23);
    });

    test('2 decimal places of 1.2399 => 1.24', () => {
        expect(setDecimalPlaces(1.2399, 2)).toStrictEqual(1.24);
    });

    test('if parameter is Infinity => the value should not change', () => {
        expect(setDecimalPlaces(1.2399, Infinity)).toStrictEqual(1.2399);
    });

    test('if parameter is 0 => the value is integer', () => {
        expect(setDecimalPlaces(1.2399, 0)).toStrictEqual(1);
    });

    test('if parameter is negative => the value is integer', () => {
        expect(setDecimalPlaces(1.2399, -1)).toStrictEqual(1);
    });

    test('4 decimal places of 1.2399 => 1.2399', () => {
        expect(setDecimalPlaces(1.2399, 4)).toStrictEqual(1.2399);
    });

    test('provided number of decimal places > the real number of decimal places => the number should not change', () => {
        expect(setDecimalPlaces(1.2399, 10)).toStrictEqual(1.2399);
    });

    test('4 decimal places of 1.239999 => 1.2399', () => {
        expect(setDecimalPlaces(1.239999, 4)).toStrictEqual(1.24);
    });

    test('-4 with Infinite negative places', () => {
        expect(setDecimalPlaces(-4, Infinity)).toStrictEqual(-4);
    });

    test('-4.22222 with 2 negative places', () => {
        expect(setDecimalPlaces(-4.22222, 2)).toStrictEqual(-4.22);
    });

});