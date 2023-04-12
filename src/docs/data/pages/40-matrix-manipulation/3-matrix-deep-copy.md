# Matrix Deep Copy

There are 3 function for matrices deep copy: **m2DeepCopy** for 2D matrices, **m3DeepCopy** for 3D matrices, and **mDeepCopy** for the general case:

```js
import { Matrix2, m2DeepCopy } from 'mz-math';

const m2: Matrix2 = [
  [3, 5],
  [-7, 2],
];
const copyM2 = m2DeepCopy(m2);
```

```js
import { Matrix3, m3DeepCopy } from 'mz-math';

const m2: Matrix3 = [
  [3, 5, 1],
  [-7, 2, 6],
];
const copyM3 = m2DeepCopy(m3);
```

```js
import { Matrix, mDeepCopy } from 'mz-math';

const m: Matrix = [
  [1, 0, 1, 2, 4],
  [1, 7, 8, 6, 12],
];
const copy = mDeepCopy(m);
```