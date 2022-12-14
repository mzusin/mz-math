import { Matrix2, Matrix3, Matrix, Vector2, Vector3, Vector } from './types';
import { v2Normalize, v3MulScalar, v3Normalize } from './vector';
import { mMulVector, mMul } from './matrix';
import { setDecimalPlaces } from './format';

// ---------------- TRANSLATION MATRICES ----------------------

/**
 * 2D Translation matrix in homogeneous coordinates.
 */
export const m2TranslationH = (position: Vector3, decimalPlaces = Infinity): Matrix3 => {

    return [
        [1, 0, setDecimalPlaces(position[0], decimalPlaces)],
        [0, 1, setDecimalPlaces(position[1], decimalPlaces)],
        [0, 0, 1],
    ];
};

/**
 * 3D Translation matrix in homogeneous coordinates.
 */
export const m3TranslationH = (position: Vector, decimalPlaces = Infinity): Matrix => {

    return [
        [1, 0, 0, setDecimalPlaces(position[0], decimalPlaces)],
        [0, 1, 0, setDecimalPlaces(position[1], decimalPlaces)],
        [0, 0, 1, setDecimalPlaces(position[2], decimalPlaces)],
        [0, 0, 0, 1],
    ];
};

// ---------------- ROTATION MATRICES -------------------------

/**
 * Rotation of an angle about the origin.
 */
export const m2Rotation = (angleRad: number, decimalPlaces = Infinity): Matrix2 => {
    const cos = setDecimalPlaces(Math.cos(angleRad), decimalPlaces);
    const sin = setDecimalPlaces(Math.sin(angleRad), decimalPlaces);

    return [
        [cos, -sin],
        [sin, cos],
    ];
};

/**
 * Rotation of an angle about the origin in homogeneous coordinates.
 */
export const m2RotationH = (angleRad: number, decimalPlaces = Infinity): Matrix3 => {
    const cos = setDecimalPlaces(Math.cos(angleRad), decimalPlaces);
    const sin = setDecimalPlaces(Math.sin(angleRad), decimalPlaces);

    return [
        [cos, -sin, 0],
        [sin, cos, 0],
        [0, 0, 1],
    ];
};

/**
 * Rotation of an angle "angleRad" around the given point (transformOrigin) in homogeneous coordinates.
 * result_vector = TranslationMatrix(x, y) * RotationMatrix() * TranslationMatrix(-x, -y) * position_vector
 */
export const m2RotationAroundPointH = (
    angleRad: number,
    transformOrigin: Vector3,
    decimalPlaces = Infinity): Matrix3 => {

    const translation = m2TranslationH(transformOrigin, decimalPlaces);
    const rotation = m2RotationH(angleRad, decimalPlaces);
    const translationBack = m2TranslationH(v3MulScalar(transformOrigin, -1), decimalPlaces);
    const temp1 = mMul(translation, rotation);
    return mMul(temp1, translationBack) as Matrix3;
};

export const m2RotateAroundPointH = (
    angleRad: number,
    transformOrigin: Vector3,
    position: Vector3,
    decimalPlaces = Infinity): Vector3 => {

    const mat3h = m2RotationAroundPointH(angleRad, transformOrigin, decimalPlaces);
    return mMulVector(mat3h, position) as Vector3;
};

/**
 * Rotate vector around the origin by angle "angleRad".
 */
export const v2Rotate = (angleRad: number, vector: Vector2, decimalPlaces = Infinity): Vector2 => {
    const unitVector = v2Normalize(vector);
    return mMulVector(m2Rotation(angleRad, decimalPlaces), unitVector) as Vector2;
};

/**
 * Rotate vector around the origin by angle "angleRad".
 */
export const v2RotateH = (angleRad: number, vector: Vector3, decimalPlaces = Infinity): Vector3 => {
    const unitVector = v3Normalize(vector);
    return mMulVector(m2RotationH(angleRad, decimalPlaces), unitVector) as Vector3;
};

/**
 * Rotation around the X axis.
 */
export const m3RotationX = (angleRad: number, decimalPlaces = Infinity): Matrix3 => {
    const cos = setDecimalPlaces(Math.cos(angleRad), decimalPlaces);
    const sin = setDecimalPlaces(Math.sin(angleRad), decimalPlaces);

    return [
        [1, 0, 0],
        [0, cos, -sin],
        [0, sin, cos],
    ];
};

export const v3RotateX = (angleRad: number, vector: Vector3, decimalPlaces = Infinity): Vector3 => {
    const unitVector = v3Normalize(vector);
    return mMulVector(m3RotationX(angleRad, decimalPlaces), unitVector) as Vector3;
};

/**
 * Rotation around the Y axis.
 */
export const m3RotationY = (angleRad: number, decimalPlaces = Infinity): Matrix3 => {
    const cos = setDecimalPlaces(Math.cos(angleRad), decimalPlaces);
    const sin = setDecimalPlaces(Math.sin(angleRad), decimalPlaces);

    return [
        [cos, 0, sin],
        [0, 1, 0],
        [-sin, 0, cos],
    ];
};

export const v3RotateY = (angleRad: number, vector: Vector3, decimalPlaces = Infinity): Vector3 => {
    const unitVector = v3Normalize(vector);
    return mMulVector(m3RotationY(angleRad, decimalPlaces), unitVector) as Vector3;
};

/**
 * Rotation around the Z axis.
 */
export const m3RotationZ = (angleRad: number, decimalPlaces = Infinity): Matrix3 => {

    const cos = setDecimalPlaces(Math.cos(angleRad), decimalPlaces);
    const sin = setDecimalPlaces(Math.sin(angleRad), decimalPlaces);

    return [
        [cos, -sin, 0],
        [sin, cos, 0],
        [0, 0, 1],
    ];
};

export const v3RotateZ = (angleRad: number, vector: Vector3, decimalPlaces = Infinity): Vector3 => {
    const unitVector = v3Normalize(vector);
    return mMulVector(m3RotationZ(angleRad, decimalPlaces), unitVector) as Vector3;
};

// ---------------- SCALE MATRICES -------------

export const m2Scale = (scaleVector: Vector2): Matrix2 => {
    return [
        [scaleVector[0], 0],
        [0, scaleVector[1]],
    ];
};

export const v2Scale = (scaleVector: Vector2, vector: Vector2): Vector2 => {
    return mMulVector(m2Scale(scaleVector), vector) as Vector2;
};

export const m3Scale = (scaleVector: Vector3): Matrix3 => {
    return [
        [scaleVector[0], 0, 0],
        [0, scaleVector[1], 0],
        [0, 0, scaleVector[2]],
    ];
};

export const v3Scale = (scaleVector: Vector3, vector: Vector3): Vector3 => {
    return mMulVector(m3Scale(scaleVector), vector) as Vector3;
};
