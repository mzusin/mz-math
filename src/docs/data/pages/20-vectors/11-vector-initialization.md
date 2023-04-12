## Vector Initialization Helpers

There are helpers for creating v2, v3 and vN vectors with a default value. If no default value is specified, it will be zero.

```js
import { v2, v3, v4, vN } from 'mz-math';

const v2 = v2(); // [0, 0]
const v2_10 = v2(10); // [10, 10]

const v3 = v3(); // [0, 0, 0]
const v3_10 = v3(10); // [10, 10, 10]

const v4 = v4(); // [0, 0, 0, 0]
const v4_10 = v4(10); // [10, 10, 10, 10]

const v5 = vN(5); // [0, 0, 0, 0, 0]
const v5_10 = vN(5, 10); // [10, 10, 10, 10, 10]
```

**Initialize vector using polar coordinates**

```js
import { Vector2 } from 'mz-math';

const distance = 10;
const angleRad = Math.PI/4;
const v2: Vector2 = v2FromPolarCoords(distance, angleRad);
```