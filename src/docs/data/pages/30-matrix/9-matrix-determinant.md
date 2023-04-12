# Matrix Determinant

The determinant can be calculated for any square matrix using the **m2Determinant** function for a 2x2 matrix, using the **m3Determinant** function for a 3x3 matrix, or using **mDeterminant** for the general case.

Calculating the determinant for a 2x2 matrix:

```js
import { Matrix2, m2Determinant } from 'mz-math';

const m2x2: Matrix2 = [
  [5, 3],
  [-1, 4],
];

const d = m2Determinant(m2x2); // 23
```

Calculating the determinant for a 3x3 matrix:

```js
import { Matrix3, m3Determinant } from 'mz-math';

const m3x3: Matrix3 = [
  [4, -1, 1],
  [4, 5, 3],
  [-2, 0, 0],
];

const d = m3Determinant(m3x3); // 16
```

Calculating the determinant for a 4x4 matrix or above:

```js
import { Matrix, mDeterminant } from 'mz-math';

const m4x4: Matrix = [
  [4, 3, 2, 2],
  [0, 1, -3, 3],
  [0, -1, 3, 3],
  [0, 3, 1, 1]
];

const d = mDeterminant(m4x4); // -240
```