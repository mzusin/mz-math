# Similar Colors

```js
import { getColorsDelta, RGBColor } from 'mz-math';

const decimalPlaces = 2; // optional

const rgb1: RGBColor = [255, 0, 0];
const rgb2: RGBColor = [255, 0, 0];

const delta: number = getColorsDelta(rgb1, rgb2, decimalPlaces);
```
<br/>

**Result**

| Value   | Description                            |
|---------|----------------------------------------|
| <= 1.0  | Not perceptible by human eyes.         |
| 1 - 2   | Perceptible through close observation. |
| 2 - 10  | Perceptible at a glance.               |
| 11 - 49 | Colors are more similar than opposite  |
| 100     | Colors are exact opposite              |


[Source - RGB-LAB Repo](https://github.com/antimatter15/rgb-lab)