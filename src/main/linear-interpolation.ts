import { setDecimalPlaces } from './format';
import { Vector2, Vector3 } from '../../types/main/types';
import { Matrix, Matrix2, Matrix3, Vector } from '../types';

// ------------------------ LINEAR INTERPOLATION in general form ----------------------------

/**
 * General linear interpolation.
 * Y = ((X - X1) * (Y2 - Y1) / (X2 - X1)) + Y1
 */
export const linearInterpolation = (
    x: number,
    start: Vector2,
    end: Vector2,
    decimalPlaces = Infinity) => {

    const x1 = start[0];
    const y1 = start[1];

    const x2 = end[0];
    const y2 = end[1];

    const y = ((x - x1) * (y2 - y1) / (x2 - x1)) + y1;
    return setDecimalPlaces(y, decimalPlaces);
};

// ------------------------ LERP in range [0, 1] ---------------------------------------------

/*
From general formula:
Y = ((X - X1) * (Y2 - Y1) / (X2 - X1)) + Y1
[x1, x2] = [0, 1] = range
[y1, y2] = [start, end]
-------------------------------------------
To lerp formula:
Y = ((x - 0)(end - start) / (1 - 0)) + start
Y = x(end - start) + start
Y = x * end - x * start + start
Y = x * end + start(1 - x)
 */

/**
 * Performs a linear interpolation in range [0, 1].
 * x - a value that linearly interpolates between the x parameter and the y parameter.
 */
export const lerp = (
    x: number,
    start: number,
    end: number,
    decimalPlaces = Infinity) => {
    return setDecimalPlaces((1 - x) * start + x * end, decimalPlaces);
};

/**
 * Linear interpolation in range [0, 1] for general vector.
 */
export const vLerp = (
    x: number,
    start: Vector,
    end: Vector,
    decimalPlaces = Infinity): Vector => {

    const vector: Vector = [];

    for(let i=0; i<start.length; i++){
        vector.push(lerp(x, start[i], end[i], decimalPlaces));
    }

    return vector;
}

/**
 * Linear interpolation in range [0, 1] for 3d vector.
 */
export const v3Lerp = (
    x: number,
    start: Vector3,
    end: Vector3,
    decimalPlaces = Infinity): Vector3 => {
    return vLerp(x, start, end, decimalPlaces) as Vector3;
}

/**
 * Linear interpolation in range [0, 1] for 2d vector.
 */
export const v2Lerp = (
    x: number,
    start: Vector2,
    end: Vector2,
    decimalPlaces = Infinity): Vector2 => {
    return vLerp(x, start, end, decimalPlaces) as Vector2;
}

/**
 * Linear interpolation in range [0, 1] for general matrix.
 */
export const mLerp = (
    x: number,
    start: Matrix,
    end: Matrix,
    decimalPlaces = Infinity): Matrix => {

    const mat: Matrix = [];

    for(let r = 0; r < start.length; r++){
        mat.push(vLerp(x, start[r], end[r], decimalPlaces));
    }

    return mat;
}

/**
 * Linear interpolation in range [0, 1] for 3d matrix.
 */
export const m3Lerp = (
    x: number,
    start: Matrix3,
    end: Matrix3,
    decimalPlaces = Infinity): Matrix3 => {
    return mLerp(x, start, end, decimalPlaces) as Matrix3;
}

/**
 * Linear interpolation in range [0, 1] for 2d matrix.
 */
export const m2Lerp = (
    x: number,
    start: Matrix2,
    end: Matrix2,
    decimalPlaces = Infinity): Matrix2 => {
    return mLerp(x, start, end, decimalPlaces) as Matrix2;
}

