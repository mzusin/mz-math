import { setDecimalPlaces } from './format';

export const celsiusToFahrenheit = (celsius: number, decimalPlaces = Infinity) => {
    return setDecimalPlaces(celsius * 1.80 + 32.00, decimalPlaces);
};

export const celsiusToKelvin = (celsius: number, decimalPlaces = Infinity) => {
    return setDecimalPlaces(celsius + 273.15, decimalPlaces);
};

export const fahrenheitToCelsius = (fahrenheit: number, decimalPlaces = Infinity) => {
    return setDecimalPlaces((fahrenheit - 32) * 5 / 9, decimalPlaces);
};

export const fahrenheitToKelvin = (fahrenheit: number, decimalPlaces = Infinity) => {
    return setDecimalPlaces((fahrenheit - 32) * 5 / 9 + 273.15, decimalPlaces);
};

export const kelvinToCelsius = (kelvin: number, decimalPlaces = Infinity) => {
    return setDecimalPlaces(kelvin - 273.15, decimalPlaces);
};

export const kelvinToFahrenheit = (kelvin: number, decimalPlaces = Infinity) => {
    return setDecimalPlaces((kelvin - 273.15) * 1.80 + 32, decimalPlaces);
};