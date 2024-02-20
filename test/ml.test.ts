import { mlNormalize } from '../src/main/ml';

describe('ML', () => {

    describe('mlNormalize()', () => {

        test('[]', () => {
            expect(mlNormalize([])).toStrictEqual([]);
        });

        test('[2]', () => {
            expect(mlNormalize([2])).toStrictEqual([0]);
        });

        test('[1, 2, 3]', () => {
            expect(mlNormalize([1, 2, 3])).toStrictEqual([0, 0.5, 1]);
        });

        test('[-1, -2]', () => {
            expect(mlNormalize([-1, -2])).toStrictEqual([1, 0]);
        });

        test('[1, 1, 2, 3, 4]', () => {
            expect(mlNormalize([1, 1, 2, 3, 4], 2)).toStrictEqual([0, 0, 0.33, 0.67, 1]);
        });
    });
});