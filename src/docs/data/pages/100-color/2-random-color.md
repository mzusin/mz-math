# Get random color

```js
import { 
  HSLColor, RGBColor, getRandomHexColor,
  getRandomRGBColor, getRandomHSLColor, 
  getRandomHSLColorWithHue, getRandomHSLColorWithSaturation, 
  getRandomHSLColorWithinRanges, getRandomGrayscaleHSLColor 
} from 'mz-math';

// get random HEX color
const hexColor: string = getRandomHexColor();

// get random RGB color
const rgbColor: RGBColor = getRandomRGBColor();

// get random HSL color
const hslColor1: HSLColor = getRandomHSLColor();

// get random HSL color with the specified hue
const hslColor2: HSLColor = getRandomHSLColorWithHue(300); // hue = 300

// get random HSL color with the specified saturation
const hslColor2: HSLColor = getRandomHSLColorWithSaturation(50); // saturation = 50

// get random HSL color with the specified lightness
const hslColor3: HSLColor = getRandomHSLColorWithLightness(50); // lightness = 50

// get random HSL color with the specified ranges:
// hue: [10, 20], saturation: [0, 100], lightness: [30, 50]
const hslColor4: HSLColor = getRandomHSLColorWithinRanges(
    10, 20, // hue range
    0, 100, // saturation range
    30, 50, // lightness range
);

// get random gray color
const hslColor5: HSLColor = getRandomGrayscaleHSLColor();
```