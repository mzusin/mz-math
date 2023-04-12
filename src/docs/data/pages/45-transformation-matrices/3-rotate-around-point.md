# Rotate Around Point

It's possible to rotate a point [x, y] (in homogeneous coordinates) around the given origin as follows:

```js
import { Vector3, m2RotateAroundPointH, m2RotationAroundPointH } from 'mz-math';

const angle = Math.PI/4; // radians
const transformOrigin = [100, 100, 1]; // in homogeneous coordinates
const point: Vector3 = [150, 150, 1]; // [x, y, 1]
const isClockwise = true; // optional
const decimalPlaces = 2; // optional

// get the new position after rotation
const pos: Vector3 = m2RotateAroundPointH(
    angle, 
    transformOrigin,
    point,
    isClockwise,
    decimalPlaces
);

// it's also possible to get the appropriate rotation matrix
const mat3: Matrix3 = m2RotationAroundPointH(
    angle,
    transformOrigin,
    isClockwise,
    decimalPlaces
);
```

[Circle Movement Example](https://github.com/mzusin/mz-math/blob/main/examples/circular-movement/circle-movement-1.html)
