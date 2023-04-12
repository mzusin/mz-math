# Matrix Transposition

You can transpose a matrix using the **m2Transpose**, **m3Transpose**, or **mTranspose** functions.

**2D Matrix**

```js
import { m2Transpose, Matrix2 } from 'mz-math';

const m2: Matrix2 = [
  [-1, 5],
  [Math.PI, 3],
];

const res = m2Transpose(m2); 
/*
[
    [-1, Math.PI],
    [5, 3],
]
 */
```

**3D Matrix**

```js
import { m3Transpose, Matrix3 } from 'mz-math';

const m3: Matrix3 = [
  [1, 3, 7],
  [-2, 0, 5],
];

const res = m3Transpose(m3); 
/*
[
    [1, -2],
    [3, 0],
    [7, 5],
]
 */
```

**General Case**

```js
import { mTranspose, Matrix } from 'mz-math';

const matrix: Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

const res = mTranspose(matrix);
/*
[
    [1, 5],
    [2, 6],
    [3, 7],
    [4, 8],
]
 */
```
