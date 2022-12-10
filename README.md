# A collection of TypeScript-based math helpers 🚀

This project is a collection of TypeScript math helpers and utilities for the browser and Node.js. The modular approach allows to select only the required functions. It works well with all modern bundlers and supports **tree shaking** 🌲. The library is built using immutable/pure functions.

## Table of contents
- [TypeScript Usage](#typescript-usage)
- [Browser Usage](#browser-usage)
- [Vectors](#vectors)
    - [Vectors Sum](#vectors-sum)
    - [Vectors Subtraction](#vectors-subtraction)
    - [Multiple vector by scalar](#multiply-vector-by-scalar)
    - [Get Vector Length](#get-vector-length)
    - [Set Vector Length](#set-vector-length)
    - [Normalize Vector](#normalize-vector)
    - [Dot Product](#vectors-dot-product)
    - [Cross Product](#vectors-cross-product)
- Matrix
  - [Matrix Sum](#matrix-sum)
  - [Matrix Subtraction](#matrix-subtraction)
  - [Multiply matrix by scalar](#multiply-matrix-by-scalar)
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

## Browser Usage

Any function can also be used in the browser using the **tc-math.min.js** file. All functions are located in the **TCMath** namespace:

```html
<script src="tc-math.min.js"></script>
<script>
    const sum = TCMath.v2Sum([1, 2], [3, 4]);
    console.log(sum);
</script>
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
const res = v2MulScalar([1, 2], 0.5); // x: 0.5, 1
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

It's possible to calculate vector dot product using the **v2DotProduct** and **v3DotProduct** functions. Each function receives an optional **decimalPlaces** parameter.

```js
import { v2DotProduct, v3DotProduct } from 'toolcool-math';

const res1 = v2DotProduct([1, 2], [3, 4]); // 11
const res2 = v2DotProduct([1.1234, 2.35678], [3.1265, 4.91355], 2); // 15.09

const res3 = v3DotProduct([1, 2, 3], [4, 5, 6]); // 32
const res4 = v3DotProduct([1.73845, 2.88465, 3.000111], [4.1163, 5.5501, 6.120777], 2); // 41.53
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

-----------------------------------------------

# Matrix

## Matrix Sum

To add matrices, the **m2Sum** and **m3Sum** functions are used. Each function receives an optional **decimalPlaces** parameter.

**2D Vector**
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

**3D Vector**
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

## Matrix Subtraction

To subtract matrices, the **m2Sub** and **m2Sub** functions are used. Each function receives an optional **decimalPlaces** parameter.

**2D Vector**
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

**3D Vector**
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

## Multiply matrix by scalar

You can multiply a matrix by a scalar using the **m2MulScalar** and **m3MulScalar** functions.
Each function receives an optional **decimalPlaces** parameter.

**2D Vector**

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

**3D Vector**

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