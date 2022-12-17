import { HSLColor, RGBColor } from './types';
export declare const getRandomRGBColor: () => RGBColor;
export declare const getRandomHexColor: () => string;
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
export declare const rgbToHsl: (rgb: RGBColor, decimalPlaces?: number) => HSLColor;
export declare const hslToRgb: (hsl: HSLColor, decimalPlaces?: number) => RGBColor;
/**
 * HSL to hex
 * hslToHex(360, 100, 50)  // [360, 100, 5] ==> "#ff0000" (red)
 */
export declare const hslToHex: (hsl: HSLColor) => string;
export declare const getShiftedHue: (color: HSLColor, shift?: number) => HSLColor;
export declare const getShiftedLightness: (color: HSLColor, shift?: number) => HSLColor;
export declare const getShiftedSaturation: (color: HSLColor, shift?: number) => HSLColor;
