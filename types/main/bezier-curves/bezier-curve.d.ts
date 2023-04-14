import { Vector2, Vector3 } from '../../types';
/**
 * Bézier Curves
 * quadratic: y = P1 * (1-t)² + P2 * 2 * (1-t)t + P3 * t²
 * t in range [0, 1]
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
/**
 * Tangent indicates the direction of travel at specific points along the Bézier curve,
 * and is literally just the first derivative of our curve.
 */
export declare const v2QuadraticBezierCurveTangent: (t: number, startControlPoint: Vector2, centerControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
export declare const v3QuadraticBezierCurveTangent: (t: number, startControlPoint: Vector3, centerControlPoint: Vector3, endControlPoint: Vector3, decimalPlaces?: number) => Vector3;
export declare const v2CubicBezierCurveTangent: (t: number, startControlPoint: Vector2, center1ControlPoint: Vector2, center2ControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
export declare const v3CubicBezierCurveTangent: (t: number, startControlPoint: Vector3, center1ControlPoint: Vector3, center2ControlPoint: Vector3, endControlPoint: Vector3, decimalPlaces?: number) => Vector3;
/**
 * Normal is a vector that runs at a right angle to the direction of the curve, and is typically of length 1.
 * To find it, we take the normalised tangent vector, and then rotate it by a 90 degrees.
 */
export declare const v2QuadraticBezierCurveNormal: (t: number, startControlPoint: Vector2, centerControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
export declare const v2CubicBezierCurveNormal: (t: number, startControlPoint: Vector2, center1ControlPoint: Vector2, center2ControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
