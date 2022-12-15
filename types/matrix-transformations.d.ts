import { Matrix2, Matrix3, Matrix4, Matrix, Vector2, Vector3, Vector4 } from './types';
/**
 * Matrix 2D in non-homogeneous coordinates to CSS matrix() function
 * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix
 */
export declare const m2ToCSS: (m: Matrix2) => string;
/**
 * Matrix 2D in homogeneous coordinates to CSS matrix() function
 * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix
 */
export declare const m2hToCSS: (m: Matrix3) => string;
/**
 * Matrix 2D in homogeneous coordinates to CSS matrix3d() function
 * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d
 */
export declare const m2hToCSS3d: (m: Matrix3) => string;
export declare const m2Translation: (position: Vector2, decimalPlaces?: number) => Matrix2;
export declare const m3Translation: (position: Vector3, decimalPlaces?: number) => Matrix3;
/**
 * 2D Translation matrix in homogeneous coordinates.
 */
export declare const m2TranslationH: (position: Vector3, decimalPlaces?: number) => Matrix3;
/**
 * 3D Translation matrix in homogeneous coordinates.
 */
export declare const m3TranslationH: (position: Vector4, decimalPlaces?: number) => Matrix4;
/**
 * Rotation of an angle about the origin.
 */
export declare const m2Rotation: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix2;
/**
 * Rotation of an angle about the origin in homogeneous coordinates (clockwise).
 */
export declare const m2RotationH: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix3;
/**
 * Rotation of an angle "angleRad" around the given point (transformOrigin) in homogeneous coordinates (clockwise).
 * result_vector = TranslationMatrix(x, y) * RotationMatrix() * TranslationMatrix(-x, -y) * position_vector
 */
export declare const m2RotationAroundPointH: (angleRad: number, transformOrigin: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Matrix3;
export declare const m2RotateAroundPointH: (angleRad: number, transformOrigin: Vector3, position: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Vector3;
/**
 * Rotate vector around the origin by angle "angleRad" (clockwise).
 */
export declare const v2Rotate: (angleRad: number, vector: Vector2, isClockwise?: boolean, decimalPlaces?: number) => Vector2;
/**
 * Rotate vector around the origin by angle "angleRad" (clockwise).
 */
export declare const v2RotateH: (angleRad: number, vector: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Vector3;
/**
 * Rotation around the X axis (clockwise).
 */
export declare const m3RotationX: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix3;
/**
 * Rotation around the X axis (clockwise) - in homogeneous coordinates
 */
export declare const m3RotationXH: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix4;
export declare const v3RotateX: (angleRad: number, vector: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Vector3;
/**
 * Rotation around the Y axis (clockwise).
 */
export declare const m3RotationY: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix3;
/**
 * Rotation around the Y axis (clockwise) - in homogeneous coordinates
 */
export declare const m3RotationYH: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix4;
export declare const v3RotateY: (angleRad: number, vector: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Vector3;
/**
 * Rotation around the Z axis (clockwise).
 */
export declare const m3RotationZ: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix3;
/**
 * Rotation around the Z axis (clockwise)- in homogeneous coordinates
 */
export declare const m3RotationZH: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix4;
export declare const v3RotateZ: (angleRad: number, vector: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Vector3;
/**
 * Get matrix for arbitrary scaling pivot point.
 * result_vector = TranslationMatrix(x, y) * ScaleMatrix() * TranslationMatrix(-x, -y) * scale_vector
 */
export declare const m2ScaleAtPointHMatrix: (scaleVector: Vector3, transformOrigin: Vector3, decimalPlaces?: number) => Matrix3;
export declare const m2ScaleAtPointH: (scaleVector: Vector3, transformOrigin: Vector3, point: Vector3, decimalPlaces?: number) => Vector3;
export declare const m2Scale: (scaleVector: Vector2) => Matrix2;
export declare const v2Scale: (scaleVector: Vector2, vector: Vector2) => Vector2;
/**
 * homogeneous coordinates
 */
export declare const m2ScaleH: (scaleVector: Vector3) => Matrix3;
export declare const m3Scale: (scaleVector: Vector3) => Matrix3;
export declare const m3ScaleH: (scaleVector: Vector4) => Matrix4;
export declare const v3Scale: (scaleVector: Vector3, vector: Vector3) => Vector3;
/**
 * Stretch, parallel to the x-axis.
 */
export declare const m2ScaleX: (scale: number) => Matrix2;
/**
 * Stretch, parallel to the x-axis - homogeneous coordinates
 */
export declare const m2ScaleXH: (scale: number) => Matrix3;
/**
 * Stretch in x-direction
 */
export declare const m3ScaleX: (scale: number) => Matrix3;
/**
 * Stretch in x-direction
 */
export declare const m3ScaleXH: (scale: number) => Matrix4;
/**
 * Stretch in y-direction
 */
export declare const m3ScaleY: (scale: number) => Matrix3;
/**
 * Stretch in y-direction
 */
export declare const m3ScaleYH: (scale: number) => Matrix;
/**
 * Stretch in z-direction
 */
export declare const m3ScaleZ: (scale: number) => Matrix3;
/**
 * Stretch in z-direction
 */
export declare const m3ScaleZH: (scale: number) => Matrix4;
/**
 * Stretch, parallel to the y-axis.
 */
export declare const m2ScaleY: (scale: number) => Matrix2;
/**
 * Stretch, parallel to the y-axis - homogeneous coordinates
 */
export declare const m2ScaleYH: (scale: number) => Matrix3;
/**
 * Reflection about the origin.
 */
export declare const m2ReflectionOrigin: () => Matrix2;
/**
 * Reflection about the origin.
 */
export declare const m2ReflectionOriginH: () => Matrix3;
/**
 * Reflection about the origin in non-homogeneous coordinates
 */
export declare const m3ReflectionOrigin: () => Matrix3;
/**
 * Reflection about the origin in homogeneous coordinates
 */
export declare const m3ReflectionOriginH: () => Matrix4;
/**
 * Reflection about y=-x
 */
export declare const m2ReflectionYmX: () => Matrix2;
/**
 * Reflection in the x-axis.
 */
export declare const m2ReflectionX: () => Matrix2;
/**
 * Reflection in the x-axis.
 */
export declare const m2ReflectionXH: () => Matrix3;
/**
 * Reflection in the y-axis.
 */
export declare const m2ReflectionY: () => Matrix2;
export declare const m2ReflectionYH: () => Matrix3;
/**
 * Reflection relative to YZ plane in non-homogeneous coordinates
 */
export declare const m3ReflectionYZ: () => Matrix3;
/**
 * Reflection relative to YZ plane in homogeneous coordinates
 */
export declare const m3ReflectionYZH: () => Matrix4;
/**
 * Reflection relative to XZ plane in non-homogeneous coordinates
 */
export declare const m3ReflectionXZ: () => Matrix3;
/**
 * Reflection relative to XZ plane in homogeneous coordinates
 */
export declare const m3ReflectionXZH: () => Matrix4;
/**
 * Reflection relative to XY plane in non-homogeneous coordinates
 */
export declare const m3ReflectionXY: () => Matrix3;
/**
 * Reflection relative to XY plane in homogeneous coordinates
 */
export declare const m3ReflectionXYH: () => Matrix4;
/**
 * Shearing in y-axis, with x-axis fixed with (0,1) moving to (factor, 1)
 */
export declare const m2ShearingY: (factor: number) => Matrix2;
/**
 * Shearing in x-axis, with y-axis fixed with (1,0) moving to (1, factor)
 */
export declare const m2ShearingX: (factor: number) => Matrix2;
