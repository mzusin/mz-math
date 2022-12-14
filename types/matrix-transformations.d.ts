import { Matrix2, Matrix3, Matrix, Vector2, Vector3, Vector } from './types';
/**
 * 2D Translation matrix in homogeneous coordinates.
 */
export declare const m2TranslationH: (position: Vector3, decimalPlaces?: number) => Matrix3;
/**
 * 3D Translation matrix in homogeneous coordinates.
 */
export declare const m3TranslationH: (position: Vector, decimalPlaces?: number) => Matrix;
/**
 * Rotation of an angle about the origin.
 */
export declare const m2Rotation: (angleRad: number, decimalPlaces?: number) => Matrix2;
/**
 * Rotation of an angle about the origin in homogeneous coordinates.
 */
export declare const m2RotationH: (angleRad: number, decimalPlaces?: number) => Matrix3;
/**
 * Rotation of an angle "angleRad" around the given point (transformOrigin) in homogeneous coordinates.
 * result_vector = TranslationMatrix(x, y) * RotationMatrix() * TranslationMatrix(-x, -y) * position_vector
 */
export declare const m2RotationAroundPointH: (angleRad: number, transformOrigin: Vector3, decimalPlaces?: number) => Matrix3;
export declare const m2RotateAroundPointH: (angleRad: number, transformOrigin: Vector3, position: Vector3, decimalPlaces?: number) => Vector3;
/**
 * Rotate vector around the origin by angle "angleRad".
 */
export declare const v2Rotate: (angleRad: number, vector: Vector2, decimalPlaces?: number) => Vector2;
/**
 * Rotate vector around the origin by angle "angleRad".
 */
export declare const v2RotateH: (angleRad: number, vector: Vector3, decimalPlaces?: number) => Vector3;
/**
 * Rotation around the X axis.
 */
export declare const m3RotationX: (angleRad: number, decimalPlaces?: number) => Matrix3;
export declare const v3RotateX: (angleRad: number, vector: Vector3, decimalPlaces?: number) => Vector3;
/**
 * Rotation around the Y axis.
 */
export declare const m3RotationY: (angleRad: number, decimalPlaces?: number) => Matrix3;
export declare const v3RotateY: (angleRad: number, vector: Vector3, decimalPlaces?: number) => Vector3;
/**
 * Rotation around the Z axis.
 */
export declare const m3RotationZ: (angleRad: number, decimalPlaces?: number) => Matrix3;
export declare const v3RotateZ: (angleRad: number, vector: Vector3, decimalPlaces?: number) => Vector3;
export declare const m2Scale: (scaleVector: Vector2) => Matrix2;
export declare const v2Scale: (scaleVector: Vector2, vector: Vector2) => Vector2;
export declare const m3Scale: (scaleVector: Vector3) => Matrix3;
export declare const v3Scale: (scaleVector: Vector3, vector: Vector3) => Vector3;
