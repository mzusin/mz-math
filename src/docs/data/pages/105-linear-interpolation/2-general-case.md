# General linear interpolation

The **linearInterpolation()** function calculates linear interpolation using the following formula: `Y = ((X - X1) * (Y2 - Y1) / (X2 - X1)) + Y1`.

```js
import { linearInterpolation, Vector2 } from 'mz-math';

const x = 25;
const start: Vector2 = [10, 50];
const end: Vector2 = [100, 350];
const decimalPlaces = 2; // optional

const result = linearInterpolation(x, start, end, decimalPlaces);
```
