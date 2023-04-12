## Get vector angle

The **getV2Angle** function returns the angle **in radians** between the positive x-axis and the ray from (0, 0) to the vector (x, y). It supports an optional **decimalPlaces** parameter. Each function returns a result in the range [0, Math.PI].

```js
import { getV2Angle } from 'mz-math';

const angle1 = getV2Angle([10, 20]); // 1.1071487177940904 radians
const angle2 = getV2Angle([10, 20], 2); // 1.11 radians
```

## Set vector angle

If a 2D vector is given, change it to have the new angle (in radians). This function supports an optional **decimalPlaces** parameter.

```js
import { setV2Angle } from 'mz-math';

const updatedVector1 = setV2Angle([10, 20], 1.22); // [7.684152489413291, 20.99889998355732]
const updatedVector2 = setV2Angle([10, 20], 1.22, 2); // [7.68, 21]
```

