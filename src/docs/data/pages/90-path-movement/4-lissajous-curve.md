# Lissajous curve

```js
import { lissajousCurve, Vector2, getRandom } from 'mz-math';

const m = 0;
const p = 0;
const t = 1;

const k = getRandom(0, Math.PI * 2); // [0, 360]
const n = getRandom(0, Math.PI * 2); // [0, 360]

const A = getRandom(0, 100);  // [0, 100] - width
const B = getRandom(0, 100);  // [0, 100] - height

const newPosition: Vector2 = mzMath.lissajousCurve(
    A, // width
    B, // height
    t,
    k,
    n,
    m,
    p
);

/*
Parametric equation
f(t) = A * cos(k * t - m)
f(t) = B * cos(n * t - p)
 */
```

[Example](https://github.com/mzusin/mz-math/blob/main/examples/lissajous-curves/lissajous-curves-canvas.html)