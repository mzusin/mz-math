import { getRandom } from './random';
import { HSLColor, RGBColor } from './types';
import { mod } from './other';
import { setDecimalPlaces } from './format';

// ------------------------ RANDOM COLOR -------------------------------------

export const getRandomHSLColor = () : HSLColor => {
    const h = getRandom(1, 360);
    const s = getRandom(0, 100);
    const l = getRandom(0, 95); // [95, 100] is too light
    return [h, s, l];
};

/**
 * generate random color with the given hue
 */
export const getRandomHSLColorWithHue = (h: number) : HSLColor => {
    const s = getRandom(0, 100);
    const l = getRandom(0, 95); // [95, 100] is too light
    return [h, s, l];
};

/**
 * generate random color with the given saturation
 */
export const getRandomHSLColorWithSaturation = (s: number) : HSLColor => {
    const h = getRandom(1, 360);
    const l = getRandom(0, 95); // [95, 100] is too light
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
    const l = getRandom(lightStart, lightEnd); // [95, 100] is too light
    return [h, s, l];
};

// ----------------------- CONVERT COLORS --------------------------------------

/**
 * helper: convert hue value to %
 * @param {number} h
 * @return {number} [0, 100] %
 */
const convertHueToPercent = (h : number) : number => {

    // the hue value needs to be multiplied by 60 to convert it to degrees
    h *= 60;

    // if hue becomes negative, you need to add 360 to, because a circle has 360 degrees
    if(h < 0){
        h += 360;
    }

    // convert huw to %
    return h * 100 / 360;
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
    max = (min === undefined) ? Math.max(r, g, b) : max;

    // if the min and max value are the same -> no hue, as it's gray
    if(min === max) return 0;

    // if red is max
    if(max === r){
        return convertHueToPercent((g - b) / (max - min));
    }

    // if green is max
    if(max === g){
        return convertHueToPercent(2.0 + (b - r) / (max - min));
    }

    // if blue is max
    if(max === b){
        return convertHueToPercent(4.0 + (r - g) / (max - min));
    }

    return 0;
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

    let rHelper = h + 0.333;
    let gHelper = h;
    let bHelper = h - 0.333;

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
