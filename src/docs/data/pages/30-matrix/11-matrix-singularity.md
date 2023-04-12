# Check if matrix is singular

```js
import { Matrix, isSingularMatrix } from 'mz-math';

const m: Matrix = [
  [3, 5],
  [-7, 2],
];

const isSingular = isSingularMatrix(m); // false
```

```js
import { Matrix, isSingularMatrix } from 'mz-math';

const m: Matrix = [
  [2, 4, 6],
  [2, 0, 2],
  [6, 8, 14],
];

const isSingular = isSingularMatrix(m); // true
```
