import { factorialIterative, factorialRecursive, factorialMemoized, factorial } from '../src/main/combinatorics/factorial';

describe('Factorial', () => {

    describe('factorialIterative()', () => {
        it('calculates factorial of 0 as 1', () => {
            expect(factorialIterative(0)).toBe(1);
            expect(factorialIterative(0, 0)).toBe(1); // 0! = 1 by definition
        });

        it('calculates factorial of 1 as 1', () => {
            expect(factorialIterative(1)).toBe(1);
        });

        it('calculates factorial of 5 as 120', () => {
            expect(factorialIterative(5)).toBe(120);
            expect(factorialIterative(5, 1)).toBe(120);
        });

        it('calculates partial factorial from start to n correctly', () => {
            expect(factorialIterative(5, 2)).toBe(120); // 2*3*4*5 = 120
            expect(factorialIterative(5, 3)).toBe(60);  // 3*4*5 = 60
            expect(factorialIterative(5, 5)).toBe(5); // Only includes 5, so 5! / 4! = 5
            expect(factorialIterative(7, 7)).toBe(7); // Only includes 7, so 7! / 6! = 7
        });

        it('calculates factorial of 10 as 3628800', () => {
            expect(factorialIterative(10)).toBe(3628800);
        });

        it('throws an error for negative numbers', () => {
            expect(() => factorialIterative(-1)).toThrow('Factorial is not defined for negative numbers.');
            expect(() => factorialIterative(-5)).toThrow('Factorial is not defined for negative numbers.');
            expect(() => factorialIterative(-1, 1)).toThrow('Factorial is not defined for negative numbers.');
            expect(() => factorialIterative(-5, 3)).toThrow('Factorial is not defined for negative numbers.');
        });

        it('throws an error if start is greater than n', () => {
            expect(() => factorialIterative(3, 5)).toThrow('Start cannot be greater than n.');
        });

        it('throws an error if start is negative', () => {
            expect(() => factorialIterative(5, -1)).toThrow('Start must be non-negative.');
        });

        it('handles special case where start is 0', () => {
            expect(factorialIterative(5, 0)).toBe(120); // Adjusts start to 1, calculates 5!
        });

        it('handles edge case of n being 0 and start not set', () => {
            expect(factorialIterative(0)).toBe(1); // 0! = 1
        });

        it('handles edge case of n being 0 with start > 0', () => {
            expect(() => factorialIterative(0, 1)).toThrow('Start cannot be greater than n.');
        });
    });

    describe('factorialRecursive()', () => {
        it('calculates factorial of 0 as 1', () => {
            expect(factorialRecursive(0)).toBe(1);
            expect(factorialRecursive(0, 0)).toBe(1); // 0! = 1 by definition
        });

        it('calculates factorial of 1 as 1', () => {
            expect(factorialRecursive(1)).toBe(1);
        });

        it('calculates factorial of 5 as 120', () => {
            expect(factorialRecursive(5)).toBe(120);
            expect(factorialRecursive(5, 1)).toBe(120);
        });

        it('calculates partial factorial from start to n correctly', () => {
            expect(factorialRecursive(5, 2)).toBe(120); // 2*3*4*5 = 120
            expect(factorialRecursive(5, 3)).toBe(60);  // 3*4*5 = 60
            expect(factorialRecursive(5, 5)).toBe(5); // Only includes 5, so 5! / 4! = 5
            expect(factorialRecursive(7, 7)).toBe(7); // Only includes 7, so 7! / 6! = 7
        });

        it('calculates factorial of 10 as 3628800', () => {
            expect(factorialRecursive(10)).toBe(3628800);
        });

        it('throws an error for negative numbers', () => {
            expect(() => factorialRecursive(-1)).toThrow('Factorial is not defined for negative numbers.');
            expect(() => factorialRecursive(-5)).toThrow('Factorial is not defined for negative numbers.');
            expect(() => factorialRecursive(-1, 1)).toThrow('Factorial is not defined for negative numbers.');
            expect(() => factorialRecursive(-5, 3)).toThrow('Factorial is not defined for negative numbers.');
        });

        it('throws an error if start is greater than n', () => {
            expect(() => factorialRecursive(3, 5)).toThrow('Start cannot be greater than n.');
        });

        it('throws an error if start is negative', () => {
            expect(() => factorialRecursive(5, -1)).toThrow('Start must be non-negative.');
        });

        it('handles special case where start is 0', () => {
            expect(factorialRecursive(5, 0)).toBe(120); // Adjusts start to 1, calculates 5!
        });

        it('handles edge case of n being 0 and start not set', () => {
            expect(factorialRecursive(0)).toBe(1); // 0! = 1
        });

        it('handles edge case of n being 0 with start > 0', () => {
            expect(() => factorialRecursive(0, 1)).toThrow('Start cannot be greater than n.');
        });
    });

    describe('factorialMemoized()', () => {
        it('calculates factorial of 0 as 1', () => {
            expect(factorialMemoized(0)).toBe(1);
            expect(factorialMemoized(0, 0)).toBe(1); // 0! = 1 by definition
        });

        it('calculates factorial of 1 as 1', () => {
            expect(factorialMemoized(1)).toBe(1);
        });

        it('calculates factorial of 5 as 120', () => {
            expect(factorialMemoized(5)).toBe(120);
            expect(factorialMemoized(5, 1)).toBe(120);
        });

        it('calculates partial factorial from start to n correctly', () => {
            expect(factorialMemoized(5, 2)).toBe(120); // 2*3*4*5 = 120
            expect(factorialMemoized(5, 3)).toBe(60);  // 3*4*5 = 60
            expect(factorialMemoized(5, 5)).toBe(5); // Only includes 5, so 5! / 4! = 5
            expect(factorialMemoized(7, 7)).toBe(7); // Only includes 7, so 7! / 6! = 7
        });

        it('calculates factorial of 10 as 3628800', () => {
            expect(factorialMemoized(10)).toBe(3628800);
        });

        it('throws an error for negative numbers', () => {
            expect(() => factorialMemoized(-1)).toThrow('Factorial is not defined for negative numbers.');
            expect(() => factorialMemoized(-5)).toThrow('Factorial is not defined for negative numbers.');
            expect(() => factorialMemoized(-1, 1)).toThrow('Factorial is not defined for negative numbers.');
            expect(() => factorialMemoized(-5, 3)).toThrow('Factorial is not defined for negative numbers.');
        });

        it('throws an error if start is greater than n', () => {
            expect(() => factorialMemoized(3, 5)).toThrow('Start cannot be greater than n.');
        });

        it('throws an error if start is negative', () => {
            expect(() => factorialMemoized(5, -1)).toThrow('Start must be non-negative.');
        });

        it('handles special case where start is 0', () => {
            expect(factorialMemoized(5, 0)).toBe(120); // Adjusts start to 1, calculates 5!
        });

        it('handles edge case of n being 0 and start not set', () => {
            expect(factorialMemoized(0)).toBe(1); // 0! = 1
        });

        it('handles edge case of n being 0 with start > 0', () => {
            expect(() => factorialMemoized(0, 1)).toThrow('Start cannot be greater than n.');
        });
    });

    describe('factorial()', () => {
        it('calculates factorial of 0 as 1', () => {
            expect(factorial(0)).toBe(1);
            expect(factorial(0, 0)).toBe(1); // 0! = 1 by definition
        });

        it('calculates factorial of 1 as 1', () => {
            expect(factorial(1)).toBe(1);
        });

        it('calculates factorial of 5 as 120', () => {
            expect(factorial(5)).toBe(120);
            expect(factorial(5, 1)).toBe(120);
        });

        it('calculates partial factorial from start to n correctly', () => {
            expect(factorial(5, 2)).toBe(120); // 2*3*4*5 = 120
            expect(factorial(5, 3)).toBe(60);  // 3*4*5 = 60
            expect(factorial(5, 5)).toBe(5); // Only includes 5, so 5! / 4! = 5
            expect(factorial(7, 7)).toBe(7); // Only includes 7, so 7! / 6! = 7
        });

        it('calculates factorial of 10 as 3628800', () => {
            expect(factorial(10)).toBe(3628800);
        });

        it('throws an error for negative numbers', () => {
            expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers.');
            expect(() => factorial(-5)).toThrow('Factorial is not defined for negative numbers.');
            expect(() => factorial(-1, 1)).toThrow('Factorial is not defined for negative numbers.');
            expect(() => factorial(-5, 3)).toThrow('Factorial is not defined for negative numbers.');
        });

        it('throws an error if start is greater than n', () => {
            expect(() => factorial(3, 5)).toThrow('Start cannot be greater than n.');
        });

        it('throws an error if start is negative', () => {
            expect(() => factorial(5, -1)).toThrow('Start must be non-negative.');
        });

        it('handles special case where start is 0', () => {
            expect(factorial(5, 0)).toBe(120); // Adjusts start to 1, calculates 5!
        });

        it('handles edge case of n being 0 and start not set', () => {
            expect(factorial(0)).toBe(1); // 0! = 1
        });

        it('handles edge case of n being 0 with start > 0', () => {
            expect(() => factorial(0, 1)).toThrow('Start cannot be greater than n.');
        });
    });
});