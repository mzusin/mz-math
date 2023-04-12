## Multiply vector by scalar

The following functions are used to multiply a vector by a scalar: **v2MulScalar** for a 2D vector, **v3MulScalar** for a 3D vector, and **vMulScalar** for the general case. Each function receives an optional **decimalPlaces** parameter.

**2D Vector**
```js
import { v2MulScalar } from 'mz-math';

const res = v2MulScalar([1, 2], 2); // [2, 4]
const res = v2MulScalar([1, 2], 0.5); // [0.5, 1]
const res = v2MulScalar([1, 2], Math.PI); // [3.141592653589793, 6.283185307179586]
const res = v2MulScalar([1, 2], Math.PI, 2); // [3.14, 6.28]
```

**3D Vector**
```js
import { v3MulScalar } from 'mz-math';

const res = v3MulScalar([1, 2, 3], 2); // [2, 4, 6]
const res = v3MulScalar([1, 2, 3], 0.5); // [0.5, 1, 1.5]
const res = v3MulScalar([1, 2, 3], Math.PI); // [3.141592653589793, 6.283185307179586, 9.42477796076938]
const res = v3MulScalar([1, 2, 3], Math.PI, 2); // [3.14, 6.28, 9.42]
```

**General Case**
```js
import { vMulScalar } from 'mz-math';

const res = v3MulScalar([1, 2, 3, 4], 2); // [2, 4, 6, 8]
```
