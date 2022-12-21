export const mod = (n: number, m: number) => {
    return ((n % m) + m) % m;
};

/**
 * Convert range [a, b] to [c, d].
 * f(x) = (d - c) * (x - a) / (b - a) + c
 */
export const convertRange = (x: number, a: number, b: number, c: number, d: number) => {
    return (d - c) * (x - a) / (b - a) + c;
};

/**
 * Check if 2 ranges [a,b] and [c,d] overlap.
 */
export const doRangesOverlap = (a: number, b: number, c: number, d: number) => {
    return Math.max(a, c) <= Math.min(b, d) ;
};

// eslint-disable-next-line
export const isNumber = (value: any) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
};
