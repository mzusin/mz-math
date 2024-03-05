import { setDecimalPlaces } from './format';

// -------------------- CENTRAL TENDENCY ----------------------------

/**
 * Central tendency: Calculate the Average (mean = μ)
 * Sum of all numbers divided by the array length.
 */
export const getArithmeticMean = (data: number[], decimalPlaces = Infinity) : number|undefined => {
    if(!data || data.length <= 0) return undefined;

    const sum = data.reduce((acc, val) => acc + val, 0);
    return setDecimalPlaces(sum / data.length, decimalPlaces);
};

/**
 * Central tendency: What is the central number in the sorted array?
 * Good for lists like [3, 3, 3, 3, 3, 3, 100] - 100 here is called "Outlier"
 */
export const getMedian = (data: number[], decimalPlaces = Infinity) : number|undefined => {
    if(!data || data.length <= 0) return undefined;

    const copy = [...data].sort((num1, num2) => num1 - num2);
    const mid = Math.floor(copy.length / 2);

    if(copy.length % 2 === 0) {
        return setDecimalPlaces((copy[mid] + copy[mid - 1]) / 2, decimalPlaces);
    }
    else {
        return setDecimalPlaces(copy[mid], decimalPlaces);
    }
};

/**
 * Central tendency: What number is most common in the set.
 * If all numbers have the same frequency, there is no mode.
 */
export const getMode = (data: number[]) : number[]|undefined => {
    if(!data || data.length <= 0) return undefined;

    // Count frequency of each number in the data array.
    const frequencyMap: Map<number, number> = new Map();
    for (const num of data) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    let maxFrequency = 0;
    let modes: number[] = [];

    // Find the maximum frequency
    for (const [num, frequency] of frequencyMap) {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            modes = [num];
        }
        else if (frequency === maxFrequency) {
            modes.push(num);
        }
    }

    // If all numbers have the same frequency, there is no mode
    if (modes.length === data.length) {
        return undefined;
    }

    // Return the mode(s)
    return modes.length === 1 ? [modes[0]] : modes;
};

/*
TODO:
- geometric mean
- harmonic mean
 */

// -------------------- DISPERSION ----------------------------

/**
 * Dispersion: the average square distance from the mean.
 * Sum of (x - mean)^2 / N
 */
export const getVariance1 = (data: number[], decimalPlaces = Infinity) : number|undefined => {
    if(!data || data.length <= 0) return undefined;

    const mean = getArithmeticMean(data);
    if(mean === undefined) return undefined;

    const sum = data.reduce((acc, val) => acc + ((val - mean) ** 2), 0);

    return setDecimalPlaces(sum / data.length, decimalPlaces);
};

/**
 * Another formula of dispersion - the average square distance from the mean.
 * (Sum of x^2) / N - (mean ^ 2)
 */
export const getVariance = (data: number[], decimalPlaces = Infinity) : number|undefined => {
    if(!data || data.length <= 0) return undefined;

    const mean = getArithmeticMean(data);
    if(mean === undefined) return undefined;

    const sum = data.reduce((acc, val) => acc + (val ** 2), 0);

    return setDecimalPlaces((sum / data.length) - (mean ** 2), decimalPlaces);
};

/**
 * σ
 */
export const getStandardDeviation = (data: number[], decimalPlaces = Infinity) => {
    const variance = getVariance(data) ?? 0;
    return setDecimalPlaces(Math.sqrt(variance), decimalPlaces);
};