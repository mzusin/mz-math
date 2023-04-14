import { setDecimalPlaces } from './format';
import { Vector2, Vector3 } from '../types';

/**
 * u(x) and v(x) are functions ---------->
 *
 * dx(u + v) = dx(u) + dx(v)
 * dx(u - v) = dx(u) - dx(v)
 * dx(u * v) = dx(u) * v + u * dx(v)
 * dx(u / v) = (dx(u) * v - u * dx(v)) / (v ^ 2), when v(x) != 0
 */

// ------------------ Derivatives of Polynomial ---------------------------

/**
 * y = 3x+2
 * dxPolynomial(10, [[3, 1], [2, 0]])
 */
export const dxPolynomial = (x: number, polynomial: number[][], decimalPlaces = Infinity) => {
    let res = 0;

    for(const part of polynomial){
        if(part.length !== 2) return NaN;

        const coeff = part[0];
        const power = part[1];
        res += coeff * power * Math.pow(x, power - 1);
    }

    return setDecimalPlaces(res, decimalPlaces);
}

// ---------------------- Bezier Curves ---------------------------

/**
 * Derivative of Bezier Curve is another Bezier Curve.
 */
export const dxV2QuadraticBezierCurve = (
    t: number,
    startControlPoint: Vector2,
    centerControlPoint: Vector2,
    endControlPoint: Vector2,
    decimalPlaces = Infinity
) : Vector2 => {

    // The derivative: P1 * (2t-2) + (2*P3-4*P2) * t + 2 * P2

    const temp1 = -2 * (1 - t); // Math.pow(1 - t, 2)
    const temp2 = 2 - 4 * t; // (1 - t) * 2 * t
    const temp3 = 2 * t; //t * t;

    return [
        setDecimalPlaces(temp1 * startControlPoint[0] + temp2 * centerControlPoint[0] + temp3 * endControlPoint[0], decimalPlaces),
        setDecimalPlaces(temp1 * startControlPoint[1] + temp2 * centerControlPoint[1] + temp3 * endControlPoint[1], decimalPlaces),
    ];
};

export const dxV3QuadraticBezierCurve = (
    t: number,
    startControlPoint: Vector3,
    centerControlPoint: Vector3,
    endControlPoint: Vector3,
    decimalPlaces = Infinity
) : Vector3 => {

    const temp1 = -2 * (1 - t); // Math.pow(1 - t, 2)
    const temp2 = 2 - 4 * t; // (1 - t) * 2 * t
    const temp3 = 2 * t; //t * t;

    return [
        setDecimalPlaces(temp1 * startControlPoint[0] + temp2 * centerControlPoint[0] + temp3 * endControlPoint[0], decimalPlaces),
        setDecimalPlaces(temp1 * startControlPoint[1] + temp2 * centerControlPoint[1] + temp3 * endControlPoint[1], decimalPlaces),
        setDecimalPlaces(temp1 * startControlPoint[2] + temp2 * centerControlPoint[2] + temp3 * endControlPoint[2], decimalPlaces),
    ];
};

export const dxV2CubicBezierCurve = (
    t: number,
    startControlPoint: Vector2,
    center1ControlPoint: Vector2,
    center2ControlPoint: Vector2,
    endControlPoint: Vector2,
    decimalPlaces = Infinity
) : Vector2 => {

    const temp1 = -3 * Math.pow(1 - t, 2); //Math.pow(1 - t, 3);
    const temp2 = 3 * (t - 1) * (3 * t - 1); //Math.pow(1 - t, 2) * 3 * t;
    const temp3 = 6 * t - 9 * t * t; // (1 - t) * 3 * t * t;
    const temp4 = 3 * t * t; //t * t * t;

    return [
        setDecimalPlaces(temp1 * startControlPoint[0] + temp2 * center1ControlPoint[0] + temp3 * center2ControlPoint[0] + temp4 * endControlPoint[0], decimalPlaces),
        setDecimalPlaces(temp1 * startControlPoint[1] + temp2 * center1ControlPoint[1] + temp3 * center2ControlPoint[1] + temp4 * endControlPoint[1], decimalPlaces),
    ];
};

export const dxV3CubicBezierCurve = (
    t: number,
    startControlPoint: Vector3,
    center1ControlPoint: Vector3,
    center2ControlPoint: Vector3,
    endControlPoint: Vector3,
    decimalPlaces = Infinity
) : Vector3 => {

    const temp1 = -3 * Math.pow(1 - t, 2); //Math.pow(1 - t, 3);
    const temp2 = 3 * (t - 1) * (3 * t - 1); //Math.pow(1 - t, 2) * 3 * t;
    const temp3 = 6 * t - 9 * t * t; // (1 - t) * 3 * t * t;
    const temp4 = 3 * t * t; //t * t * t;

    return [
        setDecimalPlaces(temp1 * startControlPoint[0] + temp2 * center1ControlPoint[0] + temp3 * center2ControlPoint[0] + temp4 * endControlPoint[0], decimalPlaces),
        setDecimalPlaces(temp1 * startControlPoint[1] + temp2 * center1ControlPoint[1] + temp3 * center2ControlPoint[1] + temp4 * endControlPoint[1], decimalPlaces),
        setDecimalPlaces(temp1 * startControlPoint[2] + temp2 * center1ControlPoint[2] + temp3 * center2ControlPoint[2] + temp4 * endControlPoint[2], decimalPlaces),
    ];
};


// ----------------- Derivatives of trigonometry functions ---------------------------

export const dxSin = (x: number, decimalPlaces = Infinity) => {
    return setDecimalPlaces(Math.cos(x), decimalPlaces);
};

export const dxCos = (x: number, decimalPlaces = Infinity) => {
    return setDecimalPlaces(-Math.sin(x), decimalPlaces);
};

export const dxTan = (x: number, decimalPlaces = Infinity) => {
    return setDecimalPlaces(1 / (Math.cos(x) ** 2), decimalPlaces);
};

/**
 * x != Math.PI * n, where n is an integer
 */
export const dxCot = (x: number, decimalPlaces = Infinity) => {
    return setDecimalPlaces(-1 / (Math.sin(x) ** 2), decimalPlaces);
};

/**
 * -1 < x < 1
 */
export const dxArcSin = (x: number, decimalPlaces = Infinity) => {
    return setDecimalPlaces(1 / (Math.sqrt(1 - x ** 2)), decimalPlaces);
};

/**
 * -1 < x < 1
 */
export const dxArcCos = (x: number, decimalPlaces = Infinity) => {
    return setDecimalPlaces(-1 / (Math.sqrt(1 - x ** 2)), decimalPlaces);
};

export const dxArcTan = (x: number, decimalPlaces = Infinity) => {
    return setDecimalPlaces(1 / (1 + x ** 2), decimalPlaces);
};

export const dxArcCot = (x: number, decimalPlaces = Infinity) => {
    return setDecimalPlaces(-1 / (1 + x ** 2), decimalPlaces);
};
