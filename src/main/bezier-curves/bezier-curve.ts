import { Vector, Vector2, Vector3 } from '../../types';
import { setDecimalPlaces } from '../format';
import {
    dxV2CubicBezierCurve,
    dxV2QuadraticBezierCurve,
    dxV3CubicBezierCurve,
    dxV3QuadraticBezierCurve
} from '../derivative';
import { v2Normalize, v3Normalize } from '../linear-algebra/vector';
import { linearEquation } from '../equations/linear-equations';
import { quadraticEquation } from '../equations/quadratic-equations';

/**
 * Bézier Curves
 * quadratic: y = P1 * (1-t)² + P2 * 2 * (1-t)t + P3 * t²
 * t in range [0, 1]
 */

// -------------------- GET POINT ON CURVE --------------------------

/**
 * Get a point on a quadratic Bézier curve as a function of time.
 */
export const v2QuadraticBezierCurve = (
    t: number,
    startControlPoint: Vector2,
    centerControlPoint: Vector2,
    endControlPoint: Vector2,
    decimalPlaces = Infinity
) : Vector2 => {

    const temp1 = Math.pow(1 - t, 2);
    const temp2 = (1 - t) * 2 * t;
    const temp3 = t * t;

    return [
        setDecimalPlaces(temp1 * startControlPoint[0] + temp2 * centerControlPoint[0] + temp3 * endControlPoint[0], decimalPlaces),
        setDecimalPlaces(temp1 * startControlPoint[1] + temp2 * centerControlPoint[1] + temp3 * endControlPoint[1], decimalPlaces),
    ];
};

export const v3QuadraticBezierCurve = (
    t: number,
    startControlPoint: Vector3,
    centerControlPoint: Vector3,
    endControlPoint: Vector3,
    decimalPlaces = Infinity
) : Vector3 => {

    const temp1 = Math.pow(1 - t, 2);
    const temp2 = (1 - t) * 2 * t;
    const temp3 = t * t;

    return [
        setDecimalPlaces(temp1 * startControlPoint[0] + temp2 * centerControlPoint[0] + temp3 * endControlPoint[0], decimalPlaces),
        setDecimalPlaces(temp1 * startControlPoint[1] + temp2 * centerControlPoint[1] + temp3 * endControlPoint[1], decimalPlaces),
        setDecimalPlaces(temp1 * startControlPoint[2] + temp2 * centerControlPoint[2] + temp3 * endControlPoint[2], decimalPlaces),
    ];
};

/**
 * Get a point on a cubic Bézier curve as a function of time.
 */
export const v2CubicBezierCurve = (
    t: number,
    startControlPoint: Vector2,
    center1ControlPoint: Vector2,
    center2ControlPoint: Vector2,
    endControlPoint: Vector2,
    decimalPlaces = Infinity
) : Vector2 => {

    const temp1 = Math.pow(1 - t, 3);
    const temp2 = Math.pow(1 - t, 2) * 3 * t;
    const temp3 = (1 - t) * 3 * t * t;
    const temp4 = t * t * t;

    return [
        setDecimalPlaces(temp1 * startControlPoint[0] + temp2 * center1ControlPoint[0] + temp3 * center2ControlPoint[0] + temp4 * endControlPoint[0], decimalPlaces),
        setDecimalPlaces(temp1 * startControlPoint[1] + temp2 * center1ControlPoint[1] + temp3 * center2ControlPoint[1] + temp4 * endControlPoint[1], decimalPlaces),
    ];
};

export const v3CubicBezierCurve = (
    t: number,
    startControlPoint: Vector3,
    center1ControlPoint: Vector3,
    center2ControlPoint: Vector3,
    endControlPoint: Vector3,
    decimalPlaces = Infinity
) : Vector3 => {

    const temp1 = Math.pow(1 - t, 3);
    const temp2 = Math.pow(1 - t, 2) * 3 * t;
    const temp3 = (1 - t) * 3 * t * t;
    const temp4 = t * t * t;

    return [
        setDecimalPlaces(temp1 * startControlPoint[0] + temp2 * center1ControlPoint[0] + temp3 * center2ControlPoint[0] + temp4 * endControlPoint[0], decimalPlaces),
        setDecimalPlaces(temp1 * startControlPoint[1] + temp2 * center1ControlPoint[1] + temp3 * center2ControlPoint[1] + temp4 * endControlPoint[1], decimalPlaces),
        setDecimalPlaces(temp1 * startControlPoint[2] + temp2 * center1ControlPoint[2] + temp3 * center2ControlPoint[2] + temp4 * endControlPoint[2], decimalPlaces),
    ];
};

// -------------------- TANGENT --------------------------

/**
 * Tangent indicates the direction of travel at specific points along the Bézier curve,
 * and is literally just the first derivative of our curve.
 */
export const v2QuadraticBezierCurveTangent = (
    t: number,
    startControlPoint: Vector2,
    centerControlPoint: Vector2,
    endControlPoint: Vector2,
    decimalPlaces = Infinity
) : Vector2 => {
    const dxVector = dxV2QuadraticBezierCurve(t, startControlPoint, centerControlPoint, endControlPoint);
    return v2Normalize(dxVector, decimalPlaces);
};

export const v3QuadraticBezierCurveTangent = (
    t: number,
    startControlPoint: Vector3,
    centerControlPoint: Vector3,
    endControlPoint: Vector3,
    decimalPlaces = Infinity
) : Vector3 => {
    const dxVector = dxV3QuadraticBezierCurve(t, startControlPoint, centerControlPoint, endControlPoint);
    return v3Normalize(dxVector, decimalPlaces);
};

export const v2CubicBezierCurveTangent = (
    t: number,
    startControlPoint: Vector2,
    center1ControlPoint: Vector2,
    center2ControlPoint: Vector2,
    endControlPoint: Vector2,
    decimalPlaces = Infinity
) : Vector2 => {
    const dxVector = dxV2CubicBezierCurve(t, startControlPoint, center1ControlPoint, center2ControlPoint, endControlPoint);
    return v2Normalize(dxVector, decimalPlaces);
};

export const v3CubicBezierCurveTangent = (
    t: number,
    startControlPoint: Vector3,
    center1ControlPoint: Vector3,
    center2ControlPoint: Vector3,
    endControlPoint: Vector3,
    decimalPlaces = Infinity
) : Vector3 => {
    const dxVector = dxV3CubicBezierCurve(t, startControlPoint, center1ControlPoint, center2ControlPoint, endControlPoint);
    return v3Normalize(dxVector, decimalPlaces);
};

// -------------------- NORMAL --------------------------

/**
 * Normal is a vector that runs at a right angle to the direction of the curve, and is typically of length 1.
 * To find it, we take the normalised tangent vector, and then rotate it by a 90 degrees.
 */
export const v2QuadraticBezierCurveNormal = (
    t: number,
    startControlPoint: Vector2,
    centerControlPoint: Vector2,
    endControlPoint: Vector2,
    decimalPlaces = Infinity
) : Vector2 => {

    const tangent = v2QuadraticBezierCurveTangent(t, startControlPoint, centerControlPoint, endControlPoint, decimalPlaces);
    return [-tangent[1], tangent[0]];
};

export const v2CubicBezierCurveNormal = (
    t: number,
    startControlPoint: Vector2,
    center1ControlPoint: Vector2,
    center2ControlPoint: Vector2,
    endControlPoint: Vector2,
    decimalPlaces = Infinity
) : Vector2 => {

    const tangent = v2CubicBezierCurveTangent(t, startControlPoint, center1ControlPoint, center2ControlPoint, endControlPoint, decimalPlaces);
    return [-tangent[1], tangent[0]];
};

// -------------------- EXTREMA --------------------------

/**
 * Find maxima and minima by solving the equation B'(t) = 0
 * Returns result in [0, 1] range.
 */
export const v2QuadraticBezierCurveExtrema = (
    startControlPoint: Vector2,
    centerControlPoint: Vector2,
    endControlPoint: Vector2,
    decimalPlaces = Infinity
) : Vector2 => {

   /*
    (-2 * (1 - t)) * startControlPoint[0] + (2 - 4 * t) * centerControlPoint[0] + (2 * t) * endControlPoint[0]
    2 * t * startControlPoint[0] - 4 * t * centerControlPoint[0] + 2 * t * endControlPoint[0] - 2 * startControlPoint[0] + 2 * centerControlPoint[0]
    t * (2  * startControlPoint[0] - 4 * centerControlPoint[0] + 2 * endControlPoint[0]) + (- 2 * startControlPoint[0] + 2 * centerControlPoint[0])
    */

    const a1 = 2  * startControlPoint[0] - 4 * centerControlPoint[0] + 2 * endControlPoint[0];
    const b1 = -2 * startControlPoint[0] + 2 * centerControlPoint[0];
    const equation1: Vector3 = [a1, b1, 0];

    const a2 = 2  * startControlPoint[1] - 4 * centerControlPoint[1] + 2 * endControlPoint[1];
    const b2 = -2 * startControlPoint[1] + 2 * centerControlPoint[1];
    const equation2: Vector3 = [a2, b2, 0];

    return [
        linearEquation(equation1, decimalPlaces),
        linearEquation(equation2, decimalPlaces),
    ];
};

/**
 * Find maxima and minima by solving the equation B'(t) = 0
 * Returns result in [0, 1] range.
 */
export const v2CubicBezierCurveExtrema = (
    startControlPoint: Vector2,
    center1ControlPoint: Vector2,
    center2ControlPoint: Vector2,
    endControlPoint: Vector2,
    decimalPlaces = Infinity
) : Vector2|null => {

    const a1 = -3  * startControlPoint[0] + 9 * center1ControlPoint[0] - 9 * center2ControlPoint[0] + 3 * endControlPoint[0];
    const b1 = 6  * startControlPoint[0] - 12 * center1ControlPoint[0] + 6 * center2ControlPoint[0];
    const c1 = -3  * startControlPoint[0] + 3 * center1ControlPoint[0];
    const equation1: Vector = [a1, b1, c1, 0];

    const a2 = -3  * startControlPoint[1] + 9 * center1ControlPoint[1] - 9 * center2ControlPoint[1] + 3 * endControlPoint[1];
    const b2 = 6  * startControlPoint[1] - 12 * center1ControlPoint[1] + 6 * center2ControlPoint[1];
    const c2 = -3  * startControlPoint[1] + 3 * center1ControlPoint[1];
    const equation2: Vector = [a2, b2, c2, 0];

    // Any value between 0 and 1 is a root that matters for Bézier curves, anything below or above that is irrelevant (because Bézier curves are only defined over the interval [0,1]).
    const res1 = quadraticEquation(equation1, decimalPlaces).filter(num => num >= 0 && num <= 1);
    const res2 = quadraticEquation(equation2, decimalPlaces).filter(num => num >= 0 && num <= 1);

    const res = [...res1, ...res2];
    if(res.length === 2){
        return [...res1, ...res2] as Vector2;
    }

    return null;
};

// -------------------- BOUNDING BOX --------------------------

export const v2QuadraticBezierBBox = (
    startControlPoint: Vector2,
    centerControlPoint: Vector2,
    endControlPoint: Vector2,
    decimalPlaces = Infinity
) => {

    const extrema = v2QuadraticBezierCurveExtrema(startControlPoint, centerControlPoint, endControlPoint);

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    for(const percent of extrema){
        const point = v2QuadraticBezierCurve(percent, startControlPoint, centerControlPoint, endControlPoint);

        const x = point[0];
        const y = point[1];

        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);

        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
    }

    minX = setDecimalPlaces(Math.min(minX, startControlPoint[0], endControlPoint[0]), decimalPlaces);
    maxX = setDecimalPlaces(Math.max(maxX, startControlPoint[0], endControlPoint[0]), decimalPlaces);
    minY = setDecimalPlaces(Math.min(minY, startControlPoint[1], endControlPoint[1]), decimalPlaces);
    maxY = setDecimalPlaces(Math.max(maxY, startControlPoint[1], endControlPoint[1]), decimalPlaces);

    return {
        minX,
        minY,
        maxX,
        maxY,
    }
};

export const v2CubicBezierBBox = (
    startControlPoint: Vector2,
    center1ControlPoint: Vector2,
    center2ControlPoint: Vector2,
    endControlPoint: Vector2,
    decimalPlaces = Infinity
) => {

    const extrema = v2CubicBezierCurveExtrema(startControlPoint, center1ControlPoint, center2ControlPoint, endControlPoint) || [];

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    for(const percent of extrema){
        const point = v2CubicBezierCurve(percent, startControlPoint, center1ControlPoint, center2ControlPoint, endControlPoint);

        const x = point[0];
        const y = point[1];

        minX = Math.min(minX, x ?? Infinity);
        maxX = Math.max(maxX, x ?? -Infinity);

        minY = Math.min(minY, y ?? Infinity);
        maxY = Math.max(maxY, y ?? -Infinity);
    }

    minX = setDecimalPlaces(Math.min(minX, startControlPoint[0], endControlPoint[0]), decimalPlaces);
    maxX = setDecimalPlaces(Math.max(maxX, startControlPoint[0], endControlPoint[0]), decimalPlaces);
    minY = setDecimalPlaces(Math.min(minY, startControlPoint[1], endControlPoint[1]), decimalPlaces);
    maxY = setDecimalPlaces(Math.max(maxY, startControlPoint[1], endControlPoint[1]), decimalPlaces);

    return {
        minX,
        minY,
        maxX,
        maxY,
    }
};


