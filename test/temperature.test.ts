import {
    celsiusToFahrenheit,
    celsiusToKelvin,
    fahrenheitToCelsius,
    fahrenheitToKelvin,
    kelvinToCelsius,
    kelvinToFahrenheit,
} from '../src/main/temperature';

describe('Temperature Conversion', () => {
    
    describe('Celsius to Fahrenheit', () => {
        test('should convert 0°C to 32°F', () => {
            expect(celsiusToFahrenheit(0)).toStrictEqual(32);
        });

        test('should convert -40°C to -40°F', () => {
            expect(celsiusToFahrenheit(-40)).toStrictEqual(-40);
        });

        test('Test rounding', () => {
            expect(celsiusToFahrenheit(32.698034, 2)).toStrictEqual(90.86);
        });
    });

    describe('Celsius to Kelvin', () => {
        test('should convert 0°C to 273.15K', () => {
            expect(celsiusToKelvin(0)).toStrictEqual(273.15);
        });

        test('should convert -273.15°C to 0K', () => {
            expect(celsiusToKelvin(-273.15)).toStrictEqual(0);
        });
    });

    describe('Fahrenheit to Celsius', () => {
        test('should convert 32°F to 0°C', () => {
            expect(fahrenheitToCelsius(32)).toStrictEqual(0);
        });

        test('should convert -40°F to -40°C', () => {
            expect(fahrenheitToCelsius(-40)).toStrictEqual(-40);
        });
    });

    describe('Fahrenheit to Kelvin', () => {
        test('should convert 32°F to 273.15K', () => {
            expect(fahrenheitToKelvin(32)).toBeCloseTo(273.15);
        });

        test('should convert 212°F to 373.15K', () => {
            expect(fahrenheitToKelvin(212)).toBeCloseTo(373.15);
        });
    });

    describe('Kelvin to Celsius', () => {
        test('should convert 273.15K to 0°C', () => {
            expect(kelvinToCelsius(273.15)).toBeCloseTo(0);
        });

        test('should convert 0K to -273.15°C', () => {
            expect(kelvinToCelsius(0)).toBeCloseTo(-273.15);
        });
    });

    describe('Kelvin to Fahrenheit', () => {
        test('should convert 273.15K to 32°F', () => {
            expect(kelvinToFahrenheit(273.15)).toBeCloseTo(32);
        });

        test('should convert 373.15K to 212°F', () => {
            expect(kelvinToFahrenheit(373.15)).toBeCloseTo(212);
        });
    });
});