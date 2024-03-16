/**
 * Sum of 1 to n numbers:
 * (n * (n + 1)) / 2
 */
export const naturalNumbersSum1ToN = (n: number): number => {
    return (n / 2) * (n + 1);
};

/**
 * Sum of m to n numbers.
 */
export const naturalNumbersSumMToN = (m: number, n: number): number => {
    return (n - m + 1) * (m + n) / 2;
};