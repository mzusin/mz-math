# Matrix

There are the following types of matrices:
**Matrix2**, **Matrix3**, and **Matrix** for the general case.

**Matrix2**

```js
import { Matrix2 } from 'mz-math';

const m2: Matrix2 = [
  [1, 2],
];

const m2: Matrix2 = [
  [1, 2],
  [3, 4],
];

// or

const m2: Matrix2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// etc...
```

**Matrix3**

```js
import { Matrix3 } from 'mz-math';

const m3: Matrix3 = [
  [1, 2, 3],
];

// or

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];

// or

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// etc...
```

**Matrix4**

```js
import { Matrix4 } from 'mz-math';

const m4: Matrix4 = [
  [1, 2, 3, 4],
];

// or

const m4: Matrix4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

// or

const m4: Matrix4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// etc...
```

The generic **Matrix** type is used for all other cases:

```js
import { Matrix } from 'mz-math';

const m: Matrix = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
```