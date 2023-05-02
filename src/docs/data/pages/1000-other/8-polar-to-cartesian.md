# Conversion between polar & cartesian coordinates

```js
import { polarToCartesian, Vector2 } from 'mz-math';

const center: Vector2 = [0, 0];
const radii: Vector2 = [10, 20];
const angleInRad = Math.PI / 4;
const decimalPlaces = 2; // optional

const res: Vector2 = polarToCartesian(center, radii, angleInRad, decimalPlaces); // 7.07, 14.14
```
