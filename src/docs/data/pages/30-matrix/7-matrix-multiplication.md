# Matrix Multiplication

You can multiply matrices using the **mMul** function. The function receives an optional **decimalPlaces** parameter.

```js
import { mMul, Matrix3, Matrix2 } from 'mz-math';

const matrix1: Matrix3 = [
    [0, 3, 5],
    [5, 5, 2],
];

const matrix2: Matrix2 = [
    [3, 4],
    [3, -2],
    [4, -2],
];

const res = mMul(matrix1, matrix2);

/*
[
    [29, -16],
    [38, 6],
]
 */
```

```js
import { mMul, Matrix2 } from 'mz-math';

const matrix1: Matrix2 = [
  [2.092345, -2.2345234],
  [5.56745, 3.235479],
];

const matrix2: Matrix2 = [
  [-1.46874567, 4.23453245],
  [7.234505, -6.93245],
];

const res = mMul(matrix1, matrix2, 2); // round to 2 decimal places

/*
[
    [-19.24, 24.35],
    [15.23, 1.15],
]
 */
```
