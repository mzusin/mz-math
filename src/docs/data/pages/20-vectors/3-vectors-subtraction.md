## Vectors Subtraction

The following functions are used to add vectors: **v2Sub** for a 2D vector, **v3Sub** for a 3D vector, and **vSub** for the general case. Each function receives an optional **decimalPlaces** parameter.

**2D Vector**
```js
import { v2Sub, Vector2 } from 'mz-math';

const sub1 = v2Sub([1, 2], [3, 4]); // [-2, -2]

const vector1: Vector2 = [-1.125324, -2.23453245];
const vector2: Vector2 = [3.2345, 4.3574365];
const sub2 = v2Sub(vector1, vector2, 2); // [-4.36, -6.59]
```

**3D Vector**
```js
import { v3Sub, Vector3 } from 'mz-math';

const sub1 = v3Sub([1, 2, 3], [3, 4, 4]); // [-2, -2, -1]

const vector1: Vector3 = [1.12754, 2.999345, 3.34653456];
const vector2: Vector3 = [7.352345, 8.35734, 9.2345];
const sub2 = v3Sub(vector1, vector2, 2); // [-6.22, -5.36, -5.89]
```

**General Case**
```js
import { vSub, Vector } from 'mz-math';

const v1: Vector = [1, 2, 3, 4];
const v2: Vector = [5, 6, 7, 8];
const sum = vSub(v1, v2); // [-4, -4, -4, -4]
```
