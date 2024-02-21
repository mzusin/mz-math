import { setDecimalPlaces } from './format';
import { getArithmeticMean, getStandardDeviation } from './statistics';

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
 * Returns a copy of array, where each value will be in the range [-1, 1]
 */
export const mlStandardize = (data: number[], decimalPlaces = Infinity): number[] => {
    const copy = [...data];
    const mean = getArithmeticMean(copy) ?? 0;
    const stdDev = getStandardDeviation(copy, decimalPlaces);
    return copy.map(val => (val - mean) / stdDev);
};