# Check if two ranges overlap

```js
import { doRangesOverlap } from 'mz-math';

// [0,1] and [100,200] don't overlap
const res1 = doRangesOverlap(0, 1, 100, 200); // false

// [0,1] and [0.5, 1.5] overlap
const res2 = doRangesOverlap(0, 1, 0.5, 1.5); // true
```
