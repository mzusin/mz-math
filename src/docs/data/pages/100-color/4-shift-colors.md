# Shift colors

```js
import { HSLColor, getShiftedHue, getShiftedSaturation, getShiftedLightness } from 'mz-math';

// shift hue in [0, 0, 39] by -10 degrees
const hslColor1: HSLColor = getShiftedHue([0, 0, 39], -10); // [350, 0, 39]

// shift saturation in [0, 0, 39] by 10
const hslColor2: HSLColor = getShiftedSaturation([0, 100, 39], 10); // [0, 10, 39]

// shift lightness in [0, 0, 39] by 10
const hslColor3: HSLColor = getShiftedLightness([0, 0, 39], 10); // [10, 0, 39]
```
