import { factorial } from './factorial';

/**
 * Order doesn't matter.
 */
/*
export const combinations = (n: number) => {

};
*/

/**
 * Permutations with repetitions:
 * - "n" is the number of things to choose from
 * - we choose "r" of them
 * - order matters
 * - repetition is allowed
 *
 * Formula:
 * --------
 * n^r
 *
 * Intuition:
 * ----------
 * In other words, there are n possibilities for the first choice,
 * THEN there are n possibilities for the second choice, and so on,
 * multiplying each time.
 *
 * A Permutation is an ordered Combination.
 */
export const permutationsWithRepetition = (n: number, r: number) => {
    if (n < 0 || r < 0) {
        throw new Error('Both n and r should be non-negative integers.');
    }
    if (!Number.isInteger(n) || !Number.isInteger(r)) {
        throw new Error('Both n and r should be integers.');
    }

    return n ** r;
};

/**
 * Permutations without repetitions:
 * - "n" is the number of things to choose from
 * - we choose "r" of them
 * - order matters
 * - no repetitions
 *
 * Formula:
 * --------
 * P(n,r) = n! / (n − r)!
 *
 * Intuition:
 * ----------
 * In this case, we have to reduce the number of available choices each time.
 * After choosing, say, number "14" we can't choose it again.
 * So, our first choice has 16 possibilities, and our next choice has 15 possibilities,
 * then 14, 13, 12, 11, ... etc.
 *
 * A Permutation is an ordered Combination.
 */
export const permutationsWithoutRepetition = (n: number, r: number) => {
    if (n < 0 || r < 0) {
        throw new Error('Both n and r should be non-negative integers.');
    }
    if (!Number.isInteger(n) || !Number.isInteger(r)) {
        throw new Error('Both n and r should be integers.');
    }

    return factorial(n, n - r + 1);
};

