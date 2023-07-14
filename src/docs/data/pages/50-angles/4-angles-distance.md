## Get Angles Distance

The getAnglesDistance() function calculates the distance between two angles, considering a start angle as the reference. It returns the shortest distance between the angles, taking into account both clockwise and counterclockwise directions.

```js
import { getAnglesDistance } from 'mz-math';

const distance1 = getAnglesDistance(0, 90); // 90 degrees
const distance2 = getAnglesDistance(270, 90); // 180 degrees
```

The function signature is:
```ts
const getAnglesDistance: (angle1Deg: number, angle2Deg: number, startAngleDeg?: number, decimalPlaces?: number) => number;
```

- **angle1Deg** (number): The first angle in degrees.
- **angle2Deg** (number): The second angle in degrees.
- **startAngleDeg** (number, optional): The start angle in degrees. The default value is 0.
- **decimalPlaces** (number, optional): The number of decimal places to round the result. The default value is Infinity (no rounding).


## Angles Subtraction (Angular Distance)

The getAnglesSub() function calculates the absolute difference between two angles, considering them as subtractions, and returns the result. It determines the shortest angular distance between the two angles, considering angles within the range of 0 to 360 degrees.

```js
import { getAnglesSub } from 'mz-math';

const angleDegrees1 = 315;
const angleDegrees2 = 0;
const decimalPlaces = 2; // optional

const angle1 = getAnglesSub(angleDegrees1, angleDegrees2, decimalPlaces); // 45 degrees
```

The function signature:

```ts
const getAnglesSub: (angleDegrees1: number, angleDegrees2: number, decimalPlaces?: number) => number;
```

- **angleDegrees1** (number): The first angle in degrees.
- **angleDegrees2** (number): The second angle in degrees.
- **decimalPlaces** (number, optional): The number of decimal places to round the result. The default value is Infinity (no rounding).

