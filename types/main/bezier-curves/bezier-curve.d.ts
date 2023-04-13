import { Vector2, Vector3 } from '../../types';
/**
 * Bézier Curves
 * t in range [0, 1]
 * linear: (1 - t) + t
 * square: (1 - t)^2 + 2*(1 - t) + t^2
 * cubic:  (1 - t)^3 + 3*(1 - t)^2 + 3*(1 - t) * t^2 + t^3
 */
/**
 * Get a point on a quadratic Bézier curve as a function of time.
 */
export declare const v2QuadraticBezierCurve: (t: number, startControlPoint: Vector2, centerControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
export declare const v3QuadraticBezierCurve: (t: number, startControlPoint: Vector3, centerControlPoint: Vector3, endControlPoint: Vector3, decimalPlaces?: number) => Vector3;
/**
 * Get a point on a cubic Bézier curve as a function of time.
 */
export declare const v2CubicBezierCurve: (t: number, startControlPoint: Vector2, center1ControlPoint: Vector2, center2ControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
export declare const v3CubicBezierCurve: (t: number, startControlPoint: Vector3, center1ControlPoint: Vector3, center2ControlPoint: Vector3, endControlPoint: Vector3, decimalPlaces?: number) => Vector3;
