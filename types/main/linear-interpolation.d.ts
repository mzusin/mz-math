import { Matrix, Matrix2, Matrix3, Vector, Vector2, Vector3 } from '../types';
/**
 * General linear interpolation.
 * Y = ((X - X1) * (Y2 - Y1) / (X2 - X1)) + Y1
 */
export declare const linearInterpolation: (x: number, start: Vector2, end: Vector2, decimalPlaces?: number) => number;
/**
 * Performs a linear interpolation in range [0, 1].
 * x - a value that linearly interpolates between the x parameter and the y parameter.
 */
export declare const lerp: (x: number, start: number, end: number, decimalPlaces?: number) => number;
/**
 * Linear interpolation in range [0, 1] for general vector.
 */
export declare const vLerp: (x: number, start: Vector, end: Vector, decimalPlaces?: number) => Vector;
/**
 * Linear interpolation in range [0, 1] for 3d vector.
 */
export declare const v3Lerp: (x: number, start: Vector3, end: Vector3, decimalPlaces?: number) => Vector3;
/**
 * Linear interpolation in range [0, 1] for 2d vector.
 */
export declare const v2Lerp: (x: number, start: Vector2, end: Vector2, decimalPlaces?: number) => Vector2;
/**
 * Linear interpolation in range [0, 1] for general matrix.
 */
export declare const mLerp: (x: number, start: Matrix, end: Matrix, decimalPlaces?: number) => Matrix;
/**
 * Linear interpolation in range [0, 1] for 3d matrix.
 */
export declare const m3Lerp: (x: number, start: Matrix3, end: Matrix3, decimalPlaces?: number) => Matrix3;
/**
 * Linear interpolation in range [0, 1] for 2d matrix.
 */
export declare const m2Lerp: (x: number, start: Matrix2, end: Matrix2, decimalPlaces?: number) => Matrix2;
