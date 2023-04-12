# Inverse Matrix

To inverse matrices, you can use the **m2Inverse**, **m3Inverse**, or **mInverse** functions. Each function supports an optional **decimalPlaces** parameter. If matrix is not invertible, the functions return **null**.

**2x2 matrix**

```js
import { Matrix2, m2Inverse } from 'mz-math';

const m2x2: Matrix2 = [
  [3, 5],
  [-7, 2],
];

const inverted: Matrix2|null = m2Inverse(m2x2, 3); // round to 3 decimal places
/*
[
    [0.049, -0.122],
    [0.171, 0.073],
]
 */
```

**3x3 matrix**

```js
import { Matrix3, m3Inverse } from 'mz-math';

const m3x3: Matrix3 = [
  [-1, -2, 2],
  [2, 1, 1],
  [3, 4, 5]
];

const inverted: Matrix3|null = m3Inverse(m3x3, 2); // round to 2 decimal places
/*
[
    [0.04, 0.78, -0.17],
    [-0.30, -0.48, 0.22],
    [0.22, -0.09, 0.13]
]
 */
```

**3x3 matrix or above**

```js
import { Matrix, mInverse } from 'mz-math';

const m4x4: Matrix = [
  [1, 1, 1, -1],
  [1, 1, -1, 1],
  [1, -1, 1, 1],
  [-1, 1, 1, 1],
];

const inverted: Matrix|null = mInverse(m4x4); 
/*
[
    [0.25, 0.25, 0.25, -0.25],
    [0.25, 0.25, -0.25, 0.25],
    [0.25, -0.25, 0.25, 0.25],
    [-0.25, 0.25, 0.25, 0.25],
]
 */
```
