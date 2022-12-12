import { Matrix2, Matrix3, Matrix, Vector, Vector2, Vector3 } from './types';
export declare const mSum: (matrix1: Matrix, matrix2: Matrix, decimalPlaces?: number) => Matrix;
export declare const m2Sum: (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces?: number) => Matrix2;
export declare const m3Sum: (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces?: number) => Matrix3;
export declare const mSub: (matrix1: Matrix, matrix2: Matrix, decimalPlaces?: number) => Matrix;
export declare const m2Sub: (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces?: number) => Matrix2;
export declare const m3Sub: (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces?: number) => Matrix3;
export declare const mMulScalar: (m: Matrix, scalar: number, decimalPlaces?: number) => Matrix;
export declare const m2MulScalar: (m2: Matrix2, scalar: number, decimalPlaces?: number) => Matrix2;
export declare const m3MulScalar: (m3: Matrix3, scalar: number, decimalPlaces?: number) => Matrix3;
export declare const mDivideScalar: (m: Matrix, scalar: number, decimalPlaces?: number) => Matrix;
export declare const m2DivideScalar: (m2: Matrix2, scalar: number, decimalPlaces?: number) => Matrix2;
export declare const m3DivideScalar: (m3: Matrix3, scalar: number, decimalPlaces?: number) => Matrix3;
export declare const mTranspose: (m: Matrix) => Matrix;
export declare const m2Transpose: (m2: Matrix2) => Matrix;
export declare const m3Transpose: (m3: Matrix3) => Matrix;
export declare const mReset: (m: Matrix, defaultValue?: number) => Matrix;
export declare const m2Reset: (m2: Matrix2, defaultValue?: number) => Matrix2;
export declare const m3Reset: (m3: Matrix3, defaultValue?: number) => Matrix3;
export declare const m2x2: (defaultValue?: number) => Matrix2;
export declare const m3x3: (defaultValue?: number) => Matrix3;
export declare const mNxM: (N: number, M: number, defaultValue?: number) => Matrix;
export declare const identity2: () => Matrix2;
export declare const identity3: () => Matrix3;
/**
 * Identity Matrix (I).
 * M x I = I x M = M for any matrix M.
 */
export declare const identityN: (N: number) => Matrix;
export declare const mDeepCopy: (m: Matrix) => Matrix;
export declare const m2DeepCopy: (m2: Matrix2) => Matrix2;
export declare const m3DeepCopy: (m3: Matrix3) => Matrix3;
export declare const mAppendRow: (m: Matrix, row: Vector) => Matrix;
export declare const m2AppendRow: (m2: Matrix2, row: Vector2) => Matrix2;
export declare const m3AppendRow: (m3: Matrix3, row: Vector3) => Matrix3;
export declare const mPrependRow: (m: Matrix, row: Vector) => Matrix;
export declare const m2PrependRow: (m2: Matrix2, row: Vector2) => Matrix2;
export declare const m3PrependRow: (m3: Matrix3, row: Vector3) => Matrix3;
/**
 * Matrix Multiplication.
 * - Matrix multiplication is not commutative: M1 x M2 !== M2 x M1
 * - Matrix multiplication is associative: A x (B x C) = (A x B) x C.
 * - A x (B + C) = A x B + A x C
 */
export declare const mMul: (matrix1: Matrix, matrix2: Matrix, decimalPlaces?: number) => Matrix;
export declare const mMulVector: (matrix: Matrix, vector: Vector, decimalPlaces?: number) => Vector;
export declare const mEqual: (matrix1: Matrix, matrix2: Matrix) => boolean;
export declare const m2Rotation: (angleRad: number) => Matrix2;
export declare const v2Rotate: (angleRad: number, vector: Vector2) => Vector2;
/**
 * Rotation around the X axis.
 */
export declare const m3RotationX: (angleRad: number) => Matrix3;
export declare const v3RotateX: (angleRad: number, vector: Vector3) => Vector3;
/**
 * Rotation around the Y axis.
 */
export declare const m3RotationY: (angleRad: number) => Matrix3;
export declare const v3RotateY: (angleRad: number, vector: Vector3) => Vector3;
/**
 * Rotation around the Z axis.
 */
export declare const m3RotationZ: (angleRad: number) => Matrix3;
export declare const v3RotateZ: (angleRad: number, vector: Vector3) => Vector3;
export declare const m2Scale: (scaleVector: Vector2) => Matrix2;
export declare const v2Scale: (scaleVector: Vector2, vector: Vector2) => Vector2;
export declare const m3Scale: (scaleVector: Vector3) => Matrix3;
export declare const v3Scale: (scaleVector: Vector3, vector: Vector3) => Vector3;
/**
 * Calculate matrix minor.
 */
export declare const mMinor: (m: Matrix, row: number, col: number) => number;
/**
 * Calculate determinant for NxN matrix.
 * Matrix should be square.
 */
export declare const mDeterminant: (matrix: Matrix) => number;
/**
 * Calculate determinant for 2x2 matrix.
 * Matrix should be square.
 */
export declare const m2Determinant: (m2: Matrix2) => number;
/**
 * Calculate determinant for 3x3 matrix.
 * Matrix should be square.
 */
export declare const m3Determinant: (m3: Matrix3) => number;
export declare const m2Adjugate: (m2: Matrix2) => Matrix2 | null;
export declare const m3Adjugate: (m3: Matrix3) => Matrix3 | null;
/**
 * Adjugate is a transpose of a cofactor matrix
 */
export declare const mAdjugate: (m: Matrix) => Matrix | null;
/**
 * Square matrix A (nxn) is invertible is there is another square matrix B (nxn) so AxB = BxA = I
 * For A (2x2) matrix, the inverse is:
 * (1 / (determinant(A))) * adj(A)
 * Singular Matrix = a square matrix that does not have a matrix inverse. A matrix is singular iff its determinant is 0.
 */
export declare const m2Inverse: (m2: Matrix2, decimalPlaces?: number) => (Matrix2 | null);
export declare const m3Inverse: (m3: Matrix3, decimalPlaces?: number) => (Matrix3 | null);
export declare const mInverse: (m: Matrix, decimalPlaces?: number) => (Matrix | null);
