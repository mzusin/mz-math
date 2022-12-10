import { Matrix2, Matrix3, Matrix } from './types';
import { vMulScalar, vSum, vSub } from './vector';

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

/*
export const m2Transpose = (m2: Matrix2): Matrix2 => {
    return [
        [m2[0][0], m2[1][0]],
        [m2[0][1], m2[1][1]],
    ];
};*/

