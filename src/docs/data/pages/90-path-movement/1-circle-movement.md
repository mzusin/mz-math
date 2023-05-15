# Circle Movement

```js
import { circleMovement, Vector2 } from 'mz-math';

const center: Vector2 = [100, 100];
const radiansAngle = Math.PI/2; // Angle should be in the range [0, Math.PI]
const radius = 250; 
const newPosition: Vector2 = circleMovement(center, radiansAngle, radius);
```

[Example](https://github.com/mzusin/mz-math/blob/main/examples/circular-movement/circle-movement-3.html)

## Circle movement after mouse

```js
import { circleMovementAfterMouse, Vector2 } from 'mz-math';

const mouse = [evt.clientX, evt.clientY];
const center: Vector2 = [100, 100];
const radius = 250;

const position: Vector2 = circleMovementAfterMouse(mouse, center, radius);
```

[Example](https://github.com/mzusin/mz-math/blob/main/examples/circular-movement/circle-movement-mouse-1.html)
