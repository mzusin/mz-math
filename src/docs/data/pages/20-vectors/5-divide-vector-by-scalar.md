## Divide vector by scalar

The following functions are used to divide a vector by a scalar: **v2DivideScalar** for a 2D vector, **v3DivideScalar** for a 3D vector, and **vDivideScalar** for the general case. Each function receives an optional **decimalPlaces** parameter.

**2D Vector**
```js
import { v2DivideScalar } from 'mz-math';

const res = v2DivideScalar([1, 2], 2); // [0.5, 1]
const res = v2DivideScalar([1, 2], 0.5); // [2, 4]
const res = v2DivideScalar([1, 2], Math.PI); // [0.3183098861837907, 0.6366197723675814]
const res = v2DivideScalar([1, 2], Math.PI, 2); // [0.32, 0.64]
```

**3D Vector**
```js
import { v3DivideScalar } from 'mz-math';

const res = v3DivideScalar([1, 2, 3], 2); // [0.5, 1, 1.5]
const res = v3DivideScalar([1, 2, 3], 0.5); // [2, 4, 6]
const res = v3DivideScalar([1, 2, 3], Math.PI); // [0.3183098861837907, 0.6366197723675814, 0.954929658551372]
const res = v3DivideScalar([1, 2, 3], Math.PI, 2); // [0.32, 0.64, 0.95]
```

**General Case**
```js
import { vDivideScalar } from 'mz-math';

const res = vDivideScalar([1, 2, 3, 4], 2); // [0.5, 1, 1.5, 2]
```