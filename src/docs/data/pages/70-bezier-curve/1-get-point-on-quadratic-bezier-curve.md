# Get a point on a quadratic Bézier curve

Get a point on a quadratic Bézier curve as a function of time, where t is in the range [0, 1].

**2D Vector**

```js
import { v2QuadraticBezierCurve } from 'mz-math';

const decimalPlaces = 2; // optional

const v2 = v2QuadraticBezierCurve(
        0.5,
        [0, 100],
        [50, 0],
        [100, 100],
        decimalPlaces
); // [50, 50]

const v2 = v2QuadraticBezierCurve(
        0,
        [0, 100],
        [50, 0],
        [100, 100],
        decimalPlaces
); // [0, 100]

const v2 = v2QuadraticBezierCurve(
        1,
        [0, 100],
        [50, 0],
        [100, 100],
        decimalPlaces
); // [100, 100]
```

**3D Vector**

```js
import { v3QuadraticBezierCurve } from 'mz-math';

const decimalPlaces = 2; // optional

const v3 = v3QuadraticBezierCurve(
        0.5,
        [0, 100, 0],
        [50, 0, 0],
        [100, 100, 0],
        decimalPlaces
); // [50, 50, 0]

const v3 = v3QuadraticBezierCurve(
        0,
        [0, 100, 0],
        [50, 0, 0],
        [100, 100, 0],
        decimalPlaces
); // [0, 100, 0]

const v3 = v3QuadraticBezierCurve(
        1,
        [0, 100, 0],
        [50, 0, 0],
        [100, 100, 0],
        decimalPlaces
); // [100, 100, 0]
```


