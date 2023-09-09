import { naturalNumbersSequenceSum, arithmeticSequenceSum } from '../src/main/sequence';

describe('Sequence', () => {

    describe('naturalNumbersSequenceSum()', () => {

        test('test numbers from 1 to', () => {
            expect(naturalNumbersSequenceSum(1)).toStrictEqual(1);
            expect(naturalNumbersSequenceSum(2)).toStrictEqual(3);
            expect(naturalNumbersSequenceSum(3)).toStrictEqual(6);
            expect(naturalNumbersSequenceSum(5)).toStrictEqual(15);
            expect(naturalNumbersSequenceSum(6)).toStrictEqual(21);
        });
    });

    describe('arithmeticSequenceSum()', () => {
        test('2 + 4 + 6 + 8', () => {
            expect(arithmeticSequenceSum(4, 2, 2)).toStrictEqual(20);
        });
    });
});