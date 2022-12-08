import { IVector2, IVector3 } from './interfaces';
import { setDecimalPlaces } from './format';

export const v2Sum = (...vectors: IVector2[]) : IVector2 => {

    const res = {
        x: 0,
        y: 0,
    }

    for(const vector of vectors){
        res.x += vector.x;
        res.y += vector.y;
    }

    return res;
};

export const v3Sum = (...vectors: IVector3[]) : IVector3 => {

    const res = {
        x: 0,
        y: 0,
        z: 0,
    }

    for(const vector of vectors){
        res.x += vector.x;
        res.y += vector.y;
        res.z += vector.z;
    }

    return res;
};

export const v2Length = (vector: IVector2, decimalPlaces = Infinity) => {
    const len = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    return setDecimalPlaces(len, decimalPlaces);
};

export const v3Length = (vector: IVector3, decimalPlaces = Infinity) => {
    const len = Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
    return setDecimalPlaces(len, decimalPlaces);
};