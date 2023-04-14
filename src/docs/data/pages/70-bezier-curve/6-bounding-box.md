# Bezier Curve Bounding Box

**Cubic Bézier Bounding Box**

```js
import { v2CubicBezierBBox, Vector2 } from 'mz-math';

const startControlPoint: Vector2 = [100, 200];
const center1ControlPoint: Vector2 = [100, 50];
const center2ControlPoint: Vector2 = [200, 150];
const endControlPoint: Vector2 = [300, 250];
const decimalPlaces = 2; // optional

const result: IBBox = v2CubicBezierBBox(
    startControlPoint,
    center1ControlPoint,
    center2ControlPoint,
    endControlPoint, 
    decimalPlaces
);
```

**Quadratic Bézier Bounding Box**

```js
import { v2QuadraticBezierBBox, Vector2 } from 'mz-math';

const startControlPoint: Vector2 = [150, 550];
const centerControlPoint: Vector2 = [400, 300];
const endControlPoint: Vector2 = [50, 550];
const decimalPlaces = 2; // optional

const result: IBBox = v2QuadraticBezierBBox(
    startControlPoint, 
    centerControlPoint, 
    endControlPoint, 
    decimalPlaces
);
```

**IBBox Interface**

```ts
export interface IBBox {
    x: number; // left top corner x
    y: number; // left top corner y
    w: number;
    h: number;
    x2: number; // right bottom corner x
    y2: number; // right bottom corner y
}
```
