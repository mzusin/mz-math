import { setDecimalPlaces } from './format';
import { getArithmeticMean } from './statistics';

/**
 * Returns a copy of array, where each value will be in the range [0, 1].
 * const newValue = (value - array_min) / (array_max - array_min)
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

export const mlStandardize = (data: number[]): number[] => {

    const mean = getArithmeticMean(data) ?? 0;

    // Calculate the standard deviation ----------
    // variance (spread or dispersion) is calculated by summing up the squared differences
    // between each element and the mean,
    // and then dividing by the number of elements.
    const variance = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length;
    // stdDev is the square root of the variance.
    const stdDev = Math.sqrt(variance);

    // Standardize each element in the data array
    // Each element in the data array is standardized
    // by subtracting the mean and dividing by the standard deviation.
    const standardizedData = data.map(val => (val - mean) / stdDev);

    return standardizedData;
};