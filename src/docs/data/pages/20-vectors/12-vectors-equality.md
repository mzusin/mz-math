## Check if 2 vectors are equal

It's possible to perform a deep comparison of two vectors using the **vEqual** function:

```js
import { vEqual } from 'mz-math';

const res1 = vEqual([1, 0], [1, 0]); // true
const res2 = vEqual([1, 0], [0, 1]); // false
const res3 = vEqual([0, 0, 0], [0, 0]); // false
```