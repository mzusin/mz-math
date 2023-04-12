## Matrix Initialization Helpers

### m2x2, m3x3, and mNxM

There are helpers for creating **m2x2**, **m3x3**, and **mNxM** matrices with a default value. If no default value is specified, it will be zero.

```js
import { m2x2, m3x3, m4x4, mNxM } from 'mz-math';

const mat2x2 = m2x2(); 
/*
[
    [0, 0],
    [0, 0],
]
 */

const mat2x2_10 = m2x2(10);
/*
[
    [10, 10],
    [10, 10],
]
 */

const mat3x3 = m3x3();
/*
[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]
 */

const mat3x3_20 = m3x3(20);
/*
[
    [20, 20, 20],
    [20, 20, 20],
    [20, 20, 20],
]
 */

const mat4x4_5 = m5x5(5);
/*
[
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
    [5, 5, 5, 5],
]
 */

const matNxM = mNxM(1, 5);
/*
[
      [0, 0, 0, 0, 0],
]
 */

const matNxM = mNxM(2, 3, 1);
/*
[
      [1, 1, 1],
      [1, 1, 1],
]
 */

```

### Identity Matrix

There are helpers for creating identity matrices: **identity2**, **identity3**, and **identityN**.

```js
import { identity2, identity3, identity4, identityN } from 'mz-math';

const idt2 = identity2();
/*
[
  [1, 0],
  [0, 1],
]
 */

const idt3 = identity3();
/*
[
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
]
 */

const idt4 = identity4();
/*
[
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
]
 */

const idt5 = identityN(5);
/*
[
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1],
]
 */

```
