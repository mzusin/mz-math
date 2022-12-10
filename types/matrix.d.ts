import { Matrix2, Matrix3 } from './types';
export declare const m2MulScalar: (m2: Matrix2, scalar: number, decimalPlaces?: number) => Matrix2;
export declare const m3MulScalar: (m3: Matrix3, scalar: number, decimalPlaces?: number) => Matrix3;
export declare const m2Sum: (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces?: number) => Matrix2;
export declare const m2Sub: (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces?: number) => Matrix2;
export declare const m3Sum: (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces?: number) => Matrix3;
export declare const m3Sub: (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces?: number) => Matrix3;
