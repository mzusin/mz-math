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

/*
// which means that 1 in 5 patients will miss their scheduled appointment.
def calc_prevalence(y):
 return (sum(y)/len(y))
 */

/*
df[‘ScheduledDay_year’] = df[‘ScheduledDay’].dt.year
df[‘ScheduledDay_month’] = df[‘ScheduledDay’].dt.month
df[‘ScheduledDay_week’] = df[‘ScheduledDay’].dt.week
df[‘ScheduledDay_day’] = df[‘ScheduledDay’].dt.day
df[‘ScheduledDay_hour’] = df[‘ScheduledDay’].dt.hour
df[‘ScheduledDay_minute’] = df[‘ScheduledDay’].dt.minute
df[‘ScheduledDay_dayofweek’] = df[‘ScheduledDay’].dt.dayofweek
 */

// I would never use Year as a feature (but showed it anyways) because presumably we want to use this predictive model in the future and those future years wouldn’t be included in the dataset.

// However, I am kind of disappointed that the months are just for a few months of the year. This means month (and consequently week of year) probably shouldn’t be used as a feature either.

/*
// the number of days between the scheduled date and the appointment date.
df[‘delta_days’] = (df[‘AppointmentDay’]-df[‘ScheduledDay’]).dt.total_seconds()/(60*60*24)
 */

// Another thing you may want to do is convert the dayofweek into a categorical variable via one-hot encoding.

// Which shows that delta_days is basically the only features used in the model. This confirms our suspicion above that the model will likely struggle due to those same day appointments.

/*
When working with months (and days) as integers you are losing some information about them, because December (12) is far away from January (1) but in a sense they should be connected as one precedes the other. One approach to solve this problem would be projecting the months into a circle, then each month would have a corresponding angle “theta” and then you can store the “sin” and “cos” of said angle.
 */

/*
Possible suggestions of features include:

weekends vs weekdays
business hours and time of day
seasons
week of year number
month
year
beginning/end of month (pay days)
quarter
days to/from an action event(distance)
missing or incomplete data
etc.
All this depends on the data set and most won't apply.


 */