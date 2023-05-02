# Check if value can be converted to number

```js
import { isNumber } from 'mz-math';

const res = isNumber('12'); // true
const res = isNumber(12.5); // true
const res = isNumber('0'); // true
const res = isNumber(0); // true

const res = isNumber('aaa'); // false
const res = isNumber(null); // false
const res = isNumber(undefined); // false
const res = isNumber(Infinity); // false
```
