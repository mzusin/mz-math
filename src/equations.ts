import { Matrix, Matrix2, Matrix3, Vector, Vector2, Vector3 } from './types';
import { m2Inverse, m3Inverse, mInverse, mMulVector } from './matrix';

/**
 * System of equations of the second degree.
 * [x, y] = inverse(Matrix of equation parameters) x (vector of equation results)
 * ---------------
 * 3x + 2y = 7
 * -6x + 6y = 6
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

/**
 * System of equations of the third degree.
 * ---------------------------------------
 * 3x + 2y + 5z = 7
 * -6x + 6y + 6z = 6
 * 2x + 7y - z = 4
 */
export const equationSystem3 = (
    equation1: Vector3,
    equation2: Vector3,
    equation3: Vector3,
    decimalPlaces = Infinity) : Vector3 | null => {
    const equationParams: Matrix3 = [
        [equation1[0], equation1[1], equation1[2]],
        [equation2[0], equation2[1], equation2[2]],
        [equation3[0], equation3[1], equation3[2]],
    ];

    const inversed = m3Inverse(equationParams);
    if(inversed === null) return null; // no results

    const equationResults: Vector3 = [
        equation1[2],
        equation2[2],
        equation3[2]
    ];

    return mMulVector(inversed, equationResults, decimalPlaces) as Vector3;
};

/**
 * System of equations of the Nth degree.
 */
export const equationSystemN = (equations: Matrix, decimalPlaces = Infinity) : Vector | null => {
    if(equations.length <= 0) return null;

    const equationParams: Matrix = [];

    // fill params matrix - it contains all values from equations matrix except the last column,
    // as the last columns is the results
    for(let i=0; i<equations.length; i++){
        const vector: Vector = [];
        for(let j=0; j<equations[i].length - 1; i++){
            vector.push(equations[i][j]);
        }
        equationParams.push(vector);
    }

    const inversed = mInverse(equationParams);
    if(inversed === null) return null; // no results

    // the last column of the equations matrix
    const equationResults: Vector = [];
    for(let i=0; i<equations.length; i++){
        const row = equations[i];
        equationResults.push(row[row.length - 1]);
    }

    return mMulVector(inversed, equationResults, decimalPlaces) as Vector;
};