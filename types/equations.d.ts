import { Vector2, Vector3 } from './types';
/**
 * System of equation of the second degree.
 * [x, y] = inverse(Matrix of equation parameters) x (vector of equation results)
 */
export declare const equationSystem2: (equation1: Vector3, equation2: Vector3, decimalPlaces?: number) => Vector2 | null;
