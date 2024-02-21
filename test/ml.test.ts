import { mlNormalizeValue, mlStandardizeValue } from '../src/main/ml';

describe('ML', () => {

    describe('mlNormalizeValue()', () => {

        it('10, 5, 5', () => {
            expect(mlNormalizeValue(10, 5, 5)).toBe(0);
        });

        it('10, 5, 15', () => {
            expect(mlNormalizeValue(10, 5, 15)).toBe(0.5);
        });

        it('10, 5, 15, 2', () => {
            expect(mlNormalizeValue(10, 5, 15, 2)).toBe(0.5);
        });

        it('10, -5, 15', () => {
            expect(mlNormalizeValue(10, -5, 15)).toBe(0.75);
        });
    });

    describe('mlStandardizeValue()', () => {
        it('10, 5, 0', () => {
            expect(mlStandardizeValue(10, 5, 0)).toStrictEqual(0);
        });

        it('10, 5, 2', () => {
            expect(mlStandardizeValue(10, 5, 2)).toStrictEqual(2.5);
        });

        it('10, 5, 2, 2', () => {
            expect(mlStandardizeValue(10, 5, 2, 2)).toStrictEqual(2.5);
        });

        it('10, -5, -2', () => {
            expect(mlStandardizeValue(10, -5, -2)).toStrictEqual(-7.5);
        });
    });
});