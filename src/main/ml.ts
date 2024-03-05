import { setDecimalPlaces } from './format';
import { getArithmeticMean, getStandardDeviation } from './statistics';
import { IMlNormalizeResult, IMlStandardizeResult } from '../types';

// --------------------- NORMALIZE --------------------------------

/**
 * Changes value to be in the range [0, 1].
 */
export const mlNormalizeValue = (value: number, min: number, max: number, decimalPlaces = Infinity) : number => {
    const diff = max - min;
    if(diff === 0) return 0;
    return setDecimalPlaces((value - min) / diff, decimalPlaces);
};

/**
 * Returns a copy of array, where each value will be in the range [0, 1].
 */
export const mlNormalizeArray = (data: number[], min: number, max: number, decimalPlaces = Infinity): number[] => {
    const copy = [...data];

    for(let i=0; i<copy.length; i++) {
        copy[i] = mlNormalizeValue(copy[i], min, max, decimalPlaces);
    }

    return copy;
};

export const mlNormalizeTestData = (data: number[], decimalPlaces = Infinity): IMlNormalizeResult => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const _data = mlNormalizeArray(data, min, max, decimalPlaces);

    return {
        min: setDecimalPlaces(min, decimalPlaces),
        max: setDecimalPlaces(max, decimalPlaces),
        data: _data,
    };
};

/**
 * Alias.
 */
export const mlNormalizeUnseenData = (data: number[], min: number, max: number, decimalPlaces = Infinity): number[] => {
    return mlNormalizeArray(data, min, max, decimalPlaces);
};

// --------------------- STANDARDIZE --------------------------------

/**
 * Changes value to be in the range [-1, 1].
 */
export const mlStandardizeValue = (value: number, mean: number, stdDev: number, decimalPlaces = Infinity) : number => {
    if(stdDev === 0) return 0;
    return setDecimalPlaces((value - mean) / stdDev, decimalPlaces);
};

/**
 * Returns a copy of array, where each value will be in the range [-1, 1].
 */
export const mlStandardizeArray = (data: number[], mean: number, stdDev: number, decimalPlaces = Infinity) : number[] => {
    return [...data].map(value => mlStandardizeValue(value, mean, stdDev, decimalPlaces));
};

export const mlStandardizeTestData = (data: number[], decimalPlaces = Infinity): IMlStandardizeResult => {
    const mean = getArithmeticMean(data) ?? 0;
    const stdDev = getStandardDeviation(data);
    const _data = mlStandardizeArray(data, mean, stdDev, decimalPlaces);

    return {
        mean: setDecimalPlaces(mean, decimalPlaces),
        stdDev: setDecimalPlaces(stdDev, decimalPlaces),
        data: _data,
    };
};

/**
 * Alias.
 */
export const mlStandardizeUnseenData = (data: number[], mean: number, stdDev: number, decimalPlaces = Infinity): number[] => {
    return mlStandardizeArray(data, mean, stdDev, decimalPlaces);
};