# Matrix Sum

The following functions are used to add matrices: **m2Sum** for a 2D matrices, **m3Sum** for a 3D matrices, and **mSum** for the general case. Each function receives an optional **decimalPlaces** parameter.

**2D Matrix**

```js
import { m2Sum, Matrix2 } from 'mz-math';

const matrix1: Matrix2 = [
  [1, 2],
  [3, 4],
];

const matrix2: Matrix2 = [
  [5, 6],
  [7, 8],
];

const sum = m2Sum(matrix1, matrix2); 
/*
[
  [6, 8],
  [10, 12],
]
 */
```

**3D Matrix**
```js
import { m3Sum, Matrix3 } from 'mz-math';

const matrix1: Matrix3 = [
  [1, 2, 10],
  [3, 4, 20],
];

const matrix2: Matrix3 = [
  [5, 6, 30],
  [7, 8, 40],
];

const sum = m3Sum(matrix1, matrix2);
/*
[
  [6, 8, 40],
  [10, 12, 60],
]
 */
```

**General Case**
```js
import { mSum, Matrix } from 'mz-math';

const matrix1: Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

const matrix2: Matrix = [
  [9,  10, 11, 12],
  [13, 14, 15, 16],
];

const sum = mSum(matrix1, matrix2);
/*
[
  [10, 12, 14, 16],
  [18, 20, 22, 24],
]
 */
```