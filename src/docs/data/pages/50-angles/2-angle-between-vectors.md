# Get angle between two vectors

The following functions can be used to find the angle between two vectors. Each function returns a result in the range [0, Math.PI].

**2D vectors:**

```js
import { getV2AngleBetween, Vector2 } from 'mz-math';

const vector1: Vector2 = [10, 20];
const vector2: Vector2 = [100, 150];
const decimalPlaces = 2; // optional
const angle = getV2AngleBetween(vector1, vector2, decimalPlaces);
```

**3D vectors:**

```js
import { getV3AngleBetween, Vector3 } from 'mz-math';

const vector1: Vector3 = [10, 20, 1];
const vector2: Vector3 = [100, 150, 1];
const decimalPlaces = 2; // optional
const angle = getV3AngleBetween(vector1, vector2, decimalPlaces);
```

**General case:**

```js
import { getVNAngleBetween, Vector } from 'mz-math';

const vector1: Vector = [10, 20, 1];
const vector2: Vector = [100, 150, 1];
const decimalPlaces = 2; // optional
const angle = getVNAngleBetween(vector1, vector2, decimalPlaces);
```
