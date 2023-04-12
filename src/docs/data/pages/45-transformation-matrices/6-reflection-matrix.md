# Reflection Matrix

**2D reflection matrix**

It's possible to get a 2D reflection matrices as follows:

```js
import { 
    m2ReflectionOrigin, m2ReflectionOriginH,
    m2ReflectionX, m2ReflectionXH, 
    m2ReflectionY, m2ReflectionYH,
    m2ReflectionYX, m2ReflectionYmX, 
    Matrix2 
} from 'mz-math';

// reflection about the origin in non-homogeneous coordinates
const mat0: Matrix2 = m2ReflectionOrigin();
/*
[
    [-1, 0],
    [0, -1],
];
 */


// reflection about the origin in homogeneous coordinates
const mat0: Matrix3 = m2ReflectionOriginH();
/*
[
    [-1, 0, 0],
    [0, -1, 0],
    [0, 0, 1],
];
 */

// reflection in the x-axis in non-homogeneous coordinates
const mat1: Matrix2 = m2ReflectionX();
/*
[
    [1, 0],
    [0, -1],
];
 */

// reflection in the x-axis in homogeneous coordinates
const mat1: Matrix3 = m2ReflectionXH();
/*
[
    [1, 0, 0],
    [0, -1, 0],
    [0, 0, 1],
];
 */

// reflection in the y-axis in non-homogeneous coordinates
const mat2: Matrix2 = m2ReflectionY();
/*
[
    [-1, 0],
    [0, 1],
];
 */

// reflection in the y-axis in homogeneous coordinates
const mat2: Matrix3 = m2ReflectionYH();
/*
[
    [-1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
];
 */

// reflection about y=x  in non-homogeneous coordinates
const mat3: Matrix2 = m2ReflectionYX();
/*
[
    [-1, 0],
    [0, 1],
];
 */

// reflection about y=-x in non-homogeneous coordinates
const mat3: Matrix2 = m2ReflectionYmX();
/*
[
    [0, -1],
    [-1, 0],
];
 */
```

**3D reflection matrix**

It's possible to get a 3D reflection matrices as follows:

```js
import { 
  m3ReflectionOrigin, m3ReflectionOriginH, 
  m3ReflectionYZ, m3ReflectionYZH,
  m3ReflectionXZ, m3ReflectionXZH,
  m3ReflectionXY, m3ReflectionXYH,
  Matrix3, Matrix4 } from 'mz-math';

// reflection about the origin in non-homogeneous coordinates
const mat0: Matrix3 = m3ReflectionOrigin();
/*
[
    [-1, 0, 0],
    [0, -1, 0],
    [0, 0, -1],
];
 */

// reflection about the origin in homogeneous coordinates
const mat0: Matrix4 = m3ReflectionOriginH();
/*
[
    [-1, 0, 0, 0],
    [0, -1, 0, 0],
    [0, 0, -1, 0],
    [0, 0, 0, 1],
];
 */

// Reflection relative to YZ plane - in non-homogeneous coordinates
const mat2: Matrix3 = m3ReflectionYZ();
/*
[
    [-1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
];
 */

// Reflection relative to YZ plane - in homogeneous coordinates
const mat2: Matrix4 = m3ReflectionYZH();
/*
[
    [-1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
];
 */

// Reflection relative to XZ plane - in non-homogeneous coordinates
const mat2: Matrix3 = m3ReflectionXZ();
/*
[
    [1, 0, 0],
    [0, -1, 0],
    [0, 0, 1],
];
 */

// Reflection relative to XZ plane - in homogeneous coordinates
const mat2: Matrix4 = m3ReflectionXZH();
/*
[
    [1, 0, 0, 0],
    [0, -1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
];
 */

// Reflection relative to XY plane - in non-homogeneous coordinates
const mat2: Matrix3 = m3ReflectionXY();
/*
[
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, -1],
];
 */

// Reflection relative to XY plane - in homogeneous coordinates
const mat2: Matrix4 = m3ReflectionXYH();
/*
[
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, -1, 0],
    [0, 0, 0, 1],
];
 */
```