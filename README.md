# A collection of TypeScript-based math helpers 🚀

This project is a collection of TypeScript math helpers and utilities for the browser and Node.js. The modular approach allows to select only the required functions. It works well with all modern bundlers and supports **tree shaking** 🌲. The library is built using immutable/pure functions.

## Table of contents
- [TypeScript Usage](#typescript-usage)
- [Browser Usage](#browser-usage)
- Vectors
    - [Vectors Sum](#vectors-sum)
    - [Vectors Subtraction](#vectors-subtraction)
    - [Multiple vector by scalar](#multiply-vector-by-scalar)
    - [Get Vector Length](#get-vector-length)
    - [Set Vector Length](#set-vector-length)
    - [Normalize Vector](#normalize-vector)
    - [Vectors Dot Product](#vectors-dot-product)
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
- [License](#license)

## TypeScript Usage

To use the library with TypeScript, you need to install the module from npm:

```
npm install toolcool-math
```

The import any function like **v2Sum**:
```js
import { v2Sum } from 'toolcool-math';

const v1 = { x: 1, y: 2 };
const v2 = { x: 3, y: 4 };
const sum = v2Sum(v1, v2); // { x: 4, y: 6 }
```

## Browser Usage

Any function can also be used in the browser using the **tc-math.min.js** file. All functions are located in the **TCMath** namespace:

```html
<script src="tc-math.min.js"></script>
<script>
    const sum = TCMath.v2Sum(
        { x: 1, y: 2 }, 
        { x: 3, y: 4 }
    );
    console.log(sum);
</script>
```

-----------------------------------------------

# Vectors

## Vectors Sum

To add vectors, the **v2Sum** and **v3Sum** functions are used. They can accept any number of vectors as input.

**2D Vector**
```js
import { v2Sum } from 'toolcool-math';

const v1 = { x: 1, y: 2 };
const v2 = { x: 3, y: 4 };
const sum = v2Sum(v1, v2); // { x: 4, y: 6 }

const v1 = { x: 1, y: 2 };
const v2 = { x: 3, y: 4 };
const v3 = { x: 5, y: 6 };
const sum = v2Sum(v1, v2, v3); // { x: 9, y: 12 }

const v1 = { x: 1, y: 2 };
const v2 = { x: 3, y: 4 };
const v3 = { x: 5, y: 6 };
const v4 = { x: 7, y: 8 };
const sum = v2Sum(v1, v2, v3, v4); // { x: 16, y: 20 }
```

**3D Vector**
```js
import { v3Sum } from 'toolcool-math';

const v1 = { x: 1, y: 2, z: 3 };
const v2 = { x: 3, y: 4, z: 4 };
const sum = v3Sum(v1, v2); // { x: 4, y: 6, z: 7 }

const v1 = { x: 1, y: 2, z: 3 };
const v2 = { x: 3, y: 4, z: 4 };
const v3 = { x: 7, y: 8, z: 9 };
const sum = v3Sum(v1, v2, v3); // { x: 11, y: 14, z: 16 }

const v1 = { x: 1, y: 2, z: 3 };
const v2 = { x: 3, y: 4, z: 4 };
const v3 = { x: 7, y: 8, z: 9 };
const v4 = { x: 10, y: 11, z: 12 };
const sum = v3Sum(v1, v2, v3, v4); // { x: 21, y: 25, z: 28 }
```

## Vectors Subtraction

To subtract vectors, the **v2Sub** and **v3Sub** functions are used. They can accept any number of vectors as input.

**2D Vector**
```js
import { v2Sub } from 'toolcool-math';

const v1 = { x: 1, y: 2 };
const v2 = { x: 3, y: 4 };
const sum = v2Sub(v1, v2); // { x: -2, y: -2 }

const v1 = { x: 1, y: 2 };
const v2 = { x: 3, y: 4 };
const v3 = { x: 5, y: 6 };
const sum = v2Sub(v1, v2, v3); // { x: -7, y: -8 }

const v1 = { x: 1, y: 2 };
const v2 = { x: 3, y: 4 };
const v3 = { x: 5, y: 6 };
const v4 = { x: 7, y: 8 };
const sum = v2Sub(v1, v2, v3, v4); // { x: -14, y: -16 }
```

**3D Vector**
```js
import { v3Sub } from 'toolcool-math';

const v1 = { x: 1, y: 2, z: 3 };
const v2 = { x: 3, y: 4, z: 4 };
const sum = v3Sub(v1, v2); // { x: -2, y: -2, z: -1 }

const v1 = { x: 1, y: 2, z: 3 };
const v2 = { x: 3, y: 4, z: 4 };
const v3 = { x: 7, y: 8, z: 9 };
const sum = v3Sub(v1, v2, v3); // { x: -9, y: -10, z: -10 }

const v1 = { x: 1, y: 2, z: 3 };
const v2 = { x: 3, y: 4, z: 4 };
const v3 = { x: 7, y: 8, z: 9 };
const v4 = { x: 10, y: 11, z: 12 };
const sum = v3Sub(v1, v2, v3, v4); // { x: -19, y: -21, z: -22 }
```

## Multiply vector by scalar

You can multiply a vector by a scalar using the **v2MulScalar** and **v3MulScalar** functions.
 Each function receives an optional **decimalPlaces** parameter.

```js
import { v2MulScalar, v3MulScalar } from 'toolcool-math';

const res = v2MulScalar({ x: 1, y: 2 }, 2); // { x: 2, y: 4 }
const res = v2MulScalar({ x: 1, y: 2 }, 0.5); // x: 0.5, y: 1
const res = v2MulScalar({ x: 1, y: 2 }, Math.PI); // { x: 3.141592653589793, y: 6.283185307179586 }
const res = v2MulScalar({ x: 1, y: 2 }, Math.PI, 2); // { x: 3.14, y: 6.28 }

const res = v3MulScalar({ x: 1, y: 2, z: 3 }, 2); // { x: 2, y: 4, z: 6 }
const res = v3MulScalar({ x: 1, y: 2, z: 3 }, 0.5); // { x: 0.5, y: 1, z: 1.5 }
const res = v3MulScalar({ x: 1, y: 2, z: 3 }, Math.PI); // { x: 3.141592653589793, y: 6.283185307179586, z: 9.42477796076938 }
const res = v3MulScalar({ x: 1, y: 2, z: 3 }, Math.PI, 2); // { x: 3.14, y: 6.28, z: 9.42 }
```

## Get Vector Length

Vector length can be found using the **v2Length** and **v3Length** functions. Each function receives an optional **decimalPlaces** parameter.

```js
const len1 = v2Length({ x: 1, y: 2 }); // 2.23606797749979
const len2 = v2Length({ x: 1, y: 2 }, 2); // 2.24

const len3 = v3Length({ x: 1, y: 2, z: 3 }); // 3.7416573867739413
const len4 = v3Length({ x: 1, y: 2, z: 3 }, 2); // 3.74
```

## Set Vector Length

It's possible to update vector length using **v2SetLength** function. The function receives an optional **decimalPlaces** parameter.

```js
const res1 = v2SetLength({ x: 1, y: 2 }, 10); // { x: 4.4721359549995805, y: 8.94427190999916 }
const res2 = v2SetLength({ x: 1, y: 2 }, 10, 2); // { x: 4.47, y: 8.94 }
```


## Normalize Vector

It's possible to normalize vectors using the **v2Normalize** and **v3Normalize** functions. Each function receives an optional **decimalPlaces** parameter.

```js
const res1 = v2Normalize({ x: 10, y: 20 }); // { x: 0.4472135954999579, y: 0.8944271909999159 }
const res2 = v2Normalize({ x: 10, y: 20 }, 2); // { x: 0.45, y: 0.89 }

const res3 = v3Normalize({ x: 10, y: 20, z: 30 }); // { x: 0.2672612419124244, y: 0.5345224838248488, z: 0.8017837257372731 }
const res4 = v3Normalize({ x: 10, y: 20, z: 30 }, 2); // { x: 0.27, y: 0.53, z: 0.8 }
```

## Vectors Dot Product

It's possible to normalize vectors using the **v2DotProduct** and **v3DotProduct** functions. Each function receives an optional **decimalPlaces** parameter.

```js
const res1 = v2DotProduct({ x: 1, y: 2 }, { x: 3, y: 4 }); // 11
const res2 = v2DotProduct({ x: 1.1234, y: 2.35678 }, { x: 3.1265, y: 4.91355 }, 2); // 15.09

const res3 = v3DotProduct({ x: 1, y: 2, z: 3 }, { x: 4, y: 5, z: 6 }); // 32
const res4 = v3DotProduct({ x: 1.73845, y: 2.88465, z: 3.000111 }, { x: 4.1163, y: 5.5501, z: 6.120777 }, 2); // 41.53
```
-----------------------------------------------

# Angles

## Get vector angle

The **getV2Angle** function returns the angle **in radians** between the positive x-axis and the ray from (0, 0) to the vector (x, y). It supports an optional **decimalPlaces** parameter.

```js
const angle1 = getV2Angle({ x: 10, y: 20 }); // 1.1071487177940904 radians
const angle2 = getV2Angle({ x: 10, y: 20 }, 2); // 1.11 radians
```

## Set vector angle

If a 2D vector is given, change it to have the new angle (in radians). This function supports an optional **decimalPlaces** parameter.

```js
const updatedVector1 = setV2Angle({ x: 10, y: 20 }, 1.22); // { x: 7.684152489413291, y: 20.99889998355732 }
const updatedVector2 = setV2Angle({ x: 10, y: 20 }, 1.22, 2); // { x: 7.68, y: 21 }
```

## Degrees to radians

```js
const res1 = degreesToRadians(90); // 1.5707963267948966
const res2 = degreesToRadians(90, 2); // 1.57
```

## Radians to degrees

```js
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
const res1 = getRandom(10, 100); // 93.57877355999018
const res2 = getRandom(10, 100, 2); // 80.28
```

## Get random integer 

This function returns a random integer number in the range [min, max].

```js
const res = getRandomInt(0, 100); // 63
```

## Get random boolean value

```js
const res = getRandomBoolean(); // true or false
```

## Get random item from array

```js
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
const v2 = v2QuadraticBezierCurve(
        0.5,
        { x: 0, y: 100 },
        { x: 50, y: 0 },
        { x: 100, y: 100 }
); // { x: 50, y: 50 }

const v2 = v2QuadraticBezierCurve(
        0,
        { x: 0, y: 100 },
        { x: 50, y: 0 },
        { x: 100, y: 100 }
); // { x: 0, y: 100 }

const v2 = v2QuadraticBezierCurve(
        1,
        { x: 0, y: 100 },
        { x: 50, y: 0 },
        { x: 100, y: 100 }
); // { x: 100, y: 100 }
```

**3D Vector**

```js
const v3 = v3QuadraticBezierCurve(
        0.5,
        { x: 0, y: 100, z: 0 },
        { x: 50, y: 0, z: 0 },
        { x: 100, y: 100, z: 0 }
); // { x: 50, y: 50, z: 0 }

const v3 = v3QuadraticBezierCurve(
        0,
        { x: 0, y: 100, z: 0 },
        { x: 50, y: 0, z: 0 },
        { x: 100, y: 100, z: 0 }
); // { x: 0, y: 100, z: 0 }

const v3 = v3QuadraticBezierCurve(
        1,
        { x: 0, y: 100, z: 0 },
        { x: 50, y: 0, z: 0 },
        { x: 100, y: 100, z: 0 }
); // { x: 100, y: 100, z: 0 }
```

## Get a point on a cubic Bézier curve

Get a point on a cubic Bézier curve as a function of time, where t is in the range [0, 1].

**2D Vector**

```js
const v2 = v2CubicBezierCurve(
        0.5,
        { x: 0, y: 100 },
        { x: 0, y: 0 },
        { x: 100, y: 0 },
        { x: 100, y: 100 }
); // { x: 50, y: 25 }

const v2 = v2CubicBezierCurve(
        0,
        { x: 0, y: 100 },
        { x: 0, y: 0 },
        { x: 100, y: 0 },
        { x: 100, y: 100 }
); // { x: 0, y: 100 }

const v2 = v2CubicBezierCurve(
        1,
        { x: 0, y: 100 },
        { x: 0, y: 0 },
        { x: 100, y: 0 },
        { x: 100, y: 100 }
); // { x: 100, y: 100 }
```

**3D Vector**

```js
const v3 = v3CubicBezierCurve(
        0.5,
        { x: 0, y: 100, z: 0 },
        { x: 0, y: 0, z: 0 },
        { x: 100, y: 0, z: 0 },
        { x: 100, y: 100, z: 0 }
); // { x: 50, y: 25, z: 0 }

const v3 = v3CubicBezierCurve(
        0,
        { x: 0, y: 100, z: 0 },
        { x: 0, y: 0, z: 0 },
        { x: 100, y: 0, z: 0 },
        { x: 100, y: 100, z: 0 }
); // { x: 0, y: 100, z: 0 }

const v3 = v3CubicBezierCurve(
        1,
        { x: 0, y: 100, z: 0 },
        { x: 0, y: 0, z: 0 },
        { x: 100, y: 0, z: 0 },
        { x: 100, y: 100, z: 0 }
); // { x: 100, y: 100, z: 0 }
```

-----------------------------------------------

# Other

## Modulo

Calculate the modulo for positive or negative numbers.

```js
const res1 = mod(-21, 4); // 3
const res2 = mod(7, 3); // 1
```

## Convert range

Converting a number from the range [a,b] to the range [c,d].

```js
// convert the value 0.5 from the range [0,1] to the range [100,200]
const res = convertRange(0.5, 0, 1, 100, 200); // 150
```

## Check if two ranges overlap

```js

// [0,1] and [100,200] don't overlap
const res1 = doRangesOverlap(0, 1, 100, 200); // false

// [0,1] and [0.5, 1.5] overlap
const res2 = doRangesOverlap(0, 1, 0.5, 1.5); // true
```

-----------------------------------------------

## License
[MIT license](https://github.com/toolcool-org/toolcool-math/blob/main/LICENSE)

It can be used **for free** in any personal or commercial project :gift: 