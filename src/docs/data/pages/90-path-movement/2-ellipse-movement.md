# Ellipse Movement

```js
import { ellipseMovement, Vector2 } from 'mz-math';

const center: Vector2 = [100, 100];
const radiansAngle = Math.PI/2; // Angle should be in the range [0, Math.PI]
const radius1 = 350;
const radius2 = 150;
const newPosition: Vector2 = ellipseMovement(center, radiansAngle, radius1, radius2);
```

[Example](https://github.com/mzusin/mz-math/blob/main/examples/circular-movement/ellipse-movement-3.html)


## Ellipse movement after mouse

```js
import { ellipseMovementAfterMouse, Vector2 } from 'mz-math';

const mouse = [evt.clientX, evt.clientY];
const center: Vector2 = [100, 100];
const radii = [250, 300];

const position: Vector2 = ellipseMovementAfterMouse(mouse, center, radii);
```