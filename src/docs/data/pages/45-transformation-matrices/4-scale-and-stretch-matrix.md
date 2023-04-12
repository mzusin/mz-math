# Scale & Stretch Matrix

**2D scale matrix**

It's possible to get a 2D scale matrix for a given scale vector as follows:

```js
import { m2Scale, m2ScaleX, m2ScaleH, m2ScaleXH, m2ScaleYH, Matrix2, Matrix3 } from 'mz-math';

// scale matrix with 2x and 4y - non-homogeneous coordinates
const mat1: Matrix2 = m2Scale([2, 4]); 
/*
[
    [2, 0],
    [0, 4],
]
 */

// scale matrix with 2x and 4y - in homogeneous coordinates
const mat1: Matrix3 = m2ScaleH([2, 4, 1]);
/*
[
    [2, 0, 0],
    [0, 4, 0],
    [0, 0, 1],
];
 */

// stretch, parallel to the x-axis - non-homogeneous coordinates
const mat2: Matrix2 = m2ScaleX(2);
/*
[
    [2, 0],
    [0, 1],
]
 */

// stretch, parallel to the x-axis - in homogeneous coordinates
const mat2: Matrix3 = m2ScaleXH(2);
/*
[
    [2, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
]
 */

// stretch, parallel to the y-axis - non-homogeneous coordinates
const mat3: Matrix2 = m2ScaleY(2);
/*
[
    [1, 0],
    [0, 2],
]
 */

// stretch, parallel to the y-axis - in homogeneous coordinates
const mat3: Matrix3 = m2ScaleYH(2);
/*
[
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 1],
]
 */
```

It is also possible to get the actual scaled vector using the **v2Scale** function:

```js
import { Vector2, v2Scale } from 'mz-math';

// scale the vector [10, 20] with [2, 4] scale vector
const scaledVector: Vector2 = v2Scale([2, 4], [10, 20]); 
```

**3D scale matrix**

It's possible to get a 3D scale matrix for a given scale vector as follows:

```js
import { m3Scale, m3ScaleH, Matrix3, Matrix4 } from 'mz-math';

// scale matrix with 2x, 4y, and 6z - non-homogeneous coordinates
const smat3: Matrix3 = m3Scale([2, 4, 6]);
/*
[
    [2, 0, 0],
    [0, 4, 0],
    [0, 0, 6],
]
 */

// scale matrix with 2x, 4y, and 6z - in homogeneous coordinates
const smat3: Matrix4 = m3ScaleH([2, 4, 6, 1]);
/*
[
    [2, 0, 0, 0],
    [0, 4, 0, 0],
    [0, 0, 6, 0],
    [0, 0, 0, 1],
]
 */
```

It is also possible to get the actual scaled vector using the **v3Scale** function:

```js
import { Vector3, v3Scale } from 'mz-math';

// scale the vector [10, 20, 30] with [2, 4, 6] scale vector
const scaledVector: Vector3 = v3Scale([2, 4, 6], [10, 20, 30]); 
```

Stretch in different directions:

```js
import { m3ScaleX, m3ScaleY, m3ScaleZ, m3ScaleXH, Matrix3, Matrix4 } from 'mz-math';

// stretch in x-direction - non-homogeneous coordinates
const mat: Matrix3 = m3ScaleX(2); 
/*
[
    [2, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
]
 */

// stretch in x-direction - in homogeneous coordinates
const mat: Matrix4 = m3ScaleXH(2);
/*
[
    [2, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
]
 */

// stretch in y-direction - non-homogeneous coordinates
const mat: Matrix3 = m3ScaleY(2); 
/*
[
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 1],
]
 */

// stretch in y-direction - in homogeneous coordinates
const mat: Matrix4 = m3ScaleYH(2);
/*
[
    [1, 0, 0, 0],
    [0, 2, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
]
 */

// stretch in z-direction - non-homogeneous coordinates
const mat: Matrix3 = m3ScaleZ(2); 
/*
[
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 2],
]
 */

// stretch in z-direction - in homogeneous coordinates
const mat: Matrix4 = m3ScaleZH(2);
/*
[
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 2, 0],
    [0, 0, 0, 1],
]
 */
```