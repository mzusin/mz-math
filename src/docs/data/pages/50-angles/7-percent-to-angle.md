## Convert Percent to Angle (in circle)

The percentToAngle() function calculates the angle corresponding to a given percentage value within a specified range of start and end angles. It considers a circle start angle as a reference and returns the resulting angle based on whether the rotation is clockwise or counterclockwise.

```js
import { percentToAngle } from 'mz-math';

const angle1 = percentToAngle(0, 0, 90); // 0 degrees
const angle2 = percentToAngle(percentToAngle(50, 0, 90)); // 45 degrees
const angle3 = percentToAngle(percentToAngle(100, 0, 90)); // 90 degrees
```

The function signature is:
```ts
const percentToAngle: (percent: number, startAngleDeg: number, endAngleDeg: number, circleStartAngle?: number) => number;
```

- **percent** (number): The percentage value between 0 and 100.
- **startAngleDeg** (number): The starting angle in degrees.
- **endAngleDeg** (number): The ending angle in degrees.
- **circleStartAngle** (number, optional): The circle start angle in degrees. The default value is 0.

