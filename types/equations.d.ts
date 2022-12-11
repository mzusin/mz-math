import { Matrix, Vector, Vector2, Vector3 } from './types';
/**
 * System of equation of the second degree.
 * [x, y] = inverse(Matrix of equation parameters) x (vector of equation results)
 * ---------------
 * 3x + 2y = 7
 * -6x + 6y = 6
 */
export declare const equationSystem2: (equation1: Vector3, equation2: Vector3, decimalPlaces?: number) => Vector2 | null;
/**
 * System of equation of the third degree.
 * ---------------------------------------
 * 3x + 2y + 5z = 7
 * -6x + 6y + 6z = 6
 * 2x + 7y - z = 4
 */
export declare const equationSystem3: (equation1: Vector3, equation2: Vector3, equation3: Vector3, decimalPlaces?: number) => Vector3 | null;
/**
 * System of equation of the Nth degree.
 */
export declare const equationSystemN: (equations: Matrix, decimalPlaces?: number) => Vector | null;
