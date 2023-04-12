# Convert Colors

```js
import { HSLColor, RGBColor, hslToRgb, rgbToHsl, hslToHex } from 'mz-math';

const decimalPlaces = 2; // optional

// convert RGB color to HSL color
const hslColor: HSLColor = rgbToHsl([255, 0, 0], decimalPlaces); // [0, 100, 50] - red

// convert HSL color to RGB color
const rgbColor: RGBColor = hslToRgb([100, 100, 100], decimalPlaces);

// convert HSL color to hex
const hex: string = hslToHex([10, 10, 10]); // #1c1817
```