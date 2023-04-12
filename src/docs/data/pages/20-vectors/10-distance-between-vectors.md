## Get distance between 2 vectors

**2D vectors**

```js
import { v2Distance, Vector2 } from 'mz-math';

const v1: Vector2 = [1, 2];
const v2: Vector2 = [4, 5];
const distance = v2Distance(v1, v2);
```

**3D vectors**

```js
import { v3Distance, Vector2 } from 'mz-math';

const v1: Vector2 = [1, 2, 3];
const v2: Vector2 = [4, 5, 6];
const distance = v3Distance(v1, v2);
```

**General case**

```js
import { vDistance, Vector } from 'mz-math';

const v1: Vector = [1, 2, 3];
const v2: Vector = [4, 5, 6];
const distance = vDistance(v1, v2);
```
