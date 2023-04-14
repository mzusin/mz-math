import { Matrix, Matrix2, Matrix3, Vector, Vector2, Vector3 } from '../../types';
import { m2Inverse, m3Inverse, mInverse, mMulVector, mDelLastColumn, mGetLastColumn } from '../linear-algebra/matrix';
import { setDecimalPlaces } from '../format';

/**
 * Linear equation
 * ax + b = c
 * x = (c - b) / a; a != 0
 */
export const linearEquation = (equation: Vector3, decimalPlaces = Infinity) : number => {
    const a = equation[0];
    const b = equation[1];
    const c = equation[2];

    const diff = c - b;

    if(a === 0 && diff === 0) return Infinity; // any number is a solution
    if(a === 0) return NaN; // no solution

    return setDecimalPlaces(diff / a, decimalPlaces);
};

/**
 * System of 2 linear equations.
 * [x, y] = inverse(Matrix of equation parameters) x (vector of equation results)
 * ---------------
 * 3x + 2y = 7
 * -6x + 6y = 6
 */
export const linearEquationSystem2 = (equation1: Vector3, equation2: Vector3, decimalPlaces = Infinity) : Vector2 | null => {
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

/**
 * System of 3 linear equations.
 * ---------------------------------------
 * 3x + 2y + 5z = 7
 * -6x + 6y + 6z = 6
 * 2x + 7y - z = 4
 */
export const linearEquationSystem3 = (
    equation1: Vector,
    equation2: Vector,
    equation3: Vector,
    decimalPlaces = Infinity) : Vector3 | null => {
    const equationParams: Matrix3 = [
        [equation1[0], equation1[1], equation1[2]],
        [equation2[0], equation2[1], equation2[2]],
        [equation3[0], equation3[1], equation3[2]],
    ];

    const inversed = m3Inverse(equationParams);
    if(inversed === null) return null; // no results

    const equationResults: Vector3 = [
        equation1[3],
        equation2[3],
        equation3[3]
    ];

    return mMulVector(inversed, equationResults, decimalPlaces) as Vector3;
};

/**
 * System of N linear equations.
 */
export const linearEquationSystemN = (equations: Matrix, decimalPlaces = Infinity) : Vector | null => {
    if(equations.length <= 0) return null;

    const equationParams = mDelLastColumn(equations);

    const inversed = mInverse(equationParams);
    if(inversed === null) return null; // no results

    // the last column of the equations matrix
    const equationResults = mGetLastColumn(equations);

    return mMulVector(inversed, equationResults, decimalPlaces) as Vector;
};