# Shearing Matrix

**2D shearing matrix**

```js
import { m2ShearingX, m2ShearingY, Matrix2 } from 'mz-math';

// shearing in x-axis, with y-axis fixed with (1,0) moving to (1, factor)
const factor = 5;
const mat1: Matrix2 = m2ShearingX(factor);
/*
[
    [1, 0],
    [5, 1],
];
 */

// shearing in y-axis, with x-axis fixed with (0,1) moving to (factor, 1)
const factor = 5;
const mat2: Matrix2 = m2ShearingY(factor);
/*
[
    [1, 5],
    [0, 1],
];
 */
```