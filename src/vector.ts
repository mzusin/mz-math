import { Vector2, Vector3 } from './types';
import { setDecimalPlaces } from './format';
import { getV2Angle } from './angle';

export const v2Sum = (...vectors: Vector2[]) : Vector2 => {

    const res: Vector2 = [0, 0];

    for(const vector of vectors){
        res[0] += vector[0];
        res[1] += vector[1];
    }

    return res;
};

export const v3Sum = (...vectors: Vector3[]) : Vector3 => {

    const res: Vector3 = [0, 0, 0];

    for(const vector of vectors){
        res[0] += vector[0];
        res[1] += vector[1];
        res[2] += vector[2];
    }

    return res;
};

export const v2Sub = (...vectors: Vector2[]) : Vector2 => {

    const res: Vector2 = [...vectors[0]];

    for(let i=1; i<vectors.length; i++){
        res[0] -= vectors[i][0];
        res[1] -= vectors[i][1];
    }

    return res;
};

export const v3Sub = (...vectors: Vector3[]) : Vector3 => {

    const res: Vector3 = [...vectors[0]];

    for(let i=1; i<vectors.length; i++){
        res[0] -= vectors[i][0];
        res[1] -= vectors[i][1];
        res[2] -= vectors[i][2];
    }

    return res;
};

export const v2MulScalar = (v2: Vector2, scalar: number, decimalPlaces = Infinity): Vector2 => {
    return [
        setDecimalPlaces(v2[0] * scalar, decimalPlaces),
        setDecimalPlaces(v2[1] * scalar, decimalPlaces),
    ];
};

export const v3MulScalar = (v3: Vector3, scalar: number, decimalPlaces = Infinity): Vector3 => {
    return [
        setDecimalPlaces(v3[0] * scalar, decimalPlaces),
        setDecimalPlaces(v3[1] * scalar, decimalPlaces),
        setDecimalPlaces(v3[2] * scalar, decimalPlaces),
    ];
};

export const v2Length = (vector: Vector2, decimalPlaces = Infinity) => {
    const len = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
    return setDecimalPlaces(len, decimalPlaces);
};

export const v3Length = (vector: Vector3, decimalPlaces = Infinity) => {
    const len = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1] + vector[2] * vector[2]);
    return setDecimalPlaces(len, decimalPlaces);
};

export const v2SetLength = (v2: Vector2, newLength: number, decimalPlaces = Infinity): Vector2 => {
    const angle = getV2Angle(v2);
    return [
        setDecimalPlaces(Math.cos(angle) * newLength, decimalPlaces),
        setDecimalPlaces(Math.sin(angle) * newLength, decimalPlaces),
    ];
};

export const v2Normalize = (v2: Vector2, decimalPlaces = Infinity) : Vector2 => {
    const length = v2Length(v2);

    return [
        length === 0 ? 0 : setDecimalPlaces(v2[0] / length, decimalPlaces),
        length === 0 ? 0 : setDecimalPlaces(v2[1] / length, decimalPlaces),
    ];
};

export const v3Normalize = (v3: Vector3, decimalPlaces = Infinity) : Vector3 => {
    const length = v3Length(v3);

    return [
        length === 0 ? 0 : setDecimalPlaces(v3[0] / length, decimalPlaces),
        length === 0 ? 0 : setDecimalPlaces(v3[1] / length, decimalPlaces),
        length === 0 ? 0 : setDecimalPlaces(v3[2] / length, decimalPlaces),
    ];
};

export const v2DotProduct = (vector1: Vector2, vector2: Vector2, decimalPlaces = Infinity) => {
    return setDecimalPlaces(vector1[0] * vector2[0] + vector1[1] * vector2[1], decimalPlaces);
};

export const v3DotProduct = (vector1: Vector3, vector2: Vector3, decimalPlaces = Infinity) => {
    return setDecimalPlaces(
        vector1[0] * vector2[0] +
              vector1[1] * vector2[1] +
              vector1[2] * vector2[2],
        decimalPlaces
    );
};

export const v3CrossProduct = (vector1: Vector3, vector2: Vector3, decimalPlaces = Infinity): Vector3 => {
    return [
        setDecimalPlaces(vector1[1] * vector2[2] - vector1[2] * vector2[1], decimalPlaces),
        setDecimalPlaces(vector1[2] * vector2[0] - vector1[0] * vector2[2], decimalPlaces),
        setDecimalPlaces(vector1[0] * vector2[1] - vector1[1] * vector2[0], decimalPlaces),
    ];
};