# Color

The library contains several color helper functions. It works with the following color types:

```js
import { HSLColor, RGBColor, LABColor } from 'mz-math';

// [hue, saturation, lightness] 
const hslColor: HSLColor = [0, 0, 0]; // [0-360, 0-100, 0-100]

// [r, g, b] 
const rgbColor: RGBColor = [255, 255, 255]; // [0, 255, 0, 255, 0, 255]

// [l, a, b]
const labColor: LABColor = [100, 0, 0];
```
