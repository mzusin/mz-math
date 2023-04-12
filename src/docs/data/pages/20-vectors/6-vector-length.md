## Get Vector Length

Vector length can be found using the **v2Length**, **v3Length**, and **vLength** functions. Each function receives an optional **decimalPlaces** parameter.

```js
import { v2Length, v3Length, vLength } from 'mz-math';

// 2D vector
const len1 = v2Length([1, 2]); // 2.23606797749979
const len2 = v2Length([1, 2], 2); // 2.24

// 3D vector
const len3 = v3Length([1, 2, 3]); // 3.7416573867739413
const len4 = v3Length([1, 2, 3], 2); // 3.74

// General case
const len5 = vLength([1, 2, 3, 4]); // 5.477225575051661
const len6 = vLength([1, 2, 3, 4], 2); // 5.48
```

## Set Vector Length

It's possible to update vector length using **v2SetLength** function. The function receives an optional **decimalPlaces** parameter.

```js
import { v2SetLength } from 'mz-math';

const res1 = v2SetLength([1, 2], 10); // [4.4721359549995805, 8.94427190999916]
const res2 = v2SetLength([1, 2], 10, 2); // [4.47, 8.94]
```
