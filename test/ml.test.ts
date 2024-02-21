import { mlNormalize, mlStandardizeTestData } from '../src/main/ml';

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

    describe('Standardize', () => {
        it('returns an object with mean and standard deviation of 0 when data is empty', () => {
            const result = mlStandardizeTestData([]);
            expect(result.mean).toBe(0);
            expect(result.stdDev).toBe(0);
            expect(result.data).toStrictEqual([]);
        });

        it('returns an object with mean and standard deviation when data contains only one element', () => {
            const result = mlStandardizeTestData([5]);
            expect(result.mean).toBe(5);
            expect(result.stdDev).toBe(0);
            expect(result.data).toStrictEqual([0]);
        });

        it('returns the correct mean, standard deviation, and standardized data', () => {
            const data = [2, 4, 4, 4, 5, 5, 7, 9];

            // Expected mean and standard deviation (calculated manually)
            const expectedMean = 5;
            const expectedStdDev = 2;

            // Expected standardized data (calculated manually)
            const expectedData = [-1.5, -0.5, -0.5, -0.5, 0, 0, 1, 2];

            // Call the function
            const result = mlStandardizeTestData(data);

            // Assert the mean, standard deviation, and standardized data
            expect(result.mean).toBe(expectedMean);
            expect(result.stdDev).toBe(expectedStdDev);
            expect(result.data).toEqual(expectedData);
        });

        it('returns the mean and standard deviation with specified decimal places', () => {
            const result = mlStandardizeTestData([1, 2, 3, 4, 5], 2);
            expect(result.mean).toStrictEqual(3);
            expect(result.stdDev).toStrictEqual(1.41);
        });
    });
});