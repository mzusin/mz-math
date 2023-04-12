# Convert string to number

This function converts a numeric string to a number. If the string is not a number, it returns the provided default value.

```js
import { stringToNumber } from 'mz-math';

const res = stringToNumber('10.1234', 10); // 10.1234
const res = stringToNumber(undefined, 10); // 10
const res = stringToNumber(null, 10); // 10
const res = stringToNumber('aaa', 10); // 10
```
