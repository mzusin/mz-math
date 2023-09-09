/**
 * 1 + 2 + ... + n = n * (n + 1) / 2
 */
export const naturalNumbersSequenceSum = (n: number) => {
    return n * (n + 1) / 2;
};

/**
 * n = the number of terms to be added
 * a = the first term in the sequence
 * d = the constant value between terms
 */
export const arithmeticSequenceSum = (n: number, a: number, d: number) => {
    return (n / 2) * (2 * a + (n - 1) * d);
};