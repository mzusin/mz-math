# Reset matrix with a default value

It is possible to reset all matrix values with some default value. If no default value is specified, it will be **zero**.

**2D Matrix**

```js
import { Matrix2, m2Reset } from 'mz-math';

const m2: Matrix2 = [
  [1, 2],
  [3, 4],
];

const res = m2Reset(m2); 
/*
[
  [0, 0],
  [0, 0],
]
 */
```

```js
import { Matrix2, m2Reset } from 'mz-math';

const m2: Matrix2 = [
  [1, 2],
  [3, 4],
];

const res = m2Reset(m2, 10); 
/*
[
  [10, 10],
  [10, 10],
]
 */
```

**3D Matrix**

```js
import { Matrix3, m3Reset } from 'mz-math';

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];

const res = m3Reset(m3); 
/*
[
  [0, 0, 0],
  [0, 0, 0],
]
 */
```

```js
import { Matrix3, m3Reset } from 'mz-math';

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];

const res = m3Reset(m3, 1.5);
/*
[
  [1.5, 1.5, 1.5],
  [1.5, 1.5, 1.5],
]
 */
```

**General Case**

```js
import { Matrix, m3Reset } from 'mz-math';

const m: Matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
];

const res = m3Reset(m); 
/*
[
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]
 */
```

```js
import { Matrix, m3Reset } from 'mz-math';

const m: Matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
];

const res = m3Reset(m, 50);
/*
[
  [50, 50, 50, 50, 50],
  [50, 50, 50, 50, 50],
]
 */
```
