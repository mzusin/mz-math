# Multiply matrix by scalar

You can multiply a matrix by a scalar using the **m2MulScalar**, **m3MulScalar**, or **mMulScalar** functions. Each function receives an optional **decimalPlaces** parameter.

**2D Matrix**

```js
import { m2MulScalar, Matrix2 } from 'mz-math';

const m2: Matrix2 = [
    [1, 2],
    [3, 4],
];

const res = m2MulScalar(m2, 5); 
/*
[
    [5, 10],
    [15, 20],
]
 */
```

```js
import { m2MulScalar, Matrix2 } from 'mz-math';

const m2: Matrix2 = [
  [1.12345, 12.66746776],
  [15.74432, -12.345345],
];

const res = m2MulScalar(m2, 10, 2); // 2 decimal places
/*
[
    [11.23, 126.67],
    [157.44, -123.45],
]
 */
```

**3D Matrix**

```js
import { m3MulScalar, Matrix3 } from 'mz-math';

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];

const res = m3MulScalar(m3, 2); 
/*
[
    [2, 4, 6],
    [8, 10, 12],
]
 */
```

```js
import { m3MulScalar, Matrix3 } from 'mz-math';

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];

const res = m3MulScalar(m3, 1.5123123, 1); // 1 decimal place
/*
[
  [1.5, 3, 4.5],
  [6, 7.6, 9.1],
]
 */
```
