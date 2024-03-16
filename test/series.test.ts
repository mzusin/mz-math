import {
    naturalNumbersSum1ToN,
    naturalNumbersSumMToN,
} from '../src/main/series';

describe('Series', () => {
    
    describe('naturalNumbersSum1ToN()', () => {
        test('1', () => {
            expect(naturalNumbersSum1ToN(1)).toStrictEqual(1);
        });

        test('2', () => {
            expect(naturalNumbersSum1ToN(2)).toStrictEqual(3);
        });

        test('3', () => {
            expect(naturalNumbersSum1ToN(3)).toStrictEqual(6);
        });
    });

    describe('naturalNumbersSumMToN()', () => {
        test('1, 1', () => {
            expect(naturalNumbersSumMToN(1,1)).toStrictEqual(1);
        });

        test('5, 7', () => {
            expect(naturalNumbersSumMToN(5,7)).toStrictEqual(18);
        });
    });
});