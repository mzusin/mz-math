import {
    permutationsWithRepetition,
    permutationsWithoutRepetition,
    combinationsWithoutRepetition,
    combinationsWithRepetition,
} from '../src/main/combinatorics/combinatorics';

describe('Combinatorics', () => {

    describe('permutationsWithRepetition()', () => {
        it('calculates correct permutations for valid inputs', () => {
            expect(permutationsWithRepetition(3, 2)).toBe(9); // 3^2
            expect(permutationsWithRepetition(4, 3)).toBe(64); // 4^3
            expect(permutationsWithRepetition(5, 1)).toBe(5); // 5^1
            expect(permutationsWithRepetition(2, 0)).toBe(1); // 2^0 should be 1
        });

        it('throws an error for negative values of n or r', () => {
            expect(() => permutationsWithRepetition(-1, 2)).toThrow("Both n and r should be non-negative integers.");
            expect(() => permutationsWithRepetition(3, -1)).toThrow("Both n and r should be non-negative integers.");
        });

        it('throws an error for non-integer values of n or r', () => {
            expect(() => permutationsWithRepetition(3.5, 2)).toThrow("Both n and r should be integers.");
            expect(() => permutationsWithRepetition(3, 2.7)).toThrow("Both n and r should be integers.");
        });

        it('handles edge cases with zero correctly', () => {
            expect(permutationsWithRepetition(5, 0)).toBe(1); // 5^0 should be 1
        });

        it('throws an error if r is greater than n', () => {
            expect(() => permutationsWithRepetition(0, 5)).toThrow('r cannot be greater than n.');
            expect(() => permutationsWithRepetition(2, 5)).toThrow('r cannot be greater than n.');
        });
    });

    describe('permutationsWithoutRepetition()', () => {
        it('calculates correct permutations for valid inputs', () => {
            expect(permutationsWithoutRepetition(16, 3)).toBe(3360);
        });

        it('throws an error if r is greater than n', () => {
            expect(() => permutationsWithoutRepetition(0, 5)).toThrow('r cannot be greater than n.');
            expect(() => permutationsWithoutRepetition(2, 5)).toThrow('r cannot be greater than n.');
        });

        it('calculates simple permutations without repetition correctly', () => {
            expect(permutationsWithoutRepetition(5, 3)).toBe(60); // 5P3 = 5 * 4 * 3 = 60
            expect(permutationsWithoutRepetition(4, 4)).toBe(24); // 4P4 = 4 * 3 * 2 * 1 = 24
        });

        it('throws an error if n or r are negative', () => {
            expect(() => permutationsWithoutRepetition(-1, 3)).toThrow('Both n and r should be non-negative integers.');
            expect(() => permutationsWithoutRepetition(5, -1)).toThrow('Both n and r should be non-negative integers.');
        });

        it('throws an error if r is greater than n', () => {
            expect(() => permutationsWithoutRepetition(3, 5)).toThrow('r cannot be greater than n.');
        });

        it('throws an error if n or r are not integers', () => {
            expect(() => permutationsWithoutRepetition(5.5, 3)).toThrow('Both n and r should be integers.');
            expect(() => permutationsWithoutRepetition(5, 2.7)).toThrow('Both n and r should be integers.');
        });

        it('handles large n and r correctly', () => {
            expect(permutationsWithoutRepetition(20, 19)).toBe(2432902008176640000); // 20P19 = 20!
        });
    });

    describe('combinationsWithoutRepetition()', () => {
        it('calculates small combinations correctly', () => {
            expect(combinationsWithoutRepetition(3, 2)).toBe(3);
            expect(combinationsWithoutRepetition(16, 3)).toBe(560);
            expect(combinationsWithoutRepetition(5, 3)).toBe(10);
            expect(combinationsWithoutRepetition(6, 2)).toBe(15);
            expect(combinationsWithoutRepetition(10, 5)).toBe(252);
        });

        it('returns 1 for r equals 0', () => {
            expect(combinationsWithoutRepetition(5, 0)).toBe(1);
            expect(combinationsWithoutRepetition(10, 0)).toBe(1);
        });

        it('returns 1 for r equals n', () => {
            expect(combinationsWithoutRepetition(5, 5)).toBe(1);
            expect(combinationsWithoutRepetition(10, 10)).toBe(1);
        });

        it('returns the correct values for r equals 1', () => {
            expect(combinationsWithoutRepetition(5, 1)).toBe(5);
            expect(combinationsWithoutRepetition(10, 1)).toBe(10);
        });

        it('throws an error if n or r are negative', () => {
            expect(() => combinationsWithoutRepetition(-1, 3)).toThrow('Both n and r should be non-negative integers.');
            expect(() => combinationsWithoutRepetition(5, -1)).toThrow('Both n and r should be non-negative integers.');
        });

        it('throws an error if r is greater than n', () => {
            expect(() => combinationsWithoutRepetition(3, 5)).toThrow('r cannot be greater than n.');
            expect(() => combinationsWithoutRepetition(2, 5)).toThrow('r cannot be greater than n.');
            expect(() => combinationsWithoutRepetition(0, 5)).toThrow('r cannot be greater than n.');
        });

        it('throws an error if n or r are not integers', () => {
            expect(() => combinationsWithoutRepetition(5.5, 3)).toThrow('Both n and r should be integers.');
            expect(() => combinationsWithoutRepetition(5, 2.7)).toThrow('Both n and r should be integers.');
        });
    });

    describe('combinationsWithRepetition()', () => {
        it('calculates simple combinations with repetition correctly', () => {
            expect(combinationsWithRepetition(5, 3)).toBe(35);
            expect(combinationsWithRepetition(3, 2)).toBe(6); // C(3+2-1, 2) = C(4, 2) = 6
            expect(combinationsWithRepetition(4, 3)).toBe(20); // C(4+3-1, 3) = C(6, 3) = 20
        });

        it('returns 1 when r is 0, regardless of n', () => {
            expect(combinationsWithRepetition(5, 0)).toBe(1); // C(5-1, 0) = C(4, 0) = 1
            expect(combinationsWithRepetition(10, 0)).toBe(1); // C(10-1, 0) = C(9, 0) = 1
        });

        it('calculates combinations correctly when n is 1', () => {
            expect(combinationsWithRepetition(1, 1)).toBe(1);
        });

        it('throws an error if n or r are negative', () => {
            expect(() => combinationsWithRepetition(-1, 3)).toThrow('Both n and r should be non-negative integers.');
            expect(() => combinationsWithRepetition(5, -1)).toThrow('Both n and r should be non-negative integers.');
        });

        it('handles edge cases for large n and small r', () => {
            expect(combinationsWithRepetition(100, 1)).toBe(100); // C(100+1-1, 1) = C(100, 1) = 100
        });

        it('handles cases where n is 0', () => {
            expect(combinationsWithRepetition(0, 0)).toBe(1); // C(0+0-1, 0) = C(-1, 0) = 1 (special handled)
        });

        it('throws an error if r is greater than n', () => {
            expect(() => combinationsWithRepetition(3, 5)).toThrow('r cannot be greater than n.');
            expect(() => combinationsWithRepetition(2, 5)).toThrow('r cannot be greater than n.');
            expect(() => combinationsWithRepetition(0, 5)).toThrow('r cannot be greater than n.');
        });
    });
});