import { permutationsWithRepetition, permutationsWithoutRepetition } from '../src/main/combinatorics/combinatorics';

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
});