# Get a point on a cubic Bézier curve

Get a point on a cubic Bézier curve as a function of time, where t is in the range [0, 1].

**2D Vector**

```js
import { v2CubicBezierCurve } from 'mz-math';

const v2 = v2CubicBezierCurve(
        0.5,
        [0, 100],
        [0, 0],
        [100, 0],
        [100, 100]
); // [50, 25]

const v2 = v2CubicBezierCurve(
        0,
        [0, 100],
        [0, 0],
        [100, 0],
        [100, 100]
); // [0, 100]

const v2 = v2CubicBezierCurve(
        1,
        [0, 100],
        [0, 0],
        [100, 0],
        [100, 100]
); // [100, 100]
```

**3D Vector**

```js
import { v3CubicBezierCurve } from 'mz-math';

const v3 = v3CubicBezierCurve(
        0.5,
        [0, 100, 0],
        [0, 0, 0],
        [100, 0, 0],
        [100, 100, 0]
); // [50, 25, 0]

const v3 = v3CubicBezierCurve(
        0,
        [0, 100, 0],
        [0, 0, 0],
        [100, 0, 0],
        [100, 100, 0]
); // [0, 100, 0]

const v3 = v3CubicBezierCurve(
        1,
        [0, 100, 0],
        [0, 0, 0],
        [100, 0, 0],
        [100, 100, 0]
); // [100, 100, 0]
```