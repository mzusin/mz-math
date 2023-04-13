import { setDecimalPlaces } from './format';

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

/*export const dxQuadraticBezierCurve = (
    t: number,
    startControlPoint: Vector2,
    centerControlPoint: Vector2,
    endControlPoint: Vector2,
    decimalPlaces = Infinity
) : Vector2 => {

};*/

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
