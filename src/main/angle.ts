import { Vector, Vector2, Vector3 } from '../types';
import { setDecimalPlaces } from './format';
import { v2Length, vNormalize, vDotProduct, vSub } from './linear-algebra/vector';
import { mod } from './other';

export const getV2Angle = (v2: Vector2, decimalPlaces = Infinity) => {
    const angle = Math.atan2(v2[1], v2[0]);
    return setDecimalPlaces(angle, decimalPlaces);
};

export const getV2AngleInEllipse = (v2: Vector2, radii: Vector2, decimalPlaces = Infinity) => {
    const angle = Math.atan2(v2[1]/radii[1], v2[0]/radii[0]);
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

export const isAngleBetween = (angleDegrees: number, startAngleDegrees: number, endAngleDegrees: number) : boolean => {
    const distance = getAnglesSub(startAngleDegrees, endAngleDegrees);
    const distance1 = getAnglesSub(startAngleDegrees, angleDegrees);
    const distance2 = getAnglesSub(endAngleDegrees, angleDegrees);
    const totalDistance = distance1 + distance2;

    // Use a small threshold for floating point errors
    return Math.abs(totalDistance - distance) <= 0.001;
}

export const isClockwise = (angle1Deg: number, angle2Deg: number, startAngleDeg = 0) => {
    angle1Deg = angle1Deg % 360;
    angle2Deg = angle2Deg % 360;

    if(angle1Deg < startAngleDeg) {
        angle1Deg += 360;
    }

    if(angle2Deg < startAngleDeg) {
        angle2Deg += 360;
    }

    return angle2Deg >= angle1Deg;
};

/**
 * Shortest distance (angular) between two angles.
 */
export const getAnglesSub = (angleDegrees1: number, angleDegrees2: number, decimalPlaces = Infinity) : number => {
    const angleDistance = Math.abs(mod(angleDegrees1, 360) - mod(angleDegrees2, 360));
    return setDecimalPlaces(angleDistance <= 180 ? angleDistance : 360 - angleDistance, decimalPlaces);
};

export const getAnglesDistance = (angle1Deg: number, angle2Deg: number, startAngleDeg = 0, decimalPlaces = Infinity) => {
    angle1Deg = angle1Deg % 360;
    angle2Deg = angle2Deg % 360;

    if(angle1Deg < startAngleDeg) {
        angle1Deg += 360;
    }

    if(angle2Deg < startAngleDeg) {
        angle2Deg += 360;
    }

    if(isClockwise(angle1Deg, angle2Deg, startAngleDeg)) {
        return setDecimalPlaces((angle2Deg - angle1Deg + 360) % 360, decimalPlaces);
    }
    else{
        return setDecimalPlaces((angle1Deg - angle2Deg + 360) % 360, decimalPlaces);
    }
};

export const percentToAngle = (percent: number, startAngleDeg: number, endAngleDeg: number, circleStartAngle = 0) => {
    if(percent < 0) {
        percent = 0;
    }

    if(percent > 100) {
        percent = 100;
    }

    const distance = getAnglesDistance(startAngleDeg, endAngleDeg, circleStartAngle);

    const clockwise = isClockwise(startAngleDeg, endAngleDeg, circleStartAngle);
    if(clockwise) {
        return mod(circleStartAngle + (percent * distance / 100), 360);
    }
    else {
        return mod(circleStartAngle - (percent * distance / 100), 360);
    }
};