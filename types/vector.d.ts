import { Vector, Vector2, Vector3 } from './types';
export declare const vSum: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => Vector;
export declare const v2Sum: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => Vector2;
export declare const v3Sum: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => Vector3;
export declare const vSub: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => Vector;
export declare const v2Sub: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => Vector2;
export declare const v3Sub: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => Vector3;
export declare const vMulScalar: (v: Vector, scalar: number, decimalPlaces?: number) => Vector;
export declare const v2MulScalar: (v2: Vector2, scalar: number, decimalPlaces?: number) => Vector2;
export declare const v3MulScalar: (v3: Vector3, scalar: number, decimalPlaces?: number) => Vector3;
export declare const vDivideScalar: (v: Vector, scalar: number, decimalPlaces?: number) => Vector;
export declare const v2DivideScalar: (v2: Vector2, scalar: number, decimalPlaces?: number) => Vector2;
export declare const v3DivideScalar: (v3: Vector3, scalar: number, decimalPlaces?: number) => Vector3;
export declare const vLength: (vector: Vector, decimalPlaces?: number) => number;
export declare const v2Length: (vector: Vector2, decimalPlaces?: number) => number;
export declare const v3Length: (vector: Vector3, decimalPlaces?: number) => number;
export declare const v2SetLength: (v2: Vector2, newLength: number, decimalPlaces?: number) => Vector2;
/**
 * Normalization creates a unit vector, which is a vector of length 1.
 */
export declare const vNormalize: (v: Vector, decimalPlaces?: number) => Vector;
export declare const v2Normalize: (v2: Vector2, decimalPlaces?: number) => Vector2;
export declare const v3Normalize: (v3: Vector3, decimalPlaces?: number) => Vector3;
export declare const vDotProduct: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => number;
export declare const v2DotProduct: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => number;
export declare const v3DotProduct: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => number;
/**
 * Cross product is possible on 3D vectors only.
 * The cross product a × b is defined as a vector c that is perpendicular (orthogonal) to both a and b.
 */
export declare const v3CrossProduct: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => Vector3;
export declare const v2: (defaultValue?: number) => Vector2;
export declare const v3: (defaultValue?: number) => Vector3;
export declare const vN: (N: number, defaultValue?: number) => Vector;
export declare const vEqual: (vector1: Vector, vector2: Vector) => boolean;
