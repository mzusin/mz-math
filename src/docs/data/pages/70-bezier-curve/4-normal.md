# Bezier Curve Normal Vector

**Cubic Bézier curve normal**

```js
import { v2CubicBezierCurveNormal, Vector2 } from 'mz-math';

const t = 0.6; // mast be in range [0, 1]
const startControlPoint: Vector2 = [100, 200];
const center1ControlPoint: Vector2 = [100, 50];
const center2ControlPoint: Vector2 = [200, 150];
const endControlPoint: Vector2 = [300, 250];
const decimalPlaces = 2; // optional

const result: Vector2 = v2CubicBezierCurveNormal(
    t, 
    startControlPoint,
    center1ControlPoint,
    center2ControlPoint,
    endControlPoint, 
    decimalPlaces
);
```

**Quadratic Bézier curve normal**

```js
import { v2QuadraticBezierCurveNormal, Vector2 } from 'mz-math';

const t = 0.6; // mast be in range [0, 1]
const startControlPoint: Vector2 = [150, 550];
const centerControlPoint: Vector2 = [400, 300];
const endControlPoint: Vector2 = [50, 550];
const decimalPlaces = 2; // optional

const result: Vector2 = v2QuadraticBezierCurveNormal(
    t, 
    startControlPoint, 
    centerControlPoint, 
    endControlPoint, 
    decimalPlaces
);
```
