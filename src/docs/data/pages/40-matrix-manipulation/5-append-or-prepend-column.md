# Append or prepend a column to a matrix

```js
import { Matrix, Vector, mAppendCol, mPrependCol } from 'mz-math';

const m: Matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
];
const v: Vector = [9, 10];
const res1 = mAppendCol(m, v);
/*
[
  [1, 2, 3, 4, 9],
  [5, 6, 7, 8, 10],
]
 */
const res2 = mPrependCol(m, v);
/*
[
  [9, 1, 2, 3, 4],
  [10, 5, 6, 7, 8],
]
 */
```