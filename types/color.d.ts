import { HSLColor, RGBColor } from './types';
export declare const getRandomHSLColor: () => HSLColor;
/**
 * generate random color with the given hue
 */
export declare const getRandomHSLColorWithHue: (h: number) => HSLColor;
/**
 * generate random color with the given saturation
 */
export declare const getRandomHSLColorWithSaturation: (s: number) => HSLColor;
/**
 * generate random color with the given lightness
 */
export declare const getRandomHSLColorWithLightness: (l: number) => HSLColor;
export declare const getRandomGrayscaleHSLColor: () => HSLColor;
export declare const getRandomHSLColorWithinRanges: (hueStart?: number, hueEnd?: number, saturationStart?: number, saturationEnd?: number, lightStart?: number, lightEnd?: number) => HSLColor;
export declare const getShiftedHue: (color: HSLColor, shift?: number) => HSLColor;
export declare const getShiftedLightness: (color: HSLColor, shift?: number) => HSLColor;
export declare const getShiftedSaturation: (color: HSLColor, shift?: number) => HSLColor;
/**
 * HSL to hex
 * hslToHex(360, 100, 50)  // [360, 100, 5] ==> "#ff0000" (red)
 */
export declare const hslToHex: (h: number, s: number, l: number) => string;
/**
 * get luminance from RGB
 * @param {number} r [0, 255]
 * @param {number} g [0, 255]
 * @param {number} b [0, 255]
 * @param {number|undefined=} min - min number of [r, g, b]
 * @param {number|undefined=} max - max number of [r, g, b]
 * @return {number} [0, 100] %
 */
export declare const getLuminance: (r: number, g: number, b: number, min?: number | undefined, max?: number | undefined) => number;
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
export declare const getSaturation: (r: number, g: number, b: number, min?: number | undefined, max?: number | undefined, l?: number | undefined) => number;
/**
 * get hue from RGB
 * @param {number} r [0, 255]
 * @param {number} g [0, 255]
 * @param {number} b [0, 255]
 * @param {number|undefined=} min - min number of [r, g, b]
 * @param {number|undefined=} max - max number of [r, g, b]
 * @return {number} [0, 100] % - we use here % instead of [0, 359] degrees
 */
export declare const getHue: (r: number, g: number, b: number, min?: number | undefined, max?: number | undefined) => number;
/**
 * convert RGB to HSL
 * r, g, and b should be in the range [0, 255]
 */
export declare const rgbToHsl: (r: number, g: number, b: number) => HSLColor;
export declare const hslToRgb: (h: number, s: number, l: number) => RGBColor;
