import { factorial } from './factorial';

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
 *
 * Example:
 * --------
 * Such as a lock that could be "333".
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

/**
 * Combinations without repetitions:
 * - "n" is the number of things to choose from
 * - we choose "r" of them
 * - order doesn't matter
 * - no repetitions
 *
 * And is also known as the Binomial Coefficient.
 * We can also use Pascal's Triangle to find the values.
 *
 * Formula:
 * --------
 * C(n, r) = C(n, n - r) = n! / (r! * (n−r)!)
 *
 * Example:
 * --------
 * Such as lottery numbers (2, 14, 15, 27, 30, 33).
 *
 * Tabulation (Bottom-Up Dynamic Programming).
 * Time Complexity: 𝑂(n × r)
 * Space Complexity: 𝑂(n × r)
 */
export const combinationsWithoutRepetition = (n: number, r: number) : number => {
    if (n < 0 || r < 0) {
        throw new Error('Both n and r should be non-negative integers.');
    }
    if (!Number.isInteger(n) || !Number.isInteger(r)) {
        throw new Error('Both n and r should be integers.');
    }

    // Initialize a two-dimensional array (or matrix) [n + 1, r + 1].
    // The reason for n + 1 is to ensure that we can access indices directly equal to the value of n
    // without running out of bounds, as array indices start at 0.
    const dp = Array.from({ length: n + 1 }, () => Array(r + 1).fill(0));
    /*
    const dp: number[][] = [];
    for(let i=0; i<=n; i++) {
        dp[i] = [];
        for(let j=0; j<=r; j++) {
            dp[i][j] = 0;
        }
    }*/

    // Base cases: C(n, 0) = 1 and C(n, n) = 1 for any n.
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 1;
        if (i <= r) {
            // Only fill this if i <= r to avoid filling non-existent cells
            dp[i][i] = 1;
        }
    }

    // Fill the table using the relation C(n, r) = C(n-1, r-1) + C(n-1, r)
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= Math.min(i, r); j++) { // Only compute up to the minimum of i and r
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
        }
    }

    return dp[n][r];
};

/**
 * Combinations with repetitions (multi-choose):
 * - "n" is the number of things to choose from
 * - we choose "r" of them
 * - order doesn't matter
 * - repetition is allowed
 *
 * Formula:
 * --------
 * (r + n − 1)! / r!(n − 1)! = C(r + n − 1, r) = C(r + n − 1, n − 1)
 *
 * Example:
 * --------
 * - Coins in your pocket (5, 5, 5, 10, 10).
 * - Let us say there are five flavors of ice cream: banana, chocolate, lemon, strawberry and vanilla.å
 *   We can have three scoops. How many variations will there be?
 *
 * Tabulation (Bottom-Up Dynamic Programming).
 * Time Complexity: 𝑂((r + n) × r)
 * Space Complexity: 𝑂((r + n) × r)
 */
export const combinationsWithRepetition = (n: number, r: number) : number => {
    if (n < 0 || r < 0) {
        throw new Error('Both n and r should be non-negative integers.');
    }
    if (!Number.isInteger(n) || !Number.isInteger(r)) {
        throw new Error('Both n and r should be integers.');
    }

    if(n === 0) return 1;

    // Calculate adjusted values for indices in the DP table
    const totalItems = r + n - 1;
    const chooseItems = r;

    // Initialize DP table
    const dp: number[][] = Array.from({ length: totalItems + 1 }, () => Array(chooseItems + 1).fill(0));

    // Base case initialization: C(i, 0) = 1 for all i, because there's one way to choose nothing
    for (let i = 0; i <= totalItems; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= totalItems; i++) {
        for (let j = 1; j <= Math.min(i, chooseItems); j++) {
            dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
        }
    }

    return dp[totalItems][chooseItems];
};

