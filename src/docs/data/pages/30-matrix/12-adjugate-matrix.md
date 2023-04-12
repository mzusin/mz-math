# Adjugate Matrix

To adjugate matrices, you can use the **m2Adjugate**, **m3Adjugate**, or **mAdjugate** functions. Each function supports an optional **decimalPlaces** parameter. If matrix can't be  adjugated, the functions return **null**.

**2x2 matrix**

```js
import { Matrix2, m2Adjugate } from 'mz-math';

const m2x2: Matrix2 = [
  [3, 5],
  [-7, 2],
];

const adj: Matrix2 | null = m2Adjugate(m2x2);

/*
[
    [2, -5],
    [7, 3],
]
 */
```

**3x3 matrix**

```js
import { Matrix3, m3Adjugate } from 'mz-math';

const m3x3: Matrix3 = [
  [3, 5, 1],
  [-7, 2, 5],
  [1, 2, 3],
];

const adj: Matrix3 | null = m3Adjugate(m3x3);

/*
[
    [-4, -13, 23],
    [26, 8, -22],
    [-16, -1, 41],
]
 */
```

**4x4 matrix or above**

```js
import { Matrix, mAdjugate } from 'mz-math';

const m4x4: Matrix = [
  [1, 1, 1, -1],
  [1, 1, -1, 1],
  [1, -1, 1, 1],
  [-1, 1, 1, 1],
];

const adj: Matrix | null = mAdjugate(m4x4);

/*
[
    [-4, -4, -4, 4],
    [-4, -4, 4, -4],
    [-4, 4, -4, -4],
    [4, -4, -4, -4],
]
 */
```
