/**
 * The simplest and straightforward method
 * but can become inefficient for extremely large numbers
 * due to growing computational time.
 */
export const factorialIterative = (n: number, start = 0): number => {

    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers.');
    }

    if (start > n) {
        throw new Error('Start cannot be greater than n.');
    }

    if (start < 0) {
        throw new Error('Start must be non-negative.');
    }

    if (start === 0) {
        if (n === 0) {
            return 1; // 0! is defined as 1
        }
        else {
            start = 1; // Adjust start to 1 to prevent multiplication by zero
        }
    }

    let result = 1;
    for (let i = start; i <= n; i++) {
        result *= i;
    }
    return result;
};

/**
 * A recursive approach is a classic method for calculating factorials
 * but can lead to stack overflow errors
 * for very large inputs because of deep recursion.
 * However, it's a direct translation
 * of the mathematical definition of factorial.
 */
export const factorialRecursive = (n: number, start = 0): number => {
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers.');
    }

    if (start > n) {
        throw new Error('Start cannot be greater than n.');
    }

    if (start < 0) {
        throw new Error('Start must be non-negative.');
    }

    if (start === 0) {
        if (n === 0) {
            return 1; // 0! is defined as 1
        }
        else {
            start = 1; // Adjust start to 1 to prevent multiplication by zero
        }
    }

    // Base case: when n reaches start, return start instead of further reducing
    if (n === start) return start;

    // Recursive call
    return n * factorialRecursive(n - 1, start);
};

/**
 * Memoization (Top-Down Dynamic Programming).
 */
export const factorialMemoized = (n: number, start = 0): number => {
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers.');
    }

    if (start > n) {
        throw new Error('Start cannot be greater than n.');
    }

    if (start < 0) {
        throw new Error('Start must be non-negative.');
    }

    if (start === 0) {
        if (n === 0) {
            return 1; // 0! is defined as 1
        }
        else {
            start = 1; // Adjust start to 1 to prevent multiplication by zero
        }
    }

    const memo = new Map<number, number>();

    const traverse = (num: number, end: number): number => {
        if (num < end) return 1;  // Adjust the base case to return 1 if we're below 'end'
        // if (num === 0) return 1;

        if (memo.has(num)) return memo.get(num) ?? 1;

        if (num === end) {
            memo.set(num, num);
            return num;
        }

        const result = num * traverse(num - 1, end);

        memo.set(num, result);

        return result;
    };

    return traverse(n, start);
};

/**
 * Tabulation (Bottom-Up Dynamic Programming).
 */
export const factorial = (n: number, start = 0): number => {
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers.');
    }

    if (start > n) {
        throw new Error('Start cannot be greater than n.');
    }

    if (start < 0) {
        throw new Error('Start must be non-negative.');
    }

    if (start === n) {
        return n === 0 ? 1 : n; // If start == n and n == 0, return 1 (0!), otherwise return n
    }

    if (start === 0) {
        start = 1;
    }

    const table = []; // new Array(n + 1);
    table[0] = 1;
    for (let i = 1; i <= n; i++) {
        table[i] = table[i - 1] * i;
    }
    return table[n] / table[start - 1];
};