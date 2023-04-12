# Multiply matrix by vector

You can multiply matrix by vector using the **mMulVector** function. The function receives an optional **decimalPlaces** parameter.

```js
import { mMulVector, Matrix3 } from 'mz-math';

const matrix: Matrix3 = [
    [0, 3, 5],
    [5, 5, 2],
];

const vector: Vector3 = [3, 4, 3];

const res = mMulVector(matrix, vector); // [27, 41]
```