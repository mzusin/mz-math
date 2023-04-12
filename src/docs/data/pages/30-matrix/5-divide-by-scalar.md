# Divide matrix by scalar

You can multiply a matrix by a scalar using the **m2DivideScalar**, **m3DivideScalar**, or **mDivideScalar** functions. Each function receives an optional **decimalPlaces** parameter.

**2D Matrix**

```js
import { m2DivideScalar, Matrix2 } from 'mz-math';

const m2: Matrix2 = [
    [1, 2],
    [3, 4],
];

const res = m2DivideScalar(m2, 5); 
/*
[
    [0.2, 0.4],
    [0.6, 0.8],
]
 */
```

```js
import { m2DivideScalar, Matrix2 } from 'mz-math';

const m2: Matrix2 = [
  [1.12345, 12.66746776],
  [15.74432, -12.345345],
];

const res = m2DivideScalar(m2, 10, 2); // 2 decimal places
/*
[
    [0.01, 0.13],
    [0.16, -0.12],,
]
 */
```

**3D Matrix**

```js
import { m3DivideScalar, Matrix3 } from 'mz-math';

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];

const res = m3DivideScalar(m3, 2); 
/*
[
    [0.5, 1, 1.5],
    [2, 2.5, 3],
]
 */
```

```js
import { m3DivideScalar, Matrix3 } from 'mz-math';

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];

const res = m3DivideScalar(m3, 1.5123123, 1); // 1 decimal place
/*
[
  [0.7, 1.3, 2],
  [2.6, 3.3, 4],
]
 */
```

**General Case**

```js
import { mDivideScalar, Matrix } from 'mz-math';

const matrix: Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

const res = mDivideScalar(matrix, 5);
/*
[
    [0.2, 0.4, 0.6, 0.8],
    [1, 1.2, 1.4, 1.6],
]
 */
```
