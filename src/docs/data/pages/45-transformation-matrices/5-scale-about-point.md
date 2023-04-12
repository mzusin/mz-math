# Scale about an arbitrary pivot point P

It's possible to scale a point [x, y] (in homogeneous coordinates) around the given pivot point as follows:

```js
import { Vector3, m2ScaleAtPointH, m2ScaleAtPointHMatrix } from 'mz-math';

const scaleVector: Vector3 = [2, 4, 1]; // in homogeneous coordinates
const transformOrigin = [100, 100, 1]; // in homogeneous coordinates
const point: Vector3 = [150, 150, 1]; // [x, y, 1]
const decimalPlaces = 2; // optional

// get the new vector after the scale
const res: Vector3 = m2ScaleAtPointH(
    scaleVector,
    transformOrigin,
    point,
    decimalPlaces
);

// it's also possible to get the appropriate scale matrix
const mat3: Matrix3 = m2ScaleAtPointHMatrix(
    scaleVector,
    transformOrigin,
    decimalPlaces
);
```