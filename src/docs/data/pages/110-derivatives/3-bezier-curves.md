# Derivatives of Bézier Curves

To take derivatives of a quadratic Bézier Curve, you can use **dxV2QuadraticBezierCurve()** or **dxV3QuadraticBezierCurve()** functions.

```js
import { dxV2QuadraticBezierCurve, Vector2 } from 'mz-math';

const t = 0.6; // mast be in range [0, 1]
const startControlPoint: Vector2 = [150, 550];
const centerControlPoint: Vector2 = [400, 300];
const endControlPoint: Vector2 = [50, 550];
const decimalPlaces = 2; // optional

const result: Vector2 = dxV2QuadraticBezierCurve(
    t, 
    startControlPoint, 
    centerControlPoint, 
    endControlPoint, 
    decimalPlaces
);
```

```js
import { dxV3QuadraticBezierCurve, Vector3 } from 'mz-math';

const t = 0.6; // mast be in range [0, 1]
const startControlPoint: Vector3 = [150, 550, 0];
const centerControlPoint: Vector3 = [400, 300, 0];
const endControlPoint: Vector3 = [50, 550, 0];
const decimalPlaces = 2; // optional

const result: Vector3 = dxV3QuadraticBezierCurve(
    t, 
    startControlPoint, 
    centerControlPoint, 
    endControlPoint, 
    decimalPlaces
);
```

To take derivatives of a cubic Bézier Curve, you can use **dxV2CubicBezierCurve()** or **dxV3CubicBezierCurve()** functions.

```js
import { dxV2CubicBezierCurve, Vector2 } from 'mz-math';

const t = 0.6; // mast be in range [0, 1]
const startControlPoint: Vector2 = [100, 200];
const center1ControlPoint: Vector2 = [100, 50];
const center2ControlPoint: Vector2 = [200, 150];
const endControlPoint: Vector2 = [300, 250];
const decimalPlaces = 2; // optional

const result: Vector2 = dxV2CubicBezierCurve(
    t, 
    startControlPoint,
    center1ControlPoint,
    center2ControlPoint,
    endControlPoint, 
    decimalPlaces
);
```

```js
import { dxV3CubicBezierCurve, Vector3 } from 'mz-math';

const t = 0.6; // mast be in range [0, 1]
const startControlPoint: Vector3 = [100, 200, 0];
const center1ControlPoint: Vector3 = [100, 50, 0];
const center2ControlPoint: Vector3 = [200, 150, 0];
const endControlPoint: Vector3 = [300, 250, 0];
const decimalPlaces = 2; // optional

const result: Vector3 = dxV3CubicBezierCurve(
    t, 
    startControlPoint,
    center1ControlPoint,
    center2ControlPoint,
    endControlPoint, 
    decimalPlaces
);
```