import { rgbToHsl, hslToRgb } from '../src/color';

describe('Convert RGB to HSL', () => {
    test('rgb[100, 100, 100] to hsl with 2 decimal places', () => {
        expect(rgbToHsl([100, 100, 100], 2)).toStrictEqual([0, 0, 39.22]);
    });

    test('rgb[0, 0, 0] to hsl with 2 decimal places', () => {
        expect(rgbToHsl([0, 0, 0], 2)).toStrictEqual([0, 0, 0]);
    });

    test('rgb[255, 255, 255] to hsl with 2 decimal places', () => {
        expect(rgbToHsl([255, 255, 255], 2)).toStrictEqual([0, 0, 100]);
    });

    test('rgb out of range - above', () => {
        expect(rgbToHsl([500, 500, 500], 2)).toStrictEqual([0, 0, 100]);
    });

    test('rgb out of range - below', () => {
        expect(rgbToHsl([-100, -100, -100], 2)).toStrictEqual([0, 0, 0]);
    });

    test('rgb[255, 0, 0] to hsl with 2 decimal places', () => {
        expect(rgbToHsl([255, 0, 0], 2)).toStrictEqual([0, 100, 50]); // red
    });
});

describe('Convert HSL to RGB', () => {
    test('hsl[0, 0, 39] to rgb with 2 decimal places', () => {
        expect(hslToRgb([0, 0, 39], 2)).toStrictEqual([99.45, 99.45, 99.45]);
    });

    test('hsl[0, 0, 0] to rgb with 2 decimal places', () => {
        expect(hslToRgb([0, 0, 0], 2)).toStrictEqual([0, 0, 0]);
    });

    test('hsl[0, 0, 100] to rgb with 2 decimal places', () => {
        expect(hslToRgb([0, 0, 100], 2)).toStrictEqual([255, 255, 255]);
    });

    test('hsl out of range - above', () => {
        expect(hslToRgb([500, 500, 500], 2)).toStrictEqual([255, 255, 255]);
    });

    test('hsl out of range - below', () => {
        expect(hslToRgb([-100, -100, -100], 2)).toStrictEqual([0, 0, 0]);
    });

    test('hsl[0, 100, 50] to rgb with 2 decimal places', () => {
        expect(hslToRgb([0, 100, 50], 2)).toStrictEqual([255, 0, 0]); // red
    });
});