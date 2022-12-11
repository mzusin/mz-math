import { Matrix2, Vector2, Vector3 } from './types';
import { m2Inverse, mMulVector } from './matrix';

/**
 * System of equation of the second degree.
 * [x, y] = inverse(Matrix of equation parameters) x (vector of equation results)
 */
export const equationSystem2 = (equation1: Vector3, equation2: Vector3, decimalPlaces = Infinity) : Vector2 | null => {
    const equationParams: Matrix2 = [
        [equation1[0], equation1[1]],
        [equation2[0], equation2[1]],
    ];

    const inversed = m2Inverse(equationParams);
    if(inversed === null) return null; // no results

    const equationResults: Vector2 = [
        equation1[2],
        equation2[2]
    ];

    return mMulVector(inversed, equationResults, decimalPlaces) as Vector2;
};