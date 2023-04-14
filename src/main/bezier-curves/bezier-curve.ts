import { Vector2, Vector3 } from '../../types';
import { setDecimalPlaces } from '../format';
import {
    dxV2CubicBezierCurve,
    dxV2QuadraticBezierCurve,
    dxV3CubicBezierCurve,
    dxV3QuadraticBezierCurve
} from '../derivative';
import { v2Normalize, v3Normalize } from '../linear-algebra/vector';

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
 * To find it, we take the normalised tangent vector, and then rotate it by a quarter turn.
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


