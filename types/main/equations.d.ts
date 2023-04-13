import { Matrix, Vector, Vector2, Vector3 } from '../types';
/**
 * System of 2 linear equations.
 * [x, y] = inverse(Matrix of equation parameters) x (vector of equation results)
 * ---------------
 * 3x + 2y = 7
 * -6x + 6y = 6
 */
export declare const equationSystem2: (equation1: Vector3, equation2: Vector3, decimalPlaces?: number) => Vector2 | null;
/**
 * System of 3 linear equations.
 * ---------------------------------------
 * 3x + 2y + 5z = 7
 * -6x + 6y + 6z = 6
 * 2x + 7y - z = 4
 */
export declare const equationSystem3: (equation1: Vector, equation2: Vector, equation3: Vector, decimalPlaces?: number) => Vector3 | null;
/**
 * System of N linear equations.
 */
export declare const equationSystemN: (equations: Matrix, decimalPlaces?: number) => Vector | null;
