# Bezier Curve Extrema

**Cubic Bézier Extrema**

```js
import { v2QuadraticBezierCurveExtrema, Vector2, Vector } from 'mz-math';

const startControlPoint: Vector2 = [100, 200];
const center1ControlPoint: Vector2 = [100, 50];
const center2ControlPoint: Vector2 = [200, 150];
const endControlPoint: Vector2 = [300, 250];
const decimalPlaces = 2; // optional

const result: Vector = v2QuadraticBezierCurveExtrema(
    startControlPoint,
    center1ControlPoint,
    center2ControlPoint,
    endControlPoint, 
    decimalPlaces
);
```

**Quadratic Bézier Extrema**

```js
import { v2CubicBezierCurveExtrema, Vector2 } from 'mz-math';

const startControlPoint: Vector2 = [150, 550];
const centerControlPoint: Vector2 = [400, 300];
const endControlPoint: Vector2 = [50, 550];
const decimalPlaces = 2; // optional

const result: Vector2|null = v2CubicBezierCurveExtrema(
    startControlPoint, 
    centerControlPoint, 
    endControlPoint, 
    decimalPlaces
);
```
