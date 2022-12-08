# A collection of typescript-based math helpers

## Table of contents
- [TypeScript Usage](#typescript-usage)
- [Browser Usage](#browser-usage)
- Vectors
    - [Vectors Sum](#vectors-sum)
    - [Vector Length](#vector-length)
- Angles
  - [Get vector angle](#get-vector-angle)
- Format
  - [Set decimal places](#set-decimal-places)
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

To add vectors, the v2Sum and v3Sum functions are used. They can accept any number of vectors as input.

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
const v2 = { x: 3, y: 4, z: 4 };
const sum = v3Sum(v1, v2, v3); // { x: 11, y: 14, z: 16 }

const v1 = { x: 1, y: 2, z: 3 };
const v2 = { x: 3, y: 4, z: 4 };
const v3 = { x: 7, y: 8, z: 9 };
const v4 = { x: 10, y: 11, z: 12 };
const sum = v3Sum(v1, v2, v3, v4); // { x: 21, y: 25, z: 28 }
```

## Vector Length

Vector length can be found using the **v2Length** and **v3Length** functions. Each function receives an optional **decimalPlaces** parameter.

```js
const len1 = v2Length({ x: 1, y: 2 }); // 2.23606797749979
const len2 = v2Length({ x: 1, y: 2 }, 2); // 2.24

const len3 = v3Length({ x: 1, y: 2, z: 3 }); // 3.7416573867739413
const len4 = v3Length({ x: 1, y: 2, z: 3 }, 2); // 3.74
```

-----------------------------------------------

# Angles

## Get vector angle

The **getV2Angle** function returns the angle **in radians** between the positive x-axis and the ray from (0, 0) to the vector (x, y). It supports an optional **decimalPlaces** parameter.

```js
const angle1 = getV2Angle({ x: 10, y: 20 }); // 1.1071487177940904 radians
const angle2 = getV2Angle({ x: 10, y: 20 }, 2); // 1.11 radians
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

## License
[MIT license](https://github.com/toolcool-org/toolcool-math/blob/main/LICENSE)

It can be used **for free** in any personal or commercial project :gift: 