## Vectors Sum

The following functions are used to add vectors: **v2Sum** for a 2D vector, **v3Sum** for a 3D vector, and **vSum** for the general case. Each function receives an optional **decimalPlaces** parameter.

**2D Vector**
```js
import { v2Sum, Vector2 } from 'mz-math';

const sum1 = v2Sum([1, 2], [3, 4]); // [4, 6]

const vector1: Vector2 = [3.12456, 4.56734];
const vector2: Vector2 = [5.12323, 6.001234];
const sum2 = v2Sum(vector1, vector2, 2); // [8.25, 10.57]
```

**3D Vector**
```js
import { v3Sum, Vector3 } from 'mz-math';

const sum1 = v3Sum([1, 2, 3], [3, 4, 4]); // [4, 6, 7]

const vector1: Vector3 = [3.2345, 4.0013234, 5.2523453];
const vector2: Vector3 = [6.111, 7.222, 8.333];
const sum2 = v3Sum(vector1, vector2, 2); // [9.35, 11.22, 13.59]
```

**General Case**
```js
import { vSum, Vector } from 'mz-math';

const v1: Vector = [1, 2, 3, 4];
const v2: Vector = [5, 6, 7, 8];
const sum = vSum(v1, v2); // [6, 8, 10, 12];
```