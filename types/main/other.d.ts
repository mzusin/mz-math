export declare const mod: (n: number, m: number) => number;
/**
 * Convert range [a, b] to [c, d].
 * f(x) = (d - c) * (x - a) / (b - a) + c
 */
export declare const convertRange: (x: number, a: number, b: number, c: number, d: number) => number;
/**
 * Check if 2 ranges [a,b] and [c,d] overlap.
 */
export declare const doRangesOverlap: (a: number, b: number, c: number, d: number) => boolean;
export declare const isNumber: (value: any) => boolean;
