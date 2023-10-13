import { getRandom } from './random';
import { HSLColor, LABColor, RGBColor } from '../types';
import { mod } from './other';
import { setDecimalPlaces } from './format';

// ------------------------ RANDOM COLOR -------------------------------------

export const getRandomRGBColor = () : RGBColor => {
    const hslColor = getRandomHSLColor();
    return hslToRgb(hslColor);
};

export const getRandomHexColor = () : string => {
    const hslColor = getRandomHSLColor();
    return hslToHex(hslColor);
};

export const getRandomHSLColor = () : HSLColor => {
    const h = getRandom(1, 360);
    const s = getRandom(0, 100);
    const l = getRandom(0, 100);
    return [h, s, l];
};

/**
 * generate random color with the given hue
 */
export const getRandomHSLColorWithHue = (h: number) : HSLColor => {
    const s = getRandom(0, 100);
    const l = getRandom(0, 100);
    return [h, s, l];
};

/**
 * generate random color with the given saturation
 */
export const getRandomHSLColorWithSaturation = (s: number) : HSLColor => {
    const h = getRandom(1, 360);
    const l = getRandom(0, 100);
    return [h, s, l];
};

/**
 * generate random color with the given lightness
 */
export const getRandomHSLColorWithLightness = (l: number) : HSLColor => {
    const h = getRandom(1, 360);
    const s = getRandom(0, 100);
    return [h, s, l];
};

export const getRandomGrayscaleHSLColor = () : HSLColor => {
    const l = getRandom(0, 100);
    return [0, 0, l];
};

export const getRandomHSLColorWithinRanges = (
    hueStart = 1, hueEnd = 360,
    saturationStart = 0, saturationEnd = 100,
    lightStart = 0, lightEnd = 100
) : HSLColor => {
    const h = getRandom(hueStart, hueEnd);
    const s = getRandom(saturationStart, saturationEnd);
    const l = getRandom(lightStart, lightEnd);
    return [h, s, l];
};

// ----------------------- CONVERT COLORS --------------------------------------

/**
 * helper: convert hue value to degrees.
 * @param {number} h
 * @return {number} [0, 360] degrees
 */
const convertHueToDegrees = (h : number) : number => {

    // the hue value needs to be multiplied by 60 to convert it to degrees
    h *= 60;

    // if hue becomes negative, you need to add 360 to, because a circle has 360 degrees
    if(h < 0){
        h += 360;
    }

    return h;
    // convert huw to %
    // return h * 100 / 360;
};

/**
 * get hue from RGB
 * @param {number} r [0, 255]
 * @param {number} g [0, 255]
 * @param {number} b [0, 255]
 * @param {number|undefined=} min - min number of [r, g, b]
 * @param {number|undefined=} max - max number of [r, g, b]
 * @return {number} [0, 100] % - we use here % instead of [0, 359] degrees
 */
const getHue = (r : number, g : number, b : number, min : number | undefined = undefined, max : number | undefined = undefined) : number => {

    // find the minimum and maximum values of r, g, and b if they are not provided
    min = (min === undefined) ? Math.min(r, g, b) : min;
    max = (max === undefined) ? Math.max(r, g, b) : max;

    // if the min and max value are the same -> no hue, as it's gray
    if(min === max) return 0;

    const diff = max - min;

    let h = 0;

    // if red is max
    if(max === r){
        h = (g - b) / diff + (g < b ? 6 : 0);
    }

    // if green is max
    if(max === g){
        h = 2 + (b - r) / diff;
    }

    // if blue is max
    if(max === b){
        h = 4 + (r - g) / diff;
    }

    return convertHueToDegrees(h);
};

/**
 * get luminance from RGB
 * @param {number} r [0, 255]
 * @param {number} g [0, 255]
 * @param {number} b [0, 255]
 * @param {number|undefined=} min - min number of [r, g, b]
 * @param {number|undefined=} max - max number of [r, g, b]
 * @return {number} [0, 100] %
 */
const getLuminance = (
    r : number,
    g : number,
    b : number,
    min : number | undefined = undefined,
    max : number | undefined = undefined) : number => {

    // find the minimum and maximum values of r, g, and b if they are not provided
    min = (min === undefined) ? Math.min(r, g, b) : min;
    max = (min === undefined) ? Math.max(r, g, b) : max;

    // calculate the luminance value
    // @ts-ignore
    const l = (min + max) / 2; // [0, 1]

    // return l value in %
    return l * 100;
};

/**
 * get saturation from RGB
 * @param {number} r [0, 255]
 * @param {number} g [0, 255]
 * @param {number} b [0, 255]
 * @param {number|undefined=} min - min number of [r, g, b]
 * @param {number|undefined=} max - max number of [r, g, b]
 * @param {number|undefined=} l - luminance in [0, 100] %
 * @return {number} [0, 100] %
 */
const getSaturation = (
    r : number,
    g : number,
    b : number,
    min : number | undefined = undefined,
    max : number | undefined = undefined,
    l : number | undefined = undefined) : number => {

    // find the minimum and maximum values of r, g, and b if they are not provided
    min = (min === undefined) ? Math.min(r, g, b) : min;
    max = (min === undefined) ? Math.max(r, g, b) : max;

    // if the min and max value are the same -> no saturation, as it's gray
    if(min === max) return 0;

    // calculate luminance if it's not provided
    l = (l === undefined) ? getLuminance(r, g, b) : l;

    // check the level of luminance
    const s = (l <= 50) ?
        // @ts-ignore
        ((max - min) / (max + min)) : // this formula is used when luminance <= 50%
        // @ts-ignore
        (max - min) / (2.0 - max - min);  // this formula is used when luminance > 50%

    // return saturation in %
    return s * 100;
};

export const rgbToHsl = (rgb: RGBColor, decimalPlaces = Infinity): HSLColor => {

    // convert rgb values to the range [0, 1]
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;

    // find the minimum and maximum values of r, g, and b
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    // calculate the luminance value in %
    const l = getLuminance(r, g, b, min, max);

    // calculate the saturation in %
    const s = getSaturation(r, g, b, min, max, l);

    // calculate the hue in % (not in degrees!)
    const h = getHue(r, g, b, min, max);

    if(h > 360 || s > 100 || l > 100){
        return [0, 0, 100];
    }

    if(h < 0 || s < 0 || l < 0){
        return [0, 0, 0];
    }

    return [
        setDecimalPlaces(h, decimalPlaces),
        setDecimalPlaces(s, decimalPlaces),
        setDecimalPlaces(l, decimalPlaces),
    ];
};

/**
 * helper: HSL to RGB
 */
const hslToRgbHelper = (helper1 : number, helper2 : number, colorHelper : number) : number => {

    // all values need to be between 0 and 1
    // if you get a negative value you need to add 1 to it
    if(colorHelper < 0) colorHelper += 1;

    // if you get a value above 1 you need to subtract 1 from it.
    if(colorHelper > 1) colorHelper -= 1;

    if(colorHelper * 6 < 1) return helper2 + (helper1 - helper2) * 6 * colorHelper;

    if(colorHelper * 2 < 1) return helper1;

    if(colorHelper * 3 < 2){
        return helper2 + (helper1 - helper2) * (0.666 - colorHelper) * 6;
    }
    else{
        return helper2;
    }
};

export const hslToRgb = (hsl: HSLColor, decimalPlaces = Infinity): RGBColor => {

    // convert all values to [0, 1] from %
    const h = hsl[0] / 100;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;

    // if there is no saturation -> it’s grey
    if(s === 0){
        // convert the luminance from [0, 1] to [0, 255]
        const gray = l * 255;
        return [gray, gray, gray];
    }

    // check the level of luminance
    const helper1 = (l < 0.5) ?
        (l * (1.0 + s)) :
        (l + s - l * s);

    const helper2 = 2 * l - helper1;

    const rHelper = h + 0.333;
    const gHelper = h;
    const bHelper = h - 0.333;

    let r = hslToRgbHelper(helper1, helper2, rHelper);
    let g = hslToRgbHelper(helper1, helper2, gHelper);
    let b = hslToRgbHelper(helper1, helper2, bHelper);

    // convert rgb to [0, 255]
    r *= 255;
    g *= 255;
    b *= 255;

    if(r > 255 || g > 255 || b > 255){
        return [255, 255, 255];
    }

    if(r < 0 || g < 0 || b < 0){
        return [0, 0, 0];
    }

    return [
        setDecimalPlaces(r, decimalPlaces),
        setDecimalPlaces(g, decimalPlaces),
        setDecimalPlaces(b, decimalPlaces),
    ];
};

/**
 * HSL to hex
 * hslToHex(360, 100, 50)  // [360, 100, 5] ==> "#ff0000" (red)
 */
export const hslToHex = (hsl: HSLColor) => {

    if(hsl[0] > 360 || hsl[1] > 100 || hsl[2] > 100){
        return '#ffffff';
    }

    if(hsl[0] < 0 || hsl[1] < 0 || hsl[2] < 0){
        return '#000000';
    }

    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;

    let r, g, b;
    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = (x: number) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

/**
 * RGB to HEX
 * rgbToHex([235, 64, 52]) // #eb4034
 */
export const rgbToHex = (rgb: RGBColor) => {
    const [r, g, b] = rgb;
    return '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
};

export const hexToRgb = (hex: string) : RGBColor | null => {

    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const _hex = hex.replace(shorthandRegex, (_m, r, g, b) => {
        return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(_hex);
    if(!result) return null;

    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);

    return [r, g, b];
};

export const rgbToLab = (rgb: RGBColor, decimalPlaces = Infinity) : LABColor => {

    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;

    r = (r > 0.04045) ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = (g > 0.04045) ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = (b > 0.04045) ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

    let x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
    let y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
    let z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

    x = (x > 0.008856) ? Math.pow(x, 1/3) : (7.787 * x) + 16/116;
    y = (y > 0.008856) ? Math.pow(y, 1/3) : (7.787 * y) + 16/116;
    z = (z > 0.008856) ? Math.pow(z, 1/3) : (7.787 * z) + 16/116;

    return [
        setDecimalPlaces((116 * y) - 16, decimalPlaces),
        setDecimalPlaces(500 * (x - y), decimalPlaces),
        setDecimalPlaces(200 * (y - z), decimalPlaces),
    ];
};

export const labToRgb = (lab: LABColor, decimalPlaces = Infinity) : RGBColor => {
    let y = (lab[0] + 16) / 116;
    let x = lab[1] / 500 + y;
    let z = y - lab[2] / 200;

    x = 0.95047 * ((x * x * x > 0.008856) ? x * x * x : (x - 16/116) / 7.787);
    y = 1.00000 * ((y * y * y > 0.008856) ? y * y * y : (y - 16/116) / 7.787);
    z = 1.08883 * ((z * z * z > 0.008856) ? z * z * z : (z - 16/116) / 7.787);

    let r = x *  3.2406 + y * -1.5372 + z * -0.4986;
    let g = x * -0.9689 + y *  1.8758 + z *  0.0415;
    let b = x *  0.0557 + y * -0.2040 + z *  1.0570;

    r = (r > 0.0031308) ? (1.055 * Math.pow(r, 1/2.4) - 0.055) : 12.92 * r;
    g = (g > 0.0031308) ? (1.055 * Math.pow(g, 1/2.4) - 0.055) : 12.92 * g;
    b = (b > 0.0031308) ? (1.055 * Math.pow(b, 1/2.4) - 0.055) : 12.92 * b;

    return [
        setDecimalPlaces(Math.max(0, Math.min(1, r)) * 255, decimalPlaces),
        setDecimalPlaces(Math.max(0, Math.min(1, g)) * 255, decimalPlaces),
        setDecimalPlaces(Math.max(0, Math.min(1, b)) * 255, decimalPlaces),
    ];
};

// ----------------------- GET SHIFTED COLORS --------------------------------------

export const getShiftedHue = (color: HSLColor, shift = 180) : HSLColor => {
    let hue = color[0];
    hue += shift;

    if (hue > 360 || hue < 0) {
        hue = mod(hue, 360);
    }

    return [hue, color[1], color[2]];
};

export const getShiftedLightness = (color: HSLColor, shift = 10) : HSLColor => {
    let lightness = color[2];
    lightness += shift;

    if (lightness > 100 || lightness < 0) {
        lightness = mod(lightness, 100);
    }

    return [color[0], color[1], lightness];
};

export const getShiftedSaturation = (color: HSLColor, shift = 10) : HSLColor => {
    let saturation = color[1];
    saturation += shift;

    if (saturation > 100) {
        saturation -= 100;
    }

    if(saturation < 0){
        saturation += 100;
    }

    return [color[0], saturation, color[2]];
};

// ----------------------- SIMILAR COLORS --------------------------------------

/**
 * Measure the perceptual difference between two RGB colors using the CIE76 color difference formula:
 * delta = Math.sqrt((L2 - L1)^2 + (a2 - a1)^2 + (b2 - b1)^2)
 * https://en.wikipedia.org/wiki/Color_difference
 * https://stackoverflow.com/questions/13586999/color-difference-similarity-between-two-values-with-js
 * <= 1.0     Not perceptible by human eyes.
 * 1 - 2      Perceptible through close observation.
 * 2 - 10     Perceptible at a glance.
 * 11 - 49    Colors are more similar than opposite
 * 100        Colors are exact opposite
 */
export const getColorsDelta = (rgbA: RGBColor, rgbB: RGBColor, decimalPlaces = Infinity) => {
    const labA = rgbToLab(rgbA, decimalPlaces);
    const labB = rgbToLab(rgbB, decimalPlaces);

    // differences between the LAB components of the two colors
    const deltaL = labA[0] - labB[0];
    const deltaA = labA[1] - labB[1];
    const deltaB = labA[2] - labB[2];

    // chroma components
    const c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
    const c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
    const deltaC = c1 - c2;

    // difference in hue, deltaH, which takes into account both the differences
    // in the a* and b* components of LAB and the differences in chroma.
    let deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
    deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);

    const sc = 1.0 + 0.045 * c1;
    const sh = 1.0 + 0.015 * c1;

    // It applies weighting factors to the differences in lightness (deltaL),
    // chroma (deltaC), and hue (deltaH).
    const deltaLKlsl = deltaL / (1.0);
    const deltaCkcsc = deltaC / (sc);
    const deltaHkhsh = deltaH / (sh);

    // It computes the final color difference using the CIE76 formula:
    // deltaE = sqrt(deltaLKlsl^2 + deltaCkcsc^2 + deltaHkhsh^2),
    // where deltaLKlsl is the weighted lightness difference,
    // deltaCkcsc is the weighted chroma difference,
    // and deltaHkhsh is the weighted hue difference.
    const i = deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;

    // It returns the calculated color difference,
    // optionally rounded to the specified number of decimal places.
    return i < 0 ? 0 : Math.sqrt(i);
};
