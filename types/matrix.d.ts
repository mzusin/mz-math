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
 * Calculate determinant for NxN matrix.
 * Matrix should be square.

export const mDeterminant = (matrix: Matrix): number => {
    if(matrix.length === 0) return 1;

    if(matrix.length !== matrix[0].length){
        throw new Error('The matrix must be square.');
    }

    if(matrix.length === 1) return matrix[0][0];
    if(matrix.length === 2) return m2Determinant(matrix as Matrix2);
}; */
/**
 * Calculate determinant for 2x2 matrix.
 * Matrix should be square.
 */
export declare const m2Determinant: (m2: Matrix2) => number;
/**
 * Calculate determinant for 3x3 matrix.
 * Matrix should be square.

export const m3Determinant = (m3: Matrix3): number => {
    if(m3.length !== m3[0].length){
        throw new Error('The matrix must be square.');
    }
}; */
export declare const m2Adjugate: (m2: Matrix2) => Matrix2;
/**
 * Square matrix A (nxn) is invertible is there is another square matrix B (nxn) so AxB = BxA = I
 * For A (2x2) matrix, the inverse is:
 * (1 / (determinant(A))) * adj(A)
 * Singular Matrix = a square matrix that does not have a matrix inverse. A matrix is singular iff its determinant is 0.
 */
export declare const m2Inverse: (m2: Matrix2, decimalPlaces?: number) => (Matrix2 | null);
