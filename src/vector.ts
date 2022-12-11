import { Vector, Vector2, Vector3 } from './types';
import { setDecimalPlaces } from './format';
import { getV2Angle } from './angle';

// ------------ SUM ------------------------

export const vSum = (vector1: Vector, vector2: Vector, decimalPlaces = Infinity) : Vector => {

    const vector: Vector = [];

    for(let i=0; i<vector1.length; i++){
        vector.push(setDecimalPlaces(vector1[i] + vector2[i], decimalPlaces));
    }

    return vector;
};

export const v2Sum = (vector1: Vector2, vector2: Vector2, decimalPlaces = Infinity) : Vector2 => {
    return vSum(vector1, vector2, decimalPlaces) as Vector2;
};

export const v3Sum = (vector1: Vector3, vector2: Vector3, decimalPlaces = Infinity) : Vector3 => {
    return vSum(vector1, vector2, decimalPlaces) as Vector3;
};

// ------------ SUB ------------------------

export const vSub = (vector1: Vector, vector2: Vector, decimalPlaces = Infinity) : Vector => {

    const vector: Vector = [];

    for(let i=0; i<vector1.length; i++){
        vector.push(setDecimalPlaces(vector1[i] - vector2[i], decimalPlaces));
    }

    return vector;
};

export const v2Sub = (vector1: Vector2, vector2: Vector2, decimalPlaces = Infinity) : Vector2 => {
    return vSub(vector1, vector2, decimalPlaces) as Vector2;
};

export const v3Sub = (vector1: Vector3, vector2: Vector3, decimalPlaces = Infinity) : Vector3 => {
    return vSub(vector1, vector2, decimalPlaces) as Vector3;
};

// ------------ MUL SCALAR ------------------------

export const vMulScalar = (v: Vector, scalar: number, decimalPlaces = Infinity): Vector => {
    const vector: Vector = [];

    for(let i=0; i<v.length; i++){
        vector.push(setDecimalPlaces(v[i] * scalar, decimalPlaces));
    }

    return vector;
};

export const v2MulScalar = (v2: Vector2, scalar: number, decimalPlaces = Infinity): Vector2 => {
    return vMulScalar(v2, scalar, decimalPlaces) as Vector2;
};

export const v3MulScalar = (v3: Vector3, scalar: number, decimalPlaces = Infinity): Vector3 => {
    return vMulScalar(v3, scalar, decimalPlaces) as Vector3;
};

// ------------ DIVIDE ------------------------

export const vDivideScalar = (v: Vector, scalar: number, decimalPlaces = Infinity): Vector => {
    if(scalar === 0){
        throw new Error('Division by zero error.');
    }

    const vector: Vector = [];

    for(let i=0; i<v.length; i++){
        vector.push(setDecimalPlaces(v[i] / scalar, decimalPlaces));
    }

    return vector;
};

export const v2DivideScalar = (v2: Vector2, scalar: number, decimalPlaces = Infinity): Vector2 => {
    return vDivideScalar(v2, scalar, decimalPlaces) as Vector2;
};

export const v3DivideScalar = (v3: Vector3, scalar: number, decimalPlaces = Infinity): Vector3 => {
    return vDivideScalar(v3, scalar, decimalPlaces) as Vector3;
};

// ------------ LENGTH ------------------------

export const vLength = (vector: Vector, decimalPlaces = Infinity) => {
    let sum = 0;

    for(let i=0; i<vector.length; i++){
        sum += vector[i] * vector[i];
    }

    return setDecimalPlaces(Math.sqrt(sum), decimalPlaces);
};

export const v2Length = (vector: Vector2, decimalPlaces = Infinity) => {
    return vLength(vector, decimalPlaces);
};

export const v3Length = (vector: Vector3, decimalPlaces = Infinity) => {
    return vLength(vector, decimalPlaces);
};

export const v2SetLength = (v2: Vector2, newLength: number, decimalPlaces = Infinity): Vector2 => {
    const angle = getV2Angle(v2);
    return [
        setDecimalPlaces(Math.cos(angle) * newLength, decimalPlaces),
        setDecimalPlaces(Math.sin(angle) * newLength, decimalPlaces),
    ];
};

// ------------ NORMALIZE ------------------------

/**
 * Normalization creates a unit vector, which is a vector of length 1.
 */
export const vNormalize = (v: Vector, decimalPlaces = Infinity) : Vector => {
    const length = vLength(v);
    const unitVector: Vector = [];

    for(let i=0; i<v.length; i++){
        unitVector.push(length === 0 ? 0 : setDecimalPlaces(v[i] / length, decimalPlaces));
    }

    return unitVector;
};

export const v2Normalize = (v2: Vector2, decimalPlaces = Infinity) : Vector2 => {
    return vNormalize(v2, decimalPlaces) as Vector2;
};

export const v3Normalize = (v3: Vector3, decimalPlaces = Infinity) : Vector3 => {
    return vNormalize(v3, decimalPlaces) as Vector3;
};

// ------------ DOT PRODUCT ------------------------

export const vDotProduct = (vector1: Vector, vector2: Vector, decimalPlaces = Infinity) => {
    let sum = 0;

    for(let i=0; i<vector1.length; i++){
        sum += vector1[i] * vector2[i];
    }

    return setDecimalPlaces(sum, decimalPlaces);
};

export const v2DotProduct = (vector1: Vector2, vector2: Vector2, decimalPlaces = Infinity) => {
    return vDotProduct(vector1, vector2, decimalPlaces);
};

export const v3DotProduct = (vector1: Vector3, vector2: Vector3, decimalPlaces = Infinity) => {
    return vDotProduct(vector1, vector2, decimalPlaces);
};

// ------------ CROSS PRODUCT ------------------------

export const v3CrossProduct = (vector1: Vector3, vector2: Vector3, decimalPlaces = Infinity): Vector3 => {
    return [
        setDecimalPlaces(vector1[1] * vector2[2] - vector1[2] * vector2[1], decimalPlaces),
        setDecimalPlaces(vector1[2] * vector2[0] - vector1[0] * vector2[2], decimalPlaces),
        setDecimalPlaces(vector1[0] * vector2[1] - vector1[1] * vector2[0], decimalPlaces),
    ];
};

// --------------- INIT VECTOR HELPER -----------------

export const v2 = (defaultValue = 0): Vector2 => {
    return [defaultValue, defaultValue];
};

export const v3 = (defaultValue = 0): Vector3 => {
    return [defaultValue, defaultValue, defaultValue];
};

export const vN = (N: number, defaultValue = 0): Vector => {

    if(N < 0){
        throw new Error('N must be a non-negative number.');
    }

    const vector: Vector = [];
    for(let i=0; i<N; i++){
        vector.push(defaultValue);
    }
    return vector;
};

// --------------- EQUALITY -------------------------

export const vEqual = (vector1: Vector, vector2: Vector): boolean => {
    if(vector1.length !== vector2.length) return false;

    for(let i=0; i<vector1.length; i++){
        if(vector1[i] !== vector2[i]) return false;
    }

    return true;
};