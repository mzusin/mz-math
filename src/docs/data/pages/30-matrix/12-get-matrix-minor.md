# Get Matrix Minor

```js
import { Matrix, mMinor } from 'mz-math';

const m: Matrix = [
  [4, 3, 2, 2],
  [0, 1, -3, 3],
  [0, -1, 3, 3],
  [0, 3, 1, 1],
];

// get minor for the row = 0 and column = 0
const minor: Matrix = mMinor(m, 0, 0); // -60
```