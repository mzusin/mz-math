# Lerp

Lerp function performs a linear interpolation in the given range.
Here **x** is a value that linearly interpolates between the **start** parameter and the **end** parameter.

```js
import { lerp } from 'mz-math';

const x = 5;
const start = 0;
const end = 100;
const decimalPlaces = 2; // optional

const result = lerp(x, start, end, decimalPlaces); // 500
```

There are also versions of the lerp function for working with vectors of numbers:

**2D Vector**

```js
import { v2Lerp, Vector2 } from 'mz-math';

const x = 15;
const start: Vector2 = [0, 100];
const end: Vector2 = [50, 1000];
const decimalPlaces = 2; // optional

const result: Vector2 = v2Lerp(x, start, end, decimalPlaces);
```

**3D Vector**

```js
import { v3Lerp, Vector3 } from 'mz-math';

const x = 15;
const start: Vector3 = [0, 100, 500];
const end: Vector3 = [50, 400, 900];
const decimalPlaces = 2; // optional

const result: Vector3 = v3Lerp(x, start, end, decimalPlaces);
```

**General Case**

```js
import { vLerp, Vector } from 'mz-math';

const x = 15;
const start: Vector = [0, 100, 500, 1500];
const end: Vector = [50, 400, 900, 2000];
const decimalPlaces = 2; // optional

const result: Vector = vLerp(x, start, end, decimalPlaces);
```

There are also versions of the lerp function for working with matrices of numbers:

**2D Matrix**

```js
import { m2Lerp, Matrix2 } from 'mz-math';

const x = 15;
const start: Matrix2 = [
    [1, 2],
    [3, 4],
];
const end: Matrix2 = [
    [100, 200],
    [300, 400],
];
const decimalPlaces = 2; // optional

const result: Matrix2 = m2Lerp(x, start, end, decimalPlaces);
```

**3D Matrix**

```js
import { m3Lerp, Matrix3 } from 'mz-math';

const x = 15;
const start: Matrix3 = [
    [1, 2, 3],
    [4, 5, 6],
];
const end: Matrix3 = [
    [100, 200, 300],
    [400, 500, 600],
];
const decimalPlaces = 2; // optional

const result: Matrix3 = m3Lerp(x, start, end, decimalPlaces);
```

**General Case**

```js
import { mLerp, Matrix } from 'mz-math';

const x = 25;
const start: Matrix = [
    [1, 2, 3, 4],
    [4, 5, 6, 12],
];
const end: Matrix = [
    [100, 200, 300, 800],
    [400, 500, 600, 1200],
];
const decimalPlaces = 2; // optional

const result: Matrix = mLerp(x, start, end, decimalPlaces);
```