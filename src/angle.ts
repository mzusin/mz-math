import { IVector2 } from './interfaces';
import { setDecimalPlaces } from './format';
import { v2Length } from './vector';

export const getV2Angle = (v2: IVector2, decimalPlaces = Infinity) => {
    const angle = Math.atan2(v2.y, v2.x);
    return setDecimalPlaces(angle, decimalPlaces);
};

export const setV2Angle = (v2: IVector2, newAngleRad: number, decimalPlaces = Infinity): IVector2 => {
    const length = v2Length(v2);
    return {
        x: setDecimalPlaces(Math.cos(newAngleRad) * length, decimalPlaces),
        y: setDecimalPlaces(Math.sin(newAngleRad) * length, decimalPlaces),
    };
};

export const radiansToDegrees = (radians: number, decimalPlaces = Infinity) => {
    const res = radians * (180 / Math.PI);
    return setDecimalPlaces(res, decimalPlaces);
};

export const degreesToRadians = (degrees: number, decimalPlaces = Infinity) => {
    const res = degrees * (Math.PI / 180);
    return setDecimalPlaces(res, decimalPlaces);
};