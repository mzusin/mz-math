import { permutationsWithRepetition, permutationsWithoutRepetition, combinationsWithoutRepetition } from '../src/main/combinatorics/combinatorics';

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
            expect(permutationsWithRepetition(0, 5)).toBe(0); // 0^5 should be 0
            expect(permutationsWithRepetition(5, 0)).toBe(1); // 5^0 should be 1
        });
    });

    describe('permutationsWithoutRepetition()', () => {
        it('calculates correct permutations for valid inputs', () => {
            expect(permutationsWithoutRepetition(16, 3)).toBe(3360);
        });
    });

    describe('combinationsWithoutRepetition()', () => {
        it('calculates small combinations correctly', () => {
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

        /*it('throws an error if r is greater than n', () => {
            expect(() => combinationsWithoutRepetition(3, 5)).toThrow('n and r must be non-negative integers, and r cannot be greater than n.');
        });*/

        it('throws an error if n or r are not integers', () => {
            expect(() => combinationsWithoutRepetition(5.5, 3)).toThrow('Both n and r should be integers.');
            expect(() => combinationsWithoutRepetition(5, 2.7)).toThrow('Both n and r should be integers.');
        });
    });
});