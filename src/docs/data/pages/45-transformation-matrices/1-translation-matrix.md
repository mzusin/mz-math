# Translation Matrix

It's possible to get a translation matrix using the functions below. Each function supports an optional **decimalPlaces** parameter.

**Translation in non-homogeneous coordinates**

```js
import { m2Translation, m3Translation, Matrix2, Matrix3 } from 'mz-math';

// translation matrix for the position [10, 20]
const mat1: Matrix2 = m2Translation([10, 20]);

/*
[
    [1, 0],
    [0, 1],
    [10, 20],
];
 */

// translation matrix for the position [10, 20, 30]
const mat2: Matrix3 = m3Translation([10, 20, 30]);

/*
[
   [1, 0, 0],
   [0, 1, 0],
   [0, 0, 1],
   [10, 20, 30],
];
 */
```

**Translation in homogeneous coordinates**

```js
import { m2TranslationH, m3TranslationH, Matrix3, Matrix4 } from 'mz-math';

// translation matrix for the position [10, 20] in homogeneous coordinates.
const mat1: Matrix3 = m2TranslationH([10, 20, 1]);

/*
[
    [1, 0, 10],
    [0, 1, 20],
    [0, 0, 1],
];
 */

// translation matrix for the position [10, 20, 30] in homogeneous coordinates.
const mat2: Matrix4 = m3TranslationH([10, 20, 30, 1]);

/*
[
    [1, 0, 0, 10],
    [0, 1, 0, 20],
    [0, 0, 1, 30],
    [0, 0, 0, 1],
];
 */
```