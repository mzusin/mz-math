# Get column from matrix

```js
import { Matrix, mGetFirstColumn, mGetLastColumn, mGetColumn } from 'mz-math';

const m: Matrix = [
  [1, 0, 1, 1],
  [1, 0, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 1, -1],
];

const firstColumn = mGetFirstColumn(m); // [1, 1, 0, 0]
const lastColumn = mGetLastColumn(m); // [1, 1, 1, -1]
const col2 = mGetColumn(m, 2); // [1, 1, 1, 1] - column at index 2 
```