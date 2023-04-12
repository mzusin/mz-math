# Ellipse Movement

```js
import { ellipseMovement, Vector2 } from 'mz-math';

const center: Vector2 = [100, 100];
const angle = Math.PI/2;
const radius1 = 350;
const radius2 = 150;
const newPosition: Vector2 = ellipseMovement(center, angle, radius1, radius2);
```

[Example](https://github.com/mzusin/mz-math/blob/main/examples/circular-movement/ellipse-movement-3.html)