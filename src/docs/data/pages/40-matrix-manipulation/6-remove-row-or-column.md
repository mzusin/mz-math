# Remove row or column from matrix

**Delete last row**

```js
import { mDelLastRow } from 'mz-math';

const res = mDelLastRow(
        [
          [3, 5],
          [-7, 2],
        ]
);
/*
[
    [3, 5],
]
 */
```

**Delete first row**

```js
import { mDelFirstRow } from 'mz-math';

const res = mDelFirstRow(
        [
          [3, 5],
          [-7, 2],
        ]
);
/*
[
    [-7, 2],
]
 */
```

**Delete last column**

```js
import { mDelLastColumn } from 'mz-math';

const res = mDelLastColumn(
        [
          [3, 5],
          [-7, 2],
        ]
);
/*
[
    [3],
    [-7],
]
 */
```

**Delete first column**

```js
import { mDelFirstColumn } from 'mz-math';

const res = mDelFirstColumn(
        [
          [3, 5],
          [-7, 2],
        ]
);
/*
[
    [5],
    [2],
]
 */
```
