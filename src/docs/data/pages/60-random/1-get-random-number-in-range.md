# Get random number in range

This function returns a random number in the range [min, max]. It supports an optional **decimalPlaces** parameter.

```js
import { getRandom } from 'mz-math';

const res1 = getRandom(10, 100); // 93.57877355999018
const res2 = getRandom(10, 100, 2); // 80.28
```