# Convert Colors

```js
import { 
    HSLColor, RGBColor, LABColor,
    hslToRgb, rgbToHsl, 
    hslToHex, rgbToHex, hexToRgb, 
    rgbToLab, labToRgb,
} from 'mz-math';

const decimalPlaces = 2; // optional

// convert RGB color to HSL color
const hslColor: HSLColor = rgbToHsl([255, 0, 0], decimalPlaces); // [0, 100, 50] - red

// convert HSL color to RGB color
const rgbColor: RGBColor = hslToRgb([100, 100, 100], decimalPlaces);

// convert HSL color to hex
const hex: string = hslToHex([10, 10, 10]); // #1c1817

// convert RGB color to hex
const hex: string = rgbToHex([235, 64, 52]); // #eb4034

// convert HEX color to RGB
const rgbColor: RGBColor = hexToRgb('#eb4034'); // [235, 64, 52]

// convert RGB color to LAB
const labColor: LABColor = rgbToLab([255, 255, 255], decimalPlaces); // [100, 0, 0]

// convert LAB color to RGB
const rgbColor: RGBColor = labToRgb([100, 0, 0], decimalPlaces); // [255, 255, 255]
```