# Check if two matrices are equal

It's possible to perform a deep comparison of two matrices using the **mEqual** function:

```js
import { mEqual } from 'mz-math';

const res1 = mEqual(
        [
          [0, 0],
          [0, 0],
        ],
        [
          [0, 0],
          [0, 0],
        ]); // true

const res2 = mEqual(
        [
          [1, 0],
          [0, 0],
        ],
        [
          [0, 0],
          [0, 1],
        ]); // false
```