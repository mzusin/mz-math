import { IVector2, IVector3 } from './interfaces';
import { setDecimalPlaces } from './format';
import { getV2Angle } from './angle';

export const v2Sum = (...vectors: IVector2[]) : IVector2 => {

    const res = { x: 0, y: 0 };

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
    };

    for(const vector of vectors){
        res.x += vector.x;
        res.y += vector.y;
        res.z += vector.z;
    }

    return res;
};

export const v2Sub = (...vectors: IVector2[]) : IVector2 => {

    const res = {...vectors[0]};

    for(let i=1; i<vectors.length; i++){
        res.x -= vectors[i].x;
        res.y -= vectors[i].y;
    }

    return res;
};

export const v3Sub = (...vectors: IVector3[]) : IVector3 => {

    const res = {...vectors[0]};

    for(let i=1; i<vectors.length; i++){
        res.x -= vectors[i].x;
        res.y -= vectors[i].y;
        res.z -= vectors[i].z;
    }

    return res;
};

export const v2MulScalar = (v2: IVector2, scalar: number, decimalPlaces = Infinity): IVector2 => {
    return {
        x: setDecimalPlaces(v2.x * scalar, decimalPlaces),
        y: setDecimalPlaces(v2.y * scalar, decimalPlaces),
    };
};

export const v3MulScalar = (v3: IVector3, scalar: number, decimalPlaces = Infinity): IVector3 => {
    return {
        x: setDecimalPlaces(v3.x * scalar, decimalPlaces),
        y: setDecimalPlaces(v3.y * scalar, decimalPlaces),
        z: setDecimalPlaces(v3.z * scalar, decimalPlaces),
    };
};

export const v2Length = (vector: IVector2, decimalPlaces = Infinity) => {
    const len = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    return setDecimalPlaces(len, decimalPlaces);
};

export const v3Length = (vector: IVector3, decimalPlaces = Infinity) => {
    const len = Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
    return setDecimalPlaces(len, decimalPlaces);
};

export const v2SetLength = (v2: IVector2, newLength: number, decimalPlaces = Infinity): IVector2 => {
    const angle = getV2Angle(v2);
    return {
        x: setDecimalPlaces(Math.cos(angle) * newLength, decimalPlaces),
        y: setDecimalPlaces(Math.sin(angle) * newLength, decimalPlaces),
    };
};

export const v2Normalize = (v2: IVector2, decimalPlaces = Infinity) : IVector2 => {
    const length = v2Length(v2);

    return {
        x: length === 0 ? 0 : setDecimalPlaces(v2.x / length, decimalPlaces),
        y: length === 0 ? 0 : setDecimalPlaces(v2.y / length, decimalPlaces),
    };
};

export const v3Normalize = (v3: IVector3, decimalPlaces = Infinity) : IVector3 => {
    const length = v3Length(v3);

    return {
        x: length === 0 ? 0 : setDecimalPlaces(v3.x / length, decimalPlaces),
        y: length === 0 ? 0 : setDecimalPlaces(v3.y / length, decimalPlaces),
        z: length === 0 ? 0 : setDecimalPlaces(v3.z / length, decimalPlaces),
    };
};

export const v2DotProduct = (vector1: IVector2, vector2: IVector2, decimalPlaces = Infinity) => {
    return setDecimalPlaces(vector1.x * vector2.x + vector1.y * vector2.y, decimalPlaces);
};

export const v3DotProduct = (vector1: IVector3, vector2: IVector3, decimalPlaces = Infinity) => {
    return setDecimalPlaces(
        vector1.x * vector2.x +
              vector1.y * vector2.y +
              vector1.z * vector2.z,
        decimalPlaces
    );
};

export const v3CrossProduct = (vector1: IVector3, vector2: IVector3, decimalPlaces = Infinity): IVector3 => {
    return {
        x: setDecimalPlaces(vector1.y * vector2.z - vector1.z * vector2.y, decimalPlaces),
        y: setDecimalPlaces(vector1.z * vector2.x - vector1.x * vector2.z, decimalPlaces),
        z: setDecimalPlaces(vector1.x * vector2.y - vector1.y * vector2.x, decimalPlaces),
    };
};