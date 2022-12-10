import { Matrix2, Matrix3, Matrix, Vector, Vector2, Vector3 } from './types';
import { vMulScalar, vSum, vSub, vDotProduct, vN, vEqual, v2Normalize, v3Normalize } from './vector';

// --------------- SUM ----------------------

export const mSum = (matrix1: Matrix, matrix2: Matrix, decimalPlaces = Infinity): Matrix => {
    const matrix: Matrix = [];

    for(let i=0; i<matrix1.length; i++){
        matrix.push(vSum(matrix1[i], matrix2[i], decimalPlaces));
    }

    return matrix;
};

export const m2Sum = (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces = Infinity): Matrix2 => {
    return mSum(matrix1, matrix2, decimalPlaces) as Matrix2;
};

export const m3Sum = (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces = Infinity): Matrix3 => {
    return mSum(matrix1, matrix2, decimalPlaces) as Matrix3;
};

// --------------- SUB ----------------------

export const mSub = (matrix1: Matrix, matrix2: Matrix, decimalPlaces = Infinity): Matrix => {
    const matrix: Matrix = [];

    for(let i=0; i<matrix1.length; i++){
        matrix.push(vSub(matrix1[i], matrix2[i], decimalPlaces));
    }

    return matrix;
};

export const m2Sub = (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces = Infinity): Matrix2 => {
    return mSub(matrix1, matrix2, decimalPlaces) as Matrix2;
};

export const m3Sub = (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces = Infinity): Matrix3 => {
    return mSub(matrix1, matrix2, decimalPlaces) as Matrix3;
};

// --------------- MUL SCALAR ----------------------

export const mMulScalar = (m: Matrix, scalar: number, decimalPlaces = Infinity): Matrix => {
    const matrix: Matrix = [];

    for(const v of m){
        matrix.push(vMulScalar(v, scalar, decimalPlaces));
    }

    return matrix;
};

export const m2MulScalar = (m2: Matrix2, scalar: number, decimalPlaces = Infinity): Matrix2 => {
    return mMulScalar(m2, scalar, decimalPlaces) as Matrix2;
};

export const m3MulScalar = (m3: Matrix3, scalar: number, decimalPlaces = Infinity): Matrix3 => {
    return mMulScalar(m3, scalar, decimalPlaces) as Matrix3;
};

// --------------- MUL SCALAR ----------------------

export const mTranspose = (m: Matrix): Matrix => {

    const vectorsCount = m.length;
    if(vectorsCount <= 0) return m;

    const vectorLength = m[0].length;
    if(vectorLength <= 0) return m;

    const matrix: Matrix = [];
    for(let i=0; i<vectorLength; i++){
        matrix.push([]);
    }

    for(let i=0; i<vectorsCount; i++){
        for(let j=0; j<vectorLength; j++){
            matrix[j].push(m[i][j]);
        }
    }

    return matrix;
};

export const m2Transpose = (m2: Matrix2): Matrix => {
    return mTranspose(m2);
};

export const m3Transpose = (m3: Matrix3): Matrix => {
    return mTranspose(m3);
};

// ----------------- RESET ----------------------

export const mReset = (m: Matrix, defaultValue = 0): Matrix => {

    if(m.length <= 0) return [];

    const res: Matrix = [];

    for(let i=0; i<m.length; i++){
        const size = m[i].length;

        const vector: Vector = [];
        for(let j=0; j<size; j++){
            vector.push(defaultValue);
        }

        res.push(vector);
    }

    return res;
};

export const m2Reset = (m2: Matrix2, defaultValue = 0): Matrix2 => {
    return mReset(m2, defaultValue) as Matrix2;
};

export const m3Reset = (m3: Matrix3, defaultValue = 0): Matrix3 => {
    return mReset(m3, defaultValue) as Matrix3;
};

// --------------- MATRIX INIT HELPERS -----------------

export const m2x2 = (defaultValue = 0): Matrix2 => {
    return [
        [defaultValue, defaultValue],
        [defaultValue, defaultValue],
    ];
};

export const m3x3 = (defaultValue = 0): Matrix3 => {
    return [
        [defaultValue, defaultValue, defaultValue],
        [defaultValue, defaultValue, defaultValue],
        [defaultValue, defaultValue, defaultValue],
    ];
};

export const mNxM = (N: number, M: number, defaultValue = 0): Matrix => {
    if(N <= 0 || M <= 0){
        throw new Error('M and N must be positive numbers.');
    }

    const matrix: Matrix = [];

    for(let i=0; i<N; i++){
        matrix.push(vN(M, defaultValue));
    }

    return matrix;
};

export const identity2 = (): Matrix2 => {
    return [
        [1, 0],
        [0, 1],
    ];
};

export const identity3 = (): Matrix3 => {
    return [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ];
};

/**
 * Identity Matrix (I).
 * M x I = I x M = M for any matrix M.
 */
export const identityN = (N: number): Matrix => {
    if(N < 0){
        throw new Error('N must be a non-negative number.');
    }

    if(N === 0) return [];

    const matrix: Matrix = [];

    for(let i=0; i<N; i++){
        const vector: Vector = [];
        for(let j=0; j<N; j++){
            vector.push(i === j ? 1 : 0);
        }
        matrix.push(vector);
    }

    return matrix;
};

// --------------- MULTIPLICATION ----------------------

/**
 * Matrix Multiplication.
 * - Matrix multiplication is not commutative: M1 x M2 !== M2 x M1
 * - Matrix multiplication is associative: A x (B x C) = (A x B) x C.
 * - A x (B + C) = A x B + A x C
 */
export const mMul = (matrix1: Matrix, matrix2: Matrix, decimalPlaces = Infinity): Matrix => {

    const matrix: Matrix = [];
    for(let i=0; i<matrix1.length; i++){
        matrix.push([]);
    }

    const transposed = mTranspose(matrix2);

    if(matrix.length !== transposed.length){
        throw new Error('The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.');
    }

    for(let i=0; i<matrix1.length; i++){
        const vector1 = matrix1[i];

        for(let j=0; j<transposed.length; j++){
            const vector2 = transposed[j];
            const product = vDotProduct(vector1, vector2, decimalPlaces);
            matrix[i].push(product);
        }
    }

    return matrix;
};

export const mMulVector = (matrix: Matrix, vector: Vector, decimalPlaces = Infinity): Vector => {

    if(matrix.length < 0) return [];

    if(matrix[0].length !== vector.length){
        throw new Error('The number of columns in the matrix must be equal to the length of the vector.');
    }

    const res: Vector = [];

    for(let i=0; i<matrix.length; i++){
        res[i] = vDotProduct(matrix[i], vector, decimalPlaces);
    }

    return res;
};

// --------------- EQUALITY -----------------------------

export const mEqual = (matrix1: Matrix, matrix2: Matrix): boolean => {
    if(matrix1.length !== matrix2.length) return false;

    for(let i=0; i<matrix1.length; i++){
        if(!vEqual(matrix1[i], matrix2[i])) return false;
    }

    return true;
};

// ---------------- TRANSFORMATION MATRICES -------------

export const m2Rotation = (angleRad: number): Matrix2 => {
    return [
      [Math.cos(angleRad), -Math.sin(angleRad)],
      [Math.sin(angleRad), Math.cos(angleRad)],
    ];
};

export const v2Rotate = (angleRad: number, vector: Vector2): Vector2 => {
    const unitVector = v2Normalize(vector);
    return mMulVector(m2Rotation(angleRad), unitVector) as Vector2;
};

/**
 * Rotation around the X axis.
 */
export const m3RotationX = (angleRad: number): Matrix3 => {
    return [
      [1, 0, 0],
      [0, Math.cos(angleRad), -Math.sin(angleRad)],
      [0, Math.sin(angleRad), Math.cos(angleRad)],
    ];
};

export const v3RotateX = (angleRad: number, vector: Vector3): Vector3 => {
    const unitVector = v3Normalize(vector);
    return mMulVector(m3RotationX(angleRad), unitVector) as Vector3;
};

/**
 * Rotation around the Y axis.
 */
export const m3RotationY = (angleRad: number): Matrix3 => {
    return [
        [Math.cos(angleRad), 0, Math.sin(angleRad)],
        [0, 1, 0],
        [-Math.sin(angleRad), 0, Math.cos(angleRad)],
    ];
};

export const v3RotateY = (angleRad: number, vector: Vector3): Vector3 => {
    const unitVector = v3Normalize(vector);
    return mMulVector(m3RotationY(angleRad), unitVector) as Vector3;
};

/**
 * Rotation around the Z axis.
 */
export const m3RotationZ = (angleRad: number): Matrix3 => {
    return [
        [Math.cos(angleRad), -Math.sin(angleRad), 0],
        [Math.sin(angleRad), Math.cos(angleRad), 0],
        [0, 0, 1],
    ];
};

export const v3RotateZ = (angleRad: number, vector: Vector3): Vector3 => {
    const unitVector = v3Normalize(vector);
    return mMulVector(m3RotationZ(angleRad), unitVector) as Vector3;
};