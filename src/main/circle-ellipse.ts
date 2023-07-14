import { setDecimalPlaces } from './format';

export const getCircleCircumference = (radius: number) => {
    return 2 * Math.PI * radius;
};

export const getEllipseCircumference = (radius1: number, radius2: number) => {
    return 2 * Math.PI * Math.sqrt((radius1 ** 2 + radius2 ** 2) / 2);
};

export const isAngleInCircleArc = (startAngleDeg: number, endAngleDeg: number, currentDegrees: number) : boolean => {

    if(startAngleDeg > endAngleDeg) {
        endAngleDeg += 360;
    }

    return currentDegrees >= startAngleDeg && currentDegrees <= endAngleDeg ||
        (currentDegrees + 360) >= startAngleDeg && (currentDegrees + 360) <= endAngleDeg;
};

/**
 * get the side of a square inscribed in a circle
 */
export const getSquareInCircleSide = (radius: number, decimalPlaces = Infinity) => {
    return setDecimalPlaces(radius * 2 / Math.sqrt(2), decimalPlaces);
};
