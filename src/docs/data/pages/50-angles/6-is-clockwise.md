## Is angle rotation clockwise?

The isClockwise() function determines whether a given pair of angles represents a clockwise rotation or not, considering a start angle as the reference.

```js
import { isClockwise } from 'mz-math';

const isClockwise1 = isClockwise(0, 90); // true
const isClockwise2 = isClockwise(90, 0); // false
const isClockwise3 = isClockwise(90, 270, 270); // false
```

The function signature is:

```ts
const isClockwise: (angle1Deg: number, angle2Deg: number, startAngleDeg?: number) => boolean;
```

- **angle1Deg** (number): The first angle in degrees.
- **angle2Deg** (number): The second angle in degrees.
- **startAngleDeg** (number, optional): The start angle in degrees. The default value is 0.

