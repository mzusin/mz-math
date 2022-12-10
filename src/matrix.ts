import { Matrix2, Matrix3 } from './types';
import { v2MulScalar, v3MulScalar, v2Sum, v2Sub, v3Sum, v3Sub } from './vector';

export const m2MulScalar = (m2: Matrix2, scalar: number, decimalPlaces = Infinity): Matrix2 => {
    const res: Matrix2 = [];

    for(const v2 of m2){
        res.push(v2MulScalar(v2, scalar, decimalPlaces));
    }

    return res;
};

export const m3MulScalar = (m3: Matrix3, scalar: number, decimalPlaces = Infinity): Matrix3 => {
    const res: Matrix3 = [];

    for(const v3 of m3){
        res.push(v3MulScalar(v3, scalar, decimalPlaces));
    }

    return res;
};

export const m2Sum = (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces = Infinity): Matrix2 => {
    const res: Matrix2 = [];

    for(let i=0; i<matrix1.length; i++){
        res.push(v2Sum(matrix1[i], matrix2[i], decimalPlaces));
    }

    return res;
};

export const m2Sub = (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces = Infinity): Matrix2 => {
    const res: Matrix2 = [];

    for(let i=0; i<matrix1.length; i++){
        res.push(v2Sub(matrix1[i], matrix2[i], decimalPlaces));
    }

    return res;
};

export const m3Sum = (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces = Infinity): Matrix3 => {
    const res: Matrix3 = [];

    for(let i=0; i<matrix1.length; i++){
        res.push(v3Sum(matrix1[i], matrix2[i], decimalPlaces));
    }

    return res;
};

export const m3Sub = (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces = Infinity): Matrix3 => {
    const res: Matrix3 = [];

    for(let i=0; i<matrix1.length; i++){
        res.push(v3Sub(matrix1[i], matrix2[i], decimalPlaces));
    }

    return res;
};

