import { Vector2, Vector3 } from '../../types';
import { setDecimalPlaces } from '../format';

/**
 * Bézier Curves
 * t in range [0, 1]
 * linear: (1 - t) + t
 * square: (1 - t)^2 + 2*(1 - t) + t^2
 * cubic:  (1 - t)^3 + 3*(1 - t)^2 + 3*(1 - t) * t^2 + t^3
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
