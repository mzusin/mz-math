## Normalize Vector

It's possible to normalize vectors using the **v2Normalize**, **v3Normalize**, and **vNormalize** functions. Each function receives an optional **decimalPlaces** parameter.

```js
import { v2Normalize, v3Normalize, vNormalize } from 'mz-math';

// 2D vector
const res1 = v2Normalize([10, 20]); // [0.4472135954999579, 0.8944271909999159]
const res2 = v2Normalize([10, 20], 2); // [0.45, 0.89]

// 3D vector
const res3 = v3Normalize([10, 20, 30]); // [0.2672612419124244, 0.5345224838248488, 0.8017837257372731]
const res4 = v3Normalize([10, 20, 30], 2); // [0.27, 0.53, 0.8]

// General case
const res5 = vNormalize([10, 20, 30, 40]); // [0.18257418583505536, 0.3651483716701107, 0.5477225575051661, 0.7302967433402214]
const res6 = vNormalize([10, 20, 30, 40], 2); // [0.18, 0.37, 0.55, 0.73]
```
