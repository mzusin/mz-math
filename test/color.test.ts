import {
    rgbToHsl,
    hslToRgb,
    hslToHex,
    getShiftedHue,
    getShiftedSaturation,
    getShiftedLightness,
    rgbToHex,
    hexToRgb,
} from '../src/main/color';

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

describe('Convert HSL to HEX', () => {
    test('hsl[0, 0, 39] to hex', () => {
        expect(hslToHex([0, 0, 39])).toStrictEqual('#636363');
    });

    test('hsl[0, 0, 0] to hex', () => {
        expect(hslToHex([0, 0, 0])).toStrictEqual('#000000');
    });

    test('hsl[0, 0, 100] to hex', () => {
        expect(hslToHex([0, 0, 100])).toStrictEqual('#ffffff');
    });

    test('hsl to hex - out of range - above', () => {
        expect(hslToHex([500, 500, 500])).toStrictEqual('#ffffff');
    });

    test('hsl to hex - out of range - below', () => {
        expect(hslToHex([-100, -100, -100])).toStrictEqual('#000000');
    });

    test('hsl[0, 100, 50] to hex', () => {
        expect(hslToHex([0, 100, 50])).toStrictEqual('#ff0000'); // red
    });

    test('hsl[10, 10, 10] to hex', () => {
        expect(hslToHex([10, 10, 10])).toStrictEqual('#1c1817');
    });
});

describe('Shift colors', () => {
    test('shift hue in [0, 0, 39] by 10 degrees', () => {
        expect(getShiftedHue([0, 0, 39], 10)).toStrictEqual([10, 0, 39]);
    });

    test('shift hue in [0, 0, 39] by -10 degrees', () => {
        expect(getShiftedHue([0, 0, 39], -10)).toStrictEqual([350, 0, 39]);
    });

    test('shift saturation in [0, 0, 39] by 10', () => {
        expect(getShiftedSaturation([0, 0, 39], 10)).toStrictEqual([0, 10, 39]);
    });

    test('shift saturation in [0, 100, 39] by 10', () => {
        expect(getShiftedSaturation([0, 100, 39], 10)).toStrictEqual([0, 10, 39]);
    });

    test('shift lightness in [0, 0, 39] by 10', () => {
        expect(getShiftedLightness([0, 0, 39], 10)).toStrictEqual([0, 0, 49]);
    });

    test('shift lightness in [0, 10, 1009] by 10', () => {
        expect(getShiftedLightness([0, 10, 100], 10)).toStrictEqual([0, 10, 10]);
    });
});

describe('Convert RGB to HEX', () => {

    test('rgb[235, 64, 52] to hex', () => {
        expect(rgbToHex([235, 64, 52])).toStrictEqual('#eb4034');
    });

    test('rgb[158, 97, 27] to hex', () => {
        expect(rgbToHex([158, 97, 27])).toStrictEqual('#9e611b');
    });

    test('rgb[16, 163, 134] to hex', () => {
        expect(rgbToHex([16, 163, 134])).toStrictEqual('#10a386');
    });

    test('rgb[255, 255, 255] to hex', () => {
        expect(rgbToHex([255, 255, 255])).toStrictEqual('#ffffff');
    });

    test('rgb[0, 0, 0] to hex', () => {
        expect(rgbToHex([0, 0, 0])).toStrictEqual('#000000');
    });
});

describe('Convert HEX to RGB', () => {

    test('hexToRgb(#eb4034)', () => {
        expect(hexToRgb('#eb4034')).toStrictEqual([235, 64, 52]);
    });

    test('hexToRgb(#9e611b)', () => {
        expect(hexToRgb('#9e611b')).toStrictEqual([158, 97, 27]);
    });

    test('hexToRgb(#10a386)', () => {
        expect(hexToRgb('#10a386')).toStrictEqual([16, 163, 134]);
    });

    test('hexToRgb(#ffffff)', () => {
        expect(hexToRgb('#ffffff')).toStrictEqual([255, 255, 255]);
    });

    test('hexToRgb(#fff)', () => {
        expect(hexToRgb('#fff')).toStrictEqual([255, 255, 255]);
    });

    test('hexToRgb(#000000)', () => {
        expect(hexToRgb('#000000')).toStrictEqual([0, 0, 0]);
    });

    test('hexToRgb(#000)', () => {
        expect(hexToRgb('#000')).toStrictEqual([0, 0, 0]);
    });

    test('hexToRgb(xyz)', () => {
        expect(hexToRgb('xyz')).toStrictEqual(null);
    });
});
