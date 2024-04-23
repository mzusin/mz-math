import {
    getArithmeticMean,
    getMedian,
    getMode,
    getVariance,
    getVariance1,
    getStandardDeviation,
    getArithmeticMeanFromFrequency,
} from '../src/main/statistics';

describe('Statistics', () => {

    describe('CENTRAL TENDENCY', () => {

        describe('getArithmeticMean()', () => {

            test('[]', () => {
                expect(getArithmeticMean([])).toStrictEqual(undefined);
            });

            test('[2]', () => {
                expect(getArithmeticMean([2])).toStrictEqual(2);
            });

            test('[1, 2, 3]', () => {
                expect(getArithmeticMean([1, 2, 3])).toStrictEqual(2);
            });

            test('[-1, -2]', () => {
                expect(getArithmeticMean([-1, -2])).toStrictEqual(-1.5);
            });

            test('[1, 1, 2, 3, 4]', () => {
                expect(getArithmeticMean([1, 1, 2, 3, 4])).toStrictEqual(2.2);
            });
        });

        describe('getArithmeticMeanFromFrequency()', () => {

            test('map 1', () => {
                const map = new Map();
                map.set(3, 0.6); // 60% of number 3
                map.set(4, 0.2); // 20% of number 4
                map.set(5, 0.2); // 20% of number 5

                expect(getArithmeticMeanFromFrequency(map, 2)).toStrictEqual(3.6);
            });
        });

        describe('getMedian()', () => {

            test('[]', () => {
                expect(getMedian([])).toStrictEqual(undefined);
            });

            test('[3]', () => {
                expect(getMedian([3])).toStrictEqual(3);
            });

            test('[3, 4, 5]', () => {
                expect(getMedian([3, 4, 5])).toStrictEqual(4);
            });

            test('[3, 4, 5, 6]', () => {
                expect(getMedian([3, 4, 5, 6])).toStrictEqual(4.5);
            });

            test('[1, 1, 2, 3, 4]', () => {
                expect(getMedian([1, 1, 2, 3, 4])).toStrictEqual(2);
            });

            test('[1, 1, 2, 3, 4, 4]', () => {
                expect(getMedian([1, 1, 2, 3, 4, 4])).toStrictEqual(2.5);
            });
        });

        describe('getMode()', () => {
            test('[]', () => {
                expect(getMode([])).toStrictEqual(undefined);
            });

            // If all numbers have the same frequency, there is no mode
            test('[3]', () => {
                expect(getMode([3])).toStrictEqual(undefined);
            });

            test('[3, 4, 5]', () => {
                expect(getMode([3, 4, 5])).toStrictEqual(undefined);
            });

            test('[3, 3, 5, 6]', () => {
                expect(getMode([3, 3, 5, 6])).toStrictEqual([3]);
            });

            test('[1, 1, 2, 2, 3, 4]', () => {
                expect(getMode([1, 1, 2, 2, 3, 4])).toStrictEqual([1, 2]);
            });
        });

    });

    describe('DISPERSION', () => {

        describe('getVariance()', () => {

            test('[]', () => {
                expect(getVariance([])).toStrictEqual(undefined);
            });

            test('[2]', () => {
                expect(getVariance([2])).toStrictEqual(0);
            });

            test('[2, 2, 3, 3]', () => {
                expect(getVariance([2, 2, 3, 3])).toStrictEqual(0.25);
            });

            test('[0, 0, 5, 5]', () => {
                expect(getVariance([0, 0, 5, 5])).toStrictEqual(6.25);
            });

            test('[1, 2, 3, 8, 7]', () => {
                expect(getVariance([1, 2, 3, 8, 7], 2)).toStrictEqual(7.76);
            });
        });

        describe('getVariance1()', () => {

            test('[]', () => {
                expect(getVariance1([])).toStrictEqual(undefined);
            });

            test('[2]', () => {
                expect(getVariance1([2])).toStrictEqual(0);
            });

            test('[2, 2, 3, 3]', () => {
                expect(getVariance1([2, 2, 3, 3])).toStrictEqual(0.25);
            });

            test('[0, 0, 5, 5]', () => {
                expect(getVariance1([0, 0, 5, 5])).toStrictEqual(6.25);
            });

            test('[1, 2, 3, 8, 7]', () => {
                expect(getVariance1([1, 2, 3, 8, 7], 2)).toStrictEqual(7.76);
            });
        });

        describe('getStandardDeviation()', () => {

            it('returns 0 when data is empty', () => {
                expect(getStandardDeviation([])).toStrictEqual(0);
            });

            it('[5]', () => {
                expect(getStandardDeviation([5])).toStrictEqual(0);
            });

            it('[2, 4, 4, 4, 5, 5, 7, 9]', () => {
                expect(getStandardDeviation([2, 4, 4, 4, 5, 5, 7, 9])).toStrictEqual(2);
            });

            it('[1, 2, 3, 4, 5]', () => {
                expect(getStandardDeviation([1, 2, 3, 4, 5], 2)).toStrictEqual(1.41);
            });

            test('[1, 2, 3, 8, 7]', () => {
                expect(getStandardDeviation([1, 2, 3, 8, 7], 2)).toStrictEqual(2.79);
            });
        });
    });
});