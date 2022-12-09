import { setDecimalPlaces } from './format';

/**
 * Returns a random number in the [min,max] range.
 */
export const getRandom = (min: number, max: number, decimalPlaces = Infinity): number => {
    return setDecimalPlaces(Math.random() * (max - min) + min, decimalPlaces);
};

/**
 * Returns a random integer number in the [min,max] range.
 */
export const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomBoolean = () => Math.random() < 0.5;