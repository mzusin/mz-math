import { Vector2 } from '../types';
import { setDecimalPlaces } from './format';

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

/**
 * Convert polar coordinates to cartesian coordinates.
 */
export const polarToCartesian = (center: Vector2, radii: Vector2, angleInRad: number, decimalPlaces = Infinity) : Vector2 => {
    const [cx, cy] = center;
    const [rx, ry] = radii;

    return [
        setDecimalPlaces(cx + (rx * Math.cos(angleInRad)), decimalPlaces),
        setDecimalPlaces(cy + (ry * Math.sin(angleInRad)), decimalPlaces),
    ];
};

/**
 * Greatest common divisor (GCD).
 * O( log(min(num1, num2)) ).
 * GCD is always defined as a non-negative number.
 * If num2 is 0, then the GCD is num1.
 *
 * a=48,𝑏=18 ---> 48 % 18 = 12
 * a=18,b=12 ---> 18 % 12 = 6
 * a=12,b=6 ---> 12 % 6 = 0
 * a=6,b=0 ---> result is 6
 */
export const gcd = (num1: number, num2: number): number => {
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    while (num2 !== 0) {
        const temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    return num1;
};