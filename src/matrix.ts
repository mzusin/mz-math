import { Matrix2, Matrix3 } from './types';
import { v2MulScalar, v3MulScalar } from './vector';

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

