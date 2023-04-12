## Vectors Cross Product

```js
import { v3CrossProduct, Vector3 } from 'mz-math';

const v1: Vector3 = [1, 2, 3];
const v2: Vector3 = [4, 5, 6];
const res1 = v3CrossProduct(v1, v2); // [-3, 6, -3]

const v3: Vector3 = [1.1143, 2.1205, 3.57294];
const v4: Vector3 = [4.8294, 5.0001111, 6.48634];
// round to 2 decimal places after the dot
const res2 = v3CrossProduct(v3, v4, 2); // [-4.11, 10.03, -4.67]
```
