# Sine Wave Movement

```js
import { ellipseMovement, Vector2 } from 'mz-math';

const amplitude = 100; // the peak deviation of the function from zero
const frequency = 0.003; // number of cycles
const phase = 0; // starting point "shifting"
const x = 0; // changes from 0 to .... N
const newPosition: Vector2 = ellipseMovement(x, amplitude, frequency, phase);
```

[Example](https://github.com/mzusin/mz-math/blob/main/examples/wave-movement/wave-movement-1.html)