## Get Vector Normal

```js
import { v2GetNormal, Vector2 } from 'mz-math';

const vector1: Vector2 = [10, 20];
const vector2: Vector2 = [20, 30];
const decimalPlaces = 2; // optional

const res: Vector2 = v2GetNormal(vector1, vector2, decimalPlaces); // [-10, 10]
```
