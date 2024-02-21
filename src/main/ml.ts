import { setDecimalPlaces } from './format';
import { getArithmeticMean, getStandardDeviation } from './statistics';
import { IMlStandardizeResult } from '../types';

/**
 * Returns a copy of array, where each value will be in the range [0, 1].
 */
export const mlNormalize = (data: number[], decimalPlaces = Infinity): number[] => {
    const copy = [...data];

    const min = Math.min(...copy);
    const max = Math.max(...copy);

    const diff = max - min;
    if(diff === 0) return [0];

    for(let i=0; i<copy.length; i++) {
        copy[i] = setDecimalPlaces((copy[i] - min) / diff, decimalPlaces);
    }

    return copy;
};

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