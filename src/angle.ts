import { Vector2 } from './types';
import { setDecimalPlaces } from './format';
import { v2Length } from './vector';

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