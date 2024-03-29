import { Matrix2, Matrix3, Matrix4, Matrix, Vector, Vector2, Vector3 } from '../../types';
import { vMulScalar, vSum, vSub, vDotProduct, vN, vEqual, vDivideScalar } from './vector';

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

// --------------- DIVIDE SCALAR ----------------------

export const mDivideScalar = (m: Matrix, scalar: number, decimalPlaces = Infinity): Matrix => {
    if(scalar === 0){
        throw new Error('Division by zero error.');
    }

    const matrix: Matrix = [];

    for(const v of m){
        matrix.push(vDivideScalar(v, scalar, decimalPlaces));
    }

    return matrix;
};

export const m2DivideScalar = (m2: Matrix2, scalar: number, decimalPlaces = Infinity): Matrix2 => {
    return mDivideScalar(m2, scalar, decimalPlaces) as Matrix2;
};

export const m3DivideScalar = (m3: Matrix3, scalar: number, decimalPlaces = Infinity): Matrix3 => {
    return mDivideScalar(m3, scalar, decimalPlaces) as Matrix3;
};


// --------------- TRANSPOSE ----------------------

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

export const m4x4 = (defaultValue = 0): Matrix4 => {
    return [
        [defaultValue, defaultValue, defaultValue, defaultValue],
        [defaultValue, defaultValue, defaultValue, defaultValue],
        [defaultValue, defaultValue, defaultValue, defaultValue],
        [defaultValue, defaultValue, defaultValue, defaultValue],
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

export const identity4 = (): Matrix4 => {
    return [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
    ];
};

/**
 * Identity Matrix (I).
 * M x I = I x M = M for any matrix M.
 * Identity Matrix is a special case of scale matrix.
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

// -------------- MATRIX MANIPULATION HELPERS ------------

export const mDeepCopy = (m: Matrix): Matrix => {
    const matrix: Matrix = [];

    for(let i=0; i<m.length; i++){
        const v = m[i];
        const vector: Vector = [];
        for(let j=0; j<v.length; j++){
            vector.push(v[j]);
        }
        matrix.push(vector);
    }

    return matrix;
};

export const m2DeepCopy = (m2: Matrix2): Matrix2 => {
    return mDeepCopy(m2) as Matrix2;
};

export const m3DeepCopy = (m3: Matrix3): Matrix3 => {
    return mDeepCopy(m3) as Matrix3;
};

// -------------- APPEND / PREPEND ROW OR COLUMN ---------------

export const mAppendCol = (m: Matrix, col: Vector): Matrix  => {
    if(m.length <= 0) return [];

    const copy = mDeepCopy(m);
    for(let i=0; i<copy.length; i++){
        copy[i].push(col[i]);
    }

    return copy;
};

export const mPrependCol = (m: Matrix, col: Vector): Matrix  => {
    if(m.length <= 0) return [];

    const copy = mDeepCopy(m);
    for(let i=0; i<copy.length; i++){
        copy[i].unshift(col[i]);
    }

    return copy;
};

export const mAppendRow = (m: Matrix, row: Vector) : Matrix => {
    const copy = mDeepCopy(m);
    copy.push(row);
    return copy;
};

export const m2AppendRow = (m2: Matrix2, row: Vector2) : Matrix2 => {
    const copy = m2DeepCopy(m2);
    copy.push(row);
    return copy;
};

export const m3AppendRow = (m3: Matrix3, row: Vector3) : Matrix3 => {
    const copy = m3DeepCopy(m3);
    copy.push(row);
    return copy;
};

export const mPrependRow = (m: Matrix, row: Vector) : Matrix => {
    const copy = mDeepCopy(m);
    copy.unshift(row);
    return copy;
};

export const m2PrependRow = (m2: Matrix2, row: Vector2) : Matrix2 => {
    const copy = m2DeepCopy(m2);
    copy.unshift(row);
    return copy;
};

export const m3PrependRow = (m3: Matrix3, row: Vector3) : Matrix3 => {
    const copy = m3DeepCopy(m3);
    copy.unshift(row);
    return copy;
};

// ------------ DELETE ROW OR COLUMN ----------------------------

export const mDelLastRow = (m: Matrix): Matrix => {
    if(m.length <= 0) return [];

    const copy = mDeepCopy(m);
    copy.pop();
    return copy;
};

export const mDelFirstRow = (m: Matrix): Matrix => {
    if(m.length <= 0) return [];

    const copy = mDeepCopy(m);
    copy.shift();
    return copy;
};

export const mDelLastColumn = (m: Matrix): Matrix => {
    if(m.length <= 0) return [];

    const copy = mDeepCopy(m);
    for(let i=0; i<copy.length; i++){
        copy[i].pop();
    }

    return copy;
};

export const mDelFirstColumn = (m: Matrix): Matrix => {
    if(m.length <= 0) return [];

    const copy = mDeepCopy(m);
    for(let i=0; i<copy.length; i++){
        copy[i].shift();
    }

    return copy;
};

// ----------- GET COLUMN ---------------------------

export const mGetFirstColumn = (m: Matrix) : Vector => {
    if(m.length <= 0) return [];

    const vector: Vector = [];
    for(let i=0; i<m.length; i++){
        vector.push(m[i][0]);
    }
    return vector;
};

export const mGetLastColumn = (m: Matrix) : Vector => {
    if(m.length <= 0) return [];

    const size = m[0].length;

    const vector: Vector = [];
    for(let i=0; i<m.length; i++){
        vector.push(m[i][size - 1]);
    }
    return vector;
};

export const mGetColumn = (m: Matrix, colIndex: number) : Vector => {
    if(m.length <= 0) return [];

    const vector: Vector = [];
    for(let i=0; i<m.length; i++){
        vector.push(m[i][colIndex]);
    }
    return vector;
};

// --------------- MULTIPLICATION ------------------------

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

// ------------------- Determinant ---------------

/**
 * Returns a matrix without provided row / col.
 * If we received a matrix M (mxm) ===> returns matrix N (m-1 x m-1)
 * The matrix must be square.
 */
const mMinorHelper = (m: Matrix, row: number, col: number) => {
    const size = m.length;

    if(size <= 0){
        throw new Error('The matrix should not be empty.');
    }

    if(size !== m[0].length){
        throw new Error('The matrix must be square.');
    }

    const matrix: Matrix = [];

    for(let i=0; i<size; i++){
        if(i === row) continue;

        const vector: Vector = [];

        for(let j=0; j<size; j++){
            if(j === col) continue;
            vector.push(m[i][j]);
        }

        matrix.push(vector);
    }

    return matrix;
};

/**
 * Calculate matrix minor.
 */
export const mMinor = (m: Matrix, row: number, col: number) => {
    const size = m.length;

    if(size <= 0){
        throw new Error('The matrix should not be empty.');
    }

    if(size !== m[0].length){
        throw new Error('The matrix must be square.');
    }

    // prepare the matrix without provided row and column
    const matrix = mMinorHelper(m, row, col);

    // calculate the matrix determinant
    return mDeterminant(matrix);
};

/**
 * Calculate determinant for NxN matrix.
 * Matrix should be square.
 */
export const mDeterminant = (matrix: Matrix): number => {
    const size = matrix.length;
    if(size === 0) return 1;

    if(size !== matrix[0].length){
        throw new Error('The matrix must be square.');
    }

    if(size === 1) return matrix[0][0];
    if(size === 2) return m2Determinant(matrix as Matrix2);

    let d = 0;

    for(let i=0; i<size; i++){
        const minor = mMinor(matrix, 0, i);

        let param = matrix[0][i];
        if(i % 2 !== 0){
            param = -param;
        }

        d += minor * param;
    }

    return d;
};

/**
 * Calculate determinant for 2x2 matrix.
 * Matrix should be square.
 */
export const m2Determinant = (m2: Matrix2): number => {
    if(m2.length !== m2[0].length){
        throw new Error('The matrix must be square.');
    }

    return m2[0][0] * m2[1][1] - m2[1][0] * m2[0][1];
};

/**
 * Calculate determinant for 3x3 matrix.
 * Matrix should be square.
 */
export const m3Determinant = (m3: Matrix3): number => {
    if(m3.length !== m3[0].length){
        throw new Error('The matrix must be square.');
    }

    return mDeterminant(m3);
};

// ------------------ INVERSE -----------------------

export const m2Adjugate = (m2: Matrix2): Matrix2|null => {
    if(m2.length !== m2[0].length){
        throw new Error('The matrix must be square.');
    }

    return [
      [m2[1][1], -m2[0][1]],
      [-m2[1][0], m2[0][0]],
    ];
};

export const m3Adjugate = (m3: Matrix3) : Matrix3|null => {
    return mAdjugate(m3) as (Matrix3|null);
};

/**
 * Adjugate is a transpose of a cofactor matrix
 */
export const mAdjugate = (m: Matrix): Matrix|null => {

    const size = m.length;
    if(size <= 0) return null;

    if(size !== m[0].length){
        throw new Error('The matrix must be square.');
    }

    if(size === 1) return m;

    if(size === 2) return m2Adjugate(m as Matrix2);

    // build a cofactor matrix ----------------
    const cofactors: Matrix = [];

    for(let i=0; i<size; i++){
        const vector: Vector = [];
        for(let j=0; j<size; j++){
            const minor = mMinor(m, i, j);
            const sign = Math.pow(-1, i + j)
            vector.push(sign * minor);
        }
        cofactors.push(vector);
    }

    // find an Adjugate - a transpose of a cofactor matrix
    return mTranspose(cofactors);
};

/**
 * Singular Matrix = a square matrix that does not have a matrix inverse.
 * A matrix is singular iff its determinant is 0.
 */
export const isSingularMatrix = (m: Matrix) => {
    if(m.length > 0 && m.length !== m[0].length){
        throw new Error('The matrix must be square.');
    }

    const d = mDeterminant(m);
    return d === 0;
};

/**
 * Square matrix A (nxn) is invertible is there is another square matrix B (nxn) so AxB = BxA = I
 * For A (2x2) matrix, the inverse is:
 * (1 / (determinant(A))) * adj(A)
 */
export const m2Inverse = (m2: Matrix2, decimalPlaces = Infinity): (Matrix2 | null) => {
    if(m2.length > 0 && m2.length !== m2[0].length){
        throw new Error('The matrix must be square.');
    }

    const d = m2Determinant(m2);
    if(d === 0) return null;

    const adj = m2Adjugate(m2);
    if(adj === null) return null;

    return m2DivideScalar(adj, d, decimalPlaces);
};

export const m3Inverse = (m3: Matrix3, decimalPlaces = Infinity): (Matrix3 | null) => {
    return mInverse(m3, decimalPlaces) as (Matrix3|null);
};

export const mInverse = (m: Matrix, decimalPlaces = Infinity): (Matrix | null) => {
    const size = m.length;

    if(size > 0 && size !== m[0].length){
        throw new Error('The matrix must be square.');
    }

    // find a determinant ----------------------
    const d = mDeterminant(m);

    // find an Adjugate - a transpose of a cofactor matrix
    const adj = mAdjugate(m);
    if(adj === null) return null;

    return mDivideScalar(adj, d, decimalPlaces);
};