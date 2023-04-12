# Matrix Subtraction

The following functions are used to subtract matrices: **m2Sub** for a 2D matrices, **m3Sub** for a 3D matrices, and **mSub** for the general case. Each function receives an optional **decimalPlaces** parameter.

**2D Matrix**
```js
import { m2Sub, Matrix2 } from 'mz-math';

const matrix1: Matrix2 = [
  [1, 2],
  [3, 4],
];

const matrix2: Matrix2 = [
  [5, 6],
  [7, 8],
];

const sub = m2Sub(matrix1, matrix2); 
/*
[
  [-4, -4],
  [-4, -4],
]
 */
```

**3D Matrix**
```js
import { m2Sub, Matrix3 } from 'mz-math';

const matrix1: Matrix3 = [
  [1, 2, 10],
  [3, 4, 20],
];

const matrix2: Matrix3 = [
  [5, 6, 30],
  [7, 8, 40],
];

const sub = m2Sub(matrix1, matrix2);
/*
[
  [-4, -4, -20],
  [-4, -4, -20],
]
 */
```

**General Case**

```js
import { mSub, Matrix } from 'mz-math';

const matrix1: Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

const matrix2: Matrix = [
  [9,  10, 11, 12],
  [13, 14, 15, 16],
];

const sum = mSub(matrix1, matrix2);
/*
[
    [-8, -8, -8, -8],
    [-8, -8, -8, -8],
]
 */
```