import { Matrix2, Matrix3, Matrix4, Matrix, Vector2, Vector3, Vector4 } from '../../types';
import { v2Normalize, v3MulScalar, v3Normalize } from './vector';
import { mMulVector, mMul } from './matrix';
import { setDecimalPlaces } from '../format';

/*
Any 2D affine transformation can be decomposed
into a rotation, followed by a scaling, followed by a
shearing, and followed by a translation.
---------------------------------------------------------
Affine matrix = translation x shearing x scaling x rotation
 */

// ----------------- CSS -------------------------------------

/**
 * Matrix 2D in non-homogeneous coordinates to CSS matrix() function
 * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix
 */
export const m2ToCSS = (m: Matrix2) : string => {
    const a = m[0][0];
    const b = m[1][0];
    const c = m[0][1];
    const d = m[1][1];

    return `matrix(${ a }, ${ b }, ${ c }, ${ d }, 0, 0)`;
};

/**
 * Matrix 2D in homogeneous coordinates to CSS matrix() function
 * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix
 */
export const m2hToCSS = (m: Matrix3) : string => {
    const a = m[0][0];
    const b = m[1][0];
    const c = m[0][1];
    const d = m[1][1];
    const tx = m[0][2];
    const ty = m[1][2];

    return `matrix(${ a }, ${ b }, ${ c }, ${ d }, ${ tx }, ${ ty })`;
};

/**
 * Matrix 2D in homogeneous coordinates to CSS matrix3d() function
 * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d
 */
export const m2hToCSS3d = (m: Matrix3) : string => {
    const a = m[0][0];
    const b = m[1][0];
    const c = m[0][1];
    const d = m[1][1];
    const tx = m[0][2];
    const ty = m[1][2];

    return `matrix3d(${ a }, ${ b }, 0, 0, ${ c }, ${ d }, 0, 0, 0, 0, 1, 0, ${ tx }, ${ ty }, 0, 1)`;
};

/**
 * Matrix 3D in homogeneous coordinates to CSS matrix3d() function
 * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d
 */
export const m3hToCSS3d = (m: Matrix4) : string => {

    return `matrix3d(
        ${ m[0][0] }, ${ m[0][1] }, ${ m[0][2] }, ${ m[0][3] },
        ${ m[1][0] }, ${ m[1][1] }, ${ m[1][2] }, ${ m[1][3] },
        ${ m[2][0] }, ${ m[2][1] }, ${ m[2][2] }, ${ m[2][3] },
        ${ m[3][0] }, ${ m[3][1] }, ${ m[3][2] }, ${ m[3][3] }
    )`;
};

// ---------------- TRANSLATION MATRICES ----------------------

export const m2Translation = (position: Vector2, decimalPlaces = Infinity): Matrix2 => {

    return [
        [1, 0],
        [0, 1],
        [setDecimalPlaces(position[0], decimalPlaces), setDecimalPlaces(position[1], decimalPlaces)],
    ];
};

export const m3Translation = (position: Vector3, decimalPlaces = Infinity): Matrix3 => {

    return [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [
            setDecimalPlaces(position[0], decimalPlaces),
            setDecimalPlaces(position[1], decimalPlaces),
            setDecimalPlaces(position[2], decimalPlaces)
        ],
    ];
};

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
export const m3TranslationH = (position: Vector4, decimalPlaces = Infinity): Matrix4 => {

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
export const m2Rotation = (angleRad: number, isClockwise = true, decimalPlaces = Infinity): Matrix2 => {
    const cos = setDecimalPlaces(Math.cos(angleRad), decimalPlaces);
    const sin = setDecimalPlaces(Math.sin(angleRad), decimalPlaces);

    return isClockwise ? [
        [cos, -sin],
        [sin, cos],
    ] :
    [
        [cos, sin],
        [-sin, cos],
    ];
};

/**
 * Rotation of an angle about the origin in homogeneous coordinates (clockwise).
 */
export const m2RotationH = (angleRad: number, isClockwise = true, decimalPlaces = Infinity): Matrix3 => {
    const cos = setDecimalPlaces(Math.cos(angleRad), decimalPlaces);
    const sin = setDecimalPlaces(Math.sin(angleRad), decimalPlaces);

    return isClockwise ? [
        [cos, -sin, 0],
        [sin, cos, 0],
        [0, 0, 1],
    ]:
    [
        [cos, sin, 0],
        [-sin, cos, 0],
        [0, 0, 1],
    ];
};

/**
 * Rotation of an angle "angleRad" around the given point (transformOrigin) in homogeneous coordinates (clockwise).
 * result_vector = TranslationMatrix(x, y) * RotationMatrix() * TranslationMatrix(-x, -y) * position_vector
 */
export const m2RotationAroundPointH = (
    angleRad: number,
    transformOrigin: Vector3,
    isClockwise = true,
    decimalPlaces = Infinity): Matrix3 => {

    const translation = m2TranslationH(transformOrigin, decimalPlaces);
    const rotation = m2RotationH(angleRad, isClockwise, decimalPlaces);
    const translationBack = m2TranslationH(v3MulScalar(transformOrigin, -1), decimalPlaces);
    const temp1 = mMul(translation, rotation);
    return mMul(temp1, translationBack) as Matrix3;
};

export const m2RotateAroundPointH = (
    angleRad: number,
    transformOrigin: Vector3,
    position: Vector3,
    isClockwise = true,
    decimalPlaces = Infinity): Vector3 => {

    const mat3h = m2RotationAroundPointH(angleRad, transformOrigin, isClockwise, decimalPlaces);
    return mMulVector(mat3h, position) as Vector3;
};

/**
 * Rotate vector around the origin by angle "angleRad" (clockwise).
 */
export const v2Rotate = (angleRad: number, vector: Vector2, isClockwise = true, decimalPlaces = Infinity): Vector2 => {
    const unitVector = v2Normalize(vector);
    return mMulVector(m2Rotation(angleRad, isClockwise, decimalPlaces), unitVector) as Vector2;
};

/**
 * Rotate vector around the origin by angle "angleRad" (clockwise).
 */
export const v2RotateH = (angleRad: number, vector: Vector3, isClockwise = true, decimalPlaces = Infinity): Vector3 => {
    const unitVector = v3Normalize(vector);
    return mMulVector(m2RotationH(angleRad, isClockwise, decimalPlaces), unitVector) as Vector3;
};

/**
 * Rotation around the X axis (clockwise).
 */
export const m3RotationX = (angleRad: number, isClockwise = true, decimalPlaces = Infinity): Matrix3 => {
    const cos = setDecimalPlaces(Math.cos(angleRad), decimalPlaces);
    const sin = setDecimalPlaces(Math.sin(angleRad), decimalPlaces);

    return isClockwise ? [
        [1, 0, 0],
        [0, cos, -sin],
        [0, sin, cos],
    ] :
    [
        [1, 0, 0],
        [0, cos, sin],
        [0, -sin, cos],
    ];
};

/**
 * Rotation around the X axis (clockwise) - in homogeneous coordinates
 */
export const m3RotationXH = (angleRad: number, isClockwise = true, decimalPlaces = Infinity): Matrix4 => {
    const cos = setDecimalPlaces(Math.cos(angleRad), decimalPlaces);
    const sin = setDecimalPlaces(Math.sin(angleRad), decimalPlaces);

    return isClockwise ? [
            [1, 0, 0, 0],
            [0, cos, -sin, 0],
            [0, sin, cos, 0],
            [0, 0, 0, 1],
        ] :
        [
            [1, 0, 0, 0],
            [0, cos, sin, 0],
            [0, -sin, cos, 0],
            [0, 0, 0, 1],
        ];
};

export const v3RotateX = (angleRad: number, vector: Vector3, isClockwise = true, decimalPlaces = Infinity): Vector3 => {
    const unitVector = v3Normalize(vector);
    return mMulVector(m3RotationX(angleRad, isClockwise, decimalPlaces), unitVector) as Vector3;
};

/**
 * Rotation around the Y axis (clockwise).
 */
export const m3RotationY = (angleRad: number, isClockwise = true, decimalPlaces = Infinity): Matrix3 => {
    const cos = setDecimalPlaces(Math.cos(angleRad), decimalPlaces);
    const sin = setDecimalPlaces(Math.sin(angleRad), decimalPlaces);

    return isClockwise ? [
        [cos, 0, sin],
        [0, 1, 0],
        [-sin, 0, cos],
    ] :
    [
        [cos, 0, -sin],
        [0, 1, 0],
        [sin, 0, cos],
    ];
};

/**
 * Rotation around the Y axis (clockwise) - in homogeneous coordinates
 */
export const m3RotationYH = (angleRad: number, isClockwise = true, decimalPlaces = Infinity): Matrix4 => {
    const cos = setDecimalPlaces(Math.cos(angleRad), decimalPlaces);
    const sin = setDecimalPlaces(Math.sin(angleRad), decimalPlaces);

    return isClockwise ? [
            [cos, 0, sin, 0],
            [0, 1, 0, 0],
            [-sin, 0, cos, 0],
            [0, 0, 0, 1],
        ] :
        [
            [cos, 0, -sin, 0],
            [0, 1, 0, 0],
            [sin, 0, cos, 0],
            [0, 0, 0, 1],
        ];
};

export const v3RotateY = (angleRad: number, vector: Vector3, isClockwise = true, decimalPlaces = Infinity): Vector3 => {
    const unitVector = v3Normalize(vector);
    return mMulVector(m3RotationY(angleRad, isClockwise, decimalPlaces), unitVector) as Vector3;
};

/**
 * Rotation around the Z axis (clockwise).
 */
export const m3RotationZ = (angleRad: number, isClockwise = true, decimalPlaces = Infinity): Matrix3 => {

    const cos = setDecimalPlaces(Math.cos(angleRad), decimalPlaces);
    const sin = setDecimalPlaces(Math.sin(angleRad), decimalPlaces);

    return isClockwise ? [
        [cos, -sin, 0],
        [sin, cos, 0],
        [0, 0, 1],
    ] : [
        [cos, sin, 0],
        [-sin, cos, 0],
        [0, 0, 1],
    ];
};

/**
 * Rotation around the Z axis (clockwise)- in homogeneous coordinates
 */
export const m3RotationZH = (angleRad: number, isClockwise = true, decimalPlaces = Infinity): Matrix4 => {

    const cos = setDecimalPlaces(Math.cos(angleRad), decimalPlaces);
    const sin = setDecimalPlaces(Math.sin(angleRad), decimalPlaces);

    return isClockwise ? [
        [cos, -sin, 0, 0],
        [sin, cos, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
    ] : [
        [cos, sin, 0, 0],
        [-sin, cos, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
    ];
};

export const v3RotateZ = (angleRad: number, vector: Vector3, isClockwise = true, decimalPlaces = Infinity): Vector3 => {
    const unitVector = v3Normalize(vector);
    return mMulVector(m3RotationZ(angleRad, isClockwise, decimalPlaces), unitVector) as Vector3;
};

// ---------------- SCALE MATRICES -------------

/**
 * Get matrix for arbitrary scaling pivot point.
 * result_vector = TranslationMatrix(x, y) * ScaleMatrix() * TranslationMatrix(-x, -y) * scale_vector
 */
export const m2ScaleAtPointHMatrix = (
    scaleVector: Vector3,
    transformOrigin: Vector3,
    decimalPlaces = Infinity): Matrix3 => {

    const translation = m2TranslationH(transformOrigin, decimalPlaces);
    const scale = m2ScaleH(scaleVector);
    const translationBack = m2TranslationH(v3MulScalar(transformOrigin, -1), decimalPlaces);
    const temp1 = mMul(translation, scale);
    return mMul(temp1, translationBack) as Matrix3;
};

export const m2ScaleAtPointH = (
    scaleVector: Vector3,
    transformOrigin: Vector3,
    point: Vector3,
    decimalPlaces = Infinity): Vector3 => {

    const mat3h = m2ScaleAtPointHMatrix(scaleVector, transformOrigin, decimalPlaces);
    return mMulVector(mat3h, point) as Vector3;
};

export const m2Scale = (scaleVector: Vector2): Matrix2 => {
    return [
        [scaleVector[0], 0],
        [0, scaleVector[1]],
    ];
};

export const v2Scale = (scaleVector: Vector2, vector: Vector2): Vector2 => {
    return mMulVector(m2Scale(scaleVector), vector) as Vector2;
};

/**
 * homogeneous coordinates
 */
export const m2ScaleH = (scaleVector: Vector3): Matrix3 => {
    return [
        [scaleVector[0], 0, 0],
        [0, scaleVector[1], 0],
        [0, 0, 1],
    ];
};

export const m3Scale = (scaleVector: Vector3): Matrix3 => {
    return [
        [scaleVector[0], 0, 0],
        [0, scaleVector[1], 0],
        [0, 0, scaleVector[2]],
    ];
};

export const m3ScaleH = (scaleVector: Vector4): Matrix4 => {
    return [
        [scaleVector[0], 0, 0, 0],
        [0, scaleVector[1], 0, 0],
        [0, 0, scaleVector[2], 0],
        [0, 0, 0, 1]
    ];
};

export const v3Scale = (scaleVector: Vector3, vector: Vector3): Vector3 => {
    return mMulVector(m3Scale(scaleVector), vector) as Vector3;
};

/**
 * Stretch, parallel to the x-axis.
 */
export const m2ScaleX = (scale: number): Matrix2 => {
    return [
        [scale, 0],
        [0, 1],
    ];
};

/**
 * Stretch, parallel to the x-axis - homogeneous coordinates
 */
export const m2ScaleXH = (scale: number): Matrix3 => {
    return [
        [scale, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ];
};

/**
 * Stretch in x-direction
 */
export const m3ScaleX = (scale: number): Matrix3 => {
    return [
        [scale, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ];
};

/**
 * Stretch in x-direction
 */
export const m3ScaleXH = (scale: number): Matrix4 => {
    return [
        [scale, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
    ];
};

/**
 * Stretch in y-direction
 */
export const m3ScaleY = (scale: number): Matrix3 => {
    return [
        [1, 0, 0],
        [0, scale, 0],
        [0, 0, 1],
    ];
};

/**
 * Stretch in y-direction
 */
export const m3ScaleYH = (scale: number): Matrix => {
    return [
        [1, 0, 0, 0],
        [0, scale, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
    ];
};

/**
 * Stretch in z-direction
 */
export const m3ScaleZ = (scale: number): Matrix3 => {
    return [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, scale],
    ];
};

/**
 * Stretch in z-direction
 */
export const m3ScaleZH = (scale: number): Matrix4 => {
    return [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, scale, 0],
        [0, 0, 0, 1],
    ];
};

/**
 * Stretch, parallel to the y-axis.
 */
export const m2ScaleY = (scale: number): Matrix2 => {
    return [
        [1, 0],
        [0, scale],
    ];
};

/**
 * Stretch, parallel to the y-axis - homogeneous coordinates
 */
export const m2ScaleYH = (scale: number): Matrix3 => {
    return [
        [1, 0, 0],
        [0, scale, 0],
        [0, 0, 1],
    ];
};

// ---------------- REFLECTION MATRICES -------------------------

/**
 * Reflection about the origin.
 */
export const m2ReflectionOrigin = (): Matrix2 => {

    return [
        [-1, 0],
        [0, -1],
    ];
};

/**
 * Reflection about the origin.
 */
export const m2ReflectionOriginH = (): Matrix3 => {

    return [
        [-1, 0, 0],
        [0, -1, 0],
        [0, 0, 1],
    ];
};

/**
 * Reflection about the origin in non-homogeneous coordinates
 */
export const m3ReflectionOrigin = (): Matrix3 => {

    return [
        [-1, 0, 0],
        [0, -1, 0],
        [0, 0, -1],
    ];
};

/**
 * Reflection about the origin in homogeneous coordinates
 */
export const m3ReflectionOriginH = (): Matrix4 => {

    return [
        [-1, 0, 0, 0],
        [0, -1, 0, 0],
        [0, 0, -1, 0],
        [0, 0, 0, 1],
    ];
};

/**
 * Reflection about y=-x
 */
export const m2ReflectionYmX = (): Matrix2 => {

    return [
        [0, -1],
        [-1, 0],
    ];
};

/**
 * Reflection in the x-axis.
 */
export const m2ReflectionX = (): Matrix2 => {

    return [
        [1, 0],
        [0, -1],
    ];
};

/**
 * Reflection in the x-axis.
 */
export const m2ReflectionXH = (): Matrix3 => {

    return [
        [1, 0, 0],
        [0, -1, 0],
        [0, 0, 1],
    ];
};

/**
 * Reflection in the y-axis.
 */
export const m2ReflectionY = (): Matrix2 => {

    return [
        [-1, 0],
        [0, 1],
    ];
};

export const m2ReflectionYH = (): Matrix3 => {

    return [
        [-1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ];
};

/**
 * Reflection relative to YZ plane in non-homogeneous coordinates
 */
export const m3ReflectionYZ = (): Matrix3 => {

    return [
        [-1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ];
};

/**
 * Reflection relative to YZ plane in homogeneous coordinates
 */
export const m3ReflectionYZH = (): Matrix4 => {

    return [
        [-1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
    ];
};

/**
 * Reflection relative to XZ plane in non-homogeneous coordinates
 */
export const m3ReflectionXZ = (): Matrix3 => {

    return [
        [1, 0, 0],
        [0, -1, 0],
        [0, 0, 1],
    ];
};

/**
 * Reflection relative to XZ plane in homogeneous coordinates
 */
export const m3ReflectionXZH = (): Matrix4 => {

    return [
        [1, 0, 0, 0],
        [0, -1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
    ];
};

/**
 * Reflection relative to XY plane in non-homogeneous coordinates
 */
export const m3ReflectionXY = (): Matrix3 => {

    return [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, -1],
    ];
};

/**
 * Reflection relative to XY plane in homogeneous coordinates
 */
export const m3ReflectionXYH = (): Matrix4 => {

    return [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, -1, 0],
        [0, 0, 0, 1],
    ];
};

// ---------------- SHEARING MATRICES -------------------------


/**
 * Shearing in y-axis, with x-axis fixed with (0,1) moving to (factor, 1)
 */
export const m2ShearingY = (factor: number): Matrix2 => {

    return [
        [1, factor],
        [0, 1],
    ];
};

/**
 * Shearing in x-axis, with y-axis fixed with (1,0) moving to (1, factor)
 */
export const m2ShearingX = (factor: number): Matrix2 => {

    return [
        [1, 0],
        [factor, 1],
    ];
};