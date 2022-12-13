# A collection of TypeScript-based math helpers 🚀

[![GitHub license](https://img.shields.io/github/license/toolcool-org/toolcool-math)](https://github.com/toolcool-org/toolcool-math/blob/main/LICENSE)
![GitHub package.json version](https://img.shields.io/github/package-json/v/toolcool-org/toolcool-math)
[![npm](https://img.shields.io/npm/dw/toolcool-math)](https://www.npmjs.com/package/toolcool-math)
[![NPM](https://img.shields.io/badge/npm-math-brightgreen)](https://www.npmjs.com/package/toolcool-math)
[![Featured on Openbase](https://badges.openbase.com/js/featured/toolcool-math.svg?token=sUaswkA1YmMFk8F+JBWQZoWo4wGL7wZwyIaglD6kAlQ=)](https://openbase.com/js/toolcool-math?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Ftoolcool-org%2Ftoolcool-math)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Ftoolcool-org%2Ftoolcool-math)

This project is a collection of TypeScript math helpers and utilities for the browser and Node.js. The modular approach allows to select only the required functions. It works well with all modern bundlers and supports **tree shaking** 🌲. The library is built using immutable/pure functions.

## Table of contents
- [TypeScript Usage](#typescript-usage)
- [Browser Usage](#browser-usage)
- [Node.js Usage](#nodejs-usage)
- [Vectors](#vectors)
    - [Vectors Sum](#vectors-sum)
    - [Vectors Subtraction](#vectors-subtraction)
    - [Multiple vector by scalar](#multiply-vector-by-scalar)
    - [Divide vector by scalar](#divide-vector-by-scalar)
    - [Get Vector Length](#get-vector-length)
    - [Set Vector Length](#set-vector-length)
    - [Normalize Vector](#normalize-vector)
    - [Dot Product](#vectors-dot-product)
    - [Cross Product](#vectors-cross-product)
    - Helpers
      - [Vector Initialization Helpers](#vector-initialization-helpers)
      - [Check if 2 vectors are equal](#check-if-2-vectors-are-equal)
- [Matrix](#matrix)
  - Initialization Helpers
    - [m2x2, m3x3, and mNxM](#m2x2-m3x3-and-mnxm)
    - [Identity Matrix](#identity-matrix)
  - Manipulation Helpers
    - [Check if 2 matrices are equal](#check-if-2-matrices-are-equal)
    - [Matrix deep copy](#matrix-deep-copy)
    - [Append / prepend row](#append-or-prepend-a-row-to-a-matrix)
    - [Append / prepend column](#append-or-prepend-a-column-to-a-matrix)
    - [Delete row / column](#remove-row-or-column-from-matrix)
    - [Get column](#get-column-from-matrix)
  - [Matrix Sum](#matrix-sum)
  - [Matrix Subtraction](#matrix-subtraction)
  - [Multiply matrix by scalar](#multiply-matrix-by-scalar)
  - [Divide matrix by scalar](#divide-matrix-by-scalar)
  - [Matrix Transposition](#matrix-transposition)
  - [Matrix Multiplication](#matrix-multiplication)
  - [Multiply matrix by vector](#multiply-matrix-by-vector)
  - [Reset matrix with a default value](#reset-matrix-with-a-default-value)
  - Transformation Matrices
    - [Rotation Matrix](#rotation-matrix)
    - [Scale Matrix](#scale-matrix)
  - [Matrix Determinant](#matrix-determinant)
  - [Inverse Matrix](#inverse-matrix)
  - [Check if matrix is singular](#check-if-matrix-is-singular)
  - [Adjugate Matrix](#adjugate-matrix)
  - [Get Matrix Minor](#get-matrix-minor)
- Angles
  - [Get vector angle](#get-vector-angle)
  - [Set vector angle](#set-vector-angle)
  - [Degrees to radians](#degrees-to-radians)
  - [Radians to degrees](#radians-to-degrees)
- Format
  - [Set decimal places](#set-decimal-places)
- Convert
  - [Convert string to number](#convert-string-to-number)
- Random
  - [Get random number in range](#get-random-number-in-range)
  - [Get random integer](#get-random-integer)
  - [Get random boolean value](#get-random-boolean-value)
  - [Get random item from array](#get-random-item-from-array)
- Bézier Curve
  - [Get a point on a quadratic Bézier curve](#get-a-point-on-a-quadratic-bézier-curve)
  - [Get a point on a cubic Bézier curve](#get-a-point-on-a-cubic-bézier-curve)
- Equations
  - [System of linear equations](#system-of-linear-equations)
- Other
  - [Modulo](#modulo)
  - [Convert range](#convert-range)
  - [Do ranges overlap?](#check-if-two-ranges-overlap)
  - [Can be converted to number?](#check-if-value-can-be-converted-to-number)
- [License](#license)

## TypeScript Usage

To use the library with TypeScript, you need to install the module from npm:

```
npm install toolcool-math
```

The import any function like **v2Sum**:
```js
import { v2Sum, Vector2 } from 'toolcool-math';

const v1: Vector2 = [1, 2];
const v2: Vector2 = [3, 4];
const sum = v2Sum(v1, v2); // [4, 6]
```

-----------------------------------------------

## Browser Usage

Any function can also be used in the browser using the **tc-math.min.js** file. All functions are located in the **TCMath** namespace:

```html
<script src="tc-math.min.js"></script>
<script>
    const sum = TCMath.v2Sum([1, 2], [3, 4]);
    console.log(sum);
</script>
```

The library is also available on the [jsDelivr CND](https://www.jsdelivr.com/package/npm/toolcool-math):

```html
<script src="https://cdn.jsdelivr.net/npm/toolcool-math/dist/tc-math.min.js"></script>
<script>
    const sum = TCMath.v2Sum([1, 2], [3, 4]);
    console.log(sum);
</script>
```
-----------------------------------------------

## Node.js Usage

The library can also be used in Node.js.

```
npm install toolcool-math
```

```js
const { setDecimalPlaces } = require('toolcool-math/dist/tc-math.node.cjs');

const rounded = setDecimalPlaces(Math.PI, 2);
console.log(rounded);
```

-----------------------------------------------

# Vectors

There are the following types of vectors:
**Vector2** for a 2D vector, **Vector3** for a 3D vector, and **Vector** for the general case.

```js
import { Vector2, Vector3, Vector } from 'toolcool-math';

const v2: Vector2 = [1, 2];
const v3: Vector2 = [1, 2, 3];

const v4: Vector = [1, 2, 3, 4];
const v5: Vector = [1, 2, 3, 4, 5];
const v6: Vector = [1, 2, 3, 4, 5, 6];
```

## Vectors Sum

The following functions are used to add vectors: **v2Sum** for a 2D vector, **v3Sum** for a 3D vector, and **vSum** for the general case. Each function receives an optional **decimalPlaces** parameter.

**2D Vector**
```js
import { v2Sum, Vector2 } from 'toolcool-math';

const sum1 = v2Sum([1, 2], [3, 4]); // [4, 6]

const vector1: Vector2 = [3.12456, 4.56734];
const vector2: Vector2 = [5.12323, 6.001234];
const sum2 = v2Sum(vector1, vector2, 2); // [8.25, 10.57]
```

**3D Vector**
```js
import { v3Sum, Vector3 } from 'toolcool-math';

const sum1 = v3Sum([1, 2, 3], [3, 4, 4]); // [4, 6, 7]

const vector1: Vector3 = [3.2345, 4.0013234, 5.2523453];
const vector2: Vector3 = [6.111, 7.222, 8.333];
const sum2 = v3Sum(vector1, vector2, 2); // [9.35, 11.22, 13.59]
```

**General Case**
```js
import { vSum, Vector } from 'toolcool-math';

const v1: Vector = [1, 2, 3, 4];
const v2: Vector = [5, 6, 7, 8];
const sum = vSum(v1, v2); // [6, 8, 10, 12];
```

## Vectors Subtraction

The following functions are used to add vectors: **v2Sub** for a 2D vector, **v3Sub** for a 3D vector, and **vSub** for the general case. Each function receives an optional **decimalPlaces** parameter.

**2D Vector**
```js
import { v2Sub, Vector2 } from 'toolcool-math';

const sub1 = v2Sub([1, 2], [3, 4]); // [-2, -2]

const vector1: Vector2 = [-1.125324, -2.23453245];
const vector2: Vector2 = [3.2345, 4.3574365];
const sub2 = v2Sub(vector1, vector2, 2); // [-4.36, -6.59]
```

**3D Vector**
```js
import { v3Sub, Vector3 } from 'toolcool-math';

const sub1 = v3Sub([1, 2, 3], [3, 4, 4]); // [-2, -2, -1]

const vector1: Vector3 = [1.12754, 2.999345, 3.34653456];
const vector2: Vector3 = [7.352345, 8.35734, 9.2345];
const sub2 = v3Sub(vector1, vector2, 2); // [-6.22, -5.36, -5.89]
```

**General Case**
```js
import { vSub, Vector } from 'toolcool-math';

const v1: Vector = [1, 2, 3, 4];
const v2: Vector = [5, 6, 7, 8];
const sum = vSub(v1, v2); // [-4, -4, -4, -4]
```

## Multiply vector by scalar

The following functions are used to multiply a vector by a scalar: **v2MulScalar** for a 2D vector, **v3MulScalar** for a 3D vector, and **vMulScalar** for the general case. Each function receives an optional **decimalPlaces** parameter.

**2D Vector**
```js
import { v2MulScalar } from 'toolcool-math';

const res = v2MulScalar([1, 2], 2); // [2, 4]
const res = v2MulScalar([1, 2], 0.5); // [0.5, 1]
const res = v2MulScalar([1, 2], Math.PI); // [3.141592653589793, 6.283185307179586]
const res = v2MulScalar([1, 2], Math.PI, 2); // [3.14, 6.28]
```

**3D Vector**
```js
import { v3MulScalar } from 'toolcool-math';

const res = v3MulScalar([1, 2, 3], 2); // [2, 4, 6]
const res = v3MulScalar([1, 2, 3], 0.5); // [0.5, 1, 1.5]
const res = v3MulScalar([1, 2, 3], Math.PI); // [3.141592653589793, 6.283185307179586, 9.42477796076938]
const res = v3MulScalar([1, 2, 3], Math.PI, 2); // [3.14, 6.28, 9.42]
```

**General Case**
```js
import { vMulScalar } from 'toolcool-math';

const res = v3MulScalar([1, 2, 3, 4], 2); // [2, 4, 6, 8]
```

## Divide vector by scalar

The following functions are used to divide a vector by a scalar: **v2DivideScalar** for a 2D vector, **v3DivideScalar** for a 3D vector, and **vDivideScalar** for the general case. Each function receives an optional **decimalPlaces** parameter.

**2D Vector**
```js
import { v2DivideScalar } from 'toolcool-math';

const res = v2DivideScalar([1, 2], 2); // [0.5, 1]
const res = v2DivideScalar([1, 2], 0.5); // [2, 4]
const res = v2DivideScalar([1, 2], Math.PI); // [0.3183098861837907, 0.6366197723675814]
const res = v2DivideScalar([1, 2], Math.PI, 2); // [0.32, 0.64]
```

**3D Vector**
```js
import { v3DivideScalar } from 'toolcool-math';

const res = v3DivideScalar([1, 2, 3], 2); // [0.5, 1, 1.5]
const res = v3DivideScalar([1, 2, 3], 0.5); // [2, 4, 6]
const res = v3DivideScalar([1, 2, 3], Math.PI); // [0.3183098861837907, 0.6366197723675814, 0.954929658551372]
const res = v3DivideScalar([1, 2, 3], Math.PI, 2); // [0.32, 0.64, 0.95]
```

**General Case**
```js
import { vDivideScalar } from 'toolcool-math';

const res = vDivideScalar([1, 2, 3, 4], 2); // [0.5, 1, 1.5, 2]
```

## Get Vector Length

Vector length can be found using the **v2Length**, **v3Length**, and **vLength** functions. Each function receives an optional **decimalPlaces** parameter.

```js
import { v2Length, v3Length, vLength } from 'toolcool-math';

// 2D vector
const len1 = v2Length([1, 2]); // 2.23606797749979
const len2 = v2Length([1, 2], 2); // 2.24

// 3D vector
const len3 = v3Length([1, 2, 3]); // 3.7416573867739413
const len4 = v3Length([1, 2, 3], 2); // 3.74

// General case
const len5 = v3Length([1, 2, 3, 4]); // 5.477225575051661
const len6 = v3Length([1, 2, 3, 4], 2); // 5.48
```

## Set Vector Length

It's possible to update vector length using **v2SetLength** function. The function receives an optional **decimalPlaces** parameter.

```js
import { v2SetLength } from 'toolcool-math';

const res1 = v2SetLength([1, 2], 10); // [4.4721359549995805, 8.94427190999916]
const res2 = v2SetLength([1, 2], 10, 2); // [4.47, 8.94]
```


## Normalize Vector

It's possible to normalize vectors using the **v2Normalize**, **v3Normalize**, and **vNormalize** functions. Each function receives an optional **decimalPlaces** parameter.

```js
import { v2Normalize, v3Normalize, vNormalize } from 'toolcool-math';

// 2D vector
const res1 = v2Normalize([10, 20]); // [0.4472135954999579, 0.8944271909999159]
const res2 = v2Normalize([10, 20], 2); // [0.45, 0.89]

// 3D vector
const res3 = v3Normalize([10, 20, 30]); // [0.2672612419124244, 0.5345224838248488, 0.8017837257372731]
const res4 = v3Normalize([10, 20, 30], 2); // [0.27, 0.53, 0.8]

// General case
const res5 = vNormalize([10, 20, 30, 40]); // [0.18257418583505536, 0.3651483716701107, 0.5477225575051661, 0.7302967433402214]
const res6 = vNormalize([10, 20, 30, 40], 2); // [0.18, 0.37, 0.55, 0.73]
```

## Vectors Dot Product

It's possible to calculate vector dot product using the **v2DotProduct**, **v3DotProduct**, and **vDotProduct** functions. Each function receives an optional **decimalPlaces** parameter.

```js
import { v2DotProduct, v3DotProduct, vDotProduct } from 'toolcool-math';

// 2D vector
const res1 = v2DotProduct([1, 2], [3, 4]); // 11
const res2 = v2DotProduct([1.1234, 2.35678], [3.1265, 4.91355], 2); // 15.09

// 3D vector
const res3 = v3DotProduct([1, 2, 3], [4, 5, 6]); // 32
const res4 = v3DotProduct([1.73845, 2.88465, 3.000111], [4.1163, 5.5501, 6.120777], 2); // 41.53

// General case
const res5 = vDotProduct([1, 2, 3, 4], [5, 6, 7, 8]); // 70
const res6 = vDotProduct([1.123, 2.123, 3.123, 4.123], [5.123, 6.123, 7.123, 8.123], 1); // 74.5
```

## Vectors Cross Product

```js
import { v3CrossProduct, Vector3 } from 'toolcool-math';

const v1: Vector3 = [1, 2, 3];
const v2: Vector3 = [4, 5, 6];
const res1 = v3CrossProduct(v1, v2); // [-3, 6, -3]

const v3: Vector3 = [1.1143, 2.1205, 3.57294];
const v4: Vector3 = [4.8294, 5.0001111, 6.48634];
// round to 2 decimal places after the dot
const res2 = v3CrossProduct(v3, v4, 2); // [-4.11, 10.03, -4.67]
```

## Vector Initialization Helpers

There are helpers for creating v2, v3 and vN vectors with a default value. If no default value is specified, it will be zero.

```js
import { v2, v3, vN } from 'toolcool-math';

const v2 = v2(); // [0, 0]
const v2_10 = v2(10); // [10, 10]

const v3 = v3(); // [0, 0, 0]
const v3_10 = v3(10); // [10, 10, 10]

const v5 = vN(5); // [0, 0, 0, 0, 0]
const v5_10 = vN(5, 10); // [10, 10, 10, 10, 10]
```

## Check if 2 vectors are equal

It's possible to perform a deep comparison of two vectors using the **vEqual** function:

```js
import { vEqual } from 'toolcool-math';

const res1 = vEqual([1, 0], [1, 0]); // true
const res2 = vEqual([1, 0], [0, 1]); // false
const res3 = vEqual([0, 0, 0], [0, 0]); // false
```
-----------------------------------------------

# Matrix

There are the following types of matrices:
**Matrix2**, **Matrix3**, and **Matrix** for the general case.

**Matrix2**

```js
import { Matrix2 } from 'toolcool-math';

const m2: Matrix2 = [
  [1, 2],
];

const m2: Matrix2 = [
  [1, 2],
  [3, 4],
];

// or

const m2: Matrix2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// etc...
```

**Matrix3**

```js
import { Matrix3 } from 'toolcool-math';

const m3: Matrix3 = [
  [1, 2, 3],
];

// or

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];

// or

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// etc...
```

The generic **Matrix** type is used for all other cases:

```js
import { Matrix } from 'toolcool-math';

const m: Matrix = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
];
```

------------------------------------

## Matrix Initialization Helpers

### m2x2, m3x3, and mNxM

There are helpers for creating **m2x2**, **m3x3**, and **mNxM** matrices with a default value. If no default value is specified, it will be zero.

```js
import { m2x2, m3x3, mNxM } from 'toolcool-math';

const mat2x2 = m2x2(); 
/*
[
    [0, 0],
    [0, 0],
]
 */

const mat2x2_10 = m2x2(10);
/*
[
    [10, 10],
    [10, 10],
]
 */

const mat3x3 = m3x3();
/*
[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]
 */

const mat3x3_20 = m3x3(20);
/*
[
    [20, 20, 20],
    [20, 20, 20],
    [20, 20, 20],
]
 */

const matNxM = mNxM(1, 5);
/*
[
      [0, 0, 0, 0, 0],
]
 */

const matNxM = mNxM(2, 3, 1);
/*
[
      [1, 1, 1],
      [1, 1, 1],
]
 */

```

### Identity Matrix

There are helpers for creating identity matrices: **identity2**, **identity3**, and **identityN**.

```js
import { identity2, identity3, identityN } from 'toolcool-math';

const idt2 = identity2();
/*
[
  [1, 0],
  [0, 1],
]
 */

const idt3 = identity3();
/*
[
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
]
 */

const idt4 = identityN(4);
/*
[
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
]
 */

```

-------------------------------------

## Manipulation Helpers

### Check if 2 matrices are equal

It's possible to perform a deep comparison of two matrices using the **mEqual** function:

```js
import { mEqual } from 'toolcool-math';

const res1 = mEqual(
        [
          [0, 0],
          [0, 0],
        ],
        [
          [0, 0],
          [0, 0],
        ]); // true

const res2 = mEqual(
        [
          [1, 0],
          [0, 0],
        ],
        [
          [0, 0],
          [0, 1],
        ]); // false
```

### Matrix Deep Copy

There are 3 function for matrices deep copy: **m2DeepCopy** for 2D matrices, **m3DeepCopy** for 3D matrices, and **mDeepCopy** for the general case:

```js
import { Matrix2, m2DeepCopy } from 'toolcool-math';

const m2: Matrix2 = [
  [3, 5],
  [-7, 2],
];
const copyM2 = m2DeepCopy(m2);
```

```js
import { Matrix3, m3DeepCopy } from 'toolcool-math';

const m2: Matrix3 = [
  [3, 5, 1],
  [-7, 2, 6],
];
const copyM3 = m2DeepCopy(m3);
```

```js
import { Matrix, mDeepCopy } from 'toolcool-math';

const m: Matrix = [
  [1, 0, 1, 2, 4],
  [1, 7, 8, 6, 12],
];
const copy = mDeepCopy(m);
```

### Append or prepend a row to a matrix

```js
import { Matrix2, Vector2, m2AppendRow, m2PrependRow } from 'toolcool-math';

const m2: Matrix2 = [
  [3, 5],
  [-7, 2],
];
const v2: Vector2 = [3, 4];
const res1 = m2AppendRow(m2, v2);
/*
[
  [3, 5],
  [-7, 2],
  [3, 4]
]
 */

const res2 = m2PrependRow(m2, v2);
/*
[
  [3, 4],
  [3, 5],
  [-7, 2],
]
 */
```

```js
import { Matrix3, Vector3, m3AppendRow, m3PrependRow } from 'toolcool-math';

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];
const v3: Vector3 = [7, 8, 9];
const res1 = m3AppendRow(m3, v3);
/*
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
 */
const res2 = m3PrependRow(m3, v3);
/*
[
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
]
 */
```

```js
import { Matrix, Vector, mAppendRow, mPrependRow } from 'toolcool-math';

const m: Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
const v: Vector = [9, 10, 11, 12];
const res1 = mAppendRow(m, v);
/*
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
 */
const res2 = mPrependRow(m, v);
/*
[
  [9, 10, 11, 12],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
]
 */
```

### Append or prepend a column to a matrix

```js
import { Matrix, Vector, mAppendCol, mPrependCol } from 'toolcool-math';

const m: Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
const v: Vector = [9, 10];
const res1 = mAppendCol(m, v);
/*
[
  [1, 2, 3, 4, 9],
  [5, 6, 7, 8, 10],
]
 */
const res2 = mPrependCol(m, v);
/*
[
  [9, 1, 2, 3, 4],
  [10, 5, 6, 7, 8],
]
 */
```

### Remove row or column from matrix

**Delete last row**

```js
import { mDelLastRow } from 'toolcool-math';

const res = mDelLastRow(
        [
          [3, 5],
          [-7, 2],
        ]
);
/*
[
    [3, 5],
]
 */
```

**Delete first row**

```js
import { mDelFirstRow } from 'toolcool-math';

const res = mDelFirstRow(
        [
          [3, 5],
          [-7, 2],
        ]
);
/*
[
    [-7, 2],
]
 */
```

**Delete last column**

```js
import { mDelLastColumn } from 'toolcool-math';

const res = mDelLastColumn(
        [
          [3, 5],
          [-7, 2],
        ]
);
/*
[
    [3],
    [-7],
]
 */
```

**Delete first column**

```js
import { mDelFirstColumn } from 'toolcool-math';

const res = mDelFirstColumn(
        [
          [3, 5],
          [-7, 2],
        ]
);
/*
[
    [5],
    [2],
]
 */
```

## Get column from matrix

```js
import { Matrix, mGetFirstColumn, mGetLastColumn, mGetColumn } from 'toolcool-math';

const m: Matrix = [
  [1, 0, 1, 1],
  [1, 0, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 1, -1],
];

const firstColumn = mGetFirstColumn(m); // [1, 1, 0, 0]
const lastColumn = mGetLastColumn(m); // [1, 1, 1, -1]
const col2 = mGetColumn(m, 2); // [1, 1, 1, 1] - column at index 2 
```

-----------------------------------------------

## Matrix Sum

The following functions are used to add matrices: **m2Sum** for a 2D matrices, **m3Sum** for a 3D matrices, and **mSum** for the general case. Each function receives an optional **decimalPlaces** parameter.

**2D Matrix**

```js
import { m2Sum, Matrix2 } from 'toolcool-math';

const matrix1: Matrix2 = [
  [1, 2],
  [3, 4],
];

const matrix2: Matrix2 = [
  [5, 6],
  [7, 8],
];

const sum = m2Sum(matrix1, matrix2); 
/*
[
  [6, 8],
  [10, 12],
]
 */
```

**3D Matrix**
```js
import { m3Sum, Matrix3 } from 'toolcool-math';

const matrix1: Matrix3 = [
  [1, 2, 10],
  [3, 4, 20],
];

const matrix2: Matrix3 = [
  [5, 6, 30],
  [7, 8, 40],
];

const sum = m3Sum(matrix1, matrix2);
/*
[
  [6, 8, 40],
  [10, 12, 60],
]
 */
```

**General Case**
```js
import { mSum, Matrix } from 'toolcool-math';

const matrix1: Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

const matrix2: Matrix = [
  [9,  10, 11, 12],
  [13, 14, 15, 16],
];

const sum = mSum(matrix1, matrix2);
/*
[
  [10, 12, 14, 16],
  [18, 20, 22, 24],
]
 */
```

## Matrix Subtraction

The following functions are used to subtract matrices: **m2Sub** for a 2D matrices, **m3Sub** for a 3D matrices, and **mSub** for the general case. Each function receives an optional **decimalPlaces** parameter.

**2D Matrix**
```js
import { m2Sub, Matrix2 } from 'toolcool-math';

const matrix1: Matrix2 = [
  [1, 2],
  [3, 4],
];

const matrix2: Matrix2 = [
  [5, 6],
  [7, 8],
];

const sub = m2Sub(matrix1, matrix2); 
/*
[
  [-4, -4],
  [-4, -4],
]
 */
```

**3D Matrix**
```js
import { m2Sub, Matrix3 } from 'toolcool-math';

const matrix1: Matrix3 = [
  [1, 2, 10],
  [3, 4, 20],
];

const matrix2: Matrix3 = [
  [5, 6, 30],
  [7, 8, 40],
];

const sub = m2Sub(matrix1, matrix2);
/*
[
  [-4, -4, -20],
  [-4, -4, -20],
]
 */
```

**General Case**

```js
import { mSub, Matrix } from 'toolcool-math';

const matrix1: Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

const matrix2: Matrix = [
  [9,  10, 11, 12],
  [13, 14, 15, 16],
];

const sum = mSub(matrix1, matrix2);
/*
[
    [-8, -8, -8, -8],
    [-8, -8, -8, -8],
]
 */
```

## Multiply matrix by scalar

You can multiply a matrix by a scalar using the **m2MulScalar**, **m3MulScalar**, or **mMulScalar** functions. Each function receives an optional **decimalPlaces** parameter.

**2D Matrix**

```js
import { m2MulScalar, Matrix2 } from 'toolcool-math';

const m2: Matrix2 = [
    [1, 2],
    [3, 4],
];

const res = m2MulScalar(m2, 5); 
/*
[
    [5, 10],
    [15, 20],
]
 */
```

```js
import { m2MulScalar, Matrix2 } from 'toolcool-math';

const m2: Matrix2 = [
  [1.12345, 12.66746776],
  [15.74432, -12.345345],
];

const res = m2MulScalar(m2, 10, 2); // 2 decimal places
/*
[
    [11.23, 126.67],
    [157.44, -123.45],
]
 */
```

**3D Matrix**

```js
import { m3MulScalar, Matrix3 } from 'toolcool-math';

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];

const res = m3MulScalar(m3, 2); 
/*
[
    [2, 4, 6],
    [8, 10, 12],
]
 */
```

```js
import { m3MulScalar, Matrix3 } from 'toolcool-math';

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];

const res = m3MulScalar(m3, 1.5123123, 1); // 1 decimal place
/*
[
  [1.5, 3, 4.5],
  [6, 7.6, 9.1],
]
 */
```

------------------------


## Divide matrix by scalar

You can multiply a matrix by a scalar using the **m2DivideScalar**, **m3DivideScalar**, or **mDivideScalar** functions. Each function receives an optional **decimalPlaces** parameter.

**2D Matrix**

```js
import { m2DivideScalar, Matrix2 } from 'toolcool-math';

const m2: Matrix2 = [
    [1, 2],
    [3, 4],
];

const res = m2DivideScalar(m2, 5); 
/*
[
    [0.2, 0.4],
    [0.6, 0.8],
]
 */
```

```js
import { m2DivideScalar, Matrix2 } from 'toolcool-math';

const m2: Matrix2 = [
  [1.12345, 12.66746776],
  [15.74432, -12.345345],
];

const res = m2DivideScalar(m2, 10, 2); // 2 decimal places
/*
[
    [0.01, 0.13],
    [0.16, -0.12],,
]
 */
```

**3D Matrix**

```js
import { m3DivideScalar, Matrix3 } from 'toolcool-math';

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];

const res = m3DivideScalar(m3, 2); 
/*
[
    [0.5, 1, 1.5],
    [2, 2.5, 3],
]
 */
```

```js
import { m3DivideScalar, Matrix3 } from 'toolcool-math';

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];

const res = m3DivideScalar(m3, 1.5123123, 1); // 1 decimal place
/*
[
  [0.7, 1.3, 2],
  [2.6, 3.3, 4],
]
 */
```

**General Case**

```js
import { mDivideScalar, Matrix } from 'toolcool-math';

const matrix: Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

const res = mDivideScalar(matrix, 5);
/*
[
    [0.2, 0.4, 0.6, 0.8],
    [1, 1.2, 1.4, 1.6],
]
 */
```

## Matrix Transposition

You can transpose a matrix using the **m2Transpose**, **m3Transpose**, or **mTranspose** functions.

**2D Matrix**

```js
import { m2Transpose, Matrix2 } from 'toolcool-math';

const m2: Matrix2 = [
  [-1, 5],
  [Math.PI, 3],
];

const res = m2Transpose(m2); 
/*
[
    [-1, Math.PI],
    [5, 3],
]
 */
```

**3D Matrix**

```js
import { m3Transpose, Matrix3 } from 'toolcool-math';

const m3: Matrix3 = [
  [1, 3, 7],
  [-2, 0, 5],
];

const res = m3Transpose(m3); 
/*
[
    [1, -2],
    [3, 0],
    [7, 5],
]
 */
```

**General Case**

```js
import { mTranspose, Matrix } from 'toolcool-math';

const matrix: Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

const res = mTranspose(matrix);
/*
[
    [1, 5],
    [2, 6],
    [3, 7],
    [4, 8],
]
 */
```

## Matrix Multiplication

You can multiply matrices using the **mMul** function. The function receives an optional **decimalPlaces** parameter.

```js
import { mMul, Matrix3, Matrix2 } from 'toolcool-math';

const matrix1: Matrix3 = [
    [0, 3, 5],
    [5, 5, 2],
];

const matrix2: Matrix2 = [
    [3, 4],
    [3, -2],
    [4, -2],
];

const res = mMul(matrix1, matrix2);

/*
[
    [29, -16],
    [38, 6],
]
 */
```

```js
import { mMul, Matrix2 } from 'toolcool-math';

const matrix1: Matrix2 = [
  [2.092345, -2.2345234],
  [5.56745, 3.235479],
];

const matrix2: Matrix2 = [
  [-1.46874567, 4.23453245],
  [7.234505, -6.93245],
];

const res = mMul(matrix1, matrix2, 2); // round to 2 decimal places

/*
[
    [-19.24, 24.35],
    [15.23, 1.15],
]
 */
```

## Multiply matrix by vector

You can multiply matrix by vector using the **mMulVector** function. The function receives an optional **decimalPlaces** parameter.

```js
import { mMulVector, Matrix3 } from 'toolcool-math';

const matrix: Matrix3 = [
    [0, 3, 5],
    [5, 5, 2],
];

const vector: Vector3 = [3, 4, 3];

const res = mMulVector(matrix, vector); // [27, 41]
```

## Reset matrix with a default value

It is possible to reset all matrix values with some default value. If no default value is specified, it will be **zero**.

**2D Matrix**

```js
import { Matrix2, m2Reset } from 'toolcool-math';

const m2: Matrix2 = [
  [1, 2],
  [3, 4],
];

const res = m2Reset(m2); 
/*
[
  [0, 0],
  [0, 0],
]
 */
```

```js
import { Matrix2, m2Reset } from 'toolcool-math';

const m2: Matrix2 = [
  [1, 2],
  [3, 4],
];

const res = m2Reset(m2, 10); 
/*
[
  [10, 10],
  [10, 10],
]
 */
```

**3D Matrix**

```js
import { Matrix3, m3Reset } from 'toolcool-math';

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];

const res = m3Reset(m3); 
/*
[
  [0, 0],
  [0, 0],
]
 */
```

```js
import { Matrix3, m3Reset } from 'toolcool-math';

const m3: Matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];

const res = m3Reset(m3, 1.5);
/*
[
  [1.5, 1.5],
  [1.5, 1.5],
]
 */
```

**General Case**

```js
import { Matrix, m3Reset } from 'toolcool-math';

const m: Matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
];

const res = m3Reset(m); 
/*
[
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]
 */
```

```js
import { Matrix, m3Reset } from 'toolcool-math';

const m: Matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
];

const res = m3Reset(m, 50);
/*
[
  [50, 50, 50, 50, 50],
  [50, 50, 50, 50, 50],
]
 */
```

----------------------------------------

## Transformation Matrices

## Rotation Matrix

**2D rotation matrix**

It's possible to get a 2D rotation matrix for a given angle in radians as follows:

```js
import { m2Rotation, Matrix2, Matrix3 } from 'toolcool-math';

// Rotation of an angle 90deg about the origin.
const mat1: Matrix2 = m2Rotation(Math.PI/2, 3); // 3 decimal places

/*
[
    [Math.cos(Math.PI/2), -Math.sin(Math.PI/2)],
    [Math.sin(Math.PI/2), Math.cos(Math.PI/2)],
];
 */

// Rotation of an angle 90deg about the origin in homogeneous coordinates.
const mat2: Matrix3 = m2RotationH(Math.PI/2, 3); // 3 decimal places
/*
[
    [Math.cos(angleRad), -Math.sin(angleRad), 0],
    [Math.sin(angleRad), Math.cos(angleRad), 0],
    [0, 0, 1],
];
 */
```

It is also possible to get the actual rotated vector using the **v2Rotate** and **v2RotateH** functions.  Each function supports an optional **decimalPlaces** parameter.

```js
import { Vector2, Vector3, v2Rotate, v2RotateH } from 'toolcool-math';

// vector rotated by 90 degrees around the origin
const rotatedVector1: Vector2 = v2Rotate(Math.PI/2, [10, 20], 3); // 3 decimal places

// vector rotated by 90 degrees around the origin in homogeneous coordinates
const rotatedVector2: Vector3 = v2RotateH(Math.PI/2, [10, 20, 1], 3); // 3 decimal places
```

**3D rotation matrices**

It's possible to get the following 3D rotation matrices:

```js
import { m3RotationX, m3RotationY, m3RotationZ } from 'toolcool-math';

// rotation matrix around the X axis
const rmat3x = m3RotationX(Math.PI/2);

// rotation matrix around the Y axis
const rmat3y = m3RotationY(Math.PI/2);

// rotation matrix around the Z axis
const rmat3z = m3RotationZ(Math.PI/2); 
```

It is also possible to get the actual rotated vector using the following functions:

```js
import { Vector3, v3RotateX, v3RotateY, v3RotateZ } from 'toolcool-math';

// rotation around the X axis
const rotatedVector1: Vector3 = v3RotateX(Math.PI/2, [10, 20, 30]);

// rotation around the Y axis
const rotatedVector2: Vector3 = v3RotateY(Math.PI/2, [10, 20, 30]);

// rotation around the Z axis
const rotatedVector3: Vector3 = v3RotateZ(Math.PI/2, [10, 20, 30]);
```

-----------------------------------------------

## Scale Matrix

**2D scale matrix**

It's possible to get a 2D scale matrix for a given scale vector as follows:

```js
import { m2Scale } from 'toolcool-math';

const smat2 = m2Scale([2, 4]); // scale matrix with 2x and 4y
```

It is also possible to get the actual scaled vector using the **v2Scale** function:

```js
import { Vector2, v2Scale } from 'toolcool-math';

// scale the vector [10, 20] with [2, 4] scale vector
const scaledVector: Vector2 = v2Scale([2, 4], [10, 20]); 
```

**3D scale matrix**

It's possible to get a 3D scale matrix for a given scale vector as follows:

```js
import { m3Scale } from 'toolcool-math';

const smat3 = m3Scale([2, 4, 6]); // scale matrix with 2x, 4y, and 6z
```

It is also possible to get the actual scaled vector using the **v3Scale** function:

```js
import { Vector3, v3Scale } from 'toolcool-math';

// scale the vector [10, 20, 30] with [2, 4, 6] scale vector
const scaledVector: Vector3 = v3Scale([2, 4, 6], [10, 20, 30]); 
```

-----------------------------------------------

## Matrix Determinant

The determinant can be calculated for any square matrix using the **m2Determinant** function for a 2x2 matrix, using the **m3Determinant** function for a 3x3 matrix, or using **mDeterminant** for the general case.

Calculating the determinant for a 2x2 matrix:

```js
import { Matrix2, m2Determinant } from 'toolcool-math';

const m2x2: Matrix2 = [
  [5, 3],
  [-1, 4],
];

const d = m2Determinant(m2x2); // 23
```

Calculating the determinant for a 3x3 matrix:

```js
import { Matrix3, m3Determinant } from 'toolcool-math';

const m3x3: Matrix3 = [
  [4, -1, 1],
  [4, 5, 3],
  [-2, 0, 0],
];

const d = m3Determinant(m3x3); // 16
```

Calculating the determinant for a 4x4 matrix or above:

```js
import { Matrix, mDeterminant } from 'toolcool-math';

const m4x4: Matrix = [
  [4, 3, 2, 2],
  [0, 1, -3, 3],
  [0, -1, 3, 3],
  [0, 3, 1, 1]
];

const d = mDeterminant(m4x4); // -240
```

-----------------------------------------------

## Inverse Matrix

To inverse matrices, you can use the **m2Inverse**, **m3Inverse**, or **mInverse** functions. Each function supports an optional **decimalPlaces** parameter. If matrix is not invertible, the functions return **null**.

**2x2 matrix**

```js
import { Matrix2, m2Inverse } from 'toolcool-math';

const m2x2: Matrix2 = [
  [3, 5],
  [-7, 2],
];

const inverted: Matrix2|null = m2Inverse(m2x2, 3); // round to 3 decimal places
/*
[
    [0.049, -0.122],
    [0.171, 0.073],
]
 */
```

**3x3 matrix**

```js
import { Matrix3, m3Inverse } from 'toolcool-math';

const m3x3: Matrix3 = [
  [-1, -2, 2],
  [2, 1, 1],
  [3, 4, 5]
];

const inverted: Matrix3|null = m3Inverse(m3x3, 2); // round to 2 decimal places
/*
[
    [0.04, 0.78, -0.17],
    [-0.30, -0.48, 0.22],
    [0.22, -0.09, 0.13]
]
 */
```

**3x3 matrix or above**

```js
import { Matrix, mInverse } from 'toolcool-math';

const m4x4: Matrix = [
  [1, 1, 1, -1],
  [1, 1, -1, 1],
  [1, -1, 1, 1],
  [-1, 1, 1, 1],
];

const inverted: Matrix|null = mInverse(m4x4); 
/*
[
    [0.25, 0.25, 0.25, -0.25],
    [0.25, 0.25, -0.25, 0.25],
    [0.25, -0.25, 0.25, 0.25],
    [-0.25, 0.25, 0.25, 0.25],
]
 */
```

-----------------------------------------------

### Check if matrix is singular

```js
import { Matrix, isSingularMatrix } from 'toolcool-math';

const m: Matrix = [
  [3, 5],
  [-7, 2],
];

const isSingular = isSingularMatrix(m); // false
```

```js
import { Matrix, isSingularMatrix } from 'toolcool-math';

const m: Matrix = [
  [2, 4, 6],
  [2, 0, 2],
  [6, 8, 14],
];

const isSingular = isSingularMatrix(m); // true
```

-----------------------------------------------

## Adjugate Matrix

To adjugate matrices, you can use the **m2Adjugate**, **m3Adjugate**, or **mAdjugate** functions. Each function supports an optional **decimalPlaces** parameter. If matrix can't be  adjugated, the functions return **null**.

**2x2 matrix**

```js
import { Matrix2, m2Adjugate } from 'toolcool-math';

const m2x2: Matrix2 = [
  [3, 5],
  [-7, 2],
];

const adj: Matrix2 | null = m2Adjugate(m2x2);

/*
[
    [2, -5],
    [7, 3],
]
 */
```

**3x3 matrix**

```js
import { Matrix3, m3Adjugate } from 'toolcool-math';

const m3x3: Matrix3 = [
  [3, 5, 1],
  [-7, 2, 5],
  [1, 2, 3],
];

const adj: Matrix3 | null = m3Adjugate(m3x3);

/*
[
    [-4, -13, 23],
    [26, 8, -22],
    [-16, -1, 41],
]
 */
```

**4x4 matrix or above**

```js
import { Matrix, mAdjugate } from 'toolcool-math';

const m4x4: Matrix = [
  [1, 1, 1, -1],
  [1, 1, -1, 1],
  [1, -1, 1, 1],
  [-1, 1, 1, 1],
];

const adj: Matrix | null = mAdjugate(m4x4);

/*
[
    [-4, -4, -4, 4],
    [-4, -4, 4, -4],
    [-4, 4, -4, -4],
    [4, -4, -4, -4],
]
 */
```

-----------------------------------------------

## Get Matrix Minor

```js
import { Matrix, mMinor } from 'toolcool-math';

const m: Matrix = [
  [4, 3, 2, 2],
  [0, 1, -3, 3],
  [0, -1, 3, 3],
  [0, 3, 1, 1],
];

// get minor for the row = 0 and column = 0
const minor: Matrix = mMinor(m, 0, 0); // -60
```

-----------------------------------------------

# Angles

## Get vector angle

The **getV2Angle** function returns the angle **in radians** between the positive x-axis and the ray from (0, 0) to the vector (x, y). It supports an optional **decimalPlaces** parameter.

```js
import { getV2Angle } from 'toolcool-math';

const angle1 = getV2Angle([10, 20]); // 1.1071487177940904 radians
const angle2 = getV2Angle([10, 20], 2); // 1.11 radians
```

## Set vector angle

If a 2D vector is given, change it to have the new angle (in radians). This function supports an optional **decimalPlaces** parameter.

```js
import { setV2Angle } from 'toolcool-math';

const updatedVector1 = setV2Angle([10, 20], 1.22); // [7.684152489413291, 20.99889998355732]
const updatedVector2 = setV2Angle([10, 20], 1.22, 2); // [7.68, 21]
```

## Degrees to radians

```js
import { degreesToRadians } from 'toolcool-math';

const res1 = degreesToRadians(90); // 1.5707963267948966
const res2 = degreesToRadians(90, 2); // 1.57
```

## Radians to degrees

```js
import { radiansToDegrees } from 'toolcool-math';

const res = radiansToDegrees(1.5708); // 90.00021045914971
const res = radiansToDegrees(1.5708, 0); // 90
const res = radiansToDegrees(3.14159, 3); // 180
const res = radiansToDegrees(4.71239, 3); // 270
```

-----------------------------------------------

# Format

## Set Decimal Places

This helper allows to format a number to show a selected number of decimal places.

```js
import { setDecimalPlaces } from 'toolcool-math';

const res = setDecimalPlaces(1.2345, 2); // 1.23
const res = setDecimalPlaces(1.2399, 2); // 1.24
const res = setDecimalPlaces(1.2399, 0); // 1
```

The result of this function is a number (not a string), so sometimes fewer decimal places will be displayed after rounding:

```js
const res = setDecimalPlaces(1.239999, 4); // 1.2400 = 1.24
```

-----------------------------------------------

# Convert

## Convert string to number

This function converts a numeric string to a number. If the string is not a number, it returns the provided default value.

```js
import { stringToNumber } from 'toolcool-math';

const res = stringToNumber('10.1234', 10); // 10.1234
const res = stringToNumber(undefined, 10); // 10
const res = stringToNumber(null, 10); // 10
const res = stringToNumber('aaa', 10); // 10
```

-----------------------------------------------

# Random

## Get random number in range

This function returns a random number in the range [min, max]. It supports an optional **decimalPlaces** parameter.

```js
import { getRandom } from 'toolcool-math';

const res1 = getRandom(10, 100); // 93.57877355999018
const res2 = getRandom(10, 100, 2); // 80.28
```

## Get random integer 

This function returns a random integer number in the range [min, max].

```js
import { getRandomInt } from 'toolcool-math';

const res = getRandomInt(0, 100); // 63
```

## Get random boolean value

```js
import { getRandomBoolean } from 'toolcool-math';

const res = getRandomBoolean(); // true or false
```

## Get random item from array

```js
import { getRandomItemFromArray } from 'toolcool-math';

const item1 = getRandomItemFromArray([1,2,3,4,5]); // 2
const item2 = getRandomItemFromArray(['a', 'b', 'c']); // 'a'
const item3 = getRandomItemFromArray([{ test: 1 }, { test: 2 }, { test: 3 }]); // { test: 3 }
```

-----------------------------------------------

# Bézier Curve

## Get a point on a quadratic Bézier curve

Get a point on a quadratic Bézier curve as a function of time, where t is in the range [0, 1].

**2D Vector**

```js
import { v2QuadraticBezierCurve } from 'toolcool-math';

const v2 = v2QuadraticBezierCurve(
        0.5,
        [0, 100],
        [50, 0],
        [100, 100]
); // [50, 50]

const v2 = v2QuadraticBezierCurve(
        0,
        [0, 100],
        [50, 0],
        [100, 100]
); // [0, 100]

const v2 = v2QuadraticBezierCurve(
        1,
        [0, 100],
        [50, 0],
        [100, 100]
); // [100, 100]
```

**3D Vector**

```js
import { v3QuadraticBezierCurve } from 'toolcool-math';

const v3 = v3QuadraticBezierCurve(
        0.5,
        [0, 100, 0],
        [50, 0, 0],
        [100, 100, 0]
); // [50, 50, 0]

const v3 = v3QuadraticBezierCurve(
        0,
        [0, 100, 0],
        [50, 0, 0],
        [100, 100, 0]
); // [0, 100, 0]

const v3 = v3QuadraticBezierCurve(
        1,
        [0, 100, 0],
        [50, 0, 0],
        [100, 100, 0]
); // [100, 100, 0]
```

## Get a point on a cubic Bézier curve

Get a point on a cubic Bézier curve as a function of time, where t is in the range [0, 1].

**2D Vector**

```js
import { v2CubicBezierCurve } from 'toolcool-math';

const v2 = v2CubicBezierCurve(
        0.5,
        [0, 100],
        [0, 0],
        [100, 0],
        [100, 100]
); // [50, 25]

const v2 = v2CubicBezierCurve(
        0,
        [0, 100],
        [0, 0],
        [100, 0],
        [100, 100]
); // [0, 100]

const v2 = v2CubicBezierCurve(
        1,
        [0, 100],
        [0, 0],
        [100, 0],
        [100, 100]
); // [100, 100]
```

**3D Vector**

```js
import { v3CubicBezierCurve } from 'toolcool-math';

const v3 = v3CubicBezierCurve(
        0.5,
        [0, 100, 0],
        [0, 0, 0],
        [100, 0, 0],
        [100, 100, 0]
); // [50, 25, 0]

const v3 = v3CubicBezierCurve(
        0,
        [0, 100, 0],
        [0, 0, 0],
        [100, 0, 0],
        [100, 100, 0]
); // [0, 100, 0]

const v3 = v3CubicBezierCurve(
        1,
        [0, 100, 0],
        [0, 0, 0],
        [100, 0, 0],
        [100, 100, 0]
); // [100, 100, 0]
```

-----------------------------------------------

# Equations

## System of linear equations

**System of 2 linear equations**

Using the **equationSystem2** function, you can solve a system of 2 linear equations. It receives **2 vectors** of equation parameters and an optional **decimalPlaces** parameter.

If the system of equations has no solution, then **null** is returned.

For example:
```js
import { equationSystem2, Vector2, Vector3 } from 'toolcool-math';

// 3x + 2y = 7 
// -6x + 6y = 6

const equation1: Vector3 = [3, 2, 7];
const equation2: Vector3 = [-6, 6, 6];
const result: Vector2|null = equationSystem2(equation1, equation2); // [1, 2] i.e. x=1, y=2
```

**System of 3 linear equations**

Using the **equationSystem3** function, you can solve a system of 3 linear equations. It receives **3 vectors** of equation parameters and an optional **decimalPlaces** parameter.

If the system of equations has no solution, then **null** is returned.

For example:
```js
import { equationSystem3, Vector3, Vector } from 'toolcool-math';

// 2x + y + 2z = -2
// -2x + 2y -z = -5
// 4x + y + 2x = 0

const equation1: Vector = [2, 1, 2, -2];
const equation2: Vector = [-2, 2, -1, -5];
const equation3: Vector = [4, 1, 2, 0];
const result: Vector3|null = equationSystem3(equation1, equation2, equation3); // [1, -2, -1] i.e. x=1, y=-2, z=-1
```

**System of N linear equations**

Using the **equationSystemN** function, you can solve a system of N linear equations. It receives a matrix of equation parameters, and an optional **decimalPlaces** parameter.

If the system of equations has no solution, then **null** is returned.

For example:
```js
import { equationSystem, Vector } from 'toolcool-math';

/*
y + z - 2w = -3
x + 2y - z = 2
2x + 4y + z - 3w = -2
x - 4y - 7z - w = -19
 */

const parameters: Matrix = [
  [0, 1, 1, -2, -3],
  [1, 2, -1, 0, 2],
  [2, 4, 1, -3, -2],
  [1, -4, -7, -1, -19],
];

const result: Vector|null = equationSystemN(parameters, 2); // round to 2 decimal places

// The result: [-1, 2, 1, 3] i.e. x = -1, y = 2, z = 1, w = 3
```

-----------------------------------------------

# Other

## Modulo

Calculate the modulo for positive or negative numbers.

```js
import { mod } from 'toolcool-math';

const res1 = mod(-21, 4); // 3
const res2 = mod(7, 3); // 1
```

## Convert range

Converting a number from the range [a,b] to the range [c,d].

```js
import { convertRange } from 'toolcool-math';

// convert the value 0.5 from the range [0,1] to the range [100,200]
const res = convertRange(0.5, 0, 1, 100, 200); // 150
```

## Check if two ranges overlap

```js
import { doRangesOverlap } from 'toolcool-math';

// [0,1] and [100,200] don't overlap
const res1 = doRangesOverlap(0, 1, 100, 200); // false

// [0,1] and [0.5, 1.5] overlap
const res2 = doRangesOverlap(0, 1, 0.5, 1.5); // true
```

## Check if value can be converted to number

```js
import { isNumber } from 'toolcool-math';

const res = isNumber('12'); // true
const res = isNumber(12.5); // true
const res = isNumber('0'); // true
const res = isNumber(0); // true

const res = isNumber('aaa'); // false
const res = isNumber(null); // false
const res = isNumber(undefined); // false
const res = isNumber(Infinity); // false
```

-----------------------------------------------

## License
[MIT license](https://github.com/toolcool-org/toolcool-math/blob/main/LICENSE)

It can be used **for free** in any personal or commercial project :gift: 