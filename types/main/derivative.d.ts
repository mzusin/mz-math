import { Vector2, Vector3 } from '../types';
/**
 * u(x) and v(x) are functions ---------->
 *
 * dx(u + v) = dx(u) + dx(v)
 * dx(u - v) = dx(u) - dx(v)
 * dx(u * v) = dx(u) * v + u * dx(v)
 * dx(u / v) = (dx(u) * v - u * dx(v)) / (v ^ 2), when v(x) != 0
 */
/**
 * y = 3x+2
 * dxPolynomial(10, [[3, 1], [2, 0]])
 */
export declare const dxPolynomial: (x: number, polynomial: number[][], decimalPlaces?: number) => number;
/**
 * Derivative of Bezier Curve is another Bezier Curve.
 */
export declare const dxV2QuadraticBezierCurve: (t: number, startControlPoint: Vector2, centerControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
export declare const dxV3QuadraticBezierCurve: (t: number, startControlPoint: Vector3, centerControlPoint: Vector3, endControlPoint: Vector3, decimalPlaces?: number) => Vector3;
export declare const dxV2CubicBezierCurve: (t: number, startControlPoint: Vector2, center1ControlPoint: Vector2, center2ControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
export declare const dxV3CubicBezierCurve: (t: number, startControlPoint: Vector3, center1ControlPoint: Vector3, center2ControlPoint: Vector3, endControlPoint: Vector3, decimalPlaces?: number) => Vector3;
export declare const dxSin: (x: number, decimalPlaces?: number) => number;
export declare const dxCos: (x: number, decimalPlaces?: number) => number;
export declare const dxTan: (x: number, decimalPlaces?: number) => number;
/**
 * x != Math.PI * n, where n is an integer
 */
export declare const dxCot: (x: number, decimalPlaces?: number) => number;
/**
 * -1 < x < 1
 */
export declare const dxArcSin: (x: number, decimalPlaces?: number) => number;
/**
 * -1 < x < 1
 */
export declare const dxArcCos: (x: number, decimalPlaces?: number) => number;
export declare const dxArcTan: (x: number, decimalPlaces?: number) => number;
export declare const dxArcCot: (x: number, decimalPlaces?: number) => number;
