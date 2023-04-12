## Vectors Dot Product

It's possible to calculate vector dot product using the **v2DotProduct**, **v3DotProduct**, and **vDotProduct** functions. Each function receives an optional **decimalPlaces** parameter.

```js
import { v2DotProduct, v3DotProduct, vDotProduct } from 'mz-math';

// 2D vector
const res1 = v2DotProduct([1, 2], [3, 4]); // 11
const res2 = v2DotProduct([1.1234, 2.35678], [3.1265, 4.91355], 2); // 15.09

// 3D vector
const res3 = v3DotProduct([1, 2, 3], [4, 5, 6]); // 32
const res4 = v3DotProduct([1.73845, 2.88465, 3.000111], [4.1163, 5.5501, 6.120777], 2); // 41.53

// General case
const res5 = vDotProduct([1, 2, 3, 4], [5, 6, 7, 8]); // 70
const res6 = vDotProduct([1.123, 2.123, 3.123, 4.123], [5.123, 6.123, 7.123, 8.123], 1); // 74.5
```