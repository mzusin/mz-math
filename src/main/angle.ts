import { Vector, Vector2, Vector3 } from '../types';
import { setDecimalPlaces } from './format';
import { v2Length, vNormalize, vDotProduct, vSub } from './linear-algebra/vector';

export const getV2Angle = (v2: Vector2, decimalPlaces = Infinity) => {
    const angle = Math.atan2(v2[1], v2[0]);
    return setDecimalPlaces(angle, decimalPlaces);
};

export const setV2Angle = (v2: Vector2, newAngleRad: number, decimalPlaces = Infinity): Vector2 => {
    const length = v2Length(v2);
    return [
        setDecimalPlaces(Math.cos(newAngleRad) * length, decimalPlaces),
        setDecimalPlaces(Math.sin(newAngleRad) * length, decimalPlaces),
    ];
};

export const radiansToDegrees = (radians: number, decimalPlaces = Infinity) => {
    const res = radians * (180 / Math.PI);
    return setDecimalPlaces(res, decimalPlaces);
};

export const degreesToRadians = (degrees: number, decimalPlaces = Infinity) => {
    const res = degrees * (Math.PI / 180);
    return setDecimalPlaces(res, decimalPlaces);
};

/**
 * Returns the range [0, Math.PI]
 * A = Math.acos( dot(v1, v2)/(v1.length()*v2.length()) );
 */
export const getVNAngleBetween = (vector1: Vector, vector2: Vector, decimalPlaces = Infinity) : number => {
    const unitVector1 = vNormalize(vector1);
    const unitVector2 = vNormalize(vector2);
    const dotProduct = vDotProduct(unitVector1, unitVector2);
    const angle = Math.acos(dotProduct);
    return setDecimalPlaces(angle, decimalPlaces);
};

export const getV2AngleBetween = (vector1: Vector2, vector2: Vector2, decimalPlaces = Infinity) : number => {
    // return getVNAngleBetween(vector1, vector2, decimalPlaces);
    const diff = vSub(vector1, vector2);
    const angle = Math.atan2(diff[1], diff[0]);
    return setDecimalPlaces(angle, decimalPlaces);
};

export const getV3AngleBetween = (vector1: Vector3, vector2: Vector3, decimalPlaces = Infinity) : number => {
    return getVNAngleBetween(vector1, vector2, decimalPlaces);
};