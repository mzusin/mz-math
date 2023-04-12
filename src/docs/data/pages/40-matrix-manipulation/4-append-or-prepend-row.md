# Append or prepend a row to a matrix

```js
import { Matrix2, Vector2, m2AppendRow, m2PrependRow } from 'mz-math';

const m2: Matrix2 = [
  [3, 5],
  [-7, 2],
];
const v2: Vector2 = [3, 4];
const res1 = m2AppendRow(m2, v2);
/*
[
  [3, 5],
  [-7, 2],
  [3, 4]
]
 */

const res2 = m2PrependRow(m2, v2);
/*
[
  [3, 4],
  [3, 5],
  [-7, 2],
]
 */
```

```js
import { Matrix3, Vector3, m3AppendRow, m3PrependRow } from 'mz-math';

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];
const v3: Vector3 = [7, 8, 9];
const res1 = m3AppendRow(m3, v3);
/*
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
 */
const res2 = m3PrependRow(m3, v3);
/*
[
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
]
 */
```

```js
import { Matrix, Vector, mAppendRow, mPrependRow } from 'mz-math';

const m: Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
const v: Vector = [9, 10, 11, 12];
const res1 = mAppendRow(m, v);
/*
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
 */
const res2 = mPrependRow(m, v);
/*
[
  [9, 10, 11, 12],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
]
 */
```