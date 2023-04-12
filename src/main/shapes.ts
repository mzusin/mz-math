import { setDecimalPlaces } from './format';

/**
 * get the side of a square inscribed in a circle
 */
export const getSquareInCircleSide = (radius: number, decimalPlaces = Infinity) => {
    return setDecimalPlaces(radius * 2 / Math.sqrt(2), decimalPlaces);
};
