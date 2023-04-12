# Rotation Matrix

**2D rotation matrix**

It's possible to get a 2D rotation matrix for a given angle in radians as follows:

```js
import { m2Rotation, Matrix2, Matrix3 } from 'mz-math';

// Rotation of an angle 90deg about the origin
let angle = Math.PI/2; // radians
let isClockwise = true; // optional
let decimalPlaces = 3; // optional
const mat1: Matrix2 = m2Rotation(angle, isClockwise, decimalPlaces);

/*
[
    [Math.cos(Math.PI/2), -Math.sin(Math.PI/2)],
    [Math.sin(Math.PI/2), Math.cos(Math.PI/2)],
];
 */

// Rotation of an angle 90deg about the origin in homogeneous coordinates
let angle = Math.PI/2; // radians
let isClockwise = true; // optional
let decimalPlaces = 3; // optional
let mat2: Matrix3 = m2RotationH(angle, isClockwise, decimalPlaces); 
/*
[
    [Math.cos(angleRad), -Math.sin(angleRad), 0],
    [Math.sin(angleRad), Math.cos(angleRad), 0],
    [0, 0, 1],
];
 */
```

It is also possible to get the actual rotated vector using the **v2Rotate** and **v2RotateH** functions. Each function supports an optional **decimalPlaces** parameter.

```js
import { Vector2, Vector3, v2Rotate, v2RotateH } from 'mz-math';

// vector rotated by 90 degrees around the origin
let angle = Math.PI/2; // radians
let vector: Vector2 = [10, 20];
let isClockwise = true; // optional
let decimalPlaces = 3; // optional
const rotatedVector1: Vector2 = v2Rotate(angle, vector, isClockwise, decimalPlaces);

// vector rotated by 90 degrees around the origin in homogeneous coordinates
let angle = Math.PI/2; // radians
let vector: Vector3 = [10, 20, 1];
let isClockwise = true; // optional
let decimalPlaces = 3; // optional
const rotatedVector2: Vector3 = v2RotateH(angle, vector, isClockwise, decimalPlaces);
```

**3D rotation matrices**

It's possible to get the following 3D rotation matrices:

**non-homogeneous coordinates**

```js
import { m3RotationX, m3RotationY, m3RotationZ, Matrix3 } from 'mz-math';

// rotation matrix around the X axis
let angle = Math.PI/2; // radians
let isClockwise = true; // optional
let decimalPlaces = 3; // optional
const rmat3x: Matrix3 = m3RotationX(angle, isClockwise, decimalPlaces);

// rotation matrix around the Y axis
let angle = Math.PI/2; // radians
let isClockwise = true; // optional
let decimalPlaces = 3; // optional
const rmat3y: Matrix3 = m3RotationY(angle, isClockwise, decimalPlaces);

// rotation matrix around the Z axis
let angle = Math.PI/2; // radians
let isClockwise = true; // optional
let decimalPlaces = 3; // optional
const rmat3z: Matrix3 = m3RotationZ(angle, isClockwise, decimalPlaces); 
```

**homogeneous coordinates**

```js
import { m3RotationXH, m3RotationYH, m3RotationZH, Matrix4 } from 'mz-math';

// rotation matrix around the X axis
let angle = Math.PI/2; // radians
let isClockwise = true; // optional
let decimalPlaces = 3; // optional
const rmat3x: Matrix4 = m3RotationXH(angle, isClockwise, decimalPlaces);

// rotation matrix around the Y axis
let angle = Math.PI/2; // radians
let isClockwise = true; // optional
let decimalPlaces = 3; // optional
const rmat3y: Matrix4 = m3RotationYH(angle, isClockwise, decimalPlaces);

// rotation matrix around the Z axis
let angle = Math.PI/2; // radians
let isClockwise = true; // optional
let decimalPlaces = 3; // optional
const rmat3z: Matrix4 = m3RotationZH(angle, isClockwise, decimalPlaces); 
```

It is also possible to get the actual rotated vector using the following functions:

```js
import { Vector3, v3RotateX, v3RotateY, v3RotateZ } from 'mz-math';

// rotation around the X axis
let angle = Math.PI/2; // radians
let vector: Vector3 = [10, 20, 30];
let isClockwise = true; // optional
let decimalPlaces = 3; // optional
const rotatedVector1: Vector3 = v3RotateX(angle, vector, isClockwise, decimalPlaces);

// rotation around the Y axis
let angle = Math.PI/2; // radians
let vector: Vector3 = [10, 20, 30];
let isClockwise = true; // optional
let decimalPlaces = 3; // optional
const rotatedVector2: Vector3 = v3RotateY(angle, vector, isClockwise, decimalPlaces);

// rotation around the Z axis
let angle = Math.PI/2; // radians
let vector: Vector3 = [10, 20, 30];
let isClockwise = true; // optional
let decimalPlaces = 3; // optional
const rotatedVector3: Vector3 = v3RotateZ(angle, vector, isClockwise, decimalPlaces);
```

